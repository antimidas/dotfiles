if (!config) {
  var background = {
    "port": null,
    "message": {},
    "receive": function (id, callback) {
      if (id) {
        background.message[id] = callback;
      }
    },
    "connect": function (port) {
      chrome.runtime.onMessage.addListener(background.listener); 
      /*  */
      if (port) {
        background.port = port;
        background.port.onMessage.addListener(background.listener);
        background.port.onDisconnect.addListener(function () {
          background.port = null;
        });
      }
    },
    "send": function (id, data) {
      if (id) {
        if (background.port) {
          if (background.port.name !== "webapp") {
            chrome.runtime.sendMessage({
              "method": id,
              "data": data,
              "path": "page-to-background"
            }); 
          }
        }
      }
    },
    "post": function (id, data) {
      if (id) {
        if (background.port) {
          background.port.postMessage({
            "method": id,
            "data": data,
            "port": background.port.name,
            "path": "page-to-background"
          });
        }
      }
    },
    "listener": function (e) {
      if (e) {
        for (let id in background.message) {
          if (background.message[id]) {
            if ((typeof background.message[id]) === "function") {
              if (e.path === "background-to-page") {
                if (e.method === id) {
                  background.message[id](e.data);
                }
              }
            }
          }
        }
      }
    }
  };

  var config = {};

  config.top = 0;
  config.left = 0;
  config.LOG = false;
  config.progress = false;
  
  config.img = new Image;
  config.img.crossOrigin = "Anonymous";
  
  config.style = document.createElement("style");
  config.canvas = document.createElement("canvas");
  config.context = config.canvas.getContext("2d");
  config.canvas.style.display = "none";

  config.keydown = function (e) {
    if (e.keyCode === 27 || e.key === "Escape") {
      config.progress = false;
      /*  */
      window.scrollTo(0, 0);
      window.setTimeout(function () {
        background.send("stop");
      }, 300);
    }
  };
  
  config.css = `
    .page-screenshot-scrollbar {
      width: 50px;
      height: 50px;
      top: -9999px;
      overflow: scroll;
      position: absolute;
    }

    * {
      transition: none !important;
      -moz-transition: none !important;
      -webkit-transition: none !important;

      animation-duration: 0s !important;
      -moz-animation-duration: 0s !important;
      -webkit-animation-duration: 0s !important;
  }`;

  config.filename = function () {
    const tmp = document.title || document.location.toString();
    const host = (document.location.host !== undefined ? document.location.host : "screenshot").replace("www.", '');
    const title = tmp ? tmp.replace(/[:*?"<>|\r\n]/g, '').replace(/[\t \/]+/g, '').trim().replace(/ /g, '-') : "page";
    /*  */
    return host + '-' + title;
  };

  config.scrollbar = function () {
    if (document.body.scrollHeight < window.innerHeight) return 0;
    /*  */
    const div = document.createElement("div");
    div.setAttribute("class", "page-screenshot-scrollbar");
    document.body.appendChild(div);
    /*  */
    let width = div.offsetWidth - div.clientWidth;
    if (width === 0) width = 15;
    document.body.removeChild(div);
    return width;
  };
  
  config.img.onload = function () {
    let height = window.innerHeight;
    let top = document.scrollingElement.scrollTop;
    let left = document.scrollingElement.scrollLeft;
    let scrollHeight = document.scrollingElement.scrollHeight;
    /*  */
    config.context.drawImage(this, config.img._x, config.img._y);
    if (top + height < scrollHeight) {
      if (config.progress) {
        top += height - 20;
        if (top > scrollHeight - height) top = scrollHeight - height;
        /*  */
        window.scrollTo(left, top);
        window.setTimeout(function () {
          background.send("capture", {
            "y": window.devicePixelRatio * top,
            "x": window.devicePixelRatio * left
          });
        }, config.img._delay);
      }
    } else {
      config.finalize();
    }
  };
  
  config.action = function (e) {
    if (config.LOG) console.error("> Result", e.action, e.top, e.tabId);
    /*  */
    if (e.action === "finalize") {
      config.finalize();
    } else if (e.action === "draw") {
      config.img._x = e.x;
      config.img._y = e.y;
      config.img.src = e.dataURL;
      config.img._delay = e.delay;
      config.img._format = e.format;
    } else if (e.action === "start") {
      if (config.progress) return;
      /*  */
      config.progress = true;
      config.top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
      config.left = (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
      /*  */
      window.scrollTo(0, 0);
      config.style.textContent = config.css;
      config.canvas.height = window.devicePixelRatio * document.scrollingElement.scrollHeight;
      config.canvas.width = window.devicePixelRatio * (window.innerWidth - config.scrollbar());
      /*  */
      window.setTimeout(function () {
        background.send("capture", {
          "x": 0, 
          "y": 0
        });
      }, 300);
    }
  };
  
  config.finalize = function () {
    window.scrollTo(document.scrollingElement.scrollLeft, document.scrollingElement.scrollTop);
    /*  */
    config.context.canvas.toBlob(function (blob) {
      if (blob === null) {
        if (config.LOG) console.error("> Error! the screenshot is too large!");
      } else {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        /*  */
        a.href = url;
        a.style.display = "none";
        a.download = config.filename() + '.' + (config.img._format || "jpeg");
        document.body.appendChild(a);
        a.click();
        if (config.LOG) console.error("> Saving screenshot...");
        /*  */
        window.setTimeout(function () {
          config.progress = false;
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          config.style.textContent = '';
          /*  */
          window.scrollTo(config.left, config.top);
          window.setTimeout(function () {
            background.send("done");
          }, 300);
        }, 300);
      }
    });
  };

  background.receive("action", config.action);
  document.documentElement.appendChild(config.style);
  document.addEventListener("keydown", config.keydown);
  background.connect(chrome.runtime.connect({"name": "page"}));  
}
