(self.webpackChunk=self.webpackChunk||[]).push([[6132],{64757:(e,t,i)=>{i.d(t,{L_:()=>_,RZ:()=>d,zx:()=>u});var n=i(50858),a=i(55818),s=i(27378),o=i(8543),l=i(54001),r=i(4870),m=i(86732),c=i(1509),h=i(26215),p=i(94632);function u(e){return s.createElement(h.Y,_(e,p.LI))}function _(e,t){var i=(0,l.Sh)(e.className,t).className;return(0,a._)((0,n._)({},e),{className:i})}!function(e){var t=e.Animated=function(e){return s.createElement(h.Y,(0,a._)((0,n._)({},e),{animationMode:Boolean(e.animationMode)?e.animationMode:m.m.FromClickPoint}))};e.Primary=function(e){return s.createElement(t,(0,n._)({styleType:c.Z.Type.Button},_(e,p.T$)))},e.Secondary=function(e){return s.createElement(t,(0,n._)({styleType:c.Z.Type.Button},_(e,p.BD)))},e.Ghost=function(e){return s.createElement(t,(0,n._)({styleType:c.Z.Type.Button},_(e,p.fk)))},e.Tertiary=function(e){return s.createElement(t,(0,n._)({styleType:c.Z.Type.Base},_(e,p.UF)))},e.Flat=function(e){return s.createElement(t,_(e,p.$H))},e.White=function(e){return s.createElement(t,_(e,p.ix))},e.SidebarFlat=function(e){return s.createElement(h.Y,(0,n._)({styleType:c.Z.Type.H3Legacy},_(e,p.HN)))},e.Caps=function(e){return s.createElement(h.Y,(0,n._)({styleType:c.Z.Type.H3Legacy},_(e,p.Mp)))},e.Group=function(e){var t=e.children,i=e.className,r=e.align,m=void 0===r?"horizontal":r,c=e.sticky,h=e.name;return s.createElement(o.F.div,(0,a._)((0,n._)({role:"group"},(0,l.Sh)(i,"horizontal"===m?!0===c?p.vD:p.ru:p.oc)),{"data-name":h}),t)}}(u||(u={}));var d=function(e){var t=e.title,i=e.titleAlign,n=e.buttonClass,a=e.iconClass,m=e.iconWidth,c=e.tooltipClass;return s.createElement(u,{name:"info-button","aria-label":t,tag:h.X.div,title:s.createElement(o.F.div,(0,l.Sh)(p.bC,c),s.createElement("p",null,t)),titleAlign:i,className:n},s.createElement(r.JO.Info,{width:m,className:a}))}},16418:(e,t,i)=>{i.r(t),i.d(t,{ActivationSystemFeatureImpl:()=>k});var n=i(14601),a=i(76974),s=i(98403),o=i(5114),l=i(55415),r=i(23239),m=i(27378),c=i(10389),h=i(55649),p=i(37869),u=i(15389),_=i(96309),d=i(37902),g=i(90845),f=i(64757),b=i(40938);const P=({descriptionText:e,ctaText:t,onCtaClick:i,onDismiss:n,onMount:a,emotion:s,placementInfo:o})=>{const{referenceElement:l,placement:r,modifiers:c}=o,[h,P]=m.useState(null),{styles:v,attributes:y}=(0,p.D)(l,h,{placement:r,modifiers:c});return g.P.useEffectOnDidMount(a),m.createElement("div",{ref:P,className:u.inlinePill,style:v.popper,"data-test-attr":"inline-activation-pill",...y.popper},m.createElement(_.P,{size:"small","aria-label":"Dismiss",className:u.inlinePillCloseButton,onClick:n}),m.createElement(b.x,{as:"span",variant:"text-small",className:u.inlinePillDescriptionText},e),s&&m.createElement(d.dy,{size:"small-medium",unicodeHexArray:[s.emojiId],unicodeLiteral:s.emoji,className:u.inlinePillEmoji,"aria-hidden":"true"}),m.createElement(f.zx.Ghost,{className:u.inlinePillCTA,onClick:i},t))};var v=i(31528),y=i(57050);const S={cta:"See more in Grammarly",emotionHook:e=>`Sounding ${e}`};var C;!function(e){e.MINIMUM_TONE_COUNT=3,e.MINIMUM_TONE_CONFIDENCE=.5}(C||(C={}));var E=i(9629),I=i(68546),T=i(94602);class k{constructor(e){this._params=e,this._subs=new n.w,this._log=h.Y.create("ActivationSystemFeatureImpl"),this._emogenieState=r.h.create({prevalentEmotion:o.YP,allEmotions:o.YP}),this._areOtherGrammarlyPopupsOpen=r.h.create(!1),this._fieldContainer=o.YP,this._composeFieldContainer=o.YP,this._isCompose=!1,this._toolbarInfo=r.h.create(o.YP),this._inlinePillPlacement=r.h.create(o.YP),this._isMinimized=r.h.create(!1),this._createToolbarInfoSubscription=()=>(0,y.zG)(this._fieldContainer,o.UI(I.x.createToolbarVisibleObservable),o.fS((0,y.a9)(a.of(null)))).subscribe((e=>{(0,y.zG)(e,o.ij,s.wW(this._toolbarInfo))})),this._createIsMinimizedSubscription=()=>(0,y.zG)(this._composeFieldContainer,o.hX((()=>this._isCompose)),o.UI(I.x.createMinimizableComposeContainerVisibilityObservable),o.fS((0,y.a9)(a.of(null)))).subscribe((e=>{(0,y.zG)(e,o.ij,o.UI((e=>!e.visible)),o.fS((()=>!1)),s.wW(this._isMinimized))})),this._createInlinePillPlacementAtom=()=>r.h.combine(this._toolbarInfo,this._isMinimized,((e,t)=>(0,y.zG)(o.Do,o.ak("toolbar",(()=>e)),o.ak("sendButtonContainer",(()=>this._sendButtonContainer)),o.hX((()=>!t)),o.UI((({toolbar:e,sendButtonContainer:t})=>{const i=e.visible?e.el:t,n=e.visible?8:20;return(0,T.tw)(i,n)}))))),this._createEmogenieStateSubscription=()=>this._params.emogenieService.viewState.view(l.H6("report","prevalentEmotion")).subscribe((0,y.ls)((({report:e,prevalentEmotion:t})=>({allEmotions:o.ij(null==e?void 0:e.emotions),prevalentEmotion:o.ij(t)})),s.wW(this._emogenieState))),this._createGrammarlyPopupsOpenSubscription=()=>r.h.combine(this._params.assistantDynamicService.assistantOpenState.view((e=>"open"===e)),this._params.cheetahDynamicService.assistantState.view((e=>"opened"===e.kind)),this._params.gButtonPopupState.view((e=>"none"!==e.type)),((e,t,i)=>e||t||i)).subscribe(s.wW(this._areOtherGrammarlyPopupsOpen)),this._resetActivationState=()=>{this._params.actions._resetActivationSystemSettings()},this._onInlinePillCTAClick=()=>{this._log.debug("Inline pill CTA clicked"),this._params.gnar.activationSystemInlinePillCtaClick("inlinePill"),this._params.openEmogenieReport({type:v.WT.activationSystem}),this._params.actions.setActivationSystemToneInlinePillCTAClicked().then((()=>{this.dispose()}))},this._onDismissInlinePill=()=>{this._log.debug("Dismissing inline pill"),this._params.gnar.activationSystemInlinePillDismissClick("inlinePill"),this._params.actions.setActivationSystemToneInlinePillDismissed().then((()=>{this.dispose()}))},this._onInlinePillShown=()=>{this._log.debug("Inline pill shown"),this._params.gnar.activationSystemInlinePillPopupShow(),this._params.actions.setActivationSystemToneInlinePillSeen()},this._textHasSufficientEmotionsToRenderPill=(e,t)=>e.length>=C.MINIMUM_TONE_COUNT&&t.confidence>=C.MINIMUM_TONE_CONFIDENCE,this._fieldContainer=T.jK(this._params.textField),this._composeFieldContainer=T.cY(this._params.textField),this._sendButtonContainer=T.cB(this._params.textField),this._isCompose=T.mh(this._composeFieldContainer),this._subs.add(this._createToolbarInfoSubscription()),this._subs.add(this._createIsMinimizedSubscription()),this._inlinePillPlacement=this._createInlinePillPlacementAtom(),this._subs.add(this._inlinePillPlacement.subscribe()),this._subs.add(this._createEmogenieStateSubscription()),this._subs.add(this._createGrammarlyPopupsOpenSubscription())}get inlinePillUI(){const{cta:e,emotionHook:t}=S;return r.h.combine(this._emogenieState,this._areOtherGrammarlyPopupsOpen,this._params.csPageState.view("activationSystem"),this._params.user,this._params.checkingStatus,this._inlinePillPlacement,((i,n,a,s,l,r)=>(0,y.zG)(o.Do,o.hX((()=>!(0,T.Zl)(a))),o.ak("allEmotions",(()=>i.allEmotions)),o.ak("prevalentEmotion",(()=>i.prevalentEmotion)),o.ak("inlinePillPlacement",(()=>r)),o.hX((({allEmotions:e,prevalentEmotion:t})=>this._textHasSufficientEmotionsToRenderPill(e,t))),o.hX((()=>s.anonymous)),o.hX((()=>!n)),o.hX((()=>"test"===this._params.experimentClient.getTreatment(E.p.AspToneInlinePillGmail))),o.g_(y.gn,(({prevalentEmotion:i,inlinePillPlacement:n})=>m.createElement(P,{ctaText:e,descriptionText:t(i.name.toLowerCase()),onCtaClick:this._onInlinePillCTAClick,onDismiss:this._onDismissInlinePill,onMount:this._onInlinePillShown,placementInfo:n,emotion:i,checkingInProgress:l===c.Hq.inProgress}))))))}dispose(){this._log.debug("Disposing"),this._subs.unsubscribe()}}},15389:e=>{e.exports={inlinePill:"BYavB",fadeIn:"zG7Sj",inlinePillCloseButton:"qkYqs",inlinePillDescriptionText:"sRTeW",inlinePillCTA:"UPAxJ",spin:"UclXr"}},40938:(e,t,i)=>{i.d(t,{x:()=>o});var n=i(27378),a=i(51869),s=i(29972);const o=n.forwardRef((function(e,t){const{as:i,className:o,variant:l="text-medium",color:r,align:m,weight:c,italic:h,decoration:p,margin:u,marginLeft:_,marginRight:d,marginTop:g,marginBottom:f,style:b,...P}=e,v={...b,...null!=r&&{color:`var(--color-text-${r})`},...null!=m&&{textAlign:m},...null!=c&&{fontWeight:c},...null!=h&&{fontStyle:h?"italic":"normal"},...null!=p&&{textDecoration:p},...(0,s.A)({margin:u,marginLeft:_,marginRight:d,marginTop:g,marginBottom:f})};return n.createElement(i,{ref:t,className:(0,a.W)("gds-typography","gds-"+(l.startsWith("heading")?"heading":"text"),`gds-${l}`,o),style:v,...P})}))},29972:(e,t,i)=>{function n(e){return.5===e?"half":.25===e?"quarter":`${e}`}function a({margin:e,marginLeft:t,marginRight:i,marginTop:n,marginBottom:a}){const o=function(e){if("string"!=typeof e)return{top:e,right:e,bottom:e,left:e};const t=e.split(" "),i=t[0],n=t[1]||i,a=t[2]||i,s=t[3]||n;return{top:i,right:n,bottom:a,left:s}}(e);return{marginLeft:s(t,o.left),marginRight:s(i,o.right),marginTop:s(n,o.top),marginBottom:s(a,o.bottom)}}function s(e,t){const i=void 0!==e?e:t;if(void 0!==i){if("string"==typeof i)return i;if(i<0){return`calc(var(--space-${n(-1*i)}) * -1)`}return`var(--space-${n(i)})`}}i.d(t,{A:()=>a,J:()=>n})}}]);