(this["webpackJsonpliga-bank-credit"]=this["webpackJsonpliga-bank-credit"]||[]).push([[7],{40:function(e,t,c){"use strict";var s=c(37),a=c(0),i=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};t.a=function(){var e=Object(a.useState)(i()),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){n(i())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}},42:function(e,t,c){"use strict";c(0);var s=c(2);t.a=function(e){var t=e.className,c=e.slides,a=e.active;return Object(s.jsx)("ul",{className:"".concat(t,"__dots dots"),children:c.map((function(e,t){return Object(s.jsx)("li",{className:"dots__dot".concat(t===a?" dots__dot--active":"")},"dot-".concat(t))}))})}},70:function(e,t,c){"use strict";c.r(t);var s=c(37),a=c(0),i=c(44),n=c(40),r=c(2),l=function(e){var t=e.id,c=e.tab,s=e.activeIndex,a=e.className,i=e.onTabClick;return Object(r.jsx)("li",{className:"tabs__item",children:Object(r.jsx)("button",{className:"tabs__button tabs__button".concat(a," ").concat(s===t?"tabs__button--active":""),id:t,type:"button","aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c ".concat(c),onClick:i,children:c})})},o=c(42),d=c(1);t.default=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],u=t[1],b=Object(n.a)().width>1023,j=d.y.map((function(e){return Object(r.jsxs)("div",{className:"services__card-service card-service card-service".concat(e.className," container"),children:[Object(r.jsx)("h2",{className:"card-service__title card-service__title".concat(e.className),children:e.title}),Object(r.jsx)("ul",{className:"card-service__list card-service__list".concat(e.className),children:e.list.map((function(e){return Object(r.jsx)("li",{className:"card-service__item",children:e},e)}))}),e.description,e.link&&Object(r.jsx)("a",{className:"card-service__link card-service__link".concat(e.className),href:e.link.href,children:e.link.title})]},e)})),v=function(e){e.target?u(+e.target.id):u(e)};return Object(r.jsx)("section",{className:"main__services services",children:b?Object(r.jsxs)("div",{className:"services__tabs tabs",children:[Object(r.jsx)("ul",{className:"tabs__list",children:Object.values(d.F).map((function(e,t){return Object(r.jsx)(l,{id:t,tab:e,activeIndex:c,className:d.y[t].className,onTabClick:v},"".concat(t,"-").concat(e))}))}),j[c]]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.Carousel,{selectedItem:c,showStatus:!1,showArrows:!1,showIndicators:!1,autoFocus:!1,autoPlay:!1,interval:864e5,transitionTime:1500,infiniteLoop:!0,swipeable:!0,emulateTouch:!0,onChange:v,children:j}),Object(r.jsx)(o.a,{className:"services",slides:j,active:c})]})})}}}]);
//# sourceMappingURL=services.cb8fcc22.chunk.js.map