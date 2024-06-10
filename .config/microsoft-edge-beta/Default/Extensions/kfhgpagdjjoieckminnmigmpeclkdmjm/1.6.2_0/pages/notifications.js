const language=["ru"].includes(t("extension_lang"))?t("extension_lang"):"en";(function(){"use strict";const e=nj,o={},s=new ExtStorageManager(null,n=>e(d.bind(this,n)));e(()=>{o.main=e("#main"),o.notifsImportant=e("#notifsImportant"),o.notifsNormal=e("#notifsNormal"),o.document=e(document),e(document.documentElement).attr("lang",language),e("[data-i18n]").forEach(n=>{const a=e(n),m=a.text().split("+").reduce((c,l,g)=>(g&&(c+=" "),c+=l.match(/^(-|_|—|\/|\s)$/)?l:t(l),c),"");a.html(m||"{no_text}")}),e("[data-balloon]").forEach(n=>{const a=e(n),f=typeof a.attr("data-balloon-tooltip")=="string",m=typeof a.attr("data-balloon-hover")=="string",c=()=>{a.removeClass("balloon_active"),!f&&o.document.off("click","popup:balloon")};let l=null;a.find("[data-balloon-content]").on("click",g=>g.stopPropagation()),a.find("[data-balloon-trigger]").on("click",()=>{a.addClass("balloon_active"),setTimeout(()=>o.document.on("click",c,"popup:balloon"),0)}),a.find("[data-balloon-action]").on("click",c),m&&a.on("mouseenter",()=>{l=setTimeout(()=>a.addClass("balloon_active"),s.get("config.transitionDelay"))}).on("mouseleave",()=>{clearTimeout(l),a.removeClass("balloon_active")}),f&&o.document.on("click",c,"tooltip:balloon")})});function d(){const n=new EbnullNotifier(s.get("notificationsApi"),s,{memCacheTime:29e4,storCacheTime:119e4});let a=null,f=!1;e(document).on("visibilitychange",()=>{document.visibilityState==="visible"?m():clearTimeout(a)}),m(),chrome.runtime.sendMessage({analytics:{name:"page_view",params:{page_title:"Notifications",page_location:"/notifications"}}});function m(){clearTimeout(a),n.getNotifications().then(c).catch(()=>{!f&&l()}),document.visibilityState==="visible"&&(a=setTimeout(m,15*60*1e3))}function c(i){if(f=!0,!i.counts.all){l(!1);return}let r="";i.important.forEach(u=>{r+=g(u)}),o.notifsImportant.html(r),r="",i.normal.forEach(u=>{r+=g(u)}),o.notifsNormal.html(r),i.counts.notRead&&n.markRead(i.normal.concat(i.important).map(u=>u.id)),chrome.runtime.sendMessage("hideBage"),l(!0)}function l(i){o.main.removeClass("notifs-loaded"),i?o.main.addClass("notifs-exist").removeClass("notifs-none notifs-error"):i===!1?o.main.addClass("notifs-none").removeClass("notifs-exist notifs-error"):o.main.addClass("notifs-error").removeClass("notifs-exist notifs-none"),setTimeout(()=>{o.main.addClass("notifs-loaded"),h()})}function g(i){let r=`<div class="notif${i.read?" notif_read":""}" data-id="${i.id}">`;return r+=`<h3 class="notif__title">${i.title}</h3>`,r+=`<div class="notif__date">${i.date}</div>`,r+=`<div class="notif__message">${i.message}</div></div>`,r}function h(){setTimeout(()=>{const i=o.main.find(".notif:not(.notif_read):first-child .notif__title")[0];i&&i.scrollIntoView({block:"center",behavior:"smooth"})},2e3)}}})();function checkLang(e,o){const s=e.toLowerCase().split(/_|-/),d=navigator.language.toLowerCase().split(/_|-/),n=s[0]===d[0];return(o?s[1]||d[1]:s[1]&&d[1])?n&&s[1]===d[1]:n}function t(e){let o="";return Array.isArray(e)?o=chrome.i18n.getMessage(e[0],e.splice(1)):o=chrome.i18n.getMessage(e),o||"{no translation}"}function initTranslate(){const e=nj,o=language,s=navigator.language.startsWith("zh")?navigator.language:navigator.language.split(/-|_/)[0],d=encodeURIComponent(t("extension_translateHint"));checkLang(o,!0)||(e("#translateGoogle").removeClass("hidden"),e("#translateGoogleBtn").off().on("click",()=>{const n=e("#googleTranslateElement select")[0];if(!n||n.options.length<2){e("#translateGoogle").addClass("hidden");return}n.selectedIndex=1,n.dispatchEvent(new Event("change")),localStorage.setItem("translateGoogleHint","false"),chrome.runtime.sendMessage({analytics:{name:"auto_translate",params:{page:"Notifications"}}})}),localStorage.getItem("translateGoogleHint")!=="false"&&fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${o}&tl=${s}&q=${d}`,{headers:{accept:"application/json"}}).then(n=>n.json()).then(n=>{const a=n[0]&&n[0][0]&&n[0][0][0]||null;a&&(e("#translateGoogleHint").html(a),e("#translateGoogle").addClass("balloon_active"))}),new google.translate.TranslateElement({pageLanguage:o,layout:1,includedLanguages:s},"googleTranslateElement"))}