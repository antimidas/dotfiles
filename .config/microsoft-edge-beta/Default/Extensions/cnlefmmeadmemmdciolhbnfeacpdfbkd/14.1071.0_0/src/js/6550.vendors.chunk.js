(self.webpackChunk=self.webpackChunk||[]).push([[6550],{51072:(e,t,r)=>{r.d(t,{Vi:()=>n});var a=r(95574);function n(e){return e().then(a.MH)}},31668:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(82900),n=r(74923),o=r(18775),i=r(98314),s=r(22232);var c=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new URLSearchParams;(0,a._)(this,e),(0,o._)(this,"base",void 0),(0,o._)(this,"params",void 0),this.base=t,this.params=r;var n=e._toString(t,r).length;(0,s.kG)(n<e.MAX_URL_LENGTH,"url exceeded length limit",String(n))}return(0,n._)(e,[{key:"addParams",value:function(t){var r,a=Object.entries(t).reduce((function(e,t){var r=(0,i._)(t,2),a=r[0],n=r[1];return e.append(a,n),e}),(r=this.params,new URLSearchParams(r.toString())));return new e(this.base,a)}},{key:"toString",value:function(){return e._toString(this.base,this.params)}}],[{key:"_toString",value:function(e,t){var r=t.toString();return"".concat(e).concat(r.length?"?".concat(r):"")}}]),e}();(0,o._)(c,"MAX_URL_LENGTH",2083)},624:(e,t,r)=>{r.d(t,{J:()=>J});var a,n,o,i,s,c,l,u,d,f,v,p,h,b,g,y,w,m,k,P,S,G,C,I,O,A=r(23239),z=r(5114),M=r(22232),U=r(79880),x=r(57050),T=r(64015),F=r(40154),B=r(85384),R=r(73915),E=r(71249),j=r(8125),_=r(55415),D=r(83078),L=r(95195),V=r(17889),q=r(98992),X=r(80432),Y=r(18208);function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){H(e,t,r[t])}))}return e}function N(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function Q(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function W(e){return X.f.includes(e.type)}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){e.isStrongAlertRefComponent=function(e){return"child"in e},e.isStrongAlertRefBehavior=function(e){return!("child"in e)}}(a||(a={})),function(e){e.isStrongAlertRef=function(e){return"strongAlertRef"===e.type},e.create=function(e,t,r){return{type:"strongAlertRef",alertIds:t,child:e,onEmpty:r,id:P.from("strongAlertRef")}}}(n||(n={})),function(e){e.isLongFormCard=function(e){return"longFormCard"===e.type},e.create=function(e,t,r){return{type:"longFormCard",fullContent:e,collapsedContent:t,id:P.from("longFormCard"),behaviors:[i.StrongAlertRef.create(r,[])],feedProperties:{}}}}(o||(o={})),function(e){let t,r;e.isStrongAlertRef=function(e){return"behavior:strongAlertRef"===e.type},function(e){e.create=function(e,t){return{id:P.from("behavior:strongAlertRef"),type:"behavior:strongAlertRef",alertIds:e,onEmpty:t}};e.eq=R.n(B.z2)(q.lY)}(t=e.StrongAlertRef||(e.StrongAlertRef={})),e.isPopoverAnchor=function(e){return"behavior:popoverAnchor"===e.type},function(e){e.create=function(e,t){return{type:"behavior:popoverAnchor",id:e,positionHint:t}};e.nonEmpty=e=>!!e.view}(r=e.PopoverAnchor||(e.PopoverAnchor={}))}(i||(i={})),function(e){e.create=function(e,t,r,a,n){return{type:"row",left:e,right:t,spacing:r,verticalAlign:a,id:P.from("row"),behaviors:n?[i.PopoverAnchor.create(n,U.Ly.Top)]:void 0}},e.isRow=function(e){return"row"===e.type}}(s||(s={})),function(e){e.create=function(e){return{type:"column",children:e,id:P.from("column")}}}(c||(c={})),function(e){var t=e.Type="block";e.create=function(e,r,a,...n){return{type:t,name:S.unknown(e),parts:n,spacing:r,innerSpacing:a,id:P.from(e)}},e.isBlock=function(e){return e.type===t},e.hasOnlyTextParts=function(e){return e.parts.every(u.isText)}}(l||(l={})),function(e){var t=e.Type="text";e.create=function(e,r,a,n,o,i,s,c={}){return{type:t,text:e,size:r,format:a,textColor:n,backgroundColor:o,outlineColor:i,id:P.from(t),selectable:s,meta:c}},e.isText=function(e){return e.type===t}}(u||(u={})),function(e){e.create=function(e,t){return{label:e,preview:t}}}(d||(d={})),function(e){e.create=function(e,...t){return{type:"alternativeChoice",alternatives:t,id:P.from("alternativeChoice"),meta:e}}}(f||(f={})),function(e){e.create=function(e,t){return{type:"viewStack",id:P.from("ViewStack"),views:t,selected:e}}}(v||(v={})),function(e){var t=e.Type="button";let r;!function(e){e.isTransitionAction=function(e){return"transition"===e.type},e.isApplyAlertsAction=function(e){return"applyAlerts"===e.type},e.createSelectAlternativeAction=function(e){return{type:"selectAlternative",alternativeIndex:e}}}(r=e.Action||(e.Action={})),e.isButton=function(e){return"button"===e.type},e.create=function(e,r,a,n,o,i,s=U.jL.Square,c={}){const d=P.from(e);return{type:t,id:d,name:S.unknown(e),tooltip:o,kind:n,state:U.BN.Enabled,label:{type:l.Type,name:S.unknown(""),parts:[u.create(r,U.yH.Regular,[],U.Il.CoreNeutral0,void 0,void 0,!1)],spacing:i,id:P.from("label-button-"+d)},actions:a,shape:s,meta:c}},e.createIcon=function(e,r,a,n,o,i=U.jL.Square,s={}){const c=P.from(e),u="icon-button-"+e;return{type:t,id:c,name:S.unknown(e),tooltip:o,kind:n,state:U.BN.Enabled,label:{type:l.Type,name:S.unknown(u),spacing:b.create("0","0.25","0","0.25"),parts:[h.create(r,void 0)],id:P.from(u)},actions:a,shape:i,meta:s}}}(p||(p={})),function(e){var t=e.Type="icon";let r;!function(e){e.createKnown=function(e){return{kind:"known",name:e}},e.createUrl=function(e,t,r){return{kind:"url",name:t,url:e,size:r}}}(r=e.Source||(e.Source={})),e.create=function(e,r,a={}){return{type:t,source:e,backgroundColor:r,id:P.from(t),meta:a}}}(h||(h={})),function(e){e.create=function(e,t,r,a){return{top:e,bottom:r,left:a,right:t}}}(b||(b={})),function(e){e.create=function(e,t){return{vertical:t,horizontal:e}}}(g||(g={})),function(e){var t=e.Type="count";e.create=function(e,r,a={},n){return{type:"count",backgroundColor:r,value:e,id:P.from(t),meta:a,textColor:n}}}(y||(y={})),function(e){let t;!function(e){e.create=function(e,t,r){return{type:"sliderChoice",id:P.from("slider-choice-"+t.toLowerCase()),icon:e,label:t,actions:r}}}(t=e.Choice||(e.Choice={})),e.create=function(e,t,r,a={}){return{type:"slider",segmentSize:e,fillColor:t,choices:r,id:P.from("slider"),meta:a}}}(w||(w={})),function(e){let t;!function(e){e.create=function(e,t,r,a){return{id:P.from("alternative-slider-choice-"+t.toLowerCase()),icon:e,label:t,actions:r,preview:a}}}(t=e.Choice||(e.Choice={})),e.create=function(e,t,r,a={}){return{type:"alternativeSlider",segmentSize:e,fillColor:t,choices:r,id:P.from("alternativeSlider"),meta:a}}}(m||(m={})),function(e){let t;e.create=function(e,t={}){return{type:"list",items:e,id:P.from("list"),meta:t}},function(e){e.create=function(e,t,r,a,n={}){return{id:P.from("listItem"),label:e,behaviors:r,actions:t,secondaryButtons:a,meta:n}}}(t=e.Item||(e.Item={}))}(k||(k={})),function(e){e.from=function(e){return e+"#"+Y.fg(6)}}(P||(P={})),function(e){e.unknown=function(e){return{kind:"unknown",value:e}}}(S||(S={})),function(e){e.create=function(e,t,r){return{type:"popoverStack",id:e,views:r,selected:t}},e.createView=function(e,t,r,a){return{id:e,rootPopoverId:t,child:r,anchor:{kind:"component",id:a||Y.fg(3)}}}}(G||(G={})),function(e){var t=e.Type="globalPart";e.create=function(e,r,a){return{type:t,id:e,content:r,name:S.unknown(a)}},e.isGlobalPart=function(e){return e.type===t}}(C||(C={})),function(e){var t=e.Type="globalPartPlaceholder";e.create=function(e,r=P.from(t),a){return{type:t,id:r,globalPartId:e,child:a}},e.isGlobalPartPlaceholder=function(e){return e.type===t}}(I||(I={})),function(e){let t;function r(e,r,a=t.PreOrder,n=[]){const o=[...n,e.id];switch(a){case t.PreOrder:return r(e,o),A(e,r,a,o);case t.PostOrder:return A(e,r,a,o),r(e,o);default:(0,M.vE)(a)}}function*n(e,r=t.PreOrder){yield*S(e,r,[])}function o(e,t,r,a){let n=a;return O.forEach(e,((e,r)=>n=t(n,e,r)),r),n}function s(e,t,r=O.TreeTraversal.PreOrder){for(let a of n(e,r))if(a.type===t)return z.G(a);return z.YP}!function(e){e.PreOrder="PreOrder",e.PostOrder="PstOrder"}(t=e.TreeTraversal||(e.TreeTraversal={})),e.forEach=r,e.traverse=n,e.reduce=o,e.findFirst=s,e.findFirstWithPredicate=function(e,t,r=O.TreeTraversal.PreOrder){for(let a of n(e,r))if(t(a))return z.G(a);return z.YP};var c=e.over=(e,r,a)=>{const[n,...o]=r;return E.xb(o)&&n===e.id?a(e):P(e,x.Q1,t.PreOrder,(t=>e.id===n&&t.id===o[0]?c(t,o,a):z.G(t)))};function l(e,r,a=t.PreOrder){switch(a){case t.PreOrder:return(0,x.zG)(r(e),(e=>y(e,r,a)));case t.PostOrder:return(0,x.zG)(y(e,r,a),z.UI(r));default:(0,M.vE)(a)}}function u(e,r,a=t.PreOrder){switch(a){case t.PreOrder:return(0,x.zG)(e,z.DT(r),z.tS((e=>(0,x.zG)(w(e,r,a),z.UI((t=>K({},e,t)))))));case t.PostOrder:return(0,x.zG)(w(e,r,a),z.tS((t=>z.DT(r)(K({},e,t)))));default:(0,M.vE)(a)}}function d(e,r,a=t.PreOrder){switch(a){case t.PreOrder:return(0,x.zG)(r(e),z.tS((e=>(0,x.zG)(m(e,r,a),z.UI((t=>K({},e,t)))))));case t.PostOrder:return(0,x.zG)(m(e,r,a),z.tS((t=>r(K({},e,t)))));default:(0,M.vE)(a)}}function f(e){return u(e,(0,j.ff)(g),t.PostOrder)}e.map=l,e.filter=u,e.filterMap=d,e.compact=f;var v=e.getAlertRefs=e=>{switch(e.type){case"alternativeChoice":case"alternativeSlider":case"block":case"button":case"count":case"alertsCount":case"icon":case"image":case"row":case"box":case"slider":case"text":case"clickableText":case"column":case"scroll":case"assistantFeed":case"assistantCard":case"popoverStack":case"gButton":case"lensesSwitchPanel":case"nativeSkillsModal":case"nativeSkillsList":case"nativeSkillsView":case"nativeToneInsightsModal":case"nativeLearnMoreModal":case"nativeSettingsModal":case"nativeFeedbackModal":case"nativeGetStartedChecklistModal":case"nativeKeyTakeawaysAssistantCard":case"nativeProofitModal":case"viewStack":case"proofitButton":case"dropDownMenuButton":case"selectableDropDownMenu":case"radioButtonsGroup":case"nativeExperimentalGBToneInsightsUpsellFooter":case"nativeExperimentalGBConsistencyUpsellFooter":case"collapsedCard":case"nativeInlineCardContent":case"progressBar":case"horizontalRule":case"tooltip":case"globalPartPlaceholder":case"sticker":return z.YP;case"shortFormCard":return v(e.child);case"longFormCard":return(0,x.zG)(e.behaviors,T.hX(i.isStrongAlertRef),V.nI);case"strongAlertRef":return z.G([e]);case"inlineCard":return(0,x.zG)((0,x.zG)(e.behaviors,z.ij,z.tS((0,x.ls)(T.hX(i.isStrongAlertRef),V.nI))));case"list":return(0,x.zG)(e.items,T.UI((e=>(0,x.zG)(e.behaviors,z.ij,z.tS((0,x.ls)(E.hX(i.isStrongAlertRef),V.nI))))),z.RD,z.UI(V.xH));default:if(W(e))return z.YP;(0,M.vE)(e)}};e.getAlertIds=(0,x.ls)(v,z.tS((0,x.ls)(T.tS(_.ei("alertIds")),V.c2))),e.getAllAlertIds=e=>o(e,((e,t)=>(0,x.zG)(O.getAlertIds(t),z.UI((t=>e.concat(t))),z.fS((()=>e)))),t.PreOrder,[]),e.getSDUIId=e=>z.ij(e.id),e.setPopoverView=(e,t)=>l(e,(e=>{switch(e.type){case"box":case"row":case"button":return(0,x.zG)(z.ij(e.behaviors),z.tS(T.Ew(i.isPopoverAnchor)),z.g_((0,x.a9)(e),(r=>{var{view:a}=r,n=Q(r,["view"]);return(0,x.zG)(z.ij(a),z.g_((()=>(0,x.zG)(t,z.hX((e=>"component"===e.anchor.kind&&e.anchor.id===n.id)),z.g_((0,x.a9)(e),(t=>N(K({},e),{behaviors:[N(K({},n),{view:t})]}))))),(r=>(0,x.zG)(t,z.hX((e=>_.Xy(e.anchor,r.anchor))),z.g_((()=>N(K({},e),{behaviors:[n]})),(t=>t.rootPopoverId===r.rootPopoverId&&t.id===r.id?e:N(K({},e),{behaviors:[N(K({},n),{view:t})]})))))))})));default:return e}})),e.setGlobalPartPlaceholderContent=(e,t)=>l(e,(e=>"globalPartPlaceholder"===e.type?(0,x.zG)(t(e.globalPartId),z.g_((()=>e),(t=>N(K({},e),{child:t.content})))):e)),e.removeStrongAlertRef=e=>t=>{const r=(0,x.zG)(t,T.UI((e=>e.alertIds)),T.xH,(e=>new Set(e))),n=(0,x.zG)(t,V.hX(a.isStrongAlertRefComponent)),o=(0,x.zG)(t,V.hX(a.isStrongAlertRefBehavior));return(0,x.zG)(d(e,h(r,n,o)),z.tS(f))};const p=(e,t)=>{var r;return N(K({},e),{behaviors:null===(r=e.behaviors)||void 0===r?void 0:r.map((e=>"behavior:strongAlertRef"===e.type?N(K({},e),{alertIds:e.alertIds.filter((e=>!t.has(e)))}):e))})},h=(e,t,r)=>a=>{switch(a.type){case"alternativeChoice":case"alternativeSlider":case"box":case"block":case"button":case"count":case"alertsCount":case"icon":case"image":case"row":case"slider":case"text":case"column":case"scroll":case"assistantFeed":case"assistantCard":case"popoverStack":case"gButton":case"lensesSwitchPanel":case"clickableText":case"nativeExperimentalGBToneInsightsUpsellFooter":case"nativeExperimentalGBConsistencyUpsellFooter":case"nativeGetStartedChecklistModal":case"nativeToneInsightsModal":case"nativeLearnMoreModal":case"nativeSettingsModal":case"nativeFeedbackModal":case"nativeKeyTakeawaysAssistantCard":case"nativeProofitModal":case"nativeSkillsModal":case"nativeSkillsList":case"nativeSkillsView":case"viewStack":case"proofitButton":case"dropDownMenuButton":case"selectableDropDownMenu":case"radioButtonsGroup":case"collapsedCard":case"nativeInlineCardContent":case"progressBar":case"horizontalRule":case"tooltip":case"globalPartPlaceholder":case"sticker":return z.G(a);case"shortFormCard":return h(e,t,r)(a.child);case"longFormCard":return z.G(N(K({},a),{behaviors:a.behaviors.map((t=>i.isStrongAlertRef(t)?N(K({},t),{alertIds:t.alertIds.filter((t=>!e.has(t)))}):t))}));case"strongAlertRef":return(0,x.zG)(t,z.Gg((e=>e.some((e=>b.equals(a,e))))))?z.YP:z.G(N(K({},a),{alertIds:a.alertIds.filter((t=>!e.has(t)))}));case"inlineCard":return a.behaviors&&a.behaviors.some((e=>i.isStrongAlertRef(e)&&(0,x.zG)(r,z.Gg((t=>t.some((t=>i.StrongAlertRef.eq.equals(e,t))))))))?z.YP:z.G(p(a,e));case"list":const n=a.items.filter((e=>!e.behaviors||!e.behaviors.some((e=>i.isStrongAlertRef(e)&&(0,x.zG)(r,z.Gg((t=>t.some((t=>i.StrongAlertRef.eq.equals(e,t))))))))));return 0===n.length?z.YP:z.G(N(K({},a),{items:n.map((t=>p(t,e)))}));default:if(W(a))return z.G(a);(0,M.vE)(a)}};e.switchViewStack=(e,t,r)=>(0,x.zG)(c(e,t,(e=>"viewStack"!==e.type&&"popoverStack"!==e.type||null==e.views[r]?z.G(e):z.G(N(K({},e),{selected:r})))),z.g_((()=>e),x.yR)),e.toContentMap=e=>O.reduce(e,((e,t,r)=>(e[t.id]={content:t,path:r},e)),t.PreOrder,{});var b=e.eq=R.n(B.z2)(q.VY),g=e.isEmpty=e=>{if(null==e)return!0;switch(e.type){case"column":return T.xb(e.children);case"assistantCard":return null==e.child&&null==e.footer;case"box":case"scroll":case"strongAlertRef":case"collapsedCard":case"inlineCard":case"shortFormCard":case"globalPartPlaceholder":case"tooltip":return null==e.child;case"row":return T.xb(e.left)&&T.xb(e.right);case"block":return T.xb(e.parts);case"list":return T.xb(e.items);case"button":return null==e.label;case"alternativeChoice":return T.xb(e.alternatives);case"alternativeSlider":return T.xb(e.choices);case"assistantFeed":return null==e.header&&null==e.footer;case"sticker":return null==e.label&&null==e.child;case"viewStack":return _.Qr(e.views);case"longFormCard":return null==e.fullContent;case"globalPart":return null==e.content;case"count":case"alertsCount":case"icon":case"image":case"slider":case"text":case"clickableText":case"gButton":case"lensesSwitchPanel":case"proofitButton":case"nativeSkillsModal":case"nativeSkillsList":case"nativeSkillsView":case"nativeToneInsightsModal":case"nativeLearnMoreModal":case"nativeSettingsModal":case"nativeFeedbackModal":case"nativeGetStartedChecklistModal":case"nativeKeyTakeawaysAssistantCard":case"nativeProofitModal":case"dropDownMenuButton":case"selectableDropDownMenu":case"radioButtonsGroup":case"nativeExperimentalGBToneInsightsUpsellFooter":case"nativeExperimentalGBConsistencyUpsellFooter":case"nativeInlineCardContent":case"progressBar":case"horizontalRule":case"popoverStack":return!1;default:if(W(e))return!1;(0,M.vE)(e)}};e.isSwitchViewAction=e=>"switchView"===e.type;e.bulkSwitchView=function(e,t,r){const a=null!=r?r:O.toContentMap(e);return t.reduce(((e,{selected:t,where:r})=>(0,x.zG)(a[r],z.ij,z.UI(_.ei("path")),z.g_((()=>e),(r=>O.switchViewStack(e,r,t))))),e)},e.getCardPropsForFeed=function(e){return e.filtering.filter((e=>e.condition===U.j2.EqualTo)).reduce(((e,t)=>N(K({},e),{[t.property]:t.value})),{})};const y=(e,r,a=t.PreOrder)=>P(e,r,a,l),w=(e,r,a=t.PreOrder)=>P(e,r,a,u),m=(e,r,a=t.PreOrder)=>P(e,r,a,d),k=(e,r,a=t.PreOrder,n)=>(0,x.zG)(e,T.u4(new Array,((e,t)=>((0,x.zG)(n(t,r,a),z.g_(x.Q1,(t=>e.push(t)))),e)))),P=(e,r,a=t.PreOrder,n)=>{switch(e.type){case"column":return(0,x.zG)(k(e.children,r,a,n),(t=>N(K({},e),{children:t})),z.G);case"assistantCard":const t=(0,x.zG)(z.ij(e.footer),z.tS((e=>n(e,r,a))),z.fS((()=>{})));return(0,x.zG)(n(e.child,r,a),z.UI((r=>N(K({},e),{child:r,footer:t}))));case"strongAlertRef":case"scroll":case"inlineCard":case"shortFormCard":case"box":case"tooltip":return(0,x.zG)(n(e.child,r,a),z.UI((t=>N(K({},e),{child:t}))));case"row":const o=k(e.right,r,a,n),i=k(e.left,r,a,n);return z.G(N(K({},e),{left:i,right:o}));case"block":return(0,x.zG)(k(e.parts,r,a,n),(t=>N(K({},e),{parts:t})),z.G);case"list":return(0,x.zG)(e.items,T.UI((e=>(0,x.zG)(n(e.label,r,a),z.UI((t=>N(K({},e),{label:t})))))),T.hX(z.pC),T.UI(D.MH),(t=>N(K({},e),{items:t})),z.G);case"button":return(0,x.zG)(n(e.label,r,a),z.UI((t=>N(K({},e),{label:t}))));case"alternativeChoice":return(0,x.zG)(e.alternatives,T.UI((e=>(0,x.zG)([n(e.label,r,a),n(e.preview,r,a)],z.RD,z.UI((e=>e)),z.UI((([t,r])=>N(K({},e),{label:t,preview:r})))))),T.hX(z.pC),T.UI(D.MH),(t=>N(K({},e),{alternatives:t})),z.G);case"alternativeSlider":return(0,x.zG)(e.choices,T.UI((e=>(0,x.zG)(n(e.preview,r,a),z.UI((t=>N(K({},e),{preview:t})))))),T.hX(z.pC),T.UI(D.MH),(t=>N(K({},e),{choices:t})),z.G);case"assistantFeed":return(0,x.zG)(z.ij(e.footer),z.tS((e=>n(e,r,a))),z.UI((t=>N(K({},e),{footer:t}))),z.wp((()=>z.G(e))),z.tS((e=>(0,x.zG)(n(e.header,r,a),z.UI((t=>N(K({},e),{header:t})))))));case"popoverStack":return(0,x.zG)(Object.keys(e.views),T.u4({},((t,o)=>(0,x.zG)(n(e.views[o].child,r,a),z.g_((()=>(delete t[o],t)),(r=>(t[o]=N(K({},e.views[o]),{child:r}),t)))))),(t=>N(K({},e),{views:t})),z.G);case"viewStack":return(0,x.zG)(Object.keys(e.views),T.u4({},((t,o)=>(0,x.zG)(n(e.views[o],r,a),z.g_((()=>(delete t[o],t)),(e=>(t[o]=e,t)))))),(t=>N(K({},e),{views:t})),z.G);case"collapsedCard":const s=(0,x.zG)(z.ij(e.quickActions),z.tS((e=>n(e,r,a))),z.fS((()=>{})));return(0,x.zG)(n(e.child,r,a),z.UI((t=>N(K({},e),{child:t,quickActions:s}))));case"longFormCard":return(0,x.zG)(n(e.fullContent,r,a),z.tS((t=>(0,x.zG)(n(e.collapsedContent,r,a),z.UI((r=>N(K({},e),{fullContent:t,collapsedContent:r})))))));case"sticker":return(0,x.zG)(n(e.child,r,a),z.tS((t=>(0,x.zG)(n(e.label,r,a),z.UI((r=>N(K({},e),{child:t,label:r})))))));case"globalPart":return(0,x.zG)(n(e.content,r,a),z.UI((t=>N(K({},e),{content:t}))));case"globalPartPlaceholder":return e.child?(0,x.zG)(n(e.child,r,a),z.UI((t=>N(K({},e),{child:t})))):z.G(e);case"icon":case"image":case"text":case"clickableText":case"count":case"alertsCount":case"slider":case"gButton":case"lensesSwitchPanel":case"proofitButton":case"nativeSkillsModal":case"nativeSkillsList":case"nativeSkillsView":case"nativeToneInsightsModal":case"nativeLearnMoreModal":case"nativeSettingsModal":case"nativeFeedbackModal":case"nativeGetStartedChecklistModal":case"nativeKeyTakeawaysAssistantCard":case"nativeProofitModal":case"nativeExperimentalGBToneInsightsUpsellFooter":case"nativeExperimentalGBConsistencyUpsellFooter":case"nativeInlineCardContent":case"progressBar":case"horizontalRule":case"dropDownMenuButton":case"selectableDropDownMenu":case"radioButtonsGroup":return z.G(e);default:if(W(e))return z.G(e);(0,M.vE)(e)}};function*S(e,r=t.PreOrder,a=[]){const n=[...a,e.id];switch(r){case t.PreOrder:yield e,yield*X(e,r,n);break;case t.PostOrder:yield*X(e,r,n),yield e;break;default:(0,M.vE)(r)}}const G=(e,a,n=t.PreOrder,o)=>e.forEach((e=>r(e,a,n,o)));function*I(e,r=t.PreOrder,a){for(let t=0;t<e.length;t++)yield*S(e[t],r,a)}const A=(e,a,n=t.PreOrder,o)=>{switch(e.type){case"column":return G(e.children,a,n,o);case"assistantCard":return null!=e.footer&&r(e.footer,a,n,o),r(e.child,a,n,o);case"popoverStack":return G(Object.values(e.views).map((e=>e.child)),a,n,o);case"strongAlertRef":case"box":case"scroll":case"inlineCard":case"shortFormCard":case"tooltip":return r(e.child,a,n,o);case"row":return G(e.left,a,n,o),G(e.right,a,n,o);case"block":return G(e.parts,a,n,o);case"list":return G(e.items.map((e=>e.label)),a,n,o);case"button":return r(e.label,a,n,o);case"alternativeChoice":return e.alternatives.forEach((({label:e,preview:t})=>G([e,t],a,n,o)));case"alternativeSlider":return e.choices.forEach((({preview:e})=>r(e,a,n,o)));case"assistantFeed":return null!=e.footer&&r(e.footer,a,n,o),r(e.header,a,n,o);case"viewStack":return G(Object.values(e.views),a,n,o);case"collapsedCard":return null!=e.quickActions&&r(e.quickActions,a,n,o),r(e.child,a,n,o);case"longFormCard":return r(e.collapsedContent,a,n,o),r(e.fullContent,a,n,o);case"sticker":return r(e.label,a,n,o),r(e.child,a,n,o);case"globalPart":return r(e.content,a,n,o);case"globalPartPlaceholder":return e.child?r(e.child,a,n,o):void 0;case"icon":case"image":case"text":case"clickableText":case"count":case"alertsCount":case"slider":case"gButton":case"lensesSwitchPanel":case"proofitButton":case"nativeSkillsModal":case"nativeSkillsList":case"nativeSkillsView":case"nativeToneInsightsModal":case"nativeLearnMoreModal":case"nativeSettingsModal":case"nativeFeedbackModal":case"nativeGetStartedChecklistModal":case"nativeKeyTakeawaysAssistantCard":case"nativeProofitModal":case"nativeExperimentalGBToneInsightsUpsellFooter":case"nativeExperimentalGBConsistencyUpsellFooter":case"nativeInlineCardContent":case"progressBar":case"horizontalRule":case"dropDownMenuButton":case"selectableDropDownMenu":case"radioButtonsGroup":return;default:if(W(e))return;(0,M.vE)(e)}};function*X(e,r=t.PreOrder,a){switch(e.type){case"column":yield*I(e.children,r,a);break;case"assistantCard":null!=e.footer&&(yield*S(e.footer,r,a)),yield*S(e.child,r,a);break;case"popoverStack":yield*I(Object.values(e.views).map((e=>e.child)),r,a);break;case"strongAlertRef":case"box":case"scroll":case"inlineCard":case"shortFormCard":case"tooltip":yield*S(e.child,r,a);break;case"row":yield*I(e.left,r,a),yield*I(e.right,r,a);break;case"block":yield*I(e.parts,r,a);break;case"globalPart":yield*S(e.content,r,a);break;case"globalPartPlaceholder":if(!e.child)return;yield*S(e.child,r,a);break;case"list":yield*I(e.items.map((e=>e.label)),r,a);break;case"button":yield*S(e.label,r,a);break;case"alternativeChoice":for(let t=0;t<e.alternatives.length;t++){const{label:n,preview:o}=e.alternatives[t];yield*I([n,o],r,a)}break;case"alternativeSlider":for(let t=0;t<e.choices.length;t++){const{preview:n}=e.choices[t];yield*S(n,r,a)}break;case"assistantFeed":null!=e.footer&&(yield*S(e.footer,r,a)),yield*S(e.header,r,a);break;case"viewStack":yield*I(Object.values(e.views),r,a);break;case"collapsedCard":null!=e.quickActions&&(yield*S(e.quickActions,r,a)),yield*S(e.child,r,a);break;case"longFormCard":yield*S(e.collapsedContent,r,a),yield*S(e.fullContent,r,a);break;case"sticker":yield*S(e.child,r,a),yield*S(e.label,r,a);break;case"icon":case"image":case"text":case"clickableText":case"count":case"alertsCount":case"slider":case"gButton":case"lensesSwitchPanel":case"proofitButton":case"nativeSkillsModal":case"nativeSkillsList":case"nativeSkillsView":case"nativeToneInsightsModal":case"nativeLearnMoreModal":case"nativeSettingsModal":case"nativeFeedbackModal":case"nativeGetStartedChecklistModal":case"nativeKeyTakeawaysAssistantCard":case"nativeProofitModal":case"nativeExperimentalGBToneInsightsUpsellFooter":case"nativeExperimentalGBConsistencyUpsellFooter":case"nativeInlineCardContent":case"progressBar":case"horizontalRule":case"dropDownMenuButton":case"selectableDropDownMenu":case"radioButtonsGroup":return;default:if(W(e))return;(0,M.vE)(e)}}e.Functor={map:(e,r)=>l(e,r,t.PreOrder)};var Y=e.checkForGlobalPartWithPlaceholder=e=>C.isGlobalPart(e)?(0,x.zG)(s(e,"globalPartPlaceholder"),z.g_((()=>L.right(e)),(t=>L.left(new Error(`globalPart can not contain globalPartPlaceholder. globalPartPlaceholder (id: ${t.id}) found in globalPart (id: ${e.id})`))))):L.right(e);const H=R.n(F.z2)(q.VY);e.dslRootParser=(0,x.ls)(H.decode,L.mapLeft((e=>new Error(F.ii(e)))),L.chain(Y))}(O||(O={}));class J{getInteractionActions(e,t,r){return(0,x.zG)(this._state.get(),(e=>e.dsl),z.hX((r=>r.id===e&&r.selected===t)),z.UI((e=>e.views[e.selected])),z.g_((()=>[]),(e=>{switch(r){case U.fP.Fulfill:return e.onFulfill||[];case U.fP.Dismiss:return e.onDismiss||[];default:(0,M.L0)(r)}})))}addPopover(e,t){this._state.modify((r=>{const a=void 0!==t&&r.revision>t,n=void 0!==t&&r.revision===t,o=(0,x.zG)(r.dsl,z.Gg((t=>t.id===e.id))),i=!z.Wi(r.dsl);return a||o||n&&i?r:{dsl:z.G(e),revision:null!=t?t:r.revision}}))}removePopover(e,t){this._state.modify((r=>{const a=void 0!==t&&r.revision>t,n=(0,x.zG)(r.dsl,z.Gg((t=>t.id===e)));return a||!n?r:{dsl:z.YP,revision:null!=t?t:r.revision}}))}switchView(e){this._state.modify((t=>(0,x.zG)(t.dsl,z.hX((t=>t.id===e.sduiRootId)),z.UI((t=>O.bulkSwitchView(t,[{where:e.where,selected:e.selected,type:"switchView"}]))),z.hX((e=>"popoverStack"===e.type)),z.g_((()=>t),(e=>({dsl:z.G(e),revision:t.revision}))))))}constructor(){$(this,"activePopoverStack",void 0),$(this,"activePopoverView",void 0),$(this,"_state",void 0),this._state=A.h.create({dsl:z.YP,revision:-1}),this.activePopoverStack=this._state.view("dsl"),this.activePopoverView=this.activePopoverStack.view(z.tS((e=>z.ij(e.views[e.selected]))))}}},31903:(e,t,r)=>{r.d(t,{Q:()=>l});var a=r(57050),n=r(37492),o=r(51072),i=r(42040);function s(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_capiSDUIClient",void 0),c(this,"_log",void 0),this._capiSDUIClient=t,this._log=i.C8.Logging.getLogger("SDUIFeedbackServiceImpl")}var t,r,l;return t=e,(r=[{key:"sendUserAction",value:function(e,t){var r=this;this._log.debug("Sending user action",{componentId:e,userAction:t}),(0,a.zG)(this._capiSDUIClient.sendUserAction(e,t),o.Vi,(function(e){return e.catch((function(e){n.EP.isDroppedError(e)?r._log.debug("Stopped listening for sendUserAction message acknowledge",e):n.YG.isNotConnectedError(e)?r._log.warn("Failed to sendUserAction as CAPI was not connected",e):r._log.error("Failed to sendUserAction",e)}))}))}}])&&s(t.prototype,r),l&&s(t,l),e}()}}]);