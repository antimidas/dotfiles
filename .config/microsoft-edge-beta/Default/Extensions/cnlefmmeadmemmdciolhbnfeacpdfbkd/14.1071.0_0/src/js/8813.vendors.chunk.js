(self.webpackChunk=self.webpackChunk||[]).push([[8813],{48643:(e,t,n)=>{n.d(t,{EJ:()=>M,T9:()=>B,l5:()=>U});var r,o=n(50693),i=n(82900),a=n(74923),s=n(18775),u=n(31099),l=n(98314),c=n(71346),p=n(27378),d=n(71249),_=n(40327),h=n(32952),v=n(44586),f=n(23239),m=n(8543),y=n(93508),b=n(77176),w=n(16118),k=n(98403),x=n(76974),E=n(24209),g=n(38062),C=n(50628),P=n(19751),D=n(17343),F=n(60797),A=n(69935),S=n(5114),T=n(8125),U=function(e){(0,u._)(n,e);var t=(0,c._)(n);function n(){var e;return(0,i._)(this,n),e=t.apply(this,arguments),(0,s._)((0,o._)(e),"_state",e.props.state.pipe(y.O(void 0),b.U((function(e,t){return{state:e,key:t}})),w.G(),b.U((function(t){var n=(0,l._)(t,2),r=n[0],o=n[1],i=e.props.stateToClassMapper(r.state,o.state);return{prev:{key:r.key,state:r.state,view:G(i.prev)},next:{key:o.key,state:o.state,view:G(i.next)}}})))),(0,s._)((0,o._)(e),"_elements",f.h.create(r.empty)),(0,s._)((0,o._)(e),"_done",new h.xQ),(0,s._)((0,o._)(e),"_subs",[]),e}return(0,a._)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.children;this._subs.push(this._state.pipe(b.U((function(n){var o=n.prev,i=n.next,a=t;return void 0===t?r.empty:[(0,_.zG)(o.state,S.ij,S.UI((function(t){return a({state:t,view:o.view,type:"prev",done:function(){return e._done.next("prev")}})})),S.tS(S.ij),S.UI((function(e){return{key:o.key,entry:e}}))),(0,_.zG)(a({state:i.state,view:i.view,type:"next"}),S.ij,S.UI((function(e){return{key:i.key,entry:e}})))]}))).subscribe(k.wW(this._elements)),this._done.subscribe((function(t){"prev"===t&&e._elements.modify((function(e){var t=(0,l._)(e,2),n=(t[0],t[1]);return[S.YP,n]})),"next"===t&&e._elements.set(r.empty)})))}},{key:"componentWillUnmount",value:function(){this._subs.forEach((function(e){return e.unsubscribe()})),this._subs=[]}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.onMount,o=e.onMouseDown;return t?p.createElement(m.F.div,{className:n,mount:r,onMouseDown:o},this._elements.view(d.IX.compact).view((function(e){return e.map((function(e){return p.createElement(p.Fragment,{key:e.key},e.entry)}))}))):null}}]),n}(p.Component),M=function(e){return{start:e,end:e}};function G(e){var t=e.start,n=e.end;return v.y.create((function(e){e.next(t);var r=requestAnimationFrame((function(){return requestAnimationFrame((function(){return e.next(n)}))}));return function(){return cancelAnimationFrame(r)}}))}!function(e){e.empty=[S.YP,S.YP]}(r||(r={}));var B=function(e){var t=e.content.pipe(b.U((function(t){return{className:e.classes.rendered,el:t,onTransitionEnd:T.Q1}})),b.U(S.G),y.O(S.YP),w.G(),b.U((function(t){var n=(0,l._)(t,2),r=n[0],o=n[1];return(0,_.zG)(r,S.g_((function(){return S.UI(x.of)(o)}),(function(t){return(0,_.zG)(o,S.UI((function(n){var r=new h.xQ;return E.T(x.of({className:e.classes.removing,el:t.el,onTransitionEnd:function(){return r.next()}}),g.S3(r.pipe(C.P()),P.timer(e.timeout)).pipe(D.h(n)))})))})))})),F.oA,A.B(),P.shareReplay({refCount:!0,bufferSize:1}));return p.createElement(m.F.div,{className:t.pipe(b.U((function(e){return e.className}))),onTransitionEnd:t.pipe(b.U((function(e){return e.onTransitionEnd})))},t.pipe(b.U((function(e){return e.el}))))}},18813:(e,t,n)=>{n.d(t,{L:()=>q});var r=n(50693),o=n(82900),i=n(74923),a=n(18775),s=n(31099),u=n(50858),l=n(55818),c=n(98314),p=n(71346),d=n(27378),_=n(40327),h=n(32952),v=n(23239),f=n(8543),m=n(54001),y=n(16118),b=n(66310),w=n(19751),k=n(17343),x=n(76974),E=n(95093),g=n(77176),C=n(28043),P=n(2834),D=n(38194),F=n(93508),A=n(598),S=n(2844),T=n(98403),U=n(24713),M=n(50628),G=n(18208),B=n(19962),I=n(5114),N=n(22232),H=n(8125),L=n(48643),R=n(99094),W=n(33678),z=n(101),V=n(90845),j=n(67992),Y=function(e){(0,s._)(n,e);var t=(0,p._)(n);function n(){return(0,o._)(this,n),t.apply(this,arguments)}return n}(L.l5),q=function(e){(0,s._)(n,e);var t=(0,p._)(n);function n(){var e;return(0,o._)(this,n),e=t.apply(this,arguments),(0,a._)((0,r._)(e),"context",void 0),(0,a._)((0,r._)(e),"_uuid",G.fg(12)),(0,a._)((0,r._)(e),"_initialState",!1),(0,a._)((0,r._)(e),"_hovered",v.h.create(e._initialState)),(0,a._)((0,r._)(e),"_hidden",v.h.create(!e._initialState)),(0,a._)((0,r._)(e),"_listPosState",v.h.create({})),(0,a._)((0,r._)(e),"_dropdownEl",null),(0,a._)((0,r._)(e),"_subs",[]),(0,a._)((0,r._)(e),"_viewport",v.h.create(B.UL.empty)),(0,a._)((0,r._)(e),"_labelRef",d.createRef()),(0,a._)((0,r._)(e),"hovered",e._hovered.pipe(y.G(),b.w((function(t){var r=(0,c._)(t,2),o=r[0];return r[1]?w.timer(e.props.showDelay).pipe(k.h(!0)):o?w.timer(void 0===e.props.closeDelay?n.defaultProps.closeDelay:e.props.closeDelay).pipe(k.h(!1)):x.of(!1)})),E.T(n._hoveredForce.pipe(g.U(I.Gg((function(t){return t===e._uuid}))))),C.x(),P.b((function(t){return t&&n._hoveredForce.next(I.G(e._uuid))})),P.b((function(t){return t&&e._hidden.set(!1)})),D.B(),F.O(e._initialState))),(0,a._)((0,r._)(e),"_handleClickForAppearanceHover",(function(t){var r=t.target;if(!B.pK(r)&&!0!==e.props.dontCloseOnClickInside){var o=!B.q_(r,j.P.list);n._hoveredForce.next(o?I.G(e._uuid):I.YP),e._hovered.set(o)}})),(0,a._)((0,r._)(e),"_handleMouseEnterForAppearanceHover",(function(){e._hovered.set(!0)})),(0,a._)((0,r._)(e),"_handleClickForAppearanceClick",(function(t,n){n&&!t.isTrusted||(e._hovered.get()?e._handleClickForAppearanceHover(t):e._hovered.set(!0))})),(0,a._)((0,r._)(e),"_handleMouseEnterForAppearanceClick",(function(t){var r=t.target;B.q_(r,j.P.list)&&(n._hoveredForce.next(I.G(e._uuid)),e._hovered.set(!0))})),(0,a._)((0,r._)(e),"_handleLabelKeyDownForAppearance",(function(t){"Enter"!==t.key&&" "!==t.key||(e._hovered.set(!0),t.preventDefault())})),e}return(0,i._)(n,[{key:"_getHAlign",value:function(e){switch(e){case"left":case"auto":return{left:"0"};case"right":return{right:"0"};case"center":var t=this._dropdownEl?this._dropdownEl.offsetWidth:0;return{right:"50%",marginRight:"-".concat(t/2,"px")};default:return(0,N.vE)(e)}}},{key:"_getVAlign",value:function(e){switch(e){case"top":return{bottom:"100%"};case"bottom":case"auto":return{top:"100%"};default:return(0,N.vE)(e)}}},{key:"calcDropdownPosition",value:function(){var e=this,t=this.props.align,n=this.props.vAlign;this._listPosState.set((0,u._)({},this._getHAlign(t),this._getVAlign(n)));var r="auto"===t,o="auto"===n;(r||o)&&requestAnimationFrame((function(){if(e._dropdownEl){var i=e._viewport.get(),a=e._dropdownEl.getBoundingClientRect();e._listPosState.set((0,u._)({},e._getHAlign(r?i.right<a.right?"right":"left":t),e._getVAlign(o?i.bottom<a.bottom?"top":"bottom":n)))}}))}},{key:"componentDidMount",value:function(){var e=this;this._subs.push(this.hovered.pipe(P.b((function(t){e.props.onVisibilityChange&&e.props.onVisibilityChange(t)})),A.c((0,_.zG)(I.ij(this.props.customPosition),I.g_((function(){return x.of(I.YP)}),(function(e){var t=e.top,n=e.left;return S.aj(T.Dx(t),T.Dx(n)).pipe(g.U(I.G))}))))).subscribe(I.g_((function(){return e.calcDropdownPosition()}),(function(t){var n=(0,c._)(t,2),r=n[0],o=n[1];return e._listPosState.set({top:r,left:o})}))),this.context.pipe(U.j("rect")).subscribe(T.wW(this._viewport))),this.props.forceHide&&this._subs.push(this._hidden.pipe(b.w(T.wX(this.props.forceHide.pipe(M.P())))).subscribe((function(){return e._hidden.set(!0)})))}},{key:"componentWillUnmount",value:function(){this._subs.forEach((function(e){return e.unsubscribe()})),this._subs=[]}},{key:"componentWillReciveProps",value:function(){this.calcDropdownPosition()}},{key:"mapStateToClass",value:function(e,t){var n={start:"",end:""};return t?{prev:n,next:{start:j.P.transparent,end:""}}:{prev:{start:"",end:j.P.transparent},next:n}}},{key:"_behavior",value:function(e){var t=this;return"mouseClick"===this.props.appearanceBehavior?{onClickCapture:function(n){return t._handleClickForAppearanceClick(n,e)},onMouseEnter:this._handleMouseEnterForAppearanceClick,onMouseLeave:function(){return t._hovered.set(t._initialState)}}:{onClickCapture:this._handleClickForAppearanceHover,onMouseEnter:this._handleMouseEnterForAppearanceHover,onMouseLeave:function(){return t._hovered.set(t._initialState)}}}},{key:"_labelBehavior",value:function(){return{onKeyDown:this._handleLabelKeyDownForAppearance}}},{key:"_attachDropdownElementBehavior",value:function(){var e,t=this;null===(e=this._dropdownEl)||void 0===e||e.addEventListener("keydown",(function(e){var n;"Escape"===e.key&&(t._hovered.set(t._initialState),e.preventDefault(),e.stopPropagation(),(null===(n=t._labelRef.current)||void 0===n?void 0:n.firstChild)&&setTimeout((function(){var e,n;return null===(e=null===(n=t._labelRef.current)||void 0===n?void 0:n.firstChild)||void 0===e?void 0:e.focus()}),0))}))}},{key:"_handleDropdownElementMount",value:function(e){this._dropdownEl=e,this._attachDropdownElementBehavior()}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,r=t.id,o=t.name,i=t.ariaLabelledBy,a=t.theme,s=void 0===a?{}:a,c=Boolean(r)?"label-".concat(o,"-").concat(r):"label-".concat(o),p=Boolean(r)?"list-".concat(o,"-").concat(r):"list-".concat(o);return d.createElement(W.a.Context.Consumer,null,(function(t){return d.createElement(R.f.Context.Consumer,null,(function(r){return d.createElement(R.f.Context.Provider,{value:R.f.withValue(r,{hovered:e._hovered})},d.createElement(f.F.div,(0,l._)((0,u._)({role:"combobox"},(0,m.Sh)(j.P.wrapper,s.dropdownContainer),e._behavior(t.has(W.a.Flag.onlyTrustedEvents))),{"aria-haspopup":"listbox","aria-labelledby":null!=i?i:c,"aria-expanded":T.U_(e._hidden),"aria-controls":p}),d.createElement("label",(0,l._)((0,u._)({id:c},e._labelBehavior()),{ref:e._labelRef}),n),d.createElement(Y,{state:e.hovered,stateToClassMapper:e.mapStateToClass},(function(t){return t.state?d.createElement(f.F.div,null,e._hidden.view((function(n){return d.createElement(Q,(0,l._)((0,u._)({id:p,key:"list",name:e.props.name,onTransitionEnd:"prev"===t.type?function(){return e._hidden.set(!0)}:H.Q1},(0,m.Sh)(s.dropdownList,t.view)),{mount:e._handleDropdownElementMount.bind(e),style:e._listPosState,hidden:n,activeDescendantId:e.props.activeDescendantId}),e.props.children)}))):null}))))}))}))}}]),n}(d.PureComponent);(0,a._)(q,"defaultProps",{align:"auto",vAlign:"auto",showDelay:500,closeDelay:500,appearanceBehavior:"mouseHover"}),(0,a._)(q,"Delimiter",(function(){return d.createElement("div",{className:j.P.delimiter})})),(0,a._)(q,"_hoveredForce",new h.xQ),(0,a._)(q,"contextType",z.l.Context);var Q=function(e){var t=V.P.useElWatcher(),n=t.ref,r=t.onMount;return V.P.FocusTrap.useFocusTrap(n),d.createElement(R.f.Context.Consumer,null,(function(t){var n=R.f.emptyWithName("".concat(void 0!==t.name?"".concat(t.name,"/"):"","dropdown-").concat(e.name));return d.createElement(R.f.Context.Provider,{value:n},d.createElement(f.F.div,(0,l._)((0,u._)({id:e.id},(0,m.Sh)(e.className,!0===e.hidden?j.P.hidden:j.P.list)),{style:e.style,mount:function(t){r(t),void 0!==e.mount&&e.mount(t)},role:"listbox","aria-labelledby":e.ariaLabelledBy,"data-role":"dropdown-list","data-name":"dropdown-"+e.name,"aria-activedescendant":e.activeDescendantId,onTransitionEnd:e.onTransitionEnd}),e.children))}))}},67992:(e,t,n)=>{n.d(t,{P:()=>u});var r=n(18245),o=n(89894),i=n(32096),a={position:"absolute",zIndex:i.VN,display:"flex",flexDirection:"column",margin:"".concat(o.ux.rem(.5)," 0"),padding:"".concat(o.ux.rem(.5)," 0"),minWidth:o.ux.percent(100),borderRadius:o.ux.rem(i.Jr),background:r.Il.CoreNeutral0,boxShadow:r.uc.Z200,opacity:1,transition:"opacity .2s"},s={margin:o.ux.rem(.5),height:o.ux.px(1),backgroundColor:r.Il.CoreNeutral20},u={wrapper:o.ux.style({position:"relative"}),list:o.ux.style(a),transparent:o.ux.style({opacity:0}),hidden:o.ux.style({display:"none"}),delimiter:o.ux.style(s)}}}]);