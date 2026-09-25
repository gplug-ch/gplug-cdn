(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Vt,G,Zr,Ie,nr,Xr,Jr,on,Ot,vt,Qr,In,gn,hn,Kt={},zt=[],aa=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Zt=Array.isArray;function Ce(e,t){for(var n in t)e[n]=t[n];return e}function Pn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ei(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Vt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return At(e,o,r,i,null)}function At(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Zr,__i:-1,__u:0};return i==null&&G.vnode!=null&&G.vnode(a),a}function bt(e){return e.children}function Lt(e,t){this.props=e,this.context=t}function Ze(e,t){if(t==null)return e.__?Ze(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ze(e):null}function sa(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Ce({},t);a.__v=t.__v+1,G.vnode&&G.vnode(a),On(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Ze(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,ai(r,a,i),t.__e=t.__=null,a.__e!=n&&ti(a)}}function ti(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ti(e)}function rr(e){(!e.__d&&(e.__d=!0)&&Ie.push(e)&&!qt.__r++||nr!=G.debounceRendering)&&((nr=G.debounceRendering)||Xr)(qt)}function qt(){try{for(var e,t=1;Ie.length;)Ie.length>t&&Ie.sort(Jr),e=Ie.shift(),t=Ie.length,sa(e)}finally{Ie.length=qt.__r=0}}function ni(e,t,n,r,i,a,o,l,c,v,f){var p,d,h,g,b,$,M,_=r&&r.__k||zt,A=t.length;for(c=oa(n,t,_,c,A),p=0;p<A;p++)(h=n.__k[p])!=null&&(d=h.__i!=-1&&_[h.__i]||Kt,h.__i=p,$=On(e,h,d,i,a,o,l,c,v,f),g=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&An(d.ref,null,h),f.push(h.ref,h.__c||g,h)),b==null&&g!=null&&(b=g),(M=!!(4&h.__u))||d.__k===h.__k?(c=ri(h,c,e,M),M&&d.__e&&(d.__e=null)):typeof h.type=="function"&&$!==void 0?c=$:g&&(c=g.nextSibling),h.__u&=-7);return n.__e=b,c}function oa(e,t,n,r,i){var a,o,l,c,v,f=n.length,p=f,d=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=At(null,o,null,null,null):Zt(o)?o=e.__k[a]=At(bt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=At(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+d,o.__=e,o.__b=e.__b+1,l=null,(v=o.__i=la(o,n,c,p))!=-1&&(p--,(l=n[v])&&(l.__u|=2)),l==null||l.__v==null?(v==-1&&(i>f?d--:i<f&&d++),typeof o.type!="function"&&(o.__u|=4)):v!=c&&(v==c-1?d--:v==c+1?d++:(v>c?d--:d++,o.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<f;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Ze(l)),oi(l,l));return r}function ri(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=ri(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ze(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function la(e,t,n,r){var i,a,o,l=e.key,c=e.type,v=t[n],f=v!=null&&(2&v.__u)==0;if(v===null&&l==null||f&&l==v.key&&c==v.type)return n;if(r>(f?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((v=t[o=i>=0?i--:a++])!=null&&(2&v.__u)==0&&l==v.key&&c==v.type)return o}return-1}function ir(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||aa.test(t)?n:n+"px"}function St(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ir(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||ir(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Qr,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[vt]=r[vt]:(n[vt]=In,e.addEventListener(t,a?hn:gn,a)):e.removeEventListener(t,a?hn:gn,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ar(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Ot]==null)t[Ot]=In++;else if(t[Ot]<n[vt])return;return n(G.event?G.event(t):t)}}}function On(e,t,n,r,i,a,o,l,c,v){var f,p,d,h,g,b,$,M,_,A,D,N,k,H,x,E,y=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[l=t.__e=n.__e]),(f=G.__b)&&f(t);e:if(typeof y=="function"){p=o.length;try{if(_=t.props,A=y.prototype&&y.prototype.render,D=(f=y.contextType)&&r[f.__c],N=f?D?D.props.value:f.__:r,n.__c?M=(d=t.__c=n.__c).__=d.__E:(A?t.__c=d=new y(_,N):(t.__c=d=new Lt(_,N),d.constructor=y,d.render=ca),D&&D.sub(d),d.state||(d.state={}),d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),A&&d.__s==null&&(d.__s=d.state),A&&y.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Ce({},d.__s)),Ce(d.__s,y.getDerivedStateFromProps(_,d.__s))),g=d.props,b=d.state,d.__v=t,h)A&&y.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),A&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(A&&y.getDerivedStateFromProps==null&&_!==g&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,N),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(_,d.__s,N)===!1){t.__v!=n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(R){R&&(R.__=t)}),zt.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,N),A&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(g,b,$)})}if(d.context=N,d.props=_,d.__P=e,d.__e=!1,k=G.__r,H=0,A)d.state=d.__s,d.__d=!1,k&&k(t),f=d.render(d.props,d.state,d.context),zt.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,k&&k(t),f=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++H<25);d.state=d.__s,d.getChildContext!=null&&(r=Ce(Ce({},r),d.getChildContext())),A&&!h&&d.getSnapshotBeforeUpdate!=null&&($=d.getSnapshotBeforeUpdate(g,b)),x=f!=null&&f.type===bt&&f.key==null?si(f.props.children):f,l=ni(e,Zt(x)?x:[x],t,n,r,i,a,o,l,c,v),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),M&&(d.__E=d.__=null)}catch(R){if(o.length=p,t.__v=null,c||a!=null){if(R.then){for(t.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a!=null&&(a[a.indexOf(l)]=null),t.__e=l}else if(a!=null)for(E=a.length;E--;)Pn(a[E])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),R.then||ii(t),G.__e(R,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=ua(n.__e,t,n,r,i,a,o,c,v);return(f=G.diffed)&&f(t),128&t.__u?void 0:l}function ii(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(ii))}function ai(e,t,n){for(var r=0;r<n.length;r++)An(n[r],n[++r],n[++r]);G.__c&&G.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){G.__e(a,i.__v)}})}function si(e){return typeof e!="object"||e==null||e.__b>0?e:Zt(e)?e.map(si):e.constructor!==void 0?null:Ce({},e)}function ua(e,t,n,r,i,a,o,l,c){var v,f,p,d,h,g,b,$=n.props||Kt,M=t.props,_=t.type;if(_=="svg"?i="http://www.w3.org/2000/svg":_=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(v=0;v<a.length;v++)if((h=a[v])&&"setAttribute"in h==!!_&&(_?h.localName==_:h.nodeType==3)){e=h,a[v]=null;break}}if(e==null){if(_==null)return document.createTextNode(M);e=document.createElementNS(i,_,M.is&&M),l&&(G.__m&&G.__m(t,a),l=!1),a=null}if(_==null)$===M||l&&e.data==M||(e.data=M);else{if(a=_=="textarea"&&M.defaultValue!=null?null:a&&Vt.call(e.childNodes),!l&&a!=null)for($={},v=0;v<e.attributes.length;v++)$[(h=e.attributes[v]).name]=h.value;for(v in $)h=$[v],v=="dangerouslySetInnerHTML"?p=h:v=="children"||v in M||v=="value"&&"defaultValue"in M||v=="checked"&&"defaultChecked"in M||St(e,v,null,h,i);for(v in M)h=M[v],v=="children"?d=h:v=="dangerouslySetInnerHTML"?f=h:v=="value"?g=h:v=="checked"?b=h:l&&typeof h!="function"||$[v]===h||St(e,v,h,$[v],i);if(f)l||p&&(f.__html==p.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(p&&(e.innerHTML=""),ni(t.type=="template"?e.content:e,Zt(d)?d:[d],t,n,r,_=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&Ze(n,0),l,c),a!=null)for(v=a.length;v--;)Pn(a[v]);l&&_!="textarea"||(v="value",_=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[v]||_=="progress"&&!g||_=="option"&&g!=$[v])&&St(e,v,g,$[v],i),v="checked",b!=null&&b!=e[v]&&St(e,v,b,$[v],i))}return e}function An(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){G.__e(i,n)}}function oi(e,t,n){var r,i;if(G.unmount&&G.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||An(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){G.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&oi(r[i],t,n||typeof e.type!="function");n||Pn(e.__e),e.__c=e.__=e.__e=void 0}function ca(e,t,n){return this.constructor(e,n)}function da(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),G.__&&G.__(e,t),i=(r=!1)?null:t.__k,a=[],o=[],On(t,e=t.__k=ei(bt,null,[e]),i||Kt,Kt,t.namespaceURI,i?null:t.firstChild?Vt.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),ai(a,e,o),e.props.children=null}Vt=zt.slice,G={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(l){e=l}throw e}},Zr=0,Lt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ce({},this.state),typeof e=="function"&&(e=e(Ce({},n),this.props)),e&&Ce(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),rr(this))},Lt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),rr(this))},Lt.prototype.render=bt,Ie=[],Xr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Jr=function(e,t){return e.__v.__b-t.__v.__b},qt.__r=0,on=Math.random().toString(8),Ot="__d"+on,vt="__a"+on,Qr=/(PointerCapture)$|Capture$/i,In=0,gn=ar(!1),hn=ar(!0);var mt,J,ln,sr,Yt=0,li=[],te=G,or=te.__b,lr=te.__r,ur=te.diffed,cr=te.__c,dr=te.unmount,fr=te.__;function Ln(e,t){te.__h&&te.__h(J,e,Yt||t),Yt=0;var n=J.__H||(J.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function I(e){return Yt=1,fa(ci,e)}function fa(e,t,n){var r=Ln(mt++,2);if(r.t=e,!r.__c&&(r.__=[ci(void 0,t),function(l){var c=r.__N?r.__N[0]:r.__[0],v=r.t(c,l);c!==v&&(r.__N=[v,r.__[1]],r.__c.setState({}))}],r.__c=J,!J.__f)){var i=function(l,c,v){if(!r.__c.__H)return!0;var f=!1,p=r.__c.props!==l;if(r.__c.__H.__.some(function(h){if(h.__N){f=!0;var g=h.__[0];h.__=h.__N,h.__N=void 0,g!==h.__[0]&&(p=!0)}}),a){var d=a.call(this,l,c,v);return f?d||p:d}return!f||p};J.__f=!0;var a=J.shouldComponentUpdate,o=J.componentWillUpdate;J.componentWillUpdate=function(l,c,v){if(this.__e){var f=a;a=void 0,i(l,c,v),a=f}o&&o.call(this,l,c,v)},J.shouldComponentUpdate=i}return r.__N||r.__}function Q(e,t){var n=Ln(mt++,3);!te.__s&&ui(n.__H,t)&&(n.__=e,n.u=t,J.__H.__h.push(n))}function Ne(e){return Yt=5,Le(function(){return{current:e}},[])}function Le(e,t){var n=Ln(mt++,7);return ui(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function va(){for(var e;e=li.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Rt),t.__h.some(mn),t.__h=[]}catch(n){t.__h=[],te.__e(n,e.__v)}}}te.__b=function(e){J=null,or&&or(e)},te.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),fr&&fr(e,t)},te.__r=function(e){lr&&lr(e),mt=0;var t=(J=e.__c).__H;t&&(ln===J?(t.__h=[],J.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Rt),t.__h.some(mn),t.__h=[],mt=0)),ln=J},te.diffed=function(e){ur&&ur(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(li.push(t)!==1&&sr===te.requestAnimationFrame||((sr=te.requestAnimationFrame)||pa)(va)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),ln=J=null},te.__c=function(e,t){t.some(function(n){try{n.__h.some(Rt),n.__h=n.__h.filter(function(r){return!r.__||mn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],te.__e(r,n.__v)}}),cr&&cr(e,t)},te.unmount=function(e){dr&&dr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Rt(r)}catch(i){t=i}}),n.__H=void 0,t&&te.__e(t,n.__v))};var vr=typeof requestAnimationFrame=="function";function pa(e){var t,n=function(){clearTimeout(r),vr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);vr&&(t=requestAnimationFrame(n))}function Rt(e){var t=J,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),J=t}function mn(e){var t=J;e.__c=e.__(),J=t}function ui(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ci(e,t){return typeof t=="function"?t(e):t}var di=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],l=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?r[0]=l:o===4?r[1]=Object.assign(r[1]||{},l):o===5?(r[1]=r[1]||{})[t[++a]]=l:o===6?r[1][t[++a]]+=l+"":o?(i=e.apply(l,di(e,l,n,["",null])),r.push(i),l[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(l)}return r},pr=new Map;function ga(e){var t=pr.get(this);return t||(t=new Map,pr.set(this,t)),(t=di(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,o="",l="",c=[0],v=function(d){a===1&&(d||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,o):a===3&&(d||o)?(c.push(3,d,o),a=2):a===2&&o==="..."&&d?c.push(4,d,0):a===2&&o&&!d?c.push(5,0,!0,o):a>=5&&((o||!d&&a===5)&&(c.push(a,0,o,i),a=6),d&&(c.push(a,d,0,i),a=6)),o=""},f=0;f<n.length;f++){f&&(a===1&&v(),v(f));for(var p=0;p<n[f].length;p++)r=n[f][p],a===1?r==="<"?(v(),c=[c],a=3):o+=r:a===4?o==="--"&&r===">"?(a=1,o=""):o=r+o[0]:l?r===l?l="":o+=r:r==='"'||r==="'"?l=r:r===">"?(v(),a=1):a&&(r==="="?(a=5,i=o,o=""):r==="/"&&(a<5||n[f][p+1]===">")?(v(),a===3&&(c=c[0]),a=c,(c=c[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(v(),a=2):o+=r),a===3&&o==="!--"&&(a=4,c=c[0])}return v(),c})(e)),t),arguments,[])).length>1?t:t[0]}const u=ga.bind(ei);var pt={},fi="de",gr={};function s(e,t){var n=pt[e];return n===void 0?(gr[e]||(gr[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function ha(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return pt=i||{},fi=pt["meta.lang"]||document.documentElement.lang||"de",pt}).catch(function(){return n()})}return n()}const ma={t:s,load:ha,getLang:function(){return fi},getDict:function(){return pt}};var $t=" ",vi="−";function Xe(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?vi:"")+r}function $a(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function _a(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?$a(Xe(e/1e3,1))+$t+"kW":Xe(Math.round(e),0)+$t+"W"}function ba(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Xe(e/1e3,2)+$t+"kWh":Xe(Math.round(e),0)+$t+"Wh"}function ya(e,t){if(e==null||isNaN(e))return"–";var n=Xe(e,2);return t&&e>0&&(n="+"+n),n+$t+"CHF"}function Ae(e){return(e<10?"0":"")+e}function wa(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=Ae(n.getDate())+"."+Ae(n.getMonth()+1)+"."+n.getFullYear(),i=Ae(n.getHours())+":"+Ae(n.getMinutes());switch(t){case"1d":return r;case"dm":return Ae(n.getDate())+"."+Ae(n.getMonth()+1)+".";case"1mo":return Ae(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const S={num:Xe,w:_a,wh:ba,chf:ya,time:wa,MINUS:vi};function Qe(e){return u`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?u`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?u`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function F(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:""),n=!!e.collapsible,r=e.collapseKey?"ui.card."+e.collapseKey:null,[i,a]=I(function(){if(!n)return!0;if(r)try{var c=window.localStorage.getItem(r);if(c==="0")return!1;if(c==="1")return!0}catch{}return e.defaultOpen!==!1});function o(){var c=!i;if(a(c),r)try{window.localStorage.setItem(r,c?"1":"0")}catch{}}var l=!n||i;return u`
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
              ${e.tooltip?u`<${be} text=${e.tooltip} />`:null}
              ${e.subtitle?u`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?u`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${l?e.children:null}
      </section>`}function Dt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return u`<span class=${r}>${s(n)}</span>`}function Y(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return u`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function pi(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function ka(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function be(e){var t=I(!1),n=t[0],r=t[1],i=I(null),a=i[0],o=i[1],l=Ne(null),c=Ne(null);return Q(function(){if(!n)return;function v(_){_.key==="Escape"&&r(!1)}function f(_){c.current&&!c.current.contains(_.target)&&r(!1)}document.addEventListener("keydown",v),document.addEventListener("click",f);var p=l.current,d=c.current;if(p&&d){var h=d.getBoundingClientRect(),g=p.getBoundingClientRect(),b=h.left+h.width/2,$=Math.max(8,Math.min(b-g.width/2,window.innerWidth-8-g.width)),M=h.top-g.height-8;M<8&&(M=h.bottom+8),o({left:$,top:M})}return function(){document.removeEventListener("keydown",v),document.removeEventListener("click",f),o(null)}},[n]),u`
      <span class="tooltip-wrap" ref=${c}>
        <button type="button" class="tooltip-icon" aria-label=${e.text}
          aria-expanded=${n}
          onMouseEnter=${function(){r(!0)}}
          onMouseLeave=${function(){r(!1)}}
          onFocus=${function(){r(!0)}}
          onBlur=${function(){r(!1)}}
          onClick=${function(v){v.stopPropagation(),r(!n)}}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
            <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
            <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
          </svg>
        </button>
        ${n?u`
          <span class="tooltip-bubble" role="tooltip" ref=${l}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var Ft=[],xa=0;function ne(e,t){t=t||{};var n={id:++xa,message:e,type:t.type||"info",ttl:t.ttl||5e3};Ft.forEach(function(r){r(n)})}function Sa(){var e=I([]),t=e[0],n=e[1];return Q(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(o){return o.id!==i.id})})},i.ttl)}return Ft.push(r),function(){var i=Ft.indexOf(r);i>=0&&Ft.splice(i,1)}},[]),u`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return u`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${s("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var z={top:22,right:14,bottom:24,left:46};function gi(e){var t=I(0),n=t[0],r=t[1];return Q(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function hi(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var o=[],l=Math.ceil(e/i)*i,c=l;c<=t+i*1e-9;c+=i)o.push(Math.abs(c)<i*1e-9?0:c);return o}function Rn(e){return Math.abs(e)>=1e3?S.num(e/1e3,1).replace(/\.0$/,"")+"k":S.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function Ca(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function Ma(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var o=0;o<r;o++)a.push(o);else for(var l=0;l<i;l++)a.push(Math.round(l*(r-1)/(i-1)));var c=[],v=null,f=-1;return a.forEach(function(p){if(p!==f){f=p;var d=n(e[p].t);d!==v&&(v=d,c.push(p))}}),c}function Na(e){var t=0,n=0;return(e&&e.segments||[]).forEach(function(r){var i=r.value||0;i>0?t+=i:n+=i}),[t,n]}function mi(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function $i(e){return u`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return u`
            <g key=${"y"+t}>
              <line x1=${z.left} x2=${e.width-z.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${z.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${Rn(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-z.right-34?null:u`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${z.left} x2=${z.left} y1=${z.top-6} y2=${e.height-z.bottom}
          class="ch-axis" />
        <text x=${z.left-40} y=${z.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-z.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function hr(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function Ea(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function Ta(e,t,n,r){var i=Ea(e,t),a=[];if(i.length<2)return a;var o=[];function l(){if(o.length>=2){var g="M"+n(o[0].t).toFixed(1)+" "+r(o[0].top).toFixed(1),b;for(b=1;b<o.length;b++)g+="L"+n(o[b].t).toFixed(1)+" "+r(o[b].top).toFixed(1);for(b=o.length-1;b>=0;b--)g+="L"+n(o[b].t).toFixed(1)+" "+r(o[b].bottom).toFixed(1);a.push(g+"Z")}o=[]}for(var c=0;c<i.length;c++){var v=i[c],f=v.top-v.bottom;if(f>0?o.push(v):l(),c<i.length-1){var p=i[c+1],d=p.top-p.bottom;if(f>0!=d>0&&f!==d){var h=f/(f-d);o.push({t:v.t+(p.t-v.t)*h,top:v.top+(p.top-v.top)*h,bottom:v.bottom+(p.bottom-v.bottom)*h}),f>0&&l()}}}return l(),a}function _i(e,t,n,r){var i=n>t-150;return u`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,o){return u`
            <div key=${o} class="ch-hover-line">
              ${a.color?u`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function Xt(e){var t=Ne(null),n=gi(t),r=I(null),i=r[0],a=r[1],o=e.height||180,l=e.series||[],c=e.timeWindow;if(!c){var v=1/0,f=-1/0;l.forEach(function(y){y.points.forEach(function(R){R.t<v&&(v=R.t),R.t>f&&(f=R.t)})}),c=v===1/0?[0,1]:[v,f]}var p=c[0],d=c[1]>c[0]?c[1]:c[0]+1,h=[];l.forEach(function(y){y.points.forEach(function(R){h.push(R.y)})});var g=mi(h,!1),b=Math.max(10,n-z.left-z.right),$=o-z.top-z.bottom;function M(y){return z.left+(y-p)/(d-p)*b}function _(y){return z.top+(1-(y-g[0])/(g[1]-g[0]))*$}var A=hi(g[0],g[1],4),D=e.xTickFormat||function(y){return S.time(y,"hm")},N=Ca(p,d,Math.max(2,Math.min(5,Math.floor(b/90)))).map(function(y){return{x:M(y),label:D(y)}});function k(y){var R=[],B=[];y.forEach(function(K){K.y===null||K.y===void 0?(B.length&&R.push(B),B=[]):B.push(K)}),B.length&&R.push(B);var q=_(Math.max(0,g[0]));return R.map(function(K){var m=K.map(function(O,P){return(P===0?"M":"L")+M(O.t).toFixed(1)+" "+_(O.y).toFixed(1)}).join(""),C=m+"L"+M(K[K.length-1].t).toFixed(1)+" "+q.toFixed(1)+"L"+M(K[0].t).toFixed(1)+" "+q.toFixed(1)+"Z";return{line:m,area:C}})}function H(y){if(t.current){var R=t.current.getBoundingClientRect(),B=y.clientX-R.left;if(B<z.left||B>n-z.right){a(null);return}var q=p+(B-z.left)/b*(d-p);a(q)}}var x=null,E=[];return i!==null&&(E.push({text:D(i)}),l.forEach(function(y){var R=hr(y.points,i);R>=0&&(x===null&&(x=M(y.points[R].t)),E.push({color:y.color,text:(y.label?y.label+": ":"")+(e.yFormat||Rn)(y.points[R].y)+(e.yFormat?"":" "+e.yUnit)}))}),x===null&&(x=M(i))),u`
      <div class="chart" ref=${t}
        onPointerMove=${H}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${$i} width=${n} height=${o} sy=${_}
              yTicks=${A} xTicks=${N}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(y,R){return Ta(y.top,y.bottom,M,_).map(function(B,q){return u`<path key=${R+"-"+q} class="ch-band" d=${B} fill=${y.color} stroke="none"/>`})})}
            ${l.map(function(y,R){return k(y.points).map(function(B,q){return u`
                  <g key=${R+"-"+q}>
                    ${y.fill?u`<path class="ch-area" d=${B.area} fill=${y.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${B.line} fill="none" stroke=${y.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${x!==null?u`
              <line x1=${x} x2=${x} y1=${z.top-4} y2=${o-z.bottom} class="ch-crosshair"/>
              ${l.map(function(y,R){var B=hr(y.points,i);return B>=0?u`
                  <circle key=${R} cx=${M(y.points[B].t)} cy=${_(y.points[B].y)} r="3.5"
                    fill=${y.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${x!==null?_i(t,n,x,E):null}`:null}
      </div>`}function bi(e){var t=Ne(null),n=gi(t),r=I(null),i=r[0],a=r[1],o=e.height||180,l=e.points||[];function c(m){if(!m.bars)return[m.y];var C=[];return m.bars.forEach(function(O){Na(O).forEach(function(P){C.push(P)})}),C}var v=l.reduce(function(m,C){return C.bars?Math.max(m,C.bars.length):m},1),f=[];l.forEach(function(m){c(m).forEach(function(C){f.push(C)})});var p=mi(f,!0),d=Math.max(10,n-z.left-z.right),h=o-z.top-z.bottom;function g(m){return z.top+(1-(m-p[0])/(p[1]-p[0]))*h}var b=l.length,$=b>0?d/b:d;function M(m){return z.left+(m+.5)*$}var _=Math.max(1,Math.min($-1,$*.72,46)),A=hi(p[0],p[1],4),D=e.xTickFormat||function(m){return S.time(m,"hm")},N=Ma(l,d,D).map(function(m){return{x:M(m),label:D(l[m].t)}}),k=g(0),H=l.length+"|"+(l.length?l[0].t+"-"+l[l.length-1].t:"")+"|"+v+"|"+(e.yUnit||"");function x(m){if(!t.current||!b){a(null);return}var C=t.current.getBoundingClientRect(),O=m.clientX-C.left;if(O<z.left||O>n-z.right){a(null);return}var P=Math.floor((O-z.left)/$);a(P<0?0:P>=b?b-1:P)}var E=e.yFormat||Rn;function y(m){return E(m)+(e.yFormat?"":" "+(e.yUnit||""))}var R=null,B=[];if(i!==null&&l[i]){var q=l[i];if(R=M(i),B.push({text:D(q.t)}),q.bars)q.bars.forEach(function(m){(m.segments||[]).forEach(function(C){if(C.value){var O=e.signedMagnitude?Math.abs(C.value):C.value;B.push({color:C.color,text:(C.label?C.label+": ":"")+y(O)})}})});else if(q.y!==null&&q.y!==void 0){var K=e.signedMagnitude?Math.abs(q.y):q.y;B.push({color:q.color||e.color,text:(q.label?q.label+": ":"")+y(K)})}}return u`
      <div class="chart" ref=${t}
        onPointerMove=${x}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${$i} width=${n} height=${o} sy=${g}
              yTicks=${A} xTicks=${N}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${H}>
            ${l.map(function(m,C){var O=i===C?"1":"0.85";if(m.bars){var P=M(C)-_/2,we=_/v;return u`<g key=${C}>${m.bars.map(function(rt,Fe){var Be=P+Fe*we+1,me=Math.max(1,we-2),ke=0,le=0;return(rt.segments||[]).map(function(T,re){var V=T.value||0;if(!V)return null;var ee,ve;V>0?(ee=ke,ve=ke+V,ke=ve):(ee=le,ve=le+V,le=ve);var it=Math.min(g(ee),g(ve)),xe=Math.max(1,Math.abs(g(ve)-g(ee)));return u`
                      <rect key=${Fe+"-"+re}
                        class=${"ch-bar "+(V>0?"ch-bar-up":"ch-bar-down")}
                        x=${Be.toFixed(1)} y=${it.toFixed(1)}
                        width=${me.toFixed(1)} height=${xe.toFixed(1)} rx="1.5"
                        fill=${T.color} opacity=${O}/>`})})}</g>`}if(m.y===null||m.y===void 0)return null;var ge=M(C)-_/2,he=g(m.y),ce=Math.min(he,k),nt=Math.max(1,Math.abs(he-k));return u`
                <rect key=${C} class=${"ch-bar "+(m.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${ge.toFixed(1)} y=${ce.toFixed(1)}
                  width=${_.toFixed(1)} height=${nt.toFixed(1)} rx="2"
                  fill=${m.color||e.color||"var(--c-consumption)"}
                  opacity=${O}/>`})}
            </g>
            <line x1=${z.left} x2=${n-z.right} y1=${k} y2=${k} class="ch-zero-strong"/>
          </svg>
          ${R!==null?_i(t,n,R,B):null}`:null}
      </div>`}var Ia=[10,25,50];function Pa(e){var t=I(0),n=t[0],r=t[1],i=I(e.pageSize||10),a=i[0],o=i[1],l=e.rows||[],c=l.length,v=Math.max(1,Math.ceil(c/a)),f=Math.min(n,v-1),p=f*a,d=Math.min(p+a,c),h=l.slice(p,d);return u`
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
            ${c===0?u`
              <tr><td class="table-empty" colspan=${e.columns.length}>${s("common.nodata")}</td></tr>`:h.map(function(g,b){return u`
                  <tr key=${g.id!==void 0?g.id:p+b}>
                    ${e.columns.map(function($){return u`
                        <td key=${$.key} class=${$.align==="right"?"ta-r":""}>
                          ${$.render?$.render(g):g[$.key]}
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
                ${Ia.map(function(g){return u`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${s("table.pageinfo",{from:c===0?0:p+1,to:d,total:c})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${s("table.prev")}
              disabled=${f===0} onClick=${function(){r(f-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${s("table.next")}
              disabled=${f>=v-1} onClick=${function(){r(f+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function yi(e,t){var n=e.split("/").filter(function(v){return v!==""}),r=t.split("/").filter(function(v){return v!==""}),i={},a;for(a=0;a<n.length;a++){var o=n[a];if(o.charAt(0)===":"){var l=o.slice(-1)==="?",c=o.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(l)continue;return null}i[c]=decodeURIComponent(r[a])}else if(o!==r[a])return null}return r.length>n.length?null:i}function $n(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=yi(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function Oa(e){var t=I(function(){return $n(e)}),n=t[1];return Q(function(){function r(){n($n(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const wi={match:yi,parse:$n,useRoute:Oa,navigate:function(e){window.location.hash="#"+e}};function Dn(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var Bt=[],Wt=!0,_n=null;function ki(e){e&&(_n=Date.now()),e!==Wt&&(Wt=e,Bt.forEach(function(t){t(Wt,_n)}))}var Aa=3,bn=0;function xi(e){return e instanceof TypeError||e&&e.name==="AbortError"}function Si(){bn=0,ki(!0)}function Ci(e){e&&e.optional||(bn++,bn>=Aa&&ki(!1))}var La=8e3,Ra=2,un=0,yn=[];function Mi(){for(;un<Ra&&yn.length>0;){var e=yn.shift();un++,e.run().then(e.resolve,e.reject).finally(function(){un--,Mi()})}}function Ni(e){return new Promise(function(t,n){yn.push({run:e,resolve:t,reject:n}),Mi()})}function Fn(e,t){return t=t||{},Ni(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},La);return fetch(Dn()+e,{signal:n.signal}).then(function(i){if(Si(),!i.ok&&t.errorBody)return i.json().catch(function(){return null}).then(function(a){var o=new Error(a&&a.error||"HTTP "+i.status+" "+e);throw o.body=a,o});if(!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw xi(i)&&Ci(t),i}).finally(function(){clearTimeout(r)})})}function de(e,t){return Fn(e,t)}function Da(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function o(){n!==null&&(clearInterval(n),n=null)}function l(){document.hidden?o():a()}return document.addEventListener("visibilitychange",l),a(),function(){r=!0,o(),document.removeEventListener("visibilitychange",l)}}function cn(e,t){return Ni(function(){return fetch(Dn()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(Si(),!n.ok){var a=new Error(i&&i.error||"HTTP "+n.status);throw a.body=i,a}return i})}).catch(function(n){throw xi(n)&&Ci(),n})})}function Ct(e){return e==null||String(e).trim()===""}function je(e){return Fn("/cm?cmnd="+encodeURIComponent(e))}const U={base:Dn,get:de,post:cn,restartDevice:function(){return je("Restart 1")},getWifiConfig:function(){return Promise.all([je("SSId1"),je("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return Ct(e.ssid1)||t.push("SSId1 "+e.ssid1),Ct(e.password1)||t.push("Password1 "+e.password1),Ct(e.ssid2)||t.push("SSId2 "+e.ssid2),Ct(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):je("Backlog "+t.join(";"))},wifiScanStart:function(){return je("WifiScan 1")},wifiScanResult:function(){return je("WifiScan")},getConfig:function(){return de("/api/config")},postConfig:function(e){return cn("/api/config",e)},getConfigRaw:function(){return Fn("/api/config",{text:!0})},getPower:function(){return de("/api/power")},getEnergy:function(e,t,n,r){if(e&&e!=="15m")throw new Error("getEnergy: res must be 15m");var i="/api/energy?res=15m&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),de(i)},getMeta:function(){return de("/api/meta")},getMeter:function(){return de("/api/meter")},getSite:function(){return de("/site")},getLoads:function(){return de("/loads")},getProductions:function(){return de("/productions")},getModbus:function(){return de("/api/modbus")},modbusRead:function(e){return de("/api/modbus/read?"+e,{errorBody:!0})},modbusWrite:function(e){return cn("/api/modbus/write",e)},setLoadState:function(e,t){return de("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},poll:Da,onStatus:function(e){return Bt.push(e),function(){var t=Bt.indexOf(e);t>=0&&Bt.splice(t,1)}},isOnline:function(){return Wt},lastOk:function(){return _n}};var Fa="\uFEFF",Bn=";",mr=`\r
`;function Ba(e){if(e==null)return"";var t=String(e);return t.indexOf(Bn)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function $r(e){return(e||[]).map(Ba).join(Bn)}function Wa(e){var t=String(e||"");t.charCodeAt(0)===65279&&(t=t.slice(1));var n=[],r=[],i="",a=!1,o=0;function l(){r.push(i),i=""}function c(){l(),n.push(r),r=[]}for(;o<t.length;){var v=t[o];if(a){if(v==='"'){if(t[o+1]==='"'){i+='"',o+=2;continue}a=!1,o++;continue}i+=v,o++;continue}if(v==='"'&&i===""){a=!0,o++;continue}if(v===Bn){l(),o++;continue}if(v==="\r"){o++;continue}if(v===`
`){c(),o++;continue}i+=v,o++}return(i!==""||r.length)&&c(),n}function Ei(e,t){var n=[$r(e)];return(t||[]).forEach(function(r){n.push($r(r))}),Fa+n.join(mr)+mr}function Ua(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var Wn="gplug-archive",ja=3,gt=900,_r=384,Ha=60,Ka=2*86400,za=50,qa="2",Ya=["1","2"],br={},yr=!1,He=null,wn=!1;function Ga(){return typeof indexedDB<"u"?indexedDB:typeof globalThis<"u"?globalThis.indexedDB:void 0}function et(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error||new Error("idb request failed"))}})}function Un(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=e.onerror=function(){n(e.error||new Error("idb tx failed"))}})}function ye(){if(He)return He;var e=Ga();return e?(He=new Promise(function(t,n){var r;try{r=e.open(Wn,ja)}catch(i){n(i);return}r.onupgradeneeded=function(){var i=r.result;i.objectStoreNames.contains("e15")||i.createObjectStore("e15",{keyPath:["siteId","ts"]}),i.objectStoreNames.contains("vz15")&&i.deleteObjectStore("vz15"),i.objectStoreNames.contains("meta")||i.createObjectStore("meta",{keyPath:"siteId"}),i.objectStoreNames.contains("live")||i.createObjectStore("live",{keyPath:["siteId","kind","id"]})},r.onsuccess=function(){var i=r.result;i.onversionchange=function(){i.close(),He=null},t(i)},r.onerror=function(){n(r.error||new Error("idb open failed"))},r.onblocked=function(){n(new Error("idb blocked"))}}).catch(function(t){throw wn=!0,He=null,t}),He):(wn=!0,Promise.reject(new Error("IndexedDB unavailable")))}function Va(){return wn?Promise.resolve(!1):ye().then(function(){return!0},function(){return!1})}function tt(e,t,n){return e.transaction(t,n).objectStore(t)}function Za(e){return{siteId:e,firstE15Ts:null,lastE15Ts:null,gaps:[],count:0,syncedAt:null}}function jn(e){return ye().then(function(t){return et(tt(t,"meta","readonly").get(e))}).then(function(t){return t||Za(e)})}function Ti(e){return ye().then(function(t){var n=t.transaction("meta","readwrite");return n.objectStore("meta").put(e),Un(n).then(function(){return e})})}function Xa(){return ye().then(function(e){return et(tt(e,"meta","readonly").getAllKeys())}).then(function(e){return(e||[]).map(String)})}function Hn(e,t,n){var r=t??0,i=n??9999999999;return IDBKeyRange.bound([e,r],[e,i])}function Ja(e,t,n){return ye().then(function(r){return et(tt(r,"e15","readonly").getAll(Hn(e,t,n)))}).then(function(r){return(r||[]).map(function(i){var a={ts:i.ts,imp_wh:i.imp_wh,exp_wh:i.exp_wh,pv_wh:i.pv_wh};return Kn(a,i),i.partial&&(a.partial=!0),a})})}function Ii(e,t){return!t||!t.length?Promise.resolve(0):ye().then(function(n){var r=n.transaction("e15","readwrite"),i=r.objectStore("e15"),a=0;return t.forEach(function(o){if(!(!o||typeof o.ts!="number")){var l={siteId:e,ts:o.ts,imp_wh:ht(o.imp_wh),exp_wh:ht(o.exp_wh),pv_wh:ht(o.pv_wh)};Kn(l,o),o.partial&&(l.partial=!0),i.put(l),a++}}),Un(r).then(function(){return a})})}function ht(e){return e==null||isNaN(e)?null:Number(e)}var Qa=["bat_chg_wh","bat_dis_wh"];function Kn(e,t){Qa.forEach(function(n){var r=ht(t[n]);r!==null&&(e[n]=r)})}function es(e){for(var t=[],n=1;n<e.length;n++){var r=e[n-1],i=e[n];if(i-r>gt&&(t.push([r+gt,i-gt]),t.length>=za))break}return t}function zn(e){return ye().then(function(t){return et(tt(t,"e15","readonly").getAllKeys(Hn(e)))}).then(function(t){var n=(t||[]).map(function(r){return r[1]});return n.sort(function(r,i){return r-i}),{count:n.length,firstE15Ts:n.length?n[0]:null,lastE15Ts:n.length?n[n.length-1]:null,gaps:es(n)}})}function qn(e){return Promise.all([jn(e),zn(e),ts()]).then(function(t){var n=t[0],r=t[1];return{siteId:e,firstE15Ts:r.firstE15Ts,lastE15Ts:r.lastE15Ts,count:r.count,gaps:r.gaps,syncedAt:n.syncedAt,days:r.firstE15Ts===null?0:Math.max(1,Math.round((r.lastE15Ts-r.firstE15Ts)/86400)),estimate:t[2]}})}function ts(){return typeof navigator>"u"||!navigator.storage||!navigator.storage.estimate?Promise.resolve(null):navigator.storage.estimate().then(function(e){return e},function(){return null})}function ns(){return yr||(yr=!0,typeof navigator>"u"||!navigator.storage||!navigator.storage.persist)?Promise.resolve(null):navigator.storage.persist().then(function(e){return e},function(){return null})}function rs(e,t){var n;return jn(t).then(function(r){n=r;var i=0;return r.lastE15Ts!==null&&r.lastE15Ts!==void 0&&(i=r.lastE15Ts+gt,br[t]||(i=Math.max(0,r.lastE15Ts-Ka))),br[t]=!0,is(e,t,i)}).then(function(){return zn(t)}).then(function(r){return n.firstE15Ts=r.firstE15Ts,n.lastE15Ts=r.lastE15Ts,n.count=r.count,n.gaps=r.gaps,n.syncedAt=Math.floor(Date.now()/1e3),Ti(n)}).then(function(){return ns()}).then(function(){return qn(t)})}function is(e,t,n){var r=0;function i(a){return r>=Ha?Promise.resolve():(r++,e.getEnergy("15m",_r,a).then(function(o){return!Array.isArray(o)||!o.length?null:Ii(t,o).then(function(){var l=o[o.length-1].ts;return o.forEach(function(c){c.ts>l&&(l=c.ts)}),o.length<_r?null:i(l+gt)})}))}return i(n)}function as(e){return IDBKeyRange.bound([e,"",""],[e,"￿","￿"])}function wr(e,t,n){var r=Object.keys(n||{});return!e||!r.length?Promise.resolve(0):ye().then(function(i){var a=i.transaction("live","readwrite"),o=a.objectStore("live");return r.forEach(function(l){for(var c=n[l]||[],v=[],f=0;f<c.length;f++)v.push(c[f].t,ht(c[f].y));o.put({siteId:e,kind:t,id:String(l),pts:v})}),Un(a).then(function(){return r.length})})}function kr(e,t,n){var r=n??0;return ye().then(function(i){return et(tt(i,"live","readonly").getAll(as(e)))}).then(function(i){var a={};return(i||[]).forEach(function(o){if(!(!o||o.kind!==t||!Array.isArray(o.pts))){for(var l=[],c=0;c+1<o.pts.length;c+=2)o.pts[c]<r||l.push({t:o.pts[c],y:o.pts[c+1]});l.length&&(a[o.id]=l)}}),a})}function ss(e){return ye().then(function(t){return et(tt(t,"e15","readonly").getAll(Hn(e)))}).then(function(t){var n=[];return(t||[]).sort(function(r,i){return r.ts-i.ts}).forEach(function(r){n.push(["e",r.ts,st(r.imp_wh),st(r.exp_wh),st(r.pv_wh),r.partial?"1":"0",st(r.bat_chg_wh),st(r.bat_dis_wh)])}),Ei([Wn,qa,e],n)})}function st(e){return e==null?"":String(e)}function os(e,t){var n=Wa(e);if(!n.length||n[0][0]!==Wn)return Promise.reject(new Error("not a gplug archive export"));if(Ya.indexOf(n[0][1])<0)return Promise.reject(new Error("unsupported export format "+n[0][1]));var r=n[0][2];if(t&&r!==t)return Promise.reject(new Error("site mismatch: file "+r+", device "+t));for(var i=t||r,a=[],o=1;o<n.length;o++){var l=n[o];if(!(!l||!l.length)&&l[0]==="e"){var c={ts:Number(l[1]),imp_wh:ot(l[2]),exp_wh:ot(l[3]),pv_wh:ot(l[4])};l[5]==="1"&&(c.partial=!0),Kn(c,{bat_chg_wh:ot(l[6]),bat_dis_wh:ot(l[7])}),a.push(c)}}return Ii(i,a).then(function(){return zn(i)}).then(function(v){return jn(i).then(function(f){return f.firstE15Ts=v.firstE15Ts,f.lastE15Ts=v.lastE15Ts,f.count=v.count,f.gaps=v.gaps,Ti(f)})}).then(function(){return qn(i)})}function ot(e){return e===""||e===void 0?null:Number(e)}var ls=900*1e3,Z={available:null,siteId:null,coverage:null,error:null,syncing:!1,otherSites:[]},Ut=[],dt=null,xr=null;function Pi(){return Z}function jt(){Ut.forEach(function(e){try{e(Z)}catch{}})}function Oi(e){return Ut.push(e),function(){var t=Ut.indexOf(e);t>=0&&Ut.splice(t,1)}}function us(e){return dt||(dt=Va().then(function(t){return Z.available=t,t?e.getSite().then(function(n){return Z.siteId=n&&n.id?String(n.id):null,Z.siteId?Xa().then(function(r){Z.otherSites=r.filter(function(i){return i!==Z.siteId})},function(){}).then(function(){return kn(e)}).then(function(){return xr===null&&typeof setInterval=="function"&&(xr=setInterval(function(){kn(e)},ls)),Z}):(jt(),Z)},function(){return jt(),Z}):(jt(),Z)}),dt)}function kn(e){return!Z.available||!Z.siteId||Z.syncing?Promise.resolve(Z):(Z.syncing=!0,rs(e,Z.siteId).then(function(t){Z.coverage=t,Z.error=null},function(t){Z.error=t&&t.message?t.message:"sync failed"}).then(function(){return Z.syncing=!1,jt(),Z}))}function Jt(){return dt||Promise.resolve(Z)}function cs(e){return kn(e)}var Ai={overview:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,modbus:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="3.5" y="6" width="13" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 6V3.8M10 6V3.8M13.5 6V3.8M6.5 14v2.2M10 14v2.2M13.5 14v2.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,settings:u`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function Sr(){return u`
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
      </a>`}var ds=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/modbus",key:"nav.modbus",icon:"modbus",gate:"modbus",active:function(e){return e.indexOf("/modbus")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function Cr(e){return u`
      <nav class="nav" aria-label=${s("nav.menu")}>
        ${ds.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="modbus"||e.showModbus)}).map(function(t){var n=t.active(e.path);return u`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${Ai[t.icon]}
              <span>${s(t.key)}</span>
            </a>`})}
      </nav>`}function fs(e){var t=wi.useRoute(e.routes),n=I(!1),r=n[0],i=n[1],a=I(!1),o=a[0],l=a[1],c=I(null),v=c[0],f=c[1],p=I(!1),d=p[0],h=p[1],g=I(!1),b=g[0],$=g[1];Q(function(){return U.onStatus(function(_,A){_?f(null):(ne(s("error.offline"),{type:"error"}),f(A?new Date(A):new Date))})},[]),Q(function(){var _=!1;function A(N){!_&&N.otherSites&&N.otherSites.length&&(_=!0,ne(s("banner.archive_site_changed",{id:N.siteId}),{type:"warn"}))}var D=Oi(A);return Jt().then(A),D},[]),Q(function(){return U.poll(function(){U.getMeta().then(function(_){l(!!_&&typeof _.time=="number"&&_.time<1e9)}).catch(function(){})},6e4)},[]),Q(function(){U.getMeter().then(function(_){h(!!(_&&_.values))}).catch(function(){})},[]),Q(function(){U.getModbus().then(function(_){$(Array.isArray(_)&&_.length>0)}).catch(function(){})},[]),Q(function(){i(!1)},[t.path]);var M=t.route.component;return u`
      <div class="shell">
        <aside class="sidebar">
          <${Sr} />
          <${Cr} path=${t.path} showMeter=${d} showModbus=${b} />
          <div class="sidebar-foot">${"v0.1.5"}</div>
        </aside>

        <div class="topbar">
          <${Sr} />
          <button class="burger" aria-label=${s("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${Ai.burger}</button>
        </div>
        ${r?u`
          <div class="drawer">
            <${Cr} path=${t.path} showMeter=${d} showModbus=${b} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${o?u`<div class="banner banner-warn">${s("banner.rtc")}</div>`:null}
          ${v?u`
            <div class="stale-note">${s("common.stale",{time:S.time(Math.floor(v.getTime()/1e3),"hm")})}</div>`:null}
          <${M} params=${t.params} />
        </main>

        <${Sa} />
      </div>`}var vs=["imp_wh","exp_wh","pv_wh"],ps=["grid_ht_wh","grid_nt_wh"],gs=["bat_chg_wh","bat_dis_wh"];function Ke(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function Yn(e,t){t=t||{};var n=ze(t.grid_import_chf_kwh,.26),r=ze(t.grid_feedin_chf_kwh,.18),i=e.imp_wh,a=e.exp_wh,o=e.pv_wh,l={};for(var c in e)l[c]=e[c];if(l.cost_import_chf=i==null?null:Ke(i/1e3*n),l.revenue_feedin_chf=a==null?null:Ke(a/1e3*r),l.saving_selfuse_chf=o==null||a===null||a===void 0?null:Ke(Math.max(0,(o-a)/1e3*(n-r))),Qt(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var v=ze(t.grid_import_ht_chf_kwh,n),f=ze(t.grid_import_nt_chf_kwh,n);l.cost_import_ht_chf=Ke(e.grid_ht_wh/1e3*v),l.cost_import_nt_chf=Ke(e.grid_nt_wh/1e3*f),l.cost_import_chf=Ke(l.cost_import_ht_chf+l.cost_import_nt_chf)}return l}function ze(e,t){return e==null||isNaN(e)?t:Number(e)}var Mt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Li(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return Li(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=Mt[i.slice(0,a)],l=Mt[i.slice(a+1)];if(o!==void 0&&l!==void 0){if(o<=l){if(t>=o&&t<=l)return!0}else if(t>=o||t<=l)return!0}}else if(Mt[i]!==void 0&&Mt[i]===t)return!0}return!1}function Qt(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function hs(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,o=0;o<a.length;o++){var l=a[o]||{};if(Li(l.days,r)&&i>=ze(l.from,0)&&i<ze(l.to,0))return!0}return!1}function Ri(e,t){if(!Qt(t))return e;var n=e.imp_wh;if(n==null)return e;var r=Math.max(0,n),i={};for(var a in e)i[a]=e[a];return hs(e.ts,t)?(i.grid_ht_wh=r,i.grid_nt_wh=0):(i.grid_ht_wh=0,i.grid_nt_wh=r),i}function ms(e,t){var n={ts:e},r=!1;return vs.forEach(function(i){var a=0,o=!1,l=!1;t.forEach(function(c){var v=c[i];v==null?l=!0:(a+=v,o=!0)}),n[i]=o?a:null,o&&l&&(r=!0)}),ps.concat(gs).forEach(function(i){var a=0,o=!1;t.forEach(function(l){var c=l[i];c!=null&&(a+=c,o=!0)}),o&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function $s(e){return e-e%3600}function _s(e){var t=e-xn(e,86400),n=xn(Math.floor(t/86400)+3,7);return t-n*86400}function xn(e,t){return(e%t+t)%t}function bs(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function ys(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function lt(e,t,n){var r={},i=[];(e||[]).forEach(function(o){var l=t(o.ts);r[l]||(r[l]=[],i.push(l)),r[l].push(o)});var a=i.map(function(o){return Yn(ms(Number(o),r[o]),n)});return a.sort(function(o,l){return o.ts-l.ts}),a}function Mr(e,t,n,r){if(e=e||[],Qt(r)&&t==="15m"&&(e=e.map(function(a){return Ri(a,r)})),t===n){var i=e.map(function(a){return Yn(a,r)});return i.sort(function(a,o){return a.ts-o.ts}),i}switch(n){case"1h":return lt(e,$s,r);case"1w":return lt(e,_s,r);case"1q":return lt(e,ys,r);case"1mo":return lt(e,bs,r);case"1d":default:return lt(e,function(a){return a-xn(a,86400)},r)}}function Sn(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function ws(e){if(e=(e||[]).filter(function(l){return l!=null&&!isNaN(l)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=Sn(e.slice(0,t)),r=Sn(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",o=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:o}}function ks(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function xs(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function Ee(e){return e==null||isNaN(e)?null:Number(e)}function Cn(e){return e<0?0:e>1?1:e}function Gn(e){return Ee(e.bat_chg_wh)||0}function Vn(e){return Ee(e.bat_dis_wh)||0}function Ss(e){return e.some(function(t){return t.bat_chg_wh!=null||t.bat_dis_wh!=null})}function Zn(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function Mn(e,t){t=t||{};var n=Ee(t.co2);e=e||[];var r=e.length,i=0,a=0,o=0,l=0,c=0,v=0,f=0;e.forEach(function(_){if(Zn(_)){v++;return}i+=_.pv_wh,a+=_.exp_wh,o+=_.imp_wh,l+=Gn(_),c+=Vn(_),f++});var p=r>0&&v/r>.2,d={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:p};if(r===0||p||f===0)return d;var h=Math.max(0,i-a),g=i-a+o+c-l;d.autarky=g>0?Cn(Math.max(0,g-o)/g):null,d.selfuse=i>0?Cn(h/i):null;var b=Yn({imp_wh:o,exp_wh:a,pv_wh:i},t.tariffs||{}),$=b.saving_selfuse_chf||0,M=b.revenue_feedin_chf||0;return d.savingParts={selfuse:$,feedin:M},d.savingChf=Math.round(($+M)*100)/100,d.co2Kg=n&&n>0?h/1e3*n/1e3:null,d}function Cs(e,t){if(!e)return null;t=t||{};var n=t.pv!==!1,r=t.bat!==!1,i=Ee(e.pv_w),a=Ee(e.bat_w),o=Ee(e.grid_w),l=n&&i===null,c=r&&a===null,v=o===null,f=n&&!l?Math.max(0,i):0,p=r&&!c?a:0,d=v?0:o;function h(D,N){return N?"unknown":D<1?"zero":"ok"}function g(D,N){return{watts:N?null:D,state:h(D,N)}}var b={},$=[];n&&(b.pv=g(f,l),$.push({node:"pv",dir:"in",watts:f,state:h(f,l)})),r&&(b.bat=g(Math.abs(p),c),$.push({node:"bat",dir:p<0?"out":"in",watts:Math.abs(p),state:h(Math.abs(p),c)}));var M=Math.max(0,f+p+d);b.haus=g(M,v||l||c);var _=d>0?"in":"out",A=Math.abs(d);return b.netz=g(A,v),$.push({node:"netz",dir:_,watts:A,state:h(A,v)}),{nodes:b,edges:$}}function Ms(e){if(!e)return null;var t=e.nodes;if(t.netz.state==="unknown"||t.haus.state==="unknown")return{key:"flow.status_unknown",vars:{}};var n=0,r=0,i=0;e.edges.forEach(function(v){v.node==="netz"&&(v.dir==="in"?n+=v.watts:r+=v.watts),v.node==="bat"&&v.dir==="out"&&(i+=v.watts)});var a=t.pv?t.pv.watts:0,o=t.haus.watts,l=Math.max(0,a-r-i),c=o>=1?Math.round(Cn(l/o)*100):a>=1?100:0;return r>=1?{key:"flow.status_export",vars:{pct:c,w:r}}:n>=1?l>=1?{key:"flow.status_import_pv",vars:{pct:c,w:n}}:{key:"flow.status_import",vars:{w:n}}:l>=1?{key:"flow.status_covered",vars:{pct:c}}:{key:"flow.status_idle",vars:{}}}var Ns={"comp.pv":"var(--c-production)","comp.load":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-export-fill)"};function fe(e,t){return{key:e,value:Math.max(0,t||0),color:Ns[e]}}function Es(e){if(!e)return{cover:[],usage:[],unknown:!0};var t=Ee(e.pv_w),n=Ee(e.bat_w),r=Ee(e.grid_w),i=t===null||r===null,a=t===null?0:t,o=n===null?0:n,l=r===null?0:r,c=Math.max(0,l),v=Math.max(0,-l),f=Math.max(0,o),p=Math.max(0,-o),d=Math.max(0,a-v-p),h=d+f+c;return{cover:[fe("comp.pv",d),fe("comp.battery",f),fe("comp.grid",c)],usage:[fe("comp.load",h),fe("comp.charge",p),fe("comp.feedin",v)],unknown:i}}function Ts(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(d){Zn(d)||(t+=d.pv_wh,n+=d.exp_wh,r+=d.imp_wh,i+=Gn(d),a+=Vn(d),o++)}),o===0)return{cover:[],usage:[],unknown:!0,battery:!1};var l=Ss(e),c=Math.max(0,t-n-i),v=c+a+r,f=[fe("comp.pv",c)],p=[fe("comp.load",v)];return l&&(f.push(fe("comp.battery",a)),p.push(fe("comp.charge",i))),f.push(fe("comp.grid",r)),p.push(fe("comp.feedin",n)),{cover:f,usage:p,unknown:!1,battery:l}}function Is(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function Ps(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(c){Zn(c)||(t+=c.pv_wh,n+=c.exp_wh,r+=c.imp_wh,i+=Gn(c),a+=Vn(c),o++)}),o===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var l=Math.max(0,t-n);return{prodSelf:l,prodFeedin:Math.max(0,n),consSelf:Math.max(0,t-n-i+a),consImport:Math.max(0,r)}}var dn=900,Di=90;function Fi(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function Nr(e){return e.friendlyName||e.name||e.id||"–"}function Er(e){return e.friendlyName||e.name||e.id||"–"}function _t(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function Os(e,t){if(!e||e.stale!==!0)return null;var n=typeof e.lastUpdate=="number"?e.lastUpdate:null;if(n===null)return s("prod.stale_unknown");var r=t-n>86400?"15m":"hm";return s("prod.stale",{time:S.time(n,r)})}function Bi(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function Pe(e){return e==null||isNaN(e)?null:Number(e)}function Wi(e){var t=_t(e),n=Pe(e.soc),r=Pe(e.capacity);return n!==null&&(n<0||n>100)&&(n=null),{dir:t===null?null:t>=1?"discharge":t<=-1?"charge":"idle",soc:n,capacity:r!==null&&r>0?r:null,storedWh:n!==null&&r!==null&&r>0?r*n/100:null}}function As(e){var t=0,n=0,r=0,i=0,a=!0;return(e||[]).forEach(function(o){if(Bi(o)){var l=Wi(o);l.soc!==null&&(l.capacity!==null?(r+=l.soc*l.capacity,i+=l.capacity):a=!1,n+=l.soc,t++)}}),t?a?r/i:n/t:null}var Ls={charge:"flow.bat_charge",discharge:"flow.bat_discharge",idle:"stat.bat_idle"};function Ui(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function Rs(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function Tr(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>Di;)a.shift()}function Ir(e,t){Object.keys(t||{}).forEach(function(n){var r=e[n]||(e[n]=[]),i={};r.forEach(function(o){i[o.t]=!0});var a=t[n].filter(function(o){return!i[o.t]});if(a.length)for(e[n]=a.concat(r).sort(function(o,l){return o.t-l.t});e[n].length>Di;)e[n].shift()})}function Ds(e,t,n){for(var r=Ui(e,t,n),i=[],a=[],o=0;o<r.grid.length;o++){var l=r.grid[o].t,c=Pe(r.grid[o].y),v=Pe(r.pv[o].y)||0,f=Pe(r.bat[o].y)||0;c!==null&&(a.push({t:l,y:v+f}),i.push({t:l,y:v+f+c}))}return{cons:i,prod:a}}function Nt(e){return u`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        ${e.dir?u`<span class="ov-stat-dir" aria-hidden="true"
          style=${"color:"+e.color}>${e.dir==="out"?"→":"←"}</span>`:null}
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?u`<${be} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function Fs(e){var t=e.newest,n=e.win,r=e.power,i=t?Pe(t.grid_w):null,a=t?Pe(t.pv_w)||0:null,o=t?Pe(t.bat_w)||0:null,l=t&&i!==null?a+o+i:null,c=t?a+o:null,v=t&&i!==null?Math.max(0,-i):null,f=t&&i!==null?Math.max(0,i):null,p=Ds(r,n[0],n[1]),d=p.cons,h=p.prod;return u`
      <${F} group="grid" title=${s("panel.grid")}
        collapsible collapseKey="uebersicht.grid"
        defaultOpen=${!1}>
        <div class="ov-stats">
          <${Nt} color="var(--c-consumption)" label=${s("stat.consumption")}
            tooltip=${s("tooltip.consumption")} value=${S.w(l)} />
          <${Nt} color="var(--c-production)" label=${s("stat.production")}
            value=${S.w(c)} />
          <${Nt} color="var(--c-export)" dir="out" label=${s("stat.export")}
            value=${S.w(v)} />
          <${Nt} color="var(--c-import)" dir="in" label=${s("stat.gridop")}
            tooltip=${s("tooltip.gridop")} value=${S.w(f)} />
        </div>
        <${Xt} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${S.w}
          bands=${[{top:h,bottom:d,color:"var(--c-export-fill)"},{top:d,bottom:h,color:"var(--c-import-fill)"}]}
          series=${[{points:d,color:"var(--c-consumption)",label:s("stat.consumption")},{points:h,color:"var(--c-production)",label:s("stat.production")}]} />
      <//>`}function Bs(e){var t=e.info;return u`
      <div class="ov-sub-meta">
        <span>${t.dir?s(Ls[t.dir]):"–"}</span>
        ${t.soc!==null?u`<span>${s("stat.soc",{pct:Math.round(t.soc)})}${t.storedWh!==null?" · "+s("stat.soc_energy",{energy:S.wh(t.storedWh),capacity:S.wh(t.capacity)}):""}</span>`:null}
      </div>
      ${t.soc!==null?u`
        <div class="bat-soc" role="meter" aria-valuemin="0" aria-valuemax="100"
          aria-valuenow=${Math.round(t.soc)} aria-label=${s("stat.soc",{pct:Math.round(t.soc)})}>
          <div class="bat-soc-fill" style=${"width:"+t.soc.toFixed(1)+"%"}></div>
        </div>`:null}`}function Ws(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:u`
      <${F} group="production" title=${s("panel.production")}
        collapsible collapseKey="uebersicht.production"
        defaultOpen=${!1}>
        ${e.notice?u`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${s("flow.prod_nodata")}</span>
            <button class="ov-notice-close" aria-label=${s("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=Bi(i),o=a?"var(--c-battery)":"var(--c-production)",l=_t(i),c=Os(i,Date.now()/1e3),v=a&&!c?Wi(i):null;return u`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Er(i)}</span>
                  <span class=${"ov-sub-value"+(c?" is-stale":"")}
                    style=${c?"":"color:"+o}>${S.w(l)}</span>
                </div>
                ${c?u`<div class="ov-sub-meta" role="status"><span>${c}</span></div>`:null}
                ${v?u`<${Bs} info=${v} />`:null}
                <${Xt} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${S.w}
                  series=${[{points:n[i.id]||[],color:o,label:a?s("stat.battery"):Er(i)}]} />
              </div>`})}
        </div>
      <//>`}function Us(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:u`
      <${F} group="loads" title=${s("panel.loads")} tooltip=${s("tooltip.loads")}
        collapsible collapseKey="uebersicht.loads"
        defaultOpen=${!1}>
        <div class="ov-subgrid">
          ${t.map(function(a){var o=Fi(a.state),l=_t(a),c=o==="inactive"?"waiting":"inactive",v=o==="inactive"?"action.request":"action.deactivate";return u`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Nr(a)}</span>
                  <${Dt} state=${o} />
                </div>
                <div class="ov-sub-meta">
                  <span>${S.w(l)} · ${s("stat.rated")}</span>
                  <span>${s("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${Xt} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${S.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:Nr(a)}]} />
                <div class="ov-sub-act">
                  <${Y} small secondary=${c==="inactive"}
                    onClick=${function(){i(a.id,c)}}>${s(v)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}var js={pv:{color:"var(--c-production)",label:"flow.pv"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"},netz:{color:"var(--c-grid)",label:"flow.netz"}},Hs=30;function Ks(e){return e.node==="pv"?"var(--c-production)":e.node==="bat"?"var(--c-battery)":e.dir==="in"?"var(--c-import)":"var(--c-export)"}function zs(e,t){return e==="haus"?{text:s("flow.consumption")}:!t||t.state!=="ok"?null:e==="pv"?{text:s("flow.production"),color:"var(--c-production)"}:e==="bat"?{text:t.dir==="in"?s("flow.bat_discharge"):s("flow.bat_charge")}:t.dir==="in"?{text:s("flow.import"),color:"var(--c-import)"}:{text:s("flow.export"),color:"var(--c-export)"}}function qs(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?u`
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
      </g>`:null}function Pr(e){var t=js[e.id],n=e.node,r=zs(e.id,e.edge);return u`
      <div class=${"hub-node hub-node-"+e.id+" is-"+n.state}
        style=${"--node-c:"+t.color}>
        <span class="hub-icon">
          <svg viewBox="-13 -13 26 26" aria-hidden="true">${qs(e.id,0,0,t.color)}</svg>
        </span>
        <span class="hub-node-text">
          <span class="hub-node-label">${s(t.label)}</span>
          <span class="hub-node-value">${n.state==="unknown"?"–":S.w(n.watts)}</span>
          ${r?u`<span class="hub-node-cap"
            style=${r.color?"color:"+r.color:null}>${r.text}</span>`:null}
          ${e.soc!==null&&e.soc!==void 0?u`<span class="hub-node-cap">${s("stat.soc",{pct:Math.round(e.soc)})}</span>`:null}
        </span>
      </div>`}function Ys(e){var t=e.edge,n=e.side==="src"?t.dir==="in":t.dir==="out",r=t.state==="unknown"?"var(--c-line)":Ks(t);return u`
      <div class=${"hub-edge "+(n?"is-fwd":"is-back")+" is-"+t.state}
        style=${"--edge-c:"+r}>
        <span class="hub-edge-line" aria-hidden="true"></span>
        ${t.state==="zero"?null:u`
          <span class="hub-edge-pill">
            <svg class="hub-edge-arrow" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ${t.state==="unknown"?"–":S.w(t.watts)}
          </span>`}
      </div>`}function Gs(e){var t=Cs(e.newest,{pv:e.hasPv,bat:e.hasBattery}),n=Ms(t),r=u`
      <span class=${"live-badge"+(e.live?" is-live":"")}>
        <span class="live-dot" aria-hidden="true"></span>
        ${e.live?s("flow.live"):e.asOf?s("flow.as_of",{time:S.time(e.asOf,"hm")}):s("flow.offline")}
      </span>`;function i(o){return t?t.edges.find(function(l){return l.node===o}):null}function a(o,l){var c=o.filter(function(p){return t.nodes[p]});if(!c.length)return null;var v=u`
        <div class=${"hub-tier hub-tier-"+l}>
          ${c.map(function(p){return u`<${Pr} key=${p} id=${p} node=${t.nodes[p]} edge=${i(p)}
              soc=${p==="bat"?e.soc:null} />`})}
        </div>`,f=u`
        <div class=${"hub-links hub-links-"+l}>
          ${c.map(function(p){return u`<${Ys} key=${p} edge=${i(p)} side=${l} />`})}
        </div>`;return l==="src"?u`${v}${f}`:u`${f}${v}`}return u`
      <${F} group="grid" title=${s("flow.title")} tooltip=${s("tooltip.flow")} badge=${r}>
        ${n?u`<p class="flow-status">${s(n.key,{w:S.w(n.vars.w),pct:n.vars.pct})}</p>`:null}
        ${t?u`
          <div class="hub-wrap">
            <div class="hub" role="img" aria-label=${s("flow.aria")}>
              ${a(["pv","bat"],"src")}
              <div class="hub-haus">
                <${Pr} id="haus" node=${t.nodes.haus} />
              </div>
              ${a(["netz"],"grid")}
            </div>
          </div>`:u`<div class="hub-empty">${s("flow.status_unknown")}</div>`}
      <//>`}function Or(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return u`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?u`<${be} text=${e.note} />`:null}
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
      </div>`}var Vs={"comp.grid":"←"},Zs={"comp.feedin":"→"};function Xs(e){var t=I("now"),n=t[0],r=t[1],i=n==="now"?Es(e.sample):Ts(e.records),a=n==="now"?S.w:S.wh,o=n==="today"&&e.hasBattery&&!i.battery&&!i.unknown?s("flow.comp_batt_note"):null;return u`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${s("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${s("flow.comp_today")}</button>
        </div>
        <${Or} title=${s("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} arrows=${Vs} />
        <${Or} title=${s("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${o} arrows=${Zs} />
      </div>`}function Js(e){return u`
      <${F} group="grid" title=${s("flow.comp_title")} collapsible collapseKey="ov.comp"
        defaultOpen=${!1}>
        <${Xs} sample=${e.sample} records=${e.records}
          hasBattery=${e.hasBattery} />
      <//>`}function ji(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return u`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?u`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function Qs(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?s("kpi.incomplete"):null,r=t.savingParts,i=r?[s("kpi.saving_selfuse")+": "+S.chf(r.selfuse,!0),s("kpi.saving_feedin")+": "+S.chf(r.feedin,!0)].join(`
`):s("tooltip.kpi_saving"),a=!!e.showSaving,o=a?u`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":S.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${s("kpi.saving")}<${be} text=${n||i} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:u`
        <div class="kpi-hero">
          <${ji} big ratio=${t.autarky} color="var(--c-export)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${s("kpi.autarky")}<${be} text=${n||s("tooltip.kpi_autarky")} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,l=[];return a&&l.push(u`<${fn} key="au" gauge ratio=${t.autarky} color="var(--c-export)"
        label=${s("kpi.autarky")} tip=${n||s("tooltip.kpi_autarky")} />`),l.push(u`<${fn} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${s("kpi.selfuse_short")} tip=${n||s("tooltip.kpi_selfuse")} />`),e.showCo2&&l.push(u`<${fn} key="co" value=${to(t.co2Kg)} color="var(--c-production)"
        label=${s("kpi.co2")} tip=${n||s("tooltip.kpi_co2",{g:e.co2Factor})} />`),u`
      <div class="kpi-band">
        ${o}
        <div class="kpi-support">${l}</div>
      </div>`}function fn(e){return u`
      <div class="kpi-tile">
        ${e.gauge?u`<${ji} ratio=${e.ratio} color=${e.color} />`:u`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${be} text=${e.tip} /></span>
          ${e.sub?u`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function eo(){return u`
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
      </div>`}function to(e){return e==null||isNaN(e)?"–":e>=1e3?S.num(e/1e3,2)+" t":S.num(e,e<10?2:1)+" kg"}function no(){var e=I(null),t=e[0],n=e[1],r=I(null),i=r[0],a=r[1],o=I([]),l=o[0],c=o[1],v=I([]),f=v[0],p=v[1],d=I(null),h=d[0],g=d[1],b=I(null),$=b[0],M=b[1],_=I(function(){return Math.floor(Date.now()/1e3)}),A=_[0],D=_[1],N=I(null),k=N[0],H=N[1],x=I({}),E=x[0],y=x[1],R=I(!1),B=R[0],q=R[1],K=I(0),m=K[1],C=Ne({}),O=Ne({}),P=Ne(!1),we=A,ge=we-dn,he=[ge,we];Q(function(){U.getSite().then(function(j){n(j)}).catch(function(){}),U.getMeta().then(function(j){M(j)}).catch(function(){})},[]),Q(function(){var j=!0;function Se(){j&&(P.current=!0,m(function(se){return se+1}))}return Jt().then(function(se){if(j){if(!se||!se.available||!se.siteId){Se();return}var We=Math.floor(Date.now()/1e3)-dn;return Promise.all([kr(se.siteId,"prod",We).catch(function(){return{}}),kr(se.siteId,"load",We).catch(function(){return{}})]).then(function($e){j&&(Ir(C.current,$e[0]),Ir(O.current,$e[1]),Se())})}},Se).catch(Se),function(){j=!1}},[]),Q(function(){return U.poll(function(){U.getEnergy("15m",96).then(function(j){Array.isArray(j)&&g(j)}).catch(function(){})},6e4)},[]),Q(function(){return U.poll(function(){var j=Math.floor(Date.now()/1e3);D(j);var Se=j-dn;Promise.all([U.getPower().catch(function(){return null}),U.getLoads().catch(function(){return null}),U.getProductions().catch(function(){return null})]).then(function(se){var We=se[0],$e=se[1],Oe=se[2];if(We&&a(We),$e&&c($e),Oe&&p(Oe),(We||$e||Oe)&&H(j),q(!0),Oe&&Oe.forEach(function(Ue){Tr(C.current,Ue.id,j,_t(Ue),Se)}),$e&&$e.forEach(function(Ue){var ia=Fi(Ue.state)==="active"?_t(Ue):0;Tr(O.current,Ue.id,j,ia,Se)}),P.current&&(Oe||$e)){var at=Pi();at&&at.available&&at.siteId&&(Oe&&wr(at.siteId,"prod",C.current).catch(function(){}),$e&&wr(at.siteId,"load",O.current).catch(function(){}))}})},1e4)},[]);var ce=Rs(i),nt=Ui(i,ge,we),rt=!!(f&&f.length&&Is(nt.pv.map(function(j){return j.y}))&&!E["flow.prod_nodata"]);function Fe(){var j=Object.assign({},E);j["flow.prod_nodata"]=!0,y(j)}var Be=new Date;Be.setHours(0,0,0,0);var me=Math.floor(Be.getTime()/1e3),ke=(h||[]).filter(function(j){return j.ts>=me}),le=$&&$.tariffs||{},T=le.co2_g_kwh===void 0||le.co2_g_kwh===null||le.co2_g_kwh===""?128:Number(le.co2_g_kwh),re=Mn(ke,{tariffs:le,co2:T}),V=Number(le.grid_import_chf_kwh)>0||Number(le.grid_feedin_chf_kwh)>0,ee=T>0,ve=ke.some(function(j){return j.partial}),it=ve?s("kpi.today_until",{time:S.time(A,"hm")}):s("kpi.today"),xe=(f||[]).some(function(j){return String(j.productionType||"").toUpperCase()==="BATTERY"}),wt=(f||[]).some(function(j){return String(j.productionType||"").toUpperCase()!=="BATTERY"}),kt=!!(ce&&k&&A-k<25&&i&&typeof i.now=="number"&&i.now-ce.ts<Hs),xt=t&&t.location?t.location:null,an=k?u`
      <span class="ov-updated">${s("common.stale",{time:S.time(k,"hm")})}</span>`:null;function sn(j,Se){U.setLoadState(j,Se).then(function(){return U.getLoads()}).then(function(se){se&&c(se)}).catch(function(){ne(s("error.toggle"),{type:"error"})})}return u`
      <div>
        <${Qe} title=${t&&t.name?t.name:s("page.overview")}
          subtitle=${xt} actions=${an} />
        ${B?u`
          <${bt}>
            <div class="ov-top">
              <section class="ov-top-flow" aria-labelledby="ov-sec-now">
                <h2 class="ov-section" id="ov-sec-now">${s("section.now")}</h2>
                <${Gs} newest=${ce} hasBattery=${xe} hasPv=${wt}
                  soc=${xe?As(f):null}
                  live=${kt} asOf=${ce?ce.ts:null} />
              </section>
              <section class="ov-top-side" aria-labelledby="ov-sec-today">
                <h2 class="ov-section" id="ov-sec-today">${s("section.today")}</h2>
                <${Qs} kpis=${re} period=${it} showSaving=${V}
                  showCo2=${ee} co2Factor=${T} />
              </section>
            </div>
            <${Js} sample=${ce} records=${ke}
              hasBattery=${xe} />
            <section class="ov-history" aria-labelledby="ov-sec-history">
              <h2 class="ov-section" id="ov-sec-history">${s("section.history")}</h2>
              <${Fs} newest=${ce} win=${he} power=${i} />
              <${Ws} productions=${f} history=${C.current} win=${he}
                notice=${rt} onDismissNotice=${Fe} />
              <${Us} loads=${l} history=${O.current} win=${he} onToggle=${sn} />
            </section>
          <//>`:u`<${eo} />`}
      </div>`}var ro=[10,25,50],ft=2880,Me={"15m":{label:"history.res.15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",count:ft,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",count:ft,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",count:ft,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",count:ft,target:"1q",tk:"q",slot:7776e3}},io=["15m","1h","1d","1w","1mo","1q"],vn={"15m":240*900,"1h":240*900,"1d":125*86400,"1w":125*86400,"1mo":589*86400,"1q":589*86400},ao={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},Te={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function so(e){return e==null?null:e/1e3}function oo(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-Me[t].slot}function lo(e,t){if(!e.length)return[];var n=ao[t]||e.length,r={};e.forEach(function(c){r[c.ts]=c});for(var i=e[e.length-1].ts,a=[],o=e[0].ts,l=0;l<n&&o>=i;l++)a.push(r[o]||{ts:o,__blank:!0}),o=oo(o,t);return a}function Et(e,t){var n=so(e);return n===null?"–":S.num(n,2)}function ut(e,t){return e==null?u`<span>–</span>`:u`<span class=${t||""}>${S.chf(e,!1)}</span>`}function uo(e,t,n,r){var i=[{key:"ts",label:s("history.col.time")},{key:"imp",label:s("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(i.push({key:"impcost_ht",label:s("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),i.push({key:"impcost_nt",label:s("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):i.push({key:"impcost",label:s("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&i.push({key:"exp",label:s("history.col.feedin"),unit:"[kWh]",align:"right"}),r&&(i.push({key:"batchg",label:s("history.col.batcharge"),unit:"[kWh]",align:"right"}),i.push({key:"batdis",label:s("history.col.batdischarge"),unit:"[kWh]",align:"right"})),e&&(i.push({key:"saving",label:s("history.col.selfuse"),unit:"[CHF]",align:"right"}),i.push({key:"autarky",label:s("history.col.autarky"),unit:"[%]",align:"right"}),i.push({key:"selfuserate",label:s("history.col.selfuserate"),unit:"[%]",align:"right"}),i.push({key:"ersparnis",label:s("history.col.ersparnis"),unit:"[CHF]",align:"right"})),i}function Ar(e){return e==null?"–":S.num(e*100,0)+" %"}function co(e){var t=e.revenue_feedin_chf,n=e.cost_import_chf;return t==null&&n==null?null:(t||0)-(n||0)}function fo(e,t,n){for(var r=Me[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var o=e[a+1];if(o){var l=Math.round((e[a].ts-o.ts)/r)-1;l>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function vo(e){var t=e.coverage;if(!t||t.firstE15Ts===null)return null;var n=Math.floor(Date.now()/1e3)-e.span,r=(t.gaps||[]).filter(function(i){return i[1]>=n});return u`
      <p class="verlauf-archive-note">
        <span class="badge badge-inactive">${s("history.archive_badge",{days:t.days})}</span>
        ${r.length?u`
          <span class="verlauf-archive-gap">
            ${s("history.archive_gap",{from:S.time(r[0][0],"1d"),to:S.time(r[r.length-1][1],"1d"),count:r.length})}
          </span>`:null}
      </p>`}function po(){var e=I(Te.res),t=e[0],n=e[1],r=I(0),i=r[0],a=r[1],o=I(Te.pageSize),l=o[0],c=o[1],v=I(Te.chfMode),f=v[0],p=v[1],d=I(Te.chartMode),h=d[0],g=d[1],b=I({records:null,tariffs:{},producer:!1,err:!1,archived:!1,coverage:null,blocked:!1}),$=b[0],M=b[1],_=I(!0),A=_[0],D=_[1];Te.res=t,Te.pageSize=l,Te.chfMode=f,Te.chartMode=h,Q(function(){var T=!1;D(!0);var re=Me[t];return Jt().then(function(V){var ee=!!(V.available&&V.siteId),ve=Math.floor(Date.now()/1e3),it=ve-vn[t];return Promise.all([ee?Ja(V.siteId,it,ve).catch(function(){return null}):U.getEnergy("15m",re.count).catch(function(){return null}),U.getMeta().catch(function(){return null}),U.getProductions().catch(function(){return null})]).then(function(xe){if(!T){var wt=xe[0],kt=xe[1],xt=xe[2];if(wt===null){M({records:null,tariffs:{},producer:!1,err:!0,archived:!1,coverage:null,blocked:V.available===!1}),D(!1);return}var an=kt&&kt.tariffs||{},sn=Array.isArray(xt)&&xt.some(function(j){return j&&j.productionType==="PHOTOVOLTAIC"});M({records:wt,tariffs:an,producer:sn,err:!1,archived:ee,coverage:V.coverage||null,blocked:V.available===!1}),D(!1)}})}),function(){T=!0}},[t]);var N=Qt($.tariffs),k=Le(function(){if(!$.records)return[];var T=$.records;N&&(T=$.records.map(function(V){return Ri(V,$.tariffs)}));var re=Mr(T,"15m",Me[t].target,$.tariffs);return re.slice().sort(function(V,ee){return ee.ts-V.ts})},[$.records,$.tariffs,t,N]),H=Le(function(){if(t!=="15m"||!$.records)return{};var T=Mr($.records,"15m","15m",$.tariffs),re=xs(T,3),V={};return re.forEach(function(ee){V[T[ee].ts]=!0}),V},[$.records,$.tariffs,t]),x=k.some(function(T){return(T.exp_wh||0)>0}),E=k.some(function(T){return T.bat_chg_wh!=null||T.bat_dis_wh!=null}),y=uo($.producer,x,N,E),R=$.tariffs.co2_g_kwh===void 0||$.tariffs.co2_g_kwh===null||$.tariffs.co2_g_kwh===""?128:Number($.tariffs.co2_g_kwh),B={tariffs:$.tariffs,co2:R},q=Number($.tariffs.grid_import_chf_kwh)>0||Number($.tariffs.grid_feedin_chf_kwh)>0,K=Le(function(){var T={};return k.forEach(function(re){T[re.ts]=Mn([re],B)}),T},[k,$.tariffs,R]),m=Le(function(){return Mn(k,B)},[k,$.tariffs,R]),C=$.archived?!($.coverage&&$.coverage.firstE15Ts!==null&&$.coverage.firstE15Ts>Math.floor(Date.now()/1e3)-vn[t]):$.records?$.records.length<Me[t].count:!0,O=fo(k,t,C),P=k.length;O.filter(function(T){return T.kind==="row"});var we=Math.max(1,Math.ceil(P/l)),ge=Math.min(i,we-1),he=ge*l,ce=Math.min(he+l,P),nt=go(O,he,ce);function rt(T){n(T),a(0)}function Fe(T){c(+T),a(0)}function Be(){var T=y.map(function(ee){return ee.label+(ee.unit?" "+ee.unit:"")}),re=k.map(function(ee){return $o(ee,y,t,K[ee.ts])}),V=Ei(T,re);xo(Ua(t),V)}var me=Le(function(){return bo(lo(k,t),h,f)},[k,h,f,t]),ke=Le(function(){return yo(k,t,$.producer)},[k,t,$.producer]),le=u`
      <div class="verlauf-actions">
        <${pi} label=${s("history.resolution")} value=${t}
          onChange=${rt}
          options=${io.map(function(T){return{value:T,label:s(Me[T].label)}})} />
        <${Y} secondary onClick=${Be} disabled=${P===0}>
          ${s("history.export")}<//>
      </div>`;return u`
      <div>
        <${Qe} title=${s("page.history")} subtitle=${s("history.subtitle")}
          actions=${le} />

        ${$.blocked?u`
          <div class="banner banner-warn">${s("banner.archive",{days:ft/96})}</div>`:null}

        ${$.archived?u`<${vo} coverage=${$.coverage}
          span=${vn[t]} />`:null}

        ${$.err?u`
          <${F}><p class="placeholder-text">${s("common.nodata")}</p><//>`:null}

        ${!$.err&&A?u`
          <${F}><p class="placeholder-text">${s("common.loading")}</p><//>`:null}

        ${!$.err&&!A?u`
          <div>
            ${k.length?u`<${ko} summary=${ke} kpis=${m} showSaving=${q} />`:null}

            <${F} group="grid" title=${s("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${s("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(T){return u`<button key=${T[0]} type="button" role="tab"
                      class=${"seg-btn"+(h===T[0]?" seg-btn-active":"")}
                      aria-selected=${h===T[0]}
                      onClick=${function(){g(T[0])}}>${s(T[1])}</button>`})}
                </div>
                ${h==="net"?u`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${f}
                      onChange=${function(T){p(T.target.checked)}} />
                    <span>${s("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${me.points.length?u`
                <${bi} height=${220}
                  yUnit=${me.yUnit} xUnit=${s("history.chart.xunit")}
                  yFormat=${me.yFormat}
                  signedMagnitude=${me.signedMagnitude}
                  xTickFormat=${function(T){return _o(t,T)}}
                  points=${me.points} />
                <div class="chart-legend">
                  ${me.legend.map(function(T,re){return u`<span key=${re} class="legend-item"><span class="legend-swatch" style=${"background:"+T.color}></span>${T.label}</span>`})}
                </div>`:u`<p class="placeholder-text">${s("common.nodata")}</p>`}
            <//>

            <${F} title=${s("history.table.title")}
              collapsible collapseKey="verlauf.table">
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${y.map(function(T){return u`<th key=${T.key} class=${T.align==="right"?"ta-r":""}>
                          ${T.label}${T.unit?u`<span class="th-unit"> ${T.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${P===0?u`
                      <tr><td class="table-empty" colspan=${y.length}>${s("common.nodata")}</td></tr>`:nt.map(function(T){return ho(T,y,t,H,K)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${s("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${l}
                        onChange=${function(T){Fe(T.target.value)}}>
                        ${ro.map(function(T){return u`<option key=${T} value=${T}>${T}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${s("table.pageinfo",{from:P===0?0:he+1,to:ce,total:P})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${s("table.prev")}
                      disabled=${ge===0} onClick=${function(){a(ge-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${s("table.next")}
                      disabled=${ge>=we-1} onClick=${function(){a(ge+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${s("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function go(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var o=e[a];if(o.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(o)}else i>=t&&i<n&&r.push(o)}return r}function ho(e,t,n,r,i){if(e.kind==="boundary")return u`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${s("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return u`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${s("history.gap")}</td></tr>`;var a=e.rec,o=!!r[a.ts],l=i&&i[a.ts]||null;return u`
      <tr key=${"r"+a.ts}>
        ${t.map(function(c){return u`<td key=${c.key} class=${c.align==="right"?"ta-r":""}>
            ${mo(c.key,a,n,o,l)}
          </td>`})}
      </tr>`}function mo(e,t,n,r,i){switch(e){case"ts":return u`<span class="verlauf-ts">
          ${S.time(t.ts,Me[n].tk)}
          ${r?u`<span class="peak-mark" title=${s("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?u`<${be} text=${s("history.partial")} />`:null}
        </span>`;case"imp":return Et(t.imp_wh);case"impcost":return ut(t.cost_import_chf,"val-neg");case"impcost_ht":return ut(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return ut(t.cost_import_nt_chf,"val-neg");case"exp":return Et(t.exp_wh);case"batchg":return Et(t.bat_chg_wh);case"batdis":return Et(t.bat_dis_wh);case"saving":return ut(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return Ar(i&&i.autarky);case"selfuserate":return Ar(i&&i.selfuse);case"ersparnis":return ut(i&&i.savingChf,i&&i.savingChf>0?"val-pos":"");default:return""}}function $o(e,t,n,r){return t.map(function(i){switch(i.key){case"ts":return S.time(e.ts,Me[n].tk);case"imp":return Tt(e.imp_wh);case"impcost":return ct(e.cost_import_chf);case"impcost_ht":return ct(e.cost_import_ht_chf);case"impcost_nt":return ct(e.cost_import_nt_chf);case"exp":return Tt(e.exp_wh);case"batchg":return Tt(e.bat_chg_wh);case"batdis":return Tt(e.bat_dis_wh);case"saving":return ct(e.saving_selfuse_chf);case"autarky":return Lr(r&&r.autarky);case"selfuserate":return Lr(r&&r.selfuse);case"ersparnis":return ct(r&&r.savingChf);default:return""}})}function Lr(e){return e==null?"":(e*100).toFixed(0)}function Tt(e){return e==null?"":(e/1e3).toFixed(2)}function ct(e){return e==null?"":Number(e).toFixed(2)}function _o(e,t){switch(e){case"15m":case"1h":return S.time(t,"hm");case"1d":case"1w":return S.time(t,"dm");case"1mo":return S.time(t,"1mo");case"1q":return S.time(t,"q");default:return S.time(t,Me[e].tk)}}function bo(e,t,n){var r=e.slice().sort(function(p,d){return p.ts-d.ts}),i=function(p){return S.num(p,2)},a=function(p){return p==null?0:p/1e3};if(t==="bilanz"){var o="var(--c-production)",l="var(--c-export)",c="var(--c-import)",v=r.map(function(p){if(p.__blank)return{t:p.ts,y:null};var d=Ps([{pv_wh:p.pv_wh||0,exp_wh:p.exp_wh||0,imp_wh:p.imp_wh||0}]);return{t:p.ts,bars:[{segments:[{value:a(d.prodSelf),color:o,label:s("history.bilanz.selfuse")},{value:a(d.prodFeedin),color:l,label:s("history.bilanz.feedin")},{value:-a(d.consImport),color:c,label:s("history.bilanz.import")}]}]}});return{points:v,yUnit:"kWh",yFormat:i,signedMagnitude:!0,legend:[{color:o,label:s("history.bilanz.selfuse")},{color:l,label:s("history.bilanz.feedin")},{color:c,label:s("history.bilanz.import")}]}}var f;return n?f=r.map(function(p){if(p.__blank)return{t:p.ts,y:null};var d=co(p);return{t:p.ts,y:d===null?null:d,color:(d||0)<0?"var(--c-import)":"var(--c-export)"}}):f=r.map(function(p){if(p.__blank)return{t:p.ts,y:null};var d=p.imp_wh===null||p.imp_wh===void 0?null:p.imp_wh/1e3;if(d&&d>0)return{t:p.ts,y:-d,color:"var(--c-import)",label:s("history.chart.legend_import")};var h=p.exp_wh,g=h==null?null:h/1e3;return g&&g>0?{t:p.ts,y:g,color:"var(--c-export)",label:s("history.chart.legend_export")}:{t:p.ts,y:d===null?null:0,color:"var(--c-import)",label:s("history.chart.legend_import")}}),{points:f,yUnit:n?"CHF":"kWh",yFormat:n?function(p){return S.chf(p,!0)}:i,signedMagnitude:!n,legend:n?[{color:"var(--c-export)",label:s("history.chart.legend_saldo")},{color:"var(--c-import)",label:s("history.chart.legend_import")}]:[{color:"var(--c-export)",label:s("history.chart.legend_export")},{color:"var(--c-import)",label:s("history.chart.legend_import")}]}}function yo(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(f,p){return f.ts-p.ts}),o=function(f){return a.map(function(p){return p[f]===null||p[f]===void 0?null:p[f]/1e3})},l=i&&e.length>=13,c=function(f,p){var d=o(p);return{name:f,avg:Sn(d),trend:ws(d),yoy:l?ks(d):null}},v=[c(s("history.col.gridimport"),"imp_wh")];return n&&v.push(c(s("history.summary.pv"),"pv_wh")),{periodLabel:s(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:v}}function wo(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return u`
      <div class="summary-cell">
        <span class="summary-label">${s("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":S.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function ko(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":S.num(i*100,0)+" %"}return u`
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
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":S.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return u`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":S.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${wo(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?u`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${s("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+S.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function xo(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function So(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const Co=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],Mo=(function(){const e={};return Co.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function No(e){const t=Mo[So(e)];return t===void 0?null:t}function Eo(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function Hi(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function To(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function Io(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function Po(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function Oo(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function Rr(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var Ao=1e4,Lo=90;function Nn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function Dr(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:No(t)}})}function Ki(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function _e(e,t){var n=Ki(e,t);return n?Nn(n.raw):null}function Ye(e){return function(t){return t.i18nKey===e}}function zi(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function Fr(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function qi(e,t,n){var r=_e(e,zi(t,n));return r!==null?r:Hi(_e(e,Fr(t,n,"in")),_e(e,Fr(t,n,"out")))}function Ro(e,t){var n=null;return[1,2,3].forEach(function(r){var i=qi(e,t,r);i!==null&&(n=(n||0)+i)}),n}function Xn(e){var t=Ro(e,"power"),n=_e(e,Ye("meter.f.power_net")),r=!1;if(n===null){var i=_e(e,Ye("meter.f.power_import")),a=_e(e,Ye("meter.f.power_export"));n=Hi(i,a),n!==null&&(r=!0)}var o=To(n,t);return n!==null?{net:n*o,derived:r,scale:o}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function Br(e){return u`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${be} text=${e.tip} />
      </span>`}function Do(){return u`<span class="meter-tag meter-tag-derived">${s("meter.derived")}</span>`}function Fo(){return u`
      <span class="meter-tag meter-tag-register">${s("meter.register")}
        <${be} text=${s("meter.tip.register")} /></span>`}function Yi(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-export)":""}function Bo(e){var t=e.resolved,n=Xn(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,o=s(a?"meter.importing":"meter.exporting");return u`
      <${F} group="grid" title=${s("meter.section.power")}
        tooltip=${s("meter.tip.net")}
        badge=${i?Do():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+Yi(r)}>
            ${S.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${o}</span>
        </div>
      <//>`}var Wo=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function Uo(e){var t=e.resolved,n=[1,2,3],r=Wo.map(function(f){var p=n.map(function(h){return qi(t,f.role,h)}),d=p.some(function(h){return h!==null});return{m:f,cells:p,any:d}}).filter(function(f){return f.any});if(r.length===0)return null;var i=r.filter(function(f){return f.m.role==="power"})[0],a=i?Eo(i.cells):null,o=null,l=r.filter(function(f){return f.m.role==="pf"})[0];if(i&&!l){var c=r.filter(function(f){return f.m.role==="reactive"})[0];if(c){var v=n.map(function(f,p){return Io(i.cells[p],c.cells[p])});v.some(function(f){return f!==null})&&(o=v)}}return u`
      <${F} title=${s("meter.section.phases")} tooltip=${s("meter.tip.phases")}
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
              ${r.map(function(f){return u`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${s(f.m.key)}
                      ${f.m.unit?u`<span class="meter-unit">[${f.m.unit}]</span>`:null}
                      ${f.m.tip?u`<${be} text=${s(f.m.tip)} />`:null}
                    </th>
                    ${f.cells.map(function(p){var d=f.m.signed?Yi(p):"";return u`<td style=${d?"color:"+d:""}>
                        ${p===null?"–":S.num(p,f.m.prec)}</td>`})}
                  </tr>`})}
              ${o?u`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${Br} tip=${s("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${o.map(function(f){return u`<td>${f===null?"–":S.num(f,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?u`
          <div class="meter-imbalance">
            <${Br} tip=${s("meter.tip.imbalance")}>${s("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${S.w(a)}</span>
          </div>`:null}
      <//>`}function jo(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=Ki(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?Nn(r.raw):null;return u`
      <${F} group="production" title=${s("meter.section.registers")}
        tooltip=${s("meter.tip.registers")} collapsible collapseKey="zaehler.registers"
        badge=${r&&(i===1||i===2)?u`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${s("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${s(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?u`
          <dl class="meter-reg-list">
            ${n.map(function(a){var o=Nn(a.raw);return u`
                <div class="meter-reg">
                  <dt>${s(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${Fo()}</dt>
                  <dd>${o===null?String(a.raw):S.num(o,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function Ho(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?S.num(i.min,1)+" / "+S.num(i.max,1):"–"}return u`
      <${F} title=${s("meter.section.minmax")} subtitle=${s("meter.since_open")}
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
              <dd style=${"color:var(--c-import)"}>${S.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?u`
            <div class="meter-reg">
              <dt>${s("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-export)"}>${S.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function Ko(e){var t=e.resolved,n=Xn(t).scale;function r(l){return n===1e3&&l.group==="power"&&l.unit==="W"?"kW":l.unit}var i=t.filter(function(l){return l.desc}),a=t.filter(function(l){return!l.desc});function o(l){var c=!!l.desc,v=l.raw!==null&&typeof l.raw=="object"?JSON.stringify(l.raw):String(l.raw);return u`
        <tr>
          <td class="meter-raw-name">${l.name}</td>
          <td class="meter-raw-val">${v}</td>
          <td class="meter-raw-unit">${c&&l.desc.unit?r(l.desc):""}</td>
          <td class="meter-raw-label">${s(c?l.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return u`
      <${F} title=${s("meter.section.raw")}
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
      <//>`}function zo(){var e=I(void 0),t=e[0],n=e[1],r=I(null),i=r[0],a=r[1],o=I(!1),l=o[0],c=o[1],v=I(null),f=v[0],p=v[1],d=Ne([]),h=Ne({u:{},peakImp:0,peakExp:0});Q(function(){return U.poll(function(){U.getMeter().then(function($){if(n($&&$.values?$.values:null),p($&&typeof $.now=="number"?$.now:Math.floor(Date.now()/1e3)),!(!$||!$.values)){var M=Dr($.values),_=h.current;[1,2,3].forEach(function(y){var R=_e(M,zi("voltage",y));R!==null&&(_.u[y]=Oo(_.u[y],R))});var A=Xn(M),D=A.net,N=_e(M,Ye("meter.f.power_import")),k=_e(M,Ye("meter.f.power_export"));N!==null&&(N=N*A.scale),k!==null&&(k=k*A.scale),N===null&&D!==null&&(N=D>0?D:0),k===null&&D!==null&&(k=D<0?-D:0),N!==null&&(_.peakImp=Rr(_.peakImp,N)),k!==null&&(_.peakExp=Rr(_.peakExp,k)),a({u:Object.assign({},_.u),peakImp:_.peakImp,peakExp:_.peakExp});var H=_e(M,Ye("meter.f.energy_import")),x=D!==null?D>0:N!==null&&N>0,E=d.current;for(E.push({reg:H,importing:x});E.length>Lo;)E.shift();c(Po(E))}}).catch(function(){})},Ao)},[]);var g=t?Dr(t):[],b=f?Math.max(0,Math.floor(Date.now()/1e3)-f):null;return u`
      <div>
        <${Qe} title=${s("page.meter")} subtitle=${s("meter.subtitle")}
          actions=${f?u`
            <span class="meter-updated">
              ${s("meter.updated",{time:S.time(f,"hm")})}
              ${b!==null?u`<span class="meter-age"> · ${s("meter.age",{s:b})}</span>`:null}
            </span>`:null} />

        ${l?u`<div class="banner banner-warn">${s("meter.stale")}</div>`:null}

        ${t===void 0?u`<${F}><p class="placeholder-text">${s("common.loading")}</p><//>`:null}
        ${t===null?u`<${F}><p class="placeholder-text">${s("meter.empty")}</p><//>`:null}
        ${t?u`
          <${Bo} resolved=${g} />
          <${Uo} resolved=${g} />
          <${jo} resolved=${g} />
          <${Ho} stats=${i} />
          <${Ko} resolved=${g} />`:null}
      </div>`}var qo=1e4;function Yo(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function Go(e){var t=e.items;return u`
      <${F} title=${s("modbus.section.raw")}>
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
              ${t.map(function(n){var r=Yo(n.currentPower);return u`
                  <tr>
                    <td class="meter-raw-name">${n.friendlyName||n.id}</td>
                    <td class="meter-raw-val">${r===null?s("modbus.raw.no_value"):S.num(r,3)}</td>
                    <td class="meter-raw-unit">${n.unitLabel||""}</td>
                    <td class="meter-raw-label">${n.register}</td>
                  </tr>`})}
            </tbody>
          </table>
        </div>
      <//>`}function Vo(){var e=I(void 0),t=e[0],n=e[1],r=I(null),i=r[0],a=r[1];Q(function(){return U.poll(function(){U.getModbus().then(function(l){n(Array.isArray(l)?l:[]),a(Math.floor(Date.now()/1e3))}).catch(function(){})},qo)},[]);var o=i?Math.max(0,Math.floor(Date.now()/1e3)-i):null;return u`
      <div>
        <${Qe} title=${s("page.modbus")} subtitle=${s("modbus.subtitle")}
          actions=${i?u`
            <span class="meter-updated">
              ${s("meter.updated",{time:S.time(i,"hm")})}
              ${o!==null?u`<span class="meter-age"> · ${s("meter.age",{s:o})}</span>`:null}
            </span>`:null} />

        ${t===void 0?u`<${F}><p class="placeholder-text">${s("common.loading")}</p><//>`:null}
        ${t&&t.length===0?u`<${F}><p class="placeholder-text">${s("modbus.empty")}</p><//>`:null}
        ${t&&t.length?u`<${Go} items=${t} />`:null}
      </div>`}var Zo=["site","loads","productions","grid","modbus","tariffs","daten","gplug","pro"],Xo={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",modbus:"modbus",tarife:"tariffs",daten:"daten",gplug:"gplug",pro:"pro"},Jo={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",modbus:"modbus",tariffs:"tarife",daten:"daten",gplug:"gplug",pro:"pro"},Qo={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",modbus:"settings.tab.modbus",tariffs:"settings.tab.tariffs",daten:"settings.tab.data",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},el={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},tl=["simulator","shelly","homeassistant","gplug","modbustcp"],Gi=["simulator","homeassistant","gplug","modbustcp"],En=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],Gt=["PHOTOVOLTAIC","BATTERY"];function nl(e){return e==null||String(e).trim()===""?!1:Gt.indexOf(String(e).toUpperCase())<0}var Jn=["W","kW"],Qn=[{value:"3",label:"3 – Read Holding Register (0x03)"},{value:"4",label:"4 – Read Input Register (0x04)"}],Je=["float32","int16","uint16","int32","uint32"],Vi=[{value:"6",label:"6 – Write Single Register (0x06)"},{value:"16",label:"16 – Write Multiple Registers (0x10)"},{value:"5",label:"5 – Write Single Coil (0x05)"}],yt=["Wh","kWh"],Zi=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month"],rl={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,co2_g_kwh:128};function L(e){return e==null||String(e).trim()===""}function ie(e){return!L(e)&&!isNaN(Number(e))}function Re(e){return L(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function Xi(e,t){var n={};L(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!ie(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!ie(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};Re(i.on)||(n["url.on"]="settings.err.url"),Re(i.off)||(n["url.off"]="settings.err.url"),Re(i.status)||(n["url.status"]="settings.err.url")}else r==="modbustcp"?tn(e,n):(Re(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&L(e.token)&&(n.token="settings.err.token"));return n}function pe(e){return!L(e)&&/\s/.test(String(e))}function Ge(e){if(L(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<-10||t>10}function Ve(e){return!L(e)&&(!ie(e)||Number(e)<=0)}function Ji(e){if(L(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<=0}function en(e){return String(e||"").toUpperCase()==="BATTERY"}function il(e,t){Ve(e.capacity)&&(t.capacity="settings.err.capacity"),Ve(e.maxChargePower)&&(t.maxChargePower="settings.err.bat_power"),Ve(e.maxDischargePower)&&(t.maxDischargePower="settings.err.bat_power"),e.integration==="gplug"?(pe(e.soc_field)&&(t.soc_field="settings.err.soc_field"),pe(e.soc_scale_field)&&(t.soc_scale_field="settings.err.scale_field"),Ge(e.soc_scale_base)&&(t.soc_scale_base="settings.err.scale_base")):!L(e.soc_url)&&!Re(e.soc_url)&&(t.soc_url="settings.err.url")}function Qi(e,t){L(e.field)&&(t.field="settings.err.field"),pe(e.sensor)&&(t.sensor="settings.err.sensor"),pe(e.scale_field)&&(t.scale_field="settings.err.scale_field"),Ge(e.scale_base)&&(t.scale_base="settings.err.scale_base"),Ve(e.max_power)&&(t.max_power="settings.err.max_power"),pe(e.energy_field)&&(t.energy_field="settings.err.energy_field"),Ji(e.stale_after)&&(t.stale_after="settings.err.stale_after"),!L(e.energy_dimension)&&yt.indexOf(e.energy_dimension)<0&&(t.energy_dimension="settings.err.energy_dimension"),pe(e.energy_scale_field)&&(t.energy_scale_field="settings.err.scale_field"),Ge(e.energy_scale_base)&&(t.energy_scale_base="settings.err.scale_base")}var al=["sensor","scale_field","scale_base","max_power","energy_field","stale_after","energy_dimension","energy_scale_field","energy_scale_base"],sl=["scale_base","max_power","stale_after","energy_scale_base"],Wr=["capacity","maxChargePower","maxDischargePower","soc_field","soc_scale_field","soc_scale_base","soc_url"],ol=["capacity","maxChargePower","maxDischargePower","soc_scale_base"];function Ur(e){if(!ue(e))return e;var t=null,n=e.productionType!==void 0&&!en(e.productionType);return al.concat(Wr).forEach(function(r){r in e&&(L(e[r])||n&&Wr.indexOf(r)>=0?(t=t||Object.assign({},e),delete t[r]):(sl.indexOf(r)>=0||ol.indexOf(r)>=0)&&typeof e[r]!="number"&&ie(e[r])&&(t=t||Object.assign({},e),t[r]=Number(e[r])))}),"invert"in e&&(e.invert!==!0||n)&&(t=t||Object.assign({},e),delete t.invert),t||e}var ll=["soc_register","soc_scale","energy_register","energy_scale","state_register"],ul=["soc_dtype","energy_dtype","energy_dimension"];function pn(e){if(!ue(e)||e.integration!=="modbustcp")return e;var t=Object.assign({},e);if(t.function=Number(t.function||3),L(t.register)?delete t.register:t.register=Number(t.register),L(t.unit)?delete t.unit:t.unit=Number(t.unit),L(t.scale)||Number(t.scale)===1?delete t.scale:t.scale=Number(t.scale),t.swap_words!==!0&&delete t.swap_words,ll.forEach(function(r){r in t&&(L(t[r])?delete t[r]:t[r]=Number(t[r]))}),ul.forEach(function(r){r in t&&L(t[r])&&delete t[r]}),t.productionType!==void 0&&!en(t.productionType)&&(delete t.soc_register,delete t.soc_dtype,delete t.soc_scale),"write"in t){var n=ue(t.write)?Object.assign({},t.write):{};L(n.register)?delete t.write:(["register","on","off","inactive","function"].forEach(function(r){L(n[r])?delete n[r]:n[r]=Number(n[r])}),L(n.dtype)&&delete n.dtype,t.write=n)}return t}function ea(e,t){var n={};return L(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?Qi(e,n):e.integration==="modbustcp"?tn(e,n):(Re(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&L(e.token)&&(n.token="settings.err.token")),en(e.productionType)&&il(e,n),n}function ta(e){var t={};return e.integration==="gplug"?Qi(e,t):e.integration==="modbustcp"?tn(e,t):(Re(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&L(e.token)&&(t.token="settings.err.token")),t}function er(e){return L(e)?!1:/^[^\s:]+:\d{1,5}$/.test(String(e).trim())}function qe(e,t,n){if(!ie(e))return!1;var r=Number(e);return Math.floor(r)===r&&r>=t&&(n===void 0||r<=n)}function na(e){return!L(e)&&(!ie(e)||Number(e)===0)}function tn(e,t){er(e.url)||(t.url="settings.err.modbus_url");var n=L(e.register)&&!L(e.state_register);!n&&!qe(e.register,0)&&(t.register="settings.err.modbus_register"),["soc_register","energy_register","state_register"].forEach(function(i){!L(e[i])&&!qe(e[i],0)&&(t[i]="settings.err.modbus_register")}),!L(e.unit)&&!qe(e.unit,1,247)&&(t.unit="settings.err.modbus_unit"),["scale","soc_scale","energy_scale"].forEach(function(i){na(e[i])&&(t[i]="settings.err.modbus_scale")}),!L(e.energy_dimension)&&yt.indexOf(e.energy_dimension)<0&&(t.energy_dimension="settings.err.energy_dimension");var r=e.write;ue(r)&&!L(r.register)&&(qe(r.register,0)||(t["write.register"]="settings.err.modbus_register"),["on","off","inactive"].forEach(function(i){!L(r[i])&&!ie(r[i])&&(t["write."+i]="settings.err.modbus_value")}))}function ra(e,t){var n={};return L(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),tn(e,n),n}function cl(e){var t={};return L(e.id)&&(t.id="settings.err.id_required"),L(e.name)&&(t.name="settings.err.name_required"),t}function dl(e){var t={};Zi.forEach(function(v){(!ie(e[v])||Number(e[v])<0)&&(t[v]="settings.err.rate")});var n=e.co2_g_kwh;(!ie(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!L(r),o=!L(i);if((a||o)&&(!a||!o?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!ie(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!ie(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var l=0;l<e.ht_windows.length;l++){var c=e.ht_windows[l]||{};(!ie(c.from)||!ie(c.to)||Number(c.from)<0||Number(c.to)>24||Number(c.from)>Number(c.to))&&(t["win."+l]="settings.err.win_hours")}return t}function De(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function oe(e){return typeof e=="number"&&!isNaN(e)}function ue(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Tn(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var W={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours",sensor:"settings.err.sensor",scale_field:"settings.err.scale_field",scale_base:"settings.err.scale_base",max_power:"settings.err.max_power",energy_field:"settings.err.energy_field",stale_after:"settings.err.stale_after",energy_dimension:"settings.err.energy_dimension",capacity:"settings.err.capacity",bat_power:"settings.err.bat_power",soc_field:"settings.err.soc_field",invert:"settings.err.invert",modbus_register:"settings.err.modbus_register"},fl=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","co2_g_kwh"];function jr(e){return!oe(e)||e<0||Math.floor(e)!==e}function Hr(e,t,n){(typeof e.url!="string"||!er(e.url))&&n.push({path:t+".url",key:W.url});var r=(e.register===void 0||e.register===null)&&oe(e.state_register);!r&&jr(e.register)&&n.push({path:t+".register",key:W.modbus_register}),ue(e.write)&&jr(e.write.register)&&n.push({path:t+".write.register",key:W.modbus_register})}function vl(e,t,n){if(typeof e=="string"||e===void 0||e===null){Tn(e)||n.push({path:t,key:W.url});return}if(ue(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!Tn(e[r]))&&n.push({path:t+"."+r,key:W.url});return}n.push({path:t,key:W.url})}function It(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:W.array}),null;for(var i=!0,a=0;a<r.length;a++)ue(r[a])||(n.push({path:t+"["+a+"]",key:W.array}),i=!1);return i?r:null}function pl(e){var t=[];if(!ue(e))return[{path:"",key:W.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:W.id});var n=It(e,"loads",t),r=It(e,"productions",t),i=It(e,"grid",t),a=e.modbusRegisters!==void 0?It(e,"modbusRegisters",t):null;if(a)for(var o={},l=0;l<a.length;l++){var c=a[l],v="modbusRegisters["+l+"]",f=c.id;typeof f!="string"||f.length===0?t.push({path:v+".id",key:W.id}):o[f]?t.push({path:v+".id",key:W.dup}):o[f]=!0,(c.register===void 0||c.register===null||!oe(c.register)||c.register<0||Math.floor(c.register)!==c.register)&&t.push({path:v+".register",key:W.modbus_register})}if([["productions",r],["grid",i]].forEach(function(N){(N[1]||[]).forEach(function(k,H){var x=N[0]+"["+H+"]";if(k.integration==="modbustcp"){Hr(k,x,t);return}var E=k.sensor;E!=null&&(typeof E!="string"||pe(E))&&t.push({path:x+".sensor",key:W.sensor});var y=k.scale_field;y!=null&&(typeof y!="string"||pe(y))&&t.push({path:x+".scale_field",key:W.scale_field});var R=k.scale_base;R!=null&&(!oe(R)||Ge(R))&&t.push({path:x+".scale_base",key:W.scale_base});var B=k.max_power;B!=null&&(!oe(B)||Ve(B))&&t.push({path:x+".max_power",key:W.max_power});var q=k.energy_field;q!=null&&(typeof q!="string"||pe(q))&&t.push({path:x+".energy_field",key:W.energy_field});var K=k.stale_after;K!=null&&(!oe(K)||Ji(K))&&t.push({path:x+".stale_after",key:W.stale_after});var m=k.energy_dimension;m!=null&&yt.indexOf(m)<0&&t.push({path:x+".energy_dimension",key:W.energy_dimension});var C=k.energy_scale_field;C!=null&&(typeof C!="string"||pe(C))&&t.push({path:x+".energy_scale_field",key:W.scale_field});var O=k.energy_scale_base;O!=null&&(!oe(O)||Ge(O))&&t.push({path:x+".energy_scale_base",key:W.scale_base})})}),(r||[]).forEach(function(N,k){var H="productions["+k+"]";[["capacity",W.capacity],["maxChargePower",W.bat_power],["maxDischargePower",W.bat_power]].forEach(function(E){var y=N[E[0]];y!=null&&(!oe(y)||Ve(y))&&t.push({path:H+"."+E[0],key:E[1]})}),[["soc_field",W.soc_field],["soc_scale_field",W.scale_field]].forEach(function(E){var y=N[E[0]];y!=null&&(typeof y!="string"||pe(y))&&t.push({path:H+"."+E[0],key:E[1]})});var x=N.soc_scale_base;x!=null&&(!oe(x)||Ge(x))&&t.push({path:H+".soc_scale_base",key:W.scale_base}),N.soc_url!==void 0&&N.soc_url!==null&&(typeof N.soc_url!="string"||!Tn(N.soc_url))&&t.push({path:H+".soc_url",key:W.url}),N.invert!==void 0&&typeof N.invert!="boolean"&&t.push({path:H+".invert",key:W.invert})}),n)for(var p={},d=0;d<n.length;d++){var h=n[d],g="loads["+d+"]",b=h.id;typeof b!="string"||b.length===0?t.push({path:g+".id",key:W.id}):p[b]?t.push({path:g+".id",key:W.dup}):p[b]=!0,h.currentPower!==void 0&&h.currentPower!==null&&!oe(h.currentPower)&&t.push({path:g+".currentPower",key:W.power}),h.priority!==void 0&&h.priority!==null&&(!oe(h.priority)||h.priority<1)&&t.push({path:g+".priority",key:W.priority}),h.integration==="modbustcp"?Hr(h,g,t):h.url!==void 0&&h.url!==null&&vl(h.url,g+".url",t)}var $=e.tariffs;if($!=null){if(!ue($))return t.push({path:"tariffs",key:W.object}),t;fl.forEach(function(N){var k=$[N];k!=null&&(!oe(k)||k<0)&&t.push({path:"tariffs."+N,key:W.rate})});var M=$.ht_windows;if(M!=null)if(!Array.isArray(M))t.push({path:"tariffs.ht_windows",key:W.array});else for(var _=0;_<M.length;_++){var A=M[_],D="tariffs.ht_windows["+_+"]";(!ue(A)||!oe(A.from)||!oe(A.to)||A.from<0||A.to>24||A.from>A.to)&&t.push({path:D,key:W.win})}}return t}var Kr={power:"register",soc:"soc_register",energy:"energy_register",state:"state_register"};function gl(e){var t=[];return["loads","productions","grid","modbusRegisters"].forEach(function(n){var r=e&&Array.isArray(e[n])?e[n]:[];r.forEach(function(i){if(!(!ue(i)||i.integration!=="modbustcp"||L(i.id))){var a=i.friendlyName||String(i.id),o=Number(i.function||3);Object.keys(Kr).forEach(function(l){var c=i[Kr[l]];if(!L(c)){var v=l==="power"?o:Number(i[l+"_function"]||o);t.push({id:String(i.id),name:a,field:l,register:Number(c),writable:v===3})}}),ue(i.write)&&!L(i.write.register)&&t.push({id:String(i.id),name:a,field:"write",register:Number(i.write.register),writable:!0})}})}),t}function zr(e,t){var n={};return e.mode==="free"&&(er(e.url)||(n.url="settings.err.modbus_url"),qe(e.register,0,65535)||(n.register="settings.err.modbus_register"),!L(e.unit)&&!qe(e.unit,0,255)&&(n.unit="settings.err.modbus_unit"),na(e.scale)&&(n.scale="settings.err.modbus_scale")),t&&!ie(e.value)&&(n.value="settings.err.modbus_value"),n}function hl(e,t){var n=[];function r(i,a){L(a)||n.push(i+"="+encodeURIComponent(String(a).trim()))}return e.mode==="item"?(r("id",t.id),r("field",t.field)):(r("url",e.url),r("unit",e.unit),r("function",e.function||3),r("register",e.register),r("dtype",e.dtype||"float32"),e.swap_words===!0&&r("swap_words","true"),!L(e.scale)&&Number(e.scale)!==1&&r("scale",e.scale),e.dimension==="kW"&&r("dimension","kW")),n.join("&")}function ml(e,t){if(e.mode==="item")return{id:t.id,field:t.field,value:Number(e.value)};var n={url:String(e.url).trim(),register:Number(e.register),dtype:e.dtype||"float32",value:Number(e.value)};return L(e.unit)||(n.unit=Number(e.unit)),e.swap_words===!0&&(n.swap_words=!0),!L(e.scale)&&Number(e.scale)!==1&&(n.scale=Number(e.scale)),e.dimension==="kW"&&(n.dimension="kW"),L(e.wfunction)||(n.function=Number(e.wfunction)),n}function Ht(e){var t=L(e)?"":String(e).trim();return t?s("settings.scale_field_hint",{name:t.charAt(0)+"sf"}):""}function w(e){var t=e.error;return u`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?u`<span class="field-error">${s(t)}</span>`:null}
      </label>`}function X(e){return u`
      <label class="field field-block">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function nn(e){return u`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${s("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function ae(e){return e.map(function(t){return{value:t,label:t}})}function $l(e){var t=e.cfg,n=cl(t);function r(i){return function(a){e.patch(i,a)}}return u`
      <${F} group="grid">
        <p class="settings-scope">${s("settings.scope_note")}</p>
        <div class="settings-form">
          <${w} label=${s("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${w} label=${s("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${w} label=${s("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${w} label=${s("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${rn} disabled=${De(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function _l(e){var t=e.selected>=0;return u`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${Y} small onClick=${e.onAdd}>${s("settings.add")}<//>
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
      </div>`}function rn(e){return u`
      <div class="settings-actions">
        <${Y} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?s("settings.saving"):s("settings.save")}
        <//>
      </div>`}function tr(e){var t=e.item,n=e.errors;function r(i){return function(a){e.patch(i,a)}}return u`
      <${w} label=${s("settings.modbus.url")} value=${t.url} placeholder="192.168.0.102:502"
        error=${n.url} onInput=${r("url")} />
      <${w} label=${s("settings.modbus.unit")} type="number" step="1" min="1" max="247"
        value=${t.unit} placeholder="1" error=${n.unit} onInput=${r("unit")} />
      <${X} label=${s("settings.modbus.function")} value=${String(t.function||3)}
        options=${Qn} onChange=${r("function")} />
      <${w} label=${s("settings.modbus.register")} type="number" step="1" min="0"
        value=${t.register} error=${n.register} onInput=${r("register")} />
      <${X} label=${s("settings.modbus.dtype")} value=${t.dtype||"float32"}
        options=${ae(Je)} onChange=${r("dtype")} />
      <${w} label=${s("settings.modbus.scale")} type="number" step="any" value=${t.scale}
        placeholder="1" error=${n.scale} onInput=${r("scale")} />
      <label class="toggle-wrap">
        <input type="checkbox" class="toggle" checked=${t.swap_words===!0}
          onChange=${function(i){e.patch("swap_words",i.target.checked)}} />
        <span>${s("settings.modbus.swap_words")}</span>
      </label>
      ${e.kind==="production"?u`
        <${w} label=${s("settings.modbus.energy_register")} type="number" step="1" min="0"
          value=${t.energy_register} error=${n.energy_register} onInput=${r("energy_register")} />
        <${X} label=${s("settings.modbus.energy_dtype")} value=${t.energy_dtype||"uint32"}
          options=${ae(Je)} onChange=${r("energy_dtype")} />
        <${w} label=${s("settings.modbus.energy_scale")} type="number" step="any" value=${t.energy_scale}
          placeholder="1" error=${n.energy_scale} onInput=${r("energy_scale")} />
        <${X} label=${s("settings.energy_dimension")} value=${t.energy_dimension||""}
          options=${[{value:"",label:s("settings.energy_dimension_auto")}].concat(ae(yt))}
          onChange=${r("energy_dimension")} />`:null}
      ${e.kind==="load"?u`<${bl} item=${t} errors=${n} patch=${e.patch} />`:null}`}function bl(e){var t=e.item,n=e.errors,r=ue(t.write)?t.write:{};function i(a){return function(o){var l=Object.assign({},r);l[a]=o,e.patch("write",l)}}return u`
      <${w} label=${s("settings.modbus.state_register")} type="number" step="1" min="0"
        value=${t.state_register} error=${n.state_register}
        onInput=${function(a){e.patch("state_register",a)}} />
      <div class="settings-subhead">${s("settings.modbus.write_head")}</div>
      <${w} label=${s("settings.modbus.write_register")} type="number" step="1" min="0"
        value=${r.register} error=${n["write.register"]} onInput=${i("register")} />
      <${X} label=${s("settings.modbus.dtype")} value=${r.dtype||"uint16"}
        options=${ae(Je)} onChange=${i("dtype")} />
      <${X} label=${s("settings.modbus.write_function")}
        value=${r.function===void 0||r.function===null?"":String(r.function)}
        options=${[{value:"",label:s("settings.modbus.write_function_auto")}].concat(Vi)}
        onChange=${i("function")} />
      <${w} label=${s("settings.modbus.write_on")} type="number" step="any" value=${r.on}
        placeholder="1" error=${n["write.on"]} onInput=${i("on")} />
      <${w} label=${s("settings.modbus.write_off")} type="number" step="any" value=${r.off}
        placeholder="0" error=${n["write.off"]} onInput=${i("off")} />
      <${w} label=${s("settings.modbus.write_inactive")} type="number" step="any" value=${r.inactive}
        error=${n["write.inactive"]} onInput=${i("inactive")} />`}var yl={1:"Illegal function",2:"Illegal data address",3:"Illegal data value",4:"Server device failure",10:"Gateway path unavailable",11:"Gateway target failed to respond"};function wl(e){return"0x"+("0000"+Number(e).toString(16).toUpperCase()).slice(-4)}function kl(e){var t=gl(e.cfg),[n,r]=I({mode:t.length?"item":"free",target:0,url:"",unit:"",function:"3",register:"",dtype:"float32",swap_words:!1,scale:"",dimension:"W",wfunction:"",value:""}),[i,a]=I(!1),[o,l]=I(!1),[c,v]=I(null);function f(x){return function(E){var y=Object.assign({},n);y[x]=E,r(y),l(!1)}}var p=t[Number(n.target)]||t[0],d=n.mode==="item"&&!!p,h=d?"item":"free",g=Object.assign({},n,{mode:h}),b=zr(g,!1),$=zr(g,!0),M=d?p.writable:!0,_=String(d?p.register:n.register);function A(x,E){v(Object.assign({kind:E},x||{}))}function D(x){var E=x&&x.body||{},y=x&&x.message||String(x);E.reason==="connect"?y=s("settings.modbus.test.err_connect",{ms:E.ms}):E.reason==="timeout"&&(y=s("settings.modbus.test.err_timeout",{ms:E.ms})),v({error:y})}function N(){a(!0),l(!1),U.modbusRead(hl(g,p)).then(function(x){A(x,"read")},D).then(function(){a(!1)})}function k(){a(!0),l(!1),U.modbusWrite(ml(g,p)).then(function(x){A(x,"write")},D).then(function(){a(!1)})}var H=[{value:"item",label:s("settings.modbus.test.mode_item")},{value:"free",label:s("settings.modbus.test.mode_free")}];return u`
      <${F} group="grid" title=${s("settings.modbus.test.title")}>
        <p class="settings-scope">${s("settings.modbus.test.hint")}</p>
        <div class="settings-form">
          ${t.length?u`
            <${X} label=${s("settings.modbus.test.mode")} value=${h}
              options=${H} onChange=${f("mode")} />`:u`
            <div class="settings-warn" role="status">${s("settings.modbus.test.no_targets")}</div>`}
          ${d?u`
            <${X} label=${s("settings.modbus.test.target")} value=${String(n.target)}
              options=${t.map(function(x,E){return{value:String(E),label:x.name+" · "+s("settings.modbus.test.field."+x.field)+" · "+x.register}})}
              onChange=${f("target")} />`:u`
            <${w} label=${s("settings.modbus.url")} value=${n.url} placeholder="192.168.0.102:502"
              error=${b.url} onInput=${f("url")} />
            <${w} label=${s("settings.modbus.unit")} type="number" step="1" min="0" value=${n.unit}
              placeholder="1" error=${b.unit} onInput=${f("unit")} />
            <${X} label=${s("settings.modbus.function")} value=${String(n.function)}
              options=${Qn} onChange=${f("function")} />
            <${w} label=${s("settings.modbus.register")} type="number" step="1" min="0"
              value=${n.register} error=${b.register} onInput=${f("register")} />
            <${X} label=${s("settings.modbus.dtype")} value=${n.dtype}
              options=${ae(Je)} onChange=${f("dtype")} />
            <${w} label=${s("settings.modbus.scale")} type="number" step="any" value=${n.scale}
              placeholder="1" error=${b.scale} onInput=${f("scale")} />
            <${X} label=${s("settings.dimension")} value=${n.dimension}
              options=${ae(Jn)} onChange=${f("dimension")} />
            <${X} label=${s("settings.modbus.write_function")} value=${n.wfunction}
              options=${[{value:"",label:s("settings.modbus.write_function_auto")}].concat(Vi.slice(0,2))}
              onChange=${f("wfunction")} />
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle" checked=${n.swap_words===!0}
                onChange=${function(x){f("swap_words")(x.target.checked)}} />
              <span>${s("settings.modbus.swap_words")}</span>
            </label>`}
          <${w} label=${s("settings.modbus.test.value")} type="number" step="any" value=${n.value}
            disabled=${!M} error=${n.value!==""?$.value:null} onInput=${f("value")} />
        </div>
        ${M?null:u`<p class="settings-scope">${s("settings.modbus.test.readonly")}</p>`}
        ${o?u`
          <div class="settings-warn" role="alert">
            ${s("settings.modbus.test.confirm",{value:n.value,register:_,target:d?p.name:String(n.url)})}
          </div>`:null}
        <div class="settings-actions">
          ${o?u`
            <${Y} secondary onClick=${function(){l(!1)}}>${s("settings.modbus.test.cancel")}<//>
            <${Y} danger disabled=${i} onClick=${k}>${s("settings.modbus.test.confirm_yes")}<//>`:u`
            <${Y} secondary disabled=${i||!M||De($)}
              onClick=${function(){l(!0)}}>${s("settings.modbus.test.write")}<//>
            <${Y} disabled=${i||De(b)} onClick=${N}>${s("settings.modbus.test.read")}<//>`}
        </div>
        ${c?u`
          <div class="modbus-test-result" role="status">
            ${c.error?u`<span class="field-error">${c.error}</span>`:c.exception!==void 0?u`<span class="field-error">${s("settings.modbus.test.exception",{code:c.exception,name:yl[c.exception]||"?"})}</span>`:u`
                ${c.kind==="write"?u`<div>${s("settings.modbus.test.written")}</div>`:null}
                ${c.value!==void 0?u`<div>${s("settings.modbus.test.result_value")}: <strong>${String(c.value)}</strong></div>`:null}
                ${Array.isArray(c.raw)?u`<div>${s("settings.modbus.test.result_raw")}: <code>${c.raw.map(wl).join(" ")}</code></div>`:null}`}
          </div>`:null}
      <//>`}function xl(e){var t=e.item,n=e.otherIds,r=Xi(t,n);function i(c){return function(v){e.patch(c,v)}}function a(c){return function(v){var f=Object.assign({},t.url||{});f[c]=v,e.patch("url",f)}}var o=t.integration||"simulator",l=o==="shelly"?t.url||{}:{};return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||s("settings.new_entry")}</h3>
          <${nn} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${w} label=${s("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${w} label=${s("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${w} label=${s("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${X} label=${s("settings.load.type")} value=${t.loadType||En[0]}
            options=${ae(En)} onChange=${i("loadType")} />
          <${w} label=${s("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${X} label=${s("settings.integration")} value=${o}
            options=${ae(tl)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${s("settings.integration_config")}</div>
        <div class="settings-form">
          ${o==="shelly"?u`
            <${w} label=${s("settings.url.on")} value=${l.on} error=${r["url.on"]} onInput=${a("on")} />
            <${w} label=${s("settings.url.off")} value=${l.off} error=${r["url.off"]} onInput=${a("off")} />
            <${w} label=${s("settings.url.status")} value=${l.status} error=${r["url.status"]} onInput=${a("status")} />`:o==="modbustcp"?u`
            <${tr} kind="load" item=${t} errors=${r} patch=${e.patch} />`:u`
            <${w} label=${s("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${o==="homeassistant"?u`
              <${w} label=${s("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function Sl(e){var t=e.item,n=ea(t,e.otherIds);function r(a){return function(o){e.patch(a,o)}}var i=t.integration||"simulator";return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||s("settings.new_entry")}</h3>
          <${nn} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${w} label=${s("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${w} label=${s("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${X} label=${s("settings.prod.type")} value=${t.productionType||Gt[0]}
            options=${Gt.map(function(a){return{value:a,label:s(el[a])}})}
            onChange=${r("productionType")} />
          ${nl(t.productionType)?u`
            <div class="settings-warn" role="status">${s("settings.prodtype.unknown_warn")}</div>`:null}
          <${X} label=${s("settings.dimension")} value=${t.dimension||"W"}
            options=${ae(Jn)} onChange=${r("dimension")} />
          <${X} label=${s("settings.integration")} value=${i}
            options=${ae(Gi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${s("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${w} label=${s("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${w} label=${s("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${w} label=${s("settings.scale_field")} value=${t.scale_field} placeholder=${Ht(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${w} label=${s("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${w} label=${s("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${w} label=${s("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${w} label=${s("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />
            <${X} label=${s("settings.energy_dimension")} value=${t.energy_dimension||""}
              options=${[{value:"",label:s("settings.energy_dimension_auto")}].concat(ae(yt))}
              onChange=${r("energy_dimension")} />
            <${w} label=${s("settings.energy_scale_field")} value=${t.energy_scale_field} placeholder=${Ht(t.energy_field)} error=${n.energy_scale_field} onInput=${r("energy_scale_field")} />
            <${w} label=${s("settings.energy_scale_base")} type="number" step="1" min="-10" value=${t.energy_scale_base} placeholder="0" error=${n.energy_scale_base} onInput=${r("energy_scale_base")} />`:i==="modbustcp"?u`
            <${tr} kind="production" item=${t} errors=${n} patch=${e.patch} />`:u`
            <${w} label=${s("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${w} label=${s("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
        ${en(t.productionType)?u`
          <div class="settings-subhead">${s("settings.battery")}</div>
          <p class="settings-scope">${s("settings.battery_hint")}</p>
          <div class="settings-form">
            <${w} label=${s("settings.capacity")} type="number" step="1" min="1" value=${t.capacity} error=${n.capacity} onInput=${r("capacity")} />
            <${w} label=${s("settings.max_charge_power")} type="number" step="1" min="1" value=${t.maxChargePower} error=${n.maxChargePower} onInput=${r("maxChargePower")} />
            <${w} label=${s("settings.max_discharge_power")} type="number" step="1" min="1" value=${t.maxDischargePower} error=${n.maxDischargePower} onInput=${r("maxDischargePower")} />
            ${i==="gplug"?u`
              <${w} label=${s("settings.soc_field")} value=${t.soc_field} placeholder="ChaState" error=${n.soc_field} onInput=${r("soc_field")} />
              <${w} label=${s("settings.soc_scale_field")} value=${t.soc_scale_field} placeholder=${Ht(t.soc_field)} error=${n.soc_scale_field} onInput=${r("soc_scale_field")} />
              <${w} label=${s("settings.soc_scale_base")} type="number" step="1" min="-10" value=${t.soc_scale_base} placeholder="0" error=${n.soc_scale_base} onInput=${r("soc_scale_base")} />`:i==="modbustcp"?u`
              <${w} label=${s("settings.modbus.soc_register")} type="number" step="1" min="0" value=${t.soc_register} error=${n.soc_register} onInput=${r("soc_register")} />
              <${X} label=${s("settings.modbus.soc_dtype")} value=${t.soc_dtype||"uint16"}
                options=${ae(Je)} onChange=${r("soc_dtype")} />
              <${w} label=${s("settings.modbus.soc_scale")} type="number" step="any" value=${t.soc_scale} placeholder="1" error=${n.soc_scale} onInput=${r("soc_scale")} />`:i!=="simulator"?u`
              <${w} label=${s("settings.soc_url")} value=${t.soc_url} error=${n.soc_url} onInput=${r("soc_url")} />`:null}
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle" checked=${t.invert===!0}
                onChange=${function(a){e.patch("invert",a.target.checked)}} />
              <span>${s("settings.invert")}</span>
            </label>
          </div>`:null}
      </div>`}function Cl(e){var t=e.item,n=ta(t);function r(o){return function(l){e.patch(o,l)}}var i=t.integration||"simulator",a=t.id==="to"?s("settings.grid.to"):s("settings.grid.from");return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${X} label=${s("settings.dimension")} value=${t.dimension||"W"}
            options=${ae(Jn)} onChange=${r("dimension")} />
          <${X} label=${s("settings.integration")} value=${i}
            options=${ae(Gi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${s("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${w} label=${s("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${w} label=${s("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${w} label=${s("settings.scale_field")} value=${t.scale_field} placeholder=${Ht(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${w} label=${s("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${w} label=${s("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${w} label=${s("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${w} label=${s("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />`:i==="modbustcp"?u`
            <${tr} kind="grid" item=${t} errors=${n} patch=${e.patch} />`:u`
            <${w} label=${s("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${w} label=${s("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function Ml(e){var t=e.item,n=ra(t,e.otherIds);function r(i){return function(a){e.patch(i,a)}}return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||s("settings.new_entry")}</h3>
          <${nn} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${w} label=${s("settings.modbus.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${w} label=${s("settings.modbus.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${w} label=${s("settings.modbus.url")} value=${t.url} placeholder="192.168.0.102:502"
            error=${n.url} onInput=${r("url")} />
          <${w} label=${s("settings.modbus.unit")} type="number" step="1" min="1" max="247"
            value=${t.unit} placeholder="1" error=${n.unit} onInput=${r("unit")} />
          <${X} label=${s("settings.modbus.function")} value=${String(t.function||3)}
            options=${Qn} onChange=${r("function")} />
          <${w} label=${s("settings.modbus.register")} type="number" step="1" min="0"
            value=${t.register} error=${n.register} onInput=${r("register")} />
          <${X} label=${s("settings.modbus.dtype")} value=${t.dtype||"float32"}
            options=${ae(Je)} onChange=${r("dtype")} />
          <${w} label=${s("settings.modbus.scale")} type="number" step="any" value=${t.scale}
            placeholder="1" error=${n.scale} onInput=${r("scale")} />
          <${w} label=${s("settings.modbus.unit_label")} value=${t.unitLabel} placeholder="kWh"
            onInput=${r("unitLabel")} />
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.swap_words===!0}
              onChange=${function(i){e.patch("swap_words",i.target.checked)}} />
            <span>${s("settings.modbus.swap_words")}</span>
          </label>
        </div>
      </div>`}function Pt(e){var t=I(-1),n=t[0],r=t[1],i=e.items;function a(f,p){var d=i.slice(),h=Object.assign({},d[n]);h[f]=p,d[n]=h,e.onChange(d)}function o(){var f=i.concat([e.blank()]);e.onChange(f),r(f.length-1)}function l(){var f=i[n],p=(e.persistedIds||[]).indexOf(String(f&&f.id))!==-1;if(!(p&&!window.confirm(s(e.confirmKey)))){var d=i.slice();d.splice(n,1),r(-1),e.onDelete&&e.onDelete(f),e.onChange(d)}}var c=i.some(function(f,p){var d=i.filter(function(h,g){return g!==p}).map(function(h){return String(h.id)});return De(e.validate(f,d))}),v=n>=0&&i[n]?u`<${e.Detail} item=${i[n]} patch=${a} onDelete=${l}
          otherIds=${i.filter(function(f,p){return p!==n}).map(function(f){return String(f.id)})} />`:null;return u`
      <${F} group=${e.group}>
        <${_l}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:o}
          detail=${v} />
        <${rn} disabled=${c} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function Nl(e){var t=e.tariffs,n=dl(t);function r(f){return function(p){e.patch(f,p)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(f,p,d){var h=i.map(function(g,b){if(b!==f)return g;var $=Object.assign({},g);return $[p]=d,$});e.setWindows(h)}function o(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function l(f){e.setWindows(i.filter(function(p,d){return d!==f}))}var c=ie(t.grid_import_ht_chf_kwh)&&ie(t.grid_import_nt_chf_kwh),v=c&&i.length===0;return u`
      <${F} group="grid">
        <div class="settings-subhead">${s("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${w} label=${s("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${s("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${s("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${w} label=${s("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${w} label=${s("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${s("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${s("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(f,p){return u`
            <div key=${p} class="settings-form ht-window-row">
              <${w} label=${s("settings.tariff.win_days")} value=${f.days}
                placeholder=${s("settings.tariff.win_days.ph")} onInput=${function(d){a(p,"days",d)}} />
              <${w} label=${s("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${f.from} error=${n["win."+p]} onInput=${function(d){a(p,"from",qr(d))}} />
              <${w} label=${s("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${f.to} onInput=${function(d){a(p,"to",qr(d))}} />
              <${nn} onClick=${function(){l(p)}} />
            </div>`})}
        <${Y} small secondary onClick=${o}>${s("settings.tariff.win_add")}<//>
        ${v?u`<p class="settings-warn">${s("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${s("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${w} label=${s("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${w} label=${s("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${s("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${w} label=${s("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${rn} disabled=${De(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function qr(e){return L(e)?void 0:Number(e)}function Yr(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!L(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function El(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return u`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${Y} small secondary onClick=${function(){e.onUse(1)}}>${s("settings.gplug.scan_use1")}<//>
          <${Y} small secondary onClick=${function(){e.onUse(2)}}>${s("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function Tl(){var e=I(null),t=e[0],n=e[1],r=I(!1),i=r[0],a=r[1],o=I(!1),l=o[0],c=o[1],v=I(!1),f=v[0],p=v[1],d=I({scanning:!1,networks:null,error:!1}),h=d[0],g=d[1];function b(){a(!1),n(null),U.getWifiConfig().then(function(k){n({ssid1:k.ssid1,password1:"",ssid2:k.ssid2,password2:""})}).catch(function(){a(!0)})}Q(function(){b()},[]);function $(k){return function(H){n(function(x){var E=Object.assign({},x);return E[k]=H,E})}}function M(){f||!window.confirm(s("settings.gplug.restart_confirm"))||(p(!0),U.restartDevice().then(function(){ne(s("settings.gplug.restart_success"),{type:"info"})}).catch(function(){ne(s("settings.gplug.restart_error"),{type:"error"})}).then(function(){p(!1)}))}function _(){l||!t||De(Yr(t))||(c(!0),U.setWifiConfig(t).then(function(){ne(s("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(k){ne(k&&k.message||s("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}function A(){g({scanning:!0,networks:null,error:!1}),U.wifiScanStart().catch(function(){});var k=0;function H(){k+=1,U.wifiScanResult().then(function(x){var E=x&&(x.WiFiScan!==void 0?x.WiFiScan:x.WifiScan);if(E&&typeof E=="object"){var y=Object.keys(E).map(function(R){return E[R]});y.sort(function(R,B){return(Number(B.RSSI)||0)-(Number(R.RSSI)||0)}),g({scanning:!1,networks:y,error:!1});return}if(k>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(H,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(H,1e3)}function D(k,H){n(function(x){var E=Object.assign({},x);return E["ssid"+k]=H,E})}if(i)return u`
        <${F} group="grid">
          <p class="placeholder-text">${s("settings.load_error")}</p>
          <${Y} secondary small onClick=${b}>${s("settings.retry")}<//>
        <//>`;if(!t)return u`<${F} group="grid"><p class="placeholder-text">${s("settings.loading")}</p><//>`;var N=Yr(t);return u`
      <div>
        <${F} group="grid" title=${s("settings.gplug.restart_title")}>
          <p class="settings-scope">${s("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${Y} danger disabled=${f} onClick=${M}>
              ${s(f?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${s("settings.gplug.wifi_title")}>
          <p class="settings-scope">${s("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${s("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${w} label=${s("settings.gplug.ssid1")} value=${t.ssid1} error=${N.ssid1} onInput=${$("ssid1")} />
            <${w} label=${s("settings.gplug.password1")} type="password" value=${t.password1} error=${N.password1}
              placeholder=${s("settings.gplug.password_placeholder")} onInput=${$("password1")} />
          </div>
          <div class="settings-subhead">${s("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${w} label=${s("settings.gplug.ssid2")} value=${t.ssid2} error=${N.ssid2} onInput=${$("ssid2")} />
            <${w} label=${s("settings.gplug.password2")} type="password" value=${t.password2} error=${N.password2}
              placeholder=${s("settings.gplug.password_placeholder")} onInput=${$("password2")} />
          </div>

          <div class="settings-subhead">${s("settings.gplug.scan_button")}</div>
          <${Y} secondary small disabled=${h.scanning} onClick=${A}>
            ${h.scanning?s("settings.gplug.scanning"):s("settings.gplug.scan_button")}
          <//>
          ${h.error?u`<p class="settings-warn">${s("settings.gplug.scan_error")}</p>`:null}
          ${h.networks&&h.networks.length===0?u`<p class="placeholder-text">${s("settings.gplug.scan_empty")}</p>`:null}
          ${h.networks&&h.networks.length>0?u`
            <div class="wifi-scan-list">
              ${h.networks.map(function(k,H){return u`<${El} key=${H} net=${k} onUse=${function(x){D(x,k.SSId)}} />`})}
            </div>`:null}

          <${rn} disabled=${De(N)} onSave=${_} saving=${l} />
        <//>
      </div>`}function Il(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function Gr(e){return e==null||isNaN(e)?"–":e<1024?e+" B":e<1024*1024?Math.round(e/1024)+" KB":Math.round(e/(1024*1024)*10)/10+" MB"}function Pl(){var e=I(null),t=e[0],n=e[1],r=I(Pi()),i=r[0],a=r[1],o=I(!1),l=o[0],c=o[1];function v(g){if(!g.available||!g.siteId){n(null);return}qn(g.siteId).then(n,function(){n(null)})}Q(function(){var g=Oi(function(b){a(Object.assign({},b)),v(b)});return Jt().then(function(b){a(Object.assign({},b)),v(b)}),g},[]);function f(){l||(c(!0),cs(U).then(function(g){v(g),ne(s("settings.data.synced"),{type:"info"})},function(){ne(s("settings.data.sync_error"),{type:"error"})}).then(function(){c(!1)}))}function p(){i.siteId&&ss(i.siteId).then(function(g){Il("gplug-archiv-"+i.siteId+".csv",g)},function(){ne(s("settings.data.export_error"),{type:"error"})})}function d(g){var b=g.target&&g.target.files&&g.target.files[0];b&&(g.target.value="",b.text().then(function($){return os($,i.siteId)}).then(function($){n($),ne(s("settings.data.import_ok",{count:$.count}),{type:"info"})},function($){ne($&&$.message||s("settings.data.import_error"),{type:"error"})}))}if(i.available===!1)return u`
        <${F} group="grid" title=${s("settings.data.title")}>
          <p class="settings-warn">${s("settings.data.unavailable")}</p>
          <p class="settings-scope">${s("settings.data.multi_client")}</p>
        <//>`;if(!t)return u`<${F} group="grid"><p class="placeholder-text">${s("settings.loading")}</p><//>`;var h=t.estimate;return u`
      <div>
        <${F} group="grid" title=${s("settings.data.title")}>
          <p class="settings-scope">${s("settings.data.desc")}</p>
          <dl class="data-facts">
            <dt>${s("settings.data.site")}</dt><dd>${t.siteId}</dd>
            <dt>${s("settings.data.range")}</dt>
            <dd>${t.firstE15Ts===null?s("common.nodata"):S.time(t.firstE15Ts,"1d")+" – "+S.time(t.lastE15Ts,"1d")}</dd>
            <dt>${s("settings.data.records")}</dt><dd>${t.count} (${t.days} ${s("settings.data.days")})</dd>
            <dt>${s("settings.data.last_sync")}</dt>
            <dd>${t.syncedAt?S.time(t.syncedAt,"15m"):"–"}</dd>
            <dt>${s("settings.data.storage")}</dt>
            <dd>${h?Gr(h.usage)+" / "+Gr(h.quota):"–"}</dd>
          </dl>

          <div class="settings-subhead">${s("settings.data.gaps")}</div>
          ${t.gaps&&t.gaps.length?u`
            <ul class="data-gaps">
              ${t.gaps.map(function(g,b){return u`<li key=${b}>${S.time(g[0],"15m")} – ${S.time(g[1],"15m")}</li>`})}
            </ul>`:u`<p class="settings-scope">${s("settings.data.no_gaps")}</p>`}

          <div class="settings-actions">
            <${Y} secondary small disabled=${l} onClick=${f}>
              ${s(l?"settings.data.syncing":"settings.data.sync")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${s("settings.data.transfer_title")}>
          <p class="settings-scope">${s("settings.data.multi_client")}</p>
          <div class="settings-actions">
            <${Y} secondary small onClick=${p}>${s("settings.data.export")}<//>
            <label class="btn btn-secondary btn-small data-import-label">
              ${s("settings.data.import")}
              <input type="file" accept=".csv,text/csv" class="data-import-input"
                onChange=${d} />
            </label>
          </div>
        <//>
      </div>`}function Ol(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function Al(e){var t=I(null),n=t[0],r=t[1],i=I(!1),a=i[0],o=i[1],l=I(!1),c=l[0],v=l[1];function f(){o(!1),r(null),U.getConfigRaw().then(function(g){r(Ol(g))}).catch(function(){o(!0)})}Q(function(){f()},[]);var p=null,d=[];if(n!==null)try{d=pl(JSON.parse(n))}catch(g){p=g.message}function h(){if(!(c||p)){var g;try{g=JSON.parse(n)}catch{return}v(!0),U.postConfig(g).then(function(){ne(s("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),f()}).catch(function(b){ne(b&&b.message||s("settings.save_error"),{type:"error"})}).then(function(){v(!1)})}}return a?u`
        <${F} group="grid">
          <p class="placeholder-text">${s("settings.load_error")}</p>
          <${Y} secondary small onClick=${f}>${s("settings.retry")}<//>
        <//>`:n===null?u`<${F} group="grid"><p class="placeholder-text">${s("settings.loading")}</p><//>`:u`
      <${F} group="grid">
        <p class="settings-scope">${s("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${p?u`<p class="settings-warn">${s("settings.pro.invalid_json",{msg:p})}</p>`:null}
        ${d.length?u`
          <div class="settings-warn">
            <strong>${s("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${d.map(function(g,b){return u`<li key=${b}><code>${g.path||"/"}</code> — ${s(g.key)}</li>`})}
            </ul>
            <span>${s("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${Y} secondary disabled=${c} onClick=${f}>${s("settings.pro.reload")}<//>
          <${Y} disabled=${c||!!p} onClick=${h}>
            ${s(c?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function Ll(){return{id:"",friendlyName:"",loadType:En[0],currentPower:"",priority:1,integration:"simulator",url:""}}function Rl(){return{id:"",friendlyName:"",productionType:Gt[0],dimension:"W",integration:"simulator",url:""}}function Dl(){return{id:"",friendlyName:"",integration:"modbustcp",url:"",unit:1,function:3,register:"",dtype:"float32"}}function Fl(e){var t=e.params&&e.params.tab||"site",n=Xo[t]||"site",r=I(null),i=r[0],a=r[1],o=I(null),l=o[0],c=o[1],v=I(!1),f=v[0],p=v[1],d=I(!1),h=d[0],g=d[1],b=I({loads:[],productions:[],grid:[],modbusRegisters:[]}),$=b[0],M=b[1];function _(m){return(Array.isArray(m)?m:[]).map(function(C){return String(C&&C.id)}).filter(function(C){return!L(C)})}function A(){c(null),U.getConfig().then(function(m){a(D(m)),g(!L(m&&m.id)),M({loads:_(m&&m.loads),productions:_(m&&m.productions),grid:_(m&&m.grid),modbusRegisters:_(m&&m.modbusRegisters)})}).catch(function(){c(!0),a(null)})}Q(function(){A()},[]);function D(m){m=m||{};var C=Object.assign({},m);return C.loads=Array.isArray(m.loads)?m.loads:[],C.productions=Array.isArray(m.productions)?m.productions:[],C.grid=Array.isArray(m.grid)?m.grid:[],C.modbusRegisters=Array.isArray(m.modbusRegisters)?m.modbusRegisters:[],C.tariffs=Object.assign({},rl,m.tariffs||{}),C}function N(m,C){a(function(O){var P=Object.assign({},O);return P[m]=C,P})}function k(m,C){a(function(O){var P=Object.assign({},O);return P.tariffs=Object.assign({},O.tariffs),P.tariffs[m]=C,P})}function H(m){a(function(C){var O=Object.assign({},C);return O.tariffs=Object.assign({},C.tariffs),O.tariffs.ht_windows=m,O})}function x(m,C){a(function(O){var P=Object.assign({},O);return P[m]=C,P})}function E(){f||(p(!0),U.postConfig(y(i)).then(function(){ne(s("settings.saved"),{type:"info"}),g(!0),A()}).catch(function(m){ne(m&&m.message||s("settings.save_error"),{type:"error"})}).then(function(){p(!1)}))}function y(m){var C=Object.assign({},m);return C.loads=m.loads.map(function(O){var P=Object.assign({},O);return P.currentPower!==""&&P.currentPower!==void 0&&(P.currentPower=Number(P.currentPower)),P.priority!==""&&P.priority!==void 0&&(P.priority=Number(P.priority)),pn(P)}),C.productions=m.productions.map(function(O){return pn(Ur(O))}),C.grid=m.grid.map(function(O){return pn(Ur(O))}),C.modbusRegisters=m.modbusRegisters.map(function(O){var P=Object.assign({},O);return P.function=Number(P.function||3),P.register=Number(P.register),L(P.unit)?delete P.unit:P.unit=Number(P.unit),L(P.scale)||Number(P.scale)===1?delete P.scale:P.scale=Number(P.scale),L(P.unitLabel)&&delete P.unitLabel,P.swap_words!==!0&&delete P.swap_words,P}),C.tariffs=Object.assign({},m.tariffs),Zi.forEach(function(O){C.tariffs[O]=Number(m.tariffs[O])}),m.tariffs.co2_g_kwh!==void 0&&m.tariffs.co2_g_kwh!==""&&(C.tariffs.co2_g_kwh=Number(m.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(O){L(m.tariffs[O])?delete C.tariffs[O]:C.tariffs[O]=Number(m.tariffs[O])}),Array.isArray(m.tariffs.ht_windows)&&(m.tariffs.ht_windows.length===0?delete C.tariffs.ht_windows:C.tariffs.ht_windows=m.tariffs.ht_windows.map(function(O){return{days:O.days,from:Number(O.from),to:Number(O.to)}})),C}function R(m){!m||L(m.id)||U.setLoadState(m.id,"INACTIVE").catch(function(){})}function B(m){wi.navigate("/einstellungen/"+Jo[m])}var q=Zo.map(function(m){return u`
        <button key=${m} type="button"
          class=${"pill"+(m===n?" pill-active":"")}
          onClick=${function(){B(m)}}>${s(Qo[m])}</button>`}),K;return l?K=u`
        <${F}>
          <p class="placeholder-text">${s("settings.load_error")}</p>
          <${Y} secondary small onClick=${A}>${s("settings.retry")}<//>
        <//>`:i?n==="site"?K=u`<${$l} cfg=${i} patch=${N} idLocked=${h}
        onSave=${E} saving=${f} />`:n==="tariffs"?K=u`<${Nl} tariffs=${i.tariffs} patch=${k}
        setWindows=${H} onSave=${E} saving=${f} />`:n==="daten"?K=u`<${Pl} />`:n==="gplug"?K=u`<${Tl} />`:n==="pro"?K=u`<${Al} onSaved=${A} />`:n==="loads"?K=u`<${Pt} group="loads"
        items=${i.loads} onChange=${function(m){x("loads",m)}}
        listTitle=${s("settings.tab.loads")}
        labelFn=${function(m){return m.friendlyName||m.id||s("settings.new_entry")}}
        blank=${Ll} confirmKey="settings.confirm_delete_load"
        persistedIds=${$.loads}
        onDelete=${R}
        validate=${Xi} Detail=${xl}
        onSave=${E} saving=${f} />`:n==="productions"?K=u`<${Pt} group="production"
        items=${i.productions} onChange=${function(m){x("productions",m)}}
        listTitle=${s("settings.tab.productions")}
        labelFn=${function(m){return m.friendlyName||m.id||s("settings.new_entry")}}
        blank=${Rl} confirmKey="settings.confirm_delete_production"
        persistedIds=${$.productions}
        validate=${function(m,C){return ea(m,C)}} Detail=${Sl}
        onSave=${E} saving=${f} />`:n==="grid"?K=u`<${Pt} group="grid" fixedList
        items=${i.grid} onChange=${function(m){x("grid",m)}}
        listTitle=${s("settings.tab.grid")}
        labelFn=${function(m){return m.id==="to"?s("settings.grid.to"):s("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${$.grid}
        validate=${function(m){return ta(m)}} Detail=${Cl}
        onSave=${E} saving=${f} />`:n==="modbus"&&(K=u`<${Pt} group="grid"
        items=${i.modbusRegisters} onChange=${function(m){x("modbusRegisters",m)}}
        listTitle=${s("settings.tab.modbus")}
        labelFn=${function(m){return m.friendlyName||m.id||s("settings.new_entry")}}
        blank=${Dl} confirmKey="settings.confirm_delete_load"
        persistedIds=${$.modbusRegisters}
        validate=${ra} Detail=${Ml}
        onSave=${E} saving=${f} />
        <${kl} cfg=${i} />`):K=u`<${F}><p class="placeholder-text">${s("settings.loading")}</p><//>`,u`
      <div>
        <${Qe} title=${s("page.settings")} />
        <div class="pill-bar">${q}</div>
        ${K}
      </div>`}var Bl=["https://gplug-ch.github.io/gplug-cdn/v0.1.5/lang-en.json"];function Wl(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(l,c,v,f){for(var p=[],d=0;d<=90;d++){var h=e-900+d*10,g=d>=v&&d<=f?null:Math.max(0,l+c*Math.sin(d/9)+c*.4*Math.sin(d/2.3));p.push({t:h,y:g})}return p}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],o=0;o<23;o++)a.push({id:o,ts:S.time(e-o*900,"15m"),imp:S.num(Math.round(Math.random()*0+o*7)/100,2),chf:S.chf((o%3===0?-1:1)*o*.19,!0)});return u`
    <div>
      <${Qe} title=${s("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${u`<${Y} onClick=${function(){ne("Toast!",{type:"info"})}}>Toast<//>`} />

      <${F} group="grid" title="LineChart" tooltip=${s("tooltip.consumption")}
        value=${S.w(1396)} valueColor="var(--c-consumption)">
        <${Xt} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${S.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${F} group="grid" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${S.chf(12.4,!0)} valueColor="var(--c-export)">
        <${bi} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(l){return S.chf(l,!0)}}
          points=${r.map(function(l){return{t:l.t,y:l.y,color:l.y<0?"var(--c-import)":"var(--c-export)"}})} />
      <//>

      <${F} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${Dt} state="active" />
          <${Dt} state="waiting" />
          <${Dt} state="inactive" />
        </div>
        <div class="demo-row">
          <${Y}>Speichern<//>
          <${Y} secondary>Abbrechen<//>
          <${Y} danger>Löschen<//>
          <${Y} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${ka} label="Anzeige-Name" value="Familie Huber" />
          <${pi} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${F} group="production" title="DataTable">
        <${Pa} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(l){var c=l.chf.indexOf("−")===0;return u`<span class=${c?"val-neg":"val-pos"}>${l.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function Ul(){return[{path:"/",component:no},{path:"/verlauf",component:po},{path:"/zaehler",component:zo},{path:"/modbus",component:Vo},{path:"/einstellungen/:tab?",component:Fl},{path:"/demo",component:Wl}]}function Vr(){var e=document.getElementById("app"),t=Bl;ma.load(t).catch(function(){}).then(function(){da(u`<${fs} routes=${Ul()} />`,e),us(U)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vr):Vr();
