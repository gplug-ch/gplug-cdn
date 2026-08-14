(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Et,Q,yr,ze,Mn,wr,kr,Wt,pt,Je,xr,un,Gt,Zt,xt={},zt=[],zi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Pt=Array.isArray;function we(e,t){for(var n in t)e[n]=t[n];return e}function cn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function zr(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Et.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return ht(e,o,r,i,null)}function ht(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++yr,__i:-1,__u:0};return i==null&&Q.vnode!=null&&Q.vnode(a),a}function it(e){return e.children}function gt(e,t){this.props=e,this.context=t}function He(e,t){if(t==null)return e.__?He(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?He(e):null}function Ci(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=we({},t);a.__v=t.__v+1,Q.vnode&&Q.vnode(a),fn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??He(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Tr(r,a,i),t.__e=t.__=null,a.__e!=n&&Cr(a)}}function Cr(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Cr(e)}function Nn(e){(!e.__d&&(e.__d=!0)&&ze.push(e)&&!Ct.__r++||Mn!=Q.debounceRendering)&&((Mn=Q.debounceRendering)||wr)(Ct)}function Ct(){try{for(var e,t=1;ze.length;)ze.length>t&&ze.sort(kr),e=ze.shift(),t=ze.length,Ci(e)}finally{ze.length=Ct.__r=0}}function Sr(e,t,n,r,i,a,o,s,f,c,d){var h,v,p,g,b,$,y,m=r&&r.__k||zt,w=t.length;for(f=Si(n,t,m,f,w),h=0;h<w;h++)(p=n.__k[h])!=null&&(v=p.__i!=-1&&m[p.__i]||xt,p.__i=h,$=fn(e,p,v,i,a,o,s,f,c,d),g=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&vn(v.ref,null,p),d.push(p.ref,p.__c||g,p)),b==null&&g!=null&&(b=g),(y=!!(4&p.__u))||v.__k===p.__k?(f=Mr(p,f,e,y),y&&v.__e&&(v.__e=null)):typeof p.type=="function"&&$!==void 0?f=$:g&&(f=g.nextSibling),p.__u&=-7);return n.__e=b,f}function Si(e,t,n,r,i){var a,o,s,f,c,d=n.length,h=d,v=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=ht(null,o,null,null,null):Pt(o)?o=e.__k[a]=ht(it,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=ht(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,f=a+v,o.__=e,o.__b=e.__b+1,s=null,(c=o.__i=Mi(o,n,f,h))!=-1&&(h--,(s=n[c])&&(s.__u|=2)),s==null||s.__v==null?(c==-1&&(i>d?v--:i<d&&v++),typeof o.type!="function"&&(o.__u|=4)):c!=f&&(c==f-1?v--:c==f+1?v++:(c>f?v--:v++,o.__u|=4))):e.__k[a]=null;if(h)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==r&&(r=He(s)),Er(s,s));return r}function Mr(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Mr(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=He(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Mi(e,t,n,r){var i,a,o,s=e.key,f=e.type,c=t[n],d=c!=null&&(2&c.__u)==0;if(c===null&&s==null||d&&s==c.key&&f==c.type)return n;if(r>(d?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((c=t[o=i>=0?i--:a++])!=null&&(2&c.__u)==0&&s==c.key&&f==c.type)return o}return-1}function Tn(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||zi.test(t)?n:n+"px"}function ut(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Tn(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Tn(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(xr,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[Je]=r[Je]:(n[Je]=un,e.addEventListener(t,a?Zt:Gt,a)):e.removeEventListener(t,a?Zt:Gt,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function In(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[pt]==null)t[pt]=un++;else if(t[pt]<n[Je])return;return n(Q.event?Q.event(t):t)}}}function fn(e,t,n,r,i,a,o,s,f,c){var d,h,v,p,g,b,$,y,m,w,M,z,I,U,N,O,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=Q.__b)&&d(t);e:if(typeof C=="function"){h=o.length;try{if(m=t.props,w=C.prototype&&C.prototype.render,M=(d=C.contextType)&&r[d.__c],z=d?M?M.props.value:d.__:r,n.__c?y=(v=t.__c=n.__c).__=v.__E:(w?t.__c=v=new C(m,z):(t.__c=v=new gt(m,z),v.constructor=C,v.render=Ti),M&&M.sub(v),v.state||(v.state={}),v.__n=r,p=v.__d=!0,v.__h=[],v._sb=[]),w&&v.__s==null&&(v.__s=v.state),w&&C.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=we({},v.__s)),we(v.__s,C.getDerivedStateFromProps(m,v.__s))),g=v.props,b=v.state,v.__v=t,p)w&&C.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),w&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(w&&C.getDerivedStateFromProps==null&&m!==g&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(m,z),t.__v==n.__v||!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(m,v.__s,z)===!1){t.__v!=n.__v&&(v.props=m,v.state=v.__s,v.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(E){E&&(E.__=t)}),zt.push.apply(v.__h,v._sb),v._sb=[],v.__h.length&&o.push(v);break e}v.componentWillUpdate!=null&&v.componentWillUpdate(m,v.__s,z),w&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(g,b,$)})}if(v.context=z,v.props=m,v.__P=e,v.__e=!1,I=Q.__r,U=0,w)v.state=v.__s,v.__d=!1,I&&I(t),d=v.render(v.props,v.state,v.context),zt.push.apply(v.__h,v._sb),v._sb=[];else do v.__d=!1,I&&I(t),d=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++U<25);v.state=v.__s,v.getChildContext!=null&&(r=we(we({},r),v.getChildContext())),w&&!p&&v.getSnapshotBeforeUpdate!=null&&($=v.getSnapshotBeforeUpdate(g,b)),N=d!=null&&d.type===it&&d.key==null?Ir(d.props.children):d,s=Sr(e,Pt(N)?N:[N],t,n,r,i,a,o,s,f,c),v.base=t.__e,t.__u&=-161,v.__h.length&&o.push(v),y&&(v.__E=v.__=null)}catch(E){if(o.length=h,t.__v=null,f||a!=null){if(E.then){for(t.__u|=f?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(O=a.length;O--;)cn(a[O])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),E.then||Nr(t),Q.__e(E,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Ni(n.__e,t,n,r,i,a,o,f,c);return(d=Q.diffed)&&d(t),128&t.__u?void 0:s}function Nr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Nr))}function Tr(e,t,n){for(var r=0;r<n.length;r++)vn(n[r],n[++r],n[++r]);Q.__c&&Q.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){Q.__e(a,i.__v)}})}function Ir(e){return typeof e!="object"||e==null||e.__b>0?e:Pt(e)?e.map(Ir):e.constructor!==void 0?null:we({},e)}function Ni(e,t,n,r,i,a,o,s,f){var c,d,h,v,p,g,b,$=n.props||xt,y=t.props,m=t.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((p=a[c])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){e=p,a[c]=null;break}}if(e==null){if(m==null)return document.createTextNode(y);e=document.createElementNS(i,m,y.is&&y),s&&(Q.__m&&Q.__m(t,a),s=!1),a=null}if(m==null)$===y||s&&e.data==y||(e.data=y);else{if(a=m=="textarea"&&y.defaultValue!=null?null:a&&Et.call(e.childNodes),!s&&a!=null)for($={},c=0;c<e.attributes.length;c++)$[(p=e.attributes[c]).name]=p.value;for(c in $)p=$[c],c=="dangerouslySetInnerHTML"?h=p:c=="children"||c in y||c=="value"&&"defaultValue"in y||c=="checked"&&"defaultChecked"in y||ut(e,c,null,p,i);for(c in y)p=y[c],c=="children"?v=p:c=="dangerouslySetInnerHTML"?d=p:c=="value"?g=p:c=="checked"?b=p:s&&typeof p!="function"||$[c]===p||ut(e,c,p,$[c],i);if(d)s||h&&(d.__html==h.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(h&&(e.innerHTML=""),Sr(t.type=="template"?e.content:e,Pt(v)?v:[v],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&He(n,0),s,f),a!=null)for(c=a.length;c--;)cn(a[c]);s&&m!="textarea"||(c="value",m=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[c]||m=="progress"&&!g||m=="option"&&g!=$[c])&&ut(e,c,g,$[c],i),c="checked",b!=null&&b!=e[c]&&ut(e,c,b,$[c],i))}return e}function vn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){Q.__e(i,n)}}function Er(e,t,n){var r,i;if(Q.unmount&&Q.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||vn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){Q.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Er(r[i],t,n||typeof e.type!="function");n||cn(e.__e),e.__c=e.__=e.__e=void 0}function Ti(e,t,n){return this.constructor(e,n)}function Ii(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),Q.__&&Q.__(e,t),i=(r=!1)?null:t.__k,a=[],o=[],fn(t,e=t.__k=zr(it,null,[e]),i||xt,xt,t.namespaceURI,i?null:t.firstChild?Et.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),Tr(a,e,o),e.props.children=null}Et=zt.slice,Q={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(s){e=s}throw e}},yr=0,gt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=we({},this.state),typeof e=="function"&&(e=e(we({},n),this.props)),e&&we(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Nn(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Nn(this))},gt.prototype.render=it,ze=[],wr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,kr=function(e,t){return e.__v.__b-t.__v.__b},Ct.__r=0,Wt=Math.random().toString(8),pt="__d"+Wt,Je="__a"+Wt,xr=/(PointerCapture)$|Capture$/i,un=0,Gt=In(!1),Zt=In(!0);var tt,te,Dt,En,St=0,Pr=[],re=Q,Pn=re.__b,Ln=re.__r,On=re.diffed,Fn=re.__c,Rn=re.unmount,An=re.__;function dn(e,t){re.__h&&re.__h(te,e,St||t),St=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function x(e){return St=1,Ei(Or,e)}function Ei(e,t,n){var r=dn(tt++,2);if(r.t=e,!r.__c&&(r.__=[Or(void 0,t),function(s){var f=r.__N?r.__N[0]:r.__[0],c=r.t(f,s);f!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=te,!te.__f)){var i=function(s,f,c){if(!r.__c.__H)return!0;var d=!1,h=r.__c.props!==s;if(r.__c.__H.__.some(function(p){if(p.__N){d=!0;var g=p.__[0];p.__=p.__N,p.__N=void 0,g!==p.__[0]&&(h=!0)}}),a){var v=a.call(this,s,f,c);return d?v||h:v}return!d||h};te.__f=!0;var a=te.shouldComponentUpdate,o=te.componentWillUpdate;te.componentWillUpdate=function(s,f,c){if(this.__e){var d=a;a=void 0,i(s,f,c),a=d}o&&o.call(this,s,f,c)},te.shouldComponentUpdate=i}return r.__N||r.__}function J(e,t){var n=dn(tt++,3);!re.__s&&Lr(n.__H,t)&&(n.__=e,n.u=t,te.__H.__h.push(n))}function be(e){return St=5,Ee(function(){return{current:e}},[])}function Ee(e,t){var n=dn(tt++,7);return Lr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Pi(){for(var e;e=Pr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(mt),t.__h.some(Qt),t.__h=[]}catch(n){t.__h=[],re.__e(n,e.__v)}}}re.__b=function(e){te=null,Pn&&Pn(e)},re.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),An&&An(e,t)},re.__r=function(e){Ln&&Ln(e),tt=0;var t=(te=e.__c).__H;t&&(Dt===te?(t.__h=[],te.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(mt),t.__h.some(Qt),t.__h=[],tt=0)),Dt=te},re.diffed=function(e){On&&On(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Pr.push(t)!==1&&En===re.requestAnimationFrame||((En=re.requestAnimationFrame)||Li)(Pi)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),Dt=te=null},re.__c=function(e,t){t.some(function(n){try{n.__h.some(mt),n.__h=n.__h.filter(function(r){return!r.__||Qt(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],re.__e(r,n.__v)}}),Fn&&Fn(e,t)},re.unmount=function(e){Rn&&Rn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{mt(r)}catch(i){t=i}}),n.__H=void 0,t&&re.__e(t,n.__v))};var Wn=typeof requestAnimationFrame=="function";function Li(e){var t,n=function(){clearTimeout(r),Wn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Wn&&(t=requestAnimationFrame(n))}function mt(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t}function Qt(e){var t=te;e.__c=e.__(),te=t}function Lr(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Or(e,t){return typeof t=="function"?t(e):t}var Fr=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],s=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?r[0]=s:o===4?r[1]=Object.assign(r[1]||{},s):o===5?(r[1]=r[1]||{})[t[++a]]=s:o===6?r[1][t[++a]]+=s+"":o?(i=e.apply(s,Fr(e,s,n,["",null])),r.push(i),s[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(s)}return r},Dn=new Map;function Oi(e){var t=Dn.get(this);return t||(t=new Map,Dn.set(this,t)),(t=Fr(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,o="",s="",f=[0],c=function(v){a===1&&(v||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?f.push(0,v,o):a===3&&(v||o)?(f.push(3,v,o),a=2):a===2&&o==="..."&&v?f.push(4,v,0):a===2&&o&&!v?f.push(5,0,!0,o):a>=5&&((o||!v&&a===5)&&(f.push(a,0,o,i),a=6),v&&(f.push(a,v,0,i),a=6)),o=""},d=0;d<n.length;d++){d&&(a===1&&c(),c(d));for(var h=0;h<n[d].length;h++)r=n[d][h],a===1?r==="<"?(c(),f=[f],a=3):o+=r:a===4?o==="--"&&r===">"?(a=1,o=""):o=r+o[0]:s?r===s?s="":o+=r:r==='"'||r==="'"?s=r:r===">"?(c(),a=1):a&&(r==="="?(a=5,i=o,o=""):r==="/"&&(a<5||n[d][h+1]===">")?(c(),a===3&&(f=f[0]),a=f,(f=f[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),a=2):o+=r),a===3&&o==="!--"&&(a=4,f=f[0])}return c(),f})(e)),t),arguments,[])).length>1?t:t[0]}const u=Oi.bind(zr);var et={},Rr="de",Un={};function l(e,t){var n=et[e];return n===void 0?(Un[e]||(Un[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function Fi(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return et=i||{},Rr=et["meta.lang"]||document.documentElement.lang||"de",et}).catch(function(){return n()})}return n()}const Ri={t:l,load:Fi,getLang:function(){return Rr},getDict:function(){return et}};var nt=" ",Ar="−";function je(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?Ar:"")+r}function Ai(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function Wi(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Ai(je(e/1e3,1))+nt+"kW":je(Math.round(e),0)+nt+"W"}function Di(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?je(e/1e3,2)+nt+"kWh":je(Math.round(e),0)+nt+"Wh"}function Ui(e,t){if(e==null||isNaN(e))return"–";var n=je(e,2);return t&&e>0&&(n="+"+n),n+nt+"CHF"}function Te(e){return(e<10?"0":"")+e}function Bi(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=Te(n.getDate())+"."+Te(n.getMonth()+1)+"."+n.getFullYear(),i=Te(n.getHours())+":"+Te(n.getMinutes());switch(t){case"1d":return r;case"dm":return Te(n.getDate())+"."+Te(n.getMonth()+1)+".";case"1mo":return Te(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const k={num:je,w:Wi,wh:Di,chf:Ui,time:Bi,MINUS:Ar};function Me(e){return u`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?u`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?u`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function W(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:"");return u`
      <section class=${t}>
        ${e.title||e.value||e.badge||e.tooltip?u`
          <div class="card-head">
            <div class="card-head-left">
              ${e.title?u`<h2 class="card-title">${e.title}</h2>`:null}
              ${e.tooltip?u`<${ce} text=${e.tooltip} />`:null}
              ${e.subtitle?u`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?u`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${e.children}
      </section>`}function $t(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return u`<span class=${r}>${l(n)}</span>`}function Y(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return u`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function Lt(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function _t(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function ce(e){var t=x(!1),n=t[0],r=t[1],i=x(null),a=i[0],o=i[1],s=be(null),f=be(null);return J(function(){if(!n)return;function c(m){m.key==="Escape"&&r(!1)}function d(m){f.current&&!f.current.contains(m.target)&&r(!1)}document.addEventListener("keydown",c),document.addEventListener("click",d);var h=s.current,v=f.current;if(h&&v){var p=v.getBoundingClientRect(),g=h.getBoundingClientRect(),b=p.left+p.width/2,$=Math.max(8,Math.min(b-g.width/2,window.innerWidth-8-g.width)),y=p.top-g.height-8;y<8&&(y=p.bottom+8),o({left:$,top:y})}return function(){document.removeEventListener("keydown",c),document.removeEventListener("click",d),o(null)}},[n]),u`
      <span class="tooltip-wrap" ref=${f}>
        <button type="button" class="tooltip-icon" aria-label=${e.text}
          aria-expanded=${n}
          onMouseEnter=${function(){r(!0)}}
          onMouseLeave=${function(){r(!1)}}
          onFocus=${function(){r(!0)}}
          onBlur=${function(){r(!1)}}
          onClick=${function(c){c.stopPropagation(),r(!n)}}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
            <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
            <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
          </svg>
        </button>
        ${n?u`
          <span class="tooltip-bubble" role="tooltip" ref=${s}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var bt=[],Hi=0;function le(e,t){t=t||{};var n={id:++Hi,message:e,type:t.type||"info",ttl:t.ttl||5e3};bt.forEach(function(r){r(n)})}function ji(){var e=x([]),t=e[0],n=e[1];return J(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(o){return o.id!==i.id})})},i.ttl)}return bt.push(r),function(){var i=bt.indexOf(r);i>=0&&bt.splice(i,1)}},[]),u`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return u`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${l("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var K={top:22,right:14,bottom:24,left:46};function Wr(e){var t=x(0),n=t[0],r=t[1];return J(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function Dr(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var o=[],s=Math.ceil(e/i)*i,f=s;f<=t+i*1e-9;f+=i)o.push(Math.abs(f)<i*1e-9?0:f);return o}function pn(e){return Math.abs(e)>=1e3?k.num(e/1e3,1).replace(/\.0$/,"")+"k":k.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function Vi(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function qi(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var o=0;o<r;o++)a.push(o);else for(var s=0;s<i;s++)a.push(Math.round(s*(r-1)/(i-1)));var f=[],c=null,d=-1;return a.forEach(function(h){if(h!==d){d=h;var v=n(e[h].t);v!==c&&(c=v,f.push(h))}}),f}function Ur(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function Br(e){return u`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return u`
            <g key=${"y"+t}>
              <line x1=${K.left} x2=${e.width-K.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${K.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${pn(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-K.right-34?null:u`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${K.left} x2=${K.left} y1=${K.top-6} y2=${e.height-K.bottom}
          class="ch-axis" />
        <text x=${K.left-40} y=${K.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-K.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function Bn(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function Ki(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function Yi(e,t,n,r){var i=Ki(e,t),a=[];if(i.length<2)return a;var o=[];function s(){if(o.length>=2){var g="M"+n(o[0].t).toFixed(1)+" "+r(o[0].top).toFixed(1),b;for(b=1;b<o.length;b++)g+="L"+n(o[b].t).toFixed(1)+" "+r(o[b].top).toFixed(1);for(b=o.length-1;b>=0;b--)g+="L"+n(o[b].t).toFixed(1)+" "+r(o[b].bottom).toFixed(1);a.push(g+"Z")}o=[]}for(var f=0;f<i.length;f++){var c=i[f],d=c.top-c.bottom;if(d>0?o.push(c):s(),f<i.length-1){var h=i[f+1],v=h.top-h.bottom;if(d>0!=v>0&&d!==v){var p=d/(d-v);o.push({t:c.t+(h.t-c.t)*p,top:c.top+(h.top-c.top)*p,bottom:c.bottom+(h.bottom-c.bottom)*p}),d>0&&s()}}}return s(),a}function Hr(e,t,n,r){var i=n>t-150;return u`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,o){return u`
            <div key=${o} class="ch-hover-line">
              ${a.color?u`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function at(e){var t=be(null),n=Wr(t),r=x(null),i=r[0],a=r[1],o=e.height||180,s=e.series||[],f=e.timeWindow;if(!f){var c=1/0,d=-1/0;s.forEach(function(C){C.points.forEach(function(E){E.t<c&&(c=E.t),E.t>d&&(d=E.t)})}),f=c===1/0?[0,1]:[c,d]}var h=f[0],v=f[1]>f[0]?f[1]:f[0]+1,p=[];s.forEach(function(C){C.points.forEach(function(E){p.push(E.y)})});var g=Ur(p,!1),b=Math.max(10,n-K.left-K.right),$=o-K.top-K.bottom;function y(C){return K.left+(C-h)/(v-h)*b}function m(C){return K.top+(1-(C-g[0])/(g[1]-g[0]))*$}var w=Dr(g[0],g[1],4),M=e.xTickFormat||function(C){return k.time(C,"hm")},z=Vi(h,v,Math.max(2,Math.min(5,Math.floor(b/90)))).map(function(C){return{x:y(C),label:M(C)}});function I(C){var E=[],T=[];C.forEach(function(R){R.y===null||R.y===void 0?(T.length&&E.push(T),T=[]):T.push(R)}),T.length&&E.push(T);var B=m(Math.max(0,g[0]));return E.map(function(R){var _=R.map(function(A,D){return(D===0?"M":"L")+y(A.t).toFixed(1)+" "+m(A.y).toFixed(1)}).join(""),S=_+"L"+y(R[R.length-1].t).toFixed(1)+" "+B.toFixed(1)+"L"+y(R[0].t).toFixed(1)+" "+B.toFixed(1)+"Z";return{line:_,area:S}})}function U(C){if(t.current){var E=t.current.getBoundingClientRect(),T=C.clientX-E.left;if(T<K.left||T>n-K.right){a(null);return}var B=h+(T-K.left)/b*(v-h);a(B)}}var N=null,O=[];return i!==null&&(O.push({text:M(i)}),s.forEach(function(C){var E=Bn(C.points,i);E>=0&&(N===null&&(N=y(C.points[E].t)),O.push({color:C.color,text:(C.label?C.label+": ":"")+(e.yFormat||pn)(C.points[E].y)+(e.yFormat?"":" "+e.yUnit)}))}),N===null&&(N=y(i))),u`
      <div class="chart" ref=${t}
        onPointerMove=${U}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${Br} width=${n} height=${o} sy=${m}
              yTicks=${w} xTicks=${z}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(C,E){return Yi(C.top,C.bottom,y,m).map(function(T,B){return u`<path key=${E+"-"+B} class="ch-band" d=${T} fill=${C.color} stroke="none"/>`})})}
            ${s.map(function(C,E){return I(C.points).map(function(T,B){return u`
                  <g key=${E+"-"+B}>
                    ${C.fill?u`<path class="ch-area" d=${T.area} fill=${C.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${T.line} fill="none" stroke=${C.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${N!==null?u`
              <line x1=${N} x2=${N} y1=${K.top-4} y2=${o-K.bottom} class="ch-crosshair"/>
              ${s.map(function(C,E){var T=Bn(C.points,i);return T>=0?u`
                  <circle key=${E} cx=${y(C.points[T].t)} cy=${m(C.points[T].y)} r="3.5"
                    fill=${C.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${N!==null?Hr(t,n,N,O):null}`:null}
      </div>`}function hn(e){var t=be(null),n=Wr(t),r=x(null),i=r[0],a=r[1],o=e.height||180,s=e.points||[];function f(_){return(_.segments||[]).reduce(function(S,A){return S+(A.value||0)},0)}function c(_){return _.bars?_.bars.map(f):[_.y]}var d=s.reduce(function(_,S){return S.bars?Math.max(_,S.bars.length):_},1),h=[];s.forEach(function(_){c(_).forEach(function(S){h.push(S)})});var v=Ur(h,!0),p=Math.max(10,n-K.left-K.right),g=o-K.top-K.bottom;function b(_){return K.top+(1-(_-v[0])/(v[1]-v[0]))*g}var $=s.length,y=$>0?p/$:p;function m(_){return K.left+(_+.5)*y}var w=Math.max(1,Math.min(y-1,y*.72,46)),M=Dr(v[0],v[1],4),z=e.xTickFormat||function(_){return k.time(_,"hm")},I=qi(s,p,z).map(function(_){return{x:m(_),label:z(s[_].t)}}),U=b(0),N=s.length+"|"+(s.length?s[0].t+"-"+s[s.length-1].t:"")+"|"+d+"|"+(e.yUnit||"");function O(_){if(!t.current||!$){a(null);return}var S=t.current.getBoundingClientRect(),A=_.clientX-S.left;if(A<K.left||A>n-K.right){a(null);return}var D=Math.floor((A-K.left)/y);a(D<0?0:D>=$?$-1:D)}var C=e.yFormat||pn;function E(_){return C(_)+(e.yFormat?"":" "+(e.yUnit||""))}var T=null,B=[];if(i!==null&&s[i]){var R=s[i];T=m(i),B.push({text:z(R.t)}),R.bars?R.bars.forEach(function(_){(_.segments||[]).forEach(function(S){S.value&&B.push({color:S.color,text:(S.label?S.label+": ":"")+E(S.value)})})}):R.y!==null&&R.y!==void 0&&B.push({color:R.color||e.color,text:E(R.y)})}return u`
      <div class="chart" ref=${t}
        onPointerMove=${O}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${Br} width=${n} height=${o} sy=${b}
              yTicks=${M} xTicks=${I}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${N}>
            ${s.map(function(_,S){var A=i===S?"1":"0.85";if(_.bars){var D=m(S)-w/2,ue=w/d;return u`<g key=${S}>${_.bars.map(function(fe,P){var V=D+P*ue+1,G=Math.max(1,ue-2),ne=0;return(fe.segments||[]).map(function(Fe,L){var ee=Fe.value||0;if(ee<=0)return null;var ae=b(ne+ee),oe=Math.max(1,b(ne)-ae);return ne+=ee,u`
                      <rect key=${P+"-"+L} class="ch-bar ch-bar-up"
                        x=${V.toFixed(1)} y=${ae.toFixed(1)}
                        width=${G.toFixed(1)} height=${oe.toFixed(1)} rx="1.5"
                        fill=${Fe.color} opacity=${A}/>`})})}</g>`}if(_.y===null||_.y===void 0)return null;var se=m(S)-w/2,j=b(_.y),X=Math.min(j,U),pe=Math.max(1,Math.abs(j-U));return u`
                <rect key=${S} class=${"ch-bar "+(_.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${se.toFixed(1)} y=${X.toFixed(1)}
                  width=${w.toFixed(1)} height=${pe.toFixed(1)} rx="2"
                  fill=${_.color||e.color||"var(--c-consumption)"}
                  opacity=${A}/>`})}
            </g>
            <line x1=${K.left} x2=${n-K.right} y1=${U} y2=${U} class="ch-zero-strong"/>
          </svg>
          ${T!==null?Hr(t,n,T,B):null}`:null}
      </div>`}var Gi=[10,25,50];function Zi(e){var t=x(0),n=t[0],r=t[1],i=x(e.pageSize||10),a=i[0],o=i[1],s=e.rows||[],f=s.length,c=Math.max(1,Math.ceil(f/a)),d=Math.min(n,c-1),h=d*a,v=Math.min(h+a,f),p=s.slice(h,v);return u`
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
              <tr><td class="table-empty" colspan=${e.columns.length}>${l("common.nodata")}</td></tr>`:p.map(function(g,b){return u`
                  <tr key=${g.id!==void 0?g.id:h+b}>
                    ${e.columns.map(function($){return u`
                        <td key=${$.key} class=${$.align==="right"?"ta-r":""}>
                          ${$.render?$.render(g):g[$.key]}
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
                ${Gi.map(function(g){return u`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${l("table.pageinfo",{from:f===0?0:h+1,to:v,total:f})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${l("table.prev")}
              disabled=${d===0} onClick=${function(){r(d-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${l("table.next")}
              disabled=${d>=c-1} onClick=${function(){r(d+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function jr(e,t){var n=e.split("/").filter(function(c){return c!==""}),r=t.split("/").filter(function(c){return c!==""}),i={},a;for(a=0;a<n.length;a++){var o=n[a];if(o.charAt(0)===":"){var s=o.slice(-1)==="?",f=o.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(s)continue;return null}i[f]=decodeURIComponent(r[a])}else if(o!==r[a])return null}return r.length>n.length?null:i}function Xt(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=jr(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function Qi(e){var t=x(function(){return Xt(e)}),n=t[1];return J(function(){function r(){n(Xt(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const Se={match:jr,parse:Xt,useRoute:Qi,navigate:function(e){window.location.hash="#"+e}};var Xi=["imp_wh","exp_wh","pv_wh","vzev_in_wh","vzev_out_wh"],Ji=["grid_ht_wh","grid_nt_wh"];function ve(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function gn(e,t){t=t||{};var n=Ce(t.grid_import_chf_kwh,.26),r=Ce(t.grid_feedin_chf_kwh,.18),i=Ce(t.vzev_import_chf_kwh,.22),a=Ce(t.vzev_export_chf_kwh,.22),o=e.imp_wh,s=e.exp_wh,f=e.pv_wh,c=e.vzev_in_wh||0,d=e.vzev_out_wh||0,h={};for(var v in e)h[v]=e[v];if(h.cost_import_chf=o==null?null:ve((o-c)/1e3*n),h.revenue_feedin_chf=s==null?null:ve((s-d)/1e3*r),h.cost_vzev_chf=ve(c/1e3*i),h.revenue_vzev_chf=ve(d/1e3*a),h.saving_selfuse_chf=f==null||s===null||s===void 0?null:ve(Math.max(0,(f-s)/1e3*(n-r))),Ot(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var p=Ce(t.grid_import_ht_chf_kwh,n),g=Ce(t.grid_import_nt_chf_kwh,n);h.cost_import_ht_chf=ve(e.grid_ht_wh/1e3*p),h.cost_import_nt_chf=ve(e.grid_nt_wh/1e3*g),h.cost_import_chf=ve(h.cost_import_ht_chf+h.cost_import_nt_chf)}return h}function Ce(e,t){return e==null||isNaN(e)?t:Number(e)}var ct={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Vr(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(f){return Vr(f,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=ct[i.slice(0,a)],s=ct[i.slice(a+1)];if(o!==void 0&&s!==void 0){if(o<=s){if(t>=o&&t<=s)return!0}else if(t>=o||t<=s)return!0}}else if(ct[i]!==void 0&&ct[i]===t)return!0}return!1}function Ot(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function ea(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,o=0;o<a.length;o++){var s=a[o]||{};if(Vr(s.days,r)&&i>=Ce(s.from,0)&&i<Ce(s.to,0))return!0}return!1}function qr(e,t){if(!Ot(t))return e;var n=e.imp_wh,r=e.vzev_in_wh||0;if(n==null)return e;var i=n-r;i<0&&(i=0);var a={};for(var o in e)a[o]=e[o];return ea(e.ts,t)?(a.grid_ht_wh=i,a.grid_nt_wh=0):(a.grid_ht_wh=0,a.grid_nt_wh=i),a}function ta(e,t){var n={ts:e},r=!1;return Xi.forEach(function(i){var a=0,o=!1,s=!1;t.forEach(function(f){var c=f[i];c==null?s=!0:(a+=c,o=!0)}),n[i]=o?a:null,o&&s&&(r=!0)}),Ji.forEach(function(i){var a=0,o=!1;t.forEach(function(s){var f=s[i];f!=null&&(a+=f,o=!0)}),o&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function na(e){return e-e%3600}function ra(e){var t=e-Jt(e,86400),n=Jt(Math.floor(t/86400)+3,7);return t-n*86400}function Jt(e,t){return(e%t+t)%t}function mn(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function ia(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function Ge(e,t,n){var r={},i=[];(e||[]).forEach(function(o){var s=t(o.ts);r[s]||(r[s]=[],i.push(s)),r[s].push(o)});var a=i.map(function(o){return gn(ta(Number(o),r[o]),n)});return a.sort(function(o,s){return o.ts-s.ts}),a}function Hn(e,t,n,r){if(e=e||[],Ot(r)&&t==="15m"&&(e=e.map(function(a){return qr(a,r)})),t===n){var i=e.map(function(a){return gn(a,r)});return i.sort(function(a,o){return a.ts-o.ts}),i}switch(n){case"1h":return Ge(e,na,r);case"1w":return Ge(e,ra,r);case"1q":return Ge(e,ia,r);case"1mo":return Ge(e,mn,r);case"1d":default:return Ge(e,function(a){return a-Jt(a,86400)},r)}}function en(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function aa(e){if(e=(e||[]).filter(function(s){return s!=null&&!isNaN(s)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=en(e.slice(0,t)),r=en(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",o=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:o}}function la(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function oa(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function sa(e){return e-e%86400}function Mt(e,t){if(!Array.isArray(e))return null;for(var n=Math.floor(e.length/3),r=0;r<n;r++)if(e[r*3]===t)return[e[r*3+1],e[r*3+2]];return null}function Kr(e,t){var n={},r=[],i=0;t=t||{};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=t[a];(o==null||o<0)&&(o=0),t[a]=o,r.push(a),i+=o,n[a]=0}if(r.length===0)return n;r.sort(),e<0&&(e=0);var s=e<i?e:i;if(s<=0||i<=0)return n;var f={},c=0;r.forEach(function(p){var g=s*t[p],b=Math.floor(g/i);f[p]=g-b*i,n[p]=b,c+=b});for(var d=s-c;d>0;){var h=null,v=-1;if(r.forEach(function(p){f[p]>v&&(v=f[p],h=p)}),h===null)break;n[h]+=1,f[h]=-1,d-=1}return n}function Yr(e){e=e||{};var t=e.data||{},n=e.producer_id,r={},i=[];for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a))for(var o=t[a],s=Math.floor((o?o.length:0)/3),f=0;f<s;f++){var c=o[f*3];r[c]||(r[c]=!0,i.push(c))}return i.sort(function(d,h){return d-h}),i.map(function(d){var h={},v=0;for(var p in t)if(Object.prototype.hasOwnProperty.call(t,p)){var g=Mt(t[p],d);g!==null&&(p===n?v=g[1]:h[p]=g[0])}return{ts:d,members:Kr(v,h)}})}function jn(e,t){var n={},r=[];return e.forEach(function(i){var a=t(i.ts),o=n[a];o||(o={},n[a]=o,r.push(a));var s=i.members||{};for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(o[f]=(o[f]||0)+s[f])}),r.sort(function(i,a){return i-a}),r.map(function(i){return{ts:i,members:n[i]}})}function Vn(e,t,n){(n==null||n<1)&&(n=96);var r=Yr(e),i;t==="1d"?i=jn(r,sa):t==="1mo"?i=jn(r,mn):i=r;var a=i.length>n?i.length-n:0;return i.slice(a)}function ua(e){if(typeof e!="string"||e.length!==7||e[4]!=="-"||e[5]!=="Q")return null;var t=parseInt(e.slice(0,4),10),n=parseInt(e[6],10);if(isNaN(t)||isNaN(n)||n<1||n>4)return null;var r=(n-1)*3,i=Math.floor(Date.UTC(t,r,1)/1e3),a=Math.floor(Date.UTC(t,r+3,1)/1e3);return[i,a]}function ca(e,t,n,r,i){n=n||[],r=r||{};var a={};n.forEach(function(N){N&&N.id!==void 0&&(a[N.id]=N)});var o=_n(r),s={};n.forEach(function(N){N&&N.id!==void 0&&(s[N.id]=he(N.entry_ts,0))});var f={},c={},d={},h={},v={},p=0;(t||[]).forEach(function(N){var O=mn(N.ts),C=o&&da(N.ts,r)==="ht",E=N.members||{};for(var T in E)if(Object.prototype.hasOwnProperty.call(E,T)&&!(s[T]&&N.ts<s[T])){var B=E[T]||0;f[T]=(f[T]||0)+B,C?c[T]=(c[T]||0)+B:d[T]=(d[T]||0)+B;var R=h[T];R||(R={},h[T]=R),R[O]=(R[O]||0)+B,v[O]=(v[O]||0)+B,p+=B}});var g=he(r.vzev_export_chf_kwh,0),b=he(r.vzev_import_chf_kwh,0),$=[];for(var y in f)if(Object.prototype.hasOwnProperty.call(f,y)){var m=f[y],w=a[y],M={id:y,name:w&&w.name!==void 0?w.name:y,wh:m,chf:ve(m/1e3*b)};w&&(w.location!==void 0&&(M.location=w.location),w.metering_point!==void 0&&(M.metering_point=w.metering_point),w.entry_ts!==void 0&&(M.entry_ts=w.entry_ts)),o&&(M.ht_wh=c[y]||0,M.nt_wh=d[y]||0);var z=he(r.grid_import_chf_kwh,null);z!==null&&(M.cost_grid_chf=ve(o?M.ht_wh/1e3*he(r.grid_import_ht_chf_kwh,z)+M.nt_wh/1e3*he(r.grid_import_nt_chf_kwh,z):m/1e3*z)),M.months=qn(h[y]),$.push(M)}var I=qn(v),U={quarter:e,months:I,total:{exp_wh:p,revenue_chf:ve(p/1e3*g),months:I},members:$,note:"15-min Messwerte, Abgleich mit Netzbetreiber pro Quartal"};return i!=null&&(U.quality=i),U}function he(e,t){return e==null||isNaN(e)?t:Number(e)}function qn(e){e=e||{};var t=Object.keys(e).map(Number).sort(function(n,r){return n-r});return t.map(function(n){return{ts:n,wh:e[n]}})}function fa(e){var t=new Date(e*1e3);return(t.getDay()+6)%7}function va(e){var t=new Date(e*1e3);return t.getHours()+t.getMinutes()/60}var ft={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function $n(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(f){return $n(f,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=ft[i.slice(0,a)],s=ft[i.slice(a+1)];if(o!==void 0&&s!==void 0){if(o<=s){if(t>=o&&t<=s)return!0}else if(t>=o||t<=s)return!0}}else if(ft[i]!==void 0&&ft[i]===t)return!0}return!1}function _n(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function da(e,t){if(!_n(t))return"flat";for(var n=fa(e),r=va(e),i=t.ht_windows,a=0;a<i.length;a++){var o=i[a]||{},s=he(o.from,0),f=he(o.to,0);if($n(o.days,n)&&r>=s&&r<f)return"ht"}return"nt"}function pa(e){var t=e.ht_windows;if(!Array.isArray(t)||t.length===0)return 0;for(var n=0,r=0,i=0;i<7;i++)for(var a=0;a<96;a++){var o=a/4;r++;for(var s=0;s<t.length;s++){var f=t[s]||{};if($n(f.days,i)&&o>=he(f.from,0)&&o<he(f.to,0)){n++;break}}}return r===0?0:n/r}function Gr(e){e=e||{};var t;if(_n(e)){var n=pa(e),r=he(e.grid_import_ht_chf_kwh,0),i=he(e.grid_import_nt_chf_kwh,0);t=r*n+i*(1-n)}else{var a=e.grid_import_chf_kwh;if(a==null||isNaN(a))return null;t=Number(a)}return ve(t*.8)}function ha(e,t,n){e=e||{};var r=e.data||{},i=e.self_id;t=t||[];var a={},o=[];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))for(var f=r[s],c=Math.floor((f?f.length:0)/3),d=0;d<c;d++){var h=f[d*3];n&&(h<n[0]||h>=n[1])||a[h]||(a[h]=!0,o.push(h))}o.sort(function(m,w){return m-w});var v={},p={};t.forEach(function(m){!m||m.id===void 0||(v[m.id]=he(m.entry_ts,0),p[m.id]={have:0,expected:0,lastTs:null})});var g=0,b=0,$=0,y=0;return o.forEach(function(m){g++;var w=!1;t.forEach(function(M){if(!(!M||M.id===void 0)&&!(m<v[M.id])){var z=p[M.id];z.expected++;var I=Mt(r[M.id],m);I===null?w=!0:(z.have++,(z.lastTs===null||m>z.lastTs)&&(z.lastTs=m))}}),i!=null&&Mt(r[i],m)===null&&y++,w?$++:b++}),{expected:g,complete:b,provisional:$,missing:y,perMember:p}}function Kn(e,t){e=e||{};var n=(e.data||{})[t];return!Array.isArray(n)||n.length<3?null:n[n.length-3]}function ga(e,t,n){t=t||{};var r=t.data||{},i=t.producer_id,a={},o=0,s=0,f=0;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){var d=Mt(r[c],e);d!==null&&(c===i?s=d[1]:(a[c]=d[0],o+=d[0],c===n&&(f=d[0])))}var h=Kr(s,a);return{prodWh:s,totalImpWh:o,memberImpWh:f,sharePct:o>0?ve(f/o*100):0,allocatedWh:h[n]||0}}function bn(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var yt=[],wt=!0,tn=null,kt=[];function Yn(e){kt.forEach(function(t){t(e)})}function Zr(e){e&&(tn=Date.now()),e!==wt&&(wt=e,yt.forEach(function(t){t(wt,tn)}))}var ma=3,nn=0;function Qr(e){return e instanceof TypeError||e&&e.name==="AbortError"}function Xr(){nn=0,Zr(!0)}function Jr(e){e&&e.optional||(nn++,nn>=ma&&Zr(!1))}var $a=8e3,_a=2,Ut=0,rn=[];function ei(){for(;Ut<_a&&rn.length>0;){var e=rn.shift();Ut++,e.run().then(e.resolve,e.reject).finally(function(){Ut--,ei()})}}function ti(e){return new Promise(function(t,n){rn.push({run:e,resolve:t,reject:n}),ei()})}function yn(e,t){return t=t||{},ti(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},$a);return fetch(bn()+e,{signal:n.signal}).then(function(i){if(Xr(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw Qr(i)&&Jr(t),i}).finally(function(){clearTimeout(r)})})}function Z(e,t){return yn(e,t)}var me={optional:!0};function ba(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function o(){n!==null&&(clearInterval(n),n=null)}function s(){document.hidden?o():a()}return document.addEventListener("visibilitychange",s),a(),function(){r=!0,o(),document.removeEventListener("visibilitychange",s)}}function Gn(e,t){return ti(function(){return fetch(bn()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(Xr(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw Qr(n)&&Jr(),n})})}function vt(e){return e==null||String(e).trim()===""}function De(e){return yn("/cm?cmnd="+encodeURIComponent(e))}const F={base:bn,get:Z,post:Gn,restartDevice:function(){return De("Restart 1")},getWifiConfig:function(){return Promise.all([De("SSId1"),De("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return vt(e.ssid1)||t.push("SSId1 "+e.ssid1),vt(e.password1)||t.push("Password1 "+e.password1),vt(e.ssid2)||t.push("SSId2 "+e.ssid2),vt(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):De("Backlog "+t.join(";"))},wifiScanStart:function(){return De("WifiScan 1")},wifiScanResult:function(){return De("WifiScan")},getConfig:function(){return Z("/api/config")},postConfig:function(e){return Gn("/api/config",e)},getConfigRaw:function(){return yn("/api/config",{text:!0})},getPower:function(){return Z("/api/power")},getEnergy:function(e,t,n,r){var i="/api/energy?res="+encodeURIComponent(e||"15m")+"&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),Z(i)},getMeta:function(){return Z("/api/meta")},getMeter:function(){return Z("/api/meter")},getSite:function(){return Z("/site")},getLoads:function(){return Z("/loads")},getProductions:function(){return Z("/productions")},getGrid:function(){return Z("/grid")},setLoadState:function(e,t){return Z("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},reload:function(){return Z("/reload")},getVzevRaw:function(){return Z("/api/vzev/raw",me)},getVzevMembersList:function(){return Z("/api/vzev/members",me).then(function(e){return Array.isArray(e)?e:e&&e.members||[]})},getVzevDiscovered:function(){return Z("/api/vzev/discovered",me).then(function(e){return Array.isArray(e)?e:e&&e.discovered||[]})},getVzevInfo:function(){return Z("/api/vzev/info",me).catch(function(){return{}}).then(function(e){return Yn(e),e})},setVzevInfo:function(e){e=e||{};var t="/api/vzev/info?action=set";return["representative_name","representative_contact","connection_point_id"].forEach(function(n){e[n]!==void 0&&e[n]!==null&&(t+="&"+n+"="+encodeURIComponent(e[n]))}),e.enabled!==void 0&&e.enabled!==null&&(t+="&enabled="+(e.enabled?"true":"false")),Z(t).then(function(n){return Yn(n),n})},getVzevFlows:function(e,t){return Z("/api/vzev/raw",me).then(function(n){return{flows:Vn(n,e||"15m",t||90)}})},getVzevBilling:function(e){var t=ua(e);return t?Promise.all([Z("/api/vzev/raw",me),Z("/api/vzev/members",me).catch(function(){return{members:[]}}),Z("/api/meta").catch(function(){return{}}),Z("/api/vzev/info",me).catch(function(){return{}}),Z("/site").catch(function(){return{}})]).then(function(n){var r=n[0],i=n[1]&&n[1].members?n[1].members:Array.isArray(n[1])?n[1]:[],a=n[2]&&n[2].tariffs||{};r&&r.tariffs&&(a=Object.assign({},a,r.tariffs));var o=n[3]||{},s=n[4]||{},f=Yr(r).filter(function(g){return g.ts>=t[0]&&g.ts<t[1]}),c=ha(r,i,t),d=ca(e,f,i,a,c);d.info=o,d.raw=r,d.range=t,d.tariffs=a;var h=r&&r.self_id,v=r&&r.producer_id;if(h!=null)if(h===v)d.role="PRODUCER";else{d.role="CONSUMER";var p=d.members.filter(function(g){return g.id===h})[0];d.self=p?Object.assign({},p,{name:s.name||p.name}):{id:h,name:s.name||h,wh:0,chf:0,months:[]}}return d}):Promise.reject(new Error("invalid quarter"))},getVzevMembers:function(){return Promise.all([Z("/api/vzev/members",me),Z("/api/vzev/raw",me)]).then(function(e){var t=e[0]&&e[0].members?e[0].members:Array.isArray(e[0])?e[0]:[],n=Vn(e[1],"15m",90);return t.map(function(r){var i=r.type==="PRODUCER"||r.typ==="P",a=i?1:-1,o=n.map(function(f){var c=f.members&&f.members[r.id];return{t:f.ts,y:typeof c=="number"?c:0}}),s=o.reduce(function(f,c){return f+(c.y||0)},0);return{id:r.id,name:r.name||r.id,address:r.location||r.loc,net_wh:a*s,points:o}})})},poll:ba,onStatus:function(e){return yt.push(e),function(){var t=yt.indexOf(e);t>=0&&yt.splice(t,1)}},onVzevInfo:function(e){return kt.push(e),function(){var t=kt.indexOf(e);t>=0&&kt.splice(t,1)}},isOnline:function(){return wt},lastOk:function(){return tn}};var ni={overview:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,vzev:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="4" r="2.2" fill="currentColor"/><circle cx="4" cy="15" r="2.2" fill="currentColor"/><circle cx="16" cy="15" r="2.2" fill="currentColor"/><path d="M10 6.5v4M10 10.5l-4.5 3M10 10.5l4.5 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,settings:u`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function Zn(){return u`
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
      </a>`}var ya=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/vzev",key:"nav.vzev",icon:"vzev",gate:"vzev",active:function(e){return e.indexOf("/vzev")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function Qn(e){return u`
      <nav class="nav" aria-label=${l("nav.menu")}>
        ${ya.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="vzev"||e.showVzev)}).map(function(t){var n=t.active(e.path);return u`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${ni[t.icon]}
              <span>${l(t.key)}</span>
            </a>`})}
      </nav>`}function wa(e){var t=Se.useRoute(e.routes),n=x(!1),r=n[0],i=n[1],a=x(!1),o=a[0],s=a[1],f=x(null),c=f[0],d=f[1],h=x(!1),v=h[0],p=h[1],g=x(!1),b=g[0],$=g[1];J(function(){return F.onStatus(function(m,w){m?d(null):(le(l("error.offline"),{type:"error"}),d(w?new Date(w):new Date))})},[]),J(function(){return F.poll(function(){F.getMeta().then(function(m){s(!!m&&typeof m.time=="number"&&m.time<1e9)}).catch(function(){})},6e4)},[]),J(function(){F.getMeter().then(function(m){p(!!(m&&m.values))}).catch(function(){})},[]),J(function(){var m=F.onVzevInfo(function(w){$(!!(w&&w.enabled))});return F.getVzevInfo().catch(function(){}),m},[]),J(function(){i(!1)},[t.path]);var y=t.route.component;return u`
      <div class="shell">
        <aside class="sidebar">
          <${Zn} />
          <${Qn} path=${t.path} showMeter=${v} showVzev=${b} />
          <div class="sidebar-foot"><a target="_blank" href="https://gplug.ch">gPlug.ch</a></div>
        </aside>

        <div class="topbar">
          <${Zn} />
          <button class="burger" aria-label=${l("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${ni.burger}</button>
        </div>
        ${r?u`
          <div class="drawer">
            <${Qn} path=${t.path} showMeter=${v} showVzev=${b} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${o?u`<div class="banner banner-warn">${l("banner.rtc")}</div>`:null}
          ${c?u`
            <div class="stale-note">${l("common.stale",{time:k.time(Math.floor(c.getTime()/1e3),"hm")})}</div>`:null}
          <${y} params=${t.params} />
        </main>

        <${ji} />
      </div>`}function ke(e){return e==null||isNaN(e)?null:Number(e)}function Bt(e){return e<0?0:e>1?1:e}function wn(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function an(e,t){t=t||{};var n=!!t.vzev,r=ke(t.co2);e=e||[];var i=e.length,a=0,o=0,s=0,f=0,c=0,d=0,h=0;e.forEach(function(z){if(wn(z)){d++;return}a+=z.pv_wh,o+=z.exp_wh,s+=z.imp_wh,f+=z.vzev_in_wh||0,c+=z.vzev_out_wh||0,h++});var v=i>0&&d/i>.2,p={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:v};if(n&&(p.autarkyVzev=null),i===0||v||h===0)return p;var g=Math.max(0,a-o),b=a-o+s;if(p.autarky=b>0?Bt(g/b):null,p.selfuse=a>0?Bt(g/a):null,n){var $=Math.max(0,s-f);p.autarkyVzev=b>0?Bt((b-$)/b):null}var y=gn({imp_wh:s,exp_wh:o,pv_wh:a,vzev_in_wh:f,vzev_out_wh:c},t.tariffs||{}),m=y.saving_selfuse_chf||0,w=y.revenue_feedin_chf||0,M=n?(y.revenue_vzev_chf||0)-(y.cost_vzev_chf||0):0;return p.savingParts={selfuse:m,feedin:w,vzev:n?M:null},p.savingChf=Math.round((m+w+M)*100)/100,p.co2Kg=r&&r>0?g/1e3*r/1e3:null,p}function ka(e,t){if(!e)return[];var n=ke(e.pv_w),r=ke(e.bat_w),i=ke(e.grid_w),a=n===null,o=r===null,s=i===null,f=a?0:n,c=o?0:r,d=s?0:i,h=ke(t),v=Math.max(0,d),p=Math.max(0,-d),g=Math.max(0,f-p);function b(w,M){return M?"unknown":w<1?"zero":"ok"}var $=[];if($.push({from:"pv",to:"haus",watts:g,state:b(g,a||s)}),o?$.push({from:"bat",to:"haus",watts:0,state:"unknown"}):c>=0?$.push({from:"bat",to:"haus",watts:c,state:b(c,!1)}):$.push({from:"haus",to:"bat",watts:-c,state:b(-c,!1)}),h!==null&&h<0){var y=Math.min(-h,p);$.push({from:"pv",to:"vzev",watts:y,state:b(y,s)}),$.push({from:"pv",to:"netz",watts:p-y,state:b(p-y,s)})}else $.push({from:"pv",to:"netz",watts:p,state:b(p,s)});if(h!==null&&h>0){var m=Math.min(h,v);$.push({from:"vzev",to:"haus",watts:m,state:b(m,s)}),$.push({from:"netz",to:"haus",watts:v-m,state:b(v-m,s)})}else $.push({from:"netz",to:"haus",watts:v,state:b(v,s)});return $}function xa(e){if(!e||!e.length)return null;var t=0,n=0,r=0,i=!1,a=!1;return e.forEach(function(o){var s=o.to==="netz"||o.to==="vzev",f=o.from==="netz"||o.from==="vzev";s?o.state==="unknown"?i=!0:n+=o.watts:f?o.state==="unknown"?i=!0:t+=o.watts:o.from==="pv"&&o.to==="haus"&&(o.state==="unknown"?a=!0:r+=o.watts)}),i?"flow.status_unknown":n>=1?"flow.status_export":t>=1?"flow.status_import":a?"flow.status_unknown":r>=1?"flow.status_covered":"flow.status_idle"}function za(e){if(!e||!e.length)return 0;var t=0,n=0;return e.forEach(function(r){r.state!=="unknown"&&(r.to==="netz"||r.to==="vzev"?n+=r.watts:(r.from==="netz"||r.from==="vzev")&&(t+=r.watts))}),n>=1?n:t>=1?t:0}function Ca(e){if(!e||!e.length)return null;var t=null;if(e.forEach(function(i){(i.points||[]).forEach(function(a){(t===null||a.t>t)&&(t=a.t)})}),t===null)return null;var n=0,r=!1;return e.forEach(function(i){var a=(i.net_wh||0)<0?-1:1;(i.points||[]).forEach(function(o){o.t===t&&(n+=a*(o.y||0),r=!0)})}),r?n*4:null}var Sa={"comp.pv":"var(--c-production)","comp.selfuse":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.vzev":"var(--c-vzev)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-vzev-fill)"};function de(e,t){return{key:e,value:Math.max(0,t||0),color:Sa[e]}}function Ma(e,t){if(!e)return{cover:[],usage:[],unknown:!0};var n=ke(e.pv_w),r=ke(e.bat_w),i=ke(e.grid_w),a=n===null||i===null,o=n===null?0:n,s=r===null?0:r,f=i===null?0:i,c=ke(t),d=Math.max(0,f),h=Math.max(0,-f),v=Math.max(0,o-h),p=Math.max(0,s),g=Math.max(0,-s),b=c!==null&&c>0?Math.min(c,d):0,$=c!==null&&c<0?Math.min(-c,h):0;return{cover:[de("comp.pv",v),de("comp.battery",p),de("comp.vzev",b),de("comp.grid",d-b)],usage:[de("comp.selfuse",v),de("comp.charge",g),de("comp.vzev",$),de("comp.feedin",h-$)],unknown:a}}function Na(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(d){wn(d)||(t+=d.pv_wh,n+=d.exp_wh,r+=d.imp_wh,i+=d.vzev_in_wh||0,a+=d.vzev_out_wh||0,o++)}),o===0)return{cover:[],usage:[],unknown:!0};var s=Math.max(0,t-n),f=Math.min(Math.max(0,i),r),c=Math.min(Math.max(0,a),n);return{cover:[de("comp.pv",s),de("comp.vzev",f),de("comp.grid",r-f)],usage:[de("comp.selfuse",s),de("comp.vzev",c),de("comp.feedin",n-c)],unknown:!1}}function Ta(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function Ia(e){e=e||[];var t=0,n=0,r=0,i=0;if(e.forEach(function(o){wn(o)||(t+=o.pv_wh,n+=o.exp_wh,r+=o.imp_wh,i++)}),i===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var a=Math.max(0,t-n);return{prodSelf:a,prodFeedin:Math.max(0,n),consSelf:a,consImport:Math.max(0,r)}}var Xn=900,Ea=90;function kn(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function Jn(e){return e.friendlyName||e.name||e.id||"–"}function er(e){return e.friendlyName||e.name||e.id||"–"}function Nt(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function Pa(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function Le(e){return e==null||isNaN(e)?null:Number(e)}function La(e,t){if(!e)return null;var n=Number(e.grid_w)||0,r=Number(e.pv_w)||0;t=t||[];var i=t.filter(function(a){return kn(a.state)==="waiting"});return n<0&&i.length>0?{key:"hint.shift_load"}:n>0&&r>0?{key:"hint.use_pv"}:null}function ri(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function Oa(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function tr(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>Ea;)a.shift()}function Fa(e,t,n){for(var r=ri(e,t,n),i=[],a=[],o=0;o<r.grid.length;o++){var s=r.grid[o].t,f=Le(r.grid[o].y),c=Le(r.pv[o].y)||0,d=Le(r.bat[o].y)||0;f!==null&&(a.push({t:s,y:c+d}),i.push({t:s,y:c+d+f}))}return{cons:i,prod:a}}function Ze(e){return u`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?u`<${ce} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function Ra(e){var t=e.newest,n=e.win,r=e.power,i=e.vzevW,a=t?Le(t.grid_w):null,o=t?Le(t.pv_w)||0:null,s=t?Le(t.bat_w)||0:null,f=t&&a!==null?o+s+a:null,c=t?o+s:null,d=t&&a!==null?Math.max(0,-a):null,h=t&&a!==null?Math.max(0,a):null,v=Fa(r,n[0],n[1]),p=v.cons,g=v.prod;return u`
      <${W} group="grid" title=${l("panel.grid")}>
        <div class="ov-stats">
          <${Ze} color="var(--c-consumption)" label=${l("stat.consumption")}
            tooltip=${l("tooltip.consumption")} value=${k.w(f)} />
          <${Ze} color="var(--c-production)" label=${l("stat.production")}
            value=${k.w(c)} />
          <${Ze} color="var(--c-vzev)" label=${l("stat.export")}
            value=${k.w(d)} />
          <${Ze} color="var(--c-import)" label=${l("stat.gridop")}
            tooltip=${l("tooltip.gridop")} value=${k.w(h)} />
          ${i!==null?u`
            <${Ze} color="var(--c-vzev)"
              label=${i>=0?l("stat.vzev_import"):l("stat.vzev_export")}
              tooltip=${l("tooltip.vzev")} value=${k.w(Math.abs(i))} />`:null}
        </div>
        <${at} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${k.w}
          bands=${[{top:g,bottom:p,color:"var(--c-vzev-fill)"},{top:p,bottom:g,color:"var(--c-import-fill)"}]}
          series=${[{points:p,color:"var(--c-consumption)",label:l("stat.consumption")},{points:g,color:"var(--c-production)",label:l("stat.production")}]} />
      <//>`}function Aa(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:u`
      <${W} group="production" title=${l("panel.production")}>
        ${e.notice?u`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${l("flow.prod_nodata")}</span>
            <button class="ov-hint-close" aria-label=${l("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=Pa(i),o=a?"var(--c-battery)":"var(--c-production)",s=Nt(i);return u`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${er(i)}</span>
                  <span class="ov-sub-value" style=${"color:"+o}>${k.w(s)}</span>
                </div>
                <${at} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${k.w}
                  series=${[{points:n[i.id]||[],color:o,label:a?l("stat.battery"):er(i)}]} />
              </div>`})}
        </div>
      <//>`}function Wa(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:u`
      <${W} group="loads" title=${l("panel.loads")} tooltip=${l("tooltip.loads")}>
        <div class="ov-subgrid">
          ${t.map(function(a){var o=kn(a.state),s=Nt(a),f=o==="inactive"?"waiting":"inactive",c=o==="inactive"?"action.request":"action.deactivate";return u`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Jn(a)}</span>
                  <${$t} state=${o} />
                </div>
                <div class="ov-sub-meta">
                  <span>${k.w(s)} · ${l("stat.rated")}</span>
                  <span>${l("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${at} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${k.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:Jn(a)}]} />
                <div class="ov-sub-act">
                  <${Y} small secondary=${f==="inactive"}
                    onClick=${function(){i(a.id,f)}}>${l(c)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}function Da(e){var t=e.members;return!e.enabled||!t||!t.length?null:u`
      <${W} group="vzev" title=${l("panel.vzev")} tooltip=${l("tooltip.vzev")}>
        <div class="ov-subgrid">
          ${t.map(function(n){var r=(n.net_wh||0)<0,i=n.points||[],a=i.length?[i[0].t,i[i.length-1].t+900]:null;return u`
              <div key=${n.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${n.name||n.id}</span>
                  <span class="ov-sub-value" style="color:var(--c-vzev)">
                    ${l(r?"stat.vzev_export":"stat.vzev_import")+" "+k.wh(Math.abs(n.net_wh||0))}
                  </span>
                </div>
                ${n.address?u`<div class="ov-sub-meta"><span>${n.address}</span></div>`:null}
                <${at} height=${140} yUnit="Wh" xUnit="h" timeWindow=${a}
                  yFormat=${k.wh}
                  series=${[{points:i,color:"var(--c-vzev)",label:n.name||n.id}]} />
              </div>`})}
        </div>
      <//>`}function Ua(e){return e.hint?u`
      <div class="ov-hint" role="status">
        <svg class="ov-hint-icon" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
          <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
        </svg>
        <span class="ov-hint-text">${l(e.hint.key)}</span>
        <button class="ov-hint-close" aria-label=${l("common.close")}
          onClick=${e.onDismiss}>×</button>
      </div>`:null}var nr={pv:{color:"var(--c-production)",label:"flow.pv"},netz:{color:"var(--c-navy)",label:"flow.netz"},vzev:{color:"var(--c-vzev)",label:"flow.vzev"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"}},Ba={pv:{x:66,y:62},netz:{x:374,y:62},haus:{x:220,y:142},vzev:{x:374,y:142}},Ht={x:66,y:222},Ha={x:374,y:222},Ie=26;function ja(e){return e.from==="bat"||e.to==="bat"?"var(--c-battery)":e.to==="netz"||e.to==="vzev"?"var(--c-vzev)":e.from==="netz"?"var(--c-import)":e.from==="vzev"?"var(--c-vzev)":"var(--c-production)"}function Va(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?u`
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
      </g>`:null}function qa(e){var t=e.newest,n=ka(t,e.vzevW),r=!!e.hasBattery,i=e.vzevW!==null&&e.vzevW!==void 0,a=be({side:"left",want:"left",count:0}),o=t?Le(t.bat_w):null,s=o!==null&&o<0?"right":"left",f=a.current;s===f.side?(f.want=s,f.count=0):s===f.want?(f.count++,f.count>=2&&(f.side=s,f.count=0)):(f.want=s,f.count=1);var c=f.side;function d(y){return y==="bat"?r:y==="vzev"?i:!0}function h(y){return y==="bat"?c==="right"?Ha:Ht:Ba[y]}var v=n.filter(function(y){return d(y.from)&&d(y.to)}),p=0;v.forEach(function(y){y.state==="ok"&&y.watts>p&&(p=y.watts)});function g(y){return p<=0?2.4:2.4+Math.min(1,y/p)*2.6}var b=xa(n),$=za(n);return u`
      <${W} group="grid" title=${l("flow.title")} tooltip=${l("tooltip.flow")}>
        ${b?u`
          <p class="flow-status">${l(b,{w:k.w($)})}</p>`:null}
        <div class="flow-wrap">
          <svg class="flow-svg" viewBox="0 0 440 284" role="img"
            aria-label=${l("flow.aria")} preserveAspectRatio="xMidYMid meet">
            <g>
              ${v.map(function(y,m){var w=h(y.from),M=h(y.to);if(!w||!M)return null;var z=M.x-w.x,I=M.y-w.y,U=Math.sqrt(z*z+I*I)||1,N=z/U,O=I/U,C=w.x+N*Ie,E=w.y+O*Ie,T=M.x-N*Ie,B=M.y-O*Ie,R=y.state==="unknown",_=y.state==="zero",S=R?"var(--c-line)":ja(y),A=R?5.5:7.5,D=T-N*(A+1.6),ue=B-O*(A+1.6),se=_?2:g(y.watts),j=((C+T)/2).toFixed(1),X=((E+B)/2-7).toFixed(1);return u`
                  <g key=${"e"+m} opacity=${_?"0.32":"1"}>
                    <line class="flow-track" x1=${C.toFixed(1)} y1=${E.toFixed(1)}
                      x2=${D.toFixed(1)} y2=${ue.toFixed(1)}
                      stroke=${S} stroke-width=${se.toFixed(1)} stroke-linecap="round" />
                    ${y.state==="ok"?u`
                      <line class="flow-particles" x1=${C.toFixed(1)} y1=${E.toFixed(1)}
                        x2=${D.toFixed(1)} y2=${ue.toFixed(1)} stroke=${S} stroke-linecap="round" />`:R?u`
                      <line class="flow-edge-unknown" x1=${C.toFixed(1)} y1=${E.toFixed(1)}
                        x2=${D.toFixed(1)} y2=${ue.toFixed(1)} stroke=${S} stroke-width="1.6"
                        stroke-linecap="round" />`:null}
                    ${Ka(T,B,N,O,S,A,_?.5:1)}
                    ${R?u`
                      <text x=${j} y=${X} text-anchor="middle"
                        class="flow-label-txt flow-label-nodata">–</text>`:_?null:u`
                      <text x=${j} y=${X} text-anchor="middle"
                        class="flow-label-txt">${k.w(y.watts)}</text>`}
                  </g>`})}
              ${Object.keys(nr).filter(d).map(function(y){var m=nr[y],w=h(y),M=y==="bat",z=M?Ht.x:w.x;return u`
                  <g key=${"n"+y} class=${M?"flow-node-move":null}
                    style=${M?"transform: translate("+(w.x-Ht.x)+"px, 0)":null}>
                    <circle cx=${z} cy=${w.y} r=${Ie} fill=${m.color} opacity="0.12" />
                    <circle cx=${z} cy=${w.y} r=${Ie} fill="none"
                      stroke=${m.color} stroke-width="2.4" />
                    ${Va(y,z,w.y,m.color)}
                    <text x=${z} y=${w.y+Ie+16} text-anchor="middle"
                      class="flow-node-txt">${l(m.label)}</text>
                  </g>`})}
            </g>
          </svg>
        </div>
        ${i?u`<p class="flow-note">${l("flow.vzev_mean_note")}</p>`:null}
        <${Ya} sample=${t} vzevW=${e.vzevW} records=${e.records} />
      <//>`}function Ka(e,t,n,r,i,a,o){var s=a,f=e-n*s,c=t-r*s,d=-r,h=n,v=s*.6,p=e.toFixed(1)+","+t.toFixed(1)+" "+(f+d*v).toFixed(1)+","+(c+h*v).toFixed(1)+" "+(f-d*v).toFixed(1)+","+(c-h*v).toFixed(1);return u`<polygon points=${p} fill=${i} opacity=${o===void 0?1:o} />`}function rr(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return u`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?u`<${ce} text=${e.note} />`:null}
        </div>
        ${r?u`
          <div class="comp-bar comp-bar-nodata">${e.unknown?l("flow.comp_nodata"):l("flow.comp_zero")}</div>`:u`
          <div class="comp-bar">
            ${t.map(function(i,a){var o=i.value/n*100;return u`<div key=${a} class="comp-seg"
                title=${l(i.key)+": "+e.fmt(i.value)}
                style=${"width:"+o.toFixed(2)+"%;background:"+i.color}></div>`})}
          </div>
          <div class="comp-legend">
            ${t.map(function(i,a){return u`
                <span key=${a} class="comp-leg">
                  <span class="comp-leg-dot" style=${"background:"+i.color}></span>
                  ${l(i.key)} · ${e.fmt(i.value)}
                </span>`})}
          </div>`}
      </div>`}function Ya(e){var t=x("now"),n=t[0],r=t[1],i=n==="now"?Ma(e.sample,e.vzevW):Na(e.records),a=n==="now"?k.w:k.wh,o=n==="today"?l("flow.comp_batt_note"):null;return u`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${l("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${l("flow.comp_today")}</button>
        </div>
        <${rr} title=${l("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} />
        <${rr} title=${l("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${o} />
      </div>`}function ii(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return u`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?u`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function Ga(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?l("kpi.incomplete"):null;function r(d){return d==null?"–":Math.round(d*100)+" %"}var i=t.savingParts,a=i?[l("kpi.saving_selfuse")+": "+k.chf(i.selfuse,!0),l("kpi.saving_feedin")+": "+k.chf(i.feedin,!0),i.vzev!==null&&i.vzev!==void 0?l("kpi.saving_vzev")+": "+k.chf(i.vzev,!0):null].filter(Boolean).join(`
`):l("tooltip.kpi_saving"),o=t.autarkyVzev!==null&&t.autarkyVzev!==void 0?l("kpi.autarky_vzev")+": "+r(t.autarkyVzev):null,s=!!e.showSaving,f=s?u`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":k.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.saving")}<${ce} text=${n||a} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:u`
        <div class="kpi-hero">
          <${ii} big ratio=${t.autarky} color="var(--c-vzev)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.autarky")}<${ce} text=${n||l("tooltip.kpi_autarky")} /></span>
            ${o?u`<span class="kpi-sub">${o}</span>`:null}
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,c=[];return s&&c.push(u`<${jt} key="au" gauge ratio=${t.autarky} color="var(--c-vzev)"
        label=${l("kpi.autarky")} tip=${n||l("tooltip.kpi_autarky")} sub=${o} />`),c.push(u`<${jt} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${l("kpi.selfuse")} tip=${n||l("tooltip.kpi_selfuse")} />`),e.showCo2&&c.push(u`<${jt} key="co" value=${Qa(t.co2Kg)} color="var(--c-production)"
        label=${l("kpi.co2")} tip=${n||l("tooltip.kpi_co2",{g:e.co2Factor})} />`),u`
      <div class="kpi-band">
        ${f}
        <div class="kpi-support">${c}</div>
      </div>`}function jt(e){return u`
      <div class="kpi-tile">
        ${e.gauge?u`<${ii} ratio=${e.ratio} color=${e.color} />`:u`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${ce} text=${e.tip} /></span>
          ${e.sub?u`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function Za(){return u`
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
      </div>`}function Qa(e){return e==null||isNaN(e)?"–":e>=1e3?k.num(e/1e3,2)+" t":k.num(e,e<10?2:1)+" kg"}function Xa(){var e=x(null),t=e[0],n=e[1],r=x(null),i=r[0],a=r[1],o=x([]),s=o[0],f=o[1],c=x([]),d=c[0],h=c[1],v=x([]),p=v[0],g=v[1],b=x(!1),$=b[0],y=b[1],m=x(null),w=m[0],M=m[1],z=x(null),I=z[0],U=z[1],N=x(function(){return Math.floor(Date.now()/1e3)}),O=N[0],C=N[1],E=x(null),T=E[0],B=E[1],R=x({}),_=R[0],S=R[1],A=x(!1),D=A[0],ue=A[1],se=be({}),j=be({}),X=O,pe=X-Xn,fe=[pe,X];J(function(){F.getSite().then(function(q){n(q)}).catch(function(){}),F.getMeta().then(function(q){U(q)}).catch(function(){})},[]),J(function(){return F.poll(function(){F.getEnergy("15m",96).then(function(q){Array.isArray(q)&&M(q)}).catch(function(){})},6e4)},[]),J(function(){if(F.getVzevMembers)return F.poll(function(){F.getVzevMembers().then(function(q){Array.isArray(q)&&g(q)}).catch(function(){})},1e4)},[]),J(function(){var q=F.onVzevInfo(function(Ne){y(!!(Ne&&Ne.enabled))});return F.getVzevInfo().catch(function(){}),q},[]),J(function(){return F.poll(function(){var q=Math.floor(Date.now()/1e3);C(q);var Ne=q-Xn;Promise.all([F.getPower().catch(function(){return null}),F.getLoads().catch(function(){return null}),F.getProductions().catch(function(){return null})]).then(function(Ae){var At=Ae[0],Ke=Ae[1],Ye=Ae[2];At&&a(At),Ke&&f(Ke),Ye&&h(Ye),(At||Ke||Ye)&&B(q),ue(!0),Ye&&Ye.forEach(function(We){tr(se.current,We.id,q,Nt(We),Ne)}),Ke&&Ke.forEach(function(We){var xi=kn(We.state)==="active"?Nt(We):0;tr(j.current,We.id,q,xi,Ne)})})},1e4)},[]);var P=Oa(i),V=ri(i,pe,X),G=Ca(p),ne=La(P,s),Fe=ne&&!_[ne.key]?ne:null,L=!!(d&&d.length&&Ta(V.pv.map(function(q){return q.y}))&&!_["flow.prod_nodata"]);function ee(){var q=Object.assign({},_);q["flow.prod_nodata"]=!0,S(q)}var ae=new Date;ae.setHours(0,0,0,0);var oe=Math.floor(ae.getTime()/1e3),Re=(w||[]).filter(function(q){return q.ts>=oe}),ot=!!(p&&p.length),ye=I&&I.tariffs||{},qe=ye.co2_g_kwh===void 0||ye.co2_g_kwh===null||ye.co2_g_kwh===""?128:Number(ye.co2_g_kwh),Ft=an(Re,{tariffs:ye,vzev:ot,co2:qe}),Rt=Number(ye.grid_import_chf_kwh)>0||Number(ye.grid_feedin_chf_kwh)>0,st=qe>0,mi=Re.some(function(q){return q.partial}),$i=mi?l("kpi.today_until",{time:k.time(O,"hm")}):l("kpi.today"),_i=(d||[]).some(function(q){return String(q.productionType||"").toUpperCase()==="BATTERY"}),bi=t&&t.location?t.location:null,yi=T?u`
      <span class="ov-updated">${l("common.stale",{time:k.time(T,"hm")})}</span>`:null;function wi(q,Ne){F.setLoadState(q,Ne).then(function(){return F.getLoads()}).then(function(Ae){Ae&&f(Ae)}).catch(function(){le(l("error.toggle"),{type:"error"})})}function ki(){if(ne){var q=Object.assign({},_);q[ne.key]=!0,S(q)}}return u`
      <div>
        <${Me} title=${t&&t.name?t.name:l("page.overview")}
          subtitle=${bi} actions=${yi} />
        ${D?u`
          <${it}>
            <${Ua} hint=${Fe} onDismiss=${ki} />
            <${qa} newest=${P} vzevW=${G} hasBattery=${_i} records=${Re} />
            <${Ga} kpis=${Ft} period=${$i} showSaving=${Rt}
              showCo2=${st} co2Factor=${qe} />
            <${Ra} newest=${P} win=${fe} vzevW=${G} power=${i} />
            <${Aa} productions=${d} history=${se.current} win=${fe}
              notice=${L} onDismissNotice=${ee} />
            <${Wa} loads=${s} history=${j.current} win=${fe} onToggle=${wi} />
            <${Da} members=${p} win=${fe} enabled=${$} />
          <//>`:u`<${Za} />`}
      </div>`}var Ja="\uFEFF",ai=";",ir=`\r
`;function el(e){if(e==null)return"";var t=String(e);return t.indexOf(ai)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function ar(e){return(e||[]).map(el).join(ai)}function li(e,t){var n=[ar(e)];return(t||[]).forEach(function(r){n.push(ar(r))}),Ja+n.join(ir)+ir}function tl(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var nl=[10,25,50],ge={"15m":{label:"history.res.15m",base:"15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",base:"15m",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",base:"1d",count:125,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",base:"1d",count:125,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",base:"1mo",count:19,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",base:"1mo",count:19,target:"1q",tk:"q",slot:7776e3}},rl=["15m","1h","1d","1w","1mo","1q"],il={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},xe={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function al(e){return e==null?null:e/1e3}function ll(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-ge[t].slot}function ol(e,t){if(!e.length)return[];var n=il[t]||e.length,r={};e.forEach(function(f){r[f.ts]=f});for(var i=e[e.length-1].ts,a=[],o=e[0].ts,s=0;s<n&&o>=i;s++)a.push(r[o]||{ts:o,__blank:!0}),o=ll(o,t);return a}function Vt(e,t){var n=al(e);return n===null?"–":k.num(n,2)}function sl(e){if(e==null)return u`<span>–</span>`;var t=e>0?"val-pos":e<0?"val-neg":"";return u`<span class=${t}>${k.chf(e,!0)}</span>`}function Qe(e,t){return e==null?u`<span>–</span>`:u`<span class=${t||""}>${k.chf(e,!1)}</span>`}function ul(e,t,n){var r=[{key:"ts",label:l("history.col.time")},{key:"imp",label:l("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(r.push({key:"impcost_ht",label:l("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),r.push({key:"impcost_nt",label:l("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):r.push({key:"impcost",label:l("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&r.push({key:"exp",label:l("history.col.feedin"),unit:"[kWh]",align:"right"}),r.push({key:"vzev",label:l(e?"history.col.vzevexport":"history.col.vzevimport"),unit:"[kWh]",align:"right"}),r.push({key:"saldo",label:l("history.col.vzevsaldo"),unit:"[CHF]",align:"right"}),e&&(r.push({key:"saving",label:l("history.col.selfuse"),unit:"[CHF]",align:"right"}),r.push({key:"autarky",label:l("history.col.autarky"),unit:"[%]",align:"right"}),r.push({key:"selfuserate",label:l("history.col.selfuserate"),unit:"[%]",align:"right"}),r.push({key:"ersparnis",label:l("history.col.ersparnis"),unit:"[CHF]",align:"right"})),r}function lr(e){return e==null?"–":k.num(e*100,0)+" %"}function xn(e){var t=e.revenue_vzev_chf,n=e.cost_vzev_chf;return t===null&&n===null?null:(t||0)-(n||0)}function cl(e,t,n){for(var r=ge[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var o=e[a+1];if(o){var s=Math.round((e[a].ts-o.ts)/r)-1;s>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function fl(){var e=x(xe.res),t=e[0],n=e[1],r=x(0),i=r[0],a=r[1],o=x(xe.pageSize),s=o[0],f=o[1],c=x(xe.chfMode),d=c[0],h=c[1],v=x(xe.chartMode),p=v[0],g=v[1],b=x({records:null,tariffs:{},producer:!1,base15m:null,err:!1}),$=b[0],y=b[1],m=x(!0),w=m[0],M=m[1];xe.res=t,xe.pageSize=s,xe.chfMode=d,xe.chartMode=p,J(function(){var L=!1;M(!0);var ee=ge[t];return Promise.all([F.getEnergy(ee.base,ee.count).catch(function(){return null}),F.getMeta().catch(function(){return null}),F.getProductions().catch(function(){return null}),ee.base==="15m"?Promise.resolve(null):F.getEnergy("15m",240).catch(function(){return null})]).then(function(ae){if(!L){var oe=ae[0],Re=ae[1],ot=ae[2],ye=ae[3];if(oe===null){y({records:null,tariffs:{},producer:!1,base15m:null,err:!0}),M(!1);return}var qe=Re&&Re.tariffs||{},Ft=Array.isArray(ot)&&ot.some(function(st){return st&&st.productionType==="PHOTOVOLTAIC"}),Rt=ee.base==="15m"?oe:ye||null;y({records:oe,tariffs:qe,producer:Ft,base15m:Rt,err:!1}),M(!1)}}),function(){L=!0}},[t]);var z=Ot($.tariffs)&&ge[t].base==="15m",I=Ee(function(){if(!$.records)return[];var L=$.records;z&&(L=$.records.map(function(ae){return qr(ae,$.tariffs)}));var ee=Hn(L,ge[t].base,ge[t].target,$.tariffs);return ee.slice().sort(function(ae,oe){return oe.ts-ae.ts})},[$.records,$.tariffs,t,z]),U=Ee(function(){if(t!=="15m"||!$.base15m)return{};var L=Hn($.base15m,"15m","15m",$.tariffs),ee=oa(L,3),ae={};return ee.forEach(function(oe){ae[L[oe].ts]=!0}),ae},[$.base15m,$.tariffs,t]),N=I.some(function(L){return(L.exp_wh||0)>0}),O=ul($.producer,N,z),C=I.some(function(L){return(L.vzev_in_wh||0)>0||(L.vzev_out_wh||0)>0}),E=$.tariffs.co2_g_kwh===void 0||$.tariffs.co2_g_kwh===null||$.tariffs.co2_g_kwh===""?128:Number($.tariffs.co2_g_kwh),T={tariffs:$.tariffs,vzev:C,co2:E},B=Number($.tariffs.grid_import_chf_kwh)>0||Number($.tariffs.grid_feedin_chf_kwh)>0,R=Ee(function(){var L={};return I.forEach(function(ee){L[ee.ts]=an([ee],T)}),L},[I,$.tariffs,C,E]),_=Ee(function(){return an(I,T)},[I,$.tariffs,C,E]),S=$.records?$.records.length<ge[t].count:!0,A=cl(I,t,S),D=I.length;A.filter(function(L){return L.kind==="row"});var ue=Math.max(1,Math.ceil(D/s)),se=Math.min(i,ue-1),j=se*s,X=Math.min(j+s,D),pe=vl(A,j,X);function fe(L){n(L),a(0)}function P(L){f(+L),a(0)}function V(){var L=O.map(function(oe){return oe.label+(oe.unit?" "+oe.unit:"")}),ee=I.map(function(oe){return hl(oe,O,t,$.producer,R[oe.ts])}),ae=li(L,ee);yl(tl(t),ae)}var G=Ee(function(){return ml(ol(I,t),p,d,$.producer)},[I,p,d,$.producer,t]),ne=Ee(function(){return $l(I,t,$.producer)},[I,t,$.producer]),Fe=u`
      <div class="verlauf-actions">
        <${Lt} label=${l("history.resolution")} value=${t}
          onChange=${fe}
          options=${rl.map(function(L){return{value:L,label:l(ge[L].label)}})} />
        <${Y} secondary onClick=${V} disabled=${D===0}>
          ${l("history.export")}<//>
      </div>`;return u`
      <div>
        <${Me} title=${l("page.history")} subtitle=${l("history.subtitle")}
          actions=${Fe} />

        ${$.err?u`
          <${W}><p class="placeholder-text">${l("common.nodata")}</p><//>`:null}

        ${!$.err&&w?u`
          <${W}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}

        ${!$.err&&!w?u`
          <div>
            ${I.length?u`<${bl} summary=${ne} kpis=${_} showSaving=${B} />`:null}

            <${W} group="vzev" title=${l("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${l("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(L){return u`<button key=${L[0]} type="button" role="tab"
                      class=${"seg-btn"+(p===L[0]?" seg-btn-active":"")}
                      aria-selected=${p===L[0]}
                      onClick=${function(){g(L[0])}}>${l(L[1])}</button>`})}
                </div>
                ${p==="net"?u`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${d}
                      onChange=${function(L){h(L.target.checked)}} />
                    <span>${l("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${G.points.length?u`
                <${hn} height=${220}
                  yUnit=${G.yUnit} xUnit=${l("history.chart.xunit")}
                  yFormat=${G.yFormat}
                  xTickFormat=${function(L){return gl(t,L)}}
                  points=${G.points} />
                <div class="chart-legend">
                  ${G.legend.map(function(L,ee){return u`<span key=${ee} class="legend-item"><span class="legend-swatch" style=${"background:"+L.color}></span>${L.label}</span>`})}
                </div>`:u`<p class="placeholder-text">${l("common.nodata")}</p>`}
            <//>

            <${W} title=${l("history.table.title")}>
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${O.map(function(L){return u`<th key=${L.key} class=${L.align==="right"?"ta-r":""}>
                          ${L.label}${L.unit?u`<span class="th-unit"> ${L.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${D===0?u`
                      <tr><td class="table-empty" colspan=${O.length}>${l("common.nodata")}</td></tr>`:pe.map(function(L){return dl(L,O,t,U,$.producer,R)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${l("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${s}
                        onChange=${function(L){P(L.target.value)}}>
                        ${nl.map(function(L){return u`<option key=${L} value=${L}>${L}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${l("table.pageinfo",{from:D===0?0:j+1,to:X,total:D})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${l("table.prev")}
                      disabled=${se===0} onClick=${function(){a(se-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${l("table.next")}
                      disabled=${se>=ue-1} onClick=${function(){a(se+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${l("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function vl(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var o=e[a];if(o.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(o)}else i>=t&&i<n&&r.push(o)}return r}function dl(e,t,n,r,i,a){if(e.kind==="boundary")return u`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${l("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return u`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${l("history.gap")}</td></tr>`;var o=e.rec,s=!!r[o.ts],f=a&&a[o.ts]||null;return u`
      <tr key=${"r"+o.ts}>
        ${t.map(function(c){return u`<td key=${c.key} class=${c.align==="right"?"ta-r":""}>
            ${pl(c.key,o,n,s,i,f)}
          </td>`})}
      </tr>`}function pl(e,t,n,r,i,a){switch(e){case"ts":return u`<span class="verlauf-ts">
          ${k.time(t.ts,ge[n].tk)}
          ${r?u`<span class="peak-mark" title=${l("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?u`<${ce} text=${l("history.partial")} />`:null}
        </span>`;case"imp":return Vt(t.imp_wh);case"impcost":return Qe(t.cost_import_chf,"val-neg");case"impcost_ht":return Qe(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return Qe(t.cost_import_nt_chf,"val-neg");case"exp":return Vt(t.exp_wh);case"vzev":return Vt(zn(t,i));case"saldo":return sl(xn(t));case"saving":return Qe(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return lr(a&&a.autarky);case"selfuserate":return lr(a&&a.selfuse);case"ersparnis":return Qe(a&&a.savingChf,a&&a.savingChf>0?"val-pos":"");default:return""}}function zn(e,t){return t?e.vzev_out_wh:e.vzev_in_wh}function hl(e,t,n,r,i){return t.map(function(a){switch(a.key){case"ts":return k.time(e.ts,ge[n].tk);case"imp":return qt(e.imp_wh);case"impcost":return Ue(e.cost_import_chf);case"impcost_ht":return Ue(e.cost_import_ht_chf);case"impcost_nt":return Ue(e.cost_import_nt_chf);case"exp":return qt(e.exp_wh);case"vzev":return qt(zn(e,r));case"saldo":return Ue(xn(e));case"saving":return Ue(e.saving_selfuse_chf);case"autarky":return or(i&&i.autarky);case"selfuserate":return or(i&&i.selfuse);case"ersparnis":return Ue(i&&i.savingChf);default:return""}})}function or(e){return e==null?"":(e*100).toFixed(0)}function qt(e){return e==null?"":(e/1e3).toFixed(2)}function Ue(e){return e==null?"":Number(e).toFixed(2)}function gl(e,t){switch(e){case"15m":case"1h":return k.time(t,"hm");case"1d":case"1w":return k.time(t,"dm");case"1mo":return k.time(t,"1mo");case"1q":return k.time(t,"q");default:return k.time(t,ge[e].tk)}}function ml(e,t,n,r){var i=e.slice().sort(function(v,p){return v.ts-p.ts}),a=function(v){return k.num(v,2)},o=function(v){return v==null?0:v/1e3};if(t==="bilanz"){var s="var(--c-production)",f="var(--c-vzev)",c="var(--c-import)",d=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var p=Ia([{pv_wh:v.pv_wh||0,exp_wh:v.exp_wh||0,imp_wh:v.imp_wh||0}]);return{t:v.ts,bars:[{segments:[{value:o(p.prodSelf),color:s,label:l("history.bilanz.selfuse")},{value:o(p.prodFeedin),color:f,label:l("history.bilanz.feedin")}]},{segments:[{value:o(p.consSelf),color:s,label:l("history.bilanz.covered")},{value:o(p.consImport),color:c,label:l("history.bilanz.import")}]}]}});return{points:d,yUnit:"kWh",yFormat:a,legend:[{color:s,label:l("history.bilanz.selfuse")},{color:f,label:l("history.bilanz.feedin")},{color:c,label:l("history.bilanz.import")}]}}var h;return n?h=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var p=xn(v);return{t:v.ts,y:p===null?null:p,color:(p||0)<0?"var(--c-import)":"var(--c-vzev)"}}):h=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var p=v.imp_wh===null||v.imp_wh===void 0?null:v.imp_wh/1e3;if(p&&p>0)return{t:v.ts,y:p,color:"var(--c-import)"};var g=zn(v,r),b=g==null?null:g/1e3;return b&&b>0?{t:v.ts,y:-b,color:"var(--c-vzev)"}:{t:v.ts,y:p===null?null:0,color:"var(--c-import)"}}),{points:h,yUnit:n?"CHF":"kWh",yFormat:n?function(v){return k.chf(v,!0)}:a,legend:[{color:"var(--c-import)",label:l("history.chart.legend_import")},{color:"var(--c-vzev)",label:l(n?"history.chart.legend_saldo":"history.chart.legend_export")}]}}function $l(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(d,h){return d.ts-h.ts}),o=function(d){return a.map(function(h){return h[d]===null||h[d]===void 0?null:h[d]/1e3})},s=i&&e.length>=13,f=function(d,h){var v=o(h);return{name:d,avg:en(v),trend:aa(v),yoy:s?la(v):null}},c=[f(l("history.col.gridimport"),"imp_wh")];return n&&c.push(f(l("history.summary.pv"),"pv_wh")),{periodLabel:l(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:c}}function _l(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return u`
      <div class="summary-cell">
        <span class="summary-label">${l("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":k.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function bl(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":k.num(i*100,0)+" %"}return u`
      <div class="summary-strip">
        ${n?u`
          <div class="summary-cell">
            <span class="summary-label">${l("kpi.autarky")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.autarky)}</span>
          </div>
          <div class="summary-cell">
            <span class="summary-label">${l("kpi.selfuse")}</span>
            <span class="summary-value">${n.incomplete?"–":r(n.selfuse)}</span>
          </div>
          ${e.showSaving?u`
            <div class="summary-cell">
              <span class="summary-label">${l("kpi.saving")}</span>
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":k.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return u`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":k.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${_l(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?u`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${l("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+k.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function yl(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function wl(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const kl=[{keys:["pi","pin","powerin","170"],group:"power",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["u1","ul1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],xl=(function(){const e={};return kl.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function zl(e){const t=xl[wl(e)];return t===void 0?null:t}function Cl(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function Sl(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function Ml(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function Nl(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function sr(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var Tl=1e4,Il=90;function ln(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function ur(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:zl(t)}})}function oi(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function _e(e,t){var n=oi(e,t);return n?ln(n.raw):null}function Pe(e){return function(t){return t.i18nKey===e}}function Cn(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t}}function cr(e){return u`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${ce} text=${e.tip} />
      </span>`}function El(){return u`<span class="meter-tag meter-tag-derived">${l("meter.derived")}</span>`}function Pl(){return u`
      <span class="meter-tag meter-tag-register">${l("meter.register")}
        <${ce} text=${l("meter.tip.register")} /></span>`}function si(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-vzev)":""}function Ll(e){var t=e.resolved,n=_e(t,Pe("meter.f.power_net")),r=!1;if(n===null){var i=_e(t,Pe("meter.f.power_import")),a=_e(t,Pe("meter.f.power_export"));(i!==null||a!==null)&&(n=(i||0)-(a||0),r=!0)}if(n===null){var o=null;[1,2,3].forEach(function(c){var d=_e(t,Cn("power",c));d!==null&&(o=(o||0)+d)}),o!==null&&(n=o,r=!0)}if(n===null)return null;var s=n>0,f=l(s?"meter.importing":"meter.exporting");return u`
      <${W} group="grid" title=${l("meter.section.power")}
        tooltip=${l("meter.tip.net")}
        badge=${r?El():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+si(n)}>
            ${k.w(Math.abs(n))}
          </span>
          <span class="meter-big-label">${f}</span>
        </div>
      <//>`}var Ol=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0}];function Fl(e){var t=e.resolved,n=[1,2,3],r=Ol.map(function(c){var d=n.map(function(v){return _e(t,Cn(c.role,v))}),h=d.some(function(v){return v!==null});return{m:c,cells:d,any:h}}).filter(function(c){return c.any});if(r.length===0)return null;var i=r.filter(function(c){return c.m.role==="power"})[0],a=i?Cl(i.cells):null,o=null;if(i){var s=r.filter(function(c){return c.m.role==="reactive"})[0];if(s){var f=n.map(function(c,d){return Sl(i.cells[d],s.cells[d])});f.some(function(c){return c!==null})&&(o=f)}}return u`
      <${W} title=${l("meter.section.phases")} tooltip=${l("meter.tip.phases")}>
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
              ${r.map(function(c){return u`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${l(c.m.key)} <span class="meter-unit">[${c.m.unit}]</span>
                      ${c.m.tip?u`<${ce} text=${l(c.m.tip)} />`:null}
                    </th>
                    ${c.cells.map(function(d){var h=c.m.signed?si(d):"";return u`<td style=${h?"color:"+h:""}>
                        ${d===null?"–":k.num(d,c.m.prec)}</td>`})}
                  </tr>`})}
              ${o?u`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${cr} tip=${l("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${o.map(function(c){return u`<td>${c===null?"–":k.num(c,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?u`
          <div class="meter-imbalance">
            <${cr} tip=${l("meter.tip.imbalance")}>${l("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${k.w(a)}</span>
          </div>`:null}
      <//>`}function Rl(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=oi(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?ln(r.raw):null;return u`
      <${W} group="production" title=${l("meter.section.registers")}
        tooltip=${l("meter.tip.registers")}
        badge=${r&&(i===1||i===2)?u`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${l("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${l(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?u`
          <dl class="meter-reg-list">
            ${n.map(function(a){var o=ln(a.raw);return u`
                <div class="meter-reg">
                  <dt>${l(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${Pl()}</dt>
                  <dd>${o===null?String(a.raw):k.num(o,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function Al(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?k.num(i.min,1)+" / "+k.num(i.max,1):"–"}return u`
      <${W} title=${l("meter.section.minmax")} subtitle=${l("meter.since_open")}
        tooltip=${l("meter.tip.minmax")}>
        <dl class="meter-reg-list">
          ${[1,2,3].map(function(i){return t.u[i]?u`
              <div class="meter-reg">
                <dt>${l("meter.voltage")} ${l("meter.phase",{n:i})} <span class="meter-unit">[V]</span></dt>
                <dd>${r(t.u[i])}</dd>
              </div>`:null})}
          ${t.peakImp?u`
            <div class="meter-reg">
              <dt>${l("meter.peak_import")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-import)"}>${k.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?u`
            <div class="meter-reg">
              <dt>${l("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-vzev)"}>${k.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function Wl(e){var t=e.resolved,n=x(!1),r=n[0],i=n[1],a=t.filter(function(f){return f.desc}),o=t.filter(function(f){return!f.desc});function s(f){var c=!!f.desc,d=f.raw!==null&&typeof f.raw=="object"?JSON.stringify(f.raw):String(f.raw);return u`
        <tr>
          <td class="meter-raw-name">${f.name}</td>
          <td class="meter-raw-val">${d}</td>
          <td class="meter-raw-unit">${c&&f.desc.unit?f.desc.unit:""}</td>
          <td class="meter-raw-label">${l(c?f.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return u`
      <${W} title=${l("meter.section.raw")}>
        <button class="meter-raw-toggle" aria-expanded=${r}
          onClick=${function(){i(!r)}}>
          ${l(r?"meter.raw_hide":"meter.raw_show")}
        </button>
        ${r?u`
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
                ${a.map(s)}
                ${o.length?u`
                  <tr class="meter-raw-sep"><td colspan="4">${l("meter.raw.other")}</td></tr>
                  ${o.map(s)}`:null}
              </tbody>
            </table>
          </div>`:null}
      <//>`}function Dl(){var e=x(void 0),t=e[0],n=e[1],r=x(null),i=r[0],a=r[1],o=x(!1),s=o[0],f=o[1],c=x(null),d=c[0],h=c[1],v=be([]),p=be({u:{},peakImp:0,peakExp:0});J(function(){return F.poll(function(){F.getMeter().then(function($){if(n($&&$.values?$.values:null),h($&&typeof $.now=="number"?$.now:Math.floor(Date.now()/1e3)),!(!$||!$.values)){var y=ur($.values),m=p.current;[1,2,3].forEach(function(O){var C=_e(y,Cn("voltage",O));C!==null&&(m.u[O]=Nl(m.u[O],C))});var w=_e(y,Pe("meter.f.power_import")),M=_e(y,Pe("meter.f.power_export")),z=_e(y,Pe("meter.f.power_net"));w===null&&z!==null&&(w=z>0?z:0),M===null&&z!==null&&(M=z<0?-z:0),w!==null&&(m.peakImp=sr(m.peakImp,w)),M!==null&&(m.peakExp=sr(m.peakExp,M)),a({u:Object.assign({},m.u),peakImp:m.peakImp,peakExp:m.peakExp});var I=_e(y,Pe("meter.f.energy_import")),U=z!==null?z>0:w!==null&&w>0,N=v.current;for(N.push({reg:I,importing:U});N.length>Il;)N.shift();f(Ml(N))}}).catch(function(){})},Tl)},[]);var g=t?ur(t):[],b=d?Math.max(0,Math.floor(Date.now()/1e3)-d):null;return u`
      <div>
        <${Me} title=${l("page.meter")} subtitle=${l("meter.subtitle")}
          actions=${d?u`
            <span class="meter-updated">
              ${l("meter.updated",{time:k.time(d,"hm")})}
              ${b!==null?u`<span class="meter-age"> · ${l("meter.age",{s:b})}</span>`:null}
            </span>`:null} />

        ${s?u`<div class="banner banner-warn">${l("meter.stale")}</div>`:null}

        ${t===void 0?u`<${W}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}
        ${t===null?u`<${W}><p class="placeholder-text">${l("meter.empty")}</p><//>`:null}
        ${t?u`
          <${Ll} resolved=${g} />
          <${Fl} resolved=${g} />
          <${Rl} resolved=${g} />
          <${Al} stats=${i} />
          <${Wl} resolved=${g} />`:null}
      </div>`}var Ul=50;function Bl(e,t){if(!e||!e.data)return[];var n=e.producer_id,r=n&&e.data[n],i={},a=[],o=r?[r]:Object.keys(e.data).map(function(s){return e.data[s]});return o.forEach(function(s){if(s)for(var f=0;f+2<s.length;f+=3){var c=s[f];t&&(c<t[0]||c>=t[1])||i[c]||(i[c]=!0,a.push(c))}}),a.sort(function(s,f){return f-s}),a}function Hl(e,t,n){var r=ga(e,t,n),i=k.time(e,"hm"),a=k.time(e+900,"hm");return!r||r.prodWh<=0?l("explain.noprod",{from:i,to:a}):l("explain.sentence",{from:i,to:a,prod:k.wh(r.prodWh),member:k.wh(r.memberImpWh),total:k.wh(r.totalImpWh),share:k.num(r.sharePct,0),alloc:k.wh(r.allocatedWh)})}function ui(e){var t=x(0),n=t[0],r=t[1],i=Bl(e.raw,e.range),a=i.slice(0,(n+1)*Ul),o=a.length<i.length;return u`
      <div class="explain-panel" role="region" aria-label=${e.title||l("explain.title")}>
        <div class="explain-head">
          <div>
            <h3 class="explain-title">${e.title||l("explain.title")}</h3>
            <p class="explain-subtitle">${l("explain.subtitle")}</p>
          </div>
          ${e.onClose?u`
            <button class="explain-close" aria-label=${l("explain.close")} onClick=${e.onClose}>×</button>`:null}
        </div>
        ${i.length===0?u`<p class="placeholder-text">${l("explain.empty")}</p>`:u`
            <ul class="explain-list">
              ${a.map(function(s){return u`<li key=${s} class="explain-slot">${Hl(s,e.raw,e.memberId)}</li>`})}
            </ul>
            ${o?u`
              <button class="explain-more" onClick=${function(){r(n+1)}}>
                ${l("explain.more")}
              </button>`:null}`}
      </div>`}var fr=!1,jl=2*3600,Vl=u`<svg viewBox="0 0 24 24" class="vz-house" aria-hidden="true"><path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="13" width="4" height="6" fill="currentColor"/></svg>`,ql=u`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16l-3.6.6.6-3.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Kl=u`<svg viewBox="0 0 20 20" class="vz-plus" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,vr=u`<svg viewBox="0 0 24 24" class="vz-grid-ico" aria-hidden="true"><path d="M6 3v18M18 3v18M6 8h12M6 14h12M3 6l3 2 3-2M15 6l3 2 3-2M3 16l3 2 3-2M15 16l3 2 3-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function Xe(e){return e&&(e.type==="PRODUCER"||e.typ==="P")}function Yl(e){if(!e||!e.length)return{};var t=e[e.length-1];return t&&t.members||{}}function dt(e){var t=e.member,n=t.name||t.id,r=e.noData;return u`
      <div class=${"vz-card"+(e.own?" vz-card-own":"")+(e.producer?" vz-card-producer":"")}>
        <button class="vz-edit" aria-label=${l("vzev.edit")}
          onClick=${function(){Se.navigate("/vzev/mitglied/"+encodeURIComponent(t.id))}}>
          ${ql}
        </button>
        <div class="vz-house-wrap">${Vl}</div>
        <span class="vz-name">${n}</span>
        <span class="vz-type">${l(e.producer?"vzev.type.producer":"vzev.type.consumer")}</span>
        ${e.own?u`<span class="vz-ownbadge">${l("vzev.own")}</span>`:null}
        ${r?u`
          <span class="vz-nodata" role="status">
            ${r.lastTs?l("vzev.nodata.badge",{time:k.time(r.lastTs,"15m")}):l("vzev.nodata.never")}
          </span>`:null}
        ${!e.own&&e.onRemove?u`
          <button class="vz-remove" onClick=${e.onRemove}>${l("vzev.remove")}</button>`:null}
      </div>`}function Gl(e){var t=e.wh,n="vz-chip vz-chip-"+(e.dir==="grid"?"grid":"vzev");return u`
      <span class=${n}>
        <span class="vz-chip-dir">${l(e.dir==="grid"?"vzev.flow.fromgrid":"vzev.flow.fromproducer")}</span>
        <span class="vz-chip-val">${k.wh(t)}</span>
      </span>`}function Zl(){var e=x(null),t=e[0],n=e[1],r=x({}),i=r[0],a=r[1],o=x([]),s=o[0],f=o[1],c=x(!1),d=c[0],h=c[1],v=x(null),p=v[0],g=v[1],b=x(fr),$=b[0],y=b[1],m=x(null),w=m[0],M=m[1],z=be(!0);function I(){F.getVzevMembersList().then(function(P){z.current&&(n(P),h(!1))}).catch(function(){z.current&&(n([]),h(!0))}),F.getVzevRaw().then(function(P){z.current&&g(P||null)}).catch(function(){z.current&&g(null)})}J(function(){z.current=!0,I(),F.getVzevDiscovered().then(function(V){z.current&&f(V)}).catch(function(){z.current&&f([])});var P=F.poll(function(){F.getVzevFlows("15m",1).then(function(V){z.current&&a(Yl(V&&V.flows))}).catch(function(){})},2e3);return function(){z.current=!1,P()}},[]);function U(){fr=!0,y(!0)}function N(P){F.get("/api/vzev/members?action=remove&id="+encodeURIComponent(P.id)).then(function(){le(l("vzev.removed"),{type:"info"}),I()}).catch(function(){le(l("vzev.saveerror"),{type:"error"})})}var O=!!(p&&p.self_id!=null&&p.self_id===p.producer_id),C=O?u`
      <${Y} secondary onClick=${function(){Se.navigate("/vzev/abrechnung")}}>
        ${l("vzev.billing")} ›
      <//>`:null,E=u`<${Me} title=${l("page.vzev")} subtitle=${l("vzev.subtitle")} actions=${C} />`;if(t===null)return u`<div>${E}<${W}><p class="placeholder-text">${l("common.loading")}</p><//></div>`;var T=null,B=[];t.forEach(function(P){P.own||P.is_own?T=P:B.push(P)}),t.forEach(function(P){Xe(P)});var R=u`
      <${W} class="vz-discovery">
        <div class="vz-discovery-head">
          <h2 class="card-title">${l("vzev.discovery.title")}</h2>
          <span class="card-subtitle">${l("vzev.discovery.hint")}</span>
        </div>
        ${s.length===0?u`<p class="placeholder-text">${l("vzev.discovery.empty")}</p>`:u`
            <ul class="vz-discovery-list">
              ${s.map(function(P){return u`
                  <li key=${P.id} class="vz-discovery-item">
                    <span class="vz-disc-name">${P.name||P.id}</span>
                    <span class="vz-disc-meta">${P.id}${P.url?" · "+P.url:""}</span>
                    <${Y} small onClick=${function(){Se.navigate("/vzev/mitglied/"+encodeURIComponent(P.id))}}>
                      ${Kl} ${l("vzev.add")}
                    <//>
                  </li>`})}
            </ul>`}
      <//>`;function _(P){var V=i[P.id];return typeof V=="number"?V:null}var S=0;if(p&&p.data)for(var A in p.data){var D=Kn(p,A);D&&D>S&&(S=D)}function ue(P){if(!p||!p.data)return null;var V=Kn(p,P.id),G=S||Math.floor(Date.now()/1e3);return V===null?{lastTs:null}:G-V>jl?{lastTs:V}:null}var se=$?null:u`
      <${W} class="vz-info">
        <div class="vz-info-head">
          <h2 class="card-title">${l("vzev.info.title")}</h2>
          <button class="vz-info-close" aria-label=${l("common.close")} onClick=${U}>×</button>
        </div>
        <p class="vz-info-body">${l("vzev.info.body")}</p>
        <${Y} small secondary onClick=${U}>${l("vzev.info.dismiss")}<//>
      <//>`,j=w?(function(){for(var P=0;P<t.length;P++)if(t[P].id===w)return t[P];return null})():null,X=j&&p?u`
      <${W} class="vz-drill">
        <${ui} raw=${p} memberId=${w}
          title=${l("explain.title")+" – "+(j.name||w)}
          onClose=${function(){M(null)}} />
      <//>`:null;function pe(){var P=B;return u`
        <${W} group="vzev" class="vz-graph-card">
          <div class="vz-graph" role="img" aria-label=${l("vzev.graph.aria")}>
            <div class="vz-ring">
              ${P.length===0?u`<p class="placeholder-text vz-ring-empty">${l("vzev.empty")}</p>`:P.map(function(V){var G=Xe(V),ne=_(V);return u`
                      <div key=${V.id} class="vz-node vz-node-peer">
                        <${dt} member=${V} producer=${G} noData=${ue(V)}
                          onRemove=${function(){N(V)}} />
                        ${ne!==null&&ne>0?u`
                          <span class=${"vz-flow "+(G?"vz-flow-vzev":"vz-flow-grid")}>
                            <span class="vz-flow-arrow">${G?"→":"←"}</span>
                            ${k.wh(ne)}
                          </span>`:null}
                        ${!G&&p?u`
                          <button class="vz-explain-btn" onClick=${function(){M(V.id)}}>
                            ${l("explain.open")}
                          </button>`:null}
                      </div>`})}
            </div>

            ${T?u`
              <div class="vz-node vz-node-own">
                <${dt} member=${T} own=${!0} producer=${Xe(T)} />
              </div>`:null}

            <div class="vz-arrow-grid" aria-hidden="true">
              <span class="vz-arrow-line"></span>
            </div>

            <div class="vz-node vz-node-net">
              <div class="vz-netnode">
                <div class="vz-grid-icowrap">${vr}</div>
                <span class="vz-net-label">${l("vzev.net")}</span>
              </div>
            </div>
          </div>
        <//>`}function fe(){return u`
        <div class="vz-list">
          ${T?u`
            <div class="vz-list-item vz-list-own">
              <${dt} member=${T} own=${!0} producer=${Xe(T)} />
            </div>`:null}
          ${B.map(function(P){var V=Xe(P),G=_(P);return u`
              <div key=${P.id} class="vz-list-item">
                <${dt} member=${P} producer=${V} noData=${ue(P)}
                  onRemove=${function(){N(P)}} />
                ${G!==null&&G>0?u`<${Gl} dir=${V?"producer":"grid"} wh=${G} />`:null}
                ${!V&&p?u`
                  <button class="vz-explain-btn" onClick=${function(){M(P.id)}}>
                    ${l("explain.open")}
                  </button>`:null}
              </div>`})}
          <div class="vz-list-item vz-list-net">
            <div class="vz-netnode vz-netnode-row">
              <div class="vz-grid-icowrap">${vr}</div>
              <span class="vz-net-label">${l("vzev.net")}</span>
            </div>
          </div>
        </div>`}return u`
      <div>
        ${E}
        ${d?u`<div class="banner banner-warn">${l("vzev.loaderror")}</div>`:null}
        ${se}
        <div class="vz-graph-wrap">${pe()}</div>
        <div class="vz-list-wrap">${fe()}</div>
        ${X}
        ${R}
      </div>`}function dr(e){return e&&(e.type==="PRODUCER"||e.typ==="P")?"P":"C"}function Ql(e){if(e==null||e===0)return"";var t=new Date(e*1e3);function n(r){return(r<10?"0":"")+r}return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function Xl(e){if(!e)return null;var t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e));if(!t)return null;var n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),0,0,0,0);return Math.floor(n.getTime()/1e3)}function Jl(e){var t=e.params&&e.params.id||null,n=x(""),r=n[0],i=n[1],a=x(""),o=a[0],s=a[1],f=x("C"),c=f[0],d=f[1],h=x(""),v=h[0],p=h[1],g=x(""),b=g[0],$=g[1],y=x([]),m=y[0],w=y[1],M=x(!!t),z=M[0],I=M[1],U=x(!1),N=U[0],O=U[1],C=x(!1),E=C[0],T=C[1],B=x(""),R=B[0],_=B[1];J(function(){var j=!1;return Promise.all([F.getVzevMembersList().catch(function(){return[]}),t?F.getVzevDiscovered().catch(function(){return[]}):Promise.resolve([])]).then(function(X){if(!j){var pe=X[0]||[],fe=X[1]||[];w(pe);for(var P=null,V=0;V<pe.length;V++)if(pe[V].id===t){P=pe[V];break}if(P)I(!0),i(P.name||""),s(P.location||P.loc||""),d(dr(P)),p(P.metering_point||""),$(Ql(P.entry_ts));else if(t){I(!1);for(var G=null,ne=0;ne<fe.length;ne++)if(fe[ne].id===t){G=fe[ne];break}G&&(i(G.name||""),s(G.location||G.loc||""),d(dr(G)))}O(!0)}}),function(){j=!0}},[t]);function S(){if(c!=="P")return!1;for(var j=0;j<m.length;j++){var X=m[j];if(X.id!==t&&(X.type==="PRODUCER"||X.typ==="P"))return!0}return!1}function A(){if(_(""),!r.trim()){_(l("vzev.form.err.name"));return}if(S()){_(l("vzev.form.err.producer"));return}T(!0);var j="/api/vzev/members?action=upsert&id="+encodeURIComponent(t||"")+"&name="+encodeURIComponent(r.trim())+"&loc="+encodeURIComponent(o.trim())+"&typ="+encodeURIComponent(c)+"&mp="+encodeURIComponent(v.trim()),X=Xl(b);X!==null&&(j+="&entry="+X),F.get(j).then(function(){le(l("vzev.saved"),{type:"info"}),Se.navigate("/vzev")}).catch(function(){T(!1),le(l("vzev.saveerror"),{type:"error"})})}function D(){T(!0),F.get("/api/vzev/members?action=remove&id="+encodeURIComponent(t)).then(function(){le(l("vzev.removed"),{type:"info"}),Se.navigate("/vzev")}).catch(function(){T(!1),le(l("vzev.saveerror"),{type:"error"})})}var ue=l(z?"vzev.form.edit":"vzev.form.add"),se=u`<${Me} title=${ue} subtitle=${l("vzev.form.subtitle")} />`;return N?u`
      <div>
        ${se}
        <${W} class="vz-form-card">
          <div class="vz-form">
            <${_t} label=${l("vzev.form.name")} value=${r}
              placeholder=${l("vzev.form.name.ph")}
              onInput=${function(j){i(j)}} />
            <${_t} label=${l("vzev.form.loc")} value=${o}
              placeholder=${l("vzev.form.loc.ph")}
              onInput=${function(j){s(j)}} />
            <${Lt} label=${l("vzev.form.typ")} value=${c}
              onChange=${function(j){d(j),_("")}}
              options=${[{value:"C",label:l("vzev.type.consumer")},{value:"P",label:l("vzev.type.producer")}]} />

            <${_t} label=${l("vzev.form.metering_point")} value=${v}
              placeholder=${l("vzev.form.metering_point.ph")} maxlength=${40}
              onInput=${function(j){p(j)}} />
            <p class="vz-form-hint">${l("vzev.form.metering_point.hint")}</p>

            <label class="field field-block">
              <span class="field-label">${l("vzev.form.entry_ts")}</span>
              <input class="textfield" type="date" value=${b}
                onInput=${function(j){$(j.target.value)}} />
            </label>
            <p class="vz-form-hint">${l("vzev.form.entry_ts.hint")}</p>

            ${R?u`<p class="vz-form-err" role="alert">${R}</p>`:null}

            <div class="vz-form-actions">
              <${Y} onClick=${A} disabled=${E}>${l("vzev.form.save")}<//>
              <${Y} secondary onClick=${function(){Se.navigate("/vzev")}}
                disabled=${E}>${l("vzev.form.cancel")}<//>
              ${z?u`
                <${Y} danger onClick=${D} disabled=${E}>${l("vzev.remove")}<//>`:null}
            </div>
          </div>
        <//>
      </div>`:u`<div>${se}<${W}><p class="placeholder-text">${l("common.loading")}</p><//></div>`}var on="var(--c-production)",eo="var(--c-vzev)";function ci(e){return!e||!e.expected?null:Math.round(e.complete/e.expected*100)}function Tt(e){var t=ci(e);return t!==null&&t<100}function to(e){e=e||{};var t=Number(e.vzev_import_chf_kwh);return isNaN(t)?null:t}function pr(e,t){return e+"-Q"+t}function Kt(e,t){return Math.floor(new Date(e,t,1,0,0,0,0).getTime()/1e3)}function no(e){for(var t=new Date,n=t.getFullYear(),r=Math.floor(t.getMonth()/3)+1,i=[],a=0;a<7;a++){for(var o=r-a,s=n;o<1;)o+=4,s-=1;i.push({value:pr(s,o),label:pr(s,o)})}return i}function ro(e){var t=/^(\d{4})-Q([1-4])$/.exec(String(e||""));return t?{year:parseInt(t[1],10),q:parseInt(t[2],10)}:null}function io(e){var t=ro(e);if(!t)return[];var n=(t.q-1)*3;return[Kt(t.year,n),Kt(t.year,n+1),Kt(t.year,n+2)]}function hr(e,t,n,r){var i=io(t),a=Array.isArray(e)?e:[];return a.map(function(o,s){var f;o==null?f=0:typeof o=="number"?f=o:f=n(o);var c=o&&typeof o=="object"&&typeof o.ts=="number"?o.ts:i[s]!==void 0?i[s]:(i[0]||0)+s*2592e3;return{t:c,y:f==null||isNaN(f)?0:f,color:r}})}function gr(e){return typeof e.wh=="number"?e.wh/1e3:typeof e.kwh=="number"?e.kwh:typeof e.y=="number"?e.y:0}function ao(e){var t=e.quality;if(!t||!t.expected)return null;var n=ci(t),r=e.byId||{},i=[],a=t.perMember||{};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var s=(a[o].expected||0)-(a[o].have||0);if(s>0){var f=r[o]&&r[o].name||o;i.push(l("billing.quality.member_missing",{name:f,n:s}))}}return u`
      <${W} class="billing-quality">
        <div class="billing-quality-head">
          <h2 class="card-title">${l("billing.quality.title")}
            <${ce} text=${l("tooltip.provisorisch")} /></h2>
          ${Tt(t)?u`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        </div>
        <p class="billing-quality-line">${l("billing.quality.complete",{pct:n})}</p>
        ${t.provisional>0?u`<p class="billing-quality-line">${l("billing.quality.provisional",{n:t.provisional})}</p>`:null}
        ${t.missing>0?u`<p class="billing-quality-line">${l("billing.quality.missing",{n:t.missing})}</p>`:null}
        ${i.length===0&&!Tt(t)?u`<p class="billing-quality-line billing-quality-ok">${l("billing.quality.ok")}</p>`:null}
        ${i.map(function(c,d){return u`<p key=${d} class="billing-quality-line">${c}</p>`})}
      <//>`}function lo(e){var t=e.member,n=e.tariffs||{},r=e.period,i=to(n),a=typeof t.wh=="number"?t.wh/1e3:null,o=t.entry_ts&&r&&t.entry_ts>r[0]?t.entry_ts:r?r[0]:null,s=e.capReference,f=s!=null&&i!==null&&i>s?l("billing.detail.method_effektiv"):l("billing.detail.method_pauschal");function c(d,h){return u`<div class="stmt-line"><span class="stmt-key">${d}</span><span class="stmt-val">${h}</span></div>`}return u`
      <div class="stmt">
        ${c(l("billing.detail.period"),r?k.time(o,"1d")+" – "+k.time(r[1]-1,"1d"):"–")}
        ${c(l("billing.detail.member"),(t.name||t.id)+(t.location?", "+t.location:""))}
        ${t.metering_point?c(u`${l("billing.detail.meteringpoint")} <${ce} text=${l("tooltip.zaehlpunkt")} />`,t.metering_point):null}
        ${c(l("billing.detail.energy"),a===null?"–":k.num(a,2)+" kWh")}
        ${typeof t.ht_wh=="number"?c(l("billing.detail.energy_ht"),k.num(t.ht_wh/1e3,2)+" kWh"):null}
        ${typeof t.nt_wh=="number"?c(l("billing.detail.energy_nt"),k.num(t.nt_wh/1e3,2)+" kWh"):null}
        ${c(l("billing.detail.tariff"),i===null?"–":k.num(i,2)+" CHF/kWh")}
        ${c(l("billing.detail.amount"),typeof t.chf=="number"?k.chf(t.chf):"–")}
        <p class="stmt-residual">${l("billing.detail.residual")}</p>
        ${c(u`${l("billing.detail.key")} <${ce} text=${l("tooltip.verteilschluessel")} />`,l("billing.detail.key_value"))}
        ${c(l("billing.detail.method"),f)}
      </div>`}function mr(e){var t=e.wh!==null&&e.wh!==void 0?e.wh/1e3:null,n=x(!1),r=n[0],i=n[1],a=x(!1),o=a[0],s=a[1],f=!!e.member;return u`
      <${W} group="vzev" title=${e.title} subtitle=${e.subtitle}>
        ${e.provisional?u`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        <div class="billing-metrics">
          <div class="billing-metric">
            <span class="billing-metric-label">${e.kwhLabel}</span>
            <span class="billing-metric-value" style=${"color:"+on}>
              ${t===null?"–":k.num(t,2)+" kWh"}
            </span>
          </div>
          <div class="billing-metric">
            <span class="billing-metric-label">${e.chfLabel}</span>
            <span class="billing-metric-value" style=${"color:"+eo}>
              ${e.chf===null||e.chf===void 0?"–":k.chf(e.chf)}
            </span>
          </div>
        </div>
        ${e.note?u`<p class="billing-card-note">${e.note}</p>`:null}
        <${hn} height=${180} yUnit="kWh" xUnit=${l("billing.axis.month")}
          xTickFormat=${function(c){return k.time(c,"1mo")}}
          yFormat=${function(c){return k.num(c,1)+" kWh"}}
          points=${e.points} />
        ${f?u`
          <div class="billing-card-actions no-print">
            <${Y} small secondary onClick=${function(){i(!r)}}>
              ${l(r?"billing.member.collapse":"billing.member.expand")}
            <//>
            ${e.raw?u`
              <${Y} small secondary onClick=${function(){s(!o)}}>
                ${l("explain.open")}
              <//>`:null}
          </div>`:null}
        ${f&&r?u`
          <${lo} member=${e.member} tariffs=${e.tariffs}
            period=${e.period} capReference=${e.capReference} />`:null}
        ${f&&o&&e.raw?u`
          <${ui} raw=${e.raw} memberId=${e.member.id}
            range=${e.period} onClose=${function(){s(!1)}} />`:null}
      <//>`}function oo(e){var t=e.data,n=e.quarter,r=t.total||{},i=hr(r.months,n,gr,on),a=Array.isArray(t.members)?t.members:[];return u`
      <div class="billing-grid">
        <${mr}
          title=${l("billing.total.title")}
          subtitle=${n}
          kwhLabel=${l("billing.producer.energy")}
          chfLabel=${l("billing.producer.profit")}
          wh=${typeof r.exp_wh=="number"?r.exp_wh:null}
          chf=${typeof r.revenue_chf=="number"?r.revenue_chf:null}
          points=${i} />
        ${a.map(function(o){return u`
            <${mr} key=${o.id}
              title=${o.name||o.id}
              kwhLabel=${l("billing.producer.energy")}
              chfLabel=${l("billing.producer.profit")}
              wh=${typeof o.wh=="number"?o.wh:null}
              chf=${typeof o.chf=="number"?o.chf:null}
              points=${hr(o.months,n,gr,on)}
              member=${o} tariffs=${t.tariffs} period=${t.range}
              raw=${t.raw} capReference=${e.capReference}
              provisional=${e.provisional} />`})}
      </div>`}function so(e){var t=e.info||{},n=t.representative_name,r=t.connection_point_id;return!n&&!r?null:u`
      <${W} class="billing-header-card">
        ${n?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.rep")}</span> ${n}${t.representative_contact?" · "+t.representative_contact:""}</p>`:null}
        ${r?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.connpoint")}</span> ${r}</p>`:null}
      <//>`}function uo(e,t){var n=Array.isArray(e.members)?e.members:e.self?[e.self]:[],r=Tt(e.quality),i=[l("billing.detail.member"),l("billing.detail.meteringpoint"),l("billing.detail.energy")+" [kWh]",l("billing.detail.energy_ht")+" [kWh]",l("billing.detail.energy_nt")+" [kWh]",l("billing.detail.amount")+" [CHF]",l("billing.provisional.badge")],a=n.map(function(d){return[d.name||d.id,d.metering_point||"",typeof d.wh=="number"?(d.wh/1e3).toFixed(2):"",typeof d.ht_wh=="number"?(d.ht_wh/1e3).toFixed(2):"",typeof d.nt_wh=="number"?(d.nt_wh/1e3).toFixed(2):"",typeof d.chf=="number"?d.chf.toFixed(2):"",r?"1":"0"]}),o=li(i,a),s=new Blob([o],{type:"text/csv;charset=utf-8"}),f=URL.createObjectURL(s),c=document.createElement("a");c.href=f,c.download="gplug-abrechnung-"+t+".csv",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(function(){URL.revokeObjectURL(f)},0)}function co(){var e=no(),t=x(e.length?e[0].value:""),n=t[0],r=t[1],i=x(null),a=i[0],o=i[1],s=x("loading"),f=s[0],c=s[1];J(function(){var m=!1;return c("loading"),F.getVzevBilling(n).then(function(w){if(!m){if(!w||typeof w!="object"){o(null),c("empty");return}o(w),c("ready")}}).catch(function(){m||(o(null),c("error"))}),function(){m=!0}},[n]);function d(m){if(!m)return!1;var w=String(m.role||m.type||"").toUpperCase();if(w==="PRODUCER"||w==="P")return!0;if(w==="CONSUMER"||w==="C")return!1;var M=m.self||{};return m.self||typeof M.cost_grid_chf=="number"||typeof m.cost_grid_chf=="number"||typeof m.import_wh=="number"?!1:!!(m.total||Array.isArray(m.members)&&m.members.length)}var h=a&&a.tariffs?Gr(a.tariffs):null,v=a?Tt(a.quality):!1,p={};a&&Array.isArray(a.members)&&a.members.forEach(function(m){m&&m.id!==void 0&&(p[m.id]=m)});var g=!!a&&d(a),b;f==="loading"?b=u`<${W}><p class="placeholder-text">${l("common.loading")}</p><//>`:f==="error"?b=u`<${W}><p class="placeholder-text">${l("billing.error")}</p><//>`:f==="empty"||!a?b=u`<${W}><p class="placeholder-text">${l("common.nodata")}</p><//>`:g?b=u`<${oo} data=${a} quarter=${n}
        capReference=${h} provisional=${v} />`:b=u`<${W}><p class="placeholder-text">${l("billing.producer_only")}</p><//>`;var $=f==="ready"&&g,y=u`
      <div class="billing-actions">
        <${Lt} label=${l("billing.quarter")} value=${n}
          options=${e}
          onChange=${function(m){r(m)}} />
        ${$?u`
          <${Y} secondary small onClick=${function(){uo(a,n)}}>${l("billing.export")}<//>
          <${Y} secondary small onClick=${function(){window.print()}}>${l("billing.print")}<//>`:null}
      </div>`;return u`
      <div class="billing-page">
        <${Me} title=${l("page.billing")} subtitle=${l("billing.subtitle")}
          actions=${y} />
        ${$?u`<${so} info=${a.info} />`:null}
        ${b}
        ${$?u`<${ao} quality=${a.quality} byId=${p} />`:null}
        <${W} class="billing-note-card">
          <p class="billing-note">${l("billing.note")}</p>
        <//>
      </div>`}var fo=["site","loads","productions","grid","tariffs","vzev","gplug","pro"],vo={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",tarife:"tariffs",vzev:"vzev",gplug:"gplug",pro:"pro"},po={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",tariffs:"tarife",vzev:"vzev",gplug:"gplug",pro:"pro"},ho={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",tariffs:"settings.tab.tariffs",vzev:"settings.tab.vzev",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},go={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},mo=["simulator","shelly","homeassistant","gplug"],fi=["simulator","homeassistant","gplug"],sn=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],It=["PHOTOVOLTAIC","BATTERY"];function $o(e){return e==null||String(e).trim()===""?!1:It.indexOf(String(e).toUpperCase())<0}var vi=["W","kW"],di=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh"],_o={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,vzev_export_chf_kwh:.22,vzev_import_chf_kwh:.22,co2_g_kwh:128};function ie(e){return e==null||String(e).trim()===""}function $e(e){return!ie(e)&&!isNaN(Number(e))}function Be(e){return ie(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function pi(e,t){var n={};ie(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!$e(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!$e(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};Be(i.on)||(n["url.on"]="settings.err.url"),Be(i.off)||(n["url.off"]="settings.err.url"),Be(i.status)||(n["url.status"]="settings.err.url")}else Be(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&ie(e.token)&&(n.token="settings.err.token");return n}function hi(e,t){var n={};return ie(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?ie(e.field)&&(n.field="settings.err.field"):(Be(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&ie(e.token)&&(n.token="settings.err.token")),n}function gi(e){var t={};return e.integration==="gplug"?ie(e.field)&&(t.field="settings.err.field"):(Be(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&ie(e.token)&&(t.token="settings.err.token")),t}function bo(e){var t={};return ie(e.id)&&(t.id="settings.err.id_required"),ie(e.name)&&(t.name="settings.err.name_required"),t}function yo(e){var t={};di.forEach(function(c){(!$e(e[c])||Number(e[c])<0)&&(t[c]="settings.err.rate")});var n=e.co2_g_kwh;(!$e(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!ie(r),o=!ie(i);if((a||o)&&(!a||!o?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!$e(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!$e(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var s=0;s<e.ht_windows.length;s++){var f=e.ht_windows[s]||{};(!$e(f.from)||!$e(f.to)||Number(f.from)<0||Number(f.to)>24||Number(f.from)>Number(f.to))&&(t["win."+s]="settings.err.win_hours")}return t}function rt(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function H(e){var t=e.error;return u`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?u`<span class="field-error">${l(t)}</span>`:null}
      </label>`}function Oe(e){return u`
      <label class="field field-block">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function Sn(e){return u`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${l("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function Ve(e){return e.map(function(t){return{value:t,label:t}})}function wo(e){var t=e.cfg,n=bo(t);function r(i){return function(a){e.patch(i,a)}}return u`
      <${W} group="grid">
        <p class="settings-scope">${l("settings.scope_note")}</p>
        <div class="settings-form">
          <${H} label=${l("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${H} label=${l("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${H} label=${l("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${H} label=${l("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${lt} disabled=${rt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function ko(e){var t=e.selected>=0;return u`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${Y} small onClick=${e.onAdd}>${l("settings.add")}<//>
          </div>
          ${e.items.length===0?u`<p class="md-empty">${l("settings.empty")}</p>`:e.items.map(function(n,r){return u`
                  <button key=${r} type="button"
                    class=${"md-row"+(r===e.selected?" md-row-active":"")}
                    onClick=${function(){e.onSelect(r)}}>${e.labelFn(n,r)}</button>`})}
        </div>
        <div class="md-detail">
          ${e.selected>=0?u`
                <button type="button" class="md-back" onClick=${function(){e.onSelect(-1)}}>← ${l("settings.back")}</button>
                ${e.detail}`:u`<p class="md-empty md-detail-empty">${l("settings.select_hint")}</p>`}
        </div>
      </div>`}function lt(e){return u`
      <div class="settings-actions">
        <${Y} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?l("settings.saving"):l("settings.save")}
        <//>
      </div>`}function xo(e){var t=e.item,n=e.otherIds,r=pi(t,n);function i(f){return function(c){e.patch(f,c)}}function a(f){return function(c){var d=Object.assign({},t.url||{});d[f]=c,e.patch("url",d)}}var o=t.integration||"simulator",s=o==="shelly"?t.url||{}:{};return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${Sn} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${H} label=${l("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${H} label=${l("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${H} label=${l("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${Oe} label=${l("settings.load.type")} value=${t.loadType||sn[0]}
            options=${Ve(sn)} onChange=${i("loadType")} />
          <${H} label=${l("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${Oe} label=${l("settings.integration")} value=${o}
            options=${Ve(mo)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${o==="shelly"?u`
            <${H} label=${l("settings.url.on")} value=${s.on} error=${r["url.on"]} onInput=${a("on")} />
            <${H} label=${l("settings.url.off")} value=${s.off} error=${r["url.off"]} onInput=${a("off")} />
            <${H} label=${l("settings.url.status")} value=${s.status} error=${r["url.status"]} onInput=${a("status")} />`:u`
            <${H} label=${l("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${o==="homeassistant"?u`
              <${H} label=${l("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function zo(e){var t=e.item,n=hi(t,e.otherIds);function r(a){return function(o){e.patch(a,o)}}var i=t.integration||"simulator";return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${Sn} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${H} label=${l("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${H} label=${l("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${Oe} label=${l("settings.prod.type")} value=${t.productionType||It[0]}
            options=${It.map(function(a){return{value:a,label:l(go[a])}})}
            onChange=${r("productionType")} />
          ${$o(t.productionType)?u`
            <div class="settings-warn" role="status">${l("settings.prodtype.unknown_warn")}</div>`:null}
          <${Oe} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${Ve(vi)} onChange=${r("dimension")} />
          <${Oe} label=${l("settings.integration")} value=${i}
            options=${Ve(fi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${H} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:u`
            <${H} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${H} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function Co(e){var t=e.item,n=gi(t);function r(o){return function(s){e.patch(o,s)}}var i=t.integration||"simulator",a=t.id==="to"?l("settings.grid.to"):l("settings.grid.from");return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${Oe} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${Ve(vi)} onChange=${r("dimension")} />
          <${Oe} label=${l("settings.integration")} value=${i}
            options=${Ve(fi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${H} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:u`
            <${H} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${H} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function Yt(e){var t=x(-1),n=t[0],r=t[1],i=e.items;function a(d,h){var v=i.slice(),p=Object.assign({},v[n]);p[d]=h,v[n]=p,e.onChange(v)}function o(){var d=i.concat([e.blank()]);e.onChange(d),r(d.length-1)}function s(){var d=i[n],h=(e.persistedIds||[]).indexOf(String(d&&d.id))!==-1;if(!(h&&!window.confirm(l(e.confirmKey)))){var v=i.slice();v.splice(n,1),r(-1),e.onDelete&&e.onDelete(d),e.onChange(v)}}var f=i.some(function(d,h){var v=i.filter(function(p,g){return g!==h}).map(function(p){return String(p.id)});return rt(e.validate(d,v))}),c=n>=0&&i[n]?u`<${e.Detail} item=${i[n]} patch=${a} onDelete=${s}
          otherIds=${i.filter(function(d,h){return h!==n}).map(function(d){return String(d.id)})} />`:null;return u`
      <${W} group=${e.group}>
        <${ko}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:o}
          detail=${c} />
        <${lt} disabled=${f} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function So(e){var t=e.tariffs,n=yo(t);function r(g){return function(b){e.patch(g,b)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(g,b,$){var y=i.map(function(m,w){if(w!==g)return m;var M=Object.assign({},m);return M[b]=$,M});e.setWindows(y)}function o(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function s(g){e.setWindows(i.filter(function(b,$){return $!==g}))}var f=$e(t.grid_import_ht_chf_kwh)&&$e(t.grid_import_nt_chf_kwh),c=f&&i.length===0,d=Mo(t),h=Gr(d),v=Number(t.vzev_import_chf_kwh),p=h!==null&&!isNaN(v)&&v>h;return u`
      <${W} group="vzev">
        <div class="settings-subhead">${l("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${H} label=${l("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${l("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${H} label=${l("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${H} label=${l("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${l("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(g,b){return u`
            <div key=${b} class="settings-form ht-window-row">
              <${H} label=${l("settings.tariff.win_days")} value=${g.days}
                placeholder=${l("settings.tariff.win_days.ph")} onInput=${function($){a(b,"days",$)}} />
              <${H} label=${l("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${g.from} error=${n["win."+b]} onInput=${function($){a(b,"from",$r($))}} />
              <${H} label=${l("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${g.to} onInput=${function($){a(b,"to",$r($))}} />
              <${Sn} onClick=${function(){s(b)}} />
            </div>`})}
        <${Y} small secondary onClick=${o}>${l("settings.tariff.win_add")}<//>
        ${c?u`<p class="settings-warn">${l("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${l("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${H} label=${l("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${H} label=${l("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${l("settings.tariff.cap_group")}</div>
        <div class="settings-form">
          <${H} label=${l("settings.tariff.vzev_export_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_export_chf_kwh} error=${n.vzev_export_chf_kwh} onInput=${r("vzev_export_chf_kwh")} />
          <${H} label=${l("settings.tariff.vzev_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_import_chf_kwh} error=${n.vzev_import_chf_kwh} onInput=${r("vzev_import_chf_kwh")} />
        </div>
        ${h!==null?u`
          <p class="settings-scope">
            ${l("settings.tariff.cap_ref",{ref:h.toFixed(2)})}
            <${ce} text=${l("tooltip.cap")} />
          </p>
          ${p?u`<p class="settings-warn">${l("settings.tariff.cap_warn")}</p>`:u`<p class="settings-ok">${l("settings.tariff.cap_ok")}</p>`}`:null}
        <div class="settings-subhead">${l("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${H} label=${l("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${lt} disabled=${rt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function $r(e){return ie(e)?void 0:Number(e)}function Mo(e){var t={};return["grid_import_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(n){ie(e[n])||(t[n]=Number(e[n]))}),Array.isArray(e.ht_windows)&&(t.ht_windows=e.ht_windows),t}function No(){var e=x(null),t=e[0],n=e[1],r=x({producers:0,members:0}),i=r[0],a=r[1],o=x(!1),s=o[0],f=o[1];J(function(){var h=!1;return Promise.all([F.getVzevInfo().catch(function(){return{}}),F.get("/api/vzev/members",{optional:!0}).catch(function(){return{members:[]}})]).then(function(v){if(!h){var p=v[0]||{};n({representative_name:p.representative_name||"",representative_contact:p.representative_contact||"",connection_point_id:p.connection_point_id||"",enabled:!!p.enabled});var g=v[1]&&v[1].members||[],b=0;g.forEach(function($){($.type==="PRODUCER"||$.typ==="P")&&b++}),a({producers:b,members:g.length})}}),function(){h=!0}},[]);function c(h){return function(v){n(function(p){var g=Object.assign({},p);return g[h]=v,g})}}function d(){s||!t||(f(!0),F.setVzevInfo(t).then(function(){le(l("settings.vzev.saved"),{type:"info"})}).catch(function(){le(l("settings.save_error"),{type:"error"})}).then(function(){f(!1)}))}return t?u`
      <${W} group="vzev">
        <div class="settings-form settings-toggle-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.enabled}
              onChange=${function(h){c("enabled")(h.target.checked)}} />
            <span>${l("settings.vzev.enabled")}</span>
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.enabled_hint")}</p>
        <p class="settings-scope">${l("settings.vzev.subtitle")}</p>
        <div class="settings-form">
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.representative_name")} <${ce} text=${l("tooltip.vertreter")} /></span>
            <input class="textfield" type="text" value=${t.representative_name}
              onInput=${function(h){c("representative_name")(h.target.value)}} />
          </label>
          <${H} label=${l("settings.vzev.representative_contact")}
            value=${t.representative_contact} onInput=${c("representative_contact")} />
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.connection_point_id")} <${ce} text=${l("tooltip.connpoint")} /></span>
            <input class="textfield" type="text" value=${t.connection_point_id}
              onInput=${function(h){c("connection_point_id")(h.target.value)}} />
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.counts",{producers:i.producers,members:i.members})}</p>
        <${lt} disabled=${!1} onSave=${d} saving=${s} />
      <//>`:u`<${W} group="vzev"><p class="placeholder-text">${l("settings.loading")}</p><//>`}function _r(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!ie(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function To(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return u`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${Y} small secondary onClick=${function(){e.onUse(1)}}>${l("settings.gplug.scan_use1")}<//>
          <${Y} small secondary onClick=${function(){e.onUse(2)}}>${l("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function Io(){var e=x(null),t=e[0],n=e[1],r=x(!1),i=r[0],a=r[1],o=x(!1),s=o[0],f=o[1],c=x(!1),d=c[0],h=c[1],v=x({scanning:!1,networks:null,error:!1}),p=v[0],g=v[1];function b(){a(!1),n(null),F.getWifiConfig().then(function(I){n({ssid1:I.ssid1,password1:"",ssid2:I.ssid2,password2:""})}).catch(function(){a(!0)})}J(function(){b()},[]);function $(I){return function(U){n(function(N){var O=Object.assign({},N);return O[I]=U,O})}}function y(){d||!window.confirm(l("settings.gplug.restart_confirm"))||(h(!0),F.restartDevice().then(function(){le(l("settings.gplug.restart_success"),{type:"info"})}).catch(function(){le(l("settings.gplug.restart_error"),{type:"error"})}).then(function(){h(!1)}))}function m(){s||!t||rt(_r(t))||(f(!0),F.setWifiConfig(t).then(function(){le(l("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(I){le(I&&I.message||l("settings.save_error"),{type:"error"})}).then(function(){f(!1)}))}function w(){g({scanning:!0,networks:null,error:!1}),F.wifiScanStart().catch(function(){});var I=0;function U(){I+=1,F.wifiScanResult().then(function(N){var O=N&&(N.WiFiScan!==void 0?N.WiFiScan:N.WifiScan);if(O&&typeof O=="object"){var C=Object.keys(O).map(function(E){return O[E]});C.sort(function(E,T){return(Number(T.RSSI)||0)-(Number(E.RSSI)||0)}),g({scanning:!1,networks:C,error:!1});return}if(I>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(U,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(U,1e3)}function M(I,U){n(function(N){var O=Object.assign({},N);return O["ssid"+I]=U,O})}if(i)return u`
        <${W} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Y} secondary small onClick=${b}>${l("settings.retry")}<//>
        <//>`;if(!t)return u`<${W} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var z=_r(t);return u`
      <div>
        <${W} group="grid" title=${l("settings.gplug.restart_title")}>
          <p class="settings-scope">${l("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${Y} danger disabled=${d} onClick=${y}>
              ${l(d?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${W} group="grid" title=${l("settings.gplug.wifi_title")}>
          <p class="settings-scope">${l("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${l("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${H} label=${l("settings.gplug.ssid1")} value=${t.ssid1} error=${z.ssid1} onInput=${$("ssid1")} />
            <${H} label=${l("settings.gplug.password1")} type="password" value=${t.password1} error=${z.password1}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${$("password1")} />
          </div>
          <div class="settings-subhead">${l("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${H} label=${l("settings.gplug.ssid2")} value=${t.ssid2} error=${z.ssid2} onInput=${$("ssid2")} />
            <${H} label=${l("settings.gplug.password2")} type="password" value=${t.password2} error=${z.password2}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${$("password2")} />
          </div>

          <div class="settings-subhead">${l("settings.gplug.scan_button")}</div>
          <${Y} secondary small disabled=${p.scanning} onClick=${w}>
            ${p.scanning?l("settings.gplug.scanning"):l("settings.gplug.scan_button")}
          <//>
          ${p.error?u`<p class="settings-warn">${l("settings.gplug.scan_error")}</p>`:null}
          ${p.networks&&p.networks.length===0?u`<p class="placeholder-text">${l("settings.gplug.scan_empty")}</p>`:null}
          ${p.networks&&p.networks.length>0?u`
            <div class="wifi-scan-list">
              ${p.networks.map(function(I,U){return u`<${To} key=${U} net=${I} onUse=${function(N){M(N,I.SSId)}} />`})}
            </div>`:null}

          <${lt} disabled=${rt(z)} onSave=${m} saving=${s} />
        <//>
      </div>`}function Eo(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function Po(e){var t=x(null),n=t[0],r=t[1],i=x(!1),a=i[0],o=i[1],s=x(!1),f=s[0],c=s[1];function d(){o(!1),r(null),F.getConfigRaw().then(function(p){r(Eo(p))}).catch(function(){o(!0)})}J(function(){d()},[]);var h=null;if(n!==null)try{JSON.parse(n)}catch(p){h=p.message}function v(){if(!(f||h)){var p;try{p=JSON.parse(n)}catch{return}c(!0),F.postConfig(p).then(function(){le(l("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),d()}).catch(function(g){le(g&&g.message||l("settings.save_error"),{type:"error"})}).then(function(){c(!1)})}}return a?u`
        <${W} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Y} secondary small onClick=${d}>${l("settings.retry")}<//>
        <//>`:n===null?u`<${W} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`:u`
      <${W} group="grid">
        <p class="settings-scope">${l("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(p){r(p.target.value)}}></textarea>
        ${h?u`<p class="settings-warn">${l("settings.pro.invalid_json",{msg:h})}</p>`:null}
        <div class="settings-actions">
          <${Y} secondary disabled=${f} onClick=${d}>${l("settings.pro.reload")}<//>
          <${Y} disabled=${f||!!h} onClick=${v}>
            ${l(f?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function Lo(){return{id:"",friendlyName:"",loadType:sn[0],currentPower:"",priority:1,integration:"simulator",url:""}}function Oo(){return{id:"",friendlyName:"",productionType:It[0],dimension:"W",integration:"simulator",url:""}}function Fo(e){var t=e.params&&e.params.tab||"site",n=vo[t]||"site",r=x(null),i=r[0],a=r[1],o=x(null),s=o[0],f=o[1],c=x(!1),d=c[0],h=c[1],v=x(!1),p=v[0],g=v[1],b=x({loads:[],productions:[],grid:[]}),$=b[0],y=b[1];function m(_){return(Array.isArray(_)?_:[]).map(function(S){return String(S&&S.id)}).filter(function(S){return!ie(S)})}function w(){f(null),F.getConfig().then(function(_){a(M(_)),g(!ie(_&&_.id)),y({loads:m(_&&_.loads),productions:m(_&&_.productions),grid:m(_&&_.grid)})}).catch(function(){f(!0),a(null)})}J(function(){w()},[]);function M(_){_=_||{};var S=Object.assign({},_);return S.loads=Array.isArray(_.loads)?_.loads:[],S.productions=Array.isArray(_.productions)?_.productions:[],S.grid=Array.isArray(_.grid)?_.grid:[],S.tariffs=Object.assign({},_o,_.tariffs||{}),S}function z(_,S){a(function(A){var D=Object.assign({},A);return D[_]=S,D})}function I(_,S){a(function(A){var D=Object.assign({},A);return D.tariffs=Object.assign({},A.tariffs),D.tariffs[_]=S,D})}function U(_){a(function(S){var A=Object.assign({},S);return A.tariffs=Object.assign({},S.tariffs),A.tariffs.ht_windows=_,A})}function N(_,S){a(function(A){var D=Object.assign({},A);return D[_]=S,D})}function O(){d||(h(!0),F.postConfig(C(i)).then(function(){le(l("settings.saved"),{type:"info"}),g(!0),w()}).catch(function(_){le(_&&_.message||l("settings.save_error"),{type:"error"})}).then(function(){h(!1)}))}function C(_){var S=Object.assign({},_);return S.loads=_.loads.map(function(A){var D=Object.assign({},A);return D.currentPower!==""&&D.currentPower!==void 0&&(D.currentPower=Number(D.currentPower)),D.priority!==""&&D.priority!==void 0&&(D.priority=Number(D.priority)),D}),S.tariffs=Object.assign({},_.tariffs),di.forEach(function(A){S.tariffs[A]=Number(_.tariffs[A])}),_.tariffs.co2_g_kwh!==void 0&&_.tariffs.co2_g_kwh!==""&&(S.tariffs.co2_g_kwh=Number(_.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(A){ie(_.tariffs[A])?delete S.tariffs[A]:S.tariffs[A]=Number(_.tariffs[A])}),Array.isArray(_.tariffs.ht_windows)&&(_.tariffs.ht_windows.length===0?delete S.tariffs.ht_windows:S.tariffs.ht_windows=_.tariffs.ht_windows.map(function(A){return{days:A.days,from:Number(A.from),to:Number(A.to)}})),S}function E(_){!_||ie(_.id)||F.setLoadState(_.id,"INACTIVE").catch(function(){})}function T(_){Se.navigate("/einstellungen/"+po[_])}var B=fo.map(function(_){return u`
        <button key=${_} type="button"
          class=${"pill"+(_===n?" pill-active":"")}
          onClick=${function(){T(_)}}>${l(ho[_])}</button>`}),R;return s?R=u`
        <${W}>
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Y} secondary small onClick=${w}>${l("settings.retry")}<//>
        <//>`:i?n==="site"?R=u`<${wo} cfg=${i} patch=${z} idLocked=${p}
        onSave=${O} saving=${d} />`:n==="tariffs"?R=u`<${So} tariffs=${i.tariffs} patch=${I}
        setWindows=${U} onSave=${O} saving=${d} />`:n==="vzev"?R=u`<${No} />`:n==="gplug"?R=u`<${Io} />`:n==="pro"?R=u`<${Po} onSaved=${w} />`:n==="loads"?R=u`<${Yt} group="loads"
        items=${i.loads} onChange=${function(_){N("loads",_)}}
        listTitle=${l("settings.tab.loads")}
        labelFn=${function(_){return _.friendlyName||_.id||l("settings.new_entry")}}
        blank=${Lo} confirmKey="settings.confirm_delete_load"
        persistedIds=${$.loads}
        onDelete=${E}
        validate=${pi} Detail=${xo}
        onSave=${O} saving=${d} />`:n==="productions"?R=u`<${Yt} group="production"
        items=${i.productions} onChange=${function(_){N("productions",_)}}
        listTitle=${l("settings.tab.productions")}
        labelFn=${function(_){return _.friendlyName||_.id||l("settings.new_entry")}}
        blank=${Oo} confirmKey="settings.confirm_delete_production"
        persistedIds=${$.productions}
        validate=${function(_,S){return hi(_,S)}} Detail=${zo}
        onSave=${O} saving=${d} />`:n==="grid"&&(R=u`<${Yt} group="grid" fixedList
        items=${i.grid} onChange=${function(_){N("grid",_)}}
        listTitle=${l("settings.tab.grid")}
        labelFn=${function(_){return _.id==="to"?l("settings.grid.to"):l("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${$.grid}
        validate=${function(_){return gi(_)}} Detail=${Co}
        onSave=${O} saving=${d} />`):R=u`<${W}><p class="placeholder-text">${l("settings.loading")}</p><//>`,u`
      <div>
        <${Me} title=${l("page.settings")} />
        <div class="pill-bar">${B}</div>
        ${R}
      </div>`}var Ro=["https://gplug-ch.github.io/gplug-cdn/v1.0.5/lang.json"];function Ao(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(s,f,c,d){for(var h=[],v=0;v<=90;v++){var p=e-900+v*10,g=v>=c&&v<=d?null:Math.max(0,s+f*Math.sin(v/9)+f*.4*Math.sin(v/2.3));h.push({t:p,y:g})}return h}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],o=0;o<23;o++)a.push({id:o,ts:k.time(e-o*900,"15m"),imp:k.num(Math.round(Math.random()*0+o*7)/100,2),chf:k.chf((o%3===0?-1:1)*o*.19,!0)});return u`
    <div>
      <${Me} title=${l("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${u`<${Y} onClick=${function(){le("Toast!",{type:"info"})}}>Toast<//>`} />

      <${W} group="grid" title="LineChart" tooltip=${l("tooltip.consumption")}
        value=${k.w(1396)} valueColor="var(--c-consumption)">
        <${at} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${k.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${W} group="vzev" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${k.chf(12.4,!0)} valueColor="var(--c-vzev)">
        <${hn} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(s){return k.chf(s,!0)}}
          points=${r.map(function(s){return{t:s.t,y:s.y,color:s.y<0?"var(--c-import)":"var(--c-vzev)"}})} />
      <//>

      <${W} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${$t} state="active" />
          <${$t} state="waiting" />
          <${$t} state="inactive" />
        </div>
        <div class="demo-row">
          <${Y}>Speichern<//>
          <${Y} secondary>Abbrechen<//>
          <${Y} danger>Löschen<//>
          <${Y} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${_t} label="Anzeige-Name" value="Familie Huber" />
          <${Lt} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${W} group="production" title="DataTable">
        <${Zi} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(s){var f=s.chf.indexOf("−")===0;return u`<span class=${f?"val-neg":"val-pos"}>${s.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function Wo(){return[{path:"/",component:Xa},{path:"/verlauf",component:fl},{path:"/zaehler",component:Dl},{path:"/vzev/mitglied/:id?",component:Jl},{path:"/vzev/abrechnung",component:co},{path:"/vzev",component:Zl},{path:"/einstellungen/:tab?",component:Fo},{path:"/demo",component:Ao}]}function br(){var e=document.getElementById("app"),t=Ro;Ri.load(t).catch(function(){}).then(function(){Ii(u`<${wa} routes=${Wo()} />`,e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",br):br();
