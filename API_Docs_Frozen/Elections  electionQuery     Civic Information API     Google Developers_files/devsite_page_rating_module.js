(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this),da="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var ea;a:{var fa={I:!0},ha={};try{ha.__proto__=fa;ea=ha.I;break a}catch(a){}ea=!1}l=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=l;
function ja(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.j=b.prototype}function ka(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
ka("Object.setPrototypeOf",function(a){return a||ia});var la=function(){function a(){function c(){}new c;Reflect.construct(c,[],function(){});return new c instanceof c}if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return la});ka("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var h=0;!(f=b.next()).done;)e.push(c.call(d,f.value,h++))}else for(f=b.length,h=0;h<f;h++)e.push(c.call(d,b[h],h));return e}});var m=this||self;function n(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ma(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function oa(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.U=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};var pa;var qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},sa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,
b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,h=0;h<c;h++)if(h in f){var k=f[h];b.call(void 0,k,h,a)&&(d[e++]=k)}return d};function ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function va(a,b){if(b)a=a.replace(wa,"&amp;").replace(xa,"&lt;").replace(ya,"&gt;").replace(za,"&quot;").replace(Aa,"&#39;").replace(Ba,"&#0;");else{if(!Ca.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(wa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(xa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ya,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(za,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Aa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ba,"&#0;"))}return a}
var wa=/&/g,xa=/</g,ya=/>/g,za=/"/g,Aa=/'/g,Ba=/\x00/g,Ca=/[\x00&<>"']/;function Da(a,b){return a<b?-1:a>b?1:0};var r;a:{var Ea=m.navigator;if(Ea){var Fa=Ea.userAgent;if(Fa){r=Fa;break a}}r=""};function Ga(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Ha(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}var Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ja(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ia.length;f++)c=Ia[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function t(a){this.b=Ka===Ka&&a||"";this.c=La}t.prototype.u=!0;t.prototype.o=function(){return this.b.toString()};t.prototype.C=!0;t.prototype.a=function(){return 1};var La={},Ka={};function u(){this.b="";this.f=Ma;this.c=null}u.prototype.C=!0;u.prototype.a=function(){return this.c};u.prototype.u=!0;u.prototype.o=function(){return this.b.toString()};function v(a){return a instanceof u&&a.constructor===u&&a.f===Ma?a.b:"type_error:SafeHtml"}function w(a){if(a instanceof u)return a;var b="object"==typeof a,c=null;b&&a.C&&(c=a.a());return Na(va(b&&a.u?a.o():String(a)),c)}
function Oa(a){function b(f){Array.isArray(f)?ra(f,b):(f=w(f),e.push(v(f).toString()),f=f.a(),0==d?d=f:0!=f&&d!=f&&(d=null))}var c=w(Pa),d=c.a(),e=[];ra(a,b);return Na(e.join(v(c).toString()),d)}function Qa(a){return Oa(Array.prototype.slice.call(arguments))}var Ma={};function Na(a,b){return x(a,b)}function x(a,b){var c=new u;c.b=a;c.c=b;return c}x("<!DOCTYPE html>",0);var Pa=x("",0),Ra=x("<br>",0);var Sa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=v(Pa);return!b.parentElement});function y(a,b){if(Sa())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=v(b)};function Ta(a){return a=va(a,void 0)};function Ua(a){Ua[" "](a);return a}Ua[" "]=n;function Va(a,b){var c=Wa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Xa=-1!=r.indexOf("Opera"),z=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),Ya=-1!=r.indexOf("Edge"),A=-1!=r.indexOf("Gecko")&&!(-1!=r.toLowerCase().indexOf("webkit")&&-1==r.indexOf("Edge"))&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"))&&-1==r.indexOf("Edge"),B=-1!=r.toLowerCase().indexOf("webkit")&&-1==r.indexOf("Edge"),Za=-1!=r.indexOf("Macintosh");function $a(){var a=m.document;return a?a.documentMode:void 0}var ab;
a:{var bb="",cb=function(){var a=r;if(A)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ya)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(B)return/WebKit\/(\S+)/.exec(a);if(Xa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();cb&&(bb=cb?cb[1]:"");if(z){var db=$a();if(null!=db&&db>parseFloat(bb)){ab=String(db);break a}}ab=bb}var eb=ab,Wa={};
function C(a){return Va(a,function(){for(var b=0,c=ua(String(eb)).split("."),d=ua(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=Da(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Da(0==h[2].length,0==k[2].length)||Da(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})}var fb;
if(m.document&&z){var gb=$a();fb=gb?gb:parseInt(eb,10)||void 0}else fb=void 0;var D=fb;var hb=!z||9<=Number(D),ib=!z||9<=Number(D),jb=z&&!C("9"),kb=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{m.addEventListener("test",n,b),m.removeEventListener("test",n,b)}catch(c){}return a}();function E(){this.g=this.g;this.b=this.b}g=E.prototype;g.g=!1;g.M=function(){return this.g};g.ia=E.prototype.M;g.w=function(){this.g||(this.g=!0,this.m())};g.vb=function(a){a=na(lb,a);this.g?a():(this.b||(this.b=[]),this.b.push(a))};g.m=function(){if(this.b)for(;this.b.length;)this.b.shift()()};function lb(a){a&&"function"==typeof a.w&&a.w()};function F(a,b){this.type=a;this.b=this.target=b;this.O=this.f=!1}F.prototype.s=function(){this.f=!0};F.prototype.c=function(){this.O=!0};function G(a,b){F.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.G=this.F=0;this.key="";this.B=this.D=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.H=null;this.P=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(A){a:{try{Ua(b.nodeName);
var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.F=B||void 0!==a.offsetX?a.offsetX:a.layerX,this.G=B||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||
0,this.screenY=a.screenY||0);this.button=a.button;this.D=a.keyCode||0;this.key=a.key||"";this.B=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.P=Za?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:mb[a.pointerType]||"";this.H=a.state;this.a=a;a.defaultPrevented&&this.c()}}oa(G,F);var nb=[1,4,2],mb={2:"touch",3:"pen",4:"mouse"};
G.prototype.Pb=function(){return(hb?0==this.a.button:"click"==this.type?!0:!!(this.a.button&nb[0]))&&!(B&&Za&&this.ctrlKey)};G.prototype.s=function(){G.j.s.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};G.prototype.c=function(){G.j.c.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,jb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};G.prototype.Ob=function(){return this.a};var H="closure_listenable_"+(1E6*Math.random()|0),ob=0;function pb(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.b=e;this.key=++ob;this.i=this.l=!1}function I(a){a.i=!0;a.listener=null;a.a=null;a.src=null;a.b=null};function qb(a){this.src=a;this.a={};this.b=0}g=qb.prototype;g.Wa=function(){var a=0,b;for(b in this.a)a+=this.a[b].length;return a};g.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=rb(a,b,d,e);-1<h?(b=a[h],c||(b.l=!1)):(b=new pb(b,this.src,f,!!d,e),b.l=c,a.push(b));return b};
g.Ya=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=rb(e,b,c,d);return-1<b?(I(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};g.Za=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,I(d[e]);delete this.a[c];this.b--}return b};g.wa=function(a,b){a=this.a[a.toString()];var c=[];if(a)for(var d=0;d<a.length;++d){var e=a[d];e.capture==b&&c.push(e)}return c};
g.Xa=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return Ha(this.a,function(f){for(var h=0;h<f.length;++h)if(!(c&&f[h].type!=d||e&&f[h].capture!=b))return!0;return!1})};function rb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.i&&f.listener==b&&f.capture==!!c&&f.b==d)return e}return-1};var sb="closure_lm_"+(1E6*Math.random()|0),tb={},ub=0;function vb(a,b,c,d,e){if(d&&d.once)return wb(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)vb(a,b[f],c,d,e);return null}c=xb(c);return a&&a[H]?J(a,b,c,q(d)?!!d.capture:!!d,e):yb(a,b,c,!1,d,e)}
function yb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=q(e)?!!e.capture:!!e,k=K(a);k||(a[sb]=k=new qb(a));c=k.add(b,c,d,h,f);if(c.a)return c;d=zb();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)kb||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ab(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ub++;return c}
function zb(){var a=Bb,b=ib?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function wb(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)wb(a,b[f],c,d,e);return null}c=xb(c);return a&&a[H]?a.D(b,c,q(d)?!!d.capture:!!d,e):yb(a,b,c,!0,d,e)}
function Cb(a){if("number"!==typeof a&&a&&!a.i){var b=a.src;if(b&&b[H])b.a(a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ab(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ub--;if(c=K(b)){d=a.type;if(d in c.a){var e=c.a[d],f=qa(e,a),h;(h=0<=f)&&Array.prototype.splice.call(e,f,1);h&&(I(a),0==c.a[d].length&&(delete c.a[d],c.b--))}0==c.b&&(c.src=null,b[sb]=null)}else I(a)}}}
function Ab(a){return a in tb?tb[a]:tb[a]="on"+a}function Db(a,b,c,d){var e=!0;if(a=K(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.i&&(f=Eb(f,d),e=e&&!1!==f)}return e}function Eb(a,b){var c=a.listener,d=a.b||a.src;a.l&&Cb(a);return c.call(d,b)}
function Bb(a,b){if(a.i)return!0;if(!ib){if(!b)a:{b=["window","event"];for(var c=m,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new G(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.f&&0<=e;e--){b.b=d[e];var f=Db(d[e],a,!0,b);c=c&&f}for(e=0;!b.f&&e<d.length;e++)b.b=d[e],f=Db(d[e],a,!1,b),c=
c&&f}return c}return Eb(a,new G(b,this))}function K(a){a=a[sb];return a instanceof qb?a:null}var Fb="__closure_events_fn_"+(1E9*Math.random()>>>0);function xb(a){if("function"==p(a))return a;a[Fb]||(a[Fb]=function(b){return a.handleEvent(b)});return a[Fb]};var Gb={},Hb={};function L(){throw Error("Do not instantiate directly");}L.prototype.a=null;L.prototype.toString=function(){return this.A};function Ib(a){if(a.h!==Gb)throw Error("Sanitized content was not of kind HTML.");return x(a.toString(),a.a||null)}L.prototype.b=function(){if(this.h!==Hb)throw Error("Sanitized content was not of kind URI.");return new t(this.toString())};function Jb(){L.call(this)}oa(Jb,L);Jb.prototype.h=Gb;var Kb=function(a){function b(c){this.A=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.a=d);return c}}(Jb);function M(a){null!=a&&a.h===Gb?(a=String(a.A).replace(Lb,"").replace(Mb,"&lt;"),a=String(a).replace(Nb,Ob)):a=Ta(String(a));return a}
var Pb={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Ob(a){return Pb[a]}var Nb=/[\x00\x22\x27\x3c\x3e]/g,Lb=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Mb=/</g;function Sb(){return"Unusable documentation"}function Tb(){return"Poor documentation"}function Ub(){return"OK documentation"}function Vb(){return"Good documentation"}function Wb(){return"Excellent documentation"}function Xb(a){return'You rated "'+(a.v+'"')}function Yb(a){return a.v};var Zb=!z||9<=Number(D),$b=!A&&!z||z&&9<=Number(D)||A&&C("1.9.1"),ac=z&&!C("9"),bc=z||Xa||B;function N(a,b){this.a=void 0!==a?a:0;this.b=void 0!==b?b:0}g=N.prototype;g.$a=function(){return new N(this.a,this.b)};g.X=function(a){return a instanceof N&&(this==a?!0:this&&a?this.a==a.a&&this.b==a.b:!1)};g.ceil=function(){this.a=Math.ceil(this.a);this.b=Math.ceil(this.b);return this};g.floor=function(){this.a=Math.floor(this.a);this.b=Math.floor(this.b);return this};g.round=function(){this.a=Math.round(this.a);this.b=Math.round(this.b);return this};
g.bb=function(a,b){a instanceof N?(this.a+=a.a,this.b+=a.b):(this.a+=Number(a),"number"===typeof b&&(this.b+=b));return this};g.ab=function(a,b){this.a*=a;this.b*="number"===typeof b?b:a;return this};g.Fb=function(a,b){a=a*Math.PI/180;b=b||new N(0,0);var c=this.a,d=this.b,e=Math.cos(a);a=Math.sin(a);this.a=(c-b.a)*e-(d-b.b)*a+b.a;this.b=(c-b.a)*a+(d-b.b)*e+b.b};function cc(a,b){this.width=a;this.height=b}g=cc.prototype;g.cb=function(){return new cc(this.width,this.height)};g.xa=function(){return Math.max(this.width,this.height)};g.Ka=function(){return Math.min(this.width,this.height)};g.ub=function(){return 2*(this.width+this.height)};g.aspectRatio=function(){return this.width/this.height};g.kb=function(){return!(this.width*this.height)};g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.aa=function(a){return this.width<=a.width&&this.height<=a.height};g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function dc(a,b){a.width*=b;a.height*=b;return a}g.Gb=function(a){a=this.aspectRatio()<=a.aspectRatio()?a.width/this.width:a.height/this.height;return dc(this,a)};
g.Hb=function(a){a=this.aspectRatio()>a.aspectRatio()?a.width/this.width:a.height/this.height;return dc(this,a)};function O(a){return a?new P(Q(a)):pa||(pa=new P)}function ec(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=fc(document,"*",a,b);return d||null}
function gc(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var f=d=0,h;h=b[f];f++)e==h.nodeName&&(a[d++]=h);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(f=d=0;h=b[f];f++){e=h.className;var k;if(k="function"==typeof e.split)k=0<=qa(e.split(/\s+/),c);k&&(a[d++]=h)}a.length=d;return a}return b}
function fc(a,b,c,d){var e=d||a,f=b&&"*"!=b?String(b).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||c)?e.querySelector(f+(c?"."+c:"")):gc(a,b,c,d)[0]||null}function hc(a,b){Ga(b,function(c,d){c&&"object"==typeof c&&c.u&&(c=c.o());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ic.hasOwnProperty(d)?a.setAttribute(ic[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ic={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function jc(a){a=a.document;a=R(a)?a.documentElement:a.body;return new cc(a.clientWidth,a.clientHeight)}function kc(a){return a.scrollingElement?a.scrollingElement:!B&&R(a)?a.documentElement:a.body||a.documentElement}
function S(a){return a.parentWindow||a.defaultView}function lc(a,b,c,d){function e(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(;d<c.length;d++){var f=c[d];ma(f)&&!mc(f)?ra(nc(f)?ta(f):f,e):e(f)}}function T(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function R(a){return"CSS1Compat"==a.compatMode}function oc(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function pc(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}function U(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}function mc(a){return q(a)&&0<a.nodeType}function qc(a){return q(a)&&1==a.nodeType}function rc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function sc(a,b){var c=a.parentNode;if(c==b)return-1;for(;b.parentNode!=c;)b=b.parentNode;return tc(b,a)}function tc(a,b){for(;b=b.previousSibling;)if(b==a)return-1;return 1}function Q(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function uc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else oc(a),a.appendChild(Q(a).createTextNode(String(b)))}function vc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||vc(a,b,c,d))return!0;a=a.nextSibling}return!1}var wc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},V={IMG:" ",BR:"\n"};
function xc(a){return yc(a)&&zc(a)}function yc(a){return z&&!C("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}function zc(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}function Ac(a){if(ac&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Bc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ac||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Bc(a,b,c){if(!(a.nodeName in wc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in V)b.push(V[a.nodeName]);else for(a=a.firstChild;a;)Bc(a,b,c),a=a.nextSibling}function nc(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==p(a))return"function"==typeof a.item}return!1}
function Cc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Dc(a,function(f){var h;(h=!e||f.nodeName==e)&&!(h=!c)&&(h="string"===typeof f.className)&&(h=0<=qa(f.className.split(/\s+/),c));return h},!0,d)}function Dc(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}function P(a){this.a=a||m.document||document}g=P.prototype;g.oa=O;g.Ib=function(a){this.a=a};g.ja=function(){return this.a};
g.K=function(a){return"string"===typeof a?this.a.getElementById(a):a};g.Ia=function(a){return"string"===typeof a?this.a.getElementById(a):a};g.R=P.prototype.K;g.Ra=function(a,b){return(b||this.a).getElementsByTagName(String(a))};g.L=function(a,b,c){return gc(this.a,a,b,c)};g.qa=function(a,b,c){return fc(this.a,a,b,c)};g.ra=function(a,b){var c=(b=b||this.a)||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):gc(document,"*",a,b)};g.pa=function(a,b){return ec(a,b||this.a)};
g.Ja=function(a,b){return ec(a,b||this.a)};g.S=P.prototype.L;g.Kb=hc;g.Ma=function(a){return jc(a||S(this.a)||window)};g.ka=function(){var a=S(this.a),b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=jc(a).height,R(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}return c};
g.J=function(a,b,c){var d=this.a,e=arguments,f=String(e[0]),h=e[1];if(!Zb&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Ta(h.name),'"');if(h.type){f.push(' type="',Ta(h.type),'"');var k={};Ja(k,h);delete k.type;h=k}f.push(">");f=f.join("")}f=T(d,f);h&&("string"===typeof h?f.className=h:Array.isArray(h)?f.className=h.join(" "):hc(f,h));2<e.length&&lc(d,f,e,2);return f};g.T=P.prototype.J;g.Qa=function(a){return this.a.createTextNode(String(a))};
g.W=function(a,b,c){var d=this.a;c=!!c;for(var e=T(d,"TABLE"),f=e.appendChild(T(d,"TBODY")),h=0;h<a;h++){for(var k=T(d,"TR"),Qb=0;Qb<b;Qb++){var Rb=T(d,"TD");c&&uc(Rb,"\u00a0");k.appendChild(Rb)}f.appendChild(k)}return e};g.ib=function(){return R(this.a)};g.ma=function(){return kc(this.a)};g.la=function(){var a=this.a,b=kc(a);a=S(a);return z&&C("10")&&a.pageYOffset!=b.scrollTop?new N(b.scrollLeft,b.scrollTop):new N(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
g.ca=function(a){a=a||this.a;try{var b=a&&a.activeElement;var c=b&&b.nodeName?b:null}catch(d){c=null}return c};g.Oa=function(a,b){a.appendChild(b)};g.Na=function(a,b){lc(Q(a),a,arguments,1)};g.Pa=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.xb=oc;g.hb=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};g.gb=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};g.fb=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};g.Sa=pc;g.Ta=function(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)};g.ba=function(a){var b,c=a.parentNode;if(c&&11!=c.nodeType){if(a.removeNode)return a.removeNode(!1);for(;b=a.firstChild;)c.insertBefore(b,a);return pc(a)}};
g.ha=function(a){return $b&&void 0!=a.children?a.children:sa(a.childNodes,function(b){return 1==b.nodeType})};g.sa=function(a){return void 0!==a.firstElementChild?a.firstElementChild:U(a.firstChild,!0)};g.va=function(a){return void 0!==a.lastElementChild?a.lastElementChild:U(a.lastChild,!1)};g.ya=function(a){return void 0!==a.nextElementSibling?a.nextElementSibling:U(a.nextSibling,!0)};g.Ga=function(a){return void 0!==a.previousElementSibling?a.previousElementSibling:U(a.previousSibling,!1)};
g.za=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};g.Ha=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};g.nb=mc;g.jb=qc;g.pb=function(a){return q(a)&&a.window==a};g.Fa=function(a){var b;if(bc&&!(z&&C("9")&&!C("10")&&m.SVGElement&&a instanceof m.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return qc(b)?b:null};
g.contains=rc;
g.V=function(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(z&&!(9<=Number(D))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?tc(a,b):!c&&rc(e,b)?-1*sc(a,b):!d&&rc(f,a)?sc(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=Q(a);c=d.createRange();
c.selectNode(a);c.collapse(!0);a=d.createRange();a.selectNode(b);a.collapse(!0);return c.compareBoundaryPoints(m.Range.START_TO_END,a)};g.Y=function(a){var b,c=arguments.length;if(!c)return null;if(1==c)return arguments[0];var d=[],e=Infinity;for(b=0;b<c;b++){for(var f=[],h=arguments[b];h;)f.unshift(h),h=h.parentNode;d.push(f);e=Math.min(e,f.length)}f=null;for(b=0;b<e;b++){h=d[0][b];for(var k=1;k<c;k++)if(h!=d[k][b])return f;f=h}return f};g.Ea=Q;g.ta=function(a){return a.contentDocument||a.contentWindow.document};
g.ua=function(a){try{var b;if(!(b=a.contentWindow)){if(a.contentDocument){var c=a.contentDocument;var d=c?S(c):window}else d=null;b=d}return b}catch(e){}return null};g.Lb=uc;g.Da=function(a){if("outerHTML"in a)return a.outerHTML;var b=T(Q(a),"DIV");b.appendChild(a.cloneNode(!0));return b.innerHTML};g.Z=function(a,b){var c=[];return vc(a,b,c,!0)?c[0]:void 0};g.$=function(a,b){var c=[];vc(a,b,c,!1);return c};g.mb=xc;g.Jb=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};
g.lb=function(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!yc(a)||zc(a)):xc(a))&&z){var c;"function"!=p(a.getBoundingClientRect)||z&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};g.La=Ac;g.Ba=function(a){return Ac(a).length};
g.Ca=function(a,b){b=b||Q(a).body;for(var c=[];a&&a!=b;){for(var d=a;d=d.previousSibling;)c.unshift(Ac(d));a=a.parentNode}return c.join("").replace(/^[\s\xa0]+/,"").replace(/ +/g," ").length};
g.Aa=function(a,b,c){a=[a];for(var d=0,e=null;0<a.length&&d<b;)if(e=a.pop(),!(e.nodeName in wc))if(3==e.nodeType){var f=e.nodeValue.replace(/(\r\n|\r|\n)/g,"").replace(/ +/g," ");d+=f.length}else if(e.nodeName in V)d+=V[e.nodeName].length;else for(f=e.childNodes.length-1;0<=f;f--)a.push(e.childNodes[f]);q(c)&&(c.wb=e?e.nodeValue.length+b-d-1:0,c.node=e);return e};g.ob=nc;g.fa=Cc;g.ea=function(a,b,c){return Cc(a,null,b,c)};g.da=Dc;g.ga=function(a){return a.getContext("2d")};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var Ec=!/^\s*class\s*\{\s*\}\s*$/.test(function(){}.toString());/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){if(Ec&&!HTMLElement.es5Shimmed&&void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.polyfillWrapFlushCallback){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;HTMLElement.es5Shimmed=!0;Object.setPrototypeOf(HTMLElement,a)}})();function W(a){var b=HTMLElement.call(this)||this;a&&("string"===typeof a&&(a=[a]),document.body.dispatchEvent(new CustomEvent("devsite-load-custom-elements",{bubbles:!0,detail:a})));return b}ja(W,HTMLElement);W.prototype.H=function(){console.warn(this.tagName,"has not implemented update")};W.prototype.s=function(a){a=void 0===a?"":a;return document.createRange().createContextualFragment(a||"")};
W.prototype.F=function(a,b,c){a&&b?a.parentNode.replaceChild(document.importNode(b,!0),a):!b&&a?a.parentNode.removeChild(a):!a&&b&&(c?(a=document.importNode(b,!0),c.parentElement.insertBefore(a,c.nextSibling)):this.appendChild(document.importNode(b,!0)))};function X(a){E.call(this);this.c=a;this.a={}}oa(X,E);var Fc=[];function Gc(a,b,c,d){J(a,b,c,d,void 0)}g=X.prototype;g.rb=function(a,b,c,d,e){return J(this,a,b,c,d,e)};function J(a,b,c,d,e,f){Array.isArray(c)||(c&&(Fc[0]=c.toString()),c=Fc);for(var h=0;h<c.length;h++){var k=vb(b,c[h],d||a.handleEvent,e||!1,f||a.c||a);if(!k)break;a.a[k.key]=k}return a}g.Va=function(a,b,c,d){return Hc(this,a,b,c,d)};g.qb=function(a,b,c,d,e){return Hc(this,a,b,c,d,e)};
function Hc(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)Hc(a,b,c[h],d,e,f);else{b=wb(b,c,d||a.handleEvent,e,f||a.c||a);if(!b)return a;a.a[b.key]=b}return a}g.sb=function(a,b,c,d){J(b,a,c,d,this.c||this);return this};g.tb=function(a,b,c,d,e){J(b,a,c,d,e||this.c||this);return this};g.Ua=function(){var a=0,b;for(b in this.a)Object.prototype.hasOwnProperty.call(this.a,b)&&a++;return a};
function Ic(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)Ic(a,b,c[h],d,e,f);else d=d||a.handleEvent,e=q(e)?!!e.capture:!!e,f=f||a.c||a,d=xb(d),e=!!e,b&&b[H]?c=b.B(c,d,e,f):b?(b=K(b))?(c=b.a[c.toString()],b=-1,c&&(b=rb(c,d,e,f)),c=-1<b?c[b]:null):c=null:c=null,c&&(Cb(c),delete a.a[c.key])}g.Nb=function(a,b,c,d,e){Ic(b,a,c,d,e||this.c||this,this);return this};function Jc(a){Ga(a.a,function(b,c){this.a.hasOwnProperty(c)&&Cb(b)},a);a.a={}}g.m=function(){X.j.m.call(this);Jc(this)};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kc(a,b){b=b||O();b=T(b.a,"DIV");a=Lc(a);y(b,a);return 1==b.childNodes.length&&(a=b.firstChild,1==a.nodeType)?a:b}function Lc(a){return q(a)?a instanceof L?Ib(a):w("zSoyz"):w(String(a))}var Mc={};function Nc(){this.a=O();this.b=null}g=Nc.prototype;g.Ab=function(a,b){var c=this.a||O();a=a(b||Mc,void 0,{});a=Lc(a);b=c.a;c=T(b,"DIV");z?(a=Qa(Ra,a),y(c,a),c.removeChild(c.firstChild)):y(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(a=b.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);c=a}return c};g.zb=function(a,b){var c=this.a;return Kc(a(b||Mc,void 0,{}),c)};g.Bb=function(a,b,c){b=Lc(b(c||Mc,void 0,{}));y(a,b)};g.yb=function(a,b){a=a(b||{},{});return String(a)};
function Y(a,b){a=a(b||{},{});return String(a)}g.Eb=function(a,b){return a(b||{},{},{})};g.Cb=function(a,b){return Ib(a(b||{},{},{}))};g.Db=function(a,b){return a(b||{},{},{}).Mb()};g.na=function(){return this.a};g.eb=n;function Z(){var a=W.call(this)||this;a.G=new Nc;a.a=new X;a.b=0;var b=[Y(Sb),Y(Tb),Y(Ub),Y(Vb),Y(Wb)];a.f=b;a.c=[];return a}ja(Z,W);
Z.prototype.connectedCallback=function(){var a=this.getAttribute("position")||"";var b=this.f,c="";(a&&a.N&&"footer".N?a.h!=="footer".h?0:a.toString()==="footer".toString():"footer"==a)&&(c+='<div class="devsite-rating-caption">Was this page helpful?</div>');c+='<div class="devsite-rating-stars">';for(var d=Math.max(0,Math.ceil(b.length)),e=0;e<d;e++){var f=e;c+='<div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons" data-rating-val="'+M(f+1)+'" track-metadata-score="'+
M(f+1)+'" track-type="feedback" track-name="rating" track-metadata-position="'+M(a)+'" role="button" data-title="'+M(b[f])+'" aria-label="';f="Site content star ratings, rating "+(M(f+1)+" out of 5");c+=String(f).replace(Nb,Ob);c+='"></div>'}a=Kb(c+'</div><div class="devsite-rating-internal"><span class="devsite-rating-stats"></span></div>');a=Kc(a,void 0);this.c=Array.from(a.querySelectorAll(".devsite-rating-star"));this.hasAttribute("selected-rating")||this.setAttribute("selected-rating","0");this.hasAttribute("hover-rating-star")||
this.setAttribute("hover-rating-star","0");this.appendChild(a);Oc(this)};
function Oc(a){Gc(a.a,a,"click",function(b){if(b.target.classList.contains("devsite-rating-star")){b=Number(b.target.getAttribute("data-rating-val"));if(b!=a.b){Pc("selected-rating",b);var c={nonInteraction:!0,page:(new URL(document.location.toString())).pathname,referrer:(new URL(document.location.toString())).pathname,ratings_value:b,ratings_count:1};a.dispatchEvent(new CustomEvent("devsite-analytics-pageview",{detail:c,bubbles:!0}))}3>=b&&(b=document.querySelector("devsite-feedback"))&&b.dispatchEvent(new Event("click"))}});
Gc(a.a,a,"onpointerover"in window?"pointerover":"mouseover",function(b){b.target.classList.contains("devsite-rating-star")&&(b=Number(b.target.getAttribute("data-rating-val")),Pc("hover-rating-star",b))});Gc(a.a,a,"onpointerout"in window?"pointerout":"mouseout",function(b){b.target.classList.contains("devsite-rating-star")&&Pc("hover-rating-star",a.b)})}
Z.prototype.attributeChangedCallback=function(a,b,c){if("selected-rating"===a&&null!=b){var d=this.b=Number(c)||0;b=Number(b)||0;var e=d-1,f=b-1;0<b&&5>=b&&this.c[f].setAttribute("data-title",Y(Yb,{v:this.f[f]}));0<d&&5>=d&&this.c[e].setAttribute("data-title",Y(Xb,{v:this.f[e]}))}"hover-rating-star"===a&&Qc(this,Number(c)||0)};Z.prototype.disconnectedCallback=function(){Jc(this.a)};
function Pc(a,b){Array.from(document.getElementsByTagName("devsite-page-rating")).forEach(function(c){return c.setAttribute(a,b)})}function Qc(a,b){a.c.forEach(function(c){Number(c.getAttribute("data-rating-val"))<=b?c.classList.add("devsite-rating-star-full"):c.classList.remove("devsite-rating-star-full")})}ca.Object.defineProperties(Z,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["selected-rating","hover-rating-star"]}}});Z.prototype.disconnectedCallback=Z.prototype.disconnectedCallback;
Z.prototype.attributeChangedCallback=Z.prototype.attributeChangedCallback;Z.prototype.connectedCallback=Z.prototype.connectedCallback;try{window.customElements.define("devsite-page-rating",Z)}catch(a){console.warn("devsite.app.customElement.DevsitePageRating",a)};}).call(this);
