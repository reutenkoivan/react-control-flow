import{r as f}from"./index-BBkUAzwr.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=f,m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var r,o={},i=null,p=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)u.call(e,r)&&!x.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:m,type:t,key:i,ref:p,props:o,_owner:d.current}}s.Fragment=c;s.jsx=a;s.jsxs=a;l.exports=s;var y=l.exports;const v=({direction:t,gap:e,p:n,align:r,justify:o})=>({display:"flex",flexDirection:t||"column",justifyContent:o||"flex-start",gap:e||0,padding:n||0,alignItems:r||"flex-start"}),S=({children:t,...e})=>y.jsx("div",{style:v(e),children:t});S.__docgenInfo={description:"",methods:[],displayName:"Stack"};const j=f.memo;export{S,j as g,y as j};
