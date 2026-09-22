(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var fn,te,Ni,Fe,Cr,Ti,Pi,yn,jt,_t,Oi,Gn,En,Nn,rn={},an=[],Ga=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,dn=Array.isArray;function Te(e,t){for(var n in t)e[n]=t[n];return e}function Zn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ai(e,t,n){var r,i,a,s={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:s[a]=t[a];if(arguments.length>2&&(s.children=arguments.length>3?fn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)s[a]===void 0&&(s[a]=e.defaultProps[a]);return Ht(e,s,r,i,null)}function Ht(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Ni,__i:-1,__u:0};return i==null&&te.vnode!=null&&te.vnode(a),a}function Mt(e){return e.children}function Kt(e,t){this.props=e,this.context=t}function st(e,t){if(t==null)return e.__?st(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?st(e):null}function Za(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Te({},t);a.__v=t.__v+1,te.vnode&&te.vnode(a),Xn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??st(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Wi(r,a,i),t.__e=t.__=null,a.__e!=n&&Ri(a)}}function Ri(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Ri(e)}function Sr(e){(!e.__d&&(e.__d=!0)&&Fe.push(e)&&!ln.__r++||Cr!=te.debounceRendering)&&((Cr=te.debounceRendering)||Ti)(ln)}function ln(){try{for(var e,t=1;Fe.length;)Fe.length>t&&Fe.sort(Pi),e=Fe.shift(),t=Fe.length,Za(e)}finally{Fe.length=ln.__r=0}}function Li(e,t,n,r,i,a,s,o,c,f,v){var h,d,p,g,$,m,y,b=r&&r.__k||an,M=t.length;for(c=Xa(n,t,b,c,M),h=0;h<M;h++)(p=n.__k[h])!=null&&(d=p.__i!=-1&&b[p.__i]||rn,p.__i=h,m=Xn(e,p,d,i,a,s,o,c,f,v),g=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&Qn(d.ref,null,p),v.push(p.ref,p.__c||g,p)),$==null&&g!=null&&($=g),(y=!!(4&p.__u))||d.__k===p.__k?(c=Di(p,c,e,y),y&&d.__e&&(d.__e=null)):typeof p.type=="function"&&m!==void 0?c=m:g&&(c=g.nextSibling),p.__u&=-7);return n.__e=$,c}function Xa(e,t,n,r,i){var a,s,o,c,f,v=n.length,h=v,d=0;for(e.__k=new Array(i),a=0;a<i;a++)(s=t[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[a]=Ht(null,s,null,null,null):dn(s)?s=e.__k[a]=Ht(Mt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[a]=Ht(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[a]=s,c=a+d,s.__=e,s.__b=e.__b+1,o=null,(f=s.__i=Qa(s,n,c,h))!=-1&&(h--,(o=n[f])&&(o.__u|=2)),o==null||o.__v==null?(f==-1&&(i>v?d--:i<v&&d++),typeof s.type!="function"&&(s.__u|=4)):f!=c&&(f==c-1?d--:f==c+1?d++:(f>c?d--:d++,s.__u|=4))):e.__k[a]=null;if(h)for(a=0;a<v;a++)(o=n[a])!=null&&(2&o.__u)==0&&(o.__e==r&&(r=st(o)),Bi(o,o));return r}function Di(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Di(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=st(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Qa(e,t,n,r){var i,a,s,o=e.key,c=e.type,f=t[n],v=f!=null&&(2&f.__u)==0;if(f===null&&o==null||v&&o==f.key&&c==f.type)return n;if(r>(v?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((f=t[s=i>=0?i--:a++])!=null&&(2&f.__u)==0&&o==f.key&&c==f.type)return s}return-1}function Mr(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ga.test(t)?n:n+"px"}function At(e,t,n,r,i){var a,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Mr(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Mr(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Oi,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[_t]=r[_t]:(n[_t]=Gn,e.addEventListener(t,a?Nn:En,a)):e.removeEventListener(t,a?Nn:En,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ir(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[jt]==null)t[jt]=Gn++;else if(t[jt]<n[_t])return;return n(te.event?te.event(t):t)}}}function Xn(e,t,n,r,i,a,s,o,c,f){var v,h,d,p,g,$,m,y,b,M,I,C,k,U,z,T,x=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[o=t.__e=n.__e]),(v=te.__b)&&v(t);e:if(typeof x=="function"){h=s.length;try{if(b=t.props,M=x.prototype&&x.prototype.render,I=(v=x.contextType)&&r[v.__c],C=v?I?I.props.value:v.__:r,n.__c?y=(d=t.__c=n.__c).__=d.__E:(M?t.__c=d=new x(b,C):(t.__c=d=new Kt(b,C),d.constructor=x,d.render=el),I&&I.sub(d),d.state||(d.state={}),d.__n=r,p=d.__d=!0,d.__h=[],d._sb=[]),M&&d.__s==null&&(d.__s=d.state),M&&x.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Te({},d.__s)),Te(d.__s,x.getDerivedStateFromProps(b,d.__s))),g=d.props,$=d.state,d.__v=t,p)M&&x.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),M&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(M&&x.getDerivedStateFromProps==null&&b!==g&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,C),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,C)===!1){t.__v!=n.__v&&(d.props=b,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(E){E&&(E.__=t)}),an.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,C),M&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(g,$,m)})}if(d.context=C,d.props=b,d.__P=e,d.__e=!1,k=te.__r,U=0,M)d.state=d.__s,d.__d=!1,k&&k(t),v=d.render(d.props,d.state,d.context),an.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,k&&k(t),v=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++U<25);d.state=d.__s,d.getChildContext!=null&&(r=Te(Te({},r),d.getChildContext())),M&&!p&&d.getSnapshotBeforeUpdate!=null&&(m=d.getSnapshotBeforeUpdate(g,$)),z=v!=null&&v.type===Mt&&v.key==null?Ui(v.props.children):v,o=Li(e,dn(z)?z:[z],t,n,r,i,a,s,o,c,f),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),y&&(d.__E=d.__=null)}catch(E){if(s.length=h,t.__v=null,c||a!=null){if(E.then){for(t.__u|=c?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;a!=null&&(a[a.indexOf(o)]=null),t.__e=o}else if(a!=null)for(T=a.length;T--;)Zn(a[T])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),E.then||Fi(t),te.__e(E,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):o=t.__e=Ja(n.__e,t,n,r,i,a,s,c,f);return(v=te.diffed)&&v(t),128&t.__u?void 0:o}function Fi(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Fi))}function Wi(e,t,n){for(var r=0;r<n.length;r++)Qn(n[r],n[++r],n[++r]);te.__c&&te.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){te.__e(a,i.__v)}})}function Ui(e){return typeof e!="object"||e==null||e.__b>0?e:dn(e)?e.map(Ui):e.constructor!==void 0?null:Te({},e)}function Ja(e,t,n,r,i,a,s,o,c){var f,v,h,d,p,g,$,m=n.props||rn,y=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((p=a[f])&&"setAttribute"in p==!!b&&(b?p.localName==b:p.nodeType==3)){e=p,a[f]=null;break}}if(e==null){if(b==null)return document.createTextNode(y);e=document.createElementNS(i,b,y.is&&y),o&&(te.__m&&te.__m(t,a),o=!1),a=null}if(b==null)m===y||o&&e.data==y||(e.data=y);else{if(a=b=="textarea"&&y.defaultValue!=null?null:a&&fn.call(e.childNodes),!o&&a!=null)for(m={},f=0;f<e.attributes.length;f++)m[(p=e.attributes[f]).name]=p.value;for(f in m)p=m[f],f=="dangerouslySetInnerHTML"?h=p:f=="children"||f in y||f=="value"&&"defaultValue"in y||f=="checked"&&"defaultChecked"in y||At(e,f,null,p,i);for(f in y)p=y[f],f=="children"?d=p:f=="dangerouslySetInnerHTML"?v=p:f=="value"?g=p:f=="checked"?$=p:o&&typeof p!="function"||m[f]===p||At(e,f,p,m[f],i);if(v)o||h&&(v.__html==h.__html||v.__html==e.innerHTML)||(e.innerHTML=v.__html),t.__k=[];else if(h&&(e.innerHTML=""),Li(t.type=="template"?e.content:e,dn(d)?d:[d],t,n,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,s,a?a[0]:n.__k&&st(n,0),o,c),a!=null)for(f=a.length;f--;)Zn(a[f]);o&&b!="textarea"||(f="value",b=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[f]||b=="progress"&&!g||b=="option"&&g!=m[f])&&At(e,f,g,m[f],i),f="checked",$!=null&&$!=e[f]&&At(e,f,$,m[f],i))}return e}function Qn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){te.__e(i,n)}}function Bi(e,t,n){var r,i;if(te.unmount&&te.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Qn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){te.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Bi(r[i],t,n||typeof e.type!="function");n||Zn(e.__e),e.__c=e.__=e.__e=void 0}function el(e,t,n){return this.constructor(e,n)}function tl(e,t,n){var r,i,a,s;t==document&&(t=document.documentElement),te.__&&te.__(e,t),i=(r=!1)?null:t.__k,a=[],s=[],Xn(t,e=t.__k=Ai(Mt,null,[e]),i||rn,rn,t.namespaceURI,i?null:t.firstChild?fn.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,s),Wi(a,e,s),e.props.children=null}fn=an.slice,te={__e:function(e,t,n,r){for(var i,a,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(o){e=o}throw e}},Ni=0,Kt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Te({},this.state),typeof e=="function"&&(e=e(Te({},n),this.props)),e&&Te(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Sr(this))},Kt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Sr(this))},Kt.prototype.render=Mt,Fe=[],Ti=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pi=function(e,t){return e.__v.__b-t.__v.__b},ln.__r=0,yn=Math.random().toString(8),jt="__d"+yn,_t="__a"+yn,Oi=/(PointerCapture)$|Capture$/i,Gn=0,En=Ir(!1),Nn=Ir(!0);var kt,se,wn,Er,sn=0,ji=[],ue=te,Nr=ue.__b,Tr=ue.__r,Pr=ue.diffed,Or=ue.__c,Ar=ue.unmount,Rr=ue.__;function Jn(e,t){ue.__h&&ue.__h(se,e,sn||t),sn=0;var n=se.__H||(se.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function S(e){return sn=1,nl(Ki,e)}function nl(e,t,n){var r=Jn(kt++,2);if(r.t=e,!r.__c&&(r.__=[Ki(void 0,t),function(o){var c=r.__N?r.__N[0]:r.__[0],f=r.t(c,o);c!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=se,!se.__f)){var i=function(o,c,f){if(!r.__c.__H)return!0;var v=!1,h=r.__c.props!==o;if(r.__c.__H.__.some(function(p){if(p.__N){v=!0;var g=p.__[0];p.__=p.__N,p.__N=void 0,g!==p.__[0]&&(h=!0)}}),a){var d=a.call(this,o,c,f);return v?d||h:d}return!v||h};se.__f=!0;var a=se.shouldComponentUpdate,s=se.componentWillUpdate;se.componentWillUpdate=function(o,c,f){if(this.__e){var v=a;a=void 0,i(o,c,f),a=v}s&&s.call(this,o,c,f)},se.shouldComponentUpdate=i}return r.__N||r.__}function X(e,t){var n=Jn(kt++,3);!ue.__s&&Hi(n.__H,t)&&(n.__=e,n.u=t,se.__H.__h.push(n))}function Ee(e){return sn=5,Ge(function(){return{current:e}},[])}function Ge(e,t){var n=Jn(kt++,7);return Hi(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function rl(){for(var e;e=ji.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Vt),t.__h.some(Tn),t.__h=[]}catch(n){t.__h=[],ue.__e(n,e.__v)}}}ue.__b=function(e){se=null,Nr&&Nr(e)},ue.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Rr&&Rr(e,t)},ue.__r=function(e){Tr&&Tr(e),kt=0;var t=(se=e.__c).__H;t&&(wn===se?(t.__h=[],se.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Vt),t.__h.some(Tn),t.__h=[],kt=0)),wn=se},ue.diffed=function(e){Pr&&Pr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ji.push(t)!==1&&Er===ue.requestAnimationFrame||((Er=ue.requestAnimationFrame)||il)(rl)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),wn=se=null},ue.__c=function(e,t){t.some(function(n){try{n.__h.some(Vt),n.__h=n.__h.filter(function(r){return!r.__||Tn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],ue.__e(r,n.__v)}}),Or&&Or(e,t)},ue.unmount=function(e){Ar&&Ar(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Vt(r)}catch(i){t=i}}),n.__H=void 0,t&&ue.__e(t,n.__v))};var Lr=typeof requestAnimationFrame=="function";function il(e){var t,n=function(){clearTimeout(r),Lr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Lr&&(t=requestAnimationFrame(n))}function Vt(e){var t=se,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),se=t}function Tn(e){var t=se;e.__c=e.__(),se=t}function Hi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ki(e,t){return typeof t=="function"?t(e):t}var Vi=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var s=t[a++],o=t[a]?(t[0]|=s?1:2,n[t[a++]]):t[++a];s===3?r[0]=o:s===4?r[1]=Object.assign(r[1]||{},o):s===5?(r[1]=r[1]||{})[t[++a]]=o:s===6?r[1][t[++a]]+=o+"":s?(i=e.apply(o,Vi(e,o,n,["",null])),r.push(i),o[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(o)}return r},Dr=new Map;function al(e){var t=Dr.get(this);return t||(t=new Map,Dr.set(this,t)),(t=Vi(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,s="",o="",c=[0],f=function(d){a===1&&(d||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,s):a===3&&(d||s)?(c.push(3,d,s),a=2):a===2&&s==="..."&&d?c.push(4,d,0):a===2&&s&&!d?c.push(5,0,!0,s):a>=5&&((s||!d&&a===5)&&(c.push(a,0,s,i),a=6),d&&(c.push(a,d,0,i),a=6)),s=""},v=0;v<n.length;v++){v&&(a===1&&f(),f(v));for(var h=0;h<n[v].length;h++)r=n[v][h],a===1?r==="<"?(f(),c=[c],a=3):s+=r:a===4?s==="--"&&r===">"?(a=1,s=""):s=r+s[0]:o?r===o?o="":s+=r:r==='"'||r==="'"?o=r:r===">"?(f(),a=1):a&&(r==="="?(a=5,i=s,s=""):r==="/"&&(a<5||n[v][h+1]===">")?(f(),a===3&&(c=c[0]),a=c,(c=c[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(f(),a=2):s+=r),a===3&&s==="!--"&&(a=4,c=c[0])}return f(),c})(e)),t),arguments,[])).length>1?t:t[0]}const u=al.bind(Ai);var bt={},qi="de",Fr={};function l(e,t){var n=bt[e];return n===void 0?(Fr[e]||(Fr[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function ll(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return bt=i||{},qi=bt["meta.lang"]||document.documentElement.lang||"de",bt}).catch(function(){return n()})}return n()}const sl={t:l,load:ll,getLang:function(){return qi},getDict:function(){return bt}};var xt=" ",Yi="−";function ot(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?Yi:"")+r}function ol(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function ul(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?ol(ot(e/1e3,1))+xt+"kW":ot(Math.round(e),0)+xt+"W"}function cl(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?ot(e/1e3,2)+xt+"kWh":ot(Math.round(e),0)+xt+"Wh"}function fl(e,t){if(e==null||isNaN(e))return"–";var n=ot(e,2);return t&&e>0&&(n="+"+n),n+xt+"CHF"}function qe(e){return(e<10?"0":"")+e}function dl(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=qe(n.getDate())+"."+qe(n.getMonth()+1)+"."+n.getFullYear(),i=qe(n.getHours())+":"+qe(n.getMinutes());switch(t){case"1d":return r;case"dm":return qe(n.getDate())+"."+qe(n.getMonth()+1)+".";case"1mo":return qe(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const w={num:ot,w:ul,wh:cl,chf:fl,time:dl,MINUS:Yi};function Ae(e){return u`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?u`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?u`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function F(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:""),n=!!e.collapsible,r=e.collapseKey?"ui.card."+e.collapseKey:null,[i,a]=S(function(){if(!n)return!0;if(r)try{var c=window.localStorage.getItem(r);if(c==="0")return!1;if(c==="1")return!0}catch{}return e.defaultOpen!==!1});function s(){var c=!i;if(a(c),r)try{window.localStorage.setItem(r,c?"1":"0")}catch{}}var o=!n||i;return u`
      <section class=${t+(n&&!i?" is-collapsed":"")}>
        ${e.title||e.value||e.badge||e.tooltip?u`
          <div class=${"card-head"+(o?"":" card-head-collapsed")}>
            <div class="card-head-left">
              ${n?u`
                <button type="button" class="card-toggle" aria-expanded=${i?"true":"false"}
                  aria-label=${l(i?"common.collapse":"common.expand")}
                  onClick=${s}>
                  <svg class="card-toggle-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                <//>`:null}
              ${e.title?u`<h2 class="card-title">${e.title}</h2>`:null}
              ${e.tooltip?u`<${he} text=${e.tooltip} />`:null}
              ${e.subtitle?u`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?u`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${o?e.children:null}
      </section>`}function qt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return u`<span class=${r}>${l(n)}</span>`}function Z(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return u`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function vn(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function Yt(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function he(e){var t=S(!1),n=t[0],r=t[1],i=S(null),a=i[0],s=i[1],o=Ee(null),c=Ee(null);return X(function(){if(!n)return;function f(b){b.key==="Escape"&&r(!1)}function v(b){c.current&&!c.current.contains(b.target)&&r(!1)}document.addEventListener("keydown",f),document.addEventListener("click",v);var h=o.current,d=c.current;if(h&&d){var p=d.getBoundingClientRect(),g=h.getBoundingClientRect(),$=p.left+p.width/2,m=Math.max(8,Math.min($-g.width/2,window.innerWidth-8-g.width)),y=p.top-g.height-8;y<8&&(y=p.bottom+8),s({left:m,top:y})}return function(){document.removeEventListener("keydown",f),document.removeEventListener("click",v),s(null)}},[n]),u`
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
          <span class="tooltip-bubble" role="tooltip" ref=${o}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var Gt=[],vl=0;function ee(e,t){t=t||{};var n={id:++vl,message:e,type:t.type||"info",ttl:t.ttl||5e3};Gt.forEach(function(r){r(n)})}function pl(){var e=S([]),t=e[0],n=e[1];return X(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(s){return s.id!==i.id})})},i.ttl)}return Gt.push(r),function(){var i=Gt.indexOf(r);i>=0&&Gt.splice(i,1)}},[]),u`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return u`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${l("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var G={top:22,right:14,bottom:24,left:46};function Gi(e){var t=S(0),n=t[0],r=t[1];return X(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function Zi(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var s=[],o=Math.ceil(e/i)*i,c=o;c<=t+i*1e-9;c+=i)s.push(Math.abs(c)<i*1e-9?0:c);return s}function er(e){return Math.abs(e)>=1e3?w.num(e/1e3,1).replace(/\.0$/,"")+"k":w.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function hl(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function gl(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var s=0;s<r;s++)a.push(s);else for(var o=0;o<i;o++)a.push(Math.round(o*(r-1)/(i-1)));var c=[],f=null,v=-1;return a.forEach(function(h){if(h!==v){v=h;var d=n(e[h].t);d!==f&&(f=d,c.push(h))}}),c}function ml(e){var t=0,n=0;return(e&&e.segments||[]).forEach(function(r){var i=r.value||0;i>0?t+=i:n+=i}),[t,n]}function Xi(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function Qi(e){return u`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return u`
            <g key=${"y"+t}>
              <line x1=${G.left} x2=${e.width-G.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${G.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${er(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-G.right-34?null:u`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${G.left} x2=${G.left} y1=${G.top-6} y2=${e.height-G.bottom}
          class="ch-axis" />
        <text x=${G.left-40} y=${G.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-G.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function Wr(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function $l(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function _l(e,t,n,r){var i=$l(e,t),a=[];if(i.length<2)return a;var s=[];function o(){if(s.length>=2){var g="M"+n(s[0].t).toFixed(1)+" "+r(s[0].top).toFixed(1),$;for($=1;$<s.length;$++)g+="L"+n(s[$].t).toFixed(1)+" "+r(s[$].top).toFixed(1);for($=s.length-1;$>=0;$--)g+="L"+n(s[$].t).toFixed(1)+" "+r(s[$].bottom).toFixed(1);a.push(g+"Z")}s=[]}for(var c=0;c<i.length;c++){var f=i[c],v=f.top-f.bottom;if(v>0?s.push(f):o(),c<i.length-1){var h=i[c+1],d=h.top-h.bottom;if(v>0!=d>0&&v!==d){var p=v/(v-d);s.push({t:f.t+(h.t-f.t)*p,top:f.top+(h.top-f.top)*p,bottom:f.bottom+(h.bottom-f.bottom)*p}),v>0&&o()}}}return o(),a}function Ji(e,t,n,r){var i=n>t-150;return u`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,s){return u`
            <div key=${s} class="ch-hover-line">
              ${a.color?u`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function It(e){var t=Ee(null),n=Gi(t),r=S(null),i=r[0],a=r[1],s=e.height||180,o=e.series||[],c=e.timeWindow;if(!c){var f=1/0,v=-1/0;o.forEach(function(x){x.points.forEach(function(E){E.t<f&&(f=E.t),E.t>v&&(v=E.t)})}),c=f===1/0?[0,1]:[f,v]}var h=c[0],d=c[1]>c[0]?c[1]:c[0]+1,p=[];o.forEach(function(x){x.points.forEach(function(E){p.push(E.y)})});var g=Xi(p,!1),$=Math.max(10,n-G.left-G.right),m=s-G.top-G.bottom;function y(x){return G.left+(x-h)/(d-h)*$}function b(x){return G.top+(1-(x-g[0])/(g[1]-g[0]))*m}var M=Zi(g[0],g[1],4),I=e.xTickFormat||function(x){return w.time(x,"hm")},C=hl(h,d,Math.max(2,Math.min(5,Math.floor($/90)))).map(function(x){return{x:y(x),label:I(x)}});function k(x){var E=[],P=[];x.forEach(function(j){j.y===null||j.y===void 0?(P.length&&E.push(P),P=[]):P.push(j)}),P.length&&E.push(P);var B=b(Math.max(0,g[0]));return E.map(function(j){var _=j.map(function(D,L){return(L===0?"M":"L")+y(D.t).toFixed(1)+" "+b(D.y).toFixed(1)}).join(""),N=_+"L"+y(j[j.length-1].t).toFixed(1)+" "+B.toFixed(1)+"L"+y(j[0].t).toFixed(1)+" "+B.toFixed(1)+"Z";return{line:_,area:N}})}function U(x){if(t.current){var E=t.current.getBoundingClientRect(),P=x.clientX-E.left;if(P<G.left||P>n-G.right){a(null);return}var B=h+(P-G.left)/$*(d-h);a(B)}}var z=null,T=[];return i!==null&&(T.push({text:I(i)}),o.forEach(function(x){var E=Wr(x.points,i);E>=0&&(z===null&&(z=y(x.points[E].t)),T.push({color:x.color,text:(x.label?x.label+": ":"")+(e.yFormat||er)(x.points[E].y)+(e.yFormat?"":" "+e.yUnit)}))}),z===null&&(z=y(i))),u`
      <div class="chart" ref=${t}
        onPointerMove=${U}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${s} role="img" aria-label=${e.label||""}>
            <${Qi} width=${n} height=${s} sy=${b}
              yTicks=${M} xTicks=${C}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(x,E){return _l(x.top,x.bottom,y,b).map(function(P,B){return u`<path key=${E+"-"+B} class="ch-band" d=${P} fill=${x.color} stroke="none"/>`})})}
            ${o.map(function(x,E){return k(x.points).map(function(P,B){return u`
                  <g key=${E+"-"+B}>
                    ${x.fill?u`<path class="ch-area" d=${P.area} fill=${x.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${P.line} fill="none" stroke=${x.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${z!==null?u`
              <line x1=${z} x2=${z} y1=${G.top-4} y2=${s-G.bottom} class="ch-crosshair"/>
              ${o.map(function(x,E){var P=Wr(x.points,i);return P>=0?u`
                  <circle key=${E} cx=${y(x.points[P].t)} cy=${b(x.points[P].y)} r="3.5"
                    fill=${x.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${z!==null?Ji(t,n,z,T):null}`:null}
      </div>`}function tr(e){var t=Ee(null),n=Gi(t),r=S(null),i=r[0],a=r[1],s=e.height||180,o=e.points||[];function c(_){if(!_.bars)return[_.y];var N=[];return _.bars.forEach(function(D){ml(D).forEach(function(L){N.push(L)})}),N}var f=o.reduce(function(_,N){return N.bars?Math.max(_,N.bars.length):_},1),v=[];o.forEach(function(_){c(_).forEach(function(N){v.push(N)})});var h=Xi(v,!0),d=Math.max(10,n-G.left-G.right),p=s-G.top-G.bottom;function g(_){return G.top+(1-(_-h[0])/(h[1]-h[0]))*p}var $=o.length,m=$>0?d/$:d;function y(_){return G.left+(_+.5)*m}var b=Math.max(1,Math.min(m-1,m*.72,46)),M=Zi(h[0],h[1],4),I=e.xTickFormat||function(_){return w.time(_,"hm")},C=gl(o,d,I).map(function(_){return{x:y(_),label:I(o[_].t)}}),k=g(0),U=o.length+"|"+(o.length?o[0].t+"-"+o[o.length-1].t:"")+"|"+f+"|"+(e.yUnit||"");function z(_){if(!t.current||!$){a(null);return}var N=t.current.getBoundingClientRect(),D=_.clientX-N.left;if(D<G.left||D>n-G.right){a(null);return}var L=Math.floor((D-G.left)/m);a(L<0?0:L>=$?$-1:L)}var T=e.yFormat||er;function x(_){return T(_)+(e.yFormat?"":" "+(e.yUnit||""))}var E=null,P=[];if(i!==null&&o[i]){var B=o[i];if(E=y(i),P.push({text:I(B.t)}),B.bars)B.bars.forEach(function(_){(_.segments||[]).forEach(function(N){if(N.value){var D=e.signedMagnitude?Math.abs(N.value):N.value;P.push({color:N.color,text:(N.label?N.label+": ":"")+x(D)})}})});else if(B.y!==null&&B.y!==void 0){var j=e.signedMagnitude?Math.abs(B.y):B.y;P.push({color:B.color||e.color,text:(B.label?B.label+": ":"")+x(j)})}}return u`
      <div class="chart" ref=${t}
        onPointerMove=${z}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${s} role="img" aria-label=${e.label||""}>
            <${Qi} width=${n} height=${s} sy=${g}
              yTicks=${M} xTicks=${C}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${U}>
            ${o.map(function(_,N){var D=i===N?"1":"0.85";if(_.bars){var L=y(N)-b/2,fe=b/f;return u`<g key=${N}>${_.bars.map(function(ye,R){var q=L+R*fe+1,J=Math.max(1,fe-2),Q=0,Ke=0;return(ye.segments||[]).map(function(Re,A){var oe=Re.value||0;if(!oe)return null;var le,ie;oe>0?(le=Q,ie=Q+oe,Q=ie):(le=Ke,ie=Ke+oe,Ke=ie);var Ne=Math.min(g(le),g(ie)),Qe=Math.max(1,Math.abs(g(ie)-g(le)));return u`
                      <rect key=${R+"-"+A}
                        class=${"ch-bar "+(oe>0?"ch-bar-up":"ch-bar-down")}
                        x=${q.toFixed(1)} y=${Ne.toFixed(1)}
                        width=${J.toFixed(1)} height=${Qe.toFixed(1)} rx="1.5"
                        fill=${Re.color} opacity=${D}/>`})})}</g>`}if(_.y===null||_.y===void 0)return null;var xe=y(N)-b/2,Y=g(_.y),ae=Math.min(Y,k),de=Math.max(1,Math.abs(Y-k));return u`
                <rect key=${N} class=${"ch-bar "+(_.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${xe.toFixed(1)} y=${ae.toFixed(1)}
                  width=${b.toFixed(1)} height=${de.toFixed(1)} rx="2"
                  fill=${_.color||e.color||"var(--c-consumption)"}
                  opacity=${D}/>`})}
            </g>
            <line x1=${G.left} x2=${n-G.right} y1=${k} y2=${k} class="ch-zero-strong"/>
          </svg>
          ${E!==null?Ji(t,n,E,P):null}`:null}
      </div>`}var bl=[10,25,50];function yl(e){var t=S(0),n=t[0],r=t[1],i=S(e.pageSize||10),a=i[0],s=i[1],o=e.rows||[],c=o.length,f=Math.max(1,Math.ceil(c/a)),v=Math.min(n,f-1),h=v*a,d=Math.min(h+a,c),p=o.slice(h,d);return u`
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
              <tr><td class="table-empty" colspan=${e.columns.length}>${l("common.nodata")}</td></tr>`:p.map(function(g,$){return u`
                  <tr key=${g.id!==void 0?g.id:h+$}>
                    ${e.columns.map(function(m){return u`
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
                onChange=${function(g){s(+g.target.value),r(0)}}>
                ${bl.map(function(g){return u`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${l("table.pageinfo",{from:c===0?0:h+1,to:d,total:c})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${l("table.prev")}
              disabled=${v===0} onClick=${function(){r(v-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${l("table.next")}
              disabled=${v>=f-1} onClick=${function(){r(v+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function ea(e,t){var n=e.split("/").filter(function(f){return f!==""}),r=t.split("/").filter(function(f){return f!==""}),i={},a;for(a=0;a<n.length;a++){var s=n[a];if(s.charAt(0)===":"){var o=s.slice(-1)==="?",c=s.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(o)continue;return null}i[c]=decodeURIComponent(r[a])}else if(s!==r[a])return null}return r.length>n.length?null:i}function Pn(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=ea(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function wl(e){var t=S(function(){return Pn(e)}),n=t[1];return X(function(){function r(){n(Pn(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const Ue={match:ea,parse:Pn,useRoute:wl,navigate:function(e){window.location.hash="#"+e}};var kl=["imp_wh","exp_wh","pv_wh","vzev_in_wh","vzev_out_wh"],xl=["grid_ht_wh","grid_nt_wh"],zl=["bat_chg_wh","bat_dis_wh"];function ge(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function nr(e,t){t=t||{};var n=We(t.grid_import_chf_kwh,.26),r=We(t.grid_feedin_chf_kwh,.18),i=We(t.vzev_import_chf_kwh,.22),a=We(t.vzev_export_chf_kwh,.22),s=e.imp_wh,o=e.exp_wh,c=e.pv_wh,f=e.vzev_in_wh||0,v=e.vzev_out_wh||0,h={};for(var d in e)h[d]=e[d];if(h.cost_import_chf=s==null?null:ge((s-f)/1e3*n),h.revenue_feedin_chf=o==null?null:ge((o-v)/1e3*r),h.cost_vzev_chf=ge(f/1e3*i),h.revenue_vzev_chf=ge(v/1e3*a),h.saving_selfuse_chf=c==null||o===null||o===void 0?null:ge(Math.max(0,(c-o)/1e3*(n-r))),pn(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var p=We(t.grid_import_ht_chf_kwh,n),g=We(t.grid_import_nt_chf_kwh,n);h.cost_import_ht_chf=ge(e.grid_ht_wh/1e3*p),h.cost_import_nt_chf=ge(e.grid_nt_wh/1e3*g),h.cost_import_chf=ge(h.cost_import_ht_chf+h.cost_import_nt_chf)}return h}function We(e,t){return e==null||isNaN(e)?t:Number(e)}var Rt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function ta(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return ta(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var s=Rt[i.slice(0,a)],o=Rt[i.slice(a+1)];if(s!==void 0&&o!==void 0){if(s<=o){if(t>=s&&t<=o)return!0}else if(t>=s||t<=o)return!0}}else if(Rt[i]!==void 0&&Rt[i]===t)return!0}return!1}function pn(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function Cl(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,s=0;s<a.length;s++){var o=a[s]||{};if(ta(o.days,r)&&i>=We(o.from,0)&&i<We(o.to,0))return!0}return!1}function na(e,t){if(!pn(t))return e;var n=e.imp_wh,r=e.vzev_in_wh||0;if(n==null)return e;var i=n-r;i<0&&(i=0);var a={};for(var s in e)a[s]=e[s];return Cl(e.ts,t)?(a.grid_ht_wh=i,a.grid_nt_wh=0):(a.grid_ht_wh=0,a.grid_nt_wh=i),a}function Sl(e,t){var n={ts:e},r=!1;return kl.forEach(function(i){var a=0,s=!1,o=!1;t.forEach(function(c){var f=c[i];f==null?o=!0:(a+=f,s=!0)}),n[i]=s?a:null,s&&o&&(r=!0)}),xl.concat(zl).forEach(function(i){var a=0,s=!1;t.forEach(function(o){var c=o[i];c!=null&&(a+=c,s=!0)}),s&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function Ml(e){return e-e%3600}function Il(e){var t=e-On(e,86400),n=On(Math.floor(t/86400)+3,7);return t-n*86400}function On(e,t){return(e%t+t)%t}function rr(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function El(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function ct(e,t,n){var r={},i=[];(e||[]).forEach(function(s){var o=t(s.ts);r[o]||(r[o]=[],i.push(o)),r[o].push(s)});var a=i.map(function(s){return nr(Sl(Number(s),r[s]),n)});return a.sort(function(s,o){return s.ts-o.ts}),a}function Ur(e,t,n,r){if(e=e||[],pn(r)&&t==="15m"&&(e=e.map(function(a){return na(a,r)})),t===n){var i=e.map(function(a){return nr(a,r)});return i.sort(function(a,s){return a.ts-s.ts}),i}switch(n){case"1h":return ct(e,Ml,r);case"1w":return ct(e,Il,r);case"1q":return ct(e,El,r);case"1mo":return ct(e,rr,r);case"1d":default:return ct(e,function(a){return a-On(a,86400)},r)}}function An(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function Nl(e){if(e=(e||[]).filter(function(o){return o!=null&&!isNaN(o)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=An(e.slice(0,t)),r=An(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",s=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:s}}function Tl(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function Pl(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function Ol(e){return e-e%86400}function on(e,t){if(!Array.isArray(e))return null;for(var n=Math.floor(e.length/3),r=null,i=0;i<n;i++)e[i*3]===t&&(r=[e[i*3+1],e[i*3+2]]);return r}function ra(e,t){var n={},r=[],i=0;t=t||{};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=t[a];(s==null||s<0)&&(s=0),t[a]=s,r.push(a),i+=s,n[a]=0}if(r.length===0)return n;r.sort(),e<0&&(e=0);var o=e<i?e:i;if(o<=0||i<=0)return n;var c={},f=0;r.forEach(function(p){var g=o*t[p],$=Math.floor(g/i);c[p]=g-$*i,n[p]=$,f+=$});for(var v=o-f;v>0;){var h=null,d=-1;if(r.forEach(function(p){c[p]>d&&(d=c[p],h=p)}),h===null)break;n[h]+=1,c[h]=-1,v-=1}return n}function ir(e){e=e||{};var t=e.data||{},n=e.producer_id,r={},i=[];for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a))for(var s=t[a],o=Math.floor((s?s.length:0)/3),c=0;c<o;c++){var f=s[c*3];r[f]||(r[f]=!0,i.push(f))}return i.sort(function(v,h){return v-h}),i.map(function(v){var h={},d=0;for(var p in t)if(Object.prototype.hasOwnProperty.call(t,p)){var g=on(t[p],v);g!==null&&(p===n?d=g[1]:h[p]=g[0])}return{ts:v,members:ra(d,h)}})}function Al(e){var t=e&&e.self_id,n=e&&e.producer_id,r={};return t&&ir(e).forEach(function(i){var a=i.members||{},s=0,o=0;if(t===n)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o+=a[c]);else s=a[t]||0;r[i.ts]={vzev_in_wh:s,vzev_out_wh:o}}),r}function ia(e,t){var n=Al(t);return(e||[]).map(function(r){var i=n[r.ts],a={};for(var s in r)a[s]=r[s];return a.vzev_in_wh=i?i.vzev_in_wh:0,a.vzev_out_wh=i?i.vzev_out_wh:0,a})}function Br(e,t){var n={},r=[];return e.forEach(function(i){var a=t(i.ts),s=n[a];s||(s={},n[a]=s,r.push(a));var o=i.members||{};for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(s[c]=(s[c]||0)+o[c])}),r.sort(function(i,a){return i-a}),r.map(function(i){return{ts:i,members:n[i]}})}function jr(e,t,n){(n==null||n<1)&&(n=96);var r=ir(e),i;t==="1d"?i=Br(r,Ol):t==="1mo"?i=Br(r,rr):i=r;var a=i.length>n?i.length-n:0;return i.slice(a)}function aa(e){if(typeof e!="string"||e.length!==7||e[4]!=="-"||e[5]!=="Q")return null;var t=parseInt(e.slice(0,4),10),n=parseInt(e[6],10);if(isNaN(t)||isNaN(n)||n<1||n>4)return null;var r=(n-1)*3,i=Math.floor(Date.UTC(t,r,1)/1e3),a=Math.floor(Date.UTC(t,r+3,1)/1e3);return[i,a]}function Rl(e,t,n,r,i){n=n||[],r=r||{};var a={};n.forEach(function(z){z&&z.id!==void 0&&(a[z.id]=z)});var s=lr(r),o={};n.forEach(function(z){z&&z.id!==void 0&&(o[z.id]=_e(z.entry_ts,0))});var c={},f={},v={},h={},d={},p=0;(t||[]).forEach(function(z){var T=rr(z.ts),x=s&&Fl(z.ts,r)==="ht",E=z.members||{};for(var P in E)if(Object.prototype.hasOwnProperty.call(E,P)&&!(o[P]&&z.ts<o[P])){var B=E[P]||0;c[P]=(c[P]||0)+B,x?f[P]=(f[P]||0)+B:v[P]=(v[P]||0)+B;var j=h[P];j||(j={},h[P]=j),j[T]=(j[T]||0)+B,d[T]=(d[T]||0)+B,p+=B}});var g=_e(r.vzev_export_chf_kwh,0),$=_e(r.vzev_import_chf_kwh,0),m=[];for(var y in c)if(Object.prototype.hasOwnProperty.call(c,y)){var b=c[y],M=a[y],I={id:y,name:M&&M.name!==void 0?M.name:y,wh:b,chf:ge(b/1e3*$)};M&&(M.location!==void 0&&(I.location=M.location),M.metering_point!==void 0&&(I.metering_point=M.metering_point),M.entry_ts!==void 0&&(I.entry_ts=M.entry_ts)),s&&(I.ht_wh=f[y]||0,I.nt_wh=v[y]||0);var C=_e(r.grid_import_chf_kwh,null);C!==null&&(I.cost_grid_chf=ge(s?I.ht_wh/1e3*_e(r.grid_import_ht_chf_kwh,C)+I.nt_wh/1e3*_e(r.grid_import_nt_chf_kwh,C):b/1e3*C)),I.months=Hr(h[y]),m.push(I)}var k=Hr(d),U={quarter:e,months:k,total:{exp_wh:p,revenue_chf:ge(p/1e3*g),months:k},members:m,note:"15-min Messwerte, Abgleich mit Netzbetreiber pro Quartal"};return i!=null&&(U.quality=i),U}function _e(e,t){return e==null||isNaN(e)?t:Number(e)}function Hr(e){e=e||{};var t=Object.keys(e).map(Number).sort(function(n,r){return n-r});return t.map(function(n){return{ts:n,wh:e[n]}})}function Ll(e){var t=new Date(e*1e3);return(t.getDay()+6)%7}function Dl(e){var t=new Date(e*1e3);return t.getHours()+t.getMinutes()/60}var Lt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function ar(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return ar(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var s=Lt[i.slice(0,a)],o=Lt[i.slice(a+1)];if(s!==void 0&&o!==void 0){if(s<=o){if(t>=s&&t<=o)return!0}else if(t>=s||t<=o)return!0}}else if(Lt[i]!==void 0&&Lt[i]===t)return!0}return!1}function lr(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function Fl(e,t){if(!lr(t))return"flat";for(var n=Ll(e),r=Dl(e),i=t.ht_windows,a=0;a<i.length;a++){var s=i[a]||{},o=_e(s.from,0),c=_e(s.to,0);if(ar(s.days,n)&&r>=o&&r<c)return"ht"}return"nt"}function Wl(e){var t=e.ht_windows;if(!Array.isArray(t)||t.length===0)return 0;for(var n=0,r=0,i=0;i<7;i++)for(var a=0;a<96;a++){var s=a/4;r++;for(var o=0;o<t.length;o++){var c=t[o]||{};if(ar(c.days,i)&&s>=_e(c.from,0)&&s<_e(c.to,0)){n++;break}}}return r===0?0:n/r}function la(e){e=e||{};var t;if(lr(e)){var n=Wl(e),r=_e(e.grid_import_ht_chf_kwh,0),i=_e(e.grid_import_nt_chf_kwh,0);t=r*n+i*(1-n)}else{var a=e.grid_import_chf_kwh;if(a==null||isNaN(a))return null;t=Number(a)}return ge(t*.8)}function Ul(e,t,n){e=e||{};var r=e.data||{},i=e.self_id;t=t||[];var a={},s=[];for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o))for(var c=r[o],f=Math.floor((c?c.length:0)/3),v=0;v<f;v++){var h=c[v*3];n&&(h<n[0]||h>=n[1])||a[h]||(a[h]=!0,s.push(h))}s.sort(function(b,M){return b-M});var d={},p={};t.forEach(function(b){!b||b.id===void 0||(d[b.id]=_e(b.entry_ts,0),p[b.id]={have:0,expected:0,lastTs:null})});var g=0,$=0,m=0,y=0;return s.forEach(function(b){g++;var M=!1;t.forEach(function(I){if(!(!I||I.id===void 0)&&!(b<d[I.id])){var C=p[I.id];C.expected++;var k=on(r[I.id],b);k===null?M=!0:(C.have++,(C.lastTs===null||b>C.lastTs)&&(C.lastTs=b))}}),i!=null&&on(r[i],b)===null&&y++,M?m++:$++}),{expected:g,complete:$,provisional:m,missing:y,perMember:p}}function Kr(e,t){e=e||{};var n=(e.data||{})[t];if(!Array.isArray(n)||n.length<3)return null;for(var r=Math.floor(n.length/3),i=null,a=0;a<r;a++){var s=n[a*3];(i===null||s>i)&&(i=s)}return i}function Bl(e,t,n){t=t||{};var r=t.data||{},i=t.producer_id,a={},s=0,o=0,c=0;for(var f in r)if(Object.prototype.hasOwnProperty.call(r,f)){var v=on(r[f],e);v!==null&&(f===i?o=v[1]:(a[f]=v[0],s+=v[0],f===n&&(c=v[0])))}var h=ra(o,a);return{prodWh:o,totalImpWh:s,memberImpWh:c,sharePct:s>0?ge(c/s*100):0,allocatedWh:h[n]||0}}function sr(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var Zt=[],Xt=!0,Rn=null,Qt=[];function Ln(e){Dn=e||{},or=!0,Qt.forEach(function(t){t(e)})}var Dn=null,or=!1,kn=null;function sa(e){e&&(Rn=Date.now()),e!==Xt&&(Xt=e,Zt.forEach(function(t){t(Xt,Rn)}))}var jl=3,Fn=0;function oa(e){return e instanceof TypeError||e&&e.name==="AbortError"}function ua(){Fn=0,sa(!0)}function ca(e){e&&e.optional||(Fn++,Fn>=jl&&sa(!1))}var Hl=8e3,Kl=2,xn=0,Wn=[];function fa(){for(;xn<Kl&&Wn.length>0;){var e=Wn.shift();xn++,e.run().then(e.resolve,e.reject).finally(function(){xn--,fa()})}}function da(e){return new Promise(function(t,n){Wn.push({run:e,resolve:t,reject:n}),fa()})}function zt(e,t){return t=t||{},da(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},Hl);return fetch(sr()+e,{signal:n.signal}).then(function(i){if(ua(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw oa(i)&&ca(t),i}).finally(function(){clearTimeout(r)})})}function Vl(e){return e.indexOf("/api/vzev/info")===0}function ql(e){return e.indexOf("/api/vzev/")===0&&!Vl(e)}function Yl(){return!or||!!(Dn&&Dn.enabled)}function Gl(e){return e.indexOf("/api/vzev/members")===0?{members:[]}:e.indexOf("/api/vzev/discovered")===0?{discovered:[]}:null}function Zl(){return or?Promise.resolve():(kn||(kn=zt("/api/vzev/info",ze).then(function(e){Ln(e||{})},function(){})),kn)}function ne(e,t){return ql(e)&&!(t&&t.vzevBypass)?Zl().then(function(){return Yl()?zt(e,t):Gl(e)}):zt(e,t)}var ze={optional:!0};function Xl(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function s(){n!==null&&(clearInterval(n),n=null)}function o(){document.hidden?s():a()}return document.addEventListener("visibilitychange",o),a(),function(){r=!0,s(),document.removeEventListener("visibilitychange",o)}}function Vr(e,t){return da(function(){return fetch(sr()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(ua(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw oa(n)&&ca(),n})})}function Dt(e){return e==null||String(e).trim()===""}function nt(e){return zt("/cm?cmnd="+encodeURIComponent(e))}const W={base:sr,get:ne,post:Vr,restartDevice:function(){return nt("Restart 1")},getWifiConfig:function(){return Promise.all([nt("SSId1"),nt("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return Dt(e.ssid1)||t.push("SSId1 "+e.ssid1),Dt(e.password1)||t.push("Password1 "+e.password1),Dt(e.ssid2)||t.push("SSId2 "+e.ssid2),Dt(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):nt("Backlog "+t.join(";"))},wifiScanStart:function(){return nt("WifiScan 1")},wifiScanResult:function(){return nt("WifiScan")},getConfig:function(){return ne("/api/config")},postConfig:function(e){return Vr("/api/config",e)},getConfigRaw:function(){return zt("/api/config",{text:!0})},getPower:function(){return ne("/api/power")},getEnergy:function(e,t,n,r){if(e&&e!=="15m")throw new Error("getEnergy: res must be 15m");var i="/api/energy?res=15m&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),ne(i)},getMeta:function(){return ne("/api/meta")},getMeter:function(){return ne("/api/meter")},getSite:function(){return ne("/site")},getLoads:function(){return ne("/loads")},getProductions:function(){return ne("/productions")},getModbus:function(){return ne("/api/modbus")},setLoadState:function(e,t){return ne("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},getVzevRaw:function(){return ne("/api/vzev/raw",ze)},getVzevMembersList:function(){return ne("/api/vzev/members",ze).then(function(e){return Array.isArray(e)?e:e&&e.members||[]})},getVzevDiscovered:function(){return ne("/api/vzev/discovered",ze).then(function(e){return Array.isArray(e)?e:e&&e.discovered||[]})},getVzevInfo:function(){return ne("/api/vzev/info",ze).then(function(e){return Ln(e||{}),e||{}},function(){return{}})},setVzevInfo:function(e){e=e||{};var t="/api/vzev/info?action=set";return["representative_name","representative_contact","connection_point_id"].forEach(function(n){e[n]!==void 0&&e[n]!==null&&(t+="&"+n+"="+encodeURIComponent(e[n]))}),e.enabled!==void 0&&e.enabled!==null&&(t+="&enabled="+(e.enabled?"true":"false")),ne(t).then(function(n){return Ln(n),n})},getVzevFlows:function(e,t){return ne("/api/vzev/raw",ze).then(function(n){return{flows:jr(n,e||"15m",t||90)}})},getVzevBilling:function(e,t){var n=aa(e);return n?Promise.all([t?Promise.resolve(t):ne("/api/vzev/raw",ze),ne("/api/vzev/members",ze).catch(function(){return{members:[]}}),ne("/api/meta").catch(function(){return{}}),ne("/api/vzev/info",ze).catch(function(){return{}}),ne("/site").catch(function(){return{}})]).then(function(r){var i=r[0],a=r[1]&&r[1].members?r[1].members:Array.isArray(r[1])?r[1]:[],s=r[2]&&r[2].tariffs||{};i&&i.tariffs&&(s=Object.assign({},s,i.tariffs));var o=r[3]||{},c=r[4]||{},f=ir(i).filter(function($){return $.ts>=n[0]&&$.ts<n[1]}),v=Ul(i,a,n),h=Rl(e,f,a,s,v);h.info=o,h.raw=i,h.range=n,h.tariffs=s;var d=i&&i.self_id,p=i&&i.producer_id;if(d!=null)if(d===p)h.role="PRODUCER";else{h.role="CONSUMER";var g=h.members.filter(function($){return $.id===d})[0];h.self=g?Object.assign({},g,{name:c.name||g.name}):{id:d,name:c.name||d,wh:0,chf:0,months:[]}}return h}):Promise.reject(new Error("invalid quarter"))},getVzevMembers:function(){return Promise.all([ne("/api/vzev/members",ze),ne("/api/vzev/raw",ze)]).then(function(e){var t=e[0]&&e[0].members?e[0].members:Array.isArray(e[0])?e[0]:[],n=jr(e[1],"15m",90);return t.map(function(r){var i=r.type==="PRODUCER"||r.typ==="P",a=i?1:-1,s=n.map(function(c){var f=c.members&&c.members[r.id];return{t:c.ts,y:typeof f=="number"?f:0}}),o=s.reduce(function(c,f){return c+(f.y||0)},0);return{id:r.id,name:r.name||r.id,address:r.location||r.loc,net_wh:a*o,points:s}})})},poll:Xl,onStatus:function(e){return Zt.push(e),function(){var t=Zt.indexOf(e);t>=0&&Zt.splice(t,1)}},onVzevInfo:function(e){return Qt.push(e),function(){var t=Qt.indexOf(e);t>=0&&Qt.splice(t,1)}},isOnline:function(){return Xt},lastOk:function(){return Rn}};var Ql="\uFEFF",ur=";",qr=`\r
`;function Jl(e){if(e==null)return"";var t=String(e);return t.indexOf(ur)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function Yr(e){return(e||[]).map(Jl).join(ur)}function es(e){var t=String(e||"");t.charCodeAt(0)===65279&&(t=t.slice(1));var n=[],r=[],i="",a=!1,s=0;function o(){r.push(i),i=""}function c(){o(),n.push(r),r=[]}for(;s<t.length;){var f=t[s];if(a){if(f==='"'){if(t[s+1]==='"'){i+='"',s+=2;continue}a=!1,s++;continue}i+=f,s++;continue}if(f==='"'&&i===""){a=!0,s++;continue}if(f===ur){o(),s++;continue}if(f==="\r"){s++;continue}if(f===`
`){c(),s++;continue}i+=f,s++}return(i!==""||r.length)&&c(),n}function cr(e,t){var n=[Yr(e)];return(t||[]).forEach(function(r){n.push(Yr(r))}),Ql+n.join(qr)+qr}function ts(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var fr="gplug-archive",ns=2,yt=900,Gr=384,rs=60,is=2*86400,as=50,ls="2",ss=["1","2"],Zr={},Xr=!1,ft=null,Un=!1;function os(){return typeof indexedDB<"u"?indexedDB:typeof globalThis<"u"?globalThis.indexedDB:void 0}function je(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error||new Error("idb request failed"))}})}function hn(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=e.onerror=function(){n(e.error||new Error("idb tx failed"))}})}function be(){if(ft)return ft;var e=os();return e?(ft=new Promise(function(t,n){var r;try{r=e.open(fr,ns)}catch(i){n(i);return}r.onupgradeneeded=function(){var i=r.result;i.objectStoreNames.contains("e15")||i.createObjectStore("e15",{keyPath:["siteId","ts"]}),i.objectStoreNames.contains("vz15")||i.createObjectStore("vz15",{keyPath:["siteId","memberId","ts"]}),i.objectStoreNames.contains("meta")||i.createObjectStore("meta",{keyPath:"siteId"}),i.objectStoreNames.contains("live")||i.createObjectStore("live",{keyPath:["siteId","kind","id"]})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error||new Error("idb open failed"))},r.onblocked=function(){n(new Error("idb blocked"))}}).catch(function(t){throw Un=!0,ft=null,t}),ft):(Un=!0,Promise.reject(new Error("IndexedDB unavailable")))}function us(){return Un?Promise.resolve(!1):be().then(function(){return!0},function(){return!1})}function He(e,t,n){return e.transaction(t,n).objectStore(t)}function cs(e){return{siteId:e,firstE15Ts:null,lastE15Ts:null,lastVzTs:null,gaps:[],count:0,syncedAt:null,producerId:null,selfId:null,tariffs:null}}function gn(e){return be().then(function(t){return je(He(t,"meta","readonly").get(e))}).then(function(t){return t||cs(e)})}function va(e){return be().then(function(t){var n=t.transaction("meta","readwrite");return n.objectStore("meta").put(e),hn(n).then(function(){return e})})}function fs(){return be().then(function(e){return je(He(e,"meta","readonly").getAllKeys())}).then(function(e){return(e||[]).map(String)})}function dr(e,t,n){var r=t??0,i=n??9999999999;return IDBKeyRange.bound([e,r],[e,i])}function ds(e,t,n){return be().then(function(r){return je(He(r,"e15","readonly").getAll(dr(e,t,n)))}).then(function(r){return(r||[]).map(function(i){var a={ts:i.ts,imp_wh:i.imp_wh,exp_wh:i.exp_wh,pv_wh:i.pv_wh};return vr(a,i),i.partial&&(a.partial=!0),a})})}function pa(e,t){return!t||!t.length?Promise.resolve(0):be().then(function(n){var r=n.transaction("e15","readwrite"),i=r.objectStore("e15"),a=0;return t.forEach(function(s){if(!(!s||typeof s.ts!="number")){var o={siteId:e,ts:s.ts,imp_wh:wt(s.imp_wh),exp_wh:wt(s.exp_wh),pv_wh:wt(s.pv_wh)};vr(o,s),s.partial&&(o.partial=!0),i.put(o),a++}}),hn(r).then(function(){return a})})}function wt(e){return e==null||isNaN(e)?null:Number(e)}var vs=["bat_chg_wh","bat_dis_wh"];function vr(e,t){vs.forEach(function(n){var r=wt(t[n]);r!==null&&(e[n]=r)})}function ha(e,t){var n=t&&t.data||{},r=Object.keys(n);return r.length?be().then(function(i){var a=i.transaction("vz15","readwrite"),s=a.objectStore("vz15"),o=0;return r.forEach(function(c){var f=n[c];if(Array.isArray(f))for(var v=0;v+2<f.length;v+=3)s.put({siteId:e,memberId:c,ts:f[v],imp:f[v+1],exp:f[v+2]}),o++}),hn(a).then(function(){return o})}):Promise.resolve(0)}function pr(e,t,n){return Promise.all([gn(e),be().then(function(r){return je(He(r,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",t??0],[e,"￿",n??9999999999])))})]).then(function(r){var i=r[0],a=r[1]||[],s=t??0,o=n??9999999999,c={};return a.sort(function(f,v){return f.memberId===v.memberId?f.ts-v.ts:f.memberId<v.memberId?-1:1}),a.forEach(function(f){if(!(f.ts<s||f.ts>o)){var v=c[f.memberId];v||(v=[],c[f.memberId]=v),v.push(f.ts,f.imp,f.exp)}}),{producer_id:i.producerId,self_id:i.selfId,tariffs:i.tariffs,data:c}})}function ps(e){for(var t=[],n=1;n<e.length;n++){var r=e[n-1],i=e[n];if(i-r>yt&&(t.push([r+yt,i-yt]),t.length>=as))break}return t}function hr(e){return be().then(function(t){return je(He(t,"e15","readonly").getAllKeys(dr(e)))}).then(function(t){var n=(t||[]).map(function(r){return r[1]});return n.sort(function(r,i){return r-i}),{count:n.length,firstE15Ts:n.length?n[0]:null,lastE15Ts:n.length?n[n.length-1]:null,gaps:ps(n)}})}function gr(e){return Promise.all([gn(e),hr(e),hs()]).then(function(t){var n=t[0],r=t[1];return{siteId:e,firstE15Ts:r.firstE15Ts,lastE15Ts:r.lastE15Ts,count:r.count,gaps:r.gaps,lastVzTs:n.lastVzTs,syncedAt:n.syncedAt,days:r.firstE15Ts===null?0:Math.max(1,Math.round((r.lastE15Ts-r.firstE15Ts)/86400)),estimate:t[2]}})}function hs(){return typeof navigator>"u"||!navigator.storage||!navigator.storage.estimate?Promise.resolve(null):navigator.storage.estimate().then(function(e){return e},function(){return null})}function gs(){return Xr||(Xr=!0,typeof navigator>"u"||!navigator.storage||!navigator.storage.persist)?Promise.resolve(null):navigator.storage.persist().then(function(e){return e},function(){return null})}function ms(e,t){var n;return gn(t).then(function(r){n=r;var i=0;return r.lastE15Ts!==null&&r.lastE15Ts!==void 0&&(i=r.lastE15Ts+yt,Zr[t]||(i=Math.max(0,r.lastE15Ts-is))),Zr[t]=!0,$s(e,t,i)}).then(function(){return e.getVzevRaw?e.getVzevRaw().catch(function(){return null}):Promise.resolve(null)}).then(function(r){return!r||!r.data?null:(r.producer_id!==void 0&&(n.producerId=r.producer_id),r.self_id!==void 0&&(n.selfId=r.self_id),r.tariffs&&(n.tariffs=r.tariffs),ha(t,r).then(function(){n.lastVzTs=_s(r)}))}).then(function(){return hr(t)}).then(function(r){return n.firstE15Ts=r.firstE15Ts,n.lastE15Ts=r.lastE15Ts,n.count=r.count,n.gaps=r.gaps,n.syncedAt=Math.floor(Date.now()/1e3),va(n)}).then(function(){return gs()}).then(function(){return gr(t)})}function $s(e,t,n){var r=0;function i(a){return r>=rs?Promise.resolve():(r++,e.getEnergy("15m",Gr,a).then(function(s){return!Array.isArray(s)||!s.length?null:pa(t,s).then(function(){var o=s[s.length-1].ts;return s.forEach(function(c){c.ts>o&&(o=c.ts)}),s.length<Gr?null:i(o+yt)})}))}return i(n)}function _s(e){var t=e&&e.data||{},n=null;return Object.keys(t).forEach(function(r){var i=t[r];if(Array.isArray(i))for(var a=0;a+2<i.length;a+=3)(n===null||i[a]>n)&&(n=i[a])}),n}function bs(e){return IDBKeyRange.bound([e,"",""],[e,"￿","￿"])}function Qr(e,t,n){var r=Object.keys(n||{});return!e||!r.length?Promise.resolve(0):be().then(function(i){var a=i.transaction("live","readwrite"),s=a.objectStore("live");return r.forEach(function(o){for(var c=n[o]||[],f=[],v=0;v<c.length;v++)f.push(c[v].t,wt(c[v].y));s.put({siteId:e,kind:t,id:String(o),pts:f})}),hn(a).then(function(){return r.length})})}function Jr(e,t,n){var r=n??0;return be().then(function(i){return je(He(i,"live","readonly").getAll(bs(e)))}).then(function(i){var a={};return(i||[]).forEach(function(s){if(!(!s||s.kind!==t||!Array.isArray(s.pts))){for(var o=[],c=0;c+1<s.pts.length;c+=2)s.pts[c]<r||o.push({t:s.pts[c],y:s.pts[c+1]});o.length&&(a[s.id]=o)}}),a})}function ys(e){return Promise.all([be().then(function(t){return je(He(t,"e15","readonly").getAll(dr(e)))}),be().then(function(t){return je(He(t,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",0],[e,"￿",9999999999])))})]).then(function(t){var n=[];return(t[0]||[]).sort(function(r,i){return r.ts-i.ts}).forEach(function(r){n.push(["e",r.ts,Ye(r.imp_wh),Ye(r.exp_wh),Ye(r.pv_wh),r.partial?"1":"0",Ye(r.bat_chg_wh),Ye(r.bat_dis_wh)])}),(t[1]||[]).sort(function(r,i){return r.memberId===i.memberId?r.ts-i.ts:r.memberId<i.memberId?-1:1}).forEach(function(r){n.push(["v",r.ts,r.memberId,Ye(r.imp),Ye(r.exp),""])}),cr([fr,ls,e],n)})}function Ye(e){return e==null?"":String(e)}function ws(e,t){var n=es(e);if(!n.length||n[0][0]!==fr)return Promise.reject(new Error("not a gplug archive export"));if(ss.indexOf(n[0][1])<0)return Promise.reject(new Error("unsupported export format "+n[0][1]));var r=n[0][2];if(t&&r!==t)return Promise.reject(new Error("site mismatch: file "+r+", device "+t));for(var i=t||r,a=[],s={},o=1;o<n.length;o++){var c=n[o];if(!(!c||!c.length)){if(c[0]==="e"){var f={ts:Number(c[1]),imp_wh:dt(c[2]),exp_wh:dt(c[3]),pv_wh:dt(c[4])};c[5]==="1"&&(f.partial=!0),vr(f,{bat_chg_wh:dt(c[6]),bat_dis_wh:dt(c[7])}),a.push(f)}else if(c[0]==="v"){var v=c[2];s[v]||(s[v]=[]),s[v].push(Number(c[1]),ei(c[3]),ei(c[4]))}}}return pa(i,a).then(function(){return ha(i,{data:s})}).then(function(){return hr(i)}).then(function(h){return gn(i).then(function(d){return d.firstE15Ts=h.firstE15Ts,d.lastE15Ts=h.lastE15Ts,d.count=h.count,d.gaps=h.gaps,va(d)})}).then(function(){return gr(i)})}function dt(e){return e===""||e===void 0?null:Number(e)}function ei(e){return e===""||e===void 0?0:Number(e)}var ks=900*1e3,re={available:null,siteId:null,coverage:null,error:null,syncing:!1,otherSites:[]},Jt=[],$t=null,ti=null;function Bn(){return re}function en(){Jt.forEach(function(e){try{e(re)}catch{}})}function ga(e){return Jt.push(e),function(){var t=Jt.indexOf(e);t>=0&&Jt.splice(t,1)}}function xs(e){return $t||($t=us().then(function(t){return re.available=t,t?e.getSite().then(function(n){return re.siteId=n&&n.id?String(n.id):null,re.siteId?fs().then(function(r){re.otherSites=r.filter(function(i){return i!==re.siteId})},function(){}).then(function(){return jn(e)}).then(function(){return ti===null&&typeof setInterval=="function"&&(ti=setInterval(function(){jn(e)},ks)),re}):(re.available=!1,en(),re)},function(){return en(),re}):(en(),re)}),$t)}function jn(e){return!re.available||!re.siteId||re.syncing?Promise.resolve(re):(re.syncing=!0,ms(e,re.siteId).then(function(t){re.coverage=t,re.error=null},function(t){re.error=t&&t.message?t.message:"sync failed"}).then(function(){return re.syncing=!1,en(),re}))}function Et(){return $t||Promise.resolve(re)}function zs(e){return jn(e)}var ma={overview:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,modbus:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="3.5" y="6" width="13" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 6V3.8M10 6V3.8M13.5 6V3.8M6.5 14v2.2M10 14v2.2M13.5 14v2.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,vzev:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="4" r="2.2" fill="currentColor"/><circle cx="4" cy="15" r="2.2" fill="currentColor"/><circle cx="16" cy="15" r="2.2" fill="currentColor"/><path d="M10 6.5v4M10 10.5l-4.5 3M10 10.5l4.5 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,settings:u`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function ni(){return u`
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
      </a>`}var Cs=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/modbus",key:"nav.modbus",icon:"modbus",gate:"modbus",active:function(e){return e.indexOf("/modbus")===0}},{path:"/vzev",key:"nav.vzev",icon:"vzev",gate:"vzev",active:function(e){return e.indexOf("/vzev")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function ri(e){return u`
      <nav class="nav" aria-label=${l("nav.menu")}>
        ${Cs.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="modbus"||e.showModbus)&&(t.gate!=="vzev"||e.showVzev)}).map(function(t){var n=t.active(e.path);return u`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${ma[t.icon]}
              <span>${l(t.key)}</span>
            </a>`})}
      </nav>`}function Ss(e){var t=Ue.useRoute(e.routes),n=S(!1),r=n[0],i=n[1],a=S(!1),s=a[0],o=a[1],c=S(null),f=c[0],v=c[1],h=S(!1),d=h[0],p=h[1],g=S(!1),$=g[0],m=g[1],y=S(!1),b=y[0],M=y[1],I=S(!1),C=I[0],k=I[1];X(function(){return W.onStatus(function(z,T){z?v(null):(ee(l("error.offline"),{type:"error"}),v(T?new Date(T):new Date))})},[]),X(function(){var z=!1;function T(E){k(E.available===!1),!z&&E.otherSites&&E.otherSites.length&&(z=!0,ee(l("banner.archive_site_changed",{id:E.siteId}),{type:"warn"}))}var x=ga(T);return Et().then(T),x},[]),X(function(){return W.poll(function(){W.getMeta().then(function(z){o(!!z&&typeof z.time=="number"&&z.time<1e9)}).catch(function(){})},6e4)},[]),X(function(){W.getMeter().then(function(z){p(!!(z&&z.values))}).catch(function(){})},[]),X(function(){W.getModbus().then(function(z){m(Array.isArray(z)&&z.length>0)}).catch(function(){})},[]),X(function(){var z=W.onVzevInfo(function(T){M(!!(T&&T.enabled))});return W.getVzevInfo().catch(function(){}),z},[]),X(function(){i(!1)},[t.path]);var U=t.route.component;return u`
      <div class="shell">
        <aside class="sidebar">
          <${ni} />
          <${ri} path=${t.path} showMeter=${d} showModbus=${$} showVzev=${b} />
          <div class="sidebar-foot">${"v1.2.0"}</div>
        </aside>

        <div class="topbar">
          <${ni} />
          <button class="burger" aria-label=${l("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${ma.burger}</button>
        </div>
        ${r?u`
          <div class="drawer">
            <${ri} path=${t.path} showMeter=${d} showModbus=${$} showVzev=${b} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${s?u`<div class="banner banner-warn">${l("banner.rtc")}</div>`:null}
          ${C?u`<div class="banner banner-warn">${l("banner.archive")}</div>`:null}
          ${f?u`
            <div class="stale-note">${l("common.stale",{time:w.time(Math.floor(f.getTime()/1e3),"hm")})}</div>`:null}
          <${U} params=${t.params} />
        </main>

        <${pl} />
      </div>`}function Se(e){return e==null||isNaN(e)?null:Number(e)}function tn(e){return e<0?0:e>1?1:e}function mr(e){return Se(e.bat_chg_wh)||0}function $r(e){return Se(e.bat_dis_wh)||0}function Ms(e){return e.some(function(t){return t.bat_chg_wh!=null||t.bat_dis_wh!=null})}function _r(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function Hn(e,t){t=t||{};var n=!!t.vzev,r=Se(t.co2);e=e||[];var i=e.length,a=0,s=0,o=0,c=0,f=0,v=0,h=0,d=0,p=0;e.forEach(function(U){if(_r(U)){d++;return}a+=U.pv_wh,s+=U.exp_wh,o+=U.imp_wh,c+=U.vzev_in_wh||0,f+=U.vzev_out_wh||0,v+=mr(U),h+=$r(U),p++});var g=i>0&&d/i>.2,$={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:g};if(n&&($.autarkyVzev=null),i===0||g||p===0)return $;var m=Math.max(0,a-s),y=a-s+o+h-v;if($.autarky=y>0?tn(Math.max(0,y-o)/y):null,$.selfuse=a>0?tn(m/a):null,n){var b=Math.max(0,o-c);$.autarkyVzev=y>0?tn((y-b)/y):null}var M=nr({imp_wh:o,exp_wh:s,pv_wh:a,vzev_in_wh:c,vzev_out_wh:f},t.tariffs||{}),I=M.saving_selfuse_chf||0,C=M.revenue_feedin_chf||0,k=n?(M.revenue_vzev_chf||0)-(M.cost_vzev_chf||0):0;return $.savingParts={selfuse:I,feedin:C,vzev:n?k:null},$.savingChf=Math.round((I+C+k)*100)/100,$.co2Kg=r&&r>0?m/1e3*r/1e3:null,$}function Is(e,t,n){if(!e)return null;n=n||{};var r=n.pv!==!1,i=n.bat!==!1,a=Se(e.pv_w),s=Se(e.bat_w),o=Se(e.grid_w),c=r&&a===null,f=i&&s===null,v=o===null,h=r&&!c?Math.max(0,a):0,d=i&&!f?s:0,p=v?0:o,g=Se(t);function $(E,P){return P?"unknown":E<1?"zero":"ok"}function m(E,P){return{watts:P?null:E,state:$(E,P)}}var y={},b=[];r&&(y.pv=m(h,c),b.push({node:"pv",dir:"in",watts:h,state:$(h,c)})),i&&(y.bat=m(Math.abs(d),f),b.push({node:"bat",dir:d<0?"out":"in",watts:Math.abs(d),state:$(Math.abs(d),f)}));var M=Math.max(0,h+d+p);y.haus=m(M,v||c||f);var I=Math.max(0,p),C=Math.max(0,-p),k=g!==null&&g>0?Math.min(g,I):0,U=g!==null&&g<0?Math.min(-g,C):0,z=p>0?"in":"out",T=p>0?I-k:C-U;if(y.netz=m(T,v),b.push({node:"netz",dir:z,watts:T,state:$(T,v)}),g!==null){var x=k+U;y.vzev=m(x,v),b.push({node:"vzev",dir:g>0?"in":"out",watts:x,state:$(x,v)})}return{nodes:y,edges:b}}function Es(e){if(!e)return null;var t=e.nodes;if(t.netz.state==="unknown"||t.haus.state==="unknown")return{key:"flow.status_unknown",vars:{}};var n=0,r=0,i=0;e.edges.forEach(function(f){(f.node==="netz"||f.node==="vzev")&&(f.dir==="in"?n+=f.watts:r+=f.watts),f.node==="bat"&&f.dir==="out"&&(i+=f.watts)});var a=t.pv?t.pv.watts:0,s=t.haus.watts,o=Math.max(0,a-r-i),c=s>=1?Math.round(tn(o/s)*100):a>=1?100:0;return r>=1?{key:"flow.status_export",vars:{pct:c,w:r}}:n>=1?o>=1?{key:"flow.status_import_pv",vars:{pct:c,w:n}}:{key:"flow.status_import",vars:{w:n}}:o>=1?{key:"flow.status_covered",vars:{pct:c}}:{key:"flow.status_idle",vars:{}}}function Ns(e){if(!e||!e.length)return null;var t=null;if(e.forEach(function(i){(i.points||[]).forEach(function(a){(t===null||a.t>t)&&(t=a.t)})}),t===null)return null;var n=0,r=!1;return e.forEach(function(i){var a=(i.net_wh||0)<0?-1:1;(i.points||[]).forEach(function(s){s.t===t&&(n+=a*(s.y||0),r=!0)})}),r?n*4:null}var Ts={"comp.pv":"var(--c-production)","comp.load":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.vzev":"var(--c-vzev)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-vzev-fill)"};function pe(e,t){return{key:e,value:Math.max(0,t||0),color:Ts[e]}}function Ps(e,t){if(!e)return{cover:[],usage:[],unknown:!0};var n=Se(e.pv_w),r=Se(e.bat_w),i=Se(e.grid_w),a=n===null||i===null,s=n===null?0:n,o=r===null?0:r,c=i===null?0:i,f=Se(t),v=Math.max(0,c),h=Math.max(0,-c),d=Math.max(0,o),p=Math.max(0,-o),g=Math.max(0,s-h-p),$=g+d+v,m=f!==null&&f>0?Math.min(f,v):0,y=f!==null&&f<0?Math.min(-f,h):0;return{cover:[pe("comp.pv",g),pe("comp.battery",d),pe("comp.vzev",m),pe("comp.grid",v-m)],usage:[pe("comp.load",$),pe("comp.charge",p),pe("comp.vzev",y),pe("comp.feedin",h-y)],unknown:a}}function Os(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,s=0,o=0,c=0;if(e.forEach(function(m){_r(m)||(t+=m.pv_wh,n+=m.exp_wh,r+=m.imp_wh,i+=m.vzev_in_wh||0,a+=m.vzev_out_wh||0,s+=mr(m),o+=$r(m),c++)}),c===0)return{cover:[],usage:[],unknown:!0,battery:!1};var f=Ms(e),v=Math.max(0,t-n-s),h=v+o+r,d=Math.min(Math.max(0,i),r),p=Math.min(Math.max(0,a),n),g=[pe("comp.pv",v)],$=[pe("comp.load",h)];return f&&(g.push(pe("comp.battery",o)),$.push(pe("comp.charge",s))),g.push(pe("comp.vzev",d),pe("comp.grid",r-d)),$.push(pe("comp.vzev",p),pe("comp.feedin",n-p)),{cover:g,usage:$,unknown:!1,battery:f}}function As(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function Rs(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,s=0;if(e.forEach(function(c){_r(c)||(t+=c.pv_wh,n+=c.exp_wh,r+=c.imp_wh,i+=mr(c),a+=$r(c),s++)}),s===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var o=Math.max(0,t-n);return{prodSelf:o,prodFeedin:Math.max(0,n),consSelf:Math.max(0,t-n-i+a),consImport:Math.max(0,r)}}var zn=900,$a=90;function _a(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function ii(e){return e.friendlyName||e.name||e.id||"–"}function ai(e){return e.friendlyName||e.name||e.id||"–"}function Ct(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function Ls(e,t){if(!e||e.stale!==!0)return null;var n=typeof e.lastUpdate=="number"?e.lastUpdate:null;if(n===null)return l("prod.stale_unknown");var r=t-n>86400?"15m":"hm";return l("prod.stale",{time:w.time(n,r)})}function ba(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function Be(e){return e==null||isNaN(e)?null:Number(e)}function ya(e){var t=Ct(e),n=Be(e.soc),r=Be(e.capacity);return n!==null&&(n<0||n>100)&&(n=null),{dir:t===null?null:t>=1?"discharge":t<=-1?"charge":"idle",soc:n,capacity:r!==null&&r>0?r:null,storedWh:n!==null&&r!==null&&r>0?r*n/100:null}}function Ds(e){var t=0,n=0,r=0,i=0,a=!0;return(e||[]).forEach(function(s){if(ba(s)){var o=ya(s);o.soc!==null&&(o.capacity!==null?(r+=o.soc*o.capacity,i+=o.capacity):a=!1,n+=o.soc,t++)}}),t?a?r/i:n/t:null}var Fs={charge:"flow.bat_charge",discharge:"flow.bat_discharge",idle:"stat.bat_idle"};function wa(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function Ws(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function li(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>$a;)a.shift()}function si(e,t){Object.keys(t||{}).forEach(function(n){var r=e[n]||(e[n]=[]),i={};r.forEach(function(s){i[s.t]=!0});var a=t[n].filter(function(s){return!i[s.t]});if(a.length)for(e[n]=a.concat(r).sort(function(s,o){return s.t-o.t});e[n].length>$a;)e[n].shift()})}function Us(e,t,n){for(var r=wa(e,t,n),i=[],a=[],s=0;s<r.grid.length;s++){var o=r.grid[s].t,c=Be(r.grid[s].y),f=Be(r.pv[s].y)||0,v=Be(r.bat[s].y)||0;c!==null&&(a.push({t:o,y:f+v}),i.push({t:o,y:f+v+c}))}return{cons:i,prod:a}}function vt(e){return u`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        ${e.dir?u`<span class="ov-stat-dir" aria-hidden="true"
          style=${"color:"+e.color}>${e.dir==="out"?"→":"←"}</span>`:null}
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?u`<${he} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function Bs(e){var t=e.newest,n=e.win,r=e.power,i=e.vzevW,a=t?Be(t.grid_w):null,s=t?Be(t.pv_w)||0:null,o=t?Be(t.bat_w)||0:null,c=t&&a!==null?s+o+a:null,f=t?s+o:null,v=t&&a!==null?Math.max(0,-a):null,h=t&&a!==null?Math.max(0,a):null,d=Us(r,n[0],n[1]),p=d.cons,g=d.prod;return u`
      <${F} group="grid" title=${l("panel.grid")}
        collapsible collapseKey="uebersicht.grid"
        defaultOpen=${!1}>
        <div class="ov-stats">
          <${vt} color="var(--c-consumption)" label=${l("stat.consumption")}
            tooltip=${l("tooltip.consumption")} value=${w.w(c)} />
          <${vt} color="var(--c-production)" label=${l("stat.production")}
            value=${w.w(f)} />
          <${vt} color="var(--c-export)" dir="out" label=${l("stat.export")}
            value=${w.w(v)} />
          <${vt} color="var(--c-import)" dir="in" label=${l("stat.gridop")}
            tooltip=${l("tooltip.gridop")} value=${w.w(h)} />
          ${i!==null?u`
            <${vt} color="var(--c-vzev)" dir=${i>=0?"in":"out"}
              label=${i>=0?l("stat.vzev_import"):l("stat.vzev_export")}
              tooltip=${l("tooltip.vzev")} value=${w.w(Math.abs(i))} />`:null}
        </div>
        <${It} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${w.w}
          bands=${[{top:g,bottom:p,color:"var(--c-vzev-fill)"},{top:p,bottom:g,color:"var(--c-import-fill)"}]}
          series=${[{points:p,color:"var(--c-consumption)",label:l("stat.consumption")},{points:g,color:"var(--c-production)",label:l("stat.production")}]} />
      <//>`}function js(e){var t=e.info;return u`
      <div class="ov-sub-meta">
        <span>${t.dir?l(Fs[t.dir]):"–"}</span>
        ${t.soc!==null?u`<span>${l("stat.soc",{pct:Math.round(t.soc)})}${t.storedWh!==null?" · "+l("stat.soc_energy",{energy:w.wh(t.storedWh),capacity:w.wh(t.capacity)}):""}</span>`:null}
      </div>
      ${t.soc!==null?u`
        <div class="bat-soc" role="meter" aria-valuemin="0" aria-valuemax="100"
          aria-valuenow=${Math.round(t.soc)} aria-label=${l("stat.soc",{pct:Math.round(t.soc)})}>
          <div class="bat-soc-fill" style=${"width:"+t.soc.toFixed(1)+"%"}></div>
        </div>`:null}`}function Hs(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:u`
      <${F} group="production" title=${l("panel.production")}
        collapsible collapseKey="uebersicht.production"
        defaultOpen=${!1}>
        ${e.notice?u`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${l("flow.prod_nodata")}</span>
            <button class="ov-notice-close" aria-label=${l("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=ba(i),s=a?"var(--c-battery)":"var(--c-production)",o=Ct(i),c=Ls(i,Date.now()/1e3),f=a&&!c?ya(i):null;return u`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${ai(i)}</span>
                  <span class=${"ov-sub-value"+(c?" is-stale":"")}
                    style=${c?"":"color:"+s}>${w.w(o)}</span>
                </div>
                ${c?u`<div class="ov-sub-meta" role="status"><span>${c}</span></div>`:null}
                ${f?u`<${js} info=${f} />`:null}
                <${It} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${w.w}
                  series=${[{points:n[i.id]||[],color:s,label:a?l("stat.battery"):ai(i)}]} />
              </div>`})}
        </div>
      <//>`}function Ks(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:u`
      <${F} group="loads" title=${l("panel.loads")} tooltip=${l("tooltip.loads")}
        collapsible collapseKey="uebersicht.loads"
        defaultOpen=${!1}>
        <div class="ov-subgrid">
          ${t.map(function(a){var s=_a(a.state),o=Ct(a),c=s==="inactive"?"waiting":"inactive",f=s==="inactive"?"action.request":"action.deactivate";return u`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${ii(a)}</span>
                  <${qt} state=${s} />
                </div>
                <div class="ov-sub-meta">
                  <span>${w.w(o)} · ${l("stat.rated")}</span>
                  <span>${l("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${It} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${w.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:ii(a)}]} />
                <div class="ov-sub-act">
                  <${Z} small secondary=${c==="inactive"}
                    onClick=${function(){i(a.id,c)}}>${l(f)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}function Vs(e){var t=e.members;return!e.enabled||!t||!t.length?null:u`
      <${F} group="vzev" title=${l("panel.vzev")} tooltip=${l("tooltip.vzev")}
        collapsible collapseKey="uebersicht.vzev"
        defaultOpen=${!1}>
        <div class="ov-subgrid">
          ${t.map(function(n){var r=(n.net_wh||0)<0,i=n.points||[],a=r?i:i.map(function(o){return{t:o.t,y:o.y===null||o.y===void 0?o.y:-o.y}}),s=a.length?[a[0].t,a[a.length-1].t+900]:null;return u`
              <div key=${n.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${n.name||n.id}</span>
                  <span class="ov-sub-value" style="color:var(--c-vzev)">
                    ${l(r?"stat.vzev_export":"stat.vzev_import")+" "+w.wh(Math.abs(n.net_wh||0))}
                  </span>
                </div>
                ${n.address?u`<div class="ov-sub-meta"><span>${n.address}</span></div>`:null}
                <${It} height=${140} yUnit="Wh" xUnit="h" timeWindow=${s}
                  yFormat=${function(o){return w.wh(Math.abs(o))}}
                  series=${[{points:a,color:"var(--c-vzev)",label:l(r?"stat.vzev_export":"stat.vzev_import")}]} />
              </div>`})}
        </div>
      <//>`}var qs={pv:{color:"var(--c-production)",label:"flow.pv"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"},netz:{color:"var(--c-grid)",label:"flow.netz"},vzev:{color:"var(--c-vzev)",label:"flow.vzev"}},Ys=30;function Gs(e){return e.node==="pv"?"var(--c-production)":e.node==="bat"?"var(--c-battery)":e.node==="vzev"?"var(--c-vzev)":e.dir==="in"?"var(--c-import)":"var(--c-export)"}function Zs(e,t){return e==="haus"?{text:l("flow.consumption")}:!t||t.state!=="ok"?null:e==="pv"?{text:l("flow.production"),color:"var(--c-production)"}:e==="bat"?{text:t.dir==="in"?l("flow.bat_discharge"):l("flow.bat_charge")}:t.dir==="in"?{text:l("flow.import"),color:"var(--c-import)"}:{text:l("flow.export"),color:"var(--c-export)"}}function Xs(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?u`
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
      </g>`:null}function oi(e){var t=qs[e.id],n=e.node,r=Zs(e.id,e.edge);return u`
      <div class=${"hub-node hub-node-"+e.id+" is-"+n.state}
        style=${"--node-c:"+t.color}>
        <span class="hub-icon">
          <svg viewBox="-13 -13 26 26" aria-hidden="true">${Xs(e.id,0,0,t.color)}</svg>
        </span>
        <span class="hub-node-text">
          <span class="hub-node-label">${l(t.label)}</span>
          <span class="hub-node-value">${n.state==="unknown"?"–":w.w(n.watts)}</span>
          ${r?u`<span class="hub-node-cap"
            style=${r.color?"color:"+r.color:null}>${r.text}</span>`:null}
          ${e.soc!==null&&e.soc!==void 0?u`<span class="hub-node-cap">${l("stat.soc",{pct:Math.round(e.soc)})}</span>`:null}
        </span>
      </div>`}function Qs(e){var t=e.edge,n=e.side==="src"?t.dir==="in":t.dir==="out",r=t.state==="unknown"?"var(--c-line)":Gs(t);return u`
      <div class=${"hub-edge "+(n?"is-fwd":"is-back")+" is-"+t.state}
        style=${"--edge-c:"+r}>
        <span class="hub-edge-line" aria-hidden="true"></span>
        ${t.state==="zero"?null:u`
          <span class="hub-edge-pill">
            <svg class="hub-edge-arrow" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ${t.state==="unknown"?"–":w.w(t.watts)}
          </span>`}
      </div>`}function Js(e){var t=Is(e.newest,e.vzevW,{pv:e.hasPv,bat:e.hasBattery}),n=Es(t),r=e.vzevW!==null&&e.vzevW!==void 0,i=u`
      <span class=${"live-badge"+(e.live?" is-live":"")}>
        <span class="live-dot" aria-hidden="true"></span>
        ${e.live?l("flow.live"):e.asOf?l("flow.as_of",{time:w.time(e.asOf,"hm")}):l("flow.offline")}
      </span>`;function a(o){return t?t.edges.find(function(c){return c.node===o}):null}function s(o,c){var f=o.filter(function(d){return t.nodes[d]});if(!f.length)return null;var v=u`
        <div class=${"hub-tier hub-tier-"+c}>
          ${f.map(function(d){return u`<${oi} key=${d} id=${d} node=${t.nodes[d]} edge=${a(d)}
              soc=${d==="bat"?e.soc:null} />`})}
        </div>`,h=u`
        <div class=${"hub-links hub-links-"+c}>
          ${f.map(function(d){return u`<${Qs} key=${d} edge=${a(d)} side=${c} />`})}
        </div>`;return c==="src"?u`${v}${h}`:u`${h}${v}`}return u`
      <${F} group="grid" title=${l("flow.title")} tooltip=${l("tooltip.flow")} badge=${i}>
        ${n?u`<p class="flow-status">${l(n.key,{w:w.w(n.vars.w),pct:n.vars.pct})}</p>`:null}
        ${t?u`
          <div class="hub-wrap">
            <div class="hub" role="img" aria-label=${l("flow.aria")}>
              ${s(["pv","bat"],"src")}
              <div class="hub-haus">
                <${oi} id="haus" node=${t.nodes.haus} />
              </div>
              ${s(["netz","vzev"],"grid")}
            </div>
          </div>`:u`<div class="hub-empty">${l("flow.status_unknown")}</div>`}
        ${r?u`<p class="flow-note">${l("flow.vzev_mean_note")}</p>`:null}
      <//>`}function ui(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return u`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?u`<${he} text=${e.note} />`:null}
        </div>
        ${r?u`
          <div class="comp-bar comp-bar-nodata">${e.unknown?l("flow.comp_nodata"):l("flow.comp_zero")}</div>`:u`
          <div class="comp-bar">
            ${t.map(function(i,a){var s=i.value/n*100;return u`<div key=${a} class="comp-seg"
                title=${l(i.key)+": "+e.fmt(i.value)}
                style=${"width:"+s.toFixed(2)+"%;background:"+i.color}></div>`})}
          </div>
          <div class="comp-legend">
            ${t.map(function(i,a){return u`
                <span key=${a} class="comp-leg">
                  <span class="comp-leg-dot" style=${"background:"+i.color}></span>
                  ${e.arrows&&e.arrows[i.key]?u`<span class="comp-leg-dir"
                    aria-hidden="true">${e.arrows[i.key]}</span>`:null}
                  ${l(i.key)} · ${e.fmt(i.value)}
                </span>`})}
          </div>`}
      </div>`}var eo={"comp.grid":"←","comp.vzev":"←"},to={"comp.feedin":"→","comp.vzev":"→"};function no(e){var t=S("now"),n=t[0],r=t[1],i=n==="now"?Ps(e.sample,e.vzevW):Os(e.records),a=n==="now"?w.w:w.wh,s=n==="today"&&e.hasBattery&&!i.battery&&!i.unknown?l("flow.comp_batt_note"):null;return u`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${l("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${l("flow.comp_today")}</button>
        </div>
        <${ui} title=${l("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} arrows=${eo} />
        <${ui} title=${l("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${s} arrows=${to} />
      </div>`}function ro(e){return u`
      <${F} group="grid" title=${l("flow.comp_title")} collapsible collapseKey="ov.comp"
        defaultOpen=${!1}>
        <${no} sample=${e.sample} vzevW=${e.vzevW} records=${e.records}
          hasBattery=${e.hasBattery} />
      <//>`}function ka(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return u`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?u`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function io(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?l("kpi.incomplete"):null;function r(v){return v==null?"–":Math.round(v*100)+" %"}var i=t.savingParts,a=i?[l("kpi.saving_selfuse")+": "+w.chf(i.selfuse,!0),l("kpi.saving_feedin")+": "+w.chf(i.feedin,!0),i.vzev!==null&&i.vzev!==void 0?l("kpi.saving_vzev")+": "+w.chf(i.vzev,!0):null].filter(Boolean).join(`
`):l("tooltip.kpi_saving"),s=t.autarkyVzev!==null&&t.autarkyVzev!==void 0?l("kpi.autarky_vzev")+": "+r(t.autarkyVzev):null,o=!!e.showSaving,c=o?u`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":w.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.saving")}<${he} text=${n||a} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:u`
        <div class="kpi-hero">
          <${ka} big ratio=${t.autarky} color="var(--c-vzev)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.autarky")}<${he} text=${n||l("tooltip.kpi_autarky")} /></span>
            ${s?u`<span class="kpi-sub">${s}</span>`:null}
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,f=[];return o&&f.push(u`<${Cn} key="au" gauge ratio=${t.autarky} color="var(--c-vzev)"
        label=${l("kpi.autarky")} tip=${n||l("tooltip.kpi_autarky")} sub=${s} />`),f.push(u`<${Cn} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${l("kpi.selfuse_short")} tip=${n||l("tooltip.kpi_selfuse")} />`),e.showCo2&&f.push(u`<${Cn} key="co" value=${lo(t.co2Kg)} color="var(--c-production)"
        label=${l("kpi.co2")} tip=${n||l("tooltip.kpi_co2",{g:e.co2Factor})} />`),u`
      <div class="kpi-band">
        ${c}
        <div class="kpi-support">${f}</div>
      </div>`}function Cn(e){return u`
      <div class="kpi-tile">
        ${e.gauge?u`<${ka} ratio=${e.ratio} color=${e.color} />`:u`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${he} text=${e.tip} /></span>
          ${e.sub?u`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function ao(){return u`
      <div class="ov-skel">
        <span class="sr-only" role="status">${l("common.loading")}</span>
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
      </div>`}function lo(e){return e==null||isNaN(e)?"–":e>=1e3?w.num(e/1e3,2)+" t":w.num(e,e<10?2:1)+" kg"}function so(){var e=S(null),t=e[0],n=e[1],r=S(null),i=r[0],a=r[1],s=S([]),o=s[0],c=s[1],f=S([]),v=f[0],h=f[1],d=S([]),p=d[0],g=d[1],$=S(!1),m=$[0],y=$[1],b=S(null),M=b[0],I=b[1],C=S(null),k=C[0],U=C[1],z=S(function(){return Math.floor(Date.now()/1e3)}),T=z[0],x=z[1],E=S(null),P=E[0],B=E[1],j=S({}),_=j[0],N=j[1],D=S(!1),L=D[0],fe=D[1],xe=S(0),Y=xe[1],ae=Ee({}),de=Ee({}),ye=Ee(!1),R=T,q=R-zn,J=[q,R];X(function(){W.getSite().then(function(H){n(H)}).catch(function(){}),W.getMeta().then(function(H){U(H)}).catch(function(){})},[]),X(function(){var H=!0;function ve(){H&&(ye.current=!0,Y(function(ce){return ce+1}))}return Et().then(function(ce){if(H){if(!ce||!ce.available||!ce.siteId){ve();return}var et=Math.floor(Date.now()/1e3)-zn;return Promise.all([Jr(ce.siteId,"prod",et).catch(function(){return{}}),Jr(ce.siteId,"load",et).catch(function(){return{}})]).then(function(Me){H&&(si(ae.current,Me[0]),si(de.current,Me[1]),ve())})}},ve).catch(ve),function(){H=!1}},[]),X(function(){return W.poll(function(){W.getEnergy("15m",96).then(function(H){if(Array.isArray(H)){var ve=Bn();if(!ve.available||!ve.siteId||!H.length){I(H);return}pr(ve.siteId,H[0].ts,H[H.length-1].ts).then(function(ce){I(ce&&ce.self_id?ia(H,ce):H)},function(){I(H)})}}).catch(function(){})},6e4)},[]),X(function(){if(W.getVzevMembers)return W.poll(function(){W.getVzevMembers().then(function(H){Array.isArray(H)&&g(H)}).catch(function(){})},1e4)},[]),X(function(){var H=W.onVzevInfo(function(ve){y(!!(ve&&ve.enabled))});return W.getVzevInfo().catch(function(){}),H},[]),X(function(){return W.poll(function(){var H=Math.floor(Date.now()/1e3);x(H);var ve=H-zn;Promise.all([W.getPower().catch(function(){return null}),W.getLoads().catch(function(){return null}),W.getProductions().catch(function(){return null})]).then(function(ce){var et=ce[0],Me=ce[1],Ve=ce[2];if(et&&a(et),Me&&c(Me),Ve&&h(Ve),(et||Me||Ve)&&B(H),fe(!0),Ve&&Ve.forEach(function(tt){li(ae.current,tt.id,H,Ct(tt),ve)}),Me&&Me.forEach(function(tt){var Ya=_a(tt.state)==="active"?Ct(tt):0;li(de.current,tt.id,H,Ya,ve)}),ye.current&&(Ve||Me)){var ut=Bn();ut&&ut.available&&ut.siteId&&(Ve&&Qr(ut.siteId,"prod",ae.current).catch(function(){}),Me&&Qr(ut.siteId,"load",de.current).catch(function(){}))}})},1e4)},[]);var Q=Ws(i),Ke=wa(i,q,R),Re=Ns(p),A=!!(v&&v.length&&As(Ke.pv.map(function(H){return H.y}))&&!_["flow.prod_nodata"]);function oe(){var H=Object.assign({},_);H["flow.prod_nodata"]=!0,N(H)}var le=new Date;le.setHours(0,0,0,0);var ie=Math.floor(le.getTime()/1e3),Ne=(M||[]).filter(function(H){return H.ts>=ie}),Qe=!!(p&&p.length),we=k&&k.tariffs||{},Le=we.co2_g_kwh===void 0||we.co2_g_kwh===null||we.co2_g_kwh===""?128:Number(we.co2_g_kwh),Tt=Hn(Ne,{tariffs:we,vzev:Qe,co2:Le}),Pt=Number(we.grid_import_chf_kwh)>0||Number(we.grid_feedin_chf_kwh)>0,Ot=Le>0,_n=Ne.some(function(H){return H.partial}),bn=_n?l("kpi.today_until",{time:w.time(T,"hm")}):l("kpi.today"),Je=(v||[]).some(function(H){return String(H.productionType||"").toUpperCase()==="BATTERY"}),ja=(v||[]).some(function(H){return String(H.productionType||"").toUpperCase()!=="BATTERY"}),Ha=!!(Q&&P&&T-P<25&&i&&typeof i.now=="number"&&i.now-Q.ts<Ys),Ka=t&&t.location?t.location:null,Va=P?u`
      <span class="ov-updated">${l("common.stale",{time:w.time(P,"hm")})}</span>`:null;function qa(H,ve){W.setLoadState(H,ve).then(function(){return W.getLoads()}).then(function(ce){ce&&c(ce)}).catch(function(){ee(l("error.toggle"),{type:"error"})})}return u`
      <div>
        <${Ae} title=${t&&t.name?t.name:l("page.overview")}
          subtitle=${Ka} actions=${Va} />
        ${L?u`
          <${Mt}>
            <div class="ov-top">
              <section class="ov-top-flow" aria-labelledby="ov-sec-now">
                <h2 class="ov-section" id="ov-sec-now">${l("section.now")}</h2>
                <${Js} newest=${Q} vzevW=${Re} hasBattery=${Je} hasPv=${ja}
                  soc=${Je?Ds(v):null}
                  live=${Ha} asOf=${Q?Q.ts:null} />
              </section>
              <section class="ov-top-side" aria-labelledby="ov-sec-today">
                <h2 class="ov-section" id="ov-sec-today">${l("section.today")}</h2>
                <${io} kpis=${Tt} period=${bn} showSaving=${Pt}
                  showCo2=${Ot} co2Factor=${Le} />
              </section>
            </div>
            <${ro} sample=${Q} vzevW=${Re} records=${Ne}
              hasBattery=${Je} />
            <section class="ov-history" aria-labelledby="ov-sec-history">
              <h2 class="ov-section" id="ov-sec-history">${l("section.history")}</h2>
              <${Bs} newest=${Q} win=${J} vzevW=${Re} power=${i} />
              <${Hs} productions=${v} history=${ae.current} win=${J}
                notice=${A} onDismissNotice=${oe} />
              <${Ks} loads=${o} history=${de.current} win=${J} onToggle=${qa} />
              <${Vs} members=${p} win=${J} enabled=${m} />
            </section>
          <//>`:u`<${ao} />`}
      </div>`}var oo=[10,25,50],Ft=2880,Pe={"15m":{label:"history.res.15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",count:Ft,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",count:Ft,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",count:Ft,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",count:Ft,target:"1q",tk:"q",slot:7776e3}},uo=["15m","1h","1d","1w","1mo","1q"],Sn={"15m":240*900,"1h":240*900,"1d":125*86400,"1w":125*86400,"1mo":589*86400,"1q":589*86400},co={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},De={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function fo(e){return e==null?null:e/1e3}function vo(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-Pe[t].slot}function po(e,t){if(!e.length)return[];var n=co[t]||e.length,r={};e.forEach(function(c){r[c.ts]=c});for(var i=e[e.length-1].ts,a=[],s=e[0].ts,o=0;o<n&&s>=i;o++)a.push(r[s]||{ts:s,__blank:!0}),s=vo(s,t);return a}function pt(e,t){var n=fo(e);return n===null?"–":w.num(n,2)}function ho(e){if(e==null)return u`<span>–</span>`;var t=e>0?"val-pos":e<0?"val-neg":"";return u`<span class=${t}>${w.chf(e,!0)}</span>`}function ht(e,t){return e==null?u`<span>–</span>`:u`<span class=${t||""}>${w.chf(e,!1)}</span>`}function go(e,t,n,r){var i=[{key:"ts",label:l("history.col.time")},{key:"imp",label:l("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(i.push({key:"impcost_ht",label:l("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),i.push({key:"impcost_nt",label:l("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):i.push({key:"impcost",label:l("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&i.push({key:"exp",label:l("history.col.feedin"),unit:"[kWh]",align:"right"}),r&&(i.push({key:"batchg",label:l("history.col.batcharge"),unit:"[kWh]",align:"right"}),i.push({key:"batdis",label:l("history.col.batdischarge"),unit:"[kWh]",align:"right"})),i.push({key:"vzev",label:l(e?"history.col.vzevexport":"history.col.vzevimport"),unit:"[kWh]",align:"right"}),i.push({key:"saldo",label:l("history.col.vzevsaldo"),unit:"[CHF]",align:"right"}),e&&(i.push({key:"saving",label:l("history.col.selfuse"),unit:"[CHF]",align:"right"}),i.push({key:"autarky",label:l("history.col.autarky"),unit:"[%]",align:"right"}),i.push({key:"selfuserate",label:l("history.col.selfuserate"),unit:"[%]",align:"right"}),i.push({key:"ersparnis",label:l("history.col.ersparnis"),unit:"[CHF]",align:"right"})),i}function ci(e){return e==null?"–":w.num(e*100,0)+" %"}function br(e){var t=e.revenue_vzev_chf,n=e.cost_vzev_chf;return t===null&&n===null?null:(t||0)-(n||0)}function mo(e,t,n){for(var r=Pe[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var s=e[a+1];if(s){var o=Math.round((e[a].ts-s.ts)/r)-1;o>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function $o(e){var t=e.coverage;if(!t||t.firstE15Ts===null)return null;var n=Math.floor(Date.now()/1e3)-e.span,r=(t.gaps||[]).filter(function(i){return i[1]>=n});return u`
      <p class="verlauf-archive-note">
        <span class="badge badge-inactive">${l("history.archive_badge",{days:t.days})}</span>
        ${r.length?u`
          <span class="verlauf-archive-gap">
            ${l("history.archive_gap",{from:w.time(r[0][0],"1d"),to:w.time(r[r.length-1][1],"1d"),count:r.length})}
          </span>`:null}
      </p>`}function _o(){var e=S(De.res),t=e[0],n=e[1],r=S(0),i=r[0],a=r[1],s=S(De.pageSize),o=s[0],c=s[1],f=S(De.chfMode),v=f[0],h=f[1],d=S(De.chartMode),p=d[0],g=d[1],$=S({records:null,tariffs:{},producer:!1,err:!1,archived:!1,coverage:null}),m=$[0],y=$[1],b=S(!0),M=b[0],I=b[1];De.res=t,De.pageSize=o,De.chfMode=v,De.chartMode=p,X(function(){var A=!1;I(!0);var oe=Pe[t];return Et().then(function(le){var ie=!!(le.available&&le.siteId),Ne=Math.floor(Date.now()/1e3),Qe=Ne-Sn[t];return Promise.all([ie?ds(le.siteId,Qe,Ne).catch(function(){return null}):W.getEnergy("15m",oe.count).catch(function(){return null}),W.getMeta().catch(function(){return null}),W.getProductions().catch(function(){return null}),ie?pr(le.siteId,Qe,Ne).catch(function(){return null}):Promise.resolve(null)]).then(function(we){if(!A){var Le=we[0],Tt=we[1],Pt=we[2],Ot=we[3];if(Le===null){y({records:null,tariffs:{},producer:!1,err:!0,archived:!1,coverage:null}),I(!1);return}Ot&&(Le=ia(Le,Ot));var _n=Tt&&Tt.tariffs||{},bn=Array.isArray(Pt)&&Pt.some(function(Je){return Je&&Je.productionType==="PHOTOVOLTAIC"});y({records:Le,tariffs:_n,producer:bn,err:!1,archived:ie,coverage:le.coverage||null}),I(!1)}})}),function(){A=!0}},[t]);var C=pn(m.tariffs),k=Ge(function(){if(!m.records)return[];var A=m.records;C&&(A=m.records.map(function(le){return na(le,m.tariffs)}));var oe=Ur(A,"15m",Pe[t].target,m.tariffs);return oe.slice().sort(function(le,ie){return ie.ts-le.ts})},[m.records,m.tariffs,t,C]),U=Ge(function(){if(t!=="15m"||!m.records)return{};var A=Ur(m.records,"15m","15m",m.tariffs),oe=Pl(A,3),le={};return oe.forEach(function(ie){le[A[ie].ts]=!0}),le},[m.records,m.tariffs,t]),z=k.some(function(A){return(A.exp_wh||0)>0}),T=k.some(function(A){return A.bat_chg_wh!=null||A.bat_dis_wh!=null}),x=go(m.producer,z,C,T),E=k.some(function(A){return(A.vzev_in_wh||0)>0||(A.vzev_out_wh||0)>0}),P=m.tariffs.co2_g_kwh===void 0||m.tariffs.co2_g_kwh===null||m.tariffs.co2_g_kwh===""?128:Number(m.tariffs.co2_g_kwh),B={tariffs:m.tariffs,vzev:E,co2:P},j=Number(m.tariffs.grid_import_chf_kwh)>0||Number(m.tariffs.grid_feedin_chf_kwh)>0,_=Ge(function(){var A={};return k.forEach(function(oe){A[oe.ts]=Hn([oe],B)}),A},[k,m.tariffs,E,P]),N=Ge(function(){return Hn(k,B)},[k,m.tariffs,E,P]),D=m.archived?!(m.coverage&&m.coverage.firstE15Ts!==null&&m.coverage.firstE15Ts>Math.floor(Date.now()/1e3)-Sn[t]):m.records?m.records.length<Pe[t].count:!0,L=mo(k,t,D),fe=k.length;L.filter(function(A){return A.kind==="row"});var xe=Math.max(1,Math.ceil(fe/o)),Y=Math.min(i,xe-1),ae=Y*o,de=Math.min(ae+o,fe),ye=bo(L,ae,de);function R(A){n(A),a(0)}function q(A){c(+A),a(0)}function J(){var A=x.map(function(ie){return ie.label+(ie.unit?" "+ie.unit:"")}),oe=k.map(function(ie){return ko(ie,x,t,m.producer,_[ie.ts])}),le=cr(A,oe);Io(ts(t),le)}var Q=Ge(function(){return zo(po(k,t),p,v,m.producer)},[k,p,v,m.producer,t]),Ke=Ge(function(){return Co(k,t,m.producer)},[k,t,m.producer]),Re=u`
      <div class="verlauf-actions">
        <${vn} label=${l("history.resolution")} value=${t}
          onChange=${R}
          options=${uo.map(function(A){return{value:A,label:l(Pe[A].label)}})} />
        <${Z} secondary onClick=${J} disabled=${fe===0}>
          ${l("history.export")}<//>
      </div>`;return u`
      <div>
        <${Ae} title=${l("page.history")} subtitle=${l("history.subtitle")}
          actions=${Re} />

        ${m.archived?u`<${$o} coverage=${m.coverage}
          span=${Sn[t]} />`:null}

        ${m.err?u`
          <${F}><p class="placeholder-text">${l("common.nodata")}</p><//>`:null}

        ${!m.err&&M?u`
          <${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}

        ${!m.err&&!M?u`
          <div>
            ${k.length?u`<${Mo} summary=${Ke} kpis=${N} showSaving=${j} />`:null}

            <${F} group="vzev" title=${l("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${l("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(A){return u`<button key=${A[0]} type="button" role="tab"
                      class=${"seg-btn"+(p===A[0]?" seg-btn-active":"")}
                      aria-selected=${p===A[0]}
                      onClick=${function(){g(A[0])}}>${l(A[1])}</button>`})}
                </div>
                ${p==="net"?u`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${v}
                      onChange=${function(A){h(A.target.checked)}} />
                    <span>${l("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${Q.points.length?u`
                <${tr} height=${220}
                  yUnit=${Q.yUnit} xUnit=${l("history.chart.xunit")}
                  yFormat=${Q.yFormat}
                  signedMagnitude=${Q.signedMagnitude}
                  xTickFormat=${function(A){return xo(t,A)}}
                  points=${Q.points} />
                <div class="chart-legend">
                  ${Q.legend.map(function(A,oe){return u`<span key=${oe} class="legend-item"><span class="legend-swatch" style=${"background:"+A.color}></span>${A.label}</span>`})}
                </div>`:u`<p class="placeholder-text">${l("common.nodata")}</p>`}
            <//>

            <${F} title=${l("history.table.title")}
              collapsible collapseKey="verlauf.table">
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${x.map(function(A){return u`<th key=${A.key} class=${A.align==="right"?"ta-r":""}>
                          ${A.label}${A.unit?u`<span class="th-unit"> ${A.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${fe===0?u`
                      <tr><td class="table-empty" colspan=${x.length}>${l("common.nodata")}</td></tr>`:ye.map(function(A){return yo(A,x,t,U,m.producer,_)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${l("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${o}
                        onChange=${function(A){q(A.target.value)}}>
                        ${oo.map(function(A){return u`<option key=${A} value=${A}>${A}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${l("table.pageinfo",{from:fe===0?0:ae+1,to:de,total:fe})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${l("table.prev")}
                      disabled=${Y===0} onClick=${function(){a(Y-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${l("table.next")}
                      disabled=${Y>=xe-1} onClick=${function(){a(Y+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${l("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function bo(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var s=e[a];if(s.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(s)}else i>=t&&i<n&&r.push(s)}return r}function yo(e,t,n,r,i,a){if(e.kind==="boundary")return u`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${l("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return u`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${l("history.gap")}</td></tr>`;var s=e.rec,o=!!r[s.ts],c=a&&a[s.ts]||null;return u`
      <tr key=${"r"+s.ts}>
        ${t.map(function(f){return u`<td key=${f.key} class=${f.align==="right"?"ta-r":""}>
            ${wo(f.key,s,n,o,i,c)}
          </td>`})}
      </tr>`}function wo(e,t,n,r,i,a){switch(e){case"ts":return u`<span class="verlauf-ts">
          ${w.time(t.ts,Pe[n].tk)}
          ${r?u`<span class="peak-mark" title=${l("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?u`<${he} text=${l("history.partial")} />`:null}
        </span>`;case"imp":return pt(t.imp_wh);case"impcost":return ht(t.cost_import_chf,"val-neg");case"impcost_ht":return ht(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return ht(t.cost_import_nt_chf,"val-neg");case"exp":return pt(t.exp_wh);case"batchg":return pt(t.bat_chg_wh);case"batdis":return pt(t.bat_dis_wh);case"vzev":return pt(yr(t,i));case"saldo":return ho(br(t));case"saving":return ht(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return ci(a&&a.autarky);case"selfuserate":return ci(a&&a.selfuse);case"ersparnis":return ht(a&&a.savingChf,a&&a.savingChf>0?"val-pos":"");default:return""}}function yr(e,t){return(t?e.vzev_out_wh:e.vzev_in_wh)||0}function ko(e,t,n,r,i){return t.map(function(a){switch(a.key){case"ts":return w.time(e.ts,Pe[n].tk);case"imp":return gt(e.imp_wh);case"impcost":return rt(e.cost_import_chf);case"impcost_ht":return rt(e.cost_import_ht_chf);case"impcost_nt":return rt(e.cost_import_nt_chf);case"exp":return gt(e.exp_wh);case"batchg":return gt(e.bat_chg_wh);case"batdis":return gt(e.bat_dis_wh);case"vzev":return gt(yr(e,r));case"saldo":return rt(br(e));case"saving":return rt(e.saving_selfuse_chf);case"autarky":return fi(i&&i.autarky);case"selfuserate":return fi(i&&i.selfuse);case"ersparnis":return rt(i&&i.savingChf);default:return""}})}function fi(e){return e==null?"":(e*100).toFixed(0)}function gt(e){return e==null?"":(e/1e3).toFixed(2)}function rt(e){return e==null?"":Number(e).toFixed(2)}function xo(e,t){switch(e){case"15m":case"1h":return w.time(t,"hm");case"1d":case"1w":return w.time(t,"dm");case"1mo":return w.time(t,"1mo");case"1q":return w.time(t,"q");default:return w.time(t,Pe[e].tk)}}function zo(e,t,n,r){var i=e.slice().sort(function(d,p){return d.ts-p.ts}),a=function(d){return w.num(d,2)},s=function(d){return d==null?0:d/1e3};if(t==="bilanz"){var o="var(--c-production)",c="var(--c-export)",f="var(--c-import)",v=i.map(function(d){if(d.__blank)return{t:d.ts,y:null};var p=Rs([{pv_wh:d.pv_wh||0,exp_wh:d.exp_wh||0,imp_wh:d.imp_wh||0}]);return{t:d.ts,bars:[{segments:[{value:s(p.prodSelf),color:o,label:l("history.bilanz.selfuse")},{value:s(p.prodFeedin),color:c,label:l("history.bilanz.feedin")},{value:-s(p.consImport),color:f,label:l("history.bilanz.import")}]}]}});return{points:v,yUnit:"kWh",yFormat:a,signedMagnitude:!0,legend:[{color:o,label:l("history.bilanz.selfuse")},{color:c,label:l("history.bilanz.feedin")},{color:f,label:l("history.bilanz.import")}]}}var h;return n?h=i.map(function(d){if(d.__blank)return{t:d.ts,y:null};var p=br(d);return{t:d.ts,y:p===null?null:p,color:(p||0)<0?"var(--c-import)":"var(--c-vzev)"}}):h=i.map(function(d){if(d.__blank)return{t:d.ts,y:null};var p=d.imp_wh===null||d.imp_wh===void 0?null:d.imp_wh/1e3;if(p&&p>0)return{t:d.ts,y:-p,color:"var(--c-import)",label:l("history.chart.legend_import")};var g=yr(d,r),$=g==null?null:g/1e3;return $&&$>0?{t:d.ts,y:$,color:"var(--c-vzev)",label:l("history.chart.legend_export")}:{t:d.ts,y:p===null?null:0,color:"var(--c-import)",label:l("history.chart.legend_import")}}),{points:h,yUnit:n?"CHF":"kWh",yFormat:n?function(d){return w.chf(d,!0)}:a,signedMagnitude:!n,legend:n?[{color:"var(--c-vzev)",label:l("history.chart.legend_saldo")},{color:"var(--c-import)",label:l("history.chart.legend_import")}]:[{color:"var(--c-vzev)",label:l("history.chart.legend_export")},{color:"var(--c-import)",label:l("history.chart.legend_import")}]}}function Co(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(v,h){return v.ts-h.ts}),s=function(v){return a.map(function(h){return h[v]===null||h[v]===void 0?null:h[v]/1e3})},o=i&&e.length>=13,c=function(v,h){var d=s(h);return{name:v,avg:An(d),trend:Nl(d),yoy:o?Tl(d):null}},f=[c(l("history.col.gridimport"),"imp_wh")];return n&&f.push(c(l("history.summary.pv"),"pv_wh")),{periodLabel:l(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:f}}function So(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return u`
      <div class="summary-cell">
        <span class="summary-label">${l("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":w.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function Mo(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":w.num(i*100,0)+" %"}return u`
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
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":w.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return u`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":w.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${So(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?u`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${l("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+w.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function Io(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function Eo(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const No=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],To=(function(){const e={};return No.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function Po(e){const t=To[Eo(e)];return t===void 0?null:t}function Oo(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function xa(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function Ao(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function Ro(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function Lo(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function Do(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function di(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var Fo=1e4,Wo=90;function Kn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function vi(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:Po(t)}})}function za(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function Ie(e,t){var n=za(e,t);return n?Kn(n.raw):null}function it(e){return function(t){return t.i18nKey===e}}function Ca(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function pi(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function Sa(e,t,n){var r=Ie(e,Ca(t,n));return r!==null?r:xa(Ie(e,pi(t,n,"in")),Ie(e,pi(t,n,"out")))}function Uo(e,t){var n=null;return[1,2,3].forEach(function(r){var i=Sa(e,t,r);i!==null&&(n=(n||0)+i)}),n}function wr(e){var t=Uo(e,"power"),n=Ie(e,it("meter.f.power_net")),r=!1;if(n===null){var i=Ie(e,it("meter.f.power_import")),a=Ie(e,it("meter.f.power_export"));n=xa(i,a),n!==null&&(r=!0)}var s=Ao(n,t);return n!==null?{net:n*s,derived:r,scale:s}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function hi(e){return u`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${he} text=${e.tip} />
      </span>`}function Bo(){return u`<span class="meter-tag meter-tag-derived">${l("meter.derived")}</span>`}function jo(){return u`
      <span class="meter-tag meter-tag-register">${l("meter.register")}
        <${he} text=${l("meter.tip.register")} /></span>`}function Ma(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-export)":""}function Ho(e){var t=e.resolved,n=wr(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,s=l(a?"meter.importing":"meter.exporting");return u`
      <${F} group="grid" title=${l("meter.section.power")}
        tooltip=${l("meter.tip.net")}
        badge=${i?Bo():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+Ma(r)}>
            ${w.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${s}</span>
        </div>
      <//>`}var Ko=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function Vo(e){var t=e.resolved,n=[1,2,3],r=Ko.map(function(v){var h=n.map(function(p){return Sa(t,v.role,p)}),d=h.some(function(p){return p!==null});return{m:v,cells:h,any:d}}).filter(function(v){return v.any});if(r.length===0)return null;var i=r.filter(function(v){return v.m.role==="power"})[0],a=i?Oo(i.cells):null,s=null,o=r.filter(function(v){return v.m.role==="pf"})[0];if(i&&!o){var c=r.filter(function(v){return v.m.role==="reactive"})[0];if(c){var f=n.map(function(v,h){return Ro(i.cells[h],c.cells[h])});f.some(function(v){return v!==null})&&(s=f)}}return u`
      <${F} title=${l("meter.section.phases")} tooltip=${l("meter.tip.phases")}
        collapsible collapseKey="zaehler.phases">
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
              ${r.map(function(v){return u`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${l(v.m.key)}
                      ${v.m.unit?u`<span class="meter-unit">[${v.m.unit}]</span>`:null}
                      ${v.m.tip?u`<${he} text=${l(v.m.tip)} />`:null}
                    </th>
                    ${v.cells.map(function(h){var d=v.m.signed?Ma(h):"";return u`<td style=${d?"color:"+d:""}>
                        ${h===null?"–":w.num(h,v.m.prec)}</td>`})}
                  </tr>`})}
              ${s?u`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${hi} tip=${l("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${s.map(function(v){return u`<td>${v===null?"–":w.num(v,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?u`
          <div class="meter-imbalance">
            <${hi} tip=${l("meter.tip.imbalance")}>${l("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${w.w(a)}</span>
          </div>`:null}
      <//>`}function qo(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=za(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?Kn(r.raw):null;return u`
      <${F} group="production" title=${l("meter.section.registers")}
        tooltip=${l("meter.tip.registers")} collapsible collapseKey="zaehler.registers"
        badge=${r&&(i===1||i===2)?u`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${l("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${l(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?u`
          <dl class="meter-reg-list">
            ${n.map(function(a){var s=Kn(a.raw);return u`
                <div class="meter-reg">
                  <dt>${l(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${jo()}</dt>
                  <dd>${s===null?String(a.raw):w.num(s,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function Yo(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?w.num(i.min,1)+" / "+w.num(i.max,1):"–"}return u`
      <${F} title=${l("meter.section.minmax")} subtitle=${l("meter.since_open")}
        tooltip=${l("meter.tip.minmax")} collapsible collapseKey="zaehler.minmax">
        <dl class="meter-reg-list">
          ${[1,2,3].map(function(i){return t.u[i]?u`
              <div class="meter-reg">
                <dt>${l("meter.voltage")} ${l("meter.phase",{n:i})} <span class="meter-unit">[V]</span></dt>
                <dd>${r(t.u[i])}</dd>
              </div>`:null})}
          ${t.peakImp?u`
            <div class="meter-reg">
              <dt>${l("meter.peak_import")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-import)"}>${w.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?u`
            <div class="meter-reg">
              <dt>${l("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-export)"}>${w.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function Go(e){var t=e.resolved,n=wr(t).scale;function r(o){return n===1e3&&o.group==="power"&&o.unit==="W"?"kW":o.unit}var i=t.filter(function(o){return o.desc}),a=t.filter(function(o){return!o.desc});function s(o){var c=!!o.desc,f=o.raw!==null&&typeof o.raw=="object"?JSON.stringify(o.raw):String(o.raw);return u`
        <tr>
          <td class="meter-raw-name">${o.name}</td>
          <td class="meter-raw-val">${f}</td>
          <td class="meter-raw-unit">${c&&o.desc.unit?r(o.desc):""}</td>
          <td class="meter-raw-label">${l(c?o.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return u`
      <${F} title=${l("meter.section.raw")}
        collapsible collapseKey="zaehler.raw" defaultOpen=${!1}>
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
              ${i.map(s)}
              ${a.length?u`
                <tr class="meter-raw-sep"><td colspan="4">${l("meter.raw.other")}</td></tr>
                ${a.map(s)}`:null}
            </tbody>
          </table>
        </div>
      <//>`}function Zo(){var e=S(void 0),t=e[0],n=e[1],r=S(null),i=r[0],a=r[1],s=S(!1),o=s[0],c=s[1],f=S(null),v=f[0],h=f[1],d=Ee([]),p=Ee({u:{},peakImp:0,peakExp:0});X(function(){return W.poll(function(){W.getMeter().then(function(m){if(n(m&&m.values?m.values:null),h(m&&typeof m.now=="number"?m.now:Math.floor(Date.now()/1e3)),!(!m||!m.values)){var y=vi(m.values),b=p.current;[1,2,3].forEach(function(x){var E=Ie(y,Ca("voltage",x));E!==null&&(b.u[x]=Do(b.u[x],E))});var M=wr(y),I=M.net,C=Ie(y,it("meter.f.power_import")),k=Ie(y,it("meter.f.power_export"));C!==null&&(C=C*M.scale),k!==null&&(k=k*M.scale),C===null&&I!==null&&(C=I>0?I:0),k===null&&I!==null&&(k=I<0?-I:0),C!==null&&(b.peakImp=di(b.peakImp,C)),k!==null&&(b.peakExp=di(b.peakExp,k)),a({u:Object.assign({},b.u),peakImp:b.peakImp,peakExp:b.peakExp});var U=Ie(y,it("meter.f.energy_import")),z=I!==null?I>0:C!==null&&C>0,T=d.current;for(T.push({reg:U,importing:z});T.length>Wo;)T.shift();c(Lo(T))}}).catch(function(){})},Fo)},[]);var g=t?vi(t):[],$=v?Math.max(0,Math.floor(Date.now()/1e3)-v):null;return u`
      <div>
        <${Ae} title=${l("page.meter")} subtitle=${l("meter.subtitle")}
          actions=${v?u`
            <span class="meter-updated">
              ${l("meter.updated",{time:w.time(v,"hm")})}
              ${$!==null?u`<span class="meter-age"> · ${l("meter.age",{s:$})}</span>`:null}
            </span>`:null} />

        ${o?u`<div class="banner banner-warn">${l("meter.stale")}</div>`:null}

        ${t===void 0?u`<${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}
        ${t===null?u`<${F}><p class="placeholder-text">${l("meter.empty")}</p><//>`:null}
        ${t?u`
          <${Ho} resolved=${g} />
          <${Vo} resolved=${g} />
          <${qo} resolved=${g} />
          <${Yo} stats=${i} />
          <${Go} resolved=${g} />`:null}
      </div>`}var Xo=1e4;function Qo(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function Jo(e){var t=e.items;return u`
      <${F} title=${l("modbus.section.raw")}>
        <div class="meter-table-wrap">
          <table class="meter-table meter-raw-table">
            <thead>
              <tr>
                <th>${l("modbus.raw.name")}</th>
                <th>${l("modbus.raw.value")}</th>
                <th>${l("modbus.raw.unit")}</th>
                <th>${l("modbus.raw.register")}</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(function(n){var r=Qo(n.currentPower);return u`
                  <tr>
                    <td class="meter-raw-name">${n.friendlyName||n.id}</td>
                    <td class="meter-raw-val">${r===null?l("modbus.raw.no_value"):w.num(r,3)}</td>
                    <td class="meter-raw-unit">${n.unitLabel||""}</td>
                    <td class="meter-raw-label">${n.register}</td>
                  </tr>`})}
            </tbody>
          </table>
        </div>
      <//>`}function eu(){var e=S(void 0),t=e[0],n=e[1],r=S(null),i=r[0],a=r[1];X(function(){return W.poll(function(){W.getModbus().then(function(o){n(Array.isArray(o)?o:[]),a(Math.floor(Date.now()/1e3))}).catch(function(){})},Xo)},[]);var s=i?Math.max(0,Math.floor(Date.now()/1e3)-i):null;return u`
      <div>
        <${Ae} title=${l("page.modbus")} subtitle=${l("modbus.subtitle")}
          actions=${i?u`
            <span class="meter-updated">
              ${l("meter.updated",{time:w.time(i,"hm")})}
              ${s!==null?u`<span class="meter-age"> · ${l("meter.age",{s})}</span>`:null}
            </span>`:null} />

        ${t===void 0?u`<${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}
        ${t&&t.length===0?u`<${F}><p class="placeholder-text">${l("modbus.empty")}</p><//>`:null}
        ${t&&t.length?u`<${Jo} items=${t} />`:null}
      </div>`}var tu=50;function nu(e,t){if(!e||!e.data)return[];var n=e.producer_id,r=n&&e.data[n],i={},a=[],s=r?[r]:Object.keys(e.data).map(function(o){return e.data[o]});return s.forEach(function(o){if(o)for(var c=0;c+2<o.length;c+=3){var f=o[c];t&&(f<t[0]||f>=t[1])||i[f]||(i[f]=!0,a.push(f))}}),a.sort(function(o,c){return c-o}),a}function ru(e,t,n){var r=Bl(e,t,n),i=w.time(e,"hm"),a=w.time(e+900,"hm");return!r||r.prodWh<=0?l("explain.noprod",{from:i,to:a}):l("explain.sentence",{from:i,to:a,prod:w.wh(r.prodWh),member:w.wh(r.memberImpWh),total:w.wh(r.totalImpWh),share:w.num(r.sharePct,0),alloc:w.wh(r.allocatedWh)})}function Ia(e){var t=S(0),n=t[0],r=t[1],i=nu(e.raw,e.range),a=i.slice(0,(n+1)*tu),s=a.length<i.length;return u`
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
              ${a.map(function(o){return u`<li key=${o} class="explain-slot">${ru(o,e.raw,e.memberId)}</li>`})}
            </ul>
            ${s?u`
              <button class="explain-more" onClick=${function(){r(n+1)}}>
                ${l("explain.more")}
              </button>`:null}`}
      </div>`}var gi=!1,iu=2*3600,au=u`<svg viewBox="0 0 24 24" class="vz-house" aria-hidden="true"><path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="13" width="4" height="6" fill="currentColor"/></svg>`,lu=u`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16l-3.6.6.6-3.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,su=u`<svg viewBox="0 0 20 20" class="vz-plus" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,mi=u`<svg viewBox="0 0 24 24" class="vz-grid-ico" aria-hidden="true"><path d="M6 3v18M18 3v18M6 8h12M6 14h12M3 6l3 2 3-2M15 6l3 2 3-2M3 16l3 2 3-2M15 16l3 2 3-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function mt(e){return e&&(e.type==="PRODUCER"||e.typ==="P")}function ou(e){if(!e||!e.length)return{};var t=e[e.length-1];return t&&t.members||{}}function Wt(e){var t=e.member,n=t.name||t.id,r=e.noData;return u`
      <div class=${"vz-card"+(e.own?" vz-card-own":"")+(e.producer?" vz-card-producer":"")}>
        <button class="vz-edit" aria-label=${l("vzev.edit")}
          onClick=${function(){Ue.navigate("/vzev/mitglied/"+encodeURIComponent(t.id))}}>
          ${lu}
        </button>
        <div class="vz-house-wrap">${au}</div>
        <span class="vz-name">${n}</span>
        <span class="vz-type">${l(e.producer?"vzev.type.producer":"vzev.type.consumer")}</span>
        ${e.own?u`<span class="vz-ownbadge">${l("vzev.own")}</span>`:null}
        ${r?u`
          <span class="vz-nodata" role="status">
            ${r.lastTs?l("vzev.nodata.badge",{time:w.time(r.lastTs,"15m")}):l("vzev.nodata.never")}
          </span>`:null}
        ${!e.own&&e.onRemove?u`
          <button class="vz-remove" onClick=${e.onRemove}>${l("vzev.remove")}</button>`:null}
      </div>`}function uu(e){var t=e.wh,n="vz-chip vz-chip-"+(e.dir==="grid"?"grid":"vzev");return u`
      <span class=${n}>
        <span class="vz-chip-dir">${l(e.dir==="grid"?"vzev.flow.fromgrid":"vzev.flow.fromproducer")}</span>
        <span class="vz-chip-val">${w.wh(t)}</span>
      </span>`}function cu(){var e=S(null),t=e[0],n=e[1],r=S({}),i=r[0],a=r[1],s=S([]),o=s[0],c=s[1],f=S(!1),v=f[0],h=f[1],d=S(null),p=d[0],g=d[1],$=S(gi),m=$[0],y=$[1],b=S(null),M=b[0],I=b[1],C=Ee(!0);function k(){W.getVzevMembersList().then(function(R){C.current&&(n(R),h(!1))}).catch(function(){C.current&&(n([]),h(!0))}),W.getVzevRaw().then(function(R){C.current&&g(R||null)}).catch(function(){C.current&&g(null)})}X(function(){C.current=!0,k(),W.getVzevDiscovered().then(function(q){C.current&&c(q)}).catch(function(){C.current&&c([])});var R=W.poll(function(){W.getVzevFlows("15m",1).then(function(q){C.current&&a(ou(q&&q.flows))}).catch(function(){})},2e3);return function(){C.current=!1,R()}},[]);function U(){gi=!0,y(!0)}function z(R){W.get("/api/vzev/members?action=remove&id="+encodeURIComponent(R.id)).then(function(){ee(l("vzev.removed"),{type:"info"}),k()}).catch(function(){ee(l("vzev.saveerror"),{type:"error"})})}var T=!!(p&&p.self_id!=null&&p.self_id===p.producer_id),x=T?u`
      <${Z} secondary onClick=${function(){Ue.navigate("/vzev/abrechnung")}}>
        ${l("vzev.billing")} ›
      <//>`:null,E=u`<${Ae} title=${l("page.vzev")} subtitle=${l("vzev.subtitle")} actions=${x} />`;if(t===null)return u`<div>${E}<${F}><p class="placeholder-text">${l("common.loading")}</p><//></div>`;var P=null,B=[];t.forEach(function(R){R.own||R.is_own?P=R:B.push(R)}),t.forEach(function(R){mt(R)});var j=u`
      <${F} class="vz-discovery">
        <div class="vz-discovery-head">
          <h2 class="card-title">${l("vzev.discovery.title")}</h2>
          <span class="card-subtitle">${l("vzev.discovery.hint")}</span>
        </div>
        ${o.length===0?u`<p class="placeholder-text">${l("vzev.discovery.empty")}</p>`:u`
            <ul class="vz-discovery-list">
              ${o.map(function(R){return u`
                  <li key=${R.id} class="vz-discovery-item">
                    <span class="vz-disc-name">${R.name||R.id}</span>
                    <span class="vz-disc-meta">${R.id}${R.url?" · "+R.url:""}</span>
                    <${Z} small onClick=${function(){Ue.navigate("/vzev/mitglied/"+encodeURIComponent(R.id))}}>
                      ${su} ${l("vzev.add")}
                    <//>
                  </li>`})}
            </ul>`}
      <//>`;function _(R){var q=i[R.id];return typeof q=="number"?q:null}var N=0;if(p&&p.data)for(var D in p.data){var L=Kr(p,D);L&&L>N&&(N=L)}function fe(R){if(!p||!p.data)return null;var q=Kr(p,R.id),J=N||Math.floor(Date.now()/1e3);return q===null?{lastTs:null}:J-q>iu?{lastTs:q}:null}var xe=m?null:u`
      <${F} class="vz-info">
        <div class="vz-info-head">
          <h2 class="card-title">${l("vzev.info.title")}</h2>
          <button class="vz-info-close" aria-label=${l("common.close")} onClick=${U}>×</button>
        </div>
        <p class="vz-info-body">${l("vzev.info.body")}</p>
        <${Z} small secondary onClick=${U}>${l("vzev.info.dismiss")}<//>
      <//>`,Y=M?(function(){for(var R=0;R<t.length;R++)if(t[R].id===M)return t[R];return null})():null,ae=Y&&p?u`
      <${F} class="vz-drill">
        <${Ia} raw=${p} memberId=${M}
          title=${l("explain.title")+" – "+(Y.name||M)}
          onClose=${function(){I(null)}} />
      <//>`:null;function de(){var R=B;return u`
        <${F} group="vzev" class="vz-graph-card">
          <div class="vz-graph" role="img" aria-label=${l("vzev.graph.aria")}>
            <div class="vz-ring">
              ${R.length===0?u`<p class="placeholder-text vz-ring-empty">${l("vzev.empty")}</p>`:R.map(function(q){var J=mt(q),Q=_(q);return u`
                      <div key=${q.id} class="vz-node vz-node-peer">
                        <${Wt} member=${q} producer=${J} noData=${fe(q)}
                          onRemove=${function(){z(q)}} />
                        ${Q!==null&&Q>0?u`
                          <span class=${"vz-flow "+(J?"vz-flow-vzev":"vz-flow-grid")}>
                            <span class="vz-flow-arrow">${J?"→":"←"}</span>
                            ${w.wh(Q)}
                          </span>`:null}
                        ${!J&&p?u`
                          <button class="vz-explain-btn" onClick=${function(){I(q.id)}}>
                            ${l("explain.open")}
                          </button>`:null}
                      </div>`})}
            </div>

            ${P?u`
              <div class="vz-node vz-node-own">
                <${Wt} member=${P} own=${!0} producer=${mt(P)} />
              </div>`:null}

            <div class="vz-arrow-grid" aria-hidden="true">
              <span class="vz-arrow-line"></span>
            </div>

            <div class="vz-node vz-node-net">
              <div class="vz-netnode">
                <div class="vz-grid-icowrap">${mi}</div>
                <span class="vz-net-label">${l("vzev.net")}</span>
              </div>
            </div>
          </div>
        <//>`}function ye(){return u`
        <div class="vz-list">
          ${P?u`
            <div class="vz-list-item vz-list-own">
              <${Wt} member=${P} own=${!0} producer=${mt(P)} />
            </div>`:null}
          ${B.map(function(R){var q=mt(R),J=_(R);return u`
              <div key=${R.id} class="vz-list-item">
                <${Wt} member=${R} producer=${q} noData=${fe(R)}
                  onRemove=${function(){z(R)}} />
                ${J!==null&&J>0?u`<${uu} dir=${q?"producer":"grid"} wh=${J} />`:null}
                ${!q&&p?u`
                  <button class="vz-explain-btn" onClick=${function(){I(R.id)}}>
                    ${l("explain.open")}
                  </button>`:null}
              </div>`})}
          <div class="vz-list-item vz-list-net">
            <div class="vz-netnode vz-netnode-row">
              <div class="vz-grid-icowrap">${mi}</div>
              <span class="vz-net-label">${l("vzev.net")}</span>
            </div>
          </div>
        </div>`}return u`
      <div>
        ${E}
        ${v?u`<div class="banner banner-warn">${l("vzev.loaderror")}</div>`:null}
        ${xe}
        <div class="vz-graph-wrap">${de()}</div>
        <div class="vz-list-wrap">${ye()}</div>
        ${ae}
        ${j}
      </div>`}function $i(e){return e&&(e.type==="PRODUCER"||e.typ==="P")?"P":"C"}function fu(e){if(e==null||e===0)return"";var t=new Date(e*1e3);function n(r){return(r<10?"0":"")+r}return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function du(e){if(!e)return null;var t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e));if(!t)return null;var n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),0,0,0,0);return Math.floor(n.getTime()/1e3)}function vu(e){var t=e.params&&e.params.id||null,n=S(""),r=n[0],i=n[1],a=S(""),s=a[0],o=a[1],c=S("C"),f=c[0],v=c[1],h=S(""),d=h[0],p=h[1],g=S(""),$=g[0],m=g[1],y=S([]),b=y[0],M=y[1],I=S(!!t),C=I[0],k=I[1],U=S(!1),z=U[0],T=U[1],x=S(!1),E=x[0],P=x[1],B=S(""),j=B[0],_=B[1];X(function(){var Y=!1;return Promise.all([W.getVzevMembersList().catch(function(){return[]}),t?W.getVzevDiscovered().catch(function(){return[]}):Promise.resolve([])]).then(function(ae){if(!Y){var de=ae[0]||[],ye=ae[1]||[];M(de);for(var R=null,q=0;q<de.length;q++)if(de[q].id===t){R=de[q];break}if(R)k(!0),i(R.name||""),o(R.location||R.loc||""),v($i(R)),p(R.metering_point||""),m(fu(R.entry_ts));else if(t){k(!1);for(var J=null,Q=0;Q<ye.length;Q++)if(ye[Q].id===t){J=ye[Q];break}J&&(i(J.name||""),o(J.location||J.loc||""),v($i(J)))}T(!0)}}),function(){Y=!0}},[t]);function N(){if(f!=="P")return!1;for(var Y=0;Y<b.length;Y++){var ae=b[Y];if(ae.id!==t&&(ae.type==="PRODUCER"||ae.typ==="P"))return!0}return!1}function D(){if(_(""),!r.trim()){_(l("vzev.form.err.name"));return}if(N()){_(l("vzev.form.err.producer"));return}P(!0);var Y="/api/vzev/members?action=upsert&id="+encodeURIComponent(t||"")+"&name="+encodeURIComponent(r.trim())+"&loc="+encodeURIComponent(s.trim())+"&typ="+encodeURIComponent(f)+"&mp="+encodeURIComponent(d.trim()),ae=du($);ae!==null&&(Y+="&entry="+ae),W.get(Y).then(function(){ee(l("vzev.saved"),{type:"info"}),Ue.navigate("/vzev")}).catch(function(){P(!1),ee(l("vzev.saveerror"),{type:"error"})})}function L(){P(!0),W.get("/api/vzev/members?action=remove&id="+encodeURIComponent(t)).then(function(){ee(l("vzev.removed"),{type:"info"}),Ue.navigate("/vzev")}).catch(function(){P(!1),ee(l("vzev.saveerror"),{type:"error"})})}var fe=l(C?"vzev.form.edit":"vzev.form.add"),xe=u`<${Ae} title=${fe} subtitle=${l("vzev.form.subtitle")} />`;return z?u`
      <div>
        ${xe}
        <${F} class="vz-form-card">
          <div class="vz-form">
            <${Yt} label=${l("vzev.form.name")} value=${r}
              placeholder=${l("vzev.form.name.ph")}
              onInput=${function(Y){i(Y)}} />
            <${Yt} label=${l("vzev.form.loc")} value=${s}
              placeholder=${l("vzev.form.loc.ph")}
              onInput=${function(Y){o(Y)}} />
            <${vn} label=${l("vzev.form.typ")} value=${f}
              onChange=${function(Y){v(Y),_("")}}
              options=${[{value:"C",label:l("vzev.type.consumer")},{value:"P",label:l("vzev.type.producer")}]} />

            <${Yt} label=${l("vzev.form.metering_point")} value=${d}
              placeholder=${l("vzev.form.metering_point.ph")} maxlength=${40}
              onInput=${function(Y){p(Y)}} />
            <p class="vz-form-hint">${l("vzev.form.metering_point.hint")}</p>

            <label class="field field-block">
              <span class="field-label">${l("vzev.form.entry_ts")}</span>
              <input class="textfield" type="date" value=${$}
                onInput=${function(Y){m(Y.target.value)}} />
            </label>
            <p class="vz-form-hint">${l("vzev.form.entry_ts.hint")}</p>

            ${j?u`<p class="vz-form-err" role="alert">${j}</p>`:null}

            <div class="vz-form-actions">
              <${Z} onClick=${D} disabled=${E}>${l("vzev.form.save")}<//>
              <${Z} secondary onClick=${function(){Ue.navigate("/vzev")}}
                disabled=${E}>${l("vzev.form.cancel")}<//>
              ${C?u`
                <${Z} danger onClick=${L} disabled=${E}>${l("vzev.remove")}<//>`:null}
            </div>
          </div>
        <//>
      </div>`:u`<div>${xe}<${F}><p class="placeholder-text">${l("common.loading")}</p><//></div>`}var Vn="var(--c-production)",pu="var(--c-vzev)";function Ea(e){return!e||!e.expected?null:Math.round(e.complete/e.expected*100)}function un(e){var t=Ea(e);return t!==null&&t<100}function hu(e){e=e||{};var t=Number(e.vzev_import_chf_kwh);return isNaN(t)?null:t}function _i(e,t){return e+"-Q"+t}function Mn(e,t){return Math.floor(new Date(e,t,1,0,0,0,0).getTime()/1e3)}function gu(e){for(var t=new Date,n=t.getFullYear(),r=Math.floor(t.getMonth()/3)+1,i=[],a=0;a<7;a++){for(var s=r-a,o=n;s<1;)s+=4,o-=1;i.push({value:_i(o,s),label:_i(o,s)})}return i}function mu(e){var t=/^(\d{4})-Q([1-4])$/.exec(String(e||""));return t?{year:parseInt(t[1],10),q:parseInt(t[2],10)}:null}function $u(e){var t=mu(e);if(!t)return[];var n=(t.q-1)*3;return[Mn(t.year,n),Mn(t.year,n+1),Mn(t.year,n+2)]}function bi(e,t,n,r){var i=$u(t),a=Array.isArray(e)?e:[];return a.map(function(s,o){var c;s==null?c=0:typeof s=="number"?c=s:c=n(s);var f=s&&typeof s=="object"&&typeof s.ts=="number"?s.ts:i[o]!==void 0?i[o]:(i[0]||0)+o*2592e3;return{t:f,y:c==null||isNaN(c)?0:c,color:r}})}function yi(e){return typeof e.wh=="number"?e.wh/1e3:typeof e.kwh=="number"?e.kwh:typeof e.y=="number"?e.y:0}function _u(e){var t=e.quality;if(!t||!t.expected)return null;var n=Ea(t),r=e.byId||{},i=[],a=t.perMember||{};for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){var o=(a[s].expected||0)-(a[s].have||0);if(o>0){var c=r[s]&&r[s].name||s;i.push(l("billing.quality.member_missing",{name:c,n:o}))}}return u`
      <${F} class="billing-quality">
        <div class="billing-quality-head">
          <h2 class="card-title">${l("billing.quality.title")}
            <${he} text=${l("tooltip.provisorisch")} /></h2>
          ${un(t)?u`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        </div>
        <p class="billing-quality-line">${l("billing.quality.complete",{pct:n})}</p>
        ${t.provisional>0?u`<p class="billing-quality-line">${l("billing.quality.provisional",{n:t.provisional})}</p>`:null}
        ${t.missing>0?u`<p class="billing-quality-line">${l("billing.quality.missing",{n:t.missing})}</p>`:null}
        ${i.length===0&&!un(t)?u`<p class="billing-quality-line billing-quality-ok">${l("billing.quality.ok")}</p>`:null}
        ${i.map(function(f,v){return u`<p key=${v} class="billing-quality-line">${f}</p>`})}
      <//>`}function bu(e){var t=e.member,n=e.tariffs||{},r=e.period,i=hu(n),a=typeof t.wh=="number"?t.wh/1e3:null,s=t.entry_ts&&r&&t.entry_ts>r[0]?t.entry_ts:r?r[0]:null,o=e.capReference,c=o!=null&&i!==null&&i>o?l("billing.detail.method_effektiv"):l("billing.detail.method_pauschal");function f(v,h){return u`<div class="stmt-line"><span class="stmt-key">${v}</span><span class="stmt-val">${h}</span></div>`}return u`
      <div class="stmt">
        ${f(l("billing.detail.period"),r?w.time(s,"1d")+" – "+w.time(r[1]-1,"1d"):"–")}
        ${f(l("billing.detail.member"),(t.name||t.id)+(t.location?", "+t.location:""))}
        ${t.metering_point?f(u`${l("billing.detail.meteringpoint")} <${he} text=${l("tooltip.zaehlpunkt")} />`,t.metering_point):null}
        ${f(l("billing.detail.energy"),a===null?"–":w.num(a,2)+" kWh")}
        ${typeof t.ht_wh=="number"?f(l("billing.detail.energy_ht"),w.num(t.ht_wh/1e3,2)+" kWh"):null}
        ${typeof t.nt_wh=="number"?f(l("billing.detail.energy_nt"),w.num(t.nt_wh/1e3,2)+" kWh"):null}
        ${f(l("billing.detail.tariff"),i===null?"–":w.num(i,2)+" CHF/kWh")}
        ${f(l("billing.detail.amount"),typeof t.chf=="number"?w.chf(t.chf):"–")}
        <p class="stmt-residual">${l("billing.detail.residual")}</p>
        ${f(u`${l("billing.detail.key")} <${he} text=${l("tooltip.verteilschluessel")} />`,l("billing.detail.key_value"))}
        ${f(l("billing.detail.method"),c)}
      </div>`}function wi(e){var t=e.wh!==null&&e.wh!==void 0?e.wh/1e3:null,n=S(!1),r=n[0],i=n[1],a=S(!1),s=a[0],o=a[1],c=!!e.member;return u`
      <${F} group="vzev" title=${e.title} subtitle=${e.subtitle}>
        ${e.provisional?u`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        <div class="billing-metrics">
          <div class="billing-metric">
            <span class="billing-metric-label">${e.kwhLabel}</span>
            <span class="billing-metric-value" style=${"color:"+Vn}>
              ${t===null?"–":w.num(t,2)+" kWh"}
            </span>
          </div>
          <div class="billing-metric">
            <span class="billing-metric-label">${e.chfLabel}</span>
            <span class="billing-metric-value" style=${"color:"+pu}>
              ${e.chf===null||e.chf===void 0?"–":w.chf(e.chf)}
            </span>
          </div>
        </div>
        ${e.note?u`<p class="billing-card-note">${e.note}</p>`:null}
        <${tr} height=${180} yUnit="kWh" xUnit=${l("billing.axis.month")}
          xTickFormat=${function(f){return w.time(f,"1mo")}}
          yFormat=${function(f){return w.num(f,1)+" kWh"}}
          points=${e.points} />
        ${c?u`
          <div class="billing-card-actions no-print">
            <${Z} small secondary onClick=${function(){i(!r)}}>
              ${l(r?"billing.member.collapse":"billing.member.expand")}
            <//>
            ${e.raw?u`
              <${Z} small secondary onClick=${function(){o(!s)}}>
                ${l("explain.open")}
              <//>`:null}
          </div>`:null}
        ${c&&r?u`
          <${bu} member=${e.member} tariffs=${e.tariffs}
            period=${e.period} capReference=${e.capReference} />`:null}
        ${c&&s&&e.raw?u`
          <${Ia} raw=${e.raw} memberId=${e.member.id}
            range=${e.period} onClose=${function(){o(!1)}} />`:null}
      <//>`}function yu(e){var t=e.data,n=e.quarter,r=t.total||{},i=bi(r.months,n,yi,Vn),a=Array.isArray(t.members)?t.members:[];return u`
      <div class="billing-grid">
        <${wi}
          title=${l("billing.total.title")}
          subtitle=${n}
          kwhLabel=${l("billing.producer.energy")}
          chfLabel=${l("billing.producer.profit")}
          wh=${typeof r.exp_wh=="number"?r.exp_wh:null}
          chf=${typeof r.revenue_chf=="number"?r.revenue_chf:null}
          points=${i} />
        ${a.map(function(s){return u`
            <${wi} key=${s.id}
              title=${s.name||s.id}
              kwhLabel=${l("billing.producer.energy")}
              chfLabel=${l("billing.producer.profit")}
              wh=${typeof s.wh=="number"?s.wh:null}
              chf=${typeof s.chf=="number"?s.chf:null}
              points=${bi(s.months,n,yi,Vn)}
              member=${s} tariffs=${t.tariffs} period=${t.range}
              raw=${t.raw} capReference=${e.capReference}
              provisional=${e.provisional} />`})}
      </div>`}function wu(e){var t=e.info||{},n=t.representative_name,r=t.connection_point_id;return!n&&!r?null:u`
      <${F} class="billing-header-card">
        ${n?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.rep")}</span> ${n}${t.representative_contact?" · "+t.representative_contact:""}</p>`:null}
        ${r?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.connpoint")}</span> ${r}</p>`:null}
      <//>`}function ku(e,t){var n=Array.isArray(e.members)?e.members:e.self?[e.self]:[],r=un(e.quality),i=[l("billing.detail.member"),l("billing.detail.meteringpoint"),l("billing.detail.energy")+" [kWh]",l("billing.detail.energy_ht")+" [kWh]",l("billing.detail.energy_nt")+" [kWh]",l("billing.detail.amount")+" [CHF]",l("billing.provisional.badge")],a=n.map(function(v){return[v.name||v.id,v.metering_point||"",typeof v.wh=="number"?(v.wh/1e3).toFixed(2):"",typeof v.ht_wh=="number"?(v.ht_wh/1e3).toFixed(2):"",typeof v.nt_wh=="number"?(v.nt_wh/1e3).toFixed(2):"",typeof v.chf=="number"?v.chf.toFixed(2):"",r?"1":"0"]}),s=cr(i,a),o=new Blob([s],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(o),f=document.createElement("a");f.href=c,f.download="gplug-abrechnung-"+t+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(c)},0)}function xu(){var e=gu(),t=S(e.length?e[0].value:""),n=t[0],r=t[1],i=S(null),a=i[0],s=i[1],o=S("loading"),c=o[0],f=o[1];X(function(){var b=!1;return f("loading"),Et().then(function(M){var I=aa(n);return!M.available||!M.siteId||!I?null:pr(M.siteId,I[0],I[1]-1).then(function(C){var k=C&&C.data?Object.keys(C.data):[];return C&&C.producer_id&&k.length?C:null},function(){return null})}).then(function(M){if(!b)return W.getVzevBilling(n,M).then(function(I){if(!b){if(!I||typeof I!="object"){s(null),f("empty");return}s(I),f("ready")}}).catch(function(){b||(s(null),f("error"))})}),function(){b=!0}},[n]);function v(b){if(!b)return!1;var M=String(b.role||b.type||"").toUpperCase();if(M==="PRODUCER"||M==="P")return!0;if(M==="CONSUMER"||M==="C")return!1;var I=b.self||{};return b.self||typeof I.cost_grid_chf=="number"||typeof b.cost_grid_chf=="number"||typeof b.import_wh=="number"?!1:!!(b.total||Array.isArray(b.members)&&b.members.length)}var h=a&&a.tariffs?la(a.tariffs):null,d=a?un(a.quality):!1,p={};a&&Array.isArray(a.members)&&a.members.forEach(function(b){b&&b.id!==void 0&&(p[b.id]=b)});var g=!!a&&v(a),$;c==="loading"?$=u`<${F}><p class="placeholder-text">${l("common.loading")}</p><//>`:c==="error"?$=u`<${F}><p class="placeholder-text">${l("billing.error")}</p><//>`:c==="empty"||!a?$=u`<${F}><p class="placeholder-text">${l("common.nodata")}</p><//>`:g?$=u`<${yu} data=${a} quarter=${n}
        capReference=${h} provisional=${d} />`:$=u`<${F}><p class="placeholder-text">${l("billing.producer_only")}</p><//>`;var m=c==="ready"&&g,y=u`
      <div class="billing-actions">
        <${vn} label=${l("billing.quarter")} value=${n}
          options=${e}
          onChange=${function(b){r(b)}} />
        ${m?u`
          <${Z} secondary small onClick=${function(){ku(a,n)}}>${l("billing.export")}<//>
          <${Z} secondary small onClick=${function(){window.print()}}>${l("billing.print")}<//>`:null}
      </div>`;return u`
      <div class="billing-page">
        <${Ae} title=${l("page.billing")} subtitle=${l("billing.subtitle")}
          actions=${y} />
        ${m?u`<${wu} info=${a.info} />`:null}
        ${$}
        ${m?u`<${_u} quality=${a.quality} byId=${p} />`:null}
        <${F} class="billing-note-card">
          <p class="billing-note">${l("billing.note")}</p>
        <//>
      </div>`}var zu=["site","loads","productions","grid","modbus","tariffs","vzev","daten","gplug","pro"],Cu={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",modbus:"modbus",tarife:"tariffs",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},Su={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",modbus:"modbus",tariffs:"tarife",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},Mu={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",modbus:"settings.tab.modbus",tariffs:"settings.tab.tariffs",vzev:"settings.tab.vzev",daten:"settings.tab.data",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},Iu={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},Eu=["simulator","shelly","homeassistant","gplug","modbustcp"],Na=["simulator","homeassistant","gplug","modbustcp"],qn=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],cn=["PHOTOVOLTAIC","BATTERY"];function Nu(e){return e==null||String(e).trim()===""?!1:cn.indexOf(String(e).toUpperCase())<0}var Ta=["W","kW"],Pa=[{value:"3",label:"3 – Read Holding Register (0x03)"},{value:"4",label:"4 – Read Input Register (0x04)"}],Oa=["float32","int16","uint16","int32","uint32"],kr=["Wh","kWh"],Aa=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh"],Tu={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,vzev_export_chf_kwh:.22,vzev_import_chf_kwh:.22,co2_g_kwh:128};function V(e){return e==null||String(e).trim()===""}function me(e){return!V(e)&&!isNaN(Number(e))}function Ze(e){return V(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function Ra(e,t){var n={};V(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!me(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!me(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};Ze(i.on)||(n["url.on"]="settings.err.url"),Ze(i.off)||(n["url.off"]="settings.err.url"),Ze(i.status)||(n["url.status"]="settings.err.url")}else r==="modbustcp"?mn(e,n):(Ze(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&V(e.token)&&(n.token="settings.err.token"));return n}function Ce(e){return!V(e)&&/\s/.test(String(e))}function at(e){if(V(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<-10||t>10}function lt(e){return!V(e)&&(!me(e)||Number(e)<=0)}function La(e){if(V(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<=0}function xr(e){return String(e||"").toUpperCase()==="BATTERY"}function Pu(e,t){lt(e.capacity)&&(t.capacity="settings.err.capacity"),lt(e.maxChargePower)&&(t.maxChargePower="settings.err.bat_power"),lt(e.maxDischargePower)&&(t.maxDischargePower="settings.err.bat_power"),e.integration==="gplug"?(Ce(e.soc_field)&&(t.soc_field="settings.err.soc_field"),Ce(e.soc_scale_field)&&(t.soc_scale_field="settings.err.scale_field"),at(e.soc_scale_base)&&(t.soc_scale_base="settings.err.scale_base")):!V(e.soc_url)&&!Ze(e.soc_url)&&(t.soc_url="settings.err.url")}function Da(e,t){V(e.field)&&(t.field="settings.err.field"),Ce(e.sensor)&&(t.sensor="settings.err.sensor"),Ce(e.scale_field)&&(t.scale_field="settings.err.scale_field"),at(e.scale_base)&&(t.scale_base="settings.err.scale_base"),lt(e.max_power)&&(t.max_power="settings.err.max_power"),Ce(e.energy_field)&&(t.energy_field="settings.err.energy_field"),La(e.stale_after)&&(t.stale_after="settings.err.stale_after"),!V(e.energy_dimension)&&kr.indexOf(e.energy_dimension)<0&&(t.energy_dimension="settings.err.energy_dimension"),Ce(e.energy_scale_field)&&(t.energy_scale_field="settings.err.scale_field"),at(e.energy_scale_base)&&(t.energy_scale_base="settings.err.scale_base")}var Ou=["sensor","scale_field","scale_base","max_power","energy_field","stale_after","energy_dimension","energy_scale_field","energy_scale_base"],Au=["scale_base","max_power","stale_after","energy_scale_base"],ki=["capacity","maxChargePower","maxDischargePower","soc_field","soc_scale_field","soc_scale_base","soc_url"],Ru=["capacity","maxChargePower","maxDischargePower","soc_scale_base"];function xi(e){if(!Xe(e))return e;var t=null,n=e.productionType!==void 0&&!xr(e.productionType);return Ou.concat(ki).forEach(function(r){r in e&&(V(e[r])||n&&ki.indexOf(r)>=0?(t=t||Object.assign({},e),delete t[r]):(Au.indexOf(r)>=0||Ru.indexOf(r)>=0)&&typeof e[r]!="number"&&me(e[r])&&(t=t||Object.assign({},e),t[r]=Number(e[r])))}),"invert"in e&&(e.invert!==!0||n)&&(t=t||Object.assign({},e),delete t.invert),t||e}function In(e){if(!Xe(e)||e.integration!=="modbustcp")return e;var t=Object.assign({},e);return t.function=Number(t.function||3),V(t.register)||(t.register=Number(t.register)),V(t.unit)?delete t.unit:t.unit=Number(t.unit),V(t.scale)||Number(t.scale)===1?delete t.scale:t.scale=Number(t.scale),t.swap_words!==!0&&delete t.swap_words,t}function Fa(e,t){var n={};return V(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?Da(e,n):e.integration==="modbustcp"?mn(e,n):(Ze(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&V(e.token)&&(n.token="settings.err.token")),xr(e.productionType)&&Pu(e,n),n}function Wa(e){var t={};return e.integration==="gplug"?Da(e,t):e.integration==="modbustcp"?mn(e,t):(Ze(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&V(e.token)&&(t.token="settings.err.token")),t}function Ua(e){return V(e)?!1:/^[^\s:]+:\d{1,5}$/.test(String(e).trim())}function zi(e,t,n){if(!me(e))return!1;var r=Number(e);return Math.floor(r)===r&&r>=t&&(n===void 0||r<=n)}function mn(e,t){Ua(e.url)||(t.url="settings.err.modbus_url"),zi(e.register,0)||(t.register="settings.err.modbus_register"),!V(e.unit)&&!zi(e.unit,1,247)&&(t.unit="settings.err.modbus_unit"),!V(e.scale)&&(!me(e.scale)||Number(e.scale)===0)&&(t.scale="settings.err.modbus_scale")}function Ba(e,t){var n={};return V(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),mn(e,n),n}function Lu(e){var t={};return V(e.id)&&(t.id="settings.err.id_required"),V(e.name)&&(t.name="settings.err.name_required"),t}function Du(e){var t={};Aa.forEach(function(f){(!me(e[f])||Number(e[f])<0)&&(t[f]="settings.err.rate")});var n=e.co2_g_kwh;(!me(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!V(r),s=!V(i);if((a||s)&&(!a||!s?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!me(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!me(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var o=0;o<e.ht_windows.length;o++){var c=e.ht_windows[o]||{};(!me(c.from)||!me(c.to)||Number(c.from)<0||Number(c.to)>24||Number(c.from)>Number(c.to))&&(t["win."+o]="settings.err.win_hours")}return t}function St(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function $e(e){return typeof e=="number"&&!isNaN(e)}function Xe(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Yn(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var K={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours",sensor:"settings.err.sensor",scale_field:"settings.err.scale_field",scale_base:"settings.err.scale_base",max_power:"settings.err.max_power",energy_field:"settings.err.energy_field",stale_after:"settings.err.stale_after",energy_dimension:"settings.err.energy_dimension",capacity:"settings.err.capacity",bat_power:"settings.err.bat_power",soc_field:"settings.err.soc_field",invert:"settings.err.invert",modbus_register:"settings.err.modbus_register"},Fu=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh","co2_g_kwh"];function Ci(e,t,n){(typeof e.url!="string"||!Ua(e.url))&&n.push({path:t+".url",key:K.url}),(e.register===void 0||e.register===null||!$e(e.register)||e.register<0||Math.floor(e.register)!==e.register)&&n.push({path:t+".register",key:K.modbus_register})}function Wu(e,t,n){if(typeof e=="string"||e===void 0||e===null){Yn(e)||n.push({path:t,key:K.url});return}if(Xe(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!Yn(e[r]))&&n.push({path:t+"."+r,key:K.url});return}n.push({path:t,key:K.url})}function Ut(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:K.array}),null;for(var i=!0,a=0;a<r.length;a++)Xe(r[a])||(n.push({path:t+"["+a+"]",key:K.array}),i=!1);return i?r:null}function Uu(e){var t=[];if(!Xe(e))return[{path:"",key:K.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:K.id});var n=Ut(e,"loads",t),r=Ut(e,"productions",t),i=Ut(e,"grid",t),a=e.modbusRegisters!==void 0?Ut(e,"modbusRegisters",t):null;if(a)for(var s={},o=0;o<a.length;o++){var c=a[o],f="modbusRegisters["+o+"]",v=c.id;typeof v!="string"||v.length===0?t.push({path:f+".id",key:K.id}):s[v]?t.push({path:f+".id",key:K.dup}):s[v]=!0,(c.register===void 0||c.register===null||!$e(c.register)||c.register<0||Math.floor(c.register)!==c.register)&&t.push({path:f+".register",key:K.modbus_register})}if([["productions",r],["grid",i]].forEach(function(C){(C[1]||[]).forEach(function(k,U){var z=C[0]+"["+U+"]";if(k.integration==="modbustcp"){Ci(k,z,t);return}var T=k.sensor;T!=null&&(typeof T!="string"||Ce(T))&&t.push({path:z+".sensor",key:K.sensor});var x=k.scale_field;x!=null&&(typeof x!="string"||Ce(x))&&t.push({path:z+".scale_field",key:K.scale_field});var E=k.scale_base;E!=null&&(!$e(E)||at(E))&&t.push({path:z+".scale_base",key:K.scale_base});var P=k.max_power;P!=null&&(!$e(P)||lt(P))&&t.push({path:z+".max_power",key:K.max_power});var B=k.energy_field;B!=null&&(typeof B!="string"||Ce(B))&&t.push({path:z+".energy_field",key:K.energy_field});var j=k.stale_after;j!=null&&(!$e(j)||La(j))&&t.push({path:z+".stale_after",key:K.stale_after});var _=k.energy_dimension;_!=null&&kr.indexOf(_)<0&&t.push({path:z+".energy_dimension",key:K.energy_dimension});var N=k.energy_scale_field;N!=null&&(typeof N!="string"||Ce(N))&&t.push({path:z+".energy_scale_field",key:K.scale_field});var D=k.energy_scale_base;D!=null&&(!$e(D)||at(D))&&t.push({path:z+".energy_scale_base",key:K.scale_base})})}),(r||[]).forEach(function(C,k){var U="productions["+k+"]";[["capacity",K.capacity],["maxChargePower",K.bat_power],["maxDischargePower",K.bat_power]].forEach(function(T){var x=C[T[0]];x!=null&&(!$e(x)||lt(x))&&t.push({path:U+"."+T[0],key:T[1]})}),[["soc_field",K.soc_field],["soc_scale_field",K.scale_field]].forEach(function(T){var x=C[T[0]];x!=null&&(typeof x!="string"||Ce(x))&&t.push({path:U+"."+T[0],key:T[1]})});var z=C.soc_scale_base;z!=null&&(!$e(z)||at(z))&&t.push({path:U+".soc_scale_base",key:K.scale_base}),C.soc_url!==void 0&&C.soc_url!==null&&(typeof C.soc_url!="string"||!Yn(C.soc_url))&&t.push({path:U+".soc_url",key:K.url}),C.invert!==void 0&&typeof C.invert!="boolean"&&t.push({path:U+".invert",key:K.invert})}),n)for(var h={},d=0;d<n.length;d++){var p=n[d],g="loads["+d+"]",$=p.id;typeof $!="string"||$.length===0?t.push({path:g+".id",key:K.id}):h[$]?t.push({path:g+".id",key:K.dup}):h[$]=!0,p.currentPower!==void 0&&p.currentPower!==null&&!$e(p.currentPower)&&t.push({path:g+".currentPower",key:K.power}),p.priority!==void 0&&p.priority!==null&&(!$e(p.priority)||p.priority<1)&&t.push({path:g+".priority",key:K.priority}),p.integration==="modbustcp"?Ci(p,g,t):p.url!==void 0&&p.url!==null&&Wu(p.url,g+".url",t)}var m=e.tariffs;if(m!=null){if(!Xe(m))return t.push({path:"tariffs",key:K.object}),t;Fu.forEach(function(C){var k=m[C];k!=null&&(!$e(k)||k<0)&&t.push({path:"tariffs."+C,key:K.rate})});var y=m.ht_windows;if(y!=null)if(!Array.isArray(y))t.push({path:"tariffs.ht_windows",key:K.array});else for(var b=0;b<y.length;b++){var M=y[b],I="tariffs.ht_windows["+b+"]";(!Xe(M)||!$e(M.from)||!$e(M.to)||M.from<0||M.to>24||M.from>M.to)&&t.push({path:I,key:K.win})}}return t}function nn(e){var t=V(e)?"":String(e).trim();return t?l("settings.scale_field_hint",{name:t.charAt(0)+"sf"}):""}function O(e){var t=e.error;return u`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?u`<span class="field-error">${l(t)}</span>`:null}
      </label>`}function ke(e){return u`
      <label class="field field-block">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function $n(e){return u`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${l("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function Oe(e){return e.map(function(t){return{value:t,label:t}})}function Bu(e){var t=e.cfg,n=Lu(t);function r(i){return function(a){e.patch(i,a)}}return u`
      <${F} group="grid">
        <p class="settings-scope">${l("settings.scope_note")}</p>
        <div class="settings-form">
          <${O} label=${l("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${O} label=${l("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${O} label=${l("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${O} label=${l("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${Nt} disabled=${St(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function ju(e){var t=e.selected>=0;return u`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${Z} small onClick=${e.onAdd}>${l("settings.add")}<//>
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
      </div>`}function Nt(e){return u`
      <div class="settings-actions">
        <${Z} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?l("settings.saving"):l("settings.save")}
        <//>
      </div>`}function zr(e){var t=e.item,n=e.errors;function r(i){return function(a){e.patch(i,a)}}return u`
      <${O} label=${l("settings.modbus.url")} value=${t.url} placeholder="192.168.0.102:502"
        error=${n.url} onInput=${r("url")} />
      <${O} label=${l("settings.modbus.unit")} type="number" step="1" min="1" max="247"
        value=${t.unit} placeholder="1" error=${n.unit} onInput=${r("unit")} />
      <${ke} label=${l("settings.modbus.function")} value=${String(t.function||3)}
        options=${Pa} onChange=${r("function")} />
      <${O} label=${l("settings.modbus.register")} type="number" step="1" min="0"
        value=${t.register} error=${n.register} onInput=${r("register")} />
      <${ke} label=${l("settings.modbus.dtype")} value=${t.dtype||"float32"}
        options=${Oe(Oa)} onChange=${r("dtype")} />
      <${O} label=${l("settings.modbus.scale")} type="number" step="any" value=${t.scale}
        placeholder="1" error=${n.scale} onInput=${r("scale")} />
      <label class="toggle-wrap">
        <input type="checkbox" class="toggle" checked=${t.swap_words===!0}
          onChange=${function(i){e.patch("swap_words",i.target.checked)}} />
        <span>${l("settings.modbus.swap_words")}</span>
      </label>`}function Hu(e){var t=e.item,n=e.otherIds,r=Ra(t,n);function i(c){return function(f){e.patch(c,f)}}function a(c){return function(f){var v=Object.assign({},t.url||{});v[c]=f,e.patch("url",v)}}var s=t.integration||"simulator",o=s==="shelly"?t.url||{}:{};return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${$n} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${O} label=${l("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${O} label=${l("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${O} label=${l("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${ke} label=${l("settings.load.type")} value=${t.loadType||qn[0]}
            options=${Oe(qn)} onChange=${i("loadType")} />
          <${O} label=${l("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${ke} label=${l("settings.integration")} value=${s}
            options=${Oe(Eu)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${s==="shelly"?u`
            <${O} label=${l("settings.url.on")} value=${o.on} error=${r["url.on"]} onInput=${a("on")} />
            <${O} label=${l("settings.url.off")} value=${o.off} error=${r["url.off"]} onInput=${a("off")} />
            <${O} label=${l("settings.url.status")} value=${o.status} error=${r["url.status"]} onInput=${a("status")} />`:s==="modbustcp"?u`
            <${zr} item=${t} errors=${r} patch=${e.patch} />`:u`
            <${O} label=${l("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${s==="homeassistant"?u`
              <${O} label=${l("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function Ku(e){var t=e.item,n=Fa(t,e.otherIds);function r(a){return function(s){e.patch(a,s)}}var i=t.integration||"simulator";return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${$n} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${O} label=${l("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${O} label=${l("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${ke} label=${l("settings.prod.type")} value=${t.productionType||cn[0]}
            options=${cn.map(function(a){return{value:a,label:l(Iu[a])}})}
            onChange=${r("productionType")} />
          ${Nu(t.productionType)?u`
            <div class="settings-warn" role="status">${l("settings.prodtype.unknown_warn")}</div>`:null}
          <${ke} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${Oe(Ta)} onChange=${r("dimension")} />
          <${ke} label=${l("settings.integration")} value=${i}
            options=${Oe(Na)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${O} label=${l("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${O} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${O} label=${l("settings.scale_field")} value=${t.scale_field} placeholder=${nn(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${O} label=${l("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${O} label=${l("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${O} label=${l("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${O} label=${l("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />
            <${ke} label=${l("settings.energy_dimension")} value=${t.energy_dimension||""}
              options=${[{value:"",label:l("settings.energy_dimension_auto")}].concat(Oe(kr))}
              onChange=${r("energy_dimension")} />
            <${O} label=${l("settings.energy_scale_field")} value=${t.energy_scale_field} placeholder=${nn(t.energy_field)} error=${n.energy_scale_field} onInput=${r("energy_scale_field")} />
            <${O} label=${l("settings.energy_scale_base")} type="number" step="1" min="-10" value=${t.energy_scale_base} placeholder="0" error=${n.energy_scale_base} onInput=${r("energy_scale_base")} />`:i==="modbustcp"?u`
            <${zr} item=${t} errors=${n} patch=${e.patch} />`:u`
            <${O} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${O} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
        ${xr(t.productionType)?u`
          <div class="settings-subhead">${l("settings.battery")}</div>
          <p class="settings-scope">${l("settings.battery_hint")}</p>
          <div class="settings-form">
            <${O} label=${l("settings.capacity")} type="number" step="1" min="1" value=${t.capacity} error=${n.capacity} onInput=${r("capacity")} />
            <${O} label=${l("settings.max_charge_power")} type="number" step="1" min="1" value=${t.maxChargePower} error=${n.maxChargePower} onInput=${r("maxChargePower")} />
            <${O} label=${l("settings.max_discharge_power")} type="number" step="1" min="1" value=${t.maxDischargePower} error=${n.maxDischargePower} onInput=${r("maxDischargePower")} />
            ${i==="gplug"?u`
              <${O} label=${l("settings.soc_field")} value=${t.soc_field} placeholder="ChaState" error=${n.soc_field} onInput=${r("soc_field")} />
              <${O} label=${l("settings.soc_scale_field")} value=${t.soc_scale_field} placeholder=${nn(t.soc_field)} error=${n.soc_scale_field} onInput=${r("soc_scale_field")} />
              <${O} label=${l("settings.soc_scale_base")} type="number" step="1" min="-10" value=${t.soc_scale_base} placeholder="0" error=${n.soc_scale_base} onInput=${r("soc_scale_base")} />`:i!=="simulator"?u`
              <${O} label=${l("settings.soc_url")} value=${t.soc_url} error=${n.soc_url} onInput=${r("soc_url")} />`:null}
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle" checked=${t.invert===!0}
                onChange=${function(a){e.patch("invert",a.target.checked)}} />
              <span>${l("settings.invert")}</span>
            </label>
          </div>`:null}
      </div>`}function Vu(e){var t=e.item,n=Wa(t);function r(s){return function(o){e.patch(s,o)}}var i=t.integration||"simulator",a=t.id==="to"?l("settings.grid.to"):l("settings.grid.from");return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${ke} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${Oe(Ta)} onChange=${r("dimension")} />
          <${ke} label=${l("settings.integration")} value=${i}
            options=${Oe(Na)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${O} label=${l("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${O} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${O} label=${l("settings.scale_field")} value=${t.scale_field} placeholder=${nn(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${O} label=${l("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${O} label=${l("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${O} label=${l("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${O} label=${l("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />`:i==="modbustcp"?u`
            <${zr} item=${t} errors=${n} patch=${e.patch} />`:u`
            <${O} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${O} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function qu(e){var t=e.item,n=Ba(t,e.otherIds);function r(i){return function(a){e.patch(i,a)}}return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${$n} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${O} label=${l("settings.modbus.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${O} label=${l("settings.modbus.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${O} label=${l("settings.modbus.url")} value=${t.url} placeholder="192.168.0.102:502"
            error=${n.url} onInput=${r("url")} />
          <${O} label=${l("settings.modbus.unit")} type="number" step="1" min="1" max="247"
            value=${t.unit} placeholder="1" error=${n.unit} onInput=${r("unit")} />
          <${ke} label=${l("settings.modbus.function")} value=${String(t.function||3)}
            options=${Pa} onChange=${r("function")} />
          <${O} label=${l("settings.modbus.register")} type="number" step="1" min="0"
            value=${t.register} error=${n.register} onInput=${r("register")} />
          <${ke} label=${l("settings.modbus.dtype")} value=${t.dtype||"float32"}
            options=${Oe(Oa)} onChange=${r("dtype")} />
          <${O} label=${l("settings.modbus.scale")} type="number" step="any" value=${t.scale}
            placeholder="1" error=${n.scale} onInput=${r("scale")} />
          <${O} label=${l("settings.modbus.unit_label")} value=${t.unitLabel} placeholder="kWh"
            onInput=${r("unitLabel")} />
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.swap_words===!0}
              onChange=${function(i){e.patch("swap_words",i.target.checked)}} />
            <span>${l("settings.modbus.swap_words")}</span>
          </label>
        </div>
      </div>`}function Bt(e){var t=S(-1),n=t[0],r=t[1],i=e.items;function a(v,h){var d=i.slice(),p=Object.assign({},d[n]);p[v]=h,d[n]=p,e.onChange(d)}function s(){var v=i.concat([e.blank()]);e.onChange(v),r(v.length-1)}function o(){var v=i[n],h=(e.persistedIds||[]).indexOf(String(v&&v.id))!==-1;if(!(h&&!window.confirm(l(e.confirmKey)))){var d=i.slice();d.splice(n,1),r(-1),e.onDelete&&e.onDelete(v),e.onChange(d)}}var c=i.some(function(v,h){var d=i.filter(function(p,g){return g!==h}).map(function(p){return String(p.id)});return St(e.validate(v,d))}),f=n>=0&&i[n]?u`<${e.Detail} item=${i[n]} patch=${a} onDelete=${o}
          otherIds=${i.filter(function(v,h){return h!==n}).map(function(v){return String(v.id)})} />`:null;return u`
      <${F} group=${e.group}>
        <${ju}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:s}
          detail=${f} />
        <${Nt} disabled=${c} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function Yu(e){var t=e.tariffs,n=Du(t);function r(g){return function($){e.patch(g,$)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(g,$,m){var y=i.map(function(b,M){if(M!==g)return b;var I=Object.assign({},b);return I[$]=m,I});e.setWindows(y)}function s(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function o(g){e.setWindows(i.filter(function($,m){return m!==g}))}var c=me(t.grid_import_ht_chf_kwh)&&me(t.grid_import_nt_chf_kwh),f=c&&i.length===0,v=Gu(t),h=la(v),d=Number(t.vzev_import_chf_kwh),p=h!==null&&!isNaN(d)&&d>h;return u`
      <${F} group="vzev">
        <div class="settings-subhead">${l("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${O} label=${l("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${l("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${O} label=${l("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${O} label=${l("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${l("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(g,$){return u`
            <div key=${$} class="settings-form ht-window-row">
              <${O} label=${l("settings.tariff.win_days")} value=${g.days}
                placeholder=${l("settings.tariff.win_days.ph")} onInput=${function(m){a($,"days",m)}} />
              <${O} label=${l("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${g.from} error=${n["win."+$]} onInput=${function(m){a($,"from",Si(m))}} />
              <${O} label=${l("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${g.to} onInput=${function(m){a($,"to",Si(m))}} />
              <${$n} onClick=${function(){o($)}} />
            </div>`})}
        <${Z} small secondary onClick=${s}>${l("settings.tariff.win_add")}<//>
        ${f?u`<p class="settings-warn">${l("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${l("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${O} label=${l("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${O} label=${l("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${l("settings.tariff.cap_group")}</div>
        <div class="settings-form">
          <${O} label=${l("settings.tariff.vzev_export_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_export_chf_kwh} error=${n.vzev_export_chf_kwh} onInput=${r("vzev_export_chf_kwh")} />
          <${O} label=${l("settings.tariff.vzev_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_import_chf_kwh} error=${n.vzev_import_chf_kwh} onInput=${r("vzev_import_chf_kwh")} />
        </div>
        ${h!==null?u`
          <p class="settings-scope">
            ${l("settings.tariff.cap_ref",{ref:h.toFixed(2)})}
            <${he} text=${l("tooltip.cap")} />
          </p>
          ${p?u`<p class="settings-warn">${l("settings.tariff.cap_warn")}</p>`:u`<p class="settings-ok">${l("settings.tariff.cap_ok")}</p>`}`:null}
        <div class="settings-subhead">${l("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${O} label=${l("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${Nt} disabled=${St(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function Si(e){return V(e)?void 0:Number(e)}function Gu(e){var t={};return["grid_import_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(n){V(e[n])||(t[n]=Number(e[n]))}),Array.isArray(e.ht_windows)&&(t.ht_windows=e.ht_windows),t}function Zu(){var e=S(null),t=e[0],n=e[1],r=S({producers:0,members:0}),i=r[0],a=r[1],s=S(!1),o=s[0],c=s[1];X(function(){var h=!1;return Promise.all([W.getVzevInfo().catch(function(){return{}}),W.get("/api/vzev/members",{optional:!0,vzevBypass:!0}).catch(function(){return{members:[]}})]).then(function(d){if(!h){var p=d[0]||{};n({representative_name:p.representative_name||"",representative_contact:p.representative_contact||"",connection_point_id:p.connection_point_id||"",enabled:!!p.enabled});var g=d[1]&&d[1].members||[],$=0;g.forEach(function(m){(m.type==="PRODUCER"||m.typ==="P")&&$++}),a({producers:$,members:g.length})}}),function(){h=!0}},[]);function f(h){return function(d){n(function(p){var g=Object.assign({},p);return g[h]=d,g})}}function v(){o||!t||(c(!0),W.setVzevInfo(t).then(function(){ee(l("settings.vzev.saved"),{type:"info"})}).catch(function(){ee(l("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}return t?u`
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
            <span class="field-label">${l("settings.vzev.representative_name")} <${he} text=${l("tooltip.vertreter")} /></span>
            <input class="textfield" type="text" value=${t.representative_name}
              onInput=${function(h){f("representative_name")(h.target.value)}} />
          </label>
          <${O} label=${l("settings.vzev.representative_contact")}
            value=${t.representative_contact} onInput=${f("representative_contact")} />
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.connection_point_id")} <${he} text=${l("tooltip.connpoint")} /></span>
            <input class="textfield" type="text" value=${t.connection_point_id}
              onInput=${function(h){f("connection_point_id")(h.target.value)}} />
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.counts",{producers:i.producers,members:i.members})}</p>
        <${Nt} disabled=${!1} onSave=${v} saving=${o} />
      <//>`:u`<${F} group="vzev"><p class="placeholder-text">${l("settings.loading")}</p><//>`}function Mi(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!V(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function Xu(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return u`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${Z} small secondary onClick=${function(){e.onUse(1)}}>${l("settings.gplug.scan_use1")}<//>
          <${Z} small secondary onClick=${function(){e.onUse(2)}}>${l("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function Qu(){var e=S(null),t=e[0],n=e[1],r=S(!1),i=r[0],a=r[1],s=S(!1),o=s[0],c=s[1],f=S(!1),v=f[0],h=f[1],d=S({scanning:!1,networks:null,error:!1}),p=d[0],g=d[1];function $(){a(!1),n(null),W.getWifiConfig().then(function(k){n({ssid1:k.ssid1,password1:"",ssid2:k.ssid2,password2:""})}).catch(function(){a(!0)})}X(function(){$()},[]);function m(k){return function(U){n(function(z){var T=Object.assign({},z);return T[k]=U,T})}}function y(){v||!window.confirm(l("settings.gplug.restart_confirm"))||(h(!0),W.restartDevice().then(function(){ee(l("settings.gplug.restart_success"),{type:"info"})}).catch(function(){ee(l("settings.gplug.restart_error"),{type:"error"})}).then(function(){h(!1)}))}function b(){o||!t||St(Mi(t))||(c(!0),W.setWifiConfig(t).then(function(){ee(l("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(k){ee(k&&k.message||l("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}function M(){g({scanning:!0,networks:null,error:!1}),W.wifiScanStart().catch(function(){});var k=0;function U(){k+=1,W.wifiScanResult().then(function(z){var T=z&&(z.WiFiScan!==void 0?z.WiFiScan:z.WifiScan);if(T&&typeof T=="object"){var x=Object.keys(T).map(function(E){return T[E]});x.sort(function(E,P){return(Number(P.RSSI)||0)-(Number(E.RSSI)||0)}),g({scanning:!1,networks:x,error:!1});return}if(k>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(U,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(U,1e3)}function I(k,U){n(function(z){var T=Object.assign({},z);return T["ssid"+k]=U,T})}if(i)return u`
        <${F} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Z} secondary small onClick=${$}>${l("settings.retry")}<//>
        <//>`;if(!t)return u`<${F} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var C=Mi(t);return u`
      <div>
        <${F} group="grid" title=${l("settings.gplug.restart_title")}>
          <p class="settings-scope">${l("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${Z} danger disabled=${v} onClick=${y}>
              ${l(v?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${l("settings.gplug.wifi_title")}>
          <p class="settings-scope">${l("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${l("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${O} label=${l("settings.gplug.ssid1")} value=${t.ssid1} error=${C.ssid1} onInput=${m("ssid1")} />
            <${O} label=${l("settings.gplug.password1")} type="password" value=${t.password1} error=${C.password1}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${m("password1")} />
          </div>
          <div class="settings-subhead">${l("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${O} label=${l("settings.gplug.ssid2")} value=${t.ssid2} error=${C.ssid2} onInput=${m("ssid2")} />
            <${O} label=${l("settings.gplug.password2")} type="password" value=${t.password2} error=${C.password2}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${m("password2")} />
          </div>

          <div class="settings-subhead">${l("settings.gplug.scan_button")}</div>
          <${Z} secondary small disabled=${p.scanning} onClick=${M}>
            ${p.scanning?l("settings.gplug.scanning"):l("settings.gplug.scan_button")}
          <//>
          ${p.error?u`<p class="settings-warn">${l("settings.gplug.scan_error")}</p>`:null}
          ${p.networks&&p.networks.length===0?u`<p class="placeholder-text">${l("settings.gplug.scan_empty")}</p>`:null}
          ${p.networks&&p.networks.length>0?u`
            <div class="wifi-scan-list">
              ${p.networks.map(function(k,U){return u`<${Xu} key=${U} net=${k} onUse=${function(z){I(z,k.SSId)}} />`})}
            </div>`:null}

          <${Nt} disabled=${St(C)} onSave=${b} saving=${o} />
        <//>
      </div>`}function Ju(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function Ii(e){return e==null||isNaN(e)?"–":e<1024?e+" B":e<1024*1024?Math.round(e/1024)+" KB":Math.round(e/(1024*1024)*10)/10+" MB"}function ec(){var e=S(null),t=e[0],n=e[1],r=S(Bn()),i=r[0],a=r[1],s=S(!1),o=s[0],c=s[1];function f(g){if(!g.available||!g.siteId){n(null);return}gr(g.siteId).then(n,function(){n(null)})}X(function(){var g=ga(function($){a(Object.assign({},$)),f($)});return Et().then(function($){a(Object.assign({},$)),f($)}),g},[]);function v(){o||(c(!0),zs(W).then(function(g){f(g),ee(l("settings.data.synced"),{type:"info"})},function(){ee(l("settings.data.sync_error"),{type:"error"})}).then(function(){c(!1)}))}function h(){i.siteId&&ys(i.siteId).then(function(g){Ju("gplug-archiv-"+i.siteId+".csv",g)},function(){ee(l("settings.data.export_error"),{type:"error"})})}function d(g){var $=g.target&&g.target.files&&g.target.files[0];$&&(g.target.value="",$.text().then(function(m){return ws(m,i.siteId)}).then(function(m){n(m),ee(l("settings.data.import_ok",{count:m.count}),{type:"info"})},function(m){ee(m&&m.message||l("settings.data.import_error"),{type:"error"})}))}if(i.available===!1)return u`
        <${F} group="grid" title=${l("settings.data.title")}>
          <p class="settings-warn">${l("settings.data.unavailable")}</p>
          <p class="settings-scope">${l("settings.data.multi_client")}</p>
        <//>`;if(!t)return u`<${F} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var p=t.estimate;return u`
      <div>
        <${F} group="grid" title=${l("settings.data.title")}>
          <p class="settings-scope">${l("settings.data.desc")}</p>
          <dl class="data-facts">
            <dt>${l("settings.data.site")}</dt><dd>${t.siteId}</dd>
            <dt>${l("settings.data.range")}</dt>
            <dd>${t.firstE15Ts===null?l("common.nodata"):w.time(t.firstE15Ts,"1d")+" – "+w.time(t.lastE15Ts,"1d")}</dd>
            <dt>${l("settings.data.records")}</dt><dd>${t.count} (${t.days} ${l("settings.data.days")})</dd>
            <dt>${l("settings.data.last_sync")}</dt>
            <dd>${t.syncedAt?w.time(t.syncedAt,"15m"):"–"}</dd>
            <dt>${l("settings.data.storage")}</dt>
            <dd>${p?Ii(p.usage)+" / "+Ii(p.quota):"–"}</dd>
          </dl>

          <div class="settings-subhead">${l("settings.data.gaps")}</div>
          ${t.gaps&&t.gaps.length?u`
            <ul class="data-gaps">
              ${t.gaps.map(function(g,$){return u`<li key=${$}>${w.time(g[0],"15m")} – ${w.time(g[1],"15m")}</li>`})}
            </ul>`:u`<p class="settings-scope">${l("settings.data.no_gaps")}</p>`}

          <div class="settings-actions">
            <${Z} secondary small disabled=${o} onClick=${v}>
              ${l(o?"settings.data.syncing":"settings.data.sync")}
            <//>
          </div>
        <//>

        <${F} group="grid" title=${l("settings.data.transfer_title")}>
          <p class="settings-scope">${l("settings.data.multi_client")}</p>
          <div class="settings-actions">
            <${Z} secondary small onClick=${h}>${l("settings.data.export")}<//>
            <label class="btn btn-secondary btn-small data-import-label">
              ${l("settings.data.import")}
              <input type="file" accept=".csv,text/csv" class="data-import-input"
                onChange=${d} />
            </label>
          </div>
        <//>
      </div>`}function tc(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function nc(e){var t=S(null),n=t[0],r=t[1],i=S(!1),a=i[0],s=i[1],o=S(!1),c=o[0],f=o[1];function v(){s(!1),r(null),W.getConfigRaw().then(function(g){r(tc(g))}).catch(function(){s(!0)})}X(function(){v()},[]);var h=null,d=[];if(n!==null)try{d=Uu(JSON.parse(n))}catch(g){h=g.message}function p(){if(!(c||h)){var g;try{g=JSON.parse(n)}catch{return}f(!0),W.postConfig(g).then(function(){ee(l("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),v()}).catch(function($){ee($&&$.message||l("settings.save_error"),{type:"error"})}).then(function(){f(!1)})}}return a?u`
        <${F} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Z} secondary small onClick=${v}>${l("settings.retry")}<//>
        <//>`:n===null?u`<${F} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`:u`
      <${F} group="grid">
        <p class="settings-scope">${l("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${h?u`<p class="settings-warn">${l("settings.pro.invalid_json",{msg:h})}</p>`:null}
        ${d.length?u`
          <div class="settings-warn">
            <strong>${l("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${d.map(function(g,$){return u`<li key=${$}><code>${g.path||"/"}</code> — ${l(g.key)}</li>`})}
            </ul>
            <span>${l("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${Z} secondary disabled=${c} onClick=${v}>${l("settings.pro.reload")}<//>
          <${Z} disabled=${c||!!h} onClick=${p}>
            ${l(c?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function rc(){return{id:"",friendlyName:"",loadType:qn[0],currentPower:"",priority:1,integration:"simulator",url:""}}function ic(){return{id:"",friendlyName:"",productionType:cn[0],dimension:"W",integration:"simulator",url:""}}function ac(){return{id:"",friendlyName:"",integration:"modbustcp",url:"",unit:1,function:3,register:"",dtype:"float32"}}function lc(e){var t=e.params&&e.params.tab||"site",n=Cu[t]||"site",r=S(null),i=r[0],a=r[1],s=S(null),o=s[0],c=s[1],f=S(!1),v=f[0],h=f[1],d=S(!1),p=d[0],g=d[1],$=S({loads:[],productions:[],grid:[],modbusRegisters:[]}),m=$[0],y=$[1];function b(_){return(Array.isArray(_)?_:[]).map(function(N){return String(N&&N.id)}).filter(function(N){return!V(N)})}function M(){c(null),W.getConfig().then(function(_){a(I(_)),g(!V(_&&_.id)),y({loads:b(_&&_.loads),productions:b(_&&_.productions),grid:b(_&&_.grid),modbusRegisters:b(_&&_.modbusRegisters)})}).catch(function(){c(!0),a(null)})}X(function(){M()},[]);function I(_){_=_||{};var N=Object.assign({},_);return N.loads=Array.isArray(_.loads)?_.loads:[],N.productions=Array.isArray(_.productions)?_.productions:[],N.grid=Array.isArray(_.grid)?_.grid:[],N.modbusRegisters=Array.isArray(_.modbusRegisters)?_.modbusRegisters:[],N.tariffs=Object.assign({},Tu,_.tariffs||{}),N}function C(_,N){a(function(D){var L=Object.assign({},D);return L[_]=N,L})}function k(_,N){a(function(D){var L=Object.assign({},D);return L.tariffs=Object.assign({},D.tariffs),L.tariffs[_]=N,L})}function U(_){a(function(N){var D=Object.assign({},N);return D.tariffs=Object.assign({},N.tariffs),D.tariffs.ht_windows=_,D})}function z(_,N){a(function(D){var L=Object.assign({},D);return L[_]=N,L})}function T(){v||(h(!0),W.postConfig(x(i)).then(function(){ee(l("settings.saved"),{type:"info"}),g(!0),M()}).catch(function(_){ee(_&&_.message||l("settings.save_error"),{type:"error"})}).then(function(){h(!1)}))}function x(_){var N=Object.assign({},_);return N.loads=_.loads.map(function(D){var L=Object.assign({},D);return L.currentPower!==""&&L.currentPower!==void 0&&(L.currentPower=Number(L.currentPower)),L.priority!==""&&L.priority!==void 0&&(L.priority=Number(L.priority)),In(L)}),N.productions=_.productions.map(function(D){return In(xi(D))}),N.grid=_.grid.map(function(D){return In(xi(D))}),N.modbusRegisters=_.modbusRegisters.map(function(D){var L=Object.assign({},D);return L.function=Number(L.function||3),L.register=Number(L.register),V(L.unit)?delete L.unit:L.unit=Number(L.unit),V(L.scale)||Number(L.scale)===1?delete L.scale:L.scale=Number(L.scale),V(L.unitLabel)&&delete L.unitLabel,L.swap_words!==!0&&delete L.swap_words,L}),N.tariffs=Object.assign({},_.tariffs),Aa.forEach(function(D){N.tariffs[D]=Number(_.tariffs[D])}),_.tariffs.co2_g_kwh!==void 0&&_.tariffs.co2_g_kwh!==""&&(N.tariffs.co2_g_kwh=Number(_.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(D){V(_.tariffs[D])?delete N.tariffs[D]:N.tariffs[D]=Number(_.tariffs[D])}),Array.isArray(_.tariffs.ht_windows)&&(_.tariffs.ht_windows.length===0?delete N.tariffs.ht_windows:N.tariffs.ht_windows=_.tariffs.ht_windows.map(function(D){return{days:D.days,from:Number(D.from),to:Number(D.to)}})),N}function E(_){!_||V(_.id)||W.setLoadState(_.id,"INACTIVE").catch(function(){})}function P(_){Ue.navigate("/einstellungen/"+Su[_])}var B=zu.map(function(_){return u`
        <button key=${_} type="button"
          class=${"pill"+(_===n?" pill-active":"")}
          onClick=${function(){P(_)}}>${l(Mu[_])}</button>`}),j;return o?j=u`
        <${F}>
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${Z} secondary small onClick=${M}>${l("settings.retry")}<//>
        <//>`:i?n==="site"?j=u`<${Bu} cfg=${i} patch=${C} idLocked=${p}
        onSave=${T} saving=${v} />`:n==="tariffs"?j=u`<${Yu} tariffs=${i.tariffs} patch=${k}
        setWindows=${U} onSave=${T} saving=${v} />`:n==="vzev"?j=u`<${Zu} />`:n==="daten"?j=u`<${ec} />`:n==="gplug"?j=u`<${Qu} />`:n==="pro"?j=u`<${nc} onSaved=${M} />`:n==="loads"?j=u`<${Bt} group="loads"
        items=${i.loads} onChange=${function(_){z("loads",_)}}
        listTitle=${l("settings.tab.loads")}
        labelFn=${function(_){return _.friendlyName||_.id||l("settings.new_entry")}}
        blank=${rc} confirmKey="settings.confirm_delete_load"
        persistedIds=${m.loads}
        onDelete=${E}
        validate=${Ra} Detail=${Hu}
        onSave=${T} saving=${v} />`:n==="productions"?j=u`<${Bt} group="production"
        items=${i.productions} onChange=${function(_){z("productions",_)}}
        listTitle=${l("settings.tab.productions")}
        labelFn=${function(_){return _.friendlyName||_.id||l("settings.new_entry")}}
        blank=${ic} confirmKey="settings.confirm_delete_production"
        persistedIds=${m.productions}
        validate=${function(_,N){return Fa(_,N)}} Detail=${Ku}
        onSave=${T} saving=${v} />`:n==="grid"?j=u`<${Bt} group="grid" fixedList
        items=${i.grid} onChange=${function(_){z("grid",_)}}
        listTitle=${l("settings.tab.grid")}
        labelFn=${function(_){return _.id==="to"?l("settings.grid.to"):l("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${m.grid}
        validate=${function(_){return Wa(_)}} Detail=${Vu}
        onSave=${T} saving=${v} />`:n==="modbus"&&(j=u`<${Bt} group="grid"
        items=${i.modbusRegisters} onChange=${function(_){z("modbusRegisters",_)}}
        listTitle=${l("settings.tab.modbus")}
        labelFn=${function(_){return _.friendlyName||_.id||l("settings.new_entry")}}
        blank=${ac} confirmKey="settings.confirm_delete_load"
        persistedIds=${m.modbusRegisters}
        validate=${Ba} Detail=${qu}
        onSave=${T} saving=${v} />`):j=u`<${F}><p class="placeholder-text">${l("settings.loading")}</p><//>`,u`
      <div>
        <${Ae} title=${l("page.settings")} />
        <div class="pill-bar">${B}</div>
        ${j}
      </div>`}var sc=["https://gplug-ch.github.io/gplug-cdn/v1.2.0/lang.json"];function oc(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(o,c,f,v){for(var h=[],d=0;d<=90;d++){var p=e-900+d*10,g=d>=f&&d<=v?null:Math.max(0,o+c*Math.sin(d/9)+c*.4*Math.sin(d/2.3));h.push({t:p,y:g})}return h}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],s=0;s<23;s++)a.push({id:s,ts:w.time(e-s*900,"15m"),imp:w.num(Math.round(Math.random()*0+s*7)/100,2),chf:w.chf((s%3===0?-1:1)*s*.19,!0)});return u`
    <div>
      <${Ae} title=${l("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${u`<${Z} onClick=${function(){ee("Toast!",{type:"info"})}}>Toast<//>`} />

      <${F} group="grid" title="LineChart" tooltip=${l("tooltip.consumption")}
        value=${w.w(1396)} valueColor="var(--c-consumption)">
        <${It} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${w.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${F} group="vzev" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${w.chf(12.4,!0)} valueColor="var(--c-vzev)">
        <${tr} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(o){return w.chf(o,!0)}}
          points=${r.map(function(o){return{t:o.t,y:o.y,color:o.y<0?"var(--c-import)":"var(--c-vzev)"}})} />
      <//>

      <${F} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${qt} state="active" />
          <${qt} state="waiting" />
          <${qt} state="inactive" />
        </div>
        <div class="demo-row">
          <${Z}>Speichern<//>
          <${Z} secondary>Abbrechen<//>
          <${Z} danger>Löschen<//>
          <${Z} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${Yt} label="Anzeige-Name" value="Familie Huber" />
          <${vn} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${F} group="production" title="DataTable">
        <${yl} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(o){var c=o.chf.indexOf("−")===0;return u`<span class=${c?"val-neg":"val-pos"}>${o.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function uc(){return[{path:"/",component:so},{path:"/verlauf",component:_o},{path:"/zaehler",component:Zo},{path:"/modbus",component:eu},{path:"/vzev/mitglied/:id?",component:vu},{path:"/vzev/abrechnung",component:xu},{path:"/vzev",component:cu},{path:"/einstellungen/:tab?",component:lc},{path:"/demo",component:oc}]}function Ei(){var e=document.getElementById("app"),t=sc;sl.load(t).catch(function(){}).then(function(){tl(u`<${Ss} routes=${uc()} />`,e),xs(W)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ei):Ei();
