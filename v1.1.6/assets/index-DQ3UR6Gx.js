(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var nn,J,yi,Ae,mr,bi,wi,fn,Pt,pt,ki,jn,xn,zn,qt={},Yt=[],Ra=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,rn=Array.isArray;function Ee(e,t){for(var n in t)e[n]=t[n];return e}function Hn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function xi(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?nn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Ot(e,o,r,i,null)}function Ot(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++yi,__i:-1,__u:0};return i==null&&J.vnode!=null&&J.vnode(a),a}function bt(e){return e.children}function At(e,t){this.props=e,this.context=t}function it(e,t){if(t==null)return e.__?it(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?it(e):null}function Da(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Ee({},t);a.__v=t.__v+1,J.vnode&&J.vnode(a),Kn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??it(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Ei(r,a,i),t.__e=t.__=null,a.__e!=n&&zi(a)}}function zi(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),zi(e)}function $r(e){(!e.__d&&(e.__d=!0)&&Ae.push(e)&&!Gt.__r++||mr!=J.debounceRendering)&&((mr=J.debounceRendering)||bi)(Gt)}function Gt(){try{for(var e,t=1;Ae.length;)Ae.length>t&&Ae.sort(wi),e=Ae.shift(),t=Ae.length,Da(e)}finally{Ae.length=Gt.__r=0}}function Ci(e,t,n,r,i,a,o,s,u,f,d){var p,v,h,g,$,m,k,_=r&&r.__k||Yt,M=t.length;for(u=Fa(n,t,_,u,M),p=0;p<M;p++)(h=n.__k[p])!=null&&(v=h.__i!=-1&&_[h.__i]||qt,h.__i=p,m=Kn(e,h,v,i,a,o,s,u,f,d),g=h.__e,h.ref&&v.ref!=h.ref&&(v.ref&&Vn(v.ref,null,h),d.push(h.ref,h.__c||g,h)),$==null&&g!=null&&($=g),(k=!!(4&h.__u))||v.__k===h.__k?(u=Si(h,u,e,k),k&&v.__e&&(v.__e=null)):typeof h.type=="function"&&m!==void 0?u=m:g&&(u=g.nextSibling),h.__u&=-7);return n.__e=$,u}function Fa(e,t,n,r,i){var a,o,s,u,f,d=n.length,p=d,v=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=Ot(null,o,null,null,null):rn(o)?o=e.__k[a]=Ot(bt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=Ot(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,u=a+v,o.__=e,o.__b=e.__b+1,s=null,(f=o.__i=Wa(o,n,u,p))!=-1&&(p--,(s=n[f])&&(s.__u|=2)),s==null||s.__v==null?(f==-1&&(i>d?v--:i<d&&v++),typeof o.type!="function"&&(o.__u|=4)):f!=u&&(f==u-1?v--:f==u+1?v++:(f>u?v--:v++,o.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==r&&(r=it(s)),Ni(s,s));return r}function Si(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Si(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=it(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Wa(e,t,n,r){var i,a,o,s=e.key,u=e.type,f=t[n],d=f!=null&&(2&f.__u)==0;if(f===null&&s==null||d&&s==f.key&&u==f.type)return n;if(r>(d?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((f=t[o=i>=0?i--:a++])!=null&&(2&f.__u)==0&&s==f.key&&u==f.type)return o}return-1}function _r(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ra.test(t)?n:n+"px"}function St(e,t,n,r,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||_r(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||_r(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(ki,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[pt]=r[pt]:(n[pt]=jn,e.addEventListener(t,a?zn:xn,a)):e.removeEventListener(t,a?zn:xn,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function yr(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Pt]==null)t[Pt]=jn++;else if(t[Pt]<n[pt])return;return n(J.event?J.event(t):t)}}}function Kn(e,t,n,r,i,a,o,s,u,f){var d,p,v,h,g,$,m,k,_,M,C,b,x,B,E,A,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=J.__b)&&d(t);e:if(typeof S=="function"){p=o.length;try{if(_=t.props,M=S.prototype&&S.prototype.render,C=(d=S.contextType)&&r[d.__c],b=d?C?C.props.value:d.__:r,n.__c?k=(v=t.__c=n.__c).__=v.__E:(M?t.__c=v=new S(_,b):(t.__c=v=new At(_,b),v.constructor=S,v.render=Ba),C&&C.sub(v),v.state||(v.state={}),v.__n=r,h=v.__d=!0,v.__h=[],v._sb=[]),M&&v.__s==null&&(v.__s=v.state),M&&S.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=Ee({},v.__s)),Ee(v.__s,S.getDerivedStateFromProps(_,v.__s))),g=v.props,$=v.state,v.__v=t,h)M&&S.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),M&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(M&&S.getDerivedStateFromProps==null&&_!==g&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(_,b),t.__v==n.__v||!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(_,v.__s,b)===!1){t.__v!=n.__v&&(v.props=_,v.state=v.__s,v.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(I){I&&(I.__=t)}),Yt.push.apply(v.__h,v._sb),v._sb=[],v.__h.length&&o.push(v);break e}v.componentWillUpdate!=null&&v.componentWillUpdate(_,v.__s,b),M&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(g,$,m)})}if(v.context=b,v.props=_,v.__P=e,v.__e=!1,x=J.__r,B=0,M)v.state=v.__s,v.__d=!1,x&&x(t),d=v.render(v.props,v.state,v.context),Yt.push.apply(v.__h,v._sb),v._sb=[];else do v.__d=!1,x&&x(t),d=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++B<25);v.state=v.__s,v.getChildContext!=null&&(r=Ee(Ee({},r),v.getChildContext())),M&&!h&&v.getSnapshotBeforeUpdate!=null&&(m=v.getSnapshotBeforeUpdate(g,$)),E=d!=null&&d.type===bt&&d.key==null?Ii(d.props.children):d,s=Ci(e,rn(E)?E:[E],t,n,r,i,a,o,s,u,f),v.base=t.__e,t.__u&=-161,v.__h.length&&o.push(v),k&&(v.__E=v.__=null)}catch(I){if(o.length=p,t.__v=null,u||a!=null){if(I.then){for(t.__u|=u?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(A=a.length;A--;)Hn(a[A])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),I.then||Mi(t),J.__e(I,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Ua(n.__e,t,n,r,i,a,o,u,f);return(d=J.diffed)&&d(t),128&t.__u?void 0:s}function Mi(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Mi))}function Ei(e,t,n){for(var r=0;r<n.length;r++)Vn(n[r],n[++r],n[++r]);J.__c&&J.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){J.__e(a,i.__v)}})}function Ii(e){return typeof e!="object"||e==null||e.__b>0?e:rn(e)?e.map(Ii):e.constructor!==void 0?null:Ee({},e)}function Ua(e,t,n,r,i,a,o,s,u){var f,d,p,v,h,g,$,m=n.props||qt,k=t.props,_=t.type;if(_=="svg"?i="http://www.w3.org/2000/svg":_=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((h=a[f])&&"setAttribute"in h==!!_&&(_?h.localName==_:h.nodeType==3)){e=h,a[f]=null;break}}if(e==null){if(_==null)return document.createTextNode(k);e=document.createElementNS(i,_,k.is&&k),s&&(J.__m&&J.__m(t,a),s=!1),a=null}if(_==null)m===k||s&&e.data==k||(e.data=k);else{if(a=_=="textarea"&&k.defaultValue!=null?null:a&&nn.call(e.childNodes),!s&&a!=null)for(m={},f=0;f<e.attributes.length;f++)m[(h=e.attributes[f]).name]=h.value;for(f in m)h=m[f],f=="dangerouslySetInnerHTML"?p=h:f=="children"||f in k||f=="value"&&"defaultValue"in k||f=="checked"&&"defaultChecked"in k||St(e,f,null,h,i);for(f in k)h=k[f],f=="children"?v=h:f=="dangerouslySetInnerHTML"?d=h:f=="value"?g=h:f=="checked"?$=h:s&&typeof h!="function"||m[f]===h||St(e,f,h,m[f],i);if(d)s||p&&(d.__html==p.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(p&&(e.innerHTML=""),Ci(t.type=="template"?e.content:e,rn(v)?v:[v],t,n,r,_=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&it(n,0),s,u),a!=null)for(f=a.length;f--;)Hn(a[f]);s&&_!="textarea"||(f="value",_=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[f]||_=="progress"&&!g||_=="option"&&g!=m[f])&&St(e,f,g,m[f],i),f="checked",$!=null&&$!=e[f]&&St(e,f,$,m[f],i))}return e}function Vn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){J.__e(i,n)}}function Ni(e,t,n){var r,i;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Vn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){J.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ni(r[i],t,n||typeof e.type!="function");n||Hn(e.__e),e.__c=e.__=e.__e=void 0}function Ba(e,t,n){return this.constructor(e,n)}function ja(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),J.__&&J.__(e,t),i=(r=!1)?null:t.__k,a=[],o=[],Kn(t,e=t.__k=xi(bt,null,[e]),i||qt,qt,t.namespaceURI,i?null:t.firstChild?nn.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),Ei(a,e,o),e.props.children=null}nn=Yt.slice,J={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(s){e=s}throw e}},yi=0,At.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ee({},this.state),typeof e=="function"&&(e=e(Ee({},n),this.props)),e&&Ee(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),$r(this))},At.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$r(this))},At.prototype.render=bt,Ae=[],bi=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,wi=function(e,t){return e.__v.__b-t.__v.__b},Gt.__r=0,fn=Math.random().toString(8),Pt="__d"+fn,pt="__a"+fn,ki=/(PointerCapture)$|Capture$/i,jn=0,xn=yr(!1),zn=yr(!0);var mt,oe,vn,br,Zt=0,Ti=[],ue=J,wr=ue.__b,kr=ue.__r,xr=ue.diffed,zr=ue.__c,Cr=ue.unmount,Sr=ue.__;function qn(e,t){ue.__h&&ue.__h(oe,e,Zt||t),Zt=0;var n=oe.__H||(oe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function z(e){return Zt=1,Ha(Oi,e)}function Ha(e,t,n){var r=qn(mt++,2);if(r.t=e,!r.__c&&(r.__=[Oi(void 0,t),function(s){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,s);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=oe,!oe.__f)){var i=function(s,u,f){if(!r.__c.__H)return!0;var d=!1,p=r.__c.props!==s;if(r.__c.__H.__.some(function(h){if(h.__N){d=!0;var g=h.__[0];h.__=h.__N,h.__N=void 0,g!==h.__[0]&&(p=!0)}}),a){var v=a.call(this,s,u,f);return d?v||p:v}return!d||p};oe.__f=!0;var a=oe.shouldComponentUpdate,o=oe.componentWillUpdate;oe.componentWillUpdate=function(s,u,f){if(this.__e){var d=a;a=void 0,i(s,u,f),a=d}o&&o.call(this,s,u,f)},oe.shouldComponentUpdate=i}return r.__N||r.__}function Z(e,t){var n=qn(mt++,3);!ue.__s&&Pi(n.__H,t)&&(n.__=e,n.u=t,oe.__H.__h.push(n))}function Se(e){return Zt=5,qe(function(){return{current:e}},[])}function qe(e,t){var n=qn(mt++,7);return Pi(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ka(){for(var e;e=Ti.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Lt),t.__h.some(Cn),t.__h=[]}catch(n){t.__h=[],ue.__e(n,e.__v)}}}ue.__b=function(e){oe=null,wr&&wr(e)},ue.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Sr&&Sr(e,t)},ue.__r=function(e){kr&&kr(e),mt=0;var t=(oe=e.__c).__H;t&&(vn===oe?(t.__h=[],oe.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Lt),t.__h.some(Cn),t.__h=[],mt=0)),vn=oe},ue.diffed=function(e){xr&&xr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ti.push(t)!==1&&br===ue.requestAnimationFrame||((br=ue.requestAnimationFrame)||Va)(Ka)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),vn=oe=null},ue.__c=function(e,t){t.some(function(n){try{n.__h.some(Lt),n.__h=n.__h.filter(function(r){return!r.__||Cn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],ue.__e(r,n.__v)}}),zr&&zr(e,t)},ue.unmount=function(e){Cr&&Cr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{Lt(r)}catch(i){t=i}}),n.__H=void 0,t&&ue.__e(t,n.__v))};var Mr=typeof requestAnimationFrame=="function";function Va(e){var t,n=function(){clearTimeout(r),Mr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Mr&&(t=requestAnimationFrame(n))}function Lt(e){var t=oe,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),oe=t}function Cn(e){var t=oe;e.__c=e.__(),oe=t}function Pi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Oi(e,t){return typeof t=="function"?t(e):t}var Ai=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],s=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?r[0]=s:o===4?r[1]=Object.assign(r[1]||{},s):o===5?(r[1]=r[1]||{})[t[++a]]=s:o===6?r[1][t[++a]]+=s+"":o?(i=e.apply(s,Ai(e,s,n,["",null])),r.push(i),s[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(s)}return r},Er=new Map;function qa(e){var t=Er.get(this);return t||(t=new Map,Er.set(this,t)),(t=Ai(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,o="",s="",u=[0],f=function(v){a===1&&(v||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,v,o):a===3&&(v||o)?(u.push(3,v,o),a=2):a===2&&o==="..."&&v?u.push(4,v,0):a===2&&o&&!v?u.push(5,0,!0,o):a>=5&&((o||!v&&a===5)&&(u.push(a,0,o,i),a=6),v&&(u.push(a,v,0,i),a=6)),o=""},d=0;d<n.length;d++){d&&(a===1&&f(),f(d));for(var p=0;p<n[d].length;p++)r=n[d][p],a===1?r==="<"?(f(),u=[u],a=3):o+=r:a===4?o==="--"&&r===">"?(a=1,o=""):o=r+o[0]:s?r===s?s="":o+=r:r==='"'||r==="'"?s=r:r===">"?(f(),a=1):a&&(r==="="?(a=5,i=o,o=""):r==="/"&&(a<5||n[d][p+1]===">")?(f(),a===3&&(u=u[0]),a=u,(u=u[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(f(),a=2):o+=r),a===3&&o==="!--"&&(a=4,u=u[0])}return f(),u})(e)),t),arguments,[])).length>1?t:t[0]}const c=qa.bind(xi);var ht={},Li="de",Ir={};function l(e,t){var n=ht[e];return n===void 0?(Ir[e]||(Ir[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function Ya(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return ht=i||{},Li=ht["meta.lang"]||document.documentElement.lang||"de",ht}).catch(function(){return n()})}return n()}const Ga={t:l,load:Ya,getLang:function(){return Li},getDict:function(){return ht}};var $t=" ",Ri="−";function at(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?Ri:"")+r}function Za(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function Xa(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Za(at(e/1e3,1))+$t+"kW":at(Math.round(e),0)+$t+"W"}function Qa(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?at(e/1e3,2)+$t+"kWh":at(Math.round(e),0)+$t+"Wh"}function Ja(e,t){if(e==null||isNaN(e))return"–";var n=at(e,2);return t&&e>0&&(n="+"+n),n+$t+"CHF"}function Ve(e){return(e<10?"0":"")+e}function el(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=Ve(n.getDate())+"."+Ve(n.getMonth()+1)+"."+n.getFullYear(),i=Ve(n.getHours())+":"+Ve(n.getMinutes());switch(t){case"1d":return r;case"dm":return Ve(n.getDate())+"."+Ve(n.getMonth()+1)+".";case"1mo":return Ve(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const w={num:at,w:Xa,wh:Qa,chf:Ja,time:el,MINUS:Ri};function Be(e){return c`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?c`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?c`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function L(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:""),n=!!e.collapsible,r=e.collapseKey?"ui.card."+e.collapseKey:null,[i,a]=z(function(){if(!n)return!0;if(r)try{var u=window.localStorage.getItem(r);if(u==="0")return!1;if(u==="1")return!0}catch{}return e.defaultOpen!==!1});function o(){var u=!i;if(a(u),r)try{window.localStorage.setItem(r,u?"1":"0")}catch{}}var s=!n||i;return c`
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
              ${e.tooltip?c`<${ve} text=${e.tooltip} />`:null}
              ${e.subtitle?c`<span class="card-subtitle">${e.subtitle}</span>`:null}
            </div>
            <div class="card-head-right">
              ${e.value?c`<span class="card-value" style=${e.valueColor?"color:"+e.valueColor:""}>${e.value}</span>`:null}
              ${e.badge?e.badge:null}
            </div>
          </div>`:null}
        ${s?e.children:null}
      </section>`}function Rt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return c`<span class=${r}>${l(n)}</span>`}function G(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return c`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function an(e){return c`
      <label class="field">
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return c`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function Dt(e){return c`
      <label class="field">
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function ve(e){var t=z(!1),n=t[0],r=t[1],i=z(null),a=i[0],o=i[1],s=Se(null),u=Se(null);return Z(function(){if(!n)return;function f(_){_.key==="Escape"&&r(!1)}function d(_){u.current&&!u.current.contains(_.target)&&r(!1)}document.addEventListener("keydown",f),document.addEventListener("click",d);var p=s.current,v=u.current;if(p&&v){var h=v.getBoundingClientRect(),g=p.getBoundingClientRect(),$=h.left+h.width/2,m=Math.max(8,Math.min($-g.width/2,window.innerWidth-8-g.width)),k=h.top-g.height-8;k<8&&(k=h.bottom+8),o({left:m,top:k})}return function(){document.removeEventListener("keydown",f),document.removeEventListener("click",d),o(null)}},[n]),c`
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
      </span>`}var Ft=[],tl=0;function Q(e,t){t=t||{};var n={id:++tl,message:e,type:t.type||"info",ttl:t.ttl||5e3};Ft.forEach(function(r){r(n)})}function nl(){var e=z([]),t=e[0],n=e[1];return Z(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(o){return o.id!==i.id})})},i.ttl)}return Ft.push(r),function(){var i=Ft.indexOf(r);i>=0&&Ft.splice(i,1)}},[]),c`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return c`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${l("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var V={top:22,right:14,bottom:24,left:46};function Di(e){var t=z(0),n=t[0],r=t[1];return Z(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function Fi(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var o=[],s=Math.ceil(e/i)*i,u=s;u<=t+i*1e-9;u+=i)o.push(Math.abs(u)<i*1e-9?0:u);return o}function Yn(e){return Math.abs(e)>=1e3?w.num(e/1e3,1).replace(/\.0$/,"")+"k":w.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function rl(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function il(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var o=0;o<r;o++)a.push(o);else for(var s=0;s<i;s++)a.push(Math.round(s*(r-1)/(i-1)));var u=[],f=null,d=-1;return a.forEach(function(p){if(p!==d){d=p;var v=n(e[p].t);v!==f&&(f=v,u.push(p))}}),u}function al(e){var t=0,n=0;return(e&&e.segments||[]).forEach(function(r){var i=r.value||0;i>0?t+=i:n+=i}),[t,n]}function Wi(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function Ui(e){return c`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return c`
            <g key=${"y"+t}>
              <line x1=${V.left} x2=${e.width-V.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${V.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${Yn(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-V.right-34?null:c`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${V.left} x2=${V.left} y1=${V.top-6} y2=${e.height-V.bottom}
          class="ch-axis" />
        <text x=${V.left-40} y=${V.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-V.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function Nr(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function ll(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function ol(e,t,n,r){var i=ll(e,t),a=[];if(i.length<2)return a;var o=[];function s(){if(o.length>=2){var g="M"+n(o[0].t).toFixed(1)+" "+r(o[0].top).toFixed(1),$;for($=1;$<o.length;$++)g+="L"+n(o[$].t).toFixed(1)+" "+r(o[$].top).toFixed(1);for($=o.length-1;$>=0;$--)g+="L"+n(o[$].t).toFixed(1)+" "+r(o[$].bottom).toFixed(1);a.push(g+"Z")}o=[]}for(var u=0;u<i.length;u++){var f=i[u],d=f.top-f.bottom;if(d>0?o.push(f):s(),u<i.length-1){var p=i[u+1],v=p.top-p.bottom;if(d>0!=v>0&&d!==v){var h=d/(d-v);o.push({t:f.t+(p.t-f.t)*h,top:f.top+(p.top-f.top)*h,bottom:f.bottom+(p.bottom-f.bottom)*h}),d>0&&s()}}}return s(),a}function Bi(e,t,n,r){var i=n>t-150;return c`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,o){return c`
            <div key=${o} class="ch-hover-line">
              ${a.color?c`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function wt(e){var t=Se(null),n=Di(t),r=z(null),i=r[0],a=r[1],o=e.height||180,s=e.series||[],u=e.timeWindow;if(!u){var f=1/0,d=-1/0;s.forEach(function(S){S.points.forEach(function(I){I.t<f&&(f=I.t),I.t>d&&(d=I.t)})}),u=f===1/0?[0,1]:[f,d]}var p=u[0],v=u[1]>u[0]?u[1]:u[0]+1,h=[];s.forEach(function(S){S.points.forEach(function(I){h.push(I.y)})});var g=Wi(h,!1),$=Math.max(10,n-V.left-V.right),m=o-V.top-V.bottom;function k(S){return V.left+(S-p)/(v-p)*$}function _(S){return V.top+(1-(S-g[0])/(g[1]-g[0]))*m}var M=Fi(g[0],g[1],4),C=e.xTickFormat||function(S){return w.time(S,"hm")},b=rl(p,v,Math.max(2,Math.min(5,Math.floor($/90)))).map(function(S){return{x:k(S),label:C(S)}});function x(S){var I=[],T=[];S.forEach(function(j){j.y===null||j.y===void 0?(T.length&&I.push(T),T=[]):T.push(j)}),T.length&&I.push(T);var H=_(Math.max(0,g[0]));return I.map(function(j){var y=j.map(function(F,U){return(U===0?"M":"L")+k(F.t).toFixed(1)+" "+_(F.y).toFixed(1)}).join(""),N=y+"L"+k(j[j.length-1].t).toFixed(1)+" "+H.toFixed(1)+"L"+k(j[0].t).toFixed(1)+" "+H.toFixed(1)+"Z";return{line:y,area:N}})}function B(S){if(t.current){var I=t.current.getBoundingClientRect(),T=S.clientX-I.left;if(T<V.left||T>n-V.right){a(null);return}var H=p+(T-V.left)/$*(v-p);a(H)}}var E=null,A=[];return i!==null&&(A.push({text:C(i)}),s.forEach(function(S){var I=Nr(S.points,i);I>=0&&(E===null&&(E=k(S.points[I].t)),A.push({color:S.color,text:(S.label?S.label+": ":"")+(e.yFormat||Yn)(S.points[I].y)+(e.yFormat?"":" "+e.yUnit)}))}),E===null&&(E=k(i))),c`
      <div class="chart" ref=${t}
        onPointerMove=${B}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?c`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${Ui} width=${n} height=${o} sy=${_}
              yTicks=${M} xTicks=${b}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(S,I){return ol(S.top,S.bottom,k,_).map(function(T,H){return c`<path key=${I+"-"+H} class="ch-band" d=${T} fill=${S.color} stroke="none"/>`})})}
            ${s.map(function(S,I){return x(S.points).map(function(T,H){return c`
                  <g key=${I+"-"+H}>
                    ${S.fill?c`<path class="ch-area" d=${T.area} fill=${S.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${T.line} fill="none" stroke=${S.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${E!==null?c`
              <line x1=${E} x2=${E} y1=${V.top-4} y2=${o-V.bottom} class="ch-crosshair"/>
              ${s.map(function(S,I){var T=Nr(S.points,i);return T>=0?c`
                  <circle key=${I} cx=${k(S.points[T].t)} cy=${_(S.points[T].y)} r="3.5"
                    fill=${S.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${E!==null?Bi(t,n,E,A):null}`:null}
      </div>`}function Gn(e){var t=Se(null),n=Di(t),r=z(null),i=r[0],a=r[1],o=e.height||180,s=e.points||[];function u(y){if(!y.bars)return[y.y];var N=[];return y.bars.forEach(function(F){al(F).forEach(function(U){N.push(U)})}),N}var f=s.reduce(function(y,N){return N.bars?Math.max(y,N.bars.length):y},1),d=[];s.forEach(function(y){u(y).forEach(function(N){d.push(N)})});var p=Wi(d,!0),v=Math.max(10,n-V.left-V.right),h=o-V.top-V.bottom;function g(y){return V.top+(1-(y-p[0])/(p[1]-p[0]))*h}var $=s.length,m=$>0?v/$:v;function k(y){return V.left+(y+.5)*m}var _=Math.max(1,Math.min(m-1,m*.72,46)),M=Fi(p[0],p[1],4),C=e.xTickFormat||function(y){return w.time(y,"hm")},b=il(s,v,C).map(function(y){return{x:k(y),label:C(s[y].t)}}),x=g(0),B=s.length+"|"+(s.length?s[0].t+"-"+s[s.length-1].t:"")+"|"+f+"|"+(e.yUnit||"");function E(y){if(!t.current||!$){a(null);return}var N=t.current.getBoundingClientRect(),F=y.clientX-N.left;if(F<V.left||F>n-V.right){a(null);return}var U=Math.floor((F-V.left)/m);a(U<0?0:U>=$?$-1:U)}var A=e.yFormat||Yn;function S(y){return A(y)+(e.yFormat?"":" "+(e.yUnit||""))}var I=null,T=[];if(i!==null&&s[i]){var H=s[i];if(I=k(i),T.push({text:C(H.t)}),H.bars)H.bars.forEach(function(y){(y.segments||[]).forEach(function(N){if(N.value){var F=e.signedMagnitude?Math.abs(N.value):N.value;T.push({color:N.color,text:(N.label?N.label+": ":"")+S(F)})}})});else if(H.y!==null&&H.y!==void 0){var j=e.signedMagnitude?Math.abs(H.y):H.y;T.push({color:H.color||e.color,text:(H.label?H.label+": ":"")+S(j)})}}return c`
      <div class="chart" ref=${t}
        onPointerMove=${E}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?c`
          <svg width=${n} height=${o} role="img" aria-label=${e.label||""}>
            <${Ui} width=${n} height=${o} sy=${g}
              yTicks=${M} xTicks=${b}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${B}>
            ${s.map(function(y,N){var F=i===N?"1":"0.85";if(y.bars){var U=k(N)-_/2,_e=_/f;return c`<g key=${N}>${y.bars.map(function(ye,O){var K=U+O*_e+1,Y=Math.max(1,_e-2),ne=0,je=0;return(ye.segments||[]).map(function(P,se){var ie=P.value||0;if(!ie)return null;var le,be;ie>0?(le=ne,be=ne+ie,ne=be):(le=je,be=je+ie,je=be);var He=Math.min(g(le),g(be)),Te=Math.max(1,Math.abs(g(be)-g(le)));return c`
                      <rect key=${O+"-"+se}
                        class=${"ch-bar "+(ie>0?"ch-bar-up":"ch-bar-down")}
                        x=${K.toFixed(1)} y=${He.toFixed(1)}
                        width=${Y.toFixed(1)} height=${Te.toFixed(1)} rx="1.5"
                        fill=${P.color} opacity=${F}/>`})})}</g>`}if(y.y===null||y.y===void 0)return null;var pe=k(N)-_/2,q=g(y.y),ae=Math.min(q,x),de=Math.max(1,Math.abs(q-x));return c`
                <rect key=${N} class=${"ch-bar "+(y.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${pe.toFixed(1)} y=${ae.toFixed(1)}
                  width=${_.toFixed(1)} height=${de.toFixed(1)} rx="2"
                  fill=${y.color||e.color||"var(--c-consumption)"}
                  opacity=${F}/>`})}
            </g>
            <line x1=${V.left} x2=${n-V.right} y1=${x} y2=${x} class="ch-zero-strong"/>
          </svg>
          ${I!==null?Bi(t,n,I,T):null}`:null}
      </div>`}var sl=[10,25,50];function ul(e){var t=z(0),n=t[0],r=t[1],i=z(e.pageSize||10),a=i[0],o=i[1],s=e.rows||[],u=s.length,f=Math.max(1,Math.ceil(u/a)),d=Math.min(n,f-1),p=d*a,v=Math.min(p+a,u),h=s.slice(p,v);return c`
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
              <tr><td class="table-empty" colspan=${e.columns.length}>${l("common.nodata")}</td></tr>`:h.map(function(g,$){return c`
                  <tr key=${g.id!==void 0?g.id:p+$}>
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
                ${sl.map(function(g){return c`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${l("table.pageinfo",{from:u===0?0:p+1,to:v,total:u})}
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
      </div>`}function ji(e,t){var n=e.split("/").filter(function(f){return f!==""}),r=t.split("/").filter(function(f){return f!==""}),i={},a;for(a=0;a<n.length;a++){var o=n[a];if(o.charAt(0)===":"){var s=o.slice(-1)==="?",u=o.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(s)continue;return null}i[u]=decodeURIComponent(r[a])}else if(o!==r[a])return null}return r.length>n.length?null:i}function Sn(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=ji(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function cl(e){var t=z(function(){return Sn(e)}),n=t[1];return Z(function(){function r(){n(Sn(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const Fe={match:ji,parse:Sn,useRoute:cl,navigate:function(e){window.location.hash="#"+e}};var fl=["imp_wh","exp_wh","pv_wh","vzev_in_wh","vzev_out_wh"],vl=["grid_ht_wh","grid_nt_wh"];function he(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function Zn(e,t){t=t||{};var n=Le(t.grid_import_chf_kwh,.26),r=Le(t.grid_feedin_chf_kwh,.18),i=Le(t.vzev_import_chf_kwh,.22),a=Le(t.vzev_export_chf_kwh,.22),o=e.imp_wh,s=e.exp_wh,u=e.pv_wh,f=e.vzev_in_wh||0,d=e.vzev_out_wh||0,p={};for(var v in e)p[v]=e[v];if(p.cost_import_chf=o==null?null:he((o-f)/1e3*n),p.revenue_feedin_chf=s==null?null:he((s-d)/1e3*r),p.cost_vzev_chf=he(f/1e3*i),p.revenue_vzev_chf=he(d/1e3*a),p.saving_selfuse_chf=u==null||s===null||s===void 0?null:he(Math.max(0,(u-s)/1e3*(n-r))),ln(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var h=Le(t.grid_import_ht_chf_kwh,n),g=Le(t.grid_import_nt_chf_kwh,n);p.cost_import_ht_chf=he(e.grid_ht_wh/1e3*h),p.cost_import_nt_chf=he(e.grid_nt_wh/1e3*g),p.cost_import_chf=he(p.cost_import_ht_chf+p.cost_import_nt_chf)}return p}function Le(e,t){return e==null||isNaN(e)?t:Number(e)}var Mt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Hi(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(u){return Hi(u,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=Mt[i.slice(0,a)],s=Mt[i.slice(a+1)];if(o!==void 0&&s!==void 0){if(o<=s){if(t>=o&&t<=s)return!0}else if(t>=o||t<=s)return!0}}else if(Mt[i]!==void 0&&Mt[i]===t)return!0}return!1}function ln(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function dl(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,o=0;o<a.length;o++){var s=a[o]||{};if(Hi(s.days,r)&&i>=Le(s.from,0)&&i<Le(s.to,0))return!0}return!1}function Ki(e,t){if(!ln(t))return e;var n=e.imp_wh,r=e.vzev_in_wh||0;if(n==null)return e;var i=n-r;i<0&&(i=0);var a={};for(var o in e)a[o]=e[o];return dl(e.ts,t)?(a.grid_ht_wh=i,a.grid_nt_wh=0):(a.grid_ht_wh=0,a.grid_nt_wh=i),a}function pl(e,t){var n={ts:e},r=!1;return fl.forEach(function(i){var a=0,o=!1,s=!1;t.forEach(function(u){var f=u[i];f==null?s=!0:(a+=f,o=!0)}),n[i]=o?a:null,o&&s&&(r=!0)}),vl.forEach(function(i){var a=0,o=!1;t.forEach(function(s){var u=s[i];u!=null&&(a+=u,o=!0)}),o&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function hl(e){return e-e%3600}function gl(e){var t=e-Mn(e,86400),n=Mn(Math.floor(t/86400)+3,7);return t-n*86400}function Mn(e,t){return(e%t+t)%t}function Xn(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function ml(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function ot(e,t,n){var r={},i=[];(e||[]).forEach(function(o){var s=t(o.ts);r[s]||(r[s]=[],i.push(s)),r[s].push(o)});var a=i.map(function(o){return Zn(pl(Number(o),r[o]),n)});return a.sort(function(o,s){return o.ts-s.ts}),a}function Tr(e,t,n,r){if(e=e||[],ln(r)&&t==="15m"&&(e=e.map(function(a){return Ki(a,r)})),t===n){var i=e.map(function(a){return Zn(a,r)});return i.sort(function(a,o){return a.ts-o.ts}),i}switch(n){case"1h":return ot(e,hl,r);case"1w":return ot(e,gl,r);case"1q":return ot(e,ml,r);case"1mo":return ot(e,Xn,r);case"1d":default:return ot(e,function(a){return a-Mn(a,86400)},r)}}function En(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function $l(e){if(e=(e||[]).filter(function(s){return s!=null&&!isNaN(s)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=En(e.slice(0,t)),r=En(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",o=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:o}}function _l(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function yl(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function bl(e){return e-e%86400}function Xt(e,t){if(!Array.isArray(e))return null;for(var n=Math.floor(e.length/3),r=null,i=0;i<n;i++)e[i*3]===t&&(r=[e[i*3+1],e[i*3+2]]);return r}function Vi(e,t){var n={},r=[],i=0;t=t||{};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=t[a];(o==null||o<0)&&(o=0),t[a]=o,r.push(a),i+=o,n[a]=0}if(r.length===0)return n;r.sort(),e<0&&(e=0);var s=e<i?e:i;if(s<=0||i<=0)return n;var u={},f=0;r.forEach(function(h){var g=s*t[h],$=Math.floor(g/i);u[h]=g-$*i,n[h]=$,f+=$});for(var d=s-f;d>0;){var p=null,v=-1;if(r.forEach(function(h){u[h]>v&&(v=u[h],p=h)}),p===null)break;n[p]+=1,u[p]=-1,d-=1}return n}function Qn(e){e=e||{};var t=e.data||{},n=e.producer_id,r={},i=[];for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a))for(var o=t[a],s=Math.floor((o?o.length:0)/3),u=0;u<s;u++){var f=o[u*3];r[f]||(r[f]=!0,i.push(f))}return i.sort(function(d,p){return d-p}),i.map(function(d){var p={},v=0;for(var h in t)if(Object.prototype.hasOwnProperty.call(t,h)){var g=Xt(t[h],d);g!==null&&(h===n?v=g[1]:p[h]=g[0])}return{ts:d,members:Vi(v,p)}})}function wl(e){var t=e&&e.self_id,n=e&&e.producer_id,r={};return t&&Qn(e).forEach(function(i){var a=i.members||{},o=0,s=0;if(t===n)for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(s+=a[u]);else o=a[t]||0;r[i.ts]={vzev_in_wh:o,vzev_out_wh:s}}),r}function qi(e,t){var n=wl(t);return(e||[]).map(function(r){var i=n[r.ts],a={};for(var o in r)a[o]=r[o];return a.vzev_in_wh=i?i.vzev_in_wh:0,a.vzev_out_wh=i?i.vzev_out_wh:0,a})}function Pr(e,t){var n={},r=[];return e.forEach(function(i){var a=t(i.ts),o=n[a];o||(o={},n[a]=o,r.push(a));var s=i.members||{};for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(o[u]=(o[u]||0)+s[u])}),r.sort(function(i,a){return i-a}),r.map(function(i){return{ts:i,members:n[i]}})}function Or(e,t,n){(n==null||n<1)&&(n=96);var r=Qn(e),i;t==="1d"?i=Pr(r,bl):t==="1mo"?i=Pr(r,Xn):i=r;var a=i.length>n?i.length-n:0;return i.slice(a)}function Yi(e){if(typeof e!="string"||e.length!==7||e[4]!=="-"||e[5]!=="Q")return null;var t=parseInt(e.slice(0,4),10),n=parseInt(e[6],10);if(isNaN(t)||isNaN(n)||n<1||n>4)return null;var r=(n-1)*3,i=Math.floor(Date.UTC(t,r,1)/1e3),a=Math.floor(Date.UTC(t,r+3,1)/1e3);return[i,a]}function kl(e,t,n,r,i){n=n||[],r=r||{};var a={};n.forEach(function(E){E&&E.id!==void 0&&(a[E.id]=E)});var o=er(r),s={};n.forEach(function(E){E&&E.id!==void 0&&(s[E.id]=me(E.entry_ts,0))});var u={},f={},d={},p={},v={},h=0;(t||[]).forEach(function(E){var A=Xn(E.ts),S=o&&Cl(E.ts,r)==="ht",I=E.members||{};for(var T in I)if(Object.prototype.hasOwnProperty.call(I,T)&&!(s[T]&&E.ts<s[T])){var H=I[T]||0;u[T]=(u[T]||0)+H,S?f[T]=(f[T]||0)+H:d[T]=(d[T]||0)+H;var j=p[T];j||(j={},p[T]=j),j[A]=(j[A]||0)+H,v[A]=(v[A]||0)+H,h+=H}});var g=me(r.vzev_export_chf_kwh,0),$=me(r.vzev_import_chf_kwh,0),m=[];for(var k in u)if(Object.prototype.hasOwnProperty.call(u,k)){var _=u[k],M=a[k],C={id:k,name:M&&M.name!==void 0?M.name:k,wh:_,chf:he(_/1e3*$)};M&&(M.location!==void 0&&(C.location=M.location),M.metering_point!==void 0&&(C.metering_point=M.metering_point),M.entry_ts!==void 0&&(C.entry_ts=M.entry_ts)),o&&(C.ht_wh=f[k]||0,C.nt_wh=d[k]||0);var b=me(r.grid_import_chf_kwh,null);b!==null&&(C.cost_grid_chf=he(o?C.ht_wh/1e3*me(r.grid_import_ht_chf_kwh,b)+C.nt_wh/1e3*me(r.grid_import_nt_chf_kwh,b):_/1e3*b)),C.months=Ar(p[k]),m.push(C)}var x=Ar(v),B={quarter:e,months:x,total:{exp_wh:h,revenue_chf:he(h/1e3*g),months:x},members:m,note:"15-min Messwerte, Abgleich mit Netzbetreiber pro Quartal"};return i!=null&&(B.quality=i),B}function me(e,t){return e==null||isNaN(e)?t:Number(e)}function Ar(e){e=e||{};var t=Object.keys(e).map(Number).sort(function(n,r){return n-r});return t.map(function(n){return{ts:n,wh:e[n]}})}function xl(e){var t=new Date(e*1e3);return(t.getDay()+6)%7}function zl(e){var t=new Date(e*1e3);return t.getHours()+t.getMinutes()/60}var Et={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Jn(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(u){return Jn(u,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var o=Et[i.slice(0,a)],s=Et[i.slice(a+1)];if(o!==void 0&&s!==void 0){if(o<=s){if(t>=o&&t<=s)return!0}else if(t>=o||t<=s)return!0}}else if(Et[i]!==void 0&&Et[i]===t)return!0}return!1}function er(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function Cl(e,t){if(!er(t))return"flat";for(var n=xl(e),r=zl(e),i=t.ht_windows,a=0;a<i.length;a++){var o=i[a]||{},s=me(o.from,0),u=me(o.to,0);if(Jn(o.days,n)&&r>=s&&r<u)return"ht"}return"nt"}function Sl(e){var t=e.ht_windows;if(!Array.isArray(t)||t.length===0)return 0;for(var n=0,r=0,i=0;i<7;i++)for(var a=0;a<96;a++){var o=a/4;r++;for(var s=0;s<t.length;s++){var u=t[s]||{};if(Jn(u.days,i)&&o>=me(u.from,0)&&o<me(u.to,0)){n++;break}}}return r===0?0:n/r}function Gi(e){e=e||{};var t;if(er(e)){var n=Sl(e),r=me(e.grid_import_ht_chf_kwh,0),i=me(e.grid_import_nt_chf_kwh,0);t=r*n+i*(1-n)}else{var a=e.grid_import_chf_kwh;if(a==null||isNaN(a))return null;t=Number(a)}return he(t*.8)}function Ml(e,t,n){e=e||{};var r=e.data||{},i=e.self_id;t=t||[];var a={},o=[];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))for(var u=r[s],f=Math.floor((u?u.length:0)/3),d=0;d<f;d++){var p=u[d*3];n&&(p<n[0]||p>=n[1])||a[p]||(a[p]=!0,o.push(p))}o.sort(function(_,M){return _-M});var v={},h={};t.forEach(function(_){!_||_.id===void 0||(v[_.id]=me(_.entry_ts,0),h[_.id]={have:0,expected:0,lastTs:null})});var g=0,$=0,m=0,k=0;return o.forEach(function(_){g++;var M=!1;t.forEach(function(C){if(!(!C||C.id===void 0)&&!(_<v[C.id])){var b=h[C.id];b.expected++;var x=Xt(r[C.id],_);x===null?M=!0:(b.have++,(b.lastTs===null||_>b.lastTs)&&(b.lastTs=_))}}),i!=null&&Xt(r[i],_)===null&&k++,M?m++:$++}),{expected:g,complete:$,provisional:m,missing:k,perMember:h}}function Lr(e,t){e=e||{};var n=(e.data||{})[t];if(!Array.isArray(n)||n.length<3)return null;for(var r=Math.floor(n.length/3),i=null,a=0;a<r;a++){var o=n[a*3];(i===null||o>i)&&(i=o)}return i}function El(e,t,n){t=t||{};var r=t.data||{},i=t.producer_id,a={},o=0,s=0,u=0;for(var f in r)if(Object.prototype.hasOwnProperty.call(r,f)){var d=Xt(r[f],e);d!==null&&(f===i?s=d[1]:(a[f]=d[0],o+=d[0],f===n&&(u=d[0])))}var p=Vi(s,a);return{prodWh:s,totalImpWh:o,memberImpWh:u,sharePct:o>0?he(u/o*100):0,allocatedWh:p[n]||0}}function tr(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var Wt=[],Ut=!0,In=null,Bt=[];function Nn(e){Tn=e||{},nr=!0,Bt.forEach(function(t){t(e)})}var Tn=null,nr=!1,dn=null;function Zi(e){e&&(In=Date.now()),e!==Ut&&(Ut=e,Wt.forEach(function(t){t(Ut,In)}))}var Il=3,Pn=0;function Xi(e){return e instanceof TypeError||e&&e.name==="AbortError"}function Qi(){Pn=0,Zi(!0)}function Ji(e){e&&e.optional||(Pn++,Pn>=Il&&Zi(!1))}var Nl=8e3,Tl=2,pn=0,On=[];function ea(){for(;pn<Tl&&On.length>0;){var e=On.shift();pn++,e.run().then(e.resolve,e.reject).finally(function(){pn--,ea()})}}function ta(e){return new Promise(function(t,n){On.push({run:e,resolve:t,reject:n}),ea()})}function _t(e,t){return t=t||{},ta(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},Nl);return fetch(tr()+e,{signal:n.signal}).then(function(i){if(Qi(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw Xi(i)&&Ji(t),i}).finally(function(){clearTimeout(r)})})}function Pl(e){return e.indexOf("/api/vzev/info")===0}function Ol(e){return e.indexOf("/api/vzev/")===0&&!Pl(e)}function Al(){return!nr||!!(Tn&&Tn.enabled)}function Ll(e){return e.indexOf("/api/vzev/members")===0?{members:[]}:e.indexOf("/api/vzev/discovered")===0?{discovered:[]}:null}function Rl(){return nr?Promise.resolve():(dn||(dn=_t("/api/vzev/info",ke).then(function(e){Nn(e||{})},function(){})),dn)}function re(e,t){return Ol(e)&&!(t&&t.vzevBypass)?Rl().then(function(){return Al()?_t(e,t):Ll(e)}):_t(e,t)}var ke={optional:!0};function Dl(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function o(){n!==null&&(clearInterval(n),n=null)}function s(){document.hidden?o():a()}return document.addEventListener("visibilitychange",s),a(),function(){r=!0,o(),document.removeEventListener("visibilitychange",s)}}function Rr(e,t){return ta(function(){return fetch(tr()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(Qi(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw Xi(n)&&Ji(),n})})}function It(e){return e==null||String(e).trim()===""}function Qe(e){return _t("/cm?cmnd="+encodeURIComponent(e))}const R={base:tr,get:re,post:Rr,restartDevice:function(){return Qe("Restart 1")},getWifiConfig:function(){return Promise.all([Qe("SSId1"),Qe("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return It(e.ssid1)||t.push("SSId1 "+e.ssid1),It(e.password1)||t.push("Password1 "+e.password1),It(e.ssid2)||t.push("SSId2 "+e.ssid2),It(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):Qe("Backlog "+t.join(";"))},wifiScanStart:function(){return Qe("WifiScan 1")},wifiScanResult:function(){return Qe("WifiScan")},getConfig:function(){return re("/api/config")},postConfig:function(e){return Rr("/api/config",e)},getConfigRaw:function(){return _t("/api/config",{text:!0})},getPower:function(){return re("/api/power")},getEnergy:function(e,t,n,r){if(e&&e!=="15m")throw new Error("getEnergy: res must be 15m");var i="/api/energy?res=15m&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),re(i)},getMeta:function(){return re("/api/meta")},getMeter:function(){return re("/api/meter")},getSite:function(){return re("/site")},getLoads:function(){return re("/loads")},getProductions:function(){return re("/productions")},setLoadState:function(e,t){return re("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},getVzevRaw:function(){return re("/api/vzev/raw",ke)},getVzevMembersList:function(){return re("/api/vzev/members",ke).then(function(e){return Array.isArray(e)?e:e&&e.members||[]})},getVzevDiscovered:function(){return re("/api/vzev/discovered",ke).then(function(e){return Array.isArray(e)?e:e&&e.discovered||[]})},getVzevInfo:function(){return re("/api/vzev/info",ke).then(function(e){return Nn(e||{}),e||{}},function(){return{}})},setVzevInfo:function(e){e=e||{};var t="/api/vzev/info?action=set";return["representative_name","representative_contact","connection_point_id"].forEach(function(n){e[n]!==void 0&&e[n]!==null&&(t+="&"+n+"="+encodeURIComponent(e[n]))}),e.enabled!==void 0&&e.enabled!==null&&(t+="&enabled="+(e.enabled?"true":"false")),re(t).then(function(n){return Nn(n),n})},getVzevFlows:function(e,t){return re("/api/vzev/raw",ke).then(function(n){return{flows:Or(n,e||"15m",t||90)}})},getVzevBilling:function(e,t){var n=Yi(e);return n?Promise.all([t?Promise.resolve(t):re("/api/vzev/raw",ke),re("/api/vzev/members",ke).catch(function(){return{members:[]}}),re("/api/meta").catch(function(){return{}}),re("/api/vzev/info",ke).catch(function(){return{}}),re("/site").catch(function(){return{}})]).then(function(r){var i=r[0],a=r[1]&&r[1].members?r[1].members:Array.isArray(r[1])?r[1]:[],o=r[2]&&r[2].tariffs||{};i&&i.tariffs&&(o=Object.assign({},o,i.tariffs));var s=r[3]||{},u=r[4]||{},f=Qn(i).filter(function($){return $.ts>=n[0]&&$.ts<n[1]}),d=Ml(i,a,n),p=kl(e,f,a,o,d);p.info=s,p.raw=i,p.range=n,p.tariffs=o;var v=i&&i.self_id,h=i&&i.producer_id;if(v!=null)if(v===h)p.role="PRODUCER";else{p.role="CONSUMER";var g=p.members.filter(function($){return $.id===v})[0];p.self=g?Object.assign({},g,{name:u.name||g.name}):{id:v,name:u.name||v,wh:0,chf:0,months:[]}}return p}):Promise.reject(new Error("invalid quarter"))},getVzevMembers:function(){return Promise.all([re("/api/vzev/members",ke),re("/api/vzev/raw",ke)]).then(function(e){var t=e[0]&&e[0].members?e[0].members:Array.isArray(e[0])?e[0]:[],n=Or(e[1],"15m",90);return t.map(function(r){var i=r.type==="PRODUCER"||r.typ==="P",a=i?1:-1,o=n.map(function(u){var f=u.members&&u.members[r.id];return{t:u.ts,y:typeof f=="number"?f:0}}),s=o.reduce(function(u,f){return u+(f.y||0)},0);return{id:r.id,name:r.name||r.id,address:r.location||r.loc,net_wh:a*s,points:o}})})},poll:Dl,onStatus:function(e){return Wt.push(e),function(){var t=Wt.indexOf(e);t>=0&&Wt.splice(t,1)}},onVzevInfo:function(e){return Bt.push(e),function(){var t=Bt.indexOf(e);t>=0&&Bt.splice(t,1)}},isOnline:function(){return Ut},lastOk:function(){return In}};var Fl="\uFEFF",rr=";",Dr=`\r
`;function Wl(e){if(e==null)return"";var t=String(e);return t.indexOf(rr)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function Fr(e){return(e||[]).map(Wl).join(rr)}function Ul(e){var t=String(e||"");t.charCodeAt(0)===65279&&(t=t.slice(1));var n=[],r=[],i="",a=!1,o=0;function s(){r.push(i),i=""}function u(){s(),n.push(r),r=[]}for(;o<t.length;){var f=t[o];if(a){if(f==='"'){if(t[o+1]==='"'){i+='"',o+=2;continue}a=!1,o++;continue}i+=f,o++;continue}if(f==='"'&&i===""){a=!0,o++;continue}if(f===rr){s(),o++;continue}if(f==="\r"){o++;continue}if(f===`
`){u(),o++;continue}i+=f,o++}return(i!==""||r.length)&&u(),n}function ir(e,t){var n=[Fr(e)];return(t||[]).forEach(function(r){n.push(Fr(r))}),Fl+n.join(Dr)+Dr}function Bl(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var ar="gplug-archive",jl=2,gt=900,Wr=384,Hl=60,Kl=2*86400,Vl=50,na="1",Ur={},Br=!1,st=null,An=!1;function ql(){return typeof indexedDB<"u"?indexedDB:typeof globalThis<"u"?globalThis.indexedDB:void 0}function We(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error||new Error("idb request failed"))}})}function on(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=e.onerror=function(){n(e.error||new Error("idb tx failed"))}})}function $e(){if(st)return st;var e=ql();return e?(st=new Promise(function(t,n){var r;try{r=e.open(ar,jl)}catch(i){n(i);return}r.onupgradeneeded=function(){var i=r.result;i.objectStoreNames.contains("e15")||i.createObjectStore("e15",{keyPath:["siteId","ts"]}),i.objectStoreNames.contains("vz15")||i.createObjectStore("vz15",{keyPath:["siteId","memberId","ts"]}),i.objectStoreNames.contains("meta")||i.createObjectStore("meta",{keyPath:"siteId"}),i.objectStoreNames.contains("live")||i.createObjectStore("live",{keyPath:["siteId","kind","id"]})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error||new Error("idb open failed"))},r.onblocked=function(){n(new Error("idb blocked"))}}).catch(function(t){throw An=!0,st=null,t}),st):(An=!0,Promise.reject(new Error("IndexedDB unavailable")))}function Yl(){return An?Promise.resolve(!1):$e().then(function(){return!0},function(){return!1})}function Ue(e,t,n){return e.transaction(t,n).objectStore(t)}function Gl(e){return{siteId:e,firstE15Ts:null,lastE15Ts:null,lastVzTs:null,gaps:[],count:0,syncedAt:null,producerId:null,selfId:null,tariffs:null}}function sn(e){return $e().then(function(t){return We(Ue(t,"meta","readonly").get(e))}).then(function(t){return t||Gl(e)})}function ra(e){return $e().then(function(t){var n=t.transaction("meta","readwrite");return n.objectStore("meta").put(e),on(n).then(function(){return e})})}function Zl(){return $e().then(function(e){return We(Ue(e,"meta","readonly").getAllKeys())}).then(function(e){return(e||[]).map(String)})}function lr(e,t,n){var r=t??0,i=n??9999999999;return IDBKeyRange.bound([e,r],[e,i])}function Xl(e,t,n){return $e().then(function(r){return We(Ue(r,"e15","readonly").getAll(lr(e,t,n)))}).then(function(r){return(r||[]).map(function(i){var a={ts:i.ts,imp_wh:i.imp_wh,exp_wh:i.exp_wh,pv_wh:i.pv_wh};return i.partial&&(a.partial=!0),a})})}function ia(e,t){return!t||!t.length?Promise.resolve(0):$e().then(function(n){var r=n.transaction("e15","readwrite"),i=r.objectStore("e15"),a=0;return t.forEach(function(o){if(!(!o||typeof o.ts!="number")){var s={siteId:e,ts:o.ts,imp_wh:jt(o.imp_wh),exp_wh:jt(o.exp_wh),pv_wh:jt(o.pv_wh)};o.partial&&(s.partial=!0),i.put(s),a++}}),on(r).then(function(){return a})})}function jt(e){return e==null||isNaN(e)?null:Number(e)}function aa(e,t){var n=t&&t.data||{},r=Object.keys(n);return r.length?$e().then(function(i){var a=i.transaction("vz15","readwrite"),o=a.objectStore("vz15"),s=0;return r.forEach(function(u){var f=n[u];if(Array.isArray(f))for(var d=0;d+2<f.length;d+=3)o.put({siteId:e,memberId:u,ts:f[d],imp:f[d+1],exp:f[d+2]}),s++}),on(a).then(function(){return s})}):Promise.resolve(0)}function or(e,t,n){return Promise.all([sn(e),$e().then(function(r){return We(Ue(r,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",t??0],[e,"￿",n??9999999999])))})]).then(function(r){var i=r[0],a=r[1]||[],o=t??0,s=n??9999999999,u={};return a.sort(function(f,d){return f.memberId===d.memberId?f.ts-d.ts:f.memberId<d.memberId?-1:1}),a.forEach(function(f){if(!(f.ts<o||f.ts>s)){var d=u[f.memberId];d||(d=[],u[f.memberId]=d),d.push(f.ts,f.imp,f.exp)}}),{producer_id:i.producerId,self_id:i.selfId,tariffs:i.tariffs,data:u}})}function Ql(e){for(var t=[],n=1;n<e.length;n++){var r=e[n-1],i=e[n];if(i-r>gt&&(t.push([r+gt,i-gt]),t.length>=Vl))break}return t}function sr(e){return $e().then(function(t){return We(Ue(t,"e15","readonly").getAllKeys(lr(e)))}).then(function(t){var n=(t||[]).map(function(r){return r[1]});return n.sort(function(r,i){return r-i}),{count:n.length,firstE15Ts:n.length?n[0]:null,lastE15Ts:n.length?n[n.length-1]:null,gaps:Ql(n)}})}function ur(e){return Promise.all([sn(e),sr(e),Jl()]).then(function(t){var n=t[0],r=t[1];return{siteId:e,firstE15Ts:r.firstE15Ts,lastE15Ts:r.lastE15Ts,count:r.count,gaps:r.gaps,lastVzTs:n.lastVzTs,syncedAt:n.syncedAt,days:r.firstE15Ts===null?0:Math.max(1,Math.round((r.lastE15Ts-r.firstE15Ts)/86400)),estimate:t[2]}})}function Jl(){return typeof navigator>"u"||!navigator.storage||!navigator.storage.estimate?Promise.resolve(null):navigator.storage.estimate().then(function(e){return e},function(){return null})}function eo(){return Br||(Br=!0,typeof navigator>"u"||!navigator.storage||!navigator.storage.persist)?Promise.resolve(null):navigator.storage.persist().then(function(e){return e},function(){return null})}function to(e,t){var n;return sn(t).then(function(r){n=r;var i=0;return r.lastE15Ts!==null&&r.lastE15Ts!==void 0&&(i=r.lastE15Ts+gt,Ur[t]||(i=Math.max(0,r.lastE15Ts-Kl))),Ur[t]=!0,no(e,t,i)}).then(function(){return e.getVzevRaw?e.getVzevRaw().catch(function(){return null}):Promise.resolve(null)}).then(function(r){return!r||!r.data?null:(r.producer_id!==void 0&&(n.producerId=r.producer_id),r.self_id!==void 0&&(n.selfId=r.self_id),r.tariffs&&(n.tariffs=r.tariffs),aa(t,r).then(function(){n.lastVzTs=ro(r)}))}).then(function(){return sr(t)}).then(function(r){return n.firstE15Ts=r.firstE15Ts,n.lastE15Ts=r.lastE15Ts,n.count=r.count,n.gaps=r.gaps,n.syncedAt=Math.floor(Date.now()/1e3),ra(n)}).then(function(){return eo()}).then(function(){return ur(t)})}function no(e,t,n){var r=0;function i(a){return r>=Hl?Promise.resolve():(r++,e.getEnergy("15m",Wr,a).then(function(o){return!Array.isArray(o)||!o.length?null:ia(t,o).then(function(){var s=o[o.length-1].ts;return o.forEach(function(u){u.ts>s&&(s=u.ts)}),o.length<Wr?null:i(s+gt)})}))}return i(n)}function ro(e){var t=e&&e.data||{},n=null;return Object.keys(t).forEach(function(r){var i=t[r];if(Array.isArray(i))for(var a=0;a+2<i.length;a+=3)(n===null||i[a]>n)&&(n=i[a])}),n}function io(e){return IDBKeyRange.bound([e,"",""],[e,"￿","￿"])}function jr(e,t,n){var r=Object.keys(n||{});return!e||!r.length?Promise.resolve(0):$e().then(function(i){var a=i.transaction("live","readwrite"),o=a.objectStore("live");return r.forEach(function(s){for(var u=n[s]||[],f=[],d=0;d<u.length;d++)f.push(u[d].t,jt(u[d].y));o.put({siteId:e,kind:t,id:String(s),pts:f})}),on(a).then(function(){return r.length})})}function Hr(e,t,n){var r=n??0;return $e().then(function(i){return We(Ue(i,"live","readonly").getAll(io(e)))}).then(function(i){var a={};return(i||[]).forEach(function(o){if(!(!o||o.kind!==t||!Array.isArray(o.pts))){for(var s=[],u=0;u+1<o.pts.length;u+=2)o.pts[u]<r||s.push({t:o.pts[u],y:o.pts[u+1]});s.length&&(a[o.id]=s)}}),a})}function ao(e){return Promise.all([$e().then(function(t){return We(Ue(t,"e15","readonly").getAll(lr(e)))}),$e().then(function(t){return We(Ue(t,"vz15","readonly").getAll(IDBKeyRange.bound([e,"",0],[e,"￿",9999999999])))})]).then(function(t){var n=[];return(t[0]||[]).sort(function(r,i){return r.ts-i.ts}).forEach(function(r){n.push(["e",r.ts,ut(r.imp_wh),ut(r.exp_wh),ut(r.pv_wh),r.partial?"1":"0"])}),(t[1]||[]).sort(function(r,i){return r.memberId===i.memberId?r.ts-i.ts:r.memberId<i.memberId?-1:1}).forEach(function(r){n.push(["v",r.ts,r.memberId,ut(r.imp),ut(r.exp),""])}),ir([ar,na,e],n)})}function ut(e){return e==null?"":String(e)}function lo(e,t){var n=Ul(e);if(!n.length||n[0][0]!==ar)return Promise.reject(new Error("not a gplug archive export"));if(n[0][1]!==na)return Promise.reject(new Error("unsupported export format "+n[0][1]));var r=n[0][2];if(t&&r!==t)return Promise.reject(new Error("site mismatch: file "+r+", device "+t));for(var i=t||r,a=[],o={},s=1;s<n.length;s++){var u=n[s];if(!(!u||!u.length)){if(u[0]==="e"){var f={ts:Number(u[1]),imp_wh:hn(u[2]),exp_wh:hn(u[3]),pv_wh:hn(u[4])};u[5]==="1"&&(f.partial=!0),a.push(f)}else if(u[0]==="v"){var d=u[2];o[d]||(o[d]=[]),o[d].push(Number(u[1]),Kr(u[3]),Kr(u[4]))}}}return ia(i,a).then(function(){return aa(i,{data:o})}).then(function(){return sr(i)}).then(function(p){return sn(i).then(function(v){return v.firstE15Ts=p.firstE15Ts,v.lastE15Ts=p.lastE15Ts,v.count=p.count,v.gaps=p.gaps,ra(v)})}).then(function(){return ur(i)})}function hn(e){return e===""||e===void 0?null:Number(e)}function Kr(e){return e===""||e===void 0?0:Number(e)}var oo=900*1e3,te={available:null,siteId:null,coverage:null,error:null,syncing:!1,otherSites:[]},Ht=[],dt=null,Vr=null;function Ln(){return te}function Kt(){Ht.forEach(function(e){try{e(te)}catch{}})}function la(e){return Ht.push(e),function(){var t=Ht.indexOf(e);t>=0&&Ht.splice(t,1)}}function so(e){return dt||(dt=Yl().then(function(t){return te.available=t,t?e.getSite().then(function(n){return te.siteId=n&&n.id?String(n.id):null,te.siteId?Zl().then(function(r){te.otherSites=r.filter(function(i){return i!==te.siteId})},function(){}).then(function(){return Rn(e)}).then(function(){return Vr===null&&typeof setInterval=="function"&&(Vr=setInterval(function(){Rn(e)},oo)),te}):(te.available=!1,Kt(),te)},function(){return Kt(),te}):(Kt(),te)}),dt)}function Rn(e){return!te.available||!te.siteId||te.syncing?Promise.resolve(te):(te.syncing=!0,to(e,te.siteId).then(function(t){te.coverage=t,te.error=null},function(t){te.error=t&&t.message?t.message:"sync failed"}).then(function(){return te.syncing=!1,Kt(),te}))}function kt(){return dt||Promise.resolve(te)}function uo(e){return Rn(e)}var oa={overview:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,vzev:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="4" r="2.2" fill="currentColor"/><circle cx="4" cy="15" r="2.2" fill="currentColor"/><circle cx="16" cy="15" r="2.2" fill="currentColor"/><path d="M10 6.5v4M10 10.5l-4.5 3M10 10.5l4.5 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,settings:c`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:c`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function qr(){return c`
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
      </a>`}var co=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/vzev",key:"nav.vzev",icon:"vzev",gate:"vzev",active:function(e){return e.indexOf("/vzev")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function Yr(e){return c`
      <nav class="nav" aria-label=${l("nav.menu")}>
        ${co.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="vzev"||e.showVzev)}).map(function(t){var n=t.active(e.path);return c`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${oa[t.icon]}
              <span>${l(t.key)}</span>
            </a>`})}
      </nav>`}function fo(e){var t=Fe.useRoute(e.routes),n=z(!1),r=n[0],i=n[1],a=z(!1),o=a[0],s=a[1],u=z(null),f=u[0],d=u[1],p=z(!1),v=p[0],h=p[1],g=z(!1),$=g[0],m=g[1],k=z(!1),_=k[0],M=k[1];Z(function(){return R.onStatus(function(b,x){b?d(null):(Q(l("error.offline"),{type:"error"}),d(x?new Date(x):new Date))})},[]),Z(function(){var b=!1;function x(E){M(E.available===!1),!b&&E.otherSites&&E.otherSites.length&&(b=!0,Q(l("banner.archive_site_changed",{id:E.siteId}),{type:"warn"}))}var B=la(x);return kt().then(x),B},[]),Z(function(){return R.poll(function(){R.getMeta().then(function(b){s(!!b&&typeof b.time=="number"&&b.time<1e9)}).catch(function(){})},6e4)},[]),Z(function(){R.getMeter().then(function(b){h(!!(b&&b.values))}).catch(function(){})},[]),Z(function(){var b=R.onVzevInfo(function(x){m(!!(x&&x.enabled))});return R.getVzevInfo().catch(function(){}),b},[]),Z(function(){i(!1)},[t.path]);var C=t.route.component;return c`
      <div class="shell">
        <aside class="sidebar">
          <${qr} />
          <${Yr} path=${t.path} showMeter=${v} showVzev=${$} />
          <div class="sidebar-foot">${"v1.1.6"}</div>
        </aside>

        <div class="topbar">
          <${qr} />
          <button class="burger" aria-label=${l("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${oa.burger}</button>
        </div>
        ${r?c`
          <div class="drawer">
            <${Yr} path=${t.path} showMeter=${v} showVzev=${$} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${o?c`<div class="banner banner-warn">${l("banner.rtc")}</div>`:null}
          ${_?c`<div class="banner banner-warn">${l("banner.archive")}</div>`:null}
          ${f?c`
            <div class="stale-note">${l("common.stale",{time:w.time(Math.floor(f.getTime()/1e3),"hm")})}</div>`:null}
          <${C} params=${t.params} />
        </main>

        <${nl} />
      </div>`}function Ie(e){return e==null||isNaN(e)?null:Number(e)}function Vt(e){return e<0?0:e>1?1:e}function cr(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function Dn(e,t){t=t||{};var n=!!t.vzev,r=Ie(t.co2);e=e||[];var i=e.length,a=0,o=0,s=0,u=0,f=0,d=0,p=0;e.forEach(function(b){if(cr(b)){d++;return}a+=b.pv_wh,o+=b.exp_wh,s+=b.imp_wh,u+=b.vzev_in_wh||0,f+=b.vzev_out_wh||0,p++});var v=i>0&&d/i>.2,h={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:v};if(n&&(h.autarkyVzev=null),i===0||v||p===0)return h;var g=Math.max(0,a-o),$=a-o+s;if(h.autarky=$>0?Vt(g/$):null,h.selfuse=a>0?Vt(g/a):null,n){var m=Math.max(0,s-u);h.autarkyVzev=$>0?Vt(($-m)/$):null}var k=Zn({imp_wh:s,exp_wh:o,pv_wh:a,vzev_in_wh:u,vzev_out_wh:f},t.tariffs||{}),_=k.saving_selfuse_chf||0,M=k.revenue_feedin_chf||0,C=n?(k.revenue_vzev_chf||0)-(k.cost_vzev_chf||0):0;return h.savingParts={selfuse:_,feedin:M,vzev:n?C:null},h.savingChf=Math.round((_+M+C)*100)/100,h.co2Kg=r&&r>0?g/1e3*r/1e3:null,h}function vo(e,t,n){if(!e)return null;n=n||{};var r=n.pv!==!1,i=n.bat!==!1,a=Ie(e.pv_w),o=Ie(e.bat_w),s=Ie(e.grid_w),u=r&&a===null,f=i&&o===null,d=s===null,p=r&&!u?Math.max(0,a):0,v=i&&!f?o:0,h=d?0:s,g=Ie(t);function $(I,T){return T?"unknown":I<1?"zero":"ok"}function m(I,T){return{watts:T?null:I,state:$(I,T)}}var k={},_=[];r&&(k.pv=m(p,u),_.push({node:"pv",dir:"in",watts:p,state:$(p,u)})),i&&(k.bat=m(Math.abs(v),f),_.push({node:"bat",dir:v<0?"out":"in",watts:Math.abs(v),state:$(Math.abs(v),f)}));var M=Math.max(0,p+v+h);k.haus=m(M,d||u||f);var C=Math.max(0,h),b=Math.max(0,-h),x=g!==null&&g>0?Math.min(g,C):0,B=g!==null&&g<0?Math.min(-g,b):0,E=h>0?"in":"out",A=h>0?C-x:b-B;if(k.netz=m(A,d),_.push({node:"netz",dir:E,watts:A,state:$(A,d)}),g!==null){var S=x+B;k.vzev=m(S,d),_.push({node:"vzev",dir:g>0?"in":"out",watts:S,state:$(S,d)})}return{nodes:k,edges:_}}function po(e){if(!e)return null;var t=e.nodes;if(t.netz.state==="unknown"||t.haus.state==="unknown")return{key:"flow.status_unknown",vars:{}};var n=0,r=0,i=0;e.edges.forEach(function(f){(f.node==="netz"||f.node==="vzev")&&(f.dir==="in"?n+=f.watts:r+=f.watts),f.node==="bat"&&f.dir==="out"&&(i+=f.watts)});var a=t.pv?t.pv.watts:0,o=t.haus.watts,s=Math.max(0,a-r-i),u=o>=1?Math.round(Vt(s/o)*100):a>=1?100:0;return r>=1?{key:"flow.status_export",vars:{pct:u,w:r}}:n>=1?s>=1?{key:"flow.status_import_pv",vars:{pct:u,w:n}}:{key:"flow.status_import",vars:{w:n}}:s>=1?{key:"flow.status_covered",vars:{pct:u}}:{key:"flow.status_idle",vars:{}}}function ho(e){if(!e||!e.length)return null;var t=null;if(e.forEach(function(i){(i.points||[]).forEach(function(a){(t===null||a.t>t)&&(t=a.t)})}),t===null)return null;var n=0,r=!1;return e.forEach(function(i){var a=(i.net_wh||0)<0?-1:1;(i.points||[]).forEach(function(o){o.t===t&&(n+=a*(o.y||0),r=!0)})}),r?n*4:null}var go={"comp.pv":"var(--c-production)","comp.selfuse":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.vzev":"var(--c-vzev)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-vzev-fill)"};function ge(e,t){return{key:e,value:Math.max(0,t||0),color:go[e]}}function mo(e,t){if(!e)return{cover:[],usage:[],unknown:!0};var n=Ie(e.pv_w),r=Ie(e.bat_w),i=Ie(e.grid_w),a=n===null||i===null,o=n===null?0:n,s=r===null?0:r,u=i===null?0:i,f=Ie(t),d=Math.max(0,u),p=Math.max(0,-u),v=Math.max(0,o-p),h=Math.max(0,s),g=Math.max(0,-s),$=f!==null&&f>0?Math.min(f,d):0,m=f!==null&&f<0?Math.min(-f,p):0;return{cover:[ge("comp.pv",v),ge("comp.battery",h),ge("comp.vzev",$),ge("comp.grid",d-$)],usage:[ge("comp.selfuse",v),ge("comp.charge",g),ge("comp.vzev",m),ge("comp.feedin",p-m)],unknown:a}}function $o(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,o=0;if(e.forEach(function(d){cr(d)||(t+=d.pv_wh,n+=d.exp_wh,r+=d.imp_wh,i+=d.vzev_in_wh||0,a+=d.vzev_out_wh||0,o++)}),o===0)return{cover:[],usage:[],unknown:!0};var s=Math.max(0,t-n),u=Math.min(Math.max(0,i),r),f=Math.min(Math.max(0,a),n);return{cover:[ge("comp.pv",s),ge("comp.vzev",u),ge("comp.grid",r-u)],usage:[ge("comp.selfuse",s),ge("comp.vzev",f),ge("comp.feedin",n-f)],unknown:!1}}function _o(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function yo(e){e=e||[];var t=0,n=0,r=0,i=0;if(e.forEach(function(o){cr(o)||(t+=o.pv_wh,n+=o.exp_wh,r+=o.imp_wh,i++)}),i===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var a=Math.max(0,t-n);return{prodSelf:a,prodFeedin:Math.max(0,n),consSelf:a,consImport:Math.max(0,r)}}var gn=900,sa=90;function fr(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function Gr(e){return e.friendlyName||e.name||e.id||"–"}function Zr(e){return e.friendlyName||e.name||e.id||"–"}function Qt(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function bo(e,t){if(!e||e.stale!==!0)return null;var n=typeof e.lastUpdate=="number"?e.lastUpdate:null;if(n===null)return l("prod.stale_unknown");var r=t-n>86400?"15m":"hm";return l("prod.stale",{time:w.time(n,r)})}function wo(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function tt(e){return e==null||isNaN(e)?null:Number(e)}function ko(e,t){if(!e)return null;var n=Number(e.grid_w)||0,r=Number(e.pv_w)||0;t=t||[];var i=t.filter(function(a){return fr(a.state)==="waiting"});return n<0&&i.length>0?{key:"hint.shift_load"}:n>0&&r>0?{key:"hint.use_pv"}:null}function ua(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function xo(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function Xr(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>sa;)a.shift()}function Qr(e,t){Object.keys(t||{}).forEach(function(n){var r=e[n]||(e[n]=[]),i={};r.forEach(function(o){i[o.t]=!0});var a=t[n].filter(function(o){return!i[o.t]});if(a.length)for(e[n]=a.concat(r).sort(function(o,s){return o.t-s.t});e[n].length>sa;)e[n].shift()})}function zo(e,t,n){for(var r=ua(e,t,n),i=[],a=[],o=0;o<r.grid.length;o++){var s=r.grid[o].t,u=tt(r.grid[o].y),f=tt(r.pv[o].y)||0,d=tt(r.bat[o].y)||0;u!==null&&(a.push({t:s,y:f+d}),i.push({t:s,y:f+d+u}))}return{cons:i,prod:a}}function ct(e){return c`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        ${e.dir?c`<span class="ov-stat-dir" aria-hidden="true"
          style=${"color:"+e.color}>${e.dir==="out"?"→":"←"}</span>`:null}
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?c`<${ve} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function Co(e){var t=e.newest,n=e.win,r=e.power,i=e.vzevW,a=t?tt(t.grid_w):null,o=t?tt(t.pv_w)||0:null,s=t?tt(t.bat_w)||0:null,u=t&&a!==null?o+s+a:null,f=t?o+s:null,d=t&&a!==null?Math.max(0,-a):null,p=t&&a!==null?Math.max(0,a):null,v=zo(r,n[0],n[1]),h=v.cons,g=v.prod;return c`
      <${L} group="grid" title=${l("panel.grid")}
        collapsible collapseKey="uebersicht.grid"
        defaultOpen=${!1}>
        <div class="ov-stats">
          <${ct} color="var(--c-consumption)" label=${l("stat.consumption")}
            tooltip=${l("tooltip.consumption")} value=${w.w(u)} />
          <${ct} color="var(--c-production)" label=${l("stat.production")}
            value=${w.w(f)} />
          <${ct} color="var(--c-export)" dir="out" label=${l("stat.export")}
            value=${w.w(d)} />
          <${ct} color="var(--c-import)" dir="in" label=${l("stat.gridop")}
            tooltip=${l("tooltip.gridop")} value=${w.w(p)} />
          ${i!==null?c`
            <${ct} color="var(--c-vzev)" dir=${i>=0?"in":"out"}
              label=${i>=0?l("stat.vzev_import"):l("stat.vzev_export")}
              tooltip=${l("tooltip.vzev")} value=${w.w(Math.abs(i))} />`:null}
        </div>
        <${wt} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${w.w}
          bands=${[{top:g,bottom:h,color:"var(--c-vzev-fill)"},{top:h,bottom:g,color:"var(--c-import-fill)"}]}
          series=${[{points:h,color:"var(--c-consumption)",label:l("stat.consumption")},{points:g,color:"var(--c-production)",label:l("stat.production")}]} />
      <//>`}function So(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:c`
      <${L} group="production" title=${l("panel.production")}
        collapsible collapseKey="uebersicht.production"
        defaultOpen=${!1}>
        ${e.notice?c`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${l("flow.prod_nodata")}</span>
            <button class="ov-hint-close" aria-label=${l("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=wo(i),o=a?"var(--c-battery)":"var(--c-production)",s=Qt(i),u=bo(i,Date.now()/1e3);return c`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Zr(i)}</span>
                  <span class=${"ov-sub-value"+(u?" is-stale":"")}
                    style=${u?"":"color:"+o}>${w.w(s)}</span>
                </div>
                ${u?c`<div class="ov-sub-meta" role="status"><span>${u}</span></div>`:null}
                <${wt} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${w.w}
                  series=${[{points:n[i.id]||[],color:o,label:a?l("stat.battery"):Zr(i)}]} />
              </div>`})}
        </div>
      <//>`}function Mo(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:c`
      <${L} group="loads" title=${l("panel.loads")} tooltip=${l("tooltip.loads")}
        collapsible collapseKey="uebersicht.loads"
        defaultOpen=${!1}>
        <div class="ov-subgrid">
          ${t.map(function(a){var o=fr(a.state),s=Qt(a),u=o==="inactive"?"waiting":"inactive",f=o==="inactive"?"action.request":"action.deactivate";return c`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${Gr(a)}</span>
                  <${Rt} state=${o} />
                </div>
                <div class="ov-sub-meta">
                  <span>${w.w(s)} · ${l("stat.rated")}</span>
                  <span>${l("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${wt} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${w.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:Gr(a)}]} />
                <div class="ov-sub-act">
                  <${G} small secondary=${u==="inactive"}
                    onClick=${function(){i(a.id,u)}}>${l(f)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}function Eo(e){var t=e.members;return!e.enabled||!t||!t.length?null:c`
      <${L} group="vzev" title=${l("panel.vzev")} tooltip=${l("tooltip.vzev")}
        collapsible collapseKey="uebersicht.vzev"
        defaultOpen=${!1}>
        <div class="ov-subgrid">
          ${t.map(function(n){var r=(n.net_wh||0)<0,i=n.points||[],a=r?i:i.map(function(s){return{t:s.t,y:s.y===null||s.y===void 0?s.y:-s.y}}),o=a.length?[a[0].t,a[a.length-1].t+900]:null;return c`
              <div key=${n.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${n.name||n.id}</span>
                  <span class="ov-sub-value" style="color:var(--c-vzev)">
                    ${l(r?"stat.vzev_export":"stat.vzev_import")+" "+w.wh(Math.abs(n.net_wh||0))}
                  </span>
                </div>
                ${n.address?c`<div class="ov-sub-meta"><span>${n.address}</span></div>`:null}
                <${wt} height=${140} yUnit="Wh" xUnit="h" timeWindow=${o}
                  yFormat=${function(s){return w.wh(Math.abs(s))}}
                  series=${[{points:a,color:"var(--c-vzev)",label:l(r?"stat.vzev_export":"stat.vzev_import")}]} />
              </div>`})}
        </div>
      <//>`}function Io(e){return e.hint?c`
      <div class="ov-hint" role="status">
        <svg class="ov-hint-icon" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
          <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
        </svg>
        <span class="ov-hint-text">${l(e.hint.key)}</span>
        <button class="ov-hint-close" aria-label=${l("common.close")}
          onClick=${e.onDismiss}>×</button>
      </div>`:null}var No={pv:{color:"var(--c-production)",label:"flow.pv"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"},netz:{color:"var(--c-grid)",label:"flow.netz"},vzev:{color:"var(--c-vzev)",label:"flow.vzev"}},To=30;function Po(e){return e.node==="pv"?"var(--c-production)":e.node==="bat"?"var(--c-battery)":e.node==="vzev"?"var(--c-vzev)":e.dir==="in"?"var(--c-import)":"var(--c-export)"}function Oo(e,t){return e==="haus"?{text:l("flow.consumption")}:!t||t.state!=="ok"?null:e==="pv"?{text:l("flow.production"),color:"var(--c-production)"}:e==="bat"?{text:t.dir==="in"?l("flow.bat_discharge"):l("flow.bat_charge")}:t.dir==="in"?{text:l("flow.import"),color:"var(--c-import)"}:{text:l("flow.export"),color:"var(--c-export)"}}function Ao(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?c`
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
      </g>`:null}function Jr(e){var t=No[e.id],n=e.node,r=Oo(e.id,e.edge);return c`
      <div class=${"hub-node hub-node-"+e.id+" is-"+n.state}
        style=${"--node-c:"+t.color}>
        <span class="hub-icon">
          <svg viewBox="-13 -13 26 26" aria-hidden="true">${Ao(e.id,0,0,t.color)}</svg>
        </span>
        <span class="hub-node-text">
          <span class="hub-node-label">${l(t.label)}</span>
          <span class="hub-node-value">${n.state==="unknown"?"–":w.w(n.watts)}</span>
          ${r?c`<span class="hub-node-cap"
            style=${r.color?"color:"+r.color:null}>${r.text}</span>`:null}
        </span>
      </div>`}function Lo(e){var t=e.edge,n=e.side==="src"?t.dir==="in":t.dir==="out",r=t.state==="unknown"?"var(--c-line)":Po(t);return c`
      <div class=${"hub-edge "+(n?"is-fwd":"is-back")+" is-"+t.state}
        style=${"--edge-c:"+r}>
        <span class="hub-edge-line" aria-hidden="true"></span>
        ${t.state==="zero"?null:c`
          <span class="hub-edge-pill">
            <svg class="hub-edge-arrow" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ${t.state==="unknown"?"–":w.w(t.watts)}
          </span>`}
      </div>`}function Ro(e){var t=vo(e.newest,e.vzevW,{pv:e.hasPv,bat:e.hasBattery}),n=po(t),r=e.vzevW!==null&&e.vzevW!==void 0,i=c`
      <span class=${"live-badge"+(e.live?" is-live":"")}>
        <span class="live-dot" aria-hidden="true"></span>
        ${e.live?l("flow.live"):e.asOf?l("flow.as_of",{time:w.time(e.asOf,"hm")}):l("flow.offline")}
      </span>`;function a(s){return t?t.edges.find(function(u){return u.node===s}):null}function o(s,u){var f=s.filter(function(v){return t.nodes[v]});if(!f.length)return null;var d=c`
        <div class=${"hub-tier hub-tier-"+u}>
          ${f.map(function(v){return c`<${Jr} key=${v} id=${v} node=${t.nodes[v]} edge=${a(v)} />`})}
        </div>`,p=c`
        <div class=${"hub-links hub-links-"+u}>
          ${f.map(function(v){return c`<${Lo} key=${v} edge=${a(v)} side=${u} />`})}
        </div>`;return u==="src"?c`${d}${p}`:c`${p}${d}`}return c`
      <${L} group="grid" title=${l("flow.title")} tooltip=${l("tooltip.flow")} badge=${i}>
        ${n?c`<p class="flow-status">${l(n.key,{w:w.w(n.vars.w),pct:n.vars.pct})}</p>`:null}
        ${t?c`
          <div class="hub-wrap">
            <div class="hub" role="img" aria-label=${l("flow.aria")}>
              ${o(["pv","bat"],"src")}
              <div class="hub-haus">
                <${Jr} id="haus" node=${t.nodes.haus} />
              </div>
              ${o(["netz","vzev"],"grid")}
            </div>
          </div>`:c`<div class="hub-empty">${l("flow.status_unknown")}</div>`}
        ${r?c`<p class="flow-note">${l("flow.vzev_mean_note")}</p>`:null}
      <//>`}function ei(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return c`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?c`<${ve} text=${e.note} />`:null}
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
                  ${e.arrows&&e.arrows[i.key]?c`<span class="comp-leg-dir"
                    aria-hidden="true">${e.arrows[i.key]}</span>`:null}
                  ${l(i.key)} · ${e.fmt(i.value)}
                </span>`})}
          </div>`}
      </div>`}var Do={"comp.grid":"←","comp.vzev":"←"},Fo={"comp.feedin":"→","comp.vzev":"→"};function Wo(e){var t=z("now"),n=t[0],r=t[1],i=n==="now"?mo(e.sample,e.vzevW):$o(e.records),a=n==="now"?w.w:w.wh,o=n==="today"?l("flow.comp_batt_note"):null;return c`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${l("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${l("flow.comp_today")}</button>
        </div>
        <${ei} title=${l("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} arrows=${Do} />
        <${ei} title=${l("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${o} arrows=${Fo} />
      </div>`}function Uo(e){return c`
      <${L} group="grid" title=${l("flow.comp_title")} collapsible collapseKey="ov.comp"
        defaultOpen=${!1}>
        <${Wo} sample=${e.sample} vzevW=${e.vzevW} records=${e.records} />
      <//>`}function ca(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return c`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?c`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function Bo(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?l("kpi.incomplete"):null;function r(d){return d==null?"–":Math.round(d*100)+" %"}var i=t.savingParts,a=i?[l("kpi.saving_selfuse")+": "+w.chf(i.selfuse,!0),l("kpi.saving_feedin")+": "+w.chf(i.feedin,!0),i.vzev!==null&&i.vzev!==void 0?l("kpi.saving_vzev")+": "+w.chf(i.vzev,!0):null].filter(Boolean).join(`
`):l("tooltip.kpi_saving"),o=t.autarkyVzev!==null&&t.autarkyVzev!==void 0?l("kpi.autarky_vzev")+": "+r(t.autarkyVzev):null,s=!!e.showSaving,u=s?c`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":w.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.saving")}<${ve} text=${n||a} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:c`
        <div class="kpi-hero">
          <${ca} big ratio=${t.autarky} color="var(--c-vzev)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${l("kpi.autarky")}<${ve} text=${n||l("tooltip.kpi_autarky")} /></span>
            ${o?c`<span class="kpi-sub">${o}</span>`:null}
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,f=[];return s&&f.push(c`<${mn} key="au" gauge ratio=${t.autarky} color="var(--c-vzev)"
        label=${l("kpi.autarky")} tip=${n||l("tooltip.kpi_autarky")} sub=${o} />`),f.push(c`<${mn} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${l("kpi.selfuse_short")} tip=${n||l("tooltip.kpi_selfuse")} />`),e.showCo2&&f.push(c`<${mn} key="co" value=${Ho(t.co2Kg)} color="var(--c-production)"
        label=${l("kpi.co2")} tip=${n||l("tooltip.kpi_co2",{g:e.co2Factor})} />`),c`
      <div class="kpi-band">
        ${u}
        <div class="kpi-support">${f}</div>
      </div>`}function mn(e){return c`
      <div class="kpi-tile">
        ${e.gauge?c`<${ca} ratio=${e.ratio} color=${e.color} />`:c`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${ve} text=${e.tip} /></span>
          ${e.sub?c`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function jo(){return c`
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
      </div>`}function Ho(e){return e==null||isNaN(e)?"–":e>=1e3?w.num(e/1e3,2)+" t":w.num(e,e<10?2:1)+" kg"}function Ko(){var e=z(null),t=e[0],n=e[1],r=z(null),i=r[0],a=r[1],o=z([]),s=o[0],u=o[1],f=z([]),d=f[0],p=f[1],v=z([]),h=v[0],g=v[1],$=z(!1),m=$[0],k=$[1],_=z(null),M=_[0],C=_[1],b=z(null),x=b[0],B=b[1],E=z(function(){return Math.floor(Date.now()/1e3)}),A=E[0],S=E[1],I=z(null),T=I[0],H=I[1],j=z({}),y=j[0],N=j[1],F=z(!1),U=F[0],_e=F[1],pe=z(0),q=pe[1],ae=Se({}),de=Se({}),ye=Se(!1),O=A,K=O-gn,Y=[K,O];Z(function(){R.getSite().then(function(W){n(W)}).catch(function(){}),R.getMeta().then(function(W){B(W)}).catch(function(){})},[]),Z(function(){var W=!0;function fe(){W&&(ye.current=!0,q(function(ce){return ce+1}))}return kt().then(function(ce){if(W){if(!ce||!ce.available||!ce.siteId){fe();return}var Ze=Math.floor(Date.now()/1e3)-gn;return Promise.all([Hr(ce.siteId,"prod",Ze).catch(function(){return{}}),Hr(ce.siteId,"load",Ze).catch(function(){return{}})]).then(function(ze){W&&(Qr(ae.current,ze[0]),Qr(de.current,ze[1]),fe())})}},fe).catch(fe),function(){W=!1}},[]),Z(function(){return R.poll(function(){R.getEnergy("15m",96).then(function(W){if(Array.isArray(W)){var fe=Ln();if(!fe.available||!fe.siteId||!W.length){C(W);return}or(fe.siteId,W[0].ts,W[W.length-1].ts).then(function(ce){C(ce&&ce.self_id?qi(W,ce):W)},function(){C(W)})}}).catch(function(){})},6e4)},[]),Z(function(){if(R.getVzevMembers)return R.poll(function(){R.getVzevMembers().then(function(W){Array.isArray(W)&&g(W)}).catch(function(){})},1e4)},[]),Z(function(){var W=R.onVzevInfo(function(fe){k(!!(fe&&fe.enabled))});return R.getVzevInfo().catch(function(){}),W},[]),Z(function(){return R.poll(function(){var W=Math.floor(Date.now()/1e3);S(W);var fe=W-gn;Promise.all([R.getPower().catch(function(){return null}),R.getLoads().catch(function(){return null}),R.getProductions().catch(function(){return null})]).then(function(ce){var Ze=ce[0],ze=ce[1],Ke=ce[2];if(Ze&&a(Ze),ze&&u(ze),Ke&&p(Ke),(Ze||ze||Ke)&&H(W),_e(!0),Ke&&Ke.forEach(function(Xe){Xr(ae.current,Xe.id,W,Qt(Xe),fe)}),ze&&ze.forEach(function(Xe){var La=fr(Xe.state)==="active"?Qt(Xe):0;Xr(de.current,Xe.id,W,La,fe)}),ye.current&&(Ke||ze)){var lt=Ln();lt&&lt.available&&lt.siteId&&(Ke&&jr(lt.siteId,"prod",ae.current).catch(function(){}),ze&&jr(lt.siteId,"load",de.current).catch(function(){}))}})},1e4)},[]);var ne=xo(i),je=ua(i,K,O),P=ho(h),se=ko(ne,s),ie=se&&!y[se.key]?se:null,le=!!(d&&d.length&&_o(je.pv.map(function(W){return W.y}))&&!y["flow.prod_nodata"]);function be(){var W=Object.assign({},y);W["flow.prod_nodata"]=!0,N(W)}var He=new Date;He.setHours(0,0,0,0);var Te=Math.floor(He.getTime()/1e3),Pe=(M||[]).filter(function(W){return W.ts>=Te}),zt=!!(h&&h.length),xe=x&&x.tariffs||{},Ge=xe.co2_g_kwh===void 0||xe.co2_g_kwh===null||xe.co2_g_kwh===""?128:Number(xe.co2_g_kwh),un=Dn(Pe,{tariffs:xe,vzev:zt,co2:Ge}),cn=Number(xe.grid_import_chf_kwh)>0||Number(xe.grid_feedin_chf_kwh)>0,Ct=Ge>0,Sa=Pe.some(function(W){return W.partial}),Ma=Sa?l("kpi.today_until",{time:w.time(A,"hm")}):l("kpi.today"),Ea=(d||[]).some(function(W){return String(W.productionType||"").toUpperCase()==="BATTERY"}),Ia=(d||[]).some(function(W){return String(W.productionType||"").toUpperCase()!=="BATTERY"}),Na=!!(ne&&T&&A-T<25&&i&&typeof i.now=="number"&&i.now-ne.ts<To),Ta=t&&t.location?t.location:null,Pa=T?c`
      <span class="ov-updated">${l("common.stale",{time:w.time(T,"hm")})}</span>`:null;function Oa(W,fe){R.setLoadState(W,fe).then(function(){return R.getLoads()}).then(function(ce){ce&&u(ce)}).catch(function(){Q(l("error.toggle"),{type:"error"})})}function Aa(){if(se){var W=Object.assign({},y);W[se.key]=!0,N(W)}}return c`
      <div>
        <${Be} title=${t&&t.name?t.name:l("page.overview")}
          subtitle=${Ta} actions=${Pa} />
        ${U?c`
          <${bt}>
            <${Io} hint=${ie} onDismiss=${Aa} />
            <div class="ov-top">
              <section class="ov-top-flow" aria-labelledby="ov-sec-now">
                <h2 class="ov-section" id="ov-sec-now">${l("section.now")}</h2>
                <${Ro} newest=${ne} vzevW=${P} hasBattery=${Ea} hasPv=${Ia}
                  live=${Na} asOf=${ne?ne.ts:null} />
              </section>
              <section class="ov-top-side" aria-labelledby="ov-sec-today">
                <h2 class="ov-section" id="ov-sec-today">${l("section.today")}</h2>
                <${Bo} kpis=${un} period=${Ma} showSaving=${cn}
                  showCo2=${Ct} co2Factor=${Ge} />
              </section>
            </div>
            <${Uo} sample=${ne} vzevW=${P} records=${Pe} />
            <section class="ov-history" aria-labelledby="ov-sec-history">
              <h2 class="ov-section" id="ov-sec-history">${l("section.history")}</h2>
              <${Co} newest=${ne} win=${Y} vzevW=${P} power=${i} />
              <${So} productions=${d} history=${ae.current} win=${Y}
                notice=${le} onDismissNotice=${be} />
              <${Mo} loads=${s} history=${de.current} win=${Y} onToggle=${Oa} />
              <${Eo} members=${h} win=${Y} enabled=${m} />
            </section>
          <//>`:c`<${jo} />`}
      </div>`}var Vo=[10,25,50],Nt=2880,Ne={"15m":{label:"history.res.15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",count:Nt,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",count:Nt,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",count:Nt,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",count:Nt,target:"1q",tk:"q",slot:7776e3}},qo=["15m","1h","1d","1w","1mo","1q"],$n={"15m":240*900,"1h":240*900,"1d":125*86400,"1w":125*86400,"1mo":589*86400,"1q":589*86400},Yo={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},Oe={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function Go(e){return e==null?null:e/1e3}function Zo(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-Ne[t].slot}function Xo(e,t){if(!e.length)return[];var n=Yo[t]||e.length,r={};e.forEach(function(u){r[u.ts]=u});for(var i=e[e.length-1].ts,a=[],o=e[0].ts,s=0;s<n&&o>=i;s++)a.push(r[o]||{ts:o,__blank:!0}),o=Zo(o,t);return a}function _n(e,t){var n=Go(e);return n===null?"–":w.num(n,2)}function Qo(e){if(e==null)return c`<span>–</span>`;var t=e>0?"val-pos":e<0?"val-neg":"";return c`<span class=${t}>${w.chf(e,!0)}</span>`}function ft(e,t){return e==null?c`<span>–</span>`:c`<span class=${t||""}>${w.chf(e,!1)}</span>`}function Jo(e,t,n){var r=[{key:"ts",label:l("history.col.time")},{key:"imp",label:l("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(r.push({key:"impcost_ht",label:l("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),r.push({key:"impcost_nt",label:l("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):r.push({key:"impcost",label:l("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&r.push({key:"exp",label:l("history.col.feedin"),unit:"[kWh]",align:"right"}),r.push({key:"vzev",label:l(e?"history.col.vzevexport":"history.col.vzevimport"),unit:"[kWh]",align:"right"}),r.push({key:"saldo",label:l("history.col.vzevsaldo"),unit:"[CHF]",align:"right"}),e&&(r.push({key:"saving",label:l("history.col.selfuse"),unit:"[CHF]",align:"right"}),r.push({key:"autarky",label:l("history.col.autarky"),unit:"[%]",align:"right"}),r.push({key:"selfuserate",label:l("history.col.selfuserate"),unit:"[%]",align:"right"}),r.push({key:"ersparnis",label:l("history.col.ersparnis"),unit:"[CHF]",align:"right"})),r}function ti(e){return e==null?"–":w.num(e*100,0)+" %"}function vr(e){var t=e.revenue_vzev_chf,n=e.cost_vzev_chf;return t===null&&n===null?null:(t||0)-(n||0)}function es(e,t,n){for(var r=Ne[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var o=e[a+1];if(o){var s=Math.round((e[a].ts-o.ts)/r)-1;s>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function ts(e){var t=e.coverage;if(!t||t.firstE15Ts===null)return null;var n=Math.floor(Date.now()/1e3)-e.span,r=(t.gaps||[]).filter(function(i){return i[1]>=n});return c`
      <p class="verlauf-archive-note">
        <span class="badge badge-inactive">${l("history.archive_badge",{days:t.days})}</span>
        ${r.length?c`
          <span class="verlauf-archive-gap">
            ${l("history.archive_gap",{from:w.time(r[0][0],"1d"),to:w.time(r[r.length-1][1],"1d"),count:r.length})}
          </span>`:null}
      </p>`}function ns(){var e=z(Oe.res),t=e[0],n=e[1],r=z(0),i=r[0],a=r[1],o=z(Oe.pageSize),s=o[0],u=o[1],f=z(Oe.chfMode),d=f[0],p=f[1],v=z(Oe.chartMode),h=v[0],g=v[1],$=z({records:null,tariffs:{},producer:!1,err:!1,archived:!1,coverage:null}),m=$[0],k=$[1],_=z(!0),M=_[0],C=_[1];Oe.res=t,Oe.pageSize=s,Oe.chfMode=d,Oe.chartMode=h,Z(function(){var P=!1;C(!0);var se=Ne[t];return kt().then(function(ie){var le=!!(ie.available&&ie.siteId),be=Math.floor(Date.now()/1e3),He=be-$n[t];return Promise.all([le?Xl(ie.siteId,He,be).catch(function(){return null}):R.getEnergy("15m",se.count).catch(function(){return null}),R.getMeta().catch(function(){return null}),R.getProductions().catch(function(){return null}),le?or(ie.siteId,He,be).catch(function(){return null}):Promise.resolve(null)]).then(function(Te){if(!P){var Pe=Te[0],zt=Te[1],xe=Te[2],Ge=Te[3];if(Pe===null){k({records:null,tariffs:{},producer:!1,err:!0,archived:!1,coverage:null}),C(!1);return}Ge&&(Pe=qi(Pe,Ge));var un=zt&&zt.tariffs||{},cn=Array.isArray(xe)&&xe.some(function(Ct){return Ct&&Ct.productionType==="PHOTOVOLTAIC"});k({records:Pe,tariffs:un,producer:cn,err:!1,archived:le,coverage:ie.coverage||null}),C(!1)}})}),function(){P=!0}},[t]);var b=ln(m.tariffs),x=qe(function(){if(!m.records)return[];var P=m.records;b&&(P=m.records.map(function(ie){return Ki(ie,m.tariffs)}));var se=Tr(P,"15m",Ne[t].target,m.tariffs);return se.slice().sort(function(ie,le){return le.ts-ie.ts})},[m.records,m.tariffs,t,b]),B=qe(function(){if(t!=="15m"||!m.records)return{};var P=Tr(m.records,"15m","15m",m.tariffs),se=yl(P,3),ie={};return se.forEach(function(le){ie[P[le].ts]=!0}),ie},[m.records,m.tariffs,t]),E=x.some(function(P){return(P.exp_wh||0)>0}),A=Jo(m.producer,E,b),S=x.some(function(P){return(P.vzev_in_wh||0)>0||(P.vzev_out_wh||0)>0}),I=m.tariffs.co2_g_kwh===void 0||m.tariffs.co2_g_kwh===null||m.tariffs.co2_g_kwh===""?128:Number(m.tariffs.co2_g_kwh),T={tariffs:m.tariffs,vzev:S,co2:I},H=Number(m.tariffs.grid_import_chf_kwh)>0||Number(m.tariffs.grid_feedin_chf_kwh)>0,j=qe(function(){var P={};return x.forEach(function(se){P[se.ts]=Dn([se],T)}),P},[x,m.tariffs,S,I]),y=qe(function(){return Dn(x,T)},[x,m.tariffs,S,I]),N=m.archived?!(m.coverage&&m.coverage.firstE15Ts!==null&&m.coverage.firstE15Ts>Math.floor(Date.now()/1e3)-$n[t]):m.records?m.records.length<Ne[t].count:!0,F=es(x,t,N),U=x.length;F.filter(function(P){return P.kind==="row"});var _e=Math.max(1,Math.ceil(U/s)),pe=Math.min(i,_e-1),q=pe*s,ae=Math.min(q+s,U),de=rs(F,q,ae);function ye(P){n(P),a(0)}function O(P){u(+P),a(0)}function K(){var P=A.map(function(le){return le.label+(le.unit?" "+le.unit:"")}),se=x.map(function(le){return ls(le,A,t,m.producer,j[le.ts])}),ie=ir(P,se);vs(Bl(t),ie)}var Y=qe(function(){return ss(Xo(x,t),h,d,m.producer)},[x,h,d,m.producer,t]),ne=qe(function(){return us(x,t,m.producer)},[x,t,m.producer]),je=c`
      <div class="verlauf-actions">
        <${an} label=${l("history.resolution")} value=${t}
          onChange=${ye}
          options=${qo.map(function(P){return{value:P,label:l(Ne[P].label)}})} />
        <${G} secondary onClick=${K} disabled=${U===0}>
          ${l("history.export")}<//>
      </div>`;return c`
      <div>
        <${Be} title=${l("page.history")} subtitle=${l("history.subtitle")}
          actions=${je} />

        ${m.archived?c`<${ts} coverage=${m.coverage}
          span=${$n[t]} />`:null}

        ${m.err?c`
          <${L}><p class="placeholder-text">${l("common.nodata")}</p><//>`:null}

        ${!m.err&&M?c`
          <${L}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}

        ${!m.err&&!M?c`
          <div>
            ${x.length?c`<${fs} summary=${ne} kpis=${y} showSaving=${H} />`:null}

            <${L} group="vzev" title=${l("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${l("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(P){return c`<button key=${P[0]} type="button" role="tab"
                      class=${"seg-btn"+(h===P[0]?" seg-btn-active":"")}
                      aria-selected=${h===P[0]}
                      onClick=${function(){g(P[0])}}>${l(P[1])}</button>`})}
                </div>
                ${h==="net"?c`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${d}
                      onChange=${function(P){p(P.target.checked)}} />
                    <span>${l("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${Y.points.length?c`
                <${Gn} height=${220}
                  yUnit=${Y.yUnit} xUnit=${l("history.chart.xunit")}
                  yFormat=${Y.yFormat}
                  signedMagnitude=${Y.signedMagnitude}
                  xTickFormat=${function(P){return os(t,P)}}
                  points=${Y.points} />
                <div class="chart-legend">
                  ${Y.legend.map(function(P,se){return c`<span key=${se} class="legend-item"><span class="legend-swatch" style=${"background:"+P.color}></span>${P.label}</span>`})}
                </div>`:c`<p class="placeholder-text">${l("common.nodata")}</p>`}
            <//>

            <${L} title=${l("history.table.title")}
              collapsible collapseKey="verlauf.table">
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${A.map(function(P){return c`<th key=${P.key} class=${P.align==="right"?"ta-r":""}>
                          ${P.label}${P.unit?c`<span class="th-unit"> ${P.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${U===0?c`
                      <tr><td class="table-empty" colspan=${A.length}>${l("common.nodata")}</td></tr>`:de.map(function(P){return is(P,A,t,B,m.producer,j)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${l("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${s}
                        onChange=${function(P){O(P.target.value)}}>
                        ${Vo.map(function(P){return c`<option key=${P} value=${P}>${P}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${l("table.pageinfo",{from:U===0?0:q+1,to:ae,total:U})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${l("table.prev")}
                      disabled=${pe===0} onClick=${function(){a(pe-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${l("table.next")}
                      disabled=${pe>=_e-1} onClick=${function(){a(pe+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${l("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function rs(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var o=e[a];if(o.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(o)}else i>=t&&i<n&&r.push(o)}return r}function is(e,t,n,r,i,a){if(e.kind==="boundary")return c`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${l("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return c`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${l("history.gap")}</td></tr>`;var o=e.rec,s=!!r[o.ts],u=a&&a[o.ts]||null;return c`
      <tr key=${"r"+o.ts}>
        ${t.map(function(f){return c`<td key=${f.key} class=${f.align==="right"?"ta-r":""}>
            ${as(f.key,o,n,s,i,u)}
          </td>`})}
      </tr>`}function as(e,t,n,r,i,a){switch(e){case"ts":return c`<span class="verlauf-ts">
          ${w.time(t.ts,Ne[n].tk)}
          ${r?c`<span class="peak-mark" title=${l("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?c`<${ve} text=${l("history.partial")} />`:null}
        </span>`;case"imp":return _n(t.imp_wh);case"impcost":return ft(t.cost_import_chf,"val-neg");case"impcost_ht":return ft(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return ft(t.cost_import_nt_chf,"val-neg");case"exp":return _n(t.exp_wh);case"vzev":return _n(dr(t,i));case"saldo":return Qo(vr(t));case"saving":return ft(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return ti(a&&a.autarky);case"selfuserate":return ti(a&&a.selfuse);case"ersparnis":return ft(a&&a.savingChf,a&&a.savingChf>0?"val-pos":"");default:return""}}function dr(e,t){return(t?e.vzev_out_wh:e.vzev_in_wh)||0}function ls(e,t,n,r,i){return t.map(function(a){switch(a.key){case"ts":return w.time(e.ts,Ne[n].tk);case"imp":return yn(e.imp_wh);case"impcost":return Je(e.cost_import_chf);case"impcost_ht":return Je(e.cost_import_ht_chf);case"impcost_nt":return Je(e.cost_import_nt_chf);case"exp":return yn(e.exp_wh);case"vzev":return yn(dr(e,r));case"saldo":return Je(vr(e));case"saving":return Je(e.saving_selfuse_chf);case"autarky":return ni(i&&i.autarky);case"selfuserate":return ni(i&&i.selfuse);case"ersparnis":return Je(i&&i.savingChf);default:return""}})}function ni(e){return e==null?"":(e*100).toFixed(0)}function yn(e){return e==null?"":(e/1e3).toFixed(2)}function Je(e){return e==null?"":Number(e).toFixed(2)}function os(e,t){switch(e){case"15m":case"1h":return w.time(t,"hm");case"1d":case"1w":return w.time(t,"dm");case"1mo":return w.time(t,"1mo");case"1q":return w.time(t,"q");default:return w.time(t,Ne[e].tk)}}function ss(e,t,n,r){var i=e.slice().sort(function(v,h){return v.ts-h.ts}),a=function(v){return w.num(v,2)},o=function(v){return v==null?0:v/1e3};if(t==="bilanz"){var s="var(--c-production)",u="var(--c-export)",f="var(--c-import)",d=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var h=yo([{pv_wh:v.pv_wh||0,exp_wh:v.exp_wh||0,imp_wh:v.imp_wh||0}]);return{t:v.ts,bars:[{segments:[{value:o(h.prodSelf),color:s,label:l("history.bilanz.selfuse")},{value:o(h.prodFeedin),color:u,label:l("history.bilanz.feedin")},{value:-o(h.consImport),color:f,label:l("history.bilanz.import")}]}]}});return{points:d,yUnit:"kWh",yFormat:a,signedMagnitude:!0,legend:[{color:s,label:l("history.bilanz.selfuse")},{color:u,label:l("history.bilanz.feedin")},{color:f,label:l("history.bilanz.import")}]}}var p;return n?p=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var h=vr(v);return{t:v.ts,y:h===null?null:h,color:(h||0)<0?"var(--c-import)":"var(--c-vzev)"}}):p=i.map(function(v){if(v.__blank)return{t:v.ts,y:null};var h=v.imp_wh===null||v.imp_wh===void 0?null:v.imp_wh/1e3;if(h&&h>0)return{t:v.ts,y:-h,color:"var(--c-import)",label:l("history.chart.legend_import")};var g=dr(v,r),$=g==null?null:g/1e3;return $&&$>0?{t:v.ts,y:$,color:"var(--c-vzev)",label:l("history.chart.legend_export")}:{t:v.ts,y:h===null?null:0,color:"var(--c-import)",label:l("history.chart.legend_import")}}),{points:p,yUnit:n?"CHF":"kWh",yFormat:n?function(v){return w.chf(v,!0)}:a,signedMagnitude:!n,legend:n?[{color:"var(--c-vzev)",label:l("history.chart.legend_saldo")},{color:"var(--c-import)",label:l("history.chart.legend_import")}]:[{color:"var(--c-vzev)",label:l("history.chart.legend_export")},{color:"var(--c-import)",label:l("history.chart.legend_import")}]}}function us(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(d,p){return d.ts-p.ts}),o=function(d){return a.map(function(p){return p[d]===null||p[d]===void 0?null:p[d]/1e3})},s=i&&e.length>=13,u=function(d,p){var v=o(p);return{name:d,avg:En(v),trend:$l(v),yoy:s?_l(v):null}},f=[u(l("history.col.gridimport"),"imp_wh")];return n&&f.push(u(l("history.summary.pv"),"pv_wh")),{periodLabel:l(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:f}}function cs(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return c`
      <div class="summary-cell">
        <span class="summary-label">${l("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":w.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function fs(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":w.num(i*100,0)+" %"}return c`
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
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":w.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return c`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":w.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${cs(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?c`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${l("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+w.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function vs(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function ds(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const ps=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],hs=(function(){const e={};return ps.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function gs(e){const t=hs[ds(e)];return t===void 0?null:t}function ms(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function fa(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function $s(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function _s(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function ys(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function bs(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function ri(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var ws=1e4,ks=90;function Fn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function ii(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:gs(t)}})}function va(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function Ce(e,t){var n=va(e,t);return n?Fn(n.raw):null}function nt(e){return function(t){return t.i18nKey===e}}function da(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function ai(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function pa(e,t,n){var r=Ce(e,da(t,n));return r!==null?r:fa(Ce(e,ai(t,n,"in")),Ce(e,ai(t,n,"out")))}function xs(e,t){var n=null;return[1,2,3].forEach(function(r){var i=pa(e,t,r);i!==null&&(n=(n||0)+i)}),n}function pr(e){var t=xs(e,"power"),n=Ce(e,nt("meter.f.power_net")),r=!1;if(n===null){var i=Ce(e,nt("meter.f.power_import")),a=Ce(e,nt("meter.f.power_export"));n=fa(i,a),n!==null&&(r=!0)}var o=$s(n,t);return n!==null?{net:n*o,derived:r,scale:o}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function li(e){return c`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${ve} text=${e.tip} />
      </span>`}function zs(){return c`<span class="meter-tag meter-tag-derived">${l("meter.derived")}</span>`}function Cs(){return c`
      <span class="meter-tag meter-tag-register">${l("meter.register")}
        <${ve} text=${l("meter.tip.register")} /></span>`}function ha(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-export)":""}function Ss(e){var t=e.resolved,n=pr(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,o=l(a?"meter.importing":"meter.exporting");return c`
      <${L} group="grid" title=${l("meter.section.power")}
        tooltip=${l("meter.tip.net")}
        badge=${i?zs():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+ha(r)}>
            ${w.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${o}</span>
        </div>
      <//>`}var Ms=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function Es(e){var t=e.resolved,n=[1,2,3],r=Ms.map(function(d){var p=n.map(function(h){return pa(t,d.role,h)}),v=p.some(function(h){return h!==null});return{m:d,cells:p,any:v}}).filter(function(d){return d.any});if(r.length===0)return null;var i=r.filter(function(d){return d.m.role==="power"})[0],a=i?ms(i.cells):null,o=null,s=r.filter(function(d){return d.m.role==="pf"})[0];if(i&&!s){var u=r.filter(function(d){return d.m.role==="reactive"})[0];if(u){var f=n.map(function(d,p){return _s(i.cells[p],u.cells[p])});f.some(function(d){return d!==null})&&(o=f)}}return c`
      <${L} title=${l("meter.section.phases")} tooltip=${l("meter.tip.phases")}
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
              ${r.map(function(d){return c`
                  <tr>
                    <th scope="row" class="meter-th-metric">
                      ${l(d.m.key)}
                      ${d.m.unit?c`<span class="meter-unit">[${d.m.unit}]</span>`:null}
                      ${d.m.tip?c`<${ve} text=${l(d.m.tip)} />`:null}
                    </th>
                    ${d.cells.map(function(p){var v=d.m.signed?ha(p):"";return c`<td style=${v?"color:"+v:""}>
                        ${p===null?"–":w.num(p,d.m.prec)}</td>`})}
                  </tr>`})}
              ${o?c`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${li} tip=${l("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${o.map(function(d){return c`<td>${d===null?"–":w.num(d,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?c`
          <div class="meter-imbalance">
            <${li} tip=${l("meter.tip.imbalance")}>${l("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${w.w(a)}</span>
          </div>`:null}
      <//>`}function Is(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=va(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?Fn(r.raw):null;return c`
      <${L} group="production" title=${l("meter.section.registers")}
        tooltip=${l("meter.tip.registers")} collapsible collapseKey="zaehler.registers"
        badge=${r&&(i===1||i===2)?c`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${l("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${l(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?c`
          <dl class="meter-reg-list">
            ${n.map(function(a){var o=Fn(a.raw);return c`
                <div class="meter-reg">
                  <dt>${l(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${Cs()}</dt>
                  <dd>${o===null?String(a.raw):w.num(o,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function Ns(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?w.num(i.min,1)+" / "+w.num(i.max,1):"–"}return c`
      <${L} title=${l("meter.section.minmax")} subtitle=${l("meter.since_open")}
        tooltip=${l("meter.tip.minmax")} collapsible collapseKey="zaehler.minmax">
        <dl class="meter-reg-list">
          ${[1,2,3].map(function(i){return t.u[i]?c`
              <div class="meter-reg">
                <dt>${l("meter.voltage")} ${l("meter.phase",{n:i})} <span class="meter-unit">[V]</span></dt>
                <dd>${r(t.u[i])}</dd>
              </div>`:null})}
          ${t.peakImp?c`
            <div class="meter-reg">
              <dt>${l("meter.peak_import")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-import)"}>${w.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?c`
            <div class="meter-reg">
              <dt>${l("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-export)"}>${w.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function Ts(e){var t=e.resolved,n=pr(t).scale;function r(s){return n===1e3&&s.group==="power"&&s.unit==="W"?"kW":s.unit}var i=t.filter(function(s){return s.desc}),a=t.filter(function(s){return!s.desc});function o(s){var u=!!s.desc,f=s.raw!==null&&typeof s.raw=="object"?JSON.stringify(s.raw):String(s.raw);return c`
        <tr>
          <td class="meter-raw-name">${s.name}</td>
          <td class="meter-raw-val">${f}</td>
          <td class="meter-raw-unit">${u&&s.desc.unit?r(s.desc):""}</td>
          <td class="meter-raw-label">${l(u?s.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return c`
      <${L} title=${l("meter.section.raw")}
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
              ${i.map(o)}
              ${a.length?c`
                <tr class="meter-raw-sep"><td colspan="4">${l("meter.raw.other")}</td></tr>
                ${a.map(o)}`:null}
            </tbody>
          </table>
        </div>
      <//>`}function Ps(){var e=z(void 0),t=e[0],n=e[1],r=z(null),i=r[0],a=r[1],o=z(!1),s=o[0],u=o[1],f=z(null),d=f[0],p=f[1],v=Se([]),h=Se({u:{},peakImp:0,peakExp:0});Z(function(){return R.poll(function(){R.getMeter().then(function(m){if(n(m&&m.values?m.values:null),p(m&&typeof m.now=="number"?m.now:Math.floor(Date.now()/1e3)),!(!m||!m.values)){var k=ii(m.values),_=h.current;[1,2,3].forEach(function(S){var I=Ce(k,da("voltage",S));I!==null&&(_.u[S]=bs(_.u[S],I))});var M=pr(k),C=M.net,b=Ce(k,nt("meter.f.power_import")),x=Ce(k,nt("meter.f.power_export"));b!==null&&(b=b*M.scale),x!==null&&(x=x*M.scale),b===null&&C!==null&&(b=C>0?C:0),x===null&&C!==null&&(x=C<0?-C:0),b!==null&&(_.peakImp=ri(_.peakImp,b)),x!==null&&(_.peakExp=ri(_.peakExp,x)),a({u:Object.assign({},_.u),peakImp:_.peakImp,peakExp:_.peakExp});var B=Ce(k,nt("meter.f.energy_import")),E=C!==null?C>0:b!==null&&b>0,A=v.current;for(A.push({reg:B,importing:E});A.length>ks;)A.shift();u(ys(A))}}).catch(function(){})},ws)},[]);var g=t?ii(t):[],$=d?Math.max(0,Math.floor(Date.now()/1e3)-d):null;return c`
      <div>
        <${Be} title=${l("page.meter")} subtitle=${l("meter.subtitle")}
          actions=${d?c`
            <span class="meter-updated">
              ${l("meter.updated",{time:w.time(d,"hm")})}
              ${$!==null?c`<span class="meter-age"> · ${l("meter.age",{s:$})}</span>`:null}
            </span>`:null} />

        ${s?c`<div class="banner banner-warn">${l("meter.stale")}</div>`:null}

        ${t===void 0?c`<${L}><p class="placeholder-text">${l("common.loading")}</p><//>`:null}
        ${t===null?c`<${L}><p class="placeholder-text">${l("meter.empty")}</p><//>`:null}
        ${t?c`
          <${Ss} resolved=${g} />
          <${Es} resolved=${g} />
          <${Is} resolved=${g} />
          <${Ns} stats=${i} />
          <${Ts} resolved=${g} />`:null}
      </div>`}var Os=50;function As(e,t){if(!e||!e.data)return[];var n=e.producer_id,r=n&&e.data[n],i={},a=[],o=r?[r]:Object.keys(e.data).map(function(s){return e.data[s]});return o.forEach(function(s){if(s)for(var u=0;u+2<s.length;u+=3){var f=s[u];t&&(f<t[0]||f>=t[1])||i[f]||(i[f]=!0,a.push(f))}}),a.sort(function(s,u){return u-s}),a}function Ls(e,t,n){var r=El(e,t,n),i=w.time(e,"hm"),a=w.time(e+900,"hm");return!r||r.prodWh<=0?l("explain.noprod",{from:i,to:a}):l("explain.sentence",{from:i,to:a,prod:w.wh(r.prodWh),member:w.wh(r.memberImpWh),total:w.wh(r.totalImpWh),share:w.num(r.sharePct,0),alloc:w.wh(r.allocatedWh)})}function ga(e){var t=z(0),n=t[0],r=t[1],i=As(e.raw,e.range),a=i.slice(0,(n+1)*Os),o=a.length<i.length;return c`
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
              ${a.map(function(s){return c`<li key=${s} class="explain-slot">${Ls(s,e.raw,e.memberId)}</li>`})}
            </ul>
            ${o?c`
              <button class="explain-more" onClick=${function(){r(n+1)}}>
                ${l("explain.more")}
              </button>`:null}`}
      </div>`}var oi=!1,Rs=2*3600,Ds=c`<svg viewBox="0 0 24 24" class="vz-house" aria-hidden="true"><path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="13" width="4" height="6" fill="currentColor"/></svg>`,Fs=c`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16l-3.6.6.6-3.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Ws=c`<svg viewBox="0 0 20 20" class="vz-plus" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,si=c`<svg viewBox="0 0 24 24" class="vz-grid-ico" aria-hidden="true"><path d="M6 3v18M18 3v18M6 8h12M6 14h12M3 6l3 2 3-2M15 6l3 2 3-2M3 16l3 2 3-2M15 16l3 2 3-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function vt(e){return e&&(e.type==="PRODUCER"||e.typ==="P")}function Us(e){if(!e||!e.length)return{};var t=e[e.length-1];return t&&t.members||{}}function Tt(e){var t=e.member,n=t.name||t.id,r=e.noData;return c`
      <div class=${"vz-card"+(e.own?" vz-card-own":"")+(e.producer?" vz-card-producer":"")}>
        <button class="vz-edit" aria-label=${l("vzev.edit")}
          onClick=${function(){Fe.navigate("/vzev/mitglied/"+encodeURIComponent(t.id))}}>
          ${Fs}
        </button>
        <div class="vz-house-wrap">${Ds}</div>
        <span class="vz-name">${n}</span>
        <span class="vz-type">${l(e.producer?"vzev.type.producer":"vzev.type.consumer")}</span>
        ${e.own?c`<span class="vz-ownbadge">${l("vzev.own")}</span>`:null}
        ${r?c`
          <span class="vz-nodata" role="status">
            ${r.lastTs?l("vzev.nodata.badge",{time:w.time(r.lastTs,"15m")}):l("vzev.nodata.never")}
          </span>`:null}
        ${!e.own&&e.onRemove?c`
          <button class="vz-remove" onClick=${e.onRemove}>${l("vzev.remove")}</button>`:null}
      </div>`}function Bs(e){var t=e.wh,n="vz-chip vz-chip-"+(e.dir==="grid"?"grid":"vzev");return c`
      <span class=${n}>
        <span class="vz-chip-dir">${l(e.dir==="grid"?"vzev.flow.fromgrid":"vzev.flow.fromproducer")}</span>
        <span class="vz-chip-val">${w.wh(t)}</span>
      </span>`}function js(){var e=z(null),t=e[0],n=e[1],r=z({}),i=r[0],a=r[1],o=z([]),s=o[0],u=o[1],f=z(!1),d=f[0],p=f[1],v=z(null),h=v[0],g=v[1],$=z(oi),m=$[0],k=$[1],_=z(null),M=_[0],C=_[1],b=Se(!0);function x(){R.getVzevMembersList().then(function(O){b.current&&(n(O),p(!1))}).catch(function(){b.current&&(n([]),p(!0))}),R.getVzevRaw().then(function(O){b.current&&g(O||null)}).catch(function(){b.current&&g(null)})}Z(function(){b.current=!0,x(),R.getVzevDiscovered().then(function(K){b.current&&u(K)}).catch(function(){b.current&&u([])});var O=R.poll(function(){R.getVzevFlows("15m",1).then(function(K){b.current&&a(Us(K&&K.flows))}).catch(function(){})},2e3);return function(){b.current=!1,O()}},[]);function B(){oi=!0,k(!0)}function E(O){R.get("/api/vzev/members?action=remove&id="+encodeURIComponent(O.id)).then(function(){Q(l("vzev.removed"),{type:"info"}),x()}).catch(function(){Q(l("vzev.saveerror"),{type:"error"})})}var A=!!(h&&h.self_id!=null&&h.self_id===h.producer_id),S=A?c`
      <${G} secondary onClick=${function(){Fe.navigate("/vzev/abrechnung")}}>
        ${l("vzev.billing")} ›
      <//>`:null,I=c`<${Be} title=${l("page.vzev")} subtitle=${l("vzev.subtitle")} actions=${S} />`;if(t===null)return c`<div>${I}<${L}><p class="placeholder-text">${l("common.loading")}</p><//></div>`;var T=null,H=[];t.forEach(function(O){O.own||O.is_own?T=O:H.push(O)}),t.forEach(function(O){vt(O)});var j=c`
      <${L} class="vz-discovery">
        <div class="vz-discovery-head">
          <h2 class="card-title">${l("vzev.discovery.title")}</h2>
          <span class="card-subtitle">${l("vzev.discovery.hint")}</span>
        </div>
        ${s.length===0?c`<p class="placeholder-text">${l("vzev.discovery.empty")}</p>`:c`
            <ul class="vz-discovery-list">
              ${s.map(function(O){return c`
                  <li key=${O.id} class="vz-discovery-item">
                    <span class="vz-disc-name">${O.name||O.id}</span>
                    <span class="vz-disc-meta">${O.id}${O.url?" · "+O.url:""}</span>
                    <${G} small onClick=${function(){Fe.navigate("/vzev/mitglied/"+encodeURIComponent(O.id))}}>
                      ${Ws} ${l("vzev.add")}
                    <//>
                  </li>`})}
            </ul>`}
      <//>`;function y(O){var K=i[O.id];return typeof K=="number"?K:null}var N=0;if(h&&h.data)for(var F in h.data){var U=Lr(h,F);U&&U>N&&(N=U)}function _e(O){if(!h||!h.data)return null;var K=Lr(h,O.id),Y=N||Math.floor(Date.now()/1e3);return K===null?{lastTs:null}:Y-K>Rs?{lastTs:K}:null}var pe=m?null:c`
      <${L} class="vz-info">
        <div class="vz-info-head">
          <h2 class="card-title">${l("vzev.info.title")}</h2>
          <button class="vz-info-close" aria-label=${l("common.close")} onClick=${B}>×</button>
        </div>
        <p class="vz-info-body">${l("vzev.info.body")}</p>
        <${G} small secondary onClick=${B}>${l("vzev.info.dismiss")}<//>
      <//>`,q=M?(function(){for(var O=0;O<t.length;O++)if(t[O].id===M)return t[O];return null})():null,ae=q&&h?c`
      <${L} class="vz-drill">
        <${ga} raw=${h} memberId=${M}
          title=${l("explain.title")+" – "+(q.name||M)}
          onClose=${function(){C(null)}} />
      <//>`:null;function de(){var O=H;return c`
        <${L} group="vzev" class="vz-graph-card">
          <div class="vz-graph" role="img" aria-label=${l("vzev.graph.aria")}>
            <div class="vz-ring">
              ${O.length===0?c`<p class="placeholder-text vz-ring-empty">${l("vzev.empty")}</p>`:O.map(function(K){var Y=vt(K),ne=y(K);return c`
                      <div key=${K.id} class="vz-node vz-node-peer">
                        <${Tt} member=${K} producer=${Y} noData=${_e(K)}
                          onRemove=${function(){E(K)}} />
                        ${ne!==null&&ne>0?c`
                          <span class=${"vz-flow "+(Y?"vz-flow-vzev":"vz-flow-grid")}>
                            <span class="vz-flow-arrow">${Y?"→":"←"}</span>
                            ${w.wh(ne)}
                          </span>`:null}
                        ${!Y&&h?c`
                          <button class="vz-explain-btn" onClick=${function(){C(K.id)}}>
                            ${l("explain.open")}
                          </button>`:null}
                      </div>`})}
            </div>

            ${T?c`
              <div class="vz-node vz-node-own">
                <${Tt} member=${T} own=${!0} producer=${vt(T)} />
              </div>`:null}

            <div class="vz-arrow-grid" aria-hidden="true">
              <span class="vz-arrow-line"></span>
            </div>

            <div class="vz-node vz-node-net">
              <div class="vz-netnode">
                <div class="vz-grid-icowrap">${si}</div>
                <span class="vz-net-label">${l("vzev.net")}</span>
              </div>
            </div>
          </div>
        <//>`}function ye(){return c`
        <div class="vz-list">
          ${T?c`
            <div class="vz-list-item vz-list-own">
              <${Tt} member=${T} own=${!0} producer=${vt(T)} />
            </div>`:null}
          ${H.map(function(O){var K=vt(O),Y=y(O);return c`
              <div key=${O.id} class="vz-list-item">
                <${Tt} member=${O} producer=${K} noData=${_e(O)}
                  onRemove=${function(){E(O)}} />
                ${Y!==null&&Y>0?c`<${Bs} dir=${K?"producer":"grid"} wh=${Y} />`:null}
                ${!K&&h?c`
                  <button class="vz-explain-btn" onClick=${function(){C(O.id)}}>
                    ${l("explain.open")}
                  </button>`:null}
              </div>`})}
          <div class="vz-list-item vz-list-net">
            <div class="vz-netnode vz-netnode-row">
              <div class="vz-grid-icowrap">${si}</div>
              <span class="vz-net-label">${l("vzev.net")}</span>
            </div>
          </div>
        </div>`}return c`
      <div>
        ${I}
        ${d?c`<div class="banner banner-warn">${l("vzev.loaderror")}</div>`:null}
        ${pe}
        <div class="vz-graph-wrap">${de()}</div>
        <div class="vz-list-wrap">${ye()}</div>
        ${ae}
        ${j}
      </div>`}function ui(e){return e&&(e.type==="PRODUCER"||e.typ==="P")?"P":"C"}function Hs(e){if(e==null||e===0)return"";var t=new Date(e*1e3);function n(r){return(r<10?"0":"")+r}return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function Ks(e){if(!e)return null;var t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e));if(!t)return null;var n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),0,0,0,0);return Math.floor(n.getTime()/1e3)}function Vs(e){var t=e.params&&e.params.id||null,n=z(""),r=n[0],i=n[1],a=z(""),o=a[0],s=a[1],u=z("C"),f=u[0],d=u[1],p=z(""),v=p[0],h=p[1],g=z(""),$=g[0],m=g[1],k=z([]),_=k[0],M=k[1],C=z(!!t),b=C[0],x=C[1],B=z(!1),E=B[0],A=B[1],S=z(!1),I=S[0],T=S[1],H=z(""),j=H[0],y=H[1];Z(function(){var q=!1;return Promise.all([R.getVzevMembersList().catch(function(){return[]}),t?R.getVzevDiscovered().catch(function(){return[]}):Promise.resolve([])]).then(function(ae){if(!q){var de=ae[0]||[],ye=ae[1]||[];M(de);for(var O=null,K=0;K<de.length;K++)if(de[K].id===t){O=de[K];break}if(O)x(!0),i(O.name||""),s(O.location||O.loc||""),d(ui(O)),h(O.metering_point||""),m(Hs(O.entry_ts));else if(t){x(!1);for(var Y=null,ne=0;ne<ye.length;ne++)if(ye[ne].id===t){Y=ye[ne];break}Y&&(i(Y.name||""),s(Y.location||Y.loc||""),d(ui(Y)))}A(!0)}}),function(){q=!0}},[t]);function N(){if(f!=="P")return!1;for(var q=0;q<_.length;q++){var ae=_[q];if(ae.id!==t&&(ae.type==="PRODUCER"||ae.typ==="P"))return!0}return!1}function F(){if(y(""),!r.trim()){y(l("vzev.form.err.name"));return}if(N()){y(l("vzev.form.err.producer"));return}T(!0);var q="/api/vzev/members?action=upsert&id="+encodeURIComponent(t||"")+"&name="+encodeURIComponent(r.trim())+"&loc="+encodeURIComponent(o.trim())+"&typ="+encodeURIComponent(f)+"&mp="+encodeURIComponent(v.trim()),ae=Ks($);ae!==null&&(q+="&entry="+ae),R.get(q).then(function(){Q(l("vzev.saved"),{type:"info"}),Fe.navigate("/vzev")}).catch(function(){T(!1),Q(l("vzev.saveerror"),{type:"error"})})}function U(){T(!0),R.get("/api/vzev/members?action=remove&id="+encodeURIComponent(t)).then(function(){Q(l("vzev.removed"),{type:"info"}),Fe.navigate("/vzev")}).catch(function(){T(!1),Q(l("vzev.saveerror"),{type:"error"})})}var _e=l(b?"vzev.form.edit":"vzev.form.add"),pe=c`<${Be} title=${_e} subtitle=${l("vzev.form.subtitle")} />`;return E?c`
      <div>
        ${pe}
        <${L} class="vz-form-card">
          <div class="vz-form">
            <${Dt} label=${l("vzev.form.name")} value=${r}
              placeholder=${l("vzev.form.name.ph")}
              onInput=${function(q){i(q)}} />
            <${Dt} label=${l("vzev.form.loc")} value=${o}
              placeholder=${l("vzev.form.loc.ph")}
              onInput=${function(q){s(q)}} />
            <${an} label=${l("vzev.form.typ")} value=${f}
              onChange=${function(q){d(q),y("")}}
              options=${[{value:"C",label:l("vzev.type.consumer")},{value:"P",label:l("vzev.type.producer")}]} />

            <${Dt} label=${l("vzev.form.metering_point")} value=${v}
              placeholder=${l("vzev.form.metering_point.ph")} maxlength=${40}
              onInput=${function(q){h(q)}} />
            <p class="vz-form-hint">${l("vzev.form.metering_point.hint")}</p>

            <label class="field field-block">
              <span class="field-label">${l("vzev.form.entry_ts")}</span>
              <input class="textfield" type="date" value=${$}
                onInput=${function(q){m(q.target.value)}} />
            </label>
            <p class="vz-form-hint">${l("vzev.form.entry_ts.hint")}</p>

            ${j?c`<p class="vz-form-err" role="alert">${j}</p>`:null}

            <div class="vz-form-actions">
              <${G} onClick=${F} disabled=${I}>${l("vzev.form.save")}<//>
              <${G} secondary onClick=${function(){Fe.navigate("/vzev")}}
                disabled=${I}>${l("vzev.form.cancel")}<//>
              ${b?c`
                <${G} danger onClick=${U} disabled=${I}>${l("vzev.remove")}<//>`:null}
            </div>
          </div>
        <//>
      </div>`:c`<div>${pe}<${L}><p class="placeholder-text">${l("common.loading")}</p><//></div>`}var Wn="var(--c-production)",qs="var(--c-vzev)";function ma(e){return!e||!e.expected?null:Math.round(e.complete/e.expected*100)}function Jt(e){var t=ma(e);return t!==null&&t<100}function Ys(e){e=e||{};var t=Number(e.vzev_import_chf_kwh);return isNaN(t)?null:t}function ci(e,t){return e+"-Q"+t}function bn(e,t){return Math.floor(new Date(e,t,1,0,0,0,0).getTime()/1e3)}function Gs(e){for(var t=new Date,n=t.getFullYear(),r=Math.floor(t.getMonth()/3)+1,i=[],a=0;a<7;a++){for(var o=r-a,s=n;o<1;)o+=4,s-=1;i.push({value:ci(s,o),label:ci(s,o)})}return i}function Zs(e){var t=/^(\d{4})-Q([1-4])$/.exec(String(e||""));return t?{year:parseInt(t[1],10),q:parseInt(t[2],10)}:null}function Xs(e){var t=Zs(e);if(!t)return[];var n=(t.q-1)*3;return[bn(t.year,n),bn(t.year,n+1),bn(t.year,n+2)]}function fi(e,t,n,r){var i=Xs(t),a=Array.isArray(e)?e:[];return a.map(function(o,s){var u;o==null?u=0:typeof o=="number"?u=o:u=n(o);var f=o&&typeof o=="object"&&typeof o.ts=="number"?o.ts:i[s]!==void 0?i[s]:(i[0]||0)+s*2592e3;return{t:f,y:u==null||isNaN(u)?0:u,color:r}})}function vi(e){return typeof e.wh=="number"?e.wh/1e3:typeof e.kwh=="number"?e.kwh:typeof e.y=="number"?e.y:0}function Qs(e){var t=e.quality;if(!t||!t.expected)return null;var n=ma(t),r=e.byId||{},i=[],a=t.perMember||{};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var s=(a[o].expected||0)-(a[o].have||0);if(s>0){var u=r[o]&&r[o].name||o;i.push(l("billing.quality.member_missing",{name:u,n:s}))}}return c`
      <${L} class="billing-quality">
        <div class="billing-quality-head">
          <h2 class="card-title">${l("billing.quality.title")}
            <${ve} text=${l("tooltip.provisorisch")} /></h2>
          ${Jt(t)?c`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        </div>
        <p class="billing-quality-line">${l("billing.quality.complete",{pct:n})}</p>
        ${t.provisional>0?c`<p class="billing-quality-line">${l("billing.quality.provisional",{n:t.provisional})}</p>`:null}
        ${t.missing>0?c`<p class="billing-quality-line">${l("billing.quality.missing",{n:t.missing})}</p>`:null}
        ${i.length===0&&!Jt(t)?c`<p class="billing-quality-line billing-quality-ok">${l("billing.quality.ok")}</p>`:null}
        ${i.map(function(f,d){return c`<p key=${d} class="billing-quality-line">${f}</p>`})}
      <//>`}function Js(e){var t=e.member,n=e.tariffs||{},r=e.period,i=Ys(n),a=typeof t.wh=="number"?t.wh/1e3:null,o=t.entry_ts&&r&&t.entry_ts>r[0]?t.entry_ts:r?r[0]:null,s=e.capReference,u=s!=null&&i!==null&&i>s?l("billing.detail.method_effektiv"):l("billing.detail.method_pauschal");function f(d,p){return c`<div class="stmt-line"><span class="stmt-key">${d}</span><span class="stmt-val">${p}</span></div>`}return c`
      <div class="stmt">
        ${f(l("billing.detail.period"),r?w.time(o,"1d")+" – "+w.time(r[1]-1,"1d"):"–")}
        ${f(l("billing.detail.member"),(t.name||t.id)+(t.location?", "+t.location:""))}
        ${t.metering_point?f(c`${l("billing.detail.meteringpoint")} <${ve} text=${l("tooltip.zaehlpunkt")} />`,t.metering_point):null}
        ${f(l("billing.detail.energy"),a===null?"–":w.num(a,2)+" kWh")}
        ${typeof t.ht_wh=="number"?f(l("billing.detail.energy_ht"),w.num(t.ht_wh/1e3,2)+" kWh"):null}
        ${typeof t.nt_wh=="number"?f(l("billing.detail.energy_nt"),w.num(t.nt_wh/1e3,2)+" kWh"):null}
        ${f(l("billing.detail.tariff"),i===null?"–":w.num(i,2)+" CHF/kWh")}
        ${f(l("billing.detail.amount"),typeof t.chf=="number"?w.chf(t.chf):"–")}
        <p class="stmt-residual">${l("billing.detail.residual")}</p>
        ${f(c`${l("billing.detail.key")} <${ve} text=${l("tooltip.verteilschluessel")} />`,l("billing.detail.key_value"))}
        ${f(l("billing.detail.method"),u)}
      </div>`}function di(e){var t=e.wh!==null&&e.wh!==void 0?e.wh/1e3:null,n=z(!1),r=n[0],i=n[1],a=z(!1),o=a[0],s=a[1],u=!!e.member;return c`
      <${L} group="vzev" title=${e.title} subtitle=${e.subtitle}>
        ${e.provisional?c`<span class="billing-provisional">${l("billing.provisional.badge")}</span>`:null}
        <div class="billing-metrics">
          <div class="billing-metric">
            <span class="billing-metric-label">${e.kwhLabel}</span>
            <span class="billing-metric-value" style=${"color:"+Wn}>
              ${t===null?"–":w.num(t,2)+" kWh"}
            </span>
          </div>
          <div class="billing-metric">
            <span class="billing-metric-label">${e.chfLabel}</span>
            <span class="billing-metric-value" style=${"color:"+qs}>
              ${e.chf===null||e.chf===void 0?"–":w.chf(e.chf)}
            </span>
          </div>
        </div>
        ${e.note?c`<p class="billing-card-note">${e.note}</p>`:null}
        <${Gn} height=${180} yUnit="kWh" xUnit=${l("billing.axis.month")}
          xTickFormat=${function(f){return w.time(f,"1mo")}}
          yFormat=${function(f){return w.num(f,1)+" kWh"}}
          points=${e.points} />
        ${u?c`
          <div class="billing-card-actions no-print">
            <${G} small secondary onClick=${function(){i(!r)}}>
              ${l(r?"billing.member.collapse":"billing.member.expand")}
            <//>
            ${e.raw?c`
              <${G} small secondary onClick=${function(){s(!o)}}>
                ${l("explain.open")}
              <//>`:null}
          </div>`:null}
        ${u&&r?c`
          <${Js} member=${e.member} tariffs=${e.tariffs}
            period=${e.period} capReference=${e.capReference} />`:null}
        ${u&&o&&e.raw?c`
          <${ga} raw=${e.raw} memberId=${e.member.id}
            range=${e.period} onClose=${function(){s(!1)}} />`:null}
      <//>`}function eu(e){var t=e.data,n=e.quarter,r=t.total||{},i=fi(r.months,n,vi,Wn),a=Array.isArray(t.members)?t.members:[];return c`
      <div class="billing-grid">
        <${di}
          title=${l("billing.total.title")}
          subtitle=${n}
          kwhLabel=${l("billing.producer.energy")}
          chfLabel=${l("billing.producer.profit")}
          wh=${typeof r.exp_wh=="number"?r.exp_wh:null}
          chf=${typeof r.revenue_chf=="number"?r.revenue_chf:null}
          points=${i} />
        ${a.map(function(o){return c`
            <${di} key=${o.id}
              title=${o.name||o.id}
              kwhLabel=${l("billing.producer.energy")}
              chfLabel=${l("billing.producer.profit")}
              wh=${typeof o.wh=="number"?o.wh:null}
              chf=${typeof o.chf=="number"?o.chf:null}
              points=${fi(o.months,n,vi,Wn)}
              member=${o} tariffs=${t.tariffs} period=${t.range}
              raw=${t.raw} capReference=${e.capReference}
              provisional=${e.provisional} />`})}
      </div>`}function tu(e){var t=e.info||{},n=t.representative_name,r=t.connection_point_id;return!n&&!r?null:c`
      <${L} class="billing-header-card">
        ${n?c`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.rep")}</span> ${n}${t.representative_contact?" · "+t.representative_contact:""}</p>`:null}
        ${r?c`<p class="billing-hdr-line"><span class="billing-hdr-key">${l("billing.connpoint")}</span> ${r}</p>`:null}
      <//>`}function nu(e,t){var n=Array.isArray(e.members)?e.members:e.self?[e.self]:[],r=Jt(e.quality),i=[l("billing.detail.member"),l("billing.detail.meteringpoint"),l("billing.detail.energy")+" [kWh]",l("billing.detail.energy_ht")+" [kWh]",l("billing.detail.energy_nt")+" [kWh]",l("billing.detail.amount")+" [CHF]",l("billing.provisional.badge")],a=n.map(function(d){return[d.name||d.id,d.metering_point||"",typeof d.wh=="number"?(d.wh/1e3).toFixed(2):"",typeof d.ht_wh=="number"?(d.ht_wh/1e3).toFixed(2):"",typeof d.nt_wh=="number"?(d.nt_wh/1e3).toFixed(2):"",typeof d.chf=="number"?d.chf.toFixed(2):"",r?"1":"0"]}),o=ir(i,a),s=new Blob([o],{type:"text/csv;charset=utf-8"}),u=URL.createObjectURL(s),f=document.createElement("a");f.href=u,f.download="gplug-abrechnung-"+t+".csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),setTimeout(function(){URL.revokeObjectURL(u)},0)}function ru(){var e=Gs(),t=z(e.length?e[0].value:""),n=t[0],r=t[1],i=z(null),a=i[0],o=i[1],s=z("loading"),u=s[0],f=s[1];Z(function(){var _=!1;return f("loading"),kt().then(function(M){var C=Yi(n);return!M.available||!M.siteId||!C?null:or(M.siteId,C[0],C[1]-1).then(function(b){var x=b&&b.data?Object.keys(b.data):[];return b&&b.producer_id&&x.length?b:null},function(){return null})}).then(function(M){if(!_)return R.getVzevBilling(n,M).then(function(C){if(!_){if(!C||typeof C!="object"){o(null),f("empty");return}o(C),f("ready")}}).catch(function(){_||(o(null),f("error"))})}),function(){_=!0}},[n]);function d(_){if(!_)return!1;var M=String(_.role||_.type||"").toUpperCase();if(M==="PRODUCER"||M==="P")return!0;if(M==="CONSUMER"||M==="C")return!1;var C=_.self||{};return _.self||typeof C.cost_grid_chf=="number"||typeof _.cost_grid_chf=="number"||typeof _.import_wh=="number"?!1:!!(_.total||Array.isArray(_.members)&&_.members.length)}var p=a&&a.tariffs?Gi(a.tariffs):null,v=a?Jt(a.quality):!1,h={};a&&Array.isArray(a.members)&&a.members.forEach(function(_){_&&_.id!==void 0&&(h[_.id]=_)});var g=!!a&&d(a),$;u==="loading"?$=c`<${L}><p class="placeholder-text">${l("common.loading")}</p><//>`:u==="error"?$=c`<${L}><p class="placeholder-text">${l("billing.error")}</p><//>`:u==="empty"||!a?$=c`<${L}><p class="placeholder-text">${l("common.nodata")}</p><//>`:g?$=c`<${eu} data=${a} quarter=${n}
        capReference=${p} provisional=${v} />`:$=c`<${L}><p class="placeholder-text">${l("billing.producer_only")}</p><//>`;var m=u==="ready"&&g,k=c`
      <div class="billing-actions">
        <${an} label=${l("billing.quarter")} value=${n}
          options=${e}
          onChange=${function(_){r(_)}} />
        ${m?c`
          <${G} secondary small onClick=${function(){nu(a,n)}}>${l("billing.export")}<//>
          <${G} secondary small onClick=${function(){window.print()}}>${l("billing.print")}<//>`:null}
      </div>`;return c`
      <div class="billing-page">
        <${Be} title=${l("page.billing")} subtitle=${l("billing.subtitle")}
          actions=${k} />
        ${m?c`<${tu} info=${a.info} />`:null}
        ${$}
        ${m?c`<${Qs} quality=${a.quality} byId=${h} />`:null}
        <${L} class="billing-note-card">
          <p class="billing-note">${l("billing.note")}</p>
        <//>
      </div>`}var iu=["site","loads","productions","grid","tariffs","vzev","daten","gplug","pro"],au={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",tarife:"tariffs",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},lu={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",tariffs:"tarife",vzev:"vzev",daten:"daten",gplug:"gplug",pro:"pro"},ou={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",tariffs:"settings.tab.tariffs",vzev:"settings.tab.vzev",daten:"settings.tab.data",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},su={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},uu=["simulator","shelly","homeassistant","gplug"],$a=["simulator","homeassistant","gplug"],Un=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],en=["PHOTOVOLTAIC","BATTERY"];function cu(e){return e==null||String(e).trim()===""?!1:en.indexOf(String(e).toUpperCase())<0}var _a=["W","kW"],hr=["Wh","kWh"],ya=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh"],fu={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,vzev_export_chf_kwh:.22,vzev_import_chf_kwh:.22,co2_g_kwh:128};function X(e){return e==null||String(e).trim()===""}function we(e){return!X(e)&&!isNaN(Number(e))}function et(e){return X(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function ba(e,t){var n={};X(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!we(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!we(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};et(i.on)||(n["url.on"]="settings.err.url"),et(i.off)||(n["url.off"]="settings.err.url"),et(i.status)||(n["url.status"]="settings.err.url")}else et(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&X(e.token)&&(n.token="settings.err.token");return n}function Re(e){return!X(e)&&/\s/.test(String(e))}function tn(e){if(X(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<-10||t>10}function wa(e){return!X(e)&&(!we(e)||Number(e)<=0)}function ka(e){if(X(e))return!1;var t=Number(e);return isNaN(t)||Math.floor(t)!==t||t<=0}function xa(e,t){X(e.field)&&(t.field="settings.err.field"),Re(e.sensor)&&(t.sensor="settings.err.sensor"),Re(e.scale_field)&&(t.scale_field="settings.err.scale_field"),tn(e.scale_base)&&(t.scale_base="settings.err.scale_base"),wa(e.max_power)&&(t.max_power="settings.err.max_power"),Re(e.energy_field)&&(t.energy_field="settings.err.energy_field"),ka(e.stale_after)&&(t.stale_after="settings.err.stale_after"),!X(e.energy_dimension)&&hr.indexOf(e.energy_dimension)<0&&(t.energy_dimension="settings.err.energy_dimension"),Re(e.energy_scale_field)&&(t.energy_scale_field="settings.err.scale_field"),tn(e.energy_scale_base)&&(t.energy_scale_base="settings.err.scale_base")}var vu=["sensor","scale_field","scale_base","max_power","energy_field","stale_after","energy_dimension","energy_scale_field","energy_scale_base"],du=["scale_base","max_power","stale_after","energy_scale_base"];function pi(e){if(!rt(e))return e;var t=null;return vu.forEach(function(n){n in e&&(X(e[n])?(t=t||Object.assign({},e),delete t[n]):du.indexOf(n)>=0&&typeof e[n]!="number"&&we(e[n])&&(t=t||Object.assign({},e),t[n]=Number(e[n])))}),t||e}function za(e,t){var n={};return X(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?xa(e,n):(et(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&X(e.token)&&(n.token="settings.err.token")),n}function Ca(e){var t={};return e.integration==="gplug"?xa(e,t):(et(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&X(e.token)&&(t.token="settings.err.token")),t}function pu(e){var t={};return X(e.id)&&(t.id="settings.err.id_required"),X(e.name)&&(t.name="settings.err.name_required"),t}function hu(e){var t={};ya.forEach(function(f){(!we(e[f])||Number(e[f])<0)&&(t[f]="settings.err.rate")});var n=e.co2_g_kwh;(!we(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!X(r),o=!X(i);if((a||o)&&(!a||!o?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!we(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!we(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var s=0;s<e.ht_windows.length;s++){var u=e.ht_windows[s]||{};(!we(u.from)||!we(u.to)||Number(u.from)<0||Number(u.to)>24||Number(u.from)>Number(u.to))&&(t["win."+s]="settings.err.win_hours")}return t}function yt(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function Me(e){return typeof e=="number"&&!isNaN(e)}function rt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function hi(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var ee={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours",sensor:"settings.err.sensor",scale_field:"settings.err.scale_field",scale_base:"settings.err.scale_base",max_power:"settings.err.max_power",energy_field:"settings.err.energy_field",stale_after:"settings.err.stale_after",energy_dimension:"settings.err.energy_dimension"},gu=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh","co2_g_kwh"];function mu(e,t,n){if(typeof e=="string"||e===void 0||e===null){hi(e)||n.push({path:t,key:ee.url});return}if(rt(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!hi(e[r]))&&n.push({path:t+"."+r,key:ee.url});return}n.push({path:t,key:ee.url})}function wn(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:ee.array}),null;for(var i=!0,a=0;a<r.length;a++)rt(r[a])||(n.push({path:t+"["+a+"]",key:ee.array}),i=!1);return i?r:null}function $u(e){var t=[];if(!rt(e))return[{path:"",key:ee.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:ee.id});var n=wn(e,"loads",t),r=wn(e,"productions",t),i=wn(e,"grid",t);if([["productions",r],["grid",i]].forEach(function($){($[1]||[]).forEach(function(m,k){var _=$[0]+"["+k+"]",M=m.sensor;M!=null&&(typeof M!="string"||Re(M))&&t.push({path:_+".sensor",key:ee.sensor});var C=m.scale_field;C!=null&&(typeof C!="string"||Re(C))&&t.push({path:_+".scale_field",key:ee.scale_field});var b=m.scale_base;b!=null&&(!Me(b)||tn(b))&&t.push({path:_+".scale_base",key:ee.scale_base});var x=m.max_power;x!=null&&(!Me(x)||wa(x))&&t.push({path:_+".max_power",key:ee.max_power});var B=m.energy_field;B!=null&&(typeof B!="string"||Re(B))&&t.push({path:_+".energy_field",key:ee.energy_field});var E=m.stale_after;E!=null&&(!Me(E)||ka(E))&&t.push({path:_+".stale_after",key:ee.stale_after});var A=m.energy_dimension;A!=null&&hr.indexOf(A)<0&&t.push({path:_+".energy_dimension",key:ee.energy_dimension});var S=m.energy_scale_field;S!=null&&(typeof S!="string"||Re(S))&&t.push({path:_+".energy_scale_field",key:ee.scale_field});var I=m.energy_scale_base;I!=null&&(!Me(I)||tn(I))&&t.push({path:_+".energy_scale_base",key:ee.scale_base})})}),n)for(var a={},o=0;o<n.length;o++){var s=n[o],u="loads["+o+"]",f=s.id;typeof f!="string"||f.length===0?t.push({path:u+".id",key:ee.id}):a[f]?t.push({path:u+".id",key:ee.dup}):a[f]=!0,s.currentPower!==void 0&&s.currentPower!==null&&!Me(s.currentPower)&&t.push({path:u+".currentPower",key:ee.power}),s.priority!==void 0&&s.priority!==null&&(!Me(s.priority)||s.priority<1)&&t.push({path:u+".priority",key:ee.priority}),s.url!==void 0&&s.url!==null&&mu(s.url,u+".url",t)}var d=e.tariffs;if(d!=null){if(!rt(d))return t.push({path:"tariffs",key:ee.object}),t;gu.forEach(function($){var m=d[$];m!=null&&(!Me(m)||m<0)&&t.push({path:"tariffs."+$,key:ee.rate})});var p=d.ht_windows;if(p!=null)if(!Array.isArray(p))t.push({path:"tariffs.ht_windows",key:ee.array});else for(var v=0;v<p.length;v++){var h=p[v],g="tariffs.ht_windows["+v+"]";(!rt(h)||!Me(h.from)||!Me(h.to)||h.from<0||h.to>24||h.from>h.to)&&t.push({path:g,key:ee.win})}}return t}function Bn(e){var t=X(e)?"":String(e).trim();return t?l("settings.scale_field_hint",{name:t.charAt(0)+"sf"}):""}function D(e){var t=e.error;return c`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?c`<span class="field-error">${l(t)}</span>`:null}
      </label>`}function De(e){return c`
      <label class="field field-block">
        ${e.label?c`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return c`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function gr(e){return c`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${l("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function Ye(e){return e.map(function(t){return{value:t,label:t}})}function _u(e){var t=e.cfg,n=pu(t);function r(i){return function(a){e.patch(i,a)}}return c`
      <${L} group="grid">
        <p class="settings-scope">${l("settings.scope_note")}</p>
        <div class="settings-form">
          <${D} label=${l("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${D} label=${l("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${D} label=${l("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${D} label=${l("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${xt} disabled=${yt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function yu(e){var t=e.selected>=0;return c`
      <div class=${"master-detail"+(t?" md-show-detail":"")}>
        <div class="md-list">
          <div class="md-list-head">
            <span class="md-list-title">${e.listTitle}</span>
            <${G} small onClick=${e.onAdd}>${l("settings.add")}<//>
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
        <${G} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?l("settings.saving"):l("settings.save")}
        <//>
      </div>`}function bu(e){var t=e.item,n=e.otherIds,r=ba(t,n);function i(u){return function(f){e.patch(u,f)}}function a(u){return function(f){var d=Object.assign({},t.url||{});d[u]=f,e.patch("url",d)}}var o=t.integration||"simulator",s=o==="shelly"?t.url||{}:{};return c`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${gr} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${D} label=${l("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${D} label=${l("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${D} label=${l("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${De} label=${l("settings.load.type")} value=${t.loadType||Un[0]}
            options=${Ye(Un)} onChange=${i("loadType")} />
          <${D} label=${l("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${De} label=${l("settings.integration")} value=${o}
            options=${Ye(uu)} onChange=${i("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${o==="shelly"?c`
            <${D} label=${l("settings.url.on")} value=${s.on} error=${r["url.on"]} onInput=${a("on")} />
            <${D} label=${l("settings.url.off")} value=${s.off} error=${r["url.off"]} onInput=${a("off")} />
            <${D} label=${l("settings.url.status")} value=${s.status} error=${r["url.status"]} onInput=${a("status")} />`:c`
            <${D} label=${l("settings.url")} value=${t.url} error=${r.url} onInput=${i("url")} />
            ${o==="homeassistant"?c`
              <${D} label=${l("settings.token")} type="password" value=${t.token} error=${r.token} onInput=${i("token")} />`:null}`}
        </div>
      </div>`}function wu(e){var t=e.item,n=za(t,e.otherIds);function r(a){return function(o){e.patch(a,o)}}var i=t.integration||"simulator";return c`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||l("settings.new_entry")}</h3>
          <${gr} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${D} label=${l("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${D} label=${l("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${De} label=${l("settings.prod.type")} value=${t.productionType||en[0]}
            options=${en.map(function(a){return{value:a,label:l(su[a])}})}
            onChange=${r("productionType")} />
          ${cu(t.productionType)?c`
            <div class="settings-warn" role="status">${l("settings.prodtype.unknown_warn")}</div>`:null}
          <${De} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${Ye(_a)} onChange=${r("dimension")} />
          <${De} label=${l("settings.integration")} value=${i}
            options=${Ye($a)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?c`
            <${D} label=${l("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${D} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${D} label=${l("settings.scale_field")} value=${t.scale_field} placeholder=${Bn(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${D} label=${l("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${D} label=${l("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${D} label=${l("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${D} label=${l("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />
            <${De} label=${l("settings.energy_dimension")} value=${t.energy_dimension||""}
              options=${[{value:"",label:l("settings.energy_dimension_auto")}].concat(Ye(hr))}
              onChange=${r("energy_dimension")} />
            <${D} label=${l("settings.energy_scale_field")} value=${t.energy_scale_field} placeholder=${Bn(t.energy_field)} error=${n.energy_scale_field} onInput=${r("energy_scale_field")} />
            <${D} label=${l("settings.energy_scale_base")} type="number" step="1" min="-10" value=${t.energy_scale_base} placeholder="0" error=${n.energy_scale_base} onInput=${r("energy_scale_base")} />`:c`
            <${D} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?c`
              <${D} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function ku(e){var t=e.item,n=Ca(t);function r(o){return function(s){e.patch(o,s)}}var i=t.integration||"simulator",a=t.id==="to"?l("settings.grid.to"):l("settings.grid.from");return c`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${De} label=${l("settings.dimension")} value=${t.dimension||"W"}
            options=${Ye(_a)} onChange=${r("dimension")} />
          <${De} label=${l("settings.integration")} value=${i}
            options=${Ye($a)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${l("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?c`
            <${D} label=${l("settings.sensor")} value=${t.sensor} placeholder="z" error=${n.sensor} onInput=${r("sensor")} />
            <${D} label=${l("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />
            <${D} label=${l("settings.scale_field")} value=${t.scale_field} placeholder=${Bn(t.field)} error=${n.scale_field} onInput=${r("scale_field")} />
            <${D} label=${l("settings.scale_base")} type="number" step="1" min="-10" value=${t.scale_base} placeholder="0" error=${n.scale_base} onInput=${r("scale_base")} />
            <${D} label=${l("settings.max_power")} type="number" step="1" min="1" value=${t.max_power} error=${n.max_power} onInput=${r("max_power")} />
            <${D} label=${l("settings.stale_after")} type="number" step="1" min="1" value=${t.stale_after} placeholder="600" error=${n.stale_after} onInput=${r("stale_after")} />
            <${D} label=${l("settings.energy_field")} value=${t.energy_field} placeholder="E_AC" error=${n.energy_field} onInput=${r("energy_field")} />`:c`
            <${D} label=${l("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?c`
              <${D} label=${l("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function kn(e){var t=z(-1),n=t[0],r=t[1],i=e.items;function a(d,p){var v=i.slice(),h=Object.assign({},v[n]);h[d]=p,v[n]=h,e.onChange(v)}function o(){var d=i.concat([e.blank()]);e.onChange(d),r(d.length-1)}function s(){var d=i[n],p=(e.persistedIds||[]).indexOf(String(d&&d.id))!==-1;if(!(p&&!window.confirm(l(e.confirmKey)))){var v=i.slice();v.splice(n,1),r(-1),e.onDelete&&e.onDelete(d),e.onChange(v)}}var u=i.some(function(d,p){var v=i.filter(function(h,g){return g!==p}).map(function(h){return String(h.id)});return yt(e.validate(d,v))}),f=n>=0&&i[n]?c`<${e.Detail} item=${i[n]} patch=${a} onDelete=${s}
          otherIds=${i.filter(function(d,p){return p!==n}).map(function(d){return String(d.id)})} />`:null;return c`
      <${L} group=${e.group}>
        <${yu}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:o}
          detail=${f} />
        <${xt} disabled=${u} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function xu(e){var t=e.tariffs,n=hu(t);function r(g){return function($){e.patch(g,$)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(g,$,m){var k=i.map(function(_,M){if(M!==g)return _;var C=Object.assign({},_);return C[$]=m,C});e.setWindows(k)}function o(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function s(g){e.setWindows(i.filter(function($,m){return m!==g}))}var u=we(t.grid_import_ht_chf_kwh)&&we(t.grid_import_nt_chf_kwh),f=u&&i.length===0,d=zu(t),p=Gi(d),v=Number(t.vzev_import_chf_kwh),h=p!==null&&!isNaN(v)&&v>p;return c`
      <${L} group="vzev">
        <div class="settings-subhead">${l("settings.tariff.grid_import_group")}</div>
        <div class="settings-form">
          <${D} label=${l("settings.tariff.grid_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_chf_kwh} error=${n.grid_import_chf_kwh} onInput=${r("grid_import_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.htnt_group")}</div>
        <p class="settings-scope">${l("settings.tariff.htnt_note")}</p>
        <div class="settings-form">
          <${D} label=${l("settings.tariff.grid_import_ht_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_ht_chf_kwh} error=${n.grid_import_ht_chf_kwh} onInput=${r("grid_import_ht_chf_kwh")} />
          <${D} label=${l("settings.tariff.grid_import_nt_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_import_nt_chf_kwh} error=${n.grid_import_nt_chf_kwh} onInput=${r("grid_import_nt_chf_kwh")} />
        </div>

        <div class="settings-subhead">${l("settings.tariff.ht_windows_group")}</div>
        <p class="settings-scope">${l("settings.tariff.ht_windows_note")}</p>
        ${i.map(function(g,$){return c`
            <div key=${$} class="settings-form ht-window-row">
              <${D} label=${l("settings.tariff.win_days")} value=${g.days}
                placeholder=${l("settings.tariff.win_days.ph")} onInput=${function(m){a($,"days",m)}} />
              <${D} label=${l("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${g.from} error=${n["win."+$]} onInput=${function(m){a($,"from",gi(m))}} />
              <${D} label=${l("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${g.to} onInput=${function(m){a($,"to",gi(m))}} />
              <${gr} onClick=${function(){s($)}} />
            </div>`})}
        <${G} small secondary onClick=${o}>${l("settings.tariff.win_add")}<//>
        ${f?c`<p class="settings-warn">${l("settings.tariff.win_empty_warn")}</p>`:null}

        <div class="settings-subhead">${l("settings.tariff.feedin_group")}</div>
        <div class="settings-form">
          <${D} label=${l("settings.tariff.grid_feedin_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.grid_feedin_chf_kwh} error=${n.grid_feedin_chf_kwh} onInput=${r("grid_feedin_chf_kwh")} />
          <${D} label=${l("settings.tariff.base_fee_chf_month")} type="number" step="0.01" min="0"
            value=${t.base_fee_chf_month} error=${n.base_fee_chf_month} onInput=${r("base_fee_chf_month")} />
        </div>
        <div class="settings-subhead">${l("settings.tariff.cap_group")}</div>
        <div class="settings-form">
          <${D} label=${l("settings.tariff.vzev_export_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_export_chf_kwh} error=${n.vzev_export_chf_kwh} onInput=${r("vzev_export_chf_kwh")} />
          <${D} label=${l("settings.tariff.vzev_import_chf_kwh")} type="number" step="0.01" min="0"
            value=${t.vzev_import_chf_kwh} error=${n.vzev_import_chf_kwh} onInput=${r("vzev_import_chf_kwh")} />
        </div>
        ${p!==null?c`
          <p class="settings-scope">
            ${l("settings.tariff.cap_ref",{ref:p.toFixed(2)})}
            <${ve} text=${l("tooltip.cap")} />
          </p>
          ${h?c`<p class="settings-warn">${l("settings.tariff.cap_warn")}</p>`:c`<p class="settings-ok">${l("settings.tariff.cap_ok")}</p>`}`:null}
        <div class="settings-subhead">${l("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${D} label=${l("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${xt} disabled=${yt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function gi(e){return X(e)?void 0:Number(e)}function zu(e){var t={};return["grid_import_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(n){X(e[n])||(t[n]=Number(e[n]))}),Array.isArray(e.ht_windows)&&(t.ht_windows=e.ht_windows),t}function Cu(){var e=z(null),t=e[0],n=e[1],r=z({producers:0,members:0}),i=r[0],a=r[1],o=z(!1),s=o[0],u=o[1];Z(function(){var p=!1;return Promise.all([R.getVzevInfo().catch(function(){return{}}),R.get("/api/vzev/members",{optional:!0,vzevBypass:!0}).catch(function(){return{members:[]}})]).then(function(v){if(!p){var h=v[0]||{};n({representative_name:h.representative_name||"",representative_contact:h.representative_contact||"",connection_point_id:h.connection_point_id||"",enabled:!!h.enabled});var g=v[1]&&v[1].members||[],$=0;g.forEach(function(m){(m.type==="PRODUCER"||m.typ==="P")&&$++}),a({producers:$,members:g.length})}}),function(){p=!0}},[]);function f(p){return function(v){n(function(h){var g=Object.assign({},h);return g[p]=v,g})}}function d(){s||!t||(u(!0),R.setVzevInfo(t).then(function(){Q(l("settings.vzev.saved"),{type:"info"})}).catch(function(){Q(l("settings.save_error"),{type:"error"})}).then(function(){u(!1)}))}return t?c`
      <${L} group="vzev">
        <div class="settings-form settings-toggle-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.enabled}
              onChange=${function(p){f("enabled")(p.target.checked)}} />
            <span>${l("settings.vzev.enabled")}</span>
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.enabled_hint")}</p>
        <p class="settings-scope">${l("settings.vzev.subtitle")}</p>
        <div class="settings-form">
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.representative_name")} <${ve} text=${l("tooltip.vertreter")} /></span>
            <input class="textfield" type="text" value=${t.representative_name}
              onInput=${function(p){f("representative_name")(p.target.value)}} />
          </label>
          <${D} label=${l("settings.vzev.representative_contact")}
            value=${t.representative_contact} onInput=${f("representative_contact")} />
          <label class="field field-block">
            <span class="field-label">${l("settings.vzev.connection_point_id")} <${ve} text=${l("tooltip.connpoint")} /></span>
            <input class="textfield" type="text" value=${t.connection_point_id}
              onInput=${function(p){f("connection_point_id")(p.target.value)}} />
          </label>
        </div>
        <p class="settings-scope">${l("settings.vzev.counts",{producers:i.producers,members:i.members})}</p>
        <${xt} disabled=${!1} onSave=${d} saving=${s} />
      <//>`:c`<${L} group="vzev"><p class="placeholder-text">${l("settings.loading")}</p><//>`}function mi(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!X(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function Su(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return c`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${G} small secondary onClick=${function(){e.onUse(1)}}>${l("settings.gplug.scan_use1")}<//>
          <${G} small secondary onClick=${function(){e.onUse(2)}}>${l("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function Mu(){var e=z(null),t=e[0],n=e[1],r=z(!1),i=r[0],a=r[1],o=z(!1),s=o[0],u=o[1],f=z(!1),d=f[0],p=f[1],v=z({scanning:!1,networks:null,error:!1}),h=v[0],g=v[1];function $(){a(!1),n(null),R.getWifiConfig().then(function(x){n({ssid1:x.ssid1,password1:"",ssid2:x.ssid2,password2:""})}).catch(function(){a(!0)})}Z(function(){$()},[]);function m(x){return function(B){n(function(E){var A=Object.assign({},E);return A[x]=B,A})}}function k(){d||!window.confirm(l("settings.gplug.restart_confirm"))||(p(!0),R.restartDevice().then(function(){Q(l("settings.gplug.restart_success"),{type:"info"})}).catch(function(){Q(l("settings.gplug.restart_error"),{type:"error"})}).then(function(){p(!1)}))}function _(){s||!t||yt(mi(t))||(u(!0),R.setWifiConfig(t).then(function(){Q(l("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(x){Q(x&&x.message||l("settings.save_error"),{type:"error"})}).then(function(){u(!1)}))}function M(){g({scanning:!0,networks:null,error:!1}),R.wifiScanStart().catch(function(){});var x=0;function B(){x+=1,R.wifiScanResult().then(function(E){var A=E&&(E.WiFiScan!==void 0?E.WiFiScan:E.WifiScan);if(A&&typeof A=="object"){var S=Object.keys(A).map(function(I){return A[I]});S.sort(function(I,T){return(Number(T.RSSI)||0)-(Number(I.RSSI)||0)}),g({scanning:!1,networks:S,error:!1});return}if(x>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(B,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(B,1e3)}function C(x,B){n(function(E){var A=Object.assign({},E);return A["ssid"+x]=B,A})}if(i)return c`
        <${L} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${G} secondary small onClick=${$}>${l("settings.retry")}<//>
        <//>`;if(!t)return c`<${L} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var b=mi(t);return c`
      <div>
        <${L} group="grid" title=${l("settings.gplug.restart_title")}>
          <p class="settings-scope">${l("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${G} danger disabled=${d} onClick=${k}>
              ${l(d?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${L} group="grid" title=${l("settings.gplug.wifi_title")}>
          <p class="settings-scope">${l("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${l("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${D} label=${l("settings.gplug.ssid1")} value=${t.ssid1} error=${b.ssid1} onInput=${m("ssid1")} />
            <${D} label=${l("settings.gplug.password1")} type="password" value=${t.password1} error=${b.password1}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${m("password1")} />
          </div>
          <div class="settings-subhead">${l("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${D} label=${l("settings.gplug.ssid2")} value=${t.ssid2} error=${b.ssid2} onInput=${m("ssid2")} />
            <${D} label=${l("settings.gplug.password2")} type="password" value=${t.password2} error=${b.password2}
              placeholder=${l("settings.gplug.password_placeholder")} onInput=${m("password2")} />
          </div>

          <div class="settings-subhead">${l("settings.gplug.scan_button")}</div>
          <${G} secondary small disabled=${h.scanning} onClick=${M}>
            ${h.scanning?l("settings.gplug.scanning"):l("settings.gplug.scan_button")}
          <//>
          ${h.error?c`<p class="settings-warn">${l("settings.gplug.scan_error")}</p>`:null}
          ${h.networks&&h.networks.length===0?c`<p class="placeholder-text">${l("settings.gplug.scan_empty")}</p>`:null}
          ${h.networks&&h.networks.length>0?c`
            <div class="wifi-scan-list">
              ${h.networks.map(function(x,B){return c`<${Su} key=${B} net=${x} onUse=${function(E){C(E,x.SSId)}} />`})}
            </div>`:null}

          <${xt} disabled=${yt(b)} onSave=${_} saving=${s} />
        <//>
      </div>`}function Eu(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function $i(e){return e==null||isNaN(e)?"–":e<1024?e+" B":e<1024*1024?Math.round(e/1024)+" KB":Math.round(e/(1024*1024)*10)/10+" MB"}function Iu(){var e=z(null),t=e[0],n=e[1],r=z(Ln()),i=r[0],a=r[1],o=z(!1),s=o[0],u=o[1];function f(g){if(!g.available||!g.siteId){n(null);return}ur(g.siteId).then(n,function(){n(null)})}Z(function(){var g=la(function($){a(Object.assign({},$)),f($)});return kt().then(function($){a(Object.assign({},$)),f($)}),g},[]);function d(){s||(u(!0),uo(R).then(function(g){f(g),Q(l("settings.data.synced"),{type:"info"})},function(){Q(l("settings.data.sync_error"),{type:"error"})}).then(function(){u(!1)}))}function p(){i.siteId&&ao(i.siteId).then(function(g){Eu("gplug-archiv-"+i.siteId+".csv",g)},function(){Q(l("settings.data.export_error"),{type:"error"})})}function v(g){var $=g.target&&g.target.files&&g.target.files[0];$&&(g.target.value="",$.text().then(function(m){return lo(m,i.siteId)}).then(function(m){n(m),Q(l("settings.data.import_ok",{count:m.count}),{type:"info"})},function(m){Q(m&&m.message||l("settings.data.import_error"),{type:"error"})}))}if(i.available===!1)return c`
        <${L} group="grid" title=${l("settings.data.title")}>
          <p class="settings-warn">${l("settings.data.unavailable")}</p>
          <p class="settings-scope">${l("settings.data.multi_client")}</p>
        <//>`;if(!t)return c`<${L} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`;var h=t.estimate;return c`
      <div>
        <${L} group="grid" title=${l("settings.data.title")}>
          <p class="settings-scope">${l("settings.data.desc")}</p>
          <dl class="data-facts">
            <dt>${l("settings.data.site")}</dt><dd>${t.siteId}</dd>
            <dt>${l("settings.data.range")}</dt>
            <dd>${t.firstE15Ts===null?l("common.nodata"):w.time(t.firstE15Ts,"1d")+" – "+w.time(t.lastE15Ts,"1d")}</dd>
            <dt>${l("settings.data.records")}</dt><dd>${t.count} (${t.days} ${l("settings.data.days")})</dd>
            <dt>${l("settings.data.last_sync")}</dt>
            <dd>${t.syncedAt?w.time(t.syncedAt,"15m"):"–"}</dd>
            <dt>${l("settings.data.storage")}</dt>
            <dd>${h?$i(h.usage)+" / "+$i(h.quota):"–"}</dd>
          </dl>

          <div class="settings-subhead">${l("settings.data.gaps")}</div>
          ${t.gaps&&t.gaps.length?c`
            <ul class="data-gaps">
              ${t.gaps.map(function(g,$){return c`<li key=${$}>${w.time(g[0],"15m")} – ${w.time(g[1],"15m")}</li>`})}
            </ul>`:c`<p class="settings-scope">${l("settings.data.no_gaps")}</p>`}

          <div class="settings-actions">
            <${G} secondary small disabled=${s} onClick=${d}>
              ${l(s?"settings.data.syncing":"settings.data.sync")}
            <//>
          </div>
        <//>

        <${L} group="grid" title=${l("settings.data.transfer_title")}>
          <p class="settings-scope">${l("settings.data.multi_client")}</p>
          <div class="settings-actions">
            <${G} secondary small onClick=${p}>${l("settings.data.export")}<//>
            <label class="btn btn-secondary btn-small data-import-label">
              ${l("settings.data.import")}
              <input type="file" accept=".csv,text/csv" class="data-import-input"
                onChange=${v} />
            </label>
          </div>
        <//>
      </div>`}function Nu(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function Tu(e){var t=z(null),n=t[0],r=t[1],i=z(!1),a=i[0],o=i[1],s=z(!1),u=s[0],f=s[1];function d(){o(!1),r(null),R.getConfigRaw().then(function(g){r(Nu(g))}).catch(function(){o(!0)})}Z(function(){d()},[]);var p=null,v=[];if(n!==null)try{v=$u(JSON.parse(n))}catch(g){p=g.message}function h(){if(!(u||p)){var g;try{g=JSON.parse(n)}catch{return}f(!0),R.postConfig(g).then(function(){Q(l("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),d()}).catch(function($){Q($&&$.message||l("settings.save_error"),{type:"error"})}).then(function(){f(!1)})}}return a?c`
        <${L} group="grid">
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${G} secondary small onClick=${d}>${l("settings.retry")}<//>
        <//>`:n===null?c`<${L} group="grid"><p class="placeholder-text">${l("settings.loading")}</p><//>`:c`
      <${L} group="grid">
        <p class="settings-scope">${l("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${p?c`<p class="settings-warn">${l("settings.pro.invalid_json",{msg:p})}</p>`:null}
        ${v.length?c`
          <div class="settings-warn">
            <strong>${l("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${v.map(function(g,$){return c`<li key=${$}><code>${g.path||"/"}</code> — ${l(g.key)}</li>`})}
            </ul>
            <span>${l("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${G} secondary disabled=${u} onClick=${d}>${l("settings.pro.reload")}<//>
          <${G} disabled=${u||!!p} onClick=${h}>
            ${l(u?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function Pu(){return{id:"",friendlyName:"",loadType:Un[0],currentPower:"",priority:1,integration:"simulator",url:""}}function Ou(){return{id:"",friendlyName:"",productionType:en[0],dimension:"W",integration:"simulator",url:""}}function Au(e){var t=e.params&&e.params.tab||"site",n=au[t]||"site",r=z(null),i=r[0],a=r[1],o=z(null),s=o[0],u=o[1],f=z(!1),d=f[0],p=f[1],v=z(!1),h=v[0],g=v[1],$=z({loads:[],productions:[],grid:[]}),m=$[0],k=$[1];function _(y){return(Array.isArray(y)?y:[]).map(function(N){return String(N&&N.id)}).filter(function(N){return!X(N)})}function M(){u(null),R.getConfig().then(function(y){a(C(y)),g(!X(y&&y.id)),k({loads:_(y&&y.loads),productions:_(y&&y.productions),grid:_(y&&y.grid)})}).catch(function(){u(!0),a(null)})}Z(function(){M()},[]);function C(y){y=y||{};var N=Object.assign({},y);return N.loads=Array.isArray(y.loads)?y.loads:[],N.productions=Array.isArray(y.productions)?y.productions:[],N.grid=Array.isArray(y.grid)?y.grid:[],N.tariffs=Object.assign({},fu,y.tariffs||{}),N}function b(y,N){a(function(F){var U=Object.assign({},F);return U[y]=N,U})}function x(y,N){a(function(F){var U=Object.assign({},F);return U.tariffs=Object.assign({},F.tariffs),U.tariffs[y]=N,U})}function B(y){a(function(N){var F=Object.assign({},N);return F.tariffs=Object.assign({},N.tariffs),F.tariffs.ht_windows=y,F})}function E(y,N){a(function(F){var U=Object.assign({},F);return U[y]=N,U})}function A(){d||(p(!0),R.postConfig(S(i)).then(function(){Q(l("settings.saved"),{type:"info"}),g(!0),M()}).catch(function(y){Q(y&&y.message||l("settings.save_error"),{type:"error"})}).then(function(){p(!1)}))}function S(y){var N=Object.assign({},y);return N.loads=y.loads.map(function(F){var U=Object.assign({},F);return U.currentPower!==""&&U.currentPower!==void 0&&(U.currentPower=Number(U.currentPower)),U.priority!==""&&U.priority!==void 0&&(U.priority=Number(U.priority)),U}),N.productions=y.productions.map(pi),N.grid=y.grid.map(pi),N.tariffs=Object.assign({},y.tariffs),ya.forEach(function(F){N.tariffs[F]=Number(y.tariffs[F])}),y.tariffs.co2_g_kwh!==void 0&&y.tariffs.co2_g_kwh!==""&&(N.tariffs.co2_g_kwh=Number(y.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(F){X(y.tariffs[F])?delete N.tariffs[F]:N.tariffs[F]=Number(y.tariffs[F])}),Array.isArray(y.tariffs.ht_windows)&&(y.tariffs.ht_windows.length===0?delete N.tariffs.ht_windows:N.tariffs.ht_windows=y.tariffs.ht_windows.map(function(F){return{days:F.days,from:Number(F.from),to:Number(F.to)}})),N}function I(y){!y||X(y.id)||R.setLoadState(y.id,"INACTIVE").catch(function(){})}function T(y){Fe.navigate("/einstellungen/"+lu[y])}var H=iu.map(function(y){return c`
        <button key=${y} type="button"
          class=${"pill"+(y===n?" pill-active":"")}
          onClick=${function(){T(y)}}>${l(ou[y])}</button>`}),j;return s?j=c`
        <${L}>
          <p class="placeholder-text">${l("settings.load_error")}</p>
          <${G} secondary small onClick=${M}>${l("settings.retry")}<//>
        <//>`:i?n==="site"?j=c`<${_u} cfg=${i} patch=${b} idLocked=${h}
        onSave=${A} saving=${d} />`:n==="tariffs"?j=c`<${xu} tariffs=${i.tariffs} patch=${x}
        setWindows=${B} onSave=${A} saving=${d} />`:n==="vzev"?j=c`<${Cu} />`:n==="daten"?j=c`<${Iu} />`:n==="gplug"?j=c`<${Mu} />`:n==="pro"?j=c`<${Tu} onSaved=${M} />`:n==="loads"?j=c`<${kn} group="loads"
        items=${i.loads} onChange=${function(y){E("loads",y)}}
        listTitle=${l("settings.tab.loads")}
        labelFn=${function(y){return y.friendlyName||y.id||l("settings.new_entry")}}
        blank=${Pu} confirmKey="settings.confirm_delete_load"
        persistedIds=${m.loads}
        onDelete=${I}
        validate=${ba} Detail=${bu}
        onSave=${A} saving=${d} />`:n==="productions"?j=c`<${kn} group="production"
        items=${i.productions} onChange=${function(y){E("productions",y)}}
        listTitle=${l("settings.tab.productions")}
        labelFn=${function(y){return y.friendlyName||y.id||l("settings.new_entry")}}
        blank=${Ou} confirmKey="settings.confirm_delete_production"
        persistedIds=${m.productions}
        validate=${function(y,N){return za(y,N)}} Detail=${wu}
        onSave=${A} saving=${d} />`:n==="grid"&&(j=c`<${kn} group="grid" fixedList
        items=${i.grid} onChange=${function(y){E("grid",y)}}
        listTitle=${l("settings.tab.grid")}
        labelFn=${function(y){return y.id==="to"?l("settings.grid.to"):l("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${m.grid}
        validate=${function(y){return Ca(y)}} Detail=${ku}
        onSave=${A} saving=${d} />`):j=c`<${L}><p class="placeholder-text">${l("settings.loading")}</p><//>`,c`
      <div>
        <${Be} title=${l("page.settings")} />
        <div class="pill-bar">${H}</div>
        ${j}
      </div>`}var Lu=["https://gplug-ch.github.io/gplug-cdn/v1.1.6/lang.json"];function Ru(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(s,u,f,d){for(var p=[],v=0;v<=90;v++){var h=e-900+v*10,g=v>=f&&v<=d?null:Math.max(0,s+u*Math.sin(v/9)+u*.4*Math.sin(v/2.3));p.push({t:h,y:g})}return p}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],o=0;o<23;o++)a.push({id:o,ts:w.time(e-o*900,"15m"),imp:w.num(Math.round(Math.random()*0+o*7)/100,2),chf:w.chf((o%3===0?-1:1)*o*.19,!0)});return c`
    <div>
      <${Be} title=${l("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${c`<${G} onClick=${function(){Q("Toast!",{type:"info"})}}>Toast<//>`} />

      <${L} group="grid" title="LineChart" tooltip=${l("tooltip.consumption")}
        value=${w.w(1396)} valueColor="var(--c-consumption)">
        <${wt} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${w.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${L} group="vzev" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${w.chf(12.4,!0)} valueColor="var(--c-vzev)">
        <${Gn} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(s){return w.chf(s,!0)}}
          points=${r.map(function(s){return{t:s.t,y:s.y,color:s.y<0?"var(--c-import)":"var(--c-vzev)"}})} />
      <//>

      <${L} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${Rt} state="active" />
          <${Rt} state="waiting" />
          <${Rt} state="inactive" />
        </div>
        <div class="demo-row">
          <${G}>Speichern<//>
          <${G} secondary>Abbrechen<//>
          <${G} danger>Löschen<//>
          <${G} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${Dt} label="Anzeige-Name" value="Familie Huber" />
          <${an} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${L} group="production" title="DataTable">
        <${ul} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(s){var u=s.chf.indexOf("−")===0;return c`<span class=${u?"val-neg":"val-pos"}>${s.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function Du(){return[{path:"/",component:Ko},{path:"/verlauf",component:ns},{path:"/zaehler",component:Ps},{path:"/vzev/mitglied/:id?",component:Vs},{path:"/vzev/abrechnung",component:ru},{path:"/vzev",component:js},{path:"/einstellungen/:tab?",component:Au},{path:"/demo",component:Ru}]}function _i(){var e=document.getElementById("app"),t=Lu;Ga.load(t).catch(function(){}).then(function(){ja(c`<${fo} routes=${Du()} />`,e),so(R)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_i):_i();
