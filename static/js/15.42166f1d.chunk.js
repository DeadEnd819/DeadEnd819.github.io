(this["webpackJsonpliga-bank-credit"]=this["webpackJsonpliga-bank-credit"]||[]).push([[15],{71:function(t,a,r){"use strict";r.r(a);var e=r(0),n=r(58),c=r.n(n),o=r.p+"static/media/icon-map-mark.f05c0c95.svg",i=(r(59),r(2));a.default=function(t){var a=t.data,r=t.points,n=Object(e.useRef)();return Object(e.useEffect)((function(){return n.current=c.a.map("map",{center:{lat:a.lat,lng:a.lng},zoom:a.zoom}),c.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(n.current),r.forEach((function(t){var a=c.a.icon({iconUrl:o,iconSize:[35,40]});c.a.marker({lat:t.lat,lng:t.lng},{icon:a}).addTo(n.current).bindPopup(t.title)})),function(){n.current.remove()}}),[]),Object(i.jsx)("div",{className:"branches__map-wrapper",id:"map"})}}}]);
//# sourceMappingURL=15.42166f1d.chunk.js.map