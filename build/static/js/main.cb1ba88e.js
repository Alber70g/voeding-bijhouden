!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(t,e,n){"use strict";function r(t,e){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"===typeof t?t(e||{},r):{nodeName:t,attributes:e||{},children:r,key:e&&e.key}}function o(t,e,n,r){function o(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:_.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:o(t)})}}function i(t){return"function"===typeof t?i(t(E,A)):null!=t?t:""}function u(){w=!w;var t=i(n);for(r&&!w&&(j=m(r,j,O,O=t)),P=!1;T.length;)T.pop()()}function s(){w||(w=!0,setTimeout(u))}function a(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function c(t,e,n){var r={};return t.length?(r[t[0]]=t.length>1?c(t.slice(1),e,n[t[0]]):e,a(n,r)):e}function f(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function l(t,e,n){for(var r in n)"function"===typeof n[r]?function(r,o){n[r]=function(r){var i=o(r);return"function"===typeof i&&(i=i(f(t,E),n)),i&&i!==(e=f(t,E))&&!i.then&&s(E=c(t,a(e,i),E)),i}}(r,n[r]):l(t.concat(r),e[r]=a(e[r]),n[r]=a(n[r]));return n}function d(t){return t?t.key:null}function h(t){return t.currentTarget.events[t.type](t)}function b(t,e,n,r,o){if("key"===e);else if("style"===e)for(var i in a(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?t[e].setProperty(i,u):t[e][i]=u}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?r||(r=t.events[e]):t.events={},t.events[e]=n,n?r||t.addEventListener(e,h):t.removeEventListener(e,h)):e in t&&"list"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),null!=n&&!1!==n||t.removeAttribute(e)}function p(t,e){var n="string"===typeof t||"number"===typeof t?document.createTextNode(t):(e=e||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),r=t.attributes;if(r){r.oncreate&&T.push(function(){r.oncreate(n)});for(var o=0;o<t.children.length;o++)n.appendChild(p(t.children[o]=i(t.children[o]),e));for(var u in r)b(n,u,r[u],null,e)}return n}function y(t,e,n,r){for(var o in a(e,n))n[o]!==("value"===o||"checked"===o?t[o]:e[o])&&b(t,o,n[o],e[o],r);var i=P?n.oncreate:n.onupdate;i&&T.push(function(){i(t,e)})}function v(t,e){var n=e.attributes;if(n){for(var r=0;r<e.children.length;r++)v(t.childNodes[r],e.children[r]);n.ondestroy&&n.ondestroy(t)}return t}function g(t,e,n){function r(){t.removeChild(v(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,r):r()}function m(t,e,n,r,o){if(r===n);else if(null==n||n.nodeName!==r.nodeName){var u=p(r,o);t.insertBefore(u,e),null!=n&&g(t,e,n),e=u}else if(null==n.nodeName)e.nodeValue=r;else{y(e,n.attributes,r.attributes,o=o||"svg"===r.nodeName);for(var s={},a={},c=[],f=n.children,l=r.children,h=0;h<f.length;h++){c[h]=e.childNodes[h];var b=d(f[h]);null!=b&&(s[b]=[c[h],f[h]])}for(var h=0,v=0;v<l.length;){var b=d(f[h]),w=d(l[v]=i(l[v]));if(a[b])h++;else if(null==w||P)null==b&&(m(e,c[h],f[h],l[v],o),v++),h++;else{var _=s[w]||[];b===w?(m(e,_[0],_[1],l[v],o),h++):_[0]?m(e,e.insertBefore(_[0],c[h]),_[1],l[v],o):m(e,c[h],null,l[v],o),a[w]=l[v],v++}}for(;h<f.length;)null==d(f[h])&&g(e,c[h],f[h]),h++;for(var h in s)a[h]||g(e,s[h][0],s[h][1])}return e}var w,_=[].map,j=r&&r.children[0]||null,O=j&&o(j),T=[],P=!0,E=a(t),A=l([],E,a(e));return s(),A}e.b=r,e.a=o},function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(t){return v=t,g}}function i(t,e){try{return t(e)}catch(t){return v=t,g}}function u(t,e,n){try{t(e,n)}catch(t){return v=t,g}}function s(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&p(t,this)}function a(t,e,n){return new t.constructor(function(o,i){var u=new s(r);u.then(o,i),c(t,new b(e,n,u))})}function c(t,e){for(;3===t._83;)t=t._18;if(s._47&&s._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);f(t,e)}function f(t,e){y(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?l(e.promise,t._18):d(e.promise,t._18));var r=i(n,t._18);r===g?d(e.promise,v):l(e.promise,r)})}function l(t,e){if(e===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var n=o(e);if(n===g)return d(t,v);if(n===t.then&&e instanceof s)return t._83=3,t._18=e,void h(t);if("function"===typeof n)return void p(n.bind(e),t)}t._83=1,t._18=e,h(t)}function d(t,e){t._83=2,t._18=e,s._71&&s._71(t,e),h(t)}function h(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)c(t,t._38[e]);t._38=null}}function b(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function p(t,e){var n=!1,r=u(t,function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,d(e,t))});n||r!==g||(n=!0,d(e,v))}var y=n(6),v=null,g={};t.exports=s,s._47=null,s._71=null,s._44=r,s.prototype.then=function(t,e){if(this.constructor!==s)return a(this,t,e);var n=new s(r);return c(this,new b(t,e,n)),n}},function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"e",function(){return i}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return a});var r=n(0),o=function(t){return Object(r.b)("span",null,t.start.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," ",t.kant," ",t.duur," minuten",Object(r.b)("br",null),t.start.toLocaleString([],{month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"})," ","-"," ",new Date(t.start.getTime()+1e3*t.duur*60).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," ")},i=function(t){return function(e){e.style=t}},u=function(t){return t.getHours()+":"+t.getMinutes()},s=function(t,e,n){return t?e(n||t):""},a=function(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}},function(t,e,n){n(4),t.exports=n(11)},function(t,e,n){"use strict";"undefined"===typeof Promise&&(n(5).enable(),window.Promise=n(8)),n(9),Object.assign=n(10)},function(t,e,n){"use strict";function r(){c=!1,s._47=null,s._71=null}function o(t){function e(e){(t.allRejections||u(l[e].error,t.whitelist||a))&&(l[e].displayId=f++,t.onUnhandled?(l[e].logged=!0,t.onUnhandled(l[e].displayId,l[e].error)):(l[e].logged=!0,i(l[e].displayId,l[e].error)))}function n(e){l[e].logged&&(t.onHandled?t.onHandled(l[e].displayId,l[e].error):l[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[e].displayId+".")))}t=t||{},c&&r(),c=!0;var o=0,f=0,l={};s._47=function(t){2===t._83&&l[t._56]&&(l[t._56].logged?n(t._56):clearTimeout(l[t._56].timeout),delete l[t._56])},s._71=function(t,n){0===t._75&&(t._56=o++,l[t._56]={displayId:null,error:n,timeout:setTimeout(e.bind(null,t._56),u(n,a)?100:2e3),logged:!1})}}function i(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function u(t,e){return e.some(function(e){return t instanceof e})}var s=n(1),a=[ReferenceError,TypeError,RangeError],c=!1;e.disable=r,e.enable=o},function(t,e,n){"use strict";(function(e){function n(t){u.length||(i(),s=!0),u[u.length]=t}function r(){for(;a<u.length;){var t=a;if(a+=1,u[t].call(),a>c){for(var e=0,n=u.length-a;e<n;e++)u[e]=u[e+a];u.length-=a,a=0}}u.length=0,a=0,s=!1}function o(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var i,u=[],s=!1,a=0,c=1024,f="undefined"!==typeof e?e:self,l=f.MutationObserver||f.WebKitMutationObserver;i="function"===typeof l?function(t){var e=1,n=new l(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}(r):o(r),n.requestFlush=i,n.makeRequestCallFromTimer=o}).call(e,n(7))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=n(1);t.exports=o;var i=r(!0),u=r(!1),s=r(null),a=r(void 0),c=r(0),f=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return s;if(void 0===t)return a;if(!0===t)return i;if(!1===t)return u;if(0===t)return c;if(""===t)return f;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,n){n(t)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(u,s){if(s&&("object"===typeof s||"function"===typeof s)){if(s instanceof o&&s.then===o.prototype.then){for(;3===s._83;)s=s._18;return 1===s._83?r(u,s._18):(2===s._83&&n(s._18),void s.then(function(t){r(u,t)},n))}var a=s.then;if("function"===typeof a){return void new o(a.bind(s)).then(function(t){r(u,t)},n)}}e[u]=s,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,u=0;u<e.length;u++)r(u,e[u])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!==typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function s(t){var e=new FileReader,n=u(e);return e.readAsArrayBuffer(t),n}function a(t){var e=new FileReader,n=u(e);return e.readAsText(t),n}function c(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&m(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!w(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var n=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function p(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function y(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=function(t){return t&&DataView.prototype.isPrototypeOf(t)},w=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=n(r)},o.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];y.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=y,t.fetch=function(t,e){return new Promise(function(n,r){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new y(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,a=r(t),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var f in n)i.call(n,f)&&(a[f]=n[f]);if(o){s=o(n);for(var l=0;l<s.length;l++)u.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(12),u=n(2),s={voedingen:[],newVoeding:i.b,views:{newVoeding:!1,debug:!1}},a={views:{toggleDebug:function(){return function(t){return{debug:!t.debug}}},newVoeding:function(){return{newVoeding:!0}}},newVoeding:i.a,addNewVoeding:function(){return function(t,e){return setTimeout(e.saveLocalstorage),setTimeout(f.sortVoedingen),{views:Object.assign({},t.views,{newVoeding:!1}),voedingen:[].concat(r(t.voedingen),[{id:Object(u.b)(),start:t.newVoeding.start,duur:t.newVoeding.duur,kant:t.newVoeding.kant}]),newVoeding:i.b}}},remove:function(t){return function(e,n){return setTimeout(n.saveLocalstorage),{voedingen:e.voedingen.filter(function(e){return e.id!==t})}}},loadLocalstorage:function(t){if(t){var e=JSON.parse(t).voedingen,n=e.map(function(t){return Object.assign({},t,{start:new Date(t.start)})});return setTimeout(f.sortVoedingen),{voedingen:n}}},saveLocalstorage:function(){return function(t){localStorage.setItem("voedingen",JSON.stringify({voedingen:t.voedingen}))}},sortVoedingen:function(){return function(t){return{voedingen:t.voedingen.sort(function(t,e){return t.start>e.start})}}}},c=function(t,e){return Object(o.b)("div",null,Object(o.b)("h1",{onclick:e.views.toggleDebug},"Voedingen"),Object(o.b)("ul",null,t.voedingen.map(function(t){return Object(o.b)("li",{key:t.id},Object(o.b)("span",{onclick:function(){return e.remove(t.id)}},"\ud83d\uddd1")," ",Object(u.d)(t))})),t.views.newVoeding?Object(i.c)(t,e):Object(o.b)("button",{onclick:e.views.newVoeding},"Nieuwe voeding"),t.views.debug?Object(o.b)("pre",null,JSON.stringify(t,null,2)):"")},f=Object(o.a)(s,a,c,document.body);f.loadLocalstorage(localStorage.getItem("voedingen"))},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return s});var r=n(0),o=n(2),i={startPristine:!0,duurPristine:!0},u={setKant:function(t){return{kant:t}},setInitialState:function(){return{start:new Date,duur:15}},addStartTime:function(t){return function(e){var n=new Date(e.start.getTime()+1e3*t*60);return e.duurPristine?{startPristine:!1,duur:(new Date-n)/1e3/60,start:n}:{startPristine:!1,start:n}}},setDuurTime:function(t){return function(e){return e.startPristine?{duurPristine:!1,start:new Date((new Date).getTime()-1e3*t*60),duur:t}:{duurPristine:!1,duur:t}}}},s=function(t,e){return Object(r.b)("div",{oncreate:e.newVoeding.setInitialState},Object(r.b)("h2",null,"Nieuwe voeding"),Object(r.b)("p",null,Object(r.b)("button",{class:"links"===t.newVoeding.kant?"selected":"",onclick:function(){return e.newVoeding.setKant("links")}},"Links"),Object(r.b)("button",{class:"rechts"===t.newVoeding.kant?"selected":"",onclick:function(){return e.newVoeding.setKant("rechts")}},"Rechts")),Object(r.b)("p",null,Object(r.b)("label",{oncreate:Object(o.e)("display: block;")},"Duur: ",Object(r.b)("strong",null,t.newVoeding.duur," minuten")),Object(r.b)("ul",null,Object(r.b)("button",{onclick:function(){return e.newVoeding.setDuurTime(5)}},"5"),Object(r.b)("button",{onclick:function(){return e.newVoeding.setDuurTime(10)}},"10"),Object(r.b)("button",{onclick:function(){return e.newVoeding.setDuurTime(15)}},"15"),Object(r.b)("button",{onclick:function(){return e.newVoeding.setDuurTime(20)}},"20")),Object(r.b)("label",null,"Invoeren"," ",Object(r.b)("input",{type:"number",onblur:function(t){return e.newVoeding.setDuurTime(t.target.value)}}))),Object(r.b)("p",null,Object(r.b)("label",{oncreate:Object(o.e)("display: block;")},"Start tijd ",Object(r.b)("strong",null,Object(o.c)(t.newVoeding.start,o.a))),Object(r.b)("ul",null,Object(r.b)("button",{onclick:function(){return e.newVoeding.addStartTime(-5)}},"-5"),Object(r.b)("button",{onclick:function(){return e.newVoeding.addStartTime(-1)}},"-1"),Object(r.b)("button",{onclick:function(){return e.newVoeding.addStartTime(1)}},"+1"),Object(r.b)("button",{onclick:function(){return e.newVoeding.addStartTime(5)}},"+5"))),Object(r.b)("p",null,Object(o.c)(t.newVoeding.start,o.d,t.newVoeding)),Object(r.b)("p",null,Object(r.b)("button",{class:"selected",onclick:e.addNewVoeding},"Voeding toevoegen")))}}]);
//# sourceMappingURL=main.cb1ba88e.js.map