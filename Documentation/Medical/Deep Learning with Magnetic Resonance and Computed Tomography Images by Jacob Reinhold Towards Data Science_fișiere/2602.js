(self.webpackChunklite=self.webpackChunklite||[]).push([[2602],{82602:(e,n,t)=>{"use strict";t.d(n,{u:()=>te,S:()=>ae});var a,r=t(28655),i=t.n(r),l=t(63038),o=t.n(l),u=t(71439),c=t(67294),s=t.n(c),m=t(42963),d=t(46829),g=t(58875),p=t.n(g),f=t(9785),h=t(89894),v=t(80735),E=t(62630),x=t(28309),b=t(79208),y=t(90038);!function(e){e.Success="success",e.UploadError="uploadError",e.InvalidError="invalidError"}(a||(a={}));var I={height:"132px",width:"132px",display:"flex",flexDirection:"row",justifyContent:"center"},C=function(e){return{backgroundColor:e.baseColor.background.light,borderColor:e.baseColor.border.light,borderRadius:"3px",borderWidth:"1px",alignItems:"center",padding:"25px 20px 25px 20px",marginTop:"",borderStyle:"solid"}},w=function(e){var n=e.setImageId,t=e.initialImageId,r=e.source,i=(0,E.Av)(),l=(0,f.YC)().value,u=(0,x.Iq)(),c=s().useState({imageId:t,imageWidth:0,imageHeight:0}),m=o()(c,2),d=m[0],g=m[1],p=s().useState(null),w=o()(p,2),R=w[0],k=w[1],S=function(e){k(e),i.event("user.updateAvatarResult",{userId:null==l?void 0:l.id,source:r,uploadResult:e})},D=(0,b.JA)((function(e,t,r){var i=t.height,l=t.width,o=e.value.fileId;g({imageId:o,imageHeight:i,imageWidth:l}),i<parseInt("1000px",10)||l<parseInt("1000px",10)?(S(a.InvalidError),F()):(n(o),S(a.Success),r())}),(function(){S(a.UploadError)}),(function(){S(a.InvalidError)})),L=D.inputRef,T=D.fireClick,U=function(){i.event("user.updateAvatarClick",{userId:null==l?void 0:l.id,source:r,hasImage:!!d.imageId}),T()},F=function(){g({imageId:"",imageWidth:0,imageHeight:0}),n("")},P=function(){return s().createElement("div",{className:u([I,C])},s().createElement(h.xu,{alignContent:"center",textAlign:"center"},s().createElement(h.xu,null,"1000 x 1000"),s().createElement(h.xu,null,"pixels")))},A=function(){return s().createElement("div",{className:u([I])},s().createElement("div",{className:u((function(){return{backgroundImage:"url(".concat((0,y.W6)({miroId:d.imageId||"",width:d.imageWidth||0,height:d.imageHeight||0}),")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"100%",width:"100%",borderRadius:"3px",display:"flex",flexDirection:"row"}}))}))};return s().createElement(h.xu,{display:"flex",flexDirection:"column",maxWidth:"132px"},s().createElement(h.xu,{display:"inline-block",float:"right"},s().createElement((function(){return s().createElement(h.xu,{display:"inline-block",marginBottom:"15px"},d.imageId?s().createElement(A,null):s().createElement(P,null))}),null)),s().createElement((function(){return s().createElement(h.xu,{marginBottom:"10px"},s().createElement("input",{type:"file","aria-hidden":"true",ref:L,className:u({display:"none"})}),s().createElement(h.rU,{inline:!0,linkStyle:"OBVIOUS",onClick:U},"Add photo"))}),null),R===a.UploadError&&s().createElement((function(){return s().createElement(h.xu,{marginTop:"8px"},s().createElement(h.xu,{marginRight:"5px",display:"inline-block"},s().createElement(v.F,{scale:"S",color:"ERROR",tag:"p"},"We couldn't process your request.")),s().createElement(h.xu,{marginRight:"5px",display:"inline-block"},s().createElement(v.F,{scale:"S",tag:"p"},"Try again, or"," ",s().createElement(h.rU,{inline:!0,linkStyle:"OBVIOUS",href:"https://help.medium.com/hc/en-us"},"search our help center for support."))))}),null),R===a.InvalidError&&s().createElement((function(){return s().createElement(h.xu,{marginRight:"5px",display:"inline-block"},s().createElement(v.F,{scale:"S",color:"ERROR",tag:"p"},"That file doesn't meet our requirements. Try another."))}),null))},R=function(e){var n=e.label,t=e.onChangeFn,a=e.onBlurFn,r=e.value,i=e.errorMessage,l=e.characterCountLimit;return s().createElement(s().Fragment,null,s().createElement(h.xu,{marginBottom:"15px",textAlign:"left"},s().createElement(v.F,{scale:"L"},n)),s().createElement(h.nv,{scale:"L",onChange:t,value:r,errorMessage:i,onBlur:a,ariaLabel:n,characterCountLimit:l}))},k=t(22091),S=t(29035);function D(){var e=i()(["\n  mutation userCompleteProfileMutation(\n    $userId: ID!\n    $name: String!\n    $bio: String!\n    $imageId: String!\n  ) {\n    userCompleteProfile(userId: $userId, name: $name, bio: $bio, imageId: $imageId)\n  }\n"]);return D=function(){return e},e}function L(){var e=i()(["\n  fragment UserCompleteProfileDialog_user on User {\n    id\n    name\n    bio\n    imageId\n    hasCompletedProfile\n  }\n"]);return L=function(){return e},e}var T={min:3,max:50,message:"Please try another name that’s between 3 and 50 characters."},U={min:10,max:160,message:"Please try another description that’s between 10 and 160 characters."},F=function(e,n){var t=e.min,a=e.max,r=e.message;return function(e){var i=e.target.value;n(i.length<t||i.length>a?r:void 0)}},P=function(e){var n=(0,f.YC)().value;return{shouldShowDialog:p().canUseDOM&&!(0,S.ic)(navigator.userAgent)&&(null==n?void 0:n.id)===e.id}},A=function(e){var n=e.setHasCompletedProfile,t=e.user,a=(0,E.Av)(),r=(0,f.YC)().value,i=c.useState(!1),l=o()(i,2),u=l[0],s=l[1],m=H(),d=o()(m,1)[0],g=c.useState((null==t?void 0:t.imageId)||""),p=o()(g,2),h=p[0],x=p[1],b=c.useState((null==t?void 0:t.name)||""),y=o()(b,2),I=y[0],C=y[1],S=c.useState((null==t?void 0:t.bio)||""),D=o()(S,2),L=D[0],A=D[1],B=c.useState(),M=o()(B,2),O=M[0],N=M[1],V=c.useState(),$=o()(V,2),_=$[0],G=$[1],W=F(T,N),Y=F(U,G),q=c.useCallback((function(){r&&(s(!0),a.event("user.completedProfile",{userId:r.id,changedName:(null==t?void 0:t.name)!==I,changedBio:(null==t?void 0:t.bio)!==L,changedImage:(null==t?void 0:t.imageId)!==h,hasName:!!I,hasBio:!!L,hasImage:!!h}),d({variables:{userId:r.id,name:I,bio:L,imageId:h}}).then((function(){s(!1),n(!0)})))}),[r,d,s,t,I,L,h]),z=P(t).shouldShowDialog;return c.useEffect((function(){z&&a.event("user.presentedCompleteProfileDialog",{userId:null==r?void 0:r.id})}),[z]),z?c.createElement(c.Fragment,null,c.createElement(k.QH,{contentTag:"p",confirmText:"Continue",titleText:"Complete your profile",isDestructiveAction:!1,onConfirm:q,isVisible:!0,hide:function(){},withCloseButton:!1,showCancelButton:!1,disableConfirm:u},c.createElement(v.F,{scale:"L",color:"DARKER"},"Readers like learning a bit more about their writers"),c.createElement(k.xu,{marginTop:"48px",marginBottom:"28px",display:"flex",flexDirection:"row"},c.createElement(k.xu,{overflow:"visible",maxHeight:"200px"},c.createElement(w,{setImageId:x,initialImageId:h,source:"userCompleteProfileDialog"})),c.createElement(k.xu,{marginLeft:"48px",textAlign:"left"},c.createElement(k.xu,{key:"name"},c.createElement(R,{label:"Full name",onChangeFn:function(e){return C(e.target.value)},onBlurFn:W,value:I,errorMessage:O})),c.createElement(k.xu,{key:"bio",marginTop:"40px"},c.createElement(R,{label:"Bio (optional, max 160 characters)",onChangeFn:function(e){return A(e.target.value)},onBlurFn:Y,value:L,errorMessage:_,characterCountLimit:160})))))):null},B=(0,u.Ps)(L()),H=function(){return(0,d.useMutation)(M)},M=(0,u.Ps)(D()),O=t(23279),N=t.n(O),V=t(70561),$=t(51064),_=t(27952);function G(){var e=i()(["\n  query userDomainValidityQuery($domain: String!) {\n    userDomainValidity(domain: $domain)\n  }\n"]);return G=function(){return e},e}function W(){var e=i()(["\n  mutation createUserDomainMutation($domain: String!) {\n    userDomainLink(domain: $domain) {\n      __typename\n      ... on CustomDomainFailure {\n        reason\n      }\n    }\n  }\n"]);return W=function(){return e},e}function Y(){var e=i()(["\n  fragment UserDomainOnboardingDialog_user on User {\n    id\n    hasDomain\n    username\n  }\n"]);return Y=function(){return e},e}var q=function(e){var n=e.user,t=e.isVisible,a=e.hide,r=e.redirectTo,i=e.redirectOnHide,l=void 0!==i&&i,u=e.refreshOnHide,s=void 0!==u&&u,m=(0,x.Iq)(),d=(0,E.Av)(),g=(0,f.YC)().value,h=(null==g?void 0:g.username)?function(e){return e.toLowerCase().replace(/[_.]/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-/,"").replace(/-$/,"")}(g.username):"",b=c.useState(h),y=o()(b,2),I=y[0],C=y[1],w=(0,$.O)(!1),R=o()(w,3),S=R[0],D=R[1],L=R[2],T=c.useState(!1),U=o()(T,2),F=U[0],P=U[1],A=c.useState(!1),B=o()(A,2),H=B[0],M=B[1],O=Z(I),G=X(I),W=c.useState(null),Y=o()(W,2),q=Y[0],z=Y[1],K=(0,V.v9)((function(e){return e.config})).productName,J=Q(),ee=o()(J,1)[0],ne=j(O),te=ne.isValidityLoading,ae=ne.validityResult,re=ne.checkValidity,ie=c.useCallback(N()((function(e){re(e),P(!1)}),500),[]),le=c.useCallback((function(e){var n=e.target.value;F||P(!0),z(null),ie({domain:n}),C(n)}),[re,F]),oe=c.useCallback((function(){M(!0),d.event("user.claimedSubdomain",{userId:null==g?void 0:g.id,source:"subdomain_dialog",changedUsername:(null==g?void 0:g.username)!==I}),ee({variables:{domain:O}}).then((function(e){var n,t,r,i;if("CustomDomain"===(null===(n=e.data)||void 0===n||null===(t=n.userDomainLink)||void 0===t?void 0:t.__typename))D(),a();else if("CustomDomainFailure"===(null===(r=e.data)||void 0===r||null===(i=r.userDomainLink)||void 0===i?void 0:i.__typename))switch(e.data.userDomainLink.reason){case"AlreadyInUse":z("This name is already in use.");break;case"Length":z("The name must be between 3 and 63 characters long.");break;case"Characters":z("The name can only include lowercase letters, numbers and hyphens.");break;case"StartEnd":z("The name cannot begin or end in a hyphen");break;case"Internal":z("There was a server error, please try again.");break;case"Invalid":z("This name is invalid. Try another one.");break;default:z("Something went wrong. Please try again with a different name.")}else z("Something went wrong. Please try again with a different name.");M(!1)}))}),[ee,d,g,O,I]),ue=c.useCallback((function(){l&&r(G),L(),s&&window.location.reload()}),[G,l,s]),ce=!!g&&n.id===g.id&&!n.hasDomain&&p().canUseDOM;if(c.useEffect((function(){t&&ce&&d.event("user.presentedClaimSubdomainDialog",{userId:null==g?void 0:g.id})}),[t,ce]),!ce)return null;var se=!F&&!te&&(null==ae?void 0:ae.userDomainValidity);return c.createElement(c.Fragment,null,c.createElement(k.QH,{confirmText:"Claim URL",titleText:"Claim your ".concat(K," URL"),isDestructiveAction:!1,onConfirm:oe,isVisible:t,hide:a,withCloseButton:!1,showCancelButton:!1,secondaryButton:c.createElement(k.zx,{href:(0,_.mc)(),size:"REGULAR"},"Learn More"),hideOnConfirm:!1,disableConfirm:H||!!q||!se},"All your stories show up on your profile, and it now comes with a personalized URL. The name you pick below will also be your username on ",K,".",c.createElement(k.xu,{marginBottom:"14px",marginTop:"32px",display:"flex",flexDirection:"column"},c.createElement(k.nv,{ariaLabel:"Profile domain",onChange:le,value:I,errorMessage:null!=q?q:void 0,hideErrorIcon:!0}),!q&&c.createElement(k.xu,{display:"inline-block",marginTop:"8px"},c.createElement("table",{className:m({display:"table",marginLeft:"auto",marginRight:"auto",textAlign:"left",borderSpacing:"4px",tableLayout:"fixed",maxWidth:"100%"})},c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",{className:m({paddingRight:"4px",verticalAlign:"top"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"URL"))),c.createElement("td",null,c.createElement(v.F,{color:"LIGHTER",scale:"M"},O))),c.createElement("tr",null,c.createElement("td",{className:m({paddingRight:"4px",verticalAlign:"top"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"Username"))),c.createElement("td",{className:m({marginBottom:"12px",marginTop:"10px"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},"@",I))),c.createElement("tr",null,c.createElement("td",null),c.createElement("td",{className:m({visibility:I===n.username?"hidden":"visible"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},"@",n.username," will no longer be valid")))))))),c.createElement(k.QH,{confirmText:"Done",titleText:"You're all set.",isDestructiveAction:!1,onConfirm:function(){},isVisible:S,hide:ue,withCloseButton:!1,showCancelButton:!1},"Your profile is now available at your ",K," URL.",c.createElement(k.xu,null,c.createElement(k.xu,{display:"inline-block",marginTop:"28px"},c.createElement("table",{className:m({display:"table",marginLeft:"auto",marginRight:"auto",textAlign:"left",tableLayout:"fixed",maxWidth:"100%"})},c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",{className:m({marginBottom:"12px",paddingRight:"8px",verticalAlign:"top"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"URL"))),c.createElement("td",null,c.createElement(v.F,{color:"LIGHTER",scale:"M"},O))),c.createElement("tr",{className:m({paddingTop:"8px"})},c.createElement("td",{className:m({paddingRight:"8px",verticalAlign:"top"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},c.createElement("strong",null,"Username"))),c.createElement("td",{className:m({marginBottom:"12px"})},c.createElement(v.F,{color:"LIGHTER",scale:"M"},"@",I)))))))))},z=(0,u.Ps)(Y()),Q=function(){return(0,d.useMutation)(K)},K=(0,u.Ps)(W()),j=function(e){var n=(0,d.useQuery)(J,{variables:{domain:e}});return{isValidityLoading:n.loading,validityResult:n.data,checkValidity:n.refetch}},J=(0,u.Ps)(G()),Z=function(e){var n=(0,V.v9)((function(e){return e.config.authDomain})).split(":")[0];return"".concat(e,".").concat(n)},X=function(e){var n=(0,V.v9)((function(e){return e.config.authDomain}));return"https://".concat(e,".").concat(n)},ee=t(77455);function ne(){var e=i()(["\n  fragment UserDomainFlow_user on User {\n    id\n    hasCompletedProfile\n    name\n    bio\n    imageId\n    ...UserCompleteProfileDialog_user\n    ...UserDomainOnboardingDialog_user\n  }\n  ","\n  ","\n"]);return ne=function(){return e},e}var te=function(e){var n=e.user,t=e.redirectOnComplete,a=void 0!==t&&t,r=e.refreshOnComplete,i=void 0!==r&&r,l=e.forceVisible,u=void 0!==l&&l,s="true"===(0,ee.K)().get("showDomainSetup")||u,d=(0,$.O)(s),g=o()(d,3),p=g[0],f=g[2],h=c.useState(n.hasCompletedProfile),v=o()(h,2),E=v[0],x=v[1],b=c.useState(null),y=o()(b,2),I=y[0],C=y[1],w=P(n).shouldShowDialog&&!E&&(!n.name||!n.bio||!n.imageId);return I?c.createElement(m.Z,{to:I,replace:!0}):c.createElement(c.Fragment,null,c.createElement(q,{isVisible:p&&!w,hide:u?function(){}:f,user:n,redirectTo:C,redirectOnHide:a,refreshOnHide:i}),p&&w?c.createElement(A,{user:n,setHasCompletedProfile:x}):null)},ae=(0,u.Ps)(ne(),B,z)},77455:(e,n,t)=>{"use strict";t.d(n,{K:()=>o});var a=t(63038),r=t.n(a),i=t(67294),l=t(51615),o=function(){var e=(0,l.TH)().search,n=i.useState(new URLSearchParams(e));return r()(n,1)[0]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2602.6b57c6de.chunk.js.map