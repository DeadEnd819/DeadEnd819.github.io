(this["webpackJsonpliga-bank-credit"]=this["webpackJsonpliga-bank-credit"]||[]).push([[7],{51:function(e,t,c){"use strict";var s=c(47),a=c(0),i=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};t.a=function(){var e=Object(a.useState)(i()),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){n(i())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}},54:function(e,t,c){"use strict";var s=c(4),a=c(0),i=c(2),n=function(e){var t=e.className,c=e.slides,s=e.active;return Object(i.jsx)("ul",{className:"".concat(t,"__dots dots"),children:c.map((function(e,t){return Object(i.jsx)("li",{className:"dots__dot".concat(t===s?" dots__dot--active":"")},"dot-".concat(t))}))})},r=c(56),l=(c(62),Object(a.memo)(r.Carousel));t.a=function(e){var t=e.option,c=e.slides,a=e.onChange,r=e.activeItem,o=e.dotClassName;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,Object(s.a)(Object(s.a)({},t),{},{showStatus:!1,showArrows:!1,showIndicators:!1,showThumbs:!1,infiniteLoop:!0,swipeable:!0,emulateTouch:!0,selectedItem:r,onChange:a,children:c})),Object(i.jsx)(n,{className:o,slides:c,active:r})]})}},82:function(e,t,c){"use strict";c.r(t);var s=c(47),a=c(0),i=c(51),n=c(2),r=function(e){var t=e.id,c=e.tab,s=e.activeIndex,a=e.className,i=e.onTabClick;return Object(n.jsx)("li",{className:"tabs__item",children:Object(n.jsx)("button",{className:"tabs__button tabs__button".concat(a," ").concat(s===t?"tabs__button--active":""),id:t,type:"button","aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c ".concat(c),onClick:i,children:c})})},l=c(54),o=c(1);t.default=function(e){var t=e.isWebp,c=Object(a.useState)(0),d=Object(s.a)(c,2),u=d[0],b=d[1],j=Object(i.a)().width>o.E.DESKTOP,m=function(e){return o.w.map((function(t){return Object(n.jsxs)("div",{className:"services__card-service card-service card-service".concat(t.className).concat(e?"-webp":""," container"),children:[Object(n.jsx)("h2",{className:"card-service__title card-service__title".concat(t.className),children:t.title}),Object(n.jsx)("ul",{className:"card-service__list card-service__list".concat(t.className),children:t.list.map((function(e){return Object(n.jsx)("li",{className:"card-service__item",children:e},e)}))}),t.description,t.link&&Object(n.jsx)("a",{className:"card-service__link card-service__link".concat(t.className),href:t.link.href,children:t.link.title})]},t)}))}(t),v=function(e){e.target?b(+e.target.id):b(e)};return Object(n.jsxs)("section",{className:"main__services services",children:[Object(n.jsx)("h2",{className:"visually-hidden",children:"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"}),j?Object(n.jsxs)("div",{className:"services__tabs tabs",children:[Object(n.jsx)("ul",{className:"tabs__list",children:Object.values(o.D).map((function(e,t){return Object(n.jsx)(r,{id:t,tab:e,activeIndex:u,className:o.w[t].className,onTabClick:v},"".concat(t,"-").concat(e))}))}),m[u]]}):Object(n.jsx)(l.a,{option:o.I,slides:m,onChange:v,activeItem:u,dotClassName:"services"})]})}}}]);
//# sourceMappingURL=services.78db5686.chunk.js.map