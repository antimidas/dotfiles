(function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=2)})({2:function(e,t,a){e.exports=a("8104")},8104:function(e,t,a){"use strict";a.r(t);var o={},n={};o.log=!1,o.force=!1,o.welcome={set lastupdate(e){n.storage.write("lastupdate",e)},get lastupdate(){return void 0!==n.storage.read("lastupdate")?n.storage.read("lastupdate"):0}},o.addon={set state(e){n.storage.write("state",e)},get state(){return void 0!==n.storage.read("state")?n.storage.read("state"):"ON"},status:function(){let e=!1;for(let t in o.options)e=o.options[t]||e;return e&&"ON"===o.addon.state}},o.hostname=function(e){let t=e.indexOf("//")+2;if(t>1){let a=e.indexOf("/",t);return a>0?e.substring(t,a):(a=e.indexOf("?",t),a>0?e.substring(t,a):e.substring(t))}return e},o.settings={set host(e){n.storage.write("privacy-tweaks-host",e)},set port(e){n.storage.write("privacy-tweaks-port",e)},set name(e){n.storage.write("privacy-tweaks-name",e)},set value(e){n.storage.write("privacy-tweaks-value",e)},set latitude(e){n.storage.write("privacy-tweaks-latitude",e)},set whitelist(e){n.storage.write("privacy-tweaks-whitelist",e)},set longitude(e){n.storage.write("privacy-tweaks-longitude",e)},get value(){return void 0!==n.storage.read("privacy-tweaks-value")?n.storage.read("privacy-tweaks-value"):0},get port(){return void 0!==n.storage.read("privacy-tweaks-port")?n.storage.read("privacy-tweaks-port"):9050},get host(){return void 0!==n.storage.read("privacy-tweaks-host")?n.storage.read("privacy-tweaks-host"):"127.0.0.1"},get name(){return void 0!==n.storage.read("privacy-tweaks-name")?n.storage.read("privacy-tweaks-name"):"Etc/Greenwich"},get whitelist(){return void 0!==n.storage.read("privacy-tweaks-whitelist")?n.storage.read("privacy-tweaks-whitelist"):""},get latitude(){return void 0!==n.storage.read("privacy-tweaks-latitude")?n.storage.read("privacy-tweaks-latitude"):51.482594},get longitude(){return void 0!==n.storage.read("privacy-tweaks-longitude")?n.storage.read("privacy-tweaks-longitude"):-.007661}},o.options={set ads(e){n.storage.write("privacy-tweaks-ads",e)},set font(e){n.storage.write("privacy-tweaks-font",e)},set webgl(e){n.storage.write("privacy-tweaks-webgl",e)},set proxy(e){n.storage.write("privacy-tweaks-proxy",e)},set webrtc(e){n.storage.write("privacy-tweaks-webrtc",e)},set canvas(e){n.storage.write("privacy-tweaks-canvas",e)},set tracking(e){n.storage.write("privacy-tweaks-tracking",e)},set timezone(e){n.storage.write("privacy-tweaks-timezone",e)},set geolocation(e){n.storage.write("privacy-tweaks-geolocation",e)},set audiocontext(e){n.storage.write("privacy-tweaks-audiocontext",e)},get ads(){return void 0!==n.storage.read("privacy-tweaks-ads")&&n.storage.read("privacy-tweaks-ads")},get font(){return void 0!==n.storage.read("privacy-tweaks-font")&&n.storage.read("privacy-tweaks-font")},get proxy(){return void 0!==n.storage.read("privacy-tweaks-proxy")&&n.storage.read("privacy-tweaks-proxy")},get webgl(){return void 0!==n.storage.read("privacy-tweaks-webgl")&&n.storage.read("privacy-tweaks-webgl")},get webrtc(){return void 0===n.storage.read("privacy-tweaks-webrtc")||n.storage.read("privacy-tweaks-webrtc")},get canvas(){return void 0===n.storage.read("privacy-tweaks-canvas")||n.storage.read("privacy-tweaks-canvas")},get timezone(){return void 0===n.storage.read("privacy-tweaks-timezone")||n.storage.read("privacy-tweaks-timezone")},get tracking(){return void 0!==n.storage.read("privacy-tweaks-tracking")&&n.storage.read("privacy-tweaks-tracking")},get geolocation(){return void 0===n.storage.read("privacy-tweaks-geolocation")||n.storage.read("privacy-tweaks-geolocation")},get audiocontext(){return void 0!==n.storage.read("privacy-tweaks-audiocontext")&&n.storage.read("privacy-tweaks-audiocontext")}},n.error=function(){return chrome.runtime.lastError},n.shortname=function(){return chrome.runtime.getManifest().short_name},n.proxy={set:function(e,t){chrome.proxy&&chrome.proxy.settings.set({value:e.value,scope:e.scope},(function(e){t&&t(e)}))}},n.notifications={id:n.shortname()+"-notifications-id",create:function(e,t){chrome.notifications&&chrome.notifications.create(n.notifications.id,{type:e.type?e.type:"basic",message:e.message?e.message:"",title:e.title?e.title:"Notifications",iconUrl:e.iconUrl?chrome.runtime.getURL(e.iconUrl):chrome.runtime.getURL("icons/logo.png")},(function(e){t&&t(e)}))}},n.popup={port:null,message:{},receive:function(e,t){e&&(n.popup.message[e]=t)},send:function(e,t){e&&chrome.runtime.sendMessage({data:t,method:e,path:"background-to-popup"},n.error)},post:function(e,t){e&&n.popup.port&&n.popup.port.postMessage({data:t,method:e,path:"background-to-popup"})}},n.privacy={network:{webrtc:{set:function(e,t){chrome.privacy&&chrome.privacy.network&&(chrome.privacy.network.webRTCIPHandlingPolicy&&chrome.privacy.network.webRTCIPHandlingPolicy.set(e.alpha,(function(){chrome.privacy.network.webRTCIPHandlingPolicy.get({},(function(e){t&&t(e)}))})),chrome.privacy.network.webRTCMultipleRoutesEnabled&&chrome.privacy.network.webRTCMultipleRoutesEnabled.set(e.beta,(function(){chrome.privacy.network.webRTCMultipleRoutesEnabled.get({},(function(e){t&&t(e)}))})))}}}},n.button={icon:function(e,t,a,o){if(t&&"object"===typeof t){var n={path:t};e&&(n["tabId"]=e),chrome.action.setIcon(n,(function(e){o&&o(e)}))}else if(a&&"object"===typeof a){n={imageData:a};e&&(n["tabId"]=e),chrome.action.setIcon(n,(function(e){o&&o(e)}))}else{n={path:{16:"../icons/logo.png",32:"../icons/logo.png",48:"../icons/logo.png",64:"../icons/logo.png"}};e&&(n["tabId"]=e)}}},n.storage={local:{},read:function(e){return n.storage.local[e]},update:function(e){n.session&&n.session.load(),chrome.storage.local.get(null,(function(t){n.storage.local=t,e&&e("update")}))},write:function(e,t,a){let o={};o[e]=t,n.storage.local[e]=t,chrome.storage.local.set(o,(function(e){console.log(o),a&&a(e)}))},load:function(e){const t=Object.keys(n.storage.local);t&&t.length?e&&e("cache"):n.storage.update((function(){e&&e("disk")}))}},n.on={management:function(e){chrome.management.getSelf(e)},uninstalled:function(e){chrome.runtime.setUninstallURL(e,(function(){}))},installed:function(e){chrome.runtime.onInstalled.addListener((function(t){n.storage.load((function(){e(t)}))}))},startup:function(e){chrome.runtime.onStartup.addListener((function(t){n.storage.load((function(){e(t)}))}))},connect:function(e){chrome.runtime.onConnect.addListener((function(t){n.storage.load((function(){e&&e(t)}))}))},storage:function(e){chrome.storage.onChanged.addListener((function(t,a){n.storage.update((function(){e&&e(t,a)}))}))},message:function(e){chrome.runtime.onMessage.addListener((function(t,a,o){return n.storage.load((function(){e(t,a,o)})),!0}))}},n.page={port:null,sender:{port:{}},message:{},receive:function(e,t){e&&(n.page.message[e]=t)},post:function(e,t,a){e&&(a?n.page.sender.port[a]&&n.page.sender.port[a].postMessage({data:t,method:e,path:"background-to-page"}):n.page.port&&n.page.port.postMessage({data:t,method:e,path:"background-to-page"}))},send:function(e,t,a,o){e&&chrome.tabs.query({},(function(r){chrome.runtime.lastError;if(r&&r.length){var i={method:e,data:t||{},path:"background-to-page"};r.forEach((function(e){e&&(i.data.tabId=e.id,i.data.top=e.url?e.url:"",i.data.title=e.title?e.title:"",null!==a&&void 0!==a?a===e.id&&(null!==o&&void 0!==o?chrome.tabs.sendMessage(e.id,i,{frameId:o},n.error):chrome.tabs.sendMessage(e.id,i,n.error)):chrome.tabs.sendMessage(e.id,i,n.error))}))}}))}},n.tab={open:function(e,t,a,o){var n={url:e,active:void 0===a||a};void 0!==t&&"number"===typeof t&&(n.index=t+1),chrome.tabs.create(n,(function(e){o&&o(e)}))},query:{index:function(e){chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.runtime.lastError;t&&t.length?e(t[0].index):e(void 0)}))},active:function(e){chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.runtime.lastError;t&&t.length?e(t[0]):e(void 0)}))},all:function(e,t){chrome.tabs.query(e||{},(function(e){chrome.runtime.lastError;e&&e.length?t(e):t(void 0)}))}},reload:function(e,t,a){e?t&&"object"===typeof t?chrome.tabs.reload(e,t,(function(e){a&&a(e)})):chrome.tabs.reload(e,{bypassCache:void 0!==t&&t},(function(e){a&&a(e)})):chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.runtime.lastError;e&&e.length&&(t&&"object"===typeof t?chrome.tabs.reload(e[0].id,t,(function(e){a&&a(e)})):chrome.tabs.reload(e[0].id,{bypassCache:void 0!==t&&t},(function(e){a&&a(e)})))}))}},n.version=function(){return chrome.runtime.getManifest().version},n.homepage=function(){const e=chrome.runtime.id;return"https://microsoftedge.microsoft.com/addons/detail/"+e},navigator.webdriver||n.on.installed((function(e){n.on.management((function(t){"normal"===t.installType&&n.tab.query.index((function(t){var a=void 0!==e.previousVersion&&e.previousVersion!==n.version(),r=a&&parseInt((Date.now()-o.welcome.lastupdate)/864e5)>45;if("install"===e.reason||"update"===e.reason&&r){var i=(e.previousVersion?"&p="+e.previousVersion:"")+"&type="+e.reason,s=n.homepage()+"?v="+n.version()+i;n.tab.open(s,t,"install"===e.reason),o.welcome.lastupdate=Date.now()}}))}))})),n.on.message((function(e,t){if(e){if("popup-to-background"===e.path)for(var a in n.popup.message)n.popup.message[a]&&"function"===typeof n.popup.message[a]&&a===e.method&&n.popup.message[a](e.data);if("page-to-background"===e.path)for(var a in n.page.message)if(n.page.message[a]&&"function"===typeof n.page.message[a]&&a===e.method){var o=e.data||{};t&&(o.frameId=t.frameId,t.tab&&(void 0===o.tabId&&(o.tabId=t.tab.id),void 0===o.title&&(o.title=t.tab.title?t.tab.title:""),void 0===o.top&&(o.top=t.tab.url?t.tab.url:t.url?t.url:""))),n.page.message[a](o)}}})),n.on.connect((function(e){e&&(e.name&&e.name in n&&(n[e.name].port=e),e.onDisconnect.addListener((function(e){n.storage.load((function(){e&&e.name&&e.name in n&&(n[e.name].port=null)}))})),e.onMessage.addListener((function(e){n.storage.load((function(){if(e&&e.path&&e.port&&e.port in n&&e.path===e.port+"-to-background")for(var t in n[e.port].message)n[e.port].message[t]&&"function"===typeof n[e.port].message[t]&&t===e.method&&n[e.port].message[t](e.data)}))})))})),n.netrequest={display:{badge:{text:async function(e){if(chrome.declarativeNetRequest);}}},engine:{rules:{get:function(){return new Promise((e,t)=>{n.storage.load((function(){chrome.declarativeNetRequest&&("dynamic"===n.netrequest.rules.scope?chrome.declarativeNetRequest.getDynamicRules().then(e).catch(t):chrome.declarativeNetRequest.getSessionRules().then(e).catch(t))}))})},update:function(e){return new Promise((t,a)=>{n.storage.load((function(){chrome.declarativeNetRequest&&("dynamic"===n.netrequest.rules.scope?chrome.declarativeNetRequest.updateDynamicRules(e).then(t).catch(a):chrome.declarativeNetRequest.updateSessionRules(e).then(t).catch(a))}))})}}},rules:{stack:[],set scope(e){n.storage.write("rulescope",e)},get scope(){return void 0!==n.storage.read("rulescope")?n.storage.read("rulescope"):"dynamic"},update:async function(){let e=n.netrequest.rules.stack;if(e&&e.length){let t=e.map((function(e){return e.id}));t&&t.length&&await n.netrequest.engine.rules.update({addRules:e,removeRuleIds:t})}},push:function(e){if(e&&e.action&&e.condition){let t=void 0!==e.id?e.id:n.netrequest.rules.find.next.available.id();if(t){let a=n.netrequest.rules.stack.filter(e=>e.id===t);a&&0===a.length&&n.netrequest.rules.stack.push({id:t,action:e.action,condition:e.condition,priority:void 0!==e.priority?e.priority:1})}}},find:{next:{available:{id:function(){let e=1,t=n.netrequest.rules.stack;if(t&&t.length){let a=t.map((function(e){return e.id})).sort((function(e,t){return e-t}));if(a&&a.length)for(let t in a)a[t]>-1&&a[t]===e&&e++}return e}}}},remove:{by:{ids:async function(e){e&&e.length&&(await n.netrequest.engine.rules.update({removeRuleIds:e}),n.netrequest.rules.stack=await n.netrequest.engine.rules.get())},action:{type:async function(e,t){if(e){let a=await n.netrequest.engine.rules.get();if(a&&a.length){let o=a.filter((function(a){if(a&&a.action&&a.action.type===e){if(!t)return!0;if(t in a.action)return!0}return!1})).map((function(e){return e.id}));await n.netrequest.rules.remove.by.ids(o)}}}}}}}},n.ads={update:async function(e){let t="",a=[],r=[],i=o.options.ads&&"ON"===o.addon.state;if(i){await n.netrequest.display.badge.text(e),r=n.whitelist.domains;for(let e in n.ads.filter.types)n.ads.filter.types[e]&&a.push(e);for(let e=0;e<n.ads.filter.regexps.length;e++)t=n.ads.filter.regexps[e],n.netrequest.rules.push({action:{type:"block"},condition:{regexFilter:t,resourceTypes:a}});r.length&&n.netrequest.rules.push({action:{type:"allow"},condition:{resourceTypes:a,initiatorDomains:r}})}await n.netrequest.rules.update()},filter:{types:{ping:!0,font:!1,media:!0,image:!0,other:!0,object:!0,script:!0,sub_frame:!0,websocket:!0,csp_report:!0,stylesheet:!1,main_frame:!1,xmlhttprequest:!0},regexps:["\\%22ad","\\&adfmt\\=","\\.atdmt\\.","\\.innovid\\.","\\.fwmrm\\.net","\\.chartbeat\\.","\\.serving-sys\\.","\\.doubleclick\\.","\\.googleadservices\\.","\\.scorecardresearch\\.","\\.googletagservices\\.","\\.googlesyndication\\.","[\\=\\&\\_\\-\\.\\/\\?\\s]ad[\\=\\&\\_\\-\\.\\/\\?\\s]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]ads[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adid[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adsid[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]darla[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adunit[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]pagead[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]pubads[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adhost[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adview[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adsales[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adsystem[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adserver[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]adservice[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]advertise[\\=\\&\\_\\-\\.\\/\\?\\s\\d]","[\\=\\&\\_\\-\\.\\/\\?\\s\\d]googleads[\\=\\&\\_\\-\\.\\/\\?\\s\\d]"]}},n.audiocontext={update:function(e){let t=o.options.audiocontext&&"ON"===o.addon.state;n.page.send("audiocontext",{active:t,target:"audiocontext"},e?e.tabId:null,e?e.frameId:null)}},n.canvas={update:function(e){let t=o.options.canvas&&"ON"===o.addon.state;n.page.send("canvas",{active:t,target:"canvas"},e?e.tabId:null,e?e.frameId:null)}},n.font={update:function(e){let t=o.options.font&&"ON"===o.addon.state;n.page.send("font",{active:t,target:"font"},e?e.tabId:null,e?e.frameId:null)}},o.geolocation=function(){return{timestamp:(new Date).getTime(),coords:{speed:null,heading:null,altitude:null,accuracy:1768,altitudeAccuracy:null,latitude:o.settings.latitude,longitude:o.settings.longitude}}},n.geolocation={update:function(e){let t=o.options.geolocation&&"ON"===o.addon.state;n.page.send("geolocation",{active:t,target:"geolocation",options:o.geolocation()},e?e.tabId:null,e?e.frameId:null)}},n.proxymode={options:{scheme:"socks5",host:o.settings.host,port:o.settings.port,whitelist:function(){let e=[];for(let t=0;t<n.whitelist.domains.length;t++)n.whitelist.domains[t]&&e.push("*"+n.whitelist.domains[t]);return e}},update:function(){let e=o.options.proxy&&"ON"===o.addon.state;e?n.proxy.set({scope:"regular",value:{mode:"fixed_servers",rules:{bypassList:n.proxymode.options.whitelist(),singleProxy:{scheme:n.proxymode.options.scheme,host:n.proxymode.options.host,port:n.proxymode.options.port}}}}):n.proxy.set({scope:"regular",value:{mode:"system"}})}},o.timezone=function(){return{name:o.settings.name,value:o.settings.value}},n.timezone={update:function(e){let t=o.options.timezone&&"ON"===o.addon.state;n.page.send("timezone",{active:t,target:"timezone",options:o.timezone()},e?e.tabId:null,e?e.frameId:null)}},n.tracking={text:"",array:{},response:null,url:chrome.runtime.getURL("lib/tweaks/resources/blacklist.txt"),update:async function(e){var t=o.options.tracking&&"ON"===o.addon.state;t&&(await n.netrequest.display.badge.text(e),n.tracking.response=await fetch(n.tracking.url),n.tracking.text=await n.tracking.response.text(),n.tracking.array=n.tracking.text.split("\n"),n.netrequest.rules.push({id:4e3,action:{type:"block"},condition:{requestDomains:n.tracking.array,excludedInitiatorDomains:n.whitelist.domains}}),delete n.tracking.text,delete n.tracking.array,delete n.tracking.response),await n.netrequest.rules.update()}},n.webgl={update:function(e){let t=o.options.webgl&&"ON"===o.addon.state;n.page.send("webgl",{active:t,target:"webgl"},e?e.tabId:null,e?e.frameId:null)}},n.webrtc={update:function(e){let t={},a=o.options.webrtc&&"ON"===o.addon.state;n.page.send("webrtc",{active:a,target:"webrtc"},e?e.tabId:null,e?e.frameId:null),t.beta={value:!1===a,scope:"regular"},t.alpha=a?{value:"disable_non_proxied_udp"}:{value:"default"},n.privacy.network.webrtc.set(t,(function(e){o.log&&console.error(e)}))}},n.whitelist={domains:[],listset:new Set([]),update:function(){n.whitelist.domains=o.settings.whitelist?o.settings.whitelist.split(",").map((function(e){return e.trim()})):[],n.whitelist.listset=new Set(n.whitelist.domains),r.update.tweaks()}};var r={start:function(){r.load()},install:function(){r.load()},load:function(){r.update.storage(!1)},action:{storage:function(){r.update.storage(!0)},active:function(){n.whitelist.update()},state:function(){o.addon.state="ON"===o.addon.state?"OFF":"ON",r.update.popup(),n.notifications.create({title:"Privacy Tweaks",message:"Privacy Tweaks is "+o.addon.state})},add:function(){chrome.tabs.query({active:!0,currentWindow:!0},e=>{let t=e[0];if(t&&t.url&&(0===t.url.indexOf("http")||0===t.url.indexOf("ftp"))){var a=o.hostname(t.url);if(a){var i=!n.whitelist.listset.has(a);i&&(n.whitelist.domains.push(a),o.settings.whitelist=n.whitelist.domains.join(", "),r.update.popup())}}})}},update:{action:!1,popup:function(){n.popup.send("storage",{options:o.options,settings:o.settings,state:o.addon.state})},storage:function(e){n.button.icon(null,o.addon.state),e&&n.whitelist.update()},tweaks:async function(){!1===r.update.action&&(r.update.action=!0,await n.netrequest.rules.remove.by.action.type("allow"),await n.netrequest.rules.remove.by.action.type("block"),await n.webrtc.update(null),await n.tracking.update(!0),await n.proxymode.update(null),await n.ads.update(!0),r.update.action=!1)},page:function(e){if(o.force)n.font.update(e),n.webgl.update(e),n.webrtc.update(e),n.canvas.update(e),n.timezone.update(e),n.geolocation.update(e),n.audiocontext.update(e);else if(e.top){let t=o.hostname(e.top);if(t){let a=!n.whitelist.listset.has(t);a&&(n.font.update(e),n.webgl.update(e),n.webrtc.update(e),n.canvas.update(e),n.timezone.update(e),n.geolocation.update(e),n.audiocontext.update(e))}}}}};n.storage.load(r.action.active),n.page.receive("load",r.update.page),n.popup.receive("add",r.action.add),n.popup.receive("reload",n.tab.reload),n.popup.receive("load",r.update.popup),n.popup.receive("state",r.action.state),n.popup.receive("button",(function(e){n[e.id].update()})),n.popup.receive("support",(function(){n.tab.open(n.homepage())})),n.popup.receive("options",(function(e){o.options[e.id]=e.value})),n.popup.receive("settings",(function(e){o.settings[e.id]=e.value})),n.popup.receive("donation",(function(){n.tab.open(n.homepage()+"?reason=support")})),n.on.startup(r.start),n.on.installed(r.install),n.on.storage(r.action.storage),chrome.runtime.onInstalled.addListener(e=>{"install"==e.reason&&(chrome.storage.local.set({"privacy-tweaks-tracking":!0,"privacy-tweaks-ads":!0,switch:!0,"privacy-tweaks-webrtc":!1,"privacy-tweaks-timezone":!1,"privacy-tweaks-geolocation":!1}),chrome.declarativeNetRequest.setExtensionActionOptions({displayActionCountAsBadgeText:!0}))})}});