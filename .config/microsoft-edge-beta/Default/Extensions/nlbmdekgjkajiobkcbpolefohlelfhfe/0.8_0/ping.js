﻿var CHANNEL = 'Channel';
var MACHINE_ID = 'MachineID';
var PARTNER_CODE = 'PartnerCode';
var DPC = 'DPC';	
const MARKET = 'Market';					
var manifestData = chrome.runtime.getManifest();
var extensionVersion = manifestData.version;
var bingUrl = "https://www.bing.com/";
var defaultPC = "U598";
var browserDefaultsUrl = "https://browserdefaults.microsoft.com/";

var FeedbackFwlink = "https://go.microsoft.com/fwlink/?linkid=2138838";
var ExtensionId = chrome.runtime.id;
var DAILY_PING_ALARM = "NLB_DAILYPINGALARM";
var dailyPingAlarmPeriodInMins = 1440; // 24 hours

var ExtnLanguage = "";
try {
    ExtnLanguage = chrome.i18n.getMessage("ExtnLanguage");
}
catch (exception) {
    ExtnLanguage = navigator.language.toLocaleLowerCase();
}

var PING_ALARM = "NLB_PINGALARM";
let getPingAlarm = chrome.alarms.get(PING_ALARM);
getPingAlarm.then(nlbPingAlarm);

function nlbPingAlarm(alarm) {
    if (!alarm) {
        chrome.alarms.create(PING_ALARM, {
            delayInMinutes: 1
        });	
    }
}

//Sets '_DPC' session cookie in bing.com domain whenever background.js gets executed
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === PING_ALARM) {
		chrome.storage.local.get([MACHINE_ID, "ExtensionUpdated", "updatePingSent", DPC,PARTNER_CODE], (items) => {	
			var _dpc = items[DPC];
			if (_dpc != undefined && _dpc != "" && _dpc != null) {
				chrome.cookies.set({ url: bingUrl, domain: '.bing.com', name: '_DPC', value: _dpc }, function (cookie) {
				});
			}
			
			if (items.ExtensionUpdated=="true" && items.updatePingSent=="false") {
				chrome.storage.local.set({ 
					"updatePingSent": "true",
					"ExtensionUpdated": "false"
				});
				//Call for Update Ping
				SendPingDetails("3");
			}

			//To redirect feedback page while uninstalling the extension
			var uninstallUrl = FeedbackFwlink + "&extnID=" + ExtensionId +"&mkt=" + ExtnLanguage + "&mid=" + items[MACHINE_ID] + "&br=me";
			chrome.runtime.setUninstallURL(uninstallUrl);			
		});
	}
});

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == 'install') {
        var promise = new Promise((resolve, reject) => {
            chrome.storage.local.set({
                ["MigratedLocalStorage"]: true,
                ["ExtnVersion"]: extensionVersion
            });
            resolve("organic");
		});
        promise
            .then(getBrowserDefaultDetailsGeneric)
			.then(getBrowserDefaultDetails)
			.then((detailsObj)=>{
				//Call for Install Ping
				SendPingDetails("1");	
			});
		chrome.alarms.clear(DAILY_PING_ALARM);
        chrome.alarms.create(DAILY_PING_ALARM, {
            delayInMinutes: 1,
            periodInMinutes: dailyPingAlarmPeriodInMins
        });										 
    }
    else if (details.reason == 'update') {
        chrome.storage.local.set({ 
            "updatePingSent": "false",
            "ExtensionUpdated": "true"
         });

        chrome.storage.local.get(["ExtnVersion", "MigratedLocalStorage", "isNotifEnabled","ExtensionUpdatepageshown"], function (items) {
	
            if (!items.ExtnVersion || items.ExtnVersion != chrome.runtime.getManifest().version) {

                chrome.storage.local.set({ "ExtnVersion": extensionVersion });
                if (!items.MigratedLocalStorage && !items.ExtensionUpdatepageshown) {
					var lastNotifDisplayedDate_Inactiveuser = new Date().toUTCString();
                    chrome.storage.local.set({ "lastNotifDispDate": lastNotifDisplayedDate_Inactiveuser }); 
                    showhtmlpage();
                }

                if (items.MigratedLocalStorage && !items.isNotifEnabled) {
                    chrome.storage.local.set({ "isNotifEnabled": true });
                }

            }
        });

		chrome.alarms.clear(DAILY_PING_ALARM);
        chrome.alarms.create(DAILY_PING_ALARM, {
            delayInMinutes: 1,
            periodInMinutes: dailyPingAlarmPeriodInMins,
        });
    }
});
function getBrowserDefaultDetailsGeneric(channelID) {
    return new Promise((resolve) => {
        chrome.storage.local.get([PARTNER_CODE], (items) => {
            var details = {
                MachineID: guid(),
                PartnerCode: defaultPC ,
                Channel: channelID
            };
            if (!items[PARTNER_CODE]) {
                chrome.cookies.get({ url: browserDefaultsUrl, name: chrome.runtime.id }, function (cookie) {
                    // Fetching channel cookie value, store it in chromeStorage and clear the Channel cookie in browserdefaults.microsoft.com
                    if (cookie) {
                        var cookieValue = String(cookie.value).split('&');
                        for (var i = 0; i < cookieValue.length; i++) {
                            var cookieData = cookieValue[i].split('=');
                            if (cookieData[0] == "PC") {
                                details.PartnerCode = cookieData[1]
                            }
                            else if (cookieData[0] == "MI") {
                                details.MachineID = cookieData[1]
                            }
                        }
                        chrome.cookies.remove({ url: browserDefaultsUrl, name: chrome.runtime.id });
                    }
                    chrome.storage.local.set(
                        {
                            [MACHINE_ID]: details.MachineID,
                            [PARTNER_CODE]: details.PartnerCode,
                            [CHANNEL]: details.Channel,
                        },
                        () => {
                            resolve(details);
                        }
                    );

                });
            }
        });
    });
}
function getBrowserDefaultDetails(detailObj) {
    return new Promise((resolve) => {
        // Fetching Partner Code and Channel details from browserdefaults.microsoft.com
        chrome.storage.local.get([CHANNEL, MACHINE_ID, PARTNER_CODE], (items) => {
            var details = {
                MachineID: !items[MACHINE_ID] ? guid() : items[MACHINE_ID],
                PartnerCode: !items[PARTNER_CODE] ? defaultPC : items[PARTNER_CODE],
                Channel: detailObj.Channel,
            };

            // Fetching PC cookie value from browserdefaults.microsoft.com, store it in chromeStorage and clear the PC cookie in browserdefaults.microsoft.com
            chrome.cookies.get({ url: browserDefaultsUrl, name: 'pc' }, function (cookie) {
                if (cookie) {
                    details[DPC] = cookie.value;
                    chrome.cookies.set({ url: bingUrl, domain: '.bing.com', name: '_DPC', value: details[DPC] }, function (cookie) {
                    });
                    chrome.cookies.remove({ url: browserDefaultsUrl, name: 'pc' });
                }
                chrome.storage.local.set(details, () => { resolve(details) });
            });

            if (!items[CHANNEL] !== "organic") {
                chrome.cookies.get({ url: browserDefaultsUrl, name: 'channel' }, function (cookie) {
                    // Fetching channel cookie value, store it in chromeStorage and clear the Channel cookie in browserdefaults.microsoft.com
                    if (cookie) {
                        details.Channel = cookie.value;
                        chrome.cookies.remove({ url: browserDefaultsUrl, name: 'channel' });
                    }
                    chrome.storage.local.set(details, () => { resolve(details) });
                });
            }

        });
    });

}
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === DAILY_PING_ALARM) {
      SendPingDetails("2");   				
    }
});

