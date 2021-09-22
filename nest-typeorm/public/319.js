"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[319],{56319:function(e,t,n){n.r(t);var a=n(38678),l=n(73046),r=n(83564),c=n(9669),u=n.n(c),i=n(67294),o=n(5977),s=n(68575);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=(0,s.ZP)("/api/users",r.Z).data,t=m((0,i.useState)(!1),2),n=t[0],c=t[1],d=m((0,i.useState)(!1),2),p=d[0],f=d[1],v=m((0,i.useState)(!1),2),E=v[0],h=v[1],y=m((0,a.Z)(""),2),b=y[0],w=y[1],g=m((0,a.Z)(""),2),k=g[0],_=g[1],C=m((0,a.Z)(""),3),I=C[0],S=C[2],j=m((0,a.Z)(""),3),A=j[0],Z=j[2],x=(0,i.useCallback)((function(e){S(e.target.value),h(A!==e.target.value)}),[A]),O=(0,i.useCallback)((function(e){Z(e.target.value),h(I!==e.target.value)}),[I]),z=(0,i.useCallback)((function(e){e.preventDefault(),k&&k.trim()&&(E||(c(!1),f(!1),u().post("/api/users",{email:b,nickname:k,password:I}).then((function(){f(!0)})).catch((function(e){var t,n;c(403===(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.statusCode))}))))}),[b,k,I,E]);return e?i.createElement(o.l_,{to:"/workspace/sleact"}):i.createElement("div",{id:"container"},i.createElement(l.h4,null,"Sleact"),i.createElement(l.l0,{onSubmit:z},i.createElement(l.__,{id:"email-label"},i.createElement("span",null,"이메일 주소"),i.createElement("div",null,i.createElement(l.II,{type:"email",id:"email",name:"email",value:b,onChange:w}))),i.createElement(l.__,{id:"nickname-label"},i.createElement("span",null,"닉네임"),i.createElement("div",null,i.createElement(l.II,{type:"text",id:"nickname",name:"nickname",value:k,onChange:_}))),i.createElement(l.__,{id:"password-label"},i.createElement("span",null,"비밀번호"),i.createElement("div",null,i.createElement(l.II,{type:"password",id:"password",name:"password",value:I,onChange:x}))),i.createElement(l.__,{id:"password-check-label"},i.createElement("span",null,"비밀번호 확인"),i.createElement("div",null,i.createElement(l.II,{type:"password",id:"password-check",name:"password-check",value:A,onChange:O})),E&&i.createElement(l.jj,null,"비밀번호가 일치하지 않습니다."),!k&&i.createElement(l.jj,null,"닉네임을 입력해주세요."),n&&i.createElement(l.jj,null,"이미 가입된 이메일입니다."),p&&i.createElement(l.fB,null,"회원가입되었습니다! 로그인해주세요.")),i.createElement(l.zx,{type:"submit"},"회원가입")),i.createElement(l.Ji,null,"이미 회원이신가요? ",i.createElement("a",{href:"/login"},"로그인 하러가기")))}}}]);