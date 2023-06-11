"use strict";(this.webpackChunk_msteams_multi_window=this.webpackChunk_msteams_multi_window||[]).push([[31888],{142569:(e,i,n)=>{n.d(i,{py:()=>c,Zk:()=>v});var a=n(141999),d=n(403751),l=n(538791),t=n(337390),m=n(330924),k=n(612483);const o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"call"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"call"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"callingFields"}}]}}]}},...n(874477).fJ.definitions]};var s=n(758930),u=n(458281);const[r,v]=(0,d.j)("CallDataProviderContext"),c=e=>{const i=(0,t.x)(),{teamsCallId:n,children:d}=e,[v,c]=a.useMemo((()=>n?((e,i)=>{const n=new k.X(i),a=e.subscribe(n);return[n,()=>a.unsubscribe()]})(i.watchQuery({query:o,variables:{id:n}}),(()=>{const e=(0,s.P)(n,i);return e?{loading:!1,error:void 0,networkStatus:l.I.ready,data:{call:e}}:{loading:!0,error:void 0,networkStatus:l.I.ready,data:{call:null}}})()):[new m.y((e=>e.complete())),u.noop]),[i,n]);return a.useEffect((()=>()=>c()),[c]),a.createElement(r,{source$:v,children:d})};c.displayName="CallDataProvider"},831888:(e,i,n)=>{n.d(i,{W:()=>v});var a=n(141999);if(40179==n.j)var d=n(142569);if(40179==n.j)var l=n(801017);if(40179==n.j)var t=n(962741);var m=n(458281);if(40179==n.j)var k=n(92783);if(40179==n.j)var o=n(223283);if(40179==n.j)var s=n(820572);if(40179==n.j)var u=n(394557);if(40179==n.j)var r=n(692028);function v(e,i){const n=(0,r.Q)(e),v=a.useCallback((({loading:e,errors:i,data:a})=>({loading:e,error:i&&i.length>0&&new s.c({graphQLErrors:i})||void 0,data:(null==a?void 0:a.call)&&{call:(0,m.pick)(a.call,n)}||void 0})),[n]),c=a.useCallback((e=>e.pipe((0,l.U)(v),(0,t.x)(((e,i)=>{var n,a;return e.loading===i.loading&&(0,m.isEqual)(null===(n=e.data)||void 0===n?void 0:n.call,null===(a=i.data)||void 0===a?void 0:a.call)&&(0,u.V)(e.error,i.error)})))),[v]),{doNotRestartObservableOnErrors:N}=(0,k.NC)(o.J.Calling),[F]=(0,d.Zk)(c,i,v,!N&&void 0);return!F&&i?{data:void 0,loading:!1,error:void 0}:null!=F?F:{data:void 0,loading:!0,error:void 0}}},403751:(e,i,n)=>{n.d(i,{j:()=>v,g:()=>S});var a=n(458281),d=n(141999);if(40179==n.j)var l=n(639087);if(40179==n.j)var t=n(612483);if(40179==n.j)var m=n(962741);if(40179==n.j)var k=n(394557);if(40179==n.j)var o=n(122202);if(40179==n.j)var s=n(97919);if(40179==n.j)var u=n(692028);if(40179==n.j)var r=n(159366);const v=(e,i=l.E)=>{const n=d.createContext(i);return n.displayName=e,[c(n),N(n),F(n)]},c=({Provider:e})=>({source$:i,children:n})=>d.createElement(e,{value:i,children:n}),N=e=>(i,n=!1,m,k=!0)=>{(0,a.isBoolean)(i)&&(k=n,n=i,i=void 0);const o=(0,r.w)("setupUseObservableContext"),u=d.useContext(e);d.useEffect((()=>{u===l.E&&o.log("No provider set yet for context",e.displayName)}),[u,o]);const v=d.useMemo((()=>i?u.pipe(i):u),[u,i]),c=d.useRef(),N=d.useRef(!1),[F,S]=d.useState((()=>{if(u instanceof t.X)try{const e=u.getValue(),i=void 0!==e&&m?m(e):e;return c.current=e,N.current=!0,i}catch(e){return}})),p=d.useCallback((e=>{N.current&&(N.current=!1,u instanceof t.X&&c.current===u.getValue())?c.current=void 0:S(e)}),[S,u]),g=n?a.noop:p;return[n?void 0:F,(0,s.m)(v,{next:g},k)]},F=e=>()=>d.useContext(e),S=e=>(i,n)=>{const a=(0,u.Q)(i),l=d.useCallback((e=>e.pipe((0,o.e)(a),(0,m.x)(k.V))),[a]),[t]=e(l);return t||n}},92783:(e,i,n)=>{n.d(i,{NC:()=>l,h_:()=>t});var a=n(141999);if(40179==n.j)var d=n(880598);const l=(e,i)=>{const{coreSettings:n}=(0,d.SE)(),[l,t]=(0,a.useState)((()=>n?n.get(e,i):{}));return(0,a.useEffect)((()=>{if(n){const a=n.getObservable(e,i).subscribe(t);return()=>a.unsubscribe()}return()=>{}}),[n,e,i]),l},t=({category:e,settings:i,children:n})=>n(l(e,i))},327222:(e,i,n)=>{n.d(i,{v7:()=>a});const a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"broadcastMeetingFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BroadcastMeeting"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"composerStreamId"}},{kind:"Field",name:{kind:"Name",value:"broadcastState"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"broadcastStateFields"}}]}},{kind:"Field",name:{kind:"Name",value:"role"}},{kind:"Field",name:{kind:"Name",value:"commands"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"broadcastCommandsFields"}}]}},{kind:"Field",name:{kind:"Name",value:"broadcastMaxAllowedDuration"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"broadcastStateFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BroadcastState"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"status"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"broadcastCommandsFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BroadcastProducerAvailableCommands"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"setLayout"}},{kind:"Field",name:{kind:"Name",value:"start"}},{kind:"Field",name:{kind:"Name",value:"stop"}},{kind:"Field",name:{kind:"Name",value:"updateMediaState"}},{kind:"Field",name:{kind:"Name",value:"restart"}}]}}]}},874477:(e,i,n)=>{n.d(i,{fJ:()=>t});var a=n(687392),d=n(327222),l=n(121584);const t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"callingFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Call"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"participantId"}},{kind:"Field",name:{kind:"Name",value:"callId"}},{kind:"Field",name:{kind:"Name",value:"callType"}},{kind:"Field",name:{kind:"Name",value:"state"}},{kind:"Field",name:{kind:"Name",value:"callMode"}},{kind:"Field",name:{kind:"Name",value:"extendedCallState"}},{kind:"Field",name:{kind:"Name",value:"transferorMri"}},{kind:"Field",name:{kind:"Name",value:"isFake"}},{kind:"Field",name:{kind:"Name",value:"isMuted"}},{kind:"Field",name:{kind:"Name",value:"isExternal"}},{kind:"Field",name:{kind:"Name",value:"isServerMuted"}},{kind:"Field",name:{kind:"Name",value:"isSpeakerMuted"}},{kind:"Field",name:{kind:"Name",value:"isCallParked"}},{kind:"Field",name:{kind:"Name",value:"isHandRaised"}},{kind:"Field",name:{kind:"Name",value:"selfRaiseHandsRank"}},{kind:"Field",name:{kind:"Name",value:"isSpotlighted"}},{kind:"Field",name:{kind:"Name",value:"isSpotlightFeatureEnabled"}},{kind:"Field",name:{kind:"Name",value:"isCompositorEnabled"}},{kind:"Field",name:{kind:"Name",value:"isWeatherpersonCompositionEnabled"}},{kind:"Field",name:{kind:"Name",value:"isWeatherpersonPresenterEnabled"}},{kind:"Field",name:{kind:"Name",value:"isWatermarkEnabled"}},{kind:"Field",name:{kind:"Name",value:"isTogetherModePinned"}},{kind:"Field",name:{kind:"Name",value:"supportedSharingLayouts"}},{kind:"Field",name:{kind:"Name",value:"isAplCustomBackgroundEnabled"}},{kind:"Field",name:{kind:"Name",value:"aplCustomBackgroundId"}},{kind:"Field",name:{kind:"Name",value:"isPPTWeatherpersonEnabled"}},{kind:"Field",name:{kind:"Name",value:"isExtensibleAppWeatherpersonEnabled"}},{kind:"Field",name:{kind:"Name",value:"isPPTSbSAndReporterEnabled"}},{kind:"Field",name:{kind:"Name",value:"isPPTCameoEnabled"}},{kind:"Field",name:{kind:"Name",value:"isCameoPresenterEnabled"}},{kind:"Field",name:{kind:"Name",value:"isAnnotationSharerWindowOn"}},{kind:"Field",name:{kind:"Name",value:"meetingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tenantId"}},{kind:"Field",name:{kind:"Name",value:"organizerId"}},{kind:"Field",name:{kind:"Name",value:"organizerUpn"}}]}},{kind:"Field",name:{kind:"Name",value:"screenSharingBounds"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"top"}},{kind:"Field",name:{kind:"Name",value:"left"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}},{kind:"Field",name:{kind:"Name",value:"isMovePrivateViewingToPPTEnabled"}},{kind:"Field",name:{kind:"Name",value:"isWhiteboardVideoEffectOn"}},{kind:"Field",name:{kind:"Name",value:"sharingLayoutMode"}},{kind:"Field",name:{kind:"Name",value:"isBreakoutRoomsFeatureEnabled"}},{kind:"Field",name:{kind:"Name",value:"isNdiEnabled"}},{kind:"Field",name:{kind:"Name",value:"isRaiseHandsAllowed"}},{kind:"Field",name:{kind:"Name",value:"isVideoOn"}},{kind:"Field",name:{kind:"Name",value:"closedCaptionsLanguage"}},{kind:"Field",name:{kind:"Name",value:"optimalVideoCount"}},{kind:"Field",name:{kind:"Name",value:"isIncomingVideoOn"}},{kind:"Field",name:{kind:"Name",value:"isScreenSharingOn"}},{kind:"Field",name:{kind:"Name",value:"sharingSourceType"}},{kind:"Field",name:{kind:"Name",value:"isReconciled"}},{kind:"Field",name:{kind:"Name",value:"isMergeable"}},{kind:"Field",name:{kind:"Name",value:"isPSTNEnabled"}},{kind:"Field",name:{kind:"Name",value:"isRejoinable"}},{kind:"Field",name:{kind:"Name",value:"failureType"}},{kind:"Field",name:{kind:"Name",value:"abortReason"}},{kind:"Field",name:{kind:"Name",value:"hadRelayWhitelistingIssue"}},{kind:"Field",name:{kind:"Name",value:"isRoomEndedByOrganizer"}},{kind:"Field",name:{kind:"Name",value:"isRoomEndedByTimer"}},{kind:"Field",name:{kind:"Name",value:"hadReconnectingIssue"}},{kind:"Field",name:{kind:"Name",value:"wasNotAdmittedForLongTime"}},{kind:"Field",name:{kind:"Name",value:"isPushToTalkEnabled"}},{kind:"Field",name:{kind:"Name",value:"capabilities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isTransferAllowed"}},{kind:"Field",name:{kind:"Name",value:"isCallParkAvailable"}},{kind:"Field",name:{kind:"Name",value:"isVideoPreviewDisabled"}},{kind:"Field",name:{kind:"Name",value:"isVideoBackgroundSettingsDisabled"}},{kind:"Field",name:{kind:"Name",value:"isPSTNCallbackOptionDisabled"}},{kind:"Field",name:{kind:"Name",value:"isSafeTransferAllowed"}},{kind:"Field",name:{kind:"Name",value:"isCloudRecordingAllowed"}},{kind:"Field",name:{kind:"Name",value:"isTranscriptionAllowed"}},{kind:"Field",name:{kind:"Name",value:"isIpVideoAllowed"}},{kind:"Field",name:{kind:"Name",value:"isSingleOutgoingVideoEnabled"}},{kind:"Field",name:{kind:"Name",value:"allowedRecorder"}}]}},{kind:"Field",name:{kind:"Name",value:"conversationId"}},{kind:"Field",name:{kind:"Name",value:"dominantSpeakerInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"dominantSpeakerInfoFields"}}]}},{kind:"Field",name:{kind:"Name",value:"messageId"}},{kind:"Field",name:{kind:"Name",value:"isBroadcast"}},{kind:"Field",name:{kind:"Name",value:"broadcastMeeting"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"broadcastMeetingFields"}}]}},{kind:"Field",name:{kind:"Name",value:"extendedCallType"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isOneToOnePstn"}},{kind:"Field",name:{kind:"Name",value:"isScreenshareFromChat"}},{kind:"Field",name:{kind:"Name",value:"isFederated"}},{kind:"Field",name:{kind:"Name",value:"isInterop"}},{kind:"Field",name:{kind:"Name",value:"isVoicemailGreeting"}},{kind:"Field",name:{kind:"Name",value:"isEchoBotCall"}},{kind:"Field",name:{kind:"Name",value:"isContentOnlyMode"}},{kind:"Field",name:{kind:"Name",value:"isEmergencyCall"}},{kind:"Field",name:{kind:"Name",value:"isConsultCall"}},{kind:"Field",name:{kind:"Name",value:"isSkypeForConsumerCall"}},{kind:"Field",name:{kind:"Name",value:"isMeetingTransferred"}},{kind:"Field",name:{kind:"Name",value:"isHolographicCall"}},{kind:"Field",name:{kind:"Name",value:"isVideoTeleConferencingCall"}}]}},{kind:"Field",name:{kind:"Name",value:"consultContext"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"consultingWith"}},{kind:"Field",name:{kind:"Name",value:"canTransfer"}}]}},{kind:"Field",name:{kind:"Name",value:"canBeRetried"}},{kind:"Field",name:{kind:"Name",value:"isPresenterConnected"}},{kind:"Field",name:{kind:"Name",value:"isVideoLive"}},{kind:"Field",name:{kind:"Name",value:"isScreenShareLive"}},{kind:"Field",name:{kind:"Name",value:"isCoachSupported"}},{kind:"Field",name:{kind:"Name",value:"meetingRole"}},{kind:"Field",name:{kind:"Name",value:"screenSharingControlStateAsViewer"}},{kind:"Field",name:{kind:"Name",value:"callerMri"}},{kind:"Field",name:{kind:"Name",value:"canAddParticipants"}},{kind:"Field",name:{kind:"Name",value:"callHeldAt"}},{kind:"Field",name:{kind:"Name",value:"selfCapabilities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"canUnmuteSelf"}},{kind:"Field",name:{kind:"Name",value:"canMuteOthers"}}]}},{kind:"Field",name:{kind:"Name",value:"emergencyCallInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"myRoleInEmergencyCall"}},{kind:"Field",name:{kind:"Name",value:"callerLocation"}},{kind:"Field",name:{kind:"Name",value:"callerNumber"}},{kind:"Field",name:{kind:"Name",value:"emergencyCalleeMri"}},{kind:"Field",name:{kind:"Name",value:"chatExists"}}]}},{kind:"Field",name:{kind:"Name",value:"reconciledOriginalId"}},{kind:"Field",name:{kind:"Name",value:"pstnCapabilities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isDialInEnabled"}},{kind:"Field",name:{kind:"Name",value:"isDialOutEnabled"}}]}},{kind:"Field",name:{kind:"Name",value:"forwardingDestinationType"}},{kind:"Field",name:{kind:"Name",value:"callStateProps"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"hyperLinkInTitle"}},{kind:"Field",name:{kind:"Name",value:"descriptionText"}},{kind:"Field",name:{kind:"Name",value:"icon"}},{kind:"Field",name:{kind:"Name",value:"useOutlineIcon"}},{kind:"Field",name:{kind:"Name",value:"telemetryContext"}}]}},{kind:"Field",name:{kind:"Name",value:"isScdEnabled"}},{kind:"Field",name:{kind:"Name",value:"isScdAvailable"}},{kind:"Field",name:{kind:"Name",value:"terminatedReason"}},{kind:"Field",name:{kind:"Name",value:"timeZoneOffset"}},{kind:"Field",name:{kind:"Name",value:"mappedToMeetingRoom"}},{kind:"Field",name:{kind:"Name",value:"breakoutRoomsParticipantDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ParticipantMainMeetingDetails"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"showJoinRoomButton"}},{kind:"Field",name:{kind:"Name",value:"assignedRoomName"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"breakoutRoomsCount"}},{kind:"Field",name:{kind:"Name",value:"breakoutRoomDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"remainingRoomDuration"}},{kind:"Field",name:{kind:"Name",value:"initializedAt"}},{kind:"Field",name:{kind:"Name",value:"remainingRoomDurationMs"}},{kind:"Field",name:{kind:"Name",value:"isBreakoutRoom"}},{kind:"Field",name:{kind:"Name",value:"isBreakoutRoomMain"}},{kind:"Field",name:{kind:"Name",value:"additionalData"}},{kind:"Field",name:{kind:"Name",value:"participantInControl"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"participantId"}}]}},{kind:"Field",name:{kind:"Name",value:"managerUserIds"}},{kind:"Field",name:{kind:"Name",value:"version"}}]}},{kind:"Field",name:{kind:"Name",value:"isBreakoutRoomInvite"}},{kind:"Field",name:{kind:"Name",value:"isMainMeetingInvite"}},{kind:"Field",name:{kind:"Name",value:"initiatedTime"}},{kind:"Field",name:{kind:"Name",value:"meetingData"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"meetingCode"}},{kind:"Field",name:{kind:"Name",value:"passcode"}},{kind:"Field",name:{kind:"Name",value:"meetingUrl"}}]}},{kind:"Field",name:{kind:"Name",value:"meetingDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"meetingCapability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lockMeeting"}},{kind:"Field",name:{kind:"Name",value:"allowMeetingReactions"}},{kind:"Field",name:{kind:"Name",value:"isHostViewModeActive"}},{kind:"Field",name:{kind:"Name",value:"yammerQNAEnabled"}},{kind:"Field",name:{kind:"Name",value:"breakoutRoomsEnabled"}},{kind:"Field",name:{kind:"Name",value:"watermarkScreenShareEnabled"}},{kind:"Field",name:{kind:"Name",value:"watermarkVideoEnabled"}},{kind:"Field",name:{kind:"Name",value:"sensitivityLabelId"}},{kind:"Field",name:{kind:"Name",value:"maskIdentitiesForRole"}},{kind:"Field",name:{kind:"Name",value:"forceAttendeeStreaming"}},{kind:"Field",name:{kind:"Name",value:"meetingEndToEndEncryptionEnabled"}},{kind:"Field",name:{kind:"Name",value:"streamingModeActive"}},{kind:"Field",name:{kind:"Name",value:"allowTranslatedCaptions"}},{kind:"Field",name:{kind:"Name",value:"enableParticipantRenaming"}}]}},{kind:"Field",name:{kind:"Name",value:"exchangeId"}},{kind:"Field",name:{kind:"Name",value:"iCalUid"}},{kind:"Field",name:{kind:"Name",value:"isChannelMeeting"}},{kind:"Field",name:{kind:"Name",value:"isPrivateMeeting"}},{kind:"Field",name:{kind:"Name",value:"isRecurring"}},{kind:"Field",name:{kind:"Name",value:"meetingType"}},{kind:"Field",name:{kind:"Name",value:"meetingJoinUrl"}},{kind:"Field",name:{kind:"Name",value:"masterEventDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"endTime"}},{kind:"Field",name:{kind:"Name",value:"eventType"}},{kind:"Field",name:{kind:"Name",value:"iCalUid"}},{kind:"Field",name:{kind:"Name",value:"isCancelled"}},{kind:"Field",name:{kind:"Name",value:"startTime"}},{kind:"Field",name:{kind:"Name",value:"subject"}}]}},{kind:"Field",name:{kind:"Name",value:"eventDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"endTime"}},{kind:"Field",name:{kind:"Name",value:"eventType"}},{kind:"Field",name:{kind:"Name",value:"iCalUid"}},{kind:"Field",name:{kind:"Name",value:"isCancelled"}},{kind:"Field",name:{kind:"Name",value:"startTime"}},{kind:"Field",name:{kind:"Name",value:"subject"}}]}},{kind:"Field",name:{kind:"Name",value:"templateDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"meetingArtifacts"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"meetingArtifactsCollection"}}]}},{kind:"Field",name:{kind:"Name",value:"meetingInterpretationDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasInterpretation"}},{kind:"Field",name:{kind:"Name",value:"groups"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"floor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"label"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"selfInterpretationDetails"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isInterpreter"}},{kind:"Field",name:{kind:"Name",value:"group"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"label"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"appliedInteractivityLevel"}},{kind:"Field",name:{kind:"Name",value:"sharingPresenterIds"}},{kind:"Field",name:{kind:"Name",value:"isHighFidelityAudioEnabled"}},{kind:"Field",name:{kind:"Name",value:"hasOverflowRoom"}},{kind:"Field",name:{kind:"Name",value:"shouldAutoRejoin"}},{kind:"Field",name:{kind:"Name",value:"vdiCapabilities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"video"}},{kind:"Field",name:{kind:"Name",value:"screenshare"}},{kind:"Field",name:{kind:"Name",value:"appshare"}},{kind:"Field",name:{kind:"Name",value:"hid"}},{kind:"Field",name:{kind:"Name",value:"multimonitorscreenshare"}},{kind:"Field",name:{kind:"Name",value:"remoteaudionotifications"}},{kind:"Field",name:{kind:"Name",value:"compositedevices"}},{kind:"Field",name:{kind:"Name",value:"multiwindow"}},{kind:"Field",name:{kind:"Name",value:"datachannel"}},{kind:"Field",name:{kind:"Name",value:"givecontrol"}},{kind:"Field",name:{kind:"Name",value:"sharesystemaudio"}},{kind:"Field",name:{kind:"Name",value:"backgroundeffects"}}]}},{kind:"Field",name:{kind:"Name",value:"rtmpInProperties"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rtmpEnabled"}}]}},{kind:"Field",name:{kind:"Name",value:"stagingRoomProperties"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"eventActive"}},{kind:"Field",name:{kind:"Name",value:"stagingRoomEnabled"}},{kind:"Field",name:{kind:"Name",value:"eventIsLoading"}}]}},{kind:"Field",name:{kind:"Name",value:"callLimits"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sponsor"}}]}},{kind:"Field",name:{kind:"Name",value:"callEndDiagnosticsInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"callControllerCode"}},{kind:"Field",name:{kind:"Name",value:"callControllerSubCode"}}]}},{kind:"Field",name:{kind:"Name",value:"meetingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tenantId"}},{kind:"Field",name:{kind:"Name",value:"organizerId"}}]}},{kind:"Field",name:{kind:"Name",value:"isImmersiveViewActive"}},{kind:"Field",name:{kind:"Name",value:"userEndpointCount"}},{kind:"Field",name:{kind:"Name",value:"isAppHandlingAudio"}},{kind:"Field",name:{kind:"Name",value:"displayNameOverride"}}]}},...a.y.definitions,...d.v7.definitions,...l.ll.definitions]}},687392:(e,i,n)=>{n.d(i,{y:()=>a});const a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"dominantSpeakerInfoFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DominantSpeakerInfo"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"speakerList"}},{kind:"Field",name:{kind:"Name",value:"timestamp"}}]}}]}},121584:(e,i,n)=>{n.d(i,{KC:()=>a,$c:()=>d,ll:()=>l});const a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"meetingArtifactCollection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactCollection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"changeKey"}},{kind:"Field",name:{kind:"Name",value:"resources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"meetingArtifactV2"}}]}}]}},...{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"meetingArtifactV2"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"location"}},{kind:"Field",name:{kind:"Name",value:"metadata"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"meetingArtifactMetadataEntries"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"meetingArtifactMetadataEntries"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactMetadataEntry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"state"}},{kind:"Field",name:{kind:"Name",value:"isShared"}},{kind:"Field",name:{kind:"Name",value:"linkScope"}},{kind:"Field",name:{kind:"Name",value:"hostClient"}},{kind:"Field",name:{kind:"Name",value:"appId"}},{kind:"Field",name:{kind:"Name",value:"appTitle"}},{kind:"Field",name:{kind:"Name",value:"fileTitle"}},{kind:"Field",name:{kind:"Name",value:"imageUrl"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"fileType"}},{kind:"Field",name:{kind:"Name",value:"fileId"}},{kind:"Field",name:{kind:"Name",value:"baseUrl"}},{kind:"Field",name:{kind:"Name",value:"objectUrl"}},{kind:"Field",name:{kind:"Name",value:"meetingContentMetadataObject"}},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"}}]}}]}.definitions]},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"reserveMeetingArtifactResponse"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ReserveMeetingArtifactResponse"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isLeader"}},{kind:"Field",name:{kind:"Name",value:"secret"}},{kind:"Field",name:{kind:"Name",value:"resourceState"}},{kind:"Field",name:{kind:"Name",value:"expiry"}},{kind:"Field",name:{kind:"Name",value:"collab"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"meetingArtifactCollection"}}]}}]}},...a.definitions]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"meetingArtifactsCollection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactsCollection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"changeKey"}},{kind:"Field",name:{kind:"Name",value:"resources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"meetingArtifactV2Interface"}}]}},{kind:"Field",name:{kind:"Name",value:"errorState"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MsTeamsDataFragmentsCommonMeetingArtifacts_meetingArtifactsErrorState"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"meetingArtifactV2Interface"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2Interface"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"location"}},{kind:"Field",name:{kind:"Name",value:"subType"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2Transcript"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"organizerId"}},{kind:"Field",name:{kind:"Name",value:"threadId"}},{kind:"Field",name:{kind:"Name",value:"callId"}},{kind:"Field",name:{kind:"Name",value:"startTime"}},{kind:"Field",name:{kind:"Name",value:"state"}},{kind:"Field",name:{kind:"Name",value:"messageId"}},{kind:"Field",name:{kind:"Name",value:"groupId"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2Recording"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"}},{kind:"Field",name:{kind:"Name",value:"callId"}},{kind:"Field",name:{kind:"Name",value:"duration"}},{kind:"Field",name:{kind:"Name",value:"ownerOid"}},{kind:"Field",name:{kind:"Name",value:"ownerTid"}},{kind:"Field",name:{kind:"Name",value:"startTime"}},{kind:"Field",name:{kind:"Name",value:"threadId"}},{kind:"Field",name:{kind:"Name",value:"threadMessageId"}},{kind:"Field",name:{kind:"Name",value:"driveItemId"}},{kind:"Field",name:{kind:"Name",value:"driveId"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2Notes"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"state"}},{kind:"Field",name:{kind:"Name",value:"isShared"}},{kind:"Field",name:{kind:"Name",value:"linkScope"}},{kind:"Field",name:{kind:"Name",value:"hostClient"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2MeetingContent"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"appId"}},{kind:"Field",name:{kind:"Name",value:"appTitle"}},{kind:"Field",name:{kind:"Name",value:"fileTitle"}},{kind:"Field",name:{kind:"Name",value:"imageUrl"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"meetingContentMetadataObject"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactV2Default"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"appId"}},{kind:"Field",name:{kind:"Name",value:"appTitle"}},{kind:"Field",name:{kind:"Name",value:"fileTitle"}},{kind:"Field",name:{kind:"Name",value:"imageUrl"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"fileType"}},{kind:"Field",name:{kind:"Name",value:"fileId"}},{kind:"Field",name:{kind:"Name",value:"baseUrl"}},{kind:"Field",name:{kind:"Name",value:"objectUrl"}},{kind:"Field",name:{kind:"Name",value:"meetingContentMetadataObject"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"MsTeamsDataFragmentsCommonMeetingArtifacts_meetingArtifactsErrorState"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeetingArtifactsErrorState"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"}},{kind:"Field",name:{kind:"Name",value:"subCode"}},{kind:"Field",name:{kind:"Name",value:"subError"}}]}}]}},758930:(e,i,n)=>{if(n.d(i,{P:()=>d}),40179==n.j)var a=n(874477);function d(e,i,n){try{return i.readFragment({id:`Call:${e}`,fragment:a.fJ,fragmentName:"callingFields"})||void 0}catch(e){null==n||n.log("getCall - call not found in cache")}}},122202:(e,i,n)=>{n.d(i,{e:()=>t});var a=n(458281);if(40179==n.j)var d=n(801017);if(40179==n.j)var l=n(558621);const t=e=>i=>i.pipe((0,d.U)((i=>e?(0,a.pick)(i,e):i)),(0,l.h)((e=>!(0,a.isEmpty)(e))))}}]);
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/hashed-assets/31888-03efb919136ca358.js.map