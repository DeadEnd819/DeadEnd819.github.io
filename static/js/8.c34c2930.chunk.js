(this["webpackJsonpliga-bank-credit"]=this["webpackJsonpliga-bank-credit"]||[]).push([[8],{73:function(e,t,a){"use strict";a.r(t);var r,c=a(13),n=a(0),l=a(8),o=a(12),i=a(1),u=function(e){var t=e.children,a=e.legend,r=e.modifier,c=e.error;return Object(i.jsxs)("fieldset",{className:"form-calculator__fieldset form-calculator__fieldset".concat(r).concat(c?" form-calculator__fieldset--error":""),children:[Object(i.jsx)("legend",{className:"form-calculator__legend visually-hidden",children:a}),t]})};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function m(e,t){var a=e.title,c=e.titleId,l=b(e,["title","titleId"]);return n.createElement("svg",s({width:16,height:2,viewBox:"0 0 16 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},l),a?n.createElement("title",{id:c},a):null,r||(r=n.createElement("line",{y1:1,x2:16,y2:1,stroke:"currentColor",strokeWidth:2})))}var f,j=n.forwardRef(m);a.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function p(e,t){var a=e.title,r=e.titleId,c=O(e,["title","titleId"]);return n.createElement("svg",d({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,f||(f=n.createElement("path",{d:"M0 8H16M8 0V16",stroke:"currentColor",strokeWidth:2})))}var _=n.forwardRef(p),h=(a.p,a(5)),g=a(6),x=a(3),v=x.u.CREDIT,C=Object(l.b)((function(e){return{creditData:Object(g.b)(e)}}))((function(e){var t=e.initialValues,a=e.creditData,r=e.onFieldChang,c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],b=l[1],m=a.credit,f=a.type,d=t.min,O=t.max,p=t.step,g=!(m>=d&&m<=O),C=Object(n.useCallback)((function(e){e!==x.j.INCREMENT?r({name:v,value:m-p}):r({name:v,value:m+p})}),[r,m,p]);return Object(i.jsxs)(u,{legend:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438",modifier:"--credit",error:g,children:[Object(i.jsxs)("label",{className:"form-calculator__label form-calculator__label--credit",htmlFor:"credit",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",f===x.f.HOME?"\u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438":"\u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"]}),Object(i.jsx)("input",{className:"form-calculator__input form-calculator__input",id:"credit",name:"credit",type:s?"number":"text",value:s?m:"".concat(Object(h.i)(m)," \u0440\u0443\u0431\u043b\u0435\u0439"),placeholder:"0",autoComplete:"off",onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},onChange:function(e){return r(e.target)}}),Object(i.jsx)("button",{className:"form-calculator__button button button--minus",id:x.j.DECREMENT,type:"button","aria-label":"\u041c\u0435\u043d\u044c\u0448\u0435",disabled:m-p<d,onClick:function(e){return C(e.target.id)},children:Object(i.jsx)(j,{className:"form-calculator__icon form-calculator__icon--minus"})}),Object(i.jsx)("button",{className:"form-calculator__button button button--plus",id:x.j.INCREMENT,type:"button","aria-label":"\u0411\u043e\u043b\u044c\u0448\u0435",disabled:m+p>O,onClick:function(e){return C(e.target.id)},children:Object(i.jsx)(_,{className:"form-calculator__icon form-calculator__icon--plus"})}),Object(i.jsxs)("span",{className:"form-calculator__span form-calculator__span--credit",children:["\u041e\u0442 ",Object(h.i)(d),"\xa0\xa0\u0434\u043e ",Object(h.i)(O)," \u0440\u0443\u0431\u043b\u0435\u0439"]})]})})),y=a(4),N=a(9),k=x.u.CONTRIBUTION,E=Object(l.b)((function(e){return{creditData:Object(g.b)(e)}}))((function(e){var t=e.initialValues,a=e.creditData,r=e.onFieldChang,c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],b=l[1],m=a.credit,f=a.contribution,j=t.min,d=t.max;Object(n.useEffect)((function(){r({name:k,value:Object(h.d)(m,j)})}),[m,j,N.d]);var O=Object(h.d)(m,j),p=Object(h.d)(m,d),_=f&&f>=O&&f<=p?Object(h.h)(f,m):j;return Object(i.jsxs)(u,{legend:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0432\u0437\u043d\u043e\u0441\u0430",modifier:"--contribution",error:!1,children:[Object(i.jsx)("label",{className:"form-calculator__label form-calculator__label--contribution",htmlFor:"contribution",children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),Object(i.jsx)("input",{className:"form-calculator__input form-calculator__input--contribution",id:"contribution",name:"contribution",type:s?"number":"text",value:s?f:"".concat(Object(h.i)(f)," \u0440\u0443\u0431\u043b\u0435\u0439"),placeholder:"0",autoComplete:"off",onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},onChange:function(e){return r(e.target)}}),Object(i.jsx)("input",Object(y.a)(Object(y.a)({},t),{},{className:"form-calculator__range  form-calculator__range--contribution",id:"contribution-range",name:"contribution",type:"range",value:_,onChange:function(e){return r({name:e.target.name,value:Object(h.d)(m,e.target.value)})}})),Object(i.jsxs)("span",{className:"form-calculator__span form-calculator__span--credit--contribution",children:[_,"%"]})]})})),w=Object(l.b)((function(e){return{creditData:Object(g.b)(e)}}))((function(e){var t=e.initialValues,a=e.creditData,r=e.onFieldChang,c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],b=l[1],m=a.time,f=t.min,j=t.max,d=Object(n.useCallback)((function(e){r(m<f?{name:e,value:f}:m>j?{name:e,value:j}:{name:e,value:m}),b(!1)}),[m,j,f,r]);return Object(i.jsxs)(u,{legend:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0440\u043e\u043a\u0430",modifier:"--time",error:!1,children:[Object(i.jsx)("label",{className:"form-calculator__label form-calculator__label--time",htmlFor:"time",children:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(i.jsx)("input",{className:"form-calculator__input form-calculator__input--time",id:"time",name:"time",type:s?"number":"text",value:s?m:"".concat(m," \u043b\u0435\u0442"),placeholder:"1",autoComplete:"off",onFocus:function(){return b(!0)},onBlur:function(e){return d(e.target.name)},onChange:function(e){return r(e.target)}}),Object(i.jsx)("input",Object(y.a)(Object(y.a)({},t),{},{className:"form-calculator__range  form-calculator__range--time",id:"time-range",name:"time",type:"range",value:m,onChange:function(e){return r(e.target)}})),Object(i.jsxs)("div",{className:"form-calculator__span-wrapper",children:[Object(i.jsxs)("span",{className:"form-calculator__span form-calculator__span--time",children:[f," \u043b\u0435\u0442"]}),Object(i.jsxs)("span",{className:"form-calculator__span form-calculator__span--time",children:[j," \u043b\u0435\u0442"]})]})]})})),I=function(e){var t=e.callback,a=e.checked,r=e.name,c=e.label;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{className:"form-calculator__checkbox visually-hidden",type:"checkbox",id:r,name:r,checked:a,onChange:function(e){return t({name:e.target.name,value:e.target.checked})}}),Object(i.jsx)("label",{className:"form-calculator__label form-calculator__label--checkbox  form-calculator__label--".concat(r),htmlFor:r,children:c})]})},F=Object(l.b)((function(e){return{creditData:Object(g.b)(e)}}))((function(e){var t=e.creditData,a=e.onFieldChang,r=t.type,c=t.maternal,n=t.casco,l=t.insurance;return Object(i.jsx)(u,{legend:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",modifier:"--checkbox",error:!1,children:r===x.f.HOME?Object(i.jsx)(I,{callback:a,checked:c,name:x.e.MATERNAL,label:x.d.MATERNAL}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(I,{callback:a,checked:n,name:x.e.CASCO,label:x.d.CASCO}),Object(i.jsx)(I,{callback:a,checked:l,name:x.e.INSURANCE,label:x.d.INSURANCE})]})})})),D=Object(n.memo)(C),R=Object(n.memo)(E),T=Object(n.memo)(w),M=Object(n.memo)(F);t.default=Object(l.b)((function(e){return{creditData:Object(g.b)(e)}}),(function(e){return{setCredit:function(t){e(Object(N.d)(t))}}}))((function(e){var t=e.creditData,a=e.setCredit,r=t.type,l=x.k[r],o=l.CREDIT,u=l.CONTRIBUTION,s=l.TIME;Object(n.useEffect)((function(){a({credit:x.g[r],time:x.k[r].TIME.min,maternal:!1,casco:!1,insurance:!1})}),[r,a]);var b=Object(n.useCallback)((function(e){var r=e.name,n=e.value;a("boolean"!==typeof n?Object(h.a)(t,Object(c.a)({},r,+n)):Object(h.a)(t,Object(c.a)({},r,n)))}),[t,a]);return Object(i.jsxs)("div",{className:"form-calculator__wrapper-step",children:[Object(i.jsx)("h3",{className:"form-calculator__title form-calculator__title--parameters",children:"\u0428\u0430\u0433 2. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u0440\u0435\u0434\u0438\u0442\u0430"}),Object(i.jsx)(D,{initialValues:o,onFieldChang:b}),Object(i.jsx)(R,{initialValues:u,onFieldChang:b}),Object(i.jsx)(T,{initialValues:s,onFieldChang:b}),Object(i.jsx)(M,{onFieldChang:b})]})}))}}]);
//# sourceMappingURL=8.c34c2930.chunk.js.map