function showhtmlpage() {
    chrome.tabs.create({ url: "/Welcomepage/index.html?xid=4000&bmkt=" + ExtnLanguage });
    chrome.storage.local.set({ "ExtensionUpdatepageshown": "True" });
}

/* Function to create an unique machine id */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    var MachineGUID = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    MachineGUID = MachineGUID.toLocaleUpperCase();
	chrome.storage.local.set({ 
        [MACHINE_ID]: MachineGUID
    });						   
    return MachineGUID;
}

var MUID = "";
chrome.cookies.get({ url: bingUrl, name: 'MUID' }, function (cookie) {
	if (cookie && cookie.value != "" && cookie.value != null) {
		MUID = cookie.value;
	}
});

function SendPingDetails(status) {

    var startIndex = navigator.userAgent.indexOf("(");
    var endIndex = navigator.userAgent.indexOf(")");
    var OS = navigator.userAgent.substring(startIndex + 1, endIndex).replace(/\s/g, '');

    var browserLanguage = navigator.language;


    var ExtensionName = manifestData.name.replace(/ /g, "").replace(/&/g, 'and');

    var BrowserVersion = navigator.userAgent.substr(navigator.userAgent.indexOf("Edg")).split(" ")[0].replace("/", "");


    chrome.storage.local.get([PARTNER_CODE, CHANNEL, MACHINE_ID,DPC,MARKET], (items) => {
        var pc = !items[PARTNER_CODE] ? "U598" : items[PARTNER_CODE];
        var pingURL = 'https://go.microsoft.com/fwlink/?linkid=2271287&';
        var tVData = 'TV=is' + pc + '|pk' + ExtensionName + '|tm' + browserLanguage + '|bv' + BrowserVersion + '|ex' + ExtensionId + '|es' + status;
        if (MUID != "")
            tVData = tVData + "|mu" + MUID;
        if (items[CHANNEL])
            tVData = tVData + "|ch" + items[CHANNEL];
        if (items[DPC])
            tVData = tVData + "|dp" + items[DPC];
		var UD = 'MI=' + items[MACHINE_ID] + '&LV=' + extensionVersion + '&OS=' + OS + '&TE=37&' + tVData;
		UD = btoa(encodeURI(UD));
        pingURL = pingURL + 'UD=' + UD + '&ver=2';
        pingURL = encodeURI(pingURL);  // For HTML Encoding
        fetch(pingURL);
    });
};
