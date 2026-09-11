(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var en,Q,_i,Ne,gr,yi,bi,un,Pt,pt,wi,Bn,xn,zn,Vt={},qt=[],Ta=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,tn=Array.isArray;function Se(e,t){for(var n in t)e[n]=t[n];return e}function jn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ki(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?en.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Ot(e,o,r,i,null)}function Ot(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++_i,__i:-1,__u:0};return i==null&&Q.vnode!=null&&Q.vnode(a),a}function bt(e){return e.children}function At(e,t){this.props=e,this.context=t}function et(e,t){if(t==null)return e.__?et(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?et(e):null}function Na(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Se({},t);a.__v=t.__v+1,Q.vnode&&Q.vnode(a),Hn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??et(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Mi(r,a,i),t.__e=t.__=null,a.__e!=n&&xi(a)}}function xi(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),xi(e)}function mr(e){(!e.__d&&(e.__d=!0)&&Ne.push(e)&&!Yt.__r++||gr!=Q.debounceRendering)&&((gr=Q.debounceRendering)||yi)(Yt)}function Yt(){try{for(var e,t=1;Ne.length;)Ne.length>t&&Ne.sort(bi),e=Ne.shift(),t=Ne.length,Na(e)}finally{Ne.length=Yt.__r=0}}function zi(e,t,n,r,i,a,o,s,u,f,d){var h,v,p,g,$,m,b,_=r&&r.__k||qt,k=t.length;for(u=Pa(n,t,_,u,k),h=0;h<k;h++)(p=n.__k[h])!=null&&(v=p.__i!=-1&&_[p.__i]||Vt,p.__i=h,m=Hn(e,p,v,i,a,o,s,u,f,d),g=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&Kn(v.ref,null,p),d.push(p.ref,p.__c||g,p)),$==null&&g!=null&&($=g),(b=!!(4&p.__u))||v.__k===p.__k?(u=Ci(p,u,e,b),b&&v.__e&&(v.__e=null)):typeof p.type=="function"&&m!==void 0?u=m:g&&(u=g.nextSibling),p.__u&=-7);return n.__e=$,u}function Pa(e,t,n,r,i){var a,o,s,u,f,d=n.length,h=d,v=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=Ot(null,o,null,null,null):tn(o)?o=e.__k[a]=Ot(bt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=Ot(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,u=a+v,o.__=e,o.__b=e.__b+1,s=null,(f=o.__i=Oa(o,n,u,h))!=-1&&(h--,(s=n[f])&&(s.__u|=2)),s==null||s.__v==null?(f==-1&&(i>d?v--:i<d&&v++),typeof o.type!="function"&&(o.__u|=4)):f!=u&&(f==u-1?v--:f==u+1?v++:(f>u?v--:v++,o.__u|=4))):e.__k[a]=null;if(h)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==r&&(r=et(s)),Ii(s,s));return r}function Ci(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Ci(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=et(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Oa(e,t,n,r){var i,a,o,s=e.key,u=e.type,f=t[n],d=f!=null&&(2&f.__u)==0;if(f===null&&s==null||d&&s==f.key&&u==f.type)return n;if(r>(d?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((f=t[o=i>=0?i--:a++])!=null&&(2&f.__u)==0&&s==f.key&&u==f.type)return o}return-1}function $r(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ta.test(t)?n:n+"px"}function St(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||$r(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||$r(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(wi,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[pt]=r[pt]:(n[pt]=Bn,e.addEventListener(t,a?zn:xn,a)):e.removeEventListener(t,a?zn:xn,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function _r(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Pt]==null)t[Pt]=Bn++;else if(t[Pt]<n[pt])return;return n(Q.event?Q.event(t):t)}}}function Hn(e,t,n,r,i,a,o,s,u,f){var d,h,v,p,g,$,m,b,_,k,z,w,S,B,I,A,M=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=Q.__b)&&d(t);e:if(typeof M=="function"){h=o.length;try{if(_=t.props,k=M.prototype&&M.prototype.render,z=(d=M.contextType)&&r[d.__c],w=d?z?z.props.value:d.__:r,n.__c?b=(v=t.__c=n.__c).__=v.__E:(k?t.__c=v=new M(_,w):(t.__c=v=new At(_,w),v.constructor=M,v.render=Fa),z&&z.sub(v),v.state||(v.state={}),v.__n=r,p=v.__d=!0,v.__h=[],v._sb=[]),k&&v.__s==null&&(v.__s=v.state),k&&M.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=Se({},v.__s)),Se(v.__s,M.getDerivedStateFromProps(_,v.__s))),g=v.props,$=v.state,v.__v=t,p)k&&M.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),k&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(k&&M.getDerivedStateFromProps==null&&_!==g&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(_,w),t.__v==n.__v||!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(_,v.__s,w)===!1){t.__v!=n.__v&&(v.props=_,v.state=v.__s,v.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(T){T&&(T.__=t)}),qt.push.apply(v.__h,v._sb),v._sb=[],v.__h.length&&o.push(v);break e}v.componentWillUpdate!=null&&v.componentWillUpdate(_,v.__s,w),k&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(g,$,m)})}if(v.context=w,v.props=_,v.__P=e,v.__e=!1,S=Q.__r,B=0,k)v.state=v.__s,v.__d=!1,S&&S(t),d=v.render(v.props,v.state,v.context),qt.push.apply(v.__h,v._sb),v._sb=[];else do v.__d=!1,S&&S(t),d=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++B<25);v.state=v.__s,v.getChildContext!=null&&(r=Se(Se({},r),v.getChildContext())),k&&!p&&v.getSnapshotBeforeUpdate!=null&&(m=v.getSnapshotBeforeUpdate(g,$)),I=d!=null&&d.type===bt&&d.key==null?Ei(d.props.children):d,s=zi(e,tn(I)?I:[I],t,n,r,i,a,o,s,u,f),v.base=t.__e,t.__u&=-161,v.__h.length&&o.push(v),b&&(v.__E=v.__=null)}catch(T){if(o.length=h,t.__v=null,u||a!=null){if(T.then){for(t.__u|=u?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(A=a.length;A--;)jn(a[A])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),T.then||Si(t),Q.__e(T,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Aa(n.__e,t,n,r,i,a,o,u,f);return(d=Q.diffed)&&d(t),128&t.__u?void 0:s}function Si(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Si))}function Mi(e,t,n){for(var r=0;r<n.length;r++)Kn(n[r],n[++r],n[++r]);Q.__c&&Q.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){Q.__e(a,i.__v)}})}function Ei(e){return typeof e!="object"||e==null||e.__b>0?e:tn(e)?e.map(Ei):e.constructor!==void 0?null:Se({},e)}function Aa(e,t,n,r,i,a,o,s,u){var f,d,h,v,p,g,$,m=n.props||Vt,b=t.props,_=t.type;if(_=="svg"?i="http://www.w3.org/2000/svg":_=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((p=a[f])&&"setAttribute"in p==!!_&&(_?p.localName==_:p.nodeType==3)){e=p,a[f]=null;break}}if(e==null){if(_==null)return document.createTextNode(b);e=document.createElementNS(i,_,b.is&&b),s&&(Q.__m&&Q.__m(t,a),s=!1),a=null}if(_==null)m===b||s&&e.data==b||(e.data=b);else{if(a=_=="textarea"&&b.defaultValue!=null?null:a&&en.call(e.childNodes),!s&&a!=null)for(m={},f=0;f<e.attributes.length;f++)m[(p=e.attributes[f]).name]=p.value;for(f in m)p=m[f],f=="dangerouslySetInnerHTML"?h=p:f=="children"||f in b||f=="value"&&"defaultValue"in b||f=="checked"&&"defaultChecked"in b||St(e,f,null,p,i);for(f in b)p=b[f],f=="children"?v=p:f=="dangerouslySetInnerHTML"?d=p:f=="value"?g=p:f=="checked"?$=p:s&&typeof p!="function"||m[f]===p||St(e,f,p,m[f],i);if(d)s||h&&(d.__html==h.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(h&&(e.innerHTML=""),zi(t.type=="template"?e.content:e,tn(v)?v:[v],t,n,r,_=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&et(n,0),s,u),a!=null)for(f=a.length;f--;)jn(a[f]);s&&_!="textarea"||(f="value",_=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[f]||_=="progress"&&!g||_=="option"&&g!=m[f])&&St(e,f,g,m[f],i),f="checked",$!=null&&$!=e[f]&&St(e,f,$,m[f],i))}return e}function Kn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){Q.__e(i,n)}}function Ii(e,t,n){var r,i;if(Q.unmount&&Q.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Kn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){Q.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ii(r[i],t,n||typeof e.type!="function");n||jn(e.__e),e.__c=e.__=e.__e=void 0}function Fa(e,t,n){return this.constructor(e,n)}function La(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),Q.__&&Q.__(e,t),i=(r=!1)?null:t.__k,a=[],o=[],Hn(t,e=t.__k=ki(bt,null,[e]),i||Vt,Vt,t.namespaceURI,i?null:t.firstChild?en.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),Mi(a,e,o),e.props.children=null}en=qt.slice,Q={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(s){e=s}throw e}},_i=0,At.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Se({},this.state),typeof e=="function"&&(e=e(Se({},n),this.props)),e&&Se(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),mr(this))},At.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),mr(this))},At.prototype.render=bt,Ne=[],yi=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,bi=function(e,t){return e.__v.__b-t.__v.__b},Yt.__r=0,un=Math.random().toString(8),Pt="__d"+un,pt="__a"+un,wi=/(PointerCapture)$|Capture$/i,Bn=0,xn=_r(!1),zn=_r(!0);var mt,ie,cn,yr,Gt=0,Ti=[],ae=Q,br=ae.__b,wr=ae.__r,kr=ae.diffed,xr=ae.__c,zr=ae.unmount,Cr=ae.__;function Vn(e,t){ae.__h&&ae.__h(ie,e,Gt||t),Gt=0;var n=ie.__H||(ie.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return Gt=1,Ra(Pi,e)}function Ra(e,t,n){var r=Vn(mt++,2);if(r.t=e,!r.__c&&(r.__=[Pi(void 0,t),function(s){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,s);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=ie,!ie.__f)){var i=function(s,u,f){if(!r.__c.__H)return!0;var d=!1,h=r.__c.props!==s;if(r.__c.__H.__.some(function(p){if(p.__N){d=!0;var g=p.__[0];p.__=p.__N,p.__N=void 0,g!==p.__[0]&&(h=!0)}}),a){var v=a.call(this,s,u,f);return d?v||h:v}return!d||h};ie.__f=!0;var a=ie.shouldComponentUpdate,o=ie.componentWillUpdate;ie.componentWillUpdate=function(s,u,f){if(this.__e){var d=a;a=void 0,i(s,u,f),a=d}o&&o.call(this,s,u,f)},ie.shouldComponentUpdate=i}return r.__N||r.__}function Z(e,t){var n=Vn(mt++,3);!ae.__s&&Ni(n.__H,t)&&(n.__=e,n.u=t,ie.__H.__h.push(n))}function we(e){return Gt=5,Ue(function(){return{current:e}},[])}function Ue(e,t){var n=Vn(mt++,7);return Ni(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Da(){for(var e;e=Ti.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ft),t.__h.some(Cn),t.__h=[]}catch(n){t.__h=[],ae.__e(n,e.__v)}}}ae.__b=function(e){ie=null,br&&br(e)},ae.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Cr&&Cr(e,t)},ae.__r=function(e){wr&&wr(e),mt=0;var t=(ie=e.__c).__H;t&&(cn===ie?(t.__h=[],ie.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Ft),t.__h.some(Cn),t.__h=[],mt=0)),cn=ie},ae.diffed=function(e){kr&&kr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ti.push(t)!==1&&yr===ae.requestAnimationFrame||((yr=ae.requestAnimationFrame)||Wa)(Da)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),cn=ie=null},ae.__c=function(e,t){t.some(function(n){try{n.__h.some(Ft),n.__h=n.__h.filter(function(r){return!r.__||Cn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],ae.__e(r,n.__v)}}),xr&&xr(e,t)},ae.unmount=function(e){zr&&zr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Ft(r)}catch(i){t=i}}),n.__H=void 0,t&&ae.__e(t,n.__v))};var Sr=typeof requestAnimationFrame=="function";function Wa(e){var t,n=function(){clearTimeout(r),Sr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Sr&&(t=requestAnimationFrame(n))}function Ft(e){var t=ie,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ie=t}function Cn(e){var t=ie;e.__c=e.__(),ie=t}function Ni(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Pi(e,t){return typeof t=="function"?t(e):t}var Oi=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],s=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?r[0]=s:o===4?r[1]=Object.assign(r[1]||{},s):o===5?(r[1]=r[1]||{})[t[++a]]=s:o===6?r[1][t[++a]]+=s+"":o?(i=e.apply(s,Oi(e,s,n,["",null])),r.push(i),s[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(s)}return r},Mr=new Map;function Ua(e){var t=Mr.get(this);return t||(t=new Map,Mr.set(this,t)),(t=Oi(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,o="",s="",u=[0],f=function(v){a===1&&(v||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,v,o):a===3&&(v||o)?(u.push(3,v,o),a=2):a===2&&o==="..."&&v?u.push(4,v,0):a===2&&o&&!v?u.push(5,0,!0,o):a>=5&&((o||!v&&a===5)&&(u.push(a,0,o,i),a=6),v&&(u.push(a,v,0,i),a=6)),o=""},d=0;d<n.length;d++){d&&(a===1&&f(),f(d));for(var h=0;h<n[d].length;h++)r=n[d][h],a===1?r==="<"?(f(),u=[u],a=3):o+=r:a===4?o==="--"&&r===">"?(a=1,o=""):o=r+o[0]:s?r===s?s="":o+=r:r==='"'||r==="'"?s=r:r===">"?(f(),a=1):a&&(r==="="?(a=5,i=o,o=""):r==="/"&&(a<5||n[d][h+1]===">")?(f(),a===3&&(u=u[0]),a=u,(u=u[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(f(),a=2):o+=r),a===3&&o==="!--"&&(a=4,u=u[0])}return f(),u})(e)),t),arguments,[])).length>1?t:t[0]}const c=Ua.bind(ki);var ht={},Ai="de",Er={};function l(e,t){var n=ht[e];return n===void 0?(Er[e]||(Er[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function Ba(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return ht=i||{},Ai=ht["meta.lang"]||document.documentElement.lang||"de",ht}).catch(function(){return n()})}return n()}const ja={t:l,load:Ba,getLang:function(){return Ai},getDict:function(){return ht}};var $t=" ",Fi="−";function tt(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?Fi:"")+r}function Ha(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function Ka(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Ha(tt(e/1e3,1))+$t+"kW":tt(Math.round(e),0)+$t+"W"}function Va(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?tt(e/1e3,2)+$t+"kWh":tt(Math.round(e),0)+$t+"Wh"}function qa(e,t){if(e==null||isNaN(e))return"–";var n=tt(e,2);return t&&e>0&&(n="+"+n),n+$t+"CHF"}function De(e){return(e<10?"0":"")+e}function Ya(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=De(n.getDate())+"."+De(n.getMonth()+1)+"."+n.getFullYear(),i=De(n.getHours())+":"+De(n.getMinutes());switch(t){case"1d":return r;case"dm":return De(n.getDate())+"."+De(n.getMonth()+1)+".";case"1mo":return De(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const x={num:tt,w:Ka,wh:Va,chf:qa,time:Ya,MINUS:Fi};function Le(e){return c`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?c`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?c`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function F(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:""),n=!!e.collapsible,r=e.collapseKey?"ui.card."+e.collapseKey:null,[i,a]=C(function(){if(!n)return!0;if(r)try{var u=window.localStorage.getItem(r);if(u==="0")return!1;if(u==="1")return!0}catch{}return e.defaultOpen!==!1});function o(){var u=!i;if(a(u),r)try{window.localStorage.setItem(r,u?"1":"0")}catch{}}var s=!n||i;return c`
      <section class=${t+(n&&!i?" is-collapsed":"")}>
        ${e.title||e.value||e.badge||e.tooltip?c`
          <div class=${"card-head"+(s?"":" card-head-collapsed")}>
            <div class="card-head-left">
              ${n?c`
                <button type="button" class="card-toggle" aria-expanded=${i?"true":"false"}
                  aria-label=${l(i?"common.collapse":"common.expand")}
                  onClick=${o}>
                  <svg class="card-toggle-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                <//>`:null}
              ${e.title?c`<h2 class="card-title">${e.title}</h2>`:null}
              ${e.tooltip?c`<${pe} text=${e.tooltip} />`:null}
              ${e.subtitle?c`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?c`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${s?e.children:null}
      </section>`}function Lt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return c`<span class=${r}>${l(n)}</span>`}function Y(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return c`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function nn(e){return c`
      <label class="field">
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return c`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function Rt(e){return c`
      <label class="field">
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function pe(e){var t=C(!1),n=t[0],r=t[1],i=C(null),a=i[0],o=i[1],s=we(null),u=we(null);return Z(function(){if(!n)return;function f(_){_.key==="Escape"&&r(!1)}function d(_){u.current&&!u.current.contains(_.target)&&r(!1)}document.addEventListener("keydown",f),document.addEventListener("click",d);var h=s.current,v=u.current;if(h&&v){var p=v.getBoundingClientRect(),g=h.getBoundingClientRect(),$=p.left+p.width/2,m=Math.max(8,Math.min($-g.width/2,window.innerWidth-8-g.width)),b=p.top-g.height-8;b<8&&(b=p.bottom+8),o({left:m,top:b})}return function(){document.removeEventListener("keydown",f),document.removeEventListener("click",d),o(null)}},[n]),c`
      <span class="tooltip-wrap" ref=${u}>
        <button type="button" class="tooltip-icon" aria-label=${e.text}
          aria-expanded=${n}
          onMouseEnter=${function(){r(!0)}}
          onMouseLeave=${function(){r(!1)}}
          onFocus=${function(){r(!0)}}
          onBlur=${function(){r(!1)}}
          onClick=${function(f){f.stopPropagation(),r(!n)}}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
            <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
            <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
          </svg>
        </button>
        ${n?c`
          <span class="tooltip-bubble" role="tooltip" ref=${s}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var Dt=[],Ga=0;function X(e,t){t=t||{};var n={id:++Ga,message:e,type:t.type||"info",ttl:t.ttl||5e3};Dt.forEach(function(r){r(n)})}function Za(){var e=C([]),t=e[0],n=e[1];return Z(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(o){return o.id!==i.id})})},i.ttl)}return Dt.push(r),function(){var i=Dt.indexOf(r);i>=0&&Dt.splice(i,1)}},[]),c`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return c`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${l("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var q={top:22,right:14,bottom:24,left:46};function Li(e){var t=C(0),n=t[0],r=t[1];return Z(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function Ri(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var o=[],s=Math.ceil(e/i)*i,u=s;u<=t+i*1e-9;u+=i)o.push(Math.abs(u)<i*1e-9?0:u);return o}function qn(e){return Math.abs(e)>=1e3?x.num(e/1e3,1).replace(/\.0$/,"")+"k":x.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function Xa(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function Qa(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var o=0;o<r;o++)a.push(o);else for(var s=0;s<i;s++)a.push(Math.round(s*(r-1)/(i-1)));var u=[],f=null,d=-1;return a.forEach(function(h){if(h!==d){d=h;var v=n(e[h].t);v!==f&&(f=v,u.push(h))}}),u}function Di(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function Wi(e){return c`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return c`
            <g key=${"y"+t}>
              <line x1=${q.left} x2=${e.width-q.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${q.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${qn(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-q.right-34?null:c`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${q.left} x2=${q.left} y1=${q.top-6} y2=${e.height-q.bottom}
          class="ch-axis" />
        <text x=${q.left-40} y=${q.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-q.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function Ir(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function Ja(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function eo(e,t,n,r){var i=Ja(e,t),a=[];if(i.length<2)return a;var o=[];function s(){if(o.length>=2){var g="M"+n(o[0].t).toFixed(1)+" "+r(o[0].top).toFixed(1),$;for($=1;$<o.length;$++)g+="L"+n(o[$].t).toFixed(1)+" "+r(o[$].top).toFixed(1);for($=o.length-1;$>=0;$--)g+="L"+n(o[$].t).toFixed(1)+" "+r(o[$].bottom).toFixed(1);a.push(g+"Z")}o=[]}for(var u=0;u<i.length;u++){var f=i[u],d=f.top-f.bottom;if(d>0?o.push(f):s(),u<i.length-1){var h=i[u+1],v=h.top-h.bottom;if(d>0!=v>0&&d!==v){var p=d/(d-v);o.push({t:f.t+(h.t-f.t)*p,top:f.top+(h.top-f.top)*p,bottom:f.bottom+(h.bottom-f.bottom)*p}),d>0&&s()}}}return s(),a}function Ui(e,t,n,r){var i=n>t-150;return c`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,o){return c`
            <div key=${o} class="ch-hover-line">
              ${a.color?c`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function wt(e){var t=we(null),n=Li(t),r=C(null),i=r[0],a=r[1],o=e.height||180,s=e.series||[],u=e.timeWindow;if(!u){var f=1/0,d=-1/0;s.forEach(function(M){M.points.forEach(function(T){T.t<f&&(f=T.t),T.t>d&&(d=T.t)})}),u=f===1/0?[0,1]:[f,d]}var h=u[0],v=u[1]>u[0]?u[1]:u[0]+1,p=[];s.forEach(function(M){M.points.forEach(function(T){p.push(T.y)})});var g=Di(p,!1),$=Math.max(10,n-q.left-q.right),m=o-q.top-q.bottom;function b(M){return q.left+(M-h)/(v-h)*$}function _(M){return q.top+(1-(M-g[0])/(g[1]-g[0]))*m}var k=Ri(g[0],g[1],4),z=e.xTickFormat||function(M){return x.time(M,"hm")},w=Xa(h,v,Math.max(2,Math.min(5,Math.floor($/90)))).map(function(M){return{x:b(M),label:z(M)}});function S(M){var T=[],N=[];M.forEach(function(R){R.y===null||R.y===void 0?(N.length&&T.push(N),N=[]):N.push(R)}),N.length&&T.push(N);var H=_(Math.max(0,g[0]));return T.map(function(R){var y=R.map(function(D,W){return(W===0?"M":"L")+b(D.t).toFixed(1)+" "+_(D.y).toFixed(1)}).join(""),E=y+"L"+b(R[R.length-1].t).toFixed(1)+" "+H.toFixed(1)+"L"+b(R[0].t).toFixed(1)+" "+H.toFixed(1)+"Z";return{line:y,area:E}})}function B(M){if(t.current){var T=t.current.getBoundingClientRect(),N=M.clientX-T.left;if(N<q.left||N>n-q.right){a(null);return}var H=h+(N-q.left)/$*(v-h);a(H)}}var I=null,A=[];return i!==null&&(A.push({text:z(i)}),s.forEach(function(M){var T=Ir(M.points,i);T>=0&&(I===null&&(I=b(M.points[T].t)),A.push({color:M.color,text:(M.label?M.label+": ":"")+(e.yFormat||qn)(M.points[T].y)+(e.yFormat?"":" "+e.yUnit)}))}),I===null&&(I=b(i))),c`
      <div class="chart" ref=${t}
        onPointerMove=${B}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?c`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${Wi} width=${n} height=${o} sy=${_}
              yTicks=${k} xTicks=${w}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(M,T){return eo(M.top,M.bottom,b,_).map(function(N,H){return c`<path key=${T+"-"+H} class="ch-band" d=${N} fill=${M.color} stroke="none"/>`})})}
            ${s.map(function(M,T){return S(M.points).map(function(N,H){return c`
                  <g key=${T+"-"+H}>
                    ${M.fill?c`<path class="ch-area" d=${N.area} fill=${M.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${N.line} fill="none" stroke=${M.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${I!==null?c`
              <line x1=${I} x2=${I} y1=${q.top-4} y2=${o-q.bottom} class="ch-crosshair"/>
              ${s.map(function(M,T){var N=Ir(M.points,i);return N>=0?c`
                  <circle key=${T} cx=${b(M.points[N].t)} cy=${_(M.points[N].y)} r="3.5"
                    fill=${M.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${I!==null?Ui(t,n,I,A):null}`:null}
      </div>`}function Yn(e){var t=we(null),n=Li(t),r=C(null),i=r[0],a=r[1],o=e.height||180,s=e.points||[];function u(y){return(y.segments||[]).reduce(function(E,D){return E+(D.value||0)},0)}function f(y){return y.bars?y.bars.map(u):[y.y]}var d=s.reduce(function(y,E){return E.bars?Math.max(y,E.bars.length):y},1),h=[];s.forEach(function(y){f(y).forEach(function(E){h.push(E)})});var v=Di(h,!0),p=Math.max(10,n-q.left-q.right),g=o-q.top-q.bottom;function $(y){return q.top+(1-(y-v[0])/(v[1]-v[0]))*g}var m=s.length,b=m>0?p/m:p;function _(y){return q.left+(y+.5)*b}var k=Math.max(1,Math.min(b-1,b*.72,46)),z=Ri(v[0],v[1],4),w=e.xTickFormat||function(y){return x.time(y,"hm")},S=Qa(s,p,w).map(function(y){return{x:_(y),label:w(s[y].t)}}),B=$(0),I=s.length+"|"+(s.length?s[0].t+"-"+s[s.length-1].t:"")+"|"+d+"|"+(e.yUnit||"");function A(y){if(!t.current||!m){a(null);return}var E=t.current.getBoundingClientRect(),D=y.clientX-E.left;if(D<q.left||D>n-q.right){a(null);return}var W=Math.floor((D-q.left)/b);a(W<0?0:W>=m?m-1:W)}var M=e.yFormat||qn;function T(y){return M(y)+(e.yFormat?"":" "+(e.yUnit||""))}var N=null,H=[];if(i!==null&&s[i]){var R=s[i];N=_(i),H.push({text:w(R.t)}),R.bars?R.bars.forEach(function(y){(y.segments||[]).forEach(function(E){E.value&&H.push({color:E.color,text:(E.label?E.label+": ":"")+T(E.value)})})}):R.y!==null&&R.y!==void 0&&H.push({color:R.color||e.color,text:T(R.y)})}return c`
      <div class="chart" ref=${t}
        onPointerMove=${A}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?c`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${Wi} width=${n} height=${o} sy=${$}
              yTicks=${z} xTicks=${S}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${I}>
            ${s.map(function(y,E){var D=i===E?"1":"0.85";if(y.bars){var W=_(E)-k/2,ce=k/d;return c`<g key=${E}>${y.bars.map(function(ye,P){var K=W+P*ce+1,G=Math.max(1,ce-2),le=0;return(ye.segments||[]).map(function(He,O){var ne=He.value||0;if(ne<=0)return null;var oe=$(le+ne),se=Math.max(1,$(le)-oe);return le+=ne,c`
                      <rect key=${P+"-"+O} class="ch-bar ch-bar-up"
                        x=${K.toFixed(1)} y=${oe.toFixed(1)}
                        width=${G.toFixed(1)} height=${se.toFixed(1)} rx="1.5"
                        fill=${He.color} opacity=${D}/>`})})}</g>`}if(y.y===null||y.y===void 0)return null;var fe=_(E)-k/2,V=$(y.y),J=Math.min(V,B),he=Math.max(1,Math.abs(V-B));return c`
                <rect key=${E} class=${"ch-bar "+(y.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${fe.toFixed(1)} y=${J.toFixed(1)}
                  width=${k.toFixed(1)} height=${he.toFixed(1)} rx="2"
                  fill=${y.color||e.color||"var(--c-consumption)"}
                  opacity=${D}/>`})}
            </g>
            <line x1=${q.left} x2=${n-q.right} y1=${B} y2=${B} class="ch-zero-strong"/>
          </svg>
          ${N!==null?Ui(t,n,N,H):null}`:null}
      </div>`}var to=[10,25,50];function no(e){var t=C(0),n=t[0],r=t[1],i=C(e.pageSize||10),a=i[0],o=i[1],s=e.rows||[],u=s.length,f=Math.max(1,Math.ceil(u/a)),d=Math.min(n,f-1),h=d*a,v=Math.min(h+a,u),p=s.slice(h,v);return c`
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              ${e.columns.map(function(g){return c`
                  <th key=${g.key} class=${g.align==="right"?"ta-r":""}>
                    ${g.label}${g.unit?c`<span class="th-unit"> ${g.unit}</span>`:null}
                  </th>`})}
            </tr>
          </thead>
          <tbody>
            ${u===0?c`
              <tr><td class="table-empty" colspan=${e.columns.length}>${l("common.nodata")}</td></tr>`:p.map(function(g,$){return c`
                  <tr key=${g.id!==void 0?g.id:h+$}>
                    ${e.columns.map(function(m){return c`
                        <td key=${m.key} class=${m.align==="right"?"ta-r":""}>
                          ${m.render?m.render(g):g[m.key]}
                        </td>`})}
                  </tr>`})}
          </tbody>
        </table>
        <div class="table-footer">
          <label class="table-pagesize">
            <span>${l("table.perpage")}</span>
            <span class="select-wrap select-wrap-small">
              <select class="select select-small" value=${a}
                onChange=${function(g){o(+g.target.value),r(0)}}>
                ${to.map(function(g){return c`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${l("table.pageinfo",{from:u===0?0:h+1,to:v,total:u})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${l("table.prev")}
              disabled=${d===0} onClick=${function(){r(d-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${l("table.next")}
              disabled=${d>=f-1} onClick=${function(){r(d+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function Bi(e,t){var n=e.split("/").filter(function(f){return f!==""}),r=t.split("/").filter(function(f){return f!==""}),i={},a;for(a=0;a<n.length;a++){var o=n[a];if(o.charAt(0)===":"){var s=o.slice(-1)==="?",u=o.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(s)continue;return null}i[u]=decodeURIComponent(r[a])}else if(o!==r[a])return null}return r.length>n.length?null:i}function Sn(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=Bi(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function ro(e){var t=C(function(){return Sn(e)}),n=t[1];return Z(function(){function r(){n(Sn(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const Oe={match:Bi,parse:Sn,useRoute:ro,navigate:function(e){window.location.hash="#"+e}};var io=["imp_wh","exp_wh","pv_wh","vzev_in_wh","vzev_out_wh"],ao=["grid_ht_wh","grid_nt_wh"];function ge(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function Gn(e,t){t=t||{};var n=Pe(t.grid_import_chf_kwh,.26),r=Pe(t.grid_feedin_chf_kwh,.18),i=Pe(t.vzev_import_chf_kwh,.22),a=Pe(t.vzev_export_chf_kwh,.22),o=e.imp_wh,s=e.exp_wh,u=e.pv_wh,f=e.vzev_in_wh||0,d=e.vzev_out_wh||0,h={};for(var v in e)h[v]=e[v];if(h.cost_import_chf=o==null?null:ge((o-f)/1e3*n),h.revenue_feedin_chf=s==null?null:ge((s-d)/1e3*r),h.cost_vzev_chf=ge(f/1e3*i),h.revenue_vzev_chf=ge(d/1e3*a),h.saving_selfuse_chf=u==null||s===null||s===void 0?null:ge(Math.max(0,(u-s)/1e3*(n-r))),rn(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var p=Pe(t.grid_import_ht_chf_kwh,n),g=Pe(t.grid_import_nt_chf_kwh,n);h.cost_import_ht_chf=ge(e.grid_ht_wh/1e3*p),h.cost_import_nt_chf=ge(e.grid_nt_wh/1e3*g),h.cost_import_chf=ge(h.cost_import_ht_chf+h.cost_import_nt_chf)}return h}function Pe(e,t){return e==null||isNaN(e)?t:Number(e)}var Mt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function ji(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(u){return ji(u,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=Mt[i.slice(0,a)],s=Mt[i.slice(a+1)];if(o!==void 0&&s!==void 0){if(o<=s){if(t>=o&&t<=s)return!0}else if(t>=o||t<=s)return!0}}else if(Mt[i]!==void 0&&Mt[i]===t)return!0}return!1}function rn(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function oo(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,o=0;o<a.length;o++){var s=a[o]||{};if(ji(s.days,r)&&i>=Pe(s.from,0)&&i<Pe(s.to,0))return!0}return!1}function Hi(e,t){if(!rn(t))return e;var n=e.imp_wh,r=e.vzev_in_wh||0;if(n==null)return e;var i=n-r;i<0&&(i=0);var a={};for(var o in e)a[o]=e[o];return oo(e.ts,t)?(a.grid_ht_wh=i,a.grid_nt_wh=0):(a.grid_ht_wh=0,a.grid_nt_wh=i),a}function lo(e,t){var n={ts:e},r=!1;return io.forEach(function(i){var a=0,o=!1,s=!1;t.forEach(function(u){var f=u[i];f==null?s=!0:(a+=f,o=!0)}),n[i]=o?a:null,o&&s&&(r=!0)}),ao.forEach(function(i){var a=0,o=!1;t.forEach(function(s){var u=s[i];u!=null&&(a+=u,o=!0)}),o&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function so(e){return e-e%3600}function uo(e){var t=e-Mn(e,86400),n=Mn(Math.floor(t/86400)+3,7);return t-n*86400}function Mn(e,t){return(e%t+t)%t}function Zn(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function co(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function ot(e,t,n){var r={},i=[];(e||[]).forEach(function(o){var s=t(o.ts);r[s]||(r[s]=[],i.push(s)),r[s].push(o)});var a=i.map(function(o){return Gn(lo(Number(o),r[o]),n)});return a.sort(function(o,s){return o.ts-s.ts}),a}function Tr(e,t,n,r){if(e=e||[],rn(r)&&t==="15m"&&(e=e.map(function(a){return Hi(a,r)})),t===n){var i=e.map(function(a){return Gn(a,r)});return i.sort(function(a,o){return a.ts-o.ts}),i}switch(n){case"1h":return ot(e,so,r);case"1w":return ot(e,uo,r);case"1q":return ot(e,co,r);case"1mo":return ot(e,Zn,r);case"1d":default:return ot(e,function(a){return a-Mn(a,86400)},r)}}function En(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function fo(e){if(e=(e||[]).filter(function(s){return s!=null&&!isNaN(s)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=En(e.slice(0,t)),r=En(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",o=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:o}}function vo(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function po(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function ho(e){return e-e%86400}function Zt(e,t){if(!Array.isArray(e))return null;for(var n=Math.floor(e.length/3),r=null,i=0;i<n;i++)e[i*3]===t&&(r=[e[i*3+1],e[i*3+2]]);return r}function Ki(e,t){var n={},r=[],i=0;t=t||{};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=t[a];(o==null||o<0)&&(o=0),t[a]=o,r.push(a),i+=o,n[a]=0}if(r.length===0)return n;r.sort(),e<0&&(e=0);var s=e<i?e:i;if(s<=0||i<=0)return n;var u={},f=0;r.forEach(function(p){var g=s*t[p],$=Math.floor(g/i);u[p]=g-$*i,n[p]=$,f+=$});for(var d=s-f;d>0;){var h=null,v=-1;if(r.forEach(function(p){u[p]>v&&(v=u[p],h=p)}),h===null)break;n[h]+=1,u[h]=-1,d-=1}return n}function Xn(e){e=e||{};var t=e.data||{},n=e.producer_id,r={},i=[];for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a))for(var o=t[a],s=Math.floor((o?o.length:0)/3),u=0;u<s;u++){var f=o[u*3];r[f]||(r[f]=!0,i.push(f))}return i.sort(function(d,h){return d-h}),i.map(function(d){var h={},v=0;for(var p in t)if(Object.prototype.hasOwnProperty.call(t,p)){var g=Zt(t[p],d);g!==null&&(p===n?v=g[1]:h[p]=g[0])}return{ts:d,members:Ki(v,h)}})}function go(e){var t=e&&e.self_id,n=e&&e.producer_id,r={};return t&&Xn(e).forEach(function(i){var a=i.members||{},o=0,s=0;if(t===n)for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(s+=a[u]);else o=a[t]||0;r[i.ts]={vzev_in_wh:o,vzev_out_wh:s}}),r}function Vi(e,t){var n=go(t);return(e||[]).map(function(r){var i=n[r.ts],a={};for(var o in r)a[o]=r[o];return a.vzev_in_wh=i?i.vzev_in_wh:0,a.vzev_out_wh=i?i.vzev_out_wh:0,a})}function Nr(e,t){var n={},r=[];return e.forEach(function(i){var a=t(i.ts),o=n[a];o||(o={},n[a]=o,r.push(a));var s=i.members||{};for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(o[u]=(o[u]||0)+s[u])}),r.sort(function(i,a){return i-a}),r.map(function(i){return{ts:i,members:n[i]}})}function Pr(e,t,n){(n==null||n<1)&&(n=96);var r=Xn(e),i;t==="1d"?i=Nr(r,ho):t==="1mo"?i=Nr(r,Zn):i=r;var a=i.length>n?i.length-n:0;return i.slice(a)}function qi(e){if(typeof e!="string"||e.length!==7||e[4]!=="-"||e[5]!=="Q")return null;var t=parseInt(e.slice(0,4),10),n=parseInt(e[6],10);if(isNaN(t)||isNaN(n)||n<1||n>4)return null;var r=(n-1)*3,i=Math.floor(Date.UTC(t,r,1)/1e3),a=Math.floor(Date.UTC(t,r+3,1)/1e3);return[i,a]}function mo(e,t,n,r,i){n=n||[],r=r||{};var a={};n.forEach(function(I){I&&I.id!==void 0&&(a[I.id]=I)});var o=Jn(r),s={};n.forEach(function(I){I&&I.id!==void 0&&(s[I.id]=$e(I.entry_ts,0))});var u={},f={},d={},h={},v={},p=0;(t||[]).forEach(function(I){var A=Zn(I.ts),M=o&&yo(I.ts,r)==="ht",T=I.members||{};for(var N in T)if(Object.prototype.hasOwnProperty.call(T,N)&&!(s[N]&&I.ts<s[N])){var H=T[N]||0;u[N]=(u[N]||0)+H,M?f[N]=(f[N]||0)+H:d[N]=(d[N]||0)+H;var R=h[N];R||(R={},h[N]=R),R[A]=(R[A]||0)+H,v[A]=(v[A]||0)+H,p+=H}});var g=$e(r.vzev_export_chf_kwh,0),$=$e(r.vzev_import_chf_kwh,0),m=[];for(var b in u)if(Object.prototype.hasOwnProperty.call(u,b)){var _=u[b],k=a[b],z={id:b,name:k&&k.name!==void 0?k.name:b,wh:_,chf:ge(_/1e3*$)};k&&(k.location!==void 0&&(z.location=k.location),k.metering_point!==void 0&&(z.metering_point=k.metering_point),k.entry_ts!==void 0&&(z.entry_ts=k.entry_ts)),o&&(z.ht_wh=f[b]||0,z.nt_wh=d[b]||0);var w=$e(r.grid_import_chf_kwh,null);w!==null&&(z.cost_grid_chf=ge(o?z.ht_wh/1e3*$e(r.grid_import_ht_chf_kwh,w)+z.nt_wh/1e3*$e(r.grid_import_nt_chf_kwh,w):_/1e3*w)),z.months=Or(h[b]),m.push(z)}var S=Or(v),B={quarter:e,months:S,total:{exp_wh:p,revenue_chf:ge(p/1e3*g),months:S},members:m,note:"15-min Messwerte, Abgleich mit Netzbetreiber pro Quartal"};return i!=null&&(B.quality=i),B}function $e(e,t){return e==null||isNaN(e)?t:Number(e)}function Or(e){e=e||{};var t=Object.keys(e).map(Number).sort(function(n,r){return n-r});return t.map(function(n){return{ts:n,wh:e[n]}})}function $o(e){var t=new Date(e*1e3);return(t.getDay()+6)%7}function _o(e){var t=new Date(e*1e3);return t.getHours()+t.getMinutes()/60}var Et={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Qn(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(u){return Qn(u,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=Et[i.slice(0,a)],s=Et[i.slice(a+1)];if(o!==void 0&&s!==void 0){if(o<=s){if(t>=o&&t<=s)return!0}else if(t>=o||t<=s)return!0}}else if(Et[i]!==void 0&&Et[i]===t)return!0}return!1}function Jn(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function yo(e,t){if(!Jn(t))return"flat";for(var n=$o(e),r=_o(e),i=t.ht_windows,a=0;a<i.length;a++){var o=i[a]||{},s=$e(o.from,0),u=$e(o.to,0);if(Qn(o.days,n)&&r>=s&&r<u)return"ht"}return"nt"}function bo(e){var t=e.ht_windows;if(!Array.isArray(t)||t.length===0)return 0;for(var n=0,r=0,i=0;i<7;i++)for(var a=0;a<96;a++){var o=a/4;r++;for(var s=0;s<t.length;s++){var u=t[s]||{};if(Qn(u.days,i)&&o>=$e(u.from,0)&&o<$e(u.to,0)){n++;break}}}return r===0?0:n/r}function Yi(e){e=e||{};var t;if(Jn(e)){var n=bo(e),r=$e(e.grid_import_ht_chf_kwh,0),i=$e(e.grid_import_nt_chf_kwh,0);t=r*n+i*(1-n)}else{var a=e.grid_import_chf_kwh;if(a==null||isNaN(a))return null;t=Number(a)}return ge(t*.8)}function wo(e,t,n){e=e||{};var r=e.data||{},i=e.self_id;t=t||[];var a={},o=[];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))for(var u=r[s],f=Math.floor((u?u.length:0)/3),d=0;d<f;d++){var h=u[d*3];n&&(h<n[0]||h>=n[1])||a[h]||(a[h]=!0,o.push(h))}o.sort(function(_,k){return _-k});var v={},p={};t.forEach(function(_){!_||_.id===void 0||(v[_.id]=$e(_.entry_ts,0),p[_.id]={have:0,expected:0,lastTs:null})});var g=0,$=0,m=0,b=0;return o.forEach(function(_){g++;var k=!1;t.forEach(function(z){if(!(!z||z.id===void 0)&&!(_<v[z.id])){var w=p[z.id];w.expected++;var S=Zt(r[z.id],_);S===null?k=!0:(w.have++,(w.lastTs===null||_>w.lastTs)&&(w.lastTs=_))}}),i!=null&&Zt(r[i],_)===null&&b++,k?m++:$++}),{expected:g,complete:$,provisional:m,missing:b,perMember:p}}function Ar(e,t){e=e||{};var n=(e.data||{})[t];if(!Array.isArray(n)||n.length<3)return null;for(var r=Math.floor(n.length/3),i=null,a=0;a<r;a++){var o=n[a*3];(i===null||o>i)&&(i=o)}return i}function ko(e,t,n){t=t||{};var r=t.data||{},i=t.producer_id,a={},o=0,s=0,u=0;for(var f in r)if(Object.prototype.hasOwnProperty.call(r,f)){var d=Zt(r[f],e);d!==null&&(f===i?s=d[1]:(a[f]=d[0],o+=d[0],f===n&&(u=d[0])))}var h=Ki(s,a);return{prodWh:s,totalImpWh:o,memberImpWh:u,sharePct:o>0?ge(u/o*100):0,allocatedWh:h[n]||0}}function er(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var Wt=[],Ut=!0,In=null,Bt=[];function Tn(e){Nn=e||{},tr=!0,Bt.forEach(function(t){t(e)})}var Nn=null,tr=!1,fn=null;function Gi(e){e&&(In=Date.now()),e!==Ut&&(Ut=e,Wt.forEach(function(t){t(Ut,In)}))}var xo=3,Pn=0;function Zi(e){return e instanceof TypeError||e&&e.name==="AbortError"}function Xi(){Pn=0,Gi(!0)}function Qi(e){e&&e.optional||(Pn++,Pn>=xo&&Gi(!1))}var zo=8e3,Co=2,vn=0,On=[];function Ji(){for(;vn<Co&&On.length>0;){var e=On.shift();vn++,e.run().then(e.resolve,e.reject).finally(function(){vn--,Ji()})}}function ea(e){return new Promise(function(t,n){On.push({run:e,resolve:t,reject:n}),Ji()})}function _t(e,t){return t=t||{},ea(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},zo);return fetch(er()+e,{signal:n.signal}).then(function(i){if(Xi(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw Zi(i)&&Qi(t),i}).finally(function(){clearTimeout(r)})})}function So(e){return e.indexOf("/api/vzev/info")===0}function Mo(e){return e.indexOf("/api/vzev/")===0&&!So(e)}function Eo(){return!tr||!!(Nn&&Nn.enabled)}function Io(e){return e.indexOf("/api/vzev/members")===0?{members:[]}:e.indexOf("/api/vzev/discovered")===0?{discovered:[]}:null}function To(){return tr?Promise.resolve():(fn||(fn=_t("/api/vzev/info",be).then(function(e){Tn(e||{})},function(){})),fn)}function te(e,t){return Mo(e)&&!(t&&t.vzevBypass)?To().then(function(){return Eo()?_t(e,t):Io(e)}):_t(e,t)}var be={optional:!0};function No(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function o(){n!==null&&(clearInterval(n),n=null)}function s(){document.hidden?o():a()}return document.addEventListener("visibilitychange",s),a(),function(){r=!0,o(),document.removeEventListener("visibilitychange",s)}}function Fr(e,t){return ea(function(){return fetch(er()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(Xi(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw Zi(n)&&Qi(),n})})}function It(e){return e==null||String(e).trim()===""}function Ge(e){return _t("/cm?cmnd="+encodeURIComponent(e))}const L={base:er,get:te,post:Fr,restartDevice:function(){return Ge("Restart 1")},getWifiConfig:function(){return Promise.all([Ge("SSId1"),Ge("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return It(e.ssid1)||t.push("SSId1 "+e.ssid1),It(e.password1)||t.push("Password1 "+e.password1),It(e.ssid2)||t.push("SSId2 "+e.ssid2),It(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):Ge("Backlog "+t.join(";"))},wifiScanStart:function(){return Ge("WifiScan 1")},wifiScanResult:function(){return Ge("WifiScan")},getConfig:function(){return te("/api/config")},postConfig:function(e){return Fr("/api/config",e)},getConfigRaw:function(){return _t("/api/config",{text:!0})},getPower:function(){return te("/api/power")},getEnergy:function(e,t,n,r){if(e&&e!=="15m")throw new Error("getEnergy: res must be 15m");var i="/api/energy?res=15m&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),te(i)},getMeta:function(){return te("/api/meta")},getMeter:function(){return te("/api/meter")},getSite:function(){return te("/site")},getLoads:function(){return te("/loads")},getProductions:function(){return te("/productions")},setLoadState:function(e,t){return te("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},getVzevRaw:function(){return te("/api/vzev/raw",be)},getVzevMembersList:function(){return te("/api/vzev/members",be).then(function(e){return Array.isArray(e)?e:e&&e.members||[]})},getVzevDiscovered:function(){return te("/api/vzev/discovered",be).then(function(e){return Array.isArray(e)?e:e&&e.discovered||[]})},getVzevInfo:function(){return te("/api/vzev/info",be).then(function(e){return Tn(e||{}),e||{}},function(){return{}})},setVzevInfo:function(e){e=e||{};var t="/api/vzev/info?action=set";return["representative_name","representative_contact","connection_point_id"].forEach(function(n){e[n]!==void 0&&e[n]!==null&&(t+="&"+n+"="+encodeURIComponent(e[n]))}),e.enabled!==void 0&&e.enabled!==null&&(t+="&enabled="+(e.enabled?"true":"false")),te(t).then(function(n){return Tn(n),n})},getVzevFlows:function(e,t){return te("/api/vzev/raw",be).then(function(n){return{flows:Pr(n,e||"15m",t||90)}})},getVzevBilling:function(e,t){var n=qi(e);return n?Promise.all([t?Promise.resolve(t):te("/api/vzev/raw",be),te("/api/vzev/members",be).catch(function(){return{members:[]}}),te("/api/meta").catch(function(){return{}}),te("/api/vzev/info",be).catch(function(){return{}}),te("/site").catch(function(){return{}})]).then(function(r){var i=r[0],a=r[1]&&r[1].members?r[1].members:Array.isArray(r[1])?r[1]:[],o=r[2]&&r[2].tariffs||{};i&&i.tariffs&&(o=Object.assign({},o,i.tariffs));var s=r[3]||{},u=r[4]||{},f=Xn(i).filter(function($){return $.ts>=n[0]&&$.ts<n[1]}),d=wo(i,a,n),h=mo(e,f,a,o,d);h.info=s,h.raw=i,h.range=n,h.tariffs=o;var v=i&&i.self_id,p=i&&i.producer_id;if(v!=null)if(v===p)h.role="PRODUCER";else{h.role="CONSUMER";var g=h.members.filter(function($){return $.id===v})[0];h.self=g?Object.assign({},g,{name:u.name||g.name}):{id:v,name:u.name||v,wh:0,chf:0,months:[]}}return h}):Promise.reject(new Error("invalid quarter"))},getVzevMembers:function(){return Promise.all([te("/api/vzev/members",be),te("/api/vzev/raw",be)]).then(function(e){var t=e[0]&&e[0].members?e[0].members:Array.isArray(e[0])?e[0]:[],n=Pr(e[1],"15m",90);return t.map(function(r){var i=r.type==="PRODUCER"||r.typ==="P",a=i?1:-1,o=n.map(function(u){var f=u.members&&u.members[r.id];return{t:u.ts,y:typeof f=="number"?f:0}}),s=o.reduce(function(u,f){return u+(f.y||0)},0);return{id:r.id,name:r.name||r.id,address:r.location||r.loc,net_wh:a*s,points:o}})})},poll:No,onStatus:function(e){return Wt.push(e),function(){var t=Wt.indexOf(e);t>=0&&Wt.splice(t,1)}},onVzevInfo:function(e){return Bt.push(e),function(){var t=Bt.indexOf(e);t>=0&&Bt.splice(t,1)}},isOnline:function(){return Ut},lastOk:function(){return In}};var Po="\uFEFF",nr=";",Lr=`\r
`;function Oo(e){if(e==null)return"";var t=String(e);return t.indexOf(nr)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function Rr(e){return(e||[]).map(Oo).join(nr)}function Ao(e){var t=String(e||"");t.charCodeAt(0)===65279&&(t=t.slice(1));var n=[],r=[],i="",a=!1,o=0;function s(){r.push(i),i=""}function u(){s(),n.push(r),r=[]}for(;o<t.length;){var f=t[o];if(a){if(f==='"'){if(t[o+1]==='"'){i+='"',o+=2;continue}a=!1,o++;continue}i+=f,o++;continue}if(f==='"'&&i===""){a=!0,o++;continue}if(f===nr){s(),o++;continue}if(f==="\r"){o++;continue}if(f===`
`){u(),o++;continue}i+=f,o++}return(i!==""||r.length)&&u(),n}function rr(e,t){var n=[Rr(e)];return(t||[]).forEach(function(r){n.push(Rr(r))}),Po+n.join(Lr)+Lr}function Fo(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var ir="gplug-archive",Lo=2,gt=900,Dr=384,Ro=60,Do=2*86400,Wo=50,ta="1",Wr={},Ur=!1,lt=null,An=!1;function Uo(){return typeof indexedDB<"u"?indexedDB:typeof globalThis<"u"?globalThis.indexedDB:void 0}function Ae(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error||new Error("idb request failed"))}})}function an(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=e.onerror=function(){n(e.error||new Error("idb tx failed"))}})}function _e(){if(lt)return lt;var e=Uo();return e?(lt=new Promise(function(t,n){var r;try{r=e.open(ir,Lo)}catch(i){n(i);return}r.onupgradeneeded=function(){var i=r.result;i.objectStoreNames.contains("e15")||i.createObjectStore("e15",{keyPath:["siteId","ts"]}),i.objectStoreNames.contains("vz15")||i.createObjectStore("vz15",{keyPath:["siteId","memberId","ts"]}),i.objectStoreNames.contains("meta")||i.createObjectStore("meta",{keyPath:"siteId"}),i.objectStoreNames.contains("live")||i.createObjectStore("live",{keyPath:["siteId","kind","id"]})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error||new Error("idb open failed"))},r.onblocked=function(){n(new Error("idb blocked"))}}).catch(function(t){throw An=!0,lt=null,t}),lt):(An=!0,Promise.reject(new Error("IndexedDB unavailable")))}function Bo(){return An?Promise.resolve(!1):_e().then(function(){return!0},function(){return!1})}function Fe(e,t,n){return e.transaction(t,n).objectStore(t)}function jo(e){return{siteId:e,firstE15Ts:null,lastE15Ts:null,lastVzTs:null,gaps:[],count:0,syncedAt:null,producerId:null,selfId:null,tariffs:null}}function on(e){return _e().then(function(t){return Ae(Fe(t,"meta","readonly").get(e))}).then(function(t){return t||jo(e)})}function na(e){return _e().then(function(t){var n=t.transaction("meta","readwrite");return n.objectStore("meta").put(e),an(n).then(function(){return e})})}function Ho(){return _e().then(function(e){return Ae(Fe(e,"meta","readonly").getAllKeys())}).then(function(e){return(e||[]).map(String)})}function ar(e,t,n){var r=t??0,i=n??9999999999;return IDBKeyRange.bound([e,r],[e,i])}function Ko(e,t,n){return _e().then(function(r){return Ae(Fe(r,"e15","readonly").getAll(ar(e,t,n)))}).then(function(r){return(r||[]).map(function(i){var a={ts:i.ts,imp_wh:i.imp_wh,exp_wh:i.exp_wh,pv_wh:i.pv_wh};return i.partial&&(a.partial=!0),a})})}function ra(e,t){return!t||!t.length?Promise.resolve(0):_e().then(function(n){var r=n.transaction("e15","readwrite"),i=r.objectStore("e15"),a=0;return t.forEach(function(o){if(!(!o||typeof o.ts!="number")){var s={siteId:e,ts:o.ts,imp_wh:jt(o.imp_wh),exp_wh:jt(o.exp_wh),pv_wh:jt(o.pv_wh)};o.partial&&(s.partial=!0),i.put(s),a++}}),an(r).then(function(){return a})})}function jt(e){return e==null||isNaN(e)?null:Number(e)}function ia(e,t){var n=t&&t.data||{},r=Object.keys(n);return r.length?_e().then(function(i){var a=i.transaction("vz15","readwrite"),o=a.objectStore("vz15"),s=0;return r.forEach(function(u){var f=n[u];if(Array.isArray(f))for(var d=0;d+2<f.length;d+=3)o.put({siteId:e,memberId:u,ts:f[d],imp:f[d+1],exp:f[d+2]}),s++}),an(a).then(function(){return s})}):Promise.resolve(0)}function or(e,t,n){return Promise.all([on(e),_e().then(function(r){return Ae(Fe(r,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",t??0],[e,"￿",n??9999999999])))})]).then(function(r){var i=r[0],a=r[1]||[],o=t??0,s=n??9999999999,u={};return a.sort(function(f,d){return f.memberId===d.memberId?f.ts-d.ts:f.memberId<d.memberId?-1:1}),a.forEach(function(f){if(!(f.ts<o||f.ts>s)){var d=u[f.memberId];d||(d=[],u[f.memberId]=d),d.push(f.ts,f.imp,f.exp)}}),{producer_id:i.producerId,self_id:i.selfId,tariffs:i.tariffs,data:u}})}function Vo(e){for(var t=[],n=1;n<e.length;n++){var r=e[n-1],i=e[n];if(i-r>gt&&(t.push([r+gt,i-gt]),t.length>=Wo))break}return t}function lr(e){return _e().then(function(t){return Ae(Fe(t,"e15","readonly").getAllKeys(ar(e)))}).then(function(t){var n=(t||[]).map(function(r){return r[1]});return n.sort(function(r,i){return r-i}),{count:n.length,firstE15Ts:n.length?n[0]:null,lastE15Ts:n.length?n[n.length-1]:null,gaps:Vo(n)}})}function sr(e){return Promise.all([on(e),lr(e),qo()]).then(function(t){var n=t[0],r=t[1];return{siteId:e,firstE15Ts:r.firstE15Ts,lastE15Ts:r.lastE15Ts,count:r.count,gaps:r.gaps,lastVzTs:n.lastVzTs,syncedAt:n.syncedAt,days:r.firstE15Ts===null?0:Math.max(1,Math.round((r.lastE15Ts-r.firstE15Ts)/86400)),estimate:t[2]}})}function qo(){return typeof navigator>"u"||!navigator.storage||!navigator.storage.estimate?Promise.resolve(null):navigator.storage.estimate().then(function(e){return e},function(){return null})}function Yo(){return Ur||(Ur=!0,typeof navigator>"u"||!navigator.storage||!navigator.storage.persist)?Promise.resolve(null):navigator.storage.persist().then(function(e){return e},function(){return null})}function Go(e,t){var n;return on(t).then(function(r){n=r;var i=0;return r.lastE15Ts!==null&&r.lastE15Ts!==void 0&&(i=r.lastE15Ts+gt,Wr[t]||(i=Math.max(0,r.lastE15Ts-Do))),Wr[t]=!0,Zo(e,t,i)}).then(function(){return e.getVzevRaw?e.getVzevRaw().catch(function(){return null}):Promise.resolve(null)}).then(function(r){return!r||!r.data?null:(r.producer_id!==void 0&&(n.producerId=r.producer_id),r.self_id!==void 0&&(n.selfId=r.self_id),r.tariffs&&(n.tariffs=r.tariffs),ia(t,r).then(function(){n.lastVzTs=Xo(r)}))}).then(function(){return lr(t)}).then(function(r){return n.firstE15Ts=r.firstE15Ts,n.lastE15Ts=r.lastE15Ts,n.count=r.count,n.gaps=r.gaps,n.syncedAt=Math.floor(Date.now()/1e3),na(n)}).then(function(){return Yo()}).then(function(){return sr(t)})}function Zo(e,t,n){var r=0;function i(a){return r>=Ro?Promise.resolve():(r++,e.getEnergy("15m",Dr,a).then(function(o){return!Array.isArray(o)||!o.length?null:ra(t,o).then(function(){var s=o[o.length-1].ts;return o.forEach(function(u){u.ts>s&&(s=u.ts)}),o.length<Dr?null:i(s+gt)})}))}return i(n)}function Xo(e){var t=e&&e.data||{},n=null;return Object.keys(t).forEach(function(r){var i=t[r];if(Array.isArray(i))for(var a=0;a+2<i.length;a+=3)(n===null||i[a]>n)&&(n=i[a])}),n}function Qo(e){return IDBKeyRange.bound([e,"",""],[e,"￿","￿"])}function Br(e,t,n){var r=Object.keys(n||{});return!e||!r.length?Promise.resolve(0):_e().then(function(i){var a=i.transaction("live","readwrite"),o=a.objectStore("live");return r.forEach(function(s){for(var u=n[s]||[],f=[],d=0;d<u.length;d++)f.push(u[d].t,jt(u[d].y));o.put({siteId:e,kind:t,id:String(s),pts:f})}),an(a).then(function(){return r.length})})}function jr(e,t,n){var r=n??0;return _e().then(function(i){return Ae(Fe(i,"live","readonly").getAll(Qo(e)))}).then(function(i){var a={};return(i||[]).forEach(function(o){if(!(!o||o.kind!==t||!Array.isArray(o.pts))){for(var s=[],u=0;u+1<o.pts.length;u+=2)o.pts[u]<r||s.push({t:o.pts[u],y:o.pts[u+1]});s.length&&(a[o.id]=s)}}),a})}function Jo(e){return Promise.all([_e().then(function(t){return Ae(Fe(t,"e15","readonly").getAll(ar(e)))}),_e().then(function(t){return Ae(Fe(t,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",0],[e,"￿",9999999999])))})]).then(function(t){var n=[];return(t[0]||[]).sort(function(r,i){return r.ts-i.ts}).forEach(function(r){n.push(["e",r.ts,st(r.imp_wh),st(r.exp_wh),st(r.pv_wh),r.partial?"1":"0"])}),(t[1]||[]).sort(function(r,i){return r.memberId===i.memberId?r.ts-i.ts:r.memberId<i.memberId?-1:1}).forEach(function(r){n.push(["v",r.ts,r.memberId,st(r.imp),st(r.exp),""])}),rr([ir,ta,e],n)})}function st(e){return e==null?"":String(e)}function el(e,t){var n=Ao(e);if(!n.length||n[0][0]!==ir)return Promise.reject(new Error("not a gplug archive export"));if(n[0][1]!==ta)return Promise.reject(new Error("unsupported export format "+n[0][1]));var r=n[0][2];if(t&&r!==t)return Promise.reject(new Error("site mismatch: file "+r+", device "+t));for(var i=t||r,a=[],o={},s=1;s<n.length;s++){var u=n[s];if(!(!u||!u.length)){if(u[0]==="e"){var f={ts:Number(u[1]),imp_wh:dn(u[2]),exp_wh:dn(u[3]),pv_wh:dn(u[4])};u[5]==="1"&&(f.partial=!0),a.push(f)}else if(u[0]==="v"){var d=u[2];o[d]||(o[d]=[]),o[d].push(Number(u[1]),Hr(u[3]),Hr(u[4]))}}}return ra(i,a).then(function(){return ia(i,{data:o})}).then(function(){return lr(i)}).then(function(h){return on(i).then(function(v){return v.firstE15Ts=h.firstE15Ts,v.lastE15Ts=h.lastE15Ts,v.count=h.count,v.gaps=h.gaps,na(v)})}).then(function(){return sr(i)})}function dn(e){return e===""||e===void 0?null:Number(e)}function Hr(e){return e===""||e===void 0?0:Number(e)}var tl=900*1e3,ee={available:null,siteId:null,coverage:null,error:null,syncing:!1,otherSites:[]},Ht=[],dt=null,Kr=null;function Fn(){return ee}function Kt(){Ht.forEach(function(e){try{e(ee)}catch{}})}function aa(e){return Ht.push(e),function(){var t=Ht.indexOf(e);t>=0&&Ht.splice(t,1)}}function nl(e){return dt||(dt=Bo().then(function(t){return ee.available=t,t?e.getSite().then(function(n){return ee.siteId=n&&n.id?String(n.id):null,ee.siteId?Ho().then(function(r){ee.otherSites=r.filter(function(i){return i!==ee.siteId})},function(){}).then(function(){return Ln(e)}).then(function(){return Kr===null&&typeof setInterval=="function"&&(Kr=setInterval(function(){Ln(e)},tl)),ee}):(ee.available=!1,Kt(),ee)},function(){return Kt(),ee}):(Kt(),ee)}),dt)}function Ln(e){return!ee.available||!ee.siteId||ee.syncing?Promise.resolve(ee):(ee.syncing=!0,Go(e,ee.siteId).then(function(t){ee.coverage=t,ee.error=null},function(t){ee.error=t&&t.message?t.message:"sync failed"}).then(function(){return ee.syncing=!1,Kt(),ee}))}function kt(){return dt||Promise.resolve(ee)}function rl(e){return Ln(e)}var oa={overview:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,vzev:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="4" r="2.2" fill="currentColor"/><circle cx="4" cy="15" r="2.2" fill="currentColor"/><circle cx="16" cy="15" r="2.2" fill="currentColor"/><path d="M10 6.5v4M10 10.5l-4.5 3M10 10.5l4.5 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,settings:c`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function Vr(){return c`
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
      </a>`}var il=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/vzev",key:"nav.vzev",icon:"vzev",gate:"vzev",active:function(e){return e.indexOf("/vzev")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function qr(e){return c`
      <nav class="nav" aria-label=${l("nav.menu")}>
        ${il.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="vzev"||e.showVzev)}).map(function(t){var n=t.active(e.path);return c`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${oa[t.icon]}
              <span>${l(t.key)}</span>
            </a>`})}
      </nav>`}function al(e){var t=Oe.useRoute(e.routes),n=C(!1),r=n[0],i=n[1],a=C(!1),o=a[0],s=a[1],u=C(null),f=u[0],d=u[1],h=C(!1),v=h[0],p=h[1],g=C(!1),$=g[0],m=g[1],b=C(!1),_=b[0],k=b[1];Z(function(){return L.onStatus(function(w,S){w?d(null):(X(l("error.offline"),{type:"error"}),d(S?new Date(S):new Date))})},[]),Z(function(){var w=!1;function S(I){k(I.available===!1),!w&&I.otherSites&&I.otherSites.length&&(w=!0,X(l("banner.archive_site_changed",{id:I.siteId}),{type:"warn"}))}var B=aa(S);return kt().then(S),B},[]),Z(function(){return L.poll(function(){L.getMeta().then(function(w){s(!!w&&typeof w.time=="number"&&w.time<1e9)}).catch(function(){})},6e4)},[]),Z(function(){L.getMeter().then(function(w){p(!!(w&&w.values))}).catch(function(){})},[]),Z(function(){var w=L.onVzevInfo(function(S){m(!!(S&&S.enabled))});return L.getVzevInfo().catch(function(){}),w},[]),Z(function(){i(!1)},[t.path]);var z=t.route.component;return c`
      <div class="shell">
        <aside class="sidebar">
          <${Vr} />
          <${qr} path=${t.path} showMeter=${v} showVzev=${$} />
          <div class="sidebar-foot">${"v1.1.4"}</div>
        </aside>

        <div class="topbar">
          <${Vr} />
          <button class="burger" aria-label=${l("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${oa.burger}</button>
        </div>
        ${r?c`
          <div class="drawer">
            <${qr} path=${t.path} showMeter=${v} showVzev=${$} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${o?c`<div class="banner banner-warn">${l("banner.rtc")}</div>`:null}
          ${_?c`<div class="banner banner-warn">${l("banner.archive")}</div>`:null}
          ${f?c`
            <div class="stale-note">${l("common.stale",{time:x.time(Math.floor(f.getTime()/1e3),"hm")})}</div>`:null}
          <${z} params=${t.params} />
        </main>

        <${Za} />
      </div>`}function Me(e){return e==null||isNaN(e)?null:Number(e)}function pn(e){return e<0?0:e>1?1:e}function ur(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function Rn(e,t){t=t||{};var n=!!t.vzev,r=Me(t.co2);e=e||[];var i=e.length,a=0,o=0,s=0,u=0,f=0,d=0,h=0;e.forEach(function(w){if(ur(w)){d++;return}a+=w.pv_wh,o+=w.exp_wh,s+=w.imp_wh,u+=w.vzev_in_wh||0,f+=w.vzev_out_wh||0,h++});var v=i>0&&d/i>.2,p={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:v};if(n&&(p.autarkyVzev=null),i===0||v||h===0)return p;var g=Math.max(0,a-o),$=a-o+s;if(p.autarky=$>0?pn(g/$):null,p.selfuse=a>0?pn(g/a):null,n){var m=Math.max(0,s-u);p.autarkyVzev=$>0?pn(($-m)/$):null}var b=Gn({imp_wh:s,exp_wh:o,pv_wh:a,vzev_in_wh:u,vzev_out_wh:f},t.tariffs||{}),_=b.saving_selfuse_chf||0,k=b.revenue_feedin_chf||0,z=n?(b.revenue_vzev_chf||0)-(b.cost_vzev_chf||0):0;return p.savingParts={selfuse:_,feedin:k,vzev:n?z:null},p.savingChf=Math.round((_+k+z)*100)/100,p.co2Kg=r&&r>0?g/1e3*r/1e3:null,p}function ol(e,t){if(!e)return[];var n=Me(e.pv_w),r=Me(e.bat_w),i=Me(e.grid_w),a=n===null,o=r===null,s=i===null,u=a?0:n,f=o?0:r,d=s?0:i,h=Me(t),v=Math.max(0,d),p=Math.max(0,-d),g=Math.max(0,u-p);function $(k,z){return z?"unknown":k<1?"zero":"ok"}var m=[];if(m.push({from:"pv",to:"haus",watts:g,state:$(g,a||s)}),o?m.push({from:"bat",to:"haus",watts:0,state:"unknown"}):f>=0?m.push({from:"bat",to:"haus",watts:f,state:$(f,!1)}):m.push({from:"haus",to:"bat",watts:-f,state:$(-f,!1)}),h!==null&&h<0){var b=Math.min(-h,p);m.push({from:"pv",to:"vzev",watts:b,state:$(b,s)}),m.push({from:"pv",to:"netz",watts:p-b,state:$(p-b,s)})}else m.push({from:"pv",to:"netz",watts:p,state:$(p,s)});if(h!==null&&h>0){var _=Math.min(h,v);m.push({from:"vzev",to:"haus",watts:_,state:$(_,s)}),m.push({from:"netz",to:"haus",watts:v-_,state:$(v-_,s)})}else m.push({from:"netz",to:"haus",watts:v,state:$(v,s)});return m}function ll(e){if(!e||!e.length)return null;var t=0,n=0,r=0,i=!1,a=!1;return e.forEach(function(o){var s=o.to==="netz"||o.to==="vzev",u=o.from==="netz"||o.from==="vzev";s?o.state==="unknown"?i=!0:n+=o.watts:u?o.state==="unknown"?i=!0:t+=o.watts:o.from==="pv"&&o.to==="haus"&&(o.state==="unknown"?a=!0:r+=o.watts)}),i?"flow.status_unknown":n>=1?"flow.status_export":t>=1?"flow.status_import":a?"flow.status_unknown":r>=1?"flow.status_covered":"flow.status_idle"}function sl(e){if(!e||!e.length)return 0;var t=0,n=0;return e.forEach(function(r){r.state!=="unknown"&&(r.to==="netz"||r.to==="vzev"?n+=r.watts:(r.from==="netz"||r.from==="vzev")&&(t+=r.watts))}),n>=1?n:t>=1?t:0}function ul(e){if(!e||!e.length)return null;var t=null;if(e.forEach(function(i){(i.points||[]).forEach(function(a){(t===null||a.t>t)&&(t=a.t)})}),t===null)return null;var n=0,r=!1;return e.forEach(function(i){var a=(i.net_wh||0)<0?-1:1;(i.points||[]).forEach(function(o){o.t===t&&(n+=a*(o.y||0),r=!0)})}),r?n*4:null}var cl={"comp.pv":"var(--c-production)","comp.selfuse":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.vzev":"var(--c-vzev)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-vzev-fill)"};function me(e,t){return{key:e,value:Math.max(0,t||0),color:cl[e]}}function fl(e,t){if(!e)return{cover:[],usage:[],unknown:!0};var n=Me(e.pv_w),r=Me(e.bat_w),i=Me(e.grid_w),a=n===null||i===null,o=n===null?0:n,s=r===null?0:r,u=i===null?0:i,f=Me(t),d=Math.max(0,u),h=Math.max(0,-u),v=Math.max(0,o-h),p=Math.max(0,s),g=Math.max(0,-s),$=f!==null&&f>0?Math.min(f,d):0,m=f!==null&&f<0?Math.min(-f,h):0;return{cover:[me("comp.pv",v),me("comp.battery",p),me("comp.vzev",$),me("comp.grid",d-$)],usage:[me("comp.selfuse",v),me("comp.charge",g),me("comp.vzev",m),me("comp.feedin",h-m)],unknown:a}}function vl(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(d){ur(d)||(t+=d.pv_wh,n+=d.exp_wh,r+=d.imp_wh,i+=d.vzev_in_wh||0,a+=d.vzev_out_wh||0,o++)}),o===0)return{cover:[],usage:[],unknown:!0};var s=Math.max(0,t-n),u=Math.min(Math.max(0,i),r),f=Math.min(Math.max(0,a),n);return{cover:[me("comp.pv",s),me("comp.vzev",u),me("comp.grid",r-u)],usage:[me("comp.selfuse",s),me("comp.vzev",f),me("comp.feedin",n-f)],unknown:!1}}function dl(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function pl(e){e=e||[];var t=0,n=0,r=0,i=0;if(e.forEach(function(o){ur(o)||(t+=o.pv_wh,n+=o.exp_wh,r+=o.imp_wh,i++)}),i===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var a=Math.max(0,t-n);return{prodSelf:a,prodFeedin:Math.max(0,n),consSelf:a,consImport:Math.max(0,r)}}var hn=900,la=90;function cr(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function Yr(e){return e.friendlyName||e.name||e.id||"–"}function Gr(e){return e.friendlyName||e.name||e.id||"–"}function Xt(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function hl(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function Be(e){return e==null||isNaN(e)?null:Number(e)}function gl(e,t){if(!e)return null;var n=Number(e.grid_w)||0,r=Number(e.pv_w)||0;t=t||[];var i=t.filter(function(a){return cr(a.state)==="waiting"});return n<0&&i.length>0?{key:"hint.shift_load"}:n>0&&r>0?{key:"hint.use_pv"}:null}function sa(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function ml(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function Zr(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>la;)a.shift()}function Xr(e,t){Object.keys(t||{}).forEach(function(n){var r=e[n]||(e[n]=[]),i={};r.forEach(function(o){i[o.t]=!0});var a=t[n].filter(function(o){return!i[o.t]});if(a.length)for(e[n]=a.concat(r).sort(function(o,s){return o.t-s.t});e[n].length>la;)e[n].shift()})}function $l(e,t,n){for(var r=sa(e,t,n),i=[],a=[],o=0;o<r.grid.length;o++){var s=r.grid[o].t,u=Be(r.grid[o].y),f=Be(r.pv[o].y)||0,d=Be(r.bat[o].y)||0;u!==null&&(a.push({t:s,y:f+d}),i.push({t:s,y:f+d+u}))}return{cons:i,prod:a}}function ut(e){return c`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?c`<${pe} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function _l(e){var t=e.newest,n=e.win,r=e.power,i=e.vzevW,a=t?Be(t.grid_w):null,o=t?Be(t.pv_w)||0:null,s=t?Be(t.bat_w)||0:null,u=t&&a!==null?o+s+a:null,f=t?o+s:null,d=t&&a!==null?Math.max(0,-a):null,h=t&&a!==null?Math.max(0,a):null,v=$l(r,n[0],n[1]),p=v.cons,g=v.prod;return c`
      <${F} group="grid" title=${l("panel.grid")}>
        <div class="ov-stats">
          <${ut} color="var(--c-consumption)" label=${l("stat.consumption")}
            tooltip=${l("tooltip.consumption")} value=${x.w(u)} />
          <${ut} color="var(--c-production)" label=${l("stat.production")}
            value=${x.w(f)} />
          <${ut} color="var(--c-vzev)" label=${l("stat.export")}
            value=${x.w(d)} />
          <${ut} color="var(--c-import)" label=${l("stat.gridop")}
            tooltip=${l("tooltip.gridop")} value=${x.w(h)} />
          ${i!==null?c`
            <${ut} color="var(--c-vzev)"
              label=${i>=0?l("stat.vzev_import"):l("stat.vzev_export")}
              tooltip=${l("tooltip.vzev")} value=${x.w(Math.abs(i))} />`:null}
        </div>
        <${wt} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${x.w}
          bands=${[{top:g,bottom:p,color:"var(--c-vzev-fill)"},{top:p,bottom:g,color:"var(--c-import-fill)"}]}
          series=${[{points:p,color:"var(--c-consumption)",label:l("stat.consumption")},{points:g,color:"var(--c-production)",label:l("stat.production")}]} />
      <//>`}function yl(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:c`
      <${F} group="production" title=${l("panel.production")}
        collapsible collapseKey="uebersicht.production">
        ${e.notice?c`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${l("flow.prod_nodata")}</span>
            <button class="ov-hint-close" aria-label=${l("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=hl(i),o=a?"var(--c-battery)":"var(--c-production)",s=Xt(i);return c`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Gr(i)}</span>
                  <span class="ov-sub-value" style=${"color:"+o}>${x.w(s)}</span>
                </div>
                <${wt} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${x.w}
                  series=${[{points:n[i.id]||[],color:o,label:a?l("stat.battery"):Gr(i)}]} />
              </div>`})}
        </div>
      <//>`}function bl(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:c`
      <${F} group="loads" title=${l("panel.loads")} tooltip=${l("tooltip.loads")}
        collapsible collapseKey="uebersicht.loads">
        <div class="ov-subgrid">
          ${t.map(function(a){var o=cr(a.state),s=Xt(a),u=o==="inactive"?"waiting":"inactive",f=o==="inactive"?"action.request":"action.deactivate";return c`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Yr(a)}</span>
                  <${Lt} state=${o} />
                </div>
                <div class="ov-sub-meta">
                  <span>${x.w(s)} · ${l("stat.rated")}</span>
                  <span>${l("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${wt} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${x.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:Yr(a)}]} />
                <div class="ov-sub-act">
                  <${Y} small secondary=${u==="inactive"}
                    onClick=${function(){i(a.id,u)}}>${l(f)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}function wl(e){var t=e.members;return!e.enabled||!t||!t.length?null:c`
      <${F} group="vzev" title=${l("panel.vzev")} tooltip=${l("tooltip.vzev")}
        collapsible collapseKey="uebersicht.vzev">
        <div class="ov-subgrid">
          ${t.map(function(n){var r=(n.net_wh||0)<0,i=n.points||[],a=i.length?[i[0].t,i[i.length-1].t+900]:null;return c`
              <div key=${n.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${n.name||n.id}</span>
                  <span class="ov-sub-value" style="color:var(--c-vzev)">
                    ${l(r?"stat.vzev_export":"stat.vzev_import")+" "+x.wh(Math.abs(n.net_wh||0))}
                  </span>
                </div>
                ${n.address?c`<div class="ov-sub-meta"><span>${n.address}</span></div>`:null}
                <${wt} height=${140} yUnit="Wh" xUnit="h" timeWindow=${a}
                  yFormat=${x.wh}
                  series=${[{points:i,color:"var(--c-vzev)",label:n.name||n.id}]} />
              </div>`})}
        </div>
      <//>`}function kl(e){return e.hint?c`
      <div class="ov-hint" role="status">
        <svg class="ov-hint-icon" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
          <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
        </svg>
        <span class="ov-hint-text">${l(e.hint.key)}</span>
        <button class="ov-hint-close" aria-label=${l("common.close")}
          onClick=${e.onDismiss}>×</button>
      </div>`:null}var Qr={pv:{color:"var(--c-production)",label:"flow.pv"},netz:{color:"var(--c-navy)",label:"flow.netz"},vzev:{color:"var(--c-vzev)",label:"flow.vzev"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"}},xl={pv:{x:66,y:62},netz:{x:374,y:62},haus:{x:220,y:142},vzev:{x:374,y:142}},gn={x:66,y:222},zl={x:374,y:222},We=26;function Cl(e){return e.from==="bat"||e.to==="bat"?"var(--c-battery)":e.to==="netz"||e.to==="vzev"?"var(--c-vzev)":e.from==="netz"?"var(--c-import)":e.from==="vzev"?"var(--c-vzev)":"var(--c-production)"}function Sl(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?c`
      <g transform=${i}>
        <circle cx="0" cy="0" r="4" ...${a} />
        <path ...${a} d="M6.2 0 L8.6 0 M4.38 4.38 L6.08 6.08 M0 6.2 L0 8.6 M-4.38 4.38 L-6.08 6.08 M-6.2 0 L-8.6 0 M-4.38 -4.38 L-6.08 -6.08 M0 -6.2 L0 -8.6 M4.38 -4.38 L6.08 -6.08" />
      </g>`:e==="haus"?c`
      <g transform=${i}>
        <path ...${a} d="M-7 0 L0 -7.5 L7 0 M-5 0 L-5 7.5 L5 7.5 L5 0 M-1.7 7.5 L-1.7 2.8 L1.7 2.8 L1.7 7.5" />
      </g>`:e==="netz"?c`
      <g transform=${i}>
        <path ...${a} d="M-5.5 8 L-1.8 -6 M5.5 8 L1.8 -6 M-1.8 -6 L1.8 -6 M-7.5 -4.6 L7.5 -4.6 M-4 0 L4 0 M-4 0 L3.4 5.6 M4 0 L-3.4 5.6 M-4.8 5.6 L4.8 5.6" />
      </g>`:e==="vzev"?c`
      <g transform=${i}>
        <path ...${a} d="M0 -6 L-6 5.5 M0 -6 L6 5.5 M-6 5.5 L6 5.5" />
        <circle cx="0" cy="-6" r="2.1" fill=${r} />
        <circle cx="-6" cy="5.5" r="2.1" fill=${r} />
        <circle cx="6" cy="5.5" r="2.1" fill=${r} />
      </g>`:e==="bat"?c`
      <g transform=${i}>
        <rect x="-8" y="-5" width="13.5" height="10" rx="1.8" ...${a} />
        <rect x="5.7" y="-2.4" width="2.3" height="4.8" rx="0.8" fill=${r} />
        <rect x="-5.9" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
        <rect x="-2.6" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
        <rect x="0.7" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
      </g>`:null}function Ml(e){var t=e.newest,n=ol(t,e.vzevW),r=!!e.hasBattery,i=e.vzevW!==null&&e.vzevW!==void 0,a=we({side:"left",want:"left",count:0}),o=t?Be(t.bat_w):null,s=o!==null&&o<0?"right":"left",u=a.current;s===u.side?(u.want=s,u.count=0):s===u.want?(u.count++,u.count>=2&&(u.side=s,u.count=0)):(u.want=s,u.count=1);var f=u.side;function d(b){return b==="bat"?r:b==="vzev"?i:!0}function h(b){return b==="bat"?f==="right"?zl:gn:xl[b]}var v=n.filter(function(b){return d(b.from)&&d(b.to)}),p=0;v.forEach(function(b){b.state==="ok"&&b.watts>p&&(p=b.watts)});function g(b){return p<=0?2.4:2.4+Math.min(1,b/p)*2.6}var $=ll(n),m=sl(n);return c`
      <${F} group="grid" title=${l("flow.title")} tooltip=${l("tooltip.flow")}>
        ${$?c`
          <p class="flow-status">${l($,{w:x.w(m)})}</p>`:null}
        <div class="flow-wrap">
          <svg class="flow-svg" viewBox="0 0 440 284" role="img"
            aria-label=${l("flow.aria")} preserveAspectRatio="xMidYMid meet">
            <g>
              ${v.map(function(b,_){var k=h(b.from),z=h(b.to);if(!k||!z)return null;var w=z.x-k.x,S=z.y-k.y,B=Math.sqrt(w*w+S*S)||1,I=w/B,A=S/B,M=k.x+I*We,T=k.y+A*We,N=z.x-I*We,H=z.y-A*We,R=b.state==="unknown",y=b.state==="zero",E=R?"var(--c-line)":Cl(b),D=R?5.5:7.5,W=N-I*(D+1.6),ce=H-A*(D+1.6),fe=y?2:g(b.watts),V=((M+N)/2).toFixed(1),J=((T+H)/2-7).toFixed(1);return c`
                  <g key=${"e"+_} opacity=${y?"0.32":"1"}>
                    <line class="flow-track" x1=${M.toFixed(1)} y1=${T.toFixed(1)}
                      x2=${W.toFixed(1)} y2=${ce.toFixed(1)}
                      stroke=${E} stroke-width=${fe.toFixed(1)} stroke-linecap="round" />
                    ${b.state==="ok"?c`
                      <line class="flow-particles" x1=${M.toFixed(1)} y1=${T.toFixed(1)}
                        x2=${W.toFixed(1)} y2=${ce.toFixed(1)} stroke=${E} stroke-linecap="round" />`:R?c`
                      <line class="flow-edge-unknown" x1=${M.toFixed(1)} y1=${T.toFixed(1)}
                        x2=${W.toFixed(1)} y2=${ce.toFixed(1)} stroke=${E} stroke-width="1.6"
                        stroke-linecap="round" />`:null}
                    ${El(N,H,I,A,E,D,y?.5:1)}
                    ${R?c`
                      <text x=${V} y=${J} text-anchor="middle"
                        class="flow-label-txt flow-label-nodata">–</text>`:y?null:c`
                      <text x=${V} y=${J} text-anchor="middle"
                        class="flow-label-txt">${x.w(b.watts)}</text>`}
                  </g>`})}
              ${Object.keys(Qr).filter(d).map(function(b){var _=Qr[b],k=h(b),z=b==="bat",w=z?gn.x:k.x;return c`
                  <g key=${"n"+b} class=${z?"flow-node-move":null}
                    style=${z?"transform: translate("+(k.x-gn.x)+"px, 0)":null}>
                    <circle cx=${w} cy=${k.y} r=${We} fill=${_.color} opacity="0.12" />
                    <circle cx=${w} cy=${k.y} r=${We} fill="none"
                      stroke=${_.color} stroke-width="2.4" />
                    ${Sl(b,w,k.y,_.color)}
                    <text x=${w} y=${k.y+We+16} text-anchor="middle"
                      class="flow-node-txt">${l(_.label)}</text>
                  </g>`})}
            </g>
          </svg>
        </div>
        ${i?c`<p class="flow-note">${l("flow.vzev_mean_note")}</p>`:null}
        <${Il} sample=${t} vzevW=${e.vzevW} records=${e.records} />
      <//>`}function El(e,t,n,r,i,a,o){var s=a,u=e-n*s,f=t-r*s,d=-r,h=n,v=s*.6,p=e.toFixed(1)+","+t.toFixed(1)+" "+(u+d*v).toFixed(1)+","+(f+h*v).toFixed(1)+" "+(u-d*v).toFixed(1)+","+(f-h*v).toFixed(1);return c`<polygon points=${p} fill=${i} opacity=${o===void 0?1:o} />`}function Jr(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return c`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?c`<${pe} text=${e.note} />`:null}
        </div>
        ${r?c`
          <div class="comp-bar comp-bar-nodata">${e.unknown?l("flow.comp_nodata"):l("flow.comp_zero")}</div>`:c`
          <div class="comp-bar">
            ${t.map(function(i,a){var o=i.value/n*100;return c`<div key=${a} class="comp-seg"
                title=${l(i.key)+": "+e.fmt(i.value)}
                style=${"width:"+o.toFixed(2)+"%;background:"+i.color}></div>`})}
          </div>
          <div class="comp-legend">
            ${t.map(function(i,a){return c`
                <span key=${a} class="comp-leg">
                  <span class="comp-leg-dot" style=${"background:"+i.color}></span>
                  ${l(i.key)} · ${e.fmt(i.value)}
                </span>`})}
          </div>`}
      </div>`}function Il(e){var t=C("now"),n=t[0],r=t[1],i=n==="now"?fl(e.sample,e.vzevW):vl(e.records),a=n==="now"?x.w:x.wh,o=n==="today"?l("flow.comp_batt_note"):null;return c`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${l("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${l("flow.comp_today")}</button>
        </div>
        <${Jr} title=${l("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} />
        <${Jr} title=${l("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${o} />
      </div>`}function ua(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return c`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?c`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function Tl(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?l("kpi.incomplete"):null;function r(d){return d==null?"–":Math.round(d*100)+" %"}var i=t.savingParts,a=i?[l("kpi.saving_selfuse")+": "+x.chf(i.selfuse,!0),l("kpi.saving_feedin")+": "+x.chf(i.feedin,!0),i.vzev!==null&&i.vzev!==void 0?l("kpi.saving_vzev")+": "+x.chf(i.vzev,!0):null].filter(Boolean).join(`
`):l("tooltip.kpi_saving"),o=t.autarkyVzev!==null&&t.autarkyVzev!==void 0?l("kpi.autarky_vzev")+": "+r(t.autarkyVzev):null,s=!!e.showSaving,u=s?c`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":x.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.saving")}<${pe} text=${n||a} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:c`
        <div class="kpi-hero">
          <${ua} big ratio=${t.autarky} color="var(--c-vzev)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.autarky")}<${pe} text=${n||l("tooltip.kpi_autarky")} /></span>
            ${o?c`<span class="kpi-sub">${o}</span>`:null}
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,f=[];return s&&f.push(c`<${mn} key="au" gauge ratio=${t.autarky} color="var(--c-vzev)"
        label=${l("kpi.autarky")} tip=${n||l("tooltip.kpi_autarky")} sub=${o} />`),f.push(c`<${mn} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${l("kpi.selfuse")} tip=${n||l("tooltip.kpi_selfuse")} />`),e.showCo2&&f.push(c`<${mn} key="co" value=${Pl(t.co2Kg)} color="var(--c-production)"
        label=${l("kpi.co2")} tip=${n||l("tooltip.kpi_co2",{g:e.co2Factor})} />`),c`
      <div class="kpi-band">
        ${u}
        <div class="kpi-support">${f}</div>
      </div>`}function mn(e){return c`
      <div class="kpi-tile">
        ${e.gauge?c`<${ua} ratio=${e.ratio} color=${e.color} />`:c`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${pe} text=${e.tip} /></span>
          ${e.sub?c`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function Nl(){return c`
      <div class="ov-skel">
        <span class="sr-only" role="status">${l("common.loading")}</span>
        <div class="skel skel-flow" aria-hidden="true"></div>
        <div class="kpi-band" aria-hidden="true">
          <div class="skel skel-hero"></div>
          <div class="kpi-support">
            <div class="skel skel-tile"></div>
            <div class="skel skel-tile"></div>
            <div class="skel skel-tile"></div>
          </div>
        </div>
        <div class="skel skel-panel" aria-hidden="true"></div>
      </div>`}function Pl(e){return e==null||isNaN(e)?"–":e>=1e3?x.num(e/1e3,2)+" t":x.num(e,e<10?2:1)+" kg"}function Ol(){var e=C(null),t=e[0],n=e[1],r=C(null),i=r[0],a=r[1],o=C([]),s=o[0],u=o[1],f=C([]),d=f[0],h=f[1],v=C([]),p=v[0],g=v[1],$=C(!1),m=$[0],b=$[1],_=C(null),k=_[0],z=_[1],w=C(null),S=w[0],B=w[1],I=C(function(){return Math.floor(Date.now()/1e3)}),A=I[0],M=I[1],T=C(null),N=T[0],H=T[1],R=C({}),y=R[0],E=R[1],D=C(!1),W=D[0],ce=D[1],fe=C(0),V=fe[1],J=we({}),he=we({}),ye=we(!1),P=A,K=P-hn,G=[K,P];Z(function(){L.getSite().then(function(U){n(U)}).catch(function(){}),L.getMeta().then(function(U){B(U)}).catch(function(){})},[]),Z(function(){var U=!0;function ve(){U&&(ye.current=!0,V(function(ue){return ue+1}))}return kt().then(function(ue){if(U){if(!ue||!ue.available||!ue.siteId){ve();return}var qe=Math.floor(Date.now()/1e3)-hn;return Promise.all([jr(ue.siteId,"prod",qe).catch(function(){return{}}),jr(ue.siteId,"load",qe).catch(function(){return{}})]).then(function(xe){U&&(Xr(J.current,xe[0]),Xr(he.current,xe[1]),ve())})}},ve).catch(ve),function(){U=!1}},[]),Z(function(){return L.poll(function(){L.getEnergy("15m",96).then(function(U){if(Array.isArray(U)){var ve=Fn();if(!ve.available||!ve.siteId||!U.length){z(U);return}or(ve.siteId,U[0].ts,U[U.length-1].ts).then(function(ue){z(ue&&ue.self_id?Vi(U,ue):U)},function(){z(U)})}}).catch(function(){})},6e4)},[]),Z(function(){if(L.getVzevMembers)return L.poll(function(){L.getVzevMembers().then(function(U){Array.isArray(U)&&g(U)}).catch(function(){})},1e4)},[]),Z(function(){var U=L.onVzevInfo(function(ve){b(!!(ve&&ve.enabled))});return L.getVzevInfo().catch(function(){}),U},[]),Z(function(){return L.poll(function(){var U=Math.floor(Date.now()/1e3);M(U);var ve=U-hn;Promise.all([L.getPower().catch(function(){return null}),L.getLoads().catch(function(){return null}),L.getProductions().catch(function(){return null})]).then(function(ue){var qe=ue[0],xe=ue[1],Re=ue[2];if(qe&&a(qe),xe&&u(xe),Re&&h(Re),(qe||xe||Re)&&H(U),ce(!0),Re&&Re.forEach(function(Ye){Zr(J.current,Ye.id,U,Xt(Ye),ve)}),xe&&xe.forEach(function(Ye){var Ia=cr(Ye.state)==="active"?Xt(Ye):0;Zr(he.current,Ye.id,U,Ia,ve)}),ye.current&&(Re||xe)){var at=Fn();at&&at.available&&at.siteId&&(Re&&Br(at.siteId,"prod",J.current).catch(function(){}),xe&&Br(at.siteId,"load",he.current).catch(function(){}))}})},1e4)},[]);var le=ml(i),He=sa(i,K,P),O=ul(p),ne=gl(le,s),oe=ne&&!y[ne.key]?ne:null,se=!!(d&&d.length&&dl(He.pv.map(function(U){return U.y}))&&!y["flow.prod_nodata"]);function rt(){var U=Object.assign({},y);U["flow.prod_nodata"]=!0,E(U)}var it=new Date;it.setHours(0,0,0,0);var Ke=Math.floor(it.getTime()/1e3),Ie=(k||[]).filter(function(U){return U.ts>=Ke}),zt=!!(p&&p.length),ke=S&&S.tariffs||{},Ve=ke.co2_g_kwh===void 0||ke.co2_g_kwh===null||ke.co2_g_kwh===""?128:Number(ke.co2_g_kwh),ln=Rn(Ie,{tariffs:ke,vzev:zt,co2:Ve}),sn=Number(ke.grid_import_chf_kwh)>0||Number(ke.grid_feedin_chf_kwh)>0,Ct=Ve>0,ka=Ie.some(function(U){return U.partial}),xa=ka?l("kpi.today_until",{time:x.time(A,"hm")}):l("kpi.today"),za=(d||[]).some(function(U){return String(U.productionType||"").toUpperCase()==="BATTERY"}),Ca=t&&t.location?t.location:null,Sa=N?c`
      <span class="ov-updated">${l("common.stale",{time:x.time(N,"hm")})}</span>`:null;function Ma(U,ve){L.setLoadState(U,ve).then(function(){return L.getLoads()}).then(function(ue){ue&&u(ue)}).catch(function(){X(l("error.toggle"),{type:"error"})})}function Ea(){if(ne){var U=Object.assign({},y);U[ne.key]=!0,E(U)}}return c`
      <div>
        <${Le} title=${t&&t.name?t.name:l("page.overview")}
          subtitle=${Ca} actions=${Sa} />
        ${W?c`
          <${bt}>
            <${kl} hint=${oe} onDismiss=${Ea} />
            <${Ml} newest=${le} vzevW=${O} hasBattery=${za} records=${Ie} />
            <${Tl} kpis=${ln} period=${xa} showSaving=${sn}
              showCo2=${Ct} co2Factor=${Ve} />
            <${_l} newest=${le} win=${G} vzevW=${O} power=${i} />
            <${yl} productions=${d} history=${J.current} win=${G}
              notice=${se} onDismissNotice=${rt} />
            <${bl} loads=${s} history=${he.current} win=${G} onToggle=${Ma} />
            <${wl} members=${p} win=${G} enabled=${m} />
          <//>`:c`<${Nl} />`}
      </div>`}var Al=[10,25,50],Tt=2880,Ee={"15m":{label:"history.res.15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",count:Tt,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",count:Tt,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",count:Tt,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",count:Tt,target:"1q",tk:"q",slot:7776e3}},Fl=["15m","1h","1d","1w","1mo","1q"],$n={"15m":240*900,"1h":240*900,"1d":125*86400,"1w":125*86400,"1mo":589*86400,"1q":589*86400},Ll={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},Te={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function Rl(e){return e==null?null:e/1e3}function Dl(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-Ee[t].slot}function Wl(e,t){if(!e.length)return[];var n=Ll[t]||e.length,r={};e.forEach(function(u){r[u.ts]=u});for(var i=e[e.length-1].ts,a=[],o=e[0].ts,s=0;s<n&&o>=i;s++)a.push(r[o]||{ts:o,__blank:!0}),o=Dl(o,t);return a}function _n(e,t){var n=Rl(e);return n===null?"–":x.num(n,2)}function Ul(e){if(e==null)return c`<span>–</span>`;var t=e>0?"val-pos":e<0?"val-neg":"";return c`<span class=${t}>${x.chf(e,!0)}</span>`}function ct(e,t){return e==null?c`<span>–</span>`:c`<span class=${t||""}>${x.chf(e,!1)}</span>`}function Bl(e,t,n){var r=[{key:"ts",label:l("history.col.time")},{key:"imp",label:l("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(r.push({key:"impcost_ht",label:l("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),r.push({key:"impcost_nt",label:l("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):r.push({key:"impcost",label:l("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&r.push({key:"exp",label:l("history.col.feedin"),unit:"[kWh]",align:"right"}),r.push({key:"vzev",label:l(e?"history.col.vzevexport":"history.col.vzevimport"),unit:"[kWh]",align:"right"}),r.push({key:"saldo",label:l("history.col.vzevsaldo"),unit:"[CHF]",align:"right"}),e&&(r.push({key:"saving",label:l("history.col.selfuse"),unit:"[CHF]",align:"right"}),r.push({key:"autarky",label:l("history.col.autarky"),unit:"[%]",align:"right"}),r.push({key:"selfuserate",label:l("history.col.selfuserate"),unit:"[%]",align:"right"}),r.push({key:"ersparnis",label:l("history.col.ersparnis"),unit:"[CHF]",align:"right"})),r}function ei(e){return e==null?"–":x.num(e*100,0)+" %"}function fr(e){var t=e.revenue_vzev_chf,n=e.cost_vzev_chf;return t===null&&n===null?null:(t||0)-(n||0)}function jl(e,t,n){for(var r=Ee[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var o=e[a+1];if(o){var s=Math.round((e[a].ts-o.ts)/r)-1;s>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function Hl(e){var t=e.coverage;if(!t||t.firstE15Ts===null)return null;var n=Math.floor(Date.now()/1e3)-e.span,r=(t.gaps||[]).filter(function(i){return i[1]>=n});return c`
      <p class="verlauf-archive-note">
        <span class="badge badge-inactive">${l("history.archive_badge",{days:t.days})}</span>
        ${r.length?c`
          <span class="verlauf-archive-gap">
            ${l("history.archive_gap",{from:x.time(r[0][0],"1d"),to:x.time(r[r.length-1][1],"1d"),count:r.length})}
          </span>`:null}
      </p>`}function Kl(){var e=C(Te.res),t=e[0],n=e[1],r=C(0),i=r[0],a=r[1],o=C(Te.pageSize),s=o[0],u=o[1],f=C(Te.chfMode),d=f[0],h=f[1],v=C(Te.chartMode),p=v[0],g=v[1],$=C({records:null,tariffs:{},producer:!1,err:!1,archived:!1,coverage:null}),m=$[0],b=$[1],_=C(!0),k=_[0],z=_[1];Te.res=t,Te.pageSize=s,Te.chfMode=d,Te.chartMode=p,Z(function(){var O=!1;z(!0);var ne=Ee[t];return kt().then(function(oe){var se=!!(oe.available&&oe.siteId),rt=Math.floor(Date.now()/1e3),it=rt-$n[t];return Promise.all([se?Ko(oe.siteId,it,rt).catch(function(){return null}):L.getEnergy("15m",ne.count).catch(function(){return null}),L.getMeta().catch(function(){return null}),L.getProductions().catch(function(){return null}),se?or(oe.siteId,it,rt).catch(function(){return null}):Promise.resolve(null)]).then(function(Ke){if(!O){var Ie=Ke[0],zt=Ke[1],ke=Ke[2],Ve=Ke[3];if(Ie===null){b({records:null,tariffs:{},producer:!1,err:!0,archived:!1,coverage:null}),z(!1);return}Ve&&(Ie=Vi(Ie,Ve));var ln=zt&&zt.tariffs||{},sn=Array.isArray(ke)&&ke.some(function(Ct){return Ct&&Ct.productionType==="PHOTOVOLTAIC"});b({records:Ie,tariffs:ln,producer:sn,err:!1,archived:se,coverage:oe.coverage||null}),z(!1)}})}),function(){O=!0}},[t]);var w=rn(m.tariffs),S=Ue(function(){if(!m.records)return[];var O=m.records;w&&(O=m.records.map(function(oe){return Hi(oe,m.tariffs)}));var ne=Tr(O,"15m",Ee[t].target,m.tariffs);return ne.slice().sort(function(oe,se){return se.ts-oe.ts})},[m.records,m.tariffs,t,w]),B=Ue(function(){if(t!=="15m"||!m.records)return{};var O=Tr(m.records,"15m","15m",m.tariffs),ne=po(O,3),oe={};return ne.forEach(function(se){oe[O[se].ts]=!0}),oe},[m.records,m.tariffs,t]),I=S.some(function(O){return(O.exp_wh||0)>0}),A=Bl(m.producer,I,w),M=S.some(function(O){return(O.vzev_in_wh||0)>0||(O.vzev_out_wh||0)>0}),T=m.tariffs.co2_g_kwh===void 0||m.tariffs.co2_g_kwh===null||m.tariffs.co2_g_kwh===""?128:Number(m.tariffs.co2_g_kwh),N={tariffs:m.tariffs,vzev:M,co2:T},H=Number(m.tariffs.grid_import_chf_kwh)>0||Number(m.tariffs.grid_feedin_chf_kwh)>0,R=Ue(function(){var O={};return S.forEach(function(ne){O[ne.ts]=Rn([ne],N)}),O},[S,m.tariffs,M,T]),y=Ue(function(){return Rn(S,N)},[S,m.tariffs,M,T]),E=m.archived?!(m.coverage&&m.coverage.firstE15Ts!==null&&m.coverage.firstE15Ts>Math.floor(Date.now()/1e3)-$n[t]):m.records?m.records.length<Ee[t].count:!0,D=jl(S,t,E),W=S.length;D.filter(function(O){return O.kind==="row"});var ce=Math.max(1,Math.ceil(W/s)),fe=Math.min(i,ce-1),V=fe*s,J=Math.min(V+s,W),he=Vl(D,V,J);function ye(O){n(O),a(0)}function P(O){u(+O),a(0)}function K(){var O=A.map(function(se){return se.label+(se.unit?" "+se.unit:"")}),ne=S.map(function(se){return Gl(se,A,t,m.producer,R[se.ts])}),oe=rr(O,ne);ts(Fo(t),oe)}var G=Ue(function(){return Xl(Wl(S,t),p,d,m.producer)},[S,p,d,m.producer,t]),le=Ue(function(){return Ql(S,t,m.producer)},[S,t,m.producer]),He=c`
      <div class="verlauf-actions">
        <${nn} label=${l("history.resolution")} value=${t}
          onChange=${ye}
          options=${Fl.map(function(O){return{value:O,label:l(Ee[O].label)}})} />
        <${Y} secondary onClick=${K} disabled=${W===0}>
          ${l("history.export")}<//>
      </div>`;return c`
      <div>
        <${Le} title=${l("page.history")} subtitle=${l("history.subtitle")}
          actions=${He} />

        ${m.archived?c`<${Hl} coverage=${m.coverage}
          span=${$n[t]} />`:null}

        ${m.err?c`
          <${F}><p class="placeholder-text">${l("common.nodata")}</p><//>`:null}

        ${!m.err&&k?c`
          <${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}

        ${!m.err&&!k?c`
          <div>
            ${S.length?c`<${es} summary=${le} kpis=${y} showSaving=${H} />`:null}

            <${F} group="vzev" title=${l("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${l("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(O){return c`<button key=${O[0]} type="button" role="tab"
                      class=${"seg-btn"+(p===O[0]?" seg-btn-active":"")}
                      aria-selected=${p===O[0]}
                      onClick=${function(){g(O[0])}}>${l(O[1])}</button>`})}
                </div>
                ${p==="net"?c`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${d}
                      onChange=${function(O){h(O.target.checked)}} />
                    <span>${l("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${G.points.length?c`
                <${Yn} height=${220}
                  yUnit=${G.yUnit} xUnit=${l("history.chart.xunit")}
                  yFormat=${G.yFormat}
                  xTickFormat=${function(O){return Zl(t,O)}}
                  points=${G.points} />
                <div class="chart-legend">
                  ${G.legend.map(function(O,ne){return c`<span key=${ne} class="legend-item"><span class="legend-swatch" style=${"background:"+O.color}></span>${O.label}</span>`})}
                </div>`:c`<p class="placeholder-text">${l("common.nodata")}</p>`}
            <//>

            <${F} title=${l("history.table.title")}>
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${A.map(function(O){return c`<th key=${O.key} class=${O.align==="right"?"ta-r":""}>
                          ${O.label}${O.unit?c`<span class="th-unit"> ${O.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${W===0?c`
                      <tr><td class="table-empty" colspan=${A.length}>${l("common.nodata")}</td></tr>`:he.map(function(O){return ql(O,A,t,B,m.producer,R)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${l("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${s}
                        onChange=${function(O){P(O.target.value)}}>
                        ${Al.map(function(O){return c`<option key=${O} value=${O}>${O}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${l("table.pageinfo",{from:W===0?0:V+1,to:J,total:W})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${l("table.prev")}
                      disabled=${fe===0} onClick=${function(){a(fe-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${l("table.next")}
                      disabled=${fe>=ce-1} onClick=${function(){a(fe+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${l("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function Vl(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var o=e[a];if(o.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(o)}else i>=t&&i<n&&r.push(o)}return r}function ql(e,t,n,r,i,a){if(e.kind==="boundary")return c`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${l("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return c`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${l("history.gap")}</td></tr>`;var o=e.rec,s=!!r[o.ts],u=a&&a[o.ts]||null;return c`
      <tr key=${"r"+o.ts}>
        ${t.map(function(f){return c`<td key=${f.key} class=${f.align==="right"?"ta-r":""}>
            ${Yl(f.key,o,n,s,i,u)}
          </td>`})}
      </tr>`}function Yl(e,t,n,r,i,a){switch(e){case"ts":return c`<span class="verlauf-ts">
          ${x.time(t.ts,Ee[n].tk)}
          ${r?c`<span class="peak-mark" title=${l("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?c`<${pe} text=${l("history.partial")} />`:null}
        </span>`;case"imp":return _n(t.imp_wh);case"impcost":return ct(t.cost_import_chf,"val-neg");case"impcost_ht":return ct(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return ct(t.cost_import_nt_chf,"val-neg");case"exp":return _n(t.exp_wh);case"vzev":return _n(vr(t,i));case"saldo":return Ul(fr(t));case"saving":return ct(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return ei(a&&a.autarky);case"selfuserate":return ei(a&&a.selfuse);case"ersparnis":return ct(a&&a.savingChf,a&&a.savingChf>0?"val-pos":"");default:return""}}function vr(e,t){return(t?e.vzev_out_wh:e.vzev_in_wh)||0}function Gl(e,t,n,r,i){return t.map(function(a){switch(a.key){case"ts":return x.time(e.ts,Ee[n].tk);case"imp":return yn(e.imp_wh);case"impcost":return Ze(e.cost_import_chf);case"impcost_ht":return Ze(e.cost_import_ht_chf);case"impcost_nt":return Ze(e.cost_import_nt_chf);case"exp":return yn(e.exp_wh);case"vzev":return yn(vr(e,r));case"saldo":return Ze(fr(e));case"saving":return Ze(e.saving_selfuse_chf);case"autarky":return ti(i&&i.autarky);case"selfuserate":return ti(i&&i.selfuse);case"ersparnis":return Ze(i&&i.savingChf);default:return""}})}function ti(e){return e==null?"":(e*100).toFixed(0)}function yn(e){return e==null?"":(e/1e3).toFixed(2)}function Ze(e){return e==null?"":Number(e).toFixed(2)}function Zl(e,t){switch(e){case"15m":case"1h":return x.time(t,"hm");case"1d":case"1w":return x.time(t,"dm");case"1mo":return x.time(t,"1mo");case"1q":return x.time(t,"q");default:return x.time(t,Ee[e].tk)}}function Xl(e,t,n,r){var i=e.slice().sort(function(v,p){return v.ts-p.ts}),a=function(v){return x.num(v,2)},o=function(v){return v==null?0:v/1e3};if(t==="bilanz"){var s="var(--c-production)",u="var(--c-vzev)",f="var(--c-import)",d=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var p=pl([{pv_wh:v.pv_wh||0,exp_wh:v.exp_wh||0,imp_wh:v.imp_wh||0}]);return{t:v.ts,bars:[{segments:[{value:o(p.prodSelf),color:s,label:l("history.bilanz.selfuse")},{value:o(p.prodFeedin),color:u,label:l("history.bilanz.feedin")}]},{segments:[{value:o(p.consSelf),color:s,label:l("history.bilanz.covered")},{value:o(p.consImport),color:f,label:l("history.bilanz.import")}]}]}});return{points:d,yUnit:"kWh",yFormat:a,legend:[{color:s,label:l("history.bilanz.selfuse")},{color:u,label:l("history.bilanz.feedin")},{color:f,label:l("history.bilanz.import")}]}}var h;return n?h=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var p=fr(v);return{t:v.ts,y:p===null?null:p,color:(p||0)<0?"var(--c-import)":"var(--c-vzev)"}}):h=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var p=v.imp_wh===null||v.imp_wh===void 0?null:v.imp_wh/1e3;if(p&&p>0)return{t:v.ts,y:p,color:"var(--c-import)"};var g=vr(v,r),$=g==null?null:g/1e3;return $&&$>0?{t:v.ts,y:-$,color:"var(--c-vzev)"}:{t:v.ts,y:p===null?null:0,color:"var(--c-import)"}}),{points:h,yUnit:n?"CHF":"kWh",yFormat:n?function(v){return x.chf(v,!0)}:a,legend:[{color:"var(--c-import)",label:l("history.chart.legend_import")},{color:"var(--c-vzev)",label:l(n?"history.chart.legend_saldo":"history.chart.legend_export")}]}}function Ql(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(d,h){return d.ts-h.ts}),o=function(d){return a.map(function(h){return h[d]===null||h[d]===void 0?null:h[d]/1e3})},s=i&&e.length>=13,u=function(d,h){var v=o(h);return{name:d,avg:En(v),trend:fo(v),yoy:s?vo(v):null}},f=[u(l("history.col.gridimport"),"imp_wh")];return n&&f.push(u(l("history.summary.pv"),"pv_wh")),{periodLabel:l(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:f}}function Jl(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return c`
      <div class="summary-cell">
        <span class="summary-label">${l("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":x.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function es(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":x.num(i*100,0)+" %"}return c`
      <div class="summary-strip">
        ${n?c`
          <div class="summary-cell">
            <span class="summary-label">${l("kpi.autarky")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.autarky)}</span>
          </div>
          <div class="summary-cell">
            <span class="summary-label">${l("kpi.selfuse")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.selfuse)}</span>
          </div>
          ${e.showSaving?c`
            <div class="summary-cell">
              <span class="summary-label">${l("kpi.saving")}</span>
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":x.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return c`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":x.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${Jl(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?c`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${l("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+x.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function ts(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function ns(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const rs=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],is=(function(){const e={};return rs.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function as(e){const t=is[ns(e)];return t===void 0?null:t}function os(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function ca(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function ls(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function ss(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function us(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function cs(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function ni(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var fs=1e4,vs=90;function Dn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function ri(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:as(t)}})}function fa(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function Ce(e,t){var n=fa(e,t);return n?Dn(n.raw):null}function Qe(e){return function(t){return t.i18nKey===e}}function va(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function ii(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function da(e,t,n){var r=Ce(e,va(t,n));return r!==null?r:ca(Ce(e,ii(t,n,"in")),Ce(e,ii(t,n,"out")))}function ds(e,t){var n=null;return[1,2,3].forEach(function(r){var i=da(e,t,r);i!==null&&(n=(n||0)+i)}),n}function dr(e){var t=ds(e,"power"),n=Ce(e,Qe("meter.f.power_net")),r=!1;if(n===null){var i=Ce(e,Qe("meter.f.power_import")),a=Ce(e,Qe("meter.f.power_export"));n=ca(i,a),n!==null&&(r=!0)}var o=ls(n,t);return n!==null?{net:n*o,derived:r,scale:o}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function ai(e){return c`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${pe} text=${e.tip} />
      </span>`}function ps(){return c`<span class="meter-tag meter-tag-derived">${l("meter.derived")}</span>`}function hs(){return c`
      <span class="meter-tag meter-tag-register">${l("meter.register")}
        <${pe} text=${l("meter.tip.register")} /></span>`}function pa(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-vzev)":""}function gs(e){var t=e.resolved,n=dr(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,o=l(a?"meter.importing":"meter.exporting");return c`
      <${F} group="grid" title=${l("meter.section.power")}
        tooltip=${l("meter.tip.net")}
        badge=${i?ps():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+pa(r)}>
            ${x.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${o}</span>
        </div>
      <//>`}var ms=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function $s(e){var t=e.resolved,n=[1,2,3],r=ms.map(function(d){var h=n.map(function(p){return da(t,d.role,p)}),v=h.some(function(p){return p!==null});return{m:d,cells:h,any:v}}).filter(function(d){return d.any});if(r.length===0)return null;var i=r.filter(function(d){return d.m.role==="power"})[0],a=i?os(i.cells):null,o=null,s=r.filter(function(d){return d.m.role==="pf"})[0];if(i&&!s){var u=r.filter(function(d){return d.m.role==="reactive"})[0];if(u){var f=n.map(function(d,h){return ss(i.cells[h],u.cells[h])});f.some(function(d){return d!==null})&&(o=f)}}return c`
      <${F} title=${l("meter.section.phases")} tooltip=${l("meter.tip.phases")}>
        <div class="meter-table-wrap">
          <table class="meter-table">
            <thead>
              <tr>
                <th class="meter-th-metric"></th>
                <th>${l("meter.phase",{n:1})}</th>
                <th>${l("meter.phase",{n:2})}</th>
                <th>${l("meter.phase",{n:3})}</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(function(d){return c`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${l(d.m.key)}
                      ${d.m.unit?c`<span class="meter-unit">[${d.m.unit}]</span>`:null}
                      ${d.m.tip?c`<${pe} text=${l(d.m.tip)} />`:null}
                    </th>
                    ${d.cells.map(function(h){var v=d.m.signed?pa(h):"";return c`<td style=${v?"color:"+v:""}>
                        ${h===null?"–":x.num(h,d.m.prec)}</td>`})}
                  </tr>`})}
              ${o?c`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${ai} tip=${l("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${o.map(function(d){return c`<td>${d===null?"–":x.num(d,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?c`
          <div class="meter-imbalance">
            <${ai} tip=${l("meter.tip.imbalance")}>${l("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${x.w(a)}</span>
          </div>`:null}
      <//>`}function _s(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=fa(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?Dn(r.raw):null;return c`
      <${F} group="production" title=${l("meter.section.registers")}
        tooltip=${l("meter.tip.registers")}
        badge=${r&&(i===1||i===2)?c`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${l("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${l(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?c`
          <dl class="meter-reg-list">
            ${n.map(function(a){var o=Dn(a.raw);return c`
                <div class="meter-reg">
                  <dt>${l(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${hs()}</dt>
                  <dd>${o===null?String(a.raw):x.num(o,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function ys(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?x.num(i.min,1)+" / "+x.num(i.max,1):"–"}return c`
      <${F} title=${l("meter.section.minmax")} subtitle=${l("meter.since_open")}
        tooltip=${l("meter.tip.minmax")}>
        <dl class="meter-reg-list">
          ${[1,2,3].map(function(i){return t.u[i]?c`
              <div class="meter-reg">
                <dt>${l("meter.voltage")} ${l("meter.phase",{n:i})} <span class="meter-unit">[V]</span></dt>
                <dd>${r(t.u[i])}</dd>
              </div>`:null})}
          ${t.peakImp?c`
            <div class="meter-reg">
              <dt>${l("meter.peak_import")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-import)"}>${x.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?c`
            <div class="meter-reg">
              <dt>${l("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-vzev)"}>${x.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function bs(e){var t=e.resolved,n=C(!1),r=n[0],i=n[1],a=dr(t).scale;function o(d){return a===1e3&&d.group==="power"&&d.unit==="W"?"kW":d.unit}var s=t.filter(function(d){return d.desc}),u=t.filter(function(d){return!d.desc});function f(d){var h=!!d.desc,v=d.raw!==null&&typeof d.raw=="object"?JSON.stringify(d.raw):String(d.raw);return c`
        <tr>
          <td class="meter-raw-name">${d.name}</td>
          <td class="meter-raw-val">${v}</td>
          <td class="meter-raw-unit">${h&&d.desc.unit?o(d.desc):""}</td>
          <td class="meter-raw-label">${l(h?d.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return c`
      <${F} title=${l("meter.section.raw")}>
        <button class="meter-raw-toggle" aria-expanded=${r}
          onClick=${function(){i(!r)}}>
          ${l(r?"meter.raw_hide":"meter.raw_show")}
        </button>
        ${r?c`
          <div class="meter-table-wrap">
            <table class="meter-table meter-raw-table">
              <thead>
                <tr>
                  <th>${l("meter.raw.field")}</th>
                  <th>${l("meter.raw.value")}</th>
                  <th>${l("meter.raw.unit")}</th>
                  <th>${l("meter.raw.meaning")}</th>
                </tr>
              </thead>
              <tbody>
                ${s.map(f)}
                ${u.length?c`
                  <tr class="meter-raw-sep"><td colspan="4">${l("meter.raw.other")}</td></tr>
                  ${u.map(f)}`:null}
              </tbody>
            </table>
          </div>`:null}
      <//>`}function ws(){var e=C(void 0),t=e[0],n=e[1],r=C(null),i=r[0],a=r[1],o=C(!1),s=o[0],u=o[1],f=C(null),d=f[0],h=f[1],v=we([]),p=we({u:{},peakImp:0,peakExp:0});Z(function(){return L.poll(function(){L.getMeter().then(function(m){if(n(m&&m.values?m.values:null),h(m&&typeof m.now=="number"?m.now:Math.floor(Date.now()/1e3)),!(!m||!m.values)){var b=ri(m.values),_=p.current;[1,2,3].forEach(function(M){var T=Ce(b,va("voltage",M));T!==null&&(_.u[M]=cs(_.u[M],T))});var k=dr(b),z=k.net,w=Ce(b,Qe("meter.f.power_import")),S=Ce(b,Qe("meter.f.power_export"));w!==null&&(w=w*k.scale),S!==null&&(S=S*k.scale),w===null&&z!==null&&(w=z>0?z:0),S===null&&z!==null&&(S=z<0?-z:0),w!==null&&(_.peakImp=ni(_.peakImp,w)),S!==null&&(_.peakExp=ni(_.peakExp,S)),a({u:Object.assign({},_.u),peakImp:_.peakImp,peakExp:_.peakExp});var B=Ce(b,Qe("meter.f.energy_import")),I=z!==null?z>0:w!==null&&w>0,A=v.current;for(A.push({reg:B,importing:I});A.length>vs;)A.shift();u(us(A))}}).catch(function(){})},fs)},[]);var g=t?ri(t):[],$=d?Math.max(0,Math.floor(Date.now()/1e3)-d):null;return c`
      <div>
        <${Le} title=${l("page.meter")} subtitle=${l("meter.subtitle")}
          actions=${d?c`
            <span class="meter-updated">
              ${l("meter.updated",{time:x.time(d,"hm")})}
              ${$!==null?c`<span class="meter-age"> · ${l("meter.age",{s:$})}</span>`:null}
            </span>`:null} />

        ${s?c`<div class="banner banner-warn">${l("meter.stale")}</div>`:null}

        ${t===void 0?c`<${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}
        ${t===null?c`<${F}><p class="placeholder-text">${l("meter.empty")}</p><//>`:null}
        ${t?c`
          <${gs} resolved=${g} />
          <${$s} resolved=${g} />
          <${_s} resolved=${g} />
          <${ys} stats=${i} />
          <${bs} resolved=${g} />`:null}
      </div>`}var ks=50;function xs(e,t){if(!e||!e.data)return[];var n=e.producer_id,r=n&&e.data[n],i={},a=[],o=r?[r]:Object.keys(e.data).map(function(s){return e.data[s]});return o.forEach(function(s){if(s)for(var u=0;u+2<s.length;u+=3){var f=s[u];t&&(f<t[0]||f>=t[1])||i[f]||(i[f]=!0,a.push(f))}}),a.sort(function(s,u){return u-s}),a}function zs(e,t,n){var r=ko(e,t,n),i=x.time(e,"hm"),a=x.time(e+900,"hm");return!r||r.prodWh<=0?l("explain.noprod",{from:i,to:a}):l("explain.sentence",{from:i,to:a,prod:x.wh(r.prodWh),member:x.wh(r.memberImpWh),total:x.wh(r.totalImpWh),share:x.num(r.sharePct,0),alloc:x.wh(r.allocatedWh)})}function ha(e){var t=C(0),n=t[0],r=t[1],i=xs(e.raw,e.range),a=i.slice(0,(n+1)*ks),o=a.length<i.length;return c`
      <div class="explain-panel" role="region" aria-label=${e.title||l("explain.title")}>
        <div class="explain-head">
          <div>
            <h3 class="explain-title">${e.title||l("explain.title")}</h3>
            <p class="explain-subtitle">${l("explain.subtitle")}</p>
          </div>
          ${e.onClose?c`
            <button class="explain-close" aria-label=${l("explain.close")} onClick=${e.onClose}>×</button>`:null}
        </div>
        ${i.length===0?c`<p class="placeholder-text">${l("explain.empty")}</p>`:c`
            <ul class="explain-list">
              ${a.map(function(s){return c`<li key=${s} class="explain-slot">${zs(s,e.raw,e.memberId)}</li>`})}
            </ul>
            ${o?c`
              <button class="explain-more" onClick=${function(){r(n+1)}}>
                ${l("explain.more")}
              </button>`:null}`}
      </div>`}var oi=!1,Cs=2*3600,Ss=c`<svg viewBox="0 0 24 24" class="vz-house" aria-hidden="true"><path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="13" width="4" height="6" fill="currentColor"/></svg>`,Ms=c`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16l-3.6.6.6-3.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Es=c`<svg viewBox="0 0 20 20" class="vz-plus" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,li=c`<svg viewBox="0 0 24 24" class="vz-grid-ico" aria-hidden="true"><path d="M6 3v18M18 3v18M6 8h12M6 14h12M3 6l3 2 3-2M15 6l3 2 3-2M3 16l3 2 3-2M15 16l3 2 3-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function ft(e){return e&&(e.type==="PRODUCER"||e.typ==="P")}function Is(e){if(!e||!e.length)return{};var t=e[e.length-1];return t&&t.members||{}}function Nt(e){var t=e.member,n=t.name||t.id,r=e.noData;return c`
      <div class=${"vz-card"+(e.own?" vz-card-own":"")+(e.producer?" vz-card-producer":"")}>
        <button class="vz-edit" aria-label=${l("vzev.edit")}
          onClick=${function(){Oe.navigate("/vzev/mitglied/"+encodeURIComponent(t.id))}}>
          ${Ms}
        </button>
        <div class="vz-house-wrap">${Ss}</div>
        <span class="vz-name">${n}</span>
        <span class="vz-type">${l(e.producer?"vzev.type.producer":"vzev.type.consumer")}</span>
        ${e.own?c`<span class="vz-ownbadge">${l("vzev.own")}</span>`:null}
        ${r?c`
          <span class="vz-nodata" role="status">
            ${r.lastTs?l("vzev.nodata.badge",{time:x.time(r.lastTs,"15m")}):l("vzev.nodata.never")}
          </span>`:null}
        ${!e.own&&e.onRemove?c`
          <button class="vz-remove" onClick=${e.onRemove}>${l("vzev.remove")}</button>`:null}
      </div>`}function Ts(e){var t=e.wh,n="vz-chip vz-chip-"+(e.dir==="grid"?"grid":"vzev");return c`
      <span class=${n}>
        <span class="vz-chip-dir">${l(e.dir==="grid"?"vzev.flow.fromgrid":"vzev.flow.fromproducer")}</span>
        <span class="vz-chip-val">${x.wh(t)}</span>
      </span>`}function Ns(){var e=C(null),t=e[0],n=e[1],r=C({}),i=r[0],a=r[1],o=C([]),s=o[0],u=o[1],f=C(!1),d=f[0],h=f[1],v=C(null),p=v[0],g=v[1],$=C(oi),m=$[0],b=$[1],_=C(null),k=_[0],z=_[1],w=we(!0);function S(){L.getVzevMembersList().then(function(P){w.current&&(n(P),h(!1))}).catch(function(){w.current&&(n([]),h(!0))}),L.getVzevRaw().then(function(P){w.current&&g(P||null)}).catch(function(){w.current&&g(null)})}Z(function(){w.current=!0,S(),L.getVzevDiscovered().then(function(K){w.current&&u(K)}).catch(function(){w.current&&u([])});var P=L.poll(function(){L.getVzevFlows("15m",1).then(function(K){w.current&&a(Is(K&&K.flows))}).catch(function(){})},2e3);return function(){w.current=!1,P()}},[]);function B(){oi=!0,b(!0)}function I(P){L.get("/api/vzev/members?action=remove&id="+encodeURIComponent(P.id)).then(function(){X(l("vzev.removed"),{type:"info"}),S()}).catch(function(){X(l("vzev.saveerror"),{type:"error"})})}var A=!!(p&&p.self_id!=null&&p.self_id===p.producer_id),M=A?c`
      <${Y} secondary onClick=${function(){Oe.navigate("/vzev/abrechnung")}}>
        ${l("vzev.billing")} ›
      <//>`:null,T=c`<${Le} title=${l("page.vzev")} subtitle=${l("vzev.subtitle")} actions=${M} />`;if(t===null)return c`<div>${T}<${F}><p class="placeholder-text">${l("common.loading")}</p><//></div>`;var N=null,H=[];t.forEach(function(P){P.own||P.is_own?N=P:H.push(P)}),t.forEach(function(P){ft(P)});var R=c`
      <${F} class="vz-discovery">
        <div class="vz-discovery-head">
          <h2 class="card-title">${l("vzev.discovery.title")}</h2>
          <span class="card-subtitle">${l("vzev.discovery.hint")}</span>
        </div>
        ${s.length===0?c`<p class="placeholder-text">${l("vzev.discovery.empty")}</p>`:c`
            <ul class="vz-discovery-list">
              ${s.map(function(P){return c`
                  <li key=${P.id} class="vz-discovery-item">
                    <span class="vz-disc-name">${P.name||P.id}</span>
                    <span class="vz-disc-meta">${P.id}${P.url?" · "+P.url:""}</span>
                    <${Y} small onClick=${function(){Oe.navigate("/vzev/mitglied/"+encodeURIComponent(P.id))}}>
                      ${Es} ${l("vzev.add")}
                    <//>
                  </li>`})}
            </ul>`}
      <//>`;function y(P){var K=i[P.id];return typeof K=="number"?K:null}var E=0;if(p&&p.data)for(var D in p.data){var W=Ar(p,D);W&&W>E&&(E=W)}function ce(P){if(!p||!p.data)return null;var K=Ar(p,P.id),G=E||Math.floor(Date.now()/1e3);return K===null?{lastTs:null}:G-K>Cs?{lastTs:K}:null}var fe=m?null:c`
      <${F} class="vz-info">
        <div class="vz-info-head">
          <h2 class="card-title">${l("vzev.info.title")}</h2>
          <button class="vz-info-close" aria-label=${l("common.close")} onClick=${B}>×</button>
        </div>
        <p class="vz-info-body">${l("vzev.info.body")}</p>
        <${Y} small secondary onClick=${B}>${l("vzev.info.dismiss")}<//>
      <//>`,V=k?(function(){for(var P=0;P<t.length;P++)if(t[P].id===k)return t[P];return null})():null,J=V&&p?c`
      <${F} class="vz-drill">
        <${ha} raw=${p} memberId=${k}
          title=${l("explain.title")+" – "+(V.name||k)}
          onClose=${function(){z(null)}} />
      <//>`:null;function he(){var P=H;return c`
        <${F} group="vzev" class="vz-graph-card">
          <div class="vz-graph" role="img" aria-label=${l("vzev.graph.aria")}>
            <div class="vz-ring">
              ${P.length===0?c`<p class="placeholder-text vz-ring-empty">${l("vzev.empty")}</p>`:P.map(function(K){var G=ft(K),le=y(K);return c`
                      <div key=${K.id} class="vz-node vz-node-peer">
                        <${Nt} member=${K} producer=${G} noData=${ce(K)}
                          onRemove=${function(){I(K)}} />
                        ${le!==null&&le>0?c`
                          <span class=${"vz-flow "+(G?"vz-flow-vzev":"vz-flow-grid")}>
                            <span class="vz-flow-arrow">${G?"→":"←"}</span>
                            ${x.wh(le)}
                          </span>`:null}
                        ${!G&&p?c`
                          <button class="vz-explain-btn" onClick=${function(){z(K.id)}}>
                            ${l("explain.open")}
                          </button>`:null}
                      </div>`})}
            </div>

            ${N?c`
              <div class="vz-node vz-node-own">
                <${Nt} member=${N} own=${!0} producer=${ft(N)} />
              </div>`:null}

            <div class="vz-arrow-grid" aria-hidden="true">
              <span class="vz-arrow-line"></span>
            </div>

            <div class="vz-node vz-node-net">
              <div class="vz-netnode">
                <div class="vz-grid-icowrap">${li}</div>
                <span class="vz-net-label">${l("vzev.net")}</span>
              </div>
            </div>
          </div>
        <//>`}function ye(){return c`
        <div class="vz-list">
          ${N?c`
            <div class="vz-list-item vz-list-own">
              <${Nt} member=${N} own=${!0} producer=${ft(N)} />
            </div>`:null}
          ${H.map(function(P){var K=ft(P),G=y(P);return c`
              <div key=${P.id} class="vz-list-item">
                <${Nt} member=${P} producer=${K} noData=${ce(P)}
                  onRemove=${function(){I(P)}} />
                ${G!==null&&G>0?c`<${Ts} dir=${K?"producer":"grid"} wh=${G} />`:null}
                ${!K&&p?c`
                  <button class="vz-explain-btn" onClick=${function(){z(P.id)}}>
                    ${l("explain.open")}
                  </button>`:null}
              </div>`})}
          <div class="vz-list-item vz-list-net">
            <div class="vz-netnode vz-netnode-row">
              <div class="vz-grid-icowrap">${li}</div>
              <span class="vz-net-label">${l("vzev.net")}</span>
            </div>
          </div>
        </div>`}return c`
      <div>
        ${T}
        ${d?c`<div class="banner banner-warn">${l("vzev.loaderror")}</div>`:null}
        ${fe}
        <div class="vz-graph-wrap">${he()}</div>
        <div class="vz-list-wrap">${ye()}</div>
        ${J}
        ${R}
      </div>`}function si(e){return e&&(e.type==="PRODUCER"||e.typ==="P")?"P":"C"}function Ps(e){if(e==null||e===0)return"";var t=new Date(e*1e3);function n(r){return(r<10?"0":"")+r}return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function Os(e){if(!e)return null;var t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e));if(!t)return null;var n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),0,0,0,0);return Math.floor(n.getTime()/1e3)}function As(e){var t=e.params&&e.params.id||null,n=C(""),r=n[0],i=n[1],a=C(""),o=a[0],s=a[1],u=C("C"),f=u[0],d=u[1],h=C(""),v=h[0],p=h[1],g=C(""),$=g[0],m=g[1],b=C([]),_=b[0],k=b[1],z=C(!!t),w=z[0],S=z[1],B=C(!1),I=B[0],A=B[1],M=C(!1),T=M[0],N=M[1],H=C(""),R=H[0],y=H[1];Z(function(){var V=!1;return Promise.all([L.getVzevMembersList().catch(function(){return[]}),t?L.getVzevDiscovered().catch(function(){return[]}):Promise.resolve([])]).then(function(J){if(!V){var he=J[0]||[],ye=J[1]||[];k(he);for(var P=null,K=0;K<he.length;K++)if(he[K].id===t){P=he[K];break}if(P)S(!0),i(P.name||""),s(P.location||P.loc||""),d(si(P)),p(P.metering_point||""),m(Ps(P.entry_ts));else if(t){S(!1);for(var G=null,le=0;le<ye.length;le++)if(ye[le].id===t){G=ye[le];break}G&&(i(G.name||""),s(G.location||G.loc||""),d(si(G)))}A(!0)}}),function(){V=!0}},[t]);function E(){if(f!=="P")return!1;for(var V=0;V<_.length;V++){var J=_[V];if(J.id!==t&&(J.type==="PRODUCER"||J.typ==="P"))return!0}return!1}function D(){if(y(""),!r.trim()){y(l("vzev.form.err.name"));return}if(E()){y(l("vzev.form.err.producer"));return}N(!0);var V="/api/vzev/members?action=upsert&id="+encodeURIComponent(t||"")+"&name="+encodeURIComponent(r.trim())+"&loc="+encodeURIComponent(o.trim())+"&typ="+encodeURIComponent(f)+"&mp="+encodeURIComponent(v.trim()),J=Os($);J!==null&&(V+="&entry="+J),L.get(V).then(function(){X(l("vzev.saved"),{type:"info"}),Oe.navigate("/vzev")}).catch(function(){N(!1),X(l("vzev.saveerror"),{type:"error"})})}function W(){N(!0),L.get("/api/vzev/members?action=remove&id="+encodeURIComponent(t)).then(function(){X(l("vzev.removed"),{type:"info"}),Oe.navigate("/vzev")}).catch(function(){N(!1),X(l("vzev.saveerror"),{type:"error"})})}var ce=l(w?"vzev.form.edit":"vzev.form.add"),fe=c`<${Le} title=${ce} subtitle=${l("vzev.form.subtitle")} />`;return I?c`
      <div>
        ${fe}
        <${F} class="vz-form-card">
          <div class="vz-form">
            <${Rt} label=${l("vzev.form.name")} value=${r}
              placeholder=${l("vzev.form.name.ph")}
              onInput=${function(V){i(V)}} />
            <${Rt} label=${l("vzev.form.loc")} value=${o}
              placeholder=${l("vzev.form.loc.ph")}
              onInput=${function(V){s(V)}} />
            <${nn} label=${l("vzev.form.typ")} value=${f}
              onChange=${function(V){d(V),y("")}}
              options=${[{value:"C",label:l("vzev.type.consumer")},{value:"P",label:l("vzev.type.producer")}]} />

            <${Rt} label=${l("vzev.form.metering_point")} value=${v}
              placeholder=${l("vzev.form.metering_point.ph")} maxlength=${40}
              onInput=${function(V){p(V)}} />
            <p class="vz-form-hint">${l("vzev.form.metering_point.hint")}</p>

            <label class="field field-block">
              <span class="field-label">${l("vzev.form.entry_ts")}</span>
              <input class="textfield" type="date" value=${$}
                onInput=${function(V){m(V.target.value)}} />
            </label>
            <p class="vz-form-hint">${l("vzev.form.entry_ts.hint")}</p>

            ${R?c`<p class="vz-form-err" role="alert">${R}</p>`:null}

            <div class="vz-form-actions">
              <${Y} onClick=${D} disabled=${T}>${l("vzev.form.save")}<//>
              <${Y} secondary onClick=${function(){Oe.navigate("/vzev")}}
                disabled=${T}>${l("vzev.form.cancel")}<//>
              ${w?c`
                <${Y} danger onClick=${W} disabled=${T}>${l("vzev.remove")}<//>`:null}
            </div>
          </div>
        <//>
      </div>`:c`<div>${fe}<${F}><p class="placeholder-text">${l("common.loading")}</p><//></div>`}var Wn="var(--c-production)",Fs="var(--c-vzev)";function ga(e){return!e||!e.expected?null:Math.round(e.complete/e.expected*100)}function Qt(e){var t=ga(e);return t!==null&&t<100}function Ls(e){e=e||{};var t=Number(e.vzev_import_chf_kwh);return isNaN(t)?null:t}function ui(e,t){return e+"-Q"+t}function bn(e,t){return Math.floor(new Date(e,t,1,0,0,0,0).getTime()/1e3)}function Rs(e){for(var t=new Date,n=t.getFullYear(),r=Math.floor(t.getMonth()/3)+1,i=[],a=0;a<7;a++){for(var o=r-a,s=n;o<1;)o+=4,s-=1;i.push({value:ui(s,o),label:ui(s,o)})}return i}function Ds(e){var t=/^(\d{4})-Q([1-4])$/.exec(String(e||""));return t?{year:parseInt(t[1],10),q:parseInt(t[2],10)}:null}function Ws(e){var t=Ds(e);if(!t)return[];var n=(t.q-1)*3;return[bn(t.year,n),bn(t.year,n+1),bn(t.year,n+2)]}function ci(e,t,n,r){var i=Ws(t),a=Array.isArray(e)?e:[];return a.map(function(o,s){var u;o==null?u=0:typeof o=="number"?u=o:u=n(o);var f=o&&typeof o=="object"&&typeof o.ts=="number"?o.ts:i[s]!==void 0?i[s]:(i[0]||0)+s*2592e3;return{t:f,y:u==null||isNaN(u)?0:u,color:r}})}function fi(e){return typeof e.wh=="number"?e.wh/1e3:typeof e.kwh=="number"?e.kwh:typeof e.y=="number"?e.y:0}function Us(e){var t=e.quality;if(!t||!t.expected)return null;var n=ga(t),r=e.byId||{},i=[],a=t.perMember||{};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var s=(a[o].expected||0)-(a[o].have||0);if(s>0){var u=r[o]&&r[o].name||o;i.push(l("billing.quality.member_missing",{name:u,n:s}))}}return c`
      <${F} class="billing-quality">
        <div class="billing-quality-head">
          <h2 class="card-title">${l("billing.quality.title")}
            <${pe} text=${l("tooltip.provisorisch")} /></h2>
          ${Qt(t)?c`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        </div>
        <p class="billing-quality-line">${l("billing.quality.complete",{pct:n})}</p>
        ${t.provisional>0?c`<p class="billing-quality-line">${l("billing.quality.provisional",{n:t.provisional})}</p>`:null}
        ${t.missing>0?c`<p class="billing-quality-line">${l("billing.quality.missing",{n:t.missing})}</p>`:null}
        ${i.length===0&&!Qt(t)?c`<p class="billing-quality-line billing-quality-ok">${l("billing.quality.ok")}</p>`:null}
        ${i.map(function(f,d){return c`<p key=${d} class="billing-quality-line">${f}</p>`})}
      <//>`}function Bs(e){var t=e.member,n=e.tariffs||{},r=e.period,i=Ls(n),a=typeof t.wh=="number"?t.wh/1e3:null,o=t.entry_ts&&r&&t.entry_ts>r[0]?t.entry_ts:r?r[0]:null,s=e.capReference,u=s!=null&&i!==null&&i>s?l("billing.detail.method_effektiv"):l("billing.detail.method_pauschal");function f(d,h){return c`<div class="stmt-line"><span class="stmt-key">${d}</span><span class="stmt-val">${h}</span></div>`}return c`
      <div class="stmt">
        ${f(l("billing.detail.period"),r?x.time(o,"1d")+" – "+x.time(r[1]-1,"1d"):"–")}
        ${f(l("billing.detail.member"),(t.name||t.id)+(t.location?", "+t.location:""))}
        ${t.metering_point?f(c`${l("billing.detail.meteringpoint")} <${pe} text=${l("tooltip.zaehlpunkt")} />`,t.metering_point):null}
        ${f(l("billing.detail.energy"),a===null?"–":x.num(a,2)+" kWh")}
        ${typeof t.ht_wh=="number"?f(l("billing.detail.energy_ht"),x.num(t.ht_wh/1e3,2)+" kWh"):null}
        ${typeof t.nt_wh=="number"?f(l("billing.detail.energy_nt"),x.num(t.nt_wh/1e3,2)+" kWh"):null}
        ${f(l("billing.detail.tariff"),i===null?"–":x.num(i,2)+" CHF/kWh")}
        ${f(l("billing.detail.amount"),typeof t.chf=="number"?x.chf(t.chf):"–")}
        <p class="stmt-residual">${l("billing.detail.residual")}</p>
        ${f(c`${l("billing.detail.key")} <${pe} text=${l("tooltip.verteilschluessel")} />`,l("billing.detail.key_value"))}
        ${f(l("billing.detail.method"),u)}
      </div>`}function vi(e){var t=e.wh!==null&&e.wh!==void 0?e.wh/1e3:null,n=C(!1),r=n[0],i=n[1],a=C(!1),o=a[0],s=a[1],u=!!e.member;return c`
      <${F} group="vzev" title=${e.title} subtitle=${e.subtitle}>
        ${e.provisional?c`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        <div class="billing-metrics">
          <div class="billing-metric">
            <span class="billing-metric-label">${e.kwhLabel}</span>
            <span class="billing-metric-value" style=${"color:"+Wn}>
              ${t===null?"–":x.num(t,2)+" kWh"}
            </span>
          </div>
          <div class="billing-metric">
            <span class="billing-metric-label">${e.chfLabel}</span>
            <span class="billing-metric-value" style=${"color:"+Fs}>
              ${e.chf===null||e.chf===void 0?"–":x.chf(e.chf)}
            </span>
          </div>
        </div>
        ${e.note?c`<p class="billing-card-note">${e.note}</p>`:null}
        <${Yn} height=${180} yUnit="kWh" xUnit=${l("billing.axis.month")}
          xTickFormat=${function(f){return x.time(f,"1mo")}}
          yFormat=${function(f){return x.num(f,1)+" kWh"}}
          points=${e.points} />
        ${u?c`
          <div class="billing-card-actions no-print">
            <${Y} small secondary onClick=${function(){i(!r)}}>
              ${l(r?"billing.member.collapse":"billing.member.expand")}
            <//>
            ${e.raw?c`
              <${Y} small secondary onClick=${function(){s(!o)}}>
                ${l("explain.open")}
              <//>`:null}
          </div>`:null}
        ${u&&r?c`
          <${Bs} member=${e.member} tariffs=${e.tariffs}
            period=${e.period} capReference=${e.capReference} />`:null}
        ${u&&o&&e.raw?c`
          <${ha} raw=${e.raw} memberId=${e.member.id}
            range=${e.period} onClose=${function(){s(!1)}} />`:null}
      <//>`}function js(e){var t=e.data,n=e.quarter,r=t.total||{},i=ci(r.months,n,fi,Wn),a=Array.isArray(t.members)?t.members:[];return c`
      <div class="billing-grid">
        <${vi}
          title=${l("billing.total.title")}
          subtitle=${n}
          kwhLabel=${l("billing.producer.energy")}
          chfLabel=${l("billing.producer.profit")}
          wh=${typeof r.exp_wh=="number"?r.exp_wh:null}
          chf=${typeof r.revenue_chf=="number"?r.revenue_chf:null}
          points=${i} />
        ${a.map(function(o){return c`
            <${vi} key=${o.id}
              title=${o.name||o.id}
              kwhLabel=${l("billing.producer.energy")}
              chfLabel=${l("billing.producer.profit")}
              wh=${typeof o.wh=="number"?o.wh:null}
              chf=${typeof o.chf=="number"?o.chf:null}
              points=${ci(o.months,n,fi,Wn)}
              member=${o} tariffs=${t.tariffs} period=${t.range}
              raw=${t.raw} capReference=${e.capReference}
              provisional=${e.provisional} />`})}
      </div>`}function Hs(e){var t=e.info||{},n=t.representative_name,r=t.connection_point_id;return!n&&!r?null:c`
      <${F} class="billing-header-card">
        ${n?c`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.rep")}</span> ${n}${t.representative_contact?" · "+t.representative_contact:""}</p>`:null}
        ${r?c`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.connpoint")}</span> ${r}</p>`:null}
      <//>`}function Ks(e,t){var n=Array.isArray(e.members)?e.members:e.self?[e.self]:[],r=Qt(e.quality),i=[l("billing.detail.member"),l("billing.detail.meteringpoint"),l("billing.detail.energy")+" [kWh]",l("billing.detail.energy_ht")+" [kWh]",l("billing.detail.energy_nt")+" [kWh]",l("billing.detail.amount")+" [CHF]",l("billing.provisional.badge")],a=n.map(function(d){return[d.name||d.id,d.metering_point||"",typeof d.wh=="number"?(d.wh/1e3).toFixed(2):"",typeof d.ht_wh=="number"?(d.ht_wh/1e3).toFixed(2):"",typeof d.nt_wh=="number"?(d.nt_wh/1e3).toFixed(2):"",typeof d.chf=="number"?d.chf.toFixed(2):"",r?"1":"0"]}),o=rr(i,a),s=new Blob([o],{type:"text/csv;charset=utf-8"}),u=URL.createObjectURL(s),f=document.createElement("a");f.href=u,f.download="gplug-abrechnung-"+t+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(u)},0)}function Vs(){var e=Rs(),t=C(e.length?e[0].value:""),n=t[0],r=t[1],i=C(null),a=i[0],o=i[1],s=C("loading"),u=s[0],f=s[1];Z(function(){var _=!1;return f("loading"),kt().then(function(k){var z=qi(n);return!k.available||!k.siteId||!z?null:or(k.siteId,z[0],z[1]-1).then(function(w){var S=w&&w.data?Object.keys(w.data):[];return w&&w.producer_id&&S.length?w:null},function(){return null})}).then(function(k){if(!_)return L.getVzevBilling(n,k).then(function(z){if(!_){if(!z||typeof z!="object"){o(null),f("empty");return}o(z),f("ready")}}).catch(function(){_||(o(null),f("error"))})}),function(){_=!0}},[n]);function d(_){if(!_)return!1;var k=String(_.role||_.type||"").toUpperCase();if(k==="PRODUCER"||k==="P")return!0;if(k==="CONSUMER"||k==="C")return!1;var z=_.self||{};return _.self||typeof z.cost_grid_chf=="number"||typeof _.cost_grid_chf=="number"||typeof _.import_wh=="number"?!1:!!(_.total||Array.isArray(_.members)&&_.members.length)}var h=a&&a.tariffs?Yi(a.tariffs):null,v=a?Qt(a.quality):!1,p={};a&&Array.isArray(a.members)&&a.members.forEach(function(_){_&&_.id!==void 0&&(p[_.id]=_)});var g=!!a&&d(a),$;u==="loading"?$=c`<${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:u==="error"?$=c`<${F}><p class="placeholder-text">${l("billing.error")}</p><//>`:u==="empty"||!a?$=c`<${F}><p class="placeholder-text">${l("common.nodata")}</p><//>`:g?$=c`<${js} data=${a} quarter=${n}
        capReference=${h} provisional=${v} />`:$=c`<${F}><p class="placeholder-text">${l("billing.producer_only")}</p><//>`;var m=u==="ready"&&g,b=c`
      <div class="billing-actions">
        <${nn} label=${l("billing.quarter")} value=${n}
          options=${e}
          onChange=${function(_){r(_)}} />
        ${m?c`
          <${Y} secondary small onClick=${function(){Ks(a,n)}}>${l("billing.export")}<//>
          <${Y} secondary small onClick=${function(){window.print()}}>${l("billing.print")}<//>`:null}
      </div>`;return c`
      <div class="billing-page">
        <${Le} title=${l("page.billing")} subtitle=${l("billing.subtitle")}
          actions=${b} />
        ${m?c`<${Hs} info=${a.info} />`:null}
        ${$}
        ${m?c`<${Us} quality=${a.quality} byId=${p} />`:null}
        <${F} class="billing-note-card">
          <p class="billing-note">${l("billing.note")}</p>
        <//>
      </div>`}var qs=["site","loads","productions","grid","tariffs","vzev","daten","gplug","pro"],Ys={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",tarife:"tariffs",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},Gs={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",tariffs:"tarife",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},Zs={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",tariffs:"settings.tab.tariffs",vzev:"settings.tab.vzev",daten:"settings.tab.data",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},Xs={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},Qs=["simulator","shelly","homeassistant","gplug"],ma=["simulator","homeassistant","gplug"],Un=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],Jt=["PHOTOVOLTAIC","BATTERY"];function Js(e){return e==null||String(e).trim()===""?!1:Jt.indexOf(String(e).toUpperCase())<0}var $a=["W","kW"],_a=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh"],eu={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,vzev_export_chf_kwh:.22,vzev_import_chf_kwh:.22,co2_g_kwh:128};function re(e){return e==null||String(e).trim()===""}function ze(e){return!re(e)&&!isNaN(Number(e))}function Xe(e){return re(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function ya(e,t){var n={};re(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!ze(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!ze(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};Xe(i.on)||(n["url.on"]="settings.err.url"),Xe(i.off)||(n["url.off"]="settings.err.url"),Xe(i.status)||(n["url.status"]="settings.err.url")}else Xe(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&re(e.token)&&(n.token="settings.err.token");return n}function pr(e){return!re(e)&&/\s/.test(String(e))}function di(e){if(!Je(e)||!("sensor"in e)||!re(e.sensor))return e;var t=Object.assign({},e);return delete t.sensor,t}function ba(e,t){var n={};return re(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?(re(e.field)&&(n.field="settings.err.field"),pr(e.sensor)&&(n.sensor="settings.err.sensor")):(Xe(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&re(e.token)&&(n.token="settings.err.token")),n}function wa(e){var t={};return e.integration==="gplug"?(re(e.field)&&(t.field="settings.err.field"),pr(e.sensor)&&(t.sensor="settings.err.sensor")):(Xe(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&re(e.token)&&(t.token="settings.err.token")),t}function tu(e){var t={};return re(e.id)&&(t.id="settings.err.id_required"),re(e.name)&&(t.name="settings.err.name_required"),t}function nu(e){var t={};_a.forEach(function(f){(!ze(e[f])||Number(e[f])<0)&&(t[f]="settings.err.rate")});var n=e.co2_g_kwh;(!ze(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!re(r),o=!re(i);if((a||o)&&(!a||!o?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!ze(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!ze(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var s=0;s<e.ht_windows.length;s++){var u=e.ht_windows[s]||{};(!ze(u.from)||!ze(u.to)||Number(u.from)<0||Number(u.to)>24||Number(u.from)>Number(u.to))&&(t["win."+s]="settings.err.win_hours")}return t}function yt(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function vt(e){return typeof e=="number"&&!isNaN(e)}function Je(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function pi(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var de={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours",sensor:"settings.err.sensor"},ru=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh","co2_g_kwh"];function iu(e,t,n){if(typeof e=="string"||e===void 0||e===null){pi(e)||n.push({path:t,key:de.url});return}if(Je(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!pi(e[r]))&&n.push({path:t+"."+r,key:de.url});return}n.push({path:t,key:de.url})}function wn(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:de.array}),null;for(var i=!0,a=0;a<r.length;a++)Je(r[a])||(n.push({path:t+"["+a+"]",key:de.array}),i=!1);return i?r:null}function au(e){var t=[];if(!Je(e))return[{path:"",key:de.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:de.id});var n=wn(e,"loads",t),r=wn(e,"productions",t),i=wn(e,"grid",t);if([["productions",r],["grid",i]].forEach(function($){($[1]||[]).forEach(function(m,b){var _=m.sensor;_!=null&&(typeof _!="string"||pr(_))&&t.push({path:$[0]+"["+b+"].sensor",key:de.sensor})})}),n)for(var a={},o=0;o<n.length;o++){var s=n[o],u="loads["+o+"]",f=s.id;typeof f!="string"||f.length===0?t.push({path:u+".id",key:de.id}):a[f]?t.push({path:u+".id",key:de.dup}):a[f]=!0,s.currentPower!==void 0&&s.currentPower!==null&&!vt(s.currentPower)&&t.push({path:u+".currentPower",key:de.power}),s.priority!==void 0&&s.priority!==null&&(!vt(s.priority)||s.priority<1)&&t.push({path:u+".priority",key:de.priority}),s.url!==void 0&&s.url!==null&&iu(s.url,u+".url",t)}var d=e.tariffs;if(d!=null){if(!Je(d))return t.push({path:"tariffs",key:de.object}),t;ru.forEach(function($){var m=d[$];m!=null&&(!vt(m)||m<0)&&t.push({path:"tariffs."+$,key:de.rate})});var h=d.ht_windows;if(h!=null)if(!Array.isArray(h))t.push({path:"tariffs.ht_windows",key:de.array});else for(var v=0;v<h.length;v++){var p=h[v],g="tariffs.ht_windows["+v+"]";(!Je(p)||!vt(p.from)||!vt(p.to)||p.from<0||p.to>24||p.from>p.to)&&t.push({path:g,key:de.win})}}return t}function j(e){var t=e.error;return c`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?c`<span class="field-error">${l(t)}</span>`:null}
      </label>`}function je(e){return c`
      <label class="field field-block">
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return c`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function hr(e){return c`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${l("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function nt(e){return e.map(function(t){return{value:t,label:t}})}function ou(e){var t=e.cfg,n=tu(t);function r(i){return function(a){e.patch(i,a)}}return c`
      <${F} group="grid">
        <p class="settings-scope">${l("settings.scope_note")}</p>
        <div class="settings-form">
          <${j} label=${l("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${j} label=${l("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${j} label=${l("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${j} label=${l("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${xt} disabled=${yt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function lu(e){var t=e.selected>=0;return c`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${Y} small onClick=${e.onAdd}>${l("settings.add")}<//>
          </div>
          ${e.items.length===0?c`<p class="md-empty">${l("settings.empty")}</p>`:e.items.map(function(n,r){return c`
                  <button key=${r} type="button"
                    class=${"md-row"+(r===e.selected?" md-row-active":"")}
                    onClick=${function(){e.onSelect(r)}}>${e.labelFn(n,r)}</button>`})}
        </div>
        <div class="md-detail">
          ${e.selected>=0?c`
                <button type="button" class="md-back" onClick=${function(){e.onSelect(-1)}}>← ${l("settings.back")}</button>
                ${e.detail}`:c`<p class="md-empty md-detail-empty">${l("settings.select_hint")}</p>`}
        </div>
      </div>`}function xt(e){return c`
      <div class="settings-actions">
        <${Y} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?l("settings.saving"):l("settings.save")}
        <//>
      </div>`}function su(e){var t=e.item,n=e.otherIds,r=ya(t,n);function i(u){return function(f){e.patch(u,f)}}function a(u){return function(f){var d=Object.assign({},t.url||{});d[u]=f,e.patch("url",d)}}var o=t.integration||"simulator",s=o==="shelly"?t.url||{}:{};return c`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${hr} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${j} label=${l("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${j} label=${l("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${j} label=${l("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${je} label=${l("settings.load.type")} value=${t.loadType||Un[0]}
            options=${nt(Un)} onChange=${i("loadType")} />
          <${j} label=${l("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${je} label=${l("settings.integration")} value=${o}
            options=${nt(Qs)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${o==="shelly"?c`
            <${j} label=${l("settings.url.on")} value=${s.on} error=${r["url.on"]} onInput=${a("on")} />
            <${j} label=${l("settings.url.off")} value=${s.off} error=${r["url.off"]} onInput=${a("off")} />
            <${j} label=${l("settings.url.status")} value=${s.status} error=${r["url.status"]} onInput=${a("status")} />`:c`
            <${j} label=${l("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${o==="homeassistant"?c`
              <${j} label=${l("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function uu(e){var t=e.item,n=ba(t,e.otherIds);function r(a){return function(o){e.patch(a,o)}}var i=t.integration||"simulator";return c`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${hr} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${j} label=${l("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${j} label=${l("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${je} label=${l("settings.prod.type")} value=${t.productionType||Jt[0]}
            options=${Jt.map(function(a){return{value:a,label:l(Xs[a])}})}
            onChange=${r("productionType")} />
          ${Js(t.productionType)?c`
            <div class="settings-warn" role="status">${l("settings.prodtype.unknown_warn")}</div>`:null}
          <${je} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${nt($a)} onChange=${r("dimension")} />
          <${je} label=${l("settings.integration")} value=${i}
            options=${nt(ma)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?c`
            <${j} label=${l("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${j} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:c`
            <${j} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?c`
              <${j} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function cu(e){var t=e.item,n=wa(t);function r(o){return function(s){e.patch(o,s)}}var i=t.integration||"simulator",a=t.id==="to"?l("settings.grid.to"):l("settings.grid.from");return c`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${je} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${nt($a)} onChange=${r("dimension")} />
          <${je} label=${l("settings.integration")} value=${i}
            options=${nt(ma)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?c`
            <${j} label=${l("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${j} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:c`
            <${j} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?c`
              <${j} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function kn(e){var t=C(-1),n=t[0],r=t[1],i=e.items;function a(d,h){var v=i.slice(),p=Object.assign({},v[n]);p[d]=h,v[n]=p,e.onChange(v)}function o(){var d=i.concat([e.blank()]);e.onChange(d),r(d.length-1)}function s(){var d=i[n],h=(e.persistedIds||[]).indexOf(String(d&&d.id))!==-1;if(!(h&&!window.confirm(l(e.confirmKey)))){var v=i.slice();v.splice(n,1),r(-1),e.onDelete&&e.onDelete(d),e.onChange(v)}}var u=i.some(function(d,h){var v=i.filter(function(p,g){return g!==h}).map(function(p){return String(p.id)});return yt(e.validate(d,v))}),f=n>=0&&i[n]?c`<${e.Detail} item=${i[n]} patch=${a} onDelete=${s}
          otherIds=${i.filter(function(d,h){return h!==n}).map(function(d){return String(d.id)})} />`:null;return c`
      <${F} group=${e.group}>
        <${lu}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:o}
          detail=${f} />
        <${xt} disabled=${u} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function fu(e){var t=e.tariffs,n=nu(t);function r(g){return function($){e.patch(g,$)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(g,$,m){var b=i.map(function(_,k){if(k!==g)return _;var z=Object.assign({},_);return z[$]=m,z});e.setWindows(b)}function o(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function s(g){e.setWindows(i.filter(function($,m){return m!==g}))}var u=ze(t.grid_import_ht_chf_kwh)&&ze(t.grid_import_nt_chf_kwh),f=u&&i.length===0,d=vu(t),h=Yi(d),v=Number(t.vzev_import_chf_kwh),p=h!==null&&!isNaN(v)&&v>h;return c`
      <${F} group="vzev">
        <div class="settings-subhead">${l("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${j} label=${l("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${l("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${j} label=${l("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${j} label=${l("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${l("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(g,$){return c`
            <div key=${$} class="settings-form ht-window-row">
              <${j} label=${l("settings.tariff.win_days")} value=${g.days}
                placeholder=${l("settings.tariff.win_days.ph")} onInput=${function(m){a($,"days",m)}} />
              <${j} label=${l("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${g.from} error=${n["win."+$]} onInput=${function(m){a($,"from",hi(m))}} />
              <${j} label=${l("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${g.to} onInput=${function(m){a($,"to",hi(m))}} />
              <${hr} onClick=${function(){s($)}} />
            </div>`})}
        <${Y} small secondary onClick=${o}>${l("settings.tariff.win_add")}<//>
        ${f?c`<p class="settings-warn">${l("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${l("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${j} label=${l("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${j} label=${l("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${l("settings.tariff.cap_group")}</div>
        <div class="settings-form">
          <${j} label=${l("settings.tariff.vzev_export_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_export_chf_kwh} error=${n.vzev_export_chf_kwh} onInput=${r("vzev_export_chf_kwh")} />
          <${j} label=${l("settings.tariff.vzev_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_import_chf_kwh} error=${n.vzev_import_chf_kwh} onInput=${r("vzev_import_chf_kwh")} />
        </div>
        ${h!==null?c`
          <p class="settings-scope">
            ${l("settings.tariff.cap_ref",{ref:h.toFixed(2)})}
            <${pe} text=${l("tooltip.cap")} />
          </p>
          ${p?c`<p class="settings-warn">${l("settings.tariff.cap_warn")}</p>`:c`<p class="settings-ok">${l("settings.tariff.cap_ok")}</p>`}`:null}
        <div class="settings-subhead">${l("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${j} label=${l("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${xt} disabled=${yt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function hi(e){return re(e)?void 0:Number(e)}function vu(e){var t={};return["grid_import_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(n){re(e[n])||(t[n]=Number(e[n]))}),Array.isArray(e.ht_windows)&&(t.ht_windows=e.ht_windows),t}function du(){var e=C(null),t=e[0],n=e[1],r=C({producers:0,members:0}),i=r[0],a=r[1],o=C(!1),s=o[0],u=o[1];Z(function(){var h=!1;return Promise.all([L.getVzevInfo().catch(function(){return{}}),L.get("/api/vzev/members",{optional:!0,vzevBypass:!0}).catch(function(){return{members:[]}})]).then(function(v){if(!h){var p=v[0]||{};n({representative_name:p.representative_name||"",representative_contact:p.representative_contact||"",connection_point_id:p.connection_point_id||"",enabled:!!p.enabled});var g=v[1]&&v[1].members||[],$=0;g.forEach(function(m){(m.type==="PRODUCER"||m.typ==="P")&&$++}),a({producers:$,members:g.length})}}),function(){h=!0}},[]);function f(h){return function(v){n(function(p){var g=Object.assign({},p);return g[h]=v,g})}}function d(){s||!t||(u(!0),L.setVzevInfo(t).then(function(){X(l("settings.vzev.saved"),{type:"info"})}).catch(function(){X(l("settings.save_error"),{type:"error"})}).then(function(){u(!1)}))}return t?c`
      <${F} group="vzev">
        <div class="settings-form settings-toggle-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.enabled}
              onChange=${function(h){f("enabled")(h.target.checked)}} />
            <span>${l("settings.vzev.enabled")}</span>
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.enabled_hint")}</p>
        <p class="settings-scope">${l("settings.vzev.subtitle")}</p>
        <div class="settings-form">
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.representative_name")} <${pe} text=${l("tooltip.vertreter")} /></span>
            <input class="textfield" type="text" value=${t.representative_name}
              onInput=${function(h){f("representative_name")(h.target.value)}} />
          </label>
          <${j} label=${l("settings.vzev.representative_contact")}
            value=${t.representative_contact} onInput=${f("representative_contact")} />
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.connection_point_id")} <${pe} text=${l("tooltip.connpoint")} /></span>
            <input class="textfield" type="text" value=${t.connection_point_id}
              onInput=${function(h){f("connection_point_id")(h.target.value)}} />
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.counts",{producers:i.producers,members:i.members})}</p>
        <${xt} disabled=${!1} onSave=${d} saving=${s} />
      <//>`:c`<${F} group="vzev"><p class="placeholder-text">${l("settings.loading")}</p><//>`}function gi(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!re(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function pu(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return c`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${Y} small secondary onClick=${function(){e.onUse(1)}}>${l("settings.gplug.scan_use1")}<//>
          <${Y} small secondary onClick=${function(){e.onUse(2)}}>${l("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function hu(){var e=C(null),t=e[0],n=e[1],r=C(!1),i=r[0],a=r[1],o=C(!1),s=o[0],u=o[1],f=C(!1),d=f[0],h=f[1],v=C({scanning:!1,networks:null,error:!1}),p=v[0],g=v[1];function $(){a(!1),n(null),L.getWifiConfig().then(function(S){n({ssid1:S.ssid1,password1:"",ssid2:S.ssid2,password2:""})}).catch(function(){a(!0)})}Z(function(){$()},[]);function m(S){return function(B){n(function(I){var A=Object.assign({},I);return A[S]=B,A})}}function b(){d||!window.confirm(l("settings.gplug.restart_confirm"))||(h(!0),L.restartDevice().then(function(){X(l("settings.gplug.restart_success"),{type:"info"})}).catch(function(){X(l("settings.gplug.restart_error"),{type:"error"})}).then(function(){h(!1)}))}function _(){s||!t||yt(gi(t))||(u(!0),L.setWifiConfig(t).then(function(){X(l("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(S){X(S&&S.message||l("settings.save_error"),{type:"error"})}).then(function(){u(!1)}))}function k(){g({scanning:!0,networks:null,error:!1}),L.wifiScanStart().catch(function(){});var S=0;function B(){S+=1,L.wifiScanResult().then(function(I){var A=I&&(I.WiFiScan!==void 0?I.WiFiScan:I.WifiScan);if(A&&typeof A=="object"){var M=Object.keys(A).map(function(T){return A[T]});M.sort(function(T,N){return(Number(N.RSSI)||0)-(Number(T.RSSI)||0)}),g({scanning:!1,networks:M,error:!1});return}if(S>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(B,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(B,1e3)}function z(S,B){n(function(I){var A=Object.assign({},I);return A["ssid"+S]=B,A})}if(i)return c`
        <${F} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Y} secondary small onClick=${$}>${l("settings.retry")}<//>
        <//>`;if(!t)return c`<${F} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var w=gi(t);return c`
      <div>
        <${F} group="grid" title=${l("settings.gplug.restart_title")}>
          <p class="settings-scope">${l("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${Y} danger disabled=${d} onClick=${b}>
              ${l(d?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${l("settings.gplug.wifi_title")}>
          <p class="settings-scope">${l("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${l("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${j} label=${l("settings.gplug.ssid1")} value=${t.ssid1} error=${w.ssid1} onInput=${m("ssid1")} />
            <${j} label=${l("settings.gplug.password1")} type="password" value=${t.password1} error=${w.password1}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${m("password1")} />
          </div>
          <div class="settings-subhead">${l("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${j} label=${l("settings.gplug.ssid2")} value=${t.ssid2} error=${w.ssid2} onInput=${m("ssid2")} />
            <${j} label=${l("settings.gplug.password2")} type="password" value=${t.password2} error=${w.password2}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${m("password2")} />
          </div>

          <div class="settings-subhead">${l("settings.gplug.scan_button")}</div>
          <${Y} secondary small disabled=${p.scanning} onClick=${k}>
            ${p.scanning?l("settings.gplug.scanning"):l("settings.gplug.scan_button")}
          <//>
          ${p.error?c`<p class="settings-warn">${l("settings.gplug.scan_error")}</p>`:null}
          ${p.networks&&p.networks.length===0?c`<p class="placeholder-text">${l("settings.gplug.scan_empty")}</p>`:null}
          ${p.networks&&p.networks.length>0?c`
            <div class="wifi-scan-list">
              ${p.networks.map(function(S,B){return c`<${pu} key=${B} net=${S} onUse=${function(I){z(I,S.SSId)}} />`})}
            </div>`:null}

          <${xt} disabled=${yt(w)} onSave=${_} saving=${s} />
        <//>
      </div>`}function gu(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function mi(e){return e==null||isNaN(e)?"–":e<1024?e+" B":e<1024*1024?Math.round(e/1024)+" KB":Math.round(e/(1024*1024)*10)/10+" MB"}function mu(){var e=C(null),t=e[0],n=e[1],r=C(Fn()),i=r[0],a=r[1],o=C(!1),s=o[0],u=o[1];function f(g){if(!g.available||!g.siteId){n(null);return}sr(g.siteId).then(n,function(){n(null)})}Z(function(){var g=aa(function($){a(Object.assign({},$)),f($)});return kt().then(function($){a(Object.assign({},$)),f($)}),g},[]);function d(){s||(u(!0),rl(L).then(function(g){f(g),X(l("settings.data.synced"),{type:"info"})},function(){X(l("settings.data.sync_error"),{type:"error"})}).then(function(){u(!1)}))}function h(){i.siteId&&Jo(i.siteId).then(function(g){gu("gplug-archiv-"+i.siteId+".csv",g)},function(){X(l("settings.data.export_error"),{type:"error"})})}function v(g){var $=g.target&&g.target.files&&g.target.files[0];$&&(g.target.value="",$.text().then(function(m){return el(m,i.siteId)}).then(function(m){n(m),X(l("settings.data.import_ok",{count:m.count}),{type:"info"})},function(m){X(m&&m.message||l("settings.data.import_error"),{type:"error"})}))}if(i.available===!1)return c`
        <${F} group="grid" title=${l("settings.data.title")}>
          <p class="settings-warn">${l("settings.data.unavailable")}</p>
          <p class="settings-scope">${l("settings.data.multi_client")}</p>
        <//>`;if(!t)return c`<${F} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var p=t.estimate;return c`
      <div>
        <${F} group="grid" title=${l("settings.data.title")}>
          <p class="settings-scope">${l("settings.data.desc")}</p>
          <dl class="data-facts">
            <dt>${l("settings.data.site")}</dt><dd>${t.siteId}</dd>
            <dt>${l("settings.data.range")}</dt>
            <dd>${t.firstE15Ts===null?l("common.nodata"):x.time(t.firstE15Ts,"1d")+" – "+x.time(t.lastE15Ts,"1d")}</dd>
            <dt>${l("settings.data.records")}</dt><dd>${t.count} (${t.days} ${l("settings.data.days")})</dd>
            <dt>${l("settings.data.last_sync")}</dt>
            <dd>${t.syncedAt?x.time(t.syncedAt,"15m"):"–"}</dd>
            <dt>${l("settings.data.storage")}</dt>
            <dd>${p?mi(p.usage)+" / "+mi(p.quota):"–"}</dd>
          </dl>

          <div class="settings-subhead">${l("settings.data.gaps")}</div>
          ${t.gaps&&t.gaps.length?c`
            <ul class="data-gaps">
              ${t.gaps.map(function(g,$){return c`<li key=${$}>${x.time(g[0],"15m")} – ${x.time(g[1],"15m")}</li>`})}
            </ul>`:c`<p class="settings-scope">${l("settings.data.no_gaps")}</p>`}

          <div class="settings-actions">
            <${Y} secondary small disabled=${s} onClick=${d}>
              ${l(s?"settings.data.syncing":"settings.data.sync")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${l("settings.data.transfer_title")}>
          <p class="settings-scope">${l("settings.data.multi_client")}</p>
          <div class="settings-actions">
            <${Y} secondary small onClick=${h}>${l("settings.data.export")}<//>
            <label class="btn btn-secondary btn-small data-import-label">
              ${l("settings.data.import")}
              <input type="file" accept=".csv,text/csv" class="data-import-input"
                onChange=${v} />
            </label>
          </div>
        <//>
      </div>`}function $u(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function _u(e){var t=C(null),n=t[0],r=t[1],i=C(!1),a=i[0],o=i[1],s=C(!1),u=s[0],f=s[1];function d(){o(!1),r(null),L.getConfigRaw().then(function(g){r($u(g))}).catch(function(){o(!0)})}Z(function(){d()},[]);var h=null,v=[];if(n!==null)try{v=au(JSON.parse(n))}catch(g){h=g.message}function p(){if(!(u||h)){var g;try{g=JSON.parse(n)}catch{return}f(!0),L.postConfig(g).then(function(){X(l("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),d()}).catch(function($){X($&&$.message||l("settings.save_error"),{type:"error"})}).then(function(){f(!1)})}}return a?c`
        <${F} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Y} secondary small onClick=${d}>${l("settings.retry")}<//>
        <//>`:n===null?c`<${F} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`:c`
      <${F} group="grid">
        <p class="settings-scope">${l("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${h?c`<p class="settings-warn">${l("settings.pro.invalid_json",{msg:h})}</p>`:null}
        ${v.length?c`
          <div class="settings-warn">
            <strong>${l("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${v.map(function(g,$){return c`<li key=${$}><code>${g.path||"/"}</code> — ${l(g.key)}</li>`})}
            </ul>
            <span>${l("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${Y} secondary disabled=${u} onClick=${d}>${l("settings.pro.reload")}<//>
          <${Y} disabled=${u||!!h} onClick=${p}>
            ${l(u?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function yu(){return{id:"",friendlyName:"",loadType:Un[0],currentPower:"",priority:1,integration:"simulator",url:""}}function bu(){return{id:"",friendlyName:"",productionType:Jt[0],dimension:"W",integration:"simulator",url:""}}function wu(e){var t=e.params&&e.params.tab||"site",n=Ys[t]||"site",r=C(null),i=r[0],a=r[1],o=C(null),s=o[0],u=o[1],f=C(!1),d=f[0],h=f[1],v=C(!1),p=v[0],g=v[1],$=C({loads:[],productions:[],grid:[]}),m=$[0],b=$[1];function _(y){return(Array.isArray(y)?y:[]).map(function(E){return String(E&&E.id)}).filter(function(E){return!re(E)})}function k(){u(null),L.getConfig().then(function(y){a(z(y)),g(!re(y&&y.id)),b({loads:_(y&&y.loads),productions:_(y&&y.productions),grid:_(y&&y.grid)})}).catch(function(){u(!0),a(null)})}Z(function(){k()},[]);function z(y){y=y||{};var E=Object.assign({},y);return E.loads=Array.isArray(y.loads)?y.loads:[],E.productions=Array.isArray(y.productions)?y.productions:[],E.grid=Array.isArray(y.grid)?y.grid:[],E.tariffs=Object.assign({},eu,y.tariffs||{}),E}function w(y,E){a(function(D){var W=Object.assign({},D);return W[y]=E,W})}function S(y,E){a(function(D){var W=Object.assign({},D);return W.tariffs=Object.assign({},D.tariffs),W.tariffs[y]=E,W})}function B(y){a(function(E){var D=Object.assign({},E);return D.tariffs=Object.assign({},E.tariffs),D.tariffs.ht_windows=y,D})}function I(y,E){a(function(D){var W=Object.assign({},D);return W[y]=E,W})}function A(){d||(h(!0),L.postConfig(M(i)).then(function(){X(l("settings.saved"),{type:"info"}),g(!0),k()}).catch(function(y){X(y&&y.message||l("settings.save_error"),{type:"error"})}).then(function(){h(!1)}))}function M(y){var E=Object.assign({},y);return E.loads=y.loads.map(function(D){var W=Object.assign({},D);return W.currentPower!==""&&W.currentPower!==void 0&&(W.currentPower=Number(W.currentPower)),W.priority!==""&&W.priority!==void 0&&(W.priority=Number(W.priority)),W}),E.productions=y.productions.map(di),E.grid=y.grid.map(di),E.tariffs=Object.assign({},y.tariffs),_a.forEach(function(D){E.tariffs[D]=Number(y.tariffs[D])}),y.tariffs.co2_g_kwh!==void 0&&y.tariffs.co2_g_kwh!==""&&(E.tariffs.co2_g_kwh=Number(y.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(D){re(y.tariffs[D])?delete E.tariffs[D]:E.tariffs[D]=Number(y.tariffs[D])}),Array.isArray(y.tariffs.ht_windows)&&(y.tariffs.ht_windows.length===0?delete E.tariffs.ht_windows:E.tariffs.ht_windows=y.tariffs.ht_windows.map(function(D){return{days:D.days,from:Number(D.from),to:Number(D.to)}})),E}function T(y){!y||re(y.id)||L.setLoadState(y.id,"INACTIVE").catch(function(){})}function N(y){Oe.navigate("/einstellungen/"+Gs[y])}var H=qs.map(function(y){return c`
        <button key=${y} type="button"
          class=${"pill"+(y===n?" pill-active":"")}
          onClick=${function(){N(y)}}>${l(Zs[y])}</button>`}),R;return s?R=c`
        <${F}>
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Y} secondary small onClick=${k}>${l("settings.retry")}<//>
        <//>`:i?n==="site"?R=c`<${ou} cfg=${i} patch=${w} idLocked=${p}
        onSave=${A} saving=${d} />`:n==="tariffs"?R=c`<${fu} tariffs=${i.tariffs} patch=${S}
        setWindows=${B} onSave=${A} saving=${d} />`:n==="vzev"?R=c`<${du} />`:n==="daten"?R=c`<${mu} />`:n==="gplug"?R=c`<${hu} />`:n==="pro"?R=c`<${_u} onSaved=${k} />`:n==="loads"?R=c`<${kn} group="loads"
        items=${i.loads} onChange=${function(y){I("loads",y)}}
        listTitle=${l("settings.tab.loads")}
        labelFn=${function(y){return y.friendlyName||y.id||l("settings.new_entry")}}
        blank=${yu} confirmKey="settings.confirm_delete_load"
        persistedIds=${m.loads}
        onDelete=${T}
        validate=${ya} Detail=${su}
        onSave=${A} saving=${d} />`:n==="productions"?R=c`<${kn} group="production"
        items=${i.productions} onChange=${function(y){I("productions",y)}}
        listTitle=${l("settings.tab.productions")}
        labelFn=${function(y){return y.friendlyName||y.id||l("settings.new_entry")}}
        blank=${bu} confirmKey="settings.confirm_delete_production"
        persistedIds=${m.productions}
        validate=${function(y,E){return ba(y,E)}} Detail=${uu}
        onSave=${A} saving=${d} />`:n==="grid"&&(R=c`<${kn} group="grid" fixedList
        items=${i.grid} onChange=${function(y){I("grid",y)}}
        listTitle=${l("settings.tab.grid")}
        labelFn=${function(y){return y.id==="to"?l("settings.grid.to"):l("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${m.grid}
        validate=${function(y){return wa(y)}} Detail=${cu}
        onSave=${A} saving=${d} />`):R=c`<${F}><p class="placeholder-text">${l("settings.loading")}</p><//>`,c`
      <div>
        <${Le} title=${l("page.settings")} />
        <div class="pill-bar">${H}</div>
        ${R}
      </div>`}var ku=["https://gplug-ch.github.io/gplug-cdn/v1.1.4/lang.json"];function xu(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(s,u,f,d){for(var h=[],v=0;v<=90;v++){var p=e-900+v*10,g=v>=f&&v<=d?null:Math.max(0,s+u*Math.sin(v/9)+u*.4*Math.sin(v/2.3));h.push({t:p,y:g})}return h}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],o=0;o<23;o++)a.push({id:o,ts:x.time(e-o*900,"15m"),imp:x.num(Math.round(Math.random()*0+o*7)/100,2),chf:x.chf((o%3===0?-1:1)*o*.19,!0)});return c`
    <div>
      <${Le} title=${l("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${c`<${Y} onClick=${function(){X("Toast!",{type:"info"})}}>Toast<//>`} />

      <${F} group="grid" title="LineChart" tooltip=${l("tooltip.consumption")}
        value=${x.w(1396)} valueColor="var(--c-consumption)">
        <${wt} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${x.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${F} group="vzev" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${x.chf(12.4,!0)} valueColor="var(--c-vzev)">
        <${Yn} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(s){return x.chf(s,!0)}}
          points=${r.map(function(s){return{t:s.t,y:s.y,color:s.y<0?"var(--c-import)":"var(--c-vzev)"}})} />
      <//>

      <${F} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${Lt} state="active" />
          <${Lt} state="waiting" />
          <${Lt} state="inactive" />
        </div>
        <div class="demo-row">
          <${Y}>Speichern<//>
          <${Y} secondary>Abbrechen<//>
          <${Y} danger>Löschen<//>
          <${Y} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${Rt} label="Anzeige-Name" value="Familie Huber" />
          <${nn} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${F} group="production" title="DataTable">
        <${no} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(s){var u=s.chf.indexOf("−")===0;return c`<span class=${u?"val-neg":"val-pos"}>${s.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function zu(){return[{path:"/",component:Ol},{path:"/verlauf",component:Kl},{path:"/zaehler",component:ws},{path:"/vzev/mitglied/:id?",component:As},{path:"/vzev/abrechnung",component:Vs},{path:"/vzev",component:Ns},{path:"/einstellungen/:tab?",component:wu},{path:"/demo",component:xu}]}function $i(){var e=document.getElementById("app"),t=ku;ja.load(t).catch(function(){}).then(function(){La(c`<${al} routes=${zu()} />`,e),nl(L)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$i):$i();
