(self.webpackChunklite=self.webpackChunklite||[]).push([[2846],{40213:(e,t,n)=>{"use strict";n.d(t,{Vw:()=>D,rz:()=>M,ik:()=>A,ZP:()=>C});var r=n(28655),o=n.n(r),a=n(34575),i=n.n(a),u=n(93913),s=n.n(u),c=n(78585),l=n.n(c),f=n(29754),g=n.n(f),p=n(2205),h=n.n(p),d=n(59713),m=n.n(d),y=n(71439),v=n(67294),E=n(28859),b=n(10515),P=n(99361),S=n(23514),x=n(89894),w=n(28309),O={":after":{display:"block",content:'""',clear:"both"}},_=n(90038),N=n(534);function k(){var e=o()(["\n      fragment PostBodySection_paragraphs on Paragraph {\n        name\n        ...PostBodyParagraph_paragraph\n      }\n      ","\n    "]);return k=function(){return e},e}function I(){var e=o()(["\n  fragment PostBodySection_customStyleSheet on CustomStyleSheet {\n    id\n    ...ParagraphLayoutGrouping_customStyleSheet\n  }\n  ","\n"]);return I=function(){return e},e}function T(){var e=o()(["\n  fragment PostBodySection_privateNote on Note {\n    ...ParagraphLayoutGrouping_privateNote\n  }\n  ","\n"]);return T=function(){return e},e}function B(){var e=o()(["\n  fragment PostBodySection_highlight on Quote {\n    ...ParagraphLayoutGrouping_highlight\n  }\n  ","\n"]);return B=function(){return e},e}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(){return{display:"table-cell",paddingBottom:"32px",verticalAlign:"bottom"}};function G(e){var t,n,r,o,a=e.bgImage,i=e.children,u=e.isFullPage,s=e.paragraphName,c=(0,w.Iq)();return a&&a.id&&u?v.createElement(E.TA,{name:s,type:"bgimage"},v.createElement("div",{className:c((t=a,n=t.id,r=t.originalWidth,o=t.originalHeight,function(){var e=[400,600,800,1e3,1200,1400,1600,1800,2e3],t={miroId:n,strategy:_._S.Resample,verticalGradient:{start:29,end:81,opacity:40}},a=e.reduce((function(n,a,i){var u=(0,_.W6)(j({},t,{width:a,height:a/r*o}));return i===e.length-1?(n.backgroundImage="url(".concat(u,")"),n):(n["@media (min-width: ".concat(a,"px)")]={backgroundImage:"url(".concat(u,")")},n)}),{});return j({backgroundColor:"rgba(0, 0, 0, 0.9)",backgroundPosition:"50% 50%",backgroundSize:"cover",display:"table",minHeight:"100vh",width:"100%"},a)}))},v.createElement("div",{className:c(R)},v.createElement(x.Yi,null,(function(e){return v.createElement(x.f6,{theme:(0,N.GV)(e)},i)}))))):i}var F=function(e){function t(){return i()(this,t),l()(this,g()(t).apply(this,arguments))}return h()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.paragraphViewModels,n=e.postBodyInserts,r=e.section,o=e.customStyleSheet;if(0===t.length)return null;var a=function(e){switch(e){case"SERIES":return{paddingTop:"32px",paddingBottom:"32px",margin:"auto 0",width:"100%"};case"STREAM":case"CARD":case"FULL_PAGE":return{wordBreak:"break-word",wordWrap:"break-word"};default:return{}}}(t[0].richTextStyle),i=(0,S.Lr)(t);return v.createElement(b.M.Consumer,null,(function(e){return v.createElement(x.hS,null,(function(u){return v.createElement("section",{className:u([a,O])},v.createElement(G,{bgImage:r.backgroundImage,isFullPage:"FULL_PAGE"===t[0].richTextStyle,paragraphName:t[0].paragraph.name},i.map((function(t,r){return v.createElement(S.J_,{key:r,layoutGroup:t,postBodyInserts:n,customStyleSheet:o,isEmbedded:e})}))))}))}))}}]),t}(v.Component);m()(F,"fragments",{paragraphs:(0,y.Ps)(k(),P.ZP.fragments.paragraph)});const C=F;var M=(0,y.Ps)(B(),S.Yb),A=(0,y.Ps)(T(),S.gJ),D=(0,y.Ps)(I(),S.tj)},72846:(e,t,n)=>{"use strict";n.d(t,{Pk:()=>se,v:()=>le,xI:()=>ge,XV:()=>ce,w6:()=>fe,ZP:()=>ue});var r=n(28655),o=n.n(r),a=n(67154),i=n.n(a),u=n(319),s=n.n(u),c=n(71439),l=n(67294),f=n(28859),g=n(28309),p={display:"flex",justifyContent:"center",marginTop:"32px",marginBottom:"14px",paddingTop:"24px",paddingBottom:"10px"},h=function(e){return{backgroundColor:e.baseColor.text.darker,borderRadius:"50%",display:"inline-block",height:"3px",width:"3px"}},d={marginRight:"20px"};function m(){var e=(0,g.Iq)();return l.createElement("div",{className:e(p),role:"separator"},l.createElement("span",{className:e([h,d])}),l.createElement("span",{className:e([h,d])}),l.createElement("span",{className:e(h)}))}var y=n(40213),v=n(63038),E=n.n(v),b=n(50008),P=n.n(b),S=n(23450),x=n.n(S),w=n(98281),O=n(89894),_=n(59851),N=n(36808);function k(){var e=o()(["\n  fragment PostNotesDetails_user on User {\n    id\n    imageId\n    name\n    username\n    ...UserAvatar_user\n  }\n  ","\n"]);return k=function(){return e},e}function I(e){var t=e.grid.xStep;return{padding:"".concat(3*t,"px ").concat(4*t,"px ").concat(3*t,"px"),width:"400px"}}var T=l.memo((function(e){var t=e.close,n=e.users,r=(0,g.Iq)(),o=l.useRef(null),a=(0,g.Fg)(),i=a.grid.xStep;return l.useEffect((function(){function e(){var e=o.current;if(e&&e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=n.bottom,i=n.top<0||r>window.innerHeight,u=window.innerWidth<a.breakpoints.xl;(i||u)&&t()}}return N.V6.on("scroll_end",e),N.V6.on("resize_throttled",e),function(){N.V6.off("scroll_end",e),N.V6.off("resize_throttled",e)}}),[]),l.createElement("section",{ref:o,className:r(I)},l.createElement(O.xu,{borderBottom:"BASE_LIGHTER",marginBottom:"-".concat(i,"px"),paddingBottom:"".concat(2*i,"px")},l.createElement(_.Lh,null,"Highlights (".concat(n.length,")"))),l.createElement(O.xu,{marginLeft:"3px"},n.length&&n.map((function(e){return l.createElement(O.xu,{display:"inline-block",key:e.id,marginTop:"".concat(5*i,"px"),marginRight:"".concat(5*i,"px"),width:"".concat(8*i,"px")},l.createElement(w.ZP,{hasPopover:!0,link:!0,user:e,scale:"XS"}))}))))})),B=(0,c.Ps)(k(),w.WQ),L=n(91442),j=n(16803),R=n(93340),G=n(24087),F=n(62240),C=n(24438),M=n(11642);function A(){var e=o()(["\n  fragment PostNotesMarkers_creator on User {\n    id\n    name\n    isFollowing\n  }\n"]);return A=function(){return e},e}function D(){var e=o()(["\n  fragment PostNotesMarkers_highlight on Quote {\n    id\n    endOffset\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    userId\n    user {\n      id\n      name\n      ...PostNotesDetails_user\n    }\n  }\n  ","\n"]);return D=function(){return e},e}function U(){return{border:"none",cursor:"pointer",display:"block",padding:"0px",textAlign:"left",width:"100%"}}function V(){return{left:"100%",position:"absolute",top:0}}function W(e,t){return{marginTop:"6px",maxWidth:"100%",position:"absolute",top:"".concat(e-(t||0),"px"),whiteSpace:"nowrap",width:"100%"}}function z(e){return{marginLeft:"auto",marginRight:"auto",maxWidth:"".concat((0,C.G)(e,8,!0),"px"),position:"relative"}}function H(){return{display:"inline-block",maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}function Y(e,t){return"number"==typeof e.startOffset&&"number"==typeof t.startOffset?e.startOffset<t.startOffset?-1:1:-1}function Z(e,t){var n=t.startOffset,r=t.endOffset,o=t.paragraphs[0].name;if(!o||"number"!=typeof n||"number"!=typeof r)return e;var a=!1,i=e[o]||[];return i.length&&(i=i.map((function(e){var o=n<=e.endOffset+1,i=e.startOffset,u=e.endOffset;return o&&(a=!0,e.highlights.push(t),u=Math.max(r,e.endOffset),i=Math.min(n,e.startOffset)),{highlights:e.highlights,endOffset:u,startOffset:i}}))),a||i.push({highlights:[t],endOffset:r,startOffset:n}),e[o]=i,e}function q(e){var t=e.children,n=e.highlightString,r=e.toggle,o=(0,g.Iq)();return"Top highlight"===n?l.createElement(l.Fragment,null,t):l.createElement("button",{className:o(U),onClick:function(){return r()},onMouseDown:function(e){return e.preventDefault()}},t)}function Q(e){var t=e.creator,n=e.positionMap,r=e.yPosOffset,o=(0,g.Iq)();if("number"!=typeof r)return null;var a=Array.from(n.entries());return l.createElement(G.Z,{nonBlocking:!0},(function(e){return l.createElement(l.Fragment,null,a.map((function(n,a){var i=E()(n,2),u=i[0],s=i[1],c=function(e,t,n){if(1===e.length){if("anon"===e[0].userId)return"Top highlight";if(!t)return null;if(n&&n.id===e[0].userId&&t.id!==n.id&&!n.isFollowing)return null;if(t&&t.id===e[0].userId)return"You highlighted";if(e[0].user&&e[0].user.name)return e[0].user.name}var r=[];if(e.forEach((function(e){if(e.user){var o=t&&t.id===e.userId,a=e.user.name,i=n&&n.id===e.userId&&(!t||t.id!==n.id&&!n.isFollowing);o?r.length&&"You"===r[0]||r.unshift("You"):i||!a||r.includes(a)||r.push(a)}})),!r.length)return"Top highlight";if(1===r.length)return"You"===r[0]?"You highlighted":r[0];if(2===r.length)return"".concat(r[0]," and ").concat(r[1]);var o=r.slice(0,2),a=r.length-o.length;return"".concat(o[0],", ").concat(o[1],", and ").concat(a," ").concat(x()("other",a))}(s,e,t);return c?l.createElement("div",{className:o(W(u,r)),key:a},l.createElement(O.Bn,null,(function(e){var t=e.isVisible,n=e.hide,r=e.toggle;return l.createElement(l.Fragment,null,l.createElement(q,{toggle:r,highlightString:c},l.createElement(F.F,{scale:"S"},l.createElement("span",{className:o(H)},c))),t&&l.createElement(j.G,{boundariesElement:"window",isVisible:!0,hide:n,placement:"right",popoverRenderFn:function(){var e=new Set,t=s.map((function(t){var n=t.user;return n&&n.id&&!e.has(n.id)?(e.add(n.id),n):null})).filter(M.b);return l.createElement(T,{close:n,users:t})}},l.createElement(l.Fragment,null)))}))):null})))}))}var J=l.forwardRef((function(e,t){var n=e.creator,r=e.highlights,o=l.useContext(L.Vc).highlightSegments,a=l.useRef(null),i=l.useState(null),u=E()(i,2),c=u[0],f=u[1],p=(0,g.Iq)(),h=(0,g.Fg)(),d=l.useState(null),m=E()(d,2),y=m[0],v=m[1],b=l.useState(null),S=E()(b,2),x=S[0],w=S[1];return l.useEffect((function(){var e=function(){var e=function(e,t,n){var r=new Map;if(e.size&&t.length){var o=function(e){var t=s()(e).sort(Y).reduce(Z,{});return Object.values(t).reduce((function(e,t){return t&&"object"===P()(t)&&t.length?(e.push.apply(e,s()(t)),e):e}),[])}(t),a=[];o.forEach((function(t){var o=t.highlights[0],i=o.paragraphs[0].name;if(o&&"number"==typeof o.startOffset&&i){var u=e.get("".concat(i,"_").concat(o.startOffset));if(u&&u.ref&&u.ref.current){var s,c=u.ref.current.getBoundingClientRect().top+window.pageYOffset;a.length&&(s=a.find((function(e){return c<e+n.newFonts.body.lineHeight.M&&c>e||c>e-n.newFonts.body.lineHeight.M&&c<e})));var l=s||c,f=r.get(l)||[];f.length||a.push(l);var g=f.concat(t.highlights);g.length&&r.set(l,g)}}}))}return r}(o,r,h);if(f(e),"function"!=typeof t&&(null==t?void 0:t.current)&&w(t.current.offsetTop),null==a?void 0:a.current){var n=a.current.getBoundingClientRect().left,i=window.innerWidth-n-8*h.grid.xStep;v(i)}};N.V6.on("resize_throttled",e);var n=(0,R.x)((function(t){"iframe.resize"!==t.context&&"player.js"!==t.context||e()})).destructor;return e(),function(){N.V6.off("resize_throttled",e),n()}}),[r,o]),l.createElement("div",{className:p(z)},l.createElement(O.xu,{display:"block",xs:{display:"none"},sm:{display:"none"},md:{display:"none"},lg:{display:"none"}},l.createElement("aside",{className:p(V),ref:a,style:{width:y?"".concat(y,"px"):void 0}},c&&l.createElement(Q,{creator:n,highlights:r,positionMap:c,yPosOffset:x,width:y}))))})),X=l.memo(J),K=(0,c.Ps)(D(),B),$=(0,c.Ps)(A()),ee=n(25415),te=n(65441);function ne(){var e=o()(["\n  fragment PostBody_customStyleSheet on CustomStyleSheet {\n    id\n    ...PostBodySection_customStyleSheet\n  }\n  ","\n"]);return ne=function(){return e},e}function re(){var e=o()(["\n  fragment PostBody_privateNote on Note {\n    ...normalizedBodyModel_privateNote\n    ...PostBodySection_privateNote\n  }\n  ","\n  ","\n"]);return re=function(){return e},e}function oe(){var e=o()(["\n  fragment PostBody_creator on User {\n    ...PostNotesMarkers_creator\n  }\n  ","\n"]);return oe=function(){return e},e}function ae(){var e=o()(["\n  fragment PostBody_highlight on Quote {\n    paragraphs {\n      id\n    }\n    ...normalizedBodyModel_highlight\n    ...PostBodySection_highlight\n    ...PostNotesMarkers_highlight\n  }\n  ","\n  ","\n  ","\n"]);return ae=function(){return e},e}function ie(){var e=o()(["\n  fragment PostBody_bodyModel on RichText {\n    sections {\n      name\n      startIndex\n      textLayout\n      imageLayout\n      backgroundImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      videoLayout\n      backgroundVideo {\n        videoId\n        originalHeight\n        originalWidth\n        previewImageId\n      }\n    }\n    paragraphs {\n      id\n      ...PostBodySection_paragraphs\n    }\n    ...normalizedBodyModel_richText\n  }\n  ","\n  ","\n"]);return ie=function(){return e},e}const ue=l.forwardRef((function(e,t){var n,r,o=e.bodyModel,a=e.creator,u=e.customStyleSheet,c=e.highlights,p=e.isAuroraPostPageEnabled,h=e.privateNotes,d=e.postBodyInserts,v=e.richTextStyle,E=void 0===v?"FULL_PAGE":v,b=(0,g.Iq)(),P=null===(n=l.useContext(f.u6).watchedBounds.get("byline"))||void 0===n||null===(r=n.ref)||void 0===r?void 0:r.current,S=P?P.offsetTop-48:100,x={position:"absolute",left:0,top:"calc(100vh + ".concat(S,"px)"),bottom:"calc(100vh + ".concat(100,"px)"),width:"10px",pointerEvents:"none"},w=(0,ee.Zx)().privateNoteSelection,O=l.useMemo((function(){return c&&w?[].concat(s()(c),[w]):c}),[c,w]),_=d?function(e){var t;return Object.keys(e).some((function(n){return!!e[n].find((function(e){return"BYLINE"===e.insertType}))&&(t=n,!0)})),t}(d):void 0,N=l.useMemo((function(){return(0,te.fj)(o,{bylineParagraphName:_,highlights:O,isAuroraPostPageEnabled:p,isPostPage:!0,privateNotes:h,richTextStyle:E})}),[o,O,h,E]),k=d&&d.first;return l.createElement("div",{ref:t},l.createElement(l.Fragment,null,l.createElement(f.TA,{name:"ghost-track",type:"ghost",className:b(x)}),"FULL_PAGE"===E&&c&&c.length>0&&l.createElement(X,{creator:a,highlights:s()(c),ref:t}),!!k&&k.map((function(e,t){return l.createElement("section",{className:b({marginBottom:"20px"}),key:"postBodyInsertFirst_".concat(t)},e.component)}))),N.map((function(e,t){if("HR"===e){var n,r,o=N[t-1],a=N[t+1],s="HR"!==o&&(null==o||null===(n=o.section)||void 0===n?void 0:n.backgroundImage),c="HR"!==a&&(null==a||null===(r=a.section)||void 0===r?void 0:r.backgroundImage);return s||c?null:l.createElement(m,{key:t})}return l.createElement(y.ZP,i()({key:e.section.name||t,customStyleSheet:u,postBodyInserts:d},e))})))}));var se=(0,c.Ps)(ie(),te.gd,y.ZP.fragments.paragraphs),ce=(0,c.Ps)(ae(),te.Cn,y.rz,K),le=(0,c.Ps)(oe(),$),fe=(0,c.Ps)(re(),te.EH,y.ik),ge=(0,c.Ps)(ne(),y.Vw)},23514:(e,t,n)=>{"use strict";n.d(t,{J_:()=>S,Yb:()=>x,gJ:()=>w,tj:()=>O,Lr:()=>_});var r=n(319),o=n.n(r),a=n(28655),i=n.n(a),u=n(59713),s=n.n(u),c=n(71439),l=n(67294),f=n(95064),g=n(22091),p=n(28309),h=n(14391),d=n(65441);function m(){var e=i()(["\n  fragment ParagraphLayoutGrouping_customStyleSheet on CustomStyleSheet {\n    id\n    ...ParagraphStyleGrouping_customStyleSheet\n  }\n  ","\n"]);return m=function(){return e},e}function y(){var e=i()(["\n  fragment ParagraphLayoutGrouping_privateNote on Note {\n    ...ParagraphStyleGrouping_privateNote\n  }\n  ","\n"]);return y=function(){return e},e}function v(){var e=i()(["\n  fragment ParagraphLayoutGrouping_highlight on Quote {\n    ...ParagraphStyleGrouping_highlight\n  }\n  ","\n"]);return v=function(){return e},e}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b={clear:"both"},P={clear:"both",width:"100%"},S=l.memo((function(e){var t,n,r=e.layoutGroup,o=e.postBodyInserts,a=e.customStyleSheet,i=e.isEmbedded,u=(0,p.Iq)(),c=r.styleGroups[0].paragraphViewModels[0].richTextStyle,h=r.styleGroups.map((function(e,t){return l.createElement(f.ZQ,{key:t,styleGroup:e,postBodyInserts:o,customStyleSheet:a})}));if((0,d.jH)(c)||i)return l.createElement(l.Fragment,null,h);switch(r.effectiveLayout){case"OUTSET_CENTER":case"OUTSET_ROW":return l.createElement("div",{className:u(b)},l.createElement(g.Pm,{size:{xs:"full",sm:"full",md:"full",lg:"outset",xl:"outset"}},h));case"FULL_WIDTH":return l.createElement("div",{className:u(P)},h);default:return"FULL_PAGE"===c?l.createElement(g.Pm,{size:"inset"},h):l.createElement("div",{className:u((t=r.effectiveLayout,n={boxSizing:"border-box",margin:"0 auto",width:"100%"},"INSET_CENTER"===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{maxWidth:"700px",padding:"0 1.25em"}):n))},h)}})),x=(0,c.Ps)(v(),f.PL),w=(0,c.Ps)(y(),f.NR),O=(0,c.Ps)(m(),f.gS),_=function(e){var t=[],n=[];e.forEach((function(e){var r=N(e.paragraphStyle,e.paragraph.layout),a=t[t.length-1];if(a&&a.effectiveLayout===r)n.push(e);else{if(a){var i,u=(0,f.lD)(n);(i=a.styleGroups).push.apply(i,o()(u))}n.length=0,n.push(e),t.push({styleGroups:[],effectiveLayout:r})}}));var r=t[t.length-1];if(r){var a,i=(0,f.lD)(n);(a=r.styleGroups).push.apply(a,o()(i))}return t},N=function(e,t){switch(t){case h.ms.INSET_LEFT:case h.ms.OUTSET_LEFT:return"IMG"===e||"IFRAME"===e?h.ms.INSET_CENTER:t;case h.ms.OUTSET_ROW_CONTINUE:return h.ms.OUTSET_ROW;default:return t||h.ms.INSET_CENTER}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2846.b6dc3679.chunk.js.map