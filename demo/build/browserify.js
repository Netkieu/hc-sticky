!function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var f="function"==typeof require&&require;if(!a&&f)return f(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return o(n||t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){(function(e,n,r,o,i,s,a,f,u){"use strict";new(t("../../dist/hc-sticky.js"))("aside",{stickTo:"main",queries:{980:{disable:!0}}})}).call(this,t("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_eb5ea3aa.js","/")},{"../../dist/hc-sticky.js":2,buffer:4,rH1JPG:6}],2:[function(t,e,n){(function(t,n,r,o,i,s,a,f,u){!function(t,n){"use strict";if("object"==typeof e&&"object"==typeof e.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");e.exports=n(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],n(t)):n(t)}("undefined"!=typeof window?window:this,function(t){"use strict";var e={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,queries:null,queryFlow:"down",onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1},n=t.document,r=function(o,i){if("string"==typeof o&&(o=n.querySelector(o)),!o)return!1;var s={},a=r.Helpers,f=o.parentNode;"static"===a.getStyle(f,"position")&&(f.style.position="relative");var u=function(t){t=t||{},a.isEmptyObject(t)&&s||(s=Object.assign({},e,s,t))},l=function(){return s.disable},c=function(){if(s.queries){var n=t.innerWidth,r=s.queryFlow,o=s.queries;if(function(t){s=Object.assign({},e,t||{})}(i),"up"===r)for(var f in o)n>=f&&!a.isEmptyObject(o[f])&&u(o[f]);else{var l=[];for(var c in s.queries){var d={};d[c]=o[c],l.push(d)}for(var h=l.length-1;h>=0;h--){var p=l[h],g=Object.keys(p)[0];n<=g&&!a.isEmptyObject(p[g])&&u(p[g])}}}},d={css:{},position:null,stick:function(t){a.hasClass(o,s.stickyClass)||(!1===h.isAttached&&h.attach(),d.position="fixed",t=t||{},o.style.position="fixed",o.style.left=h.offsetLeft+"px",o.style.width=h.width,void 0===t.bottom?o.style.bottom="auto":o.style.bottom=t.bottom+"px",void 0===t.top?o.style.top="auto":o.style.top=t.top+"px",o.classList?o.classList.add(s.stickyClass):o.className+=" "+s.stickyClass,s.onStart&&s.onStart.call(o,s))},reset:function(t){if(t=t||{},t.disable=t.disable||!1,"fixed"===d.position||null===d.position||!(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(a.getStyle(o,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(a.getStyle(o,"bottom"))||0)===t.bottom)){!0===t.disable?!0===h.isAttached&&h.detach():!1===h.isAttached&&h.attach();var e=t.position||d.css.position;d.position=e,o.style.position=e,o.style.left=!0===t.disable?d.css.left:h.positionLeft+"px",o.style.width="absolute"!==e?d.css.width:h.width,void 0===t.bottom?o.style.bottom=!0===t.disable?"":"auto":o.style.bottom=t.bottom+"px",void 0===t.top?o.style.top=!0===t.disable?"":"auto":o.style.top=t.top+"px",o.classList?o.classList.remove(s.stickyClass):o.className=o.className.replace(new RegExp("(^|\\b)"+s.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),s.onStop&&s.onStop.call(o,s)}}},h={el:n.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in d.css)h.el.style[t]=d.css[t];var e=a.getStyle(o);h.offsetLeft=a.offset(o).left-(parseInt(e.marginLeft)||0),h.positionLeft=a.position(o).left,h.width=a.getStyle(o,"width")},attach:function(){f.insertBefore(h.el,o.nextSibling),h.isAttached=!0},detach:function(){h.el=f.removeChild(h.el),h.isAttached=!1}},p=void 0,g=void 0,y=void 0,b=void 0,v=void 0,m=void 0,w=void 0,E=void 0,I=void 0,L=void 0,S=void 0,B=void 0,k=void 0,A=void 0,T=void 0,x=void 0,C=void 0,U=void 0,N=t.pageYOffset||n.documentElement.scrollTop,j=0,_=void 0,H=function(){T=U(),b=C(),k=v+b-E-S,A=T>w;var e=t.pageYOffset||n.documentElement.scrollTop,r=a.offset(o).top,i=r-e,u=void 0;_=e<N?"up":"down",j=e-N,N=e,e>B?k+E+(A?I:0)-(s.followScroll&&A?0:E)<=e+T-L-(T-L>w-(B-L)&&s.followScroll&&(u=T-w-L)>0?u:0)?d.reset({position:"absolute",bottom:m+f.offsetHeight-k-E}):A&&s.followScroll?"down"===_?i+T+I<=w?d.stick({bottom:I}):"fixed"===d.position&&d.reset({position:"absolute",top:r-E-B-j+L}):i+L<0&&"fixed"===d.position?d.reset({position:"absolute",top:r-E-B+L-j}):r>=e+E-L&&d.stick({top:E-L}):d.stick({top:E-L}):d.reset({disable:!0})},M=!1,O=!1,F=function(){M&&(a.event.unbind(t,"scroll",H),M=!1)},z=function(){d.css=function(t){var e=a.getCascadedStyle(t),n=a.getStyle(t),r={height:t.offsetHeight+"px",left:e.left,right:e.right,top:e.top,bottom:e.bottom,position:n.position,display:n.display,verticalAlign:n.verticalAlign,boxSizing:n.boxSizing,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight};return e.float&&(r.float=e.float||"none"),e.cssFloat&&(r.cssFloat=e.cssFloat||"none"),n.MozBoxSizing&&(r.MozBoxSizing=n.MozBoxSizing),r.width="auto"!==e.width?e.width:"border-box"===r.boxSizing||"border-box"===r.MozBoxSizing?t.offsetWidth+"px":n.width,r}(o),h.init(),p=!(!s.stickTo||!("document"===s.stickTo||s.stickTo.nodeType&&9===s.stickTo.nodeType||"object"==typeof s.stickTo&&s.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),g=s.stickTo?p?n:"string"==typeof s.stickTo?n.querySelector(s.stickTo):s.stickTo:f,T=(U=function(){var t=o.offsetHeight+(parseInt(d.css.marginTop)||0)+(parseInt(d.css.marginBottom)||0),e=(T||0)-t;return e>=-1&&e<=1?T:t})(),b=(C=function(){return p?Math.max(n.documentElement.clientHeight,n.body.scrollHeight,n.documentElement.scrollHeight,n.body.offsetHeight,n.documentElement.offsetHeight):g.offsetHeight})(),v=p?0:a.offset(g).top,m=s.stickTo?p?0:a.offset(f).top:v,w=t.innerHeight,x=o.offsetTop-(parseInt(d.css.marginTop)||0),y=s.innerSticker?"string"==typeof s.innerSticker?n.querySelector(s.innerSticker):s.innerSticker:null,E=isNaN(s.top)&&s.top.indexOf("%")>-1?parseFloat(s.top)/100*w:s.top,I=isNaN(s.bottom)&&s.bottom.indexOf("%")>-1?parseFloat(s.bottom)/100*w:s.bottom,L=y?y.offsetTop:s.innerTop?s.innerTop:0,S=isNaN(s.bottomEnd)&&s.bottomEnd.indexOf("%")>-1?parseFloat(s.bottomEnd)/100*w:s.bottomEnd,B=v-E+L+x,T>=b?F():(H(),M||(a.event.bind(t,"scroll",H),M=!0))},P=function(){o.style.position="",o.style.left="",o.style.top="",o.style.bottom="",o.style.width="",o.classList?o.classList.remove(s.stickyClass):o.className=o.className.replace(new RegExp("(^|\\b)"+s.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),d.css={},d.position=null,!0===h.isAttached&&h.detach()},D=function(){P(),c(),l()?F():z()},R=function(){s.onBeforeResize&&s.onBeforeResize.call(o,s),D(),s.onResize&&s.onResize.call(o,s)},q=s.resizeDebounce?a.debounce(R,s.resizeDebounce):R,J=function(){O&&(a.event.unbind(t,"resize",q),O=!1),F()},G=function(){O||(a.event.bind(t,"resize",q),O=!0),c(),l()?F():z()};this.options=function(t){return t?s.option||null:Object.assign({},s)},this.reinit=D,this.update=function(t){u(t),D()},this.attach=G,this.detach=J,this.destroy=function(){J(),P()},u(i),G(),a.event.bind(t,"load",D)};if(void 0!==t.jQuery){var o=t.jQuery;o.fn.extend({hcSticky:function(t){return this.length?this.each(function(){var e=o.data(this,"hcSticky");e?e.update(t):(e=new r(this,t),o.data(this,"hcSticky",e))}):this}})}return t.hcSticky=t.hcSticky||r,r}),function(t){"use strict";var e=t.hcSticky,n=t.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},writable:!0,configurable:!0});var r=function(){function e(e){var n=t.event;return n.target=n.target||n.srcElement||e,n}var r=n.documentElement,o=function(){};r.addEventListener?o=function(t,e,n){t.addEventListener(e,n,!1)}:r.attachEvent&&(o=function(t,n,r){t[n+r]=r.handleEvent?function(){var n=e(t);r.handleEvent.call(r,n)}:function(){var n=e(t);r.call(t,n)},t.attachEvent("on"+n,t[n+r])});var i=function(){};return r.removeEventListener?i=function(t,e,n){t.removeEventListener(e,n,!1)}:r.detachEvent&&(i=function(t,e,n){t.detachEvent("on"+e,t[e+n]);try{delete t[e+n]}catch(r){t[e+n]=void 0}}),{bind:o,unbind:i}}(),o=function(e,r){return t.getComputedStyle?r?n.defaultView.getComputedStyle(e,null).getPropertyValue(r):n.defaultView.getComputedStyle(e,null):e.currentStyle?r?e.currentStyle[r.replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]:e.currentStyle:void 0},i=function(e){var r=e.getBoundingClientRect(),o=t.pageYOffset||n.documentElement.scrollTop,i=t.pageXOffset||n.documentElement.scrollLeft;return{top:r.top+o,left:r.left+i}};e.Helpers={},e.Helpers.isEmptyObject=function(t){for(var e in t)return!1;return!0},e.Helpers.debounce=function(t,e,n){var r=void 0;return function(){var o=this,i=arguments,s=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,i)},e),s&&t.apply(o,i)}},e.Helpers.hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},e.Helpers.offset=i,e.Helpers.position=function(t){var e=t.offsetParent,n=i(e),r=i(t),s=o(e),a=o(t);return n.top+=parseInt(s.borderTopWidth)||0,n.left+=parseInt(s.borderLeftWidth)||0,{top:r.top-n.top-(parseInt(a.marginTop)||0),left:r.left-n.left-(parseInt(a.marginLeft)||0)}},e.Helpers.getStyle=o,e.Helpers.getCascadedStyle=function(e){var r=e.cloneNode(!0);r.style.display="none",e.parentNode.insertBefore(r,e.nextSibling);var o=void 0;r.currentStyle?o=r.currentStyle:t.getComputedStyle&&(o=n.defaultView.getComputedStyle(r,null));var i={};for(var s in o)!isNaN(s)||"string"!=typeof o[s]&&"number"!=typeof o[s]||(i[s]=o[s]);if(Object.keys(i).length<3){i={};for(var a in o)isNaN(a)||(i[o[a].replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]=o.getPropertyValue(o[a]))}if(i.margin||"auto"!==i.marginLeft?i.margin||i.marginLeft!==i.marginRight||i.marginLeft!==i.marginTop||i.marginLeft!==i.marginBottom||(i.margin=i.marginLeft):i.margin="auto",!i.margin&&"0px"===i.marginLeft&&"0px"===i.marginRight){var f=e.offsetLeft-e.parentNode.offsetLeft,u=f-(parseInt(i.left)||0)-(parseInt(i.right)||0),l=e.parentNode.offsetWidth-e.offsetWidth-f-(parseInt(i.right)||0)+(parseInt(i.left)||0)-u;0!==l&&1!==l||(i.margin="auto")}return r.parentNode.removeChild(r),r=null,i||null},e.Helpers.event=r}(window)}).call(this,t("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../dist/hc-sticky.js","/../../dist")},{buffer:4,rH1JPG:6}],3:[function(t,e,n){(function(t,e,r,o,i,s,a,f,u){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===r||e===f?62:e===o||e===u?63:e<i?-1:e<i+10?e-i+26+26:e<a+26?e-a:e<s+26?e-s+26:void 0}var n="undefined"!=typeof Uint8Array?Uint8Array:Array,r="+".charCodeAt(0),o="/".charCodeAt(0),i="0".charCodeAt(0),s="a".charCodeAt(0),a="A".charCodeAt(0),f="-".charCodeAt(0),u="_".charCodeAt(0);t.toByteArray=function(t){function r(t){u[c++]=t}var o,i,s,a,f,u;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=t.length;f="="===t.charAt(l-2)?2:"="===t.charAt(l-1)?1:0,u=new n(3*t.length/4-f),s=f>0?t.length-4:t.length;var c=0;for(o=0,i=0;o<s;o+=4,i+=3)r((16711680&(a=e(t.charAt(o))<<18|e(t.charAt(o+1))<<12|e(t.charAt(o+2))<<6|e(t.charAt(o+3))))>>16),r((65280&a)>>8),r(255&a);return 2===f?r(255&(a=e(t.charAt(o))<<2|e(t.charAt(o+1))>>4)):1===f&&(r((a=e(t.charAt(o))<<10|e(t.charAt(o+1))<<4|e(t.charAt(o+2))>>2)>>8&255),r(255&a)),u},t.fromByteArray=function(t){function e(t){return l.charAt(t)}function n(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var r,o,i,s=t.length%3,a="";for(r=0,i=t.length-s;r<i;r+=3)a+=n(o=(t[r]<<16)+(t[r+1]<<8)+t[r+2]);switch(s){case 1:a+=e((o=t[t.length-1])>>2),a+=e(o<<4&63),a+="==";break;case 2:a+=e((o=(t[t.length-2]<<8)+t[t.length-1])>>10),a+=e(o>>4&63),a+=e(o<<2&63),a+="="}return a}}(void 0===n?this.base64js={}:n)}).call(this,t("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/base64-js/lib/b64.js","/../../node_modules/base64-js/lib")},{buffer:4,rH1JPG:6}],4:[function(t,e,n){(function(e,r,o,i,s,a,f,u,l){function o(t,e,n){if(!(this instanceof o))return new o(t,e,n);var r=typeof t;if("base64"===e&&"string"===r)for(t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t);t.length%4!=0;)t+="=";var i;if("number"===r)i=k(t);else if("string"===r)i=o.byteLength(t,e);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=k(t.length)}var s;o._useTypedArrays?s=o._augment(new Uint8Array(i)):((s=this).length=i,s._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof t.byteLength)s._set(t);else if(function(t){return A(t)||o.isBuffer(t)||t&&"object"==typeof t&&"number"==typeof t.length}(t))for(a=0;a<i;a++)o.isBuffer(t)?s[a]=t.readUInt8(a):s[a]=t[a];else if("string"===r)s.write(t,0,e);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;a<i;a++)s[a]=0;return s}function c(t,e,n,r){return o._charsWritten=U(function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function d(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;o++)r+=String.fromCharCode(t[o]);return r}function h(t,e,n,r){r||(M("boolean"==typeof n,"missing or invalid endian"),M(void 0!==e&&null!==e,"missing offset"),M(e+1<t.length,"Trying to read beyond buffer length"));var o=t.length;if(!(e>=o)){var i;return n?(i=t[e],e+1<o&&(i|=t[e+1]<<8)):(i=t[e]<<8,e+1<o&&(i|=t[e+1])),i}}function p(t,e,n,r){r||(M("boolean"==typeof n,"missing or invalid endian"),M(void 0!==e&&null!==e,"missing offset"),M(e+3<t.length,"Trying to read beyond buffer length"));var o=t.length;if(!(e>=o)){var i;return n?(e+2<o&&(i=t[e+2]<<16),e+1<o&&(i|=t[e+1]<<8),i|=t[e],e+3<o&&(i+=t[e+3]<<24>>>0)):(e+1<o&&(i=t[e+1]<<16),e+2<o&&(i|=t[e+2]<<8),e+3<o&&(i|=t[e+3]),i+=t[e]<<24>>>0),i}}function g(t,e,n,r){r||(M("boolean"==typeof n,"missing or invalid endian"),M(void 0!==e&&null!==e,"missing offset"),M(e+1<t.length,"Trying to read beyond buffer length"));if(!(e>=t.length)){var o=h(t,e,n,!0);return 32768&o?-1*(65535-o+1):o}}function y(t,e,n,r){r||(M("boolean"==typeof n,"missing or invalid endian"),M(void 0!==e&&null!==e,"missing offset"),M(e+3<t.length,"Trying to read beyond buffer length"));if(!(e>=t.length)){var o=p(t,e,n,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function b(t,e,n,r){return r||(M("boolean"==typeof n,"missing or invalid endian"),M(e+3<t.length,"Trying to read beyond buffer length")),F.read(t,e,n,23,4)}function v(t,e,n,r){return r||(M("boolean"==typeof n,"missing or invalid endian"),M(e+7<t.length,"Trying to read beyond buffer length")),F.read(t,e,n,52,8)}function m(t,e,n,r,o){o||(M(void 0!==e&&null!==e,"missing value"),M("boolean"==typeof r,"missing or invalid endian"),M(void 0!==n&&null!==n,"missing offset"),M(n+1<t.length,"trying to write beyond buffer length"),j(e,65535));var i=t.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,2);s<a;s++)t[n+s]=(e&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function w(t,e,n,r,o){o||(M(void 0!==e&&null!==e,"missing value"),M("boolean"==typeof r,"missing or invalid endian"),M(void 0!==n&&null!==n,"missing offset"),M(n+3<t.length,"trying to write beyond buffer length"),j(e,4294967295));var i=t.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,4);s<a;s++)t[n+s]=e>>>8*(r?s:3-s)&255}function E(t,e,n,r,o){o||(M(void 0!==e&&null!==e,"missing value"),M("boolean"==typeof r,"missing or invalid endian"),M(void 0!==n&&null!==n,"missing offset"),M(n+1<t.length,"Trying to write beyond buffer length"),_(e,32767,-32768));n>=t.length||(e>=0?m(t,e,n,r,o):m(t,65535+e+1,n,r,o))}function I(t,e,n,r,o){o||(M(void 0!==e&&null!==e,"missing value"),M("boolean"==typeof r,"missing or invalid endian"),M(void 0!==n&&null!==n,"missing offset"),M(n+3<t.length,"Trying to write beyond buffer length"),_(e,2147483647,-2147483648));n>=t.length||(e>=0?w(t,e,n,r,o):w(t,4294967295+e+1,n,r,o))}function L(t,e,n,r,o){o||(M(void 0!==e&&null!==e,"missing value"),M("boolean"==typeof r,"missing or invalid endian"),M(void 0!==n&&null!==n,"missing offset"),M(n+3<t.length,"Trying to write beyond buffer length"),H(e,3.4028234663852886e38,-3.4028234663852886e38));n>=t.length||F.write(t,e,n,r,23,4)}function S(t,e,n,r,o){o||(M(void 0!==e&&null!==e,"missing value"),M("boolean"==typeof r,"missing or invalid endian"),M(void 0!==n&&null!==n,"missing offset"),M(n+7<t.length,"Trying to write beyond buffer length"),H(e,1.7976931348623157e308,-1.7976931348623157e308));n>=t.length||F.write(t,e,n,r,52,8)}function B(t,e,n){return"number"!=typeof t?n:(t=~~t)>=e?e:t>=0?t:(t+=e)>=0?t:0}function k(t){return(t=~~Math.ceil(+t))<0?0:t}function A(t){return(Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)}function T(t){return t<16?"0"+t.toString(16):t.toString(16)}function x(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);if(r<=127)e.push(t.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(t.slice(o,n+1)).substr(1).split("%"),s=0;s<i.length;s++)e.push(parseInt(i[s],16))}}return e}function C(t){return O.toByteArray(t)}function U(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);o++)e[o+n]=t[o];return o}function N(t){try{return decodeURIComponent(t)}catch(t){return String.fromCharCode(65533)}}function j(t,e){M("number"==typeof t,"cannot write a non-number as a number"),M(t>=0,"specified a negative value for writing an unsigned value"),M(t<=e,"value is larger than maximum value for type"),M(Math.floor(t)===t,"value has a fractional component")}function _(t,e,n){M("number"==typeof t,"cannot write a non-number as a number"),M(t<=e,"value larger than maximum allowed value"),M(t>=n,"value smaller than minimum allowed value"),M(Math.floor(t)===t,"value has a fractional component")}function H(t,e,n){M("number"==typeof t,"cannot write a non-number as a number"),M(t<=e,"value larger than maximum allowed value"),M(t>=n,"value smaller than minimum allowed value")}function M(t,e){if(!t)throw new Error(e||"Failed assertion")}var O=t("base64-js"),F=t("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(t){return!1}}(),o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(t){return!(null===t||void 0===t||!t._isBuffer)},o.byteLength=function(t,e){var n;switch(t+="",e||"utf8"){case"hex":n=t.length/2;break;case"utf8":case"utf-8":n=x(t).length;break;case"ascii":case"binary":case"raw":n=t.length;break;case"base64":n=C(t).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*t.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(t,e){if(M(A(t),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===t.length)return new o(0);if(1===t.length)return t[0];var n;if("number"!=typeof e)for(e=0,n=0;n<t.length;n++)e+=t[n].length;var r=new o(e),i=0;for(n=0;n<t.length;n++){var s=t[n];s.copy(r,i),i+=s.length}return r},o.prototype.write=function(t,e,n,r){if(isFinite(e))isFinite(n)||(r=n,n=void 0);else{var i=r;r=e,e=n,n=i}e=Number(e)||0;var s=this.length-e;n?(n=Number(n))>s&&(n=s):n=s;var a;switch(r=String(r||"utf8").toLowerCase()){case"hex":a=function(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;var s=e.length;M(s%2==0,"Invalid hex string"),r>s/2&&(r=s/2);for(var a=0;a<r;a++){var f=parseInt(e.substr(2*a,2),16);M(!isNaN(f),"Invalid hex string"),t[n+a]=f}return o._charsWritten=2*a,a}(this,t,e,n);break;case"utf8":case"utf-8":a=function(t,e,n,r){return o._charsWritten=U(x(e),t,n,r)}(this,t,e,n);break;case"ascii":a=c(this,t,e,n);break;case"binary":a=function(t,e,n,r){return c(t,e,n,r)}(this,t,e,n);break;case"base64":a=function(t,e,n,r){return o._charsWritten=U(C(e),t,n,r)}(this,t,e,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=function(t,e,n,r){return o._charsWritten=U(function(t){for(var e,n,r,o=[],i=0;i<t.length;i++)e=t.charCodeAt(i),n=e>>8,r=e%256,o.push(r),o.push(n);return o}(e),t,n,r)}(this,t,e,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(t,e,n){if(t=String(t||"utf8").toLowerCase(),e=Number(e)||0,(n=void 0!==n?Number(n):n=this.length)===e)return"";var r;switch(t){case"hex":r=function(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;i++)o+=T(t[i]);return o}(this,e,n);break;case"utf8":case"utf-8":r=function(t,e,n){var r="",o="";n=Math.min(t.length,n);for(var i=e;i<n;i++)t[i]<=127?(r+=N(o)+String.fromCharCode(t[i]),o=""):o+="%"+t[i].toString(16);return r+N(o)}(this,e,n);break;case"ascii":r=d(this,e,n);break;case"binary":r=function(t,e,n){return d(t,e,n)}(this,e,n);break;case"base64":r=function(t,e,n){return 0===e&&n===t.length?O.fromByteArray(t):O.fromByteArray(t.slice(e,n))}(this,e,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(this,e,n);break;default:throw new Error("Unknown encoding")}return r},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e||(e=0),r!==n&&0!==t.length&&0!==this.length){M(r>=n,"sourceEnd < sourceStart"),M(e>=0&&e<t.length,"targetStart out of bounds"),M(n>=0&&n<this.length,"sourceStart out of bounds"),M(r>=0&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i=r-n;if(i<100||!o._useTypedArrays)for(var s=0;s<i;s++)t[s+e]=this[s+n];else t._set(this.subarray(n,n+i),e)}},o.prototype.slice=function(t,e){var n=this.length;if(t=B(t,n,0),e=B(e,n,n),o._useTypedArrays)return o._augment(this.subarray(t,e));for(var r=e-t,i=new o(r,void 0,!0),s=0;s<r;s++)i[s]=this[s+t];return i},o.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},o.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},o.prototype.readUInt8=function(t,e){if(e||(M(void 0!==t&&null!==t,"missing offset"),M(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length))return this[t]},o.prototype.readUInt16LE=function(t,e){return h(this,t,!0,e)},o.prototype.readUInt16BE=function(t,e){return h(this,t,!1,e)},o.prototype.readUInt32LE=function(t,e){return p(this,t,!0,e)},o.prototype.readUInt32BE=function(t,e){return p(this,t,!1,e)},o.prototype.readInt8=function(t,e){if(e||(M(void 0!==t&&null!==t,"missing offset"),M(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length)){return 128&this[t]?-1*(255-this[t]+1):this[t]}},o.prototype.readInt16LE=function(t,e){return g(this,t,!0,e)},o.prototype.readInt16BE=function(t,e){return g(this,t,!1,e)},o.prototype.readInt32LE=function(t,e){return y(this,t,!0,e)},o.prototype.readInt32BE=function(t,e){return y(this,t,!1,e)},o.prototype.readFloatLE=function(t,e){return b(this,t,!0,e)},o.prototype.readFloatBE=function(t,e){return b(this,t,!1,e)},o.prototype.readDoubleLE=function(t,e){return v(this,t,!0,e)},o.prototype.readDoubleBE=function(t,e){return v(this,t,!1,e)},o.prototype.writeUInt8=function(t,e,n){n||(M(void 0!==t&&null!==t,"missing value"),M(void 0!==e&&null!==e,"missing offset"),M(e<this.length,"trying to write beyond buffer length"),j(t,255)),e>=this.length||(this[e]=t)},o.prototype.writeUInt16LE=function(t,e,n){m(this,t,e,!0,n)},o.prototype.writeUInt16BE=function(t,e,n){m(this,t,e,!1,n)},o.prototype.writeUInt32LE=function(t,e,n){w(this,t,e,!0,n)},o.prototype.writeUInt32BE=function(t,e,n){w(this,t,e,!1,n)},o.prototype.writeInt8=function(t,e,n){n||(M(void 0!==t&&null!==t,"missing value"),M(void 0!==e&&null!==e,"missing offset"),M(e<this.length,"Trying to write beyond buffer length"),_(t,127,-128)),e>=this.length||(t>=0?this.writeUInt8(t,e,n):this.writeUInt8(255+t+1,e,n))},o.prototype.writeInt16LE=function(t,e,n){E(this,t,e,!0,n)},o.prototype.writeInt16BE=function(t,e,n){E(this,t,e,!1,n)},o.prototype.writeInt32LE=function(t,e,n){I(this,t,e,!0,n)},o.prototype.writeInt32BE=function(t,e,n){I(this,t,e,!1,n)},o.prototype.writeFloatLE=function(t,e,n){L(this,t,e,!0,n)},o.prototype.writeFloatBE=function(t,e,n){L(this,t,e,!1,n)},o.prototype.writeDoubleLE=function(t,e,n){S(this,t,e,!0,n)},o.prototype.writeDoubleBE=function(t,e,n){S(this,t,e,!1,n)},o.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),"string"==typeof t&&(t=t.charCodeAt(0)),M("number"==typeof t&&!isNaN(t),"value is not a number"),M(n>=e,"end < start"),n!==e&&0!==this.length){M(e>=0&&e<this.length,"start out of bounds"),M(n>=0&&n<=this.length,"end out of bounds");for(var r=e;r<n;r++)this[r]=t}},o.prototype.inspect=function(){for(var t=[],e=this.length,r=0;r<e;r++)if(t[r]=T(this[r]),r===n.INSPECT_MAX_BYTES){t[r+1]="...";break}return"<Buffer "+t.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var t=new Uint8Array(this.length),e=0,n=t.length;e<n;e+=1)t[e]=this[e];return t.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var z=o.prototype;o._augment=function(t){return t._isBuffer=!0,t._get=t.get,t._set=t.set,t.get=z.get,t.set=z.set,t.write=z.write,t.toString=z.toString,t.toLocaleString=z.toString,t.toJSON=z.toJSON,t.copy=z.copy,t.slice=z.slice,t.readUInt8=z.readUInt8,t.readUInt16LE=z.readUInt16LE,t.readUInt16BE=z.readUInt16BE,t.readUInt32LE=z.readUInt32LE,t.readUInt32BE=z.readUInt32BE,t.readInt8=z.readInt8,t.readInt16LE=z.readInt16LE,t.readInt16BE=z.readInt16BE,t.readInt32LE=z.readInt32LE,t.readInt32BE=z.readInt32BE,t.readFloatLE=z.readFloatLE,t.readFloatBE=z.readFloatBE,t.readDoubleLE=z.readDoubleLE,t.readDoubleBE=z.readDoubleBE,t.writeUInt8=z.writeUInt8,t.writeUInt16LE=z.writeUInt16LE,t.writeUInt16BE=z.writeUInt16BE,t.writeUInt32LE=z.writeUInt32LE,t.writeUInt32BE=z.writeUInt32BE,t.writeInt8=z.writeInt8,t.writeInt16LE=z.writeInt16LE,t.writeInt16BE=z.writeInt16BE,t.writeInt32LE=z.writeInt32LE,t.writeInt32BE=z.writeInt32BE,t.writeFloatLE=z.writeFloatLE,t.writeFloatBE=z.writeFloatBE,t.writeDoubleLE=z.writeDoubleLE,t.writeDoubleBE=z.writeDoubleBE,t.fill=z.fill,t.inspect=z.inspect,t.toArrayBuffer=z.toArrayBuffer,t}}).call(this,t("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/buffer/index.js","/../../node_modules/buffer")},{"base64-js":3,buffer:4,ieee754:5,rH1JPG:6}],5:[function(t,e,n){(function(t,e,r,o,i,s,a,f,u){n.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,f=(1<<a)-1,u=f>>1,l=-7,c=n?o-1:0,d=n?-1:1,h=t[e+c];for(c+=d,i=h&(1<<-l)-1,h>>=-l,l+=a;l>0;i=256*i+t[e+c],c+=d,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=r;l>0;s=256*s+t[e+c],c+=d,l-=8);if(0===i)i=1-u;else{if(i===f)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,r),i-=u}return(h?-1:1)*s*Math.pow(2,i-r)},n.write=function(t,e,n,r,o,i){var s,a,f,u=8*i-o-1,l=(1<<u)-1,c=l>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+c>=1?d/f:d*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*f-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[n+h]=255&a,h+=p,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[n+h]=255&s,h+=p,s/=256,u-=8);t[n+h-p]|=128*g}}).call(this,t("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/ieee754/index.js","/../../node_modules/ieee754")},{buffer:4,rH1JPG:6}],6:[function(t,e,n){(function(t,n,r,o,i,s,a,f,u){function l(){}(t=e.exports={}).nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){n.shift()()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),t.title="browser",t.browser=!0,t.env={},t.argv=[],t.on=l,t.addListener=l,t.once=l,t.off=l,t.removeListener=l,t.removeAllListeners=l,t.emit=l,t.binding=function(t){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(t){throw new Error("process.chdir is not supported")}}).call(this,t("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/process/browser.js","/../../node_modules/process")},{buffer:4,rH1JPG:6}]},{},[1]);