(this["webpackJsonpreact-paint-app"]=this["webpackJsonpreact-paint-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),i=n.n(o),u=(n(10),n(11),n(2)),s=n(5),a=n.n(s),l=n(0),h=r.a.memo((function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(l.jsx)("label",{className:"header-name",children:Object(l.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},onClick:function(e){return e.target.setSelectionRange(0,e.target.value.length)},placeholder:"Untitled"})})})),d=function(e){var t=e.colors,n=void 0===t?[]:t,c=e.activeColor,r=e.setActiveColor;return n.length?Object(l.jsx)("fieldset",{className:"color-picker",children:n.map((function(e,t){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{name:"color",type:"radio",value:e,checked:c===e,onChange:function(){return r(e)}}),Object(l.jsx)("span",{style:{background:e}})]},t)}))}):null},f=function(e){var t=Object(c.useState)([window.innerWidth,window.innerHeight]),n=Object(u.a)(t,2),r=Object(u.a)(n[0],2),o=r[0],i=r[1],s=n[1];return Object(c.useEffect)((function(){var t=function(){e(),s([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),[o,i]},j=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)(window.innerWidth),a=Object(u.a)(s,2),h=a[0],d=a[1],j=Object(c.useState)(window.innerHeight),b=Object(u.a)(j,2),O=b[0],v=b[1],g=Object(c.useRef)(),w=Object(c.useRef)(),p=Object(c.useRef)(document.createElement("canvas")),x=Object(c.useRef)();Object(c.useEffect)((function(){w.current=g.current.getContext("2d"),x.current=p.current.getContext("2d")}),[]),Object(c.useEffect)((function(){w.current.fillStyle="#ffffff",w.current.fillRect(0,0,h,O),w.current.drawImage(p.current,0,0)}),[h,O]),f((function(){d(window.innerWidth),v(window.innerHeight)}));function m(t,n){var c,r=[t-g.current.offsetLeft,n-g.current.offsetTop];o&&((c=w.current).lineTo.apply(c,r),w.current.stroke());e.handleMouseMove&&e.handleMouseMove.apply(e,r)}function C(t,n){w.current.lineJoin="round",w.current.lineCap="round",w.current.lineWidth=e.lineWidth,w.current.strokeStyle=e.color,w.current.beginPath(),console.log(t,n),w.current.moveTo(t-g.current.offsetLeft,n-g.current.offsetTop),i(!0)}var S=function(){w.current.closePath(),i(!1),p.current.width=g.current.width,p.current.height=g.current.height,x.current.drawImage(g.current,0,0)};return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)("canvas",{ref:g,width:e.width||h,height:e.height||O,onMouseDown:function(e){C(e.clientX,e.clientY)},onMouseUp:S,onMouseOut:S,onMouseMove:function(e){m(e.clientX,e.clientY)},onTouchStart:function(e){var t=e.touches[0];C(t.clientX,t.clientY)},onTouchEnd:function(e){S()},onTouchMove:function(e){var t=e.touches[0];m(t.clientX,t.clientY)}})})},b=r.a.memo((function(e){var t=e.cb;return Object(l.jsx)("button",{className:"button-refresh-colors",onClick:t,children:"\u21ba"})})),O=function(e){var t=e.sizes,n=e.activeSize,c=e.setActiveSize,r=e.activeColor;return Object(l.jsx)("fieldset",{className:"size-picker",children:t.map((function(e,t){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{name:"size",type:"radio",value:e,checked:n===e,onChange:function(){return c(e)}}),Object(l.jsx)("span",{style:{height:e,width:e,borderWidth:n===e?3:2,borderStyle:"solid",borderColor:n===e?r:"black"}})]},t)}))})},v=function(){return Object(l.jsx)("button",{className:"button-info",onClick:function(){return alert("Choose the color of your preference by clicking on the colored boxes.\nChange base color by clicking on the refresh button on the right side.\nChoose the desired line width by clicking on one of the circles.\nRight click on the drawing and click Save Image As... to download your work as a PNG file.\n\nHave fun!")},children:"\u24d8 How to use"})},g=[2,6,10,14,20],w=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(),i=Object(u.a)(o,2),s=i[0],w=i[1],p=Object(c.useState)(g[0]),x=Object(u.a)(p,2),m=x[0],C=x[1],S=Object(c.useState)(!1),k=Object(u.a)(S,2),y=k[0],T=k[1],z=f((function(){T(!0),clearTimeout(N),N.current=setTimeout((function(){return T(!1)}),500)})),M=Object(u.a)(z,2),E=M[0],H=M[1],R=Object(c.useRef)({offsetHeight:0}),N=Object(c.useRef)();Object(c.useEffect)((function(){return W()}),[]);var W=Object(c.useCallback)((function(){var e=a()().slice(1);fetch("https://www.thecolorapi.com/scheme?hex=".concat(e,"&mode=monochrome")).then((function(e){return e.json()})).then((function(e){r(e.colors.map((function(e){return e.hex.value}))),w(e.colors[0].hex.value)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{ref:R,style:{borderTop:"20px solid ".concat(s)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{}),Object(l.jsx)(v,{})]}),Object(l.jsxs)("div",{style:{marginTop:10},children:[Object(l.jsx)(d,{colors:n,activeColor:s,setActiveColor:w}),Object(l.jsx)(O,{sizes:g,activeSize:m,setActiveSize:C,activeColor:s}),Object(l.jsx)(b,{cb:W})]})]}),s&&m&&Object(l.jsx)(j,{color:s,lineWidth:m,height:window.innerHeight-R.current.offsetHeight}),Object(l.jsxs)("div",{className:"window-size ".concat(y?"":"hidden"),children:[E," x ",H]})]})};var p=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(w,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.edcd012c.chunk.js.map