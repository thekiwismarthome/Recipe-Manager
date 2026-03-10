/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new n(r,e,i)},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!o(e,t),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const a=r?.call(this);n?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of r){const r=document.createElement("style"),n=e.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=r;const a=n.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){const a=this.constructor;if(!1===r&&(n=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??_)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,g?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,k=e=>e,$=w.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+z,E=`<${C}>`,T=document,I=()=>T.createComment(""),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,F="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,L=/>/g,B=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,N=/"/g,j=/^(?:script|style|textarea|title)$/i,U=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Z=new WeakMap,q=T.createTreeWalker(T,129);function V(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,r=[];let n,a=2===t?"<svg>":3===t?"<math>":"",s=D;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===D?"!--"===l[1]?s=P:void 0!==l[1]?s=L:void 0!==l[2]?(j.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=B):void 0!==l[3]&&(s=B):s===B?">"===l[0]?(s=n??D,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?B:'"'===l[3]?N:M):s===N||s===M?s=B:s===P||s===L?s=D:(s=B,n=void 0);const p=s===B&&e[t+1].startsWith("/>")?" ":"";a+=s===D?i+E:c>=0?(r.push(o),i.slice(0,c)+A+i.slice(c)+z+p):i+z+(-2===c?t:p)}return[V(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class K{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const s=e.length-1,o=this.parts,[l,c]=G(e,t);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=q.nextNode())&&o.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(A)){const t=c[a++],i=r.getAttribute(e).split(z),s=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?ee:"?"===s[1]?te:"@"===s[1]?ie:J}),r.removeAttribute(e)}else e.startsWith(z)&&(o.push({type:6,index:n}),r.removeAttribute(e));if(j.test(r.tagName)){const e=r.textContent.split(z),t=e.length-1;if(t>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],I()),q.nextNode(),o.push({type:2,index:++n});r.append(e[t],I())}}}else if(8===r.nodeType)if(r.data===C)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(z,e+1));)o.push({type:7,index:n}),e+=z.length-1}n++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,r){if(t===W)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const a=R(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,r)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??T).importNode(t,!0);q.currentNode=r;let n=q.nextNode(),a=0,s=0,o=i[0];for(;void 0!==o;){if(a===o.index){let t;2===o.type?t=new Y(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new re(n,this,e)),this._$AV.push(t),o=i[++s]}a!==o?.index&&(n=q.nextNode(),a++)}return q.currentNode=T,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),R(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new X(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new K(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Y(this.O(I()),this.O(I()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(void 0===n)e=Q(this,e,t,0),a=!R(e)||e!==this._$AH&&e!==W,a&&(this._$AH=e);else{const r=e;let s,o;for(e=n[0],s=0;s<n.length-1;s++)o=Q(this,r[i+s],t,s),o===W&&(o=this._$AH[s]),a||=!R(o)||o!==this._$AH[s],o===H?e=H:e!==H&&(e+=(o??"")+n[s+1]),this._$AH[s]=o}a&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}class te extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}}class ie extends J{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??H)===W)return;const i=this._$AH,r=e===H&&i!==H||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const ne=w.litHtmlPolyfillSupport;ne?.(K,Y),(w.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class se extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=i?.renderBefore??null;r._$litPart$=n=new Y(t.insertBefore(I(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}se._$litElement$=!0,se.finalized=!0,ae.litElementHydrateSupport?.({LitElement:se});const oe=ae.litElementPolyfillSupport;oe?.({LitElement:se}),(ae.litElementVersions??=[]).push("4.2.2");const le=/^[½¼¾⅓⅔⅛⅜⅝⅞\d][\d.,/½¼¾⅓⅔⅛⅜⅝⅞\s]*\s*(?:tsp|tbsp|tablespoons?|teaspoons?|cups?|oz|lbs?|g|kg|ml|cl|dl|L|(?:milli|centi|deci)?lit(?:re|er)s?|kilo(?:gramme|gram)s?|(?:gramme|gram)s?|pints?|quarts?|gallons?|fl\.?\s*oz|cans?|bunches?|heads?|cloves?|slices?|pieces?|sheets?|pinch(?:es)?|dash(?:es)?|handfuls?|sprigs?|stalks?)\s*/i;function ce(e){if(e.amount||e.unit)return e.name;return e.name.replace(le,"").trim()||e.name}function de(e,t,i){return`[RM] ${e} — ${function(e,t){return e.amount||e.unit?[e.amount,e.unit,t].filter(Boolean).join(" "):e.name}(t,i)}`}function pe(e){if(!e)return 1;const t={"½":.5,"¼":.25,"¾":.75,"⅓":1/3,"⅔":2/3,"⅛":.125,"⅜":.375,"⅝":.625,"⅞":.875};let i=String(e).trim();for(const[e,r]of Object.entries(t))i=i.replace(e,String(r));const r=i.match(/^(\d+)\s+(\d+)\/(\d+)$/);if(r)return parseInt(r[1])+parseInt(r[2])/parseInt(r[3]);const n=i.match(/^(\d+)\/(\d+)$/);return n?parseInt(n[1])/parseInt(n[2]):parseFloat(i)||1}class he{constructor(e){this.hass=e}subscribe(e){return this.hass.connection.subscribeMessage(e,{type:"recipe_manager/subscribe"})}async getAllRecipes(){return this.hass.callWS({type:"recipe_manager/recipes/get_all"})}async getRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/get",recipe_id:e})}async scrapeRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/scrape",url:e})}async addRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/add",...e})}async updateRecipe(e,t){return this.hass.callWS({type:"recipe_manager/recipes/update",recipe_id:e,...t})}async deleteRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/delete",recipe_id:e})}async toggleFavourite(e){return this.hass.callWS({type:"recipe_manager/recipes/toggle_favourite",recipe_id:e})}async downloadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/download_image",recipe_id:e,image_url:t})}async getTags(){return this.hass.callWS({type:"recipe_manager/tags/get_all"})}async getMealPlan(e){const t={type:"recipe_manager/meal_plan/get"};return e&&(t.week_start=e),this.hass.callWS(t)}async addToMealPlan(e,t,i,r=1,n=null){const a={type:"recipe_manager/meal_plan/add",recipe_id:e,date:t,meal_type:i,servings:r};return n&&(a.notes=n),this.hass.callWS(a)}async removeFromMealPlan(e){return this.hass.callWS({type:"recipe_manager/meal_plan/remove",entry_id:e})}async clearMealPlanWeek(e){return this.hass.callWS({type:"recipe_manager/meal_plan/clear",week_start:e})}async addIngredientsToShoppingList(e,t,i=null){let r=[];try{const t=await this.getSlmItems(e);r=(t?.items??[]).filter(e=>!e.checked)}catch{}const n=[];for(const a of t)try{const t=ce(a),s=i?de(i,a,t):null,o=r.find(e=>e.name.toLowerCase().trim()===t.toLowerCase().trim());if(o&&s){const e=o.note?`${o.note}\n${s}`:s;await this.hass.callWS({type:"shopping_list_manager/items/update",item_id:o.id,note:e}),n.push({success:!0,name:t,merged:!0})}else{const i={type:"shopping_list_manager/items/add",list_id:e,name:t,quantity:pe(a.amount),unit:a.unit||null};s&&(i.note=s),await this.hass.callWS(i),n.push({success:!0,name:t})}}catch(e){n.push({success:!1,name:a.name,error:e.message})}return n}async updateSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/update",item_id:e,...t})}async getShoppingLists(){return this.hass.callWS({type:"shopping_list_manager/lists/get_all"})}async getSlmItems(e){return this.hass.callWS({type:"shopping_list_manager/items/get",list_id:e})}async checkSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/check",item_id:e,checked:t})}async clearSlmChecked(e){return this.hass.callWS({type:"shopping_list_manager/items/clear_checked",list_id:e})}async deleteSlmItem(e){return this.hass.callWS({type:"shopping_list_manager/items/delete",item_id:e})}async addSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/add",list_id:e,...t})}async getSlmCategories(){return this.hass.callWS({type:"shopping_list_manager/categories/get_all"})}async getSlmProductsByIds(e){return this.hass.callWS({type:"shopping_list_manager/products/get_by_ids",product_ids:e})}async getSlmProductSuggestions(e=20){return this.hass.callWS({type:"shopping_list_manager/products/suggestions",limit:e})}async importRecipeKeeper(e){return this.hass.callWS({type:"recipe_manager/import/recipe_keeper",html_content:e})}async uploadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/upload_image",recipe_id:e,image_data:t})}}class ue extends se{static properties={recipes:{type:Array},allRecipes:{type:Array},tags:{type:Array},searchQuery:{type:String},activeTag:{type:String},columns:{type:Number},showFavourites:{type:Boolean},hideSidebar:{type:Boolean},scrollPos:{type:Number},recentRecipes:{type:Array},recentCount:{type:Number},_filterMode:{type:String},_starFilter:{type:Number},_sortByRating:{type:Boolean},_showRatingMenu:{type:Boolean},_selectedCourses:{type:Object},_selectedCategories:{type:Object},_selectedCollections:{type:Object}};constructor(){super(),this.recipes=[],this.allRecipes=[],this.tags=[],this.searchQuery="",this.activeTag=null,this.columns=3,this.showFavourites=!0,this.hideSidebar=!1,this.scrollPos=0,this.recentRecipes=[],this.recentCount=12,this._filterMode="all",this._starFilter=0,this._sortByRating=!1,this._showRatingMenu=!1,this._selectedCourses=new Set,this._selectedCategories=new Set,this._selectedCollections=new Set,this._lastScrollPos=0,this._hasRestoredScroll=!1}_toggleChip(e,t){const i="courses"===e?"_selectedCourses":"categories"===e?"_selectedCategories":"_selectedCollections",r=new Set(this[i]);r.has(t)?r.delete(t):r.add(t),this[i]=r}updated(e){e.has("scrollPos")&&(this._hasRestoredScroll=!1),null==this.scrollPos||this._hasRestoredScroll||(this._hasRestoredScroll=!0,this.updateComplete.then(()=>{requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(".grid-scroll");e&&(e.scrollTop=this.scrollPos)})}))}_handleSearchInput(e){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}_handleClearSearch(){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:""},bubbles:!0,composed:!0}))}_handleTagClick(e){this.dispatchEvent(new CustomEvent("rm-tag-filter",{detail:{tag:e},bubbles:!0,composed:!0}))}_handleOpenRecipe(e){this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:e},bubbles:!0,composed:!0}))}_handleToggleFavourite(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:t.id},bubbles:!0,composed:!0}))}_recipeMatchesTag(e,t){return!t||(e.tags?.includes(t)||e.courses?.includes(t)||e.categories?.includes(t)||e.collections?.includes(t))}_recipeMatchesSearch(e,t){const i=(t||"").trim().toLowerCase();return!i||(e.name?.toLowerCase().includes(i)||e.description?.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i)))}_formatTime(e){if(!e)return null;if(e<60)return`${e}m`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_getFilteredList(){const e=this._selectedCourses.size>0,t=this._selectedCategories.size>0,i=this._selectedCollections.size>0,r=e||t||i;let n;switch(n=r?this.allRecipes.filter(r=>{const n=!e||(r.courses||[]).some(e=>this._selectedCourses.has(e)),a=!t||(r.categories||[]).some(e=>this._selectedCategories.has(e)),s=!i||(r.collections||[]).some(e=>this._selectedCollections.has(e));return n&&a&&s&&this._recipeMatchesSearch(r,this.searchQuery)}):this.recipes,this._filterMode){case"favourites":n=this.allRecipes.filter(e=>e.is_favourite).filter(e=>!r||n.some(t=>t.id===e.id));break;case"recent":n=this.recentRecipes.slice(0,this.recentCount).filter(e=>!r||n.some(t=>t.id===e.id))}return this._starFilter>0&&(n=n.filter(e=>(e.rating||0)>=this._starFilter)),this._sortByRating&&(n=[...n].sort((e,t)=>(t.rating||0)-(e.rating||0))),n}get _allCourses(){const e=new Set;return this.allRecipes.forEach(t=>(t.courses||[]).forEach(t=>e.add(t))),[...e].sort()}get _coursecounts(){const e={};return this.allRecipes.forEach(t=>(t.courses||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _allCategories(){const e=new Set;return this.allRecipes.forEach(t=>(t.categories||[]).forEach(t=>e.add(t))),[...e].sort()}get _categorycounts(){const e={};return this.allRecipes.forEach(t=>(t.categories||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _allCollections(){const e=new Set;return this.allRecipes.forEach(t=>(t.collections||[]).forEach(t=>e.add(t))),[...e].sort()}get _collectioncounts(){const e={};return this.allRecipes.forEach(t=>(t.collections||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}_renderStars(e){const t=e||0;return U`
      <div class="card-stars">
        ${[1,2,3,4,5].map(e=>U`<span class="card-star ${e<=t?"filled":""}">${e<=t?"★":"☆"}</span>`)}
      </div>
    `}_renderRecipeCard(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return U`
      <div class="recipe-card" @click=${()=>this._handleOpenRecipe(e)}>
        <div class="recipe-thumb">
          ${e.image_url?U`
            <img src="${e.image_url}" alt="${e.name}" loading="lazy" />
          `:U`
            <div class="recipe-thumb-placeholder">
              <ha-icon icon="mdi:food"></ha-icon>
            </div>
          `}
          <button
            class="fav-btn ${e.is_favourite?"active":""}"
            @click=${t=>this._handleToggleFavourite(t,e)}
            title="${e.is_favourite?"Remove from favourites":"Add to favourites"}"
          >
            <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
          </button>
        </div>
        <div class="recipe-info">
          <h3 class="recipe-name">${e.name}</h3>
          ${this._renderStars(e.rating)}
          <div class="recipe-meta">
            ${t?U`
              <span class="meta-chip">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._formatTime(t)}
              </span>
            `:""}
            ${e.servings?U`
              <span class="meta-chip">
                <ha-icon icon="mdi:account-group-outline"></ha-icon>
                ${e.servings}
              </span>
            `:""}
            ${e.tags?.length?U`
              <span class="meta-chip tag-chip">${e.tags[0]}</span>
            `:""}
          </div>
        </div>
      </div>
    `}_renderRatingMenu(){return U`
      <div class="rating-menu" @click=${e=>e.stopPropagation()}>
        <div class="rating-menu-section">Filter by rating</div>
        ${[0,1,2,3,4,5].map(e=>U`
          <button class="rating-menu-item ${this._starFilter===e?"active":""}"
            @click=${()=>{this._starFilter=e,this._showRatingMenu=!1}}>
            ${0===e?"All ratings":U`${"★".repeat(e)}${"☆".repeat(5-e)} ${e}+`}
          </button>
        `)}
        <div class="rating-menu-section" style="margin-top:6px">Sort</div>
        <button class="rating-menu-item ${this._sortByRating?"active":""}"
          @click=${()=>{this._sortByRating=!this._sortByRating,this._showRatingMenu=!1}}>
          ${this._sortByRating?"✓ ":""}Sort by rating
        </button>
      </div>
    `}render(){const e=this._getFilteredList(),t="all"===this._filterMode&&this.showFavourites&&!this.activeTag&&!this.searchQuery&&!this._starFilter&&!this._sortByRating,i=t?e.filter(e=>e.is_favourite):[],r=t&&i.length?e.filter(e=>!e.is_favourite):e,n=`grid-template-columns: var(--rm-grid-columns, repeat(${this.columns}, minmax(0, 1fr)));`,a=this._starFilter>0||this._sortByRating;return U`
      <div class="grid-container" @click=${()=>{this._showRatingMenu&&(this._showRatingMenu=!1)}}>
        <!-- Search bar — only shown on narrow (sidebar-less) view -->
        ${this.hideSidebar?"":U`
          <div class="search-row">
            <div class="search-wrap">
              <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
              <input
                type="text"
                class="search-input"
                placeholder="Search recipes…"
                .value=${this.searchQuery}
                @input=${this._handleSearchInput}
              />
              ${this.searchQuery?U`
                <button class="clear-btn" @click=${this._handleClearSearch}>
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              `:""}
            </div>
          </div>
        `}

        <!-- Filter tabs + rating filter button (wide view) -->
        ${this.hideSidebar?U`
          <div class="filter-tabs-row">
            <div class="filter-tabs">
              ${[["all","mdi:view-grid","All",null],["courses","mdi:silverware-fork-knife","Courses","_selectedCourses"],["categories","mdi:tag-multiple-outline","Categories","_selectedCategories"],["collections","mdi:folder-multiple-outline","Collections","_selectedCollections"],["favourites","mdi:heart-outline","Favourites",null],["recent","mdi:history","Recent",null]].map(([e,t,i,r])=>U`
                <button
                  class="filter-tab ${this._filterMode===e?"active":""}"
                  @click=${()=>{this._filterMode=e,"all"===e&&(this._selectedCourses=new Set,this._selectedCategories=new Set,this._selectedCollections=new Set)}}
                >
                  <ha-icon icon="${t}"></ha-icon>
                  <span>${i}</span>
                  ${r&&this[r]?.size>0?U`<span class="tab-badge"></span>`:""}
                </button>
              `)}
            </div>
            <!-- Rating filter button -->
            <div class="rating-filter-wrap">
              <button
                class="rating-filter-btn ${a?"active":""}"
                @click=${e=>{e.stopPropagation(),this._showRatingMenu=!this._showRatingMenu}}
                title="Filter/sort by rating"
              >
                <ha-icon icon="mdi:filter-menu-outline"></ha-icon>
                ${a?U`<span class="rating-filter-badge"></span>`:""}
              </button>
              ${this._showRatingMenu?this._renderRatingMenu():""}
            </div>
          </div>
        `:""}

        <!-- Sub-filter chips for Courses / Categories / Collections (multi-select) -->
        ${this.hideSidebar&&"courses"===this._filterMode&&this._allCourses.length?U`
          <div class="sub-filter-row">
            <button class="sub-chip ${this._selectedCourses.size?"":"active"}"
              @click=${()=>{this._selectedCourses=new Set}}>All</button>
            ${this._allCourses.map(e=>U`
              <button
                class="sub-chip ${this._selectedCourses.has(e)?"active":""}"
                @click=${()=>this._toggleChip("courses",e)}
              >${e}<span class="sub-chip-count">${this._coursecounts[e]||0}</span></button>
            `)}
          </div>
        `:""}
        ${this.hideSidebar&&"categories"===this._filterMode&&this._allCategories.length?U`
          <div class="sub-filter-row">
            <button class="sub-chip ${this._selectedCategories.size?"":"active"}"
              @click=${()=>{this._selectedCategories=new Set}}>All</button>
            ${this._allCategories.map(e=>U`
              <button
                class="sub-chip ${this._selectedCategories.has(e)?"active":""}"
                @click=${()=>this._toggleChip("categories",e)}
              >${e}<span class="sub-chip-count">${this._categorycounts[e]||0}</span></button>
            `)}
          </div>
        `:""}
        ${this.hideSidebar&&"collections"===this._filterMode&&this._allCollections.length?U`
          <div class="sub-filter-row">
            <button class="sub-chip ${this._selectedCollections.size?"":"active"}"
              @click=${()=>{this._selectedCollections=new Set}}>All</button>
            ${this._allCollections.map(e=>U`
              <button
                class="sub-chip ${this._selectedCollections.has(e)?"active":""}"
                @click=${()=>this._toggleChip("collections",e)}
              >${e}<span class="sub-chip-count">${this._collectioncounts[e]||0}</span></button>
            `)}
          </div>
        `:""}

        <!-- Tag chips (narrow view only) -->
        ${!this.hideSidebar&&this.tags.length?U`
          <div class="tags-row">
            ${this.tags.map(e=>U`
              <button
                class="tag-btn ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}</button>
            `)}
          </div>
        `:""}

        <!-- Active filter hint -->
        ${a?U`
          <div class="active-filter-bar">
            ${this._starFilter>0?U`<span>⭐ ${this._starFilter}+ stars</span>`:""}
            ${this._sortByRating?U`<span>Sorted by rating</span>`:""}
            <button class="clear-filter-btn" @click=${()=>{this._starFilter=0,this._sortByRating=!1}}>
              <ha-icon icon="mdi:close"></ha-icon> Clear
            </button>
          </div>
        `:""}

        <!-- Recipe content -->
        <div class="grid-scroll" @scroll=${e=>{this._lastScrollPos=e.target.scrollTop}}>
          ${0===e.length?U`
            <div class="empty-state">
              <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
              <p>${this.searchQuery||this.activeTag?"No matching recipes":this._starFilter>0?`No recipes with ${this._starFilter}+ stars`:"favourites"===this._filterMode?"No favourites yet — heart a recipe!":"recent"===this._filterMode?"No recently viewed recipes yet.":"No recipes yet — add one!"}</p>
            </div>
          `:U`
            ${t&&i.length?U`
              <div class="section-label">Favourites</div>
              <div class="recipe-grid" style=${n}>
                ${i.map(e=>this._renderRecipeCard(e))}
              </div>
              ${r.length?U`<div class="section-label">All Recipes</div>`:""}
            `:""}

            <div class="recipe-grid" style=${n}>
              ${r.map(e=>this._renderRecipeCard(e))}
            </div>
          `}
        </div>
      </div>
    `}static styles=a`
    :host { display: block; height: 100%; position: relative; }

    .grid-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    /* Search (narrow only) */
    .search-row {
      padding: 10px 14px 6px;
      flex-shrink: 0;
    }
    .search-wrap {
      display: flex;
      align-items: center;
      background: var(--rm-bg-elevated, #2c2c2e);
      border-radius: 10px;
      padding: 0 10px;
      gap: 8px;
    }
    .search-icon { color: var(--rm-text-secondary, #8e8e93); --mdc-icon-size: 18px; }
    .search-input {
      flex: 1; background: none; border: none; outline: none;
      color: var(--rm-text, #e5e5ea); font-size: 14px; padding: 9px 0;
    }
    .search-input::placeholder { color: var(--rm-text-secondary, #8e8e93); }
    .clear-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93); padding: 2px; display: flex; align-items: center;
    }
    .clear-btn ha-icon { --mdc-icon-size: 16px; }

    /* Filter tabs row (wide view) */
    .filter-tabs-row {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 14px 4px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }

    .filter-tabs {
      display: flex;
      gap: 2px;
      flex: 1;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .filter-tabs::-webkit-scrollbar { display: none; }

    .filter-tab {
      display: flex; align-items: center; gap: 5px;
      background: none; border: none; border-radius: 8px;
      padding: 6px 12px; font-size: 13px; font-weight: 500;
      color: var(--rm-text-secondary, #8e8e93);
      cursor: pointer; white-space: nowrap;
      transition: background 0.12s, color 0.12s;
    }
    .filter-tab ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }
    .filter-tab:hover { background: var(--rm-accent-soft); color: var(--rm-text); }
    .filter-tab { position: relative; }
    .tab-badge {
      position: absolute; top: 4px; right: 4px;
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--rm-accent);
    }
    .filter-tab.active {
      background: var(--rm-accent-soft);
      color: var(--rm-accent); font-weight: 600;
    }

    /* Rating filter button */
    .rating-filter-wrap {
      position: relative;
      flex-shrink: 0;
    }
    .rating-filter-btn {
      background: none; border: 1px solid var(--rm-border);
      border-radius: 8px; padding: 6px 10px; cursor: pointer;
      color: var(--rm-text-secondary); display: flex; align-items: center;
      gap: 4px; position: relative; transition: background 0.12s, color 0.12s;
    }
    .rating-filter-btn ha-icon { --mdc-icon-size: 18px; }
    .rating-filter-btn:hover { background: var(--rm-accent-soft); color: var(--rm-text); }
    .rating-filter-btn.active { color: var(--rm-accent); border-color: var(--rm-accent); background: var(--rm-accent-soft); }
    .rating-filter-badge {
      position: absolute; top: 4px; right: 4px;
      width: 7px; height: 7px;
      background: var(--rm-accent); border-radius: 50%;
    }

    .rating-menu {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      background: var(--rm-bg-surface);
      border: 1px solid var(--rm-border);
      border-radius: 10px;
      box-shadow: var(--rm-shadow, 0 4px 12px rgba(0,0,0,0.2));
      min-width: 170px;
      z-index: 50;
      overflow: hidden;
      padding: 4px 0;
    }
    .rating-menu-section {
      font-size: 10px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--rm-text-muted); padding: 8px 14px 4px;
    }
    .rating-menu-item {
      display: block; width: 100%;
      background: none; border: none; text-align: left;
      padding: 8px 14px; font-size: 13px; cursor: pointer;
      color: var(--rm-text-secondary); transition: background 0.12s;
    }
    .rating-menu-item:hover { background: var(--rm-accent-soft); color: var(--rm-text); }
    .rating-menu-item.active { color: var(--rm-accent); font-weight: 600; }

    /* Active filter hint bar */
    .active-filter-bar {
      display: flex; align-items: center; gap: 8px;
      padding: 4px 14px;
      font-size: 12px; color: var(--rm-accent);
      background: var(--rm-accent-soft);
      flex-shrink: 0;
    }
    .clear-filter-btn {
      margin-left: auto; background: none; border: none;
      display: flex; align-items: center; gap: 3px;
      color: var(--rm-text-secondary); font-size: 12px; cursor: pointer;
    }
    .clear-filter-btn ha-icon { --mdc-icon-size: 14px; }

    /* Sub-filter chips */
    .sub-filter-row {
      display: flex; flex-wrap: wrap; gap: 6px; padding: 6px 14px;
      flex-shrink: 0; max-height: 88px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }
    .sub-filter-row::-webkit-scrollbar { width: 4px; }
    .sub-filter-row::-webkit-scrollbar-track { background: transparent; }
    .sub-filter-row::-webkit-scrollbar-thumb { background: var(--rm-border); border-radius: 4px; }
    .sub-chip {
      display: inline-flex; align-items: center; gap: 5px;
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 20px; color: var(--rm-text-secondary);
      font-size: 12px; padding: 4px 8px 4px 12px; cursor: pointer;
      white-space: nowrap; transition: all 0.15s;
    }
    .sub-chip.active {
      background: var(--rm-accent-soft); border-color: var(--rm-accent); color: var(--rm-accent);
    }
    .sub-chip-count {
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--rm-accent); color: #fff;
      border-radius: 10px; font-size: 10px; font-weight: 700;
      padding: 1px 5px; min-width: 16px; line-height: 1.4;
    }

    /* Tags (narrow view) */
    .tags-row {
      display: flex; gap: 6px; padding: 4px 14px 8px;
      overflow-x: auto; flex-shrink: 0; scrollbar-width: none;
    }
    .tags-row::-webkit-scrollbar { display: none; }
    .tag-btn {
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 20px; color: var(--rm-text-secondary);
      font-size: 12px; padding: 4px 10px; cursor: pointer;
      white-space: nowrap; transition: all 0.15s;
    }
    .tag-btn.active {
      background: var(--rm-accent-soft); border-color: var(--rm-accent); color: var(--rm-accent);
    }

    /* Grid scroll area */
    .grid-scroll {
      flex: 1; overflow-y: auto;
      padding: 4px 14px 16px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }

    .section-label {
      font-size: 11px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--rm-text-secondary);
      margin: 8px 0 6px;
    }

    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 12px;
    }

    /* Recipe card */
    .recipe-card {
      background: var(--rm-bg-surface); border-radius: var(--rm-radius, 12px);
      overflow: hidden; cursor: pointer;
      transition: transform 0.15s, box-shadow 0.15s;
      border: 1px solid var(--rm-border);
    }
    .recipe-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--rm-shadow);
    }

    .recipe-thumb {
      position: relative; aspect-ratio: 4/3;
      background: var(--rm-border); overflow: hidden;
    }
    .recipe-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .recipe-thumb-placeholder {
      width: 100%; height: 100%; display: flex;
      align-items: center; justify-content: center;
      color: var(--rm-text-secondary);
    }
    .recipe-thumb-placeholder ha-icon { --mdc-icon-size: 36px; }

    .fav-btn {
      position: absolute; top: 6px; right: 6px;
      background: rgba(0,0,0,0.5); border: none; border-radius: 50%;
      width: 28px; height: 28px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.7); transition: color 0.15s; padding: 0;
    }
    .fav-btn ha-icon { --mdc-icon-size: 16px; }
    .fav-btn.active { color: var(--error-color, #cf6679); }

    .recipe-info { padding: 8px 10px 10px; }
    .recipe-name {
      margin: 0 0 4px; font-size: 14px; font-weight: 600;
      color: var(--rm-text); overflow: hidden; text-overflow: ellipsis;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    }

    /* Star rating on cards */
    .card-stars {
      display: flex; gap: 1px; margin-bottom: 5px;
    }
    .card-star {
      font-size: 14px; line-height: 1;
      color: var(--rm-border, rgba(200,150,0,0.25));
      -webkit-text-stroke: 1px rgba(200,150,0,0.5);
    }
    .card-star.filled {
      color: #f5a623;
      -webkit-text-stroke: 1px #c47f0a;
    }

    .recipe-meta { display: flex; flex-wrap: wrap; gap: 4px; }
    .meta-chip {
      display: inline-flex; align-items: center; gap: 3px;
      font-size: 11px; color: var(--rm-text-secondary);
      background: rgba(128,128,128,0.08); border-radius: 6px; padding: 2px 6px;
    }
    .meta-chip ha-icon { --mdc-icon-size: 12px; }
    .tag-chip { background: var(--rm-accent-soft); color: var(--rm-accent); }

    /* Empty state */
    .empty-state {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; padding: 60px 20px; gap: 12px;
      color: var(--rm-text-secondary); text-align: center;
    }
    .empty-state ha-icon { --mdc-icon-size: 56px; opacity: 0.4; }
    .empty-state p { margin: 0; font-size: 15px; }
  `}try{customElements.define("rm-recipe-grid",ue)}catch{}const me=[{key:"calories",label:"Calories",unit:"kcal",bold:!0},{key:"fat",label:"Total Fat",unit:"g"},{key:"saturated_fat",label:"Saturated Fat",unit:"g",indent:!0},{key:"cholesterol",label:"Cholesterol",unit:"mg"},{key:"sodium",label:"Sodium",unit:"mg"},{key:"carbohydrates",label:"Total Carbohydrate",unit:"g"},{key:"fiber",label:"Dietary Fiber",unit:"g",indent:!0},{key:"sugar",label:"Total Sugars",unit:"g",indent:!0},{key:"protein",label:"Protein",unit:"g"}],fe=/(\d+\s*(?:hours?|hrs?)\s*(?:and\s*)?\d*\s*(?:minutes?|mins?)?|\d+\s*(?:minutes?|mins?|seconds?|secs?|hours?|hrs?))/gi;function ge(e){const t=e.toLowerCase();let i=0;const r=t.match(/(\d+)\s*h(?:ours?|rs?)?/);r&&(i+=3600*parseInt(r[1]));const n=t.match(/(\d+)\s*m(?:in(?:utes?)?)?(?!\s*l)/);n&&(i+=60*parseInt(n[1]));const a=t.match(/(\d+)\s*s(?:ec(?:onds?)?)?/);if(a&&(i+=parseInt(a[1])),!i){const e=t.match(/^(\d+)$/);e&&(i=60*parseInt(e[1]))}return i||0}const be={oz:{factor:28.3495,to:"g",toFull:"g"},lb:{factor:453.592,to:"g",toFull:"g",thresholdKg:500},cup:{factor:250,to:"ml",toFull:"ml"},cups:{factor:250,to:"ml",toFull:"ml"},"fl oz":{factor:29.5735,to:"ml",toFull:"ml"},pt:{factor:473.176,to:"ml",toFull:"ml"},qt:{factor:946.353,to:"ml",toFull:"ml"}};class ve extends se{static properties={recipe:{type:Object},api:{type:Object},shoppingLists:{type:Array},slmAvailable:{type:Boolean},settings:{type:Object},wide:{type:Boolean},_editing:{type:Boolean},_editData:{type:Object},_servingMult:{type:Number},_activeTab:{type:String},_showShoppingPicker:{type:Boolean},_selectedListId:{type:String},_checkedIngredients:{type:Object},_shoppingAdding:{type:Boolean},_shoppingResult:{type:String},_confirmDelete:{type:Boolean},_downloading:{type:Boolean},_photoUrlInput:{type:String},_addingPhotoUrl:{type:Boolean},_metricMode:{type:Boolean},_wakeActive:{type:Boolean},_completedSteps:{type:Object},_editIngInput:{type:String},_editStepInput:{type:String}};constructor(){super(),this.recipe=null,this.api=null,this.shoppingLists=[],this.slmAvailable=!1,this.settings={},this.wide=!1,this._editing=!1,this._editData={},this._servingMult=1,this._activeTab="ingredients",this._showShoppingPicker=!1,this._selectedListId="",this._checkedIngredients=null,this._shoppingAdding=!1,this._shoppingResult=null,this._confirmDelete=!1,this._downloading=!1,this._photoUrlInput="",this._addingPhotoUrl=!1,this._metricMode=!1,this._wakeActive=!1,this._completedSteps=new Set,this._editIngInput="",this._editStepInput="",this._wakeLockSentinel=null,this._wakeLockTimeout=null}disconnectedCallback(){super.disconnectedCallback(),this._releaseWakeLock()}async _requestWakeLock(){if("wakeLock"in navigator)try{this._wakeLockSentinel=await navigator.wakeLock.request("screen"),this._wakeActive=!0;const e=this.settings?.wakeLockDuration??60;this._wakeLockTimeout=setTimeout(()=>this._releaseWakeLock(),6e4*e)}catch(e){console.warn("Wake Lock failed:",e)}}async _releaseWakeLock(){if(this._wakeLockSentinel){try{await this._wakeLockSentinel.release()}catch{}this._wakeLockSentinel=null}this._wakeActive=!1,this._wakeLockTimeout&&(clearTimeout(this._wakeLockTimeout),this._wakeLockTimeout=null)}updated(e){e.has("recipe")&&this.recipe&&(this._servingMult=1,this._editing=!1,this._confirmDelete=!1,this._shoppingResult=null,this._showShoppingPicker=!1,this._checkedIngredients=null,this._photoUrlInput="",this._metricMode=!1,this._completedSteps=new Set),e.has("shoppingLists")&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"")}_formatTime(e){if(!e)return null;if(e<60)return`${e} min`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_scaleAmount(e){if(!e||isNaN(parseFloat(e)))return e;const t=parseFloat(e)*this._servingMult;return Number.isInteger(t)?String(t):t.toFixed(1).replace(/\.0$/,"")}_startEdit(){const e=this.recipe.nutrition||{};this._editData={name:this.recipe.name||"",description:this.recipe.description||"",source_url:this.recipe.source_url||"",servings:this.recipe.servings||"",prep_time:this.recipe.prep_time||"",cook_time:this.recipe.cook_time||"",tags:(this.recipe.tags||[]).join(", "),courses:(this.recipe.courses||[]).join(", "),categories:(this.recipe.categories||[]).join(", "),collections:(this.recipe.collections||[]).join(", "),notes:this.recipe.notes||"",rating:this.recipe.rating||0,ingredients:[...this.recipe.ingredients||[]],instructions:[...this.recipe.instructions||[]],cal:e.calories||"",fat:e.fat||"",satf:e.saturated_fat||"",chol:e.cholesterol||"",sod:e.sodium||"",carb:e.carbohydrates||"",fib:e.fiber||"",sug:e.sugar||"",prot:e.protein||""},this._editing=!0}_cancelEdit(){this._editing=!1,this._editData={}}_handleEditField(e,t){this._editData={...this._editData,[e]:t}}_editAddIngredient(){const e=this._editIngInput.trim();if(!e)return;let t;if(e.startsWith("#"))t={name:e,is_heading:!0};else{const i=e.split(/\s+/);let r="",n="",a="";i.length>=3&&!isNaN(parseFloat(i[0]))?(r=i[0],n=i[1],a=i.slice(2).join(" ")):2!==i.length||isNaN(parseFloat(i[0]))?a=e:(r=i[0],a=i[1]),t={amount:r,unit:n,name:a}}this._editData={...this._editData,ingredients:[...this._editData.ingredients||[],t]},this._editIngInput=""}_editRemoveIngredient(e){this._editData={...this._editData,ingredients:(this._editData.ingredients||[]).filter((t,i)=>i!==e)}}_editAddStep(e){e.trim()&&(this._editData={...this._editData,instructions:[...this._editData.instructions||[],e.trim()]})}_editRemoveStep(e){this._editData={...this._editData,instructions:(this._editData.instructions||[]).filter((t,i)=>i!==e)}}async _saveEdit(){const e=this._editData,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={},r={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"};let n=!1;for(const[t,a]of Object.entries(r))""!==e[t]&&null!=e[t]&&(i[a]=e[t],n=!0);const a={name:e.name,description:e.description,source_url:e.source_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),notes:e.notes,rating:e.rating||null,ingredients:e.ingredients||[],instructions:e.instructions||[],nutrition:n?i:null};this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:a},bubbles:!0,composed:!0})),this._editing=!1}_handleToggleFav(){this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleDownloadImage(){if(this.recipe.image_url){this._downloading=!0;try{const e=await this.api.downloadRecipeImage(this.recipe.id,this.recipe.image_url);e?.local_url&&this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e.local_url}},bubbles:!0,composed:!0}))}catch(e){console.warn("Image download failed:",e)}finally{this._downloading=!1}}}_handleDeleteRecipe(){if(!this._confirmDelete)return this._confirmDelete=!0,void setTimeout(()=>{this._confirmDelete=!1},3e3);this.dispatchEvent(new CustomEvent("rm-delete-recipe",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}_openShoppingPicker(){this._checkedIngredients=new Set,this._showShoppingPicker=!0}_toggleIngredient(e){const t=new Set(this._checkedIngredients);t.has(e)?t.delete(e):t.add(e),this._checkedIngredients=t}_selectAllIngredients(){const e=this.recipe?.ingredients?.length??0;this._checkedIngredients=new Set([...Array(e).keys()])}_clearAllIngredients(){this._checkedIngredients=new Set}async _handleAddToShopping(){const e=this._checkedIngredients;if(!e?.size)return;const t=(this.recipe.ingredients||[]).filter((t,i)=>e.has(i)).map(e=>({...e,amount:this._scaleAmount(e.amount)}));this._shoppingAdding=!0,this._shoppingResult=null,this.dispatchEvent(new CustomEvent("rm-add-to-shopping",{detail:{ingredients:t,listId:this._selectedListId||null,recipeName:this.recipe.name},bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,600)),this._shoppingAdding=!1,this._shoppingResult="success",this._showShoppingPicker=!1,setTimeout(()=>{this._shoppingResult=null},2500)}_handleQuickRate(e){const t=this.recipe.rating===e?null:e;this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{rating:t}},bubbles:!0,composed:!0}))}_handleShowPlanner(){this.dispatchEvent(new CustomEvent("rm-show-planner",{bubbles:!0,composed:!0}))}_fireTimer(e,t){this.dispatchEvent(new CustomEvent("rm-start-timer",{detail:{seconds:e,label:t},bubbles:!0,composed:!0}))}async _handleAddPhotoUrl(){const e=this._photoUrlInput.trim();if(e){this._addingPhotoUrl=!0;try{const t=this.recipe.photos||[],i={photos:[...t,e]};this.recipe.image_url||(i.image_url=e),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0})),this._photoUrlInput=""}finally{this._addingPhotoUrl=!1}}}_handleCameraCapture(e){const t=e.target.files?.[0];if(!t)return;const i=new FileReader;i.onload=async e=>{const t=e.target.result.split(",")[1];try{const e=await this.api.uploadRecipeImage(this.recipe.id,t);if(e?.image_url||e?.local_url){const t=e.image_url||e.local_url,i={photos:[...this.recipe.photos||[],t]};this.recipe.image_url||(i.image_url=t),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0}))}}catch(e){console.warn("Camera upload failed:",e)}},i.readAsDataURL(t)}_setMainPhoto(e){this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e}},bubbles:!0,composed:!0}))}_removePhoto(e){const t=(this.recipe.photos||[]).filter(t=>t!==e),i={photos:t};this.recipe.image_url===e&&(i.image_url=t[0]||null),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0}))}_renderChipGroup(e,t,i){return t?.length?U`
      <div class="chip-group">
        <span class="chip-group-label">${e}:</span>
        ${t.map(e=>U`<span class="chip ${i}">${e}</span>`)}
      </div>
    `:""}_renderChipGroups(e){const t=e.courses||[],i=e.categories||[],r=e.collections||[],n=e.tags||[];return t.length||i.length||r.length||n.length?U`
      <div class="chips-area">
        ${t.map(e=>U`<span class="chip chip-course">${e}</span>`)}
        ${i.map(e=>U`<span class="chip chip-category">${e}</span>`)}
        ${r.map(e=>U`<span class="chip chip-collection">${e}</span>`)}
        ${n.map(e=>U`<span class="chip chip-tag">${e}</span>`)}
      </div>
    `:""}_renderMetaRow(e){if(!(e.servings||e.prep_time||e.cook_time||e.total_time))return"";const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null,i=(e.prep_time||0)+(e.cook_time||0),r=t&&t!==i;return U`
      <div class="meta-chips">
        ${e.servings?U`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:silverware-fork-knife"></ha-icon>
            ${e.servings_text||e.servings}
          </span>
        `:""}
        ${e.prep_time?U`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:pencil-outline"></ha-icon>
            ${this._formatTime(e.prep_time)}
          </span>
        `:""}
        ${e.cook_time?U`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
            ${this._formatTime(e.cook_time)}
          </span>
        `:""}
        ${r?U`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            ${this._formatTime(t)}
          </span>
        `:""}
      </div>
    `}_renderQuickRating(e){const t=e.rating||0;return U`
      <div class="quick-rating">
        ${[1,2,3,4,5].map(e=>U`
          <span class="qr-star ${e<=t?"filled":""}"
            @click=${()=>this._handleQuickRate(e)}>★</span>
        `)}
      </div>
    `}_renderActionButtons(e){return U`
      <div class="action-btns-row">
        <button class="action-icon-btn ${e.is_favourite?"fav-active":""}"
          @click=${this._handleToggleFav}
          title="${e.is_favourite?"Remove from favourites":"Add to favourites"}">
          <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
          Favourite
        </button>
        <button class="action-icon-btn"
          @click=${()=>{if(this.wide){const e=this.shadowRoot?.querySelector(".detail-right-scroll");e&&(e.scrollTop=0)}else this._activeTab="directions"}}
          title="Cook">
          <ha-icon icon="mdi:chef-hat"></ha-icon>
          Cook
        </button>
        <button class="action-icon-btn" @click=${this._handleShowPlanner} title="Add to meal plan">
          <ha-icon icon="mdi:calendar-plus"></ha-icon>
          Plan
        </button>
        <button class="action-icon-btn" @click=${this._openShoppingPicker} title="Add to shopping list">
          <ha-icon icon="mdi:cart-plus"></ha-icon>
          Shop
        </button>
        ${e.source_url?U`
          <a class="action-icon-btn" href="${e.source_url}" target="_blank" rel="noopener" title="Open source">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            Source
          </a>
        `:""}
        <button class="action-icon-btn" @click=${this._startEdit} title="Edit recipe">
          <ha-icon icon="mdi:pencil-outline"></ha-icon>
          Edit
        </button>
      </div>
    `}_renderScaler(){const e=this.recipe;return e?.servings?U`
      <div class="scaler-row">
        <span class="scaler-label">Scale servings:</span>
        <div class="scaler-ctrl">
          <button class="scaler-btn" @click=${()=>{this._servingMult>.25&&(this._servingMult=Math.round(4*(this._servingMult-.25))/4)}}>
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <span class="scaler-val">×${this._servingMult}</span>
          <button class="scaler-btn" @click=${()=>{this._servingMult=Math.round(4*(this._servingMult+.25))/4}}>
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </div>
    `:""}_renderWakeLock(){return this.settings?.keepScreenOn?U`
      <div class="wakelock-row">
        <button class="wakelock-btn ${this._wakeActive?"active":""}"
          @click=${()=>this._wakeActive?this._releaseWakeLock():this._requestWakeLock()}
          title="${this._wakeActive?"Release screen lock":"Keep screen on"}">
          <ha-icon icon="${this._wakeActive?"mdi:eye":"mdi:eye-off-outline"}"></ha-icon>
          ${this._wakeActive?"Screen on":"Keep screen on"}
        </button>
      </div>
    `:""}render(){if(!this.recipe)return U``;const e=this.recipe;return this.wide?this._renderWide(e):this._renderNarrow(e)}_renderWide(e){const t=this._groupIngredients(e.ingredients),i=this._showShoppingPicker,r=this._checkedIngredients,n=r?.size??0;return U`
      <div class="detail-container wide">
        <!--
          CSS grid: 2 cols (1fr 2fr) × 2 rows (auto 1fr)
          [image]   [info card]      ← same height, square image
          [ings]    [directions]     ← fills remaining height, columns align with row above
        -->
        <div class="wide-layout">

          <!-- row 1 col 1: square image card -->
          <div class="wide-image-card">
            ${e.image_url?U`
              <img src="${e.image_url}" alt="${e.name}" />
            `:U`
              <div class="hero-placeholder">
                <ha-icon icon="mdi:food"></ha-icon>
              </div>
            `}
          </div>

          <!-- row 1 col 2: info card, same height as image -->
          <div class="wide-info-card">
            <h1 class="wide-title">${e.name}</h1>
            ${this._renderQuickRating(e)}
            ${this._renderActionButtons(e)}
            ${e.description?U`<p class="wide-desc">${e.description}</p>`:""}
            ${this._renderMetaRow(e)}
            ${this._renderChipGroups(e)}
          </div>

          <!-- row 2 col 1: ingredients scroll, aligns under image -->
          <div class="wide-ing-scroll">
            ${this._renderScaler()}
            ${t.map(t=>U`
              <div class="wide-section-card">
                ${t.header?U`<div class="wide-section-title">${t.header}</div>`:""}
                ${t.items.length?U`
                  <ul class="ingredient-list">
                    ${t.items.map(t=>{const n=(e.ingredients||[]).indexOf(t),{amount:a,unit:s}=this._getDisplayAmount(t);return U`
                        <li class="ingredient-item ${i?"selectable":""}"
                          @click=${i?()=>this._toggleIngredient(n):void 0}>
                          ${i?U`
                            <span class="ing-check ${r?.has(n)?"checked":""}">
                              ${r?.has(n)?U`<ha-icon icon="mdi:check"></ha-icon>`:""}
                            </span>
                          `:""}
                          <span class="ing-amount">${a} ${s}</span>
                          <span class="ing-name">${t.name}${t.notes?U` <em class="ing-notes">(${t.notes})</em>`:""}</span>
                        </li>
                      `})}
                  </ul>
                `:""}
              </div>
            `)}
            <div class="wide-section-card">
              ${this._renderNutritionRing(e)}
            </div>
            <div class="wide-section-card">
              ${"success"===this._shoppingResult?U`
                <div class="shopping-success">
                  <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                  Added to shopping list!
                </div>
              `:i?U`
                <div class="shopping-picker-panel">
                  <div class="picker-select-row">
                    <button class="picker-sel-btn" @click=${this._selectAllIngredients}>Select All</button>
                    <button class="picker-sel-btn" @click=${this._clearAllIngredients}>Clear All</button>
                    ${this.slmAvailable&&this.shoppingLists.length?U`
                      <select class="list-select" .value=${this._selectedListId}
                        @change=${e=>{this._selectedListId=e.target.value}}>
                        ${this.shoppingLists.map(e=>U`
                          <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                        `)}
                      </select>
                    `:""}
                  </div>
                  <div class="picker-btns">
                    <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>Cancel</button>
                    <button class="action-btn primary"
                      ?disabled=${this._shoppingAdding||!n}
                      @click=${this._handleAddToShopping}>
                      ${this._shoppingAdding?U`<ha-circular-progress active size="tiny"></ha-circular-progress>`:"Add"+(n?` (${n})`:"")}
                    </button>
                  </div>
                </div>
              `:U`
                <button class="action-btn primary shopping-btn" @click=${this._openShoppingPicker}>
                  <ha-icon icon="mdi:cart-plus"></ha-icon>
                  Add to Shopping List
                </button>
              `}
            </div>
          </div>

          <!-- row 2 col 2: directions scroll, aligns under info card -->
          <div class="wide-dir-scroll">
            ${this._renderWakeLock()}
            <div class="wide-section-card">
              <div class="wide-section-title">Directions</div>
              ${this._renderDirections(e)}
            </div>
            ${e.notes?U`
              <div class="wide-section-card">
                <div class="wide-section-title">Notes</div>
                <p class="notes-text">${e.notes}</p>
              </div>
            `:""}
          </div>

        </div>

        <!-- Edit overlay -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_renderNarrow(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return U`
      <div class="detail-container">
        <!-- Hero image -->
        <div class="hero ${e.image_url?"":"no-image"}">
          ${e.image_url?U`
            <img src="${e.image_url}" alt="${e.name}" />
            <div class="hero-overlay"></div>
          `:U`
            <div class="hero-placeholder">
              <ha-icon icon="mdi:food"></ha-icon>
            </div>
          `}
          <div class="hero-actions">
            <button class="hero-btn ${e.is_favourite?"fav-active":""}" @click=${this._handleToggleFav}
              title="${e.is_favourite?"Remove from favourites":"Add to favourites"}">
              <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
            </button>
            ${e.source_url?U`
              <a class="hero-btn" href="${e.source_url}" target="_blank" rel="noopener" title="Open source">
                <ha-icon icon="mdi:open-in-new"></ha-icon>
              </a>
            `:""}
          </div>
        </div>

        <div class="detail-scroll">
          <!-- Recipe meta -->
          <div class="detail-head">
            <h2 class="recipe-title">${e.name}</h2>
            ${this._renderQuickRating(e)}
            ${this._renderActionButtons(e)}
            ${e.description?U`<p class="detail-desc">${e.description}</p>`:""}

            <div class="meta-row">
              ${e.prep_time?U`
                <div class="meta-item">
                  <span class="meta-label">Prep</span>
                  <span class="meta-val">${this._formatTime(e.prep_time)}</span>
                </div>
              `:""}
              ${e.cook_time?U`
                <div class="meta-item">
                  <span class="meta-label">Cook</span>
                  <span class="meta-val">${this._formatTime(e.cook_time)}</span>
                </div>
              `:""}
              ${t?U`
                <div class="meta-item">
                  <span class="meta-label">Total</span>
                  <span class="meta-val">${this._formatTime(t)}</span>
                </div>
              `:""}
              ${e.servings?U`
                <div class="meta-item">
                  <span class="meta-label">Serves</span>
                  <span class="meta-val">${e.servings_text||e.servings}</span>
                </div>
              `:""}
            </div>

            ${this._renderChipGroups(e)}
          </div>

          <!-- Serving scaler -->
          ${this._renderScaler()}

          <!-- Tabs -->
          <div class="tabs-row">
            ${[["ingredients","Ingredients"],["directions","Directions"],["notes","Notes"],["nutrition","Nutrition"],["photos","Photos"]].map(([e,t])=>U`
              <button
                class="tab-btn ${this._activeTab===e?"active":""}"
                @click=${()=>{this._activeTab=e}}
              >${t}</button>
            `)}
          </div>

          <!-- Wake lock button (shown when setting enabled) -->
          ${this._renderWakeLock()}

          <!-- Tab content -->
          <div class="tab-content">
            ${"ingredients"===this._activeTab?this._renderIngredients(e):""}
            ${"directions"===this._activeTab?this._renderDirections(e):""}
            ${"notes"===this._activeTab?this._renderNotes(e):""}
            ${"nutrition"===this._activeTab?this._renderNutritionRing(e):""}
            ${"photos"===this._activeTab?this._renderPhotos(e):""}
          </div>
        </div>

        <!-- Edit panel (inline overlay) -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_getDisplayAmount(e){if(this._metricMode){const t=function(e,t){if(!e||!t)return null;const i=parseFloat(e);if(isNaN(i))return null;const r=t.toLowerCase().trim(),n=be[r];if(!n)return null;let a=i*n.factor,s=n.to;"lb"===r&&a>=500&&(a/=1e3,s="kg"),"ml"===s&&a>=1e3&&(a/=1e3,s="L");const o=a>=10?Math.round(a):Math.round(10*a)/10;return{amount:String(o),unit:s}}(this._scaleAmount(e.amount),e.unit);if(t)return t}return{amount:this._scaleAmount(e.amount)||"",unit:e.unit||""}}_groupIngredients(e){const t=[];let i={header:null,items:[]};for(const r of e||[])if(r.is_heading||r.name?.startsWith("#")){(i.items.length>0||null!==i.header)&&t.push(i);i={header:(r.name?.startsWith("#")?r.name.slice(1).trim():r.name)||"",items:[]}}else i.items.push(r);return(i.items.length>0||null!==i.header)&&t.push(i),t.length?t:[{header:null,items:e||[]}]}_renderIngredients(e){const t=this._showShoppingPicker,i=this._checkedIngredients,r=i?.size??0,n=(e.ingredients||[]).some(e=>e.unit&&be[e.unit.toLowerCase().trim()]);return U`
      ${this.settings?.showUnitConversion&&n?U`
        <div class="metric-toggle-row">
          <button class="metric-btn ${this._metricMode?"active":""}"
            @click=${()=>{this._metricMode=!this._metricMode}}>
            <ha-icon icon="mdi:swap-horizontal"></ha-icon>
            ${this._metricMode?"Showing metric":"Convert to metric"}
          </button>
        </div>
      `:""}

      ${e.ingredients?.length?U`
        <ul class="ingredient-list">
          ${e.ingredients.map((e,r)=>{if(e.is_heading||e.name?.startsWith("#")){const t=e.name?.startsWith("#")?e.name.slice(1).trim():e.name;return U`<li class="ing-heading">${t}</li>`}const{amount:n,unit:a}=this._getDisplayAmount(e);return U`
              <li class="ingredient-item ${t?"selectable":""}"
                @click=${t?()=>this._toggleIngredient(r):void 0}>
                ${t?U`
                  <span class="ing-check ${i?.has(r)?"checked":""}">
                    ${i?.has(r)?U`<ha-icon icon="mdi:check"></ha-icon>`:""}
                  </span>
                `:""}
                <span class="ing-amount">${n} ${a}</span>
                <span class="ing-name">${e.name}${e.notes?U` <em class="ing-notes">(${e.notes})</em>`:""}</span>
              </li>
            `})}
        </ul>
      `:U`<p class="empty-tab">No ingredients listed.</p>`}

      <!-- Shopping section (always shown) -->
      <div class="shopping-section">
        ${"success"===this._shoppingResult?U`
          <div class="shopping-success">
            <ha-icon icon="mdi:check-circle-outline"></ha-icon>
            Added to shopping list!
          </div>
        `:t?U`
          <div class="shopping-picker-panel">
            <div class="picker-select-row">
              <button class="picker-sel-btn" @click=${this._selectAllIngredients}>Select All</button>
              <button class="picker-sel-btn" @click=${this._clearAllIngredients}>Clear All</button>
              ${this.slmAvailable&&this.shoppingLists.length?U`
                <select class="list-select" .value=${this._selectedListId}
                  @change=${e=>{this._selectedListId=e.target.value}}>
                  ${this.shoppingLists.map(e=>U`
                    <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                  `)}
                </select>
              `:this.slmAvailable?U`
                <span class="shopping-note">No lists found in Shopping List Manager</span>
              `:""}
            </div>
            <div class="picker-btns">
              <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>Cancel</button>
              <button class="action-btn primary"
                ?disabled=${this._shoppingAdding||!r}
                @click=${this._handleAddToShopping}>
                ${this._shoppingAdding?U`<ha-circular-progress active size="tiny"></ha-circular-progress>`:"Add"+(r?` (${r})`:"")}
              </button>
            </div>
          </div>
        `:U`
          <button class="action-btn primary shopping-btn" @click=${this._openShoppingPicker}>
            <ha-icon icon="mdi:cart-plus"></ha-icon>
            Add to Shopping List
          </button>
        `}
      </div>
    `}_toggleStepComplete(e){const t=new Set(this._completedSteps);t.has(e)?t.delete(e):t.add(e),this._completedSteps=t}_renderDirections(e){return e.instructions?.length?U`
      <ol class="steps-list">
        ${e.instructions.map((e,t)=>{const i=this._completedSteps.has(t);return U`
            <li class="step-item ${i?"step-done":""}">
              <span class="step-num ${i?"done":""}"
                @click=${e=>{e.stopPropagation(),this._toggleStepComplete(t)}}
                title="${i?"Mark incomplete":"Mark complete"}"
              >${i?U`<ha-icon icon="mdi:check"></ha-icon>`:t+1}</span>
              <span class="step-text">${this._renderStepWithTimers(e)}</span>
            </li>
          `})}
      </ol>
    `:U`<p class="empty-tab">No directions listed.</p>`}_renderStepWithTimers(e){const t=[];let i,r=0;for(fe.lastIndex=0;null!==(i=fe.exec(e));){i.index>r&&t.push(e.slice(r,i.index));const n=i[0],a=ge(n);a>0?t.push(U`<button class="time-chip" @click=${e=>{e.stopPropagation(),this._fireTimer(a,n)}} title="Start timer for ${n}">
          <ha-icon icon="mdi:timer-outline"></ha-icon>${n}
        </button>`):t.push(n),r=i.index+i[0].length}return r<e.length&&t.push(e.slice(r)),t}_renderNotes(e){return U`
      ${e.notes?U`<p class="notes-text">${e.notes}</p>`:U`<p class="empty-tab">No notes.</p>`}
    `}_renderNutrition(e){const t=e.nutrition||{},i=me.some(e=>null!=t[e.key]&&""!==t[e.key]);if(!i)return U`
        <div class="empty-tab">
          <p>No nutrition info. Add it via the edit panel.</p>
        </div>
      `;const r=e.servings?`Per serving (${e.servings_text||e.servings})`:"Per serving";return U`
      <div class="nutrition-panel">
        <div class="nutr-header">Nutrition Facts</div>
        <div class="nutr-sub">${r}</div>
        <div class="nutr-divider thick"></div>
        ${me.map(e=>{const i=t[e.key];return null==i||""===i?"":U`
            <div class="nutr-row ${e.bold?"nutr-bold":""} ${e.indent?"nutr-indent":""}">
              <span class="nutr-label">${e.label}</span>
              <span class="nutr-val">${i}${"kcal"!==e.unit?U`<em> ${e.unit}</em>`:""}</span>
            </div>
            <div class="nutr-divider"></div>
          `})}
      </div>
    `}_renderNutritionRing(e){const t=e?.nutrition||{},i=parseFloat(t.calories)||0,r=parseFloat(t.fat)||0,n=parseFloat(t.carbohydrates)||0,a=parseFloat(t.protein)||0,s=9*r,o=4*n,l=4*a,c=s+o+l,d=c>0||i>0,p=110,h=46,u=30,m=[{label:"Carbs",val:n,cal:o,color:"#f59e0b"},{label:"Fat",val:r,cal:s,color:"#3b82f6"},{label:"Protein",val:a,cal:l,color:"#22c55e"}];function f(e,t){const i=(e-90)*Math.PI/180;return[55+t*Math.cos(i),55+t*Math.sin(i)]}function g(e,t){const[i,r]=f(e,h),[n,a]=f(t,h),[s,o]=f(e,u),[l,c]=f(t,u),d=t-e>180?1:0;return`M ${i} ${r} A 46 46 0 ${d} 1 ${n} ${a} L ${l} ${c} A 30 30 0 ${d} 0 ${s} ${o} Z`}const b=[];if(d&&c>0){let e=0;for(const t of m){if(t.cal<=0)continue;const i=t.cal/c*358;b.push({...t,path:g(e,e+i)}),e+=i+2}}const v=i>0?i:d?Math.round(c/9):null;return U`
      <div class="nutr-ring-section">
        <div class="nutr-section-label">Nutrition</div>
        <div class="nutr-ring-body">
          <svg width="${p}" height="${p}" viewBox="0 0 ${p} ${p}">
            <circle cx="${55}" cy="${55}" r="${38}"
              fill="none" stroke="var(--rm-border)" stroke-width="${16}"/>
            ${b.map(e=>U`<path d="${e.path}" fill="${e.color}" opacity="0.9"/>`)}
            <text x="${55}" y="${52}" text-anchor="middle"
              fill="var(--rm-text)" font-size="16" font-weight="700" font-family="inherit">
              ${null!=v?v:"–"}
            </text>
            <text x="${55}" y="${66}" text-anchor="middle"
              fill="var(--rm-text-secondary)" font-size="9" font-family="inherit">
              ${d?"kcal":"no data"}
            </text>
          </svg>
          <div class="nutr-macros">
            ${m.map(e=>{const t=c>0?Math.round(e.cal/c*100):0;return U`
                <div class="nutr-macro-row">
                  <span class="nutr-macro-dot" style="background:${e.color}"></span>
                  <span class="nutr-macro-label">${e.label}</span>
                  <span class="nutr-macro-val">${e.val>0?`${e.val}g`:"—"}</span>
                  ${t>0?U`<span class="nutr-macro-pct">${t}%</span>`:""}
                </div>
              `})}
            ${e?.servings?U`
              <div class="nutr-macro-row">
                <span class="nutr-macro-label" style="color:var(--rm-text-muted);font-size:10px">
                  Per ${e.servings_text||`${e.servings} serving${1!==e.servings?"s":""}`}
                </span>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}_renderPhotos(e){const t=e.photos||[],i=e.image_url,r=i?[i,...t.filter(e=>e!==i)]:t;return U`
      <div class="photos-tab">
        ${r.length?U`
          <div class="photos-grid">
            ${r.map(e=>U`
              <div class="photo-item ${e===i?"main-photo":""}">
                <img src="${e}" alt="Recipe photo" loading="lazy" />
                ${e===i?U`<span class="photo-badge">Main</span>`:U`
                  <button class="photo-action set-main" @click=${()=>this._setMainPhoto(e)} title="Set as main photo">
                    <ha-icon icon="mdi:star-outline"></ha-icon>
                  </button>
                `}
                <button class="photo-action remove-photo" @click=${()=>this._removePhoto(e)} title="Remove photo">
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              </div>
            `)}
          </div>
        `:U`
          <div class="empty-tab">
            <ha-icon icon="mdi:image-off-outline"></ha-icon>
            <p>No photos yet.</p>
          </div>
        `}

        <div class="photo-add-section">
          <div class="photo-add-label">Add a photo</div>
          <div class="photo-url-row">
            <input
              type="url"
              class="photo-url-input"
              placeholder="Paste image URL…"
              .value=${this._photoUrlInput}
              @input=${e=>{this._photoUrlInput=e.target.value}}
              @keydown=${e=>{"Enter"===e.key&&this._handleAddPhotoUrl()}}
            />
            <button class="action-btn primary" ?disabled=${!this._photoUrlInput.trim()||this._addingPhotoUrl}
              @click=${this._handleAddPhotoUrl}>
              Add
            </button>
          </div>
          <div class="camera-btns">
            <label class="camera-btn-split">
              <ha-icon icon="mdi:camera"></ha-icon>
              <span>Take Photo</span>
              <input type="file" accept="image/*" capture="environment" class="camera-input"
                @change=${this._handleCameraCapture} />
            </label>
            <label class="camera-btn-split">
              <ha-icon icon="mdi:image-multiple-outline"></ha-icon>
              <span>Choose from Library</span>
              <input type="file" accept="image/*" class="camera-input"
                @change=${this._handleCameraCapture} />
            </label>
          </div>
        </div>
      </div>
    `}_renderEditPanel(){const e=this._editData;return U`
      <div class="edit-overlay" @click=${e=>{e.target===e.currentTarget&&this._cancelEdit()}}>
        <div class="edit-panel">
          <div class="edit-header">
            <span>Edit Recipe</span>
            <button class="icon-btn" @click=${this._cancelEdit}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>
          <div class="edit-body">

            ${this._renderField("Name","name","text")}
            ${this._renderField("Description","description","textarea")}
            ${this._renderField("Source URL","source_url","url")}

            <div class="edit-row-3">
              ${this._renderField("Prep (min)","prep_time","number")}
              ${this._renderField("Cook (min)","cook_time","number")}
              ${this._renderField("Servings","servings","number")}
            </div>

            <!-- Star rating picker -->
            <div class="edit-field">
              <label>Rating</label>
              <div class="edit-stars">
                ${[1,2,3,4,5].map(t=>U`
                  <span class="edit-star ${t<=(e.rating||0)?"filled":""}"
                    @click=${()=>this._handleEditField("rating",e.rating===t?0:t)}
                  >★</span>
                `)}
              </div>
            </div>

            ${this._renderField("Tags (comma-separated)","tags","text")}
            ${this._renderField("Courses (comma-separated)","courses","text")}
            ${this._renderField("Categories (comma-separated)","categories","text")}
            ${this._renderField("Collections (comma-separated)","collections","text")}
            ${this._renderField("Notes","notes","textarea")}

            <!-- Ingredients editor -->
            <div class="edit-section-label">Ingredients (${(e.ingredients||[]).length})</div>
            ${(e.ingredients||[]).length?U`
              <ul class="edit-ing-list">
                ${(e.ingredients||[]).map((e,t)=>U`
                  <li class="${e.is_heading||e.name?.startsWith("#")?"edit-ing-heading":""}">
                    <span class="edit-ing-text">
                      ${e.is_heading||e.name?.startsWith("#")?U`<strong>${e.name?.startsWith("#")?e.name.slice(1).trim():e.name}</strong>`:U`${e.amount?`${e.amount}${e.unit?" "+e.unit:""} `:""}${e.name}`}
                    </span>
                    <button class="edit-remove-btn" @click=${()=>this._editRemoveIngredient(t)}>
                      <ha-icon icon="mdi:close"></ha-icon>
                    </button>
                  </li>
                `)}
              </ul>
            `:""}
            <div class="edit-add-row">
              <input
                type="text"
                .value=${this._editIngInput}
                @input=${e=>{this._editIngInput=e.target.value}}
                @keydown=${e=>{"Enter"===e.key&&this._editAddIngredient()}}
                placeholder='e.g. "2 cups flour" or "# Section Header"'
              />
              <button class="edit-add-btn" @click=${this._editAddIngredient}>Add</button>
            </div>

            <!-- Instructions editor -->
            <div class="edit-section-label">Directions (${(e.instructions||[]).length} steps)</div>
            ${(e.instructions||[]).length?U`
              <ol class="edit-steps-list">
                ${(e.instructions||[]).map((e,t)=>U`
                  <li>
                    <span class="edit-ing-text">${e}</span>
                    <button class="edit-remove-btn" @click=${()=>this._editRemoveStep(t)}>
                      <ha-icon icon="mdi:close"></ha-icon>
                    </button>
                  </li>
                `)}
              </ol>
            `:""}
            <div class="edit-add-row">
              <textarea
                rows="2"
                .value=${this._editStepInput}
                @input=${e=>{this._editStepInput=e.target.value}}
                @keydown=${e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._editAddStep(this._editStepInput),this._editStepInput="")}}
                placeholder="Type a step, press Enter to add…"
              ></textarea>
              <button class="edit-add-btn" @click=${()=>{this._editAddStep(this._editStepInput),this._editStepInput=""}}>Add</button>
            </div>

            <!-- Nutrition section -->
            <div class="edit-section-label">Nutrition Facts (per serving)</div>
            <div class="edit-row-3">
              ${this._renderField("Calories (kcal)","cal","number")}
              ${this._renderField("Protein (g)","prot","number")}
              ${this._renderField("Fat (g)","fat","number")}
            </div>
            <div class="edit-row-3">
              ${this._renderField("Saturated Fat (g)","satf","number")}
              ${this._renderField("Carbs (g)","carb","number")}
              ${this._renderField("Fiber (g)","fib","number")}
            </div>
            <div class="edit-row-3">
              ${this._renderField("Sugar (g)","sug","number")}
              ${this._renderField("Sodium (mg)","sod","number")}
              ${this._renderField("Cholesterol (mg)","chol","number")}
            </div>

          </div>
          <div class="edit-footer">
            <button class="action-btn danger-outline" @click=${this._handleDeleteRecipe}
              title="${this._confirmDelete?"Click again to confirm delete":"Delete recipe"}">
              <ha-icon icon="${this._confirmDelete?"mdi:alert":"mdi:trash-can-outline"}"></ha-icon>
              ${this._confirmDelete?"Confirm?":"Delete"}
            </button>
            <div class="edit-footer-right">
              <button class="action-btn" @click=${this._cancelEdit}>Cancel</button>
              <button class="action-btn primary" @click=${this._saveEdit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    `}_renderField(e,t,i){const r=this._editData[t]??"";return"textarea"===i?U`
        <div class="edit-field">
          <label>${e}</label>
          <textarea
            .value=${r}
            @input=${e=>this._handleEditField(t,e.target.value)}
            rows="3"
          ></textarea>
        </div>
      `:U`
      <div class="edit-field">
        <label>${e}</label>
        <input
          type="${i}"
          .value=${String(r)}
          @input=${e=>this._handleEditField(t,e.target.value)}
        />
      </div>
    `}static styles=a`
    :host { display: block; height: 100%; }

    .detail-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    /* Wide two-column layout */
    .detail-container.wide { flex-direction: row; }
    .detail-left {
      width: 320px; flex-shrink: 0; display: flex; flex-direction: column;
      border-right: 1px solid var(--rm-border); overflow: hidden;
    }
    .detail-left .hero-img {
      height: 240px; flex-shrink: 0; position: relative; overflow: hidden;
      background: var(--rm-bg-elevated);
    }
    .detail-left .hero-img img { width: 100%; height: 100%; object-fit: cover; }
    .detail-left .hero-img .hero-placeholder {
      width: 100%; height: 100%; display: flex; align-items: center;
      justify-content: center; color: var(--rm-text-secondary);
    }
    .detail-left .hero-img .hero-placeholder ha-icon { --mdc-icon-size: 64px; opacity: 0.3; }
    .detail-left-scroll {
      flex: 1; overflow-y: auto; padding: 12px 14px 16px;
      scrollbar-width: thin; scrollbar-color: var(--rm-border) transparent;
    }
    .detail-right { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .detail-right-header { padding: 16px 16px 0; flex-shrink: 0; }
    .detail-right-scroll {
      flex: 1; overflow-y: auto; padding: 6px 16px 24px;
      scrollbar-width: thin; scrollbar-color: var(--rm-border) transparent;
    }
    .notes-section { margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--rm-border); }
    .notes-section h3 { margin: 0 0 8px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--rm-text-secondary); }

    /* Recipe title */
    .recipe-title {
      margin: 0 0 6px; font-size: 20px; font-weight: 700;
      color: var(--rm-text); line-height: 1.2;
    }
    .recipe-title.wide-centered { text-align: center; font-size: 22px; }
    .detail-desc.wide-centered { text-align: center; }
    .detail-right-header .quick-rating { justify-content: center; }
    .detail-right-header .action-btns-row { justify-content: center; }

    /* Quick rating */
    .quick-rating { display: flex; gap: 2px; margin: 0 0 8px; }
    .qr-star { font-size: 20px; cursor: pointer; color: var(--rm-border); -webkit-text-stroke: 1px rgba(200,150,0,0.4); transition: color 0.15s; }
    .qr-star.filled { color: #f5a623; -webkit-text-stroke: 1px #c47f0a; }
    .qr-star:hover { color: #f5a623; }

    /* Action buttons row */
    .action-btns-row {
      display: flex; gap: 4px; flex-wrap: wrap; margin: 8px 0 12px;
    }
    .action-icon-btn {
      display: flex; flex-direction: column; align-items: center; gap: 3px;
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 10px; padding: 8px 10px; cursor: pointer;
      color: var(--rm-text-secondary); font-size: 11px; font-weight: 500;
      transition: all 0.15s; text-decoration: none; min-width: 52px;
    }
    .action-icon-btn ha-icon { --mdc-icon-size: 20px; }
    .action-icon-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent); border-color: var(--rm-accent); }
    .action-icon-btn.fav-active { color: var(--error-color, #cf6679); }
    .action-icon-btn.danger { background: var(--error-color, #cf6679); color: #fff; border-color: var(--error-color, #cf6679); }

    /* Meta chips (wide layout) */
    .meta-chips { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
    .meta-chip-icon {
      display: inline-flex; align-items: center; gap: 5px;
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 20px; padding: 4px 10px; font-size: 12px;
      color: var(--rm-text-secondary); font-weight: 500;
    }
    .meta-chip-icon ha-icon { --mdc-icon-size: 14px; }

    /* All chips inline (wide layout) */
    .chips-area { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 10px; }

    /* Hero */
    .hero {
      flex-shrink: 0;
      height: 180px;
      position: relative;
      background: var(--rm-surface, #2c2c2e);
      overflow: hidden;
    }
    .hero.no-image { height: 80px; }
    .hero img { width: 100%; height: 100%; object-fit: cover; }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%);
    }
    .hero-placeholder {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--rm-text-secondary, #8e8e93);
    }
    .hero-placeholder ha-icon { --mdc-icon-size: 48px; opacity: 0.4; }

    .hero-actions {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      gap: 6px;
    }
    .hero-btn {
      background: rgba(0,0,0,0.55);
      border: none;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.85);
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
      padding: 0;
    }
    .hero-btn ha-icon { --mdc-icon-size: 18px; }
    .hero-btn:hover { background: rgba(0,0,0,0.75); }
    .hero-btn.fav-active { color: var(--error-color, #cf6679); }
    .hero-btn.delete-btn.confirm { background: var(--error-color, #cf6679); color: #fff; }

    /* Scroll area */
    .detail-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 14px 16px 24px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border, rgba(255,255,255,0.08)) transparent;
    }

    .detail-head { margin-bottom: 12px; }
    .detail-desc {
      margin: 0 0 8px;
      font-size: 14px;
      color: var(--rm-text-secondary, #8e8e93);
      line-height: 1.5;
    }

    .meta-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
    .meta-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--rm-bg-elevated, #2c2c2e);
      border-radius: 8px;
      padding: 6px 12px;
      min-width: 60px;
    }
    .meta-label { font-size: 10px; color: var(--rm-text-secondary, #8e8e93); text-transform: uppercase; letter-spacing: 0.05em; }
    .meta-val { font-size: 14px; font-weight: 600; color: var(--rm-text, #e5e5ea); }

    .tags-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 6px; }
    .tag-chip {
      background: var(--rm-accent-soft, rgba(255,107,53,0.15));
      color: var(--rm-accent, #ff6b35);
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 12px;
    }

    /* Chip groups (courses, categories, collections) */
    .chip-group {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 5px;
    }
    .chip-group-label {
      font-size: 11px;
      color: var(--rm-text-secondary, #8e8e93);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .chip {
      border-radius: 20px;
      padding: 2px 9px;
      font-size: 12px;
    }
    .chip-course    { background: rgba(88,166,255,0.15); color: #58a6ff; }
    .chip-category  { background: rgba(63,185,80,0.15);  color: #3fb950; }
    .chip-collection{ background: rgba(210,153,34,0.15); color: #d2a01e; }
    .chip-tag { background: var(--rm-accent-soft); color: var(--rm-accent); }

    /* Scaler */
    .scaler-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
    }
    .scaler-label { font-size: 13px; color: var(--rm-text-secondary, #8e8e93); }
    .scaler-ctrl { display: flex; align-items: center; gap: 8px; }
    .scaler-btn {
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      border-radius: 50%;
      width: 28px;
      height: 28px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--rm-text, #e5e5ea);
      padding: 0;
    }
    .scaler-btn ha-icon { --mdc-icon-size: 16px; }
    .scaler-val { font-size: 14px; font-weight: 600; color: var(--rm-text, #e5e5ea); min-width: 36px; text-align: center; }

    /* Tabs */
    .tabs-row {
      display: flex;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      margin-bottom: 14px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tabs-row::-webkit-scrollbar { display: none; }
    .tab-btn {
      flex-shrink: 0;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 11px 14px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      color: var(--rm-text-secondary, #8e8e93);
      transition: color 0.15s, border-color 0.15s;
      white-space: nowrap;
    }
    .tab-btn.active {
      color: var(--rm-accent, #ff6b35);
      border-bottom-color: var(--rm-accent, #ff6b35);
    }

    /* Wake lock button */
    .wakelock-row {
      display: flex;
      justify-content: flex-end;
      padding: 4px 0 10px;
    }
    .wakelock-btn {
      display: inline-flex; align-items: center; gap: 5px;
      background: none; border: 1px solid var(--rm-border);
      border-radius: 20px; padding: 4px 12px;
      font-size: 12px; cursor: pointer;
      color: var(--rm-text-secondary);
      transition: all 0.15s;
    }
    .wakelock-btn ha-icon { --mdc-icon-size: 14px; }
    .wakelock-btn.active {
      background: var(--rm-accent-soft); color: var(--rm-accent);
      border-color: var(--rm-accent);
    }

    /* Metric toggle */
    .metric-toggle-row {
      display: flex;
      justify-content: flex-end;
      padding: 0 0 8px;
    }
    .metric-btn {
      display: inline-flex; align-items: center; gap: 5px;
      background: none; border: 1px solid var(--rm-border);
      border-radius: 20px; padding: 4px 12px;
      font-size: 12px; cursor: pointer;
      color: var(--rm-text-secondary);
      transition: all 0.15s;
    }
    .metric-btn ha-icon { --mdc-icon-size: 14px; }
    .metric-btn.active {
      background: var(--rm-accent-soft); color: var(--rm-accent);
      border-color: var(--rm-accent);
    }

    /* Ingredient section heading */
    .ing-heading {
      list-style: none;
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--rm-accent); padding: 10px 0 4px;
      margin-top: 6px;
    }

    /* Ingredients */
    .ingredient-list { list-style: none; padding: 0; margin: 0 0 16px; }
    .ingredient-item {
      display: flex;
      gap: 10px;
      align-items: baseline;
      padding: 10px 0;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.06));
    }
    .ingredient-item:last-child { border-bottom: none; }
    .ing-amount {
      font-size: 14px;
      font-weight: 700;
      color: var(--rm-accent, #ff6b35);
      min-width: 70px;
      flex-shrink: 0;
    }
    .ing-name { font-size: 15px; color: var(--rm-text, #e5e5ea); }
    .ing-notes { font-size: 13px; color: var(--rm-text-secondary, #8e8e93); font-style: italic; }

    /* Ingredient checkbox selection */
    .ingredient-item.selectable { cursor: pointer; border-radius: 6px; padding-left: 4px; }
    .ingredient-item.selectable:hover { background: var(--rm-accent-soft, rgba(255,107,53,0.1)); }
    .ing-check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid var(--rm-border, rgba(255,255,255,0.15));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s, border-color 0.15s;
    }
    .ing-check.checked {
      background: var(--rm-accent, #ff6b35);
      border-color: var(--rm-accent, #ff6b35);
      color: #fff;
    }
    .ing-check ha-icon { --mdc-icon-size: 12px; }

    /* Shopping */
    .shopping-section { margin-top: 12px; }
    .shopping-btn { width: 100%; justify-content: center; gap: 6px; }
    .shopping-btn ha-icon { --mdc-icon-size: 18px; }
    .shopping-picker-panel {
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 10px;
      padding: 10px;
    }
    .picker-select-row {
      display: flex;
      gap: 6px;
      align-items: center;
      flex-wrap: wrap;
    }
    .picker-sel-btn {
      background: none;
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 6px;
      color: var(--rm-text-secondary, #8e8e93);
      padding: 4px 10px;
      cursor: pointer;
      font-size: 12px;
    }
    .picker-sel-btn:hover { background: var(--rm-accent-soft); color: var(--rm-text); }
    .picker-btns { display: flex; gap: 8px; justify-content: flex-end; }
    .shopping-note { font-size: 12px; color: var(--rm-text-secondary, #8e8e93); }
    .list-select {
      flex: 1;
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 8px 10px;
      font-size: 14px;
      min-width: 120px;
    }
    .shopping-success {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--success-color, #4caf50);
      font-size: 14px;
      padding: 8px 0;
    }
    .shopping-success ha-icon { --mdc-icon-size: 20px; }

    /* Directions */
    .steps-list { list-style: none; padding: 0; margin: 0; }
    .step-item {
      display: flex;
      gap: 14px;
      margin-bottom: 20px;
      align-items: flex-start;
    }
    .step-num {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background: var(--rm-accent, #ff6b35);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
      user-select: none;
    }
    .step-num:hover { opacity: 0.8; }
    .step-num.done {
      background: transparent;
      border: 2px solid var(--rm-border, rgba(255,255,255,0.2));
      color: var(--rm-text-muted);
    }
    .step-num.done ha-icon { --mdc-icon-size: 16px; }
    .step-item.step-done .step-text {
      opacity: 0.45;
      text-decoration: line-through;
      text-decoration-color: var(--rm-border);
    }
    .step-text { font-size: 15px; color: var(--rm-text, #e5e5ea); line-height: 1.7; transition: opacity 0.2s; }

    /* Timer chip in directions */
    .time-chip {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      background: var(--rm-accent-soft, rgba(255,107,53,0.15));
      color: var(--rm-accent, #ff6b35);
      border: 1px solid var(--rm-accent, #ff6b35);
      border-radius: 12px;
      padding: 1px 7px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
      vertical-align: middle;
    }
    .time-chip ha-icon { --mdc-icon-size: 12px; }
    .time-chip:hover { background: var(--rm-accent, #ff6b35); color: #fff; }

    /* Notes */
    .notes-text { font-size: 14px; color: var(--rm-text, #e5e5ea); line-height: 1.6; white-space: pre-wrap; }
    .empty-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: var(--rm-text-secondary, #8e8e93);
      text-align: center;
      padding: 20px 0;
      margin: 0;
    }
    .empty-tab ha-icon { --mdc-icon-size: 40px; opacity: 0.35; }
    .empty-tab p { margin: 0; }

    /* Nutrition (legacy table) */
    .nutrition-panel {
      max-width: 340px;
      border: 2px solid var(--rm-text, #e5e5ea);
      border-radius: 4px;
      padding: 8px 12px;
      margin: 0 auto;
    }
    .nutr-header {
      font-size: 28px;
      font-weight: 900;
      color: var(--rm-text, #e5e5ea);
      line-height: 1;
      margin-bottom: 2px;
    }
    .nutr-sub {
      font-size: 11px;
      color: var(--rm-text-secondary, #8e8e93);
      margin-bottom: 6px;
    }
    .nutr-divider { border-top: 1px solid var(--rm-border, rgba(255,255,255,0.15)); margin: 2px 0; }
    .nutr-divider.thick { border-top: 6px solid var(--rm-text, #e5e5ea); margin: 4px 0; }
    .nutr-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 2px 0;
      font-size: 13px;
      color: var(--rm-text, #e5e5ea);
    }
    .nutr-bold { font-weight: 700; font-size: 15px; }
    .nutr-indent { padding-left: 14px; font-size: 12px; }
    .nutr-val { font-weight: 600; white-space: nowrap; }
    .nutr-val em { font-style: normal; font-size: 11px; color: var(--rm-text-secondary, #8e8e93); }

    /* Nutrition ring */
    .nutr-ring-section {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid var(--rm-border);
    }
    .nutr-section-label {
      font-size: 11px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--rm-text-secondary); margin-bottom: 10px;
    }
    .nutr-ring-body { display: flex; align-items: center; gap: 14px; }
    .nutr-ring-body svg { flex-shrink: 0; }
    .nutr-macros { display: flex; flex-direction: column; gap: 6px; flex: 1; }
    .nutr-macro-row { display: flex; align-items: center; gap: 6px; font-size: 12px; }
    .nutr-macro-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .nutr-macro-label { color: var(--rm-text-secondary); flex: 1; }
    .nutr-macro-val { font-weight: 600; color: var(--rm-text); }
    .nutr-macro-pct { color: var(--rm-text-muted); font-size: 10px; }

    /* Photos tab */
    .photos-tab { display: flex; flex-direction: column; gap: 16px; }
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 10px;
    }
    .photo-item {
      position: relative;
      aspect-ratio: 4/3;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid transparent;
    }
    .photo-item.main-photo { border-color: var(--rm-accent, #ff6b35); }
    .photo-item img { width: 100%; height: 100%; object-fit: cover; }
    .photo-badge {
      position: absolute;
      bottom: 4px;
      left: 4px;
      background: var(--rm-accent, #ff6b35);
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .photo-action {
      position: absolute;
      background: rgba(0,0,0,0.6);
      border: none;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0;
      transition: background 0.15s;
    }
    .photo-action ha-icon { --mdc-icon-size: 14px; }
    .photo-action:hover { background: rgba(0,0,0,0.85); }
    .remove-photo { top: 4px; right: 4px; }
    .set-main { bottom: 4px; left: 4px; }

    .photo-add-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-top: 8px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }
    .photo-add-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--rm-text-secondary, #8e8e93);
    }
    .photo-url-row { display: flex; gap: 8px; }
    .photo-url-input {
      flex: 1;
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 8px 10px;
      font-size: 13px;
    }
    .photo-url-input:focus { outline: none; border-color: var(--rm-accent, #ff6b35); }
    .camera-btns {
      display: flex;
      gap: 10px;
    }
    .camera-btn-split {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 2px solid var(--rm-accent, #ff6b35);
      border-radius: 10px;
      color: var(--rm-text, #e5e5ea);
      padding: 16px 8px;
      cursor: pointer;
      font-size: 12px;
      text-align: center;
      transition: background 0.15s, border-color 0.15s;
    }
    .camera-btn-split:hover { background: var(--rm-accent-soft, rgba(255,107,53,0.12)); }
    .camera-btn-split ha-icon { --mdc-icon-size: 28px; color: var(--rm-accent, #ff6b35); }
    .camera-input { display: none; }

    /* Buttons */
    .action-btn {
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 8px 14px;
      cursor: pointer;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s;
    }
    .action-btn.primary {
      background: var(--rm-accent, #ff6b35);
      border-color: var(--rm-accent, #ff6b35);
      color: #fff;
    }
    .action-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .icon-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93);
      width: 32px; height: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; padding: 0;
    }

    /* Edit overlay */
    .edit-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.6);
      display: flex;
      align-items: flex-end;
      z-index: 10;
    }
    .edit-panel {
      background: var(--rm-bg-surface, #1c1c1e);
      border-radius: var(--rm-radius, 12px) var(--rm-radius, 12px) 0 0;
      width: 100%;
      max-height: 82vh;
      display: flex;
      flex-direction: column;
    }
    .edit-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      font-weight: 600;
      font-size: 16px;
      color: var(--rm-text, #e5e5ea);
      flex-shrink: 0;
    }
    .edit-body {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .edit-section-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--rm-text-muted, #8e8e93);
      margin-top: 4px;
      padding-top: 8px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }
    .edit-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
    .edit-field { display: flex; flex-direction: column; gap: 4px; }
    .edit-field label { font-size: 11px; color: var(--rm-text-secondary, #8e8e93); text-transform: uppercase; letter-spacing: 0.05em; }
    .edit-field input, .edit-field textarea {
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 8px 10px;
      font-size: 14px;
      font-family: inherit;
      resize: vertical;
    }
    .edit-field input:focus, .edit-field textarea:focus {
      outline: none;
      border-color: var(--rm-accent, #ff6b35);
    }
    .edit-stars {
      display: flex;
      gap: 4px;
      padding: 4px 0;
    }
    .edit-star {
      font-size: 32px;
      color: var(--rm-border, rgba(255,255,255,0.3));
      cursor: pointer;
      transition: color 0.12s;
      line-height: 1;
      -webkit-text-stroke: 1px rgba(200,150,50,0.5);
    }
    .edit-star.filled { color: #f5a623; -webkit-text-stroke: 1px #d4881b; }
    .edit-star:hover { color: #f5a623; }
    .edit-footer {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      flex-shrink: 0;
    }
    .edit-footer-right { display: flex; gap: 8px; }

    /* Edit ingredient/step lists */
    .edit-ing-list, .edit-steps-list {
      list-style: none; padding: 0; margin: 0 0 6px;
    }
    .edit-ing-list li, .edit-steps-list li {
      display: flex; align-items: flex-start; gap: 8px;
      padding: 5px 0; border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.06));
      font-size: 13px; color: var(--rm-text, #e5e5ea);
    }
    .edit-ing-heading { font-weight: 700; color: var(--rm-accent) !important; }
    .edit-ing-text { flex: 1; line-height: 1.4; }
    .edit-remove-btn {
      background: none; border: none; cursor: pointer; flex-shrink: 0;
      color: var(--rm-text-secondary, #8e8e93); padding: 2px; margin-top: 1px;
    }
    .edit-remove-btn ha-icon { --mdc-icon-size: 14px; }
    .edit-add-row {
      display: flex; gap: 8px; align-items: flex-end; margin-bottom: 4px;
    }
    .edit-add-row input, .edit-add-row textarea {
      flex: 1; background: var(--rm-bg-elevated, #232833);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px; color: var(--rm-text, #e5e5ea);
      padding: 7px 10px; font-size: 13px; font-family: inherit; resize: none;
    }
    .edit-add-row input:focus, .edit-add-row textarea:focus {
      outline: none; border-color: var(--rm-accent, #9fa8da);
    }
    .edit-add-btn {
      background: var(--rm-accent, #9fa8da); border: none; border-radius: 8px;
      color: #fff; padding: 7px 12px; cursor: pointer; font-size: 13px;
      white-space: nowrap; flex-shrink: 0;
    }

    /* Danger outline button */
    .action-btn.danger-outline {
      color: var(--error-color, #cf6679);
      border-color: var(--error-color, #cf6679);
    }
    .action-btn.danger-outline:hover {
      background: var(--error-color, #cf6679); color: #fff;
    }

    /* ── Wide grid layout (2 cols × 2 rows) ─────────────── */
    .wide-layout {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto 1fr;
      gap: 14px;
      padding: 14px;
      flex: 1;
      overflow: hidden;
      min-height: 0;
    }

    /* Row 1, Col 1 — square image */
    .wide-image-card {
      grid-column: 1; grid-row: 1;
      aspect-ratio: 1 / 1;
      border-radius: 16px;
      overflow: hidden;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
    }
    .wide-image-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .wide-image-card .hero-placeholder {
      width: 100%; height: 100%; display: flex; align-items: center;
      justify-content: center; color: var(--rm-text-secondary);
    }
    .wide-image-card .hero-placeholder ha-icon { --mdc-icon-size: 64px; opacity: 0.3; }

    /* Row 1, Col 2 — info card, same height as image via shared grid row */
    .wide-info-card {
      grid-column: 2; grid-row: 1;
      border-radius: 16px;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      padding: 16px 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }
    .wide-title {
      margin: 0 0 4px; font-size: 22px; font-weight: 700;
      color: var(--rm-text); line-height: 1.2; text-align: center;
    }
    .wide-desc {
      text-align: center; margin: 6px 0;
      font-size: 13px; color: var(--rm-text-secondary); line-height: 1.5;
    }
    .wide-info-card .quick-rating { justify-content: center; margin-bottom: 6px; }
    .wide-info-card .action-btns-row { justify-content: center; flex-wrap: wrap; }
    .wide-info-card .meta-chips { justify-content: center; margin-top: 6px; }
    .wide-info-card .chips-area { justify-content: center; margin-top: 4px; }

    /* Row 2, Col 1 — ingredients scroll, aligns under image */
    .wide-ing-scroll {
      grid-column: 1; grid-row: 2;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-height: 0;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }

    /* Row 2, Col 2 — directions scroll, aligns under info card */
    .wide-dir-scroll {
      grid-column: 2; grid-row: 2;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-height: 0;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }

    /* Ingredient/directions section cards */
    .wide-section-card {
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 14px;
      padding: 12px 14px;
      flex-shrink: 0;
    }
    .wide-section-title {
      font-size: 14px; font-weight: 700; color: var(--rm-text);
      margin-bottom: 10px; padding-bottom: 6px;
      border-bottom: 1px solid var(--rm-border);
    }
  `}try{customElements.define("rm-recipe-detail",ve)}catch{}var _e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ye(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var we={exports:{}};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/we.exports=function e(t,i,r){function n(s,o){if(!i[s]){if(!t[s]){if(!o&&ye)return ye(s);if(a)return a(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[s]={exports:{}};t[s][0].call(c.exports,function(e){return n(t[s][1][e]||e)},c,c.exports,e,t,i,r)}return i[s].exports}for(var a=ye,s=0;s<r.length;s++)n(r[s]);return n}({1:[function(e,t,i){var r=e("./utils"),n=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(e){for(var t,i,n,s,o,l,c,d=[],p=0,h=e.length,u=h,m="string"!==r.getTypeOf(e);p<e.length;)u=h-p,n=m?(t=e[p++],i=p<h?e[p++]:0,p<h?e[p++]:0):(t=e.charCodeAt(p++),i=p<h?e.charCodeAt(p++):0,p<h?e.charCodeAt(p++):0),s=t>>2,o=(3&t)<<4|i>>4,l=1<u?(15&i)<<2|n>>6:64,c=2<u?63&n:64,d.push(a.charAt(s)+a.charAt(o)+a.charAt(l)+a.charAt(c));return d.join("")},i.decode=function(e){var t,i,r,s,o,l,c=0,d=0,p="data:";if(e.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var h,u=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&u--,e.charAt(e.length-2)===a.charAt(64)&&u--,u%1!=0)throw new Error("Invalid base64 input, bad content length.");for(h=n.uint8array?new Uint8Array(0|u):new Array(0|u);c<e.length;)t=a.indexOf(e.charAt(c++))<<2|(s=a.indexOf(e.charAt(c++)))>>4,i=(15&s)<<4|(o=a.indexOf(e.charAt(c++)))>>2,r=(3&o)<<6|(l=a.indexOf(e.charAt(c++))),h[d++]=t,64!==o&&(h[d++]=i),64!==l&&(h[d++]=r);return h}},{"./support":30,"./utils":32}],2:[function(e,t,i){var r=e("./external"),n=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),s=e("./stream/DataLengthProbe");function o(e,t,i,r,n){this.compressedSize=e,this.uncompressedSize=t,this.crc32=i,this.compression=r,this.compressedContent=n}o.prototype={getContentWorker:function(){var e=new n(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new n(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,i){return e.pipe(new a).pipe(new s("uncompressedSize")).pipe(t.compressWorker(i)).pipe(new s("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,i){var r=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,i){var r=e("./utils"),n=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==r.getTypeOf(e)?function(e,t,i,r){var a=n,s=r+i;e^=-1;for(var o=r;o<s;o++)e=e>>>8^a[255&(e^t[o])];return-1^e}(0|t,e,e.length,0):function(e,t,i,r){var a=n,s=r+i;e^=-1;for(var o=r;o<s;o++)e=e>>>8^a[255&(e^t.charCodeAt(o))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,t,i){var r=null;r="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:r}},{lie:37}],7:[function(e,t,i){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=e("pako"),a=e("./utils"),s=e("./stream/GenericWorker"),o=r?"uint8array":"array";function l(e,t){s.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}i.magic="\b\0",a.inherits(l,s),l.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(a.transformTo(o,e.data),!1)},l.prototype.flush=function(){s.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},i.compressWorker=function(e){return new l("Deflate",e)},i.uncompressWorker=function(){return new l("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,i){function r(e,t){var i,r="";for(i=0;i<t;i++)r+=String.fromCharCode(255&e),e>>>=8;return r}function n(e,t,i,n,s,d){var p,h,u=e.file,m=e.compression,f=d!==o.utf8encode,g=a.transformTo("string",d(u.name)),b=a.transformTo("string",o.utf8encode(u.name)),v=u.comment,_=a.transformTo("string",d(v)),x=a.transformTo("string",o.utf8encode(v)),y=b.length!==u.name.length,w=x.length!==v.length,k="",$="",S="",A=u.dir,z=u.date,C={crc32:0,compressedSize:0,uncompressedSize:0};t&&!i||(C.crc32=e.crc32,C.compressedSize=e.compressedSize,C.uncompressedSize=e.uncompressedSize);var E=0;t&&(E|=8),f||!y&&!w||(E|=2048);var T=0,I=0;A&&(T|=16),"UNIX"===s?(I=798,T|=function(e,t){var i=e;return e||(i=t?16893:33204),(65535&i)<<16}(u.unixPermissions,A)):(I=20,T|=function(e){return 63&(e||0)}(u.dosPermissions)),p=z.getUTCHours(),p<<=6,p|=z.getUTCMinutes(),p<<=5,p|=z.getUTCSeconds()/2,h=z.getUTCFullYear()-1980,h<<=4,h|=z.getUTCMonth()+1,h<<=5,h|=z.getUTCDate(),y&&($=r(1,1)+r(l(g),4)+b,k+="up"+r($.length,2)+$),w&&(S=r(1,1)+r(l(_),4)+x,k+="uc"+r(S.length,2)+S);var R="";return R+="\n\0",R+=r(E,2),R+=m.magic,R+=r(p,2),R+=r(h,2),R+=r(C.crc32,4),R+=r(C.compressedSize,4),R+=r(C.uncompressedSize,4),R+=r(g.length,2),R+=r(k.length,2),{fileRecord:c.LOCAL_FILE_HEADER+R+g+k,dirRecord:c.CENTRAL_FILE_HEADER+r(I,2)+R+r(_.length,2)+"\0\0\0\0"+r(T,4)+r(n,4)+g+k+_}}var a=e("../utils"),s=e("../stream/GenericWorker"),o=e("../utf8"),l=e("../crc32"),c=e("../signature");function d(e,t,i,r){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=i,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(d,s),d.prototype.push=function(e){var t=e.meta.percent||0,i=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,s.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:i?(t+100*(i-r-1))/i:100}}))},d.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var i=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:i.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,i=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(i.dirRecord),t)this.push({data:function(e){return c.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:i.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var i=this.bytesWritten-e,n=function(e,t,i,n,s){var o=a.transformTo("string",s(n));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(e,2)+r(e,2)+r(t,4)+r(i,4)+r(o.length,2)+o}(this.dirRecords.length,i,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},d.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(e){var t=this._sources;if(!s.prototype.error.call(this,e))return!1;for(var i=0;i<t.length;i++)try{t[i].error(e)}catch(e){}return!0},d.prototype.lock=function(){s.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,i){var r=e("../compressions"),n=e("./ZipFileWorker");i.generateWorker=function(e,t,i){var a=new n(t.streamFiles,i,t.platform,t.encodeFileName),s=0;try{e.forEach(function(e,i){s++;var n=function(e,t){var i=e||t,n=r[i];if(!n)throw new Error(i+" is not a valid compression method !");return n}(i.options.compression,t.compression),o=i.options.compressionOptions||t.compressionOptions||{},l=i.dir,c=i.date;i._compressWorker(n,o).withStreamInfo("file",{name:e,dir:l,date:c,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(a)}),a.entriesCount=s}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new r;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(e,t){return(new r).loadAsync(e,t)},r.external=e("./external"),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,i){var r=e("./utils"),n=e("./external"),a=e("./utf8"),s=e("./zipEntries"),o=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function c(e){return new n.Promise(function(t,i){var r=e.decompressed.getContentWorker().pipe(new o);r.on("error",function(e){i(e)}).on("end",function(){r.streamInfo.crc32!==e.decompressed.crc32?i(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}t.exports=function(e,t){var i=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),l.isNode&&l.isStream(e)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var i=new s(t);return i.load(e),i}).then(function(e){var i=[n.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)i.push(c(r[a]));return n.Promise.all(i)}).then(function(e){for(var n=e.shift(),a=n.files,s=0;s<a.length;s++){var o=a[s],l=o.fileNameStr,c=r.resolve(o.fileNameStr);i.file(c,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileCommentStr.length?o.fileCommentStr:null,unixPermissions:o.unixPermissions,dosPermissions:o.dosPermissions,createFolders:t.createFolders}),o.dir||(i.file(c).unsafeOriginalName=l)}return n.zipComment.length&&(i.comment=n.zipComment),i})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,i){var r=e("../utils"),n=e("../stream/GenericWorker");function a(e,t){n.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,n),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,i){var r=e("readable-stream").Readable;function n(e,t,i){r.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),i&&i(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,r),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,i){t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,i){function r(e,t,i){var r,n=a.getTypeOf(t),o=a.extend(i||{},l);o.date=o.date||new Date,null!==o.compression&&(o.compression=o.compression.toUpperCase()),"string"==typeof o.unixPermissions&&(o.unixPermissions=parseInt(o.unixPermissions,8)),o.unixPermissions&&16384&o.unixPermissions&&(o.dir=!0),o.dosPermissions&&16&o.dosPermissions&&(o.dir=!0),o.dir&&(e=f(e)),o.createFolders&&(r=m(e))&&g.call(this,r,!0);var p="string"===n&&!1===o.binary&&!1===o.base64;i&&void 0!==i.binary||(o.binary=!p),(t instanceof c&&0===t.uncompressedSize||o.dir||!t||0===t.length)&&(o.base64=!1,o.binary=!0,t="",o.compression="STORE",n="string");var b=null;b=t instanceof c||t instanceof s?t:h.isNode&&h.isStream(t)?new u(e,t):a.prepareContent(e,t,o.binary,o.optimizedBinaryString,o.base64);var v=new d(e,b,o);this.files[e]=v}var n=e("./utf8"),a=e("./utils"),s=e("./stream/GenericWorker"),o=e("./stream/StreamHelper"),l=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),p=e("./generate"),h=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),m=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},f=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},g=function(e,t){return t=void 0!==t?t:l.createFolders,e=f(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function b(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,i,r;for(t in this.files)r=this.files[t],(i=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(i,r)},filter:function(e){var t=[];return this.forEach(function(i,r){e(i,r)&&t.push(r)}),t},file:function(e,t,i){if(1!==arguments.length)return e=this.root+e,r.call(this,e,t,i),this;if(b(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(b(e))return this.filter(function(t,i){return i.dir&&e.test(t)});var t=this.root+e,i=g.call(this,t),r=this.clone();return r.root=i.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var i=this.filter(function(t,i){return i.name.slice(0,e.length)===e}),r=0;r<i.length;r++)delete this.files[i[r].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,i={};try{if((i=a.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=i.type.toLowerCase(),i.compression=i.compression.toUpperCase(),"binarystring"===i.type&&(i.type="string"),!i.type)throw new Error("No output type specified.");a.checkSupport(i.type),"darwin"!==i.platform&&"freebsd"!==i.platform&&"linux"!==i.platform&&"sunos"!==i.platform||(i.platform="UNIX"),"win32"===i.platform&&(i.platform="DOS");var r=i.comment||this.comment||"";t=p.generateWorker(this,i,r)}catch(e){(t=new s("error")).error(e)}return new o(t,i.type||"string",i.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,i){t.exports=e("stream")},{stream:void 0}],17:[function(e,t,i){var r=e("./DataReader");function n(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(n,r),n.prototype.byteAt=function(e){return this.data[this.zero+e]},n.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),n=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===i&&this.data[a+2]===r&&this.data[a+3]===n)return a-this.zero;return-1},n.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),n=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&i===a[1]&&r===a[2]&&n===a[3]},n.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./DataReader":18}],18:[function(e,t,i){var r=e("../utils");function n(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,i=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)i=(i<<8)+this.byteAt(t);return this.index+=e,i},readString:function(e){return r.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=n},{"../utils":32}],19:[function(e,t,i){var r=e("./Uint8ArrayReader");function n(e){r.call(this,e)}e("../utils").inherits(n,r),n.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,i){var r=e("./DataReader");function n(e){r.call(this,e)}e("../utils").inherits(n,r),n.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},n.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},n.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},n.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./DataReader":18}],21:[function(e,t,i){var r=e("./ArrayReader");function n(e){r.call(this,e)}e("../utils").inherits(n,r),n.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,i){var r=e("../utils"),n=e("../support"),a=e("./ArrayReader"),s=e("./StringReader"),o=e("./NodeBufferReader"),l=e("./Uint8ArrayReader");t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),"string"!==t||n.uint8array?"nodebuffer"===t?new o(e):n.uint8array?new l(r.transformTo("uint8array",e)):new a(r.transformTo("array",e)):new s(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,i){var r=e("./GenericWorker"),n=e("../utils");function a(e){r.call(this,"ConvertWorker to "+e),this.destType=e}n.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:n.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,i){var r=e("./GenericWorker"),n=e("../crc32");function a(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=n(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,i){var r=e("../utils"),n=e("./GenericWorker");function a(e){n.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,n),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}n.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,i){var r=e("../utils"),n=e("./GenericWorker");function a(e){n.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,n),a.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,i){function r(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var i=0;i<this._listeners[e].length;i++)this._listeners[e][i].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=r},{}],29:[function(e,t,i){var r=e("../utils"),n=e("./ConvertWorker"),a=e("./GenericWorker"),s=e("../base64"),o=e("../support"),l=e("../external"),c=null;if(o.nodestream)try{c=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function d(e,t){return new l.Promise(function(i,n){var a=[],o=e._internalType,l=e._outputType,c=e._mimeType;e.on("data",function(e,i){a.push(e),t&&t(i)}).on("error",function(e){a=[],n(e)}).on("end",function(){try{var e=function(e,t,i){switch(e){case"blob":return r.newBlob(r.transformTo("arraybuffer",t),i);case"base64":return s.encode(t);default:return r.transformTo(e,t)}}(l,function(e,t){var i,r=0,n=null,a=0;for(i=0;i<t.length;i++)a+=t[i].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(n=new Uint8Array(a),i=0;i<t.length;i++)n.set(t[i],r),r+=t[i].length;return n;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(o,a),c);i(e)}catch(e){n(e)}a=[]}).resume()})}function p(e,t,i){var s=t;switch(t){case"blob":case"arraybuffer":s="uint8array";break;case"base64":s="string"}try{this._internalType=s,this._outputType=t,this._mimeType=i,r.checkSupport(s),this._worker=e.pipe(new n(s)),e.lock()}catch(e){this._worker=new a("error"),this._worker.error(e)}}p.prototype={accumulate:function(e){return d(this,e)},on:function(e,t){var i=this;return"data"===e?this._worker.on(e,function(e){t.call(i,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,i)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,i.nodebuffer="undefined"!=typeof Buffer,i.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=0===new Blob([r],{type:"application/zip"}).size}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(r),i.blob=0===n.getBlob("application/zip").size}catch(e){i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch(e){i.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,i){for(var r=e("./utils"),n=e("./support"),a=e("./nodejsUtils"),s=e("./stream/GenericWorker"),o=new Array(256),l=0;l<256;l++)o[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function c(){s.call(this,"utf-8 decode"),this.leftOver=null}function d(){s.call(this,"utf-8 encode")}o[254]=o[254]=1,i.utf8encode=function(e){return n.nodebuffer?a.newBufferFrom(e,"utf-8"):function(e){var t,i,r,a,s,o=e.length,l=0;for(a=0;a<o;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(r=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(r-56320),a++),l+=i<128?1:i<2048?2:i<65536?3:4;for(t=n.uint8array?new Uint8Array(l):new Array(l),a=s=0;s<l;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(r=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(r-56320),a++),i<128?t[s++]=i:(i<2048?t[s++]=192|i>>>6:(i<65536?t[s++]=224|i>>>12:(t[s++]=240|i>>>18,t[s++]=128|i>>>12&63),t[s++]=128|i>>>6&63),t[s++]=128|63&i);return t}(e)},i.utf8decode=function(e){return n.nodebuffer?r.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,i,n,a,s=e.length,l=new Array(2*s);for(t=i=0;t<s;)if((n=e[t++])<128)l[i++]=n;else if(4<(a=o[n]))l[i++]=65533,t+=a-1;else{for(n&=2===a?31:3===a?15:7;1<a&&t<s;)n=n<<6|63&e[t++],a--;1<a?l[i++]=65533:n<65536?l[i++]=n:(n-=65536,l[i++]=55296|n>>10&1023,l[i++]=56320|1023&n)}return l.length!==i&&(l.subarray?l=l.subarray(0,i):l.length=i),r.applyFromCharCode(l)}(e=r.transformTo(n.uint8array?"uint8array":"array",e))},r.inherits(c,s),c.prototype.processChunk=function(e){var t=r.transformTo(n.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(n.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var s=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0||0===i?t:i+o[e[i]]>t?i:t}(t),l=t;s!==t.length&&(n.uint8array?(l=t.subarray(0,s),this.leftOver=t.subarray(s,t.length)):(l=t.slice(0,s),this.leftOver=t.slice(s,t.length))),this.push({data:i.utf8decode(l),meta:e.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=c,r.inherits(d,s),d.prototype.processChunk=function(e){this.push({data:i.utf8encode(e.data),meta:e.meta})},i.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,i){var r=e("./support"),n=e("./base64"),a=e("./nodejsUtils"),s=e("./external");function o(e){return e}function l(e,t){for(var i=0;i<e.length;++i)t[i]=255&e.charCodeAt(i);return t}e("setimmediate"),i.newBlob=function(e,t){i.checkSupport("blob");try{return new Blob([e],{type:t})}catch(i){try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(e,t,i){var r=[],n=0,a=e.length;if(a<=i)return String.fromCharCode.apply(null,e);for(;n<a;)"array"===t||"nodebuffer"===t?r.push(String.fromCharCode.apply(null,e.slice(n,Math.min(n+i,a)))):r.push(String.fromCharCode.apply(null,e.subarray(n,Math.min(n+i,a)))),n+=i;return r.join("")},stringifyByChar:function(e){for(var t="",i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&1===String.fromCharCode.apply(null,a.allocBuffer(1)).length}catch(e){return!1}}()}};function d(e){var t=65536,r=i.getTypeOf(e),n=!0;if("uint8array"===r?n=c.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=c.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return c.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return c.stringifyByChar(e)}function p(e,t){for(var i=0;i<e.length;i++)t[i]=e[i];return t}i.applyFromCharCode=d;var h={};h.string={string:o,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return h.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,a.allocBuffer(e.length))}},h.array={string:d,array:o,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},h.arraybuffer={string:function(e){return d(new Uint8Array(e))},array:function(e){return p(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:o,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},h.uint8array={string:d,array:function(e){return p(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:o,nodebuffer:function(e){return a.newBufferFrom(e)}},h.nodebuffer={string:d,array:function(e){return p(e,new Array(e.length))},arraybuffer:function(e){return h.nodebuffer.uint8array(e).buffer},uint8array:function(e){return p(e,new Uint8Array(e.length))},nodebuffer:o},i.transformTo=function(e,t){if(t=t||"",!e)return t;i.checkSupport(e);var r=i.getTypeOf(t);return h[r][e](t)},i.resolve=function(e){for(var t=e.split("/"),i=[],r=0;r<t.length;r++){var n=t[r];"."===n||""===n&&0!==r&&r!==t.length-1||(".."===n?i.pop():i.push(n))}return i.join("/")},i.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":r.nodebuffer&&a.isBuffer(e)?"nodebuffer":r.uint8array&&e instanceof Uint8Array?"uint8array":r.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(e){if(!r[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(e){var t,i,r="";for(i=0;i<(e||"").length;i++)r+="\\x"+((t=e.charCodeAt(i))<16?"0":"")+t.toString(16).toUpperCase();return r},i.delay=function(e,t,i){setImmediate(function(){e.apply(i||null,t||[])})},i.inherits=function(e,t){function i(){}i.prototype=t.prototype,e.prototype=new i},i.extend=function(){var e,t,i={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===i[t]&&(i[t]=arguments[e][t]);return i},i.prepareContent=function(e,t,a,o,c){return s.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new s.Promise(function(t,i){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){i(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var d=i.getTypeOf(t);return d?("arraybuffer"===d?t=i.transformTo("uint8array",t):"string"===d&&(c?t=n.decode(t):a&&!0!==o&&(t=function(e){return l(e,r.uint8array?new Uint8Array(e.length):new Array(e.length))}(t))),t):s.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,i){var r=e("./reader/readerFor"),n=e("./utils"),a=e("./signature"),s=e("./zipEntry"),o=e("./support");function l(e){this.files=[],this.loadOptions=e}l.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(t)+", expected "+n.pretty(e)+")")}},isSignature:function(e,t){var i=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(i),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",i=n.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,i,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),i=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new s({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var r=t-i;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw new Error("Corrupted zip: missing "+Math.abs(r)+" bytes.")},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=l},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,i){var r=e("./reader/readerFor"),n=e("./utils"),a=e("./compressedObject"),s=e("./crc32"),o=e("./utf8"),l=e("./compressions"),c=e("./support");function d(e,t){this.options=e,this.loadOptions=t}d.prototype={isEncrypted:function(){return!(1&~this.bitFlag)},useUTF8:function(){return!(2048&~this.bitFlag)},readLocalPart:function(e){var t,i;if(e.skip(22),this.fileNameLength=e.readInt(2),i=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(i),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in l)if(Object.prototype.hasOwnProperty.call(l,t)&&l[t].magic===e)return l[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+n.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,i,r,n=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<n;)t=e.readInt(2),i=e.readInt(2),r=e.readData(i),this.extraFields[t]={id:t,length:i,value:r};e.setIndex(n)},handleUTF8:function(){var e=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var i=n.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(i)}var r=this.findExtraFieldUnicodeComment();if(null!==r)this.fileCommentStr=r;else{var a=n.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return 1!==t.readInt(1)||s(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return 1!==t.readInt(1)||s(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,i){function r(e,t,i){this.name=e,this.dir=i.dir,this.date=i.date,this.comment=i.comment,this.unixPermissions=i.unixPermissions,this.dosPermissions=i.dosPermissions,this._data=t,this._dataBinary=i.binary,this.options={compression:i.compression,compressionOptions:i.compressionOptions}}var n=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),s=e("./utf8"),o=e("./compressedObject"),l=e("./stream/GenericWorker");r.prototype={internalStream:function(e){var t=null,i="string";try{if(!e)throw new Error("No output type specified.");var r="string"===(i=e.toLowerCase())||"text"===i;"binarystring"!==i&&"text"!==i||(i="string"),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new s.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new s.Utf8DecodeWorker))}catch(e){(t=new l("error")).error(e)}return new n(t,i,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var i=this._decompressWorker();return this._dataBinary||(i=i.pipe(new s.Utf8EncodeWorker)),o.createWorkerFrom(i,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof l?this._data:new a(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<c.length;p++)r.prototype[c[p]]=d;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,i){(function(e){var i,r,n=e.MutationObserver||e.WebKitMutationObserver;if(n){var a=0,s=new n(d),o=e.document.createTextNode("");s.observe(o,{characterData:!0}),i=function(){o.data=a=++a%2}}else if(e.setImmediate||void 0===e.MessageChannel)i="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){d(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(d,0)};else{var l=new e.MessageChannel;l.port1.onmessage=d,i=function(){l.port2.postMessage(0)}}var c=[];function d(){var e,t;r=!0;for(var i=c.length;i;){for(t=c,c=[],e=-1;++e<i;)t[e]();i=c.length}r=!1}t.exports=function(e){1!==c.push(e)||r||i()}}).call(this,void 0!==_e?_e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,i){var r=e("immediate");function n(){}var a={},s=["REJECTED"],o=["FULFILLED"],l=["PENDING"];function c(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,e!==n&&u(this,e)}function d(e,t,i){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof i&&(this.onRejected=i,this.callRejected=this.otherCallRejected)}function p(e,t,i){r(function(){var r;try{r=t(i)}catch(r){return a.reject(e,r)}r===e?a.reject(e,new TypeError("Cannot resolve promise with itself")):a.resolve(e,r)})}function h(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){var i=!1;function r(t){i||(i=!0,a.reject(e,t))}function n(t){i||(i=!0,a.resolve(e,t))}var s=m(function(){t(n,r)});"error"===s.status&&r(s.value)}function m(e,t){var i={};try{i.value=e(t),i.status="success"}catch(e){i.status="error",i.value=e}return i}(t.exports=c).prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(i){return t.resolve(e()).then(function(){return i})},function(i){return t.resolve(e()).then(function(){throw i})})},c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){if("function"!=typeof e&&this.state===o||"function"!=typeof t&&this.state===s)return this;var i=new this.constructor(n);return this.state!==l?p(i,this.state===o?e:t,this.outcome):this.queue.push(new d(i,e,t)),i},d.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},d.prototype.otherCallFulfilled=function(e){p(this.promise,this.onFulfilled,e)},d.prototype.callRejected=function(e){a.reject(this.promise,e)},d.prototype.otherCallRejected=function(e){p(this.promise,this.onRejected,e)},a.resolve=function(e,t){var i=m(h,t);if("error"===i.status)return a.reject(e,i.value);var r=i.value;if(r)u(e,r);else{e.state=o,e.outcome=t;for(var n=-1,s=e.queue.length;++n<s;)e.queue[n].callFulfilled(t)}return e},a.reject=function(e,t){e.state=s,e.outcome=t;for(var i=-1,r=e.queue.length;++i<r;)e.queue[i].callRejected(t);return e},c.resolve=function(e){return e instanceof this?e:a.resolve(new this(n),e)},c.reject=function(e){var t=new this(n);return a.reject(t,e)},c.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var i=e.length,r=!1;if(!i)return this.resolve([]);for(var s=new Array(i),o=0,l=-1,c=new this(n);++l<i;)d(e[l],l);return c;function d(e,n){t.resolve(e).then(function(e){s[n]=e,++o!==i||r||(r=!0,a.resolve(c,s))},function(e){r||(r=!0,a.reject(c,e))})}},c.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var i=e.length,r=!1;if(!i)return this.resolve([]);for(var s,o=-1,l=new this(n);++o<i;)s=e[o],t.resolve(s).then(function(e){r||(r=!0,a.resolve(l,e))},function(e){r||(r=!0,a.reject(l,e))});return l}},{immediate:36}],38:[function(e,t,i){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,i){var r=e("./zlib/deflate"),n=e("./utils/common"),a=e("./utils/strings"),s=e("./zlib/messages"),o=e("./zlib/zstream"),l=Object.prototype.toString,c=0,d=-1,p=0,h=8;function u(e){if(!(this instanceof u))return new u(e);this.options=n.assign({level:d,method:h,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var i=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(i!==c)throw new Error(s[i]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m="string"==typeof t.dictionary?a.string2buf(t.dictionary):"[object ArrayBuffer]"===l.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(i=r.deflateSetDictionary(this.strm,m))!==c)throw new Error(s[i]);this._dict_set=!0}}function m(e,t){var i=new u(t);if(i.push(e,!0),i.err)throw i.msg||s[i.err];return i.result}u.prototype.push=function(e,t){var i,s,o=this.strm,d=this.options.chunkSize;if(this.ended)return!1;s=t===~~t?t:!0===t?4:0,"string"==typeof e?o.input=a.string2buf(e):"[object ArrayBuffer]"===l.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new n.Buf8(d),o.next_out=0,o.avail_out=d),1!==(i=r.deflate(o,s))&&i!==c)return this.onEnd(i),!(this.ended=!0);0!==o.avail_out&&(0!==o.avail_in||4!==s&&2!==s)||("string"===this.options.to?this.onData(a.buf2binstring(n.shrinkBuf(o.output,o.next_out))):this.onData(n.shrinkBuf(o.output,o.next_out)))}while((0<o.avail_in||0===o.avail_out)&&1!==i);return 4===s?(i=r.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===c):2!==s||(this.onEnd(c),!(o.avail_out=0))},u.prototype.onData=function(e){this.chunks.push(e)},u.prototype.onEnd=function(e){e===c&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Deflate=u,i.deflate=m,i.deflateRaw=function(e,t){return(t=t||{}).raw=!0,m(e,t)},i.gzip=function(e,t){return(t=t||{}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,i){var r=e("./zlib/inflate"),n=e("./utils/common"),a=e("./utils/strings"),s=e("./zlib/constants"),o=e("./zlib/messages"),l=e("./zlib/zstream"),c=e("./zlib/gzheader"),d=Object.prototype.toString;function p(e){if(!(this instanceof p))return new p(e);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var i=r.inflateInit2(this.strm,t.windowBits);if(i!==s.Z_OK)throw new Error(o[i]);this.header=new c,r.inflateGetHeader(this.strm,this.header)}function h(e,t){var i=new p(t);if(i.push(e,!0),i.err)throw i.msg||o[i.err];return i.result}p.prototype.push=function(e,t){var i,o,l,c,p,h,u=this.strm,m=this.options.chunkSize,f=this.options.dictionary,g=!1;if(this.ended)return!1;o=t===~~t?t:!0===t?s.Z_FINISH:s.Z_NO_FLUSH,"string"==typeof e?u.input=a.binstring2buf(e):"[object ArrayBuffer]"===d.call(e)?u.input=new Uint8Array(e):u.input=e,u.next_in=0,u.avail_in=u.input.length;do{if(0===u.avail_out&&(u.output=new n.Buf8(m),u.next_out=0,u.avail_out=m),(i=r.inflate(u,s.Z_NO_FLUSH))===s.Z_NEED_DICT&&f&&(h="string"==typeof f?a.string2buf(f):"[object ArrayBuffer]"===d.call(f)?new Uint8Array(f):f,i=r.inflateSetDictionary(this.strm,h)),i===s.Z_BUF_ERROR&&!0===g&&(i=s.Z_OK,g=!1),i!==s.Z_STREAM_END&&i!==s.Z_OK)return this.onEnd(i),!(this.ended=!0);u.next_out&&(0!==u.avail_out&&i!==s.Z_STREAM_END&&(0!==u.avail_in||o!==s.Z_FINISH&&o!==s.Z_SYNC_FLUSH)||("string"===this.options.to?(l=a.utf8border(u.output,u.next_out),c=u.next_out-l,p=a.buf2string(u.output,l),u.next_out=c,u.avail_out=m-c,c&&n.arraySet(u.output,u.output,l,c,0),this.onData(p)):this.onData(n.shrinkBuf(u.output,u.next_out)))),0===u.avail_in&&0===u.avail_out&&(g=!0)}while((0<u.avail_in||0===u.avail_out)&&i!==s.Z_STREAM_END);return i===s.Z_STREAM_END&&(o=s.Z_FINISH),o===s.Z_FINISH?(i=r.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===s.Z_OK):o!==s.Z_SYNC_FLUSH||(this.onEnd(s.Z_OK),!(u.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===s.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=p,i.inflate=h,i.inflateRaw=function(e,t){return(t=t||{}).raw=!0,h(e,t)},i.ungzip=h},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,i){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var n={arraySet:function(e,t,i,r,n){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+r),n);else for(var a=0;a<r;a++)e[n+a]=t[i+a]},flattenChunks:function(e){var t,i,r,n,a,s;for(t=r=0,i=e.length;t<i;t++)r+=e[t].length;for(s=new Uint8Array(r),t=n=0,i=e.length;t<i;t++)a=e[t],s.set(a,n),n+=a.length;return s}},a={arraySet:function(e,t,i,r,n){for(var a=0;a<r;a++)e[n+a]=t[i+a]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,n)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(r)},{}],42:[function(e,t,i){var r=e("./common"),n=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(e){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){a=!1}for(var s=new r.Buf8(256),o=0;o<256;o++)s[o]=252<=o?6:248<=o?5:240<=o?4:224<=o?3:192<=o?2:1;function l(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&n))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var i="",s=0;s<t;s++)i+=String.fromCharCode(e[s]);return i}s[254]=s[254]=1,i.string2buf=function(e){var t,i,n,a,s,o=e.length,l=0;for(a=0;a<o;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(n-56320),a++),l+=i<128?1:i<2048?2:i<65536?3:4;for(t=new r.Buf8(l),a=s=0;s<l;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(n-56320),a++),i<128?t[s++]=i:(i<2048?t[s++]=192|i>>>6:(i<65536?t[s++]=224|i>>>12:(t[s++]=240|i>>>18,t[s++]=128|i>>>12&63),t[s++]=128|i>>>6&63),t[s++]=128|63&i);return t},i.buf2binstring=function(e){return l(e,e.length)},i.binstring2buf=function(e){for(var t=new r.Buf8(e.length),i=0,n=t.length;i<n;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,r,n,a,o=t||e.length,c=new Array(2*o);for(i=r=0;i<o;)if((n=e[i++])<128)c[r++]=n;else if(4<(a=s[n]))c[r++]=65533,i+=a-1;else{for(n&=2===a?31:3===a?15:7;1<a&&i<o;)n=n<<6|63&e[i++],a--;1<a?c[r++]=65533:n<65536?c[r++]=n:(n-=65536,c[r++]=55296|n>>10&1023,c[r++]=56320|1023&n)}return l(c,r)},i.utf8border=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0||0===i?t:i+s[e[i]]>t?i:t}},{"./common":41}],43:[function(e,t,i){t.exports=function(e,t,i,r){for(var n=65535&e,a=e>>>16&65535,s=0;0!==i;){for(i-=s=2e3<i?2e3:i;a=a+(n=n+t[r++]|0)|0,--s;);n%=65521,a%=65521}return n|a<<16}},{}],44:[function(e,t,i){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,i){var r=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t,i,n){var a=r,s=n+i;e^=-1;for(var o=n;o<s;o++)e=e>>>8^a[255&(e^t[o])];return-1^e}},{}],46:[function(e,t,i){var r,n=e("../utils/common"),a=e("./trees"),s=e("./adler32"),o=e("./crc32"),l=e("./messages"),c=0,d=4,p=0,h=-2,u=-1,m=4,f=2,g=8,b=9,v=286,_=30,x=19,y=2*v+1,w=15,k=3,$=258,S=$+k+1,A=42,z=113,C=1,E=2,T=3,I=4;function R(e,t){return e.msg=l[t],t}function O(e){return(e<<1)-(4<e?9:0)}function F(e){for(var t=e.length;0<=--t;)e[t]=0}function D(e){var t=e.state,i=t.pending;i>e.avail_out&&(i=e.avail_out),0!==i&&(n.arraySet(e.output,t.pending_buf,t.pending_out,i,e.next_out),e.next_out+=i,t.pending_out+=i,e.total_out+=i,e.avail_out-=i,t.pending-=i,0===t.pending&&(t.pending_out=0))}function P(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,D(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function B(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function M(e,t){var i,r,n=e.max_chain_length,a=e.strstart,s=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-S?e.strstart-(e.w_size-S):0,c=e.window,d=e.w_mask,p=e.prev,h=e.strstart+$,u=c[a+s-1],m=c[a+s];e.prev_length>=e.good_match&&(n>>=2),o>e.lookahead&&(o=e.lookahead);do{if(c[(i=t)+s]===m&&c[i+s-1]===u&&c[i]===c[a]&&c[++i]===c[a+1]){a+=2,i++;do{}while(c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&a<h);if(r=$-(h-a),a=h-$,s<r){if(e.match_start=t,o<=(s=r))break;u=c[a+s-1],m=c[a+s]}}}while((t=p[t&d])>l&&0!=--n);return s<=e.lookahead?s:e.lookahead}function N(e){var t,i,r,a,l,c,d,p,h,u,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-S)){for(n.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=i=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--i;);for(t=i=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--i;);a+=m}if(0===e.strm.avail_in)break;if(c=e.strm,d=e.window,p=e.strstart+e.lookahead,u=void 0,(h=a)<(u=c.avail_in)&&(u=h),i=0===u?0:(c.avail_in-=u,n.arraySet(d,c.input,c.next_in,u,p),1===c.state.wrap?c.adler=s(c.adler,d,u,p):2===c.state.wrap&&(c.adler=o(c.adler,d,u,p)),c.next_in+=u,c.total_in+=u,u),e.lookahead+=i,e.lookahead+e.insert>=k)for(l=e.strstart-e.insert,e.ins_h=e.window[l],e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+k-1])&e.hash_mask,e.prev[l&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=l,l++,e.insert--,!(e.lookahead+e.insert<k)););}while(e.lookahead<S&&0!==e.strm.avail_in)}function j(e,t){for(var i,r;;){if(e.lookahead<S){if(N(e),e.lookahead<S&&t===c)return C;if(0===e.lookahead)break}if(i=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==i&&e.strstart-i<=e.w_size-S&&(e.match_length=M(e,i)),e.match_length>=k)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-k),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=k){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(P(e,!1),0===e.strm.avail_out))return C}return e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(P(e,!0),0===e.strm.avail_out?T:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?C:E}function U(e,t){for(var i,r,n;;){if(e.lookahead<S){if(N(e),e.lookahead<S&&t===c)return C;if(0===e.lookahead)break}if(i=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=k-1,0!==i&&e.prev_length<e.max_lazy_match&&e.strstart-i<=e.w_size-S&&(e.match_length=M(e,i),e.match_length<=5&&(1===e.strategy||e.match_length===k&&4096<e.strstart-e.match_start)&&(e.match_length=k-1)),e.prev_length>=k&&e.match_length<=e.prev_length){for(n=e.strstart+e.lookahead-k,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-k),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=n&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=k-1,e.strstart++,r&&(P(e,!1),0===e.strm.avail_out))return C}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&P(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return C}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=a._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(P(e,!0),0===e.strm.avail_out?T:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?C:E}function W(e,t,i,r,n){this.good_length=e,this.max_lazy=t,this.nice_length=i,this.max_chain=r,this.func=n}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*y),this.dyn_dtree=new n.Buf16(2*(2*_+1)),this.bl_tree=new n.Buf16(2*(2*x+1)),F(this.dyn_ltree),F(this.dyn_dtree),F(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(w+1),this.heap=new n.Buf16(2*v+1),F(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*v+1),F(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Z(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=f,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?A:z,e.adler=2===t.wrap?0:1,t.last_flush=c,a._tr_init(t),p):R(e,h)}function q(e){var t=Z(e);return t===p&&function(e){e.window_size=2*e.w_size,F(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=k-1,e.match_available=0,e.ins_h=0}(e.state),t}function V(e,t,i,r,a,s){if(!e)return h;var o=1;if(t===u&&(t=6),r<0?(o=0,r=-r):15<r&&(o=2,r-=16),a<1||b<a||i!==g||r<8||15<r||t<0||9<t||s<0||m<s)return R(e,h);8===r&&(r=9);var l=new H;return(e.state=l).strm=e,l.wrap=o,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=a+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+k-1)/k),l.window=new n.Buf8(2*l.w_size),l.head=new n.Buf16(l.hash_size),l.prev=new n.Buf16(l.w_size),l.lit_bufsize=1<<a+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new n.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=t,l.strategy=s,l.method=i,q(e)}r=[new W(0,0,0,0,function(e,t){var i=65535;for(i>e.pending_buf_size-5&&(i=e.pending_buf_size-5);;){if(e.lookahead<=1){if(N(e),0===e.lookahead&&t===c)return C;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+i;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,P(e,!1),0===e.strm.avail_out))return C;if(e.strstart-e.block_start>=e.w_size-S&&(P(e,!1),0===e.strm.avail_out))return C}return e.insert=0,t===d?(P(e,!0),0===e.strm.avail_out?T:I):(e.strstart>e.block_start&&(P(e,!1),e.strm.avail_out),C)}),new W(4,4,8,4,j),new W(4,5,16,8,j),new W(4,6,32,32,j),new W(4,4,16,16,U),new W(8,16,32,32,U),new W(8,16,128,128,U),new W(8,32,128,256,U),new W(32,128,258,1024,U),new W(32,258,258,4096,U)],i.deflateInit=function(e,t){return V(e,t,g,15,8,0)},i.deflateInit2=V,i.deflateReset=q,i.deflateResetKeep=Z,i.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?h:(e.state.gzhead=t,p):h},i.deflate=function(e,t){var i,n,s,l;if(!e||!e.state||5<t||t<0)return e?R(e,h):h;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==d)return R(e,0===e.avail_out?-5:h);if(n.strm=e,i=n.last_flush,n.last_flush=t,n.status===A)if(2===n.wrap)e.adler=0,L(n,31),L(n,139),L(n,8),n.gzhead?(L(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),L(n,255&n.gzhead.time),L(n,n.gzhead.time>>8&255),L(n,n.gzhead.time>>16&255),L(n,n.gzhead.time>>24&255),L(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),L(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(L(n,255&n.gzhead.extra.length),L(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=o(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(L(n,0),L(n,0),L(n,0),L(n,0),L(n,0),L(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),L(n,3),n.status=z);else{var u=g+(n.w_bits-8<<4)<<8;u|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(u|=32),u+=31-u%31,n.status=z,B(n,u),0!==n.strstart&&(B(n,e.adler>>>16),B(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(s=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),D(e),s=n.pending,n.pending!==n.pending_buf_size));)L(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){s=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),D(e),s=n.pending,n.pending===n.pending_buf_size)){l=1;break}l=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,L(n,l)}while(0!==l);n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),0===l&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){s=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),D(e),s=n.pending,n.pending===n.pending_buf_size)){l=1;break}l=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,L(n,l)}while(0!==l);n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),0===l&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&D(e),n.pending+2<=n.pending_buf_size&&(L(n,255&e.adler),L(n,e.adler>>8&255),e.adler=0,n.status=z)):n.status=z),0!==n.pending){if(D(e),0===e.avail_out)return n.last_flush=-1,p}else if(0===e.avail_in&&O(t)<=O(i)&&t!==d)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==c&&666!==n.status){var m=2===n.strategy?function(e,t){for(var i;;){if(0===e.lookahead&&(N(e),0===e.lookahead)){if(t===c)return C;break}if(e.match_length=0,i=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,i&&(P(e,!1),0===e.strm.avail_out))return C}return e.insert=0,t===d?(P(e,!0),0===e.strm.avail_out?T:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?C:E}(n,t):3===n.strategy?function(e,t){for(var i,r,n,s,o=e.window;;){if(e.lookahead<=$){if(N(e),e.lookahead<=$&&t===c)return C;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=k&&0<e.strstart&&(r=o[n=e.strstart-1])===o[++n]&&r===o[++n]&&r===o[++n]){s=e.strstart+$;do{}while(r===o[++n]&&r===o[++n]&&r===o[++n]&&r===o[++n]&&r===o[++n]&&r===o[++n]&&r===o[++n]&&r===o[++n]&&n<s);e.match_length=$-(s-n),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=k?(i=a._tr_tally(e,1,e.match_length-k),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(i=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),i&&(P(e,!1),0===e.strm.avail_out))return C}return e.insert=0,t===d?(P(e,!0),0===e.strm.avail_out?T:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?C:E}(n,t):r[n.level].func(n,t);if(m!==T&&m!==I||(n.status=666),m===C||m===T)return 0===e.avail_out&&(n.last_flush=-1),p;if(m===E&&(1===t?a._tr_align(n):5!==t&&(a._tr_stored_block(n,0,0,!1),3===t&&(F(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),D(e),0===e.avail_out))return n.last_flush=-1,p}return t!==d?p:n.wrap<=0?1:(2===n.wrap?(L(n,255&e.adler),L(n,e.adler>>8&255),L(n,e.adler>>16&255),L(n,e.adler>>24&255),L(n,255&e.total_in),L(n,e.total_in>>8&255),L(n,e.total_in>>16&255),L(n,e.total_in>>24&255)):(B(n,e.adler>>>16),B(n,65535&e.adler)),D(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?p:1)},i.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==A&&69!==t&&73!==t&&91!==t&&103!==t&&t!==z&&666!==t?R(e,h):(e.state=null,t===z?R(e,-3):p):h},i.deflateSetDictionary=function(e,t){var i,r,a,o,l,c,d,u,m=t.length;if(!e||!e.state)return h;if(2===(o=(i=e.state).wrap)||1===o&&i.status!==A||i.lookahead)return h;for(1===o&&(e.adler=s(e.adler,t,m,0)),i.wrap=0,m>=i.w_size&&(0===o&&(F(i.head),i.strstart=0,i.block_start=0,i.insert=0),u=new n.Buf8(i.w_size),n.arraySet(u,t,m-i.w_size,i.w_size,0),t=u,m=i.w_size),l=e.avail_in,c=e.next_in,d=e.input,e.avail_in=m,e.next_in=0,e.input=t,N(i);i.lookahead>=k;){for(r=i.strstart,a=i.lookahead-(k-1);i.ins_h=(i.ins_h<<i.hash_shift^i.window[r+k-1])&i.hash_mask,i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++,--a;);i.strstart=r,i.lookahead=k-1,N(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=k-1,i.match_available=0,e.next_in=c,e.input=d,e.avail_in=l,i.wrap=o,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,i){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,i){t.exports=function(e,t){var i,r,n,a,s,o,l,c,d,p,h,u,m,f,g,b,v,_,x,y,w,k,$,S,A;i=e.state,r=e.next_in,S=e.input,n=r+(e.avail_in-5),a=e.next_out,A=e.output,s=a-(t-e.avail_out),o=a+(e.avail_out-257),l=i.dmax,c=i.wsize,d=i.whave,p=i.wnext,h=i.window,u=i.hold,m=i.bits,f=i.lencode,g=i.distcode,b=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{m<15&&(u+=S[r++]<<m,m+=8,u+=S[r++]<<m,m+=8),_=f[u&b];t:for(;;){if(u>>>=x=_>>>24,m-=x,0==(x=_>>>16&255))A[a++]=65535&_;else{if(!(16&x)){if(!(64&x)){_=f[(65535&_)+(u&(1<<x)-1)];continue t}if(32&x){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}y=65535&_,(x&=15)&&(m<x&&(u+=S[r++]<<m,m+=8),y+=u&(1<<x)-1,u>>>=x,m-=x),m<15&&(u+=S[r++]<<m,m+=8,u+=S[r++]<<m,m+=8),_=g[u&v];i:for(;;){if(u>>>=x=_>>>24,m-=x,!(16&(x=_>>>16&255))){if(!(64&x)){_=g[(65535&_)+(u&(1<<x)-1)];continue i}e.msg="invalid distance code",i.mode=30;break e}if(w=65535&_,m<(x&=15)&&(u+=S[r++]<<m,(m+=8)<x&&(u+=S[r++]<<m,m+=8)),l<(w+=u&(1<<x)-1)){e.msg="invalid distance too far back",i.mode=30;break e}if(u>>>=x,m-=x,(x=a-s)<w){if(d<(x=w-x)&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if($=h,(k=0)===p){if(k+=c-x,x<y){for(y-=x;A[a++]=h[k++],--x;);k=a-w,$=A}}else if(p<x){if(k+=c+p-x,(x-=p)<y){for(y-=x;A[a++]=h[k++],--x;);if(k=0,p<y){for(y-=x=p;A[a++]=h[k++],--x;);k=a-w,$=A}}}else if(k+=p-x,x<y){for(y-=x;A[a++]=h[k++],--x;);k=a-w,$=A}for(;2<y;)A[a++]=$[k++],A[a++]=$[k++],A[a++]=$[k++],y-=3;y&&(A[a++]=$[k++],1<y&&(A[a++]=$[k++]))}else{for(k=a-w;A[a++]=A[k++],A[a++]=A[k++],A[a++]=A[k++],2<(y-=3););y&&(A[a++]=A[k++],1<y&&(A[a++]=A[k++]))}break}}break}}while(r<n&&a<o);r-=y=m>>3,u&=(1<<(m-=y<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<n?n-r+5:5-(r-n),e.avail_out=a<o?o-a+257:257-(a-o),i.hold=u,i.bits=m}},{}],49:[function(e,t,i){var r=e("../utils/common"),n=e("./adler32"),a=e("./crc32"),s=e("./inffast"),o=e("./inftrees"),l=1,c=2,d=0,p=-2,h=1,u=852,m=592;function f(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=h,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(u),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,d):p}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,b(e)):p}function _(e,t){var i,r;return e&&e.state?(r=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?p:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=i,r.wbits=t,v(e))):p}function x(e,t){var i,r;return e?(r=new g,(e.state=r).window=null,(i=_(e,t))!==d&&(e.state=null),i):p}var y,w,k=!0;function $(e){if(k){var t;for(y=new r.Buf32(512),w=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(o(l,e.lens,0,288,y,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;o(c,e.lens,0,32,w,0,e.work,{bits:5}),k=!1}e.lencode=y,e.lenbits=9,e.distcode=w,e.distbits=5}function S(e,t,i,n){var a,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new r.Buf8(s.wsize)),n>=s.wsize?(r.arraySet(s.window,t,i-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(a=s.wsize-s.wnext)&&(a=n),r.arraySet(s.window,t,i-n,a,s.wnext),(n-=a)?(r.arraySet(s.window,t,i-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=a,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=a))),0}i.inflateReset=v,i.inflateReset2=_,i.inflateResetKeep=b,i.inflateInit=function(e){return x(e,15)},i.inflateInit2=x,i.inflate=function(e,t){var i,u,m,g,b,v,_,x,y,w,k,A,z,C,E,T,I,R,O,F,D,P,L,B,M=0,N=new r.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return p;12===(i=e.state).mode&&(i.mode=13),b=e.next_out,m=e.output,_=e.avail_out,g=e.next_in,u=e.input,v=e.avail_in,x=i.hold,y=i.bits,w=v,k=_,P=d;e:for(;;)switch(i.mode){case h:if(0===i.wrap){i.mode=13;break}for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(2&i.wrap&&35615===x){N[i.check=0]=255&x,N[1]=x>>>8&255,i.check=a(i.check,N,2,0),y=x=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&x)<<8)+(x>>8))%31){e.msg="incorrect header check",i.mode=30;break}if(8!=(15&x)){e.msg="unknown compression method",i.mode=30;break}if(y-=4,D=8+(15&(x>>>=4)),0===i.wbits)i.wbits=D;else if(D>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<D,e.adler=i.check=1,i.mode=512&x?10:12,y=x=0;break;case 2:for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(i.flags=x,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=x>>8&1),512&i.flags&&(N[0]=255&x,N[1]=x>>>8&255,i.check=a(i.check,N,2,0)),y=x=0,i.mode=3;case 3:for(;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.head&&(i.head.time=x),512&i.flags&&(N[0]=255&x,N[1]=x>>>8&255,N[2]=x>>>16&255,N[3]=x>>>24&255,i.check=a(i.check,N,4,0)),y=x=0,i.mode=4;case 4:for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.head&&(i.head.xflags=255&x,i.head.os=x>>8),512&i.flags&&(N[0]=255&x,N[1]=x>>>8&255,i.check=a(i.check,N,2,0)),y=x=0,i.mode=5;case 5:if(1024&i.flags){for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.length=x,i.head&&(i.head.extra_len=x),512&i.flags&&(N[0]=255&x,N[1]=x>>>8&255,i.check=a(i.check,N,2,0)),y=x=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&(v<(A=i.length)&&(A=v),A&&(i.head&&(D=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),r.arraySet(i.head.extra,u,g,A,D)),512&i.flags&&(i.check=a(i.check,u,A,g)),v-=A,g+=A,i.length-=A),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===v)break e;for(A=0;D=u[g+A++],i.head&&D&&i.length<65536&&(i.head.name+=String.fromCharCode(D)),D&&A<v;);if(512&i.flags&&(i.check=a(i.check,u,A,g)),v-=A,g+=A,D)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===v)break e;for(A=0;D=u[g+A++],i.head&&D&&i.length<65536&&(i.head.comment+=String.fromCharCode(D)),D&&A<v;);if(512&i.flags&&(i.check=a(i.check,u,A,g)),v-=A,g+=A,D)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(x!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}y=x=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}e.adler=i.check=f(x),y=x=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=b,e.avail_out=_,e.next_in=g,e.avail_in=v,i.hold=x,i.bits=y,2;e.adler=i.check=1,i.mode=12;case 12:if(5===t||6===t)break e;case 13:if(i.last){x>>>=7&y,y-=7&y,i.mode=27;break}for(;y<3;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}switch(i.last=1&x,y-=1,3&(x>>>=1)){case 0:i.mode=14;break;case 1:if($(i),i.mode=20,6!==t)break;x>>>=2,y-=2;break e;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}x>>>=2,y-=2;break;case 14:for(x>>>=7&y,y-=7&y;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if((65535&x)!=(x>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&x,y=x=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(A=i.length){if(v<A&&(A=v),_<A&&(A=_),0===A)break e;r.arraySet(m,u,g,A,b),v-=A,g+=A,_-=A,b+=A,i.length-=A;break}i.mode=12;break;case 17:for(;y<14;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(i.nlen=257+(31&x),x>>>=5,y-=5,i.ndist=1+(31&x),x>>>=5,y-=5,i.ncode=4+(15&x),x>>>=4,y-=4,286<i.nlen||30<i.ndist){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;y<3;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.lens[j[i.have++]]=7&x,x>>>=3,y-=3}for(;i.have<19;)i.lens[j[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,L={bits:i.lenbits},P=o(0,i.lens,0,19,i.lencode,0,i.work,L),i.lenbits=L.bits,P){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;T=(M=i.lencode[x&(1<<i.lenbits)-1])>>>16&255,I=65535&M,!((E=M>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(I<16)x>>>=E,y-=E,i.lens[i.have++]=I;else{if(16===I){for(B=E+2;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(x>>>=E,y-=E,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}D=i.lens[i.have-1],A=3+(3&x),x>>>=2,y-=2}else if(17===I){for(B=E+3;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}y-=E,D=0,A=3+(7&(x>>>=E)),x>>>=3,y-=3}else{for(B=E+7;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}y-=E,D=0,A=11+(127&(x>>>=E)),x>>>=7,y-=7}if(i.have+A>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;A--;)i.lens[i.have++]=D}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,L={bits:i.lenbits},P=o(l,i.lens,0,i.nlen,i.lencode,0,i.work,L),i.lenbits=L.bits,P){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,L={bits:i.distbits},P=o(c,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,L),i.distbits=L.bits,P){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(6<=v&&258<=_){e.next_out=b,e.avail_out=_,e.next_in=g,e.avail_in=v,i.hold=x,i.bits=y,s(e,k),b=e.next_out,m=e.output,_=e.avail_out,g=e.next_in,u=e.input,v=e.avail_in,x=i.hold,y=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;T=(M=i.lencode[x&(1<<i.lenbits)-1])>>>16&255,I=65535&M,!((E=M>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(T&&!(240&T)){for(R=E,O=T,F=I;T=(M=i.lencode[F+((x&(1<<R+O)-1)>>R)])>>>16&255,I=65535&M,!(R+(E=M>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}x>>>=R,y-=R,i.back+=R}if(x>>>=E,y-=E,i.back+=E,i.length=I,0===T){i.mode=26;break}if(32&T){i.back=-1,i.mode=12;break}if(64&T){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&T,i.mode=22;case 22:if(i.extra){for(B=i.extra;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.length+=x&(1<<i.extra)-1,x>>>=i.extra,y-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;T=(M=i.distcode[x&(1<<i.distbits)-1])>>>16&255,I=65535&M,!((E=M>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(!(240&T)){for(R=E,O=T,F=I;T=(M=i.distcode[F+((x&(1<<R+O)-1)>>R)])>>>16&255,I=65535&M,!(R+(E=M>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}x>>>=R,y-=R,i.back+=R}if(x>>>=E,y-=E,i.back+=E,64&T){e.msg="invalid distance code",i.mode=30;break}i.offset=I,i.extra=15&T,i.mode=24;case 24:if(i.extra){for(B=i.extra;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.offset+=x&(1<<i.extra)-1,x>>>=i.extra,y-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===_)break e;if(A=k-_,i.offset>A){if((A=i.offset-A)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}z=A>i.wnext?(A-=i.wnext,i.wsize-A):i.wnext-A,A>i.length&&(A=i.length),C=i.window}else C=m,z=b-i.offset,A=i.length;for(_<A&&(A=_),_-=A,i.length-=A;m[b++]=C[z++],--A;);0===i.length&&(i.mode=21);break;case 26:if(0===_)break e;m[b++]=i.length,_--,i.mode=21;break;case 27:if(i.wrap){for(;y<32;){if(0===v)break e;v--,x|=u[g++]<<y,y+=8}if(k-=_,e.total_out+=k,i.total+=k,k&&(e.adler=i.check=i.flags?a(i.check,m,k,b-k):n(i.check,m,k,b-k)),k=_,(i.flags?x:f(x))!==i.check){e.msg="incorrect data check",i.mode=30;break}y=x=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(x!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}y=x=0}i.mode=29;case 29:P=1;break e;case 30:P=-3;break e;case 31:return-4;default:return p}return e.next_out=b,e.avail_out=_,e.next_in=g,e.avail_in=v,i.hold=x,i.bits=y,(i.wsize||k!==e.avail_out&&i.mode<30&&(i.mode<27||4!==t))&&S(e,e.output,e.next_out,k-e.avail_out)?(i.mode=31,-4):(w-=e.avail_in,k-=e.avail_out,e.total_in+=w,e.total_out+=k,i.total+=k,i.wrap&&k&&(e.adler=i.check=i.flags?a(i.check,m,k,e.next_out-k):n(i.check,m,k,e.next_out-k)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0==w&&0===k||4===t)&&P===d&&(P=-5),P)},i.inflateEnd=function(e){if(!e||!e.state)return p;var t=e.state;return t.window&&(t.window=null),e.state=null,d},i.inflateGetHeader=function(e,t){var i;return e&&e.state&&2&(i=e.state).wrap?((i.head=t).done=!1,d):p},i.inflateSetDictionary=function(e,t){var i,r=t.length;return e&&e.state?0!==(i=e.state).wrap&&11!==i.mode?p:11===i.mode&&n(1,t,r,0)!==i.check?-3:S(e,t,r,r)?(i.mode=31,-4):(i.havedict=1,d):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,i){var r=e("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,l,c,d,p,h){var u,m,f,g,b,v,_,x,y,w=h.bits,k=0,$=0,S=0,A=0,z=0,C=0,E=0,T=0,I=0,R=0,O=null,F=0,D=new r.Buf16(16),P=new r.Buf16(16),L=null,B=0;for(k=0;k<=15;k++)D[k]=0;for($=0;$<l;$++)D[t[i+$]]++;for(z=w,A=15;1<=A&&0===D[A];A--);if(A<z&&(z=A),0===A)return c[d++]=20971520,c[d++]=20971520,h.bits=1,0;for(S=1;S<A&&0===D[S];S++);for(z<S&&(z=S),k=T=1;k<=15;k++)if(T<<=1,(T-=D[k])<0)return-1;if(0<T&&(0===e||1!==A))return-1;for(P[1]=0,k=1;k<15;k++)P[k+1]=P[k]+D[k];for($=0;$<l;$++)0!==t[i+$]&&(p[P[t[i+$]]++]=$);if(v=0===e?(O=L=p,19):1===e?(O=n,F-=257,L=a,B-=257,256):(O=s,L=o,-1),k=S,b=d,E=$=R=0,f=-1,g=(I=1<<(C=z))-1,1===e&&852<I||2===e&&592<I)return 1;for(;;){for(_=k-E,y=p[$]<v?(x=0,p[$]):p[$]>v?(x=L[B+p[$]],O[F+p[$]]):(x=96,0),u=1<<k-E,S=m=1<<C;c[b+(R>>E)+(m-=u)]=_<<24|x<<16|y,0!==m;);for(u=1<<k-1;R&u;)u>>=1;if(0!==u?(R&=u-1,R+=u):R=0,$++,0==--D[k]){if(k===A)break;k=t[i+p[$]]}if(z<k&&(R&g)!==f){for(0===E&&(E=z),b+=S,T=1<<(C=k-E);C+E<A&&!((T-=D[C+E])<=0);)C++,T<<=1;if(I+=1<<C,1===e&&852<I||2===e&&592<I)return 1;c[f=R&g]=z<<24|C<<16|b-d}}return 0!==R&&(c[b+R]=k-E<<24|64<<16),h.bits=z,0}},{"../utils/common":41}],51:[function(e,t,i){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,i){var r=e("../utils/common"),n=0,a=1;function s(e){for(var t=e.length;0<=--t;)e[t]=0}var o=0,l=29,c=256,d=c+1+l,p=30,h=19,u=2*d+1,m=15,f=16,g=7,b=256,v=16,_=17,x=18,y=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],w=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S=new Array(2*(d+2));s(S);var A=new Array(2*p);s(A);var z=new Array(512);s(z);var C=new Array(256);s(C);var E=new Array(l);s(E);var T,I,R,O=new Array(p);function F(e,t,i,r,n){this.static_tree=e,this.extra_bits=t,this.extra_base=i,this.elems=r,this.max_length=n,this.has_stree=e&&e.length}function D(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function P(e){return e<256?z[e]:z[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function B(e,t,i){e.bi_valid>f-i?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>f-e.bi_valid,e.bi_valid+=i-f):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=i)}function M(e,t,i){B(e,i[2*t],i[2*t+1])}function N(e,t){for(var i=0;i|=1&e,e>>>=1,i<<=1,0<--t;);return i>>>1}function j(e,t,i){var r,n,a=new Array(m+1),s=0;for(r=1;r<=m;r++)a[r]=s=s+i[r-1]<<1;for(n=0;n<=t;n++){var o=e[2*n+1];0!==o&&(e[2*n]=N(a[o]++,o))}}function U(e){var t;for(t=0;t<d;t++)e.dyn_ltree[2*t]=0;for(t=0;t<p;t++)e.dyn_dtree[2*t]=0;for(t=0;t<h;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*b]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function W(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,i,r){var n=2*t,a=2*i;return e[n]<e[a]||e[n]===e[a]&&r[t]<=r[i]}function Z(e,t,i){for(var r=e.heap[i],n=i<<1;n<=e.heap_len&&(n<e.heap_len&&H(t,e.heap[n+1],e.heap[n],e.depth)&&n++,!H(t,r,e.heap[n],e.depth));)e.heap[i]=e.heap[n],i=n,n<<=1;e.heap[i]=r}function q(e,t,i){var r,n,a,s,o=0;if(0!==e.last_lit)for(;r=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],n=e.pending_buf[e.l_buf+o],o++,0===r?M(e,n,t):(M(e,(a=C[n])+c+1,t),0!==(s=y[a])&&B(e,n-=E[a],s),M(e,a=P(--r),i),0!==(s=w[a])&&B(e,r-=O[a],s)),o<e.last_lit;);M(e,b,t)}function V(e,t){var i,r,n,a=t.dyn_tree,s=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=u,i=0;i<l;i++)0!==a[2*i]?(e.heap[++e.heap_len]=c=i,e.depth[i]=0):a[2*i+1]=0;for(;e.heap_len<2;)a[2*(n=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[n]=0,e.opt_len--,o&&(e.static_len-=s[2*n+1]);for(t.max_code=c,i=e.heap_len>>1;1<=i;i--)Z(e,a,i);for(n=l;i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Z(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=r,a[2*n]=a[2*i]+a[2*r],e.depth[n]=(e.depth[i]>=e.depth[r]?e.depth[i]:e.depth[r])+1,a[2*i+1]=a[2*r+1]=n,e.heap[1]=n++,Z(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var i,r,n,a,s,o,l=t.dyn_tree,c=t.max_code,d=t.stat_desc.static_tree,p=t.stat_desc.has_stree,h=t.stat_desc.extra_bits,f=t.stat_desc.extra_base,g=t.stat_desc.max_length,b=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(l[2*e.heap[e.heap_max]+1]=0,i=e.heap_max+1;i<u;i++)g<(a=l[2*l[2*(r=e.heap[i])+1]+1]+1)&&(a=g,b++),l[2*r+1]=a,c<r||(e.bl_count[a]++,s=0,f<=r&&(s=h[r-f]),o=l[2*r],e.opt_len+=o*(a+s),p&&(e.static_len+=o*(d[2*r+1]+s)));if(0!==b){do{for(a=g-1;0===e.bl_count[a];)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,b-=2}while(0<b);for(a=g;0!==a;a--)for(r=e.bl_count[a];0!==r;)c<(n=e.heap[--i])||(l[2*n+1]!==a&&(e.opt_len+=(a-l[2*n+1])*l[2*n],l[2*n+1]=a),r--)}}(e,t),j(a,c,e.bl_count)}function G(e,t,i){var r,n,a=-1,s=t[1],o=0,l=7,c=4;for(0===s&&(l=138,c=3),t[2*(i+1)+1]=65535,r=0;r<=i;r++)n=s,s=t[2*(r+1)+1],++o<l&&n===s||(o<c?e.bl_tree[2*n]+=o:0!==n?(n!==a&&e.bl_tree[2*n]++,e.bl_tree[2*v]++):o<=10?e.bl_tree[2*_]++:e.bl_tree[2*x]++,a=n,c=(o=0)===s?(l=138,3):n===s?(l=6,3):(l=7,4))}function K(e,t,i){var r,n,a=-1,s=t[1],o=0,l=7,c=4;for(0===s&&(l=138,c=3),r=0;r<=i;r++)if(n=s,s=t[2*(r+1)+1],!(++o<l&&n===s)){if(o<c)for(;M(e,n,e.bl_tree),0!=--o;);else 0!==n?(n!==a&&(M(e,n,e.bl_tree),o--),M(e,v,e.bl_tree),B(e,o-3,2)):o<=10?(M(e,_,e.bl_tree),B(e,o-3,3)):(M(e,x,e.bl_tree),B(e,o-11,7));a=n,c=(o=0)===s?(l=138,3):n===s?(l=6,3):(l=7,4)}}s(O);var Q=!1;function X(e,t,i,n){B(e,(o<<1)+(n?1:0),3),function(e,t,i){W(e),L(e,i),L(e,~i),r.arraySet(e.pending_buf,e.window,t,i,e.pending),e.pending+=i}(e,t,i)}i._tr_init=function(e){Q||(function(){var e,t,i,r,n,a=new Array(m+1);for(r=i=0;r<l-1;r++)for(E[r]=i,e=0;e<1<<y[r];e++)C[i++]=r;for(C[i-1]=r,r=n=0;r<16;r++)for(O[r]=n,e=0;e<1<<w[r];e++)z[n++]=r;for(n>>=7;r<p;r++)for(O[r]=n<<7,e=0;e<1<<w[r]-7;e++)z[256+n++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)S[2*e+1]=8,e++,a[8]++;for(;e<=255;)S[2*e+1]=9,e++,a[9]++;for(;e<=279;)S[2*e+1]=7,e++,a[7]++;for(;e<=287;)S[2*e+1]=8,e++,a[8]++;for(j(S,d+1,a),e=0;e<p;e++)A[2*e+1]=5,A[2*e]=N(e,5);T=new F(S,y,c+1,d,m),I=new F(A,w,0,p,m),R=new F(new Array(0),k,0,h,g)}(),Q=!0),e.l_desc=new D(e.dyn_ltree,T),e.d_desc=new D(e.dyn_dtree,I),e.bl_desc=new D(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,U(e)},i._tr_stored_block=X,i._tr_flush_block=function(e,t,i,r){var s,o,l=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,i=4093624447;for(t=0;t<=31;t++,i>>>=1)if(1&i&&0!==e.dyn_ltree[2*t])return n;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return a;for(t=32;t<c;t++)if(0!==e.dyn_ltree[2*t])return a;return n}(e)),V(e,e.l_desc),V(e,e.d_desc),l=function(e){var t;for(G(e,e.dyn_ltree,e.l_desc.max_code),G(e,e.dyn_dtree,e.d_desc.max_code),V(e,e.bl_desc),t=h-1;3<=t&&0===e.bl_tree[2*$[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),s=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=s&&(s=o)):s=o=i+5,i+4<=s&&-1!==t?X(e,t,i,r):4===e.strategy||o===s?(B(e,2+(r?1:0),3),q(e,S,A)):(B(e,4+(r?1:0),3),function(e,t,i,r){var n;for(B(e,t-257,5),B(e,i-1,5),B(e,r-4,4),n=0;n<r;n++)B(e,e.bl_tree[2*$[n]+1],3);K(e,e.dyn_ltree,t-1),K(e,e.dyn_dtree,i-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,l+1),q(e,e.dyn_ltree,e.dyn_dtree)),U(e),r&&W(e)},i._tr_tally=function(e,t,i){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&i,e.last_lit++,0===t?e.dyn_ltree[2*i]++:(e.matches++,t--,e.dyn_ltree[2*(C[i]+c+1)]++,e.dyn_dtree[2*P(t)]++),e.last_lit===e.lit_bufsize-1},i._tr_align=function(e){B(e,2,3),M(e,b,S),function(e){16===e.bi_valid?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,i){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,i){(function(e){!function(e,t){if(!e.setImmediate){var i,r,n,a,s=1,o={},l=!1,c=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,i="[object process]"==={}.toString.call(e.process)?function(e){process.nextTick(function(){h(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?(a="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((n=new MessageChannel).port1.onmessage=function(e){h(e.data)},function(e){n.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(r=c.documentElement,function(e){var t=c.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(h,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return o[s]=n,i(s),s++},d.clearImmediate=p}function p(e){delete o[e]}function h(e){if(l)setTimeout(h,0,e);else{var i=o[e];if(i){l=!0;try{!function(e){var i=e.callback,r=e.args;switch(r.length){case 0:i();break;case 1:i(r[0]);break;case 2:i(r[0],r[1]);break;case 3:i(r[0],r[1],r[2]);break;default:i.apply(t,r)}}(i)}finally{p(e),l=!1}}}}function u(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,void 0!==_e?_e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10);var ke=xe(we.exports);class $e extends se{static properties={api:{type:Object},asPanel:{type:Boolean},inlineMode:{type:Boolean},_mode:{type:String},_url:{type:String},_scraping:{type:Boolean},_scrapeError:{type:String},_form:{type:Object},_saving:{type:Boolean},_ingredientInput:{type:String},_ratingHover:{type:Number},_importFile:{type:Object},_importing:{type:Boolean},_importResult:{type:Object},_importError:{type:String},_importDownloadImages:{type:Boolean}};constructor(){super(),this.api=null,this.asPanel=!1,this.inlineMode=!1,this._mode="url",this._url="",this._scraping=!1,this._scrapeError=null,this._saving=!1,this._ingredientInput="",this._ratingHover=0,this._form=this._emptyForm(),this._importFile=null,this._importing=!1,this._importResult=null,this._importError=null,this._importDownloadImages=!0}_emptyForm(){return{name:"",description:"",source_url:"",servings:"",prep_time:"",cook_time:"",image_url:"",tags:"",courses:"",categories:"",collections:"",rating:0,notes:"",ingredients:[],instructions:[],cal:"",fat:"",satf:"",chol:"",sod:"",carb:"",fib:"",sug:"",prot:""}}_close(){this.dispatchEvent(new CustomEvent("rm-close",{bubbles:!0,composed:!0}))}async _handleScrape(){if(this._url.trim()&&!this._scraping){this._scraping=!0,this._scrapeError=null;try{const e=await this.api.scrapeRecipe(this._url.trim());if(e?.recipe){const t=e.recipe,i=t.nutrition||{};this._form={name:t.name||"",description:t.description||"",source_url:t.source_url||this._url.trim(),servings:t.servings||"",prep_time:t.prep_time||"",cook_time:t.cook_time||"",image_url:t.image_url||"",tags:(t.tags||[]).join(", "),courses:(t.courses||[]).join(", "),categories:(t.categories||[]).join(", "),collections:(t.collections||[]).join(", "),rating:t.rating||0,notes:t.notes||"",ingredients:t.ingredients||[],instructions:t.instructions||[],cal:i.calories??"",fat:i.fat??"",satf:i.saturated_fat??"",chol:i.cholesterol??"",sod:i.sodium??"",carb:i.carbohydrates??"",fib:i.fiber??"",sug:i.sugar??"",prot:i.protein??""},this._mode="manual"}else this._scrapeError=e?.error||"Could not extract recipe from this URL."}catch(e){this._scrapeError=e.message||"Scraping failed."}finally{this._scraping=!1}}}_handleImportFileChange(e){this._importFile=e.target.files[0]||null,this._importResult=null,this._importError=null}async _handleImport(){if(this._importFile&&!this._importing){this._importing=!0,this._importResult=null,this._importError=null;try{let e;try{e=await ke.loadAsync(this._importFile)}catch(e){throw new Error(`Could not open ZIP file: ${e.message}`)}const t=Object.values(e.files).find(e=>!e.dir&&e.name.endsWith(".html"));if(!t)throw new Error("No HTML file found inside the ZIP — is this a valid Recipe Keeper export?");const i=await t.async("text");console.log(`[Recipe Keeper Import] HTML extracted (${i.length} chars), sending to backend`);const r=await this.api.importRecipeKeeper(i);console.log(`[Recipe Keeper Import] Phase 1 done: ${r.imported} imported, ${r.failed} failed, ${r.recipe_images?.length??0} need images`);let n=0,a=0;if(this._importDownloadImages&&r.recipe_images?.length){const t=new Set([".jpg",".jpeg",".png",".webp",".gif",".bmp"]);for(const{recipe_id:i,image_filename:s}of r.recipe_images){const r=e.files[s]??Object.values(e.files).find(e=>{const i=s.split("/").pop();return!e.dir&&e.name.split("/").pop()===i&&t.has(e.name.slice(e.name.lastIndexOf(".")).toLowerCase())});if(r)try{const e=await r.async("base64");await this.api.uploadRecipeImage(i,e),n++}catch(e){console.warn(`[Recipe Keeper Import] Could not save image for recipe ${i}:`,e),a++}}console.log(`[Recipe Keeper Import] Phase 2 done: ${n} images saved, ${a} failed`)}this._importResult={...r,imagesSaved:n},r.imported>0&&this.dispatchEvent(new CustomEvent("rm-import-done",{bubbles:!0,composed:!0}))}catch(e){console.error("[Recipe Keeper Import] Failed:",e),this._importError=e.message||String(e)||"Import failed."}finally{this._importing=!1}}}async _handleSave(){if(this._form.name.trim()&&!this._saving){this._saving=!0;try{const e=this._form,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"},r={};let n=!1;for(const[t,a]of Object.entries(i))""!==e[t]&&null!=e[t]&&(r[a]=e[t],n=!0);const a={name:e.name,description:e.description,source_url:e.source_url,image_url:e.image_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),rating:e.rating||null,notes:e.notes,ingredients:e.ingredients,instructions:e.instructions,nutrition:n?r:null};this.dispatchEvent(new CustomEvent("rm-add-recipe",{detail:{data:a},bubbles:!0,composed:!0})),this._form=this._emptyForm()}finally{this._saving=!1}}}_setField(e,t){this._form={...this._form,[e]:t}}_addIngredient(){const e=this._ingredientInput.trim();if(!e)return;let t;if(e.startsWith("#"))t={name:e,is_heading:!0};else{const i=e.split(/\s+/);let r="",n="",a="";i.length>=3&&!isNaN(parseFloat(i[0]))?(r=i[0],n=i[1],a=i.slice(2).join(" ")):2!==i.length||isNaN(parseFloat(i[0]))?a=e:(r=i[0],a=i[1]),t={amount:r,unit:n,name:a}}this._form={...this._form,ingredients:[...this._form.ingredients,t]},this._ingredientInput=""}_addIngredientsBulk(e){const t=e.split("\n").map(e=>e.trim()).filter(Boolean),i=t.map(e=>{if(e.startsWith("#"))return{name:e,is_heading:!0};const t=e.split(/\s+/);let i="",r="",n="";return t.length>=3&&!isNaN(parseFloat(t[0]))?(i=t[0],r=t[1],n=t.slice(2).join(" ")):2!==t.length||isNaN(parseFloat(t[0]))?n=e:(i=t[0],n=t[1]),{amount:i,unit:r,name:n}});i.length&&(this._form={...this._form,ingredients:[...this._form.ingredients,...i]})}_removeIngredient(e){this._form={...this._form,ingredients:this._form.ingredients.filter((t,i)=>i!==e)}}_addStep(e){e.trim()&&(this._form={...this._form,instructions:[...this._form.instructions,e.trim()]})}_removeStep(e){this._form={...this._form,instructions:this._form.instructions.filter((t,i)=>i!==e)}}_renderPanelContent(){return U`
      <div class="dialog-header">
        <div class="mode-toggle">
          <button class="mode-btn ${"url"===this._mode?"active":""}" @click=${()=>{this._mode="url"}}>
            <ha-icon icon="mdi:link-variant"></ha-icon> From URL
          </button>
          <button class="mode-btn ${"manual"===this._mode?"active":""}" @click=${()=>{this._mode="manual"}}>
            <ha-icon icon="mdi:pencil-outline"></ha-icon> Manual
          </button>
          <button class="mode-btn ${"import"===this._mode?"active":""}" @click=${()=>{this._mode="import"}}>
            <ha-icon icon="mdi:import"></ha-icon> Import
          </button>
        </div>
        ${this.inlineMode?"":U`<button class="icon-btn" @click=${this._close}><ha-icon icon="mdi:close"></ha-icon></button>`}
      </div>

      <div class="dialog-body">
        ${"url"===this._mode?this._renderUrlMode():""}
        ${"import"===this._mode?this._renderImportMode():""}
        ${"manual"===this._mode?this._renderManualMode():""}
      </div>

      ${"manual"===this._mode?U`
        <div class="dialog-footer">
          <button class="action-btn" @click=${this._close}>Cancel</button>
          <button
            class="action-btn primary"
            ?disabled=${!this._form.name.trim()||this._saving}
            @click=${this._handleSave}
          >
            ${this._saving?U`<ha-circular-progress active size="tiny"></ha-circular-progress>`:U`<ha-icon icon="mdi:content-save-outline"></ha-icon>`}
            Save Recipe
          </button>
        </div>
      `:""}
    `}render(){return this.inlineMode?U`<div class="dialog-panel inline-panel">${this._renderPanelContent()}</div>`:U`
      <div class="dialog-overlay ${this.asPanel?"panel-mode":""}" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog-panel">${this._renderPanelContent()}</div>
      </div>
    `}_renderImportMode(){return U`
      <div class="import-mode">
        <div class="import-info">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div>
            <strong>Recipe Keeper import</strong><br/>
            Export your recipes from the Recipe Keeper app
            (<em>Menu → Export → Recipe Keeper File</em>), then select the
            exported <code>.zip</code> file below. Recipe photos will be saved
            locally if available.
          </div>
        </div>

        <label class="file-label">
          <ha-icon icon="mdi:file-import-outline"></ha-icon>
          ${this._importFile?this._importFile.name:"Choose .zip file…"}
          <input
            type="file"
            accept=".zip,application/zip"
            class="file-input"
            @change=${this._handleImportFileChange}
          />
        </label>

        <label class="toggle-row">
          <input
            type="checkbox"
            ?checked=${this._importDownloadImages}
            @change=${e=>{this._importDownloadImages=e.target.checked}}
          />
          Save recipe photos locally
        </label>

        ${this._importResult?U`
          <div class="import-result ${this._importResult.failed>0?"partial":"success"}">
            <ha-icon icon="${this._importResult.failed>0?"mdi:alert-circle-outline":"mdi:check-circle-outline"}"></ha-icon>
            <div>
              <strong>${this._importResult.imported} recipe${1!==this._importResult.imported?"s":""} imported</strong>
              ${this._importResult.imagesSaved>0?U` with ${this._importResult.imagesSaved} photo${1!==this._importResult.imagesSaved?"s":""}`:""}
              ${this._importResult.failed>0?U`<br/><small>${this._importResult.failed} failed — check HA logs for details</small>`:""}
            </div>
          </div>
        `:this._importError?U`
          <div class="import-result error">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div><strong>Import failed</strong><br/><small>${this._importError}</small></div>
          </div>
        `:""}

        <button
          class="action-btn primary import-btn"
          ?disabled=${!this._importFile||this._importing}
          @click=${this._handleImport}
        >
          ${this._importing?U`<ha-circular-progress active size="tiny"></ha-circular-progress> Importing…`:U`<ha-icon icon="mdi:import"></ha-icon> Import Recipes`}
        </button>
      </div>
    `}_renderUrlMode(){return U`
      <div class="url-mode">
        <div class="url-hint">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          Paste a recipe URL to automatically extract the recipe details.
        </div>
        <div class="url-row">
          <input
            type="url"
            class="url-input"
            placeholder="https://www.example.com/recipe/..."
            .value=${this._url}
            @input=${e=>{this._url=e.target.value}}
            @keydown=${e=>{"Enter"===e.key&&this._handleScrape()}}
          />
          <button
            class="action-btn primary"
            ?disabled=${!this._url.trim()||this._scraping}
            @click=${this._handleScrape}
          >
            ${this._scraping?U`<ha-circular-progress active size="tiny"></ha-circular-progress>`:U`<ha-icon icon="mdi:download-outline"></ha-icon>`}
            Fetch
          </button>
        </div>
        ${this._scrapeError?U`
          <div class="error-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            ${this._scrapeError}
          </div>
          <button class="action-btn" @click=${()=>{this._mode="manual",this._form={...this._emptyForm(),source_url:this._url}}}>
            Enter manually instead
          </button>
        `:""}
      </div>
    `}_renderManualMode(){const e=this._form,t=this._ratingHover||e.rating||0;return U`
      <div class="manual-mode">

        <!-- Name -->
        <div class="field">
          <label>Recipe Name *</label>
          <input type="text" .value=${e.name}
            @input=${e=>this._setField("name",e.target.value)}
            placeholder="e.g. Spaghetti Bolognese" />
        </div>

        <!-- Description -->
        <div class="field">
          <label>Description</label>
          <textarea rows="2" .value=${e.description}
            @input=${e=>this._setField("description",e.target.value)}
            placeholder="Short description…"></textarea>
        </div>

        <!-- Source URL + Image URL -->
        <div class="field-row">
          <div class="field">
            <label>Source URL</label>
            <input type="url" .value=${e.source_url}
              @input=${e=>this._setField("source_url",e.target.value)}
              placeholder="https://…" />
          </div>
          <div class="field">
            <label>Image URL</label>
            <input type="url" .value=${e.image_url}
              @input=${e=>this._setField("image_url",e.target.value)}
              placeholder="https://…/image.jpg" />
          </div>
        </div>

        <!-- Times + servings -->
        <div class="field-row-3">
          <div class="field">
            <label>Prep (min)</label>
            <input type="number" .value=${String(e.prep_time)}
              @input=${e=>this._setField("prep_time",e.target.value)} placeholder="15" min="0" />
          </div>
          <div class="field">
            <label>Cook (min)</label>
            <input type="number" .value=${String(e.cook_time)}
              @input=${e=>this._setField("cook_time",e.target.value)} placeholder="30" min="0" />
          </div>
          <div class="field">
            <label>Servings</label>
            <input type="number" .value=${String(e.servings)}
              @input=${e=>this._setField("servings",e.target.value)} placeholder="4" min="1" />
          </div>
        </div>

        <!-- Rating -->
        <div class="field">
          <label>Rating</label>
          <div class="star-row"
            @mouseleave=${()=>{this._ratingHover=0}}>
            ${[1,2,3,4,5].map(i=>U`
              <span
                class="star ${i<=t?"filled":""}"
                @mouseenter=${()=>{this._ratingHover=i}}
                @click=${()=>this._setField("rating",e.rating===i?0:i)}
              >★</span>
            `)}
            ${e.rating?U`<button class="clear-rating" @click=${()=>this._setField("rating",0)}>Clear</button>`:""}
          </div>
        </div>

        <!-- Categorisation row -->
        <div class="field">
          <label>Tags (comma-separated)</label>
          <input type="text" .value=${e.tags}
            @input=${e=>this._setField("tags",e.target.value)}
            placeholder="quick, weeknight, family" />
        </div>

        <div class="field">
          <label>Courses (comma-separated)</label>
          <input type="text" .value=${e.courses}
            @input=${e=>this._setField("courses",e.target.value)}
            placeholder="Dinner, Main Course" />
        </div>

        <div class="field-row">
          <div class="field">
            <label>Categories (comma-separated)</label>
            <input type="text" .value=${e.categories}
              @input=${e=>this._setField("categories",e.target.value)}
              placeholder="Italian, Gluten Free" />
          </div>
          <div class="field">
            <label>Collections (comma-separated)</label>
            <input type="text" .value=${e.collections}
              @input=${e=>this._setField("collections",e.target.value)}
              placeholder="30 Minutes, Summer" />
          </div>
        </div>

        <!-- Ingredients -->
        <div class="field">
          <label>Ingredients (${e.ingredients.length})</label>
          ${e.ingredients.length?U`
            <ul class="ing-list">
              ${e.ingredients.map((e,t)=>U`
                <li class="${e.is_heading||e.name?.startsWith("#")?"ing-heading":""}">
                  <span class="ing-text">
                    ${e.is_heading||e.name?.startsWith("#")?U`<strong>${e.name?.startsWith("#")?e.name.slice(1).trim():e.name}</strong>`:U`${e.amount?`${e.amount}${e.unit?" "+e.unit:""} `:""}${e.name}`}
                  </span>
                  <button class="remove-btn" @click=${()=>this._removeIngredient(t)}>
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                </li>
              `)}
            </ul>
          `:""}
          <div class="add-row">
            <input
              type="text"
              .value=${this._ingredientInput}
              @input=${e=>{this._ingredientInput=e.target.value}}
              @keydown=${e=>{"Enter"===e.key&&this._addIngredient()}}
              placeholder='e.g. "2 cups flour", "salt", or "# Section"'
            />
            <button class="action-btn sm" @click=${this._addIngredient}>Add</button>
          </div>
          <div class="bulk-hint">
            Tip: Use <code>#Section Name</code> to add a section header. Or paste multiple lines at once:
            <button class="action-btn sm bulk-btn" @click=${()=>{const e=prompt("Paste ingredients (one per line, use # for headers):");e&&this._addIngredientsBulk(e)}}>
              <ha-icon icon="mdi:text-box-multiple-outline"></ha-icon> Bulk paste
            </button>
          </div>
        </div>

        <!-- Directions -->
        <div class="field">
          <label>Directions (${e.instructions.length} steps)</label>
          ${e.instructions.length?U`
            <ol class="steps-edit">
              ${e.instructions.map((e,t)=>U`
                <li>
                  <span class="step-text">${e}</span>
                  <button class="remove-btn" @click=${()=>this._removeStep(t)}>
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                </li>
              `)}
            </ol>
          `:""}
          <div class="add-row">
            <textarea
              rows="2"
              @keydown=${e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._addStep(e.target.value),e.target.value="")}}
              placeholder="Type a step, press Enter to add…"
            ></textarea>
            <button class="action-btn sm" @click=${e=>{const t=e.target.closest(".add-row").querySelector("textarea");this._addStep(t.value),t.value=""}}>Add</button>
          </div>
        </div>

        <!-- Notes -->
        <div class="field">
          <label>Notes</label>
          <textarea rows="2" .value=${e.notes}
            @input=${e=>this._setField("notes",e.target.value)}
            placeholder="Variations, tips…"></textarea>
        </div>

        <!-- Nutrition -->
        <div class="section-divider">Nutrition Facts (per serving — optional)</div>
        <div class="field-row-3">
          <div class="field">
            <label>Calories (kcal)</label>
            <input type="number" .value=${String(e.cal)}
              @input=${e=>this._setField("cal",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>Protein (g)</label>
            <input type="number" .value=${String(e.prot)}
              @input=${e=>this._setField("prot",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>Fat (g)</label>
            <input type="number" .value=${String(e.fat)}
              @input=${e=>this._setField("fat",e.target.value)} placeholder="0" min="0" />
          </div>
        </div>
        <div class="field-row-3">
          <div class="field">
            <label>Saturated Fat (g)</label>
            <input type="number" .value=${String(e.satf)}
              @input=${e=>this._setField("satf",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>Carbohydrates (g)</label>
            <input type="number" .value=${String(e.carb)}
              @input=${e=>this._setField("carb",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>Dietary Fiber (g)</label>
            <input type="number" .value=${String(e.fib)}
              @input=${e=>this._setField("fib",e.target.value)} placeholder="0" min="0" />
          </div>
        </div>
        <div class="field-row-3">
          <div class="field">
            <label>Sugars (g)</label>
            <input type="number" .value=${String(e.sug)}
              @input=${e=>this._setField("sug",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>Sodium (mg)</label>
            <input type="number" .value=${String(e.sod)}
              @input=${e=>this._setField("sod",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>Cholesterol (mg)</label>
            <input type="number" .value=${String(e.chol)}
              @input=${e=>this._setField("chol",e.target.value)} placeholder="0" min="0" />
          </div>
        </div>

      </div>
    `}static styles=a`
    :host { display: block; height: 100%; }

    .inline-panel {
      border-radius: 0 !important;
      max-width: 100% !important;
      max-height: 100% !important;
      height: 100%;
      border-left: none !important;
      box-shadow: none !important;
      border-top: 1px solid var(--rm-border, rgba(0,0,0,0.08));
    }

    .dialog-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.65);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      z-index: 1000;
    }

    /* Right-side panel mode (wide/tablet layout) */
    .dialog-overlay.panel-mode {
      align-items: stretch;
      justify-content: flex-end;
      background: rgba(0,0,0,0.45);
    }

    .dialog-panel {
      background: var(--rm-bg-surface, #1c1c1e);
      border-radius: var(--rm-radius, 12px) var(--rm-radius, 12px) 0 0;
      width: 100%;
      max-width: 620px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
    }

    .panel-mode .dialog-panel {
      border-radius: 0;
      max-width: 420px;
      max-height: 100%;
      height: 100%;
      border-left: 1px solid var(--rm-border, rgba(0,0,0,0.1));
      box-shadow: -4px 0 24px rgba(0,0,0,0.2);
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      flex-shrink: 0;
    }

    .mode-toggle {
      display: flex;
      gap: 4px;
      background: var(--rm-surface, #2c2c2e);
      border-radius: 8px;
      padding: 3px;
    }
    .mode-btn {
      background: none;
      border: none;
      border-radius: 6px;
      padding: 6px 12px;
      cursor: pointer;
      font-size: 13px;
      color: var(--rm-text-secondary, #8e8e93);
      display: flex;
      align-items: center;
      gap: 5px;
      transition: background 0.15s, color 0.15s;
    }
    .mode-btn ha-icon { --mdc-icon-size: 16px; }
    .mode-btn.active { background: var(--rm-accent, #ff6b35); color: #fff; }

    .icon-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93);
      width: 32px; height: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; padding: 0;
    }

    .dialog-body {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border, rgba(255,255,255,0.08)) transparent;
    }

    /* URL mode */
    .url-mode { display: flex; flex-direction: column; gap: 14px; }
    .url-hint {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--rm-text-secondary, #8e8e93);
      background: var(--rm-surface, #2c2c2e);
      border-radius: 8px;
      padding: 10px 12px;
    }
    .url-hint ha-icon { --mdc-icon-size: 18px; flex-shrink: 0; }
    .url-row { display: flex; gap: 8px; }
    .url-input {
      flex: 1;
      background: var(--rm-surface, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 10px 12px;
      font-size: 14px;
    }
    .url-input:focus { outline: none; border-color: var(--rm-accent, #ff6b35); }
    .error-msg {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--error-color, #cf6679);
      font-size: 13px;
    }
    .error-msg ha-icon { --mdc-icon-size: 16px; }

    /* Manual form */
    .manual-mode { display: flex; flex-direction: column; gap: 12px; }
    .field { display: flex; flex-direction: column; gap: 4px; }
    .field label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--rm-text-secondary, #8e8e93);
    }
    .field input, .field textarea {
      background: var(--rm-surface, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 8px 10px;
      font-size: 14px;
      font-family: inherit;
      resize: vertical;
    }
    .field input:focus, .field textarea:focus { outline: none; border-color: var(--rm-accent, #ff6b35); }

    .field-row   { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .field-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }

    /* Star rating */
    .star-row {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 0;
    }
    .star {
      font-size: 28px;
      color: var(--rm-border, rgba(255,255,255,0.2));
      cursor: pointer;
      line-height: 1;
      transition: color 0.1s;
    }
    .star.filled { color: #f5a623; }
    .star:hover  { color: #f5a623; }
    .clear-rating {
      margin-left: 8px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 11px;
      color: var(--rm-text-secondary, #8e8e93);
      text-decoration: underline;
      padding: 0;
    }

    /* Section divider */
    .section-divider {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--rm-text-secondary, #8e8e93);
      padding-top: 8px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }

    /* Ingredient / step lists */
    .ing-list, .steps-edit { list-style: none; padding: 0; margin: 0 0 6px; }
    .ing-list li, .steps-edit li {
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 5px 0;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.06));
      font-size: 13px;
      color: var(--rm-text, #e5e5ea);
    }
    .ing-list li.ing-heading { font-weight: 700; color: var(--rm-accent, #9fa8da); }
    .ing-text, .step-text { flex: 1; }
    .bulk-hint {
      font-size: 11px; color: var(--rm-text-secondary, #8e8e93);
      margin-top: 6px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
    }
    .bulk-hint code {
      background: rgba(255,255,255,0.08); border-radius: 4px; padding: 1px 5px; font-size: 11px;
    }
    .bulk-btn { padding: 4px 8px !important; font-size: 11px !important; }
    .remove-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93); padding: 2px; flex-shrink: 0;
    }
    .remove-btn ha-icon { --mdc-icon-size: 14px; }

    .add-row { display: flex; gap: 8px; align-items: flex-end; }
    .add-row input, .add-row textarea {
      flex: 1;
      background: var(--rm-surface, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: none;
    }
    .add-row input:focus, .add-row textarea:focus { outline: none; border-color: var(--rm-accent, #ff6b35); }

    /* Buttons */
    .action-btn {
      background: var(--rm-surface, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 8px;
      color: var(--rm-text, #e5e5ea);
      padding: 9px 14px;
      cursor: pointer;
      font-size: 14px;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s;
      flex-shrink: 0;
    }
    .action-btn ha-icon { --mdc-icon-size: 16px; }
    .action-btn.primary { background: var(--rm-accent, #ff6b35); border-color: var(--rm-accent, #ff6b35); color: #fff; }
    .action-btn.sm { padding: 6px 10px; font-size: 13px; }
    .action-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Import mode */
    .import-mode { display: flex; flex-direction: column; gap: 16px; }
    .import-info {
      display: flex;
      gap: 12px;
      background: var(--rm-surface, #2c2c2e);
      border-radius: 10px;
      padding: 12px 14px;
      font-size: 13px;
      color: var(--rm-text-secondary, #8e8e93);
      line-height: 1.5;
    }
    .import-info ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; margin-top: 2px; }
    .import-info strong { color: var(--rm-text, #e5e5ea); }
    .import-info code {
      background: rgba(255,255,255,0.08);
      border-radius: 4px;
      padding: 1px 5px;
      font-size: 12px;
    }

    .file-label {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--rm-surface, #2c2c2e);
      border: 2px dashed var(--rm-border, rgba(255,255,255,0.15));
      border-radius: 10px;
      padding: 16px 14px;
      cursor: pointer;
      font-size: 14px;
      color: var(--rm-text, #e5e5ea);
      transition: border-color 0.15s;
    }
    .file-label:hover { border-color: var(--rm-accent, #ff6b35); }
    .file-label ha-icon { --mdc-icon-size: 22px; color: var(--rm-accent, #ff6b35); }
    .file-input { display: none; }

    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      color: var(--rm-text-secondary, #8e8e93);
      cursor: pointer;
    }
    .toggle-row input[type="checkbox"] { width: 16px; height: 16px; cursor: pointer; }

    .import-result {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      border-radius: 8px;
      padding: 12px 14px;
      font-size: 13px;
    }
    .import-result ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; margin-top: 1px; }
    .import-result.success { background: rgba(76, 175, 80, 0.12); color: var(--success-color, #4caf50); }
    .import-result.partial { background: rgba(255, 152, 0, 0.12); color: #ff9800; }
    .import-result.error   { background: rgba(207, 102, 121, 0.12); color: var(--error-color, #cf6679); }
    .import-result strong { display: block; }
    .import-result small { opacity: 0.85; }

    .import-btn { width: 100%; justify-content: center; gap: 8px; }
    .import-btn ha-icon { --mdc-icon-size: 18px; }

    .dialog-footer {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      flex-shrink: 0;
    }
  `}try{customElements.define("rm-add-recipe-dialog",$e)}catch{}const Se=["breakfast","lunch","dinner","snack"],Ae=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];class ze extends se{static properties={api:{type:Object},recipes:{type:Array},_weekStart:{type:String},_plan:{type:Array},_loading:{type:Boolean},_showPicker:{type:Boolean},_pickerTarget:{type:Object},_pickerSearch:{type:String},_pickerServings:{type:Number}};constructor(){super(),this.api=null,this.recipes=[],this._plan=[],this._loading=!1,this._showPicker=!1,this._pickerTarget=null,this._pickerSearch="",this._pickerServings=2,this._weekStart=this._getMondayISO(new Date)}updated(e){(e.has("api")||e.has("_weekStart"))&&this.api&&this._loadPlan()}_getMondayISO(e){const t=e.getDay(),i=0===t?-6:1-t,r=new Date(e);r.setDate(r.getDate()+i);return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}_addDays(e,t){const i=new Date(e+"T00:00:00Z");return i.setUTCDate(i.getUTCDate()+t),i.toISOString().split("T")[0]}_formatDisplayDate(e){return new Date(e+"T00:00:00Z").getUTCDate().toString()}_formatMonthYear(e){return new Date(e+"T00:00:00Z").toLocaleDateString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})}_prevWeek(){this._weekStart=this._addDays(this._weekStart,-7)}_nextWeek(){this._weekStart=this._addDays(this._weekStart,7)}_isCurrentWeek(){return this._weekStart===this._getMondayISO(new Date)}async _loadPlan(){this._loading=!0;try{const e=await this.api.getMealPlan(this._weekStart);this._plan=e?.entries??[]}catch(e){this._plan=[]}finally{this._loading=!1}}_getEntriesForSlot(e,t){return this._plan.filter(i=>i.date===e&&i.meal_type===t)}_openPicker(e,t){this._pickerTarget={date:e,mealType:t},this._pickerSearch="",this._pickerServings=2,this._showPicker=!0}async _handlePickRecipe(e){this._pickerTarget&&(await this.api.addToMealPlan(e.id,this._pickerTarget.date,this._pickerTarget.mealType,this._pickerServings),this._showPicker=!1,await this._loadPlan())}async _handleRemoveEntry(e){await this.api.removeFromMealPlan(e),await this._loadPlan()}async _handleClearWeek(){await this.api.clearMealPlanWeek(this._weekStart),await this._loadPlan()}_openRecipeDetail(e){const t=this.recipes.find(t=>t.id===e.recipe_id);t&&this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:t},bubbles:!0,composed:!0}))}get _pickerFiltered(){const e=this._pickerSearch.trim().toLowerCase();return e?this.recipes.filter(t=>t.name?.toLowerCase().includes(e)||t.tags?.some(t=>t.toLowerCase().includes(e))):this.recipes}render(){const e=Array.from({length:7},(e,t)=>this._addDays(this._weekStart,t)),t=(new Date).toISOString().split("T")[0];return U`
      <div class="planner-container">
        <!-- Week navigation -->
        <div class="week-nav">
          <button class="nav-btn" @click=${this._prevWeek}>
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <div class="week-label">
            <span class="week-month">${this._formatMonthYear(this._weekStart)}</span>
            ${this._isCurrentWeek()?U`<span class="today-badge">This week</span>`:U`
              <button class="text-link" @click=${()=>{this._weekStart=this._getMondayISO(new Date)}}>Today</button>
            `}
          </div>
          <button class="nav-btn" @click=${this._nextWeek}>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
        </div>

        <!-- Day headers -->
        <div class="day-headers">
          ${e.map((e,i)=>U`
            <div class="day-header ${e===t?"today":""}">
              <span class="day-name">${Ae[i]}</span>
              <span class="day-num">${this._formatDisplayDate(e)}</span>
            </div>
          `)}
        </div>

        <!-- Plan grid scroll -->
        <div class="plan-scroll">
          ${this._loading?U`
            <div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>
          `:U`
            ${Se.map(i=>U`
              <div class="meal-row">
                <div class="meal-label">${i.charAt(0).toUpperCase()+i.slice(1)}</div>
                <div class="meal-cells">
                  ${e.map(e=>{const r=this._getEntriesForSlot(e,i);return U`
                      <div class="meal-cell ${e===t?"today":""}">
                        ${r.map(e=>{const t=this.recipes.find(t=>t.id===e.recipe_id);return U`
                            <div class="meal-entry" @click=${()=>this._openRecipeDetail(e)}>
                              ${t?.image_url?U`
                                <img src="${t.image_url}" alt="${t?.name||""}" class="entry-thumb" />
                              `:U`
                                <div class="entry-thumb entry-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                              `}
                              <span class="entry-name">${t?.name??"Unknown"}</span>
                              ${e.servings&&1!==e.servings?U`
                                <span class="entry-servings">×${e.servings}</span>
                              `:""}
                              <button
                                class="entry-remove"
                                @click=${t=>{t.stopPropagation(),this._handleRemoveEntry(e.id)}}
                              >
                                <ha-icon icon="mdi:close"></ha-icon>
                              </button>
                            </div>
                          `})}
                        <button class="add-slot-btn" @click=${()=>this._openPicker(e,i)}>
                          <ha-icon icon="mdi:plus"></ha-icon>
                        </button>
                      </div>
                    `})}
                </div>
              </div>
            `)}
          `}

          <!-- Clear week button -->
          ${this._plan.length?U`
            <div class="clear-row">
              <button class="text-danger-btn" @click=${this._handleClearWeek}>
                <ha-icon icon="mdi:calendar-remove-outline"></ha-icon>
                Clear this week
              </button>
            </div>
          `:""}
        </div>

        <!-- Recipe picker dialog -->
        ${this._showPicker?this._renderPicker():""}
      </div>
    `}_renderPicker(){const e=this._pickerTarget;return U`
      <div class="picker-overlay" @click=${e=>{e.target===e.currentTarget&&(this._showPicker=!1)}}>
        <div class="picker-panel">
          <div class="picker-header">
            <span>Add to ${e.mealType}</span>
            <button class="icon-btn" @click=${()=>{this._showPicker=!1}}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>
          <div class="picker-servings-row">
            <span class="picker-label">Servings:</span>
            <div class="servings-ctrl">
              <button class="scaler-btn" @click=${()=>{this._pickerServings>1&&this._pickerServings--}}>
                <ha-icon icon="mdi:minus"></ha-icon>
              </button>
              <span class="servings-val">${this._pickerServings}</span>
              <button class="scaler-btn" @click=${()=>{this._pickerServings++}}>
                <ha-icon icon="mdi:plus"></ha-icon>
              </button>
            </div>
          </div>
          <div class="picker-search-wrap">
            <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
            <input
              type="text"
              class="picker-search"
              placeholder="Search recipes…"
              .value=${this._pickerSearch}
              @input=${e=>{this._pickerSearch=e.target.value}}
            />
          </div>
          <div class="picker-list">
            ${0===this._pickerFiltered.length?U`
              <div class="picker-empty">No recipes found</div>
            `:this._pickerFiltered.map(e=>U`
              <div class="picker-item" @click=${()=>this._handlePickRecipe(e)}>
                ${e.image_url?U`
                  <img src="${e.image_url}" alt="${e.name}" class="picker-thumb" />
                `:U`
                  <div class="picker-thumb picker-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                `}
                <div class="picker-info">
                  <span class="picker-name">${e.name}</span>
                  ${e.tags?.length?U`<span class="picker-tags">${e.tags.slice(0,2).join(", ")}</span>`:""}
                </div>
                ${e.is_favourite?U`<ha-icon icon="mdi:heart" class="picker-fav"></ha-icon>`:""}
              </div>
            `)}
          </div>
        </div>
      </div>
    `}static styles=a`
    :host { display: block; height: 100%; }

    .planner-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    /* Week nav */
    .week-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }
    .nav-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93);
      width: 32px; height: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; padding: 0;
    }
    .nav-btn:hover { background: var(--rm-border, rgba(255,255,255,0.08)); }
    .week-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
      color: var(--rm-text, #e5e5ea);
    }
    .today-badge {
      font-size: 11px;
      background: var(--rm-accent-soft, rgba(255,107,53,0.15));
      color: var(--rm-accent, #ff6b35);
      border-radius: 10px;
      padding: 2px 8px;
    }
    .text-link {
      background: none; border: none; cursor: pointer;
      color: var(--rm-accent, #ff6b35);
      font-size: 12px; padding: 0;
    }

    /* Day headers */
    .day-headers {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      padding: 6px 8px 4px;
      flex-shrink: 0;
    }
    .day-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .day-name { font-size: 10px; text-transform: uppercase; color: var(--rm-text-secondary, #8e8e93); letter-spacing: 0.05em; }
    .day-num { font-size: 14px; font-weight: 600; color: var(--rm-text, #e5e5ea); }
    .day-header.today .day-num {
      background: var(--rm-accent, #ff6b35);
      color: #fff;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    /* Plan scroll */
    .plan-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 4px 8px 16px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border, rgba(255,255,255,0.08)) transparent;
    }

    .plan-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
    }

    .meal-row { margin-bottom: 8px; }
    .meal-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--rm-text-secondary, #8e8e93);
      font-weight: 600;
      padding: 4px 2px 3px;
    }
    .meal-cells {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 3px;
    }
    .meal-cell {
      min-height: 48px;
      background: var(--rm-surface, #2c2c2e);
      border-radius: 6px;
      padding: 3px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      border: 1px solid transparent;
    }
    .meal-cell.today { border-color: var(--rm-accent, #ff6b35); }

    .meal-entry {
      display: flex;
      align-items: center;
      gap: 3px;
      background: var(--rm-bg-elevated, #1c1c1e);
      border-radius: 4px;
      padding: 2px 2px 2px 4px;
      cursor: pointer;
      font-size: 10px;
      color: var(--rm-text, #e5e5ea);
      position: relative;
      min-height: 22px;
      max-height: 22px;
      overflow: hidden;
    }
    .entry-thumb {
      width: 16px;
      height: 16px;
      border-radius: 3px;
      object-fit: cover;
      flex-shrink: 0;
    }
    .entry-placeholder {
      background: var(--rm-border, rgba(255,255,255,0.08));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .entry-placeholder ha-icon { --mdc-icon-size: 10px; }
    .entry-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 10px;
    }
    .entry-servings { font-size: 9px; color: var(--rm-text-secondary, #8e8e93); flex-shrink: 0; }
    .entry-remove {
      background: rgba(0,0,0,0.35);
      border: none;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      min-width: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0;
      opacity: 1;
      flex-shrink: 0;
      transition: background 0.15s;
    }
    .entry-remove:hover { background: rgba(207,102,121,0.8); }
    .entry-remove ha-icon { --mdc-icon-size: 10px; }

    .add-slot-btn {
      background: none;
      border: 1px dashed var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 4px;
      cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93);
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color 0.15s, color 0.15s;
      padding: 0;
      margin-top: auto;
    }
    .add-slot-btn ha-icon { --mdc-icon-size: 12px; }
    .add-slot-btn:hover { border-color: var(--rm-accent, #ff6b35); color: var(--rm-accent, #ff6b35); }

    .clear-row {
      display: flex;
      justify-content: center;
      padding: 8px;
    }
    .text-danger-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--error-color, #cf6679);
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 10px;
      border-radius: 6px;
      opacity: 0.8;
    }
    .text-danger-btn:hover { opacity: 1; background: rgba(207, 102, 121, 0.1); }
    .text-danger-btn ha-icon { --mdc-icon-size: 16px; }

    /* Picker */
    .picker-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      z-index: 20;
    }
    .picker-panel {
      background: var(--rm-bg-surface, #1c1c1e);
      border-radius: var(--rm-radius, 12px) var(--rm-radius, 12px) 0 0;
      width: 100%;
      max-height: 80%;
      display: flex;
      flex-direction: column;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.3);
    }
    .picker-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      font-weight: 600;
      font-size: 15px;
      color: var(--rm-text, #e5e5ea);
      text-transform: capitalize;
      flex-shrink: 0;
    }
    .icon-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93);
      width: 32px; height: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; padding: 0;
    }

    .picker-servings-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 16px;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.06));
      flex-shrink: 0;
    }
    .picker-label { font-size: 13px; color: var(--rm-text-secondary, #8e8e93); }
    .servings-ctrl { display: flex; align-items: center; gap: 8px; }
    .scaler-btn {
      background: var(--rm-surface, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      border-radius: 50%;
      width: 26px; height: 26px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: var(--rm-text, #e5e5ea); padding: 0;
    }
    .scaler-btn ha-icon { --mdc-icon-size: 14px; }
    .servings-val { font-size: 14px; font-weight: 600; color: var(--rm-text, #e5e5ea); min-width: 24px; text-align: center; }

    .picker-search-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.06));
      flex-shrink: 0;
    }
    .search-icon { color: var(--rm-text-secondary, #8e8e93); --mdc-icon-size: 18px; }
    .picker-search {
      flex: 1;
      background: none;
      border: none;
      outline: none;
      color: var(--rm-text, #e5e5ea);
      font-size: 14px;
      padding: 4px 0;
    }
    .picker-search::placeholder { color: var(--rm-text-secondary, #8e8e93); }

    .picker-list {
      flex: 1;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border, rgba(255,255,255,0.08)) transparent;
    }
    .picker-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      cursor: pointer;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.05));
      transition: background 0.12s;
    }
    .picker-item:hover { background: var(--rm-surface, #2c2c2e); }
    .picker-thumb {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      object-fit: cover;
      flex-shrink: 0;
    }
    .picker-placeholder {
      background: var(--rm-surface, #2c2c2e);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--rm-text-secondary, #8e8e93);
    }
    .picker-placeholder ha-icon { --mdc-icon-size: 22px; }
    .picker-info { flex: 1; min-width: 0; }
    .picker-name { font-size: 14px; font-weight: 500; color: var(--rm-text, #e5e5ea); display: block; }
    .picker-tags { font-size: 12px; color: var(--rm-text-secondary, #8e8e93); }
    .picker-fav { color: var(--error-color, #cf6679); --mdc-icon-size: 16px; }
    .picker-empty { padding: 30px; text-align: center; color: var(--rm-text-secondary, #8e8e93); font-size: 14px; }
  `}try{customElements.define("rm-meal-planner",ze)}catch{}class Ce extends se{static properties={settings:{type:Object},_activeTab:{type:String}};constructor(){super(),this.settings={},this._activeTab="appearance"}_update(e){const t={...this.settings,...e};this.dispatchEvent(new CustomEvent("rm-settings-change",{detail:{settings:t},bubbles:!0,composed:!0}))}render(){const e=this.settings;return U`
      <div class="settings-root">
        <div class="tab-bar">
          ${[["appearance","mdi:palette-outline","Appearance"],["advanced","mdi:tune-variant","Advanced"],["sync","mdi:cloud-sync-outline","Sync"],["help","mdi:help-circle-outline","Help"]].map(([e,t,i])=>U`
            <button class="tab-item ${this._activeTab===e?"active":""}"
              @click=${()=>{this._activeTab=e}}>
              <ha-icon icon="${t}"></ha-icon>
              <span>${i}</span>
            </button>
          `)}
        </div>
        <div class="settings-body">
          ${"appearance"===this._activeTab?this._renderAppearance(e):""}
          ${"advanced"===this._activeTab?this._renderAdvanced(e):""}
          ${"sync"===this._activeTab?this._renderPlaceholder("Sync","mdi:cloud-sync-outline","Cloud sync and backup options — coming soon."):""}
          ${"help"===this._activeTab?this._renderPlaceholder("Help","mdi:help-circle-outline","Documentation and support — coming soon."):""}
        </div>
      </div>
    `}_renderAppearance(e){const t="midnight"===e.theme||"ember"===e.theme||"neon"===e.theme,i="arctic"===e.theme||"meadow"===e.theme||"ocean"===e.theme,r=t||i;return U`
      <!-- ── Theme ── -->
      <div class="section">
        <div class="section-label">Theme</div>

        <div class="setting-row">
          <span class="setting-name">Colour theme</span>
          <select class="theme-select" @change=${e=>this._update({theme:e.target.value})}>
            <optgroup label="Adaptive">
              <option value="soft"     ?selected=${"soft"===e.theme||!e.theme}>🎨 Soft Pastel</option>
              <option value="blossom"  ?selected=${"blossom"===e.theme}>🌸 Blossom</option>
            </optgroup>
            <optgroup label="Light Themes">
              <option value="arctic"   ?selected=${"arctic"===e.theme}>🧊 Arctic</option>
              <option value="meadow"   ?selected=${"meadow"===e.theme}>🌿 Meadow</option>
              <option value="ocean"    ?selected=${"ocean"===e.theme}>🌊 Ocean Blue</option>
            </optgroup>
            <optgroup label="Dark Themes">
              <option value="midnight" ?selected=${"midnight"===e.theme}>🌙 Midnight Ocean</option>
              <option value="ember"    ?selected=${"ember"===e.theme}>🔥 Ember</option>
              <option value="neon"     ?selected=${"neon"===e.theme}>🍇 Purple &amp; Cyan</option>
            </optgroup>
          </select>
        </div>

        ${r?U`
          <div class="setting-row muted-row">
            <span class="setting-name">Dark mode</span>
            <span class="muted-note">${t?"Always dark for this theme":"Always light for this theme"}</span>
          </div>
        `:U`
          <div class="setting-row">
            <span class="setting-name">Dark mode</span>
            <div class="btn-group">
              ${[["off","Light"],["system","Auto"],["on","Dark"]].map(([t,i])=>U`
                <button class="seg-btn ${e.darkMode===t?"active":""}"
                  @click=${()=>this._update({darkMode:t})}>${i}</button>
              `)}
            </div>
          </div>
        `}

        <div class="setting-row">
          <span class="setting-name">Text size</span>
          <div class="btn-group">
            ${[["small","S"],["medium","M"],["large","L"]].map(([t,i])=>U`
              <button class="seg-btn ${e.fontSize===t?"active":""}"
                @click=${()=>this._update({fontSize:t})}>${i}</button>
            `)}
          </div>
        </div>
      </div>

      <!-- ── Recipe Grid ── -->
      <div class="section">
        <div class="section-label">Recipe Grid</div>

        <div class="setting-row">
          <span class="setting-name">Recipe columns</span>
          <div class="btn-group">
            ${[2,3,4,5,8,10].map(t=>U`
              <button class="seg-btn ${e.columns===t?"active":""}"
                @click=${()=>this._update({columns:t})}>${t}</button>
            `)}
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-name">Favourites section</span>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.showFavourites}
              @change=${e=>this._update({showFavourites:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">Recent recipes count</span>
            <span class="setting-hint">Recipes shown in the Recent filter tab</span>
          </div>
          <div class="btn-group">
            ${[6,12,24].map(t=>U`
              <button class="seg-btn ${(e.recentCount??12)===t?"active":""}"
                @click=${()=>this._update({recentCount:t})}>${t}</button>
            `)}
          </div>
        </div>
      </div>

      <!-- ── Navigation ── -->
      <div class="section">
        <div class="section-label">Navigation</div>

        <div class="setting-row">
          <span class="setting-name">Meal planner</span>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.showPlanner}
              @change=${e=>this._update({showPlanner:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>
      </div>
    `}_renderAdvanced(e){return U`
      <!-- ── Timer Sound ── -->
      <div class="section">
        <div class="section-label">Timer Sound</div>

        <div class="setting-row">
          <span class="setting-name">Alarm sound</span>
          <select class="theme-select" @change=${e=>this._update({timerSound:e.target.value})}>
            <option value="beep"  ?selected=${"beep"===(e.timerSound??"beep")}>Beep</option>
            <option value="ding"  ?selected=${"ding"===e.timerSound}>Ding</option>
            <option value="alarm" ?selected=${"alarm"===e.timerSound}>Alarm (3 beeps)</option>
            <option value="none"  ?selected=${"none"===e.timerSound}>Silent</option>
            <option value="file"  ?selected=${"file"===e.timerSound}>Custom file…</option>
          </select>
        </div>

        ${"file"===e.timerSound?U`
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">Sound file</span>
              <span class="setting-hint">${e.timerSoundFileName||"No file selected"}</span>
            </div>
            <label class="file-label">
              <input type="file" accept="audio/*" class="file-input"
                @change=${this._handleSoundFileChange} />
              <ha-icon icon="mdi:folder-music-outline"></ha-icon>
              ${e.timerSoundFile?"Change":"Choose file"}
            </label>
          </div>
        `:""}

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">Test sound</span>
            <span class="setting-hint">Play a preview of the selected alarm</span>
          </div>
          <button class="seg-btn active" @click=${()=>this._testSound(e.timerSound??"beep",e.timerSoundFile)}>
            <ha-icon icon="mdi:volume-high"></ha-icon> Play
          </button>
        </div>
      </div>

      <!-- ── Keep Screen On ── -->
      <div class="section">
        <div class="section-label">Keep Screen On</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">Keep screen on while viewing a recipe</span>
            <span class="setting-hint">Uses Wake Lock API (Chrome / Edge / Android)</span>
          </div>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.keepScreenOn}
              @change=${e=>this._update({keepScreenOn:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>

        ${e.keepScreenOn?U`
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">Auto-release after</span>
              <span class="setting-hint">Screen lock released after this many minutes</span>
            </div>
            <div class="btn-group">
              ${[15,30,45,60].map(t=>U`
                <button class="seg-btn ${(e.wakeLockDuration??60)===t?"active":""}"
                  @click=${()=>this._update({wakeLockDuration:t})}>${t}m</button>
              `)}
            </div>
          </div>
        `:""}
      </div>

      <!-- ── Unit Conversion ── -->
      <div class="section">
        <div class="section-label">Unit Conversion</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">Show metric conversion button</span>
            <span class="setting-hint">Button in Ingredients tab converts oz/lb/cups/fl oz → g/ml/kg</span>
          </div>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.showUnitConversion}
              @change=${e=>this._update({showUnitConversion:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>
      </div>
    `}_handleSoundFileChange(e){const t=e.target.files?.[0];if(!t)return;const i=new FileReader;i.onload=e=>{this._update({timerSoundFile:e.target.result,timerSoundFileName:t.name})},i.readAsDataURL(t)}_testSound(e,t){if("file"!==e)try{const t=new(window.AudioContext||window.webkitAudioContext);if("ding"===e){const e=t.createOscillator(),i=t.createGain();e.connect(i),i.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(1046,t.currentTime),i.gain.setValueAtTime(.6,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+1),e.start(t.currentTime),e.stop(t.currentTime+1)}else if("alarm"===e)for(let e=0;e<3;e++){const i=t.currentTime+.35*e,r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),r.type="square",r.frequency.setValueAtTime(660,i),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.001,i+.2),r.start(i),r.stop(i+.2)}else if("none"!==e){const e=t.createOscillator(),i=t.createGain();e.connect(i),i.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(880,t.currentTime),i.gain.setValueAtTime(.5,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.5),e.start(t.currentTime),e.stop(t.currentTime+.5)}}catch(e){console.warn("Audio test failed:",e)}else if(t){new Audio(t).play().catch(e=>console.warn("Could not play file:",e))}}_renderPlaceholder(e,t,i){return U`
      <div class="placeholder-tab">
        <ha-icon icon="${t}"></ha-icon>
        <div class="placeholder-title">${e}</div>
        <div class="placeholder-msg">${i}</div>
      </div>
    `}static styles=a`
    :host { display: block; height: 100%; overflow: hidden; }

    .settings-root { display: flex; flex-direction: column; height: 100%; }

    .tab-bar {
      display: flex;
      border-bottom: 1px solid var(--rm-border, rgba(0,0,0,0.08));
      background: var(--rm-bg-surface, #fff);
      flex-shrink: 0; overflow-x: auto; scrollbar-width: none;
    }
    .tab-bar::-webkit-scrollbar { display: none; }

    .tab-item {
      display: flex; align-items: center; gap: 5px;
      background: none; border: none;
      border-bottom: 2px solid transparent;
      padding: 10px 14px; font-size: 13px; font-weight: 500;
      color: var(--rm-text-secondary, #6b5c4a);
      cursor: pointer; white-space: nowrap;
      transition: color 0.15s, border-color 0.15s; flex-shrink: 0;
    }
    .tab-item ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }
    .tab-item:hover { color: var(--rm-text, #2d2016); }
    .tab-item.active { color: var(--rm-accent); border-bottom-color: var(--rm-accent); }

    .settings-body { flex: 1; overflow-y: auto; padding-bottom: 24px; }

    .section { margin-bottom: 8px; }

    .section-label {
      font-size: 11px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--rm-text-muted, #a08060); padding: 16px 20px 6px;
    }

    .setting-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 20px;
      border-bottom: 1px solid var(--rm-border, rgba(0,0,0,0.08)); gap: 12px;
    }
    .setting-row.muted-row { opacity: 0.5; }

    .setting-name { font-size: 15px; font-weight: 500; flex-shrink: 0; color: var(--rm-text); }

    .setting-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .setting-hint { font-size: 12px; color: var(--rm-text-muted, #a08060); }

    .muted-note { font-size: 13px; color: var(--rm-text-muted, #a08060); }

    .theme-select {
      background: var(--rm-bg-surface, #fff); color: var(--rm-text, #2d2016);
      border: 1px solid var(--rm-border, rgba(0,0,0,0.12));
      border-radius: 8px; padding: 6px 10px; font-size: 14px; cursor: pointer;
      min-width: 160px; flex-shrink: 0;
    }

    .btn-group {
      display: flex; border-radius: 8px; overflow: hidden;
      border: 1px solid var(--rm-border, rgba(0,0,0,0.1)); flex-shrink: 0;
    }
    .seg-btn {
      background: transparent; border: none; padding: 6px 14px;
      font-size: 13px; font-weight: 500; cursor: pointer;
      color: var(--rm-text-secondary, #6b5c4a);
      border-right: 1px solid var(--rm-border, rgba(0,0,0,0.1));
      transition: background 0.12s, color 0.12s;
      display: flex; align-items: center; gap: 4px;
    }
    .seg-btn ha-icon { --mdc-icon-size: 16px; }
    .seg-btn:last-child { border-right: none; }
    .seg-btn.active { background: var(--rm-accent); color: #fff; }
    .seg-btn:hover:not(.active) { background: var(--rm-border); color: var(--rm-text); }

    .toggle { display: flex; align-items: center; cursor: pointer; flex-shrink: 0; }
    .toggle input { display: none; }
    .toggle-track {
      width: 44px; height: 24px;
      background: var(--rm-border, rgba(0,0,0,0.15));
      border-radius: 12px; position: relative; transition: background 0.2s;
    }
    .toggle input:checked + .toggle-track { background: var(--rm-accent); }
    .toggle-thumb {
      position: absolute; top: 2px; left: 2px;
      width: 20px; height: 20px; background: #fff; border-radius: 50%;
      transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }
    .toggle input:checked ~ .toggle-track .toggle-thumb { transform: translateX(20px); }

    .file-label {
      display: flex; align-items: center; gap: 6px;
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 8px; padding: 6px 12px; font-size: 13px;
      color: var(--rm-text); cursor: pointer; transition: background 0.15s;
      flex-shrink: 0;
    }
    .file-label:hover { background: var(--rm-accent-soft); }
    .file-label ha-icon { --mdc-icon-size: 18px; color: var(--rm-accent); }
    .file-input { display: none; }

    .placeholder-tab {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; padding: 60px 24px; gap: 12px;
      color: var(--rm-text-secondary); text-align: center;
    }
    .placeholder-tab ha-icon { --mdc-icon-size: 48px; opacity: 0.3; }
    .placeholder-title { font-size: 18px; font-weight: 600; color: var(--rm-text); }
    .placeholder-msg { font-size: 14px; max-width: 280px; line-height: 1.5; }
  `}try{customElements.define("rm-settings-view",Ce)}catch{}class Ee extends se{static properties={hass:{type:Object},slmAvailable:{type:Boolean},shoppingLists:{type:Array},api:{type:Object},localItems:{type:Array},settings:{type:Object}};constructor(){super(),this.hass=null,this.slmAvailable=!1,this.shoppingLists=[],this.api=null,this.localItems=[],this.settings=null,this._slmCard=null,this._slmRetryTimeout=null}disconnectedCallback(){super.disconnectedCallback(),this._slmRetryTimeout&&(clearTimeout(this._slmRetryTimeout),this._slmRetryTimeout=null)}get _useSLM(){return this.slmAvailable||!!customElements.get("shopping-list-manager-card")}updated(e){this._useSLM&&(this._slmCard?(e.has("hass")&&this.hass&&(this._slmCard.hass=this.hass),e.has("settings")&&this.settings&&this._slmCard&&this._syncSlmTheme()):this._mountSlmCard())}_syncSlmTheme(){if(!this._slmCard||!this.settings)return;const{theme:e,darkMode:t}=this.settings;this._slmCard.settings={...this._slmCard.settings,theme:e,darkMode:t},this._slmCard.applyColorScheme?.()}_mountSlmCard(){const e=this.shadowRoot?.querySelector(".slm-host");if(!e)return;const t=customElements.get("shopping-list-manager-card");if(!t)return void(this._slmRetryTimeout||(this._slmRetryTimeout=setTimeout(()=>{this._slmRetryTimeout=null,this.isConnected&&this._mountSlmCard()},500)));const i=new t;try{i.setConfig({})}catch(e){}i.style.cssText="display:block;width:100%;height:100%;max-height:100%;min-height:0;",i.isEmbedded=!0,e.appendChild(i),this.hass&&(i.hass=this.hass),this._slmCard=i,setTimeout(()=>this._syncSlmTheme(),0)}_toggleLocalItem(e){const t=this.localItems.map(t=>t.id===e?{...t,checked:!t.checked}:t);this._dispatchLocalUpdate(t)}_clearLocalChecked(){this._dispatchLocalUpdate(this.localItems.filter(e=>!e.checked))}_clearAllLocal(){this._dispatchLocalUpdate([])}_dispatchLocalUpdate(e){this.dispatchEvent(new CustomEvent("rm-shopping-local-update",{detail:{items:e},bubbles:!0,composed:!0}))}render(){return U`
      <div class="shopping-view">
        ${this._useSLM?this._renderSlmMode():this._renderLocalMode()}
      </div>
    `}_renderSlmMode(){return U`
      <div class="slm-card-wrap">
        <div class="slm-host"></div>
      </div>
    `}_renderLocalMode(){const e=this.localItems.some(e=>e.checked),t=this.localItems.filter(e=>!e.checked),i=this.localItems.filter(e=>e.checked);return U`
      <div class="sv-header">
        <span class="sv-list-name">My Shopping List</span>
        <div class="sv-actions">
          ${e?U`
            <button class="sv-btn danger" @click=${this._clearLocalChecked}>
              <ha-icon icon="mdi:delete-sweep-outline"></ha-icon>
              <span>Clear checked</span>
            </button>
          `:""}
          ${this.localItems.length?U`
            <button class="sv-btn" @click=${this._clearAllLocal} title="Clear all">
              <ha-icon icon="mdi:delete-outline"></ha-icon>
            </button>
          `:""}
        </div>
      </div>

      <div class="sv-install-banner">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <div class="sv-install-text">
          <strong>Get more features with Shopping List Manager</strong>
          <span>Install the Shopping List Manager HACS integration for shared lists, categories, and sync.</span>
        </div>
      </div>

      ${0===this.localItems.length?U`
        <div class="sv-empty">
          <ha-icon icon="mdi:cart-outline"></ha-icon>
          <p>Your shopping list is empty.</p>
          <p class="sv-hint">Add ingredients from any recipe to get started.</p>
        </div>
      `:U`
        <div class="sv-items">
          ${t.map(e=>this._renderLocalRow(e))}
          ${i.length?U`
            <div class="sv-divider-label">Checked</div>
            ${i.map(e=>this._renderLocalRow(e))}
          `:""}
        </div>
      `}
    `}_renderLocalRow(e){const t=[e.amount||"",e.unit||""].filter(Boolean).join(" ");return U`
      <div class="sv-row ${e.checked?"sv-row-checked":""}"
        @click=${()=>this._toggleLocalItem(e.id)}>
        <div class="sv-row-left">
          <div class="cat-dot"></div>
          <span class="row-emoji">📦</span>
        </div>
        <div class="sv-row-mid">
          <span class="sv-item-name">${e.name}</span>
          ${t?U`<span class="sv-item-unit">${t}</span>`:""}
        </div>
        <div class="sv-row-right">
          <div class="sv-checkbox ${e.checked?"checked":""}">
            ${e.checked?U`<ha-icon icon="mdi:check"></ha-icon>`:""}
          </div>
        </div>
      </div>
    `}static styles=a`
    :host { display: block; height: 100%; }

    .shopping-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    /* ── Embedded SLM card ──────────────────────────────────────────────── */

    .slm-card-wrap {
      flex: 1;
      min-height: 0;
      padding: 10px 12px 12px;
      box-sizing: border-box;
      background: var(--rm-bg-main);
      overflow: hidden;
    }

    .slm-host {
      display: block;
      height: 100%;
      min-height: 0;
      overflow: hidden;
    }

    /* ── Header (local mode only) ───────────────────────────────────────── */

    .sv-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-bottom: 1px solid var(--rm-border);
      flex-shrink: 0;
      gap: 8px;
    }

    .sv-list-name {
      font-weight: 600;
      font-size: 15px;
      color: var(--rm-text);
    }

    .sv-actions { display: flex; gap: 6px; align-items: center; }

    .sv-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: 1px solid var(--rm-border);
      border-radius: 8px;
      color: var(--rm-text-secondary);
      padding: 5px 10px;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .sv-btn ha-icon { --mdc-icon-size: 18px; }
    .sv-btn:hover { background: var(--rm-accent-soft); color: var(--rm-text); }
    .sv-btn.danger { color: var(--error-color, #cf6679); border-color: var(--error-color, #cf6679); }
    .sv-btn.danger:hover { background: rgba(207,102,121,0.1); }

    /* ── Install banner ─────────────────────────────────────────────────── */

    .sv-install-banner {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      background: var(--rm-accent-soft);
      border-left: 3px solid var(--rm-accent);
      padding: 10px 14px;
      margin: 12px 16px;
      border-radius: 0 8px 8px 0;
      flex-shrink: 0;
    }
    .sv-install-banner ha-icon { --mdc-icon-size: 20px; color: var(--rm-accent); flex-shrink: 0; margin-top: 1px; }
    .sv-install-text { display: flex; flex-direction: column; gap: 2px; font-size: 12px; color: var(--rm-text-secondary); }
    .sv-install-text strong { color: var(--rm-text); font-size: 13px; }

    /* ── Empty state ────────────────────────────────────────────────────── */

    .sv-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 20px;
      color: var(--rm-text-secondary);
      text-align: center;
      gap: 6px;
    }
    .sv-empty ha-icon { --mdc-icon-size: 48px; opacity: 0.35; }
    .sv-empty p { margin: 0; font-size: 15px; }
    .sv-hint { font-size: 13px !important; color: var(--rm-text-muted) !important; }

    /* ── Local item rows ────────────────────────────────────────────────── */

    .sv-items {
      flex: 1;
      overflow-y: auto;
      padding: 4px 0 16px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }

    .sv-divider-label {
      padding: 12px 16px 4px;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--rm-text-muted);
    }

    .sv-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 14px 9px 12px;
      cursor: pointer;
      transition: background 0.12s;
      border-bottom: 1px solid var(--rm-border);
      min-height: 46px;
    }
    .sv-row:hover { background: var(--rm-accent-soft); }
    .sv-row-checked { opacity: 0.5; }

    .sv-row-left { display: flex; align-items: center; gap: 7px; flex-shrink: 0; }
    .cat-dot { width: 8px; height: 8px; border-radius: 50%; background: #78909c; flex-shrink: 0; }
    .row-emoji { font-size: 17px; line-height: 1; width: 22px; text-align: center; }

    .sv-row-mid {
      flex: 1;
      display: flex;
      align-items: baseline;
      gap: 7px;
      min-width: 0;
      flex-wrap: wrap;
    }

    .sv-item-name { font-size: 14px; color: var(--rm-text); font-weight: 500; }
    .sv-row-checked .sv-item-name { text-decoration: line-through; }
    .sv-item-unit { font-size: 12px; color: var(--rm-text-muted); }

    .sv-row-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }

    .sv-checkbox {
      width: 22px; height: 22px;
      border-radius: 50%;
      border: 2px solid var(--rm-border);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .sv-checkbox.checked { color: #fff; background: #78909c; border-color: #78909c; }
    .sv-checkbox ha-icon { --mdc-icon-size: 14px; }
  `}try{customElements.define("rm-shopping-view",Ee)}catch{}const Te="rm_settings",Ie="rm_shopping",Re="rm_recent_recipes",Oe="rm_timers",Fe={theme:"soft",darkMode:"system",fontSize:"medium",columns:3,showFavourites:!0,showPlanner:!0,recentCount:12,timerSound:"beep",keepScreenOn:!1,keepScreenOnMins:30,showUnitConversion:!1},De={soft:{light:{"--rm-bg-main":"#fafbfc","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#424242","--rm-text-secondary":"#757575","--rm-text-muted":"#9e9e9e","--rm-accent":"#9fa8da","--rm-accent-soft":"rgba(159,168,218,0.15)","--rm-border":"#e8eaf6","--rm-shadow":"0 2px 6px rgba(0,0,0,0.08)"},dark:{"--rm-bg-main":"#14161a","--rm-bg-surface":"#1b1f25","--rm-bg-elevated":"#232833","--rm-text":"#e4e7ec","--rm-text-secondary":"#a8b0bd","--rm-text-muted":"#7a8594","--rm-accent":"#9fa8da","--rm-accent-soft":"rgba(159,168,218,0.18)","--rm-border":"#2b313c","--rm-shadow":"0 2px 6px rgba(0,0,0,0.3)"}},arctic:{light:{"--rm-bg-main":"#f0f4f8","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#1a2332","--rm-text-secondary":"#526070","--rm-text-muted":"#8097aa","--rm-accent":"#2979ff","--rm-accent-soft":"rgba(41,121,255,0.12)","--rm-border":"#dce6f0","--rm-shadow":"0 2px 6px rgba(26,35,50,0.1)"}},meadow:{light:{"--rm-bg-main":"#f4f7f0","--rm-bg-surface":"#fefffe","--rm-bg-elevated":"#fefffe","--rm-text":"#2d3a2a","--rm-text-secondary":"#6b7c64","--rm-text-muted":"#96a98e","--rm-accent":"#4caf50","--rm-accent-soft":"rgba(76,175,80,0.12)","--rm-border":"#dde8d8","--rm-shadow":"0 2px 6px rgba(45,58,42,0.1)"}},blossom:{light:{"--rm-bg-main":"#fdf8fb","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#fff8fc","--rm-text":"#3d1f35","--rm-text-secondary":"#8c5e79","--rm-text-muted":"#b48fa5","--rm-accent":"#c2668a","--rm-accent-soft":"rgba(194,102,138,0.12)","--rm-border":"#f0d6e8","--rm-shadow":"0 2px 6px rgba(61,31,53,0.1)"},dark:{"--rm-bg-main":"#1a0d12","--rm-bg-surface":"#241420","--rm-bg-elevated":"#2e1a28","--rm-text":"#f8d0de","--rm-text-secondary":"#c070a0","--rm-text-muted":"#603050","--rm-accent":"#f48fb1","--rm-accent-soft":"rgba(244,143,177,0.15)","--rm-border":"rgba(248,208,222,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},ocean:{light:{"--rm-bg-main":"#f0f7ff","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#f9fbff","--rm-text":"#1a3a5f","--rm-text-secondary":"#4a6b8c","--rm-text-muted":"#7a9bbd","--rm-accent":"#0077ff","--rm-accent-soft":"rgba(0,119,255,0.12)","--rm-border":"#d0e1f2","--rm-shadow":"0 2px 6px rgba(26,58,95,0.1)"}},midnight:{dark:{"--rm-bg-main":"#0d1117","--rm-bg-surface":"#161b22","--rm-bg-elevated":"#1c2333","--rm-text":"#c9d1d9","--rm-text-secondary":"#8b949e","--rm-text-muted":"#6e7681","--rm-accent":"#58a6ff","--rm-accent-soft":"rgba(88,166,255,0.15)","--rm-border":"#21262d","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},ember:{dark:{"--rm-bg-main":"#111111","--rm-bg-surface":"#1c1a17","--rm-bg-elevated":"#242018","--rm-text":"#f5f0e8","--rm-text-secondary":"#a89880","--rm-text-muted":"#7a6a55","--rm-accent":"#f0a500","--rm-accent-soft":"rgba(240,165,0,0.15)","--rm-border":"rgba(245,240,232,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},neon:{dark:{"--rm-bg-main":"#0a0b10","--rm-bg-surface":"#121420","--rm-bg-elevated":"#1a1d2e","--rm-text":"#e0e0f0","--rm-text-secondary":"#a0a5c0","--rm-text-muted":"#6a6f8e","--rm-accent":"#bb86fc","--rm-accent-soft":"rgba(187,134,252,0.15)","--rm-border":"#2a2d45","--rm-shadow":"0 2px 8px rgba(0,0,0,0.6)"}}},Pe={small:"13px",medium:"15px",large:"17px"};function Le(e){try{const t=e.map(e=>({...e,savedAt:Date.now()}));localStorage.setItem(Oe,JSON.stringify(t))}catch{}}function Be(e){const t=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return t>0?`${t}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${i}:${String(r).padStart(2,"0")}`}function Me(e){try{const t=new(window.AudioContext||window.webkitAudioContext);t.createGain().connect(t.destination);const i=(e,i,r,n=.6)=>{const a=t.createOscillator(),s=t.createGain();a.connect(s),s.connect(t.destination),a.frequency.value=e,s.gain.setValueAtTime(n,t.currentTime+i),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+i+r),a.start(t.currentTime+i),a.stop(t.currentTime+i+r+.05)};if("beep"===e)i(880,0,.15),i(880,.2,.15),i(880,.4,.15);else if("ding"===e)i(1318,0,.8,.5),i(1047,.1,.6,.3);else if("alarm"===e)for(let e=0;e<5;e++)i(880,.25*e,.12),i(660,.25*e+.13,.1)}catch{}}class Ne extends se{static properties={hass:{type:Object},_config:{type:Object},_view:{type:String},_recipes:{type:Array},_tags:{type:Array},_selectedRecipe:{type:Object},_loading:{type:Boolean},_error:{type:String},_searchQuery:{type:String},_activeTag:{type:String},_shoppingLists:{type:Array},_slmAvailable:{type:Boolean},_localShoppingItems:{type:Array},_settings:{type:Object},_wide:{type:Boolean},_sidebarCollapsed:{type:Boolean},_gridScrollPos:{type:Number},_recentRecipeIds:{type:Array},_timers:{type:Array},_timerAlarm:{type:Object},_timerAlarmQueue:{type:Array},_timersPrevView:{type:String},_customTimerInput:{type:String},_hdrStarHover:{type:Number},_mobileMenuOpen:{type:Boolean},_navDirection:{type:String},_closingDetail:{type:Boolean}};constructor(){super(),this._view="grid",this._recipes=[],this._tags=[],this._selectedRecipe=null,this._loading=!1,this._error=null,this._searchQuery="",this._activeTag=null,this._shoppingLists=[],this._slmAvailable=!1,this._localShoppingItems=[],this._settings=function(){try{const e=localStorage.getItem(Te);return e?{...Fe,...JSON.parse(e)}:{...Fe}}catch{return{...Fe}}}(),this._wide=!1,this._sidebarCollapsed=!1,this._gridScrollPos=0,this._recentRecipeIds=function(){try{const e=localStorage.getItem(Re);return e?JSON.parse(e):[]}catch{return[]}}(),this._timers=function(){try{const e=localStorage.getItem(Oe);if(!e)return[];const t=JSON.parse(e),i=Date.now();return t.map(e=>{const t=e.savedAt?Math.floor((i-e.savedAt)/1e3):0,r=Math.max(0,(e.remaining??0)-(e.running?t:0));return{...e,remaining:r,savedAt:void 0}}).filter(e=>e.remaining>0)}catch{return[]}}(),this._timerAlarm=null,this._timerAlarmQueue=[],this._timersPrevView=null,this._customTimerInput="",this._hdrStarHover=0,this._mobileMenuOpen=!1,this._navDirection="forward",this._closingDetail=!1,this._alarmLoopActive=!1,this._alarmInterval=null,this._alarmTimeout=null,this._alarmAudio=null,this._unsubscribe=null,this._darkModeQuery=null,this._resizeObserver=null,this._timerTick=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("recipe-manager-card-editor")}static getStubConfig(){return{}}getCardSize(){return 6}_updateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{const e=this.getBoundingClientRect().top,t=window.innerHeight-Math.max(e,0);t>100&&(this.style.height=`${t}px`)}))}connectedCallback(){super.connectedCallback(),this._darkModeQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._darkModeQuery.addEventListener("change",this._onSystemDark),this._applyTheme(),this._resizeObserver=new ResizeObserver(e=>{const t=e[0]?.contentRect?.width??0;this._wide=t>=620}),this._resizeObserver.observe(this),this._onViewportResize=()=>this._updateHeight(),window.visualViewport?.addEventListener("resize",this._onViewportResize),window.addEventListener("resize",this._onViewportResize),this._updateHeight(),this._timerTick=setInterval(()=>this._tickTimers(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._darkModeQuery?.removeEventListener("change",this._onSystemDark),this._resizeObserver?.disconnect(),window.visualViewport?.removeEventListener("resize",this._onViewportResize),window.removeEventListener("resize",this._onViewportResize),this._timerTick&&(clearInterval(this._timerTick),this._timerTick=null),this._timerAlarm&&(this._stopAlarmLoop(),this._timerAlarm=null),this._timerAlarmQueue=[],Le(this._timers)}_onSystemDark=()=>{"system"===this._settings.darkMode&&this._applyTheme()};updated(e){e.has("hass")&&this.hass&&!this._api&&(this._api=new he(this.hass),this._init()),e.has("hass")&&this._api&&(this._api.hass=this.hass),e.has("_settings")&&this._applyTheme()}_applyTheme(){const e=this._settings,t=De[e.theme]??De.soft,i=!t.light,r=!t.dark;let n=i;i||r?r&&(n=!1):n="on"===e.darkMode||"off"!==e.darkMode&&(this._darkModeQuery?.matches??!1);const a=n?t.dark??t.light:t.light??t.dark;for(const[e,t]of Object.entries(a))this.style.setProperty(e,t);this.style.setProperty("--rm-font-size-base",Pe[e.fontSize]??"15px"),this.style.setProperty("--rm-grid-columns",`repeat(${e.columns??3}, minmax(0, 1fr))`)}async _init(){this._loading=!0,this._loadLocalShopping();try{await Promise.all([this._loadRecipes(),this._loadTags(),this._loadShoppingLists()]),await this._subscribe()}catch(e){this._error=e.message||"Failed to load recipes"}finally{this._loading=!1}}_loadLocalShopping(){try{const e=localStorage.getItem(Ie);this._localShoppingItems=e?JSON.parse(e):[]}catch{this._localShoppingItems=[]}}_saveLocalShopping(){try{localStorage.setItem(Ie,JSON.stringify(this._localShoppingItems))}catch{}}async _loadRecipes(){const e=await this._api.getAllRecipes();this._recipes=e?.recipes??[]}async _loadTags(){const e=await this._api.getTags();this._tags=e?.tags??[]}async _loadShoppingLists(){try{this._shoppingLists=(await this._api.getShoppingLists())?.lists??[],this._slmAvailable=!0}catch{this._shoppingLists=[],this._slmAvailable=!1}}async _subscribe(){if(!this._unsubscribe)try{this._unsubscribe=await this._api.subscribe(e=>{const t=e.event_type??e.event;/recipe_(added|updated|deleted)/.test(t)&&(this._loadRecipes(),this._loadTags())})}catch{}}get _filteredRecipes(){let e=this._recipes;if(this._activeTag&&(e=e.filter(e=>e.tags?.includes(this._activeTag)||e.courses?.includes(this._activeTag)||e.categories?.includes(this._activeTag)||e.collections?.includes(this._activeTag))),this._searchQuery.trim()){const t=this._searchQuery.trim().toLowerCase();e=e.filter(e=>e.name?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tags?.some(e=>e.toLowerCase().includes(t)))}return e}get _recentRecipes(){const e=this._settings.recentCount??12;return this._recentRecipeIds.slice(0,e).map(e=>this._recipes.find(t=>t.id===e)).filter(Boolean)}_handleSettingsChange(e){this._settings=e.detail.settings,function(e){try{localStorage.setItem(Te,JSON.stringify(e))}catch{}}(this._settings)}_tickTimers(){if(!this._timers.length)return;let e=!1;const t=[],i=this._timers.map(i=>{if(!i.running||i.remaining<=0)return i;const r=i.remaining-1;return e=!0,r<=0&&t.push({id:i.id,label:i.label}),{...i,remaining:r,running:r>0}});e&&(this._timers=i,Le(this._timers)),t.length&&(this._timerAlarm||(this._timerAlarm=t.shift(),this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)),t.length&&(this._timerAlarmQueue=[...this._timerAlarmQueue,...t]))}_startTimer(e,t){const i=Date.now().toString(36);this._timers=[...this._timers,{id:i,label:t||`${Math.floor(e/60)} min timer`,total:e,remaining:e,running:!0}],Le(this._timers)}_stopTimer(e){this._timers=this._timers.filter(t=>t.id!==e),Le(this._timers)}_pauseTimer(e){this._timers=this._timers.map(t=>t.id===e?{...t,running:!t.running}:t),Le(this._timers)}_addTimeToTimer(e,t){this._timers=this._timers.map(i=>i.id===e?{...i,remaining:i.remaining+t,total:i.total+t,running:!0}:i),this._timerAlarm?.id===e?(this._stopAlarmLoop(),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)):this._timerAlarmQueue=this._timerAlarmQueue.filter(t=>t.id!==e),Le(this._timers)}_dismissAlarm(){this._timerAlarm&&(this._stopAlarmLoop(),this._stopTimer(this._timerAlarm.id),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile))}_startAlarmLoop(e,t){if(this._stopAlarmLoop(),"none"!==e)if("file"===e&&t){this._alarmLoopActive=!0;const e=()=>{this._alarmLoopActive&&(this._alarmAudio=new Audio(t),this._alarmAudio.onended=()=>{this._alarmLoopActive&&(this._alarmTimeout=setTimeout(e,2e3))},this._alarmAudio.onerror=()=>{this._alarmLoopActive&&(this._alarmTimeout=setTimeout(()=>Me("beep"),2e3))},this._alarmAudio.play().catch(()=>{}))};e()}else Me(e),this._alarmInterval=setInterval(()=>Me(e),4e3)}_stopAlarmLoop(){this._alarmLoopActive=!1,this._alarmInterval&&(clearInterval(this._alarmInterval),this._alarmInterval=null),this._alarmTimeout&&(clearTimeout(this._alarmTimeout),this._alarmTimeout=null),this._alarmAudio&&(this._alarmAudio.pause(),this._alarmAudio.onended=null,this._alarmAudio.onerror=null,this._alarmAudio=null)}_handleStartTimer(e){const{seconds:t,label:i}=e.detail;this._startTimer(t,i)}_handleSearch(e){this._searchQuery=e.detail?.query??""}_handleTagFilter(e){const t=e.detail?.tag;this._activeTag=this._activeTag===t?null:t}_handleBack(){this._closingDetail||("detail"===this._view&&this._selectedRecipe&&!this._closingDetail?(this._closingDetail=!0,this._view="grid"):(this._navDirection="back",this._view="grid",this._selectedRecipe=null,this._closingDetail=!1))}_onDetailTransitionEnd(e){e.target===e.currentTarget&&"transform"===e.propertyName&&this._closingDetail&&(this._closingDetail=!1,this._selectedRecipe=null)}_handleShowGrid(){this._navDirection="back",this._view="grid",this._selectedRecipe=null}_handleShowPlanner(){this._navDirection="forward",this._view="planner"}_handleOpenRecipe(e){const t=this.shadowRoot?.querySelector("rm-recipe-grid");if(t){const e=t.shadowRoot?.querySelector(".grid-scroll");this._gridScrollPos=e?.scrollTop??0}const i=e.detail?.recipe;if(this._closingDetail=!1,this._navDirection="forward",this._selectedRecipe=i,this._view="detail",i?.id){const e=[i.id,...this._recentRecipeIds.filter(e=>e!==i.id)].slice(0,50);this._recentRecipeIds=e,function(e){try{localStorage.setItem(Re,JSON.stringify(e))}catch{}}(e)}}async _handleToggleFavourite(e){const{recipeId:t}=e.detail;await this._api.toggleFavourite(t),await this._loadRecipes(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??this._selectedRecipe)}async _handleDeleteRecipe(e){await this._api.deleteRecipe(e.detail.recipeId),await this._loadRecipes(),await this._loadTags(),this._navDirection="back",this._view="grid",this._selectedRecipe=null}async _handleUpdateRecipe(e){const{recipeId:t,data:i}=e.detail;await this._api.updateRecipe(t,i),await this._loadRecipes(),await this._loadTags(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??null)}async _handleAddRecipe(e){try{await this._api.addRecipe(e.detail.data),this._navDirection="back",this._view="grid",await this._loadRecipes(),await this._loadTags()}catch(e){console.error("[Recipe Manager] Failed to save recipe:",e)}}async _handleImportDone(){this._navDirection="back",this._view="grid",await this._loadRecipes(),await this._loadTags()}async _handleAddToShopping(e){const{ingredients:t,listId:i,recipeName:r}=e.detail;if(this._slmAvailable&&i)try{(await this._api.addIngredientsToShoppingList(i,t,r)).filter(e=>!e.success).length&&console.warn("Some ingredients failed to add to SLM")}catch(e){console.error("Shopping list error:",e)}else{const e=t.map(e=>({id:Math.random().toString(36).slice(2,10),name:e.name,amount:e.amount||null,unit:e.unit||null,checked:!1}));this._localShoppingItems=[...this._localShoppingItems,...e],this._saveLocalShopping()}}_handleShoppingLocalUpdate(e){this._localShoppingItems=e.detail.items,this._saveLocalShopping()}_renderStars(e){const t=e||0,i=this._hdrStarHover,r=i>0?i:t;return U`
      <div class="header-stars"
        @mouseleave=${()=>{this._hdrStarHover=0}}
        title="${i>0?`Set rating: ${i}★`:t>0?`Rating: ${t}★ — click to change`:"Click to rate"}">
        ${[1,2,3,4,5].map(e=>U`
          <span class="hdr-star ${e<=r?"filled":""}"
            @mouseover=${()=>{this._hdrStarHover=e}}
            @click=${()=>this._handleRateRecipe(e)}>★</span>
        `)}
      </div>
    `}async _handleRateRecipe(e){if(!this._selectedRecipe)return;const t=this._selectedRecipe.rating===e?null:e;this._hdrStarHover=0,await this._handleUpdateRecipe({detail:{recipeId:this._selectedRecipe.id,data:{rating:t}}})}_renderSidebar(){const e=this._view,t=this._sidebarCollapsed,i=(i,r,n,a=!1)=>U`
      <button
        class="sb-item ${e===n?"active":""} ${a?"placeholder":""}"
        title="${a?r+" — coming soon":r}"
        @click=${a?void 0:()=>{this._navDirection="forward",this._view=n,this._selectedRecipe=null}}
        ?disabled=${a}
      >
        <ha-icon icon="${i}"></ha-icon>
        ${t?"":U`<span>${r}</span>`}
      </button>
    `;return U`
      <nav class="rm-sidebar ${t?"collapsed":""}">
        <div class="sb-top">
          <div class="sb-logo-row">
            <button class="sb-collapse-btn" @click=${()=>{this._sidebarCollapsed=!this._sidebarCollapsed}}
              title="${t?"Expand sidebar":"Collapse sidebar"}">
              <ha-icon icon="${t?"mdi:menu-close":"mdi:menu-open"}"></ha-icon>
            </button>
            ${t?"":U`
              <div class="sb-logo">
                <ha-icon icon="mdi:chef-hat"></ha-icon>
                <span>Recipes</span>
              </div>
            `}
          </div>

          ${t?U`
            <button class="sb-icon-only-btn" @click=${()=>{this._view="add"}} title="New Recipe">
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          `:U`
            <div class="sb-search">
              <ha-icon icon="mdi:magnify" class="sb-search-icon"></ha-icon>
              <input
                class="sb-search-input"
                type="text"
                placeholder="Search…"
                .value=${this._searchQuery}
                @input=${e=>{this._searchQuery=e.target.value,this._navDirection="back",this._view="grid"}}
              />
              ${this._searchQuery?U`
                <button class="sb-search-clear" @click=${()=>{this._searchQuery=""}}>
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              `:""}
            </div>

            <button class="sb-new-btn" @click=${()=>{this._view="add"}}>
              <ha-icon icon="mdi:plus"></ha-icon>
              <span>New Recipe</span>
            </button>
          `}
        </div>

        <div class="sb-nav">
          ${i("mdi:home","Home","grid")}
          ${i("mdi:cart-outline","Shopping List","shopping")}
          ${this._settings.showPlanner?i("mdi:calendar-week","Meal Planner","planner"):""}
          ${i("mdi:book-open-variant","Cookbook","cookbook",!0)}
          <button
            class="sb-item ${"timers"===e?"active":""}"
            title="Timers"
            @click=${()=>{this._timersPrevView=this._view,this._view="timers"}}
          >
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t?"":U`<span>Timers</span>`}
            ${this._timers.length?U`<span class="sb-timer-badge">${this._timers.length}</span>`:""}
          </button>
        </div>

        <div class="sb-bottom">
          <button class="sb-item placeholder" disabled title="Sync — coming soon">
            <ha-icon icon="mdi:cloud-sync-outline"></ha-icon>${t?"":U`<span>Sync</span>`}
          </button>
          <button class="sb-item placeholder" disabled title="Help — coming soon">
            <ha-icon icon="mdi:help-circle-outline"></ha-icon>${t?"":U`<span>Help</span>`}
          </button>
          <button class="sb-item ${"settings"===e?"active":""}"
            @click=${()=>{this._view="settings"}}>
            <ha-icon icon="mdi:cog-outline"></ha-icon>${t?"":U`<span>Settings</span>`}
          </button>
        </div>
      </nav>
    `}_renderHeader(){const e=("detail"===this._view||this._closingDetail)&&this._selectedRecipe,t="settings"===this._view,i="add"===this._view,r="timers"===this._view,n=this._wide,a=t?"Settings":i?"New Recipe":r?"Timers":e?"":"planner"===this._view?"Meal Planner":"shopping"===this._view?"Shopping List":"Recipes";return U`
      <div class="rm-header">
        <div class="rm-header-left">
          ${e||i?U`
            <button class="icon-btn" @click=${this._handleBack} title="Back">
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:r&&"detail"===this._timersPrevView?U`
            <button class="icon-btn"
              @click=${()=>{this._navDirection="back",this._view="detail",this._timersPrevView=null}}
              title="Back to recipe">
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:n?"":U`
            ${"grid"===this._view||t||r?U`
              <ha-icon icon="mdi:chef-hat" class="rm-logo"></ha-icon>
            `:U`
              <button class="icon-btn" @click=${this._handleShowGrid}>
                <ha-icon icon="mdi:arrow-left"></ha-icon>
              </button>
            `}
          `}
          <span class="rm-title">${a}</span>
        </div>

        <div class="rm-header-right">
          <!-- Timer pills (compact, shown when timers are running, not in timer view) -->
          ${this._timers.length&&"timers"!==this._view?U`
            <div class="timer-pills" @click=${()=>{this._navDirection="forward",this._timersPrevView=this._view,this._view="timers"}}>
              ${this._timers.slice(0,3).map(e=>U`
                <div class="timer-pill ${e.running?"":"paused"}">
                  <ha-icon icon="mdi:timer-outline"></ha-icon>
                  <span>${Be(e.remaining)}</span>
                </div>
              `)}
              ${this._timers.length>3?U`<span class="timer-more">+${this._timers.length-3}</span>`:""}
            </div>
          `:""}

          ${e?this._renderStars(this._selectedRecipe.rating):""}

          ${t||i||r?U`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          `:n?"":U`
            <button class="icon-btn"
              @click=${()=>{this._mobileMenuOpen=!this._mobileMenuOpen}}
              title="${this._mobileMenuOpen?"Close menu":"Menu"}">
              <ha-icon icon="${this._mobileMenuOpen?"mdi:close":"mdi:menu"}"></ha-icon>
            </button>
          `}
        </div>
      </div>
    `}_renderBody(){const e=this._settings;if("settings"===this._view)return U`
      <rm-settings-view
        .settings=${e}
        @rm-settings-change=${this._handleSettingsChange}
      ></rm-settings-view>
    `;if("add"===this._view)return U`
      <rm-add-recipe-dialog
        .api=${this._api}
        .asPanel=${!0}
        .inlineMode=${!0}
        @rm-add-recipe=${this._handleAddRecipe}
        @rm-import-done=${this._handleImportDone}
        @rm-close=${()=>{this._navDirection="back",this._view="grid"}}
      ></rm-add-recipe-dialog>
    `;if("timers"===this._view)return this._renderTimersView();if("planner"===this._view)return U`
      <rm-meal-planner
        .api=${this._api}
        .recipes=${this._recipes}
        @rm-open-recipe=${this._handleOpenRecipe}
      ></rm-meal-planner>
    `;if("shopping"===this._view)return U`
      <rm-shopping-view
        .hass=${this.hass}
        .slmAvailable=${this._slmAvailable}
        .shoppingLists=${this._shoppingLists}
        .api=${this._api}
        .localItems=${this._localShoppingItems}
        .settings=${this._settings}
        @rm-shopping-local-update=${this._handleShoppingLocalUpdate}
      ></rm-shopping-view>
    `;if(this._loading)return U`
      <div class="rm-loading"><ha-circular-progress active size="large"></ha-circular-progress></div>
    `;if(this._error)return U`
      <div class="rm-error">
        <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
        <p>${this._error}</p>
        <button class="text-btn" @click=${this._init.bind(this)}>Retry</button>
      </div>
    `;const t=("detail"===this._view||this._closingDetail)&&this._selectedRecipe;return U`
      <div class="rm-slide-track ${"detail"===this._view?"show-detail":""}"
        @transitionend=${this._onDetailTransitionEnd}>
        <div class="rm-slide-pane">
          <rm-recipe-grid
            .recipes=${this._filteredRecipes}
            .allRecipes=${this._recipes}
            .tags=${this._tags}
            .searchQuery=${this._searchQuery}
            .activeTag=${this._activeTag}
            .columns=${e.columns}
            .showFavourites=${e.showFavourites}
            .hideSidebar=${this._wide}
            .scrollPos=${this._gridScrollPos}
            .recentRecipes=${this._recentRecipes}
            .recentCount=${e.recentCount??12}
            @rm-search=${this._handleSearch}
            @rm-tag-filter=${this._handleTagFilter}
            @rm-open-recipe=${this._handleOpenRecipe}
            @rm-toggle-favourite=${this._handleToggleFavourite}
          ></rm-recipe-grid>
        </div>
        <div class="rm-slide-pane">
          ${t?U`
            <rm-recipe-detail
              .recipe=${this._selectedRecipe}
              .api=${this._api}
              .settings=${e}
              .wide=${this._wide}
              .shoppingLists=${this._shoppingLists}
              .slmAvailable=${this._slmAvailable}
              @rm-back=${this._handleBack}
              @rm-toggle-favourite=${this._handleToggleFavourite}
              @rm-delete-recipe=${this._handleDeleteRecipe}
              @rm-update-recipe=${this._handleUpdateRecipe}
              @rm-add-to-shopping=${this._handleAddToShopping}
              @rm-start-timer=${this._handleStartTimer}
              @rm-show-planner=${this._handleShowPlanner}
            ></rm-recipe-detail>
          `:""}
        </div>
      </div>
    `}_renderTimersView(){const e=this._customTimerInput.trim();return U`
      <div class="timers-view">
        ${0===this._timers.length?U`
          <div class="timer-empty">
            <ha-icon icon="mdi:timer-off-outline"></ha-icon>
            <p>No active timers.</p>
            <p class="timer-empty-hint">Tap a highlighted time in a recipe's directions to start one.</p>
          </div>
        `:U`
          <div class="timer-list">
            ${this._timers.map(e=>U`
              <div class="timer-item">
                <div class="timer-info">
                  <span class="timer-label">${e.label}</span>
                  <div class="timer-bar-wrap">
                    <div class="timer-bar" style="width:${Math.round(e.remaining/e.total*100)}%"></div>
                  </div>
                </div>
                <div class="timer-time">${Be(e.remaining)}</div>
                <div class="timer-controls">
                  <button class="timer-ctrl-btn" @click=${()=>this._pauseTimer(e.id)} title="${e.running?"Pause":"Resume"}">
                    <ha-icon icon="${e.running?"mdi:pause":"mdi:play"}"></ha-icon>
                  </button>
                  <button class="timer-ctrl-btn danger" @click=${()=>this._stopTimer(e.id)} title="Stop">
                    <ha-icon icon="mdi:stop"></ha-icon>
                  </button>
                </div>
              </div>
            `)}
          </div>
        `}

        <!-- Manual timer entry -->
        <div class="timer-add-section">
          <div class="timer-add-label">Add a timer (minutes):</div>
          <div class="timer-add-ctrl">
            <input
              type="number"
              class="timer-input"
              placeholder="e.g. 10"
              min="1"
              .value=${this._customTimerInput}
              @input=${e=>{this._customTimerInput=e.target.value}}
              @keydown=${t=>{"Enter"===t.key&&e&&(this._startTimer(60*parseInt(this._customTimerInput),`${this._customTimerInput} min timer`),this._customTimerInput="")}}
            />
            <button class="action-btn primary"
              ?disabled=${!e}
              @click=${()=>{this._startTimer(60*parseInt(this._customTimerInput),`${this._customTimerInput} min timer`),this._customTimerInput=""}}>
              Start
            </button>
          </div>
        </div>
      </div>
    `}_renderTimerAlarm(){const e=this._timerAlarm;return e?U`
      <div class="alarm-overlay">
        <div class="alarm-bubble">
          <ha-icon icon="mdi:alarm" class="alarm-icon"></ha-icon>
          <div class="alarm-label">${e.label}</div>
          <div class="alarm-sub">Timer complete!</div>
          <div class="alarm-btns">
            <button class="alarm-btn" @click=${()=>this._addTimeToTimer(e.id,300)}>+5 min</button>
            <button class="alarm-btn" @click=${()=>this._addTimeToTimer(e.id,600)}>+10 min</button>
            <button class="alarm-btn accent" @click=${()=>{const t=parseInt(prompt("Add how many minutes?")||"0");t>0?this._addTimeToTimer(e.id,60*t):this._dismissAlarm()}}>Custom</button>
            <button class="alarm-btn stop" @click=${this._dismissAlarm}>Stop</button>
          </div>
        </div>
      </div>
    `:""}_renderBottomNav(){const e=this._view,t=(t,i,r,n)=>U`
      <button class="rm-bn-btn ${e===r?"active":""}"
        @click=${n||(()=>{this._navDirection="forward",this._view=r,this._selectedRecipe=null})}
        title="${i}">
        <ha-icon icon="${t}"></ha-icon>
        <span>${i}</span>
      </button>
    `;return U`
      <nav class="rm-bottom-nav">
        ${t("mdi:home","Home","grid",()=>{this._navDirection="back",this._view="grid",this._selectedRecipe=null})}
        ${t("mdi:cart-outline","Shopping","shopping")}
        <button class="rm-bn-btn rm-bn-add"
          @click=${()=>{this._navDirection="forward",this._view="add"}}
          title="New Recipe">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
        ${t("mdi:calendar-week","Planner","planner")}
        <button class="rm-bn-btn ${"timers"===e?"active":""}"
          @click=${()=>{this._navDirection="forward",this._timersPrevView=this._view,this._view="timers"}}
          title="Timers">
          <ha-icon icon="mdi:timer-outline"></ha-icon>
          <span>Timers</span>
          ${this._timers.length?U`<span class="rm-bn-badge">${this._timers.length}</span>`:""}
        </button>
      </nav>
    `}_renderMobileMenu(){return U`
      <div class="rm-mobile-overlay" @click=${()=>{this._mobileMenuOpen=!1}}>
        <nav class="rm-mobile-menu" @click=${e=>e.stopPropagation()}>
          <div class="rm-mm-header">
            <ha-icon icon="mdi:chef-hat" class="rm-mm-logo"></ha-icon>
            <span class="rm-mm-title">Recipes</span>
            <button class="icon-btn" @click=${()=>{this._mobileMenuOpen=!1}}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="rm-mm-items">
            <button class="rm-mm-item" @click=${()=>{this._view="settings",this._mobileMenuOpen=!1}}>
              <ha-icon icon="mdi:cog-outline"></ha-icon>
              <span>Settings</span>
            </button>
            <button class="rm-mm-item" disabled>
              <ha-icon icon="mdi:help-circle-outline"></ha-icon>
              <span>Help</span>
              <span class="rm-mm-soon">Soon</span>
            </button>
          </div>
        </nav>
      </div>
    `}render(){const e=this._wide;return U`
      <ha-card class="rm-card ${e?"rm-wide":""}">
        ${e?this._renderSidebar():""}
        <div class="rm-main">
          ${this._renderHeader()}
          <div class="rm-body" data-nav="${this._navDirection}">${this._renderBody()}</div>
          ${e?"":this._renderBottomNav()}
        </div>

        ${!e&&this._mobileMenuOpen?this._renderMobileMenu():""}

        <!-- Timer alarm modal -->
        ${this._timerAlarm?this._renderTimerAlarm():""}
      </ha-card>
    `}static styles=a`
    :host {
      display: block;
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
      max-height: -webkit-fill-available;
      --rm-bg-main:        #fafbfc;
      --rm-bg-surface:     #ffffff;
      --rm-bg-elevated:    #ffffff;
      --rm-text:           #424242;
      --rm-text-secondary: #757575;
      --rm-text-muted:     #9e9e9e;
      --rm-accent:         #9fa8da;
      --rm-accent-soft:    rgba(159,168,218,0.15);
      --rm-border:         #e8eaf6;
      --rm-shadow:         0 2px 6px rgba(0,0,0,0.08);
      --rm-radius:         12px;
      --rm-radius-sm:      8px;
      --rm-font-size-base: 15px;
      --rm-grid-columns:   repeat(3, minmax(0, 1fr));
      font-size: var(--rm-font-size-base);
    }

    ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      overflow: hidden;
      position: relative;
      background: var(--rm-bg-surface);
    }
    ha-card.rm-card {
      background: var(--rm-bg-main);
      border-radius: 0;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      height: 100%;
      margin: 0;
      color: var(--rm-text);
      position: relative;
    }

    /* ── Sidebar ─────────────────────────────── */

    .rm-sidebar {
      width: 200px;
      min-width: 200px;
      display: flex;
      flex-direction: column;
      background: var(--rm-bg-surface);
      border-right: 1px solid var(--rm-border);
      overflow: hidden;
      transition: width 0.2s ease, min-width 0.2s ease;
    }

    .rm-sidebar.collapsed {
      width: 56px;
      min-width: 56px;
    }

    ha-card:not(.rm-wide) .rm-sidebar { display: none; }

    .sb-top {
      padding: 12px 8px 8px;
      flex-shrink: 0;
    }

    .sb-logo-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2px 8px;
    }

    .sb-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 15px;
      color: var(--rm-accent);
      overflow: hidden;
    }
    .sb-logo ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }

    .sb-collapse-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--rm-text-muted);
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      transition: background 0.15s, color 0.15s;
    }
    .sb-collapse-btn:hover { background: var(--rm-accent-soft); color: var(--rm-text); }
    .sb-collapse-btn ha-icon { --mdc-icon-size: 20px; }

    .sb-search {
      display: flex;
      align-items: center;
      background: var(--rm-bg-main);
      border-radius: 8px;
      padding: 0 8px;
      gap: 6px;
      margin-bottom: 8px;
      border: 1px solid var(--rm-border);
    }
    .sb-search-icon { --mdc-icon-size: 16px; color: var(--rm-text-muted); flex-shrink: 0; }
    .sb-search-input {
      flex: 1; background: none; border: none; outline: none;
      color: var(--rm-text); font-size: 13px; padding: 7px 0;
    }
    .sb-search-input::placeholder { color: var(--rm-text-muted); }
    .sb-search-clear {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-muted); padding: 2px; display: flex; align-items: center;
    }
    .sb-search-clear ha-icon { --mdc-icon-size: 14px; }

    .sb-new-btn {
      display: flex; align-items: center; gap: 8px;
      width: 100%; padding: 8px 10px;
      background: var(--rm-accent); color: #fff;
      border: none; border-radius: 8px;
      font-size: 13px; font-weight: 600; cursor: pointer;
      transition: opacity 0.15s;
    }
    .sb-new-btn:hover { opacity: 0.88; }
    .sb-new-btn ha-icon { --mdc-icon-size: 18px; }

    .sb-icon-only-btn {
      display: flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; margin: 0 auto;
      background: var(--rm-accent); color: #fff;
      border: none; border-radius: 8px;
      cursor: pointer; transition: opacity 0.15s;
    }
    .sb-icon-only-btn:hover { opacity: 0.88; }
    .sb-icon-only-btn ha-icon { --mdc-icon-size: 20px; }

    .sb-nav {
      flex: 1;
      overflow-y: auto;
      padding: 8px 6px 4px;
      scrollbar-width: none;
    }
    .sb-nav::-webkit-scrollbar { display: none; }

    .sb-bottom {
      padding: 4px 6px 12px;
      border-top: 1px solid var(--rm-border);
    }

    .sb-item {
      display: flex; align-items: center; gap: 10px;
      width: 100%; padding: 9px 10px;
      background: none; border: none; border-radius: 8px;
      font-size: 14px; color: var(--rm-text-secondary);
      cursor: pointer; text-align: left;
      transition: background 0.12s, color 0.12s;
      position: relative;
    }
    .rm-sidebar.collapsed .sb-item {
      justify-content: center;
      padding: 10px 6px;
    }
    .sb-item ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }
    .sb-item:hover:not(:disabled) { background: var(--rm-accent-soft); color: var(--rm-text); }
    .sb-item.active { background: var(--rm-accent-soft); color: var(--rm-accent); font-weight: 600; }
    .sb-item.placeholder { opacity: 0.4; cursor: default; }

    .sb-timer-badge {
      margin-left: auto;
      background: var(--rm-accent);
      color: #fff;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 700;
      padding: 1px 6px;
      min-width: 18px;
      text-align: center;
    }
    .rm-sidebar.collapsed .sb-timer-badge {
      position: absolute;
      top: 4px; right: 4px;
      margin-left: 0;
      font-size: 9px;
      padding: 1px 4px;
    }

    /* ── Main content ────────────────────────── */

    .rm-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow: hidden;
    }

    .rm-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      border-bottom: 1px solid var(--rm-border);
      background: var(--rm-bg-surface);
      flex-shrink: 0;
      gap: 8px;
    }

    .rm-header-left, .rm-header-right {
      display: flex; align-items: center; gap: 6px;
      min-width: 0;
    }
    .rm-header-left { flex: 1; min-width: 0; }
    .rm-header-right { flex-shrink: 0; }

    .rm-logo { color: var(--rm-accent); --mdc-icon-size: 24px; }

    .rm-title {
      font-size: 17px; font-weight: 600; color: var(--rm-text);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      flex: 1; min-width: 0;
    }

    /* Star rating in header */
    .header-stars {
      display: flex;
      gap: 1px;
      align-items: center;
    }
    .hdr-star {
      font-size: 18px;
      color: var(--rm-border, rgba(0,0,0,0.2));
      line-height: 1;
      cursor: pointer;
      transition: color 0.1s, transform 0.1s;
      -webkit-text-stroke: 1px rgba(200,150,0,0.3);
    }
    .hdr-star:hover { transform: scale(1.2); color: #f5a623; }
    .hdr-star.filled { color: #f5a623; -webkit-text-stroke: 1px #c47f0a; }

    /* Timer pills */
    .timer-pills {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      padding: 2px;
    }
    .timer-pill {
      display: flex;
      align-items: center;
      gap: 3px;
      background: var(--rm-accent-soft);
      color: var(--rm-accent);
      border-radius: 10px;
      padding: 3px 8px;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }
    .timer-pill.paused { opacity: 0.6; }
    .timer-pill ha-icon { --mdc-icon-size: 12px; }
    .timer-more {
      font-size: 11px;
      color: var(--rm-text-secondary);
      padding: 0 4px;
    }

    .rm-body {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .icon-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary); width: 34px; height: 34px;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; padding: 0; flex-shrink: 0;
    }
    .icon-btn:hover { background: var(--rm-border); color: var(--rm-text); }

    .text-btn {
      background: var(--rm-accent); color: #fff; border: none;
      border-radius: var(--rm-radius-sm); padding: 8px 16px;
      cursor: pointer; font-size: 14px; font-weight: 500;
    }

    .rm-loading {
      display: flex; justify-content: center; align-items: center; height: 200px;
    }

    .rm-error {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; padding: 40px 20px; gap: 12px;
      color: var(--rm-text-secondary); text-align: center;
    }
    .rm-error ha-icon { --mdc-icon-size: 48px; color: var(--error-color, #cf6679); }
    .rm-error p { margin: 0; font-size: 14px; }

    /* ── Timers view ─────────────────────────── */

    .timers-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      padding: 16px;
      gap: 16px;
    }

    .timer-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 40px 0 24px;
      color: var(--rm-text-secondary);
      text-align: center;
      font-size: 14px;
    }
    .timer-empty ha-icon { --mdc-icon-size: 48px; opacity: 0.35; }
    .timer-empty p { margin: 0; }
    .timer-empty-hint { font-size: 12px !important; color: var(--rm-text-muted) !important; }

    .timer-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .timer-item {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--rm-bg-elevated);
      border-radius: 10px;
      padding: 12px 14px;
      border: 1px solid var(--rm-border);
    }

    .timer-info { flex: 1; min-width: 0; }
    .timer-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--rm-text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .timer-bar-wrap {
      height: 4px;
      background: var(--rm-border);
      border-radius: 2px;
      margin-top: 6px;
      overflow: hidden;
    }
    .timer-bar {
      height: 100%;
      background: var(--rm-accent);
      border-radius: 2px;
      transition: width 1s linear;
    }

    .timer-time {
      font-size: 20px;
      font-weight: 700;
      color: var(--rm-accent);
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }

    .timer-controls { display: flex; gap: 4px; }
    .timer-ctrl-btn {
      background: none;
      border: 1px solid var(--rm-border);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--rm-text-secondary);
      padding: 0;
      transition: background 0.15s, color 0.15s;
    }
    .timer-ctrl-btn ha-icon { --mdc-icon-size: 15px; }
    .timer-ctrl-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent); }
    .timer-ctrl-btn.danger:hover { background: rgba(207,102,121,0.12); color: var(--error-color, #cf6679); border-color: var(--error-color, #cf6679); }

    .timer-add-section {
      border-top: 1px solid var(--rm-border);
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: auto;
    }
    .timer-add-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--rm-text-secondary);
    }
    .timer-add-ctrl { display: flex; gap: 8px; }
    .timer-input {
      flex: 1;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 8px;
      color: var(--rm-text);
      padding: 8px 10px;
      font-size: 14px;
    }
    .timer-input:focus { outline: none; border-color: var(--rm-accent); }

    .action-btn {
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 8px;
      color: var(--rm-text);
      padding: 8px 14px;
      cursor: pointer;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s;
    }
    .action-btn.primary {
      background: var(--rm-accent);
      border-color: var(--rm-accent);
      color: #fff;
    }
    .action-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* ── Timer alarm bubble ──────────────────── */

    .alarm-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .alarm-bubble {
      background: var(--rm-bg-surface);
      border-radius: 20px;
      padding: 28px 24px;
      text-align: center;
      max-width: 300px;
      width: calc(100% - 48px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .alarm-icon {
      --mdc-icon-size: 52px;
      color: var(--rm-accent);
      animation: alarm-pulse 0.8s ease-in-out infinite alternate;
    }

    @keyframes alarm-pulse {
      from { transform: scale(1); opacity: 1; }
      to   { transform: scale(1.15); opacity: 0.8; }
    }

    .alarm-label {
      font-size: 18px;
      font-weight: 700;
      color: var(--rm-text);
    }

    .alarm-sub {
      font-size: 13px;
      color: var(--rm-text-secondary);
      margin-bottom: 8px;
    }

    .alarm-btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      width: 100%;
    }

    .alarm-btn {
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 10px;
      color: var(--rm-text);
      padding: 10px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.15s;
    }
    .alarm-btn:hover { background: var(--rm-accent-soft); }
    .alarm-btn.accent { background: var(--rm-accent); color: #fff; border-color: var(--rm-accent); }
    .alarm-btn.stop {
      background: var(--error-color, #cf6679);
      color: #fff;
      border-color: var(--error-color, #cf6679);
      grid-column: 1 / -1;
    }
    .alarm-btn.stop:hover { opacity: 0.85; }

    /* ── View transitions ───────────────────────────────────── */

    /* Generic directional slide for full-screen views (settings, add, planner, etc.) */
    @keyframes rm-slide-forward {
      from { opacity: 0; transform: translateX(48px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes rm-slide-back {
      from { opacity: 0; transform: translateX(-48px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .rm-body[data-nav="forward"] > *:not(.rm-detail-overlay) { animation: rm-slide-forward 0.25s cubic-bezier(0.25,0.46,0.45,0.94); }
    .rm-body[data-nav="back"]    > *:not(.rm-detail-overlay) { animation: rm-slide-back    0.25s cubic-bezier(0.25,0.46,0.45,0.94); }

    /* Recipe detail — sliding track (grid left pane, detail right pane) */
    .rm-slide-track {
      display: flex;
      flex-direction: row;
      width: 200%;
      height: 100%;
      transform: translateX(0);
      transition: transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: transform;
    }
    .rm-slide-track.show-detail {
      transform: translateX(-50%);
    }
    .rm-slide-pane {
      flex: 0 0 50%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .rm-slide-pane > * {
      flex: 1;
      min-height: 0;
    }

    /* ── Mobile bottom nav ───────────────── */

    .rm-bottom-nav {
      display: flex;
      justify-content: space-around;
      background: var(--rm-bg-surface);
      border-top: 1px solid var(--rm-border);
      padding: 6px 0;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
      z-index: 10;
      flex-shrink: 0;
    }

    .rm-bn-btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--rm-text-muted);
      font-size: 10px;
      font-weight: 500;
      padding: 6px 4px;
      position: relative;
      transition: color 0.15s;
      -webkit-tap-highlight-color: transparent;
      outline: none;
    }
    .rm-bn-btn ha-icon { --mdc-icon-size: 22px; }
    .rm-bn-btn.active { color: var(--rm-accent); }
    .rm-bn-btn:not(.rm-bn-add):hover { color: var(--rm-text); }

    .rm-bn-add {
      background: var(--rm-accent);
      color: white !important;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      flex: none;
      align-self: center;
      margin: 0 8px;
      padding: 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .rm-bn-add ha-icon { --mdc-icon-size: 26px; }

    .rm-bn-badge {
      position: absolute;
      top: 2px;
      right: calc(50% - 20px);
      background: var(--rm-accent);
      color: #fff;
      border-radius: 8px;
      font-size: 9px;
      font-weight: 700;
      padding: 1px 4px;
      min-width: 14px;
      text-align: center;
    }

    /* ── Mobile slide-in menu ────────────── */

    .rm-mobile-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.4);
      z-index: 100;
      display: flex;
      justify-content: flex-end;
    }

    .rm-mobile-menu {
      width: min(280px, 80%);
      height: 100%;
      background: var(--rm-bg-surface);
      border-left: 1px solid var(--rm-border);
      display: flex;
      flex-direction: column;
      animation: rm-menu-slide-in 0.22s ease;
      overflow: hidden;
    }

    @keyframes rm-menu-slide-in {
      from { transform: translateX(100%); }
      to   { transform: translateX(0); }
    }

    .rm-mm-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 12px 14px 16px;
      border-bottom: 1px solid var(--rm-border);
      flex-shrink: 0;
    }
    .rm-mm-logo { color: var(--rm-accent); --mdc-icon-size: 22px; }
    .rm-mm-title { flex: 1; font-weight: 700; font-size: 15px; color: var(--rm-text); }

    .rm-mm-items { padding: 8px 0; flex: 1; overflow-y: auto; }

    .rm-mm-item {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 12px 16px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--rm-text-secondary);
      font-size: 14px;
      text-align: left;
      transition: background 0.12s, color 0.12s;
      -webkit-tap-highlight-color: transparent;
    }
    .rm-mm-item ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }
    .rm-mm-item:hover:not(:disabled) { background: var(--rm-accent-soft); color: var(--rm-text); }
    .rm-mm-item:disabled { opacity: 0.4; cursor: default; }

    .rm-mm-soon {
      margin-left: auto;
      font-size: 10px;
      font-weight: 700;
      background: var(--rm-accent-soft);
      color: var(--rm-accent);
      border-radius: 6px;
      padding: 2px 6px;
    }
  `}try{customElements.define("recipe-manager-card",Ne)}catch{}window.customCards=window.customCards||[],window.customCards.push({type:"recipe-manager-card",name:"Recipe Manager",description:"Manage, browse, and plan meals with your recipe collection.",preview:!1});
