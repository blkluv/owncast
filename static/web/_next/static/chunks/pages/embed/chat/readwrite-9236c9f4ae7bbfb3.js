(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955,7533],{81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(e){return e?"function"==typeof e?e():e:null}},57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(97685),i=n(67294);function o(){var e=i.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},24093:function(e,t,n){"use strict";n.d(t,{C:function(){return j}});var r=n(87462),i=n(4942),o=n(71002),s=n(97685),a=n(94184),c=n.n(a),l=n(48555),u=n(42550),f=n(67294),d=n(53124),h=n(25378),p=n(24308),m=f.createContext("default"),v=function(e){var t=e.children,n=e.size;return f.createElement(m.Consumer,null,function(e){return f.createElement(m.Provider,{value:n||e},t)})},y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},_=f.forwardRef(function(e,t){var n,a,v,_=f.useContext(m),g=f.useState(1),S=(0,s.Z)(g,2),b=S[0],x=S[1],j=f.useState(!1),C=(0,s.Z)(j,2),E=C[0],O=C[1],k=f.useState(!0),R=(0,s.Z)(k,2),N=R[0],Z=R[1],z=f.useRef(null),w=f.useRef(null),T=(0,u.sQ)(t,z),F=f.useContext(d.E_).getPrefixCls,P=function(){if(w.current&&z.current){var t=w.current.offsetWidth,n=z.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,i=void 0===r?4:r;2*i<n&&x(n-2*i<t?(n-2*i)/t:1)}}};f.useEffect(function(){O(!0)},[]),f.useEffect(function(){Z(!0),x(1)},[e.src]),f.useEffect(function(){P()},[e.gap]);var I=e.prefixCls,A=e.shape,H=void 0===A?"circle":A,L=e.size,D=void 0===L?"default":L,J=e.src,M=e.srcSet,W=e.icon,q=e.className,U=e.alt,Q=e.draggable,X=e.children,$=e.crossOrigin,B=y(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),G="default"===D?_:D,V=Object.keys("object"===(0,o.Z)(G)&&G||{}).some(function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)}),Y=(0,h.Z)(V),K=f.useMemo(function(){if("object"!==(0,o.Z)(G))return{};var e=G[p.c4.find(function(e){return Y[e]})];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:W?e/2:18}:{}},[Y,G]),ee=F("avatar",I),et=c()((n={},(0,i.Z)(n,"".concat(ee,"-lg"),"large"===G),(0,i.Z)(n,"".concat(ee,"-sm"),"small"===G),n)),en=f.isValidElement(J),er=c()(ee,et,(a={},(0,i.Z)(a,"".concat(ee,"-").concat(H),!!H),(0,i.Z)(a,"".concat(ee,"-image"),en||J&&N),(0,i.Z)(a,"".concat(ee,"-icon"),!!W),a),q);if("string"==typeof J&&N)v=f.createElement("img",{src:J,draggable:Q,srcSet:M,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&Z(!1)},alt:U,crossOrigin:$});else if(en)v=J;else if(W)v=W;else if(E||1!==b){var ei="scale(".concat(b,") translateX(-50%)");v=f.createElement(l.default,{onResize:P},f.createElement("span",{className:"".concat(ee,"-string"),ref:w,style:(0,r.Z)((0,r.Z)({},"number"==typeof G?{lineHeight:"".concat(G,"px")}:{}),{msTransform:ei,WebkitTransform:ei,transform:ei})},X))}else v=f.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:w},X);return delete B.onError,delete B.gap,f.createElement("span",(0,r.Z)({},B,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},"number"==typeof G?{width:G,height:G,lineHeight:"".concat(G,"px"),fontSize:W?G/2:18}:{}),K),B.style),className:er,ref:T}),v)}),g=n(50344),S=n(55241),b=n(96159),x=_;x.Group=function(e){var t=f.useContext(d.E_),n=t.getPrefixCls,r=t.direction,o=e.prefixCls,s=e.className,a=e.maxCount,l=e.maxStyle,u=e.size,h=n("avatar-group",o),p=c()(h,(0,i.Z)({},"".concat(h,"-rtl"),"rtl"===r),void 0===s?"":s),m=e.children,y=e.maxPopoverPlacement,x=e.maxPopoverTrigger,j=(0,g.Z)(m).map(function(e,t){return(0,b.Tm)(e,{key:"avatar-key-".concat(t)})}),C=j.length;if(a&&a<C){var E=j.slice(0,a),O=j.slice(a,C);return E.push(f.createElement(S.Z,{key:"avatar-popover-key",content:O,trigger:void 0===x?"hover":x,placement:void 0===y?"top":y,overlayClassName:"".concat(h,"-popover")},f.createElement(_,{style:l},"+".concat(C-a)))),f.createElement(v,{size:u},f.createElement("div",{className:p,style:e.style},E))}return f.createElement(v,{size:u},f.createElement("div",{className:p,style:e.style},j))};var j=x},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},25378:function(e,t,n){"use strict";var r=n(67294),i=n(57838),o=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,i.Z)();return(0,r.useEffect)(function(){var r=o.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return o.ZP.unsubscribe(r)}},[]),t.current}},55241:function(e,t,n){"use strict";var r=n(87462),i=n(67294),o=n(53124),s=n(94199),a=n(81643),c=n(33603),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},u=function(e){var t=e.title,n=e.content,r=e.prefixCls;return t||n?i.createElement(i.Fragment,null,t&&i.createElement("div",{className:"".concat(r,"-title")},(0,a.Z)(t)),i.createElement("div",{className:"".concat(r,"-inner-content")},(0,a.Z)(n))):null},f=i.forwardRef(function(e,t){var n=e.prefixCls,a=e.title,f=e.content,d=e._overlay,h=e.placement,p=e.trigger,m=e.mouseEnterDelay,v=e.mouseLeaveDelay,y=e.overlayStyle,_=l(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),g=i.useContext(o.E_).getPrefixCls,S=g("popover",n),b=g();return i.createElement(s.Z,(0,r.Z)({placement:void 0===h?"top":h,trigger:void 0===p?"hover":p,mouseEnterDelay:void 0===m?.1:m,mouseLeaveDelay:void 0===v?.1:v,overlayStyle:void 0===y?{}:y},_,{prefixCls:S,ref:t,overlay:d||i.createElement(u,{prefixCls:S,title:a,content:f}),transitionName:(0,c.mL)(b,"zoom-big",_.transitionName)}))});t.Z=f},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},2350:function(){},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),i=n(89607),o=n(2333),s=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?i(e):o(e)}},27561:function(e,t,n){var r=n(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=s.call(e);return r&&(t?e[a]=n:delete e[a]),i}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),i=n(7771),o=n(14841),s=Math.max,a=Math.min;e.exports=function(e,t,n){var c,l,u,f,d,h,p=0,m=!1,v=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function _(t){var n=c,r=l;return c=l=void 0,p=t,f=e.apply(r,n)}function g(e){var n=e-h,r=e-p;return void 0===h||n>=t||n<0||v&&r>=u}function S(){var e,n,r,o=i();if(g(o))return b(o);d=setTimeout(S,(e=o-h,n=o-p,r=t-e,v?a(r,u-n):r))}function b(e){return(d=void 0,y&&c)?_(e):(c=l=void 0,f)}function x(){var e,n=i(),r=g(n);if(c=arguments,l=this,h=n,r){if(void 0===d)return p=e=h,d=setTimeout(S,t),m?_(e):f;if(v)return clearTimeout(d),d=setTimeout(S,t),_(h)}return void 0===d&&(d=setTimeout(S,t)),f}return t=o(t)||0,r(n)&&(m=!!n.leading,u=(v="maxWait"in n)?s(o(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==d&&clearTimeout(d),p=0,c=h=l=d=void 0},x.flush=function(){return void 0===d?f:b(i())},x}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),i=n(37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),i=n(13218),o=n(33448),s=0/0,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):a.test(e)?s:+e}},30672:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return n(73411)}])},14940:function(e,t,n){"use strict";n.d(t,{h:function(){return m}});var r=n(85893),i=n(24093),o=n(94199),s=n(94184),a=n.n(s),c=n(5152),l=n.n(c),u=n(41664),f=n.n(u),d=n(91935),h=n.n(d);let p=l()(()=>Promise.all([n.e(4931),n.e(3013),n.e(9266)]).then(n.bind(n,79266)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[79266]},ssr:!1}),m=e=>{let{name:t,chatAvailable:n,chatDisabled:s,online:c}=e;return(0,r.jsxs)("header",{className:a()(["".concat(h().header)],"global-header"),children:[c?(0,r.jsx)(f(),{href:"#player",className:h().skipLink,children:"Skip to player"}):(0,r.jsx)(f(),{href:"#offline-message",className:h().skipLink,children:"Skip to offline message"}),(0,r.jsx)(f(),{href:"#skip-to-content",className:h().skipLink,children:"Skip to page content"}),(0,r.jsx)(f(),{href:"#footer",className:h().skipLink,children:"Skip to footer"}),(0,r.jsxs)("div",{className:h().logo,children:[(0,r.jsx)("div",{id:"header-logo",className:h().logoImage,children:(0,r.jsx)(i.C,{src:"/logo",size:"large",shape:"circle",className:h().avatar})}),(0,r.jsx)("h1",{className:h().title,id:"global-header-text",children:t})]}),n&&!s&&(0,r.jsx)(p,{}),!n&&!s&&(0,r.jsx)(o.Z,{overlayClassName:h().toolTip,title:"Chat will be available when the stream is live.",placement:"left",children:(0,r.jsx)("span",{className:h().chatOfflineText,children:"Chat is offline"})})]})};t.Z=m},69578:function(e,t,n){var r=n(34155);n(2350);var i=n(67294),o=i&&"object"==typeof i&&"default"in i?i:{default:i};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=void 0!==r&&r.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,o=void 0===i?a:i;u(c(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s=document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},s(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&s(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var f=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return d[r]||(d[r]="jsx-"+f(e+"-"+n)),d[r]}function p(e,t){var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var m=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=o,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=h(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return p(i,e)}):[p(i,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=i.createContext(null);v.displayName="StyleSheetContext";var y=o.default.useInsertionEffect||o.default.useLayoutEffect,_=new m;function g(e){var t=_||i.useContext(v);return t&&y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}g.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=g},36465:function(e,t,n){"use strict";e.exports=n(69578).style},73411:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(85893),i=n(36465),o=n.n(i),s=n(4480),a=n(67294),c=n(37068),l=n(92093),u=n(44974),f=n(14940),d=n(21756),h=n(69183);function p(){let e=(0,s.sJ)(u.db),t=(0,s.sJ)(u.pH),n=(0,s.sJ)(u.g1),i=(0,s.sJ)(u.RI),p=(0,s.sJ)(u.Q),m=(0,s.sJ)(u.di),{name:v,chatDisabled:y}=n,{videoAvailable:_}=p,{streamTitle:g,online:S}=i;return(0,a.useEffect)(()=>{document.body.classList.add("body-background")},[]),(0,r.jsxs)("div",{className:"jsx-cf32fe5d739e776c",children:[(0,r.jsx)(o(),{id:"cf32fe5d739e776c",children:".body-background{background:var(--theme-color-components-chat-background)}"}),(0,r.jsxs)(c.SV,{fallbackRender:e=>{let{error:t}=e;return(0,r.jsx)(h.A,{componentName:"ReadWriteChatEmbed",message:t.message})},children:[(0,r.jsx)(u.me,{}),(0,r.jsx)(d.Q,{}),(0,r.jsx)(f.Z,{name:S&&g||v,chatAvailable:!0,chatDisabled:y,online:_}),e&&(0,r.jsx)("div",{id:"chat-container",className:"jsx-cf32fe5d739e776c",children:(0,r.jsx)(l.ChatContainer,{messages:t,usernameToHighlight:e.displayName,chatUserId:e.id,isModerator:e.isModerator,showInput:!0,height:"92vh",chatAvailable:m})})]})]})}},91935:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2",skipLink:"Header_skipLink__9Pusb",offlineTag:"Header_offlineTag__0p3lk",avatar:"Header_avatar__bL8Jw",chatOfflineText:"Header_chatOfflineText__yYfMS",toolTip:"Header_toolTip__e3Ht7"}}},function(e){e.O(0,[1272,8700,9151,2414,1664,2332,2259,2700,2093,9774,2888,179],function(){return e(e.s=30672)}),_N_E=e.O()}]);