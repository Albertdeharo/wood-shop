import{p as y,m as u,a as G,b as p,g as f,u as ke,c as M,d as b,e as n,f as P,h as N,i as x,j as W,k as Ce,l as U,I,n as H,F as E,V as $,o as R,q as A,r as Ve,s as he,t as Se,v as _e,w as xe,x as Ie,y as Pe,z as Ae,A as we,R as Ne,B as Le,C as je,D as Te,E as Be,G as Ee,H as $e,J as Re,K as De,L as Oe,M as Fe,N as Ge,O as Me,P as w,Q as We,S as Ue,T as He,U as K,W as z,X as i,Y as Ke,Z as g,_ as k,$ as ze,a0 as C}from"./index-BbcL7lE3.js";const Je=y({fluid:{type:Boolean,default:!1},...u(),...G(),...p()},"VContainer"),Qe=f()({name:"VContainer",props:Je(),setup(e,l){let{slots:t}=l;const{rtlClasses:a}=ke(),{dimensionStyles:s}=M(e);return b(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[s.value,e.style]},t)),{}}}),J=P.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}),Q=P.reduce((e,l)=>{const t="offset"+N(l);return e[t]={type:[String,Number],default:null},e},{}),Y=P.reduce((e,l)=>{const t="order"+N(l);return e[t]={type:[String,Number],default:null},e},{}),D={col:Object.keys(J),offset:Object.keys(Q),order:Object.keys(Y)};function Ye(e,l,t){let a=e;if(!(t==null||t===!1)){if(l){const s=l.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const qe=["auto","start","end","center","baseline","stretch"],Xe=y({cols:{type:[Boolean,String,Number],default:!1},...J,offset:{type:[String,Number],default:null},...Q,order:{type:[String,Number],default:null},...Y,alignSelf:{type:String,default:null,validator:e=>qe.includes(e)},...u(),...p()},"VCol"),V=f()({name:"VCol",props:Xe(),setup(e,l){let{slots:t}=l;const a=x(()=>{const s=[];let r;for(r in D)D[r].forEach(o=>{const c=e[o],m=Ye(r,o,c);m&&s.push(m)});const d=s.some(o=>o.startsWith("v-col-"));return s.push({"v-col":!d||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return W(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),L=["start","end","center"],q=["space-between","space-around","space-evenly"];function j(e,l){return P.reduce((t,a)=>{const s=e+N(a);return t[s]=l(),t},{})}const Ze=[...L,"baseline","stretch"],X=e=>Ze.includes(e),Z=j("align",()=>({type:String,default:null,validator:X})),et=[...L,...q],ee=e=>et.includes(e),te=j("justify",()=>({type:String,default:null,validator:ee})),tt=[...L,...q,"stretch"],ae=e=>tt.includes(e),ne=j("alignContent",()=>({type:String,default:null,validator:ae})),O={align:Object.keys(Z),justify:Object.keys(te),alignContent:Object.keys(ne)},at={align:"align",justify:"justify",alignContent:"align-content"};function nt(e,l,t){let a=at[e];if(t!=null){if(l){const s=l.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const lt=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X},...Z,justify:{type:String,default:null,validator:ee},...te,alignContent:{type:String,default:null,validator:ae},...ne,...u(),...p()},"VRow"),st=f()({name:"VRow",props:lt(),setup(e,l){let{slots:t}=l;const a=x(()=>{const s=[];let r;for(r in O)O[r].forEach(d=>{const o=e[d],c=nt(r,d,o);c&&s.push(c)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return W(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),it="/wood-shop/assets/logo-DtuIbWiQ.png",rt=f()({name:"VCardActions",props:u(),setup(e,l){let{slots:t}=l;return Ce({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ot=y({opacity:[Number,String],...u(),...p()},"VCardSubtitle"),dt=f()({name:"VCardSubtitle",props:ot(),setup(e,l){let{slots:t}=l;return b(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ct=U("v-card-title"),ut=y({appendAvatar:String,appendIcon:I,prependAvatar:String,prependIcon:I,subtitle:[String,Number],title:[String,Number],...u(),...H()},"VCardItem"),ft=f()({name:"VCardItem",props:ut(),setup(e,l){let{slots:t}=l;return b(()=>{var m;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),d=!!(r||t.append),o=!!(e.title!=null||t.title),c=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[s&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(A,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(E,null,[e.prependAvatar&&n($,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(R,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[o&&n(ct,{key:"title"},{default:()=>{var v;return[((v=t.title)==null?void 0:v.call(t))??e.title]}}),c&&n(dt,{key:"subtitle"},{default:()=>{var v;return[((v=t.subtitle)==null?void 0:v.call(t))??e.subtitle]}}),(m=t.default)==null?void 0:m.call(t)]),d&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(A,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(E,null,[e.appendIcon&&n(R,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n($,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),mt=y({opacity:[Number,String],...u(),...p()},"VCardText"),vt=f()({name:"VCardText",props:mt(),setup(e,l){let{slots:t}=l;return b(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),yt=y({appendAvatar:String,appendIcon:I,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:I,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Ve(),...u(),...H(),...G(),...he(),...Se(),..._e(),...xe(),...Ie(),...Pe(),...p(),...Ae(),...we({variant:"elevated"})},"VCard"),h=f()({name:"VCard",directives:{Ripple:Ne},props:yt(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:s}=Le(e),{borderClasses:r}=je(e),{colorClasses:d,colorStyles:o,variantClasses:c}=Te(e),{densityClasses:m}=Be(e),{dimensionStyles:v}=M(e),{elevationClasses:le}=Ee(e),{loaderClasses:se}=$e(e),{locationStyles:ie}=Re(e),{positionClasses:re}=De(e),{roundedClasses:oe}=Oe(e),S=Fe(e,t),de=x(()=>e.link!==!1&&S.isLink.value),_=x(()=>!e.disabled&&e.link!==!1&&(e.link||S.isClickable.value));return b(()=>{const ce=de.value?"a":e.tag,ue=!!(a.title||e.title!=null),fe=!!(a.subtitle||e.subtitle!=null),me=ue||fe,ve=!!(a.append||e.appendAvatar||e.appendIcon),ye=!!(a.prepend||e.prependAvatar||e.prependIcon),ge=!!(a.image||e.image),pe=me||ye||ve,be=!!(a.text||e.text!=null);return Ge(n(ce,He({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":_.value},s.value,r.value,d.value,m.value,le.value,se.value,re.value,oe.value,c.value,e.class],style:[o.value,v.value,ie.value,e.style],onClick:_.value&&S.navigate,tabindex:e.disabled?-1:void 0},S.linkProps),{default:()=>{var T;return[ge&&n("div",{key:"image",class:"v-card__image"},[a.image?n(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(w,{key:"image-img",cover:!0,src:e.image},null)]),n(We,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),pe&&n(ft,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),be&&n(vt,{key:"text"},{default:()=>{var B;return[((B=a.text)==null?void 0:B.call(a))??e.text]}}),(T=a.default)==null?void 0:T.call(a),a.actions&&n(rt,null,{default:a.actions}),Ue(_.value,"v-card")]}}),[[Me("ripple"),_.value&&e.ripple]])}),{}}}),F=U("v-kbd","kbd"),gt={class:"text-subtitle-1"},pt={__name:"HelloWorld",setup(e){return(l,t)=>(K(),z(Qe,{class:"fill-height"},{default:i(()=>[n(Ke,{class:"align-centerfill-height mx-auto","max-width":"900"},{default:i(()=>[n(w,{class:"mb-4",height:"150",src:it}),t[6]||(t[6]=g("div",{class:"text-center"},[g("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to"),g("h1",{class:"text-h2 font-weight-bold"},"Vuetify")],-1)),t[7]||(t[7]=g("div",{class:"py-4"},null,-1)),n(st,null,{default:i(()=>[n(V,{cols:"12"},{default:i(()=>[n(h,{class:"py-4",color:"surface-variant",image:"https://cdn.vuetifyjs.com/docs/images/one/create/feature.png","prepend-icon":"mdi-rocket-launch-outline",rounded:"lg",variant:"outlined"},{image:i(()=>[n(w,{position:"top right"})]),title:i(()=>t[0]||(t[0]=[g("h2",{class:"text-h5 font-weight-bold"},"Get started",-1)])),subtitle:i(()=>[g("div",gt,[t[3]||(t[3]=k(" Replace this page by removing ")),n(F,null,{default:i(()=>t[1]||(t[1]=[k(ze("<HelloWorld />"))])),_:1}),t[4]||(t[4]=k(" in ")),n(F,null,{default:i(()=>t[2]||(t[2]=[k("pages/index.vue")])),_:1}),t[5]||(t[5]=k(". "))])]),default:i(()=>[n(C,{opacity:".12",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),n(V,{cols:"6"},{default:i(()=>[n(h,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/","prepend-icon":"mdi-text-box-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Learn about all things Vuetify in our documentation.",target:"_blank",title:"Documentation",variant:"text"},{default:i(()=>[n(C,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),n(V,{cols:"6"},{default:i(()=>[n(h,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","prepend-icon":"mdi-star-circle-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Explore available framework Features.",target:"_blank",title:"Features",variant:"text"},{default:i(()=>[n(C,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),n(V,{cols:"6"},{default:i(()=>[n(h,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/components/all","prepend-icon":"mdi-widgets-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Discover components in the API Explorer.",target:"_blank",title:"Components",variant:"text"},{default:i(()=>[n(C,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),n(V,{cols:"6"},{default:i(()=>[n(h,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://discord.vuetifyjs.com","prepend-icon":"mdi-account-group-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Connect with Vuetify developers.",target:"_blank",title:"Community",variant:"text"},{default:i(()=>[n(C,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},kt={__name:"index",setup(e){return(l,t)=>{const a=pt;return K(),z(a)}}};export{kt as default};