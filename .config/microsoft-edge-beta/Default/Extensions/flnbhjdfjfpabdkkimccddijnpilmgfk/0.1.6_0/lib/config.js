var config = {};

config.resolve = null;
config.progress = false;

config.timeout = {
  "done": null, 
  "inject": null
};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.screenshot = {
  set format (val) {app.storage.write("format", val)},
  set permission (val) {app.storage.write("permission", val)},
  get delay () {return app.storage.read("delay") !== undefined ? app.storage.read("delay") : 500},
  get quality () {return app.storage.read("quality") !== undefined ? app.storage.read("quality") : 92},
  get format () {return app.storage.read("format") !== undefined ? app.storage.read("format") : "jpeg"},
  get permission () {return app.storage.read("permission") !== undefined ? app.storage.read("permission") : false},
  set quality (val) {
    val = parseInt(val);
    if ((val + '') !== (parseInt(val) + '')) val = 92;
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    /*  */
    app.storage.write("quality", val);
  },
  set delay (val) {
    val = parseInt(val);
    if ((val + '') !== (parseInt(val) + '')) val = 500;
    if (val < 500) val = 500;
    if (val > 10000) val = 10000;
    /*  */
    app.storage.write("delay", val);
  }
};

config.get = function (name) {
  return name.split('.').reduce(function (p, c) {
    return p[c];
  }, config);
};

config.set = function (name, value) {
  function set(name, value, scope) {
    name = name.split('.');
    name.length > 1 ? set.call((scope || this)[name.shift()], name.join('.'), value) : this[name[0]] = value;
  }
  /*  */
  set(name, value, config);
};
