(this["webpackJsonpliga-bank-credit"]=this["webpackJsonpliga-bank-credit"]||[]).push([[14],{58:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return G})),n.d(e,"a",(function(){return it})),n.d(e,"b",(function(){return pt}));var o=n(0),r=n.n(o),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{};function s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function a(t,e){return t(e={exports:{}},e.exports),e.exports}var c="function"==typeof Symbol&&Symbol.for,u=c?Symbol.for("react.element"):60103,p=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,l=c?Symbol.for("react.strict_mode"):60108,d=c?Symbol.for("react.profiler"):60114,m=c?Symbol.for("react.provider"):60109,y=c?Symbol.for("react.context"):60110,h=c?Symbol.for("react.async_mode"):60111,v=c?Symbol.for("react.concurrent_mode"):60111,b=c?Symbol.for("react.forward_ref"):60112,j=c?Symbol.for("react.suspense"):60113,O=c?Symbol.for("react.suspense_list"):60120,_=c?Symbol.for("react.memo"):60115,g=c?Symbol.for("react.lazy"):60116,w=c?Symbol.for("react.block"):60121,E=c?Symbol.for("react.fundamental"):60117,C=c?Symbol.for("react.responder"):60118,P=c?Symbol.for("react.scope"):60119;function R(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case u:switch(t=t.type){case h:case v:case f:case d:case l:case j:return t;default:switch(t=t&&t.$$typeof){case y:case b:case g:case _:case m:return t;default:return e}}case p:return e}}}function S(t){return R(t)===v}var M={AsyncMode:h,ConcurrentMode:v,ContextConsumer:y,ContextProvider:m,Element:u,ForwardRef:b,Fragment:f,Lazy:g,Memo:_,Portal:p,Profiler:d,StrictMode:l,Suspense:j,isAsyncMode:function(t){return S(t)||R(t)===h},isConcurrentMode:S,isContextConsumer:function(t){return R(t)===y},isContextProvider:function(t){return R(t)===m},isElement:function(t){return"object"==typeof t&&null!==t&&t.$$typeof===u},isForwardRef:function(t){return R(t)===b},isFragment:function(t){return R(t)===f},isLazy:function(t){return R(t)===g},isMemo:function(t){return R(t)===_},isPortal:function(t){return R(t)===p},isProfiler:function(t){return R(t)===d},isStrictMode:function(t){return R(t)===l},isSuspense:function(t){return R(t)===j},isValidElementType:function(t){return"string"==typeof t||"function"==typeof t||t===f||t===v||t===d||t===l||t===j||t===O||"object"==typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===_||t.$$typeof===m||t.$$typeof===y||t.$$typeof===b||t.$$typeof===E||t.$$typeof===C||t.$$typeof===P||t.$$typeof===w)},typeOf:R};a((function(t,e){})),a((function(t){t.exports=M})),function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}();function x(){}function T(){}Function.call.bind(Object.prototype.hasOwnProperty),T.resetWarningCache=x;var k=a((function(t){t.exports=function(){function t(t,e,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:T,resetWarningCache:x};return n.PropTypes=n,n}()})),$=s(a((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}}))),A=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},U="__global_unique_id__",D=function(){return i[U]=(i[U]||0)+1},B=function(){},F=a((function(t,e){e.__esModule=!0;var n=i(k),o=i(D);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(B),e.default=function(t,e){var i,u,p="__create-react-context-"+(0,o.default)()+"__",f=function(t){function n(){var e,o,r,i;s(this,n);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return e=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter((function(e){return e!==t}))},get:function(){return r},set:function(t,e){r=t,i.forEach((function(t){return t(r,e)}))}}),a(o,e)}return c(n,t),n.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,o=t.value,r=void 0;((i=n)===(s=o)?0!==i||1/i==1/s:i!=i&&s!=s)?r=0:(r="function"==typeof e?e(n,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var i,s},n.prototype.render=function(){return this.props.children},n}(r.a.Component);f.childContextTypes=((i={})[p]=n.default.object.isRequired,i);var l=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=o=a(this,e.call.apply(e,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,t)}return c(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.a.Component);return l.contextTypes=((u={})[p]=n.default.object,u),{Provider:f,Consumer:l}},t.exports=e.default}));s(F);var W=s(a((function(t,e){e.__esModule=!0;var n=i(r.a),o=i(F);function i(t){return t&&t.__esModule?t:{default:t}}e.default=n.default.createContext||o.default,t.exports=e.default}))),L=W(null),N=W(null),z=function(t){return function(e){return r.a.createElement(N.Consumer,null,(function(n){return r.a.createElement(t,Object.assign({},{parent:n},e))}))}};function q(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=[]);var o=function(o){function i(){o.call(this),this.state={loading:!0},this._isMounted=!1}return o&&(i.__proto__=o),(i.prototype=Object.create(o&&o.prototype)).constructor=i,i.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then((function(e){return Promise.all(n.concat(t.props.modules).map(e.loadModule)).then((function(){!0===t._isMounted&&t.setState({loading:!1},(function(){t.props.onLoad(e)}))}))})).catch((function(e){!0===t._isMounted&&t.props.onError(e)}))},i.prototype.componentWillUnmount=function(){this._isMounted=!1},i.prototype.render=function(){var n=this.props.ymaps,o=!1===e||!1===this.state.loading,i=A(this.props,["onLoad","onError","modules","ymaps"]);return o&&r.a.createElement(t,Object.assign({},{ymaps:n.getApi()},i))},i}(r.a.Component);return o.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},function(t){var e=$(t);return function(n){return r.a.createElement(L.Consumer,null,(function(o){if(null===o)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+e+" /> is inside <YMaps /> provider");return r.a.createElement(t,Object.assign({},{ymaps:o},n))}))}}(o)}var I={lang:"ru_RU",load:"",ns:"",mode:"release"},V={},Z=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||I.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};Z.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},Z.prototype.setApi=function(t){return this.api=t},Z.prototype.getPromise=function(){return this.namespace?V[this.namespace]:this.promise},Z.prototype.setPromise=function(t){return this.namespace?V[this.namespace]=this.promise=t:this.promise=t},Z.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},I,this.options.query),n=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise((function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready((function(){return e(t.setApi(n))}))},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])}));return this.setPromise(r)},Z.prototype.fetchScript=function(t){var e=this;return new Promise((function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)}))},Z.prototype.loadModule=function(t){var e=this;return new Promise((function(n,o){e.getApi().modules.require(t,(function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,i=t;e.length>1;)i[r=e.shift()]||(i[r]={}),i=i[r];i[e[0]]=!0===o&&i[e[0]]||n}(e.api,t,o,!0),n(o)}),o,e.getApi())}))},Z._name="__react-yandex-maps__";var G=function(t){function e(e){t.call(this,e),this.ymaps=new Z(e)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},e.prototype.render=function(){return r.a.createElement(L.Provider,{value:this.ymaps},this.props.children)},e}(r.a.Component);G.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var Y=/^on(?=[A-Z])/;function J(t){return Object.keys(t).reduce((function(e,n){if(Y.test(n)){var o=n.replace(Y,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e}),{_events:{}})}function H(t,e,n){"function"==typeof n&&t.events.add(e,n)}function K(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function Q(t,e,n){Object.keys(Object.assign({},e,n)).forEach((function(o){e[o]!==n[o]&&(K(t,o,e[o]),H(t,o,n[o]))}))}var X=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function tt(t,e){return void 0!==t[e]||void 0===t[X(e)]}function et(t,e,n){return(tt(t,e)?t[e]:t[X(e)])||n}function nt(t,e,n){if(void 0===n&&(n=null),t!==e){if(t&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),!e)return;e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n)}}function ot(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}}var rt=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=ot(this.props),e=J(this.props),n=A(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return r.a.createElement(N.Provider,{value:this.state.instance},r.a.createElement("div",Object.assign({},{ref:this._getRef},t,n),this.props.children))},e.mountObject=function(t,e,n){var o=J(n),r=o.instanceRef,i=o._events,s=new e(t,et(n,"state"),et(n,"options"));return Object.keys(i).forEach((function(t){return H(s,t,i[t])})),nt(null,r,s),s},e.updateObject=function(t,e,n){var o=J(n),r=o._events,i=o.instanceRef,s=J(e),a=s._events,c=s.instanceRef;if(tt(n,"state")){var u=et(e,"state",{}),p=et(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),p.zoom&&u.zoom!==p.zoom&&t.setZoom(p.zoom),p.center&&u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(tt(n,"options")){var f=et(e,"options"),l=et(n,"options",{});f!==l&&t.options.set(l)}et(e,"width")===et(n,"width")&&et(e,"height")===et(n,"height")||t.container.fitToViewport(),Q(t,a,r),nt(c,i,t)},e.unmountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach((function(e){return K(t,e,r[e])})),t.destroy(),nt(o))},e}(r.a.Component);rt.defaultProps={width:320,height:240};var it=q(rt,!0,["Map"]),st=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&e.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((function(e){return t._mounted&&t.setState({instance:e})}))},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){this._mounted=!1,e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=ot(this.props);return r.a.createElement("div",Object.assign({},{ref:this._getRef},t))},e.mountObject=function(t,e,n){var o=J(n),r=o.instanceRef,i=o._events,s=et(n,"point"),a=et(n,"locateOptions"),c=et(n,"options");return new Promise((function(n,o){e.locate(s,a).done((function(o){if(o.length>0){var s=new e.Player(t,o[0],c);nt(null,r,s),Object.keys(i).forEach((function(t){return H(s,t,i[t])})),n(s)}}),o)}))},e.updateObject=function(t,e,n){var o=J(n),r=o._events,i=o.instanceRef,s=J(e),a=s._events,c=s.instanceRef;if(tt(n,"options")){var u=et(e,"options"),p=et(n,"options");u!==p&&t.options.set(p)}if(tt(n,"point")){var f=et(n,"point"),l=et(e,"point"),d=et(n,"locateOptions");f!==l&&t.moveTo(f,d)}Q(t,a,r),nt(c,i,t)},e.unmountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach((function(e){return K(t,e,r[e])})),nt(o))},e}(r.a.Component);st.defaultProps={width:320,height:240};q(st,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]);var at=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateControl(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountControl(this.state.instance,this.props)},e.prototype.render=function(){return r.a.createElement(N.Provider,{value:this.state.instance},this.props.children)},e.mountControl=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n.lazy,s=n._events,a=new t({data:et(e,"data"),options:et(e,"options"),state:et(e,"state"),mapTypes:et(e,"mapTypes"),lazy:i});if(Object.keys(s).forEach((function(t){return H(a,t,s[t])})),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return nt(null,o,a),a},e.updateControl=function(t,e,n){var o=J(n),r=o._events,i=o.instanceRef,s=J(e),a=s._events,c=s.instanceRef;if(tt(n,"options")){var u=et(e,"options"),p=et(n,"options");u!==p&&t.options.set(p)}if(tt(n,"data")){var f=et(e,"data"),l=et(n,"data");f!==l&&t.data.set(l)}if(tt(n,"state")){var d=et(e,"state"),m=et(n,"state");d!==m&&t.state.set(m)}if(tt(n,"mapTypes")){var y=et(e,"mapTypes"),h=et(n,"mapTypes");y!==h&&(t.removeAllMapTypes(),h.forEach((function(e){return t.addMapType(e)})))}Q(t,a,r),nt(c,i,t)},e.unmountControl=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return K(t,e,i[e])})),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),nt(o))},e}(r.a.Component),ct=(z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"Button"}))}),!0,["control.Button"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"FullscreenControl"}))}),!0,["control.FullscreenControl"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"GeolocationControl"}))}),!0,["control.GeolocationControl"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"ListBox"}))}),!0,["control.ListBox"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"ListBoxItem"}))}),!0,["control.ListBoxItem"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"RouteButton"}))}),!0,["control.RouteButton"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"RouteEditor"}))}),!0,["control.RouteEditor"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"RoutePanel"}))}),!0,["control.RoutePanel"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"RulerControl"}))}),!0,["control.RulerControl"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"SearchControl"}))}),!0,["control.SearchControl"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"TrafficControl"}))}),!0,["control.TrafficControl"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"TypeSelector"}))}),!0,["control.TypeSelector"])),z(q((function(t){return r.a.createElement(at,Object.assign({},t,{name:"ZoomControl"}))}),!0,["control.ZoomControl"])),z(q(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return r.a.createElement(N.Provider,{value:this.state.instance},this.props.children)},e.mountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(et(e,"options"));if(Object.keys(i).forEach((function(t){return H(s,t,i[t])})),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(s)}return nt(null,o,s),s},e.updateObject=function(t,e,n){var o=J(n),r=o._events,i=o.instanceRef,s=J(e),a=s._events,c=s.instanceRef;if(tt(n,"options")){var u=et(e,"options"),p=et(n,"options");u!==p&&t.options.set(p)}Q(t,a,r),nt(c,i,t)},e.unmountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return K(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),nt(o))},e}(r.a.Component),!0,["Clusterer"])),z(q(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events,s=et(e,"options",{}),a=et(e,"features",{}),c=et(e,"filter",null),u=et(e,"objects",{}),p=et(e,"clusters",{}),f=new t(s);if(f.add(a||[]),f.setFilter(c),f.objects.options.set(u),f.clusters.options.set(p),Object.keys(i).forEach((function(t){return H(f,t,i[t])})),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(f);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(f)}return nt(null,o,f),f},e.updateObject=function(t,e,n){var o=J(n),r=o._events,i=o.instanceRef,s=J(e),a=s._events,c=s.instanceRef;if(tt(n,"options")){var u=et(e,"options"),p=et(n,"options");u!==p&&t.options.set(p)}if(tt(n,"objects")){var f=et(e,"objects"),l=et(n,"objects");f!==l&&t.objects.options.set(l)}if(tt(n,"clusters")){var d=et(e,"clusters"),m=et(n,"clusters");d!==m&&t.clusters.options.set(m)}if(tt(n,"filter")){var y=et(e,"filter"),h=et(n,"filter");y!==h&&t.setFilter(h)}if(tt(n,"features")){var v=et(e,"features"),b=et(n,"features");v!==b&&(t.remove(v),t.add(b))}Q(t,a,r),nt(c,i,t)},e.unmountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return K(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),nt(o))},e}(r.a.Component),!0,["ObjectManager"])),function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,i=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:i})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(et(e,"geometry"),et(e,"properties"),et(e,"options"));if(Object.keys(i).forEach((function(t){return H(s,t,i[t])})),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(s)}return nt(null,o,s),s},e.updateObject=function(t,e,n){var o=J(n),r=o._events,i=o.instanceRef,s=J(e),a=s._events,c=s.instanceRef;if(tt(n,"geometry")){var u=et(e,"geometry",{}),p=et(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(tt(n,"properties")){var f=et(e,"properties"),l=et(n,"properties");f!==l&&t.properties.set(l)}if(tt(n,"options")){var d=et(e,"options"),m=et(n,"options");d!==m&&t.options.set(m)}Q(t,a,r),nt(c,i,t)},e.unmountObject=function(t,e){var n=J(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return K(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),nt(o))},e}(r.a.Component)),ut={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},pt=(z(q((function(t){return r.a.createElement(ct,Object.assign({},t,{name:"GeoObject",dangerZone:ut}))}),!0,["GeoObject"])),z(q((function(t){return r.a.createElement(ct,Object.assign({},t,{name:"Circle"}))}),!0,["Circle"])),z(q((function(t){return r.a.createElement(ct,Object.assign({},t,{name:"Placemark"}))}),!0,["Placemark"])));z(q((function(t){return r.a.createElement(ct,Object.assign({},t,{name:"Polygon"}))}),!0,["Polygon"])),z(q((function(t){return r.a.createElement(ct,Object.assign({},t,{name:"Polyline"}))}),!0,["Polyline"])),z(q((function(t){return r.a.createElement(ct,Object.assign({},t,{name:"Rectangle"}))}),!0,["Rectangle"]))}).call(this,n(59))},59:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=14.b4b6e6ae.chunk.js.map