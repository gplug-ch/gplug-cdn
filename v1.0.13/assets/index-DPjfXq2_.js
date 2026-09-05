(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Gt,Q,ui,Ne,sr,ci,fi,an,Et,st,vi,On,_n,yn,Ut={},Bt=[],$a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Zt=Array.isArray;function Ce(e,t){for(var n in t)e[n]=t[n];return e}function An(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function di(e,t,n){var r,i,a,l={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Gt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Tt(e,l,r,i,null)}function Tt(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++ui,__i:-1,__u:0};return i==null&&Q.vnode!=null&&Q.vnode(a),a}function ht(e){return e.children}function Nt(e,t){this.props=e,this.context=t}function Ge(e,t){if(t==null)return e.__?Ge(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ge(e):null}function _a(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Ce({},t);a.__v=t.__v+1,Q.vnode&&Q.vnode(a),Fn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Ge(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,$i(r,a,i),t.__e=t.__=null,a.__e!=n&&pi(a)}}function pi(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),pi(e)}function ur(e){(!e.__d&&(e.__d=!0)&&Ne.push(e)&&!jt.__r++||sr!=Q.debounceRendering)&&((sr=Q.debounceRendering)||ci)(jt)}function jt(){try{for(var e,t=1;Ne.length;)Ne.length>t&&Ne.sort(fi),e=Ne.shift(),t=Ne.length,_a(e)}finally{Ne.length=jt.__r=0}}function hi(e,t,n,r,i,a,l,s,c,f,d){var p,v,h,g,$,m,b,y=r&&r.__k||Bt,k=t.length;for(c=ya(n,t,y,c,k),p=0;p<k;p++)(h=n.__k[p])!=null&&(v=h.__i!=-1&&y[h.__i]||Ut,h.__i=p,m=Fn(e,h,v,i,a,l,s,c,f,d),g=h.__e,h.ref&&v.ref!=h.ref&&(v.ref&&Ln(v.ref,null,h),d.push(h.ref,h.__c||g,h)),$==null&&g!=null&&($=g),(b=!!(4&h.__u))||v.__k===h.__k?(c=gi(h,c,e,b),b&&v.__e&&(v.__e=null)):typeof h.type=="function"&&m!==void 0?c=m:g&&(c=g.nextSibling),h.__u&=-7);return n.__e=$,c}function ya(e,t,n,r,i){var a,l,s,c,f,d=n.length,p=d,v=0;for(e.__k=new Array(i),a=0;a<i;a++)(l=t[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[a]=Tt(null,l,null,null,null):Zt(l)?l=e.__k[a]=Tt(ht,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[a]=Tt(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[a]=l,c=a+v,l.__=e,l.__b=e.__b+1,s=null,(f=l.__i=ba(l,n,c,p))!=-1&&(p--,(s=n[f])&&(s.__u|=2)),s==null||s.__v==null?(f==-1&&(i>d?v--:i<d&&v++),typeof l.type!="function"&&(l.__u|=4)):f!=c&&(f==c-1?v--:f==c+1?v++:(f>c?v--:v++,l.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==r&&(r=Ge(s)),yi(s,s));return r}function gi(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=gi(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ge(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ba(e,t,n,r){var i,a,l,s=e.key,c=e.type,f=t[n],d=f!=null&&(2&f.__u)==0;if(f===null&&s==null||d&&s==f.key&&c==f.type)return n;if(r>(d?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((f=t[l=i>=0?i--:a++])!=null&&(2&f.__u)==0&&s==f.key&&c==f.type)return l}return-1}function cr(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||$a.test(t)?n:n+"px"}function kt(e,t,n,r,i){var a,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||cr(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||cr(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(vi,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[st]=r[st]:(n[st]=On,e.addEventListener(t,a?yn:_n,a)):e.removeEventListener(t,a?yn:_n,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function fr(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Et]==null)t[Et]=On++;else if(t[Et]<n[st])return;return n(Q.event?Q.event(t):t)}}}function Fn(e,t,n,r,i,a,l,s,c,f){var d,p,v,h,g,$,m,b,y,k,z,w,S,U,T,A,M=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=Q.__b)&&d(t);e:if(typeof M=="function"){p=l.length;try{if(y=t.props,k=M.prototype&&M.prototype.render,z=(d=M.contextType)&&r[d.__c],w=d?z?z.props.value:d.__:r,n.__c?b=(v=t.__c=n.__c).__=v.__E:(k?t.__c=v=new M(y,w):(t.__c=v=new Nt(y,w),v.constructor=M,v.render=ka),z&&z.sub(v),v.state||(v.state={}),v.__n=r,h=v.__d=!0,v.__h=[],v._sb=[]),k&&v.__s==null&&(v.__s=v.state),k&&M.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=Ce({},v.__s)),Ce(v.__s,M.getDerivedStateFromProps(y,v.__s))),g=v.props,$=v.state,v.__v=t,h)k&&M.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),k&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(k&&M.getDerivedStateFromProps==null&&y!==g&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(y,w),t.__v==n.__v||!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(y,v.__s,w)===!1){t.__v!=n.__v&&(v.props=y,v.state=v.__s,v.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(N){N&&(N.__=t)}),Bt.push.apply(v.__h,v._sb),v._sb=[],v.__h.length&&l.push(v);break e}v.componentWillUpdate!=null&&v.componentWillUpdate(y,v.__s,w),k&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(g,$,m)})}if(v.context=w,v.props=y,v.__P=e,v.__e=!1,S=Q.__r,U=0,k)v.state=v.__s,v.__d=!1,S&&S(t),d=v.render(v.props,v.state,v.context),Bt.push.apply(v.__h,v._sb),v._sb=[];else do v.__d=!1,S&&S(t),d=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++U<25);v.state=v.__s,v.getChildContext!=null&&(r=Ce(Ce({},r),v.getChildContext())),k&&!h&&v.getSnapshotBeforeUpdate!=null&&(m=v.getSnapshotBeforeUpdate(g,$)),T=d!=null&&d.type===ht&&d.key==null?_i(d.props.children):d,s=hi(e,Zt(T)?T:[T],t,n,r,i,a,l,s,c,f),v.base=t.__e,t.__u&=-161,v.__h.length&&l.push(v),b&&(v.__E=v.__=null)}catch(N){if(l.length=p,t.__v=null,c||a!=null){if(N.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(A=a.length;A--;)An(a[A])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),N.then||mi(t),Q.__e(N,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=wa(n.__e,t,n,r,i,a,l,c,f);return(d=Q.diffed)&&d(t),128&t.__u?void 0:s}function mi(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(mi))}function $i(e,t,n){for(var r=0;r<n.length;r++)Ln(n[r],n[++r],n[++r]);Q.__c&&Q.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){Q.__e(a,i.__v)}})}function _i(e){return typeof e!="object"||e==null||e.__b>0?e:Zt(e)?e.map(_i):e.constructor!==void 0?null:Ce({},e)}function wa(e,t,n,r,i,a,l,s,c){var f,d,p,v,h,g,$,m=n.props||Ut,b=t.props,y=t.type;if(y=="svg"?i="http://www.w3.org/2000/svg":y=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((h=a[f])&&"setAttribute"in h==!!y&&(y?h.localName==y:h.nodeType==3)){e=h,a[f]=null;break}}if(e==null){if(y==null)return document.createTextNode(b);e=document.createElementNS(i,y,b.is&&b),s&&(Q.__m&&Q.__m(t,a),s=!1),a=null}if(y==null)m===b||s&&e.data==b||(e.data=b);else{if(a=y=="textarea"&&b.defaultValue!=null?null:a&&Gt.call(e.childNodes),!s&&a!=null)for(m={},f=0;f<e.attributes.length;f++)m[(h=e.attributes[f]).name]=h.value;for(f in m)h=m[f],f=="dangerouslySetInnerHTML"?p=h:f=="children"||f in b||f=="value"&&"defaultValue"in b||f=="checked"&&"defaultChecked"in b||kt(e,f,null,h,i);for(f in b)h=b[f],f=="children"?v=h:f=="dangerouslySetInnerHTML"?d=h:f=="value"?g=h:f=="checked"?$=h:s&&typeof h!="function"||m[f]===h||kt(e,f,h,m[f],i);if(d)s||p&&(d.__html==p.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(p&&(e.innerHTML=""),hi(t.type=="template"?e.content:e,Zt(v)?v:[v],t,n,r,y=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,l,a?a[0]:n.__k&&Ge(n,0),s,c),a!=null)for(f=a.length;f--;)An(a[f]);s&&y!="textarea"||(f="value",y=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[f]||y=="progress"&&!g||y=="option"&&g!=m[f])&&kt(e,f,g,m[f],i),f="checked",$!=null&&$!=e[f]&&kt(e,f,$,m[f],i))}return e}function Ln(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){Q.__e(i,n)}}function yi(e,t,n){var r,i;if(Q.unmount&&Q.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Ln(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){Q.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&yi(r[i],t,n||typeof e.type!="function");n||An(e.__e),e.__c=e.__=e.__e=void 0}function ka(e,t,n){return this.constructor(e,n)}function xa(e,t,n){var r,i,a,l;t==document&&(t=document.documentElement),Q.__&&Q.__(e,t),i=(r=!1)?null:t.__k,a=[],l=[],Fn(t,e=t.__k=di(ht,null,[e]),i||Ut,Ut,t.namespaceURI,i?null:t.firstChild?Gt.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,l),$i(a,e,l),e.props.children=null}Gt=Bt.slice,Q={__e:function(e,t,n,r){for(var i,a,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},ui=0,Nt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ce({},this.state),typeof e=="function"&&(e=e(Ce({},n),this.props)),e&&Ce(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ur(this))},Nt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ur(this))},Nt.prototype.render=ht,Ne=[],ci=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fi=function(e,t){return e.__v.__b-t.__v.__b},jt.__r=0,an=Math.random().toString(8),Et="__d"+an,st="__a"+an,vi=/(PointerCapture)$|Capture$/i,On=0,_n=fr(!1),yn=fr(!0);var vt,ne,ln,vr,Ht=0,bi=[],ae=Q,dr=ae.__b,pr=ae.__r,hr=ae.diffed,gr=ae.__c,mr=ae.unmount,$r=ae.__;function Rn(e,t){ae.__h&&ae.__h(ne,e,Ht||t),Ht=0;var n=ne.__H||(ne.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return Ht=1,za(ki,e)}function za(e,t,n){var r=Rn(vt++,2);if(r.t=e,!r.__c&&(r.__=[ki(void 0,t),function(s){var c=r.__N?r.__N[0]:r.__[0],f=r.t(c,s);c!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=ne,!ne.__f)){var i=function(s,c,f){if(!r.__c.__H)return!0;var d=!1,p=r.__c.props!==s;if(r.__c.__H.__.some(function(h){if(h.__N){d=!0;var g=h.__[0];h.__=h.__N,h.__N=void 0,g!==h.__[0]&&(p=!0)}}),a){var v=a.call(this,s,c,f);return d?v||p:v}return!d||p};ne.__f=!0;var a=ne.shouldComponentUpdate,l=ne.componentWillUpdate;ne.componentWillUpdate=function(s,c,f){if(this.__e){var d=a;a=void 0,i(s,c,f),a=d}l&&l.call(this,s,c,f)},ne.shouldComponentUpdate=i}return r.__N||r.__}function Z(e,t){var n=Rn(vt++,3);!ae.__s&&wi(n.__H,t)&&(n.__=e,n.u=t,ne.__H.__h.push(n))}function ze(e){return Ht=5,Re(function(){return{current:e}},[])}function Re(e,t){var n=Rn(vt++,7);return wi(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ca(){for(var e;e=bi.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(It),t.__h.some(bn),t.__h=[]}catch(n){t.__h=[],ae.__e(n,e.__v)}}}ae.__b=function(e){ne=null,dr&&dr(e)},ae.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),$r&&$r(e,t)},ae.__r=function(e){pr&&pr(e),vt=0;var t=(ne=e.__c).__H;t&&(ln===ne?(t.__h=[],ne.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(It),t.__h.some(bn),t.__h=[],vt=0)),ln=ne},ae.diffed=function(e){hr&&hr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(bi.push(t)!==1&&vr===ae.requestAnimationFrame||((vr=ae.requestAnimationFrame)||Sa)(Ca)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),ln=ne=null},ae.__c=function(e,t){t.some(function(n){try{n.__h.some(It),n.__h=n.__h.filter(function(r){return!r.__||bn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],ae.__e(r,n.__v)}}),gr&&gr(e,t)},ae.unmount=function(e){mr&&mr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{It(r)}catch(i){t=i}}),n.__H=void 0,t&&ae.__e(t,n.__v))};var _r=typeof requestAnimationFrame=="function";function Sa(e){var t,n=function(){clearTimeout(r),_r&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);_r&&(t=requestAnimationFrame(n))}function It(e){var t=ne,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ne=t}function bn(e){var t=ne;e.__c=e.__(),ne=t}function wi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ki(e,t){return typeof t=="function"?t(e):t}var xi=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var l=t[a++],s=t[a]?(t[0]|=l?1:2,n[t[a++]]):t[++a];l===3?r[0]=s:l===4?r[1]=Object.assign(r[1]||{},s):l===5?(r[1]=r[1]||{})[t[++a]]=s:l===6?r[1][t[++a]]+=s+"":l?(i=e.apply(s,xi(e,s,n,["",null])),r.push(i),s[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(s)}return r},yr=new Map;function Ma(e){var t=yr.get(this);return t||(t=new Map,yr.set(this,t)),(t=xi(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,l="",s="",c=[0],f=function(v){a===1&&(v||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,v,l):a===3&&(v||l)?(c.push(3,v,l),a=2):a===2&&l==="..."&&v?c.push(4,v,0):a===2&&l&&!v?c.push(5,0,!0,l):a>=5&&((l||!v&&a===5)&&(c.push(a,0,l,i),a=6),v&&(c.push(a,v,0,i),a=6)),l=""},d=0;d<n.length;d++){d&&(a===1&&f(),f(d));for(var p=0;p<n[d].length;p++)r=n[d][p],a===1?r==="<"?(f(),c=[c],a=3):l+=r:a===4?l==="--"&&r===">"?(a=1,l=""):l=r+l[0]:s?r===s?s="":l+=r:r==='"'||r==="'"?s=r:r===">"?(f(),a=1):a&&(r==="="?(a=5,i=l,l=""):r==="/"&&(a<5||n[d][p+1]===">")?(f(),a===3&&(c=c[0]),a=c,(c=c[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(f(),a=2):l+=r),a===3&&l==="!--"&&(a=4,c=c[0])}return f(),c})(e)),t),arguments,[])).length>1?t:t[0]}const u=Ma.bind(di);var ut={},zi="de",br={};function o(e,t){var n=ut[e];return n===void 0?(br[e]||(br[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function Ea(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return ut=i||{},zi=ut["meta.lang"]||document.documentElement.lang||"de",ut}).catch(function(){return n()})}return n()}const Ta={t:o,load:Ea,getLang:function(){return zi},getDict:function(){return ut}};var dt=" ",Ci="−";function Ze(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?Ci:"")+r}function Na(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function Ia(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Na(Ze(e/1e3,1))+dt+"kW":Ze(Math.round(e),0)+dt+"W"}function Pa(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Ze(e/1e3,2)+dt+"kWh":Ze(Math.round(e),0)+dt+"Wh"}function Oa(e,t){if(e==null||isNaN(e))return"–";var n=Ze(e,2);return t&&e>0&&(n="+"+n),n+dt+"CHF"}function Fe(e){return(e<10?"0":"")+e}function Aa(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=Fe(n.getDate())+"."+Fe(n.getMonth()+1)+"."+n.getFullYear(),i=Fe(n.getHours())+":"+Fe(n.getMinutes());switch(t){case"1d":return r;case"dm":return Fe(n.getDate())+"."+Fe(n.getMonth()+1)+".";case"1mo":return Fe(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const x={num:Ze,w:Ia,wh:Pa,chf:Oa,time:Aa,MINUS:Ci};function Oe(e){return u`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?u`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?u`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function F(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:"");return u`
      <section class=${t}>
        ${e.title||e.value||e.badge||e.tooltip?u`
          <div class="card-head">
            <div class="card-head-left">
              ${e.title?u`<h2 class="card-title">${e.title}</h2>`:null}
              ${e.tooltip?u`<${fe} text=${e.tooltip} />`:null}
              ${e.subtitle?u`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?u`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${e.children}
      </section>`}function Pt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return u`<span class=${r}>${o(n)}</span>`}function Y(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return u`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function Xt(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function Ot(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function fe(e){var t=C(!1),n=t[0],r=t[1],i=C(null),a=i[0],l=i[1],s=ze(null),c=ze(null);return Z(function(){if(!n)return;function f(y){y.key==="Escape"&&r(!1)}function d(y){c.current&&!c.current.contains(y.target)&&r(!1)}document.addEventListener("keydown",f),document.addEventListener("click",d);var p=s.current,v=c.current;if(p&&v){var h=v.getBoundingClientRect(),g=p.getBoundingClientRect(),$=h.left+h.width/2,m=Math.max(8,Math.min($-g.width/2,window.innerWidth-8-g.width)),b=h.top-g.height-8;b<8&&(b=h.bottom+8),l({left:m,top:b})}return function(){document.removeEventListener("keydown",f),document.removeEventListener("click",d),l(null)}},[n]),u`
      <span class="tooltip-wrap" ref=${c}>
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
        ${n?u`
          <span class="tooltip-bubble" role="tooltip" ref=${s}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var At=[],Fa=0;function X(e,t){t=t||{};var n={id:++Fa,message:e,type:t.type||"info",ttl:t.ttl||5e3};At.forEach(function(r){r(n)})}function La(){var e=C([]),t=e[0],n=e[1];return Z(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(l){return l.id!==i.id})})},i.ttl)}return At.push(r),function(){var i=At.indexOf(r);i>=0&&At.splice(i,1)}},[]),u`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return u`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${o("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var q={top:22,right:14,bottom:24,left:46};function Si(e){var t=C(0),n=t[0],r=t[1];return Z(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function Mi(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var l=[],s=Math.ceil(e/i)*i,c=s;c<=t+i*1e-9;c+=i)l.push(Math.abs(c)<i*1e-9?0:c);return l}function Dn(e){return Math.abs(e)>=1e3?x.num(e/1e3,1).replace(/\.0$/,"")+"k":x.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function Ra(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function Da(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var l=0;l<r;l++)a.push(l);else for(var s=0;s<i;s++)a.push(Math.round(s*(r-1)/(i-1)));var c=[],f=null,d=-1;return a.forEach(function(p){if(p!==d){d=p;var v=n(e[p].t);v!==f&&(f=v,c.push(p))}}),c}function Ei(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function Ti(e){return u`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return u`
            <g key=${"y"+t}>
              <line x1=${q.left} x2=${e.width-q.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${q.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${Dn(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-q.right-34?null:u`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${q.left} x2=${q.left} y1=${q.top-6} y2=${e.height-q.bottom}
          class="ch-axis" />
        <text x=${q.left-40} y=${q.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-q.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function wr(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function Wa(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function Ua(e,t,n,r){var i=Wa(e,t),a=[];if(i.length<2)return a;var l=[];function s(){if(l.length>=2){var g="M"+n(l[0].t).toFixed(1)+" "+r(l[0].top).toFixed(1),$;for($=1;$<l.length;$++)g+="L"+n(l[$].t).toFixed(1)+" "+r(l[$].top).toFixed(1);for($=l.length-1;$>=0;$--)g+="L"+n(l[$].t).toFixed(1)+" "+r(l[$].bottom).toFixed(1);a.push(g+"Z")}l=[]}for(var c=0;c<i.length;c++){var f=i[c],d=f.top-f.bottom;if(d>0?l.push(f):s(),c<i.length-1){var p=i[c+1],v=p.top-p.bottom;if(d>0!=v>0&&d!==v){var h=d/(d-v);l.push({t:f.t+(p.t-f.t)*h,top:f.top+(p.top-f.top)*h,bottom:f.bottom+(p.bottom-f.bottom)*h}),d>0&&s()}}}return s(),a}function Ni(e,t,n,r){var i=n>t-150;return u`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,l){return u`
            <div key=${l} class="ch-hover-line">
              ${a.color?u`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function gt(e){var t=ze(null),n=Si(t),r=C(null),i=r[0],a=r[1],l=e.height||180,s=e.series||[],c=e.timeWindow;if(!c){var f=1/0,d=-1/0;s.forEach(function(M){M.points.forEach(function(N){N.t<f&&(f=N.t),N.t>d&&(d=N.t)})}),c=f===1/0?[0,1]:[f,d]}var p=c[0],v=c[1]>c[0]?c[1]:c[0]+1,h=[];s.forEach(function(M){M.points.forEach(function(N){h.push(N.y)})});var g=Ei(h,!1),$=Math.max(10,n-q.left-q.right),m=l-q.top-q.bottom;function b(M){return q.left+(M-p)/(v-p)*$}function y(M){return q.top+(1-(M-g[0])/(g[1]-g[0]))*m}var k=Mi(g[0],g[1],4),z=e.xTickFormat||function(M){return x.time(M,"hm")},w=Ra(p,v,Math.max(2,Math.min(5,Math.floor($/90)))).map(function(M){return{x:b(M),label:z(M)}});function S(M){var N=[],I=[];M.forEach(function(R){R.y===null||R.y===void 0?(I.length&&N.push(I),I=[]):I.push(R)}),I.length&&N.push(I);var j=y(Math.max(0,g[0]));return N.map(function(R){var _=R.map(function(D,W){return(W===0?"M":"L")+b(D.t).toFixed(1)+" "+y(D.y).toFixed(1)}).join(""),E=_+"L"+b(R[R.length-1].t).toFixed(1)+" "+j.toFixed(1)+"L"+b(R[0].t).toFixed(1)+" "+j.toFixed(1)+"Z";return{line:_,area:E}})}function U(M){if(t.current){var N=t.current.getBoundingClientRect(),I=M.clientX-N.left;if(I<q.left||I>n-q.right){a(null);return}var j=p+(I-q.left)/$*(v-p);a(j)}}var T=null,A=[];return i!==null&&(A.push({text:z(i)}),s.forEach(function(M){var N=wr(M.points,i);N>=0&&(T===null&&(T=b(M.points[N].t)),A.push({color:M.color,text:(M.label?M.label+": ":"")+(e.yFormat||Dn)(M.points[N].y)+(e.yFormat?"":" "+e.yUnit)}))}),T===null&&(T=b(i))),u`
      <div class="chart" ref=${t}
        onPointerMove=${U}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${l} role="img" aria-label=${e.label||""}>
            <${Ti} width=${n} height=${l} sy=${y}
              yTicks=${k} xTicks=${w}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(M,N){return Ua(M.top,M.bottom,b,y).map(function(I,j){return u`<path key=${N+"-"+j} class="ch-band" d=${I} fill=${M.color} stroke="none"/>`})})}
            ${s.map(function(M,N){return S(M.points).map(function(I,j){return u`
                  <g key=${N+"-"+j}>
                    ${M.fill?u`<path class="ch-area" d=${I.area} fill=${M.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${I.line} fill="none" stroke=${M.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${T!==null?u`
              <line x1=${T} x2=${T} y1=${q.top-4} y2=${l-q.bottom} class="ch-crosshair"/>
              ${s.map(function(M,N){var I=wr(M.points,i);return I>=0?u`
                  <circle key=${N} cx=${b(M.points[I].t)} cy=${y(M.points[I].y)} r="3.5"
                    fill=${M.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${T!==null?Ni(t,n,T,A):null}`:null}
      </div>`}function Wn(e){var t=ze(null),n=Si(t),r=C(null),i=r[0],a=r[1],l=e.height||180,s=e.points||[];function c(_){return(_.segments||[]).reduce(function(E,D){return E+(D.value||0)},0)}function f(_){return _.bars?_.bars.map(c):[_.y]}var d=s.reduce(function(_,E){return E.bars?Math.max(_,E.bars.length):_},1),p=[];s.forEach(function(_){f(_).forEach(function(E){p.push(E)})});var v=Ei(p,!0),h=Math.max(10,n-q.left-q.right),g=l-q.top-q.bottom;function $(_){return q.top+(1-(_-v[0])/(v[1]-v[0]))*g}var m=s.length,b=m>0?h/m:h;function y(_){return q.left+(_+.5)*b}var k=Math.max(1,Math.min(b-1,b*.72,46)),z=Mi(v[0],v[1],4),w=e.xTickFormat||function(_){return x.time(_,"hm")},S=Da(s,h,w).map(function(_){return{x:y(_),label:w(s[_].t)}}),U=$(0),T=s.length+"|"+(s.length?s[0].t+"-"+s[s.length-1].t:"")+"|"+d+"|"+(e.yUnit||"");function A(_){if(!t.current||!m){a(null);return}var E=t.current.getBoundingClientRect(),D=_.clientX-E.left;if(D<q.left||D>n-q.right){a(null);return}var W=Math.floor((D-q.left)/b);a(W<0?0:W>=m?m-1:W)}var M=e.yFormat||Dn;function N(_){return M(_)+(e.yFormat?"":" "+(e.yUnit||""))}var I=null,j=[];if(i!==null&&s[i]){var R=s[i];I=y(i),j.push({text:w(R.t)}),R.bars?R.bars.forEach(function(_){(_.segments||[]).forEach(function(E){E.value&&j.push({color:E.color,text:(E.label?E.label+": ":"")+N(E.value)})})}):R.y!==null&&R.y!==void 0&&j.push({color:R.color||e.color,text:N(R.y)})}return u`
      <div class="chart" ref=${t}
        onPointerMove=${A}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${l} role="img" aria-label=${e.label||""}>
            <${Ti} width=${n} height=${l} sy=${$}
              yTicks=${z} xTicks=${S}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${T}>
            ${s.map(function(_,E){var D=i===E?"1":"0.85";if(_.bars){var W=y(E)-k/2,ce=k/d;return u`<g key=${E}>${_.bars.map(function(de,P){var K=W+P*ce+1,G=Math.max(1,ce-2),re=0;return(de.segments||[]).map(function(je,O){var oe=je.value||0;if(oe<=0)return null;var ie=$(re+oe),se=Math.max(1,$(re)-ie);return re+=oe,u`
                      <rect key=${P+"-"+O} class="ch-bar ch-bar-up"
                        x=${K.toFixed(1)} y=${ie.toFixed(1)}
                        width=${G.toFixed(1)} height=${se.toFixed(1)} rx="1.5"
                        fill=${je.color} opacity=${D}/>`})})}</g>`}if(_.y===null||_.y===void 0)return null;var ue=y(E)-k/2,V=$(_.y),ee=Math.min(V,U),ge=Math.max(1,Math.abs(V-U));return u`
                <rect key=${E} class=${"ch-bar "+(_.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${ue.toFixed(1)} y=${ee.toFixed(1)}
                  width=${k.toFixed(1)} height=${ge.toFixed(1)} rx="2"
                  fill=${_.color||e.color||"var(--c-consumption)"}
                  opacity=${D}/>`})}
            </g>
            <line x1=${q.left} x2=${n-q.right} y1=${U} y2=${U} class="ch-zero-strong"/>
          </svg>
          ${I!==null?Ni(t,n,I,j):null}`:null}
      </div>`}var Ba=[10,25,50];function ja(e){var t=C(0),n=t[0],r=t[1],i=C(e.pageSize||10),a=i[0],l=i[1],s=e.rows||[],c=s.length,f=Math.max(1,Math.ceil(c/a)),d=Math.min(n,f-1),p=d*a,v=Math.min(p+a,c),h=s.slice(p,v);return u`
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
              <tr><td class="table-empty" colspan=${e.columns.length}>${o("common.nodata")}</td></tr>`:h.map(function(g,$){return u`
                  <tr key=${g.id!==void 0?g.id:p+$}>
                    ${e.columns.map(function(m){return u`
                        <td key=${m.key} class=${m.align==="right"?"ta-r":""}>
                          ${m.render?m.render(g):g[m.key]}
                        </td>`})}
                  </tr>`})}
          </tbody>
        </table>
        <div class="table-footer">
          <label class="table-pagesize">
            <span>${o("table.perpage")}</span>
            <span class="select-wrap select-wrap-small">
              <select class="select select-small" value=${a}
                onChange=${function(g){l(+g.target.value),r(0)}}>
                ${Ba.map(function(g){return u`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${o("table.pageinfo",{from:c===0?0:p+1,to:v,total:c})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${o("table.prev")}
              disabled=${d===0} onClick=${function(){r(d-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${o("table.next")}
              disabled=${d>=f-1} onClick=${function(){r(d+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function Ii(e,t){var n=e.split("/").filter(function(f){return f!==""}),r=t.split("/").filter(function(f){return f!==""}),i={},a;for(a=0;a<n.length;a++){var l=n[a];if(l.charAt(0)===":"){var s=l.slice(-1)==="?",c=l.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(s)continue;return null}i[c]=decodeURIComponent(r[a])}else if(l!==r[a])return null}return r.length>n.length?null:i}function wn(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=Ii(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function Ha(e){var t=C(function(){return wn(e)}),n=t[1];return Z(function(){function r(){n(wn(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const Pe={match:Ii,parse:wn,useRoute:Ha,navigate:function(e){window.location.hash="#"+e}};var Va=["imp_wh","exp_wh","pv_wh","vzev_in_wh","vzev_out_wh"],Ka=["grid_ht_wh","grid_nt_wh"];function pe(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function Un(e,t){t=t||{};var n=Ie(t.grid_import_chf_kwh,.26),r=Ie(t.grid_feedin_chf_kwh,.18),i=Ie(t.vzev_import_chf_kwh,.22),a=Ie(t.vzev_export_chf_kwh,.22),l=e.imp_wh,s=e.exp_wh,c=e.pv_wh,f=e.vzev_in_wh||0,d=e.vzev_out_wh||0,p={};for(var v in e)p[v]=e[v];if(p.cost_import_chf=l==null?null:pe((l-f)/1e3*n),p.revenue_feedin_chf=s==null?null:pe((s-d)/1e3*r),p.cost_vzev_chf=pe(f/1e3*i),p.revenue_vzev_chf=pe(d/1e3*a),p.saving_selfuse_chf=c==null||s===null||s===void 0?null:pe(Math.max(0,(c-s)/1e3*(n-r))),Qt(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var h=Ie(t.grid_import_ht_chf_kwh,n),g=Ie(t.grid_import_nt_chf_kwh,n);p.cost_import_ht_chf=pe(e.grid_ht_wh/1e3*h),p.cost_import_nt_chf=pe(e.grid_nt_wh/1e3*g),p.cost_import_chf=pe(p.cost_import_ht_chf+p.cost_import_nt_chf)}return p}function Ie(e,t){return e==null||isNaN(e)?t:Number(e)}var xt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Pi(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return Pi(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var l=xt[i.slice(0,a)],s=xt[i.slice(a+1)];if(l!==void 0&&s!==void 0){if(l<=s){if(t>=l&&t<=s)return!0}else if(t>=l||t<=s)return!0}}else if(xt[i]!==void 0&&xt[i]===t)return!0}return!1}function Qt(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function qa(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,l=0;l<a.length;l++){var s=a[l]||{};if(Pi(s.days,r)&&i>=Ie(s.from,0)&&i<Ie(s.to,0))return!0}return!1}function Oi(e,t){if(!Qt(t))return e;var n=e.imp_wh,r=e.vzev_in_wh||0;if(n==null)return e;var i=n-r;i<0&&(i=0);var a={};for(var l in e)a[l]=e[l];return qa(e.ts,t)?(a.grid_ht_wh=i,a.grid_nt_wh=0):(a.grid_ht_wh=0,a.grid_nt_wh=i),a}function Ya(e,t){var n={ts:e},r=!1;return Va.forEach(function(i){var a=0,l=!1,s=!1;t.forEach(function(c){var f=c[i];f==null?s=!0:(a+=f,l=!0)}),n[i]=l?a:null,l&&s&&(r=!0)}),Ka.forEach(function(i){var a=0,l=!1;t.forEach(function(s){var c=s[i];c!=null&&(a+=c,l=!0)}),l&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function Ga(e){return e-e%3600}function Za(e){var t=e-kn(e,86400),n=kn(Math.floor(t/86400)+3,7);return t-n*86400}function kn(e,t){return(e%t+t)%t}function Bn(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function Xa(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function et(e,t,n){var r={},i=[];(e||[]).forEach(function(l){var s=t(l.ts);r[s]||(r[s]=[],i.push(s)),r[s].push(l)});var a=i.map(function(l){return Un(Ya(Number(l),r[l]),n)});return a.sort(function(l,s){return l.ts-s.ts}),a}function kr(e,t,n,r){if(e=e||[],Qt(r)&&t==="15m"&&(e=e.map(function(a){return Oi(a,r)})),t===n){var i=e.map(function(a){return Un(a,r)});return i.sort(function(a,l){return a.ts-l.ts}),i}switch(n){case"1h":return et(e,Ga,r);case"1w":return et(e,Za,r);case"1q":return et(e,Xa,r);case"1mo":return et(e,Bn,r);case"1d":default:return et(e,function(a){return a-kn(a,86400)},r)}}function xn(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function Qa(e){if(e=(e||[]).filter(function(s){return s!=null&&!isNaN(s)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=xn(e.slice(0,t)),r=xn(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",l=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:l}}function Ja(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function el(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function tl(e){return e-e%86400}function Vt(e,t){if(!Array.isArray(e))return null;for(var n=Math.floor(e.length/3),r=null,i=0;i<n;i++)e[i*3]===t&&(r=[e[i*3+1],e[i*3+2]]);return r}function Ai(e,t){var n={},r=[],i=0;t=t||{};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var l=t[a];(l==null||l<0)&&(l=0),t[a]=l,r.push(a),i+=l,n[a]=0}if(r.length===0)return n;r.sort(),e<0&&(e=0);var s=e<i?e:i;if(s<=0||i<=0)return n;var c={},f=0;r.forEach(function(h){var g=s*t[h],$=Math.floor(g/i);c[h]=g-$*i,n[h]=$,f+=$});for(var d=s-f;d>0;){var p=null,v=-1;if(r.forEach(function(h){c[h]>v&&(v=c[h],p=h)}),p===null)break;n[p]+=1,c[p]=-1,d-=1}return n}function jn(e){e=e||{};var t=e.data||{},n=e.producer_id,r={},i=[];for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a))for(var l=t[a],s=Math.floor((l?l.length:0)/3),c=0;c<s;c++){var f=l[c*3];r[f]||(r[f]=!0,i.push(f))}return i.sort(function(d,p){return d-p}),i.map(function(d){var p={},v=0;for(var h in t)if(Object.prototype.hasOwnProperty.call(t,h)){var g=Vt(t[h],d);g!==null&&(h===n?v=g[1]:p[h]=g[0])}return{ts:d,members:Ai(v,p)}})}function nl(e){var t=e&&e.self_id,n=e&&e.producer_id,r={};return t&&jn(e).forEach(function(i){var a=i.members||{},l=0,s=0;if(t===n)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(s+=a[c]);else l=a[t]||0;r[i.ts]={vzev_in_wh:l,vzev_out_wh:s}}),r}function Fi(e,t){var n=nl(t);return(e||[]).map(function(r){var i=n[r.ts],a={};for(var l in r)a[l]=r[l];return a.vzev_in_wh=i?i.vzev_in_wh:0,a.vzev_out_wh=i?i.vzev_out_wh:0,a})}function xr(e,t){var n={},r=[];return e.forEach(function(i){var a=t(i.ts),l=n[a];l||(l={},n[a]=l,r.push(a));var s=i.members||{};for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=(l[c]||0)+s[c])}),r.sort(function(i,a){return i-a}),r.map(function(i){return{ts:i,members:n[i]}})}function zr(e,t,n){(n==null||n<1)&&(n=96);var r=jn(e),i;t==="1d"?i=xr(r,tl):t==="1mo"?i=xr(r,Bn):i=r;var a=i.length>n?i.length-n:0;return i.slice(a)}function Li(e){if(typeof e!="string"||e.length!==7||e[4]!=="-"||e[5]!=="Q")return null;var t=parseInt(e.slice(0,4),10),n=parseInt(e[6],10);if(isNaN(t)||isNaN(n)||n<1||n>4)return null;var r=(n-1)*3,i=Math.floor(Date.UTC(t,r,1)/1e3),a=Math.floor(Date.UTC(t,r+3,1)/1e3);return[i,a]}function rl(e,t,n,r,i){n=n||[],r=r||{};var a={};n.forEach(function(T){T&&T.id!==void 0&&(a[T.id]=T)});var l=Vn(r),s={};n.forEach(function(T){T&&T.id!==void 0&&(s[T.id]=me(T.entry_ts,0))});var c={},f={},d={},p={},v={},h=0;(t||[]).forEach(function(T){var A=Bn(T.ts),M=l&&ll(T.ts,r)==="ht",N=T.members||{};for(var I in N)if(Object.prototype.hasOwnProperty.call(N,I)&&!(s[I]&&T.ts<s[I])){var j=N[I]||0;c[I]=(c[I]||0)+j,M?f[I]=(f[I]||0)+j:d[I]=(d[I]||0)+j;var R=p[I];R||(R={},p[I]=R),R[A]=(R[A]||0)+j,v[A]=(v[A]||0)+j,h+=j}});var g=me(r.vzev_export_chf_kwh,0),$=me(r.vzev_import_chf_kwh,0),m=[];for(var b in c)if(Object.prototype.hasOwnProperty.call(c,b)){var y=c[b],k=a[b],z={id:b,name:k&&k.name!==void 0?k.name:b,wh:y,chf:pe(y/1e3*$)};k&&(k.location!==void 0&&(z.location=k.location),k.metering_point!==void 0&&(z.metering_point=k.metering_point),k.entry_ts!==void 0&&(z.entry_ts=k.entry_ts)),l&&(z.ht_wh=f[b]||0,z.nt_wh=d[b]||0);var w=me(r.grid_import_chf_kwh,null);w!==null&&(z.cost_grid_chf=pe(l?z.ht_wh/1e3*me(r.grid_import_ht_chf_kwh,w)+z.nt_wh/1e3*me(r.grid_import_nt_chf_kwh,w):y/1e3*w)),z.months=Cr(p[b]),m.push(z)}var S=Cr(v),U={quarter:e,months:S,total:{exp_wh:h,revenue_chf:pe(h/1e3*g),months:S},members:m,note:"15-min Messwerte, Abgleich mit Netzbetreiber pro Quartal"};return i!=null&&(U.quality=i),U}function me(e,t){return e==null||isNaN(e)?t:Number(e)}function Cr(e){e=e||{};var t=Object.keys(e).map(Number).sort(function(n,r){return n-r});return t.map(function(n){return{ts:n,wh:e[n]}})}function il(e){var t=new Date(e*1e3);return(t.getDay()+6)%7}function al(e){var t=new Date(e*1e3);return t.getHours()+t.getMinutes()/60}var zt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Hn(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return Hn(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var l=zt[i.slice(0,a)],s=zt[i.slice(a+1)];if(l!==void 0&&s!==void 0){if(l<=s){if(t>=l&&t<=s)return!0}else if(t>=l||t<=s)return!0}}else if(zt[i]!==void 0&&zt[i]===t)return!0}return!1}function Vn(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function ll(e,t){if(!Vn(t))return"flat";for(var n=il(e),r=al(e),i=t.ht_windows,a=0;a<i.length;a++){var l=i[a]||{},s=me(l.from,0),c=me(l.to,0);if(Hn(l.days,n)&&r>=s&&r<c)return"ht"}return"nt"}function ol(e){var t=e.ht_windows;if(!Array.isArray(t)||t.length===0)return 0;for(var n=0,r=0,i=0;i<7;i++)for(var a=0;a<96;a++){var l=a/4;r++;for(var s=0;s<t.length;s++){var c=t[s]||{};if(Hn(c.days,i)&&l>=me(c.from,0)&&l<me(c.to,0)){n++;break}}}return r===0?0:n/r}function Ri(e){e=e||{};var t;if(Vn(e)){var n=ol(e),r=me(e.grid_import_ht_chf_kwh,0),i=me(e.grid_import_nt_chf_kwh,0);t=r*n+i*(1-n)}else{var a=e.grid_import_chf_kwh;if(a==null||isNaN(a))return null;t=Number(a)}return pe(t*.8)}function sl(e,t,n){e=e||{};var r=e.data||{},i=e.self_id;t=t||[];var a={},l=[];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))for(var c=r[s],f=Math.floor((c?c.length:0)/3),d=0;d<f;d++){var p=c[d*3];n&&(p<n[0]||p>=n[1])||a[p]||(a[p]=!0,l.push(p))}l.sort(function(y,k){return y-k});var v={},h={};t.forEach(function(y){!y||y.id===void 0||(v[y.id]=me(y.entry_ts,0),h[y.id]={have:0,expected:0,lastTs:null})});var g=0,$=0,m=0,b=0;return l.forEach(function(y){g++;var k=!1;t.forEach(function(z){if(!(!z||z.id===void 0)&&!(y<v[z.id])){var w=h[z.id];w.expected++;var S=Vt(r[z.id],y);S===null?k=!0:(w.have++,(w.lastTs===null||y>w.lastTs)&&(w.lastTs=y))}}),i!=null&&Vt(r[i],y)===null&&b++,k?m++:$++}),{expected:g,complete:$,provisional:m,missing:b,perMember:h}}function Sr(e,t){e=e||{};var n=(e.data||{})[t];if(!Array.isArray(n)||n.length<3)return null;for(var r=Math.floor(n.length/3),i=null,a=0;a<r;a++){var l=n[a*3];(i===null||l>i)&&(i=l)}return i}function ul(e,t,n){t=t||{};var r=t.data||{},i=t.producer_id,a={},l=0,s=0,c=0;for(var f in r)if(Object.prototype.hasOwnProperty.call(r,f)){var d=Vt(r[f],e);d!==null&&(f===i?s=d[1]:(a[f]=d[0],l+=d[0],f===n&&(c=d[0])))}var p=Ai(s,a);return{prodWh:s,totalImpWh:l,memberImpWh:c,sharePct:l>0?pe(c/l*100):0,allocatedWh:p[n]||0}}function Kn(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var Ft=[],Lt=!0,zn=null,Rt=[];function Mr(e){Rt.forEach(function(t){t(e)})}function Di(e){e&&(zn=Date.now()),e!==Lt&&(Lt=e,Ft.forEach(function(t){t(Lt,zn)}))}var cl=3,Cn=0;function Wi(e){return e instanceof TypeError||e&&e.name==="AbortError"}function Ui(){Cn=0,Di(!0)}function Bi(e){e&&e.optional||(Cn++,Cn>=cl&&Di(!1))}var fl=8e3,vl=2,on=0,Sn=[];function ji(){for(;on<vl&&Sn.length>0;){var e=Sn.shift();on++,e.run().then(e.resolve,e.reject).finally(function(){on--,ji()})}}function Hi(e){return new Promise(function(t,n){Sn.push({run:e,resolve:t,reject:n}),ji()})}function qn(e,t){return t=t||{},Hi(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},fl);return fetch(Kn()+e,{signal:n.signal}).then(function(i){if(Ui(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw Wi(i)&&Bi(t),i}).finally(function(){clearTimeout(r)})})}function te(e,t){return qn(e,t)}var we={optional:!0};function dl(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function l(){n!==null&&(clearInterval(n),n=null)}function s(){document.hidden?l():a()}return document.addEventListener("visibilitychange",s),a(),function(){r=!0,l(),document.removeEventListener("visibilitychange",s)}}function Er(e,t){return Hi(function(){return fetch(Kn()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(Ui(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw Wi(n)&&Bi(),n})})}function Ct(e){return e==null||String(e).trim()===""}function Ve(e){return qn("/cm?cmnd="+encodeURIComponent(e))}const L={base:Kn,get:te,post:Er,restartDevice:function(){return Ve("Restart 1")},getWifiConfig:function(){return Promise.all([Ve("SSId1"),Ve("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return Ct(e.ssid1)||t.push("SSId1 "+e.ssid1),Ct(e.password1)||t.push("Password1 "+e.password1),Ct(e.ssid2)||t.push("SSId2 "+e.ssid2),Ct(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):Ve("Backlog "+t.join(";"))},wifiScanStart:function(){return Ve("WifiScan 1")},wifiScanResult:function(){return Ve("WifiScan")},getConfig:function(){return te("/api/config")},postConfig:function(e){return Er("/api/config",e)},getConfigRaw:function(){return qn("/api/config",{text:!0})},getPower:function(){return te("/api/power")},getEnergy:function(e,t,n,r){if(e&&e!=="15m")throw new Error("getEnergy: res must be 15m");var i="/api/energy?res=15m&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),te(i)},getMeta:function(){return te("/api/meta")},getMeter:function(){return te("/api/meter")},getSite:function(){return te("/site")},getLoads:function(){return te("/loads")},getProductions:function(){return te("/productions")},setLoadState:function(e,t){return te("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},getVzevRaw:function(){return te("/api/vzev/raw",we)},getVzevMembersList:function(){return te("/api/vzev/members",we).then(function(e){return Array.isArray(e)?e:e&&e.members||[]})},getVzevDiscovered:function(){return te("/api/vzev/discovered",we).then(function(e){return Array.isArray(e)?e:e&&e.discovered||[]})},getVzevInfo:function(){return te("/api/vzev/info",we).catch(function(){return{}}).then(function(e){return Mr(e),e})},setVzevInfo:function(e){e=e||{};var t="/api/vzev/info?action=set";return["representative_name","representative_contact","connection_point_id"].forEach(function(n){e[n]!==void 0&&e[n]!==null&&(t+="&"+n+"="+encodeURIComponent(e[n]))}),e.enabled!==void 0&&e.enabled!==null&&(t+="&enabled="+(e.enabled?"true":"false")),te(t).then(function(n){return Mr(n),n})},getVzevFlows:function(e,t){return te("/api/vzev/raw",we).then(function(n){return{flows:zr(n,e||"15m",t||90)}})},getVzevBilling:function(e,t){var n=Li(e);return n?Promise.all([t?Promise.resolve(t):te("/api/vzev/raw",we),te("/api/vzev/members",we).catch(function(){return{members:[]}}),te("/api/meta").catch(function(){return{}}),te("/api/vzev/info",we).catch(function(){return{}}),te("/site").catch(function(){return{}})]).then(function(r){var i=r[0],a=r[1]&&r[1].members?r[1].members:Array.isArray(r[1])?r[1]:[],l=r[2]&&r[2].tariffs||{};i&&i.tariffs&&(l=Object.assign({},l,i.tariffs));var s=r[3]||{},c=r[4]||{},f=jn(i).filter(function($){return $.ts>=n[0]&&$.ts<n[1]}),d=sl(i,a,n),p=rl(e,f,a,l,d);p.info=s,p.raw=i,p.range=n,p.tariffs=l;var v=i&&i.self_id,h=i&&i.producer_id;if(v!=null)if(v===h)p.role="PRODUCER";else{p.role="CONSUMER";var g=p.members.filter(function($){return $.id===v})[0];p.self=g?Object.assign({},g,{name:c.name||g.name}):{id:v,name:c.name||v,wh:0,chf:0,months:[]}}return p}):Promise.reject(new Error("invalid quarter"))},getVzevMembers:function(){return Promise.all([te("/api/vzev/members",we),te("/api/vzev/raw",we)]).then(function(e){var t=e[0]&&e[0].members?e[0].members:Array.isArray(e[0])?e[0]:[],n=zr(e[1],"15m",90);return t.map(function(r){var i=r.type==="PRODUCER"||r.typ==="P",a=i?1:-1,l=n.map(function(c){var f=c.members&&c.members[r.id];return{t:c.ts,y:typeof f=="number"?f:0}}),s=l.reduce(function(c,f){return c+(f.y||0)},0);return{id:r.id,name:r.name||r.id,address:r.location||r.loc,net_wh:a*s,points:l}})})},poll:dl,onStatus:function(e){return Ft.push(e),function(){var t=Ft.indexOf(e);t>=0&&Ft.splice(t,1)}},onVzevInfo:function(e){return Rt.push(e),function(){var t=Rt.indexOf(e);t>=0&&Rt.splice(t,1)}},isOnline:function(){return Lt},lastOk:function(){return zn}};var pl="\uFEFF",Yn=";",Tr=`\r
`;function hl(e){if(e==null)return"";var t=String(e);return t.indexOf(Yn)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function Nr(e){return(e||[]).map(hl).join(Yn)}function gl(e){var t=String(e||"");t.charCodeAt(0)===65279&&(t=t.slice(1));var n=[],r=[],i="",a=!1,l=0;function s(){r.push(i),i=""}function c(){s(),n.push(r),r=[]}for(;l<t.length;){var f=t[l];if(a){if(f==='"'){if(t[l+1]==='"'){i+='"',l+=2;continue}a=!1,l++;continue}i+=f,l++;continue}if(f==='"'&&i===""){a=!0,l++;continue}if(f===Yn){s(),l++;continue}if(f==="\r"){l++;continue}if(f===`
`){c(),l++;continue}i+=f,l++}return(i!==""||r.length)&&c(),n}function Gn(e,t){var n=[Nr(e)];return(t||[]).forEach(function(r){n.push(Nr(r))}),pl+n.join(Tr)+Tr}function ml(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var Zn="gplug-archive",$l=1,ct=900,Ir=384,_l=60,yl=2*86400,bl=50,Vi="1",Pr={},Or=!1,tt=null,Mn=!1;function wl(){return typeof indexedDB<"u"?indexedDB:typeof globalThis<"u"?globalThis.indexedDB:void 0}function Ue(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error||new Error("idb request failed"))}})}function Xn(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=e.onerror=function(){n(e.error||new Error("idb tx failed"))}})}function ye(){if(tt)return tt;var e=wl();return e?(tt=new Promise(function(t,n){var r;try{r=e.open(Zn,$l)}catch(i){n(i);return}r.onupgradeneeded=function(){var i=r.result;i.objectStoreNames.contains("e15")||i.createObjectStore("e15",{keyPath:["siteId","ts"]}),i.objectStoreNames.contains("vz15")||i.createObjectStore("vz15",{keyPath:["siteId","memberId","ts"]}),i.objectStoreNames.contains("meta")||i.createObjectStore("meta",{keyPath:"siteId"})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error||new Error("idb open failed"))},r.onblocked=function(){n(new Error("idb blocked"))}}).catch(function(t){throw Mn=!0,tt=null,t}),tt):(Mn=!0,Promise.reject(new Error("IndexedDB unavailable")))}function kl(){return Mn?Promise.resolve(!1):ye().then(function(){return!0},function(){return!1})}function Be(e,t,n){return e.transaction(t,n).objectStore(t)}function xl(e){return{siteId:e,firstE15Ts:null,lastE15Ts:null,lastVzTs:null,gaps:[],count:0,syncedAt:null,producerId:null,selfId:null,tariffs:null}}function Jt(e){return ye().then(function(t){return Ue(Be(t,"meta","readonly").get(e))}).then(function(t){return t||xl(e)})}function Ki(e){return ye().then(function(t){var n=t.transaction("meta","readwrite");return n.objectStore("meta").put(e),Xn(n).then(function(){return e})})}function zl(){return ye().then(function(e){return Ue(Be(e,"meta","readonly").getAllKeys())}).then(function(e){return(e||[]).map(String)})}function Qn(e,t,n){var r=t??0,i=n??9999999999;return IDBKeyRange.bound([e,r],[e,i])}function Cl(e,t,n){return ye().then(function(r){return Ue(Be(r,"e15","readonly").getAll(Qn(e,t,n)))}).then(function(r){return(r||[]).map(function(i){var a={ts:i.ts,imp_wh:i.imp_wh,exp_wh:i.exp_wh,pv_wh:i.pv_wh};return i.partial&&(a.partial=!0),a})})}function qi(e,t){return!t||!t.length?Promise.resolve(0):ye().then(function(n){var r=n.transaction("e15","readwrite"),i=r.objectStore("e15"),a=0;return t.forEach(function(l){if(!(!l||typeof l.ts!="number")){var s={siteId:e,ts:l.ts,imp_wh:sn(l.imp_wh),exp_wh:sn(l.exp_wh),pv_wh:sn(l.pv_wh)};l.partial&&(s.partial=!0),i.put(s),a++}}),Xn(r).then(function(){return a})})}function sn(e){return e==null||isNaN(e)?null:Number(e)}function Yi(e,t){var n=t&&t.data||{},r=Object.keys(n);return r.length?ye().then(function(i){var a=i.transaction("vz15","readwrite"),l=a.objectStore("vz15"),s=0;return r.forEach(function(c){var f=n[c];if(Array.isArray(f))for(var d=0;d+2<f.length;d+=3)l.put({siteId:e,memberId:c,ts:f[d],imp:f[d+1],exp:f[d+2]}),s++}),Xn(a).then(function(){return s})}):Promise.resolve(0)}function Jn(e,t,n){return Promise.all([Jt(e),ye().then(function(r){return Ue(Be(r,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",t??0],[e,"￿",n??9999999999])))})]).then(function(r){var i=r[0],a=r[1]||[],l=t??0,s=n??9999999999,c={};return a.sort(function(f,d){return f.memberId===d.memberId?f.ts-d.ts:f.memberId<d.memberId?-1:1}),a.forEach(function(f){if(!(f.ts<l||f.ts>s)){var d=c[f.memberId];d||(d=[],c[f.memberId]=d),d.push(f.ts,f.imp,f.exp)}}),{producer_id:i.producerId,self_id:i.selfId,tariffs:i.tariffs,data:c}})}function Sl(e){for(var t=[],n=1;n<e.length;n++){var r=e[n-1],i=e[n];if(i-r>ct&&(t.push([r+ct,i-ct]),t.length>=bl))break}return t}function er(e){return ye().then(function(t){return Ue(Be(t,"e15","readonly").getAllKeys(Qn(e)))}).then(function(t){var n=(t||[]).map(function(r){return r[1]});return n.sort(function(r,i){return r-i}),{count:n.length,firstE15Ts:n.length?n[0]:null,lastE15Ts:n.length?n[n.length-1]:null,gaps:Sl(n)}})}function tr(e){return Promise.all([Jt(e),er(e),Ml()]).then(function(t){var n=t[0],r=t[1];return{siteId:e,firstE15Ts:r.firstE15Ts,lastE15Ts:r.lastE15Ts,count:r.count,gaps:r.gaps,lastVzTs:n.lastVzTs,syncedAt:n.syncedAt,days:r.firstE15Ts===null?0:Math.max(1,Math.round((r.lastE15Ts-r.firstE15Ts)/86400)),estimate:t[2]}})}function Ml(){return typeof navigator>"u"||!navigator.storage||!navigator.storage.estimate?Promise.resolve(null):navigator.storage.estimate().then(function(e){return e},function(){return null})}function El(){return Or||(Or=!0,typeof navigator>"u"||!navigator.storage||!navigator.storage.persist)?Promise.resolve(null):navigator.storage.persist().then(function(e){return e},function(){return null})}function Tl(e,t){var n;return Jt(t).then(function(r){n=r;var i=0;return r.lastE15Ts!==null&&r.lastE15Ts!==void 0&&(i=r.lastE15Ts+ct,Pr[t]||(i=Math.max(0,r.lastE15Ts-yl))),Pr[t]=!0,Nl(e,t,i)}).then(function(){return e.getVzevRaw?e.getVzevRaw().catch(function(){return null}):Promise.resolve(null)}).then(function(r){return!r||!r.data?null:(r.producer_id!==void 0&&(n.producerId=r.producer_id),r.self_id!==void 0&&(n.selfId=r.self_id),r.tariffs&&(n.tariffs=r.tariffs),Yi(t,r).then(function(){n.lastVzTs=Il(r)}))}).then(function(){return er(t)}).then(function(r){return n.firstE15Ts=r.firstE15Ts,n.lastE15Ts=r.lastE15Ts,n.count=r.count,n.gaps=r.gaps,n.syncedAt=Math.floor(Date.now()/1e3),Ki(n)}).then(function(){return El()}).then(function(){return tr(t)})}function Nl(e,t,n){var r=0;function i(a){return r>=_l?Promise.resolve():(r++,e.getEnergy("15m",Ir,a).then(function(l){return!Array.isArray(l)||!l.length?null:qi(t,l).then(function(){var s=l[l.length-1].ts;return l.forEach(function(c){c.ts>s&&(s=c.ts)}),l.length<Ir?null:i(s+ct)})}))}return i(n)}function Il(e){var t=e&&e.data||{},n=null;return Object.keys(t).forEach(function(r){var i=t[r];if(Array.isArray(i))for(var a=0;a+2<i.length;a+=3)(n===null||i[a]>n)&&(n=i[a])}),n}function Pl(e){return Promise.all([ye().then(function(t){return Ue(Be(t,"e15","readonly").getAll(Qn(e)))}),ye().then(function(t){return Ue(Be(t,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",0],[e,"￿",9999999999])))})]).then(function(t){var n=[];return(t[0]||[]).sort(function(r,i){return r.ts-i.ts}).forEach(function(r){n.push(["e",r.ts,nt(r.imp_wh),nt(r.exp_wh),nt(r.pv_wh),r.partial?"1":"0"])}),(t[1]||[]).sort(function(r,i){return r.memberId===i.memberId?r.ts-i.ts:r.memberId<i.memberId?-1:1}).forEach(function(r){n.push(["v",r.ts,r.memberId,nt(r.imp),nt(r.exp),""])}),Gn([Zn,Vi,e],n)})}function nt(e){return e==null?"":String(e)}function Ol(e,t){var n=gl(e);if(!n.length||n[0][0]!==Zn)return Promise.reject(new Error("not a gplug archive export"));if(n[0][1]!==Vi)return Promise.reject(new Error("unsupported export format "+n[0][1]));var r=n[0][2];if(t&&r!==t)return Promise.reject(new Error("site mismatch: file "+r+", device "+t));for(var i=t||r,a=[],l={},s=1;s<n.length;s++){var c=n[s];if(!(!c||!c.length)){if(c[0]==="e"){var f={ts:Number(c[1]),imp_wh:un(c[2]),exp_wh:un(c[3]),pv_wh:un(c[4])};c[5]==="1"&&(f.partial=!0),a.push(f)}else if(c[0]==="v"){var d=c[2];l[d]||(l[d]=[]),l[d].push(Number(c[1]),Ar(c[3]),Ar(c[4]))}}}return qi(i,a).then(function(){return Yi(i,{data:l})}).then(function(){return er(i)}).then(function(p){return Jt(i).then(function(v){return v.firstE15Ts=p.firstE15Ts,v.lastE15Ts=p.lastE15Ts,v.count=p.count,v.gaps=p.gaps,Ki(v)})}).then(function(){return tr(i)})}function un(e){return e===""||e===void 0?null:Number(e)}function Ar(e){return e===""||e===void 0?0:Number(e)}var Al=900*1e3,J={available:null,siteId:null,coverage:null,error:null,syncing:!1,otherSites:[]},Dt=[],ot=null,Fr=null;function Gi(){return J}function Wt(){Dt.forEach(function(e){try{e(J)}catch{}})}function Zi(e){return Dt.push(e),function(){var t=Dt.indexOf(e);t>=0&&Dt.splice(t,1)}}function Fl(e){return ot||(ot=kl().then(function(t){return J.available=t,t?e.getSite().then(function(n){return J.siteId=n&&n.id?String(n.id):null,J.siteId?zl().then(function(r){J.otherSites=r.filter(function(i){return i!==J.siteId})},function(){}).then(function(){return En(e)}).then(function(){return Fr===null&&typeof setInterval=="function"&&(Fr=setInterval(function(){En(e)},Al)),J}):(J.available=!1,Wt(),J)},function(){return Wt(),J}):(Wt(),J)}),ot)}function En(e){return!J.available||!J.siteId||J.syncing?Promise.resolve(J):(J.syncing=!0,Tl(e,J.siteId).then(function(t){J.coverage=t,J.error=null},function(t){J.error=t&&t.message?t.message:"sync failed"}).then(function(){return J.syncing=!1,Wt(),J}))}function en(){return ot||Promise.resolve(J)}function Ll(e){return En(e)}var Xi={overview:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,vzev:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="4" r="2.2" fill="currentColor"/><circle cx="4" cy="15" r="2.2" fill="currentColor"/><circle cx="16" cy="15" r="2.2" fill="currentColor"/><path d="M10 6.5v4M10 10.5l-4.5 3M10 10.5l4.5 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,settings:u`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function Lr(){return u`
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
      </a>`}var Rl=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/vzev",key:"nav.vzev",icon:"vzev",gate:"vzev",active:function(e){return e.indexOf("/vzev")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function Rr(e){return u`
      <nav class="nav" aria-label=${o("nav.menu")}>
        ${Rl.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="vzev"||e.showVzev)}).map(function(t){var n=t.active(e.path);return u`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${Xi[t.icon]}
              <span>${o(t.key)}</span>
            </a>`})}
      </nav>`}function Dl(e){var t=Pe.useRoute(e.routes),n=C(!1),r=n[0],i=n[1],a=C(!1),l=a[0],s=a[1],c=C(null),f=c[0],d=c[1],p=C(!1),v=p[0],h=p[1],g=C(!1),$=g[0],m=g[1],b=C(!1),y=b[0],k=b[1];Z(function(){return L.onStatus(function(w,S){w?d(null):(X(o("error.offline"),{type:"error"}),d(S?new Date(S):new Date))})},[]),Z(function(){var w=!1;function S(T){k(T.available===!1),!w&&T.otherSites&&T.otherSites.length&&(w=!0,X(o("banner.archive_site_changed",{id:T.siteId}),{type:"warn"}))}var U=Zi(S);return en().then(S),U},[]),Z(function(){return L.poll(function(){L.getMeta().then(function(w){s(!!w&&typeof w.time=="number"&&w.time<1e9)}).catch(function(){})},6e4)},[]),Z(function(){L.getMeter().then(function(w){h(!!(w&&w.values))}).catch(function(){})},[]),Z(function(){var w=L.onVzevInfo(function(S){m(!!(S&&S.enabled))});return L.getVzevInfo().catch(function(){}),w},[]),Z(function(){i(!1)},[t.path]);var z=t.route.component;return u`
      <div class="shell">
        <aside class="sidebar">
          <${Lr} />
          <${Rr} path=${t.path} showMeter=${v} showVzev=${$} />
          <div class="sidebar-foot"><a target="_blank" href="https://gplug.ch">gPlug.ch</a></div>
        </aside>

        <div class="topbar">
          <${Lr} />
          <button class="burger" aria-label=${o("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${Xi.burger}</button>
        </div>
        ${r?u`
          <div class="drawer">
            <${Rr} path=${t.path} showMeter=${v} showVzev=${$} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${l?u`<div class="banner banner-warn">${o("banner.rtc")}</div>`:null}
          ${y?u`<div class="banner banner-warn">${o("banner.archive")}</div>`:null}
          ${f?u`
            <div class="stale-note">${o("common.stale",{time:x.time(Math.floor(f.getTime()/1e3),"hm")})}</div>`:null}
          <${z} params=${t.params} />
        </main>

        <${La} />
      </div>`}function Se(e){return e==null||isNaN(e)?null:Number(e)}function cn(e){return e<0?0:e>1?1:e}function nr(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function Tn(e,t){t=t||{};var n=!!t.vzev,r=Se(t.co2);e=e||[];var i=e.length,a=0,l=0,s=0,c=0,f=0,d=0,p=0;e.forEach(function(w){if(nr(w)){d++;return}a+=w.pv_wh,l+=w.exp_wh,s+=w.imp_wh,c+=w.vzev_in_wh||0,f+=w.vzev_out_wh||0,p++});var v=i>0&&d/i>.2,h={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:v};if(n&&(h.autarkyVzev=null),i===0||v||p===0)return h;var g=Math.max(0,a-l),$=a-l+s;if(h.autarky=$>0?cn(g/$):null,h.selfuse=a>0?cn(g/a):null,n){var m=Math.max(0,s-c);h.autarkyVzev=$>0?cn(($-m)/$):null}var b=Un({imp_wh:s,exp_wh:l,pv_wh:a,vzev_in_wh:c,vzev_out_wh:f},t.tariffs||{}),y=b.saving_selfuse_chf||0,k=b.revenue_feedin_chf||0,z=n?(b.revenue_vzev_chf||0)-(b.cost_vzev_chf||0):0;return h.savingParts={selfuse:y,feedin:k,vzev:n?z:null},h.savingChf=Math.round((y+k+z)*100)/100,h.co2Kg=r&&r>0?g/1e3*r/1e3:null,h}function Wl(e,t){if(!e)return[];var n=Se(e.pv_w),r=Se(e.bat_w),i=Se(e.grid_w),a=n===null,l=r===null,s=i===null,c=a?0:n,f=l?0:r,d=s?0:i,p=Se(t),v=Math.max(0,d),h=Math.max(0,-d),g=Math.max(0,c-h);function $(k,z){return z?"unknown":k<1?"zero":"ok"}var m=[];if(m.push({from:"pv",to:"haus",watts:g,state:$(g,a||s)}),l?m.push({from:"bat",to:"haus",watts:0,state:"unknown"}):f>=0?m.push({from:"bat",to:"haus",watts:f,state:$(f,!1)}):m.push({from:"haus",to:"bat",watts:-f,state:$(-f,!1)}),p!==null&&p<0){var b=Math.min(-p,h);m.push({from:"pv",to:"vzev",watts:b,state:$(b,s)}),m.push({from:"pv",to:"netz",watts:h-b,state:$(h-b,s)})}else m.push({from:"pv",to:"netz",watts:h,state:$(h,s)});if(p!==null&&p>0){var y=Math.min(p,v);m.push({from:"vzev",to:"haus",watts:y,state:$(y,s)}),m.push({from:"netz",to:"haus",watts:v-y,state:$(v-y,s)})}else m.push({from:"netz",to:"haus",watts:v,state:$(v,s)});return m}function Ul(e){if(!e||!e.length)return null;var t=0,n=0,r=0,i=!1,a=!1;return e.forEach(function(l){var s=l.to==="netz"||l.to==="vzev",c=l.from==="netz"||l.from==="vzev";s?l.state==="unknown"?i=!0:n+=l.watts:c?l.state==="unknown"?i=!0:t+=l.watts:l.from==="pv"&&l.to==="haus"&&(l.state==="unknown"?a=!0:r+=l.watts)}),i?"flow.status_unknown":n>=1?"flow.status_export":t>=1?"flow.status_import":a?"flow.status_unknown":r>=1?"flow.status_covered":"flow.status_idle"}function Bl(e){if(!e||!e.length)return 0;var t=0,n=0;return e.forEach(function(r){r.state!=="unknown"&&(r.to==="netz"||r.to==="vzev"?n+=r.watts:(r.from==="netz"||r.from==="vzev")&&(t+=r.watts))}),n>=1?n:t>=1?t:0}function jl(e){if(!e||!e.length)return null;var t=null;if(e.forEach(function(i){(i.points||[]).forEach(function(a){(t===null||a.t>t)&&(t=a.t)})}),t===null)return null;var n=0,r=!1;return e.forEach(function(i){var a=(i.net_wh||0)<0?-1:1;(i.points||[]).forEach(function(l){l.t===t&&(n+=a*(l.y||0),r=!0)})}),r?n*4:null}var Hl={"comp.pv":"var(--c-production)","comp.selfuse":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.vzev":"var(--c-vzev)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-vzev-fill)"};function he(e,t){return{key:e,value:Math.max(0,t||0),color:Hl[e]}}function Vl(e,t){if(!e)return{cover:[],usage:[],unknown:!0};var n=Se(e.pv_w),r=Se(e.bat_w),i=Se(e.grid_w),a=n===null||i===null,l=n===null?0:n,s=r===null?0:r,c=i===null?0:i,f=Se(t),d=Math.max(0,c),p=Math.max(0,-c),v=Math.max(0,l-p),h=Math.max(0,s),g=Math.max(0,-s),$=f!==null&&f>0?Math.min(f,d):0,m=f!==null&&f<0?Math.min(-f,p):0;return{cover:[he("comp.pv",v),he("comp.battery",h),he("comp.vzev",$),he("comp.grid",d-$)],usage:[he("comp.selfuse",v),he("comp.charge",g),he("comp.vzev",m),he("comp.feedin",p-m)],unknown:a}}function Kl(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,l=0;if(e.forEach(function(d){nr(d)||(t+=d.pv_wh,n+=d.exp_wh,r+=d.imp_wh,i+=d.vzev_in_wh||0,a+=d.vzev_out_wh||0,l++)}),l===0)return{cover:[],usage:[],unknown:!0};var s=Math.max(0,t-n),c=Math.min(Math.max(0,i),r),f=Math.min(Math.max(0,a),n);return{cover:[he("comp.pv",s),he("comp.vzev",c),he("comp.grid",r-c)],usage:[he("comp.selfuse",s),he("comp.vzev",f),he("comp.feedin",n-f)],unknown:!1}}function ql(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function Yl(e){e=e||[];var t=0,n=0,r=0,i=0;if(e.forEach(function(l){nr(l)||(t+=l.pv_wh,n+=l.exp_wh,r+=l.imp_wh,i++)}),i===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var a=Math.max(0,t-n);return{prodSelf:a,prodFeedin:Math.max(0,n),consSelf:a,consImport:Math.max(0,r)}}var Dr=900,Gl=90;function rr(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function Wr(e){return e.friendlyName||e.name||e.id||"–"}function Ur(e){return e.friendlyName||e.name||e.id||"–"}function Kt(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function Zl(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function De(e){return e==null||isNaN(e)?null:Number(e)}function Xl(e,t){if(!e)return null;var n=Number(e.grid_w)||0,r=Number(e.pv_w)||0;t=t||[];var i=t.filter(function(a){return rr(a.state)==="waiting"});return n<0&&i.length>0?{key:"hint.shift_load"}:n>0&&r>0?{key:"hint.use_pv"}:null}function Qi(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function Ql(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function Br(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>Gl;)a.shift()}function Jl(e,t,n){for(var r=Qi(e,t,n),i=[],a=[],l=0;l<r.grid.length;l++){var s=r.grid[l].t,c=De(r.grid[l].y),f=De(r.pv[l].y)||0,d=De(r.bat[l].y)||0;c!==null&&(a.push({t:s,y:f+d}),i.push({t:s,y:f+d+c}))}return{cons:i,prod:a}}function rt(e){return u`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?u`<${fe} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function eo(e){var t=e.newest,n=e.win,r=e.power,i=e.vzevW,a=t?De(t.grid_w):null,l=t?De(t.pv_w)||0:null,s=t?De(t.bat_w)||0:null,c=t&&a!==null?l+s+a:null,f=t?l+s:null,d=t&&a!==null?Math.max(0,-a):null,p=t&&a!==null?Math.max(0,a):null,v=Jl(r,n[0],n[1]),h=v.cons,g=v.prod;return u`
      <${F} group="grid" title=${o("panel.grid")}>
        <div class="ov-stats">
          <${rt} color="var(--c-consumption)" label=${o("stat.consumption")}
            tooltip=${o("tooltip.consumption")} value=${x.w(c)} />
          <${rt} color="var(--c-production)" label=${o("stat.production")}
            value=${x.w(f)} />
          <${rt} color="var(--c-vzev)" label=${o("stat.export")}
            value=${x.w(d)} />
          <${rt} color="var(--c-import)" label=${o("stat.gridop")}
            tooltip=${o("tooltip.gridop")} value=${x.w(p)} />
          ${i!==null?u`
            <${rt} color="var(--c-vzev)"
              label=${i>=0?o("stat.vzev_import"):o("stat.vzev_export")}
              tooltip=${o("tooltip.vzev")} value=${x.w(Math.abs(i))} />`:null}
        </div>
        <${gt} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${x.w}
          bands=${[{top:g,bottom:h,color:"var(--c-vzev-fill)"},{top:h,bottom:g,color:"var(--c-import-fill)"}]}
          series=${[{points:h,color:"var(--c-consumption)",label:o("stat.consumption")},{points:g,color:"var(--c-production)",label:o("stat.production")}]} />
      <//>`}function to(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:u`
      <${F} group="production" title=${o("panel.production")}>
        ${e.notice?u`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${o("flow.prod_nodata")}</span>
            <button class="ov-hint-close" aria-label=${o("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=Zl(i),l=a?"var(--c-battery)":"var(--c-production)",s=Kt(i);return u`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Ur(i)}</span>
                  <span class="ov-sub-value" style=${"color:"+l}>${x.w(s)}</span>
                </div>
                <${gt} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${x.w}
                  series=${[{points:n[i.id]||[],color:l,label:a?o("stat.battery"):Ur(i)}]} />
              </div>`})}
        </div>
      <//>`}function no(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:u`
      <${F} group="loads" title=${o("panel.loads")} tooltip=${o("tooltip.loads")}>
        <div class="ov-subgrid">
          ${t.map(function(a){var l=rr(a.state),s=Kt(a),c=l==="inactive"?"waiting":"inactive",f=l==="inactive"?"action.request":"action.deactivate";return u`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Wr(a)}</span>
                  <${Pt} state=${l} />
                </div>
                <div class="ov-sub-meta">
                  <span>${x.w(s)} · ${o("stat.rated")}</span>
                  <span>${o("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${gt} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${x.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:Wr(a)}]} />
                <div class="ov-sub-act">
                  <${Y} small secondary=${c==="inactive"}
                    onClick=${function(){i(a.id,c)}}>${o(f)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}function ro(e){var t=e.members;return!e.enabled||!t||!t.length?null:u`
      <${F} group="vzev" title=${o("panel.vzev")} tooltip=${o("tooltip.vzev")}>
        <div class="ov-subgrid">
          ${t.map(function(n){var r=(n.net_wh||0)<0,i=n.points||[],a=i.length?[i[0].t,i[i.length-1].t+900]:null;return u`
              <div key=${n.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${n.name||n.id}</span>
                  <span class="ov-sub-value" style="color:var(--c-vzev)">
                    ${o(r?"stat.vzev_export":"stat.vzev_import")+" "+x.wh(Math.abs(n.net_wh||0))}
                  </span>
                </div>
                ${n.address?u`<div class="ov-sub-meta"><span>${n.address}</span></div>`:null}
                <${gt} height=${140} yUnit="Wh" xUnit="h" timeWindow=${a}
                  yFormat=${x.wh}
                  series=${[{points:i,color:"var(--c-vzev)",label:n.name||n.id}]} />
              </div>`})}
        </div>
      <//>`}function io(e){return e.hint?u`
      <div class="ov-hint" role="status">
        <svg class="ov-hint-icon" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
          <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
        </svg>
        <span class="ov-hint-text">${o(e.hint.key)}</span>
        <button class="ov-hint-close" aria-label=${o("common.close")}
          onClick=${e.onDismiss}>×</button>
      </div>`:null}var jr={pv:{color:"var(--c-production)",label:"flow.pv"},netz:{color:"var(--c-navy)",label:"flow.netz"},vzev:{color:"var(--c-vzev)",label:"flow.vzev"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"}},ao={pv:{x:66,y:62},netz:{x:374,y:62},haus:{x:220,y:142},vzev:{x:374,y:142}},fn={x:66,y:222},lo={x:374,y:222},Le=26;function oo(e){return e.from==="bat"||e.to==="bat"?"var(--c-battery)":e.to==="netz"||e.to==="vzev"?"var(--c-vzev)":e.from==="netz"?"var(--c-import)":e.from==="vzev"?"var(--c-vzev)":"var(--c-production)"}function so(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?u`
      <g transform=${i}>
        <circle cx="0" cy="0" r="4" ...${a} />
        <path ...${a} d="M6.2 0 L8.6 0 M4.38 4.38 L6.08 6.08 M0 6.2 L0 8.6 M-4.38 4.38 L-6.08 6.08 M-6.2 0 L-8.6 0 M-4.38 -4.38 L-6.08 -6.08 M0 -6.2 L0 -8.6 M4.38 -4.38 L6.08 -6.08" />
      </g>`:e==="haus"?u`
      <g transform=${i}>
        <path ...${a} d="M-7 0 L0 -7.5 L7 0 M-5 0 L-5 7.5 L5 7.5 L5 0 M-1.7 7.5 L-1.7 2.8 L1.7 2.8 L1.7 7.5" />
      </g>`:e==="netz"?u`
      <g transform=${i}>
        <path ...${a} d="M-5.5 8 L-1.8 -6 M5.5 8 L1.8 -6 M-1.8 -6 L1.8 -6 M-7.5 -4.6 L7.5 -4.6 M-4 0 L4 0 M-4 0 L3.4 5.6 M4 0 L-3.4 5.6 M-4.8 5.6 L4.8 5.6" />
      </g>`:e==="vzev"?u`
      <g transform=${i}>
        <path ...${a} d="M0 -6 L-6 5.5 M0 -6 L6 5.5 M-6 5.5 L6 5.5" />
        <circle cx="0" cy="-6" r="2.1" fill=${r} />
        <circle cx="-6" cy="5.5" r="2.1" fill=${r} />
        <circle cx="6" cy="5.5" r="2.1" fill=${r} />
      </g>`:e==="bat"?u`
      <g transform=${i}>
        <rect x="-8" y="-5" width="13.5" height="10" rx="1.8" ...${a} />
        <rect x="5.7" y="-2.4" width="2.3" height="4.8" rx="0.8" fill=${r} />
        <rect x="-5.9" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
        <rect x="-2.6" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
        <rect x="0.7" y="-2.6" width="2.1" height="5.2" rx="0.5" fill=${r} />
      </g>`:null}function uo(e){var t=e.newest,n=Wl(t,e.vzevW),r=!!e.hasBattery,i=e.vzevW!==null&&e.vzevW!==void 0,a=ze({side:"left",want:"left",count:0}),l=t?De(t.bat_w):null,s=l!==null&&l<0?"right":"left",c=a.current;s===c.side?(c.want=s,c.count=0):s===c.want?(c.count++,c.count>=2&&(c.side=s,c.count=0)):(c.want=s,c.count=1);var f=c.side;function d(b){return b==="bat"?r:b==="vzev"?i:!0}function p(b){return b==="bat"?f==="right"?lo:fn:ao[b]}var v=n.filter(function(b){return d(b.from)&&d(b.to)}),h=0;v.forEach(function(b){b.state==="ok"&&b.watts>h&&(h=b.watts)});function g(b){return h<=0?2.4:2.4+Math.min(1,b/h)*2.6}var $=Ul(n),m=Bl(n);return u`
      <${F} group="grid" title=${o("flow.title")} tooltip=${o("tooltip.flow")}>
        ${$?u`
          <p class="flow-status">${o($,{w:x.w(m)})}</p>`:null}
        <div class="flow-wrap">
          <svg class="flow-svg" viewBox="0 0 440 284" role="img"
            aria-label=${o("flow.aria")} preserveAspectRatio="xMidYMid meet">
            <g>
              ${v.map(function(b,y){var k=p(b.from),z=p(b.to);if(!k||!z)return null;var w=z.x-k.x,S=z.y-k.y,U=Math.sqrt(w*w+S*S)||1,T=w/U,A=S/U,M=k.x+T*Le,N=k.y+A*Le,I=z.x-T*Le,j=z.y-A*Le,R=b.state==="unknown",_=b.state==="zero",E=R?"var(--c-line)":oo(b),D=R?5.5:7.5,W=I-T*(D+1.6),ce=j-A*(D+1.6),ue=_?2:g(b.watts),V=((M+I)/2).toFixed(1),ee=((N+j)/2-7).toFixed(1);return u`
                  <g key=${"e"+y} opacity=${_?"0.32":"1"}>
                    <line class="flow-track" x1=${M.toFixed(1)} y1=${N.toFixed(1)}
                      x2=${W.toFixed(1)} y2=${ce.toFixed(1)}
                      stroke=${E} stroke-width=${ue.toFixed(1)} stroke-linecap="round" />
                    ${b.state==="ok"?u`
                      <line class="flow-particles" x1=${M.toFixed(1)} y1=${N.toFixed(1)}
                        x2=${W.toFixed(1)} y2=${ce.toFixed(1)} stroke=${E} stroke-linecap="round" />`:R?u`
                      <line class="flow-edge-unknown" x1=${M.toFixed(1)} y1=${N.toFixed(1)}
                        x2=${W.toFixed(1)} y2=${ce.toFixed(1)} stroke=${E} stroke-width="1.6"
                        stroke-linecap="round" />`:null}
                    ${co(I,j,T,A,E,D,_?.5:1)}
                    ${R?u`
                      <text x=${V} y=${ee} text-anchor="middle"
                        class="flow-label-txt flow-label-nodata">–</text>`:_?null:u`
                      <text x=${V} y=${ee} text-anchor="middle"
                        class="flow-label-txt">${x.w(b.watts)}</text>`}
                  </g>`})}
              ${Object.keys(jr).filter(d).map(function(b){var y=jr[b],k=p(b),z=b==="bat",w=z?fn.x:k.x;return u`
                  <g key=${"n"+b} class=${z?"flow-node-move":null}
                    style=${z?"transform: translate("+(k.x-fn.x)+"px, 0)":null}>
                    <circle cx=${w} cy=${k.y} r=${Le} fill=${y.color} opacity="0.12" />
                    <circle cx=${w} cy=${k.y} r=${Le} fill="none"
                      stroke=${y.color} stroke-width="2.4" />
                    ${so(b,w,k.y,y.color)}
                    <text x=${w} y=${k.y+Le+16} text-anchor="middle"
                      class="flow-node-txt">${o(y.label)}</text>
                  </g>`})}
            </g>
          </svg>
        </div>
        ${i?u`<p class="flow-note">${o("flow.vzev_mean_note")}</p>`:null}
        <${fo} sample=${t} vzevW=${e.vzevW} records=${e.records} />
      <//>`}function co(e,t,n,r,i,a,l){var s=a,c=e-n*s,f=t-r*s,d=-r,p=n,v=s*.6,h=e.toFixed(1)+","+t.toFixed(1)+" "+(c+d*v).toFixed(1)+","+(f+p*v).toFixed(1)+" "+(c-d*v).toFixed(1)+","+(f-p*v).toFixed(1);return u`<polygon points=${h} fill=${i} opacity=${l===void 0?1:l} />`}function Hr(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return u`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?u`<${fe} text=${e.note} />`:null}
        </div>
        ${r?u`
          <div class="comp-bar comp-bar-nodata">${e.unknown?o("flow.comp_nodata"):o("flow.comp_zero")}</div>`:u`
          <div class="comp-bar">
            ${t.map(function(i,a){var l=i.value/n*100;return u`<div key=${a} class="comp-seg"
                title=${o(i.key)+": "+e.fmt(i.value)}
                style=${"width:"+l.toFixed(2)+"%;background:"+i.color}></div>`})}
          </div>
          <div class="comp-legend">
            ${t.map(function(i,a){return u`
                <span key=${a} class="comp-leg">
                  <span class="comp-leg-dot" style=${"background:"+i.color}></span>
                  ${o(i.key)} · ${e.fmt(i.value)}
                </span>`})}
          </div>`}
      </div>`}function fo(e){var t=C("now"),n=t[0],r=t[1],i=n==="now"?Vl(e.sample,e.vzevW):Kl(e.records),a=n==="now"?x.w:x.wh,l=n==="today"?o("flow.comp_batt_note"):null;return u`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${o("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${o("flow.comp_today")}</button>
        </div>
        <${Hr} title=${o("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} />
        <${Hr} title=${o("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${l} />
      </div>`}function Ji(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return u`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?u`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function vo(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?o("kpi.incomplete"):null;function r(d){return d==null?"–":Math.round(d*100)+" %"}var i=t.savingParts,a=i?[o("kpi.saving_selfuse")+": "+x.chf(i.selfuse,!0),o("kpi.saving_feedin")+": "+x.chf(i.feedin,!0),i.vzev!==null&&i.vzev!==void 0?o("kpi.saving_vzev")+": "+x.chf(i.vzev,!0):null].filter(Boolean).join(`
`):o("tooltip.kpi_saving"),l=t.autarkyVzev!==null&&t.autarkyVzev!==void 0?o("kpi.autarky_vzev")+": "+r(t.autarkyVzev):null,s=!!e.showSaving,c=s?u`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":x.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${o("kpi.saving")}<${fe} text=${n||a} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:u`
        <div class="kpi-hero">
          <${Ji} big ratio=${t.autarky} color="var(--c-vzev)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${o("kpi.autarky")}<${fe} text=${n||o("tooltip.kpi_autarky")} /></span>
            ${l?u`<span class="kpi-sub">${l}</span>`:null}
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,f=[];return s&&f.push(u`<${vn} key="au" gauge ratio=${t.autarky} color="var(--c-vzev)"
        label=${o("kpi.autarky")} tip=${n||o("tooltip.kpi_autarky")} sub=${l} />`),f.push(u`<${vn} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${o("kpi.selfuse")} tip=${n||o("tooltip.kpi_selfuse")} />`),e.showCo2&&f.push(u`<${vn} key="co" value=${ho(t.co2Kg)} color="var(--c-production)"
        label=${o("kpi.co2")} tip=${n||o("tooltip.kpi_co2",{g:e.co2Factor})} />`),u`
      <div class="kpi-band">
        ${c}
        <div class="kpi-support">${f}</div>
      </div>`}function vn(e){return u`
      <div class="kpi-tile">
        ${e.gauge?u`<${Ji} ratio=${e.ratio} color=${e.color} />`:u`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${fe} text=${e.tip} /></span>
          ${e.sub?u`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function po(){return u`
      <div class="ov-skel">
        <span class="sr-only" role="status">${o("common.loading")}</span>
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
      </div>`}function ho(e){return e==null||isNaN(e)?"–":e>=1e3?x.num(e/1e3,2)+" t":x.num(e,e<10?2:1)+" kg"}function go(){var e=C(null),t=e[0],n=e[1],r=C(null),i=r[0],a=r[1],l=C([]),s=l[0],c=l[1],f=C([]),d=f[0],p=f[1],v=C([]),h=v[0],g=v[1],$=C(!1),m=$[0],b=$[1],y=C(null),k=y[0],z=y[1],w=C(null),S=w[0],U=w[1],T=C(function(){return Math.floor(Date.now()/1e3)}),A=T[0],M=T[1],N=C(null),I=N[0],j=N[1],R=C({}),_=R[0],E=R[1],D=C(!1),W=D[0],ce=D[1],ue=ze({}),V=ze({}),ee=A,ge=ee-Dr,de=[ge,ee];Z(function(){L.getSite().then(function(B){n(B)}).catch(function(){}),L.getMeta().then(function(B){U(B)}).catch(function(){})},[]),Z(function(){return L.poll(function(){L.getEnergy("15m",96).then(function(B){if(Array.isArray(B)){var _e=Gi();if(!_e.available||!_e.siteId||!B.length){z(B);return}Jn(_e.siteId,B[0].ts,B[B.length-1].ts).then(function(be){z(be&&be.self_id?Fi(B,be):B)},function(){z(B)})}}).catch(function(){})},6e4)},[]),Z(function(){if(L.getVzevMembers)return L.poll(function(){L.getVzevMembers().then(function(B){Array.isArray(B)&&g(B)}).catch(function(){})},1e4)},[]),Z(function(){var B=L.onVzevInfo(function(_e){b(!!(_e&&_e.enabled))});return L.getVzevInfo().catch(function(){}),B},[]),Z(function(){return L.poll(function(){var B=Math.floor(Date.now()/1e3);M(B);var _e=B-Dr;Promise.all([L.getPower().catch(function(){return null}),L.getLoads().catch(function(){return null}),L.getProductions().catch(function(){return null})]).then(function(be){var rn=be[0],Qe=be[1],Je=be[2];rn&&a(rn),Qe&&c(Qe),Je&&p(Je),(rn||Qe||Je)&&j(B),ce(!0),Je&&Je.forEach(function(He){Br(ue.current,He.id,B,Kt(He),_e)}),Qe&&Qe.forEach(function(He){var ma=rr(He.state)==="active"?Kt(He):0;Br(V.current,He.id,B,ma,_e)})})},1e4)},[]);var P=Ql(i),K=Qi(i,ge,ee),G=jl(h),re=Xl(P,s),je=re&&!_[re.key]?re:null,O=!!(d&&d.length&&ql(K.pv.map(function(B){return B.y}))&&!_["flow.prod_nodata"]);function oe(){var B=Object.assign({},_);B["flow.prod_nodata"]=!0,E(B)}var ie=new Date;ie.setHours(0,0,0,0);var se=Math.floor(ie.getTime()/1e3),Ae=(k||[]).filter(function(B){return B.ts>=se}),$t=!!(h&&h.length),$e=S&&S.tariffs||{},Ee=$e.co2_g_kwh===void 0||$e.co2_g_kwh===null||$e.co2_g_kwh===""?128:Number($e.co2_g_kwh),_t=Tn(Ae,{tariffs:$e,vzev:$t,co2:Ee}),yt=Number($e.grid_import_chf_kwh)>0||Number($e.grid_feedin_chf_kwh)>0,bt=Ee>0,tn=Ae.some(function(B){return B.partial}),nn=tn?o("kpi.today_until",{time:x.time(A,"hm")}):o("kpi.today"),wt=(d||[]).some(function(B){return String(B.productionType||"").toUpperCase()==="BATTERY"}),da=t&&t.location?t.location:null,pa=I?u`
      <span class="ov-updated">${o("common.stale",{time:x.time(I,"hm")})}</span>`:null;function ha(B,_e){L.setLoadState(B,_e).then(function(){return L.getLoads()}).then(function(be){be&&c(be)}).catch(function(){X(o("error.toggle"),{type:"error"})})}function ga(){if(re){var B=Object.assign({},_);B[re.key]=!0,E(B)}}return u`
      <div>
        <${Oe} title=${t&&t.name?t.name:o("page.overview")}
          subtitle=${da} actions=${pa} />
        ${W?u`
          <${ht}>
            <${io} hint=${je} onDismiss=${ga} />
            <${uo} newest=${P} vzevW=${G} hasBattery=${wt} records=${Ae} />
            <${vo} kpis=${_t} period=${nn} showSaving=${yt}
              showCo2=${bt} co2Factor=${Ee} />
            <${eo} newest=${P} win=${de} vzevW=${G} power=${i} />
            <${to} productions=${d} history=${ue.current} win=${de}
              notice=${O} onDismissNotice=${oe} />
            <${no} loads=${s} history=${V.current} win=${de} onToggle=${ha} />
            <${ro} members=${h} win=${de} enabled=${m} />
          <//>`:u`<${po} />`}
      </div>`}var mo=[10,25,50],St=2880,Me={"15m":{label:"history.res.15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",count:St,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",count:St,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",count:St,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",count:St,target:"1q",tk:"q",slot:7776e3}},$o=["15m","1h","1d","1w","1mo","1q"],dn={"15m":240*900,"1h":240*900,"1d":125*86400,"1w":125*86400,"1mo":589*86400,"1q":589*86400},_o={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},Te={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function yo(e){return e==null?null:e/1e3}function bo(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-Me[t].slot}function wo(e,t){if(!e.length)return[];var n=_o[t]||e.length,r={};e.forEach(function(c){r[c.ts]=c});for(var i=e[e.length-1].ts,a=[],l=e[0].ts,s=0;s<n&&l>=i;s++)a.push(r[l]||{ts:l,__blank:!0}),l=bo(l,t);return a}function pn(e,t){var n=yo(e);return n===null?"–":x.num(n,2)}function ko(e){if(e==null)return u`<span>–</span>`;var t=e>0?"val-pos":e<0?"val-neg":"";return u`<span class=${t}>${x.chf(e,!0)}</span>`}function it(e,t){return e==null?u`<span>–</span>`:u`<span class=${t||""}>${x.chf(e,!1)}</span>`}function xo(e,t,n){var r=[{key:"ts",label:o("history.col.time")},{key:"imp",label:o("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(r.push({key:"impcost_ht",label:o("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),r.push({key:"impcost_nt",label:o("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):r.push({key:"impcost",label:o("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&r.push({key:"exp",label:o("history.col.feedin"),unit:"[kWh]",align:"right"}),r.push({key:"vzev",label:o(e?"history.col.vzevexport":"history.col.vzevimport"),unit:"[kWh]",align:"right"}),r.push({key:"saldo",label:o("history.col.vzevsaldo"),unit:"[CHF]",align:"right"}),e&&(r.push({key:"saving",label:o("history.col.selfuse"),unit:"[CHF]",align:"right"}),r.push({key:"autarky",label:o("history.col.autarky"),unit:"[%]",align:"right"}),r.push({key:"selfuserate",label:o("history.col.selfuserate"),unit:"[%]",align:"right"}),r.push({key:"ersparnis",label:o("history.col.ersparnis"),unit:"[CHF]",align:"right"})),r}function Vr(e){return e==null?"–":x.num(e*100,0)+" %"}function ir(e){var t=e.revenue_vzev_chf,n=e.cost_vzev_chf;return t===null&&n===null?null:(t||0)-(n||0)}function zo(e,t,n){for(var r=Me[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var l=e[a+1];if(l){var s=Math.round((e[a].ts-l.ts)/r)-1;s>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function Co(e){var t=e.coverage;if(!t||t.firstE15Ts===null)return null;var n=Math.floor(Date.now()/1e3)-e.span,r=(t.gaps||[]).filter(function(i){return i[1]>=n});return u`
      <p class="verlauf-archive-note">
        <span class="badge badge-inactive">${o("history.archive_badge",{days:t.days})}</span>
        ${r.length?u`
          <span class="verlauf-archive-gap">
            ${o("history.archive_gap",{from:x.time(r[0][0],"1d"),to:x.time(r[r.length-1][1],"1d"),count:r.length})}
          </span>`:null}
      </p>`}function So(){var e=C(Te.res),t=e[0],n=e[1],r=C(0),i=r[0],a=r[1],l=C(Te.pageSize),s=l[0],c=l[1],f=C(Te.chfMode),d=f[0],p=f[1],v=C(Te.chartMode),h=v[0],g=v[1],$=C({records:null,tariffs:{},producer:!1,err:!1,archived:!1,coverage:null}),m=$[0],b=$[1],y=C(!0),k=y[0],z=y[1];Te.res=t,Te.pageSize=s,Te.chfMode=d,Te.chartMode=h,Z(function(){var O=!1;z(!0);var oe=Me[t];return en().then(function(ie){var se=!!(ie.available&&ie.siteId),Ae=Math.floor(Date.now()/1e3),$t=Ae-dn[t];return Promise.all([se?Cl(ie.siteId,$t,Ae).catch(function(){return null}):L.getEnergy("15m",oe.count).catch(function(){return null}),L.getMeta().catch(function(){return null}),L.getProductions().catch(function(){return null}),se?Jn(ie.siteId,$t,Ae).catch(function(){return null}):Promise.resolve(null)]).then(function($e){if(!O){var Ee=$e[0],_t=$e[1],yt=$e[2],bt=$e[3];if(Ee===null){b({records:null,tariffs:{},producer:!1,err:!0,archived:!1,coverage:null}),z(!1);return}bt&&(Ee=Fi(Ee,bt));var tn=_t&&_t.tariffs||{},nn=Array.isArray(yt)&&yt.some(function(wt){return wt&&wt.productionType==="PHOTOVOLTAIC"});b({records:Ee,tariffs:tn,producer:nn,err:!1,archived:se,coverage:ie.coverage||null}),z(!1)}})}),function(){O=!0}},[t]);var w=Qt(m.tariffs),S=Re(function(){if(!m.records)return[];var O=m.records;w&&(O=m.records.map(function(ie){return Oi(ie,m.tariffs)}));var oe=kr(O,"15m",Me[t].target,m.tariffs);return oe.slice().sort(function(ie,se){return se.ts-ie.ts})},[m.records,m.tariffs,t,w]),U=Re(function(){if(t!=="15m"||!m.records)return{};var O=kr(m.records,"15m","15m",m.tariffs),oe=el(O,3),ie={};return oe.forEach(function(se){ie[O[se].ts]=!0}),ie},[m.records,m.tariffs,t]),T=S.some(function(O){return(O.exp_wh||0)>0}),A=xo(m.producer,T,w),M=S.some(function(O){return(O.vzev_in_wh||0)>0||(O.vzev_out_wh||0)>0}),N=m.tariffs.co2_g_kwh===void 0||m.tariffs.co2_g_kwh===null||m.tariffs.co2_g_kwh===""?128:Number(m.tariffs.co2_g_kwh),I={tariffs:m.tariffs,vzev:M,co2:N},j=Number(m.tariffs.grid_import_chf_kwh)>0||Number(m.tariffs.grid_feedin_chf_kwh)>0,R=Re(function(){var O={};return S.forEach(function(oe){O[oe.ts]=Tn([oe],I)}),O},[S,m.tariffs,M,N]),_=Re(function(){return Tn(S,I)},[S,m.tariffs,M,N]),E=m.archived?!(m.coverage&&m.coverage.firstE15Ts!==null&&m.coverage.firstE15Ts>Math.floor(Date.now()/1e3)-dn[t]):m.records?m.records.length<Me[t].count:!0,D=zo(S,t,E),W=S.length;D.filter(function(O){return O.kind==="row"});var ce=Math.max(1,Math.ceil(W/s)),ue=Math.min(i,ce-1),V=ue*s,ee=Math.min(V+s,W),ge=Mo(D,V,ee);function de(O){n(O),a(0)}function P(O){c(+O),a(0)}function K(){var O=A.map(function(se){return se.label+(se.unit?" "+se.unit:"")}),oe=S.map(function(se){return No(se,A,t,m.producer,R[se.ts])}),ie=Gn(O,oe);Lo(ml(t),ie)}var G=Re(function(){return Po(wo(S,t),h,d,m.producer)},[S,h,d,m.producer,t]),re=Re(function(){return Oo(S,t,m.producer)},[S,t,m.producer]),je=u`
      <div class="verlauf-actions">
        <${Xt} label=${o("history.resolution")} value=${t}
          onChange=${de}
          options=${$o.map(function(O){return{value:O,label:o(Me[O].label)}})} />
        <${Y} secondary onClick=${K} disabled=${W===0}>
          ${o("history.export")}<//>
      </div>`;return u`
      <div>
        <${Oe} title=${o("page.history")} subtitle=${o("history.subtitle")}
          actions=${je} />

        ${m.archived?u`<${Co} coverage=${m.coverage}
          span=${dn[t]} />`:null}

        ${m.err?u`
          <${F}><p class="placeholder-text">${o("common.nodata")}</p><//>`:null}

        ${!m.err&&k?u`
          <${F}><p class="placeholder-text">${o("common.loading")}</p><//>`:null}

        ${!m.err&&!k?u`
          <div>
            ${S.length?u`<${Fo} summary=${re} kpis=${_} showSaving=${j} />`:null}

            <${F} group="vzev" title=${o("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${o("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(O){return u`<button key=${O[0]} type="button" role="tab"
                      class=${"seg-btn"+(h===O[0]?" seg-btn-active":"")}
                      aria-selected=${h===O[0]}
                      onClick=${function(){g(O[0])}}>${o(O[1])}</button>`})}
                </div>
                ${h==="net"?u`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${d}
                      onChange=${function(O){p(O.target.checked)}} />
                    <span>${o("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${G.points.length?u`
                <${Wn} height=${220}
                  yUnit=${G.yUnit} xUnit=${o("history.chart.xunit")}
                  yFormat=${G.yFormat}
                  xTickFormat=${function(O){return Io(t,O)}}
                  points=${G.points} />
                <div class="chart-legend">
                  ${G.legend.map(function(O,oe){return u`<span key=${oe} class="legend-item"><span class="legend-swatch" style=${"background:"+O.color}></span>${O.label}</span>`})}
                </div>`:u`<p class="placeholder-text">${o("common.nodata")}</p>`}
            <//>

            <${F} title=${o("history.table.title")}>
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${A.map(function(O){return u`<th key=${O.key} class=${O.align==="right"?"ta-r":""}>
                          ${O.label}${O.unit?u`<span class="th-unit"> ${O.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${W===0?u`
                      <tr><td class="table-empty" colspan=${A.length}>${o("common.nodata")}</td></tr>`:ge.map(function(O){return Eo(O,A,t,U,m.producer,R)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${o("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${s}
                        onChange=${function(O){P(O.target.value)}}>
                        ${mo.map(function(O){return u`<option key=${O} value=${O}>${O}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${o("table.pageinfo",{from:W===0?0:V+1,to:ee,total:W})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${o("table.prev")}
                      disabled=${ue===0} onClick=${function(){a(ue-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${o("table.next")}
                      disabled=${ue>=ce-1} onClick=${function(){a(ue+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${o("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function Mo(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var l=e[a];if(l.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(l)}else i>=t&&i<n&&r.push(l)}return r}function Eo(e,t,n,r,i,a){if(e.kind==="boundary")return u`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${o("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return u`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${o("history.gap")}</td></tr>`;var l=e.rec,s=!!r[l.ts],c=a&&a[l.ts]||null;return u`
      <tr key=${"r"+l.ts}>
        ${t.map(function(f){return u`<td key=${f.key} class=${f.align==="right"?"ta-r":""}>
            ${To(f.key,l,n,s,i,c)}
          </td>`})}
      </tr>`}function To(e,t,n,r,i,a){switch(e){case"ts":return u`<span class="verlauf-ts">
          ${x.time(t.ts,Me[n].tk)}
          ${r?u`<span class="peak-mark" title=${o("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?u`<${fe} text=${o("history.partial")} />`:null}
        </span>`;case"imp":return pn(t.imp_wh);case"impcost":return it(t.cost_import_chf,"val-neg");case"impcost_ht":return it(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return it(t.cost_import_nt_chf,"val-neg");case"exp":return pn(t.exp_wh);case"vzev":return pn(ar(t,i));case"saldo":return ko(ir(t));case"saving":return it(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return Vr(a&&a.autarky);case"selfuserate":return Vr(a&&a.selfuse);case"ersparnis":return it(a&&a.savingChf,a&&a.savingChf>0?"val-pos":"");default:return""}}function ar(e,t){return(t?e.vzev_out_wh:e.vzev_in_wh)||0}function No(e,t,n,r,i){return t.map(function(a){switch(a.key){case"ts":return x.time(e.ts,Me[n].tk);case"imp":return hn(e.imp_wh);case"impcost":return Ke(e.cost_import_chf);case"impcost_ht":return Ke(e.cost_import_ht_chf);case"impcost_nt":return Ke(e.cost_import_nt_chf);case"exp":return hn(e.exp_wh);case"vzev":return hn(ar(e,r));case"saldo":return Ke(ir(e));case"saving":return Ke(e.saving_selfuse_chf);case"autarky":return Kr(i&&i.autarky);case"selfuserate":return Kr(i&&i.selfuse);case"ersparnis":return Ke(i&&i.savingChf);default:return""}})}function Kr(e){return e==null?"":(e*100).toFixed(0)}function hn(e){return e==null?"":(e/1e3).toFixed(2)}function Ke(e){return e==null?"":Number(e).toFixed(2)}function Io(e,t){switch(e){case"15m":case"1h":return x.time(t,"hm");case"1d":case"1w":return x.time(t,"dm");case"1mo":return x.time(t,"1mo");case"1q":return x.time(t,"q");default:return x.time(t,Me[e].tk)}}function Po(e,t,n,r){var i=e.slice().sort(function(v,h){return v.ts-h.ts}),a=function(v){return x.num(v,2)},l=function(v){return v==null?0:v/1e3};if(t==="bilanz"){var s="var(--c-production)",c="var(--c-vzev)",f="var(--c-import)",d=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var h=Yl([{pv_wh:v.pv_wh||0,exp_wh:v.exp_wh||0,imp_wh:v.imp_wh||0}]);return{t:v.ts,bars:[{segments:[{value:l(h.prodSelf),color:s,label:o("history.bilanz.selfuse")},{value:l(h.prodFeedin),color:c,label:o("history.bilanz.feedin")}]},{segments:[{value:l(h.consSelf),color:s,label:o("history.bilanz.covered")},{value:l(h.consImport),color:f,label:o("history.bilanz.import")}]}]}});return{points:d,yUnit:"kWh",yFormat:a,legend:[{color:s,label:o("history.bilanz.selfuse")},{color:c,label:o("history.bilanz.feedin")},{color:f,label:o("history.bilanz.import")}]}}var p;return n?p=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var h=ir(v);return{t:v.ts,y:h===null?null:h,color:(h||0)<0?"var(--c-import)":"var(--c-vzev)"}}):p=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var h=v.imp_wh===null||v.imp_wh===void 0?null:v.imp_wh/1e3;if(h&&h>0)return{t:v.ts,y:h,color:"var(--c-import)"};var g=ar(v,r),$=g==null?null:g/1e3;return $&&$>0?{t:v.ts,y:-$,color:"var(--c-vzev)"}:{t:v.ts,y:h===null?null:0,color:"var(--c-import)"}}),{points:p,yUnit:n?"CHF":"kWh",yFormat:n?function(v){return x.chf(v,!0)}:a,legend:[{color:"var(--c-import)",label:o("history.chart.legend_import")},{color:"var(--c-vzev)",label:o(n?"history.chart.legend_saldo":"history.chart.legend_export")}]}}function Oo(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(d,p){return d.ts-p.ts}),l=function(d){return a.map(function(p){return p[d]===null||p[d]===void 0?null:p[d]/1e3})},s=i&&e.length>=13,c=function(d,p){var v=l(p);return{name:d,avg:xn(v),trend:Qa(v),yoy:s?Ja(v):null}},f=[c(o("history.col.gridimport"),"imp_wh")];return n&&f.push(c(o("history.summary.pv"),"pv_wh")),{periodLabel:o(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:f}}function Ao(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return u`
      <div class="summary-cell">
        <span class="summary-label">${o("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":x.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function Fo(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":x.num(i*100,0)+" %"}return u`
      <div class="summary-strip">
        ${n?u`
          <div class="summary-cell">
            <span class="summary-label">${o("kpi.autarky")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.autarky)}</span>
          </div>
          <div class="summary-cell">
            <span class="summary-label">${o("kpi.selfuse")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.selfuse)}</span>
          </div>
          ${e.showSaving?u`
            <div class="summary-cell">
              <span class="summary-label">${o("kpi.saving")}</span>
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":x.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return u`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":x.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${Ao(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?u`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${o("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+x.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function Lo(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function Ro(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const Do=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],Wo=(function(){const e={};return Do.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function Uo(e){const t=Wo[Ro(e)];return t===void 0?null:t}function Bo(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function ea(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function jo(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function Ho(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function Vo(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function Ko(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function qr(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var qo=1e4,Yo=90;function Nn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function Yr(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:Uo(t)}})}function ta(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function xe(e,t){var n=ta(e,t);return n?Nn(n.raw):null}function Ye(e){return function(t){return t.i18nKey===e}}function na(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function Gr(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function ra(e,t,n){var r=xe(e,na(t,n));return r!==null?r:ea(xe(e,Gr(t,n,"in")),xe(e,Gr(t,n,"out")))}function Go(e,t){var n=null;return[1,2,3].forEach(function(r){var i=ra(e,t,r);i!==null&&(n=(n||0)+i)}),n}function lr(e){var t=Go(e,"power"),n=xe(e,Ye("meter.f.power_net")),r=!1;if(n===null){var i=xe(e,Ye("meter.f.power_import")),a=xe(e,Ye("meter.f.power_export"));n=ea(i,a),n!==null&&(r=!0)}var l=jo(n,t);return n!==null?{net:n*l,derived:r,scale:l}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function Zr(e){return u`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${fe} text=${e.tip} />
      </span>`}function Zo(){return u`<span class="meter-tag meter-tag-derived">${o("meter.derived")}</span>`}function Xo(){return u`
      <span class="meter-tag meter-tag-register">${o("meter.register")}
        <${fe} text=${o("meter.tip.register")} /></span>`}function ia(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-vzev)":""}function Qo(e){var t=e.resolved,n=lr(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,l=o(a?"meter.importing":"meter.exporting");return u`
      <${F} group="grid" title=${o("meter.section.power")}
        tooltip=${o("meter.tip.net")}
        badge=${i?Zo():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+ia(r)}>
            ${x.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${l}</span>
        </div>
      <//>`}var Jo=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function es(e){var t=e.resolved,n=[1,2,3],r=Jo.map(function(d){var p=n.map(function(h){return ra(t,d.role,h)}),v=p.some(function(h){return h!==null});return{m:d,cells:p,any:v}}).filter(function(d){return d.any});if(r.length===0)return null;var i=r.filter(function(d){return d.m.role==="power"})[0],a=i?Bo(i.cells):null,l=null,s=r.filter(function(d){return d.m.role==="pf"})[0];if(i&&!s){var c=r.filter(function(d){return d.m.role==="reactive"})[0];if(c){var f=n.map(function(d,p){return Ho(i.cells[p],c.cells[p])});f.some(function(d){return d!==null})&&(l=f)}}return u`
      <${F} title=${o("meter.section.phases")} tooltip=${o("meter.tip.phases")}>
        <div class="meter-table-wrap">
          <table class="meter-table">
            <thead>
              <tr>
                <th class="meter-th-metric"></th>
                <th>${o("meter.phase",{n:1})}</th>
                <th>${o("meter.phase",{n:2})}</th>
                <th>${o("meter.phase",{n:3})}</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(function(d){return u`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${o(d.m.key)}
                      ${d.m.unit?u`<span class="meter-unit">[${d.m.unit}]</span>`:null}
                      ${d.m.tip?u`<${fe} text=${o(d.m.tip)} />`:null}
                    </th>
                    ${d.cells.map(function(p){var v=d.m.signed?ia(p):"";return u`<td style=${v?"color:"+v:""}>
                        ${p===null?"–":x.num(p,d.m.prec)}</td>`})}
                  </tr>`})}
              ${l?u`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${Zr} tip=${o("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${l.map(function(d){return u`<td>${d===null?"–":x.num(d,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?u`
          <div class="meter-imbalance">
            <${Zr} tip=${o("meter.tip.imbalance")}>${o("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${x.w(a)}</span>
          </div>`:null}
      <//>`}function ts(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=ta(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?Nn(r.raw):null;return u`
      <${F} group="production" title=${o("meter.section.registers")}
        tooltip=${o("meter.tip.registers")}
        badge=${r&&(i===1||i===2)?u`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${o("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${o(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?u`
          <dl class="meter-reg-list">
            ${n.map(function(a){var l=Nn(a.raw);return u`
                <div class="meter-reg">
                  <dt>${o(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${Xo()}</dt>
                  <dd>${l===null?String(a.raw):x.num(l,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function ns(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?x.num(i.min,1)+" / "+x.num(i.max,1):"–"}return u`
      <${F} title=${o("meter.section.minmax")} subtitle=${o("meter.since_open")}
        tooltip=${o("meter.tip.minmax")}>
        <dl class="meter-reg-list">
          ${[1,2,3].map(function(i){return t.u[i]?u`
              <div class="meter-reg">
                <dt>${o("meter.voltage")} ${o("meter.phase",{n:i})} <span class="meter-unit">[V]</span></dt>
                <dd>${r(t.u[i])}</dd>
              </div>`:null})}
          ${t.peakImp?u`
            <div class="meter-reg">
              <dt>${o("meter.peak_import")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-import)"}>${x.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?u`
            <div class="meter-reg">
              <dt>${o("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-vzev)"}>${x.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function rs(e){var t=e.resolved,n=C(!1),r=n[0],i=n[1],a=lr(t).scale;function l(d){return a===1e3&&d.group==="power"&&d.unit==="W"?"kW":d.unit}var s=t.filter(function(d){return d.desc}),c=t.filter(function(d){return!d.desc});function f(d){var p=!!d.desc,v=d.raw!==null&&typeof d.raw=="object"?JSON.stringify(d.raw):String(d.raw);return u`
        <tr>
          <td class="meter-raw-name">${d.name}</td>
          <td class="meter-raw-val">${v}</td>
          <td class="meter-raw-unit">${p&&d.desc.unit?l(d.desc):""}</td>
          <td class="meter-raw-label">${o(p?d.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return u`
      <${F} title=${o("meter.section.raw")}>
        <button class="meter-raw-toggle" aria-expanded=${r}
          onClick=${function(){i(!r)}}>
          ${o(r?"meter.raw_hide":"meter.raw_show")}
        </button>
        ${r?u`
          <div class="meter-table-wrap">
            <table class="meter-table meter-raw-table">
              <thead>
                <tr>
                  <th>${o("meter.raw.field")}</th>
                  <th>${o("meter.raw.value")}</th>
                  <th>${o("meter.raw.unit")}</th>
                  <th>${o("meter.raw.meaning")}</th>
                </tr>
              </thead>
              <tbody>
                ${s.map(f)}
                ${c.length?u`
                  <tr class="meter-raw-sep"><td colspan="4">${o("meter.raw.other")}</td></tr>
                  ${c.map(f)}`:null}
              </tbody>
            </table>
          </div>`:null}
      <//>`}function is(){var e=C(void 0),t=e[0],n=e[1],r=C(null),i=r[0],a=r[1],l=C(!1),s=l[0],c=l[1],f=C(null),d=f[0],p=f[1],v=ze([]),h=ze({u:{},peakImp:0,peakExp:0});Z(function(){return L.poll(function(){L.getMeter().then(function(m){if(n(m&&m.values?m.values:null),p(m&&typeof m.now=="number"?m.now:Math.floor(Date.now()/1e3)),!(!m||!m.values)){var b=Yr(m.values),y=h.current;[1,2,3].forEach(function(M){var N=xe(b,na("voltage",M));N!==null&&(y.u[M]=Ko(y.u[M],N))});var k=lr(b),z=k.net,w=xe(b,Ye("meter.f.power_import")),S=xe(b,Ye("meter.f.power_export"));w!==null&&(w=w*k.scale),S!==null&&(S=S*k.scale),w===null&&z!==null&&(w=z>0?z:0),S===null&&z!==null&&(S=z<0?-z:0),w!==null&&(y.peakImp=qr(y.peakImp,w)),S!==null&&(y.peakExp=qr(y.peakExp,S)),a({u:Object.assign({},y.u),peakImp:y.peakImp,peakExp:y.peakExp});var U=xe(b,Ye("meter.f.energy_import")),T=z!==null?z>0:w!==null&&w>0,A=v.current;for(A.push({reg:U,importing:T});A.length>Yo;)A.shift();c(Vo(A))}}).catch(function(){})},qo)},[]);var g=t?Yr(t):[],$=d?Math.max(0,Math.floor(Date.now()/1e3)-d):null;return u`
      <div>
        <${Oe} title=${o("page.meter")} subtitle=${o("meter.subtitle")}
          actions=${d?u`
            <span class="meter-updated">
              ${o("meter.updated",{time:x.time(d,"hm")})}
              ${$!==null?u`<span class="meter-age"> · ${o("meter.age",{s:$})}</span>`:null}
            </span>`:null} />

        ${s?u`<div class="banner banner-warn">${o("meter.stale")}</div>`:null}

        ${t===void 0?u`<${F}><p class="placeholder-text">${o("common.loading")}</p><//>`:null}
        ${t===null?u`<${F}><p class="placeholder-text">${o("meter.empty")}</p><//>`:null}
        ${t?u`
          <${Qo} resolved=${g} />
          <${es} resolved=${g} />
          <${ts} resolved=${g} />
          <${ns} stats=${i} />
          <${rs} resolved=${g} />`:null}
      </div>`}var as=50;function ls(e,t){if(!e||!e.data)return[];var n=e.producer_id,r=n&&e.data[n],i={},a=[],l=r?[r]:Object.keys(e.data).map(function(s){return e.data[s]});return l.forEach(function(s){if(s)for(var c=0;c+2<s.length;c+=3){var f=s[c];t&&(f<t[0]||f>=t[1])||i[f]||(i[f]=!0,a.push(f))}}),a.sort(function(s,c){return c-s}),a}function os(e,t,n){var r=ul(e,t,n),i=x.time(e,"hm"),a=x.time(e+900,"hm");return!r||r.prodWh<=0?o("explain.noprod",{from:i,to:a}):o("explain.sentence",{from:i,to:a,prod:x.wh(r.prodWh),member:x.wh(r.memberImpWh),total:x.wh(r.totalImpWh),share:x.num(r.sharePct,0),alloc:x.wh(r.allocatedWh)})}function aa(e){var t=C(0),n=t[0],r=t[1],i=ls(e.raw,e.range),a=i.slice(0,(n+1)*as),l=a.length<i.length;return u`
      <div class="explain-panel" role="region" aria-label=${e.title||o("explain.title")}>
        <div class="explain-head">
          <div>
            <h3 class="explain-title">${e.title||o("explain.title")}</h3>
            <p class="explain-subtitle">${o("explain.subtitle")}</p>
          </div>
          ${e.onClose?u`
            <button class="explain-close" aria-label=${o("explain.close")} onClick=${e.onClose}>×</button>`:null}
        </div>
        ${i.length===0?u`<p class="placeholder-text">${o("explain.empty")}</p>`:u`
            <ul class="explain-list">
              ${a.map(function(s){return u`<li key=${s} class="explain-slot">${os(s,e.raw,e.memberId)}</li>`})}
            </ul>
            ${l?u`
              <button class="explain-more" onClick=${function(){r(n+1)}}>
                ${o("explain.more")}
              </button>`:null}`}
      </div>`}var Xr=!1,ss=2*3600,us=u`<svg viewBox="0 0 24 24" class="vz-house" aria-hidden="true"><path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="13" width="4" height="6" fill="currentColor"/></svg>`,cs=u`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16l-3.6.6.6-3.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,fs=u`<svg viewBox="0 0 20 20" class="vz-plus" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,Qr=u`<svg viewBox="0 0 24 24" class="vz-grid-ico" aria-hidden="true"><path d="M6 3v18M18 3v18M6 8h12M6 14h12M3 6l3 2 3-2M15 6l3 2 3-2M3 16l3 2 3-2M15 16l3 2 3-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function at(e){return e&&(e.type==="PRODUCER"||e.typ==="P")}function vs(e){if(!e||!e.length)return{};var t=e[e.length-1];return t&&t.members||{}}function Mt(e){var t=e.member,n=t.name||t.id,r=e.noData;return u`
      <div class=${"vz-card"+(e.own?" vz-card-own":"")+(e.producer?" vz-card-producer":"")}>
        <button class="vz-edit" aria-label=${o("vzev.edit")}
          onClick=${function(){Pe.navigate("/vzev/mitglied/"+encodeURIComponent(t.id))}}>
          ${cs}
        </button>
        <div class="vz-house-wrap">${us}</div>
        <span class="vz-name">${n}</span>
        <span class="vz-type">${o(e.producer?"vzev.type.producer":"vzev.type.consumer")}</span>
        ${e.own?u`<span class="vz-ownbadge">${o("vzev.own")}</span>`:null}
        ${r?u`
          <span class="vz-nodata" role="status">
            ${r.lastTs?o("vzev.nodata.badge",{time:x.time(r.lastTs,"15m")}):o("vzev.nodata.never")}
          </span>`:null}
        ${!e.own&&e.onRemove?u`
          <button class="vz-remove" onClick=${e.onRemove}>${o("vzev.remove")}</button>`:null}
      </div>`}function ds(e){var t=e.wh,n="vz-chip vz-chip-"+(e.dir==="grid"?"grid":"vzev");return u`
      <span class=${n}>
        <span class="vz-chip-dir">${o(e.dir==="grid"?"vzev.flow.fromgrid":"vzev.flow.fromproducer")}</span>
        <span class="vz-chip-val">${x.wh(t)}</span>
      </span>`}function ps(){var e=C(null),t=e[0],n=e[1],r=C({}),i=r[0],a=r[1],l=C([]),s=l[0],c=l[1],f=C(!1),d=f[0],p=f[1],v=C(null),h=v[0],g=v[1],$=C(Xr),m=$[0],b=$[1],y=C(null),k=y[0],z=y[1],w=ze(!0);function S(){L.getVzevMembersList().then(function(P){w.current&&(n(P),p(!1))}).catch(function(){w.current&&(n([]),p(!0))}),L.getVzevRaw().then(function(P){w.current&&g(P||null)}).catch(function(){w.current&&g(null)})}Z(function(){w.current=!0,S(),L.getVzevDiscovered().then(function(K){w.current&&c(K)}).catch(function(){w.current&&c([])});var P=L.poll(function(){L.getVzevFlows("15m",1).then(function(K){w.current&&a(vs(K&&K.flows))}).catch(function(){})},2e3);return function(){w.current=!1,P()}},[]);function U(){Xr=!0,b(!0)}function T(P){L.get("/api/vzev/members?action=remove&id="+encodeURIComponent(P.id)).then(function(){X(o("vzev.removed"),{type:"info"}),S()}).catch(function(){X(o("vzev.saveerror"),{type:"error"})})}var A=!!(h&&h.self_id!=null&&h.self_id===h.producer_id),M=A?u`
      <${Y} secondary onClick=${function(){Pe.navigate("/vzev/abrechnung")}}>
        ${o("vzev.billing")} ›
      <//>`:null,N=u`<${Oe} title=${o("page.vzev")} subtitle=${o("vzev.subtitle")} actions=${M} />`;if(t===null)return u`<div>${N}<${F}><p class="placeholder-text">${o("common.loading")}</p><//></div>`;var I=null,j=[];t.forEach(function(P){P.own||P.is_own?I=P:j.push(P)}),t.forEach(function(P){at(P)});var R=u`
      <${F} class="vz-discovery">
        <div class="vz-discovery-head">
          <h2 class="card-title">${o("vzev.discovery.title")}</h2>
          <span class="card-subtitle">${o("vzev.discovery.hint")}</span>
        </div>
        ${s.length===0?u`<p class="placeholder-text">${o("vzev.discovery.empty")}</p>`:u`
            <ul class="vz-discovery-list">
              ${s.map(function(P){return u`
                  <li key=${P.id} class="vz-discovery-item">
                    <span class="vz-disc-name">${P.name||P.id}</span>
                    <span class="vz-disc-meta">${P.id}${P.url?" · "+P.url:""}</span>
                    <${Y} small onClick=${function(){Pe.navigate("/vzev/mitglied/"+encodeURIComponent(P.id))}}>
                      ${fs} ${o("vzev.add")}
                    <//>
                  </li>`})}
            </ul>`}
      <//>`;function _(P){var K=i[P.id];return typeof K=="number"?K:null}var E=0;if(h&&h.data)for(var D in h.data){var W=Sr(h,D);W&&W>E&&(E=W)}function ce(P){if(!h||!h.data)return null;var K=Sr(h,P.id),G=E||Math.floor(Date.now()/1e3);return K===null?{lastTs:null}:G-K>ss?{lastTs:K}:null}var ue=m?null:u`
      <${F} class="vz-info">
        <div class="vz-info-head">
          <h2 class="card-title">${o("vzev.info.title")}</h2>
          <button class="vz-info-close" aria-label=${o("common.close")} onClick=${U}>×</button>
        </div>
        <p class="vz-info-body">${o("vzev.info.body")}</p>
        <${Y} small secondary onClick=${U}>${o("vzev.info.dismiss")}<//>
      <//>`,V=k?(function(){for(var P=0;P<t.length;P++)if(t[P].id===k)return t[P];return null})():null,ee=V&&h?u`
      <${F} class="vz-drill">
        <${aa} raw=${h} memberId=${k}
          title=${o("explain.title")+" – "+(V.name||k)}
          onClose=${function(){z(null)}} />
      <//>`:null;function ge(){var P=j;return u`
        <${F} group="vzev" class="vz-graph-card">
          <div class="vz-graph" role="img" aria-label=${o("vzev.graph.aria")}>
            <div class="vz-ring">
              ${P.length===0?u`<p class="placeholder-text vz-ring-empty">${o("vzev.empty")}</p>`:P.map(function(K){var G=at(K),re=_(K);return u`
                      <div key=${K.id} class="vz-node vz-node-peer">
                        <${Mt} member=${K} producer=${G} noData=${ce(K)}
                          onRemove=${function(){T(K)}} />
                        ${re!==null&&re>0?u`
                          <span class=${"vz-flow "+(G?"vz-flow-vzev":"vz-flow-grid")}>
                            <span class="vz-flow-arrow">${G?"→":"←"}</span>
                            ${x.wh(re)}
                          </span>`:null}
                        ${!G&&h?u`
                          <button class="vz-explain-btn" onClick=${function(){z(K.id)}}>
                            ${o("explain.open")}
                          </button>`:null}
                      </div>`})}
            </div>

            ${I?u`
              <div class="vz-node vz-node-own">
                <${Mt} member=${I} own=${!0} producer=${at(I)} />
              </div>`:null}

            <div class="vz-arrow-grid" aria-hidden="true">
              <span class="vz-arrow-line"></span>
            </div>

            <div class="vz-node vz-node-net">
              <div class="vz-netnode">
                <div class="vz-grid-icowrap">${Qr}</div>
                <span class="vz-net-label">${o("vzev.net")}</span>
              </div>
            </div>
          </div>
        <//>`}function de(){return u`
        <div class="vz-list">
          ${I?u`
            <div class="vz-list-item vz-list-own">
              <${Mt} member=${I} own=${!0} producer=${at(I)} />
            </div>`:null}
          ${j.map(function(P){var K=at(P),G=_(P);return u`
              <div key=${P.id} class="vz-list-item">
                <${Mt} member=${P} producer=${K} noData=${ce(P)}
                  onRemove=${function(){T(P)}} />
                ${G!==null&&G>0?u`<${ds} dir=${K?"producer":"grid"} wh=${G} />`:null}
                ${!K&&h?u`
                  <button class="vz-explain-btn" onClick=${function(){z(P.id)}}>
                    ${o("explain.open")}
                  </button>`:null}
              </div>`})}
          <div class="vz-list-item vz-list-net">
            <div class="vz-netnode vz-netnode-row">
              <div class="vz-grid-icowrap">${Qr}</div>
              <span class="vz-net-label">${o("vzev.net")}</span>
            </div>
          </div>
        </div>`}return u`
      <div>
        ${N}
        ${d?u`<div class="banner banner-warn">${o("vzev.loaderror")}</div>`:null}
        ${ue}
        <div class="vz-graph-wrap">${ge()}</div>
        <div class="vz-list-wrap">${de()}</div>
        ${ee}
        ${R}
      </div>`}function Jr(e){return e&&(e.type==="PRODUCER"||e.typ==="P")?"P":"C"}function hs(e){if(e==null||e===0)return"";var t=new Date(e*1e3);function n(r){return(r<10?"0":"")+r}return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function gs(e){if(!e)return null;var t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e));if(!t)return null;var n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),0,0,0,0);return Math.floor(n.getTime()/1e3)}function ms(e){var t=e.params&&e.params.id||null,n=C(""),r=n[0],i=n[1],a=C(""),l=a[0],s=a[1],c=C("C"),f=c[0],d=c[1],p=C(""),v=p[0],h=p[1],g=C(""),$=g[0],m=g[1],b=C([]),y=b[0],k=b[1],z=C(!!t),w=z[0],S=z[1],U=C(!1),T=U[0],A=U[1],M=C(!1),N=M[0],I=M[1],j=C(""),R=j[0],_=j[1];Z(function(){var V=!1;return Promise.all([L.getVzevMembersList().catch(function(){return[]}),t?L.getVzevDiscovered().catch(function(){return[]}):Promise.resolve([])]).then(function(ee){if(!V){var ge=ee[0]||[],de=ee[1]||[];k(ge);for(var P=null,K=0;K<ge.length;K++)if(ge[K].id===t){P=ge[K];break}if(P)S(!0),i(P.name||""),s(P.location||P.loc||""),d(Jr(P)),h(P.metering_point||""),m(hs(P.entry_ts));else if(t){S(!1);for(var G=null,re=0;re<de.length;re++)if(de[re].id===t){G=de[re];break}G&&(i(G.name||""),s(G.location||G.loc||""),d(Jr(G)))}A(!0)}}),function(){V=!0}},[t]);function E(){if(f!=="P")return!1;for(var V=0;V<y.length;V++){var ee=y[V];if(ee.id!==t&&(ee.type==="PRODUCER"||ee.typ==="P"))return!0}return!1}function D(){if(_(""),!r.trim()){_(o("vzev.form.err.name"));return}if(E()){_(o("vzev.form.err.producer"));return}I(!0);var V="/api/vzev/members?action=upsert&id="+encodeURIComponent(t||"")+"&name="+encodeURIComponent(r.trim())+"&loc="+encodeURIComponent(l.trim())+"&typ="+encodeURIComponent(f)+"&mp="+encodeURIComponent(v.trim()),ee=gs($);ee!==null&&(V+="&entry="+ee),L.get(V).then(function(){X(o("vzev.saved"),{type:"info"}),Pe.navigate("/vzev")}).catch(function(){I(!1),X(o("vzev.saveerror"),{type:"error"})})}function W(){I(!0),L.get("/api/vzev/members?action=remove&id="+encodeURIComponent(t)).then(function(){X(o("vzev.removed"),{type:"info"}),Pe.navigate("/vzev")}).catch(function(){I(!1),X(o("vzev.saveerror"),{type:"error"})})}var ce=o(w?"vzev.form.edit":"vzev.form.add"),ue=u`<${Oe} title=${ce} subtitle=${o("vzev.form.subtitle")} />`;return T?u`
      <div>
        ${ue}
        <${F} class="vz-form-card">
          <div class="vz-form">
            <${Ot} label=${o("vzev.form.name")} value=${r}
              placeholder=${o("vzev.form.name.ph")}
              onInput=${function(V){i(V)}} />
            <${Ot} label=${o("vzev.form.loc")} value=${l}
              placeholder=${o("vzev.form.loc.ph")}
              onInput=${function(V){s(V)}} />
            <${Xt} label=${o("vzev.form.typ")} value=${f}
              onChange=${function(V){d(V),_("")}}
              options=${[{value:"C",label:o("vzev.type.consumer")},{value:"P",label:o("vzev.type.producer")}]} />

            <${Ot} label=${o("vzev.form.metering_point")} value=${v}
              placeholder=${o("vzev.form.metering_point.ph")} maxlength=${40}
              onInput=${function(V){h(V)}} />
            <p class="vz-form-hint">${o("vzev.form.metering_point.hint")}</p>

            <label class="field field-block">
              <span class="field-label">${o("vzev.form.entry_ts")}</span>
              <input class="textfield" type="date" value=${$}
                onInput=${function(V){m(V.target.value)}} />
            </label>
            <p class="vz-form-hint">${o("vzev.form.entry_ts.hint")}</p>

            ${R?u`<p class="vz-form-err" role="alert">${R}</p>`:null}

            <div class="vz-form-actions">
              <${Y} onClick=${D} disabled=${N}>${o("vzev.form.save")}<//>
              <${Y} secondary onClick=${function(){Pe.navigate("/vzev")}}
                disabled=${N}>${o("vzev.form.cancel")}<//>
              ${w?u`
                <${Y} danger onClick=${W} disabled=${N}>${o("vzev.remove")}<//>`:null}
            </div>
          </div>
        <//>
      </div>`:u`<div>${ue}<${F}><p class="placeholder-text">${o("common.loading")}</p><//></div>`}var In="var(--c-production)",$s="var(--c-vzev)";function la(e){return!e||!e.expected?null:Math.round(e.complete/e.expected*100)}function qt(e){var t=la(e);return t!==null&&t<100}function _s(e){e=e||{};var t=Number(e.vzev_import_chf_kwh);return isNaN(t)?null:t}function ei(e,t){return e+"-Q"+t}function gn(e,t){return Math.floor(new Date(e,t,1,0,0,0,0).getTime()/1e3)}function ys(e){for(var t=new Date,n=t.getFullYear(),r=Math.floor(t.getMonth()/3)+1,i=[],a=0;a<7;a++){for(var l=r-a,s=n;l<1;)l+=4,s-=1;i.push({value:ei(s,l),label:ei(s,l)})}return i}function bs(e){var t=/^(\d{4})-Q([1-4])$/.exec(String(e||""));return t?{year:parseInt(t[1],10),q:parseInt(t[2],10)}:null}function ws(e){var t=bs(e);if(!t)return[];var n=(t.q-1)*3;return[gn(t.year,n),gn(t.year,n+1),gn(t.year,n+2)]}function ti(e,t,n,r){var i=ws(t),a=Array.isArray(e)?e:[];return a.map(function(l,s){var c;l==null?c=0:typeof l=="number"?c=l:c=n(l);var f=l&&typeof l=="object"&&typeof l.ts=="number"?l.ts:i[s]!==void 0?i[s]:(i[0]||0)+s*2592e3;return{t:f,y:c==null||isNaN(c)?0:c,color:r}})}function ni(e){return typeof e.wh=="number"?e.wh/1e3:typeof e.kwh=="number"?e.kwh:typeof e.y=="number"?e.y:0}function ks(e){var t=e.quality;if(!t||!t.expected)return null;var n=la(t),r=e.byId||{},i=[],a=t.perMember||{};for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l)){var s=(a[l].expected||0)-(a[l].have||0);if(s>0){var c=r[l]&&r[l].name||l;i.push(o("billing.quality.member_missing",{name:c,n:s}))}}return u`
      <${F} class="billing-quality">
        <div class="billing-quality-head">
          <h2 class="card-title">${o("billing.quality.title")}
            <${fe} text=${o("tooltip.provisorisch")} /></h2>
          ${qt(t)?u`<span class="billing-provisional">${o("billing.provisional.badge")}</span>`:null}
        </div>
        <p class="billing-quality-line">${o("billing.quality.complete",{pct:n})}</p>
        ${t.provisional>0?u`<p class="billing-quality-line">${o("billing.quality.provisional",{n:t.provisional})}</p>`:null}
        ${t.missing>0?u`<p class="billing-quality-line">${o("billing.quality.missing",{n:t.missing})}</p>`:null}
        ${i.length===0&&!qt(t)?u`<p class="billing-quality-line billing-quality-ok">${o("billing.quality.ok")}</p>`:null}
        ${i.map(function(f,d){return u`<p key=${d} class="billing-quality-line">${f}</p>`})}
      <//>`}function xs(e){var t=e.member,n=e.tariffs||{},r=e.period,i=_s(n),a=typeof t.wh=="number"?t.wh/1e3:null,l=t.entry_ts&&r&&t.entry_ts>r[0]?t.entry_ts:r?r[0]:null,s=e.capReference,c=s!=null&&i!==null&&i>s?o("billing.detail.method_effektiv"):o("billing.detail.method_pauschal");function f(d,p){return u`<div class="stmt-line"><span class="stmt-key">${d}</span><span class="stmt-val">${p}</span></div>`}return u`
      <div class="stmt">
        ${f(o("billing.detail.period"),r?x.time(l,"1d")+" – "+x.time(r[1]-1,"1d"):"–")}
        ${f(o("billing.detail.member"),(t.name||t.id)+(t.location?", "+t.location:""))}
        ${t.metering_point?f(u`${o("billing.detail.meteringpoint")} <${fe} text=${o("tooltip.zaehlpunkt")} />`,t.metering_point):null}
        ${f(o("billing.detail.energy"),a===null?"–":x.num(a,2)+" kWh")}
        ${typeof t.ht_wh=="number"?f(o("billing.detail.energy_ht"),x.num(t.ht_wh/1e3,2)+" kWh"):null}
        ${typeof t.nt_wh=="number"?f(o("billing.detail.energy_nt"),x.num(t.nt_wh/1e3,2)+" kWh"):null}
        ${f(o("billing.detail.tariff"),i===null?"–":x.num(i,2)+" CHF/kWh")}
        ${f(o("billing.detail.amount"),typeof t.chf=="number"?x.chf(t.chf):"–")}
        <p class="stmt-residual">${o("billing.detail.residual")}</p>
        ${f(u`${o("billing.detail.key")} <${fe} text=${o("tooltip.verteilschluessel")} />`,o("billing.detail.key_value"))}
        ${f(o("billing.detail.method"),c)}
      </div>`}function ri(e){var t=e.wh!==null&&e.wh!==void 0?e.wh/1e3:null,n=C(!1),r=n[0],i=n[1],a=C(!1),l=a[0],s=a[1],c=!!e.member;return u`
      <${F} group="vzev" title=${e.title} subtitle=${e.subtitle}>
        ${e.provisional?u`<span class="billing-provisional">${o("billing.provisional.badge")}</span>`:null}
        <div class="billing-metrics">
          <div class="billing-metric">
            <span class="billing-metric-label">${e.kwhLabel}</span>
            <span class="billing-metric-value" style=${"color:"+In}>
              ${t===null?"–":x.num(t,2)+" kWh"}
            </span>
          </div>
          <div class="billing-metric">
            <span class="billing-metric-label">${e.chfLabel}</span>
            <span class="billing-metric-value" style=${"color:"+$s}>
              ${e.chf===null||e.chf===void 0?"–":x.chf(e.chf)}
            </span>
          </div>
        </div>
        ${e.note?u`<p class="billing-card-note">${e.note}</p>`:null}
        <${Wn} height=${180} yUnit="kWh" xUnit=${o("billing.axis.month")}
          xTickFormat=${function(f){return x.time(f,"1mo")}}
          yFormat=${function(f){return x.num(f,1)+" kWh"}}
          points=${e.points} />
        ${c?u`
          <div class="billing-card-actions no-print">
            <${Y} small secondary onClick=${function(){i(!r)}}>
              ${o(r?"billing.member.collapse":"billing.member.expand")}
            <//>
            ${e.raw?u`
              <${Y} small secondary onClick=${function(){s(!l)}}>
                ${o("explain.open")}
              <//>`:null}
          </div>`:null}
        ${c&&r?u`
          <${xs} member=${e.member} tariffs=${e.tariffs}
            period=${e.period} capReference=${e.capReference} />`:null}
        ${c&&l&&e.raw?u`
          <${aa} raw=${e.raw} memberId=${e.member.id}
            range=${e.period} onClose=${function(){s(!1)}} />`:null}
      <//>`}function zs(e){var t=e.data,n=e.quarter,r=t.total||{},i=ti(r.months,n,ni,In),a=Array.isArray(t.members)?t.members:[];return u`
      <div class="billing-grid">
        <${ri}
          title=${o("billing.total.title")}
          subtitle=${n}
          kwhLabel=${o("billing.producer.energy")}
          chfLabel=${o("billing.producer.profit")}
          wh=${typeof r.exp_wh=="number"?r.exp_wh:null}
          chf=${typeof r.revenue_chf=="number"?r.revenue_chf:null}
          points=${i} />
        ${a.map(function(l){return u`
            <${ri} key=${l.id}
              title=${l.name||l.id}
              kwhLabel=${o("billing.producer.energy")}
              chfLabel=${o("billing.producer.profit")}
              wh=${typeof l.wh=="number"?l.wh:null}
              chf=${typeof l.chf=="number"?l.chf:null}
              points=${ti(l.months,n,ni,In)}
              member=${l} tariffs=${t.tariffs} period=${t.range}
              raw=${t.raw} capReference=${e.capReference}
              provisional=${e.provisional} />`})}
      </div>`}function Cs(e){var t=e.info||{},n=t.representative_name,r=t.connection_point_id;return!n&&!r?null:u`
      <${F} class="billing-header-card">
        ${n?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${o("billing.rep")}</span> ${n}${t.representative_contact?" · "+t.representative_contact:""}</p>`:null}
        ${r?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${o("billing.connpoint")}</span> ${r}</p>`:null}
      <//>`}function Ss(e,t){var n=Array.isArray(e.members)?e.members:e.self?[e.self]:[],r=qt(e.quality),i=[o("billing.detail.member"),o("billing.detail.meteringpoint"),o("billing.detail.energy")+" [kWh]",o("billing.detail.energy_ht")+" [kWh]",o("billing.detail.energy_nt")+" [kWh]",o("billing.detail.amount")+" [CHF]",o("billing.provisional.badge")],a=n.map(function(d){return[d.name||d.id,d.metering_point||"",typeof d.wh=="number"?(d.wh/1e3).toFixed(2):"",typeof d.ht_wh=="number"?(d.ht_wh/1e3).toFixed(2):"",typeof d.nt_wh=="number"?(d.nt_wh/1e3).toFixed(2):"",typeof d.chf=="number"?d.chf.toFixed(2):"",r?"1":"0"]}),l=Gn(i,a),s=new Blob([l],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(s),f=document.createElement("a");f.href=c,f.download="gplug-abrechnung-"+t+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(c)},0)}function Ms(){var e=ys(),t=C(e.length?e[0].value:""),n=t[0],r=t[1],i=C(null),a=i[0],l=i[1],s=C("loading"),c=s[0],f=s[1];Z(function(){var y=!1;return f("loading"),en().then(function(k){var z=Li(n);return!k.available||!k.siteId||!z?null:Jn(k.siteId,z[0],z[1]-1).then(function(w){var S=w&&w.data?Object.keys(w.data):[];return w&&w.producer_id&&S.length?w:null},function(){return null})}).then(function(k){if(!y)return L.getVzevBilling(n,k).then(function(z){if(!y){if(!z||typeof z!="object"){l(null),f("empty");return}l(z),f("ready")}}).catch(function(){y||(l(null),f("error"))})}),function(){y=!0}},[n]);function d(y){if(!y)return!1;var k=String(y.role||y.type||"").toUpperCase();if(k==="PRODUCER"||k==="P")return!0;if(k==="CONSUMER"||k==="C")return!1;var z=y.self||{};return y.self||typeof z.cost_grid_chf=="number"||typeof y.cost_grid_chf=="number"||typeof y.import_wh=="number"?!1:!!(y.total||Array.isArray(y.members)&&y.members.length)}var p=a&&a.tariffs?Ri(a.tariffs):null,v=a?qt(a.quality):!1,h={};a&&Array.isArray(a.members)&&a.members.forEach(function(y){y&&y.id!==void 0&&(h[y.id]=y)});var g=!!a&&d(a),$;c==="loading"?$=u`<${F}><p class="placeholder-text">${o("common.loading")}</p><//>`:c==="error"?$=u`<${F}><p class="placeholder-text">${o("billing.error")}</p><//>`:c==="empty"||!a?$=u`<${F}><p class="placeholder-text">${o("common.nodata")}</p><//>`:g?$=u`<${zs} data=${a} quarter=${n}
        capReference=${p} provisional=${v} />`:$=u`<${F}><p class="placeholder-text">${o("billing.producer_only")}</p><//>`;var m=c==="ready"&&g,b=u`
      <div class="billing-actions">
        <${Xt} label=${o("billing.quarter")} value=${n}
          options=${e}
          onChange=${function(y){r(y)}} />
        ${m?u`
          <${Y} secondary small onClick=${function(){Ss(a,n)}}>${o("billing.export")}<//>
          <${Y} secondary small onClick=${function(){window.print()}}>${o("billing.print")}<//>`:null}
      </div>`;return u`
      <div class="billing-page">
        <${Oe} title=${o("page.billing")} subtitle=${o("billing.subtitle")}
          actions=${b} />
        ${m?u`<${Cs} info=${a.info} />`:null}
        ${$}
        ${m?u`<${ks} quality=${a.quality} byId=${h} />`:null}
        <${F} class="billing-note-card">
          <p class="billing-note">${o("billing.note")}</p>
        <//>
      </div>`}var Es=["site","loads","productions","grid","tariffs","vzev","daten","gplug","pro"],Ts={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",tarife:"tariffs",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},Ns={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",tariffs:"tarife",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},Is={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",tariffs:"settings.tab.tariffs",vzev:"settings.tab.vzev",daten:"settings.tab.data",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},Ps={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},Os=["simulator","shelly","homeassistant","gplug"],oa=["simulator","homeassistant","gplug"],Pn=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],Yt=["PHOTOVOLTAIC","BATTERY"];function As(e){return e==null||String(e).trim()===""?!1:Yt.indexOf(String(e).toUpperCase())<0}var sa=["W","kW"],ua=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh"],Fs={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,vzev_export_chf_kwh:.22,vzev_import_chf_kwh:.22,co2_g_kwh:128};function le(e){return e==null||String(e).trim()===""}function ke(e){return!le(e)&&!isNaN(Number(e))}function qe(e){return le(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function ca(e,t){var n={};le(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!ke(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!ke(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};qe(i.on)||(n["url.on"]="settings.err.url"),qe(i.off)||(n["url.off"]="settings.err.url"),qe(i.status)||(n["url.status"]="settings.err.url")}else qe(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&le(e.token)&&(n.token="settings.err.token");return n}function fa(e,t){var n={};return le(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?le(e.field)&&(n.field="settings.err.field"):(qe(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&le(e.token)&&(n.token="settings.err.token")),n}function va(e){var t={};return e.integration==="gplug"?le(e.field)&&(t.field="settings.err.field"):(qe(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&le(e.token)&&(t.token="settings.err.token")),t}function Ls(e){var t={};return le(e.id)&&(t.id="settings.err.id_required"),le(e.name)&&(t.name="settings.err.name_required"),t}function Rs(e){var t={};ua.forEach(function(f){(!ke(e[f])||Number(e[f])<0)&&(t[f]="settings.err.rate")});var n=e.co2_g_kwh;(!ke(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!le(r),l=!le(i);if((a||l)&&(!a||!l?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!ke(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!ke(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var s=0;s<e.ht_windows.length;s++){var c=e.ht_windows[s]||{};(!ke(c.from)||!ke(c.to)||Number(c.from)<0||Number(c.to)>24||Number(c.from)>Number(c.to))&&(t["win."+s]="settings.err.win_hours")}return t}function pt(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function lt(e){return typeof e=="number"&&!isNaN(e)}function ft(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ii(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var ve={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours"},Ds=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh","co2_g_kwh"];function Ws(e,t,n){if(typeof e=="string"||e===void 0||e===null){ii(e)||n.push({path:t,key:ve.url});return}if(ft(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!ii(e[r]))&&n.push({path:t+"."+r,key:ve.url});return}n.push({path:t,key:ve.url})}function mn(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:ve.array}),null;for(var i=!0,a=0;a<r.length;a++)ft(r[a])||(n.push({path:t+"["+a+"]",key:ve.array}),i=!1);return i?r:null}function Us(e){var t=[];if(!ft(e))return[{path:"",key:ve.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:ve.id});var n=mn(e,"loads",t);if(mn(e,"productions",t),mn(e,"grid",t),n)for(var r={},i=0;i<n.length;i++){var a=n[i],l="loads["+i+"]",s=a.id;typeof s!="string"||s.length===0?t.push({path:l+".id",key:ve.id}):r[s]?t.push({path:l+".id",key:ve.dup}):r[s]=!0,a.currentPower!==void 0&&a.currentPower!==null&&!lt(a.currentPower)&&t.push({path:l+".currentPower",key:ve.power}),a.priority!==void 0&&a.priority!==null&&(!lt(a.priority)||a.priority<1)&&t.push({path:l+".priority",key:ve.priority}),a.url!==void 0&&a.url!==null&&Ws(a.url,l+".url",t)}var c=e.tariffs;if(c!=null){if(!ft(c))return t.push({path:"tariffs",key:ve.object}),t;Ds.forEach(function(h){var g=c[h];g!=null&&(!lt(g)||g<0)&&t.push({path:"tariffs."+h,key:ve.rate})});var f=c.ht_windows;if(f!=null)if(!Array.isArray(f))t.push({path:"tariffs.ht_windows",key:ve.array});else for(var d=0;d<f.length;d++){var p=f[d],v="tariffs.ht_windows["+d+"]";(!ft(p)||!lt(p.from)||!lt(p.to)||p.from<0||p.to>24||p.from>p.to)&&t.push({path:v,key:ve.win})}}return t}function H(e){var t=e.error;return u`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?u`<span class="field-error">${o(t)}</span>`:null}
      </label>`}function We(e){return u`
      <label class="field field-block">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function or(e){return u`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${o("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function Xe(e){return e.map(function(t){return{value:t,label:t}})}function Bs(e){var t=e.cfg,n=Ls(t);function r(i){return function(a){e.patch(i,a)}}return u`
      <${F} group="grid">
        <p class="settings-scope">${o("settings.scope_note")}</p>
        <div class="settings-form">
          <${H} label=${o("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${H} label=${o("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${H} label=${o("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${H} label=${o("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${mt} disabled=${pt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function js(e){var t=e.selected>=0;return u`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${Y} small onClick=${e.onAdd}>${o("settings.add")}<//>
          </div>
          ${e.items.length===0?u`<p class="md-empty">${o("settings.empty")}</p>`:e.items.map(function(n,r){return u`
                  <button key=${r} type="button"
                    class=${"md-row"+(r===e.selected?" md-row-active":"")}
                    onClick=${function(){e.onSelect(r)}}>${e.labelFn(n,r)}</button>`})}
        </div>
        <div class="md-detail">
          ${e.selected>=0?u`
                <button type="button" class="md-back" onClick=${function(){e.onSelect(-1)}}>← ${o("settings.back")}</button>
                ${e.detail}`:u`<p class="md-empty md-detail-empty">${o("settings.select_hint")}</p>`}
        </div>
      </div>`}function mt(e){return u`
      <div class="settings-actions">
        <${Y} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?o("settings.saving"):o("settings.save")}
        <//>
      </div>`}function Hs(e){var t=e.item,n=e.otherIds,r=ca(t,n);function i(c){return function(f){e.patch(c,f)}}function a(c){return function(f){var d=Object.assign({},t.url||{});d[c]=f,e.patch("url",d)}}var l=t.integration||"simulator",s=l==="shelly"?t.url||{}:{};return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||o("settings.new_entry")}</h3>
          <${or} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${H} label=${o("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${H} label=${o("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${H} label=${o("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${We} label=${o("settings.load.type")} value=${t.loadType||Pn[0]}
            options=${Xe(Pn)} onChange=${i("loadType")} />
          <${H} label=${o("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${We} label=${o("settings.integration")} value=${l}
            options=${Xe(Os)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${o("settings.integration_config")}</div>
        <div class="settings-form">
          ${l==="shelly"?u`
            <${H} label=${o("settings.url.on")} value=${s.on} error=${r["url.on"]} onInput=${a("on")} />
            <${H} label=${o("settings.url.off")} value=${s.off} error=${r["url.off"]} onInput=${a("off")} />
            <${H} label=${o("settings.url.status")} value=${s.status} error=${r["url.status"]} onInput=${a("status")} />`:u`
            <${H} label=${o("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${l==="homeassistant"?u`
              <${H} label=${o("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function Vs(e){var t=e.item,n=fa(t,e.otherIds);function r(a){return function(l){e.patch(a,l)}}var i=t.integration||"simulator";return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||o("settings.new_entry")}</h3>
          <${or} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${H} label=${o("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${H} label=${o("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${We} label=${o("settings.prod.type")} value=${t.productionType||Yt[0]}
            options=${Yt.map(function(a){return{value:a,label:o(Ps[a])}})}
            onChange=${r("productionType")} />
          ${As(t.productionType)?u`
            <div class="settings-warn" role="status">${o("settings.prodtype.unknown_warn")}</div>`:null}
          <${We} label=${o("settings.dimension")} value=${t.dimension||"W"}
            options=${Xe(sa)} onChange=${r("dimension")} />
          <${We} label=${o("settings.integration")} value=${i}
            options=${Xe(oa)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${o("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${H} label=${o("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:u`
            <${H} label=${o("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${H} label=${o("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function Ks(e){var t=e.item,n=va(t);function r(l){return function(s){e.patch(l,s)}}var i=t.integration||"simulator",a=t.id==="to"?o("settings.grid.to"):o("settings.grid.from");return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${We} label=${o("settings.dimension")} value=${t.dimension||"W"}
            options=${Xe(sa)} onChange=${r("dimension")} />
          <${We} label=${o("settings.integration")} value=${i}
            options=${Xe(oa)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${o("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${H} label=${o("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:u`
            <${H} label=${o("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${H} label=${o("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function $n(e){var t=C(-1),n=t[0],r=t[1],i=e.items;function a(d,p){var v=i.slice(),h=Object.assign({},v[n]);h[d]=p,v[n]=h,e.onChange(v)}function l(){var d=i.concat([e.blank()]);e.onChange(d),r(d.length-1)}function s(){var d=i[n],p=(e.persistedIds||[]).indexOf(String(d&&d.id))!==-1;if(!(p&&!window.confirm(o(e.confirmKey)))){var v=i.slice();v.splice(n,1),r(-1),e.onDelete&&e.onDelete(d),e.onChange(v)}}var c=i.some(function(d,p){var v=i.filter(function(h,g){return g!==p}).map(function(h){return String(h.id)});return pt(e.validate(d,v))}),f=n>=0&&i[n]?u`<${e.Detail} item=${i[n]} patch=${a} onDelete=${s}
          otherIds=${i.filter(function(d,p){return p!==n}).map(function(d){return String(d.id)})} />`:null;return u`
      <${F} group=${e.group}>
        <${js}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:l}
          detail=${f} />
        <${mt} disabled=${c} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function qs(e){var t=e.tariffs,n=Rs(t);function r(g){return function($){e.patch(g,$)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(g,$,m){var b=i.map(function(y,k){if(k!==g)return y;var z=Object.assign({},y);return z[$]=m,z});e.setWindows(b)}function l(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function s(g){e.setWindows(i.filter(function($,m){return m!==g}))}var c=ke(t.grid_import_ht_chf_kwh)&&ke(t.grid_import_nt_chf_kwh),f=c&&i.length===0,d=Ys(t),p=Ri(d),v=Number(t.vzev_import_chf_kwh),h=p!==null&&!isNaN(v)&&v>p;return u`
      <${F} group="vzev">
        <div class="settings-subhead">${o("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${H} label=${o("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${o("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${o("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${H} label=${o("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${H} label=${o("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${o("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${o("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(g,$){return u`
            <div key=${$} class="settings-form ht-window-row">
              <${H} label=${o("settings.tariff.win_days")} value=${g.days}
                placeholder=${o("settings.tariff.win_days.ph")} onInput=${function(m){a($,"days",m)}} />
              <${H} label=${o("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${g.from} error=${n["win."+$]} onInput=${function(m){a($,"from",ai(m))}} />
              <${H} label=${o("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${g.to} onInput=${function(m){a($,"to",ai(m))}} />
              <${or} onClick=${function(){s($)}} />
            </div>`})}
        <${Y} small secondary onClick=${l}>${o("settings.tariff.win_add")}<//>
        ${f?u`<p class="settings-warn">${o("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${o("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${H} label=${o("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${H} label=${o("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${o("settings.tariff.cap_group")}</div>
        <div class="settings-form">
          <${H} label=${o("settings.tariff.vzev_export_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_export_chf_kwh} error=${n.vzev_export_chf_kwh} onInput=${r("vzev_export_chf_kwh")} />
          <${H} label=${o("settings.tariff.vzev_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_import_chf_kwh} error=${n.vzev_import_chf_kwh} onInput=${r("vzev_import_chf_kwh")} />
        </div>
        ${p!==null?u`
          <p class="settings-scope">
            ${o("settings.tariff.cap_ref",{ref:p.toFixed(2)})}
            <${fe} text=${o("tooltip.cap")} />
          </p>
          ${h?u`<p class="settings-warn">${o("settings.tariff.cap_warn")}</p>`:u`<p class="settings-ok">${o("settings.tariff.cap_ok")}</p>`}`:null}
        <div class="settings-subhead">${o("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${H} label=${o("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${mt} disabled=${pt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function ai(e){return le(e)?void 0:Number(e)}function Ys(e){var t={};return["grid_import_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(n){le(e[n])||(t[n]=Number(e[n]))}),Array.isArray(e.ht_windows)&&(t.ht_windows=e.ht_windows),t}function Gs(){var e=C(null),t=e[0],n=e[1],r=C({producers:0,members:0}),i=r[0],a=r[1],l=C(!1),s=l[0],c=l[1];Z(function(){var p=!1;return Promise.all([L.getVzevInfo().catch(function(){return{}}),L.get("/api/vzev/members",{optional:!0}).catch(function(){return{members:[]}})]).then(function(v){if(!p){var h=v[0]||{};n({representative_name:h.representative_name||"",representative_contact:h.representative_contact||"",connection_point_id:h.connection_point_id||"",enabled:!!h.enabled});var g=v[1]&&v[1].members||[],$=0;g.forEach(function(m){(m.type==="PRODUCER"||m.typ==="P")&&$++}),a({producers:$,members:g.length})}}),function(){p=!0}},[]);function f(p){return function(v){n(function(h){var g=Object.assign({},h);return g[p]=v,g})}}function d(){s||!t||(c(!0),L.setVzevInfo(t).then(function(){X(o("settings.vzev.saved"),{type:"info"})}).catch(function(){X(o("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}return t?u`
      <${F} group="vzev">
        <div class="settings-form settings-toggle-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.enabled}
              onChange=${function(p){f("enabled")(p.target.checked)}} />
            <span>${o("settings.vzev.enabled")}</span>
          </label>
        </div>
        <p class="settings-scope">${o("settings.vzev.enabled_hint")}</p>
        <p class="settings-scope">${o("settings.vzev.subtitle")}</p>
        <div class="settings-form">
          <label class="field field-block">
            <span class="field-label">${o("settings.vzev.representative_name")} <${fe} text=${o("tooltip.vertreter")} /></span>
            <input class="textfield" type="text" value=${t.representative_name}
              onInput=${function(p){f("representative_name")(p.target.value)}} />
          </label>
          <${H} label=${o("settings.vzev.representative_contact")}
            value=${t.representative_contact} onInput=${f("representative_contact")} />
          <label class="field field-block">
            <span class="field-label">${o("settings.vzev.connection_point_id")} <${fe} text=${o("tooltip.connpoint")} /></span>
            <input class="textfield" type="text" value=${t.connection_point_id}
              onInput=${function(p){f("connection_point_id")(p.target.value)}} />
          </label>
        </div>
        <p class="settings-scope">${o("settings.vzev.counts",{producers:i.producers,members:i.members})}</p>
        <${mt} disabled=${!1} onSave=${d} saving=${s} />
      <//>`:u`<${F} group="vzev"><p class="placeholder-text">${o("settings.loading")}</p><//>`}function li(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!le(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function Zs(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return u`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${Y} small secondary onClick=${function(){e.onUse(1)}}>${o("settings.gplug.scan_use1")}<//>
          <${Y} small secondary onClick=${function(){e.onUse(2)}}>${o("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function Xs(){var e=C(null),t=e[0],n=e[1],r=C(!1),i=r[0],a=r[1],l=C(!1),s=l[0],c=l[1],f=C(!1),d=f[0],p=f[1],v=C({scanning:!1,networks:null,error:!1}),h=v[0],g=v[1];function $(){a(!1),n(null),L.getWifiConfig().then(function(S){n({ssid1:S.ssid1,password1:"",ssid2:S.ssid2,password2:""})}).catch(function(){a(!0)})}Z(function(){$()},[]);function m(S){return function(U){n(function(T){var A=Object.assign({},T);return A[S]=U,A})}}function b(){d||!window.confirm(o("settings.gplug.restart_confirm"))||(p(!0),L.restartDevice().then(function(){X(o("settings.gplug.restart_success"),{type:"info"})}).catch(function(){X(o("settings.gplug.restart_error"),{type:"error"})}).then(function(){p(!1)}))}function y(){s||!t||pt(li(t))||(c(!0),L.setWifiConfig(t).then(function(){X(o("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(S){X(S&&S.message||o("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}function k(){g({scanning:!0,networks:null,error:!1}),L.wifiScanStart().catch(function(){});var S=0;function U(){S+=1,L.wifiScanResult().then(function(T){var A=T&&(T.WiFiScan!==void 0?T.WiFiScan:T.WifiScan);if(A&&typeof A=="object"){var M=Object.keys(A).map(function(N){return A[N]});M.sort(function(N,I){return(Number(I.RSSI)||0)-(Number(N.RSSI)||0)}),g({scanning:!1,networks:M,error:!1});return}if(S>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(U,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(U,1e3)}function z(S,U){n(function(T){var A=Object.assign({},T);return A["ssid"+S]=U,A})}if(i)return u`
        <${F} group="grid">
          <p class="placeholder-text">${o("settings.load_error")}</p>
          <${Y} secondary small onClick=${$}>${o("settings.retry")}<//>
        <//>`;if(!t)return u`<${F} group="grid"><p class="placeholder-text">${o("settings.loading")}</p><//>`;var w=li(t);return u`
      <div>
        <${F} group="grid" title=${o("settings.gplug.restart_title")}>
          <p class="settings-scope">${o("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${Y} danger disabled=${d} onClick=${b}>
              ${o(d?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${o("settings.gplug.wifi_title")}>
          <p class="settings-scope">${o("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${o("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${H} label=${o("settings.gplug.ssid1")} value=${t.ssid1} error=${w.ssid1} onInput=${m("ssid1")} />
            <${H} label=${o("settings.gplug.password1")} type="password" value=${t.password1} error=${w.password1}
              placeholder=${o("settings.gplug.password_placeholder")} onInput=${m("password1")} />
          </div>
          <div class="settings-subhead">${o("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${H} label=${o("settings.gplug.ssid2")} value=${t.ssid2} error=${w.ssid2} onInput=${m("ssid2")} />
            <${H} label=${o("settings.gplug.password2")} type="password" value=${t.password2} error=${w.password2}
              placeholder=${o("settings.gplug.password_placeholder")} onInput=${m("password2")} />
          </div>

          <div class="settings-subhead">${o("settings.gplug.scan_button")}</div>
          <${Y} secondary small disabled=${h.scanning} onClick=${k}>
            ${h.scanning?o("settings.gplug.scanning"):o("settings.gplug.scan_button")}
          <//>
          ${h.error?u`<p class="settings-warn">${o("settings.gplug.scan_error")}</p>`:null}
          ${h.networks&&h.networks.length===0?u`<p class="placeholder-text">${o("settings.gplug.scan_empty")}</p>`:null}
          ${h.networks&&h.networks.length>0?u`
            <div class="wifi-scan-list">
              ${h.networks.map(function(S,U){return u`<${Zs} key=${U} net=${S} onUse=${function(T){z(T,S.SSId)}} />`})}
            </div>`:null}

          <${mt} disabled=${pt(w)} onSave=${y} saving=${s} />
        <//>
      </div>`}function Qs(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function oi(e){return e==null||isNaN(e)?"–":e<1024?e+" B":e<1024*1024?Math.round(e/1024)+" KB":Math.round(e/(1024*1024)*10)/10+" MB"}function Js(){var e=C(null),t=e[0],n=e[1],r=C(Gi()),i=r[0],a=r[1],l=C(!1),s=l[0],c=l[1];function f(g){if(!g.available||!g.siteId){n(null);return}tr(g.siteId).then(n,function(){n(null)})}Z(function(){var g=Zi(function($){a(Object.assign({},$)),f($)});return en().then(function($){a(Object.assign({},$)),f($)}),g},[]);function d(){s||(c(!0),Ll(L).then(function(g){f(g),X(o("settings.data.synced"),{type:"info"})},function(){X(o("settings.data.sync_error"),{type:"error"})}).then(function(){c(!1)}))}function p(){i.siteId&&Pl(i.siteId).then(function(g){Qs("gplug-archiv-"+i.siteId+".csv",g)},function(){X(o("settings.data.export_error"),{type:"error"})})}function v(g){var $=g.target&&g.target.files&&g.target.files[0];$&&(g.target.value="",$.text().then(function(m){return Ol(m,i.siteId)}).then(function(m){n(m),X(o("settings.data.import_ok",{count:m.count}),{type:"info"})},function(m){X(m&&m.message||o("settings.data.import_error"),{type:"error"})}))}if(i.available===!1)return u`
        <${F} group="grid" title=${o("settings.data.title")}>
          <p class="settings-warn">${o("settings.data.unavailable")}</p>
          <p class="settings-scope">${o("settings.data.multi_client")}</p>
        <//>`;if(!t)return u`<${F} group="grid"><p class="placeholder-text">${o("settings.loading")}</p><//>`;var h=t.estimate;return u`
      <div>
        <${F} group="grid" title=${o("settings.data.title")}>
          <p class="settings-scope">${o("settings.data.desc")}</p>
          <dl class="data-facts">
            <dt>${o("settings.data.site")}</dt><dd>${t.siteId}</dd>
            <dt>${o("settings.data.range")}</dt>
            <dd>${t.firstE15Ts===null?o("common.nodata"):x.time(t.firstE15Ts,"1d")+" – "+x.time(t.lastE15Ts,"1d")}</dd>
            <dt>${o("settings.data.records")}</dt><dd>${t.count} (${t.days} ${o("settings.data.days")})</dd>
            <dt>${o("settings.data.last_sync")}</dt>
            <dd>${t.syncedAt?x.time(t.syncedAt,"15m"):"–"}</dd>
            <dt>${o("settings.data.storage")}</dt>
            <dd>${h?oi(h.usage)+" / "+oi(h.quota):"–"}</dd>
          </dl>

          <div class="settings-subhead">${o("settings.data.gaps")}</div>
          ${t.gaps&&t.gaps.length?u`
            <ul class="data-gaps">
              ${t.gaps.map(function(g,$){return u`<li key=${$}>${x.time(g[0],"15m")} – ${x.time(g[1],"15m")}</li>`})}
            </ul>`:u`<p class="settings-scope">${o("settings.data.no_gaps")}</p>`}

          <div class="settings-actions">
            <${Y} secondary small disabled=${s} onClick=${d}>
              ${o(s?"settings.data.syncing":"settings.data.sync")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${o("settings.data.transfer_title")}>
          <p class="settings-scope">${o("settings.data.multi_client")}</p>
          <div class="settings-actions">
            <${Y} secondary small onClick=${p}>${o("settings.data.export")}<//>
            <label class="btn btn-secondary btn-small data-import-label">
              ${o("settings.data.import")}
              <input type="file" accept=".csv,text/csv" class="data-import-input"
                onChange=${v} />
            </label>
          </div>
        <//>
      </div>`}function eu(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function tu(e){var t=C(null),n=t[0],r=t[1],i=C(!1),a=i[0],l=i[1],s=C(!1),c=s[0],f=s[1];function d(){l(!1),r(null),L.getConfigRaw().then(function(g){r(eu(g))}).catch(function(){l(!0)})}Z(function(){d()},[]);var p=null,v=[];if(n!==null)try{v=Us(JSON.parse(n))}catch(g){p=g.message}function h(){if(!(c||p)){var g;try{g=JSON.parse(n)}catch{return}f(!0),L.postConfig(g).then(function(){X(o("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),d()}).catch(function($){X($&&$.message||o("settings.save_error"),{type:"error"})}).then(function(){f(!1)})}}return a?u`
        <${F} group="grid">
          <p class="placeholder-text">${o("settings.load_error")}</p>
          <${Y} secondary small onClick=${d}>${o("settings.retry")}<//>
        <//>`:n===null?u`<${F} group="grid"><p class="placeholder-text">${o("settings.loading")}</p><//>`:u`
      <${F} group="grid">
        <p class="settings-scope">${o("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${p?u`<p class="settings-warn">${o("settings.pro.invalid_json",{msg:p})}</p>`:null}
        ${v.length?u`
          <div class="settings-warn">
            <strong>${o("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${v.map(function(g,$){return u`<li key=${$}><code>${g.path||"/"}</code> — ${o(g.key)}</li>`})}
            </ul>
            <span>${o("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${Y} secondary disabled=${c} onClick=${d}>${o("settings.pro.reload")}<//>
          <${Y} disabled=${c||!!p} onClick=${h}>
            ${o(c?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function nu(){return{id:"",friendlyName:"",loadType:Pn[0],currentPower:"",priority:1,integration:"simulator",url:""}}function ru(){return{id:"",friendlyName:"",productionType:Yt[0],dimension:"W",integration:"simulator",url:""}}function iu(e){var t=e.params&&e.params.tab||"site",n=Ts[t]||"site",r=C(null),i=r[0],a=r[1],l=C(null),s=l[0],c=l[1],f=C(!1),d=f[0],p=f[1],v=C(!1),h=v[0],g=v[1],$=C({loads:[],productions:[],grid:[]}),m=$[0],b=$[1];function y(_){return(Array.isArray(_)?_:[]).map(function(E){return String(E&&E.id)}).filter(function(E){return!le(E)})}function k(){c(null),L.getConfig().then(function(_){a(z(_)),g(!le(_&&_.id)),b({loads:y(_&&_.loads),productions:y(_&&_.productions),grid:y(_&&_.grid)})}).catch(function(){c(!0),a(null)})}Z(function(){k()},[]);function z(_){_=_||{};var E=Object.assign({},_);return E.loads=Array.isArray(_.loads)?_.loads:[],E.productions=Array.isArray(_.productions)?_.productions:[],E.grid=Array.isArray(_.grid)?_.grid:[],E.tariffs=Object.assign({},Fs,_.tariffs||{}),E}function w(_,E){a(function(D){var W=Object.assign({},D);return W[_]=E,W})}function S(_,E){a(function(D){var W=Object.assign({},D);return W.tariffs=Object.assign({},D.tariffs),W.tariffs[_]=E,W})}function U(_){a(function(E){var D=Object.assign({},E);return D.tariffs=Object.assign({},E.tariffs),D.tariffs.ht_windows=_,D})}function T(_,E){a(function(D){var W=Object.assign({},D);return W[_]=E,W})}function A(){d||(p(!0),L.postConfig(M(i)).then(function(){X(o("settings.saved"),{type:"info"}),g(!0),k()}).catch(function(_){X(_&&_.message||o("settings.save_error"),{type:"error"})}).then(function(){p(!1)}))}function M(_){var E=Object.assign({},_);return E.loads=_.loads.map(function(D){var W=Object.assign({},D);return W.currentPower!==""&&W.currentPower!==void 0&&(W.currentPower=Number(W.currentPower)),W.priority!==""&&W.priority!==void 0&&(W.priority=Number(W.priority)),W}),E.tariffs=Object.assign({},_.tariffs),ua.forEach(function(D){E.tariffs[D]=Number(_.tariffs[D])}),_.tariffs.co2_g_kwh!==void 0&&_.tariffs.co2_g_kwh!==""&&(E.tariffs.co2_g_kwh=Number(_.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(D){le(_.tariffs[D])?delete E.tariffs[D]:E.tariffs[D]=Number(_.tariffs[D])}),Array.isArray(_.tariffs.ht_windows)&&(_.tariffs.ht_windows.length===0?delete E.tariffs.ht_windows:E.tariffs.ht_windows=_.tariffs.ht_windows.map(function(D){return{days:D.days,from:Number(D.from),to:Number(D.to)}})),E}function N(_){!_||le(_.id)||L.setLoadState(_.id,"INACTIVE").catch(function(){})}function I(_){Pe.navigate("/einstellungen/"+Ns[_])}var j=Es.map(function(_){return u`
        <button key=${_} type="button"
          class=${"pill"+(_===n?" pill-active":"")}
          onClick=${function(){I(_)}}>${o(Is[_])}</button>`}),R;return s?R=u`
        <${F}>
          <p class="placeholder-text">${o("settings.load_error")}</p>
          <${Y} secondary small onClick=${k}>${o("settings.retry")}<//>
        <//>`:i?n==="site"?R=u`<${Bs} cfg=${i} patch=${w} idLocked=${h}
        onSave=${A} saving=${d} />`:n==="tariffs"?R=u`<${qs} tariffs=${i.tariffs} patch=${S}
        setWindows=${U} onSave=${A} saving=${d} />`:n==="vzev"?R=u`<${Gs} />`:n==="daten"?R=u`<${Js} />`:n==="gplug"?R=u`<${Xs} />`:n==="pro"?R=u`<${tu} onSaved=${k} />`:n==="loads"?R=u`<${$n} group="loads"
        items=${i.loads} onChange=${function(_){T("loads",_)}}
        listTitle=${o("settings.tab.loads")}
        labelFn=${function(_){return _.friendlyName||_.id||o("settings.new_entry")}}
        blank=${nu} confirmKey="settings.confirm_delete_load"
        persistedIds=${m.loads}
        onDelete=${N}
        validate=${ca} Detail=${Hs}
        onSave=${A} saving=${d} />`:n==="productions"?R=u`<${$n} group="production"
        items=${i.productions} onChange=${function(_){T("productions",_)}}
        listTitle=${o("settings.tab.productions")}
        labelFn=${function(_){return _.friendlyName||_.id||o("settings.new_entry")}}
        blank=${ru} confirmKey="settings.confirm_delete_production"
        persistedIds=${m.productions}
        validate=${function(_,E){return fa(_,E)}} Detail=${Vs}
        onSave=${A} saving=${d} />`:n==="grid"&&(R=u`<${$n} group="grid" fixedList
        items=${i.grid} onChange=${function(_){T("grid",_)}}
        listTitle=${o("settings.tab.grid")}
        labelFn=${function(_){return _.id==="to"?o("settings.grid.to"):o("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${m.grid}
        validate=${function(_){return va(_)}} Detail=${Ks}
        onSave=${A} saving=${d} />`):R=u`<${F}><p class="placeholder-text">${o("settings.loading")}</p><//>`,u`
      <div>
        <${Oe} title=${o("page.settings")} />
        <div class="pill-bar">${j}</div>
        ${R}
      </div>`}var au=["https://gplug-ch.github.io/gplug-cdn/v1.0.13/lang.json"];function lu(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(s,c,f,d){for(var p=[],v=0;v<=90;v++){var h=e-900+v*10,g=v>=f&&v<=d?null:Math.max(0,s+c*Math.sin(v/9)+c*.4*Math.sin(v/2.3));p.push({t:h,y:g})}return p}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],l=0;l<23;l++)a.push({id:l,ts:x.time(e-l*900,"15m"),imp:x.num(Math.round(Math.random()*0+l*7)/100,2),chf:x.chf((l%3===0?-1:1)*l*.19,!0)});return u`
    <div>
      <${Oe} title=${o("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${u`<${Y} onClick=${function(){X("Toast!",{type:"info"})}}>Toast<//>`} />

      <${F} group="grid" title="LineChart" tooltip=${o("tooltip.consumption")}
        value=${x.w(1396)} valueColor="var(--c-consumption)">
        <${gt} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${x.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${F} group="vzev" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${x.chf(12.4,!0)} valueColor="var(--c-vzev)">
        <${Wn} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(s){return x.chf(s,!0)}}
          points=${r.map(function(s){return{t:s.t,y:s.y,color:s.y<0?"var(--c-import)":"var(--c-vzev)"}})} />
      <//>

      <${F} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${Pt} state="active" />
          <${Pt} state="waiting" />
          <${Pt} state="inactive" />
        </div>
        <div class="demo-row">
          <${Y}>Speichern<//>
          <${Y} secondary>Abbrechen<//>
          <${Y} danger>Löschen<//>
          <${Y} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${Ot} label="Anzeige-Name" value="Familie Huber" />
          <${Xt} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${F} group="production" title="DataTable">
        <${ja} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(s){var c=s.chf.indexOf("−")===0;return u`<span class=${c?"val-neg":"val-pos"}>${s.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function ou(){return[{path:"/",component:go},{path:"/verlauf",component:So},{path:"/zaehler",component:is},{path:"/vzev/mitglied/:id?",component:ms},{path:"/vzev/abrechnung",component:Ms},{path:"/vzev",component:ps},{path:"/einstellungen/:tab?",component:iu},{path:"/demo",component:lu}]}function si(){var e=document.getElementById("app"),t=au;Ta.load(t).catch(function(){}).then(function(){xa(u`<${Dl} routes=${ou()} />`,e),Fl(L)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",si):si();
