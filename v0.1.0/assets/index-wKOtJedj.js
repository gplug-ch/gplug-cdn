(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var qt,Y,Kr,Te,Zn,jr,zr,nn,Tt,ut,qr,Cn,cn,fn,Wt={},Ht=[],ea=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Yt=Array.isArray;function xe(e,t){for(var n in t)e[n]=t[n];return e}function Mn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Yr(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?qt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return It(e,o,r,i,null)}function It(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Kr,__i:-1,__u:0};return i==null&&Y.vnode!=null&&Y.vnode(a),a}function mt(e){return e.children}function Pt(e,t){this.props=e,this.context=t}function Ye(e,t){if(t==null)return e.__?Ye(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ye(e):null}function ta(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=xe({},t);a.__v=t.__v+1,Y.vnode&&Y.vnode(a),Nn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Ye(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Jr(r,a,i),t.__e=t.__=null,a.__e!=n&&Vr(a)}}function Vr(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Vr(e)}function Xn(e){(!e.__d&&(e.__d=!0)&&Te.push(e)&&!Kt.__r++||Zn!=Y.debounceRendering)&&((Zn=Y.debounceRendering)||jr)(Kt)}function Kt(){try{for(var e,t=1;Te.length;)Te.length>t&&Te.sort(zr),e=Te.shift(),t=Te.length,ta(e)}finally{Te.length=Kt.__r=0}}function Gr(e,t,n,r,i,a,o,l,f,d,p){var v,c,h,g,$,_,C,w=r&&r.__k||Ht,A=t.length;for(f=na(n,t,w,f,A),v=0;v<A;v++)(h=n.__k[v])!=null&&(c=h.__i!=-1&&w[h.__i]||Wt,h.__i=v,_=Nn(e,h,c,i,a,o,l,f,d,p),g=h.__e,h.ref&&c.ref!=h.ref&&(c.ref&&En(c.ref,null,h),p.push(h.ref,h.__c||g,h)),$==null&&g!=null&&($=g),(C=!!(4&h.__u))||c.__k===h.__k?(f=Zr(h,f,e,C),C&&c.__e&&(c.__e=null)):typeof h.type=="function"&&_!==void 0?f=_:g&&(f=g.nextSibling),h.__u&=-7);return n.__e=$,f}function na(e,t,n,r,i){var a,o,l,f,d,p=n.length,v=p,c=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=It(null,o,null,null,null):Yt(o)?o=e.__k[a]=It(mt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=It(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,f=a+c,o.__=e,o.__b=e.__b+1,l=null,(d=o.__i=ra(o,n,f,v))!=-1&&(v--,(l=n[d])&&(l.__u|=2)),l==null||l.__v==null?(d==-1&&(i>p?c--:i<p&&c++),typeof o.type!="function"&&(o.__u|=4)):d!=f&&(d==f-1?c--:d==f+1?c++:(d>f?c--:c++,o.__u|=4))):e.__k[a]=null;if(v)for(a=0;a<p;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Ye(l)),ei(l,l));return r}function Zr(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Zr(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ye(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ra(e,t,n,r){var i,a,o,l=e.key,f=e.type,d=t[n],p=d!=null&&(2&d.__u)==0;if(d===null&&l==null||p&&l==d.key&&f==d.type)return n;if(r>(p?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((d=t[o=i>=0?i--:a++])!=null&&(2&d.__u)==0&&l==d.key&&f==d.type)return o}return-1}function Jn(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ea.test(t)?n:n+"px"}function yt(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Jn(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Jn(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(qr,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[ut]=r[ut]:(n[ut]=Cn,e.addEventListener(t,a?fn:cn,a)):e.removeEventListener(t,a?fn:cn,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Qn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Tt]==null)t[Tt]=Cn++;else if(t[Tt]<n[ut])return;return n(Y.event?Y.event(t):t)}}}function Nn(e,t,n,r,i,a,o,l,f,d){var p,v,c,h,g,$,_,C,w,A,F,x,b,K,E,L,y=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),a=[l=t.__e=n.__e]),(p=Y.__b)&&p(t);e:if(typeof y=="function"){v=o.length;try{if(w=t.props,A=y.prototype&&y.prototype.render,F=(p=y.contextType)&&r[p.__c],x=p?F?F.props.value:p.__:r,n.__c?C=(c=t.__c=n.__c).__=c.__E:(A?t.__c=c=new y(w,x):(t.__c=c=new Pt(w,x),c.constructor=y,c.render=aa),F&&F.sub(c),c.state||(c.state={}),c.__n=r,h=c.__d=!0,c.__h=[],c._sb=[]),A&&c.__s==null&&(c.__s=c.state),A&&y.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=xe({},c.__s)),xe(c.__s,y.getDerivedStateFromProps(w,c.__s))),g=c.props,$=c.state,c.__v=t,h)A&&y.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),A&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(A&&y.getDerivedStateFromProps==null&&w!==g&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(w,x),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(w,c.__s,x)===!1){t.__v!=n.__v&&(c.props=w,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(O){O&&(O.__=t)}),Ht.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(w,c.__s,x),A&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(g,$,_)})}if(c.context=x,c.props=w,c.__P=e,c.__e=!1,b=Y.__r,K=0,A)c.state=c.__s,c.__d=!1,b&&b(t),p=c.render(c.props,c.state,c.context),Ht.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,b&&b(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++K<25);c.state=c.__s,c.getChildContext!=null&&(r=xe(xe({},r),c.getChildContext())),A&&!h&&c.getSnapshotBeforeUpdate!=null&&(_=c.getSnapshotBeforeUpdate(g,$)),E=p!=null&&p.type===mt&&p.key==null?Qr(p.props.children):p,l=Gr(e,Yt(E)?E:[E],t,n,r,i,a,o,l,f,d),c.base=t.__e,t.__u&=-161,c.__h.length&&o.push(c),C&&(c.__E=c.__=null)}catch(O){if(o.length=v,t.__v=null,f||a!=null){if(O.then){for(t.__u|=f?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a!=null&&(a[a.indexOf(l)]=null),t.__e=l}else if(a!=null)for(L=a.length;L--;)Mn(a[L])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),O.then||Xr(t),Y.__e(O,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=ia(n.__e,t,n,r,i,a,o,f,d);return(p=Y.diffed)&&p(t),128&t.__u?void 0:l}function Xr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Xr))}function Jr(e,t,n){for(var r=0;r<n.length;r++)En(n[r],n[++r],n[++r]);Y.__c&&Y.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){Y.__e(a,i.__v)}})}function Qr(e){return typeof e!="object"||e==null||e.__b>0?e:Yt(e)?e.map(Qr):e.constructor!==void 0?null:xe({},e)}function ia(e,t,n,r,i,a,o,l,f){var d,p,v,c,h,g,$,_=n.props||Wt,C=t.props,w=t.type;if(w=="svg"?i="http://www.w3.org/2000/svg":w=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(d=0;d<a.length;d++)if((h=a[d])&&"setAttribute"in h==!!w&&(w?h.localName==w:h.nodeType==3)){e=h,a[d]=null;break}}if(e==null){if(w==null)return document.createTextNode(C);e=document.createElementNS(i,w,C.is&&C),l&&(Y.__m&&Y.__m(t,a),l=!1),a=null}if(w==null)_===C||l&&e.data==C||(e.data=C);else{if(a=w=="textarea"&&C.defaultValue!=null?null:a&&qt.call(e.childNodes),!l&&a!=null)for(_={},d=0;d<e.attributes.length;d++)_[(h=e.attributes[d]).name]=h.value;for(d in _)h=_[d],d=="dangerouslySetInnerHTML"?v=h:d=="children"||d in C||d=="value"&&"defaultValue"in C||d=="checked"&&"defaultChecked"in C||yt(e,d,null,h,i);for(d in C)h=C[d],d=="children"?c=h:d=="dangerouslySetInnerHTML"?p=h:d=="value"?g=h:d=="checked"?$=h:l&&typeof h!="function"||_[d]===h||yt(e,d,h,_[d],i);if(p)l||v&&(p.__html==v.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(v&&(e.innerHTML=""),Gr(t.type=="template"?e.content:e,Yt(c)?c:[c],t,n,r,w=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&Ye(n,0),l,f),a!=null)for(d=a.length;d--;)Mn(a[d]);l&&w!="textarea"||(d="value",w=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[d]||w=="progress"&&!g||w=="option"&&g!=_[d])&&yt(e,d,g,_[d],i),d="checked",$!=null&&$!=e[d]&&yt(e,d,$,_[d],i))}return e}function En(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){Y.__e(i,n)}}function ei(e,t,n){var r,i;if(Y.unmount&&Y.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||En(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){Y.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ei(r[i],t,n||typeof e.type!="function");n||Mn(e.__e),e.__c=e.__=e.__e=void 0}function aa(e,t,n){return this.constructor(e,n)}function sa(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),Y.__&&Y.__(e,t),i=(r=!1)?null:t.__k,a=[],o=[],Nn(t,e=t.__k=Yr(mt,null,[e]),i||Wt,Wt,t.namespaceURI,i?null:t.firstChild?qt.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),Jr(a,e,o),e.props.children=null}qt=Ht.slice,Y={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(l){e=l}throw e}},Kr=0,Pt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=xe({},this.state),typeof e=="function"&&(e=e(xe({},n),this.props)),e&&xe(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Xn(this))},Pt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Xn(this))},Pt.prototype.render=mt,Te=[],jr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,zr=function(e,t){return e.__v.__b-t.__v.__b},Kt.__r=0,nn=Math.random().toString(8),Tt="__d"+nn,ut="__a"+nn,qr=/(PointerCapture)$|Capture$/i,Cn=0,cn=Qn(!1),fn=Qn(!0);var pt,Z,rn,er,jt=0,ti=[],ee=Y,tr=ee.__b,nr=ee.__r,rr=ee.diffed,ir=ee.__c,ar=ee.unmount,sr=ee.__;function Tn(e,t){ee.__h&&ee.__h(Z,e,jt||t),jt=0;var n=Z.__H||(Z.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function I(e){return jt=1,oa(ri,e)}function oa(e,t,n){var r=Tn(pt++,2);if(r.t=e,!r.__c&&(r.__=[ri(void 0,t),function(l){var f=r.__N?r.__N[0]:r.__[0],d=r.t(f,l);f!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=Z,!Z.__f)){var i=function(l,f,d){if(!r.__c.__H)return!0;var p=!1,v=r.__c.props!==l;if(r.__c.__H.__.some(function(h){if(h.__N){p=!0;var g=h.__[0];h.__=h.__N,h.__N=void 0,g!==h.__[0]&&(v=!0)}}),a){var c=a.call(this,l,f,d);return p?c||v:c}return!p||v};Z.__f=!0;var a=Z.shouldComponentUpdate,o=Z.componentWillUpdate;Z.componentWillUpdate=function(l,f,d){if(this.__e){var p=a;a=void 0,i(l,f,d),a=p}o&&o.call(this,l,f,d)},Z.shouldComponentUpdate=i}return r.__N||r.__}function X(e,t){var n=Tn(pt++,3);!ee.__s&&ni(n.__H,t)&&(n.__=e,n.u=t,Z.__H.__h.push(n))}function Ce(e){return jt=5,Le(function(){return{current:e}},[])}function Le(e,t){var n=Tn(pt++,7);return ni(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function la(){for(var e;e=ti.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ot),t.__h.some(dn),t.__h=[]}catch(n){t.__h=[],ee.__e(n,e.__v)}}}ee.__b=function(e){Z=null,tr&&tr(e)},ee.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),sr&&sr(e,t)},ee.__r=function(e){nr&&nr(e),pt=0;var t=(Z=e.__c).__H;t&&(rn===Z?(t.__h=[],Z.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Ot),t.__h.some(dn),t.__h=[],pt=0)),rn=Z},ee.diffed=function(e){rr&&rr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ti.push(t)!==1&&er===ee.requestAnimationFrame||((er=ee.requestAnimationFrame)||ua)(la)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),rn=Z=null},ee.__c=function(e,t){t.some(function(n){try{n.__h.some(Ot),n.__h=n.__h.filter(function(r){return!r.__||dn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],ee.__e(r,n.__v)}}),ir&&ir(e,t)},ee.unmount=function(e){ar&&ar(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Ot(r)}catch(i){t=i}}),n.__H=void 0,t&&ee.__e(t,n.__v))};var or=typeof requestAnimationFrame=="function";function ua(e){var t,n=function(){clearTimeout(r),or&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);or&&(t=requestAnimationFrame(n))}function Ot(e){var t=Z,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Z=t}function dn(e){var t=Z;e.__c=e.__(),Z=t}function ni(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ri(e,t){return typeof t=="function"?t(e):t}var ii=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],l=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?r[0]=l:o===4?r[1]=Object.assign(r[1]||{},l):o===5?(r[1]=r[1]||{})[t[++a]]=l:o===6?r[1][t[++a]]+=l+"":o?(i=e.apply(l,ii(e,l,n,["",null])),r.push(i),l[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(l)}return r},lr=new Map;function ca(e){var t=lr.get(this);return t||(t=new Map,lr.set(this,t)),(t=ii(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,o="",l="",f=[0],d=function(c){a===1&&(c||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?f.push(0,c,o):a===3&&(c||o)?(f.push(3,c,o),a=2):a===2&&o==="..."&&c?f.push(4,c,0):a===2&&o&&!c?f.push(5,0,!0,o):a>=5&&((o||!c&&a===5)&&(f.push(a,0,o,i),a=6),c&&(f.push(a,c,0,i),a=6)),o=""},p=0;p<n.length;p++){p&&(a===1&&d(),d(p));for(var v=0;v<n[p].length;v++)r=n[p][v],a===1?r==="<"?(d(),f=[f],a=3):o+=r:a===4?o==="--"&&r===">"?(a=1,o=""):o=r+o[0]:l?r===l?l="":o+=r:r==='"'||r==="'"?l=r:r===">"?(d(),a=1):a&&(r==="="?(a=5,i=o,o=""):r==="/"&&(a<5||n[p][v+1]===">")?(d(),a===3&&(f=f[0]),a=f,(f=f[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(d(),a=2):o+=r),a===3&&o==="!--"&&(a=4,f=f[0])}return d(),f})(e)),t),arguments,[])).length>1?t:t[0]}const u=ca.bind(Yr);var ct={},ai="de",ur={};function s(e,t){var n=ct[e];return n===void 0?(ur[e]||(ur[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function fa(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return ct=i||{},ai=ct["meta.lang"]||document.documentElement.lang||"de",ct}).catch(function(){return n()})}return n()}const da={t:s,load:fa,getLang:function(){return ai},getDict:function(){return ct}};var vt=" ",si="−";function Ve(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?si:"")+r}function pa(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function va(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?pa(Ve(e/1e3,1))+vt+"kW":Ve(Math.round(e),0)+vt+"W"}function ha(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Ve(e/1e3,2)+vt+"kWh":Ve(Math.round(e),0)+vt+"Wh"}function ga(e,t){if(e==null||isNaN(e))return"–";var n=Ve(e,2);return t&&e>0&&(n="+"+n),n+vt+"CHF"}function Oe(e){return(e<10?"0":"")+e}function ma(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=Oe(n.getDate())+"."+Oe(n.getMonth()+1)+"."+n.getFullYear(),i=Oe(n.getHours())+":"+Oe(n.getMinutes());switch(t){case"1d":return r;case"dm":return Oe(n.getDate())+"."+Oe(n.getMonth()+1)+".";case"1mo":return Oe(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const k={num:Ve,w:va,wh:ha,chf:ga,time:ma,MINUS:si};function Ge(e){return u`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?u`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?u`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function R(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:""),n=!!e.collapsible,r=e.collapseKey?"ui.card."+e.collapseKey:null,[i,a]=I(function(){if(!n)return!0;if(r)try{var f=window.localStorage.getItem(r);if(f==="0")return!1;if(f==="1")return!0}catch{}return e.defaultOpen!==!1});function o(){var f=!i;if(a(f),r)try{window.localStorage.setItem(r,f?"1":"0")}catch{}}var l=!n||i;return u`
      <section class=${t+(n&&!i?" is-collapsed":"")}>
        ${e.title||e.value||e.badge||e.tooltip?u`
          <div class=${"card-head"+(l?"":" card-head-collapsed")}>
            <div class="card-head-left">
              ${n?u`
                <button type="button" class="card-toggle" aria-expanded=${i?"true":"false"}
                  aria-label=${s(i?"common.collapse":"common.expand")}
                  onClick=${o}>
                  <svg class="card-toggle-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                <//>`:null}
              ${e.title?u`<h2 class="card-title">${e.title}</h2>`:null}
              ${e.tooltip?u`<${_e} text=${e.tooltip} />`:null}
              ${e.subtitle?u`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?u`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${l?e.children:null}
      </section>`}function Lt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return u`<span class=${r}>${s(n)}</span>`}function J(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return u`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function oi(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function _a(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function _e(e){var t=I(!1),n=t[0],r=t[1],i=I(null),a=i[0],o=i[1],l=Ce(null),f=Ce(null);return X(function(){if(!n)return;function d(w){w.key==="Escape"&&r(!1)}function p(w){f.current&&!f.current.contains(w.target)&&r(!1)}document.addEventListener("keydown",d),document.addEventListener("click",p);var v=l.current,c=f.current;if(v&&c){var h=c.getBoundingClientRect(),g=v.getBoundingClientRect(),$=h.left+h.width/2,_=Math.max(8,Math.min($-g.width/2,window.innerWidth-8-g.width)),C=h.top-g.height-8;C<8&&(C=h.bottom+8),o({left:_,top:C})}return function(){document.removeEventListener("keydown",d),document.removeEventListener("click",p),o(null)}},[n]),u`
      <span class="tooltip-wrap" ref=${f}>
        <button type="button" class="tooltip-icon" aria-label=${e.text}
          aria-expanded=${n}
          onMouseEnter=${function(){r(!0)}}
          onMouseLeave=${function(){r(!1)}}
          onFocus=${function(){r(!0)}}
          onBlur=${function(){r(!1)}}
          onClick=${function(d){d.stopPropagation(),r(!n)}}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
            <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
            <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
          </svg>
        </button>
        ${n?u`
          <span class="tooltip-bubble" role="tooltip" ref=${l}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var At=[],$a=0;function te(e,t){t=t||{};var n={id:++$a,message:e,type:t.type||"info",ttl:t.ttl||5e3};At.forEach(function(r){r(n)})}function ba(){var e=I([]),t=e[0],n=e[1];return X(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(o){return o.id!==i.id})})},i.ttl)}return At.push(r),function(){var i=At.indexOf(r);i>=0&&At.splice(i,1)}},[]),u`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return u`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${s("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var z={top:22,right:14,bottom:24,left:46};function li(e){var t=I(0),n=t[0],r=t[1];return X(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function ui(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var o=[],l=Math.ceil(e/i)*i,f=l;f<=t+i*1e-9;f+=i)o.push(Math.abs(f)<i*1e-9?0:f);return o}function In(e){return Math.abs(e)>=1e3?k.num(e/1e3,1).replace(/\.0$/,"")+"k":k.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function ya(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function wa(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var o=0;o<r;o++)a.push(o);else for(var l=0;l<i;l++)a.push(Math.round(l*(r-1)/(i-1)));var f=[],d=null,p=-1;return a.forEach(function(v){if(v!==p){p=v;var c=n(e[v].t);c!==d&&(d=c,f.push(v))}}),f}function ka(e){var t=0,n=0;return(e&&e.segments||[]).forEach(function(r){var i=r.value||0;i>0?t+=i:n+=i}),[t,n]}function ci(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function fi(e){return u`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return u`
            <g key=${"y"+t}>
              <line x1=${z.left} x2=${e.width-z.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${z.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${In(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-z.right-34?null:u`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${z.left} x2=${z.left} y1=${z.top-6} y2=${e.height-z.bottom}
          class="ch-axis" />
        <text x=${z.left-40} y=${z.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-z.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function cr(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function xa(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function Sa(e,t,n,r){var i=xa(e,t),a=[];if(i.length<2)return a;var o=[];function l(){if(o.length>=2){var g="M"+n(o[0].t).toFixed(1)+" "+r(o[0].top).toFixed(1),$;for($=1;$<o.length;$++)g+="L"+n(o[$].t).toFixed(1)+" "+r(o[$].top).toFixed(1);for($=o.length-1;$>=0;$--)g+="L"+n(o[$].t).toFixed(1)+" "+r(o[$].bottom).toFixed(1);a.push(g+"Z")}o=[]}for(var f=0;f<i.length;f++){var d=i[f],p=d.top-d.bottom;if(p>0?o.push(d):l(),f<i.length-1){var v=i[f+1],c=v.top-v.bottom;if(p>0!=c>0&&p!==c){var h=p/(p-c);o.push({t:d.t+(v.t-d.t)*h,top:d.top+(v.top-d.top)*h,bottom:d.bottom+(v.bottom-d.bottom)*h}),p>0&&l()}}}return l(),a}function di(e,t,n,r){var i=n>t-150;return u`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,o){return u`
            <div key=${o} class="ch-hover-line">
              ${a.color?u`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function Vt(e){var t=Ce(null),n=li(t),r=I(null),i=r[0],a=r[1],o=e.height||180,l=e.series||[],f=e.timeWindow;if(!f){var d=1/0,p=-1/0;l.forEach(function(y){y.points.forEach(function(O){O.t<d&&(d=O.t),O.t>p&&(p=O.t)})}),f=d===1/0?[0,1]:[d,p]}var v=f[0],c=f[1]>f[0]?f[1]:f[0]+1,h=[];l.forEach(function(y){y.points.forEach(function(O){h.push(O.y)})});var g=ci(h,!1),$=Math.max(10,n-z.left-z.right),_=o-z.top-z.bottom;function C(y){return z.left+(y-v)/(c-v)*$}function w(y){return z.top+(1-(y-g[0])/(g[1]-g[0]))*_}var A=ui(g[0],g[1],4),F=e.xTickFormat||function(y){return k.time(y,"hm")},x=ya(v,c,Math.max(2,Math.min(5,Math.floor($/90)))).map(function(y){return{x:C(y),label:F(y)}});function b(y){var O=[],D=[];y.forEach(function(j){j.y===null||j.y===void 0?(D.length&&O.push(D),D=[]):D.push(j)}),D.length&&O.push(D);var q=w(Math.max(0,g[0]));return O.map(function(j){var m=j.map(function(P,T){return(T===0?"M":"L")+C(P.t).toFixed(1)+" "+w(P.y).toFixed(1)}).join(""),S=m+"L"+C(j[j.length-1].t).toFixed(1)+" "+q.toFixed(1)+"L"+C(j[0].t).toFixed(1)+" "+q.toFixed(1)+"Z";return{line:m,area:S}})}function K(y){if(t.current){var O=t.current.getBoundingClientRect(),D=y.clientX-O.left;if(D<z.left||D>n-z.right){a(null);return}var q=v+(D-z.left)/$*(c-v);a(q)}}var E=null,L=[];return i!==null&&(L.push({text:F(i)}),l.forEach(function(y){var O=cr(y.points,i);O>=0&&(E===null&&(E=C(y.points[O].t)),L.push({color:y.color,text:(y.label?y.label+": ":"")+(e.yFormat||In)(y.points[O].y)+(e.yFormat?"":" "+e.yUnit)}))}),E===null&&(E=C(i))),u`
      <div class="chart" ref=${t}
        onPointerMove=${K}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${fi} width=${n} height=${o} sy=${w}
              yTicks=${A} xTicks=${x}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(y,O){return Sa(y.top,y.bottom,C,w).map(function(D,q){return u`<path key=${O+"-"+q} class="ch-band" d=${D} fill=${y.color} stroke="none"/>`})})}
            ${l.map(function(y,O){return b(y.points).map(function(D,q){return u`
                  <g key=${O+"-"+q}>
                    ${y.fill?u`<path class="ch-area" d=${D.area} fill=${y.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${D.line} fill="none" stroke=${y.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${E!==null?u`
              <line x1=${E} x2=${E} y1=${z.top-4} y2=${o-z.bottom} class="ch-crosshair"/>
              ${l.map(function(y,O){var D=cr(y.points,i);return D>=0?u`
                  <circle key=${O} cx=${C(y.points[D].t)} cy=${w(y.points[D].y)} r="3.5"
                    fill=${y.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${E!==null?di(t,n,E,L):null}`:null}
      </div>`}function pi(e){var t=Ce(null),n=li(t),r=I(null),i=r[0],a=r[1],o=e.height||180,l=e.points||[];function f(m){if(!m.bars)return[m.y];var S=[];return m.bars.forEach(function(P){ka(P).forEach(function(T){S.push(T)})}),S}var d=l.reduce(function(m,S){return S.bars?Math.max(m,S.bars.length):m},1),p=[];l.forEach(function(m){f(m).forEach(function(S){p.push(S)})});var v=ci(p,!0),c=Math.max(10,n-z.left-z.right),h=o-z.top-z.bottom;function g(m){return z.top+(1-(m-v[0])/(v[1]-v[0]))*h}var $=l.length,_=$>0?c/$:c;function C(m){return z.left+(m+.5)*_}var w=Math.max(1,Math.min(_-1,_*.72,46)),A=ui(v[0],v[1],4),F=e.xTickFormat||function(m){return k.time(m,"hm")},x=wa(l,c,F).map(function(m){return{x:C(m),label:F(l[m].t)}}),b=g(0),K=l.length+"|"+(l.length?l[0].t+"-"+l[l.length-1].t:"")+"|"+d+"|"+(e.yUnit||"");function E(m){if(!t.current||!$){a(null);return}var S=t.current.getBoundingClientRect(),P=m.clientX-S.left;if(P<z.left||P>n-z.right){a(null);return}var T=Math.floor((P-z.left)/_);a(T<0?0:T>=$?$-1:T)}var L=e.yFormat||In;function y(m){return L(m)+(e.yFormat?"":" "+(e.yUnit||""))}var O=null,D=[];if(i!==null&&l[i]){var q=l[i];if(O=C(i),D.push({text:F(q.t)}),q.bars)q.bars.forEach(function(m){(m.segments||[]).forEach(function(S){if(S.value){var P=e.signedMagnitude?Math.abs(S.value):S.value;D.push({color:S.color,text:(S.label?S.label+": ":"")+y(P)})}})});else if(q.y!==null&&q.y!==void 0){var j=e.signedMagnitude?Math.abs(q.y):q.y;D.push({color:q.color||e.color,text:(q.label?q.label+": ":"")+y(j)})}}return u`
      <div class="chart" ref=${t}
        onPointerMove=${E}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${fi} width=${n} height=${o} sy=${g}
              yTicks=${A} xTicks=${x}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${K}>
            ${l.map(function(m,S){var P=i===S?"1":"0.85";if(m.bars){var T=C(S)-w/2,be=w/d;return u`<g key=${S}>${m.bars.map(function(Qe,Re){var De=T+Re*be+1,he=Math.max(1,be-2),ye=0,ae=0;return(Qe.segments||[]).map(function(N,ne){var G=N.value||0;if(!G)return null;var Q,ce;G>0?(Q=ye,ce=ye+G,ye=ce):(Q=ae,ce=ae+G,ae=ce);var et=Math.min(g(Q),g(ce)),we=Math.max(1,Math.abs(g(ce)-g(Q)));return u`
                      <rect key=${Re+"-"+ne}
                        class=${"ch-bar "+(G>0?"ch-bar-up":"ch-bar-down")}
                        x=${De.toFixed(1)} y=${et.toFixed(1)}
                        width=${he.toFixed(1)} height=${we.toFixed(1)} rx="1.5"
                        fill=${N.color} opacity=${P}/>`})})}</g>`}if(m.y===null||m.y===void 0)return null;var pe=C(S)-w/2,ve=g(m.y),oe=Math.min(ve,b),Je=Math.max(1,Math.abs(ve-b));return u`
                <rect key=${S} class=${"ch-bar "+(m.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${pe.toFixed(1)} y=${oe.toFixed(1)}
                  width=${w.toFixed(1)} height=${Je.toFixed(1)} rx="2"
                  fill=${m.color||e.color||"var(--c-consumption)"}
                  opacity=${P}/>`})}
            </g>
            <line x1=${z.left} x2=${n-z.right} y1=${b} y2=${b} class="ch-zero-strong"/>
          </svg>
          ${O!==null?di(t,n,O,D):null}`:null}
      </div>`}var Ca=[10,25,50];function Ma(e){var t=I(0),n=t[0],r=t[1],i=I(e.pageSize||10),a=i[0],o=i[1],l=e.rows||[],f=l.length,d=Math.max(1,Math.ceil(f/a)),p=Math.min(n,d-1),v=p*a,c=Math.min(v+a,f),h=l.slice(v,c);return u`
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              ${e.columns.map(function(g){return u`
                  <th key=${g.key} class=${g.align==="right"?"ta-r":""}>
                    ${g.label}${g.unit?u`<span class="th-unit"> ${g.unit}</span>`:null}
                  </th>`})}
            </tr>
          </thead>
          <tbody>
            ${f===0?u`
              <tr><td class="table-empty" colspan=${e.columns.length}>${s("common.nodata")}</td></tr>`:h.map(function(g,$){return u`
                  <tr key=${g.id!==void 0?g.id:v+$}>
                    ${e.columns.map(function(_){return u`
                        <td key=${_.key} class=${_.align==="right"?"ta-r":""}>
                          ${_.render?_.render(g):g[_.key]}
                        </td>`})}
                  </tr>`})}
          </tbody>
        </table>
        <div class="table-footer">
          <label class="table-pagesize">
            <span>${s("table.perpage")}</span>
            <span class="select-wrap select-wrap-small">
              <select class="select select-small" value=${a}
                onChange=${function(g){o(+g.target.value),r(0)}}>
                ${Ca.map(function(g){return u`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${s("table.pageinfo",{from:f===0?0:v+1,to:c,total:f})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${s("table.prev")}
              disabled=${p===0} onClick=${function(){r(p-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${s("table.next")}
              disabled=${p>=d-1} onClick=${function(){r(p+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function vi(e,t){var n=e.split("/").filter(function(d){return d!==""}),r=t.split("/").filter(function(d){return d!==""}),i={},a;for(a=0;a<n.length;a++){var o=n[a];if(o.charAt(0)===":"){var l=o.slice(-1)==="?",f=o.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(l)continue;return null}i[f]=decodeURIComponent(r[a])}else if(o!==r[a])return null}return r.length>n.length?null:i}function pn(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=vi(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function Na(e){var t=I(function(){return pn(e)}),n=t[1];return X(function(){function r(){n(pn(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const hi={match:vi,parse:pn,useRoute:Na,navigate:function(e){window.location.hash="#"+e}};function Pn(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var Ft=[],Rt=!0,vn=null;function gi(e){e&&(vn=Date.now()),e!==Rt&&(Rt=e,Ft.forEach(function(t){t(Rt,vn)}))}var Ea=3,hn=0;function mi(e){return e instanceof TypeError||e&&e.name==="AbortError"}function _i(){hn=0,gi(!0)}function $i(e){e&&e.optional||(hn++,hn>=Ea&&gi(!1))}var Ta=8e3,Ia=2,an=0,gn=[];function bi(){for(;an<Ia&&gn.length>0;){var e=gn.shift();an++,e.run().then(e.resolve,e.reject).finally(function(){an--,bi()})}}function yi(e){return new Promise(function(t,n){gn.push({run:e,resolve:t,reject:n}),bi()})}function On(e,t){return t=t||{},yi(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},Ta);return fetch(Pn()+e,{signal:n.signal}).then(function(i){if(_i(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw mi(i)&&$i(t),i}).finally(function(){clearTimeout(r)})})}function fe(e,t){return On(e,t)}function Pa(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function o(){n!==null&&(clearInterval(n),n=null)}function l(){document.hidden?o():a()}return document.addEventListener("visibilitychange",l),a(),function(){r=!0,o(),document.removeEventListener("visibilitychange",l)}}function fr(e,t){return yi(function(){return fetch(Pn()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(_i(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw mi(n)&&$i(),n})})}function wt(e){return e==null||String(e).trim()===""}function We(e){return On("/cm?cmnd="+encodeURIComponent(e))}const H={base:Pn,get:fe,post:fr,restartDevice:function(){return We("Restart 1")},getWifiConfig:function(){return Promise.all([We("SSId1"),We("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return wt(e.ssid1)||t.push("SSId1 "+e.ssid1),wt(e.password1)||t.push("Password1 "+e.password1),wt(e.ssid2)||t.push("SSId2 "+e.ssid2),wt(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):We("Backlog "+t.join(";"))},wifiScanStart:function(){return We("WifiScan 1")},wifiScanResult:function(){return We("WifiScan")},getConfig:function(){return fe("/api/config")},postConfig:function(e){return fr("/api/config",e)},getConfigRaw:function(){return On("/api/config",{text:!0})},getPower:function(){return fe("/api/power")},getEnergy:function(e,t,n,r){if(e&&e!=="15m")throw new Error("getEnergy: res must be 15m");var i="/api/energy?res=15m&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),fe(i)},getMeta:function(){return fe("/api/meta")},getMeter:function(){return fe("/api/meter")},getSite:function(){return fe("/site")},getLoads:function(){return fe("/loads")},getProductions:function(){return fe("/productions")},getModbus:function(){return fe("/api/modbus")},setLoadState:function(e,t){return fe("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},poll:Pa,onStatus:function(e){return Ft.push(e),function(){var t=Ft.indexOf(e);t>=0&&Ft.splice(t,1)}},isOnline:function(){return Rt},lastOk:function(){return vn}};var Oa="\uFEFF",Ln=";",dr=`\r
`;function La(e){if(e==null)return"";var t=String(e);return t.indexOf(Ln)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function pr(e){return(e||[]).map(La).join(Ln)}function Aa(e){var t=String(e||"");t.charCodeAt(0)===65279&&(t=t.slice(1));var n=[],r=[],i="",a=!1,o=0;function l(){r.push(i),i=""}function f(){l(),n.push(r),r=[]}for(;o<t.length;){var d=t[o];if(a){if(d==='"'){if(t[o+1]==='"'){i+='"',o+=2;continue}a=!1,o++;continue}i+=d,o++;continue}if(d==='"'&&i===""){a=!0,o++;continue}if(d===Ln){l(),o++;continue}if(d==="\r"){o++;continue}if(d===`
`){f(),o++;continue}i+=d,o++}return(i!==""||r.length)&&f(),n}function wi(e,t){var n=[pr(e)];return(t||[]).forEach(function(r){n.push(pr(r))}),Oa+n.join(dr)+dr}function Fa(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var An="gplug-archive",Ra=3,ft=900,vr=384,Da=60,Ba=2*86400,Ua=50,Wa="2",Ha=["1","2"],hr={},gr=!1,nt=null,mn=!1;function Ka(){return typeof indexedDB<"u"?indexedDB:typeof globalThis<"u"?globalThis.indexedDB:void 0}function Ze(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error||new Error("idb request failed"))}})}function Fn(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=e.onerror=function(){n(e.error||new Error("idb tx failed"))}})}function $e(){if(nt)return nt;var e=Ka();return e?(nt=new Promise(function(t,n){var r;try{r=e.open(An,Ra)}catch(i){n(i);return}r.onupgradeneeded=function(){var i=r.result;i.objectStoreNames.contains("e15")||i.createObjectStore("e15",{keyPath:["siteId","ts"]}),i.objectStoreNames.contains("vz15")&&i.deleteObjectStore("vz15"),i.objectStoreNames.contains("meta")||i.createObjectStore("meta",{keyPath:"siteId"}),i.objectStoreNames.contains("live")||i.createObjectStore("live",{keyPath:["siteId","kind","id"]})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error||new Error("idb open failed"))},r.onblocked=function(){n(new Error("idb blocked"))}}).catch(function(t){throw mn=!0,nt=null,t}),nt):(mn=!0,Promise.reject(new Error("IndexedDB unavailable")))}function ja(){return mn?Promise.resolve(!1):$e().then(function(){return!0},function(){return!1})}function Xe(e,t,n){return e.transaction(t,n).objectStore(t)}function za(e){return{siteId:e,firstE15Ts:null,lastE15Ts:null,gaps:[],count:0,syncedAt:null}}function Rn(e){return $e().then(function(t){return Ze(Xe(t,"meta","readonly").get(e))}).then(function(t){return t||za(e)})}function ki(e){return $e().then(function(t){var n=t.transaction("meta","readwrite");return n.objectStore("meta").put(e),Fn(n).then(function(){return e})})}function qa(){return $e().then(function(e){return Ze(Xe(e,"meta","readonly").getAllKeys())}).then(function(e){return(e||[]).map(String)})}function Dn(e,t,n){var r=t??0,i=n??9999999999;return IDBKeyRange.bound([e,r],[e,i])}function Ya(e,t,n){return $e().then(function(r){return Ze(Xe(r,"e15","readonly").getAll(Dn(e,t,n)))}).then(function(r){return(r||[]).map(function(i){var a={ts:i.ts,imp_wh:i.imp_wh,exp_wh:i.exp_wh,pv_wh:i.pv_wh};return Bn(a,i),i.partial&&(a.partial=!0),a})})}function xi(e,t){return!t||!t.length?Promise.resolve(0):$e().then(function(n){var r=n.transaction("e15","readwrite"),i=r.objectStore("e15"),a=0;return t.forEach(function(o){if(!(!o||typeof o.ts!="number")){var l={siteId:e,ts:o.ts,imp_wh:dt(o.imp_wh),exp_wh:dt(o.exp_wh),pv_wh:dt(o.pv_wh)};Bn(l,o),o.partial&&(l.partial=!0),i.put(l),a++}}),Fn(r).then(function(){return a})})}function dt(e){return e==null||isNaN(e)?null:Number(e)}var Va=["bat_chg_wh","bat_dis_wh"];function Bn(e,t){Va.forEach(function(n){var r=dt(t[n]);r!==null&&(e[n]=r)})}function Ga(e){for(var t=[],n=1;n<e.length;n++){var r=e[n-1],i=e[n];if(i-r>ft&&(t.push([r+ft,i-ft]),t.length>=Ua))break}return t}function Un(e){return $e().then(function(t){return Ze(Xe(t,"e15","readonly").getAllKeys(Dn(e)))}).then(function(t){var n=(t||[]).map(function(r){return r[1]});return n.sort(function(r,i){return r-i}),{count:n.length,firstE15Ts:n.length?n[0]:null,lastE15Ts:n.length?n[n.length-1]:null,gaps:Ga(n)}})}function Wn(e){return Promise.all([Rn(e),Un(e),Za()]).then(function(t){var n=t[0],r=t[1];return{siteId:e,firstE15Ts:r.firstE15Ts,lastE15Ts:r.lastE15Ts,count:r.count,gaps:r.gaps,syncedAt:n.syncedAt,days:r.firstE15Ts===null?0:Math.max(1,Math.round((r.lastE15Ts-r.firstE15Ts)/86400)),estimate:t[2]}})}function Za(){return typeof navigator>"u"||!navigator.storage||!navigator.storage.estimate?Promise.resolve(null):navigator.storage.estimate().then(function(e){return e},function(){return null})}function Xa(){return gr||(gr=!0,typeof navigator>"u"||!navigator.storage||!navigator.storage.persist)?Promise.resolve(null):navigator.storage.persist().then(function(e){return e},function(){return null})}function Ja(e,t){var n;return Rn(t).then(function(r){n=r;var i=0;return r.lastE15Ts!==null&&r.lastE15Ts!==void 0&&(i=r.lastE15Ts+ft,hr[t]||(i=Math.max(0,r.lastE15Ts-Ba))),hr[t]=!0,Qa(e,t,i)}).then(function(){return Un(t)}).then(function(r){return n.firstE15Ts=r.firstE15Ts,n.lastE15Ts=r.lastE15Ts,n.count=r.count,n.gaps=r.gaps,n.syncedAt=Math.floor(Date.now()/1e3),ki(n)}).then(function(){return Xa()}).then(function(){return Wn(t)})}function Qa(e,t,n){var r=0;function i(a){return r>=Da?Promise.resolve():(r++,e.getEnergy("15m",vr,a).then(function(o){return!Array.isArray(o)||!o.length?null:xi(t,o).then(function(){var l=o[o.length-1].ts;return o.forEach(function(f){f.ts>l&&(l=f.ts)}),o.length<vr?null:i(l+ft)})}))}return i(n)}function es(e){return IDBKeyRange.bound([e,"",""],[e,"￿","￿"])}function mr(e,t,n){var r=Object.keys(n||{});return!e||!r.length?Promise.resolve(0):$e().then(function(i){var a=i.transaction("live","readwrite"),o=a.objectStore("live");return r.forEach(function(l){for(var f=n[l]||[],d=[],p=0;p<f.length;p++)d.push(f[p].t,dt(f[p].y));o.put({siteId:e,kind:t,id:String(l),pts:d})}),Fn(a).then(function(){return r.length})})}function _r(e,t,n){var r=n??0;return $e().then(function(i){return Ze(Xe(i,"live","readonly").getAll(es(e)))}).then(function(i){var a={};return(i||[]).forEach(function(o){if(!(!o||o.kind!==t||!Array.isArray(o.pts))){for(var l=[],f=0;f+1<o.pts.length;f+=2)o.pts[f]<r||l.push({t:o.pts[f],y:o.pts[f+1]});l.length&&(a[o.id]=l)}}),a})}function ts(e){return $e().then(function(t){return Ze(Xe(t,"e15","readonly").getAll(Dn(e)))}).then(function(t){var n=[];return(t||[]).sort(function(r,i){return r.ts-i.ts}).forEach(function(r){n.push(["e",r.ts,rt(r.imp_wh),rt(r.exp_wh),rt(r.pv_wh),r.partial?"1":"0",rt(r.bat_chg_wh),rt(r.bat_dis_wh)])}),wi([An,Wa,e],n)})}function rt(e){return e==null?"":String(e)}function ns(e,t){var n=Aa(e);if(!n.length||n[0][0]!==An)return Promise.reject(new Error("not a gplug archive export"));if(Ha.indexOf(n[0][1])<0)return Promise.reject(new Error("unsupported export format "+n[0][1]));var r=n[0][2];if(t&&r!==t)return Promise.reject(new Error("site mismatch: file "+r+", device "+t));for(var i=t||r,a=[],o=1;o<n.length;o++){var l=n[o];if(!(!l||!l.length)&&l[0]==="e"){var f={ts:Number(l[1]),imp_wh:it(l[2]),exp_wh:it(l[3]),pv_wh:it(l[4])};l[5]==="1"&&(f.partial=!0),Bn(f,{bat_chg_wh:it(l[6]),bat_dis_wh:it(l[7])}),a.push(f)}}return xi(i,a).then(function(){return Un(i)}).then(function(d){return Rn(i).then(function(p){return p.firstE15Ts=d.firstE15Ts,p.lastE15Ts=d.lastE15Ts,p.count=d.count,p.gaps=d.gaps,ki(p)})}).then(function(){return Wn(i)})}function it(e){return e===""||e===void 0?null:Number(e)}var rs=900*1e3,V={available:null,siteId:null,coverage:null,error:null,syncing:!1,otherSites:[]},Dt=[],lt=null,$r=null;function Si(){return V}function Bt(){Dt.forEach(function(e){try{e(V)}catch{}})}function Ci(e){return Dt.push(e),function(){var t=Dt.indexOf(e);t>=0&&Dt.splice(t,1)}}function is(e){return lt||(lt=ja().then(function(t){return V.available=t,t?e.getSite().then(function(n){return V.siteId=n&&n.id?String(n.id):null,V.siteId?qa().then(function(r){V.otherSites=r.filter(function(i){return i!==V.siteId})},function(){}).then(function(){return _n(e)}).then(function(){return $r===null&&typeof setInterval=="function"&&($r=setInterval(function(){_n(e)},rs)),V}):(V.available=!1,Bt(),V)},function(){return Bt(),V}):(Bt(),V)}),lt)}function _n(e){return!V.available||!V.siteId||V.syncing?Promise.resolve(V):(V.syncing=!0,Ja(e,V.siteId).then(function(t){V.coverage=t,V.error=null},function(t){V.error=t&&t.message?t.message:"sync failed"}).then(function(){return V.syncing=!1,Bt(),V}))}function Gt(){return lt||Promise.resolve(V)}function as(e){return _n(e)}var Mi={overview:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,modbus:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="3.5" y="6" width="13" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 6V3.8M10 6V3.8M13.5 6V3.8M6.5 14v2.2M10 14v2.2M13.5 14v2.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,settings:u`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function br(){return u`
      <a class="logo" href="#/" aria-label="gPlug">
        <svg class="logo-mark" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.26 114.24">
          <defs>
            <style>
              .cls-1 {
                fill: #fac453;
              }
            </style>
          </defs>
          <g id="cdmtXP.tif">
            <g>
              <g>
                <g>
                  <path class="cls-1" d="M170.68,108.49c-1.4-.58-2.32-1.85-2.64-3.11-.42-1.66.25-3.06,1.24-4.44.89-1.23,2.98-2.12,4.59-1.39,4.35,1.96,8.7,3.69,13.51,4.17l5.49.54c3.62.36,7.5-.34,10.78-1.92,3.47-1.67,5.88-4.55,7.12-8.1.84-2.41,1.34-4.96,1.33-7.53l-.04-9.5c-5.16,5.04-10.2,8-17.22,8.69-9.18.9-18.42-2.82-24.37-9.94s-7.53-15.56-6.65-24.63c.87-8.98,5.35-16.66,12.96-21.56,6.79-4.37,15.28-5.89,23.15-3.46,4.66,1.44,8.62,4.31,12.14,7.75.06-2.03-.06-3.74.68-5.27,1.03-2.11,2.94-3.16,5.3-2.85,2.39.12,4.01,1.99,4.71,4.39v56.06s-.46,3.55-.46,3.55c-.52,4.14-1.51,8.11-3.51,11.75-4.97,9.02-13.64,12.73-23.81,12.54l-6.76-.46c-4.07-.28-7.97-1.28-11.71-2.83l-5.84-2.44ZM204.28,73.97c2.87-1.78,5.34-3.84,7.84-6.23v-24.28c-3.69-3.57-8.46-7.44-13.37-8.21-7.97-1.46-16.93.75-21.32,7.7-3.3,5.22-3.46,10.39-3.07,16.44l.5,2.71c.99,5.31,4.42,9.75,9.3,12.13,5.98,2.91,14.52,3.2,20.12-.27Z"/>
                  <path class="cls-1" d="M305.69,33.23c-1.31,13.44-11.81,21.48-24.93,22.68l-4.22.31-23.49.05-.02,25.06c0,1.54-.55,3-1.7,3.87-2.2,2.05-5.33,1.98-7.39-.16-.82-.85-1.45-1.79-1.45-3.14V9.52c0-2.5,1.93-5.11,4.57-5.11h32.26s2.98.41,2.98.41c6.38.88,12.76,3.38,17.09,8.13,5.07,5.57,7.05,12.79,6.31,20.28ZM295.07,27.73c-.69-4.81-3.33-8.62-7.7-10.83-3.11-1.47-6.54-2.5-10.16-2.52l-24.17-.14v32s24.52-.06,24.52-.06l3.57-.43c3.6-.54,6.71-1.93,9.49-4.28,3.71-3.13,5.16-8.82,4.45-13.73Z"/>
                </g>
                <g>
                  <path class="cls-1" d="M423.18,108.49c-1.4-.58-2.32-1.85-2.64-3.11-.41-1.64.25-3.09,1.23-4.42,1.06-1.45,3.23-2.1,4.96-1.29,4.67,2.19,9.55,3.78,14.73,4.24l4.12.37c3.57.32,7.36-.38,10.58-1.94,3.46-1.68,5.88-4.55,7.12-8.1.84-2.4,1.34-4.96,1.33-7.53l-.05-9.5c-5.15,5.04-10.21,8-17.22,8.69-9.18.9-18.42-2.82-24.37-9.94s-7.53-15.56-6.65-24.63,5.35-16.69,12.96-21.56c6.87-4.4,15.42-5.93,23.34-3.4,4.43,1.42,8.31,4.11,11.59,7.39l.41.06c-.03-1.75-.1-3.51.63-5.02,1.02-2.11,2.94-3.16,5.3-2.84,2.39.11,4.01,1.99,4.71,4.39l-.04,56.29-.6,4.71c-.7,5.48-2.8,10.65-6.4,14.76-5.39,6.17-12.94,8.29-21,8.13l-6.51-.46c-4.07-.29-7.97-1.27-11.71-2.83l-5.84-2.44ZM444.08,76.36c4.74.2,8.72.08,12.7-2.4,2.91-1.81,5.49-3.91,7.85-6.28v-24.23c-3.7-3.57-8.45-7.43-13.38-8.21-12.17-2.09-22.89,3.72-24.35,16.35l-.05,7.8.51,2.7c1.28,6.79,6.42,11.92,13.12,13.56l3.6.71Z"/>
                  <path class="cls-1" d="M400.95,30.87v50.29c.01,3.02-2.06,5.39-4.93,5.51-2.86.12-5.48-1.94-5.57-5l-.15-5.08-6.41,5.57c-6.62,5.75-19.7,7.03-27.22,1.72-1.96-1.38-3.66-2.94-5.02-5.01-2.67-4.07-4.2-8.74-4.21-13.77l-.03-34.28c0-3.2,3.04-5.25,6-4.91,1.97.22,4.42,1.79,4.43,4.09l.13,33.85.45,3.57c.36,2.82,1.59,5.56,3.82,7.4,4.38,3.61,12.33,3.28,17.28.7,4.31-2.25,7.84-5.61,10.86-9.32l.03-35.42c0-3.13,2.86-5.08,5.77-4.88,2.54.17,4.75,2.12,4.75,4.97Z"/>
                </g>
                <path class="cls-1" d="M329.38,81.48c-.31,2.95-2.21,4.78-4.78,5.18-2.54.31-5.05-1.34-5.8-3.99V4.04c.6-2.58,2.76-4.09,5.29-4.04,2.99.05,4.9,2.14,5.28,5.17v76.31Z"/>
              </g>
              <g>
                <path class="cls-1" d="M0,4.23h122.44v107.79H0V4.23ZM79,100.42l.03-5.82h12.03s.01-12.27.01-12.27h14.33s-.01-67.07-.01-67.07H16.39s-.03,67.05-.03,67.05l12.58.02.02,12.26h12.64s.08,5.83.08,5.83h37.33Z"/>
                <g>
                  <rect class="cls-1" x="29.56" y="21.98" width="7.03" height="45.47"/>
                  <rect class="cls-1" x="40.34" y="21.98" width="7.05" height="45.28"/>
                  <rect class="cls-1" x="62.06" y="21.98" width="7.08" height="45.28"/>
                  <rect class="cls-1" x="83.73" y="21.98" width="7.15" height="45.28"/>
                  <rect class="cls-1" x="72.84" y="21.98" width="7.06" height="45.28"/>
                  <rect class="cls-1" x="51.3" y="21.98" width="6.93" height="45.28"/>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>`}var ss=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/modbus",key:"nav.modbus",icon:"modbus",gate:"modbus",active:function(e){return e.indexOf("/modbus")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function yr(e){return u`
      <nav class="nav" aria-label=${s("nav.menu")}>
        ${ss.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="modbus"||e.showModbus)}).map(function(t){var n=t.active(e.path);return u`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${Mi[t.icon]}
              <span>${s(t.key)}</span>
            </a>`})}
      </nav>`}function os(e){var t=hi.useRoute(e.routes),n=I(!1),r=n[0],i=n[1],a=I(!1),o=a[0],l=a[1],f=I(null),d=f[0],p=f[1],v=I(!1),c=v[0],h=v[1],g=I(!1),$=g[0],_=g[1],C=I(!1),w=C[0],A=C[1];X(function(){return H.onStatus(function(x,b){x?p(null):(te(s("error.offline"),{type:"error"}),p(b?new Date(b):new Date))})},[]),X(function(){var x=!1;function b(E){A(E.available===!1),!x&&E.otherSites&&E.otherSites.length&&(x=!0,te(s("banner.archive_site_changed",{id:E.siteId}),{type:"warn"}))}var K=Ci(b);return Gt().then(b),K},[]),X(function(){return H.poll(function(){H.getMeta().then(function(x){l(!!x&&typeof x.time=="number"&&x.time<1e9)}).catch(function(){})},6e4)},[]),X(function(){H.getMeter().then(function(x){h(!!(x&&x.values))}).catch(function(){})},[]),X(function(){H.getModbus().then(function(x){_(Array.isArray(x)&&x.length>0)}).catch(function(){})},[]),X(function(){i(!1)},[t.path]);var F=t.route.component;return u`
      <div class="shell">
        <aside class="sidebar">
          <${br} />
          <${yr} path=${t.path} showMeter=${c} showModbus=${$} />
          <div class="sidebar-foot">${"v0.1.0"}</div>
        </aside>

        <div class="topbar">
          <${br} />
          <button class="burger" aria-label=${s("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${Mi.burger}</button>
        </div>
        ${r?u`
          <div class="drawer">
            <${yr} path=${t.path} showMeter=${c} showModbus=${$} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${o?u`<div class="banner banner-warn">${s("banner.rtc")}</div>`:null}
          ${w?u`<div class="banner banner-warn">${s("banner.archive")}</div>`:null}
          ${d?u`
            <div class="stale-note">${s("common.stale",{time:k.time(Math.floor(d.getTime()/1e3),"hm")})}</div>`:null}
          <${F} params=${t.params} />
        </main>

        <${ba} />
      </div>`}var ls=["imp_wh","exp_wh","pv_wh"],us=["grid_ht_wh","grid_nt_wh"],cs=["bat_chg_wh","bat_dis_wh"];function He(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function Hn(e,t){t=t||{};var n=Ke(t.grid_import_chf_kwh,.26),r=Ke(t.grid_feedin_chf_kwh,.18),i=e.imp_wh,a=e.exp_wh,o=e.pv_wh,l={};for(var f in e)l[f]=e[f];if(l.cost_import_chf=i==null?null:He(i/1e3*n),l.revenue_feedin_chf=a==null?null:He(a/1e3*r),l.saving_selfuse_chf=o==null||a===null||a===void 0?null:He(Math.max(0,(o-a)/1e3*(n-r))),Zt(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var d=Ke(t.grid_import_ht_chf_kwh,n),p=Ke(t.grid_import_nt_chf_kwh,n);l.cost_import_ht_chf=He(e.grid_ht_wh/1e3*d),l.cost_import_nt_chf=He(e.grid_nt_wh/1e3*p),l.cost_import_chf=He(l.cost_import_ht_chf+l.cost_import_nt_chf)}return l}function Ke(e,t){return e==null||isNaN(e)?t:Number(e)}var kt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Ni(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(f){return Ni(f,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=kt[i.slice(0,a)],l=kt[i.slice(a+1)];if(o!==void 0&&l!==void 0){if(o<=l){if(t>=o&&t<=l)return!0}else if(t>=o||t<=l)return!0}}else if(kt[i]!==void 0&&kt[i]===t)return!0}return!1}function Zt(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function fs(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,o=0;o<a.length;o++){var l=a[o]||{};if(Ni(l.days,r)&&i>=Ke(l.from,0)&&i<Ke(l.to,0))return!0}return!1}function Ei(e,t){if(!Zt(t))return e;var n=e.imp_wh;if(n==null)return e;var r=Math.max(0,n),i={};for(var a in e)i[a]=e[a];return fs(e.ts,t)?(i.grid_ht_wh=r,i.grid_nt_wh=0):(i.grid_ht_wh=0,i.grid_nt_wh=r),i}function ds(e,t){var n={ts:e},r=!1;return ls.forEach(function(i){var a=0,o=!1,l=!1;t.forEach(function(f){var d=f[i];d==null?l=!0:(a+=d,o=!0)}),n[i]=o?a:null,o&&l&&(r=!0)}),us.concat(cs).forEach(function(i){var a=0,o=!1;t.forEach(function(l){var f=l[i];f!=null&&(a+=f,o=!0)}),o&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function ps(e){return e-e%3600}function vs(e){var t=e-$n(e,86400),n=$n(Math.floor(t/86400)+3,7);return t-n*86400}function $n(e,t){return(e%t+t)%t}function hs(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function gs(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function at(e,t,n){var r={},i=[];(e||[]).forEach(function(o){var l=t(o.ts);r[l]||(r[l]=[],i.push(l)),r[l].push(o)});var a=i.map(function(o){return Hn(ds(Number(o),r[o]),n)});return a.sort(function(o,l){return o.ts-l.ts}),a}function wr(e,t,n,r){if(e=e||[],Zt(r)&&t==="15m"&&(e=e.map(function(a){return Ei(a,r)})),t===n){var i=e.map(function(a){return Hn(a,r)});return i.sort(function(a,o){return a.ts-o.ts}),i}switch(n){case"1h":return at(e,ps,r);case"1w":return at(e,vs,r);case"1q":return at(e,gs,r);case"1mo":return at(e,hs,r);case"1d":default:return at(e,function(a){return a-$n(a,86400)},r)}}function bn(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function ms(e){if(e=(e||[]).filter(function(l){return l!=null&&!isNaN(l)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=bn(e.slice(0,t)),r=bn(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",o=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:o}}function _s(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function $s(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function Me(e){return e==null||isNaN(e)?null:Number(e)}function yn(e){return e<0?0:e>1?1:e}function Kn(e){return Me(e.bat_chg_wh)||0}function jn(e){return Me(e.bat_dis_wh)||0}function bs(e){return e.some(function(t){return t.bat_chg_wh!=null||t.bat_dis_wh!=null})}function zn(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function wn(e,t){t=t||{};var n=Me(t.co2);e=e||[];var r=e.length,i=0,a=0,o=0,l=0,f=0,d=0,p=0;e.forEach(function(w){if(zn(w)){d++;return}i+=w.pv_wh,a+=w.exp_wh,o+=w.imp_wh,l+=Kn(w),f+=jn(w),p++});var v=r>0&&d/r>.2,c={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:v};if(r===0||v||p===0)return c;var h=Math.max(0,i-a),g=i-a+o+f-l;c.autarky=g>0?yn(Math.max(0,g-o)/g):null,c.selfuse=i>0?yn(h/i):null;var $=Hn({imp_wh:o,exp_wh:a,pv_wh:i},t.tariffs||{}),_=$.saving_selfuse_chf||0,C=$.revenue_feedin_chf||0;return c.savingParts={selfuse:_,feedin:C},c.savingChf=Math.round((_+C)*100)/100,c.co2Kg=n&&n>0?h/1e3*n/1e3:null,c}function ys(e,t){if(!e)return null;t=t||{};var n=t.pv!==!1,r=t.bat!==!1,i=Me(e.pv_w),a=Me(e.bat_w),o=Me(e.grid_w),l=n&&i===null,f=r&&a===null,d=o===null,p=n&&!l?Math.max(0,i):0,v=r&&!f?a:0,c=d?0:o;function h(F,x){return x?"unknown":F<1?"zero":"ok"}function g(F,x){return{watts:x?null:F,state:h(F,x)}}var $={},_=[];n&&($.pv=g(p,l),_.push({node:"pv",dir:"in",watts:p,state:h(p,l)})),r&&($.bat=g(Math.abs(v),f),_.push({node:"bat",dir:v<0?"out":"in",watts:Math.abs(v),state:h(Math.abs(v),f)}));var C=Math.max(0,p+v+c);$.haus=g(C,d||l||f);var w=c>0?"in":"out",A=Math.abs(c);return $.netz=g(A,d),_.push({node:"netz",dir:w,watts:A,state:h(A,d)}),{nodes:$,edges:_}}function ws(e){if(!e)return null;var t=e.nodes;if(t.netz.state==="unknown"||t.haus.state==="unknown")return{key:"flow.status_unknown",vars:{}};var n=0,r=0,i=0;e.edges.forEach(function(d){d.node==="netz"&&(d.dir==="in"?n+=d.watts:r+=d.watts),d.node==="bat"&&d.dir==="out"&&(i+=d.watts)});var a=t.pv?t.pv.watts:0,o=t.haus.watts,l=Math.max(0,a-r-i),f=o>=1?Math.round(yn(l/o)*100):a>=1?100:0;return r>=1?{key:"flow.status_export",vars:{pct:f,w:r}}:n>=1?l>=1?{key:"flow.status_import_pv",vars:{pct:f,w:n}}:{key:"flow.status_import",vars:{w:n}}:l>=1?{key:"flow.status_covered",vars:{pct:f}}:{key:"flow.status_idle",vars:{}}}var ks={"comp.pv":"var(--c-production)","comp.load":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-export-fill)"};function le(e,t){return{key:e,value:Math.max(0,t||0),color:ks[e]}}function xs(e){if(!e)return{cover:[],usage:[],unknown:!0};var t=Me(e.pv_w),n=Me(e.bat_w),r=Me(e.grid_w),i=t===null||r===null,a=t===null?0:t,o=n===null?0:n,l=r===null?0:r,f=Math.max(0,l),d=Math.max(0,-l),p=Math.max(0,o),v=Math.max(0,-o),c=Math.max(0,a-d-v),h=c+p+f;return{cover:[le("comp.pv",c),le("comp.battery",p),le("comp.grid",f)],usage:[le("comp.load",h),le("comp.charge",v),le("comp.feedin",d)],unknown:i}}function Ss(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(c){zn(c)||(t+=c.pv_wh,n+=c.exp_wh,r+=c.imp_wh,i+=Kn(c),a+=jn(c),o++)}),o===0)return{cover:[],usage:[],unknown:!0,battery:!1};var l=bs(e),f=Math.max(0,t-n-i),d=f+a+r,p=[le("comp.pv",f)],v=[le("comp.load",d)];return l&&(p.push(le("comp.battery",a)),v.push(le("comp.charge",i))),p.push(le("comp.grid",r)),v.push(le("comp.feedin",n)),{cover:p,usage:v,unknown:!1,battery:l}}function Cs(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function Ms(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(f){zn(f)||(t+=f.pv_wh,n+=f.exp_wh,r+=f.imp_wh,i+=Kn(f),a+=jn(f),o++)}),o===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var l=Math.max(0,t-n);return{prodSelf:l,prodFeedin:Math.max(0,n),consSelf:Math.max(0,t-n-i+a),consImport:Math.max(0,r)}}var sn=900,Ti=90;function Ii(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function kr(e){return e.friendlyName||e.name||e.id||"–"}function xr(e){return e.friendlyName||e.name||e.id||"–"}function ht(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function Ns(e,t){if(!e||e.stale!==!0)return null;var n=typeof e.lastUpdate=="number"?e.lastUpdate:null;if(n===null)return s("prod.stale_unknown");var r=t-n>86400?"15m":"hm";return s("prod.stale",{time:k.time(n,r)})}function Pi(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function Ie(e){return e==null||isNaN(e)?null:Number(e)}function Oi(e){var t=ht(e),n=Ie(e.soc),r=Ie(e.capacity);return n!==null&&(n<0||n>100)&&(n=null),{dir:t===null?null:t>=1?"discharge":t<=-1?"charge":"idle",soc:n,capacity:r!==null&&r>0?r:null,storedWh:n!==null&&r!==null&&r>0?r*n/100:null}}function Es(e){var t=0,n=0,r=0,i=0,a=!0;return(e||[]).forEach(function(o){if(Pi(o)){var l=Oi(o);l.soc!==null&&(l.capacity!==null?(r+=l.soc*l.capacity,i+=l.capacity):a=!1,n+=l.soc,t++)}}),t?a?r/i:n/t:null}var Ts={charge:"flow.bat_charge",discharge:"flow.bat_discharge",idle:"stat.bat_idle"};function Li(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function Is(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function Sr(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>Ti;)a.shift()}function Cr(e,t){Object.keys(t||{}).forEach(function(n){var r=e[n]||(e[n]=[]),i={};r.forEach(function(o){i[o.t]=!0});var a=t[n].filter(function(o){return!i[o.t]});if(a.length)for(e[n]=a.concat(r).sort(function(o,l){return o.t-l.t});e[n].length>Ti;)e[n].shift()})}function Ps(e,t,n){for(var r=Li(e,t,n),i=[],a=[],o=0;o<r.grid.length;o++){var l=r.grid[o].t,f=Ie(r.grid[o].y),d=Ie(r.pv[o].y)||0,p=Ie(r.bat[o].y)||0;f!==null&&(a.push({t:l,y:d+p}),i.push({t:l,y:d+p+f}))}return{cons:i,prod:a}}function xt(e){return u`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        ${e.dir?u`<span class="ov-stat-dir" aria-hidden="true"
          style=${"color:"+e.color}>${e.dir==="out"?"→":"←"}</span>`:null}
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?u`<${_e} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function Os(e){var t=e.newest,n=e.win,r=e.power,i=t?Ie(t.grid_w):null,a=t?Ie(t.pv_w)||0:null,o=t?Ie(t.bat_w)||0:null,l=t&&i!==null?a+o+i:null,f=t?a+o:null,d=t&&i!==null?Math.max(0,-i):null,p=t&&i!==null?Math.max(0,i):null,v=Ps(r,n[0],n[1]),c=v.cons,h=v.prod;return u`
      <${R} group="grid" title=${s("panel.grid")}
        collapsible collapseKey="uebersicht.grid"
        defaultOpen=${!1}>
        <div class="ov-stats">
          <${xt} color="var(--c-consumption)" label=${s("stat.consumption")}
            tooltip=${s("tooltip.consumption")} value=${k.w(l)} />
          <${xt} color="var(--c-production)" label=${s("stat.production")}
            value=${k.w(f)} />
          <${xt} color="var(--c-export)" dir="out" label=${s("stat.export")}
            value=${k.w(d)} />
          <${xt} color="var(--c-import)" dir="in" label=${s("stat.gridop")}
            tooltip=${s("tooltip.gridop")} value=${k.w(p)} />
        </div>
        <${Vt} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${k.w}
          bands=${[{top:h,bottom:c,color:"var(--c-export-fill)"},{top:c,bottom:h,color:"var(--c-import-fill)"}]}
          series=${[{points:c,color:"var(--c-consumption)",label:s("stat.consumption")},{points:h,color:"var(--c-production)",label:s("stat.production")}]} />
      <//>`}function Ls(e){var t=e.info;return u`
      <div class="ov-sub-meta">
        <span>${t.dir?s(Ts[t.dir]):"–"}</span>
        ${t.soc!==null?u`<span>${s("stat.soc",{pct:Math.round(t.soc)})}${t.storedWh!==null?" · "+s("stat.soc_energy",{energy:k.wh(t.storedWh),capacity:k.wh(t.capacity)}):""}</span>`:null}
      </div>
      ${t.soc!==null?u`
        <div class="bat-soc" role="meter" aria-valuemin="0" aria-valuemax="100"
          aria-valuenow=${Math.round(t.soc)} aria-label=${s("stat.soc",{pct:Math.round(t.soc)})}>
          <div class="bat-soc-fill" style=${"width:"+t.soc.toFixed(1)+"%"}></div>
        </div>`:null}`}function As(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:u`
      <${R} group="production" title=${s("panel.production")}
        collapsible collapseKey="uebersicht.production"
        defaultOpen=${!1}>
        ${e.notice?u`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${s("flow.prod_nodata")}</span>
            <button class="ov-notice-close" aria-label=${s("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=Pi(i),o=a?"var(--c-battery)":"var(--c-production)",l=ht(i),f=Ns(i,Date.now()/1e3),d=a&&!f?Oi(i):null;return u`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${xr(i)}</span>
                  <span class=${"ov-sub-value"+(f?" is-stale":"")}
                    style=${f?"":"color:"+o}>${k.w(l)}</span>
                </div>
                ${f?u`<div class="ov-sub-meta" role="status"><span>${f}</span></div>`:null}
                ${d?u`<${Ls} info=${d} />`:null}
                <${Vt} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${k.w}
                  series=${[{points:n[i.id]||[],color:o,label:a?s("stat.battery"):xr(i)}]} />
              </div>`})}
        </div>
      <//>`}function Fs(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:u`
      <${R} group="loads" title=${s("panel.loads")} tooltip=${s("tooltip.loads")}
        collapsible collapseKey="uebersicht.loads"
        defaultOpen=${!1}>
        <div class="ov-subgrid">
          ${t.map(function(a){var o=Ii(a.state),l=ht(a),f=o==="inactive"?"waiting":"inactive",d=o==="inactive"?"action.request":"action.deactivate";return u`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${kr(a)}</span>
                  <${Lt} state=${o} />
                </div>
                <div class="ov-sub-meta">
                  <span>${k.w(l)} · ${s("stat.rated")}</span>
                  <span>${s("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${Vt} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${k.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:kr(a)}]} />
                <div class="ov-sub-act">
                  <${J} small secondary=${f==="inactive"}
                    onClick=${function(){i(a.id,f)}}>${s(d)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}var Rs={pv:{color:"var(--c-production)",label:"flow.pv"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"},netz:{color:"var(--c-grid)",label:"flow.netz"}},Ds=30;function Bs(e){return e.node==="pv"?"var(--c-production)":e.node==="bat"?"var(--c-battery)":e.dir==="in"?"var(--c-import)":"var(--c-export)"}function Us(e,t){return e==="haus"?{text:s("flow.consumption")}:!t||t.state!=="ok"?null:e==="pv"?{text:s("flow.production"),color:"var(--c-production)"}:e==="bat"?{text:t.dir==="in"?s("flow.bat_discharge"):s("flow.bat_charge")}:t.dir==="in"?{text:s("flow.import"),color:"var(--c-import)"}:{text:s("flow.export"),color:"var(--c-export)"}}function Ws(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?u`
      <g transform=${i}>
        <circle cx="0" cy="0" r="4" ...${a} />
        <path ...${a} d="M6.2 0 L8.6 0 M4.38 4.38 L6.08 6.08 M0 6.2 L0 8.6 M-4.38 4.38 L-6.08 6.08 M-6.2 0 L-8.6 0 M-4.38 -4.38 L-6.08 -6.08 M0 -6.2 L0 -8.6 M4.38 -4.38 L6.08 -6.08" />
      </g>`:e==="haus"?u`
      <g transform=${i}>
        <path ...${a} d="M-7 0 L0 -7.5 L7 0 M-5 0 L-5 7.5 L5 7.5 L5 0 M-1.7 7.5 L-1.7 2.8 L1.7 2.8 L1.7 7.5" />
      </g>`:e==="netz"?u`
      <g transform=${i}>
        <path ...${a} d="M-5.5 8 L-1.8 -6 M5.5 8 L1.8 -6 M-1.8 -6 L1.8 -6 M-7.5 -4.6 L7.5 -4.6 M-4 0 L4 0 M-4 0 L3.4 5.6 M4 0 L-3.4 5.6 M-4.8 5.6 L4.8 5.6" />
      </g>`:e==="bat"?u`
      <g transform=${i}>
        <rect x="-8" y="-5" width="13.5" height="10" rx="1.8" ...${a} />
        <rect x="5.7" y="-2.4" width="2.3" height="4.8" rx="0.8" fill=${r} />
        <rect x="-5.9" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
        <rect x="-2.6" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
        <rect x="0.7" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
      </g>`:null}function Mr(e){var t=Rs[e.id],n=e.node,r=Us(e.id,e.edge);return u`
      <div class=${"hub-node hub-node-"+e.id+" is-"+n.state}
        style=${"--node-c:"+t.color}>
        <span class="hub-icon">
          <svg viewBox="-13 -13 26 26" aria-hidden="true">${Ws(e.id,0,0,t.color)}</svg>
        </span>
        <span class="hub-node-text">
          <span class="hub-node-label">${s(t.label)}</span>
          <span class="hub-node-value">${n.state==="unknown"?"–":k.w(n.watts)}</span>
          ${r?u`<span class="hub-node-cap"
            style=${r.color?"color:"+r.color:null}>${r.text}</span>`:null}
          ${e.soc!==null&&e.soc!==void 0?u`<span class="hub-node-cap">${s("stat.soc",{pct:Math.round(e.soc)})}</span>`:null}
        </span>
      </div>`}function Hs(e){var t=e.edge,n=e.side==="src"?t.dir==="in":t.dir==="out",r=t.state==="unknown"?"var(--c-line)":Bs(t);return u`
      <div class=${"hub-edge "+(n?"is-fwd":"is-back")+" is-"+t.state}
        style=${"--edge-c:"+r}>
        <span class="hub-edge-line" aria-hidden="true"></span>
        ${t.state==="zero"?null:u`
          <span class="hub-edge-pill">
            <svg class="hub-edge-arrow" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ${t.state==="unknown"?"–":k.w(t.watts)}
          </span>`}
      </div>`}function Ks(e){var t=ys(e.newest,{pv:e.hasPv,bat:e.hasBattery}),n=ws(t),r=u`
      <span class=${"live-badge"+(e.live?" is-live":"")}>
        <span class="live-dot" aria-hidden="true"></span>
        ${e.live?s("flow.live"):e.asOf?s("flow.as_of",{time:k.time(e.asOf,"hm")}):s("flow.offline")}
      </span>`;function i(o){return t?t.edges.find(function(l){return l.node===o}):null}function a(o,l){var f=o.filter(function(v){return t.nodes[v]});if(!f.length)return null;var d=u`
        <div class=${"hub-tier hub-tier-"+l}>
          ${f.map(function(v){return u`<${Mr} key=${v} id=${v} node=${t.nodes[v]} edge=${i(v)}
              soc=${v==="bat"?e.soc:null} />`})}
        </div>`,p=u`
        <div class=${"hub-links hub-links-"+l}>
          ${f.map(function(v){return u`<${Hs} key=${v} edge=${i(v)} side=${l} />`})}
        </div>`;return l==="src"?u`${d}${p}`:u`${p}${d}`}return u`
      <${R} group="grid" title=${s("flow.title")} tooltip=${s("tooltip.flow")} badge=${r}>
        ${n?u`<p class="flow-status">${s(n.key,{w:k.w(n.vars.w),pct:n.vars.pct})}</p>`:null}
        ${t?u`
          <div class="hub-wrap">
            <div class="hub" role="img" aria-label=${s("flow.aria")}>
              ${a(["pv","bat"],"src")}
              <div class="hub-haus">
                <${Mr} id="haus" node=${t.nodes.haus} />
              </div>
              ${a(["netz"],"grid")}
            </div>
          </div>`:u`<div class="hub-empty">${s("flow.status_unknown")}</div>`}
      <//>`}function Nr(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return u`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?u`<${_e} text=${e.note} />`:null}
        </div>
        ${r?u`
          <div class="comp-bar comp-bar-nodata">${e.unknown?s("flow.comp_nodata"):s("flow.comp_zero")}</div>`:u`
          <div class="comp-bar">
            ${t.map(function(i,a){var o=i.value/n*100;return u`<div key=${a} class="comp-seg"
                title=${s(i.key)+": "+e.fmt(i.value)}
                style=${"width:"+o.toFixed(2)+"%;background:"+i.color}></div>`})}
          </div>
          <div class="comp-legend">
            ${t.map(function(i,a){return u`
                <span key=${a} class="comp-leg">
                  <span class="comp-leg-dot" style=${"background:"+i.color}></span>
                  ${e.arrows&&e.arrows[i.key]?u`<span class="comp-leg-dir"
                    aria-hidden="true">${e.arrows[i.key]}</span>`:null}
                  ${s(i.key)} · ${e.fmt(i.value)}
                </span>`})}
          </div>`}
      </div>`}var js={"comp.grid":"←"},zs={"comp.feedin":"→"};function qs(e){var t=I("now"),n=t[0],r=t[1],i=n==="now"?xs(e.sample):Ss(e.records),a=n==="now"?k.w:k.wh,o=n==="today"&&e.hasBattery&&!i.battery&&!i.unknown?s("flow.comp_batt_note"):null;return u`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${s("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${s("flow.comp_today")}</button>
        </div>
        <${Nr} title=${s("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} arrows=${js} />
        <${Nr} title=${s("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${o} arrows=${zs} />
      </div>`}function Ys(e){return u`
      <${R} group="grid" title=${s("flow.comp_title")} collapsible collapseKey="ov.comp"
        defaultOpen=${!1}>
        <${qs} sample=${e.sample} records=${e.records}
          hasBattery=${e.hasBattery} />
      <//>`}function Ai(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return u`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?u`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function Vs(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?s("kpi.incomplete"):null,r=t.savingParts,i=r?[s("kpi.saving_selfuse")+": "+k.chf(r.selfuse,!0),s("kpi.saving_feedin")+": "+k.chf(r.feedin,!0)].join(`
`):s("tooltip.kpi_saving"),a=!!e.showSaving,o=a?u`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":k.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${s("kpi.saving")}<${_e} text=${n||i} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:u`
        <div class="kpi-hero">
          <${Ai} big ratio=${t.autarky} color="var(--c-export)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${s("kpi.autarky")}<${_e} text=${n||s("tooltip.kpi_autarky")} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,l=[];return a&&l.push(u`<${on} key="au" gauge ratio=${t.autarky} color="var(--c-export)"
        label=${s("kpi.autarky")} tip=${n||s("tooltip.kpi_autarky")} />`),l.push(u`<${on} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${s("kpi.selfuse_short")} tip=${n||s("tooltip.kpi_selfuse")} />`),e.showCo2&&l.push(u`<${on} key="co" value=${Zs(t.co2Kg)} color="var(--c-production)"
        label=${s("kpi.co2")} tip=${n||s("tooltip.kpi_co2",{g:e.co2Factor})} />`),u`
      <div class="kpi-band">
        ${o}
        <div class="kpi-support">${l}</div>
      </div>`}function on(e){return u`
      <div class="kpi-tile">
        ${e.gauge?u`<${Ai} ratio=${e.ratio} color=${e.color} />`:u`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${_e} text=${e.tip} /></span>
          ${e.sub?u`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function Gs(){return u`
      <div class="ov-skel">
        <span class="sr-only" role="status">${s("common.loading")}</span>
        <div class="ov-top" aria-hidden="true">
          <div class="ov-top-flow">
            <div class="ov-section"> </div>
            <div class="skel skel-flow"></div>
          </div>
          <div class="ov-top-side">
            <div class="ov-section"> </div>
            <div class="kpi-band">
              <div class="skel skel-hero"></div>
              <div class="kpi-support">
                <div class="skel skel-tile"></div>
                <div class="skel skel-tile"></div>
                <div class="skel skel-tile"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="skel skel-panel" aria-hidden="true"></div>
      </div>`}function Zs(e){return e==null||isNaN(e)?"–":e>=1e3?k.num(e/1e3,2)+" t":k.num(e,e<10?2:1)+" kg"}function Xs(){var e=I(null),t=e[0],n=e[1],r=I(null),i=r[0],a=r[1],o=I([]),l=o[0],f=o[1],d=I([]),p=d[0],v=d[1],c=I(null),h=c[0],g=c[1],$=I(null),_=$[0],C=$[1],w=I(function(){return Math.floor(Date.now()/1e3)}),A=w[0],F=w[1],x=I(null),b=x[0],K=x[1],E=I({}),L=E[0],y=E[1],O=I(!1),D=O[0],q=O[1],j=I(0),m=j[1],S=Ce({}),P=Ce({}),T=Ce(!1),be=A,pe=be-sn,ve=[pe,be];X(function(){H.getSite().then(function(W){n(W)}).catch(function(){}),H.getMeta().then(function(W){C(W)}).catch(function(){})},[]),X(function(){var W=!0;function ke(){W&&(T.current=!0,m(function(re){return re+1}))}return Gt().then(function(re){if(W){if(!re||!re.available||!re.siteId){ke();return}var Be=Math.floor(Date.now()/1e3)-sn;return Promise.all([_r(re.siteId,"prod",Be).catch(function(){return{}}),_r(re.siteId,"load",Be).catch(function(){return{}})]).then(function(ge){W&&(Cr(S.current,ge[0]),Cr(P.current,ge[1]),ke())})}},ke).catch(ke),function(){W=!1}},[]),X(function(){return H.poll(function(){H.getEnergy("15m",96).then(function(W){Array.isArray(W)&&g(W)}).catch(function(){})},6e4)},[]),X(function(){return H.poll(function(){var W=Math.floor(Date.now()/1e3);F(W);var ke=W-sn;Promise.all([H.getPower().catch(function(){return null}),H.getLoads().catch(function(){return null}),H.getProductions().catch(function(){return null})]).then(function(re){var Be=re[0],ge=re[1],Pe=re[2];if(Be&&a(Be),ge&&f(ge),Pe&&v(Pe),(Be||ge||Pe)&&K(W),q(!0),Pe&&Pe.forEach(function(Ue){Sr(S.current,Ue.id,W,ht(Ue),ke)}),ge&&ge.forEach(function(Ue){var Qi=Ii(Ue.state)==="active"?ht(Ue):0;Sr(P.current,Ue.id,W,Qi,ke)}),T.current&&(Pe||ge)){var tt=Si();tt&&tt.available&&tt.siteId&&(Pe&&mr(tt.siteId,"prod",S.current).catch(function(){}),ge&&mr(tt.siteId,"load",P.current).catch(function(){}))}})},1e4)},[]);var oe=Is(i),Je=Li(i,pe,be),Qe=!!(p&&p.length&&Cs(Je.pv.map(function(W){return W.y}))&&!L["flow.prod_nodata"]);function Re(){var W=Object.assign({},L);W["flow.prod_nodata"]=!0,y(W)}var De=new Date;De.setHours(0,0,0,0);var he=Math.floor(De.getTime()/1e3),ye=(h||[]).filter(function(W){return W.ts>=he}),ae=_&&_.tariffs||{},N=ae.co2_g_kwh===void 0||ae.co2_g_kwh===null||ae.co2_g_kwh===""?128:Number(ae.co2_g_kwh),ne=wn(ye,{tariffs:ae,co2:N}),G=Number(ae.grid_import_chf_kwh)>0||Number(ae.grid_feedin_chf_kwh)>0,Q=N>0,ce=ye.some(function(W){return W.partial}),et=ce?s("kpi.today_until",{time:k.time(A,"hm")}):s("kpi.today"),we=(p||[]).some(function(W){return String(W.productionType||"").toUpperCase()==="BATTERY"}),_t=(p||[]).some(function(W){return String(W.productionType||"").toUpperCase()!=="BATTERY"}),$t=!!(oe&&b&&A-b<25&&i&&typeof i.now=="number"&&i.now-oe.ts<Ds),bt=t&&t.location?t.location:null,en=b?u`
      <span class="ov-updated">${s("common.stale",{time:k.time(b,"hm")})}</span>`:null;function tn(W,ke){H.setLoadState(W,ke).then(function(){return H.getLoads()}).then(function(re){re&&f(re)}).catch(function(){te(s("error.toggle"),{type:"error"})})}return u`
      <div>
        <${Ge} title=${t&&t.name?t.name:s("page.overview")}
          subtitle=${bt} actions=${en} />
        ${D?u`
          <${mt}>
            <div class="ov-top">
              <section class="ov-top-flow" aria-labelledby="ov-sec-now">
                <h2 class="ov-section" id="ov-sec-now">${s("section.now")}</h2>
                <${Ks} newest=${oe} hasBattery=${we} hasPv=${_t}
                  soc=${we?Es(p):null}
                  live=${$t} asOf=${oe?oe.ts:null} />
              </section>
              <section class="ov-top-side" aria-labelledby="ov-sec-today">
                <h2 class="ov-section" id="ov-sec-today">${s("section.today")}</h2>
                <${Vs} kpis=${ne} period=${et} showSaving=${G}
                  showCo2=${Q} co2Factor=${N} />
              </section>
            </div>
            <${Ys} sample=${oe} records=${ye}
              hasBattery=${we} />
            <section class="ov-history" aria-labelledby="ov-sec-history">
              <h2 class="ov-section" id="ov-sec-history">${s("section.history")}</h2>
              <${Os} newest=${oe} win=${ve} power=${i} />
              <${As} productions=${p} history=${S.current} win=${ve}
                notice=${Qe} onDismissNotice=${Re} />
              <${Fs} loads=${l} history=${P.current} win=${ve} onToggle=${tn} />
            </section>
          <//>`:u`<${Gs} />`}
      </div>`}var Js=[10,25,50],St=2880,Se={"15m":{label:"history.res.15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",count:St,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",count:St,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",count:St,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",count:St,target:"1q",tk:"q",slot:7776e3}},Qs=["15m","1h","1d","1w","1mo","1q"],ln={"15m":240*900,"1h":240*900,"1d":125*86400,"1w":125*86400,"1mo":589*86400,"1q":589*86400},eo={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},Ee={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function to(e){return e==null?null:e/1e3}function no(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-Se[t].slot}function ro(e,t){if(!e.length)return[];var n=eo[t]||e.length,r={};e.forEach(function(f){r[f.ts]=f});for(var i=e[e.length-1].ts,a=[],o=e[0].ts,l=0;l<n&&o>=i;l++)a.push(r[o]||{ts:o,__blank:!0}),o=no(o,t);return a}function Ct(e,t){var n=to(e);return n===null?"–":k.num(n,2)}function st(e,t){return e==null?u`<span>–</span>`:u`<span class=${t||""}>${k.chf(e,!1)}</span>`}function io(e,t,n,r){var i=[{key:"ts",label:s("history.col.time")},{key:"imp",label:s("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(i.push({key:"impcost_ht",label:s("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),i.push({key:"impcost_nt",label:s("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):i.push({key:"impcost",label:s("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&i.push({key:"exp",label:s("history.col.feedin"),unit:"[kWh]",align:"right"}),r&&(i.push({key:"batchg",label:s("history.col.batcharge"),unit:"[kWh]",align:"right"}),i.push({key:"batdis",label:s("history.col.batdischarge"),unit:"[kWh]",align:"right"})),e&&(i.push({key:"saving",label:s("history.col.selfuse"),unit:"[CHF]",align:"right"}),i.push({key:"autarky",label:s("history.col.autarky"),unit:"[%]",align:"right"}),i.push({key:"selfuserate",label:s("history.col.selfuserate"),unit:"[%]",align:"right"}),i.push({key:"ersparnis",label:s("history.col.ersparnis"),unit:"[CHF]",align:"right"})),i}function Er(e){return e==null?"–":k.num(e*100,0)+" %"}function ao(e){var t=e.revenue_feedin_chf,n=e.cost_import_chf;return t==null&&n==null?null:(t||0)-(n||0)}function so(e,t,n){for(var r=Se[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var o=e[a+1];if(o){var l=Math.round((e[a].ts-o.ts)/r)-1;l>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function oo(e){var t=e.coverage;if(!t||t.firstE15Ts===null)return null;var n=Math.floor(Date.now()/1e3)-e.span,r=(t.gaps||[]).filter(function(i){return i[1]>=n});return u`
      <p class="verlauf-archive-note">
        <span class="badge badge-inactive">${s("history.archive_badge",{days:t.days})}</span>
        ${r.length?u`
          <span class="verlauf-archive-gap">
            ${s("history.archive_gap",{from:k.time(r[0][0],"1d"),to:k.time(r[r.length-1][1],"1d"),count:r.length})}
          </span>`:null}
      </p>`}function lo(){var e=I(Ee.res),t=e[0],n=e[1],r=I(0),i=r[0],a=r[1],o=I(Ee.pageSize),l=o[0],f=o[1],d=I(Ee.chfMode),p=d[0],v=d[1],c=I(Ee.chartMode),h=c[0],g=c[1],$=I({records:null,tariffs:{},producer:!1,err:!1,archived:!1,coverage:null}),_=$[0],C=$[1],w=I(!0),A=w[0],F=w[1];Ee.res=t,Ee.pageSize=l,Ee.chfMode=p,Ee.chartMode=h,X(function(){var N=!1;F(!0);var ne=Se[t];return Gt().then(function(G){var Q=!!(G.available&&G.siteId),ce=Math.floor(Date.now()/1e3),et=ce-ln[t];return Promise.all([Q?Ya(G.siteId,et,ce).catch(function(){return null}):H.getEnergy("15m",ne.count).catch(function(){return null}),H.getMeta().catch(function(){return null}),H.getProductions().catch(function(){return null})]).then(function(we){if(!N){var _t=we[0],$t=we[1],bt=we[2];if(_t===null){C({records:null,tariffs:{},producer:!1,err:!0,archived:!1,coverage:null}),F(!1);return}var en=$t&&$t.tariffs||{},tn=Array.isArray(bt)&&bt.some(function(W){return W&&W.productionType==="PHOTOVOLTAIC"});C({records:_t,tariffs:en,producer:tn,err:!1,archived:Q,coverage:G.coverage||null}),F(!1)}})}),function(){N=!0}},[t]);var x=Zt(_.tariffs),b=Le(function(){if(!_.records)return[];var N=_.records;x&&(N=_.records.map(function(G){return Ei(G,_.tariffs)}));var ne=wr(N,"15m",Se[t].target,_.tariffs);return ne.slice().sort(function(G,Q){return Q.ts-G.ts})},[_.records,_.tariffs,t,x]),K=Le(function(){if(t!=="15m"||!_.records)return{};var N=wr(_.records,"15m","15m",_.tariffs),ne=$s(N,3),G={};return ne.forEach(function(Q){G[N[Q].ts]=!0}),G},[_.records,_.tariffs,t]),E=b.some(function(N){return(N.exp_wh||0)>0}),L=b.some(function(N){return N.bat_chg_wh!=null||N.bat_dis_wh!=null}),y=io(_.producer,E,x,L),O=_.tariffs.co2_g_kwh===void 0||_.tariffs.co2_g_kwh===null||_.tariffs.co2_g_kwh===""?128:Number(_.tariffs.co2_g_kwh),D={tariffs:_.tariffs,co2:O},q=Number(_.tariffs.grid_import_chf_kwh)>0||Number(_.tariffs.grid_feedin_chf_kwh)>0,j=Le(function(){var N={};return b.forEach(function(ne){N[ne.ts]=wn([ne],D)}),N},[b,_.tariffs,O]),m=Le(function(){return wn(b,D)},[b,_.tariffs,O]),S=_.archived?!(_.coverage&&_.coverage.firstE15Ts!==null&&_.coverage.firstE15Ts>Math.floor(Date.now()/1e3)-ln[t]):_.records?_.records.length<Se[t].count:!0,P=so(b,t,S),T=b.length;P.filter(function(N){return N.kind==="row"});var be=Math.max(1,Math.ceil(T/l)),pe=Math.min(i,be-1),ve=pe*l,oe=Math.min(ve+l,T),Je=uo(P,ve,oe);function Qe(N){n(N),a(0)}function Re(N){f(+N),a(0)}function De(){var N=y.map(function(Q){return Q.label+(Q.unit?" "+Q.unit:"")}),ne=b.map(function(Q){return po(Q,y,t,j[Q.ts])}),G=wi(N,ne);$o(Fa(t),G)}var he=Le(function(){return ho(ro(b,t),h,p)},[b,h,p,t]),ye=Le(function(){return go(b,t,_.producer)},[b,t,_.producer]),ae=u`
      <div class="verlauf-actions">
        <${oi} label=${s("history.resolution")} value=${t}
          onChange=${Qe}
          options=${Qs.map(function(N){return{value:N,label:s(Se[N].label)}})} />
        <${J} secondary onClick=${De} disabled=${T===0}>
          ${s("history.export")}<//>
      </div>`;return u`
      <div>
        <${Ge} title=${s("page.history")} subtitle=${s("history.subtitle")}
          actions=${ae} />

        ${_.archived?u`<${oo} coverage=${_.coverage}
          span=${ln[t]} />`:null}

        ${_.err?u`
          <${R}><p class="placeholder-text">${s("common.nodata")}</p><//>`:null}

        ${!_.err&&A?u`
          <${R}><p class="placeholder-text">${s("common.loading")}</p><//>`:null}

        ${!_.err&&!A?u`
          <div>
            ${b.length?u`<${_o} summary=${ye} kpis=${m} showSaving=${q} />`:null}

            <${R} group="grid" title=${s("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${s("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(N){return u`<button key=${N[0]} type="button" role="tab"
                      class=${"seg-btn"+(h===N[0]?" seg-btn-active":"")}
                      aria-selected=${h===N[0]}
                      onClick=${function(){g(N[0])}}>${s(N[1])}</button>`})}
                </div>
                ${h==="net"?u`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${p}
                      onChange=${function(N){v(N.target.checked)}} />
                    <span>${s("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${he.points.length?u`
                <${pi} height=${220}
                  yUnit=${he.yUnit} xUnit=${s("history.chart.xunit")}
                  yFormat=${he.yFormat}
                  signedMagnitude=${he.signedMagnitude}
                  xTickFormat=${function(N){return vo(t,N)}}
                  points=${he.points} />
                <div class="chart-legend">
                  ${he.legend.map(function(N,ne){return u`<span key=${ne} class="legend-item"><span class="legend-swatch" style=${"background:"+N.color}></span>${N.label}</span>`})}
                </div>`:u`<p class="placeholder-text">${s("common.nodata")}</p>`}
            <//>

            <${R} title=${s("history.table.title")}
              collapsible collapseKey="verlauf.table">
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${y.map(function(N){return u`<th key=${N.key} class=${N.align==="right"?"ta-r":""}>
                          ${N.label}${N.unit?u`<span class="th-unit"> ${N.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${T===0?u`
                      <tr><td class="table-empty" colspan=${y.length}>${s("common.nodata")}</td></tr>`:Je.map(function(N){return co(N,y,t,K,j)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${s("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${l}
                        onChange=${function(N){Re(N.target.value)}}>
                        ${Js.map(function(N){return u`<option key=${N} value=${N}>${N}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${s("table.pageinfo",{from:T===0?0:ve+1,to:oe,total:T})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${s("table.prev")}
                      disabled=${pe===0} onClick=${function(){a(pe-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${s("table.next")}
                      disabled=${pe>=be-1} onClick=${function(){a(pe+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${s("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function uo(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var o=e[a];if(o.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(o)}else i>=t&&i<n&&r.push(o)}return r}function co(e,t,n,r,i){if(e.kind==="boundary")return u`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${s("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return u`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${s("history.gap")}</td></tr>`;var a=e.rec,o=!!r[a.ts],l=i&&i[a.ts]||null;return u`
      <tr key=${"r"+a.ts}>
        ${t.map(function(f){return u`<td key=${f.key} class=${f.align==="right"?"ta-r":""}>
            ${fo(f.key,a,n,o,l)}
          </td>`})}
      </tr>`}function fo(e,t,n,r,i){switch(e){case"ts":return u`<span class="verlauf-ts">
          ${k.time(t.ts,Se[n].tk)}
          ${r?u`<span class="peak-mark" title=${s("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?u`<${_e} text=${s("history.partial")} />`:null}
        </span>`;case"imp":return Ct(t.imp_wh);case"impcost":return st(t.cost_import_chf,"val-neg");case"impcost_ht":return st(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return st(t.cost_import_nt_chf,"val-neg");case"exp":return Ct(t.exp_wh);case"batchg":return Ct(t.bat_chg_wh);case"batdis":return Ct(t.bat_dis_wh);case"saving":return st(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return Er(i&&i.autarky);case"selfuserate":return Er(i&&i.selfuse);case"ersparnis":return st(i&&i.savingChf,i&&i.savingChf>0?"val-pos":"");default:return""}}function po(e,t,n,r){return t.map(function(i){switch(i.key){case"ts":return k.time(e.ts,Se[n].tk);case"imp":return Mt(e.imp_wh);case"impcost":return ot(e.cost_import_chf);case"impcost_ht":return ot(e.cost_import_ht_chf);case"impcost_nt":return ot(e.cost_import_nt_chf);case"exp":return Mt(e.exp_wh);case"batchg":return Mt(e.bat_chg_wh);case"batdis":return Mt(e.bat_dis_wh);case"saving":return ot(e.saving_selfuse_chf);case"autarky":return Tr(r&&r.autarky);case"selfuserate":return Tr(r&&r.selfuse);case"ersparnis":return ot(r&&r.savingChf);default:return""}})}function Tr(e){return e==null?"":(e*100).toFixed(0)}function Mt(e){return e==null?"":(e/1e3).toFixed(2)}function ot(e){return e==null?"":Number(e).toFixed(2)}function vo(e,t){switch(e){case"15m":case"1h":return k.time(t,"hm");case"1d":case"1w":return k.time(t,"dm");case"1mo":return k.time(t,"1mo");case"1q":return k.time(t,"q");default:return k.time(t,Se[e].tk)}}function ho(e,t,n){var r=e.slice().sort(function(v,c){return v.ts-c.ts}),i=function(v){return k.num(v,2)},a=function(v){return v==null?0:v/1e3};if(t==="bilanz"){var o="var(--c-production)",l="var(--c-export)",f="var(--c-import)",d=r.map(function(v){if(v.__blank)return{t:v.ts,y:null};var c=Ms([{pv_wh:v.pv_wh||0,exp_wh:v.exp_wh||0,imp_wh:v.imp_wh||0}]);return{t:v.ts,bars:[{segments:[{value:a(c.prodSelf),color:o,label:s("history.bilanz.selfuse")},{value:a(c.prodFeedin),color:l,label:s("history.bilanz.feedin")},{value:-a(c.consImport),color:f,label:s("history.bilanz.import")}]}]}});return{points:d,yUnit:"kWh",yFormat:i,signedMagnitude:!0,legend:[{color:o,label:s("history.bilanz.selfuse")},{color:l,label:s("history.bilanz.feedin")},{color:f,label:s("history.bilanz.import")}]}}var p;return n?p=r.map(function(v){if(v.__blank)return{t:v.ts,y:null};var c=ao(v);return{t:v.ts,y:c===null?null:c,color:(c||0)<0?"var(--c-import)":"var(--c-export)"}}):p=r.map(function(v){if(v.__blank)return{t:v.ts,y:null};var c=v.imp_wh===null||v.imp_wh===void 0?null:v.imp_wh/1e3;if(c&&c>0)return{t:v.ts,y:-c,color:"var(--c-import)",label:s("history.chart.legend_import")};var h=v.exp_wh,g=h==null?null:h/1e3;return g&&g>0?{t:v.ts,y:g,color:"var(--c-export)",label:s("history.chart.legend_export")}:{t:v.ts,y:c===null?null:0,color:"var(--c-import)",label:s("history.chart.legend_import")}}),{points:p,yUnit:n?"CHF":"kWh",yFormat:n?function(v){return k.chf(v,!0)}:i,signedMagnitude:!n,legend:n?[{color:"var(--c-export)",label:s("history.chart.legend_saldo")},{color:"var(--c-import)",label:s("history.chart.legend_import")}]:[{color:"var(--c-export)",label:s("history.chart.legend_export")},{color:"var(--c-import)",label:s("history.chart.legend_import")}]}}function go(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(p,v){return p.ts-v.ts}),o=function(p){return a.map(function(v){return v[p]===null||v[p]===void 0?null:v[p]/1e3})},l=i&&e.length>=13,f=function(p,v){var c=o(v);return{name:p,avg:bn(c),trend:ms(c),yoy:l?_s(c):null}},d=[f(s("history.col.gridimport"),"imp_wh")];return n&&d.push(f(s("history.summary.pv"),"pv_wh")),{periodLabel:s(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:d}}function mo(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return u`
      <div class="summary-cell">
        <span class="summary-label">${s("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":k.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function _o(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":k.num(i*100,0)+" %"}return u`
      <div class="summary-strip">
        ${n?u`
          <div class="summary-cell">
            <span class="summary-label">${s("kpi.autarky")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.autarky)}</span>
          </div>
          <div class="summary-cell">
            <span class="summary-label">${s("kpi.selfuse")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.selfuse)}</span>
          </div>
          ${e.showSaving?u`
            <div class="summary-cell">
              <span class="summary-label">${s("kpi.saving")}</span>
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":k.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return u`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":k.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${mo(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?u`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${s("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+k.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function $o(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function bo(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const yo=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],wo=(function(){const e={};return yo.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function ko(e){const t=wo[bo(e)];return t===void 0?null:t}function xo(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function Fi(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function So(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function Co(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function Mo(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function No(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function Ir(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var Eo=1e4,To=90;function kn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function Pr(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:ko(t)}})}function Ri(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function me(e,t){var n=Ri(e,t);return n?kn(n.raw):null}function je(e){return function(t){return t.i18nKey===e}}function Di(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function Or(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function Bi(e,t,n){var r=me(e,Di(t,n));return r!==null?r:Fi(me(e,Or(t,n,"in")),me(e,Or(t,n,"out")))}function Io(e,t){var n=null;return[1,2,3].forEach(function(r){var i=Bi(e,t,r);i!==null&&(n=(n||0)+i)}),n}function qn(e){var t=Io(e,"power"),n=me(e,je("meter.f.power_net")),r=!1;if(n===null){var i=me(e,je("meter.f.power_import")),a=me(e,je("meter.f.power_export"));n=Fi(i,a),n!==null&&(r=!0)}var o=So(n,t);return n!==null?{net:n*o,derived:r,scale:o}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function Lr(e){return u`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${_e} text=${e.tip} />
      </span>`}function Po(){return u`<span class="meter-tag meter-tag-derived">${s("meter.derived")}</span>`}function Oo(){return u`
      <span class="meter-tag meter-tag-register">${s("meter.register")}
        <${_e} text=${s("meter.tip.register")} /></span>`}function Ui(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-export)":""}function Lo(e){var t=e.resolved,n=qn(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,o=s(a?"meter.importing":"meter.exporting");return u`
      <${R} group="grid" title=${s("meter.section.power")}
        tooltip=${s("meter.tip.net")}
        badge=${i?Po():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+Ui(r)}>
            ${k.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${o}</span>
        </div>
      <//>`}var Ao=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function Fo(e){var t=e.resolved,n=[1,2,3],r=Ao.map(function(p){var v=n.map(function(h){return Bi(t,p.role,h)}),c=v.some(function(h){return h!==null});return{m:p,cells:v,any:c}}).filter(function(p){return p.any});if(r.length===0)return null;var i=r.filter(function(p){return p.m.role==="power"})[0],a=i?xo(i.cells):null,o=null,l=r.filter(function(p){return p.m.role==="pf"})[0];if(i&&!l){var f=r.filter(function(p){return p.m.role==="reactive"})[0];if(f){var d=n.map(function(p,v){return Co(i.cells[v],f.cells[v])});d.some(function(p){return p!==null})&&(o=d)}}return u`
      <${R} title=${s("meter.section.phases")} tooltip=${s("meter.tip.phases")}
        collapsible collapseKey="zaehler.phases">
        <div class="meter-table-wrap">
          <table class="meter-table">
            <thead>
              <tr>
                <th class="meter-th-metric"></th>
                <th>${s("meter.phase",{n:1})}</th>
                <th>${s("meter.phase",{n:2})}</th>
                <th>${s("meter.phase",{n:3})}</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(function(p){return u`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${s(p.m.key)}
                      ${p.m.unit?u`<span class="meter-unit">[${p.m.unit}]</span>`:null}
                      ${p.m.tip?u`<${_e} text=${s(p.m.tip)} />`:null}
                    </th>
                    ${p.cells.map(function(v){var c=p.m.signed?Ui(v):"";return u`<td style=${c?"color:"+c:""}>
                        ${v===null?"–":k.num(v,p.m.prec)}</td>`})}
                  </tr>`})}
              ${o?u`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${Lr} tip=${s("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${o.map(function(p){return u`<td>${p===null?"–":k.num(p,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?u`
          <div class="meter-imbalance">
            <${Lr} tip=${s("meter.tip.imbalance")}>${s("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${k.w(a)}</span>
          </div>`:null}
      <//>`}function Ro(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=Ri(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?kn(r.raw):null;return u`
      <${R} group="production" title=${s("meter.section.registers")}
        tooltip=${s("meter.tip.registers")} collapsible collapseKey="zaehler.registers"
        badge=${r&&(i===1||i===2)?u`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${s("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${s(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?u`
          <dl class="meter-reg-list">
            ${n.map(function(a){var o=kn(a.raw);return u`
                <div class="meter-reg">
                  <dt>${s(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${Oo()}</dt>
                  <dd>${o===null?String(a.raw):k.num(o,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function Do(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?k.num(i.min,1)+" / "+k.num(i.max,1):"–"}return u`
      <${R} title=${s("meter.section.minmax")} subtitle=${s("meter.since_open")}
        tooltip=${s("meter.tip.minmax")} collapsible collapseKey="zaehler.minmax">
        <dl class="meter-reg-list">
          ${[1,2,3].map(function(i){return t.u[i]?u`
              <div class="meter-reg">
                <dt>${s("meter.voltage")} ${s("meter.phase",{n:i})} <span class="meter-unit">[V]</span></dt>
                <dd>${r(t.u[i])}</dd>
              </div>`:null})}
          ${t.peakImp?u`
            <div class="meter-reg">
              <dt>${s("meter.peak_import")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-import)"}>${k.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?u`
            <div class="meter-reg">
              <dt>${s("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-export)"}>${k.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function Bo(e){var t=e.resolved,n=qn(t).scale;function r(l){return n===1e3&&l.group==="power"&&l.unit==="W"?"kW":l.unit}var i=t.filter(function(l){return l.desc}),a=t.filter(function(l){return!l.desc});function o(l){var f=!!l.desc,d=l.raw!==null&&typeof l.raw=="object"?JSON.stringify(l.raw):String(l.raw);return u`
        <tr>
          <td class="meter-raw-name">${l.name}</td>
          <td class="meter-raw-val">${d}</td>
          <td class="meter-raw-unit">${f&&l.desc.unit?r(l.desc):""}</td>
          <td class="meter-raw-label">${s(f?l.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return u`
      <${R} title=${s("meter.section.raw")}
        collapsible collapseKey="zaehler.raw" defaultOpen=${!1}>
        <div class="meter-table-wrap">
          <table class="meter-table meter-raw-table">
            <thead>
              <tr>
                <th>${s("meter.raw.field")}</th>
                <th>${s("meter.raw.value")}</th>
                <th>${s("meter.raw.unit")}</th>
                <th>${s("meter.raw.meaning")}</th>
              </tr>
            </thead>
            <tbody>
              ${i.map(o)}
              ${a.length?u`
                <tr class="meter-raw-sep"><td colspan="4">${s("meter.raw.other")}</td></tr>
                ${a.map(o)}`:null}
            </tbody>
          </table>
        </div>
      <//>`}function Uo(){var e=I(void 0),t=e[0],n=e[1],r=I(null),i=r[0],a=r[1],o=I(!1),l=o[0],f=o[1],d=I(null),p=d[0],v=d[1],c=Ce([]),h=Ce({u:{},peakImp:0,peakExp:0});X(function(){return H.poll(function(){H.getMeter().then(function(_){if(n(_&&_.values?_.values:null),v(_&&typeof _.now=="number"?_.now:Math.floor(Date.now()/1e3)),!(!_||!_.values)){var C=Pr(_.values),w=h.current;[1,2,3].forEach(function(y){var O=me(C,Di("voltage",y));O!==null&&(w.u[y]=No(w.u[y],O))});var A=qn(C),F=A.net,x=me(C,je("meter.f.power_import")),b=me(C,je("meter.f.power_export"));x!==null&&(x=x*A.scale),b!==null&&(b=b*A.scale),x===null&&F!==null&&(x=F>0?F:0),b===null&&F!==null&&(b=F<0?-F:0),x!==null&&(w.peakImp=Ir(w.peakImp,x)),b!==null&&(w.peakExp=Ir(w.peakExp,b)),a({u:Object.assign({},w.u),peakImp:w.peakImp,peakExp:w.peakExp});var K=me(C,je("meter.f.energy_import")),E=F!==null?F>0:x!==null&&x>0,L=c.current;for(L.push({reg:K,importing:E});L.length>To;)L.shift();f(Mo(L))}}).catch(function(){})},Eo)},[]);var g=t?Pr(t):[],$=p?Math.max(0,Math.floor(Date.now()/1e3)-p):null;return u`
      <div>
        <${Ge} title=${s("page.meter")} subtitle=${s("meter.subtitle")}
          actions=${p?u`
            <span class="meter-updated">
              ${s("meter.updated",{time:k.time(p,"hm")})}
              ${$!==null?u`<span class="meter-age"> · ${s("meter.age",{s:$})}</span>`:null}
            </span>`:null} />

        ${l?u`<div class="banner banner-warn">${s("meter.stale")}</div>`:null}

        ${t===void 0?u`<${R}><p class="placeholder-text">${s("common.loading")}</p><//>`:null}
        ${t===null?u`<${R}><p class="placeholder-text">${s("meter.empty")}</p><//>`:null}
        ${t?u`
          <${Lo} resolved=${g} />
          <${Fo} resolved=${g} />
          <${Ro} resolved=${g} />
          <${Do} stats=${i} />
          <${Bo} resolved=${g} />`:null}
      </div>`}var Wo=1e4;function Ho(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function Ko(e){var t=e.items;return u`
      <${R} title=${s("modbus.section.raw")}>
        <div class="meter-table-wrap">
          <table class="meter-table meter-raw-table">
            <thead>
              <tr>
                <th>${s("modbus.raw.name")}</th>
                <th>${s("modbus.raw.value")}</th>
                <th>${s("modbus.raw.unit")}</th>
                <th>${s("modbus.raw.register")}</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(function(n){var r=Ho(n.currentPower);return u`
                  <tr>
                    <td class="meter-raw-name">${n.friendlyName||n.id}</td>
                    <td class="meter-raw-val">${r===null?s("modbus.raw.no_value"):k.num(r,3)}</td>
                    <td class="meter-raw-unit">${n.unitLabel||""}</td>
                    <td class="meter-raw-label">${n.register}</td>
                  </tr>`})}
            </tbody>
          </table>
        </div>
      <//>`}function jo(){var e=I(void 0),t=e[0],n=e[1],r=I(null),i=r[0],a=r[1];X(function(){return H.poll(function(){H.getModbus().then(function(l){n(Array.isArray(l)?l:[]),a(Math.floor(Date.now()/1e3))}).catch(function(){})},Wo)},[]);var o=i?Math.max(0,Math.floor(Date.now()/1e3)-i):null;return u`
      <div>
        <${Ge} title=${s("page.modbus")} subtitle=${s("modbus.subtitle")}
          actions=${i?u`
            <span class="meter-updated">
              ${s("meter.updated",{time:k.time(i,"hm")})}
              ${o!==null?u`<span class="meter-age"> · ${s("meter.age",{s:o})}</span>`:null}
            </span>`:null} />

        ${t===void 0?u`<${R}><p class="placeholder-text">${s("common.loading")}</p><//>`:null}
        ${t&&t.length===0?u`<${R}><p class="placeholder-text">${s("modbus.empty")}</p><//>`:null}
        ${t&&t.length?u`<${Ko} items=${t} />`:null}
      </div>`}var zo=["site","loads","productions","grid","modbus","tariffs","daten","gplug","pro"],qo={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",modbus:"modbus",tarife:"tariffs",daten:"daten",gplug:"gplug",pro:"pro"},Yo={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",modbus:"modbus",tariffs:"tarife",daten:"daten",gplug:"gplug",pro:"pro"},Vo={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",modbus:"settings.tab.modbus",tariffs:"settings.tab.tariffs",daten:"settings.tab.data",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},Go={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},Zo=["simulator","shelly","homeassistant","gplug","modbustcp"],Wi=["simulator","homeassistant","gplug","modbustcp"],xn=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],zt=["PHOTOVOLTAIC","BATTERY"];function Xo(e){return e==null||String(e).trim()===""?!1:zt.indexOf(String(e).toUpperCase())<0}var Hi=["W","kW"],Ki=[{value:"3",label:"3 – Read Holding Register (0x03)"},{value:"4",label:"4 – Read Input Register (0x04)"}],ji=["float32","int16","uint16","int32","uint32"],Yn=["Wh","kWh"],zi=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month"],Jo={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,co2_g_kwh:128};function U(e){return e==null||String(e).trim()===""}function ie(e){return!U(e)&&!isNaN(Number(e))}function Ae(e){return U(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function qi(e,t){var n={};U(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!ie(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!ie(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};Ae(i.on)||(n["url.on"]="settings.err.url"),Ae(i.off)||(n["url.off"]="settings.err.url"),Ae(i.status)||(n["url.status"]="settings.err.url")}else r==="modbustcp"?Xt(e,n):(Ae(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&U(e.token)&&(n.token="settings.err.token"));return n}function de(e){return!U(e)&&/\s/.test(String(e))}function ze(e){if(U(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<-10||t>10}function qe(e){return!U(e)&&(!ie(e)||Number(e)<=0)}function Yi(e){if(U(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<=0}function Vn(e){return String(e||"").toUpperCase()==="BATTERY"}function Qo(e,t){qe(e.capacity)&&(t.capacity="settings.err.capacity"),qe(e.maxChargePower)&&(t.maxChargePower="settings.err.bat_power"),qe(e.maxDischargePower)&&(t.maxDischargePower="settings.err.bat_power"),e.integration==="gplug"?(de(e.soc_field)&&(t.soc_field="settings.err.soc_field"),de(e.soc_scale_field)&&(t.soc_scale_field="settings.err.scale_field"),ze(e.soc_scale_base)&&(t.soc_scale_base="settings.err.scale_base")):!U(e.soc_url)&&!Ae(e.soc_url)&&(t.soc_url="settings.err.url")}function Vi(e,t){U(e.field)&&(t.field="settings.err.field"),de(e.sensor)&&(t.sensor="settings.err.sensor"),de(e.scale_field)&&(t.scale_field="settings.err.scale_field"),ze(e.scale_base)&&(t.scale_base="settings.err.scale_base"),qe(e.max_power)&&(t.max_power="settings.err.max_power"),de(e.energy_field)&&(t.energy_field="settings.err.energy_field"),Yi(e.stale_after)&&(t.stale_after="settings.err.stale_after"),!U(e.energy_dimension)&&Yn.indexOf(e.energy_dimension)<0&&(t.energy_dimension="settings.err.energy_dimension"),de(e.energy_scale_field)&&(t.energy_scale_field="settings.err.scale_field"),ze(e.energy_scale_base)&&(t.energy_scale_base="settings.err.scale_base")}var el=["sensor","scale_field","scale_base","max_power","energy_field","stale_after","energy_dimension","energy_scale_field","energy_scale_base"],tl=["scale_base","max_power","stale_after","energy_scale_base"],Ar=["capacity","maxChargePower","maxDischargePower","soc_field","soc_scale_field","soc_scale_base","soc_url"],nl=["capacity","maxChargePower","maxDischargePower","soc_scale_base"];function Fr(e){if(!Fe(e))return e;var t=null,n=e.productionType!==void 0&&!Vn(e.productionType);return el.concat(Ar).forEach(function(r){r in e&&(U(e[r])||n&&Ar.indexOf(r)>=0?(t=t||Object.assign({},e),delete t[r]):(tl.indexOf(r)>=0||nl.indexOf(r)>=0)&&typeof e[r]!="number"&&ie(e[r])&&(t=t||Object.assign({},e),t[r]=Number(e[r])))}),"invert"in e&&(e.invert!==!0||n)&&(t=t||Object.assign({},e),delete t.invert),t||e}function un(e){if(!Fe(e)||e.integration!=="modbustcp")return e;var t=Object.assign({},e);return t.function=Number(t.function||3),U(t.register)||(t.register=Number(t.register)),U(t.unit)?delete t.unit:t.unit=Number(t.unit),U(t.scale)||Number(t.scale)===1?delete t.scale:t.scale=Number(t.scale),t.swap_words!==!0&&delete t.swap_words,t}function Gi(e,t){var n={};return U(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?Vi(e,n):e.integration==="modbustcp"?Xt(e,n):(Ae(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&U(e.token)&&(n.token="settings.err.token")),Vn(e.productionType)&&Qo(e,n),n}function Zi(e){var t={};return e.integration==="gplug"?Vi(e,t):e.integration==="modbustcp"?Xt(e,t):(Ae(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&U(e.token)&&(t.token="settings.err.token")),t}function Xi(e){return U(e)?!1:/^[^\s:]+:\d{1,5}$/.test(String(e).trim())}function Rr(e,t,n){if(!ie(e))return!1;var r=Number(e);return Math.floor(r)===r&&r>=t&&(n===void 0||r<=n)}function Xt(e,t){Xi(e.url)||(t.url="settings.err.modbus_url"),Rr(e.register,0)||(t.register="settings.err.modbus_register"),!U(e.unit)&&!Rr(e.unit,1,247)&&(t.unit="settings.err.modbus_unit"),!U(e.scale)&&(!ie(e.scale)||Number(e.scale)===0)&&(t.scale="settings.err.modbus_scale")}function Ji(e,t){var n={};return U(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),Xt(e,n),n}function rl(e){var t={};return U(e.id)&&(t.id="settings.err.id_required"),U(e.name)&&(t.name="settings.err.name_required"),t}function il(e){var t={};zi.forEach(function(d){(!ie(e[d])||Number(e[d])<0)&&(t[d]="settings.err.rate")});var n=e.co2_g_kwh;(!ie(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!U(r),o=!U(i);if((a||o)&&(!a||!o?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!ie(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!ie(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var l=0;l<e.ht_windows.length;l++){var f=e.ht_windows[l]||{};(!ie(f.from)||!ie(f.to)||Number(f.from)<0||Number(f.to)>24||Number(f.from)>Number(f.to))&&(t["win."+l]="settings.err.win_hours")}return t}function gt(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function se(e){return typeof e=="number"&&!isNaN(e)}function Fe(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Sn(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var B={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours",sensor:"settings.err.sensor",scale_field:"settings.err.scale_field",scale_base:"settings.err.scale_base",max_power:"settings.err.max_power",energy_field:"settings.err.energy_field",stale_after:"settings.err.stale_after",energy_dimension:"settings.err.energy_dimension",capacity:"settings.err.capacity",bat_power:"settings.err.bat_power",soc_field:"settings.err.soc_field",invert:"settings.err.invert",modbus_register:"settings.err.modbus_register"},al=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","co2_g_kwh"];function Dr(e,t,n){(typeof e.url!="string"||!Xi(e.url))&&n.push({path:t+".url",key:B.url}),(e.register===void 0||e.register===null||!se(e.register)||e.register<0||Math.floor(e.register)!==e.register)&&n.push({path:t+".register",key:B.modbus_register})}function sl(e,t,n){if(typeof e=="string"||e===void 0||e===null){Sn(e)||n.push({path:t,key:B.url});return}if(Fe(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!Sn(e[r]))&&n.push({path:t+"."+r,key:B.url});return}n.push({path:t,key:B.url})}function Nt(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:B.array}),null;for(var i=!0,a=0;a<r.length;a++)Fe(r[a])||(n.push({path:t+"["+a+"]",key:B.array}),i=!1);return i?r:null}function ol(e){var t=[];if(!Fe(e))return[{path:"",key:B.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:B.id});var n=Nt(e,"loads",t),r=Nt(e,"productions",t),i=Nt(e,"grid",t),a=e.modbusRegisters!==void 0?Nt(e,"modbusRegisters",t):null;if(a)for(var o={},l=0;l<a.length;l++){var f=a[l],d="modbusRegisters["+l+"]",p=f.id;typeof p!="string"||p.length===0?t.push({path:d+".id",key:B.id}):o[p]?t.push({path:d+".id",key:B.dup}):o[p]=!0,(f.register===void 0||f.register===null||!se(f.register)||f.register<0||Math.floor(f.register)!==f.register)&&t.push({path:d+".register",key:B.modbus_register})}if([["productions",r],["grid",i]].forEach(function(x){(x[1]||[]).forEach(function(b,K){var E=x[0]+"["+K+"]";if(b.integration==="modbustcp"){Dr(b,E,t);return}var L=b.sensor;L!=null&&(typeof L!="string"||de(L))&&t.push({path:E+".sensor",key:B.sensor});var y=b.scale_field;y!=null&&(typeof y!="string"||de(y))&&t.push({path:E+".scale_field",key:B.scale_field});var O=b.scale_base;O!=null&&(!se(O)||ze(O))&&t.push({path:E+".scale_base",key:B.scale_base});var D=b.max_power;D!=null&&(!se(D)||qe(D))&&t.push({path:E+".max_power",key:B.max_power});var q=b.energy_field;q!=null&&(typeof q!="string"||de(q))&&t.push({path:E+".energy_field",key:B.energy_field});var j=b.stale_after;j!=null&&(!se(j)||Yi(j))&&t.push({path:E+".stale_after",key:B.stale_after});var m=b.energy_dimension;m!=null&&Yn.indexOf(m)<0&&t.push({path:E+".energy_dimension",key:B.energy_dimension});var S=b.energy_scale_field;S!=null&&(typeof S!="string"||de(S))&&t.push({path:E+".energy_scale_field",key:B.scale_field});var P=b.energy_scale_base;P!=null&&(!se(P)||ze(P))&&t.push({path:E+".energy_scale_base",key:B.scale_base})})}),(r||[]).forEach(function(x,b){var K="productions["+b+"]";[["capacity",B.capacity],["maxChargePower",B.bat_power],["maxDischargePower",B.bat_power]].forEach(function(L){var y=x[L[0]];y!=null&&(!se(y)||qe(y))&&t.push({path:K+"."+L[0],key:L[1]})}),[["soc_field",B.soc_field],["soc_scale_field",B.scale_field]].forEach(function(L){var y=x[L[0]];y!=null&&(typeof y!="string"||de(y))&&t.push({path:K+"."+L[0],key:L[1]})});var E=x.soc_scale_base;E!=null&&(!se(E)||ze(E))&&t.push({path:K+".soc_scale_base",key:B.scale_base}),x.soc_url!==void 0&&x.soc_url!==null&&(typeof x.soc_url!="string"||!Sn(x.soc_url))&&t.push({path:K+".soc_url",key:B.url}),x.invert!==void 0&&typeof x.invert!="boolean"&&t.push({path:K+".invert",key:B.invert})}),n)for(var v={},c=0;c<n.length;c++){var h=n[c],g="loads["+c+"]",$=h.id;typeof $!="string"||$.length===0?t.push({path:g+".id",key:B.id}):v[$]?t.push({path:g+".id",key:B.dup}):v[$]=!0,h.currentPower!==void 0&&h.currentPower!==null&&!se(h.currentPower)&&t.push({path:g+".currentPower",key:B.power}),h.priority!==void 0&&h.priority!==null&&(!se(h.priority)||h.priority<1)&&t.push({path:g+".priority",key:B.priority}),h.integration==="modbustcp"?Dr(h,g,t):h.url!==void 0&&h.url!==null&&sl(h.url,g+".url",t)}var _=e.tariffs;if(_!=null){if(!Fe(_))return t.push({path:"tariffs",key:B.object}),t;al.forEach(function(x){var b=_[x];b!=null&&(!se(b)||b<0)&&t.push({path:"tariffs."+x,key:B.rate})});var C=_.ht_windows;if(C!=null)if(!Array.isArray(C))t.push({path:"tariffs.ht_windows",key:B.array});else for(var w=0;w<C.length;w++){var A=C[w],F="tariffs.ht_windows["+w+"]";(!Fe(A)||!se(A.from)||!se(A.to)||A.from<0||A.to>24||A.from>A.to)&&t.push({path:F,key:B.win})}}return t}function Ut(e){var t=U(e)?"":String(e).trim();return t?s("settings.scale_field_hint",{name:t.charAt(0)+"sf"}):""}function M(e){var t=e.error;return u`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?u`<span class="field-error">${s(t)}</span>`:null}
      </label>`}function ue(e){return u`
      <label class="field field-block">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function Jt(e){return u`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${s("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function Ne(e){return e.map(function(t){return{value:t,label:t}})}function ll(e){var t=e.cfg,n=rl(t);function r(i){return function(a){e.patch(i,a)}}return u`
      <${R} group="grid">
        <p class="settings-scope">${s("settings.scope_note")}</p>
        <div class="settings-form">
          <${M} label=${s("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${M} label=${s("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${M} label=${s("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${M} label=${s("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${Qt} disabled=${gt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function ul(e){var t=e.selected>=0;return u`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${J} small onClick=${e.onAdd}>${s("settings.add")}<//>
          </div>
          ${e.items.length===0?u`<p class="md-empty">${s("settings.empty")}</p>`:e.items.map(function(n,r){return u`
                  <button key=${r} type="button"
                    class=${"md-row"+(r===e.selected?" md-row-active":"")}
                    onClick=${function(){e.onSelect(r)}}>${e.labelFn(n,r)}</button>`})}
        </div>
        <div class="md-detail">
          ${e.selected>=0?u`
                <button type="button" class="md-back" onClick=${function(){e.onSelect(-1)}}>← ${s("settings.back")}</button>
                ${e.detail}`:u`<p class="md-empty md-detail-empty">${s("settings.select_hint")}</p>`}
        </div>
      </div>`}function Qt(e){return u`
      <div class="settings-actions">
        <${J} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?s("settings.saving"):s("settings.save")}
        <//>
      </div>`}function Gn(e){var t=e.item,n=e.errors;function r(i){return function(a){e.patch(i,a)}}return u`
      <${M} label=${s("settings.modbus.url")} value=${t.url} placeholder="192.168.0.102:502"
        error=${n.url} onInput=${r("url")} />
      <${M} label=${s("settings.modbus.unit")} type="number" step="1" min="1" max="247"
        value=${t.unit} placeholder="1" error=${n.unit} onInput=${r("unit")} />
      <${ue} label=${s("settings.modbus.function")} value=${String(t.function||3)}
        options=${Ki} onChange=${r("function")} />
      <${M} label=${s("settings.modbus.register")} type="number" step="1" min="0"
        value=${t.register} error=${n.register} onInput=${r("register")} />
      <${ue} label=${s("settings.modbus.dtype")} value=${t.dtype||"float32"}
        options=${Ne(ji)} onChange=${r("dtype")} />
      <${M} label=${s("settings.modbus.scale")} type="number" step="any" value=${t.scale}
        placeholder="1" error=${n.scale} onInput=${r("scale")} />
      <label class="toggle-wrap">
        <input type="checkbox" class="toggle" checked=${t.swap_words===!0}
          onChange=${function(i){e.patch("swap_words",i.target.checked)}} />
        <span>${s("settings.modbus.swap_words")}</span>
      </label>`}function cl(e){var t=e.item,n=e.otherIds,r=qi(t,n);function i(f){return function(d){e.patch(f,d)}}function a(f){return function(d){var p=Object.assign({},t.url||{});p[f]=d,e.patch("url",p)}}var o=t.integration||"simulator",l=o==="shelly"?t.url||{}:{};return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||s("settings.new_entry")}</h3>
          <${Jt} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${M} label=${s("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${M} label=${s("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${M} label=${s("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${ue} label=${s("settings.load.type")} value=${t.loadType||xn[0]}
            options=${Ne(xn)} onChange=${i("loadType")} />
          <${M} label=${s("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${ue} label=${s("settings.integration")} value=${o}
            options=${Ne(Zo)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${s("settings.integration_config")}</div>
        <div class="settings-form">
          ${o==="shelly"?u`
            <${M} label=${s("settings.url.on")} value=${l.on} error=${r["url.on"]} onInput=${a("on")} />
            <${M} label=${s("settings.url.off")} value=${l.off} error=${r["url.off"]} onInput=${a("off")} />
            <${M} label=${s("settings.url.status")} value=${l.status} error=${r["url.status"]} onInput=${a("status")} />`:o==="modbustcp"?u`
            <${Gn} item=${t} errors=${r} patch=${e.patch} />`:u`
            <${M} label=${s("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${o==="homeassistant"?u`
              <${M} label=${s("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function fl(e){var t=e.item,n=Gi(t,e.otherIds);function r(a){return function(o){e.patch(a,o)}}var i=t.integration||"simulator";return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||s("settings.new_entry")}</h3>
          <${Jt} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${M} label=${s("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${M} label=${s("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${ue} label=${s("settings.prod.type")} value=${t.productionType||zt[0]}
            options=${zt.map(function(a){return{value:a,label:s(Go[a])}})}
            onChange=${r("productionType")} />
          ${Xo(t.productionType)?u`
            <div class="settings-warn" role="status">${s("settings.prodtype.unknown_warn")}</div>`:null}
          <${ue} label=${s("settings.dimension")} value=${t.dimension||"W"}
            options=${Ne(Hi)} onChange=${r("dimension")} />
          <${ue} label=${s("settings.integration")} value=${i}
            options=${Ne(Wi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${s("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${M} label=${s("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${M} label=${s("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${M} label=${s("settings.scale_field")} value=${t.scale_field} placeholder=${Ut(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${M} label=${s("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${M} label=${s("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${M} label=${s("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${M} label=${s("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />
            <${ue} label=${s("settings.energy_dimension")} value=${t.energy_dimension||""}
              options=${[{value:"",label:s("settings.energy_dimension_auto")}].concat(Ne(Yn))}
              onChange=${r("energy_dimension")} />
            <${M} label=${s("settings.energy_scale_field")} value=${t.energy_scale_field} placeholder=${Ut(t.energy_field)} error=${n.energy_scale_field} onInput=${r("energy_scale_field")} />
            <${M} label=${s("settings.energy_scale_base")} type="number" step="1" min="-10" value=${t.energy_scale_base} placeholder="0" error=${n.energy_scale_base} onInput=${r("energy_scale_base")} />`:i==="modbustcp"?u`
            <${Gn} item=${t} errors=${n} patch=${e.patch} />`:u`
            <${M} label=${s("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${M} label=${s("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
        ${Vn(t.productionType)?u`
          <div class="settings-subhead">${s("settings.battery")}</div>
          <p class="settings-scope">${s("settings.battery_hint")}</p>
          <div class="settings-form">
            <${M} label=${s("settings.capacity")} type="number" step="1" min="1" value=${t.capacity} error=${n.capacity} onInput=${r("capacity")} />
            <${M} label=${s("settings.max_charge_power")} type="number" step="1" min="1" value=${t.maxChargePower} error=${n.maxChargePower} onInput=${r("maxChargePower")} />
            <${M} label=${s("settings.max_discharge_power")} type="number" step="1" min="1" value=${t.maxDischargePower} error=${n.maxDischargePower} onInput=${r("maxDischargePower")} />
            ${i==="gplug"?u`
              <${M} label=${s("settings.soc_field")} value=${t.soc_field} placeholder="ChaState" error=${n.soc_field} onInput=${r("soc_field")} />
              <${M} label=${s("settings.soc_scale_field")} value=${t.soc_scale_field} placeholder=${Ut(t.soc_field)} error=${n.soc_scale_field} onInput=${r("soc_scale_field")} />
              <${M} label=${s("settings.soc_scale_base")} type="number" step="1" min="-10" value=${t.soc_scale_base} placeholder="0" error=${n.soc_scale_base} onInput=${r("soc_scale_base")} />`:i!=="simulator"?u`
              <${M} label=${s("settings.soc_url")} value=${t.soc_url} error=${n.soc_url} onInput=${r("soc_url")} />`:null}
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle" checked=${t.invert===!0}
                onChange=${function(a){e.patch("invert",a.target.checked)}} />
              <span>${s("settings.invert")}</span>
            </label>
          </div>`:null}
      </div>`}function dl(e){var t=e.item,n=Zi(t);function r(o){return function(l){e.patch(o,l)}}var i=t.integration||"simulator",a=t.id==="to"?s("settings.grid.to"):s("settings.grid.from");return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${ue} label=${s("settings.dimension")} value=${t.dimension||"W"}
            options=${Ne(Hi)} onChange=${r("dimension")} />
          <${ue} label=${s("settings.integration")} value=${i}
            options=${Ne(Wi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${s("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${M} label=${s("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${M} label=${s("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${M} label=${s("settings.scale_field")} value=${t.scale_field} placeholder=${Ut(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${M} label=${s("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${M} label=${s("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${M} label=${s("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${M} label=${s("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />`:i==="modbustcp"?u`
            <${Gn} item=${t} errors=${n} patch=${e.patch} />`:u`
            <${M} label=${s("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${M} label=${s("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function pl(e){var t=e.item,n=Ji(t,e.otherIds);function r(i){return function(a){e.patch(i,a)}}return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||s("settings.new_entry")}</h3>
          <${Jt} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${M} label=${s("settings.modbus.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${M} label=${s("settings.modbus.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${M} label=${s("settings.modbus.url")} value=${t.url} placeholder="192.168.0.102:502"
            error=${n.url} onInput=${r("url")} />
          <${M} label=${s("settings.modbus.unit")} type="number" step="1" min="1" max="247"
            value=${t.unit} placeholder="1" error=${n.unit} onInput=${r("unit")} />
          <${ue} label=${s("settings.modbus.function")} value=${String(t.function||3)}
            options=${Ki} onChange=${r("function")} />
          <${M} label=${s("settings.modbus.register")} type="number" step="1" min="0"
            value=${t.register} error=${n.register} onInput=${r("register")} />
          <${ue} label=${s("settings.modbus.dtype")} value=${t.dtype||"float32"}
            options=${Ne(ji)} onChange=${r("dtype")} />
          <${M} label=${s("settings.modbus.scale")} type="number" step="any" value=${t.scale}
            placeholder="1" error=${n.scale} onInput=${r("scale")} />
          <${M} label=${s("settings.modbus.unit_label")} value=${t.unitLabel} placeholder="kWh"
            onInput=${r("unitLabel")} />
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.swap_words===!0}
              onChange=${function(i){e.patch("swap_words",i.target.checked)}} />
            <span>${s("settings.modbus.swap_words")}</span>
          </label>
        </div>
      </div>`}function Et(e){var t=I(-1),n=t[0],r=t[1],i=e.items;function a(p,v){var c=i.slice(),h=Object.assign({},c[n]);h[p]=v,c[n]=h,e.onChange(c)}function o(){var p=i.concat([e.blank()]);e.onChange(p),r(p.length-1)}function l(){var p=i[n],v=(e.persistedIds||[]).indexOf(String(p&&p.id))!==-1;if(!(v&&!window.confirm(s(e.confirmKey)))){var c=i.slice();c.splice(n,1),r(-1),e.onDelete&&e.onDelete(p),e.onChange(c)}}var f=i.some(function(p,v){var c=i.filter(function(h,g){return g!==v}).map(function(h){return String(h.id)});return gt(e.validate(p,c))}),d=n>=0&&i[n]?u`<${e.Detail} item=${i[n]} patch=${a} onDelete=${l}
          otherIds=${i.filter(function(p,v){return v!==n}).map(function(p){return String(p.id)})} />`:null;return u`
      <${R} group=${e.group}>
        <${ul}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:o}
          detail=${d} />
        <${Qt} disabled=${f} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function vl(e){var t=e.tariffs,n=il(t);function r(p){return function(v){e.patch(p,v)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(p,v,c){var h=i.map(function(g,$){if($!==p)return g;var _=Object.assign({},g);return _[v]=c,_});e.setWindows(h)}function o(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function l(p){e.setWindows(i.filter(function(v,c){return c!==p}))}var f=ie(t.grid_import_ht_chf_kwh)&&ie(t.grid_import_nt_chf_kwh),d=f&&i.length===0;return u`
      <${R} group="grid">
        <div class="settings-subhead">${s("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${M} label=${s("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${s("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${s("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${M} label=${s("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${M} label=${s("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${s("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${s("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(p,v){return u`
            <div key=${v} class="settings-form ht-window-row">
              <${M} label=${s("settings.tariff.win_days")} value=${p.days}
                placeholder=${s("settings.tariff.win_days.ph")} onInput=${function(c){a(v,"days",c)}} />
              <${M} label=${s("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${p.from} error=${n["win."+v]} onInput=${function(c){a(v,"from",Br(c))}} />
              <${M} label=${s("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${p.to} onInput=${function(c){a(v,"to",Br(c))}} />
              <${Jt} onClick=${function(){l(v)}} />
            </div>`})}
        <${J} small secondary onClick=${o}>${s("settings.tariff.win_add")}<//>
        ${d?u`<p class="settings-warn">${s("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${s("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${M} label=${s("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${M} label=${s("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${s("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${M} label=${s("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${Qt} disabled=${gt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function Br(e){return U(e)?void 0:Number(e)}function Ur(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!U(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function hl(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return u`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${J} small secondary onClick=${function(){e.onUse(1)}}>${s("settings.gplug.scan_use1")}<//>
          <${J} small secondary onClick=${function(){e.onUse(2)}}>${s("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function gl(){var e=I(null),t=e[0],n=e[1],r=I(!1),i=r[0],a=r[1],o=I(!1),l=o[0],f=o[1],d=I(!1),p=d[0],v=d[1],c=I({scanning:!1,networks:null,error:!1}),h=c[0],g=c[1];function $(){a(!1),n(null),H.getWifiConfig().then(function(b){n({ssid1:b.ssid1,password1:"",ssid2:b.ssid2,password2:""})}).catch(function(){a(!0)})}X(function(){$()},[]);function _(b){return function(K){n(function(E){var L=Object.assign({},E);return L[b]=K,L})}}function C(){p||!window.confirm(s("settings.gplug.restart_confirm"))||(v(!0),H.restartDevice().then(function(){te(s("settings.gplug.restart_success"),{type:"info"})}).catch(function(){te(s("settings.gplug.restart_error"),{type:"error"})}).then(function(){v(!1)}))}function w(){l||!t||gt(Ur(t))||(f(!0),H.setWifiConfig(t).then(function(){te(s("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(b){te(b&&b.message||s("settings.save_error"),{type:"error"})}).then(function(){f(!1)}))}function A(){g({scanning:!0,networks:null,error:!1}),H.wifiScanStart().catch(function(){});var b=0;function K(){b+=1,H.wifiScanResult().then(function(E){var L=E&&(E.WiFiScan!==void 0?E.WiFiScan:E.WifiScan);if(L&&typeof L=="object"){var y=Object.keys(L).map(function(O){return L[O]});y.sort(function(O,D){return(Number(D.RSSI)||0)-(Number(O.RSSI)||0)}),g({scanning:!1,networks:y,error:!1});return}if(b>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(K,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(K,1e3)}function F(b,K){n(function(E){var L=Object.assign({},E);return L["ssid"+b]=K,L})}if(i)return u`
        <${R} group="grid">
          <p class="placeholder-text">${s("settings.load_error")}</p>
          <${J} secondary small onClick=${$}>${s("settings.retry")}<//>
        <//>`;if(!t)return u`<${R} group="grid"><p class="placeholder-text">${s("settings.loading")}</p><//>`;var x=Ur(t);return u`
      <div>
        <${R} group="grid" title=${s("settings.gplug.restart_title")}>
          <p class="settings-scope">${s("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${J} danger disabled=${p} onClick=${C}>
              ${s(p?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${R} group="grid" title=${s("settings.gplug.wifi_title")}>
          <p class="settings-scope">${s("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${s("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${M} label=${s("settings.gplug.ssid1")} value=${t.ssid1} error=${x.ssid1} onInput=${_("ssid1")} />
            <${M} label=${s("settings.gplug.password1")} type="password" value=${t.password1} error=${x.password1}
              placeholder=${s("settings.gplug.password_placeholder")} onInput=${_("password1")} />
          </div>
          <div class="settings-subhead">${s("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${M} label=${s("settings.gplug.ssid2")} value=${t.ssid2} error=${x.ssid2} onInput=${_("ssid2")} />
            <${M} label=${s("settings.gplug.password2")} type="password" value=${t.password2} error=${x.password2}
              placeholder=${s("settings.gplug.password_placeholder")} onInput=${_("password2")} />
          </div>

          <div class="settings-subhead">${s("settings.gplug.scan_button")}</div>
          <${J} secondary small disabled=${h.scanning} onClick=${A}>
            ${h.scanning?s("settings.gplug.scanning"):s("settings.gplug.scan_button")}
          <//>
          ${h.error?u`<p class="settings-warn">${s("settings.gplug.scan_error")}</p>`:null}
          ${h.networks&&h.networks.length===0?u`<p class="placeholder-text">${s("settings.gplug.scan_empty")}</p>`:null}
          ${h.networks&&h.networks.length>0?u`
            <div class="wifi-scan-list">
              ${h.networks.map(function(b,K){return u`<${hl} key=${K} net=${b} onUse=${function(E){F(E,b.SSId)}} />`})}
            </div>`:null}

          <${Qt} disabled=${gt(x)} onSave=${w} saving=${l} />
        <//>
      </div>`}function ml(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function Wr(e){return e==null||isNaN(e)?"–":e<1024?e+" B":e<1024*1024?Math.round(e/1024)+" KB":Math.round(e/(1024*1024)*10)/10+" MB"}function _l(){var e=I(null),t=e[0],n=e[1],r=I(Si()),i=r[0],a=r[1],o=I(!1),l=o[0],f=o[1];function d(g){if(!g.available||!g.siteId){n(null);return}Wn(g.siteId).then(n,function(){n(null)})}X(function(){var g=Ci(function($){a(Object.assign({},$)),d($)});return Gt().then(function($){a(Object.assign({},$)),d($)}),g},[]);function p(){l||(f(!0),as(H).then(function(g){d(g),te(s("settings.data.synced"),{type:"info"})},function(){te(s("settings.data.sync_error"),{type:"error"})}).then(function(){f(!1)}))}function v(){i.siteId&&ts(i.siteId).then(function(g){ml("gplug-archiv-"+i.siteId+".csv",g)},function(){te(s("settings.data.export_error"),{type:"error"})})}function c(g){var $=g.target&&g.target.files&&g.target.files[0];$&&(g.target.value="",$.text().then(function(_){return ns(_,i.siteId)}).then(function(_){n(_),te(s("settings.data.import_ok",{count:_.count}),{type:"info"})},function(_){te(_&&_.message||s("settings.data.import_error"),{type:"error"})}))}if(i.available===!1)return u`
        <${R} group="grid" title=${s("settings.data.title")}>
          <p class="settings-warn">${s("settings.data.unavailable")}</p>
          <p class="settings-scope">${s("settings.data.multi_client")}</p>
        <//>`;if(!t)return u`<${R} group="grid"><p class="placeholder-text">${s("settings.loading")}</p><//>`;var h=t.estimate;return u`
      <div>
        <${R} group="grid" title=${s("settings.data.title")}>
          <p class="settings-scope">${s("settings.data.desc")}</p>
          <dl class="data-facts">
            <dt>${s("settings.data.site")}</dt><dd>${t.siteId}</dd>
            <dt>${s("settings.data.range")}</dt>
            <dd>${t.firstE15Ts===null?s("common.nodata"):k.time(t.firstE15Ts,"1d")+" – "+k.time(t.lastE15Ts,"1d")}</dd>
            <dt>${s("settings.data.records")}</dt><dd>${t.count} (${t.days} ${s("settings.data.days")})</dd>
            <dt>${s("settings.data.last_sync")}</dt>
            <dd>${t.syncedAt?k.time(t.syncedAt,"15m"):"–"}</dd>
            <dt>${s("settings.data.storage")}</dt>
            <dd>${h?Wr(h.usage)+" / "+Wr(h.quota):"–"}</dd>
          </dl>

          <div class="settings-subhead">${s("settings.data.gaps")}</div>
          ${t.gaps&&t.gaps.length?u`
            <ul class="data-gaps">
              ${t.gaps.map(function(g,$){return u`<li key=${$}>${k.time(g[0],"15m")} – ${k.time(g[1],"15m")}</li>`})}
            </ul>`:u`<p class="settings-scope">${s("settings.data.no_gaps")}</p>`}

          <div class="settings-actions">
            <${J} secondary small disabled=${l} onClick=${p}>
              ${s(l?"settings.data.syncing":"settings.data.sync")}
            <//>
          </div>
        <//>

        <${R} group="grid" title=${s("settings.data.transfer_title")}>
          <p class="settings-scope">${s("settings.data.multi_client")}</p>
          <div class="settings-actions">
            <${J} secondary small onClick=${v}>${s("settings.data.export")}<//>
            <label class="btn btn-secondary btn-small data-import-label">
              ${s("settings.data.import")}
              <input type="file" accept=".csv,text/csv" class="data-import-input"
                onChange=${c} />
            </label>
          </div>
        <//>
      </div>`}function $l(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function bl(e){var t=I(null),n=t[0],r=t[1],i=I(!1),a=i[0],o=i[1],l=I(!1),f=l[0],d=l[1];function p(){o(!1),r(null),H.getConfigRaw().then(function(g){r($l(g))}).catch(function(){o(!0)})}X(function(){p()},[]);var v=null,c=[];if(n!==null)try{c=ol(JSON.parse(n))}catch(g){v=g.message}function h(){if(!(f||v)){var g;try{g=JSON.parse(n)}catch{return}d(!0),H.postConfig(g).then(function(){te(s("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),p()}).catch(function($){te($&&$.message||s("settings.save_error"),{type:"error"})}).then(function(){d(!1)})}}return a?u`
        <${R} group="grid">
          <p class="placeholder-text">${s("settings.load_error")}</p>
          <${J} secondary small onClick=${p}>${s("settings.retry")}<//>
        <//>`:n===null?u`<${R} group="grid"><p class="placeholder-text">${s("settings.loading")}</p><//>`:u`
      <${R} group="grid">
        <p class="settings-scope">${s("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${v?u`<p class="settings-warn">${s("settings.pro.invalid_json",{msg:v})}</p>`:null}
        ${c.length?u`
          <div class="settings-warn">
            <strong>${s("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${c.map(function(g,$){return u`<li key=${$}><code>${g.path||"/"}</code> — ${s(g.key)}</li>`})}
            </ul>
            <span>${s("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${J} secondary disabled=${f} onClick=${p}>${s("settings.pro.reload")}<//>
          <${J} disabled=${f||!!v} onClick=${h}>
            ${s(f?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function yl(){return{id:"",friendlyName:"",loadType:xn[0],currentPower:"",priority:1,integration:"simulator",url:""}}function wl(){return{id:"",friendlyName:"",productionType:zt[0],dimension:"W",integration:"simulator",url:""}}function kl(){return{id:"",friendlyName:"",integration:"modbustcp",url:"",unit:1,function:3,register:"",dtype:"float32"}}function xl(e){var t=e.params&&e.params.tab||"site",n=qo[t]||"site",r=I(null),i=r[0],a=r[1],o=I(null),l=o[0],f=o[1],d=I(!1),p=d[0],v=d[1],c=I(!1),h=c[0],g=c[1],$=I({loads:[],productions:[],grid:[],modbusRegisters:[]}),_=$[0],C=$[1];function w(m){return(Array.isArray(m)?m:[]).map(function(S){return String(S&&S.id)}).filter(function(S){return!U(S)})}function A(){f(null),H.getConfig().then(function(m){a(F(m)),g(!U(m&&m.id)),C({loads:w(m&&m.loads),productions:w(m&&m.productions),grid:w(m&&m.grid),modbusRegisters:w(m&&m.modbusRegisters)})}).catch(function(){f(!0),a(null)})}X(function(){A()},[]);function F(m){m=m||{};var S=Object.assign({},m);return S.loads=Array.isArray(m.loads)?m.loads:[],S.productions=Array.isArray(m.productions)?m.productions:[],S.grid=Array.isArray(m.grid)?m.grid:[],S.modbusRegisters=Array.isArray(m.modbusRegisters)?m.modbusRegisters:[],S.tariffs=Object.assign({},Jo,m.tariffs||{}),S}function x(m,S){a(function(P){var T=Object.assign({},P);return T[m]=S,T})}function b(m,S){a(function(P){var T=Object.assign({},P);return T.tariffs=Object.assign({},P.tariffs),T.tariffs[m]=S,T})}function K(m){a(function(S){var P=Object.assign({},S);return P.tariffs=Object.assign({},S.tariffs),P.tariffs.ht_windows=m,P})}function E(m,S){a(function(P){var T=Object.assign({},P);return T[m]=S,T})}function L(){p||(v(!0),H.postConfig(y(i)).then(function(){te(s("settings.saved"),{type:"info"}),g(!0),A()}).catch(function(m){te(m&&m.message||s("settings.save_error"),{type:"error"})}).then(function(){v(!1)}))}function y(m){var S=Object.assign({},m);return S.loads=m.loads.map(function(P){var T=Object.assign({},P);return T.currentPower!==""&&T.currentPower!==void 0&&(T.currentPower=Number(T.currentPower)),T.priority!==""&&T.priority!==void 0&&(T.priority=Number(T.priority)),un(T)}),S.productions=m.productions.map(function(P){return un(Fr(P))}),S.grid=m.grid.map(function(P){return un(Fr(P))}),S.modbusRegisters=m.modbusRegisters.map(function(P){var T=Object.assign({},P);return T.function=Number(T.function||3),T.register=Number(T.register),U(T.unit)?delete T.unit:T.unit=Number(T.unit),U(T.scale)||Number(T.scale)===1?delete T.scale:T.scale=Number(T.scale),U(T.unitLabel)&&delete T.unitLabel,T.swap_words!==!0&&delete T.swap_words,T}),S.tariffs=Object.assign({},m.tariffs),zi.forEach(function(P){S.tariffs[P]=Number(m.tariffs[P])}),m.tariffs.co2_g_kwh!==void 0&&m.tariffs.co2_g_kwh!==""&&(S.tariffs.co2_g_kwh=Number(m.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(P){U(m.tariffs[P])?delete S.tariffs[P]:S.tariffs[P]=Number(m.tariffs[P])}),Array.isArray(m.tariffs.ht_windows)&&(m.tariffs.ht_windows.length===0?delete S.tariffs.ht_windows:S.tariffs.ht_windows=m.tariffs.ht_windows.map(function(P){return{days:P.days,from:Number(P.from),to:Number(P.to)}})),S}function O(m){!m||U(m.id)||H.setLoadState(m.id,"INACTIVE").catch(function(){})}function D(m){hi.navigate("/einstellungen/"+Yo[m])}var q=zo.map(function(m){return u`
        <button key=${m} type="button"
          class=${"pill"+(m===n?" pill-active":"")}
          onClick=${function(){D(m)}}>${s(Vo[m])}</button>`}),j;return l?j=u`
        <${R}>
          <p class="placeholder-text">${s("settings.load_error")}</p>
          <${J} secondary small onClick=${A}>${s("settings.retry")}<//>
        <//>`:i?n==="site"?j=u`<${ll} cfg=${i} patch=${x} idLocked=${h}
        onSave=${L} saving=${p} />`:n==="tariffs"?j=u`<${vl} tariffs=${i.tariffs} patch=${b}
        setWindows=${K} onSave=${L} saving=${p} />`:n==="daten"?j=u`<${_l} />`:n==="gplug"?j=u`<${gl} />`:n==="pro"?j=u`<${bl} onSaved=${A} />`:n==="loads"?j=u`<${Et} group="loads"
        items=${i.loads} onChange=${function(m){E("loads",m)}}
        listTitle=${s("settings.tab.loads")}
        labelFn=${function(m){return m.friendlyName||m.id||s("settings.new_entry")}}
        blank=${yl} confirmKey="settings.confirm_delete_load"
        persistedIds=${_.loads}
        onDelete=${O}
        validate=${qi} Detail=${cl}
        onSave=${L} saving=${p} />`:n==="productions"?j=u`<${Et} group="production"
        items=${i.productions} onChange=${function(m){E("productions",m)}}
        listTitle=${s("settings.tab.productions")}
        labelFn=${function(m){return m.friendlyName||m.id||s("settings.new_entry")}}
        blank=${wl} confirmKey="settings.confirm_delete_production"
        persistedIds=${_.productions}
        validate=${function(m,S){return Gi(m,S)}} Detail=${fl}
        onSave=${L} saving=${p} />`:n==="grid"?j=u`<${Et} group="grid" fixedList
        items=${i.grid} onChange=${function(m){E("grid",m)}}
        listTitle=${s("settings.tab.grid")}
        labelFn=${function(m){return m.id==="to"?s("settings.grid.to"):s("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${_.grid}
        validate=${function(m){return Zi(m)}} Detail=${dl}
        onSave=${L} saving=${p} />`:n==="modbus"&&(j=u`<${Et} group="grid"
        items=${i.modbusRegisters} onChange=${function(m){E("modbusRegisters",m)}}
        listTitle=${s("settings.tab.modbus")}
        labelFn=${function(m){return m.friendlyName||m.id||s("settings.new_entry")}}
        blank=${kl} confirmKey="settings.confirm_delete_load"
        persistedIds=${_.modbusRegisters}
        validate=${Ji} Detail=${pl}
        onSave=${L} saving=${p} />`):j=u`<${R}><p class="placeholder-text">${s("settings.loading")}</p><//>`,u`
      <div>
        <${Ge} title=${s("page.settings")} />
        <div class="pill-bar">${q}</div>
        ${j}
      </div>`}var Sl=["https://gplug-ch.github.io/gplug-cdn/v0.1.0/lang-en.json"];function Cl(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(l,f,d,p){for(var v=[],c=0;c<=90;c++){var h=e-900+c*10,g=c>=d&&c<=p?null:Math.max(0,l+f*Math.sin(c/9)+f*.4*Math.sin(c/2.3));v.push({t:h,y:g})}return v}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],o=0;o<23;o++)a.push({id:o,ts:k.time(e-o*900,"15m"),imp:k.num(Math.round(Math.random()*0+o*7)/100,2),chf:k.chf((o%3===0?-1:1)*o*.19,!0)});return u`
    <div>
      <${Ge} title=${s("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${u`<${J} onClick=${function(){te("Toast!",{type:"info"})}}>Toast<//>`} />

      <${R} group="grid" title="LineChart" tooltip=${s("tooltip.consumption")}
        value=${k.w(1396)} valueColor="var(--c-consumption)">
        <${Vt} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${k.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${R} group="grid" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${k.chf(12.4,!0)} valueColor="var(--c-export)">
        <${pi} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(l){return k.chf(l,!0)}}
          points=${r.map(function(l){return{t:l.t,y:l.y,color:l.y<0?"var(--c-import)":"var(--c-export)"}})} />
      <//>

      <${R} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${Lt} state="active" />
          <${Lt} state="waiting" />
          <${Lt} state="inactive" />
        </div>
        <div class="demo-row">
          <${J}>Speichern<//>
          <${J} secondary>Abbrechen<//>
          <${J} danger>Löschen<//>
          <${J} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${_a} label="Anzeige-Name" value="Familie Huber" />
          <${oi} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${R} group="production" title="DataTable">
        <${Ma} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(l){var f=l.chf.indexOf("−")===0;return u`<span class=${f?"val-neg":"val-pos"}>${l.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function Ml(){return[{path:"/",component:Xs},{path:"/verlauf",component:lo},{path:"/zaehler",component:Uo},{path:"/modbus",component:jo},{path:"/einstellungen/:tab?",component:xl},{path:"/demo",component:Cl}]}function Hr(){var e=document.getElementById("app"),t=Sl;da.load(t).catch(function(){}).then(function(){sa(u`<${os} routes=${Ml()} />`,e),is(H)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Hr):Hr();
