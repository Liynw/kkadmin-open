import{_ as k,z as d,N as L,aL as B,a as y,W as S}from"./index.0af24477.js";import{B as D,c5 as v,j as f,a1 as o,D as n,F as w,w as P,a2 as u,ad as m,L as C,ab as E,u as r}from"./vendor.bf608252.js";import{c as T,u as F}from"./index.1ece48f6.js";import I from"./SessionTimeoutLogin.e9eee6d0.js";import"./index.fbda4eff.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.87da669f.js";/* empty css               *//* empty css               */import"./lock.5e08a818.js";import"./Login.40f08bc9.js";import"./LoginForm.f7e0ce19.js";/* empty css              *//* empty css               */import"./LoginFormTitle.5e93b7dc.js";const x=D({name:"LayoutFeatures",components:{BackTop:v,LayoutLockPage:T(()=>d(()=>import("./index.b1cb8599.js"),["assets/index.b1cb8599.js","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/LockPage.70edbee2.js","assets/LockPage.74e81a43.css","assets/index.0af24477.js","assets/index.007abcad.css","assets/lock.5e08a818.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>d(()=>import("./index.9ad55c43.js").then(function(e){return e.i}),["assets/index.9ad55c43.js","assets/index.17eb4c41.css","assets/index.ce503081.js","assets/index.5c7227e9.css","assets/index.00780982.css","assets/index.0af24477.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.1ece48f6.js","assets/index.f8c87140.css","assets/index.5aa8aa0e.css","assets/index.fbda4eff.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.87da669f.js","assets/lock.5e08a818.js"])),SessionTimeoutLogin:I},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:g}=L(),_=B(),{prefixCls:l}=y("setting-drawer-feature"),{getShowHeader:s}=F(),a=f(()=>_.getSessionTimeout),i=f(()=>{if(!r(p))return!1;const t=r(c);return t===S.AUTO?!r(s)||r(g):t===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:i,prefixCls:l,getIsSessionTimeout:a}}});function O(e,p,c,g,_,l){const s=o("LayoutLockPage"),a=o("BackTop"),i=o("SettingDrawer"),t=o("SessionTimeoutLogin");return n(),w(E,null,[P(s),e.getUseOpenBackTop?(n(),u(a,{key:0,target:e.getTarget},null,8,["target"])):m("",!0),e.getIsFixedSettingDrawer?(n(),u(i,{key:1,class:C(e.prefixCls)},null,8,["class"])):m("",!0),e.getIsSessionTimeout?(n(),u(t,{key:2})):m("",!0)],64)}var J=k(x,[["render",O]]);export{J as default};
