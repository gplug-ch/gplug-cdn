(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Lt,Z,Sr,Ce,In,Mr,Nr,Bt,mt,tt,Tr,dn,Jt,en,St={},Mt=[],Oi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ft=Array.isArray;function ke(e,t){for(var n in t)e[n]=t[n];return e}function pn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Er(e,t,n){var r,i,a,l={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Lt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return $t(e,l,r,i,null)}function $t(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Sr,__i:-1,__u:0};return i==null&&Z.vnode!=null&&Z.vnode(a),a}function ot(e){return e.children}function _t(e,t){this.props=e,this.context=t}function je(e,t){if(t==null)return e.__?je(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?je(e):null}function Li(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=ke({},t);a.__v=t.__v+1,Z.vnode&&Z.vnode(a),hn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??je(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Fr(r,a,i),t.__e=t.__=null,a.__e!=n&&Ir(a)}}function Ir(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Ir(e)}function Pn(e){(!e.__d&&(e.__d=!0)&&Ce.push(e)&&!Nt.__r++||In!=Z.debounceRendering)&&((In=Z.debounceRendering)||Mr)(Nt)}function Nt(){try{for(var e,t=1;Ce.length;)Ce.length>t&&Ce.sort(Nr),e=Ce.shift(),t=Ce.length,Li(e)}finally{Ce.length=Nt.__r=0}}function Pr(e,t,n,r,i,a,l,s,c,v,d){var h,f,p,g,y,$,b,m=r&&r.__k||Mt,w=t.length;for(c=Fi(n,t,m,c,w),h=0;h<w;h++)(p=n.__k[h])!=null&&(f=p.__i!=-1&&m[p.__i]||St,p.__i=h,$=hn(e,p,f,i,a,l,s,c,v,d),g=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&gn(f.ref,null,p),d.push(p.ref,p.__c||g,p)),y==null&&g!=null&&(y=g),(b=!!(4&p.__u))||f.__k===p.__k?(c=Or(p,c,e,b),b&&f.__e&&(f.__e=null)):typeof p.type=="function"&&$!==void 0?c=$:g&&(c=g.nextSibling),p.__u&=-7);return n.__e=y,c}function Fi(e,t,n,r,i){var a,l,s,c,v,d=n.length,h=d,f=0;for(e.__k=new Array(i),a=0;a<i;a++)(l=t[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[a]=$t(null,l,null,null,null):Ft(l)?l=e.__k[a]=$t(ot,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[a]=$t(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[a]=l,c=a+f,l.__=e,l.__b=e.__b+1,s=null,(v=l.__i=Ai(l,n,c,h))!=-1&&(h--,(s=n[v])&&(s.__u|=2)),s==null||s.__v==null?(v==-1&&(i>d?f--:i<d&&f++),typeof l.type!="function"&&(l.__u|=4)):v!=c&&(v==c-1?f--:v==c+1?f++:(v>c?f--:f++,l.__u|=4))):e.__k[a]=null;if(h)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==r&&(r=je(s)),Wr(s,s));return r}function Or(e,t,n,r){var i,a;if(typeof e.type=="function"){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Or(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=je(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ai(e,t,n,r){var i,a,l,s=e.key,c=e.type,v=t[n],d=v!=null&&(2&v.__u)==0;if(v===null&&s==null||d&&s==v.key&&c==v.type)return n;if(r>(d?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((v=t[l=i>=0?i--:a++])!=null&&(2&v.__u)==0&&s==v.key&&c==v.type)return l}return-1}function On(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Oi.test(t)?n:n+"px"}function vt(e,t,n,r,i){var a,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||On(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||On(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Tr,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n[tt]=r[tt]:(n[tt]=dn,e.addEventListener(t,a?en:Jt,a)):e.removeEventListener(t,a?en:Jt,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ln(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[mt]==null)t[mt]=dn++;else if(t[mt]<n[tt])return;return n(Z.event?Z.event(t):t)}}}function hn(e,t,n,r,i,a,l,s,c,v){var d,h,f,p,g,y,$,b,m,w,S,z,N,U,E,L,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=Z.__b)&&d(t);e:if(typeof C=="function"){h=l.length;try{if(m=t.props,w=C.prototype&&C.prototype.render,S=(d=C.contextType)&&r[d.__c],z=d?S?S.props.value:d.__:r,n.__c?b=(f=t.__c=n.__c).__=f.__E:(w?t.__c=f=new C(m,z):(t.__c=f=new _t(m,z),f.constructor=C,f.render=Ri),S&&S.sub(f),f.state||(f.state={}),f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),w&&f.__s==null&&(f.__s=f.state),w&&C.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=ke({},f.__s)),ke(f.__s,C.getDerivedStateFromProps(m,f.__s))),g=f.props,y=f.state,f.__v=t,p)w&&C.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),w&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(w&&C.getDerivedStateFromProps==null&&m!==g&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(m,z),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(m,f.__s,z)===!1){t.__v!=n.__v&&(f.props=m,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(T){T&&(T.__=t)}),Mt.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&l.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(m,f.__s,z),w&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(g,y,$)})}if(f.context=z,f.props=m,f.__P=e,f.__e=!1,N=Z.__r,U=0,w)f.state=f.__s,f.__d=!1,N&&N(t),d=f.render(f.props,f.state,f.context),Mt.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,N&&N(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++U<25);f.state=f.__s,f.getChildContext!=null&&(r=ke(ke({},r),f.getChildContext())),w&&!p&&f.getSnapshotBeforeUpdate!=null&&($=f.getSnapshotBeforeUpdate(g,y)),E=d!=null&&d.type===ot&&d.key==null?Ar(d.props.children):d,s=Pr(e,Ft(E)?E:[E],t,n,r,i,a,l,s,c,v),f.base=t.__e,t.__u&=-161,f.__h.length&&l.push(f),b&&(f.__E=f.__=null)}catch(T){if(l.length=h,t.__v=null,c||a!=null){if(T.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(L=a.length;L--;)pn(a[L])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),T.then||Lr(t),Z.__e(T,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Wi(n.__e,t,n,r,i,a,l,c,v);return(d=Z.diffed)&&d(t),128&t.__u?void 0:s}function Lr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Lr))}function Fr(e,t,n){for(var r=0;r<n.length;r++)gn(n[r],n[++r],n[++r]);Z.__c&&Z.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){Z.__e(a,i.__v)}})}function Ar(e){return typeof e!="object"||e==null||e.__b>0?e:Ft(e)?e.map(Ar):e.constructor!==void 0?null:ke({},e)}function Wi(e,t,n,r,i,a,l,s,c){var v,d,h,f,p,g,y,$=n.props||St,b=t.props,m=t.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(v=0;v<a.length;v++)if((p=a[v])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){e=p,a[v]=null;break}}if(e==null){if(m==null)return document.createTextNode(b);e=document.createElementNS(i,m,b.is&&b),s&&(Z.__m&&Z.__m(t,a),s=!1),a=null}if(m==null)$===b||s&&e.data==b||(e.data=b);else{if(a=m=="textarea"&&b.defaultValue!=null?null:a&&Lt.call(e.childNodes),!s&&a!=null)for($={},v=0;v<e.attributes.length;v++)$[(p=e.attributes[v]).name]=p.value;for(v in $)p=$[v],v=="dangerouslySetInnerHTML"?h=p:v=="children"||v in b||v=="value"&&"defaultValue"in b||v=="checked"&&"defaultChecked"in b||vt(e,v,null,p,i);for(v in b)p=b[v],v=="children"?f=p:v=="dangerouslySetInnerHTML"?d=p:v=="value"?g=p:v=="checked"?y=p:s&&typeof p!="function"||$[v]===p||vt(e,v,p,$[v],i);if(d)s||h&&(d.__html==h.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(h&&(e.innerHTML=""),Pr(t.type=="template"?e.content:e,Ft(f)?f:[f],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,l,a?a[0]:n.__k&&je(n,0),s,c),a!=null)for(v=a.length;v--;)pn(a[v]);s&&m!="textarea"||(v="value",m=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[v]||m=="progress"&&!g||m=="option"&&g!=$[v])&&vt(e,v,g,$[v],i),v="checked",y!=null&&y!=e[v]&&vt(e,v,y,$[v],i))}return e}function gn(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){Z.__e(i,n)}}function Wr(e,t,n){var r,i;if(Z.unmount&&Z.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||gn(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){Z.__e(a,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Wr(r[i],t,n||typeof e.type!="function");n||pn(e.__e),e.__c=e.__=e.__e=void 0}function Ri(e,t,n){return this.constructor(e,n)}function Di(e,t,n){var r,i,a,l;t==document&&(t=document.documentElement),Z.__&&Z.__(e,t),i=(r=!1)?null:t.__k,a=[],l=[],hn(t,e=t.__k=Er(ot,null,[e]),i||St,St,t.namespaceURI,i?null:t.firstChild?Lt.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,l),Fr(a,e,l),e.props.children=null}Lt=Mt.slice,Z={__e:function(e,t,n,r){for(var i,a,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},Sr=0,_t.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ke({},this.state),typeof e=="function"&&(e=e(ke({},n),this.props)),e&&ke(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Pn(this))},_t.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pn(this))},_t.prototype.render=ot,Ce=[],Mr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Nr=function(e,t){return e.__v.__b-t.__v.__b},Nt.__r=0,Bt=Math.random().toString(8),mt="__d"+Bt,tt="__a"+Bt,Tr=/(PointerCapture)$|Capture$/i,dn=0,Jt=Ln(!1),en=Ln(!0);var it,te,Ht,Fn,Tt=0,Rr=[],re=Z,An=re.__b,Wn=re.__r,Rn=re.diffed,Dn=re.__c,Un=re.unmount,Bn=re.__;function mn(e,t){re.__h&&re.__h(te,e,Tt||t),Tt=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function x(e){return Tt=1,Ui(Ur,e)}function Ui(e,t,n){var r=mn(it++,2);if(r.t=e,!r.__c&&(r.__=[Ur(void 0,t),function(s){var c=r.__N?r.__N[0]:r.__[0],v=r.t(c,s);c!==v&&(r.__N=[v,r.__[1]],r.__c.setState({}))}],r.__c=te,!te.__f)){var i=function(s,c,v){if(!r.__c.__H)return!0;var d=!1,h=r.__c.props!==s;if(r.__c.__H.__.some(function(p){if(p.__N){d=!0;var g=p.__[0];p.__=p.__N,p.__N=void 0,g!==p.__[0]&&(h=!0)}}),a){var f=a.call(this,s,c,v);return d?f||h:f}return!d||h};te.__f=!0;var a=te.shouldComponentUpdate,l=te.componentWillUpdate;te.componentWillUpdate=function(s,c,v){if(this.__e){var d=a;a=void 0,i(s,c,v),a=d}l&&l.call(this,s,c,v)},te.shouldComponentUpdate=i}return r.__N||r.__}function J(e,t){var n=mn(it++,3);!re.__s&&Dr(n.__H,t)&&(n.__=e,n.u=t,te.__H.__h.push(n))}function be(e){return Tt=5,Pe(function(){return{current:e}},[])}function Pe(e,t){var n=mn(it++,7);return Dr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Bi(){for(var e;e=Rr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(yt),t.__h.some(tn),t.__h=[]}catch(n){t.__h=[],re.__e(n,e.__v)}}}re.__b=function(e){te=null,An&&An(e)},re.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Bn&&Bn(e,t)},re.__r=function(e){Wn&&Wn(e),it=0;var t=(te=e.__c).__H;t&&(Ht===te?(t.__h=[],te.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(yt),t.__h.some(tn),t.__h=[],it=0)),Ht=te},re.diffed=function(e){Rn&&Rn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Rr.push(t)!==1&&Fn===re.requestAnimationFrame||((Fn=re.requestAnimationFrame)||Hi)(Bi)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),Ht=te=null},re.__c=function(e,t){t.some(function(n){try{n.__h.some(yt),n.__h=n.__h.filter(function(r){return!r.__||tn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],re.__e(r,n.__v)}}),Dn&&Dn(e,t)},re.unmount=function(e){Un&&Un(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{yt(r)}catch(i){t=i}}),n.__H=void 0,t&&re.__e(t,n.__v))};var Hn=typeof requestAnimationFrame=="function";function Hi(e){var t,n=function(){clearTimeout(r),Hn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Hn&&(t=requestAnimationFrame(n))}function yt(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t}function tn(e){var t=te;e.__c=e.__(),te=t}function Dr(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ur(e,t){return typeof t=="function"?t(e):t}var Br=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var l=t[a++],s=t[a]?(t[0]|=l?1:2,n[t[a++]]):t[++a];l===3?r[0]=s:l===4?r[1]=Object.assign(r[1]||{},s):l===5?(r[1]=r[1]||{})[t[++a]]=s:l===6?r[1][t[++a]]+=s+"":l?(i=e.apply(s,Br(e,s,n,["",null])),r.push(i),s[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(s)}return r},jn=new Map;function ji(e){var t=jn.get(this);return t||(t=new Map,jn.set(this,t)),(t=Br(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,l="",s="",c=[0],v=function(f){a===1&&(f||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,f,l):a===3&&(f||l)?(c.push(3,f,l),a=2):a===2&&l==="..."&&f?c.push(4,f,0):a===2&&l&&!f?c.push(5,0,!0,l):a>=5&&((l||!f&&a===5)&&(c.push(a,0,l,i),a=6),f&&(c.push(a,f,0,i),a=6)),l=""},d=0;d<n.length;d++){d&&(a===1&&v(),v(d));for(var h=0;h<n[d].length;h++)r=n[d][h],a===1?r==="<"?(v(),c=[c],a=3):l+=r:a===4?l==="--"&&r===">"?(a=1,l=""):l=r+l[0]:s?r===s?s="":l+=r:r==='"'||r==="'"?s=r:r===">"?(v(),a=1):a&&(r==="="?(a=5,i=l,l=""):r==="/"&&(a<5||n[d][h+1]===">")?(v(),a===3&&(c=c[0]),a=c,(c=c[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(v(),a=2):l+=r),a===3&&l==="!--"&&(a=4,c=c[0])}return v(),c})(e)),t),arguments,[])).length>1?t:t[0]}const u=ji.bind(Er);var nt={},Hr="de",Vn={};function o(e,t){var n=nt[e];return n===void 0?(Vn[e]||(Vn[e]=!0,console.warn('i18n: missing key "'+e+'"')),e):(t&&(n=n.replace(/\{(\w+)\}/g,function(r,i){return t[i]!==void 0?String(t[i]):r})),n)}function Vi(e){var t=0;function n(){if(t>=e.length)return Promise.reject(new Error("i18n: no language file reachable"));var r=e[t++];return fetch(r).then(function(i){if(!i.ok)throw new Error("HTTP "+i.status);return i.json()}).then(function(i){return nt=i||{},Hr=nt["meta.lang"]||document.documentElement.lang||"de",nt}).catch(function(){return n()})}return n()}const Ki={t:o,load:Vi,getLang:function(){return Hr},getDict:function(){return nt}};var at=" ",jr="−";function Ve(e,t){if(e==null||isNaN(e))return"–";var n=e<0,r=Math.abs(Number(e)).toFixed(t),i=r.split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,"'"),r=i.join("."),(n?jr:"")+r}function qi(e){return e.indexOf(".")>=0?e.replace(/\.?0+$/,""):e}function Yi(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?qi(Ve(e/1e3,1))+at+"kW":Ve(Math.round(e),0)+at+"W"}function Gi(e){return e==null||isNaN(e)?"–":Math.abs(e)>=1e3?Ve(e/1e3,2)+at+"kWh":Ve(Math.round(e),0)+at+"Wh"}function Zi(e,t){if(e==null||isNaN(e))return"–";var n=Ve(e,2);return t&&e>0&&(n="+"+n),n+at+"CHF"}function Ee(e){return(e<10?"0":"")+e}function Qi(e,t){if(e==null)return"–";var n=new Date(e*1e3),r=Ee(n.getDate())+"."+Ee(n.getMonth()+1)+"."+n.getFullYear(),i=Ee(n.getHours())+":"+Ee(n.getMinutes());switch(t){case"1d":return r;case"dm":return Ee(n.getDate())+"."+Ee(n.getMonth()+1)+".";case"1mo":return Ee(n.getMonth()+1)+"."+n.getFullYear();case"q":return n.getFullYear()+" Q"+(Math.floor(n.getMonth()/3)+1);case"hm":return i;case"15m":default:return r+" "+i}}const k={num:Ve,w:Yi,wh:Gi,chf:Zi,time:Qi,MINUS:jr};function Ne(e){return u`
      <header class="page-header">
        <div class="page-header-titles">
          <h1 class="page-title">${e.title}</h1>
          ${e.subtitle?u`<p class="page-subtitle">${e.subtitle}</p>`:null}
        </div>
        ${e.actions?u`<div class="page-header-actions">${e.actions}</div>`:null}
      </header>`}function R(e){var t="card"+(e.group?" card-"+e.group:"")+(e.class?" "+e.class:"");return u`
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
      </section>`}function bt(e){var t=String(e.state||"").toLowerCase(),n="state."+t,r="badge badge-"+(t==="active"?"active":t==="waiting"?"waiting":"inactive");return u`<span class=${r}>${o(n)}</span>`}function Y(e){var t=e.danger?"danger":e.secondary?"secondary":"primary";return u`
      <button
        type=${e.type||"button"}
        class=${"btn btn-"+t+(e.small?" btn-small":"")}
        disabled=${e.disabled}
        onClick=${e.onClick}>${e.children}</button>`}function At(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange&&e.onChange(t.target.value)}}>
            ${(e.options||[]).map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function wt(e){return u`
      <label class="field">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value} placeholder=${e.placeholder||""}
          disabled=${e.disabled}
          onInput=${function(t){e.onInput&&e.onInput(t.target.value)}} />
      </label>`}function ce(e){var t=x(!1),n=t[0],r=t[1],i=x(null),a=i[0],l=i[1],s=be(null),c=be(null);return J(function(){if(!n)return;function v(m){m.key==="Escape"&&r(!1)}function d(m){c.current&&!c.current.contains(m.target)&&r(!1)}document.addEventListener("keydown",v),document.addEventListener("click",d);var h=s.current,f=c.current;if(h&&f){var p=f.getBoundingClientRect(),g=h.getBoundingClientRect(),y=p.left+p.width/2,$=Math.max(8,Math.min(y-g.width/2,window.innerWidth-8-g.width)),b=p.top-g.height-8;b<8&&(b=p.bottom+8),l({left:$,top:b})}return function(){document.removeEventListener("keydown",v),document.removeEventListener("click",d),l(null)}},[n]),u`
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
          <span class="tooltip-bubble" role="tooltip" ref=${s}
            style=${a?"left:"+a.left+"px;top:"+a.top+"px":"visibility:hidden"}>${e.text}</span>`:null}
      </span>`}var kt=[],Xi=0;function le(e,t){t=t||{};var n={id:++Xi,message:e,type:t.type||"info",ttl:t.ttl||5e3};kt.forEach(function(r){r(n)})}function Ji(){var e=x([]),t=e[0],n=e[1];return J(function(){function r(i){n(function(a){return a.concat([i])}),setTimeout(function(){n(function(a){return a.filter(function(l){return l.id!==i.id})})},i.ttl)}return kt.push(r),function(){var i=kt.indexOf(r);i>=0&&kt.splice(i,1)}},[]),u`
      <div class="toast-host" aria-live="polite">
        ${t.map(function(r){return u`
            <div key=${r.id} class=${"toast toast-"+r.type}>
              <span>${r.message}</span>
              <button class="toast-close" aria-label=${o("common.close")}
                onClick=${function(){n(function(i){return i.filter(function(a){return a.id!==r.id})})}}>×</button>
            </div>`})}
      </div>`}var q={top:22,right:14,bottom:24,left:46};function Vr(e){var t=x(0),n=t[0],r=t[1];return J(function(){function i(){if(e.current){var a=e.current.clientWidth;a&&a!==n&&r(a)}}return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),n}function Kr(e,t,n){e===t&&(t=e+1);var r=t-e,i=Math.pow(10,Math.floor(Math.log10(r/n))),a=r/(n*i);a>=7.5?i*=10:a>=3.5?i*=5:a>=1.5&&(i*=2);for(var l=[],s=Math.ceil(e/i)*i,c=s;c<=t+i*1e-9;c+=i)l.push(Math.abs(c)<i*1e-9?0:c);return l}function $n(e){return Math.abs(e)>=1e3?k.num(e/1e3,1).replace(/\.0$/,"")+"k":k.num(Math.round(e*100)/100,Math.abs(e)<10&&e%1!==0?1:0)}function ea(e,t,n){for(var r=[],i=0;i<=n;i++)r.push(e+(t-e)*(i/n));return r}function ta(e,t,n){var r=e.length;if(!r)return[];var i=Math.max(2,Math.min(r,Math.floor(t/64))),a=[];if(r<=i)for(var l=0;l<r;l++)a.push(l);else for(var s=0;s<i;s++)a.push(Math.round(s*(r-1)/(i-1)));var c=[],v=null,d=-1;return a.forEach(function(h){if(h!==d){d=h;var f=n(e[h].t);f!==v&&(v=f,c.push(h))}}),c}function qr(e,t){var n=1/0,r=-1/0;e.forEach(function(a){a==null||isNaN(a)||(a<n&&(n=a),a>r&&(r=a))}),n===1/0&&(n=0,r=1),(t||n>0)&&(n=Math.min(0,n)),r<0&&(r=0),n===r&&(r=n+1);var i=(r-n)*.08;return[n<0?n-i:n,r+i]}function Yr(e){return u`
      <g>
        ${e.yTicks.map(function(t){var n=e.sy(t);return u`
            <g key=${"y"+t}>
              <line x1=${q.left} x2=${e.width-q.right} y1=${n} y2=${n}
                class=${t===0?"ch-zero":"ch-grid"} />
              <text x=${q.left-8} y=${n+3.5} class="ch-tick" text-anchor="end">${$n(t)}</text>
            </g>`})}
        ${e.xTicks.map(function(t,n){return t.x>e.width-q.right-34?null:u`
            <text key=${"x"+n} x=${t.x} y=${e.height-7} class="ch-tick" text-anchor="middle">${t.label}</text>`})}
        <line x1=${q.left} x2=${q.left} y1=${q.top-6} y2=${e.height-q.bottom}
          class="ch-axis" />
        <text x=${q.left-40} y=${q.top-9} class="ch-unit">[${e.yUnit}]</text>
        <text x=${e.width-q.right} y=${e.height-7} class="ch-unit" text-anchor="end">[${e.xUnit}]</text>
      </g>`}function Kn(e,t){for(var n=-1,r=1/0,i=0;i<e.length;i++)if(!(e[i].y===null||e[i].y===void 0)){var a=Math.abs(e[i].t-t);a<r&&(r=a,n=i)}return n}function na(e,t){var n={};t.forEach(function(i){i.y!==null&&i.y!==void 0&&(n[i.t]=i.y)});var r=[];return e.forEach(function(i){i.y===null||i.y===void 0||n[i.t]!==void 0&&r.push({t:i.t,top:i.y,bottom:n[i.t]})}),r}function ra(e,t,n,r){var i=na(e,t),a=[];if(i.length<2)return a;var l=[];function s(){if(l.length>=2){var g="M"+n(l[0].t).toFixed(1)+" "+r(l[0].top).toFixed(1),y;for(y=1;y<l.length;y++)g+="L"+n(l[y].t).toFixed(1)+" "+r(l[y].top).toFixed(1);for(y=l.length-1;y>=0;y--)g+="L"+n(l[y].t).toFixed(1)+" "+r(l[y].bottom).toFixed(1);a.push(g+"Z")}l=[]}for(var c=0;c<i.length;c++){var v=i[c],d=v.top-v.bottom;if(d>0?l.push(v):s(),c<i.length-1){var h=i[c+1],f=h.top-h.bottom;if(d>0!=f>0&&d!==f){var p=d/(d-f);l.push({t:v.t+(h.t-v.t)*p,top:v.top+(h.top-v.top)*p,bottom:v.bottom+(h.bottom-v.bottom)*p}),d>0&&s()}}}return s(),a}function Gr(e,t,n,r){var i=n>t-150;return u`
      <div class="ch-hover" style=${"left:"+n+"px;"+(i?"transform:translateX(calc(-100% - 10px))":"transform:translateX(10px)")}>
        ${r.map(function(a,l){return u`
            <div key=${l} class="ch-hover-line">
              ${a.color?u`<span class="ch-hover-dot" style=${"background:"+a.color}></span>`:null}
              <span>${a.text}</span>
            </div>`})}
      </div>`}function st(e){var t=be(null),n=Vr(t),r=x(null),i=r[0],a=r[1],l=e.height||180,s=e.series||[],c=e.timeWindow;if(!c){var v=1/0,d=-1/0;s.forEach(function(C){C.points.forEach(function(T){T.t<v&&(v=T.t),T.t>d&&(d=T.t)})}),c=v===1/0?[0,1]:[v,d]}var h=c[0],f=c[1]>c[0]?c[1]:c[0]+1,p=[];s.forEach(function(C){C.points.forEach(function(T){p.push(T.y)})});var g=qr(p,!1),y=Math.max(10,n-q.left-q.right),$=l-q.top-q.bottom;function b(C){return q.left+(C-h)/(f-h)*y}function m(C){return q.top+(1-(C-g[0])/(g[1]-g[0]))*$}var w=Kr(g[0],g[1],4),S=e.xTickFormat||function(C){return k.time(C,"hm")},z=ea(h,f,Math.max(2,Math.min(5,Math.floor(y/90)))).map(function(C){return{x:b(C),label:S(C)}});function N(C){var T=[],I=[];C.forEach(function(A){A.y===null||A.y===void 0?(I.length&&T.push(I),I=[]):I.push(A)}),I.length&&T.push(I);var B=m(Math.max(0,g[0]));return T.map(function(A){var _=A.map(function(W,D){return(D===0?"M":"L")+b(W.t).toFixed(1)+" "+m(W.y).toFixed(1)}).join(""),M=_+"L"+b(A[A.length-1].t).toFixed(1)+" "+B.toFixed(1)+"L"+b(A[0].t).toFixed(1)+" "+B.toFixed(1)+"Z";return{line:_,area:M}})}function U(C){if(t.current){var T=t.current.getBoundingClientRect(),I=C.clientX-T.left;if(I<q.left||I>n-q.right){a(null);return}var B=h+(I-q.left)/y*(f-h);a(B)}}var E=null,L=[];return i!==null&&(L.push({text:S(i)}),s.forEach(function(C){var T=Kn(C.points,i);T>=0&&(E===null&&(E=b(C.points[T].t)),L.push({color:C.color,text:(C.label?C.label+": ":"")+(e.yFormat||$n)(C.points[T].y)+(e.yFormat?"":" "+e.yUnit)}))}),E===null&&(E=b(i))),u`
      <div class="chart" ref=${t}
        onPointerMove=${U}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${l} role="img" aria-label=${e.label||""}>
            <${Yr} width=${n} height=${l} sy=${m}
              yTicks=${w} xTicks=${z}
              yUnit=${e.yUnit||"kW"} xUnit=${e.xUnit||"h"} />
            ${(e.bands||[]).map(function(C,T){return ra(C.top,C.bottom,b,m).map(function(I,B){return u`<path key=${T+"-"+B} class="ch-band" d=${I} fill=${C.color} stroke="none"/>`})})}
            ${s.map(function(C,T){return N(C.points).map(function(I,B){return u`
                  <g key=${T+"-"+B}>
                    ${C.fill?u`<path class="ch-area" d=${I.area} fill=${C.fill} opacity="0.55" stroke="none"/>`:null}
                    <path class="ch-line" pathLength="1" d=${I.line} fill="none" stroke=${C.color} stroke-width="2"
                      stroke-linejoin="round" stroke-linecap="round"/>
                  </g>`})})}
            ${E!==null?u`
              <line x1=${E} x2=${E} y1=${q.top-4} y2=${l-q.bottom} class="ch-crosshair"/>
              ${s.map(function(C,T){var I=Kn(C.points,i);return I>=0?u`
                  <circle key=${T} cx=${b(C.points[I].t)} cy=${m(C.points[I].y)} r="3.5"
                    fill=${C.color} stroke="#fff" stroke-width="1.5"/>`:null})}`:null}
          </svg>
          ${E!==null?Gr(t,n,E,L):null}`:null}
      </div>`}function _n(e){var t=be(null),n=Vr(t),r=x(null),i=r[0],a=r[1],l=e.height||180,s=e.points||[];function c(_){return(_.segments||[]).reduce(function(M,W){return M+(W.value||0)},0)}function v(_){return _.bars?_.bars.map(c):[_.y]}var d=s.reduce(function(_,M){return M.bars?Math.max(_,M.bars.length):_},1),h=[];s.forEach(function(_){v(_).forEach(function(M){h.push(M)})});var f=qr(h,!0),p=Math.max(10,n-q.left-q.right),g=l-q.top-q.bottom;function y(_){return q.top+(1-(_-f[0])/(f[1]-f[0]))*g}var $=s.length,b=$>0?p/$:p;function m(_){return q.left+(_+.5)*b}var w=Math.max(1,Math.min(b-1,b*.72,46)),S=Kr(f[0],f[1],4),z=e.xTickFormat||function(_){return k.time(_,"hm")},N=ta(s,p,z).map(function(_){return{x:m(_),label:z(s[_].t)}}),U=y(0),E=s.length+"|"+(s.length?s[0].t+"-"+s[s.length-1].t:"")+"|"+d+"|"+(e.yUnit||"");function L(_){if(!t.current||!$){a(null);return}var M=t.current.getBoundingClientRect(),W=_.clientX-M.left;if(W<q.left||W>n-q.right){a(null);return}var D=Math.floor((W-q.left)/b);a(D<0?0:D>=$?$-1:D)}var C=e.yFormat||$n;function T(_){return C(_)+(e.yFormat?"":" "+(e.yUnit||""))}var I=null,B=[];if(i!==null&&s[i]){var A=s[i];I=m(i),B.push({text:z(A.t)}),A.bars?A.bars.forEach(function(_){(_.segments||[]).forEach(function(M){M.value&&B.push({color:M.color,text:(M.label?M.label+": ":"")+T(M.value)})})}):A.y!==null&&A.y!==void 0&&B.push({color:A.color||e.color,text:T(A.y)})}return u`
      <div class="chart" ref=${t}
        onPointerMove=${L}
        onPointerLeave=${function(){a(null)}}>
        ${n>0?u`
          <svg width=${n} height=${l} role="img" aria-label=${e.label||""}>
            <${Yr} width=${n} height=${l} sy=${y}
              yTicks=${S} xTicks=${N}
              yUnit=${e.yUnit||"kWh"} xUnit=${e.xUnit||"t"} />
            <g class="ch-bars" key=${E}>
            ${s.map(function(_,M){var W=i===M?"1":"0.85";if(_.bars){var D=m(M)-w/2,ue=w/d;return u`<g key=${M}>${_.bars.map(function(ve,P){var V=D+P*ue+1,G=Math.max(1,ue-2),ne=0;return(ve.segments||[]).map(function(Fe,O){var ee=Fe.value||0;if(ee<=0)return null;var ae=y(ne+ee),oe=Math.max(1,y(ne)-ae);return ne+=ee,u`
                      <rect key=${P+"-"+O} class="ch-bar ch-bar-up"
                        x=${V.toFixed(1)} y=${ae.toFixed(1)}
                        width=${G.toFixed(1)} height=${oe.toFixed(1)} rx="1.5"
                        fill=${Fe.color} opacity=${W}/>`})})}</g>`}if(_.y===null||_.y===void 0)return null;var se=m(M)-w/2,j=y(_.y),Q=Math.min(j,U),he=Math.max(1,Math.abs(j-U));return u`
                <rect key=${M} class=${"ch-bar "+(_.y<0?"ch-bar-down":"ch-bar-up")}
                  x=${se.toFixed(1)} y=${Q.toFixed(1)}
                  width=${w.toFixed(1)} height=${he.toFixed(1)} rx="2"
                  fill=${_.color||e.color||"var(--c-consumption)"}
                  opacity=${W}/>`})}
            </g>
            <line x1=${q.left} x2=${n-q.right} y1=${U} y2=${U} class="ch-zero-strong"/>
          </svg>
          ${I!==null?Gr(t,n,I,B):null}`:null}
      </div>`}var ia=[10,25,50];function aa(e){var t=x(0),n=t[0],r=t[1],i=x(e.pageSize||10),a=i[0],l=i[1],s=e.rows||[],c=s.length,v=Math.max(1,Math.ceil(c/a)),d=Math.min(n,v-1),h=d*a,f=Math.min(h+a,c),p=s.slice(h,f);return u`
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
              <tr><td class="table-empty" colspan=${e.columns.length}>${o("common.nodata")}</td></tr>`:p.map(function(g,y){return u`
                  <tr key=${g.id!==void 0?g.id:h+y}>
                    ${e.columns.map(function($){return u`
                        <td key=${$.key} class=${$.align==="right"?"ta-r":""}>
                          ${$.render?$.render(g):g[$.key]}
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
                ${ia.map(function(g){return u`<option key=${g} value=${g}>${g}</option>`})}
              </select>
              <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </span>
          </label>
          <span class="table-pageinfo">
            ${o("table.pageinfo",{from:c===0?0:h+1,to:f,total:c})}
          </span>
          <span class="table-nav">
            <button class="table-navbtn" aria-label=${o("table.prev")}
              disabled=${d===0} onClick=${function(){r(d-1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
            <button class="table-navbtn" aria-label=${o("table.next")}
              disabled=${d>=v-1} onClick=${function(){r(d+1)}}>
              <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      </div>`}function Zr(e,t){var n=e.split("/").filter(function(v){return v!==""}),r=t.split("/").filter(function(v){return v!==""}),i={},a;for(a=0;a<n.length;a++){var l=n[a];if(l.charAt(0)===":"){var s=l.slice(-1)==="?",c=l.replace(/^:/,"").replace(/\?$/,"");if(r[a]===void 0){if(s)continue;return null}i[c]=decodeURIComponent(r[a])}else if(l!==r[a])return null}return r.length>n.length?null:i}function nn(e){for(var t=window.location.hash||"#/",n=t.replace(/^#/,"").split("?")[0]||"/",r=0;r<e.length;r++){var i=Zr(e[r].path,n);if(i)return{route:e[r],params:i,path:n}}return{route:e[0],params:{},path:"/"}}function la(e){var t=x(function(){return nn(e)}),n=t[1];return J(function(){function r(){n(nn(e))}return window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}},[]),t[0]}const Me={match:Zr,parse:nn,useRoute:la,navigate:function(e){window.location.hash="#"+e}};var oa=["imp_wh","exp_wh","pv_wh","vzev_in_wh","vzev_out_wh"],sa=["grid_ht_wh","grid_nt_wh"];function de(e){return e==null||isNaN(e)?null:Math.round((e+(e>=0?1:-1)*1e-9)*100)/100}function yn(e,t){t=t||{};var n=Se(t.grid_import_chf_kwh,.26),r=Se(t.grid_feedin_chf_kwh,.18),i=Se(t.vzev_import_chf_kwh,.22),a=Se(t.vzev_export_chf_kwh,.22),l=e.imp_wh,s=e.exp_wh,c=e.pv_wh,v=e.vzev_in_wh||0,d=e.vzev_out_wh||0,h={};for(var f in e)h[f]=e[f];if(h.cost_import_chf=l==null?null:de((l-v)/1e3*n),h.revenue_feedin_chf=s==null?null:de((s-d)/1e3*r),h.cost_vzev_chf=de(v/1e3*i),h.revenue_vzev_chf=de(d/1e3*a),h.saving_selfuse_chf=c==null||s===null||s===void 0?null:de(Math.max(0,(c-s)/1e3*(n-r))),Wt(t)&&e.grid_ht_wh!==void 0&&e.grid_nt_wh!==void 0){var p=Se(t.grid_import_ht_chf_kwh,n),g=Se(t.grid_import_nt_chf_kwh,n);h.cost_import_ht_chf=de(e.grid_ht_wh/1e3*p),h.cost_import_nt_chf=de(e.grid_nt_wh/1e3*g),h.cost_import_chf=de(h.cost_import_ht_chf+h.cost_import_nt_chf)}return h}function Se(e,t){return e==null||isNaN(e)?t:Number(e)}var dt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function Qr(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return Qr(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var l=dt[i.slice(0,a)],s=dt[i.slice(a+1)];if(l!==void 0&&s!==void 0){if(l<=s){if(t>=l&&t<=s)return!0}else if(t>=l||t<=s)return!0}}else if(dt[i]!==void 0&&dt[i]===t)return!0}return!1}function Wt(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function ua(e,t){for(var n=new Date(e*1e3),r=(n.getDay()+6)%7,i=n.getHours()+n.getMinutes()/60,a=t.ht_windows,l=0;l<a.length;l++){var s=a[l]||{};if(Qr(s.days,r)&&i>=Se(s.from,0)&&i<Se(s.to,0))return!0}return!1}function Xr(e,t){if(!Wt(t))return e;var n=e.imp_wh,r=e.vzev_in_wh||0;if(n==null)return e;var i=n-r;i<0&&(i=0);var a={};for(var l in e)a[l]=e[l];return ua(e.ts,t)?(a.grid_ht_wh=i,a.grid_nt_wh=0):(a.grid_ht_wh=0,a.grid_nt_wh=i),a}function ca(e,t){var n={ts:e},r=!1;return oa.forEach(function(i){var a=0,l=!1,s=!1;t.forEach(function(c){var v=c[i];v==null?s=!0:(a+=v,l=!0)}),n[i]=l?a:null,l&&s&&(r=!0)}),sa.forEach(function(i){var a=0,l=!1;t.forEach(function(s){var c=s[i];c!=null&&(a+=c,l=!0)}),l&&(n[i]=a)}),t.forEach(function(i){i.partial&&(r=!0)}),r&&(n.partial=!0),n.count=t.length,n}function fa(e){return e-e%3600}function va(e){var t=e-rn(e,86400),n=rn(Math.floor(t/86400)+3,7);return t-n*86400}function rn(e,t){return(e%t+t)%t}function bn(e){var t=new Date(e*1e3);return Math.floor(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)/1e3)}function da(e){var t=new Date(e*1e3),n=Math.floor(t.getUTCMonth()/3)*3;return Math.floor(Date.UTC(t.getUTCFullYear(),n,1)/1e3)}function Ze(e,t,n){var r={},i=[];(e||[]).forEach(function(l){var s=t(l.ts);r[s]||(r[s]=[],i.push(s)),r[s].push(l)});var a=i.map(function(l){return yn(ca(Number(l),r[l]),n)});return a.sort(function(l,s){return l.ts-s.ts}),a}function qn(e,t,n,r){if(e=e||[],Wt(r)&&t==="15m"&&(e=e.map(function(a){return Xr(a,r)})),t===n){var i=e.map(function(a){return yn(a,r)});return i.sort(function(a,l){return a.ts-l.ts}),i}switch(n){case"1h":return Ze(e,fa,r);case"1w":return Ze(e,va,r);case"1q":return Ze(e,da,r);case"1mo":return Ze(e,bn,r);case"1d":default:return Ze(e,function(a){return a-rn(a,86400)},r)}}function an(e){var t=0,n=0;return(e||[]).forEach(function(r){r==null||isNaN(r)||(t+=Number(r),n++)}),n===0?null:t/n}function pa(e){if(e=(e||[]).filter(function(s){return s!=null&&!isNaN(s)}),e.length<2)return{dir:"flat",pct:null};var t=Math.floor(e.length/2),n=an(e.slice(0,t)),r=an(e.slice(t));if(n===null||r===null)return{dir:"flat",pct:null};var i=r-n,a=i>1e-9?"up":i<-1e-9?"down":"flat",l=n===0?null:i/Math.abs(n)*100;return{dir:a,pct:l}}function ha(e){if(e=e||[],e.length<13)return null;var t=e[e.length-1],n=e[e.length-13];return t==null||isNaN(t)||n===null||n===void 0||isNaN(n)||n===0?null:(t-n)/Math.abs(n)*100}function ga(e,t){t=t||3;var n=[];return(e||[]).forEach(function(r,i){r&&r.imp_wh!==null&&r.imp_wh!==void 0&&!isNaN(r.imp_wh)&&r.imp_wh>0&&n.push(i)}),n.sort(function(r,i){return e[i].imp_wh-e[r].imp_wh}),n.slice(0,t)}function ma(e){return e-e%86400}function Et(e,t){if(!Array.isArray(e))return null;for(var n=Math.floor(e.length/3),r=null,i=0;i<n;i++)e[i*3]===t&&(r=[e[i*3+1],e[i*3+2]]);return r}function Jr(e,t){var n={},r=[],i=0;t=t||{};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var l=t[a];(l==null||l<0)&&(l=0),t[a]=l,r.push(a),i+=l,n[a]=0}if(r.length===0)return n;r.sort(),e<0&&(e=0);var s=e<i?e:i;if(s<=0||i<=0)return n;var c={},v=0;r.forEach(function(p){var g=s*t[p],y=Math.floor(g/i);c[p]=g-y*i,n[p]=y,v+=y});for(var d=s-v;d>0;){var h=null,f=-1;if(r.forEach(function(p){c[p]>f&&(f=c[p],h=p)}),h===null)break;n[h]+=1,c[h]=-1,d-=1}return n}function ei(e){e=e||{};var t=e.data||{},n=e.producer_id,r={},i=[];for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a))for(var l=t[a],s=Math.floor((l?l.length:0)/3),c=0;c<s;c++){var v=l[c*3];r[v]||(r[v]=!0,i.push(v))}return i.sort(function(d,h){return d-h}),i.map(function(d){var h={},f=0;for(var p in t)if(Object.prototype.hasOwnProperty.call(t,p)){var g=Et(t[p],d);g!==null&&(p===n?f=g[1]:h[p]=g[0])}return{ts:d,members:Jr(f,h)}})}function Yn(e,t){var n={},r=[];return e.forEach(function(i){var a=t(i.ts),l=n[a];l||(l={},n[a]=l,r.push(a));var s=i.members||{};for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=(l[c]||0)+s[c])}),r.sort(function(i,a){return i-a}),r.map(function(i){return{ts:i,members:n[i]}})}function Gn(e,t,n){(n==null||n<1)&&(n=96);var r=ei(e),i;t==="1d"?i=Yn(r,ma):t==="1mo"?i=Yn(r,bn):i=r;var a=i.length>n?i.length-n:0;return i.slice(a)}function $a(e){if(typeof e!="string"||e.length!==7||e[4]!=="-"||e[5]!=="Q")return null;var t=parseInt(e.slice(0,4),10),n=parseInt(e[6],10);if(isNaN(t)||isNaN(n)||n<1||n>4)return null;var r=(n-1)*3,i=Math.floor(Date.UTC(t,r,1)/1e3),a=Math.floor(Date.UTC(t,r+3,1)/1e3);return[i,a]}function _a(e,t,n,r,i){n=n||[],r=r||{};var a={};n.forEach(function(E){E&&E.id!==void 0&&(a[E.id]=E)});var l=kn(r),s={};n.forEach(function(E){E&&E.id!==void 0&&(s[E.id]=ge(E.entry_ts,0))});var c={},v={},d={},h={},f={},p=0;(t||[]).forEach(function(E){var L=bn(E.ts),C=l&&wa(E.ts,r)==="ht",T=E.members||{};for(var I in T)if(Object.prototype.hasOwnProperty.call(T,I)&&!(s[I]&&E.ts<s[I])){var B=T[I]||0;c[I]=(c[I]||0)+B,C?v[I]=(v[I]||0)+B:d[I]=(d[I]||0)+B;var A=h[I];A||(A={},h[I]=A),A[L]=(A[L]||0)+B,f[L]=(f[L]||0)+B,p+=B}});var g=ge(r.vzev_export_chf_kwh,0),y=ge(r.vzev_import_chf_kwh,0),$=[];for(var b in c)if(Object.prototype.hasOwnProperty.call(c,b)){var m=c[b],w=a[b],S={id:b,name:w&&w.name!==void 0?w.name:b,wh:m,chf:de(m/1e3*y)};w&&(w.location!==void 0&&(S.location=w.location),w.metering_point!==void 0&&(S.metering_point=w.metering_point),w.entry_ts!==void 0&&(S.entry_ts=w.entry_ts)),l&&(S.ht_wh=v[b]||0,S.nt_wh=d[b]||0);var z=ge(r.grid_import_chf_kwh,null);z!==null&&(S.cost_grid_chf=de(l?S.ht_wh/1e3*ge(r.grid_import_ht_chf_kwh,z)+S.nt_wh/1e3*ge(r.grid_import_nt_chf_kwh,z):m/1e3*z)),S.months=Zn(h[b]),$.push(S)}var N=Zn(f),U={quarter:e,months:N,total:{exp_wh:p,revenue_chf:de(p/1e3*g),months:N},members:$,note:"15-min Messwerte, Abgleich mit Netzbetreiber pro Quartal"};return i!=null&&(U.quality=i),U}function ge(e,t){return e==null||isNaN(e)?t:Number(e)}function Zn(e){e=e||{};var t=Object.keys(e).map(Number).sort(function(n,r){return n-r});return t.map(function(n){return{ts:n,wh:e[n]}})}function ya(e){var t=new Date(e*1e3);return(t.getDay()+6)%7}function ba(e){var t=new Date(e*1e3);return t.getHours()+t.getMinutes()/60}var pt={mo:0,mon:0,di:1,tu:1,tue:1,mi:2,we:2,wed:2,do:3,th:3,thu:3,fr:4,fri:4,sa:5,sat:5,so:6,su:6,sun:6};function wn(e,t){if(e==null||e==="")return!0;if(typeof e=="number")return(e%7+7)%7===t;if(Array.isArray(e))return e.some(function(c){return wn(c,t)});if(typeof e!="string")return!0;for(var n=e.toLowerCase().split(/[\s,]+/).filter(Boolean),r=0;r<n.length;r++){var i=n[r],a=i.indexOf("-");if(a>0){var l=pt[i.slice(0,a)],s=pt[i.slice(a+1)];if(l!==void 0&&s!==void 0){if(l<=s){if(t>=l&&t<=s)return!0}else if(t>=l||t<=s)return!0}}else if(pt[i]!==void 0&&pt[i]===t)return!0}return!1}function kn(e){e=e||{};var t=e.grid_import_ht_chf_kwh,n=e.grid_import_nt_chf_kwh,r=e.ht_windows;return t!=null&&n!==null&&n!==void 0&&Array.isArray(r)&&r.length>0}function wa(e,t){if(!kn(t))return"flat";for(var n=ya(e),r=ba(e),i=t.ht_windows,a=0;a<i.length;a++){var l=i[a]||{},s=ge(l.from,0),c=ge(l.to,0);if(wn(l.days,n)&&r>=s&&r<c)return"ht"}return"nt"}function ka(e){var t=e.ht_windows;if(!Array.isArray(t)||t.length===0)return 0;for(var n=0,r=0,i=0;i<7;i++)for(var a=0;a<96;a++){var l=a/4;r++;for(var s=0;s<t.length;s++){var c=t[s]||{};if(wn(c.days,i)&&l>=ge(c.from,0)&&l<ge(c.to,0)){n++;break}}}return r===0?0:n/r}function ti(e){e=e||{};var t;if(kn(e)){var n=ka(e),r=ge(e.grid_import_ht_chf_kwh,0),i=ge(e.grid_import_nt_chf_kwh,0);t=r*n+i*(1-n)}else{var a=e.grid_import_chf_kwh;if(a==null||isNaN(a))return null;t=Number(a)}return de(t*.8)}function xa(e,t,n){e=e||{};var r=e.data||{},i=e.self_id;t=t||[];var a={},l=[];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))for(var c=r[s],v=Math.floor((c?c.length:0)/3),d=0;d<v;d++){var h=c[d*3];n&&(h<n[0]||h>=n[1])||a[h]||(a[h]=!0,l.push(h))}l.sort(function(m,w){return m-w});var f={},p={};t.forEach(function(m){!m||m.id===void 0||(f[m.id]=ge(m.entry_ts,0),p[m.id]={have:0,expected:0,lastTs:null})});var g=0,y=0,$=0,b=0;return l.forEach(function(m){g++;var w=!1;t.forEach(function(S){if(!(!S||S.id===void 0)&&!(m<f[S.id])){var z=p[S.id];z.expected++;var N=Et(r[S.id],m);N===null?w=!0:(z.have++,(z.lastTs===null||m>z.lastTs)&&(z.lastTs=m))}}),i!=null&&Et(r[i],m)===null&&b++,w?$++:y++}),{expected:g,complete:y,provisional:$,missing:b,perMember:p}}function Qn(e,t){e=e||{};var n=(e.data||{})[t];if(!Array.isArray(n)||n.length<3)return null;for(var r=Math.floor(n.length/3),i=null,a=0;a<r;a++){var l=n[a*3];(i===null||l>i)&&(i=l)}return i}function za(e,t,n){t=t||{};var r=t.data||{},i=t.producer_id,a={},l=0,s=0,c=0;for(var v in r)if(Object.prototype.hasOwnProperty.call(r,v)){var d=Et(r[v],e);d!==null&&(v===i?s=d[1]:(a[v]=d[0],l+=d[0],v===n&&(c=d[0])))}var h=Jr(s,a);return{prodWh:s,totalImpWh:l,memberImpWh:c,sharePct:l>0?de(c/l*100):0,allocatedWh:h[n]||0}}function xn(){var e=new URLSearchParams(window.location.search),t=e.get("host");return t?"http://"+t:""}var xt=[],zt=!0,ln=null,Ct=[];function Xn(e){Ct.forEach(function(t){t(e)})}function ni(e){e&&(ln=Date.now()),e!==zt&&(zt=e,xt.forEach(function(t){t(zt,ln)}))}var Ca=3,on=0;function ri(e){return e instanceof TypeError||e&&e.name==="AbortError"}function ii(){on=0,ni(!0)}function ai(e){e&&e.optional||(on++,on>=Ca&&ni(!1))}var Sa=8e3,Ma=2,jt=0,sn=[];function li(){for(;jt<Ma&&sn.length>0;){var e=sn.shift();jt++,e.run().then(e.resolve,e.reject).finally(function(){jt--,li()})}}function oi(e){return new Promise(function(t,n){sn.push({run:e,resolve:t,reject:n}),li()})}function zn(e,t){return t=t||{},oi(function(){var n=new AbortController,r=setTimeout(function(){n.abort()},Sa);return fetch(xn()+e,{signal:n.signal}).then(function(i){if(ii(),!i.ok)throw new Error("HTTP "+i.status+" "+e);return t.text?i.text():i.json()}).catch(function(i){throw ri(i)&&ai(t),i}).finally(function(){clearTimeout(r)})})}function X(e,t){return zn(e,t)}var $e={optional:!0};function Na(e,t){var n=null,r=!1;function i(){document.hidden||e()}function a(){n!==null||r||(i(),n=setInterval(i,t))}function l(){n!==null&&(clearInterval(n),n=null)}function s(){document.hidden?l():a()}return document.addEventListener("visibilitychange",s),a(),function(){r=!0,l(),document.removeEventListener("visibilitychange",s)}}function Jn(e,t){return oi(function(){return fetch(xn()+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(n){return n.text().then(function(r){var i=null;try{i=r?JSON.parse(r):null}catch{}if(ii(),!n.ok){var a=i&&i.error||"HTTP "+n.status;throw new Error(a)}return i})}).catch(function(n){throw ri(n)&&ai(),n})})}function ht(e){return e==null||String(e).trim()===""}function De(e){return zn("/cm?cmnd="+encodeURIComponent(e))}const F={base:xn,get:X,post:Jn,restartDevice:function(){return De("Restart 1")},getWifiConfig:function(){return Promise.all([De("SSId1"),De("SSId2")]).then(function(e){return{ssid1:e[0]&&e[0].SSId1||"",ssid2:e[1]&&e[1].SSId2||""}})},setWifiConfig:function(e){e=e||{};var t=[];return ht(e.ssid1)||t.push("SSId1 "+e.ssid1),ht(e.password1)||t.push("Password1 "+e.password1),ht(e.ssid2)||t.push("SSId2 "+e.ssid2),ht(e.password2)||t.push("Password2 "+e.password2),t.length===0?Promise.resolve({}):De("Backlog "+t.join(";"))},wifiScanStart:function(){return De("WifiScan 1")},wifiScanResult:function(){return De("WifiScan")},getConfig:function(){return X("/api/config")},postConfig:function(e){return Jn("/api/config",e)},getConfigRaw:function(){return zn("/api/config",{text:!0})},getPower:function(){return X("/api/power")},getEnergy:function(e,t,n,r){var i="/api/energy?res="+encodeURIComponent(e||"15m")+"&count="+(t||96);return n!==void 0&&(i+="&from="+n),r!==void 0&&(i+="&to="+r),X(i)},getMeta:function(){return X("/api/meta")},getMeter:function(){return X("/api/meter")},getSite:function(){return X("/site")},getLoads:function(){return X("/loads")},getProductions:function(){return X("/productions")},setLoadState:function(e,t){return X("/loads?id="+encodeURIComponent(e)+"&action=transition&to="+encodeURIComponent(t))},getVzevRaw:function(){return X("/api/vzev/raw",$e)},getVzevMembersList:function(){return X("/api/vzev/members",$e).then(function(e){return Array.isArray(e)?e:e&&e.members||[]})},getVzevDiscovered:function(){return X("/api/vzev/discovered",$e).then(function(e){return Array.isArray(e)?e:e&&e.discovered||[]})},getVzevInfo:function(){return X("/api/vzev/info",$e).catch(function(){return{}}).then(function(e){return Xn(e),e})},setVzevInfo:function(e){e=e||{};var t="/api/vzev/info?action=set";return["representative_name","representative_contact","connection_point_id"].forEach(function(n){e[n]!==void 0&&e[n]!==null&&(t+="&"+n+"="+encodeURIComponent(e[n]))}),e.enabled!==void 0&&e.enabled!==null&&(t+="&enabled="+(e.enabled?"true":"false")),X(t).then(function(n){return Xn(n),n})},getVzevFlows:function(e,t){return X("/api/vzev/raw",$e).then(function(n){return{flows:Gn(n,e||"15m",t||90)}})},getVzevBilling:function(e){var t=$a(e);return t?Promise.all([X("/api/vzev/raw",$e),X("/api/vzev/members",$e).catch(function(){return{members:[]}}),X("/api/meta").catch(function(){return{}}),X("/api/vzev/info",$e).catch(function(){return{}}),X("/site").catch(function(){return{}})]).then(function(n){var r=n[0],i=n[1]&&n[1].members?n[1].members:Array.isArray(n[1])?n[1]:[],a=n[2]&&n[2].tariffs||{};r&&r.tariffs&&(a=Object.assign({},a,r.tariffs));var l=n[3]||{},s=n[4]||{},c=ei(r).filter(function(g){return g.ts>=t[0]&&g.ts<t[1]}),v=xa(r,i,t),d=_a(e,c,i,a,v);d.info=l,d.raw=r,d.range=t,d.tariffs=a;var h=r&&r.self_id,f=r&&r.producer_id;if(h!=null)if(h===f)d.role="PRODUCER";else{d.role="CONSUMER";var p=d.members.filter(function(g){return g.id===h})[0];d.self=p?Object.assign({},p,{name:s.name||p.name}):{id:h,name:s.name||h,wh:0,chf:0,months:[]}}return d}):Promise.reject(new Error("invalid quarter"))},getVzevMembers:function(){return Promise.all([X("/api/vzev/members",$e),X("/api/vzev/raw",$e)]).then(function(e){var t=e[0]&&e[0].members?e[0].members:Array.isArray(e[0])?e[0]:[],n=Gn(e[1],"15m",90);return t.map(function(r){var i=r.type==="PRODUCER"||r.typ==="P",a=i?1:-1,l=n.map(function(c){var v=c.members&&c.members[r.id];return{t:c.ts,y:typeof v=="number"?v:0}}),s=l.reduce(function(c,v){return c+(v.y||0)},0);return{id:r.id,name:r.name||r.id,address:r.location||r.loc,net_wh:a*s,points:l}})})},poll:Na,onStatus:function(e){return xt.push(e),function(){var t=xt.indexOf(e);t>=0&&xt.splice(t,1)}},onVzevInfo:function(e){return Ct.push(e),function(){var t=Ct.indexOf(e);t>=0&&Ct.splice(t,1)}},isOnline:function(){return zt},lastOk:function(){return ln}};var si={overview:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg>`,history:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 3v13.5h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 12.5l3.5-4 3 2.5 4.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,meter:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 10l3.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4.2 11.5h1.6M14.2 11.5h1.6M10 4.2v1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,vzev:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><circle cx="10" cy="4" r="2.2" fill="currentColor"/><circle cx="4" cy="15" r="2.2" fill="currentColor"/><circle cx="16" cy="15" r="2.2" fill="currentColor"/><path d="M10 6.5v4M10 10.5l-4.5 3M10 10.5l4.5 3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,settings:u`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96387 10.7915C9.27554 10.7915 10.3389 9.72818 10.3389 8.4165C10.3389 7.10483 9.27554 6.0415 7.96387 6.0415C6.65219 6.0415 5.58887 7.10483 5.58887 8.4165C5.58887 9.72818 6.65219 10.7915 7.96387 10.7915Z" stroke="currentColor"/>
      <path d="M9.36127 0.620333C9.07073 0.5 8.70181 0.5 7.96398 0.5C7.22615 0.5 6.85723 0.5 6.56669 0.620333C6.37446 0.699906 6.19979 0.816584 6.05268 0.963698C5.90556 1.11081 5.78889 1.28548 5.70931 1.47771C5.63648 1.65425 5.60719 1.86088 5.5961 2.16092C5.59095 2.37778 5.53087 2.58979 5.4215 2.77711C5.31212 2.96444 5.15701 3.12096 4.97069 3.23204C4.78133 3.33794 4.56819 3.39407 4.35123 3.39518C4.13427 3.39629 3.92058 3.34234 3.73015 3.23838C3.46415 3.09746 3.27177 3.01988 3.08098 2.99454C2.66482 2.93981 2.24395 3.05258 1.9109 3.30804C1.66231 3.50042 1.47706 3.81946 1.10815 4.45833C0.73923 5.09721 0.55398 5.41625 0.513605 5.72896C0.486399 5.93515 0.500083 6.14468 0.553874 6.34558C0.607665 6.54649 0.70051 6.73482 0.827105 6.89983C0.944271 7.05183 1.10815 7.17929 1.36227 7.33921C1.73673 7.57433 1.9774 7.97492 1.9774 8.41667C1.9774 8.85842 1.73673 9.259 1.36227 9.49333C1.10815 9.65404 0.94348 9.7815 0.827105 9.9335C0.70051 10.0985 0.607665 10.2868 0.553874 10.4878C0.500083 10.6887 0.486399 10.8982 0.513605 11.1044C0.554771 11.4163 0.73923 11.7361 1.10735 12.375C1.47706 13.0139 1.66152 13.3329 1.9109 13.5253C2.07591 13.6519 2.26424 13.7447 2.46515 13.7985C2.66605 13.8523 2.87558 13.866 3.08177 13.8388C3.27177 13.8135 3.46415 13.7359 3.73015 13.595C3.92058 13.491 4.13427 13.437 4.35123 13.4382C4.56819 13.4393 4.78133 13.4954 4.97069 13.6013C5.35306 13.823 5.58027 14.2307 5.5961 14.6724C5.60719 14.9733 5.63569 15.1791 5.70931 15.3556C5.78889 15.5479 5.90556 15.7225 6.05268 15.8696C6.19979 16.0167 6.37446 16.1334 6.56669 16.213C6.85723 16.3333 7.22615 16.3333 7.96398 16.3333C8.70181 16.3333 9.07073 16.3333 9.36127 16.213C9.5535 16.1334 9.72817 16.0167 9.87528 15.8696C10.0224 15.7225 10.1391 15.5479 10.2186 15.3556C10.2915 15.1791 10.3208 14.9733 10.3319 14.6724C10.3477 14.2307 10.5749 13.8222 10.9573 13.6013C11.1466 13.4954 11.3598 13.4393 11.5767 13.4382C11.7937 13.437 12.0074 13.491 12.1978 13.595C12.4638 13.7359 12.6562 13.8135 12.8462 13.8388C13.0524 13.866 13.2619 13.8523 13.4628 13.7985C13.6637 13.7447 13.8521 13.6519 14.0171 13.5253C14.2664 13.3337 14.4509 13.0139 14.8198 12.375C15.1887 11.7361 15.374 11.4171 15.4144 11.1044C15.4416 10.8982 15.4279 10.6887 15.3741 10.4878C15.3203 10.2868 15.2274 10.0985 15.1009 9.9335C14.9837 9.7815 14.8198 9.65404 14.5657 9.49413C14.3804 9.38123 14.2267 9.22317 14.1192 9.03473C14.0116 8.84629 13.9536 8.63363 13.9506 8.41667C13.9506 7.97492 14.1912 7.57433 14.5657 7.34C14.8198 7.17929 14.9845 7.05183 15.1009 6.89983C15.2274 6.73482 15.3203 6.54649 15.3741 6.34558C15.4279 6.14468 15.4416 5.93515 15.4144 5.72896C15.3732 5.41704 15.1887 5.09721 14.8206 4.45833C14.4509 3.81946 14.2664 3.50042 14.0171 3.30804C13.8521 3.18145 13.6637 3.0886 13.4628 3.03481C13.2619 2.98102 13.0524 2.96734 12.8462 2.99454C12.6562 3.01988 12.4638 3.09746 12.197 3.23838C12.0067 3.3422 11.7931 3.39607 11.5763 3.39496C11.3595 3.39386 11.1465 3.3378 10.9573 3.23204C10.7709 3.12096 10.6158 2.96444 10.5065 2.77711C10.3971 2.58979 10.337 2.37778 10.3319 2.16092C10.3208 1.86008 10.2923 1.65425 10.2186 1.47771C10.1391 1.28548 10.0224 1.11081 9.87528 0.963698C9.72817 0.816584 9.5535 0.699906 9.36127 0.620333Z" stroke="currentColor"/>
    </svg>
    `,burger:u`<svg viewBox="0 0 20 20" class="nav-icon" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`};function er(){return u`
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
      </a>`}var Ta=[{path:"/",key:"nav.overview",icon:"overview",active:function(e){return e==="/"}},{path:"/verlauf",key:"nav.history",icon:"history",active:function(e){return e.indexOf("/verlauf")===0}},{path:"/zaehler",key:"nav.meter",icon:"meter",gate:"meter",active:function(e){return e.indexOf("/zaehler")===0}},{path:"/vzev",key:"nav.vzev",icon:"vzev",gate:"vzev",active:function(e){return e.indexOf("/vzev")===0}},{path:"/einstellungen",key:"nav.settings",icon:"settings",active:function(e){return e.indexOf("/einstellungen")===0}}];function tr(e){return u`
      <nav class="nav" aria-label=${o("nav.menu")}>
        ${Ta.filter(function(t){return(t.gate!=="meter"||e.showMeter)&&(t.gate!=="vzev"||e.showVzev)}).map(function(t){var n=t.active(e.path);return u`
            <a key=${t.path} href=${"#"+t.path}
              class=${"nav-item"+(n?" nav-item-active":"")}
              aria-current=${n?"page":"false"}
              onClick=${e.onNavigate}>
              ${si[t.icon]}
              <span>${o(t.key)}</span>
            </a>`})}
      </nav>`}function Ea(e){var t=Me.useRoute(e.routes),n=x(!1),r=n[0],i=n[1],a=x(!1),l=a[0],s=a[1],c=x(null),v=c[0],d=c[1],h=x(!1),f=h[0],p=h[1],g=x(!1),y=g[0],$=g[1];J(function(){return F.onStatus(function(m,w){m?d(null):(le(o("error.offline"),{type:"error"}),d(w?new Date(w):new Date))})},[]),J(function(){return F.poll(function(){F.getMeta().then(function(m){s(!!m&&typeof m.time=="number"&&m.time<1e9)}).catch(function(){})},6e4)},[]),J(function(){F.getMeter().then(function(m){p(!!(m&&m.values))}).catch(function(){})},[]),J(function(){var m=F.onVzevInfo(function(w){$(!!(w&&w.enabled))});return F.getVzevInfo().catch(function(){}),m},[]),J(function(){i(!1)},[t.path]);var b=t.route.component;return u`
      <div class="shell">
        <aside class="sidebar">
          <${er} />
          <${tr} path=${t.path} showMeter=${f} showVzev=${y} />
          <div class="sidebar-foot"><a target="_blank" href="https://gplug.ch">gPlug.ch</a></div>
        </aside>

        <div class="topbar">
          <${er} />
          <button class="burger" aria-label=${o("nav.menu")} aria-expanded=${r}
            onClick=${function(){i(!r)}}>${si.burger}</button>
        </div>
        ${r?u`
          <div class="drawer">
            <${tr} path=${t.path} showMeter=${f} showVzev=${y} onNavigate=${function(){i(!1)}} />
          </div>`:null}

        <main class="content">
          ${l?u`<div class="banner banner-warn">${o("banner.rtc")}</div>`:null}
          ${v?u`
            <div class="stale-note">${o("common.stale",{time:k.time(Math.floor(v.getTime()/1e3),"hm")})}</div>`:null}
          <${b} params=${t.params} />
        </main>

        <${Ji} />
      </div>`}function xe(e){return e==null||isNaN(e)?null:Number(e)}function Vt(e){return e<0?0:e>1?1:e}function Cn(e){return e.pv_wh===null||e.pv_wh===void 0||e.exp_wh===null||e.exp_wh===void 0||e.imp_wh===null||e.imp_wh===void 0}function un(e,t){t=t||{};var n=!!t.vzev,r=xe(t.co2);e=e||[];var i=e.length,a=0,l=0,s=0,c=0,v=0,d=0,h=0;e.forEach(function(z){if(Cn(z)){d++;return}a+=z.pv_wh,l+=z.exp_wh,s+=z.imp_wh,c+=z.vzev_in_wh||0,v+=z.vzev_out_wh||0,h++});var f=i>0&&d/i>.2,p={autarky:null,selfuse:null,savingChf:null,savingParts:null,co2Kg:null,incomplete:f};if(n&&(p.autarkyVzev=null),i===0||f||h===0)return p;var g=Math.max(0,a-l),y=a-l+s;if(p.autarky=y>0?Vt(g/y):null,p.selfuse=a>0?Vt(g/a):null,n){var $=Math.max(0,s-c);p.autarkyVzev=y>0?Vt((y-$)/y):null}var b=yn({imp_wh:s,exp_wh:l,pv_wh:a,vzev_in_wh:c,vzev_out_wh:v},t.tariffs||{}),m=b.saving_selfuse_chf||0,w=b.revenue_feedin_chf||0,S=n?(b.revenue_vzev_chf||0)-(b.cost_vzev_chf||0):0;return p.savingParts={selfuse:m,feedin:w,vzev:n?S:null},p.savingChf=Math.round((m+w+S)*100)/100,p.co2Kg=r&&r>0?g/1e3*r/1e3:null,p}function Ia(e,t){if(!e)return[];var n=xe(e.pv_w),r=xe(e.bat_w),i=xe(e.grid_w),a=n===null,l=r===null,s=i===null,c=a?0:n,v=l?0:r,d=s?0:i,h=xe(t),f=Math.max(0,d),p=Math.max(0,-d),g=Math.max(0,c-p);function y(w,S){return S?"unknown":w<1?"zero":"ok"}var $=[];if($.push({from:"pv",to:"haus",watts:g,state:y(g,a||s)}),l?$.push({from:"bat",to:"haus",watts:0,state:"unknown"}):v>=0?$.push({from:"bat",to:"haus",watts:v,state:y(v,!1)}):$.push({from:"haus",to:"bat",watts:-v,state:y(-v,!1)}),h!==null&&h<0){var b=Math.min(-h,p);$.push({from:"pv",to:"vzev",watts:b,state:y(b,s)}),$.push({from:"pv",to:"netz",watts:p-b,state:y(p-b,s)})}else $.push({from:"pv",to:"netz",watts:p,state:y(p,s)});if(h!==null&&h>0){var m=Math.min(h,f);$.push({from:"vzev",to:"haus",watts:m,state:y(m,s)}),$.push({from:"netz",to:"haus",watts:f-m,state:y(f-m,s)})}else $.push({from:"netz",to:"haus",watts:f,state:y(f,s)});return $}function Pa(e){if(!e||!e.length)return null;var t=0,n=0,r=0,i=!1,a=!1;return e.forEach(function(l){var s=l.to==="netz"||l.to==="vzev",c=l.from==="netz"||l.from==="vzev";s?l.state==="unknown"?i=!0:n+=l.watts:c?l.state==="unknown"?i=!0:t+=l.watts:l.from==="pv"&&l.to==="haus"&&(l.state==="unknown"?a=!0:r+=l.watts)}),i?"flow.status_unknown":n>=1?"flow.status_export":t>=1?"flow.status_import":a?"flow.status_unknown":r>=1?"flow.status_covered":"flow.status_idle"}function Oa(e){if(!e||!e.length)return 0;var t=0,n=0;return e.forEach(function(r){r.state!=="unknown"&&(r.to==="netz"||r.to==="vzev"?n+=r.watts:(r.from==="netz"||r.from==="vzev")&&(t+=r.watts))}),n>=1?n:t>=1?t:0}function La(e){if(!e||!e.length)return null;var t=null;if(e.forEach(function(i){(i.points||[]).forEach(function(a){(t===null||a.t>t)&&(t=a.t)})}),t===null)return null;var n=0,r=!1;return e.forEach(function(i){var a=(i.net_wh||0)<0?-1:1;(i.points||[]).forEach(function(l){l.t===t&&(n+=a*(l.y||0),r=!0)})}),r?n*4:null}var Fa={"comp.pv":"var(--c-production)","comp.selfuse":"var(--c-consumption)","comp.battery":"var(--c-battery)","comp.charge":"var(--c-battery)","comp.vzev":"var(--c-vzev)","comp.grid":"var(--c-import)","comp.feedin":"var(--c-vzev-fill)"};function pe(e,t){return{key:e,value:Math.max(0,t||0),color:Fa[e]}}function Aa(e,t){if(!e)return{cover:[],usage:[],unknown:!0};var n=xe(e.pv_w),r=xe(e.bat_w),i=xe(e.grid_w),a=n===null||i===null,l=n===null?0:n,s=r===null?0:r,c=i===null?0:i,v=xe(t),d=Math.max(0,c),h=Math.max(0,-c),f=Math.max(0,l-h),p=Math.max(0,s),g=Math.max(0,-s),y=v!==null&&v>0?Math.min(v,d):0,$=v!==null&&v<0?Math.min(-v,h):0;return{cover:[pe("comp.pv",f),pe("comp.battery",p),pe("comp.vzev",y),pe("comp.grid",d-y)],usage:[pe("comp.selfuse",f),pe("comp.charge",g),pe("comp.vzev",$),pe("comp.feedin",h-$)],unknown:a}}function Wa(e){e=e||[];var t=0,n=0,r=0,i=0,a=0,l=0;if(e.forEach(function(d){Cn(d)||(t+=d.pv_wh,n+=d.exp_wh,r+=d.imp_wh,i+=d.vzev_in_wh||0,a+=d.vzev_out_wh||0,l++)}),l===0)return{cover:[],usage:[],unknown:!0};var s=Math.max(0,t-n),c=Math.min(Math.max(0,i),r),v=Math.min(Math.max(0,a),n);return{cover:[pe("comp.pv",s),pe("comp.vzev",c),pe("comp.grid",r-c)],usage:[pe("comp.selfuse",s),pe("comp.vzev",v),pe("comp.feedin",n-v)],unknown:!1}}function Ra(e){return!e||!e.length?!1:e.every(function(t){return t==null})}function Da(e){e=e||[];var t=0,n=0,r=0,i=0;if(e.forEach(function(l){Cn(l)||(t+=l.pv_wh,n+=l.exp_wh,r+=l.imp_wh,i++)}),i===0)return{prodSelf:null,prodFeedin:null,consSelf:null,consImport:null};var a=Math.max(0,t-n);return{prodSelf:a,prodFeedin:Math.max(0,n),consSelf:a,consImport:Math.max(0,r)}}var nr=900,Ua=90;function Sn(e){return e=String(e||"").toLowerCase(),e==="active"||e==="waiting"||e==="inactive"?e:"inactive"}function rr(e){return e.friendlyName||e.name||e.id||"–"}function ir(e){return e.friendlyName||e.name||e.id||"–"}function It(e){var t=e.currentPower!==void 0?e.currentPower:e.current_power;return typeof t=="number"&&!isNaN(t)?t:null}function Ba(e){return String(e.productionType||"").toUpperCase()==="BATTERY"}function Oe(e){return e==null||isNaN(e)?null:Number(e)}function Ha(e,t){if(!e)return null;var n=Number(e.grid_w)||0,r=Number(e.pv_w)||0;t=t||[];var i=t.filter(function(a){return Sn(a.state)==="waiting"});return n<0&&i.length>0?{key:"hint.shift_load"}:n>0&&r>0?{key:"hint.use_pv"}:null}function ui(e,t,n){var r={grid:[],pv:[],bat:[],load:[]};return!e||!e.samples||e.samples.forEach(function(i){var a=i[0];a<t||a>n||(r.grid.push({t:a,y:i[1]}),r.pv.push({t:a,y:i[2]}),r.bat.push({t:a,y:i[3]}),r.load.push({t:a,y:i[4]}))}),r}function ja(e){if(!e||!e.samples||!e.samples.length)return null;var t=e.samples[e.samples.length-1];return{ts:t[0],grid_w:t[1],pv_w:t[2],bat_w:t[3],load_w:t[4]}}function ar(e,t,n,r,i){var a=e[t]||(e[t]=[]);for(a.push({t:n,y:r});a.length&&a[0].t<i;)a.shift();for(;a.length>Ua;)a.shift()}function Va(e,t,n){for(var r=ui(e,t,n),i=[],a=[],l=0;l<r.grid.length;l++){var s=r.grid[l].t,c=Oe(r.grid[l].y),v=Oe(r.pv[l].y)||0,d=Oe(r.bat[l].y)||0;c!==null&&(a.push({t:s,y:v+d}),i.push({t:s,y:v+d+c}))}return{cons:i,prod:a}}function Qe(e){return u`
      <div class="ov-stat">
        <span class="ov-stat-dot" style=${"background:"+e.color}></span>
        <span class="ov-stat-label">${e.label}</span>
        ${e.tooltip?u`<${ce} text=${e.tooltip} />`:null}
        <span class="ov-stat-value" style=${"color:"+e.color}>${e.value}</span>
      </div>`}function Ka(e){var t=e.newest,n=e.win,r=e.power,i=e.vzevW,a=t?Oe(t.grid_w):null,l=t?Oe(t.pv_w)||0:null,s=t?Oe(t.bat_w)||0:null,c=t&&a!==null?l+s+a:null,v=t?l+s:null,d=t&&a!==null?Math.max(0,-a):null,h=t&&a!==null?Math.max(0,a):null,f=Va(r,n[0],n[1]),p=f.cons,g=f.prod;return u`
      <${R} group="grid" title=${o("panel.grid")}>
        <div class="ov-stats">
          <${Qe} color="var(--c-consumption)" label=${o("stat.consumption")}
            tooltip=${o("tooltip.consumption")} value=${k.w(c)} />
          <${Qe} color="var(--c-production)" label=${o("stat.production")}
            value=${k.w(v)} />
          <${Qe} color="var(--c-vzev)" label=${o("stat.export")}
            value=${k.w(d)} />
          <${Qe} color="var(--c-import)" label=${o("stat.gridop")}
            tooltip=${o("tooltip.gridop")} value=${k.w(h)} />
          ${i!==null?u`
            <${Qe} color="var(--c-vzev)"
              label=${i>=0?o("stat.vzev_import"):o("stat.vzev_export")}
              tooltip=${o("tooltip.vzev")} value=${k.w(Math.abs(i))} />`:null}
        </div>
        <${st} height=${210} yUnit="W" xUnit="h" timeWindow=${n}
          yFormat=${k.w}
          bands=${[{top:g,bottom:p,color:"var(--c-vzev-fill)"},{top:p,bottom:g,color:"var(--c-import-fill)"}]}
          series=${[{points:p,color:"var(--c-consumption)",label:o("stat.consumption")},{points:g,color:"var(--c-production)",label:o("stat.production")}]} />
      <//>`}function qa(e){var t=e.productions,n=e.history,r=e.win;return!t||!t.length?null:u`
      <${R} group="production" title=${o("panel.production")}>
        ${e.notice?u`
          <div class="ov-notice" role="status">
            <span class="ov-notice-text">${o("flow.prod_nodata")}</span>
            <button class="ov-hint-close" aria-label=${o("common.close")}
              onClick=${e.onDismissNotice}>×</button>
          </div>`:null}
        <div class="ov-subgrid">
          ${t.map(function(i){var a=Ba(i),l=a?"var(--c-battery)":"var(--c-production)",s=It(i);return u`
              <div key=${i.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${ir(i)}</span>
                  <span class="ov-sub-value" style=${"color:"+l}>${k.w(s)}</span>
                </div>
                <${st} height=${150} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${k.w}
                  series=${[{points:n[i.id]||[],color:l,label:a?o("stat.battery"):ir(i)}]} />
              </div>`})}
        </div>
      <//>`}function Ya(e){var t=e.loads,n=e.history,r=e.win,i=e.onToggle;return!t||!t.length?null:u`
      <${R} group="loads" title=${o("panel.loads")} tooltip=${o("tooltip.loads")}>
        <div class="ov-subgrid">
          ${t.map(function(a){var l=Sn(a.state),s=It(a),c=l==="inactive"?"waiting":"inactive",v=l==="inactive"?"action.request":"action.deactivate";return u`
              <div key=${a.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${rr(a)}</span>
                  <${bt} state=${l} />
                </div>
                <div class="ov-sub-meta">
                  <span>${k.w(s)} · ${o("stat.rated")}</span>
                  <span>${o("stat.priority",{n:a.priority!==void 0?a.priority:"–"})}</span>
                </div>
                <${st} height=${140} yUnit="W" xUnit="h" timeWindow=${r}
                  yFormat=${k.w}
                  series=${[{points:n[a.id]||[],color:"var(--c-consumption)",label:rr(a)}]} />
                <div class="ov-sub-act">
                  <${Y} small secondary=${c==="inactive"}
                    onClick=${function(){i(a.id,c)}}>${o(v)}<//>
                </div>
              </div>`})}
        </div>
      <//>`}function Ga(e){var t=e.members;return!e.enabled||!t||!t.length?null:u`
      <${R} group="vzev" title=${o("panel.vzev")} tooltip=${o("tooltip.vzev")}>
        <div class="ov-subgrid">
          ${t.map(function(n){var r=(n.net_wh||0)<0,i=n.points||[],a=i.length?[i[0].t,i[i.length-1].t+900]:null;return u`
              <div key=${n.id} class="ov-sub">
                <div class="ov-sub-head">
                  <span class="ov-sub-name">${n.name||n.id}</span>
                  <span class="ov-sub-value" style="color:var(--c-vzev)">
                    ${o(r?"stat.vzev_export":"stat.vzev_import")+" "+k.wh(Math.abs(n.net_wh||0))}
                  </span>
                </div>
                ${n.address?u`<div class="ov-sub-meta"><span>${n.address}</span></div>`:null}
                <${st} height=${140} yUnit="Wh" xUnit="h" timeWindow=${a}
                  yFormat=${k.wh}
                  series=${[{points:i,color:"var(--c-vzev)",label:n.name||n.id}]} />
              </div>`})}
        </div>
      <//>`}function Za(e){return e.hint?u`
      <div class="ov-hint" role="status">
        <svg class="ov-hint-icon" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <rect x="7.25" y="6.8" width="1.5" height="5" rx="0.75" fill="currentColor"/>
          <circle cx="8" cy="4.6" r="1" fill="currentColor"/>
        </svg>
        <span class="ov-hint-text">${o(e.hint.key)}</span>
        <button class="ov-hint-close" aria-label=${o("common.close")}
          onClick=${e.onDismiss}>×</button>
      </div>`:null}var lr={pv:{color:"var(--c-production)",label:"flow.pv"},netz:{color:"var(--c-navy)",label:"flow.netz"},vzev:{color:"var(--c-vzev)",label:"flow.vzev"},bat:{color:"var(--c-battery)",label:"flow.battery"},haus:{color:"var(--c-consumption)",label:"flow.haus"}},Qa={pv:{x:66,y:62},netz:{x:374,y:62},haus:{x:220,y:142},vzev:{x:374,y:142}},Kt={x:66,y:222},Xa={x:374,y:222},Ie=26;function Ja(e){return e.from==="bat"||e.to==="bat"?"var(--c-battery)":e.to==="netz"||e.to==="vzev"?"var(--c-vzev)":e.from==="netz"?"var(--c-import)":e.from==="vzev"?"var(--c-vzev)":"var(--c-production)"}function el(e,t,n,r){var i="translate("+t+" "+n+") scale(1.35)",a={fill:"none",stroke:r,"stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"};return e==="pv"?u`
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
      </g>`:null}function tl(e){var t=e.newest,n=Ia(t,e.vzevW),r=!!e.hasBattery,i=e.vzevW!==null&&e.vzevW!==void 0,a=be({side:"left",want:"left",count:0}),l=t?Oe(t.bat_w):null,s=l!==null&&l<0?"right":"left",c=a.current;s===c.side?(c.want=s,c.count=0):s===c.want?(c.count++,c.count>=2&&(c.side=s,c.count=0)):(c.want=s,c.count=1);var v=c.side;function d(b){return b==="bat"?r:b==="vzev"?i:!0}function h(b){return b==="bat"?v==="right"?Xa:Kt:Qa[b]}var f=n.filter(function(b){return d(b.from)&&d(b.to)}),p=0;f.forEach(function(b){b.state==="ok"&&b.watts>p&&(p=b.watts)});function g(b){return p<=0?2.4:2.4+Math.min(1,b/p)*2.6}var y=Pa(n),$=Oa(n);return u`
      <${R} group="grid" title=${o("flow.title")} tooltip=${o("tooltip.flow")}>
        ${y?u`
          <p class="flow-status">${o(y,{w:k.w($)})}</p>`:null}
        <div class="flow-wrap">
          <svg class="flow-svg" viewBox="0 0 440 284" role="img"
            aria-label=${o("flow.aria")} preserveAspectRatio="xMidYMid meet">
            <g>
              ${f.map(function(b,m){var w=h(b.from),S=h(b.to);if(!w||!S)return null;var z=S.x-w.x,N=S.y-w.y,U=Math.sqrt(z*z+N*N)||1,E=z/U,L=N/U,C=w.x+E*Ie,T=w.y+L*Ie,I=S.x-E*Ie,B=S.y-L*Ie,A=b.state==="unknown",_=b.state==="zero",M=A?"var(--c-line)":Ja(b),W=A?5.5:7.5,D=I-E*(W+1.6),ue=B-L*(W+1.6),se=_?2:g(b.watts),j=((C+I)/2).toFixed(1),Q=((T+B)/2-7).toFixed(1);return u`
                  <g key=${"e"+m} opacity=${_?"0.32":"1"}>
                    <line class="flow-track" x1=${C.toFixed(1)} y1=${T.toFixed(1)}
                      x2=${D.toFixed(1)} y2=${ue.toFixed(1)}
                      stroke=${M} stroke-width=${se.toFixed(1)} stroke-linecap="round" />
                    ${b.state==="ok"?u`
                      <line class="flow-particles" x1=${C.toFixed(1)} y1=${T.toFixed(1)}
                        x2=${D.toFixed(1)} y2=${ue.toFixed(1)} stroke=${M} stroke-linecap="round" />`:A?u`
                      <line class="flow-edge-unknown" x1=${C.toFixed(1)} y1=${T.toFixed(1)}
                        x2=${D.toFixed(1)} y2=${ue.toFixed(1)} stroke=${M} stroke-width="1.6"
                        stroke-linecap="round" />`:null}
                    ${nl(I,B,E,L,M,W,_?.5:1)}
                    ${A?u`
                      <text x=${j} y=${Q} text-anchor="middle"
                        class="flow-label-txt flow-label-nodata">–</text>`:_?null:u`
                      <text x=${j} y=${Q} text-anchor="middle"
                        class="flow-label-txt">${k.w(b.watts)}</text>`}
                  </g>`})}
              ${Object.keys(lr).filter(d).map(function(b){var m=lr[b],w=h(b),S=b==="bat",z=S?Kt.x:w.x;return u`
                  <g key=${"n"+b} class=${S?"flow-node-move":null}
                    style=${S?"transform: translate("+(w.x-Kt.x)+"px, 0)":null}>
                    <circle cx=${z} cy=${w.y} r=${Ie} fill=${m.color} opacity="0.12" />
                    <circle cx=${z} cy=${w.y} r=${Ie} fill="none"
                      stroke=${m.color} stroke-width="2.4" />
                    ${el(b,z,w.y,m.color)}
                    <text x=${z} y=${w.y+Ie+16} text-anchor="middle"
                      class="flow-node-txt">${o(m.label)}</text>
                  </g>`})}
            </g>
          </svg>
        </div>
        ${i?u`<p class="flow-note">${o("flow.vzev_mean_note")}</p>`:null}
        <${rl} sample=${t} vzevW=${e.vzevW} records=${e.records} />
      <//>`}function nl(e,t,n,r,i,a,l){var s=a,c=e-n*s,v=t-r*s,d=-r,h=n,f=s*.6,p=e.toFixed(1)+","+t.toFixed(1)+" "+(c+d*f).toFixed(1)+","+(v+h*f).toFixed(1)+" "+(c-d*f).toFixed(1)+","+(v-h*f).toFixed(1);return u`<polygon points=${p} fill=${i} opacity=${l===void 0?1:l} />`}function or(e){var t=(e.segments||[]).filter(function(i){return i.value>0}),n=t.reduce(function(i,a){return i+a.value},0),r=e.unknown||n<=0;return u`
      <div class="comp-row">
        <div class="comp-row-head">
          <span class="comp-row-title">${e.title}</span>
          ${e.note?u`<${ce} text=${e.note} />`:null}
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
      </div>`}function rl(e){var t=x("now"),n=t[0],r=t[1],i=n==="now"?Aa(e.sample,e.vzevW):Wa(e.records),a=n==="now"?k.w:k.wh,l=n==="today"?o("flow.comp_batt_note"):null;return u`
      <div class="comp-wrap">
        <div class="seg-toggle comp-toggle">
          <button class=${"seg-btn"+(n==="now"?" seg-btn-active":"")}
            onClick=${function(){r("now")}}>${o("flow.comp_now")}</button>
          <button class=${"seg-btn"+(n==="today"?" seg-btn-active":"")}
            onClick=${function(){r("today")}}>${o("flow.comp_today")}</button>
        </div>
        <${or} title=${o("flow.comp_cover")} segments=${i.cover}
          unknown=${i.unknown} fmt=${a} />
        <${or} title=${o("flow.comp_usage")} segments=${i.usage}
          unknown=${i.unknown} fmt=${a} note=${l} />
      </div>`}function ci(e){var t=e.ratio,n=t!=null&&!isNaN(t),r=n?Math.round(t*100):null,i=2*Math.PI*26,a=n?Math.max(0,Math.min(1,t))*i:0;return u`
      <svg class=${"kpi-gauge"+(e.big?" kpi-gauge-lg":"")} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--c-line)" stroke-width="7" />
        ${n?u`
          <circle cx="32" cy="32" r="26" fill="none" stroke=${e.color} stroke-width="7"
            stroke-linecap="round" stroke-dasharray=${a.toFixed(1)+" "+i.toFixed(1)}
            transform="rotate(-90 32 32)" />`:null}
        <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
          class="kpi-gauge-txt">${n?r+" %":"–"}</text>
      </svg>`}function il(e){var t=e.kpis;if(!t)return null;var n=t.incomplete?o("kpi.incomplete"):null;function r(d){return d==null?"–":Math.round(d*100)+" %"}var i=t.savingParts,a=i?[o("kpi.saving_selfuse")+": "+k.chf(i.selfuse,!0),o("kpi.saving_feedin")+": "+k.chf(i.feedin,!0),i.vzev!==null&&i.vzev!==void 0?o("kpi.saving_vzev")+": "+k.chf(i.vzev,!0):null].filter(Boolean).join(`
`):o("tooltip.kpi_saving"),l=t.autarkyVzev!==null&&t.autarkyVzev!==void 0?o("kpi.autarky_vzev")+": "+r(t.autarkyVzev):null,s=!!e.showSaving,c=s?u`
        <div class="kpi-hero">
          <div class="kpi-hero-num">${t.savingChf===null?"–":k.chf(t.savingChf,!1)}</div>
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${o("kpi.saving")}<${ce} text=${n||a} /></span>
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`:u`
        <div class="kpi-hero">
          <${ci} big ratio=${t.autarky} color="var(--c-vzev)" />
          <div class="kpi-hero-meta">
            <span class="kpi-hero-label">${o("kpi.autarky")}<${ce} text=${n||o("tooltip.kpi_autarky")} /></span>
            ${l?u`<span class="kpi-sub">${l}</span>`:null}
            <span class="kpi-hero-period">${e.period}</span>
          </div>
        </div>`,v=[];return s&&v.push(u`<${qt} key="au" gauge ratio=${t.autarky} color="var(--c-vzev)"
        label=${o("kpi.autarky")} tip=${n||o("tooltip.kpi_autarky")} sub=${l} />`),v.push(u`<${qt} key="su" gauge ratio=${t.selfuse} color="var(--c-production)"
      label=${o("kpi.selfuse")} tip=${n||o("tooltip.kpi_selfuse")} />`),e.showCo2&&v.push(u`<${qt} key="co" value=${ll(t.co2Kg)} color="var(--c-production)"
        label=${o("kpi.co2")} tip=${n||o("tooltip.kpi_co2",{g:e.co2Factor})} />`),u`
      <div class="kpi-band">
        ${c}
        <div class="kpi-support">${v}</div>
      </div>`}function qt(e){return u`
      <div class="kpi-tile">
        ${e.gauge?u`<${ci} ratio=${e.ratio} color=${e.color} />`:u`<div class="kpi-num" style=${e.color?"color:"+e.color:null}>${e.value}</div>`}
        <div class="kpi-body">
          <span class="kpi-label">${e.label}<${ce} text=${e.tip} /></span>
          ${e.sub?u`<span class="kpi-sub">${e.sub}</span>`:null}
        </div>
      </div>`}function al(){return u`
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
      </div>`}function ll(e){return e==null||isNaN(e)?"–":e>=1e3?k.num(e/1e3,2)+" t":k.num(e,e<10?2:1)+" kg"}function ol(){var e=x(null),t=e[0],n=e[1],r=x(null),i=r[0],a=r[1],l=x([]),s=l[0],c=l[1],v=x([]),d=v[0],h=v[1],f=x([]),p=f[0],g=f[1],y=x(!1),$=y[0],b=y[1],m=x(null),w=m[0],S=m[1],z=x(null),N=z[0],U=z[1],E=x(function(){return Math.floor(Date.now()/1e3)}),L=E[0],C=E[1],T=x(null),I=T[0],B=T[1],A=x({}),_=A[0],M=A[1],W=x(!1),D=W[0],ue=W[1],se=be({}),j=be({}),Q=L,he=Q-nr,ve=[he,Q];J(function(){F.getSite().then(function(K){n(K)}).catch(function(){}),F.getMeta().then(function(K){U(K)}).catch(function(){})},[]),J(function(){return F.poll(function(){F.getEnergy("15m",96).then(function(K){Array.isArray(K)&&S(K)}).catch(function(){})},6e4)},[]),J(function(){if(F.getVzevMembers)return F.poll(function(){F.getVzevMembers().then(function(K){Array.isArray(K)&&g(K)}).catch(function(){})},1e4)},[]),J(function(){var K=F.onVzevInfo(function(Te){b(!!(Te&&Te.enabled))});return F.getVzevInfo().catch(function(){}),K},[]),J(function(){return F.poll(function(){var K=Math.floor(Date.now()/1e3);C(K);var Te=K-nr;Promise.all([F.getPower().catch(function(){return null}),F.getLoads().catch(function(){return null}),F.getProductions().catch(function(){return null})]).then(function(We){var Ut=We[0],Ye=We[1],Ge=We[2];Ut&&a(Ut),Ye&&c(Ye),Ge&&h(Ge),(Ut||Ye||Ge)&&B(K),ue(!0),Ge&&Ge.forEach(function(Re){ar(se.current,Re.id,K,It(Re),Te)}),Ye&&Ye.forEach(function(Re){var Pi=Sn(Re.state)==="active"?It(Re):0;ar(j.current,Re.id,K,Pi,Te)})})},1e4)},[]);var P=ja(i),V=ui(i,he,Q),G=La(p),ne=Ha(P,s),Fe=ne&&!_[ne.key]?ne:null,O=!!(d&&d.length&&Ra(V.pv.map(function(K){return K.y}))&&!_["flow.prod_nodata"]);function ee(){var K=Object.assign({},_);K["flow.prod_nodata"]=!0,M(K)}var ae=new Date;ae.setHours(0,0,0,0);var oe=Math.floor(ae.getTime()/1e3),Ae=(w||[]).filter(function(K){return K.ts>=oe}),ct=!!(p&&p.length),we=N&&N.tariffs||{},qe=we.co2_g_kwh===void 0||we.co2_g_kwh===null||we.co2_g_kwh===""?128:Number(we.co2_g_kwh),Rt=un(Ae,{tariffs:we,vzev:ct,co2:qe}),Dt=Number(we.grid_import_chf_kwh)>0||Number(we.grid_feedin_chf_kwh)>0,ft=qe>0,Ci=Ae.some(function(K){return K.partial}),Si=Ci?o("kpi.today_until",{time:k.time(L,"hm")}):o("kpi.today"),Mi=(d||[]).some(function(K){return String(K.productionType||"").toUpperCase()==="BATTERY"}),Ni=t&&t.location?t.location:null,Ti=I?u`
      <span class="ov-updated">${o("common.stale",{time:k.time(I,"hm")})}</span>`:null;function Ei(K,Te){F.setLoadState(K,Te).then(function(){return F.getLoads()}).then(function(We){We&&c(We)}).catch(function(){le(o("error.toggle"),{type:"error"})})}function Ii(){if(ne){var K=Object.assign({},_);K[ne.key]=!0,M(K)}}return u`
      <div>
        <${Ne} title=${t&&t.name?t.name:o("page.overview")}
          subtitle=${Ni} actions=${Ti} />
        ${D?u`
          <${ot}>
            <${Za} hint=${Fe} onDismiss=${Ii} />
            <${tl} newest=${P} vzevW=${G} hasBattery=${Mi} records=${Ae} />
            <${il} kpis=${Rt} period=${Si} showSaving=${Dt}
              showCo2=${ft} co2Factor=${qe} />
            <${Ka} newest=${P} win=${ve} vzevW=${G} power=${i} />
            <${qa} productions=${d} history=${se.current} win=${ve}
              notice=${O} onDismissNotice=${ee} />
            <${Ya} loads=${s} history=${j.current} win=${ve} onToggle=${Ei} />
            <${Ga} members=${p} win=${ve} enabled=${$} />
          <//>`:u`<${al} />`}
      </div>`}var sl="\uFEFF",fi=";",sr=`\r
`;function ul(e){if(e==null)return"";var t=String(e);return t.indexOf(fi)>=0||t.indexOf('"')>=0||t.indexOf(`
`)>=0||t.indexOf("\r")>=0?'"'+t.replace(/"/g,'""')+'"':t}function ur(e){return(e||[]).map(ul).join(fi)}function vi(e,t){var n=[ur(e)];return(t||[]).forEach(function(r){n.push(ur(r))}),sl+n.join(sr)+sr}function cl(e,t){var n=new Date;function r(a){return(a<10?"0":"")+a}var i=n.getFullYear()+r(n.getMonth()+1)+r(n.getDate());return"gplug-verlauf-"+e+"-"+i+".csv"}var fl=[10,25,50],me={"15m":{label:"history.res.15m",base:"15m",count:240,target:"15m",tk:"15m",slot:900},"1h":{label:"history.res.hour",base:"15m",count:240,target:"1h",tk:"15m",slot:3600},"1d":{label:"history.res.day",base:"1d",count:125,target:"1d",tk:"1d",slot:86400},"1w":{label:"history.res.week",base:"1d",count:125,target:"1w",tk:"1d",slot:604800},"1mo":{label:"history.res.month",base:"1mo",count:19,target:"1mo",tk:"1mo",slot:2592e3},"1q":{label:"history.res.quarter",base:"1mo",count:19,target:"1q",tk:"q",slot:7776e3}},vl=["15m","1h","1d","1w","1mo","1q"],dl={"15m":32,"1h":24,"1d":31,"1w":13,"1mo":13,"1q":9},ze={res:"15m",pageSize:25,chfMode:!1,chartMode:"net"};function pl(e){return e==null?null:e/1e3}function hl(e,t){var n;return t==="1mo"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-1,1)/1e3)):t==="1q"?(n=new Date(e*1e3),Math.floor(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()-3,1)/1e3)):e-me[t].slot}function gl(e,t){if(!e.length)return[];var n=dl[t]||e.length,r={};e.forEach(function(c){r[c.ts]=c});for(var i=e[e.length-1].ts,a=[],l=e[0].ts,s=0;s<n&&l>=i;s++)a.push(r[l]||{ts:l,__blank:!0}),l=hl(l,t);return a}function Yt(e,t){var n=pl(e);return n===null?"–":k.num(n,2)}function ml(e){if(e==null)return u`<span>–</span>`;var t=e>0?"val-pos":e<0?"val-neg":"";return u`<span class=${t}>${k.chf(e,!0)}</span>`}function Xe(e,t){return e==null?u`<span>–</span>`:u`<span class=${t||""}>${k.chf(e,!1)}</span>`}function $l(e,t,n){var r=[{key:"ts",label:o("history.col.time")},{key:"imp",label:o("history.col.gridimport"),unit:"[kWh]",align:"right"}];return n?(r.push({key:"impcost_ht",label:o("history.col.gridcost_ht"),unit:"[CHF]",align:"right"}),r.push({key:"impcost_nt",label:o("history.col.gridcost_nt"),unit:"[CHF]",align:"right"})):r.push({key:"impcost",label:o("history.col.gridcost"),unit:"[CHF]",align:"right"}),e&&t&&r.push({key:"exp",label:o("history.col.feedin"),unit:"[kWh]",align:"right"}),r.push({key:"vzev",label:o(e?"history.col.vzevexport":"history.col.vzevimport"),unit:"[kWh]",align:"right"}),r.push({key:"saldo",label:o("history.col.vzevsaldo"),unit:"[CHF]",align:"right"}),e&&(r.push({key:"saving",label:o("history.col.selfuse"),unit:"[CHF]",align:"right"}),r.push({key:"autarky",label:o("history.col.autarky"),unit:"[%]",align:"right"}),r.push({key:"selfuserate",label:o("history.col.selfuserate"),unit:"[%]",align:"right"}),r.push({key:"ersparnis",label:o("history.col.ersparnis"),unit:"[CHF]",align:"right"})),r}function cr(e){return e==null?"–":k.num(e*100,0)+" %"}function Mn(e){var t=e.revenue_vzev_chf,n=e.cost_vzev_chf;return t===null&&n===null?null:(t||0)-(n||0)}function _l(e,t,n){for(var r=me[t].slot,i=[],a=0;a<e.length;a++){i.push({kind:"row",rec:e[a]});var l=e[a+1];if(l){var s=Math.round((e[a].ts-l.ts)/r)-1;s>=1&&i.push({kind:"gap",key:"g"+e[a].ts})}}return!n&&e.length&&i.push({kind:"boundary",key:"b"+e[e.length-1].ts}),i}function yl(){var e=x(ze.res),t=e[0],n=e[1],r=x(0),i=r[0],a=r[1],l=x(ze.pageSize),s=l[0],c=l[1],v=x(ze.chfMode),d=v[0],h=v[1],f=x(ze.chartMode),p=f[0],g=f[1],y=x({records:null,tariffs:{},producer:!1,base15m:null,err:!1}),$=y[0],b=y[1],m=x(!0),w=m[0],S=m[1];ze.res=t,ze.pageSize=s,ze.chfMode=d,ze.chartMode=p,J(function(){var O=!1;S(!0);var ee=me[t];return Promise.all([F.getEnergy(ee.base,ee.count).catch(function(){return null}),F.getMeta().catch(function(){return null}),F.getProductions().catch(function(){return null}),ee.base==="15m"?Promise.resolve(null):F.getEnergy("15m",240).catch(function(){return null})]).then(function(ae){if(!O){var oe=ae[0],Ae=ae[1],ct=ae[2],we=ae[3];if(oe===null){b({records:null,tariffs:{},producer:!1,base15m:null,err:!0}),S(!1);return}var qe=Ae&&Ae.tariffs||{},Rt=Array.isArray(ct)&&ct.some(function(ft){return ft&&ft.productionType==="PHOTOVOLTAIC"}),Dt=ee.base==="15m"?oe:we||null;b({records:oe,tariffs:qe,producer:Rt,base15m:Dt,err:!1}),S(!1)}}),function(){O=!0}},[t]);var z=Wt($.tariffs)&&me[t].base==="15m",N=Pe(function(){if(!$.records)return[];var O=$.records;z&&(O=$.records.map(function(ae){return Xr(ae,$.tariffs)}));var ee=qn(O,me[t].base,me[t].target,$.tariffs);return ee.slice().sort(function(ae,oe){return oe.ts-ae.ts})},[$.records,$.tariffs,t,z]),U=Pe(function(){if(t!=="15m"||!$.base15m)return{};var O=qn($.base15m,"15m","15m",$.tariffs),ee=ga(O,3),ae={};return ee.forEach(function(oe){ae[O[oe].ts]=!0}),ae},[$.base15m,$.tariffs,t]),E=N.some(function(O){return(O.exp_wh||0)>0}),L=$l($.producer,E,z),C=N.some(function(O){return(O.vzev_in_wh||0)>0||(O.vzev_out_wh||0)>0}),T=$.tariffs.co2_g_kwh===void 0||$.tariffs.co2_g_kwh===null||$.tariffs.co2_g_kwh===""?128:Number($.tariffs.co2_g_kwh),I={tariffs:$.tariffs,vzev:C,co2:T},B=Number($.tariffs.grid_import_chf_kwh)>0||Number($.tariffs.grid_feedin_chf_kwh)>0,A=Pe(function(){var O={};return N.forEach(function(ee){O[ee.ts]=un([ee],I)}),O},[N,$.tariffs,C,T]),_=Pe(function(){return un(N,I)},[N,$.tariffs,C,T]),M=$.records?$.records.length<me[t].count:!0,W=_l(N,t,M),D=N.length;W.filter(function(O){return O.kind==="row"});var ue=Math.max(1,Math.ceil(D/s)),se=Math.min(i,ue-1),j=se*s,Q=Math.min(j+s,D),he=bl(W,j,Q);function ve(O){n(O),a(0)}function P(O){c(+O),a(0)}function V(){var O=L.map(function(oe){return oe.label+(oe.unit?" "+oe.unit:"")}),ee=N.map(function(oe){return xl(oe,L,t,$.producer,A[oe.ts])}),ae=vi(O,ee);Tl(cl(t),ae)}var G=Pe(function(){return Cl(gl(N,t),p,d,$.producer)},[N,p,d,$.producer,t]),ne=Pe(function(){return Sl(N,t,$.producer)},[N,t,$.producer]),Fe=u`
      <div class="verlauf-actions">
        <${At} label=${o("history.resolution")} value=${t}
          onChange=${ve}
          options=${vl.map(function(O){return{value:O,label:o(me[O].label)}})} />
        <${Y} secondary onClick=${V} disabled=${D===0}>
          ${o("history.export")}<//>
      </div>`;return u`
      <div>
        <${Ne} title=${o("page.history")} subtitle=${o("history.subtitle")}
          actions=${Fe} />

        ${$.err?u`
          <${R}><p class="placeholder-text">${o("common.nodata")}</p><//>`:null}

        ${!$.err&&w?u`
          <${R}><p class="placeholder-text">${o("common.loading")}</p><//>`:null}

        ${!$.err&&!w?u`
          <div>
            ${N.length?u`<${Nl} summary=${ne} kpis=${_} showSaving=${B} />`:null}

            <${R} group="vzev" title=${o("history.chart.title")}>
              <div class="chart-toolbar">
                <div class="seg-toggle" role="tablist" aria-label=${o("history.chart.mode")}>
                  ${[["net","history.chart.mode_net"],["bilanz","history.chart.mode_bilanz"]].map(function(O){return u`<button key=${O[0]} type="button" role="tab"
                      class=${"seg-btn"+(p===O[0]?" seg-btn-active":"")}
                      aria-selected=${p===O[0]}
                      onClick=${function(){g(O[0])}}>${o(O[1])}</button>`})}
                </div>
                ${p==="net"?u`
                  <label class="chf-toggle">
                    <input type="checkbox" checked=${d}
                      onChange=${function(O){h(O.target.checked)}} />
                    <span>${o("history.chart.onlychf")}</span>
                  </label>`:null}
              </div>
              ${G.points.length?u`
                <${_n} height=${220}
                  yUnit=${G.yUnit} xUnit=${o("history.chart.xunit")}
                  yFormat=${G.yFormat}
                  xTickFormat=${function(O){return zl(t,O)}}
                  points=${G.points} />
                <div class="chart-legend">
                  ${G.legend.map(function(O,ee){return u`<span key=${ee} class="legend-item"><span class="legend-swatch" style=${"background:"+O.color}></span>${O.label}</span>`})}
                </div>`:u`<p class="placeholder-text">${o("common.nodata")}</p>`}
            <//>

            <${R} title=${o("history.table.title")}>
              <div class="table-wrap">
                <table class="table verlauf-table">
                  <thead>
                    <tr>
                      ${L.map(function(O){return u`<th key=${O.key} class=${O.align==="right"?"ta-r":""}>
                          ${O.label}${O.unit?u`<span class="th-unit"> ${O.unit}</span>`:null}
                        </th>`})}
                    </tr>
                  </thead>
                  <tbody>
                    ${D===0?u`
                      <tr><td class="table-empty" colspan=${L.length}>${o("common.nodata")}</td></tr>`:he.map(function(O){return wl(O,L,t,U,$.producer,A)})}
                  </tbody>
                </table>

                <div class="table-footer">
                  <label class="table-pagesize">
                    <span>${o("table.perpage")}</span>
                    <span class="select-wrap select-wrap-small">
                      <select class="select select-small" value=${s}
                        onChange=${function(O){P(O.target.value)}}>
                        ${fl.map(function(O){return u`<option key=${O} value=${O}>${O}</option>`})}
                      </select>
                      <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </span>
                  </label>
                  <span class="table-pageinfo">
                    ${o("table.pageinfo",{from:D===0?0:j+1,to:Q,total:D})}
                  </span>
                  <span class="table-nav">
                    <button class="table-navbtn" aria-label=${o("table.prev")}
                      disabled=${se===0} onClick=${function(){a(se-1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M6.5 1 1.5 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                    <button class="table-navbtn" aria-label=${o("table.next")}
                      disabled=${se>=ue-1} onClick=${function(){a(se+1)}}>
                      <svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    </button>
                  </span>
                </div>
              </div>
              <p class="table-note">${o("history.tariff_note")}</p>
            <//>
          </div>`:null}
      </div>`}function bl(e,t,n){for(var r=[],i=-1,a=0;a<e.length;a++){var l=e[a];if(l.kind==="row"){if(i++,i>=n)break;i>=t&&r.push(l)}else i>=t&&i<n&&r.push(l)}return r}function wl(e,t,n,r,i,a){if(e.kind==="boundary")return u`<tr key=${e.key} class="verlauf-boundary">
        <td colspan=${t.length}>${o("history.boundary_finer_end")}</td></tr>`;if(e.kind==="gap")return u`<tr key=${e.key} class="verlauf-gap">
        <td colspan=${t.length}>${o("history.gap")}</td></tr>`;var l=e.rec,s=!!r[l.ts],c=a&&a[l.ts]||null;return u`
      <tr key=${"r"+l.ts}>
        ${t.map(function(v){return u`<td key=${v.key} class=${v.align==="right"?"ta-r":""}>
            ${kl(v.key,l,n,s,i,c)}
          </td>`})}
      </tr>`}function kl(e,t,n,r,i,a){switch(e){case"ts":return u`<span class="verlauf-ts">
          ${k.time(t.ts,me[n].tk)}
          ${r?u`<span class="peak-mark" title=${o("tooltip.peakload")}><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M1 9.5H4.3L6 3l1.7 6.5H11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`:null}
          ${t.partial?u`<${ce} text=${o("history.partial")} />`:null}
        </span>`;case"imp":return Yt(t.imp_wh);case"impcost":return Xe(t.cost_import_chf,"val-neg");case"impcost_ht":return Xe(t.cost_import_ht_chf,"val-neg");case"impcost_nt":return Xe(t.cost_import_nt_chf,"val-neg");case"exp":return Yt(t.exp_wh);case"vzev":return Yt(Nn(t,i));case"saldo":return ml(Mn(t));case"saving":return Xe(t.saving_selfuse_chf,t.saving_selfuse_chf>0?"val-pos":"");case"autarky":return cr(a&&a.autarky);case"selfuserate":return cr(a&&a.selfuse);case"ersparnis":return Xe(a&&a.savingChf,a&&a.savingChf>0?"val-pos":"");default:return""}}function Nn(e,t){return t?e.vzev_out_wh:e.vzev_in_wh}function xl(e,t,n,r,i){return t.map(function(a){switch(a.key){case"ts":return k.time(e.ts,me[n].tk);case"imp":return Gt(e.imp_wh);case"impcost":return Ue(e.cost_import_chf);case"impcost_ht":return Ue(e.cost_import_ht_chf);case"impcost_nt":return Ue(e.cost_import_nt_chf);case"exp":return Gt(e.exp_wh);case"vzev":return Gt(Nn(e,r));case"saldo":return Ue(Mn(e));case"saving":return Ue(e.saving_selfuse_chf);case"autarky":return fr(i&&i.autarky);case"selfuserate":return fr(i&&i.selfuse);case"ersparnis":return Ue(i&&i.savingChf);default:return""}})}function fr(e){return e==null?"":(e*100).toFixed(0)}function Gt(e){return e==null?"":(e/1e3).toFixed(2)}function Ue(e){return e==null?"":Number(e).toFixed(2)}function zl(e,t){switch(e){case"15m":case"1h":return k.time(t,"hm");case"1d":case"1w":return k.time(t,"dm");case"1mo":return k.time(t,"1mo");case"1q":return k.time(t,"q");default:return k.time(t,me[e].tk)}}function Cl(e,t,n,r){var i=e.slice().sort(function(f,p){return f.ts-p.ts}),a=function(f){return k.num(f,2)},l=function(f){return f==null?0:f/1e3};if(t==="bilanz"){var s="var(--c-production)",c="var(--c-vzev)",v="var(--c-import)",d=i.map(function(f){if(f.__blank)return{t:f.ts,y:null};var p=Da([{pv_wh:f.pv_wh||0,exp_wh:f.exp_wh||0,imp_wh:f.imp_wh||0}]);return{t:f.ts,bars:[{segments:[{value:l(p.prodSelf),color:s,label:o("history.bilanz.selfuse")},{value:l(p.prodFeedin),color:c,label:o("history.bilanz.feedin")}]},{segments:[{value:l(p.consSelf),color:s,label:o("history.bilanz.covered")},{value:l(p.consImport),color:v,label:o("history.bilanz.import")}]}]}});return{points:d,yUnit:"kWh",yFormat:a,legend:[{color:s,label:o("history.bilanz.selfuse")},{color:c,label:o("history.bilanz.feedin")},{color:v,label:o("history.bilanz.import")}]}}var h;return n?h=i.map(function(f){if(f.__blank)return{t:f.ts,y:null};var p=Mn(f);return{t:f.ts,y:p===null?null:p,color:(p||0)<0?"var(--c-import)":"var(--c-vzev)"}}):h=i.map(function(f){if(f.__blank)return{t:f.ts,y:null};var p=f.imp_wh===null||f.imp_wh===void 0?null:f.imp_wh/1e3;if(p&&p>0)return{t:f.ts,y:p,color:"var(--c-import)"};var g=Nn(f,r),y=g==null?null:g/1e3;return y&&y>0?{t:f.ts,y:-y,color:"var(--c-vzev)"}:{t:f.ts,y:p===null?null:0,color:"var(--c-import)"}}),{points:h,yUnit:n?"CHF":"kWh",yFormat:n?function(f){return k.chf(f,!0)}:a,legend:[{color:"var(--c-import)",label:o("history.chart.legend_import")},{color:"var(--c-vzev)",label:o(n?"history.chart.legend_saldo":"history.chart.legend_export")}]}}function Sl(e,t,n){var r=t==="1d"&&e.length>=8,i=t==="1mo"&&e.length>=8;if(!r&&!i)return null;var a=e.slice().sort(function(d,h){return d.ts-h.ts}),l=function(d){return a.map(function(h){return h[d]===null||h[d]===void 0?null:h[d]/1e3})},s=i&&e.length>=13,c=function(d,h){var f=l(h);return{name:d,avg:an(f),trend:pa(f),yoy:s?ha(f):null}},v=[c(o("history.col.gridimport"),"imp_wh")];return n&&v.push(c(o("history.summary.pv"),"pv_wh")),{periodLabel:o(r?"history.summary.avg_day":"history.summary.avg_month"),unit:"kWh",metrics:v}}function Ml(e,t){var n=t.dir==="up"?"▲":t.dir==="down"?"▼":"▬",r=t.dir==="up"?"trend-up":t.dir==="down"?"trend-down":"";return u`
      <div class="summary-cell">
        <span class="summary-label">${o("history.summary.trend")} · ${e}</span>
        <span class=${"summary-value "+r}>
          ${n} ${t.pct===null?"–":k.num(Math.abs(t.pct),0)+" %"}
        </span>
      </div>`}function Nl(e){var t=e.summary,n=e.kpis;function r(i){return i==null?"–":k.num(i*100,0)+" %"}return u`
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
              <span class="summary-value val-pos">${n.incomplete||n.savingChf===null?"–":k.chf(n.savingChf,!1)}</span>
            </div>`:null}`:null}

        ${t?t.metrics.map(function(i,a){return u`
            <div key=${"a"+a} class="summary-cell">
              <span class="summary-label">${i.name} · ${t.periodLabel}</span>
              <span class="summary-value">${i.avg===null?"–":k.num(i.avg,2)+" "+t.unit}</span>
            </div>
            ${Ml(i.name,i.trend)}
            ${i.yoy!==null&&i.yoy!==void 0?u`
              <div key=${"y"+a} class="summary-cell">
                <span class="summary-label">${o("history.summary.yoy")} · ${i.name}</span>
                <span class=${"summary-value "+(i.yoy>0?"trend-up":i.yoy<0?"trend-down":"")}>
                  ${(i.yoy>0?"+":"")+k.num(i.yoy,0)} %
                </span>
              </div>`:null}`}):null}
      </div>`}function Tl(e,t){var n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){URL.revokeObjectURL(r)},0)}function El(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}const Il=[{keys:["pi","pin","powerin","170"],group:"power",dir:"in",i18nKey:"meter.f.power_import",unit:"W",kind:"live",precision:0},{keys:["po","pout","powerout","270"],group:"power",dir:"out",i18nKey:"meter.f.power_export",unit:"W",kind:"live",precision:0},{keys:["p","power","psum","1670"],group:"power",i18nKey:"meter.f.power_net",unit:"W",kind:"live",precision:0},{keys:["rpi","qi","reactivepowerin","370"],group:"power",dir:"in",i18nKey:"meter.f.reactive_import",unit:"var",kind:"live",precision:0},{keys:["rpo","qo","reactivepowerout","470"],group:"power",dir:"out",i18nKey:"meter.f.reactive_export",unit:"var",kind:"live",precision:0},{keys:["u1","ul1","v1","vl1","voltl1","voltagel1","spannungl1","3270"],group:"phases",role:"voltage",phase:1,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u2","ul2","v2","vl2","voltl2","voltagel2","spannungl2","5270"],group:"phases",role:"voltage",phase:2,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["u3","ul3","v3","vl3","voltl3","voltagel3","spannungl3","7270"],group:"phases",role:"voltage",phase:3,i18nKey:"meter.f.voltage",unit:"V",kind:"live",precision:1},{keys:["i1","il1","currl1","currentl1","stroml1","3170"],group:"phases",role:"current",phase:1,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i2","il2","currl2","currentl2","stroml2","5170"],group:"phases",role:"current",phase:2,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["i3","il3","currl3","currentl3","stroml3","7170"],group:"phases",role:"current",phase:3,i18nKey:"meter.f.current",unit:"A",kind:"live",precision:2},{keys:["p1","pl1","powerl1","2170"],group:"phases",role:"power",phase:1,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p2","pl2","powerl2","4170"],group:"phases",role:"power",phase:2,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p3","pl3","powerl3","6170"],group:"phases",role:"power",phase:3,i18nKey:"meter.f.power_phase",unit:"W",kind:"live",precision:0},{keys:["p1i","p1in","pl1i"],group:"phases",role:"power",phase:1,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p1o","p1out","pl1o"],group:"phases",role:"power",phase:1,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p2i","p2in","pl2i"],group:"phases",role:"power",phase:2,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p2o","p2out","pl2o"],group:"phases",role:"power",phase:2,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["p3i","p3in","pl3i"],group:"phases",role:"power",phase:3,dir:"in",i18nKey:"meter.f.power_phase_in",unit:"W",kind:"live",precision:0},{keys:["p3o","p3out","pl3o"],group:"phases",role:"power",phase:3,dir:"out",i18nKey:"meter.f.power_phase_out",unit:"W",kind:"live",precision:0},{keys:["pf1","cosphi1","powerfactorl1"],group:"phases",role:"pf",phase:1,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf2","cosphi2","powerfactorl2"],group:"phases",role:"pf",phase:2,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["pf3","cosphi3","powerfactorl3"],group:"phases",role:"pf",phase:3,i18nKey:"meter.f.power_factor",unit:"",kind:"live",precision:2},{keys:["q1","ql1","blindleistungl1","2370"],group:"phases",role:"reactive",phase:1,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q2","ql2","blindleistungl2","4370"],group:"phases",role:"reactive",phase:2,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["q3","ql3","blindleistungl3","6370"],group:"phases",role:"reactive",phase:3,i18nKey:"meter.f.reactive_phase",unit:"var",kind:"live",precision:0},{keys:["ein","ei","eimport","energyimport","bezug","180"],group:"energy",i18nKey:"meter.f.energy_import",unit:"kWh",kind:"register",precision:3},{keys:["eout","eo","eexport","energyexport","einspeisung","280"],group:"energy",i18nKey:"meter.f.energy_export",unit:"kWh",kind:"register",precision:3},{keys:["erin","rei","reactiveimport","380"],group:"reactive",i18nKey:"meter.f.reactive_energy_import",unit:"kvarh",kind:"register",precision:3},{keys:["erout","reo","reactiveexport","480"],group:"reactive",i18nKey:"meter.f.reactive_energy_export",unit:"kvarh",kind:"register",precision:3},{keys:["tariff","tarif","activetariff","96140"],group:"tariff",i18nKey:"meter.f.tariff",unit:"",kind:"meta"},{keys:["meterid","smid","deviceid","serial","seriennummer","id"],group:"meta",i18nKey:"meter.f.meter_id",unit:"",kind:"meta"}],Pl=(function(){const e={};return Il.forEach(function(t){const n={group:t.group,i18nKey:t.i18nKey,unit:t.unit,kind:t.kind};t.precision!==void 0&&(n.precision=t.precision),t.phase!==void 0&&(n.phase=t.phase),t.role!==void 0&&(n.role=t.role),t.dir!==void 0&&(n.dir=t.dir),t.keys.forEach(function(r){e[r]===void 0&&(e[r]=n)})}),e})();function Ol(e){const t=Pl[El(e)];return t===void 0?null:t}function Ll(e){const t=(e||[]).filter(function(n){return typeof n=="number"&&!isNaN(n)});return t.length<2?null:Math.max.apply(null,t)-Math.min.apply(null,t)}function di(e,t){const n=typeof e=="number"&&!isNaN(e)?e:null,r=typeof t=="number"&&!isNaN(t)?t:null;return n===null&&r===null?null:(n||0)-(r||0)}function Fl(e,t){if(typeof e!="number"||isNaN(e)||!isFinite(e)||typeof t!="number"||isNaN(t)||!isFinite(t))return 1;const n=Math.abs(e),r=Math.abs(t);if(n<1e-6||r<5)return 1;const i=r/n;return i>100&&i<1e4?1e3:1}function Al(e,t){if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t))return null;const n=Math.sqrt(e*e+t*t);return n<1e-9?null:Math.min(1,Math.abs(e)/n)}function Wl(e,t){if(!e||e.length<6)return!1;const r=e.slice(-6);for(let a=0;a<r.length;a++)if(typeof r[a].reg!="number"||isNaN(r[a].reg))return!1;if(!r[r.length-1].importing)return!1;const i=r[0].reg;return r.every(function(a){return a.reg===i})}function Rl(e,t){return typeof t!="number"||isNaN(t)||t===0?e||null:e?{min:Math.min(e.min,t),max:Math.max(e.max,t)}:{min:t,max:t}}function vr(e,t){return typeof t!="number"||isNaN(t)?e||0:Math.max(e||0,t)}var Dl=1e4,Ul=90;function cn(e){return typeof e=="number"&&!isNaN(e)?e:typeof e=="string"&&e.trim()!==""&&!isNaN(Number(e))?Number(e):null}function dr(e){return Object.keys(e||{}).map(function(t){return{name:t,raw:e[t],desc:Ol(t)}})}function pi(e,t){for(var n=0;n<e.length;n++)if(e[n].desc&&t(e[n].desc))return e[n];return null}function ye(e,t){var n=pi(e,t);return n?cn(n.raw):null}function He(e){return function(t){return t.i18nKey===e}}function hi(e,t){return function(n){return n.group==="phases"&&n.role===e&&n.phase===t&&!n.dir}}function pr(e,t,n){return function(r){return r.group==="phases"&&r.role===e&&r.phase===t&&r.dir===n}}function gi(e,t,n){var r=ye(e,hi(t,n));return r!==null?r:di(ye(e,pr(t,n,"in")),ye(e,pr(t,n,"out")))}function Bl(e,t){var n=null;return[1,2,3].forEach(function(r){var i=gi(e,t,r);i!==null&&(n=(n||0)+i)}),n}function Tn(e){var t=Bl(e,"power"),n=ye(e,He("meter.f.power_net")),r=!1;if(n===null){var i=ye(e,He("meter.f.power_import")),a=ye(e,He("meter.f.power_export"));n=di(i,a),n!==null&&(r=!0)}var l=Fl(n,t);return n!==null?{net:n*l,derived:r,scale:l}:t!==null?{net:t,derived:!0,scale:1}:{net:null,derived:!1,scale:1}}function hr(e){return u`
      <span class="meter-derived-wrap">
        <span class="meter-derived">${e.children}</span>
        <${ce} text=${e.tip} />
      </span>`}function Hl(){return u`<span class="meter-tag meter-tag-derived">${o("meter.derived")}</span>`}function jl(){return u`
      <span class="meter-tag meter-tag-register">${o("meter.register")}
        <${ce} text=${o("meter.tip.register")} /></span>`}function mi(e){return e==null?"":e>0?"var(--c-import)":e<0?"var(--c-vzev)":""}function Vl(e){var t=e.resolved,n=Tn(t),r=n.net,i=n.derived;if(r===null)return null;var a=r>0,l=o(a?"meter.importing":"meter.exporting");return u`
      <${R} group="grid" title=${o("meter.section.power")}
        tooltip=${o("meter.tip.net")}
        badge=${i?Hl():null}>
        <div class="meter-big">
          <span class="meter-big-value" style=${"color:"+mi(r)}>
            ${k.w(Math.abs(r))}
          </span>
          <span class="meter-big-label">${l}</span>
        </div>
      <//>`}var Kl=[{role:"voltage",unit:"V",prec:1,key:"meter.voltage",tip:null,signed:!1},{role:"current",unit:"A",prec:2,key:"meter.current",tip:null,signed:!1},{role:"power",unit:"W",prec:0,key:"meter.active_power",tip:null,signed:!0},{role:"reactive",unit:"var",prec:0,key:"meter.reactive",tip:"meter.tip.reactive",signed:!0},{role:"pf",unit:"",prec:2,key:"meter.power_factor",tip:"meter.tip.cosphi",signed:!1}];function ql(e){var t=e.resolved,n=[1,2,3],r=Kl.map(function(d){var h=n.map(function(p){return gi(t,d.role,p)}),f=h.some(function(p){return p!==null});return{m:d,cells:h,any:f}}).filter(function(d){return d.any});if(r.length===0)return null;var i=r.filter(function(d){return d.m.role==="power"})[0],a=i?Ll(i.cells):null,l=null,s=r.filter(function(d){return d.m.role==="pf"})[0];if(i&&!s){var c=r.filter(function(d){return d.m.role==="reactive"})[0];if(c){var v=n.map(function(d,h){return Al(i.cells[h],c.cells[h])});v.some(function(d){return d!==null})&&(l=v)}}return u`
      <${R} title=${o("meter.section.phases")} tooltip=${o("meter.tip.phases")}>
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
                      ${d.m.tip?u`<${ce} text=${o(d.m.tip)} />`:null}
                    </th>
                    ${d.cells.map(function(h){var f=d.m.signed?mi(h):"";return u`<td style=${f?"color:"+f:""}>
                        ${h===null?"–":k.num(h,d.m.prec)}</td>`})}
                  </tr>`})}
              ${l?u`
                <tr class="meter-row-derived">
                  <th scope="row" class="meter-th-metric">
                    <${hr} tip=${o("meter.tip.cosphi")}>cos φ<//>
                  </th>
                  ${l.map(function(d){return u`<td>${d===null?"–":k.num(d,2)}</td>`})}
                </tr>`:null}
            </tbody>
          </table>
        </div>
        ${a!==null?u`
          <div class="meter-imbalance">
            <${hr} tip=${o("meter.tip.imbalance")}>${o("meter.imbalance")}<//>
            <span class="meter-imbalance-val">${k.w(a)}</span>
          </div>`:null}
      <//>`}function Yl(e){var t=e.resolved,n=t.filter(function(a){return a.desc&&a.desc.kind==="register"}),r=pi(t,function(a){return a.group==="tariff"});if(n.length===0&&!r)return null;var i=r?cn(r.raw):null;return u`
      <${R} group="production" title=${o("meter.section.registers")}
        tooltip=${o("meter.tip.registers")}
        badge=${r&&(i===1||i===2)?u`
          <span class=${"meter-tariff meter-tariff-"+(i===2?"nt":"ht")}
            title=${o("meter.tip.tariff")+" ("+r.name+"="+r.raw+")"}>
            ${o(i===2?"tariff.nt":"tariff.ht")}
          </span>`:null}>
        ${n.length?u`
          <dl class="meter-reg-list">
            ${n.map(function(a){var l=cn(a.raw);return u`
                <div class="meter-reg">
                  <dt>${o(a.desc.i18nKey)} <span class="meter-unit">[${a.desc.unit}]</span> ${jl()}</dt>
                  <dd>${l===null?String(a.raw):k.num(l,a.desc.precision===void 0?3:a.desc.precision)}</dd>
                </div>`})}
          </dl>`:null}
      <//>`}function Gl(e){var t=e.stats;if(!t)return null;var n=t.u[1]||t.u[2]||t.u[3];if(!n&&!t.peakImp&&!t.peakExp)return null;function r(i){return i?k.num(i.min,1)+" / "+k.num(i.max,1):"–"}return u`
      <${R} title=${o("meter.section.minmax")} subtitle=${o("meter.since_open")}
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
              <dd style=${"color:var(--c-import)"}>${k.w(t.peakImp)}</dd>
            </div>`:null}
          ${t.peakExp?u`
            <div class="meter-reg">
              <dt>${o("meter.peak_export")} <span class="meter-unit">[W]</span></dt>
              <dd style=${"color:var(--c-vzev)"}>${k.w(t.peakExp)}</dd>
            </div>`:null}
        </dl>
      <//>`}function Zl(e){var t=e.resolved,n=x(!1),r=n[0],i=n[1],a=Tn(t).scale;function l(d){return a===1e3&&d.group==="power"&&d.unit==="W"?"kW":d.unit}var s=t.filter(function(d){return d.desc}),c=t.filter(function(d){return!d.desc});function v(d){var h=!!d.desc,f=d.raw!==null&&typeof d.raw=="object"?JSON.stringify(d.raw):String(d.raw);return u`
        <tr>
          <td class="meter-raw-name">${d.name}</td>
          <td class="meter-raw-val">${f}</td>
          <td class="meter-raw-unit">${h&&d.desc.unit?l(d.desc):""}</td>
          <td class="meter-raw-label">${o(h?d.desc.i18nKey:"meter.unknown")}</td>
        </tr>`}return u`
      <${R} title=${o("meter.section.raw")}>
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
                ${s.map(v)}
                ${c.length?u`
                  <tr class="meter-raw-sep"><td colspan="4">${o("meter.raw.other")}</td></tr>
                  ${c.map(v)}`:null}
              </tbody>
            </table>
          </div>`:null}
      <//>`}function Ql(){var e=x(void 0),t=e[0],n=e[1],r=x(null),i=r[0],a=r[1],l=x(!1),s=l[0],c=l[1],v=x(null),d=v[0],h=v[1],f=be([]),p=be({u:{},peakImp:0,peakExp:0});J(function(){return F.poll(function(){F.getMeter().then(function($){if(n($&&$.values?$.values:null),h($&&typeof $.now=="number"?$.now:Math.floor(Date.now()/1e3)),!(!$||!$.values)){var b=dr($.values),m=p.current;[1,2,3].forEach(function(C){var T=ye(b,hi("voltage",C));T!==null&&(m.u[C]=Rl(m.u[C],T))});var w=Tn(b),S=w.net,z=ye(b,He("meter.f.power_import")),N=ye(b,He("meter.f.power_export"));z!==null&&(z=z*w.scale),N!==null&&(N=N*w.scale),z===null&&S!==null&&(z=S>0?S:0),N===null&&S!==null&&(N=S<0?-S:0),z!==null&&(m.peakImp=vr(m.peakImp,z)),N!==null&&(m.peakExp=vr(m.peakExp,N)),a({u:Object.assign({},m.u),peakImp:m.peakImp,peakExp:m.peakExp});var U=ye(b,He("meter.f.energy_import")),E=S!==null?S>0:z!==null&&z>0,L=f.current;for(L.push({reg:U,importing:E});L.length>Ul;)L.shift();c(Wl(L))}}).catch(function(){})},Dl)},[]);var g=t?dr(t):[],y=d?Math.max(0,Math.floor(Date.now()/1e3)-d):null;return u`
      <div>
        <${Ne} title=${o("page.meter")} subtitle=${o("meter.subtitle")}
          actions=${d?u`
            <span class="meter-updated">
              ${o("meter.updated",{time:k.time(d,"hm")})}
              ${y!==null?u`<span class="meter-age"> · ${o("meter.age",{s:y})}</span>`:null}
            </span>`:null} />

        ${s?u`<div class="banner banner-warn">${o("meter.stale")}</div>`:null}

        ${t===void 0?u`<${R}><p class="placeholder-text">${o("common.loading")}</p><//>`:null}
        ${t===null?u`<${R}><p class="placeholder-text">${o("meter.empty")}</p><//>`:null}
        ${t?u`
          <${Vl} resolved=${g} />
          <${ql} resolved=${g} />
          <${Yl} resolved=${g} />
          <${Gl} stats=${i} />
          <${Zl} resolved=${g} />`:null}
      </div>`}var Xl=50;function Jl(e,t){if(!e||!e.data)return[];var n=e.producer_id,r=n&&e.data[n],i={},a=[],l=r?[r]:Object.keys(e.data).map(function(s){return e.data[s]});return l.forEach(function(s){if(s)for(var c=0;c+2<s.length;c+=3){var v=s[c];t&&(v<t[0]||v>=t[1])||i[v]||(i[v]=!0,a.push(v))}}),a.sort(function(s,c){return c-s}),a}function eo(e,t,n){var r=za(e,t,n),i=k.time(e,"hm"),a=k.time(e+900,"hm");return!r||r.prodWh<=0?o("explain.noprod",{from:i,to:a}):o("explain.sentence",{from:i,to:a,prod:k.wh(r.prodWh),member:k.wh(r.memberImpWh),total:k.wh(r.totalImpWh),share:k.num(r.sharePct,0),alloc:k.wh(r.allocatedWh)})}function $i(e){var t=x(0),n=t[0],r=t[1],i=Jl(e.raw,e.range),a=i.slice(0,(n+1)*Xl),l=a.length<i.length;return u`
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
              ${a.map(function(s){return u`<li key=${s} class="explain-slot">${eo(s,e.raw,e.memberId)}</li>`})}
            </ul>
            ${l?u`
              <button class="explain-more" onClick=${function(){r(n+1)}}>
                ${o("explain.more")}
              </button>`:null}`}
      </div>`}var gr=!1,to=2*3600,no=u`<svg viewBox="0 0 24 24" class="vz-house" aria-hidden="true"><path d="M3 11 12 3l9 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="13" width="4" height="6" fill="currentColor"/></svg>`,ro=u`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.5 3.5l3 3L7 16l-3.6.6.6-3.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,io=u`<svg viewBox="0 0 20 20" class="vz-plus" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,mr=u`<svg viewBox="0 0 24 24" class="vz-grid-ico" aria-hidden="true"><path d="M6 3v18M18 3v18M6 8h12M6 14h12M3 6l3 2 3-2M15 6l3 2 3-2M3 16l3 2 3-2M15 16l3 2 3-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function Je(e){return e&&(e.type==="PRODUCER"||e.typ==="P")}function ao(e){if(!e||!e.length)return{};var t=e[e.length-1];return t&&t.members||{}}function gt(e){var t=e.member,n=t.name||t.id,r=e.noData;return u`
      <div class=${"vz-card"+(e.own?" vz-card-own":"")+(e.producer?" vz-card-producer":"")}>
        <button class="vz-edit" aria-label=${o("vzev.edit")}
          onClick=${function(){Me.navigate("/vzev/mitglied/"+encodeURIComponent(t.id))}}>
          ${ro}
        </button>
        <div class="vz-house-wrap">${no}</div>
        <span class="vz-name">${n}</span>
        <span class="vz-type">${o(e.producer?"vzev.type.producer":"vzev.type.consumer")}</span>
        ${e.own?u`<span class="vz-ownbadge">${o("vzev.own")}</span>`:null}
        ${r?u`
          <span class="vz-nodata" role="status">
            ${r.lastTs?o("vzev.nodata.badge",{time:k.time(r.lastTs,"15m")}):o("vzev.nodata.never")}
          </span>`:null}
        ${!e.own&&e.onRemove?u`
          <button class="vz-remove" onClick=${e.onRemove}>${o("vzev.remove")}</button>`:null}
      </div>`}function lo(e){var t=e.wh,n="vz-chip vz-chip-"+(e.dir==="grid"?"grid":"vzev");return u`
      <span class=${n}>
        <span class="vz-chip-dir">${o(e.dir==="grid"?"vzev.flow.fromgrid":"vzev.flow.fromproducer")}</span>
        <span class="vz-chip-val">${k.wh(t)}</span>
      </span>`}function oo(){var e=x(null),t=e[0],n=e[1],r=x({}),i=r[0],a=r[1],l=x([]),s=l[0],c=l[1],v=x(!1),d=v[0],h=v[1],f=x(null),p=f[0],g=f[1],y=x(gr),$=y[0],b=y[1],m=x(null),w=m[0],S=m[1],z=be(!0);function N(){F.getVzevMembersList().then(function(P){z.current&&(n(P),h(!1))}).catch(function(){z.current&&(n([]),h(!0))}),F.getVzevRaw().then(function(P){z.current&&g(P||null)}).catch(function(){z.current&&g(null)})}J(function(){z.current=!0,N(),F.getVzevDiscovered().then(function(V){z.current&&c(V)}).catch(function(){z.current&&c([])});var P=F.poll(function(){F.getVzevFlows("15m",1).then(function(V){z.current&&a(ao(V&&V.flows))}).catch(function(){})},2e3);return function(){z.current=!1,P()}},[]);function U(){gr=!0,b(!0)}function E(P){F.get("/api/vzev/members?action=remove&id="+encodeURIComponent(P.id)).then(function(){le(o("vzev.removed"),{type:"info"}),N()}).catch(function(){le(o("vzev.saveerror"),{type:"error"})})}var L=!!(p&&p.self_id!=null&&p.self_id===p.producer_id),C=L?u`
      <${Y} secondary onClick=${function(){Me.navigate("/vzev/abrechnung")}}>
        ${o("vzev.billing")} ›
      <//>`:null,T=u`<${Ne} title=${o("page.vzev")} subtitle=${o("vzev.subtitle")} actions=${C} />`;if(t===null)return u`<div>${T}<${R}><p class="placeholder-text">${o("common.loading")}</p><//></div>`;var I=null,B=[];t.forEach(function(P){P.own||P.is_own?I=P:B.push(P)}),t.forEach(function(P){Je(P)});var A=u`
      <${R} class="vz-discovery">
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
                    <${Y} small onClick=${function(){Me.navigate("/vzev/mitglied/"+encodeURIComponent(P.id))}}>
                      ${io} ${o("vzev.add")}
                    <//>
                  </li>`})}
            </ul>`}
      <//>`;function _(P){var V=i[P.id];return typeof V=="number"?V:null}var M=0;if(p&&p.data)for(var W in p.data){var D=Qn(p,W);D&&D>M&&(M=D)}function ue(P){if(!p||!p.data)return null;var V=Qn(p,P.id),G=M||Math.floor(Date.now()/1e3);return V===null?{lastTs:null}:G-V>to?{lastTs:V}:null}var se=$?null:u`
      <${R} class="vz-info">
        <div class="vz-info-head">
          <h2 class="card-title">${o("vzev.info.title")}</h2>
          <button class="vz-info-close" aria-label=${o("common.close")} onClick=${U}>×</button>
        </div>
        <p class="vz-info-body">${o("vzev.info.body")}</p>
        <${Y} small secondary onClick=${U}>${o("vzev.info.dismiss")}<//>
      <//>`,j=w?(function(){for(var P=0;P<t.length;P++)if(t[P].id===w)return t[P];return null})():null,Q=j&&p?u`
      <${R} class="vz-drill">
        <${$i} raw=${p} memberId=${w}
          title=${o("explain.title")+" – "+(j.name||w)}
          onClose=${function(){S(null)}} />
      <//>`:null;function he(){var P=B;return u`
        <${R} group="vzev" class="vz-graph-card">
          <div class="vz-graph" role="img" aria-label=${o("vzev.graph.aria")}>
            <div class="vz-ring">
              ${P.length===0?u`<p class="placeholder-text vz-ring-empty">${o("vzev.empty")}</p>`:P.map(function(V){var G=Je(V),ne=_(V);return u`
                      <div key=${V.id} class="vz-node vz-node-peer">
                        <${gt} member=${V} producer=${G} noData=${ue(V)}
                          onRemove=${function(){E(V)}} />
                        ${ne!==null&&ne>0?u`
                          <span class=${"vz-flow "+(G?"vz-flow-vzev":"vz-flow-grid")}>
                            <span class="vz-flow-arrow">${G?"→":"←"}</span>
                            ${k.wh(ne)}
                          </span>`:null}
                        ${!G&&p?u`
                          <button class="vz-explain-btn" onClick=${function(){S(V.id)}}>
                            ${o("explain.open")}
                          </button>`:null}
                      </div>`})}
            </div>

            ${I?u`
              <div class="vz-node vz-node-own">
                <${gt} member=${I} own=${!0} producer=${Je(I)} />
              </div>`:null}

            <div class="vz-arrow-grid" aria-hidden="true">
              <span class="vz-arrow-line"></span>
            </div>

            <div class="vz-node vz-node-net">
              <div class="vz-netnode">
                <div class="vz-grid-icowrap">${mr}</div>
                <span class="vz-net-label">${o("vzev.net")}</span>
              </div>
            </div>
          </div>
        <//>`}function ve(){return u`
        <div class="vz-list">
          ${I?u`
            <div class="vz-list-item vz-list-own">
              <${gt} member=${I} own=${!0} producer=${Je(I)} />
            </div>`:null}
          ${B.map(function(P){var V=Je(P),G=_(P);return u`
              <div key=${P.id} class="vz-list-item">
                <${gt} member=${P} producer=${V} noData=${ue(P)}
                  onRemove=${function(){E(P)}} />
                ${G!==null&&G>0?u`<${lo} dir=${V?"producer":"grid"} wh=${G} />`:null}
                ${!V&&p?u`
                  <button class="vz-explain-btn" onClick=${function(){S(P.id)}}>
                    ${o("explain.open")}
                  </button>`:null}
              </div>`})}
          <div class="vz-list-item vz-list-net">
            <div class="vz-netnode vz-netnode-row">
              <div class="vz-grid-icowrap">${mr}</div>
              <span class="vz-net-label">${o("vzev.net")}</span>
            </div>
          </div>
        </div>`}return u`
      <div>
        ${T}
        ${d?u`<div class="banner banner-warn">${o("vzev.loaderror")}</div>`:null}
        ${se}
        <div class="vz-graph-wrap">${he()}</div>
        <div class="vz-list-wrap">${ve()}</div>
        ${Q}
        ${A}
      </div>`}function $r(e){return e&&(e.type==="PRODUCER"||e.typ==="P")?"P":"C"}function so(e){if(e==null||e===0)return"";var t=new Date(e*1e3);function n(r){return(r<10?"0":"")+r}return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function uo(e){if(!e)return null;var t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e));if(!t)return null;var n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),0,0,0,0);return Math.floor(n.getTime()/1e3)}function co(e){var t=e.params&&e.params.id||null,n=x(""),r=n[0],i=n[1],a=x(""),l=a[0],s=a[1],c=x("C"),v=c[0],d=c[1],h=x(""),f=h[0],p=h[1],g=x(""),y=g[0],$=g[1],b=x([]),m=b[0],w=b[1],S=x(!!t),z=S[0],N=S[1],U=x(!1),E=U[0],L=U[1],C=x(!1),T=C[0],I=C[1],B=x(""),A=B[0],_=B[1];J(function(){var j=!1;return Promise.all([F.getVzevMembersList().catch(function(){return[]}),t?F.getVzevDiscovered().catch(function(){return[]}):Promise.resolve([])]).then(function(Q){if(!j){var he=Q[0]||[],ve=Q[1]||[];w(he);for(var P=null,V=0;V<he.length;V++)if(he[V].id===t){P=he[V];break}if(P)N(!0),i(P.name||""),s(P.location||P.loc||""),d($r(P)),p(P.metering_point||""),$(so(P.entry_ts));else if(t){N(!1);for(var G=null,ne=0;ne<ve.length;ne++)if(ve[ne].id===t){G=ve[ne];break}G&&(i(G.name||""),s(G.location||G.loc||""),d($r(G)))}L(!0)}}),function(){j=!0}},[t]);function M(){if(v!=="P")return!1;for(var j=0;j<m.length;j++){var Q=m[j];if(Q.id!==t&&(Q.type==="PRODUCER"||Q.typ==="P"))return!0}return!1}function W(){if(_(""),!r.trim()){_(o("vzev.form.err.name"));return}if(M()){_(o("vzev.form.err.producer"));return}I(!0);var j="/api/vzev/members?action=upsert&id="+encodeURIComponent(t||"")+"&name="+encodeURIComponent(r.trim())+"&loc="+encodeURIComponent(l.trim())+"&typ="+encodeURIComponent(v)+"&mp="+encodeURIComponent(f.trim()),Q=uo(y);Q!==null&&(j+="&entry="+Q),F.get(j).then(function(){le(o("vzev.saved"),{type:"info"}),Me.navigate("/vzev")}).catch(function(){I(!1),le(o("vzev.saveerror"),{type:"error"})})}function D(){I(!0),F.get("/api/vzev/members?action=remove&id="+encodeURIComponent(t)).then(function(){le(o("vzev.removed"),{type:"info"}),Me.navigate("/vzev")}).catch(function(){I(!1),le(o("vzev.saveerror"),{type:"error"})})}var ue=o(z?"vzev.form.edit":"vzev.form.add"),se=u`<${Ne} title=${ue} subtitle=${o("vzev.form.subtitle")} />`;return E?u`
      <div>
        ${se}
        <${R} class="vz-form-card">
          <div class="vz-form">
            <${wt} label=${o("vzev.form.name")} value=${r}
              placeholder=${o("vzev.form.name.ph")}
              onInput=${function(j){i(j)}} />
            <${wt} label=${o("vzev.form.loc")} value=${l}
              placeholder=${o("vzev.form.loc.ph")}
              onInput=${function(j){s(j)}} />
            <${At} label=${o("vzev.form.typ")} value=${v}
              onChange=${function(j){d(j),_("")}}
              options=${[{value:"C",label:o("vzev.type.consumer")},{value:"P",label:o("vzev.type.producer")}]} />

            <${wt} label=${o("vzev.form.metering_point")} value=${f}
              placeholder=${o("vzev.form.metering_point.ph")} maxlength=${40}
              onInput=${function(j){p(j)}} />
            <p class="vz-form-hint">${o("vzev.form.metering_point.hint")}</p>

            <label class="field field-block">
              <span class="field-label">${o("vzev.form.entry_ts")}</span>
              <input class="textfield" type="date" value=${y}
                onInput=${function(j){$(j.target.value)}} />
            </label>
            <p class="vz-form-hint">${o("vzev.form.entry_ts.hint")}</p>

            ${A?u`<p class="vz-form-err" role="alert">${A}</p>`:null}

            <div class="vz-form-actions">
              <${Y} onClick=${W} disabled=${T}>${o("vzev.form.save")}<//>
              <${Y} secondary onClick=${function(){Me.navigate("/vzev")}}
                disabled=${T}>${o("vzev.form.cancel")}<//>
              ${z?u`
                <${Y} danger onClick=${D} disabled=${T}>${o("vzev.remove")}<//>`:null}
            </div>
          </div>
        <//>
      </div>`:u`<div>${se}<${R}><p class="placeholder-text">${o("common.loading")}</p><//></div>`}var fn="var(--c-production)",fo="var(--c-vzev)";function _i(e){return!e||!e.expected?null:Math.round(e.complete/e.expected*100)}function Pt(e){var t=_i(e);return t!==null&&t<100}function vo(e){e=e||{};var t=Number(e.vzev_import_chf_kwh);return isNaN(t)?null:t}function _r(e,t){return e+"-Q"+t}function Zt(e,t){return Math.floor(new Date(e,t,1,0,0,0,0).getTime()/1e3)}function po(e){for(var t=new Date,n=t.getFullYear(),r=Math.floor(t.getMonth()/3)+1,i=[],a=0;a<7;a++){for(var l=r-a,s=n;l<1;)l+=4,s-=1;i.push({value:_r(s,l),label:_r(s,l)})}return i}function ho(e){var t=/^(\d{4})-Q([1-4])$/.exec(String(e||""));return t?{year:parseInt(t[1],10),q:parseInt(t[2],10)}:null}function go(e){var t=ho(e);if(!t)return[];var n=(t.q-1)*3;return[Zt(t.year,n),Zt(t.year,n+1),Zt(t.year,n+2)]}function yr(e,t,n,r){var i=go(t),a=Array.isArray(e)?e:[];return a.map(function(l,s){var c;l==null?c=0:typeof l=="number"?c=l:c=n(l);var v=l&&typeof l=="object"&&typeof l.ts=="number"?l.ts:i[s]!==void 0?i[s]:(i[0]||0)+s*2592e3;return{t:v,y:c==null||isNaN(c)?0:c,color:r}})}function br(e){return typeof e.wh=="number"?e.wh/1e3:typeof e.kwh=="number"?e.kwh:typeof e.y=="number"?e.y:0}function mo(e){var t=e.quality;if(!t||!t.expected)return null;var n=_i(t),r=e.byId||{},i=[],a=t.perMember||{};for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l)){var s=(a[l].expected||0)-(a[l].have||0);if(s>0){var c=r[l]&&r[l].name||l;i.push(o("billing.quality.member_missing",{name:c,n:s}))}}return u`
      <${R} class="billing-quality">
        <div class="billing-quality-head">
          <h2 class="card-title">${o("billing.quality.title")}
            <${ce} text=${o("tooltip.provisorisch")} /></h2>
          ${Pt(t)?u`<span class="billing-provisional">${o("billing.provisional.badge")}</span>`:null}
        </div>
        <p class="billing-quality-line">${o("billing.quality.complete",{pct:n})}</p>
        ${t.provisional>0?u`<p class="billing-quality-line">${o("billing.quality.provisional",{n:t.provisional})}</p>`:null}
        ${t.missing>0?u`<p class="billing-quality-line">${o("billing.quality.missing",{n:t.missing})}</p>`:null}
        ${i.length===0&&!Pt(t)?u`<p class="billing-quality-line billing-quality-ok">${o("billing.quality.ok")}</p>`:null}
        ${i.map(function(v,d){return u`<p key=${d} class="billing-quality-line">${v}</p>`})}
      <//>`}function $o(e){var t=e.member,n=e.tariffs||{},r=e.period,i=vo(n),a=typeof t.wh=="number"?t.wh/1e3:null,l=t.entry_ts&&r&&t.entry_ts>r[0]?t.entry_ts:r?r[0]:null,s=e.capReference,c=s!=null&&i!==null&&i>s?o("billing.detail.method_effektiv"):o("billing.detail.method_pauschal");function v(d,h){return u`<div class="stmt-line"><span class="stmt-key">${d}</span><span class="stmt-val">${h}</span></div>`}return u`
      <div class="stmt">
        ${v(o("billing.detail.period"),r?k.time(l,"1d")+" – "+k.time(r[1]-1,"1d"):"–")}
        ${v(o("billing.detail.member"),(t.name||t.id)+(t.location?", "+t.location:""))}
        ${t.metering_point?v(u`${o("billing.detail.meteringpoint")} <${ce} text=${o("tooltip.zaehlpunkt")} />`,t.metering_point):null}
        ${v(o("billing.detail.energy"),a===null?"–":k.num(a,2)+" kWh")}
        ${typeof t.ht_wh=="number"?v(o("billing.detail.energy_ht"),k.num(t.ht_wh/1e3,2)+" kWh"):null}
        ${typeof t.nt_wh=="number"?v(o("billing.detail.energy_nt"),k.num(t.nt_wh/1e3,2)+" kWh"):null}
        ${v(o("billing.detail.tariff"),i===null?"–":k.num(i,2)+" CHF/kWh")}
        ${v(o("billing.detail.amount"),typeof t.chf=="number"?k.chf(t.chf):"–")}
        <p class="stmt-residual">${o("billing.detail.residual")}</p>
        ${v(u`${o("billing.detail.key")} <${ce} text=${o("tooltip.verteilschluessel")} />`,o("billing.detail.key_value"))}
        ${v(o("billing.detail.method"),c)}
      </div>`}function wr(e){var t=e.wh!==null&&e.wh!==void 0?e.wh/1e3:null,n=x(!1),r=n[0],i=n[1],a=x(!1),l=a[0],s=a[1],c=!!e.member;return u`
      <${R} group="vzev" title=${e.title} subtitle=${e.subtitle}>
        ${e.provisional?u`<span class="billing-provisional">${o("billing.provisional.badge")}</span>`:null}
        <div class="billing-metrics">
          <div class="billing-metric">
            <span class="billing-metric-label">${e.kwhLabel}</span>
            <span class="billing-metric-value" style=${"color:"+fn}>
              ${t===null?"–":k.num(t,2)+" kWh"}
            </span>
          </div>
          <div class="billing-metric">
            <span class="billing-metric-label">${e.chfLabel}</span>
            <span class="billing-metric-value" style=${"color:"+fo}>
              ${e.chf===null||e.chf===void 0?"–":k.chf(e.chf)}
            </span>
          </div>
        </div>
        ${e.note?u`<p class="billing-card-note">${e.note}</p>`:null}
        <${_n} height=${180} yUnit="kWh" xUnit=${o("billing.axis.month")}
          xTickFormat=${function(v){return k.time(v,"1mo")}}
          yFormat=${function(v){return k.num(v,1)+" kWh"}}
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
          <${$o} member=${e.member} tariffs=${e.tariffs}
            period=${e.period} capReference=${e.capReference} />`:null}
        ${c&&l&&e.raw?u`
          <${$i} raw=${e.raw} memberId=${e.member.id}
            range=${e.period} onClose=${function(){s(!1)}} />`:null}
      <//>`}function _o(e){var t=e.data,n=e.quarter,r=t.total||{},i=yr(r.months,n,br,fn),a=Array.isArray(t.members)?t.members:[];return u`
      <div class="billing-grid">
        <${wr}
          title=${o("billing.total.title")}
          subtitle=${n}
          kwhLabel=${o("billing.producer.energy")}
          chfLabel=${o("billing.producer.profit")}
          wh=${typeof r.exp_wh=="number"?r.exp_wh:null}
          chf=${typeof r.revenue_chf=="number"?r.revenue_chf:null}
          points=${i} />
        ${a.map(function(l){return u`
            <${wr} key=${l.id}
              title=${l.name||l.id}
              kwhLabel=${o("billing.producer.energy")}
              chfLabel=${o("billing.producer.profit")}
              wh=${typeof l.wh=="number"?l.wh:null}
              chf=${typeof l.chf=="number"?l.chf:null}
              points=${yr(l.months,n,br,fn)}
              member=${l} tariffs=${t.tariffs} period=${t.range}
              raw=${t.raw} capReference=${e.capReference}
              provisional=${e.provisional} />`})}
      </div>`}function yo(e){var t=e.info||{},n=t.representative_name,r=t.connection_point_id;return!n&&!r?null:u`
      <${R} class="billing-header-card">
        ${n?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${o("billing.rep")}</span> ${n}${t.representative_contact?" · "+t.representative_contact:""}</p>`:null}
        ${r?u`<p class="billing-hdr-line"><span class="billing-hdr-key">${o("billing.connpoint")}</span> ${r}</p>`:null}
      <//>`}function bo(e,t){var n=Array.isArray(e.members)?e.members:e.self?[e.self]:[],r=Pt(e.quality),i=[o("billing.detail.member"),o("billing.detail.meteringpoint"),o("billing.detail.energy")+" [kWh]",o("billing.detail.energy_ht")+" [kWh]",o("billing.detail.energy_nt")+" [kWh]",o("billing.detail.amount")+" [CHF]",o("billing.provisional.badge")],a=n.map(function(d){return[d.name||d.id,d.metering_point||"",typeof d.wh=="number"?(d.wh/1e3).toFixed(2):"",typeof d.ht_wh=="number"?(d.ht_wh/1e3).toFixed(2):"",typeof d.nt_wh=="number"?(d.nt_wh/1e3).toFixed(2):"",typeof d.chf=="number"?d.chf.toFixed(2):"",r?"1":"0"]}),l=vi(i,a),s=new Blob([l],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(s),v=document.createElement("a");v.href=c,v.download="gplug-abrechnung-"+t+".csv",document.body.appendChild(v),v.click(),document.body.removeChild(v),setTimeout(function(){URL.revokeObjectURL(c)},0)}function wo(){var e=po(),t=x(e.length?e[0].value:""),n=t[0],r=t[1],i=x(null),a=i[0],l=i[1],s=x("loading"),c=s[0],v=s[1];J(function(){var m=!1;return v("loading"),F.getVzevBilling(n).then(function(w){if(!m){if(!w||typeof w!="object"){l(null),v("empty");return}l(w),v("ready")}}).catch(function(){m||(l(null),v("error"))}),function(){m=!0}},[n]);function d(m){if(!m)return!1;var w=String(m.role||m.type||"").toUpperCase();if(w==="PRODUCER"||w==="P")return!0;if(w==="CONSUMER"||w==="C")return!1;var S=m.self||{};return m.self||typeof S.cost_grid_chf=="number"||typeof m.cost_grid_chf=="number"||typeof m.import_wh=="number"?!1:!!(m.total||Array.isArray(m.members)&&m.members.length)}var h=a&&a.tariffs?ti(a.tariffs):null,f=a?Pt(a.quality):!1,p={};a&&Array.isArray(a.members)&&a.members.forEach(function(m){m&&m.id!==void 0&&(p[m.id]=m)});var g=!!a&&d(a),y;c==="loading"?y=u`<${R}><p class="placeholder-text">${o("common.loading")}</p><//>`:c==="error"?y=u`<${R}><p class="placeholder-text">${o("billing.error")}</p><//>`:c==="empty"||!a?y=u`<${R}><p class="placeholder-text">${o("common.nodata")}</p><//>`:g?y=u`<${_o} data=${a} quarter=${n}
        capReference=${h} provisional=${f} />`:y=u`<${R}><p class="placeholder-text">${o("billing.producer_only")}</p><//>`;var $=c==="ready"&&g,b=u`
      <div class="billing-actions">
        <${At} label=${o("billing.quarter")} value=${n}
          options=${e}
          onChange=${function(m){r(m)}} />
        ${$?u`
          <${Y} secondary small onClick=${function(){bo(a,n)}}>${o("billing.export")}<//>
          <${Y} secondary small onClick=${function(){window.print()}}>${o("billing.print")}<//>`:null}
      </div>`;return u`
      <div class="billing-page">
        <${Ne} title=${o("page.billing")} subtitle=${o("billing.subtitle")}
          actions=${b} />
        ${$?u`<${yo} info=${a.info} />`:null}
        ${y}
        ${$?u`<${mo} quality=${a.quality} byId=${p} />`:null}
        <${R} class="billing-note-card">
          <p class="billing-note">${o("billing.note")}</p>
        <//>
      </div>`}var ko=["site","loads","productions","grid","tariffs","vzev","gplug","pro"],xo={site:"site",lasten:"loads",produktion:"productions",netzanschluss:"grid",tarife:"tariffs",vzev:"vzev",gplug:"gplug",pro:"pro"},zo={site:"site",loads:"lasten",productions:"produktion",grid:"netzanschluss",tariffs:"tarife",vzev:"vzev",gplug:"gplug",pro:"pro"},Co={site:"settings.tab.site",loads:"settings.tab.loads",productions:"settings.tab.productions",grid:"settings.tab.grid",tariffs:"settings.tab.tariffs",vzev:"settings.tab.vzev",gplug:"settings.tab.gplug",pro:"settings.tab.pro"},So={PHOTOVOLTAIC:"settings.prodtype.PHOTOVOLTAIC",BATTERY:"settings.prodtype.BATTERY"},Mo=["simulator","shelly","homeassistant","gplug"],yi=["simulator","homeassistant","gplug"],vn=["ELECTRICITY","HEATPUMP","DRYER","WALLBOX"],Ot=["PHOTOVOLTAIC","BATTERY"];function No(e){return e==null||String(e).trim()===""?!1:Ot.indexOf(String(e).toUpperCase())<0}var bi=["W","kW"],wi=["grid_import_chf_kwh","grid_feedin_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh"],To={grid_import_chf_kwh:.26,grid_feedin_chf_kwh:.18,base_fee_chf_month:12.5,vzev_export_chf_kwh:.22,vzev_import_chf_kwh:.22,co2_g_kwh:128};function ie(e){return e==null||String(e).trim()===""}function _e(e){return!ie(e)&&!isNaN(Number(e))}function Be(e){return ie(e)?!1:/^https?:\/\/\S+$/i.test(String(e).trim())}function ki(e,t){var n={};ie(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),(!_e(e.currentPower)||Number(e.currentPower)<0)&&(n.currentPower="settings.err.power"),(!_e(e.priority)||Number(e.priority)<1||Math.floor(Number(e.priority))!==Number(e.priority))&&(n.priority="settings.err.priority");var r=e.integration;if(r==="shelly"){var i=e.url||{};Be(i.on)||(n["url.on"]="settings.err.url"),Be(i.off)||(n["url.off"]="settings.err.url"),Be(i.status)||(n["url.status"]="settings.err.url")}else Be(e.url)||(n.url="settings.err.url"),r==="homeassistant"&&ie(e.token)&&(n.token="settings.err.token");return n}function xi(e,t){var n={};return ie(e.id)?n.id="settings.err.id_required":t&&t.indexOf(String(e.id))>=0&&(n.id="settings.err.id_duplicate"),e.integration==="gplug"?ie(e.field)&&(n.field="settings.err.field"):(Be(e.url)||(n.url="settings.err.url"),e.integration==="homeassistant"&&ie(e.token)&&(n.token="settings.err.token")),n}function zi(e){var t={};return e.integration==="gplug"?ie(e.field)&&(t.field="settings.err.field"):(Be(e.url)||(t.url="settings.err.url"),e.integration==="homeassistant"&&ie(e.token)&&(t.token="settings.err.token")),t}function Eo(e){var t={};return ie(e.id)&&(t.id="settings.err.id_required"),ie(e.name)&&(t.name="settings.err.name_required"),t}function Io(e){var t={};wi.forEach(function(v){(!_e(e[v])||Number(e[v])<0)&&(t[v]="settings.err.rate")});var n=e.co2_g_kwh;(!_e(n)||Number(n)<0||Math.floor(Number(n))!==Number(n))&&(t.co2_g_kwh="settings.err.co2");var r=e.grid_import_ht_chf_kwh,i=e.grid_import_nt_chf_kwh,a=!ie(r),l=!ie(i);if((a||l)&&(!a||!l?(t.grid_import_ht_chf_kwh="settings.err.rate_ht",t.grid_import_nt_chf_kwh="settings.err.rate_ht"):((!_e(r)||Number(r)<0)&&(t.grid_import_ht_chf_kwh="settings.err.rate"),(!_e(i)||Number(i)<0)&&(t.grid_import_nt_chf_kwh="settings.err.rate"))),Array.isArray(e.ht_windows))for(var s=0;s<e.ht_windows.length;s++){var c=e.ht_windows[s]||{};(!_e(c.from)||!_e(c.to)||Number(c.from)<0||Number(c.to)>24||Number(c.from)>Number(c.to))&&(t["win."+s]="settings.err.win_hours")}return t}function lt(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function et(e){return typeof e=="number"&&!isNaN(e)}function rt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function kr(e){return e==null||String(e).trim()===""?!0:/^https?:\/\//i.test(String(e).trim())}var fe={object:"settings.err.doc_object",array:"settings.err.array_required",id:"settings.err.id_required",dup:"settings.err.id_duplicate",power:"settings.err.power",priority:"settings.err.priority",url:"settings.err.url",rate:"settings.err.rate",win:"settings.err.win_hours"},Po=["grid_import_chf_kwh","grid_feedin_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh","base_fee_chf_month","vzev_export_chf_kwh","vzev_import_chf_kwh","co2_g_kwh"];function Oo(e,t,n){if(typeof e=="string"||e===void 0||e===null){kr(e)||n.push({path:t,key:fe.url});return}if(rt(e)){for(var r in e)e.hasOwnProperty(r)&&(typeof e[r]!="string"||!kr(e[r]))&&n.push({path:t+"."+r,key:fe.url});return}n.push({path:t,key:fe.url})}function Qt(e,t,n){var r=e[t];if(!Array.isArray(r))return n.push({path:t,key:fe.array}),null;for(var i=!0,a=0;a<r.length;a++)rt(r[a])||(n.push({path:t+"["+a+"]",key:fe.array}),i=!1);return i?r:null}function Lo(e){var t=[];if(!rt(e))return[{path:"",key:fe.object}];(typeof e.id!="string"||e.id.length===0)&&t.push({path:"id",key:fe.id});var n=Qt(e,"loads",t);if(Qt(e,"productions",t),Qt(e,"grid",t),n)for(var r={},i=0;i<n.length;i++){var a=n[i],l="loads["+i+"]",s=a.id;typeof s!="string"||s.length===0?t.push({path:l+".id",key:fe.id}):r[s]?t.push({path:l+".id",key:fe.dup}):r[s]=!0,a.currentPower!==void 0&&a.currentPower!==null&&!et(a.currentPower)&&t.push({path:l+".currentPower",key:fe.power}),a.priority!==void 0&&a.priority!==null&&(!et(a.priority)||a.priority<1)&&t.push({path:l+".priority",key:fe.priority}),a.url!==void 0&&a.url!==null&&Oo(a.url,l+".url",t)}var c=e.tariffs;if(c!=null){if(!rt(c))return t.push({path:"tariffs",key:fe.object}),t;Po.forEach(function(p){var g=c[p];g!=null&&(!et(g)||g<0)&&t.push({path:"tariffs."+p,key:fe.rate})});var v=c.ht_windows;if(v!=null)if(!Array.isArray(v))t.push({path:"tariffs.ht_windows",key:fe.array});else for(var d=0;d<v.length;d++){var h=v[d],f="tariffs.ht_windows["+d+"]";(!rt(h)||!et(h.from)||!et(h.to)||h.from<0||h.to>24||h.from>h.to)&&t.push({path:f,key:fe.win})}}return t}function H(e){var t=e.error;return u`
      <label class=${"field field-block"+(t?" field-invalid":"")}>
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <input class="textfield" type=${e.type||"text"}
          value=${e.value===void 0||e.value===null?"":e.value}
          placeholder=${e.placeholder||""}
          step=${e.step} min=${e.min}
          disabled=${e.disabled}
          onInput=${function(n){e.onInput(n.target.value)}} />
        ${t?u`<span class="field-error">${o(t)}</span>`:null}
      </label>`}function Le(e){return u`
      <label class="field field-block">
        ${e.label?u`<span class="field-label">${e.label}</span>`:null}
        <span class="select-wrap">
          <select class="select" value=${e.value} disabled=${e.disabled}
            onChange=${function(t){e.onChange(t.target.value)}}>
            ${e.options.map(function(t){return u`<option key=${t.value} value=${t.value}>${t.label}</option>`})}
          </select>
          <svg class="select-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </span>
      </label>`}function En(e){return u`
      <button type="button" class="icon-btn icon-btn-danger" aria-label=${o("settings.delete")}
        onClick=${e.onClick}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`}function Ke(e){return e.map(function(t){return{value:t,label:t}})}function Fo(e){var t=e.cfg,n=Eo(t);function r(i){return function(a){e.patch(i,a)}}return u`
      <${R} group="grid">
        <p class="settings-scope">${o("settings.scope_note")}</p>
        <div class="settings-form">
          <${H} label=${o("settings.site.id")} value=${t.id} error=${n.id}
            disabled=${e.idLocked} onInput=${r("id")} />
          <${H} label=${o("settings.site.name")} value=${t.name} error=${n.name} onInput=${r("name")} />
          <${H} label=${o("settings.site.location")} value=${t.location} onInput=${r("location")} />
          <${H} label=${o("settings.site.description")} value=${t.description} onInput=${r("description")} />
        </div>
        <${ut} disabled=${lt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function Ao(e){var t=e.selected>=0;return u`
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
      </div>`}function ut(e){return u`
      <div class="settings-actions">
        <${Y} disabled=${e.disabled||e.saving} onClick=${e.onSave}>
          ${e.saving?o("settings.saving"):o("settings.save")}
        <//>
      </div>`}function Wo(e){var t=e.item,n=e.otherIds,r=ki(t,n);function i(c){return function(v){e.patch(c,v)}}function a(c){return function(v){var d=Object.assign({},t.url||{});d[c]=v,e.patch("url",d)}}var l=t.integration||"simulator",s=l==="shelly"?t.url||{}:{};return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||o("settings.new_entry")}</h3>
          <${En} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${H} label=${o("settings.load.id")} value=${t.id} error=${r.id} onInput=${i("id")} />
          <${H} label=${o("settings.load.name")} value=${t.friendlyName} onInput=${i("friendlyName")} />
          <${H} label=${o("settings.load.power")} type="number" min="0" value=${t.currentPower}
            error=${r.currentPower} onInput=${i("currentPower")} />
          <${Le} label=${o("settings.load.type")} value=${t.loadType||vn[0]}
            options=${Ke(vn)} onChange=${i("loadType")} />
          <${H} label=${o("settings.load.priority")} type="number" min="1" value=${t.priority}
            error=${r.priority} onInput=${i("priority")} />
          <${Le} label=${o("settings.integration")} value=${l}
            options=${Ke(Mo)} onChange=${i("integration")} />
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
      </div>`}function Ro(e){var t=e.item,n=xi(t,e.otherIds);function r(a){return function(l){e.patch(a,l)}}var i=t.integration||"simulator";return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${t.friendlyName||t.id||o("settings.new_entry")}</h3>
          <${En} onClick=${e.onDelete} />
        </div>
        <div class="settings-form">
          <${H} label=${o("settings.prod.id")} value=${t.id} error=${n.id} onInput=${r("id")} />
          <${H} label=${o("settings.prod.name")} value=${t.friendlyName} onInput=${r("friendlyName")} />
          <${Le} label=${o("settings.prod.type")} value=${t.productionType||Ot[0]}
            options=${Ot.map(function(a){return{value:a,label:o(So[a])}})}
            onChange=${r("productionType")} />
          ${No(t.productionType)?u`
            <div class="settings-warn" role="status">${o("settings.prodtype.unknown_warn")}</div>`:null}
          <${Le} label=${o("settings.dimension")} value=${t.dimension||"W"}
            options=${Ke(bi)} onChange=${r("dimension")} />
          <${Le} label=${o("settings.integration")} value=${i}
            options=${Ke(yi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${o("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${H} label=${o("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:u`
            <${H} label=${o("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${H} label=${o("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function Do(e){var t=e.item,n=zi(t);function r(l){return function(s){e.patch(l,s)}}var i=t.integration||"simulator",a=t.id==="to"?o("settings.grid.to"):o("settings.grid.from");return u`
      <div>
        <div class="md-detail-head">
          <h3 class="md-detail-title">${a}</h3>
        </div>
        <div class="settings-form">
          <${Le} label=${o("settings.dimension")} value=${t.dimension||"W"}
            options=${Ke(bi)} onChange=${r("dimension")} />
          <${Le} label=${o("settings.integration")} value=${i}
            options=${Ke(yi)} onChange=${r("integration")} />
        </div>
        <div class="settings-subhead">${o("settings.integration_config")}</div>
        <div class="settings-form">
          ${i==="gplug"?u`
            <${H} label=${o("settings.field")} value=${t.field} error=${n.field} onInput=${r("field")} />`:u`
            <${H} label=${o("settings.url")} value=${t.url} error=${n.url} onInput=${r("url")} />
            ${i==="homeassistant"?u`
              <${H} label=${o("settings.token")} type="password" value=${t.token} error=${n.token} onInput=${r("token")} />`:null}`}
        </div>
      </div>`}function Xt(e){var t=x(-1),n=t[0],r=t[1],i=e.items;function a(d,h){var f=i.slice(),p=Object.assign({},f[n]);p[d]=h,f[n]=p,e.onChange(f)}function l(){var d=i.concat([e.blank()]);e.onChange(d),r(d.length-1)}function s(){var d=i[n],h=(e.persistedIds||[]).indexOf(String(d&&d.id))!==-1;if(!(h&&!window.confirm(o(e.confirmKey)))){var f=i.slice();f.splice(n,1),r(-1),e.onDelete&&e.onDelete(d),e.onChange(f)}}var c=i.some(function(d,h){var f=i.filter(function(p,g){return g!==h}).map(function(p){return String(p.id)});return lt(e.validate(d,f))}),v=n>=0&&i[n]?u`<${e.Detail} item=${i[n]} patch=${a} onDelete=${s}
          otherIds=${i.filter(function(d,h){return h!==n}).map(function(d){return String(d.id)})} />`:null;return u`
      <${R} group=${e.group}>
        <${Ao}
          items=${i} selected=${n}
          listTitle=${e.listTitle}
          labelFn=${e.labelFn}
          onSelect=${r}
          onAdd=${e.fixedList?null:l}
          detail=${v} />
        <${ut} disabled=${c} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function Uo(e){var t=e.tariffs,n=Io(t);function r(g){return function(y){e.patch(g,y)}}var i=Array.isArray(t.ht_windows)?t.ht_windows:[];function a(g,y,$){var b=i.map(function(m,w){if(w!==g)return m;var S=Object.assign({},m);return S[y]=$,S});e.setWindows(b)}function l(){e.setWindows(i.concat([{days:"mo-fr",from:6,to:21}]))}function s(g){e.setWindows(i.filter(function(y,$){return $!==g}))}var c=_e(t.grid_import_ht_chf_kwh)&&_e(t.grid_import_nt_chf_kwh),v=c&&i.length===0,d=Bo(t),h=ti(d),f=Number(t.vzev_import_chf_kwh),p=h!==null&&!isNaN(f)&&f>h;return u`
      <${R} group="vzev">
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
        ${i.map(function(g,y){return u`
            <div key=${y} class="settings-form ht-window-row">
              <${H} label=${o("settings.tariff.win_days")} value=${g.days}
                placeholder=${o("settings.tariff.win_days.ph")} onInput=${function($){a(y,"days",$)}} />
              <${H} label=${o("settings.tariff.win_from")} type="number" step="0.5" min="0"
                value=${g.from} error=${n["win."+y]} onInput=${function($){a(y,"from",xr($))}} />
              <${H} label=${o("settings.tariff.win_to")} type="number" step="0.5" min="0"
                value=${g.to} onInput=${function($){a(y,"to",xr($))}} />
              <${En} onClick=${function(){s(y)}} />
            </div>`})}
        <${Y} small secondary onClick=${l}>${o("settings.tariff.win_add")}<//>
        ${v?u`<p class="settings-warn">${o("settings.tariff.win_empty_warn")}</p>`:null}

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
        ${h!==null?u`
          <p class="settings-scope">
            ${o("settings.tariff.cap_ref",{ref:h.toFixed(2)})}
            <${ce} text=${o("tooltip.cap")} />
          </p>
          ${p?u`<p class="settings-warn">${o("settings.tariff.cap_warn")}</p>`:u`<p class="settings-ok">${o("settings.tariff.cap_ok")}</p>`}`:null}
        <div class="settings-subhead">${o("settings.tariff.co2_group")}</div>
        <div class="settings-form">
          <${H} label=${o("settings.tariff.co2_g_kwh")} type="number" step="1" min="0"
            value=${t.co2_g_kwh} error=${n.co2_g_kwh} onInput=${r("co2_g_kwh")} />
        </div>
        <${ut} disabled=${lt(n)} onSave=${e.onSave} saving=${e.saving} />
      <//>`}function xr(e){return ie(e)?void 0:Number(e)}function Bo(e){var t={};return["grid_import_chf_kwh","grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(n){ie(e[n])||(t[n]=Number(e[n]))}),Array.isArray(e.ht_windows)&&(t.ht_windows=e.ht_windows),t}function Ho(){var e=x(null),t=e[0],n=e[1],r=x({producers:0,members:0}),i=r[0],a=r[1],l=x(!1),s=l[0],c=l[1];J(function(){var h=!1;return Promise.all([F.getVzevInfo().catch(function(){return{}}),F.get("/api/vzev/members",{optional:!0}).catch(function(){return{members:[]}})]).then(function(f){if(!h){var p=f[0]||{};n({representative_name:p.representative_name||"",representative_contact:p.representative_contact||"",connection_point_id:p.connection_point_id||"",enabled:!!p.enabled});var g=f[1]&&f[1].members||[],y=0;g.forEach(function($){($.type==="PRODUCER"||$.typ==="P")&&y++}),a({producers:y,members:g.length})}}),function(){h=!0}},[]);function v(h){return function(f){n(function(p){var g=Object.assign({},p);return g[h]=f,g})}}function d(){s||!t||(c(!0),F.setVzevInfo(t).then(function(){le(o("settings.vzev.saved"),{type:"info"})}).catch(function(){le(o("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}return t?u`
      <${R} group="vzev">
        <div class="settings-form settings-toggle-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" checked=${t.enabled}
              onChange=${function(h){v("enabled")(h.target.checked)}} />
            <span>${o("settings.vzev.enabled")}</span>
          </label>
        </div>
        <p class="settings-scope">${o("settings.vzev.enabled_hint")}</p>
        <p class="settings-scope">${o("settings.vzev.subtitle")}</p>
        <div class="settings-form">
          <label class="field field-block">
            <span class="field-label">${o("settings.vzev.representative_name")} <${ce} text=${o("tooltip.vertreter")} /></span>
            <input class="textfield" type="text" value=${t.representative_name}
              onInput=${function(h){v("representative_name")(h.target.value)}} />
          </label>
          <${H} label=${o("settings.vzev.representative_contact")}
            value=${t.representative_contact} onInput=${v("representative_contact")} />
          <label class="field field-block">
            <span class="field-label">${o("settings.vzev.connection_point_id")} <${ce} text=${o("tooltip.connpoint")} /></span>
            <input class="textfield" type="text" value=${t.connection_point_id}
              onInput=${function(h){v("connection_point_id")(h.target.value)}} />
          </label>
        </div>
        <p class="settings-scope">${o("settings.vzev.counts",{producers:i.producers,members:i.members})}</p>
        <${ut} disabled=${!1} onSave=${d} saving=${s} />
      <//>`:u`<${R} group="vzev"><p class="placeholder-text">${o("settings.loading")}</p><//>`}function zr(e){var t={};return["ssid1","password1","ssid2","password2"].forEach(function(n){!ie(e[n])&&String(e[n]).indexOf(";")>=0&&(t[n]="settings.err.wifi_semicolon")}),t}function jo(e){var t=e.net,n=t.RSSI!==void 0?t.RSSI+"%":t.Signal!==void 0?t.Signal+" dBm":"";return u`
      <div class="wifi-scan-row">
        <div>
          <div class="wifi-scan-ssid">${t.SSId||t.SSId1||"?"}</div>
          <div class="wifi-scan-meta">${[n,t.Channel!==void 0?"Ch "+t.Channel:"",t.Encryption].filter(Boolean).join(" · ")}</div>
        </div>
        <div class="wifi-scan-actions">
          <${Y} small secondary onClick=${function(){e.onUse(1)}}>${o("settings.gplug.scan_use1")}<//>
          <${Y} small secondary onClick=${function(){e.onUse(2)}}>${o("settings.gplug.scan_use2")}<//>
        </div>
      </div>`}function Vo(){var e=x(null),t=e[0],n=e[1],r=x(!1),i=r[0],a=r[1],l=x(!1),s=l[0],c=l[1],v=x(!1),d=v[0],h=v[1],f=x({scanning:!1,networks:null,error:!1}),p=f[0],g=f[1];function y(){a(!1),n(null),F.getWifiConfig().then(function(N){n({ssid1:N.ssid1,password1:"",ssid2:N.ssid2,password2:""})}).catch(function(){a(!0)})}J(function(){y()},[]);function $(N){return function(U){n(function(E){var L=Object.assign({},E);return L[N]=U,L})}}function b(){d||!window.confirm(o("settings.gplug.restart_confirm"))||(h(!0),F.restartDevice().then(function(){le(o("settings.gplug.restart_success"),{type:"info"})}).catch(function(){le(o("settings.gplug.restart_error"),{type:"error"})}).then(function(){h(!1)}))}function m(){s||!t||lt(zr(t))||(c(!0),F.setWifiConfig(t).then(function(){le(o("settings.gplug.wifi_saved"),{type:"info"})}).catch(function(N){le(N&&N.message||o("settings.save_error"),{type:"error"})}).then(function(){c(!1)}))}function w(){g({scanning:!0,networks:null,error:!1}),F.wifiScanStart().catch(function(){});var N=0;function U(){N+=1,F.wifiScanResult().then(function(E){var L=E&&(E.WiFiScan!==void 0?E.WiFiScan:E.WifiScan);if(L&&typeof L=="object"){var C=Object.keys(L).map(function(T){return L[T]});C.sort(function(T,I){return(Number(I.RSSI)||0)-(Number(T.RSSI)||0)}),g({scanning:!1,networks:C,error:!1});return}if(N>=10){g({scanning:!1,networks:null,error:!0});return}setTimeout(U,1e3)}).catch(function(){g({scanning:!1,networks:null,error:!0})})}setTimeout(U,1e3)}function S(N,U){n(function(E){var L=Object.assign({},E);return L["ssid"+N]=U,L})}if(i)return u`
        <${R} group="grid">
          <p class="placeholder-text">${o("settings.load_error")}</p>
          <${Y} secondary small onClick=${y}>${o("settings.retry")}<//>
        <//>`;if(!t)return u`<${R} group="grid"><p class="placeholder-text">${o("settings.loading")}</p><//>`;var z=zr(t);return u`
      <div>
        <${R} group="grid" title=${o("settings.gplug.restart_title")}>
          <p class="settings-scope">${o("settings.gplug.restart_desc")}</p>
          <div class="settings-actions">
            <${Y} danger disabled=${d} onClick=${b}>
              ${o(d?"settings.gplug.restarting":"settings.gplug.restart_button")}
            <//>
          </div>
        <//>

        <${R} group="grid" title=${o("settings.gplug.wifi_title")}>
          <p class="settings-scope">${o("settings.gplug.wifi_note")}</p>
          <div class="settings-subhead">${o("settings.gplug.wifi_primary")}</div>
          <div class="settings-form">
            <${H} label=${o("settings.gplug.ssid1")} value=${t.ssid1} error=${z.ssid1} onInput=${$("ssid1")} />
            <${H} label=${o("settings.gplug.password1")} type="password" value=${t.password1} error=${z.password1}
              placeholder=${o("settings.gplug.password_placeholder")} onInput=${$("password1")} />
          </div>
          <div class="settings-subhead">${o("settings.gplug.wifi_secondary")}</div>
          <div class="settings-form">
            <${H} label=${o("settings.gplug.ssid2")} value=${t.ssid2} error=${z.ssid2} onInput=${$("ssid2")} />
            <${H} label=${o("settings.gplug.password2")} type="password" value=${t.password2} error=${z.password2}
              placeholder=${o("settings.gplug.password_placeholder")} onInput=${$("password2")} />
          </div>

          <div class="settings-subhead">${o("settings.gplug.scan_button")}</div>
          <${Y} secondary small disabled=${p.scanning} onClick=${w}>
            ${p.scanning?o("settings.gplug.scanning"):o("settings.gplug.scan_button")}
          <//>
          ${p.error?u`<p class="settings-warn">${o("settings.gplug.scan_error")}</p>`:null}
          ${p.networks&&p.networks.length===0?u`<p class="placeholder-text">${o("settings.gplug.scan_empty")}</p>`:null}
          ${p.networks&&p.networks.length>0?u`
            <div class="wifi-scan-list">
              ${p.networks.map(function(N,U){return u`<${jo} key=${U} net=${N} onUse=${function(E){S(E,N.SSId)}} />`})}
            </div>`:null}

          <${ut} disabled=${lt(z)} onSave=${m} saving=${s} />
        <//>
      </div>`}function Ko(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}function qo(e){var t=x(null),n=t[0],r=t[1],i=x(!1),a=i[0],l=i[1],s=x(!1),c=s[0],v=s[1];function d(){l(!1),r(null),F.getConfigRaw().then(function(g){r(Ko(g))}).catch(function(){l(!0)})}J(function(){d()},[]);var h=null,f=[];if(n!==null)try{f=Lo(JSON.parse(n))}catch(g){h=g.message}function p(){if(!(c||h)){var g;try{g=JSON.parse(n)}catch{return}v(!0),F.postConfig(g).then(function(){le(o("settings.saved"),{type:"info"}),e.onSaved&&e.onSaved(),d()}).catch(function(y){le(y&&y.message||o("settings.save_error"),{type:"error"})}).then(function(){v(!1)})}}return a?u`
        <${R} group="grid">
          <p class="placeholder-text">${o("settings.load_error")}</p>
          <${Y} secondary small onClick=${d}>${o("settings.retry")}<//>
        <//>`:n===null?u`<${R} group="grid"><p class="placeholder-text">${o("settings.loading")}</p><//>`:u`
      <${R} group="grid">
        <p class="settings-scope">${o("settings.pro.subtitle")}</p>
        <textarea class="settings-editor" spellcheck="false" autocapitalize="off"
          autocomplete="off" autocorrect="off"
          value=${n} onInput=${function(g){r(g.target.value)}}></textarea>
        ${h?u`<p class="settings-warn">${o("settings.pro.invalid_json",{msg:h})}</p>`:null}
        ${f.length?u`
          <div class="settings-warn">
            <strong>${o("settings.pro.warnings_title")}</strong>
            <ul class="settings-warn-list">
              ${f.map(function(g,y){return u`<li key=${y}><code>${g.path||"/"}</code> — ${o(g.key)}</li>`})}
            </ul>
            <span>${o("settings.pro.warn_hint")}</span>
          </div>`:null}
        <div class="settings-actions">
          <${Y} secondary disabled=${c} onClick=${d}>${o("settings.pro.reload")}<//>
          <${Y} disabled=${c||!!h} onClick=${p}>
            ${o(c?"settings.saving":"settings.save")}
          <//>
        </div>
      <//>`}function Yo(){return{id:"",friendlyName:"",loadType:vn[0],currentPower:"",priority:1,integration:"simulator",url:""}}function Go(){return{id:"",friendlyName:"",productionType:Ot[0],dimension:"W",integration:"simulator",url:""}}function Zo(e){var t=e.params&&e.params.tab||"site",n=xo[t]||"site",r=x(null),i=r[0],a=r[1],l=x(null),s=l[0],c=l[1],v=x(!1),d=v[0],h=v[1],f=x(!1),p=f[0],g=f[1],y=x({loads:[],productions:[],grid:[]}),$=y[0],b=y[1];function m(_){return(Array.isArray(_)?_:[]).map(function(M){return String(M&&M.id)}).filter(function(M){return!ie(M)})}function w(){c(null),F.getConfig().then(function(_){a(S(_)),g(!ie(_&&_.id)),b({loads:m(_&&_.loads),productions:m(_&&_.productions),grid:m(_&&_.grid)})}).catch(function(){c(!0),a(null)})}J(function(){w()},[]);function S(_){_=_||{};var M=Object.assign({},_);return M.loads=Array.isArray(_.loads)?_.loads:[],M.productions=Array.isArray(_.productions)?_.productions:[],M.grid=Array.isArray(_.grid)?_.grid:[],M.tariffs=Object.assign({},To,_.tariffs||{}),M}function z(_,M){a(function(W){var D=Object.assign({},W);return D[_]=M,D})}function N(_,M){a(function(W){var D=Object.assign({},W);return D.tariffs=Object.assign({},W.tariffs),D.tariffs[_]=M,D})}function U(_){a(function(M){var W=Object.assign({},M);return W.tariffs=Object.assign({},M.tariffs),W.tariffs.ht_windows=_,W})}function E(_,M){a(function(W){var D=Object.assign({},W);return D[_]=M,D})}function L(){d||(h(!0),F.postConfig(C(i)).then(function(){le(o("settings.saved"),{type:"info"}),g(!0),w()}).catch(function(_){le(_&&_.message||o("settings.save_error"),{type:"error"})}).then(function(){h(!1)}))}function C(_){var M=Object.assign({},_);return M.loads=_.loads.map(function(W){var D=Object.assign({},W);return D.currentPower!==""&&D.currentPower!==void 0&&(D.currentPower=Number(D.currentPower)),D.priority!==""&&D.priority!==void 0&&(D.priority=Number(D.priority)),D}),M.tariffs=Object.assign({},_.tariffs),wi.forEach(function(W){M.tariffs[W]=Number(_.tariffs[W])}),_.tariffs.co2_g_kwh!==void 0&&_.tariffs.co2_g_kwh!==""&&(M.tariffs.co2_g_kwh=Number(_.tariffs.co2_g_kwh)),["grid_import_ht_chf_kwh","grid_import_nt_chf_kwh"].forEach(function(W){ie(_.tariffs[W])?delete M.tariffs[W]:M.tariffs[W]=Number(_.tariffs[W])}),Array.isArray(_.tariffs.ht_windows)&&(_.tariffs.ht_windows.length===0?delete M.tariffs.ht_windows:M.tariffs.ht_windows=_.tariffs.ht_windows.map(function(W){return{days:W.days,from:Number(W.from),to:Number(W.to)}})),M}function T(_){!_||ie(_.id)||F.setLoadState(_.id,"INACTIVE").catch(function(){})}function I(_){Me.navigate("/einstellungen/"+zo[_])}var B=ko.map(function(_){return u`
        <button key=${_} type="button"
          class=${"pill"+(_===n?" pill-active":"")}
          onClick=${function(){I(_)}}>${o(Co[_])}</button>`}),A;return s?A=u`
        <${R}>
          <p class="placeholder-text">${o("settings.load_error")}</p>
          <${Y} secondary small onClick=${w}>${o("settings.retry")}<//>
        <//>`:i?n==="site"?A=u`<${Fo} cfg=${i} patch=${z} idLocked=${p}
        onSave=${L} saving=${d} />`:n==="tariffs"?A=u`<${Uo} tariffs=${i.tariffs} patch=${N}
        setWindows=${U} onSave=${L} saving=${d} />`:n==="vzev"?A=u`<${Ho} />`:n==="gplug"?A=u`<${Vo} />`:n==="pro"?A=u`<${qo} onSaved=${w} />`:n==="loads"?A=u`<${Xt} group="loads"
        items=${i.loads} onChange=${function(_){E("loads",_)}}
        listTitle=${o("settings.tab.loads")}
        labelFn=${function(_){return _.friendlyName||_.id||o("settings.new_entry")}}
        blank=${Yo} confirmKey="settings.confirm_delete_load"
        persistedIds=${$.loads}
        onDelete=${T}
        validate=${ki} Detail=${Wo}
        onSave=${L} saving=${d} />`:n==="productions"?A=u`<${Xt} group="production"
        items=${i.productions} onChange=${function(_){E("productions",_)}}
        listTitle=${o("settings.tab.productions")}
        labelFn=${function(_){return _.friendlyName||_.id||o("settings.new_entry")}}
        blank=${Go} confirmKey="settings.confirm_delete_production"
        persistedIds=${$.productions}
        validate=${function(_,M){return xi(_,M)}} Detail=${Ro}
        onSave=${L} saving=${d} />`:n==="grid"&&(A=u`<${Xt} group="grid" fixedList
        items=${i.grid} onChange=${function(_){E("grid",_)}}
        listTitle=${o("settings.tab.grid")}
        labelFn=${function(_){return _.id==="to"?o("settings.grid.to"):o("settings.grid.from")}}
        blank=${function(){return{id:"from",dimension:"W",integration:"simulator",url:""}}}
        confirmKey="settings.confirm_delete_load"
        persistedIds=${$.grid}
        validate=${function(_){return zi(_)}} Detail=${Do}
        onSave=${L} saving=${d} />`):A=u`<${R}><p class="placeholder-text">${o("settings.loading")}</p><//>`,u`
      <div>
        <${Ne} title=${o("page.settings")} />
        <div class="pill-bar">${B}</div>
        ${A}
      </div>`}var Qo=["https://gplug-ch.github.io/gplug-cdn/v1.0.11/lang.json"];function Xo(){var e=Math.floor(Date.now()/1e3),t=[e-900,e];function n(s,c,v,d){for(var h=[],f=0;f<=90;f++){var p=e-900+f*10,g=f>=v&&f<=d?null:Math.max(0,s+c*Math.sin(f/9)+c*.4*Math.sin(f/2.3));h.push({t:p,y:g})}return h}for(var r=[],i=0;i<12;i++)r.push({t:e-12*900+i*900,y:Math.round((Math.sin(i/2)*.6-.15)*100)/100});for(var a=[],l=0;l<23;l++)a.push({id:l,ts:k.time(e-l*900,"15m"),imp:k.num(Math.round(Math.random()*0+l*7)/100,2),chf:k.chf((l%3===0?-1:1)*l*.19,!0)});return u`
    <div>
      <${Ne} title=${o("page.demo")} subtitle="Komponenten-Galerie (dev)"
        actions=${u`<${Y} onClick=${function(){le("Toast!",{type:"info"})}}>Toast<//>`} />

      <${R} group="grid" title="LineChart" tooltip=${o("tooltip.consumption")}
        value=${k.w(1396)} valueColor="var(--c-consumption)">
        <${st} height=${200} yUnit="W" xUnit="h" timeWindow=${t}
          yFormat=${k.w}
          series=${[{points:n(900,420,30,36),color:"var(--c-consumption)",label:"Verbrauch"},{points:n(600,500,-1,-1),color:"var(--c-production)",label:"Erzeugung"}]} />
      <//>

      <${R} group="vzev" title="BarChart" subtitle="0-Achse, signierte Werte"
        value=${k.chf(12.4,!0)} valueColor="var(--c-vzev)">
        <${_n} height=${200} yUnit="CHF" xUnit="t" yFormat=${function(s){return k.chf(s,!0)}}
          points=${r.map(function(s){return{t:s.t,y:s.y,color:s.y<0?"var(--c-import)":"var(--c-vzev)"}})} />
      <//>

      <${R} group="loads" title="Badges & Buttons">
        <div class="demo-row">
          <${bt} state="active" />
          <${bt} state="waiting" />
          <${bt} state="inactive" />
        </div>
        <div class="demo-row">
          <${Y}>Speichern<//>
          <${Y} secondary>Abbrechen<//>
          <${Y} danger>Löschen<//>
          <${Y} disabled>Deaktiviert<//>
        </div>
        <div class="demo-row demo-fields">
          <${wt} label="Anzeige-Name" value="Familie Huber" />
          <${At} label="Typ" value="P" options=${[{value:"P",label:"Produzent"},{value:"C",label:"Konsument"}]} />
        </div>
      <//>

      <${R} group="production" title="DataTable">
        <${aa} pageSize=${10}
          columns=${[{key:"ts",label:"Zeitpunkt"},{key:"imp",label:"Netzbezug",unit:"[kWh]",align:"right"},{key:"chf",label:"Saldo",unit:"[CHF]",align:"right",render:function(s){var c=s.chf.indexOf("−")===0;return u`<span class=${c?"val-neg":"val-pos"}>${s.chf}</span>`}}]}
          rows=${a} />
      <//>
    </div>`}function Jo(){return[{path:"/",component:ol},{path:"/verlauf",component:yl},{path:"/zaehler",component:Ql},{path:"/vzev/mitglied/:id?",component:co},{path:"/vzev/abrechnung",component:wo},{path:"/vzev",component:oo},{path:"/einstellungen/:tab?",component:Zo},{path:"/demo",component:Xo}]}function Cr(){var e=document.getElementById("app"),t=Qo;Ki.load(t).catch(function(){}).then(function(){Di(u`<${Ea} routes=${Jo()} />`,e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Cr):Cr();
