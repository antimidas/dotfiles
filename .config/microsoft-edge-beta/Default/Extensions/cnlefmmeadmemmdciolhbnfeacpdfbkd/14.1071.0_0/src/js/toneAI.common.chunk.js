(self.webpackChunk=self.webpackChunk||[]).push([[7725],{15752:(e,t,i)=>{i.r(t),i.d(t,{ToneAIFeature:()=>g});var n=i(40327),s=i(20236),r=i(48015),l=i(74660),o=i(19751),a=i(60797),u=i(17594),d=i(66268),A=i(77610),c=i(35416),p=i(83078),b=i(5114);class g{constructor(e,t,i){this._alertStateService=e,this._getSessionUuid=t,this._gnar=i}initSingleCardAssistantActionsProcessing(e,t){return new o.Observable((()=>{const i=new o.Subscription;return this._subscribeToCommonActions(e,t,i),()=>i.unsubscribe()}))}initAssistantCardActionsProcessing(e,t,i,s,r){return new o.Observable((()=>{const l=new o.Subscription;this._subscribeToCommonActions(t,r,l),l.add(g._getToneAIAlertObservable(s.pipe(o.filter(A.i.isToneAIItem),o.map((e=>e.activeAlert.id))),t).subscribe((e=>this._gnar.toneAIAssistantMiniCardShow(this._getSessionUuidValue(),g._getToneRewriteType(e))))),l.add(g._getToneAIAlertObservable(e.pipe(o.filter(d.lY.isAlertCardShow),o.map((e=>e.alertId))),t).pipe(o.debounceTime(300)).subscribe((e=>this._gnar.toneAIAssistantFullCardShow(this._getSessionUuidValue(),g._getToneRewriteType(e))))),l.add(g._getToneAIAlertObservable(e.pipe(o.filter(d.lY.isAlertApplyAction),o.map((e=>e.alertId))),t).subscribe((e=>this._gnar.toneAIAssistantFullCardReplacementApply(this._getSessionUuidValue(),g._getToneRewriteType(e))))),g._subscribeToMuteOrUndoMuteButtonClick(l,e,i,t,d.lY.isMuteCategoryAction,(e=>this._gnar.toneAIAssistantFullCardMuteButtonClick(this._getSessionUuidValue(),g._getToneRewriteType(e)))),g._subscribeToMuteOrUndoMuteButtonClick(l,e,i,t,d.lY.isUndoMuteCategoryAction,(e=>this._gnar.toneAIAssistantFullCardUndoMuteButtonClick(this._getSessionUuidValue(),g._getToneRewriteType(e))));const a=e.pipe(o.filter(d.lY.isToneAIChangeToneAlternativeAction));return l.add(a.pipe(o.startWith(null),o.pairwise(),o.filter((([e,t])=>(null==e?void 0:e.selectedToneAlternativeIdx)!==(null==t?void 0:t.selectedToneAlternativeIdx))),o.map((([e,t])=>{var i,n;return{oldToneAlternativeIdx:null!==(i=null==e?void 0:e.selectedToneAlternativeIdx)&&void 0!==i?i:null,newToneAlternativeIdx:null!==(n=null==t?void 0:t.selectedToneAlternativeIdx)&&void 0!==n?n:null}})),o.withLatestFrom(g._getToneAIAlertObservable(a.pipe(o.map((e=>e.alertId))),t))).subscribe((([{oldToneAlternativeIdx:e,newToneAlternativeIdx:t},i])=>(0,n.zG)(i.extraProperties.toneAI,p.bw((n=>{this._gnar.toneAIAssistantFullCardSliderMove(null!==t?n.toneAlternatives[t].name:"",null!==e?n.toneAlternatives[e].name:"",this._getSessionUuidValue(),g._getToneRewriteType(i))})))))),l.add(g._getToneAIAlertObservable(e.pipe(o.filter(d.lY.isAlertIgnoreAction),o.map((e=>e.alertId))),t).subscribe((e=>this._gnar.toneAIAssistantFullCardDismissButtonClick(this._getSessionUuidValue(),g._getToneRewriteType(e))))),()=>l.unsubscribe()}))}_subscribeToCommonActions(e,t,i){i.add(this._alertStateService.newlyHighlightedAlerts.pipe(o.filter(s.S.isToneAIAlert)).subscribe((e=>this._gnar.toneAIAlertUnderlineShow(this._getSessionUuidValue(),g._getToneRewriteType(e))))),i.add(g._getToneAIAlertObservable(t.pipe(o.filter(u.$.isToneAI),o.map((e=>e.id))),e).subscribe((e=>this._gnar.toneAIAlertUnderlineClick(this._getSessionUuidValue(),g._getToneRewriteType(e)))))}_getSessionUuidValue(){return(0,n.zG)(this._getSessionUuid(),b.fS((()=>"")))}static _getToneRewriteType(e){return`${e.patternName.split("/").slice(2).join("/")}${e.patternNameQualifier?`_${e.patternNameQualifier}`:""}`}static _subscribeToMuteOrUndoMuteButtonClick(e,t,i,s,l,a){e.add(g._getToneAIAlertObservable(t.pipe(o.filter(l),o.withLatestFrom(i),o.map((([e,t])=>c.nL.hasItems(t)?(0,n.zG)(t.currentLens.items.get(e.id),b.g_((()=>null),(e=>e.value))):null)),o.filter(r.fQ),o.filter(A.i.isToneAIItem),o.map((e=>e.activeAlert.id))),s).subscribe(a))}static _getToneAIAlertObservable(e,t){return e.pipe(o.map(t.getById),a.oA,o.filter(l.bZ.isToneAI))}}}}]);