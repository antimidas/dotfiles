(self.webpackChunk=self.webpackChunk||[]).push([[902],{64757:(e,t,a)=>{a.d(t,{L_:()=>E,RZ:()=>g,zx:()=>p});var l=a(50858),n=a(55818),r=a(27378),i=a(8543),c=a(54001),o=a(4870),s=a(86732),d=a(1509),m=a(26215),u=a(94632);function p(e){return r.createElement(m.Y,E(e,u.LI))}function E(e,t){var a=(0,c.Sh)(e.className,t).className;return(0,n._)((0,l._)({},e),{className:a})}!function(e){var t=e.Animated=function(e){return r.createElement(m.Y,(0,n._)((0,l._)({},e),{animationMode:Boolean(e.animationMode)?e.animationMode:s.m.FromClickPoint}))};e.Primary=function(e){return r.createElement(t,(0,l._)({styleType:d.Z.Type.Button},E(e,u.T$)))},e.Secondary=function(e){return r.createElement(t,(0,l._)({styleType:d.Z.Type.Button},E(e,u.BD)))},e.Ghost=function(e){return r.createElement(t,(0,l._)({styleType:d.Z.Type.Button},E(e,u.fk)))},e.Tertiary=function(e){return r.createElement(t,(0,l._)({styleType:d.Z.Type.Base},E(e,u.UF)))},e.Flat=function(e){return r.createElement(t,E(e,u.$H))},e.White=function(e){return r.createElement(t,E(e,u.ix))},e.SidebarFlat=function(e){return r.createElement(m.Y,(0,l._)({styleType:d.Z.Type.H3Legacy},E(e,u.HN)))},e.Caps=function(e){return r.createElement(m.Y,(0,l._)({styleType:d.Z.Type.H3Legacy},E(e,u.Mp)))},e.Group=function(e){var t=e.children,a=e.className,o=e.align,s=void 0===o?"horizontal":o,d=e.sticky,m=e.name;return r.createElement(i.F.div,(0,n._)((0,l._)({role:"group"},(0,c.Sh)(a,"horizontal"===s?!0===d?u.vD:u.ru:u.oc)),{"data-name":m}),t)}}(p||(p={}));var g=function(e){var t=e.title,a=e.titleAlign,l=e.buttonClass,n=e.iconClass,s=e.iconWidth,d=e.tooltipClass;return r.createElement(p,{name:"info-button","aria-label":t,tag:m.X.div,title:r.createElement(i.F.div,(0,c.Sh)(u.bC,d),r.createElement("p",null,t)),titleAlign:a,className:l},r.createElement(o.JO.Info,{width:s,className:n}))}},45662:(e,t,a)=>{a.r(t),a.d(t,{KnowledgeHubCard:()=>B});var l=a(27378),n=a(81696),r=a(64757),i=a(46354),c=a(96833),o=a(1530),s=a(34761),d=a(48834),m=a(87783),u=a(57050),p=a(94622),E=a(5114),g=a(15893);const y=({model:e,onClick:t})=>{const a=e.communicationMethods.length>0,n=a?e.communicationMethods[0].link:"",c=(0,u.zG)(e.avatarUrl,E.g_((()=>l.createElement(i.J,{icon:p.g,className:g.icon,accessibilityLabel:""})),(e=>l.createElement("img",{className:g.avatar,src:e,alt:""}))));return n?l.createElement(r.zx,{name:"point-person-details","data-grammarly-part":"knowledge-hub-card-point-person",target:"_blank",rel:"noreferrer",className:g.item,disabled:!a,href:n,onClick:()=>t({kind:"redirect"})},c,l.createElement("div",{className:g.text},e.displayName)):l.createElement(r.zx,{name:"point-person-details","data-grammarly-part":"knowledge-hub-card-point-person",className:g.item,onClick:()=>t({kind:"copy",personName:e.displayName})},c,l.createElement("div",{className:g.text},e.displayName))},h=({list:e,onPointPersonClick:t})=>l.createElement("div",{"data-grammarly-part":"knowledge-hub-card-point-people-list",className:g.list},e.map(((e,a)=>l.createElement(y,{key:a,model:e,onClick:t}))));var k=a(84648);const v=({model:e,onRelatedMaterialsClick:t})=>l.createElement(r.zx,{name:"related-material-link","data-grammarly-part":"knowledge-hub-card-related-material",target:"_blank",rel:"noreferrer",className:k.item,href:e.link,onClick:()=>t()},l.createElement("img",{className:k.icon,src:e.iconUrl,alt:""}),l.createElement("div",{className:k.text},e.title)),b=({list:e,onRelatedMaterialsClick:t})=>l.createElement("div",{"data-grammarly-part":"knowledge-hub-card-related-materials-list",className:k.list},e.map(((e,a)=>l.createElement(v,{key:a,model:e,onRelatedMaterialsClick:()=>t()})))),C=l.forwardRef((function({articleTitle:e,aliases:t,articleContent:a,relatedMaterials:n,pointPeople:u,onRelatedMaterialsClick:p,onPointPersonClick:E,onDescriptionCopyClick:g},y){return l.createElement("div",{"data-grammarly-part":"knowledge-hub-card-content",className:o.cardContent,ref:y},l.createElement("div",{className:o.section},l.createElement("div",{className:d.primaryTitle},e),t.length>0&&l.createElement("span",{className:m.list,"data-grammarly-part":"knowledge-hub-card-alias"},"also known as"," ",t.map(((e,a)=>l.createElement("span",{key:e.name,"data-grammarly-part":"knowledge-hub-card-alias"},e.name,a===t.length-1?"":", ")))),l.createElement("div",{className:o.text},a),a.length>0&&l.createElement("div",null,l.createElement(r.zx,{onClick:()=>g(),className:s.copyButton},l.createElement("span",{className:s.copyButtonLabel},l.createElement(i.J,{accessibilityLabel:"",icon:c.c,size:"small"})," Copy text")))),n.length>0&&l.createElement("div",{className:o.section},l.createElement("div",{className:o.secondaryTitle},"Related materials"),l.createElement(b,{list:n,onRelatedMaterialsClick:()=>p()})),u.length>0&&l.createElement("div",{className:o.section},l.createElement("div",{className:o.secondaryTitle},"Point people"),l.createElement(h,{list:u,onPointPersonClick:E})))}));var x=a(62035),N=a(43063),w=a(38876);const f=({suggestCorrectionUrl:e,onSuggestEditClick:t,onEntryDismiss:a})=>{const n=(0,u.zG)(e,E.g_((()=>null),(e=>l.createElement(r.zx.Flat,{name:"edit-button",className:w.button,textPosition:"surrounded",target:"_blank",href:e,onClick:()=>t()},l.createElement(i.J,{icon:x.g,className:N.icon,accessibilityLabel:"Edit"})))));return l.createElement("div",{"data-grammarly-part":"knowledge-hub-card-footer",className:N.cardFooter},l.createElement(r.zx.Flat,{name:"dismiss-entry-button",textPosition:"surrounded",className:N.dismissButton,onClick:a},"Don't show me this term again"),n)};var T=a(91450);const M=({headerText:e,headerIconSrc:t})=>l.createElement("div",{"data-grammarly-part":"knowledge-hub-card-header",className:T.cardHeader},l.createElement("div",{"data-grammarly-part":"knowledge-hub-card-title",className:T.title},l.createElement("div",{className:T.icon},l.createElement("img",{src:t,alt:""})),l.createElement("div",{className:T.text},e))),B=({model:e})=>(l.useEffect((()=>(e.onMount(),()=>{e.onUnmount()})),[]),e.isUserAuthenticated?l.createElement("div",{"data-grammarly-part":"knowledge-hub-card",className:n.card},l.createElement(M,{headerIconSrc:e.headerIconSrc,headerText:e.headerText}),l.createElement(C,{articleTitle:e.articleTitle,aliases:e.aliases,articleContent:e.articleContent,relatedMaterials:e.relatedMaterials,pointPeople:e.pointPeople,onRelatedMaterialsClick:()=>e.onRelatedMaterialsClick(),onPointPersonClick:e.onPointPersonClick,onDescriptionCopyClick:e.onDescriptionCopyClick}),l.createElement(f,{suggestCorrectionUrl:e.suggestCorrectionUrl,onSuggestEditClick:()=>e.onSuggestEditClick(),onEntryDismiss:()=>e.onEntryDismiss()})):null)},87783:e=>{e.exports={list:"MDiPX"}},1530:e=>{e.exports={cardContent:"twTxF",section:"ab_uX",secondaryTitle:"BY5bb",text:"bQQwm"}},34761:e=>{e.exports={copyButton:"CixYu",copyButtonLabel:"VL6Rx"}},15893:e=>{e.exports={list:"qC2c7",item:"KvO60",avatar:"mA2E6",icon:"kKdJI",text:"kh5nT"}},84648:e=>{e.exports={list:"wKF9A",item:"TCBvP",icon:"fPYqb",text:"d2zxB"}},48834:e=>{e.exports={primaryTitle:"dxz6S"}},43063:e=>{e.exports={cardFooter:"EQm03",dismissButton:"ICvGM"}},38876:e=>{e.exports={button:"AoEYd",icon:"AFydc"}},91450:e=>{e.exports={cardHeader:"yqS6y",title:"KF7Zt",icon:"I09Jr",text:"YVeTN"}},81696:e=>{e.exports={card:"_HMAj"}},96833:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(27378);const n=(0,a(91961).I)("color",(({title:e,titleId:t,desc:a,descId:n,...r})=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":n,...r},a?l.createElement("desc",{id:n},a):null,e?l.createElement("title",{id:t},e):null,l.createElement("path",{stroke:"#646B81",strokeLinecap:"round",strokeLinejoin:"round",d:"M7.053 10.842v1.908c0 .69.56 1.25 1.25 1.25h4.447c.69 0 1.25-.56 1.25-1.25V8.303c0-.69-.56-1.25-1.25-1.25h-1.908M8.947 3.25v4.447c0 .69-.56 1.25-1.25 1.25H3.25c-.69 0-1.25-.56-1.25-1.25V3.25C2 2.56 2.56 2 3.25 2h4.447c.69 0 1.25.56 1.25 1.25"}))))},62035:(e,t,a)=>{a.d(t,{g:()=>n});var l=a(27378);const n=(0,a(91961).I)("color",(({title:e,titleId:t,desc:a,descId:n,...r})=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":n,...r},a?l.createElement("desc",{id:n},a):null,e?l.createElement("title",{id:t},e):null,l.createElement("path",{fill:"#646B81",fillRule:"evenodd",d:"M11.276 3c-.034.001-.1.02-.173.096l-.643.66 1.165 1.195.665-.682a.207.207 0 0 0 .004-.295l-.382-.392-.505-.517.357-.347-.357.347c-.06-.062-.104-.067-.13-.066m-.349 2.667L9.762 4.472l-5.208 5.34v1.21h1.152zM11.224 2c.334-.018.653.112.9.366l.502.515.384.393a1.207 1.207 0 0 1-.004 1.692l-6.732 6.904-.147.151H3.554V9.406l.142-.146 6.69-6.862c.22-.226.513-.38.838-.397M2 13.498a.5.5 0 0 1 .5-.5h11.002a.5.5 0 1 1 0 1H2.499a.5.5 0 0 1-.5-.5",clipRule:"evenodd"}))))},94622:(e,t,a)=>{a.d(t,{g:()=>n});var l=a(27378);const n=(0,a(91961).I)("color",(({title:e,titleId:t,desc:a,descId:n,...r})=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":n,...r},a?l.createElement("desc",{id:n},a):null,e?l.createElement("title",{id:t},e):null,l.createElement("path",{stroke:"#646B81",d:"m3.714 12 2.11-.88a2.14 2.14 0 0 0 1.319-1.977M12.286 12l-2.11-.88a2.14 2.14 0 0 1-1.319-1.977M6 6.286v1.143a2 2 0 1 0 4 0V6.286a2 2 0 1 0-4 0ZM14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"}))))}}]);