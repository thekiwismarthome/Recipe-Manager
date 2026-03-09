import e from"stream";import t from"events";import i from"buffer";import r from"util";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=globalThis,a=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let l=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new l(i,e,s)},d=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,b=globalThis,v=b.trustedTypes,_=v?v.emptyScript:"",x=b.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},k=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:k};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const a=r?.call(this);n?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...f(e),...m(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),r=n.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=r;const a=n.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){const a=this.constructor;if(!1===r&&(n=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??k)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,x?.({ReactiveElement:$}),(b.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,C=e=>e,T=A.trustedTypes,E=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+R,O=`<${I}>`,M=document,P=()=>M.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,L="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,U=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,H=/"/g,Z=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),V=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Q=new WeakMap,X=M.createTreeWalker(M,129);function G(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,r=[];let n,a=2===t?"<svg>":3===t?"<math>":"",s=B;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===B?"!--"===l[1]?s=N:void 0!==l[1]?s=j:void 0!==l[2]?(Z.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=n??B,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?U:'"'===l[3]?H:W):s===H||s===W?s=U:s===N||s===j?s=B:(s=U,n=void 0);const h=s===U&&e[t+1].startsWith("/>")?" ":"";a+=s===B?i+O:c>=0?(r.push(o),i.slice(0,c)+z+i.slice(c)+R+h):i+R+(-2===c?t:h)}return[G(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class J{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const s=e.length-1,o=this.parts,[l,c]=Y(e,t);if(this.el=J.createElement(l,i),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=X.nextNode())&&o.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(z)){const t=c[a++],i=r.getAttribute(e).split(R),s=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?ne:"?"===s[1]?ae:"@"===s[1]?se:re}),r.removeAttribute(e)}else e.startsWith(R)&&(o.push({type:6,index:n}),r.removeAttribute(e));if(Z.test(r.tagName)){const e=r.textContent.split(R),t=e.length-1;if(t>0){r.textContent=T?T.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],P()),X.nextNode(),o.push({type:2,index:++n});r.append(e[t],P())}}}else if(8===r.nodeType)if(r.data===I)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(R,e+1));)o.push({type:7,index:n}),e+=R.length-1}n++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}}function ee(e,t,i=e,r){if(t===V)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const a=D(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=ee(e,n._$AS(e,t.values),n,r)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??M).importNode(t,!0);X.currentNode=r;let n=X.nextNode(),a=0,s=0,o=i[0];for(;void 0!==o;){if(a===o.index){let t;2===o.type?t=new ie(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new oe(n,this,e)),this._$AV.push(t),o=i[++s]}a!==o?.index&&(n=X.nextNode(),a++)}return X.currentNode=M,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),D(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>F(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new te(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new J(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new ie(this.O(P()),this.O(P()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=C(e).nextSibling;C(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(void 0===n)e=ee(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{const r=e;let s,o;for(e=n[0],s=0;s<n.length-1;s++)o=ee(this,r[i+s],t,s),o===V&&(o=this._$AH[s]),a||=!D(o)||o!==this._$AH[s],o===K?e=K:e!==K&&(e+=(o??"")+n[s+1]),this._$AH[s]=o}a&&!r&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class ae extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class se extends re{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??K)===V)return;const i=this._$AH,r=e===K&&i!==K||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==K&&(i===K||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const le=A.litHtmlPolyfillSupport;le?.(J,ie),(A.litHtmlVersions??=[]).push("3.3.2");const ce=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=i?.renderBefore??null;r._$litPart$=n=new ie(t.insertBefore(P(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};de._$litElement$=!0,de.finalized=!0,ce.litElementHydrateSupport?.({LitElement:de});const he=ce.litElementPolyfillSupport;he?.({LitElement:de}),(ce.litElementVersions??=[]).push("4.2.2");const pe=/^[½¼¾⅓⅔⅛⅜⅝⅞\d][\d.,/½¼¾⅓⅔⅛⅜⅝⅞\s]*\s*(?:tsp|tbsp|tablespoons?|teaspoons?|cups?|oz|lbs?|g|kg|ml|cl|dl|L|(?:milli|centi|deci)?lit(?:re|er)s?|kilo(?:gramme|gram)s?|(?:gramme|gram)s?|pints?|quarts?|gallons?|fl\.?\s*oz|cans?|bunches?|heads?|cloves?|slices?|pieces?|sheets?|pinch(?:es)?|dash(?:es)?|handfuls?|sprigs?|stalks?)\s*/i;function ue(e){if(e.amount||e.unit)return e.name;return e.name.replace(pe,"").trim()||e.name}function fe(e,t,i){return`[RM] ${e} — ${function(e,t){return e.amount||e.unit?[e.amount,e.unit,t].filter(Boolean).join(" "):e.name}(t,i)}`}function me(e){if(!e)return 1;const t={"½":.5,"¼":.25,"¾":.75,"⅓":1/3,"⅔":2/3,"⅛":.125,"⅜":.375,"⅝":.625,"⅞":.875};let i=String(e).trim();for(const[e,r]of Object.entries(t))i=i.replace(e,String(r));const r=i.match(/^(\d+)\s+(\d+)\/(\d+)$/);if(r)return parseInt(r[1])+parseInt(r[2])/parseInt(r[3]);const n=i.match(/^(\d+)\/(\d+)$/);return n?parseInt(n[1])/parseInt(n[2]):parseFloat(i)||1}class ge{constructor(e){this.hass=e}subscribe(e){return this.hass.connection.subscribeMessage(e,{type:"recipe_manager/subscribe"})}async getAllRecipes(){return this.hass.callWS({type:"recipe_manager/recipes/get_all"})}async getRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/get",recipe_id:e})}async scrapeRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/scrape",url:e})}async addRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/add",...e})}async updateRecipe(e,t){return this.hass.callWS({type:"recipe_manager/recipes/update",recipe_id:e,...t})}async deleteRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/delete",recipe_id:e})}async toggleFavourite(e){return this.hass.callWS({type:"recipe_manager/recipes/toggle_favourite",recipe_id:e})}async downloadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/download_image",recipe_id:e,image_url:t})}async getTags(){return this.hass.callWS({type:"recipe_manager/tags/get_all"})}async getMealPlan(e){const t={type:"recipe_manager/meal_plan/get"};return e&&(t.week_start=e),this.hass.callWS(t)}async addToMealPlan(e,t,i,r=1,n=null){const a={type:"recipe_manager/meal_plan/add",recipe_id:e,date:t,meal_type:i,servings:r};return n&&(a.notes=n),this.hass.callWS(a)}async removeFromMealPlan(e){return this.hass.callWS({type:"recipe_manager/meal_plan/remove",entry_id:e})}async clearMealPlanWeek(e){return this.hass.callWS({type:"recipe_manager/meal_plan/clear",week_start:e})}async addIngredientsToShoppingList(e,t,i=null){let r=[];try{const t=await this.getSlmItems(e);r=(t?.items??[]).filter(e=>!e.checked)}catch{}const n=[];for(const a of t)try{const t=ue(a),s=i?fe(i,a,t):null,o=r.find(e=>e.name.toLowerCase().trim()===t.toLowerCase().trim());if(o&&s){const e=o.note?`${o.note}\n${s}`:s;await this.hass.callWS({type:"shopping_list_manager/items/update",item_id:o.id,note:e}),n.push({success:!0,name:t,merged:!0})}else{const i={type:"shopping_list_manager/items/add",list_id:e,name:t,quantity:me(a.amount),unit:a.unit||null};s&&(i.note=s),await this.hass.callWS(i),n.push({success:!0,name:t})}}catch(e){n.push({success:!1,name:a.name,error:e.message})}return n}async updateSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/update",item_id:e,...t})}async getShoppingLists(){return this.hass.callWS({type:"shopping_list_manager/lists/get_all"})}async getSlmItems(e){return this.hass.callWS({type:"shopping_list_manager/items/get",list_id:e})}async checkSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/check",item_id:e,checked:t})}async clearSlmChecked(e){return this.hass.callWS({type:"shopping_list_manager/items/clear_checked",list_id:e})}async deleteSlmItem(e){return this.hass.callWS({type:"shopping_list_manager/items/delete",item_id:e})}async addSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/add",list_id:e,...t})}async getSlmCategories(){return this.hass.callWS({type:"shopping_list_manager/categories/get_all"})}async getSlmProductsByIds(e){return this.hass.callWS({type:"shopping_list_manager/products/get_by_ids",product_ids:e})}async getSlmProductSuggestions(e=20){return this.hass.callWS({type:"shopping_list_manager/products/suggestions",limit:e})}async importRecipeKeeper(e){return this.hass.callWS({type:"recipe_manager/import/recipe_keeper",html_content:e})}async uploadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/upload_image",recipe_id:e,image_data:t})}}class be extends de{static properties={recipes:{type:Array},allRecipes:{type:Array},tags:{type:Array},searchQuery:{type:String},activeTag:{type:String},columns:{type:Number},showFavourites:{type:Boolean},hideSidebar:{type:Boolean},scrollPos:{type:Number},recentRecipes:{type:Array},recentCount:{type:Number},_filterMode:{type:String},_starFilter:{type:Number},_sortByRating:{type:Boolean},_showRatingMenu:{type:Boolean}};constructor(){super(),this.recipes=[],this.allRecipes=[],this.tags=[],this.searchQuery="",this.activeTag=null,this.columns=3,this.showFavourites=!0,this.hideSidebar=!1,this.scrollPos=0,this.recentRecipes=[],this.recentCount=12,this._filterMode="all",this._starFilter=0,this._sortByRating=!1,this._showRatingMenu=!1,this._lastScrollPos=0,this._hasRestoredScroll=!1}updated(e){e.has("scrollPos")&&(this._hasRestoredScroll=!1),null==this.scrollPos||this._hasRestoredScroll||(this._hasRestoredScroll=!0,this.updateComplete.then(()=>{requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(".grid-scroll");e&&(e.scrollTop=this.scrollPos)})}))}_handleSearchInput(e){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}_handleClearSearch(){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:""},bubbles:!0,composed:!0}))}_handleTagClick(e){this.dispatchEvent(new CustomEvent("rm-tag-filter",{detail:{tag:e},bubbles:!0,composed:!0}))}_handleOpenRecipe(e){this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:e},bubbles:!0,composed:!0}))}_handleToggleFavourite(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:t.id},bubbles:!0,composed:!0}))}_recipeMatchesTag(e,t){return!t||(e.tags?.includes(t)||e.courses?.includes(t)||e.categories?.includes(t)||e.collections?.includes(t))}_recipeMatchesSearch(e,t){const i=(t||"").trim().toLowerCase();return!i||(e.name?.toLowerCase().includes(i)||e.description?.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i)))}_formatTime(e){if(!e)return null;if(e<60)return`${e}m`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_getFilteredList(){let e=this.recipes;switch(this.hideSidebar&&this.activeTag&&("courses"===this._filterMode||"categories"===this._filterMode||"collections"===this._filterMode)&&(e=this.allRecipes.filter(e=>this._recipeMatchesTag(e,this.activeTag)&&this._recipeMatchesSearch(e,this.searchQuery))),this._filterMode){case"favourites":e=this.allRecipes.filter(e=>e.is_favourite).filter(t=>e.find(e=>e.id===t.id));break;case"recent":e=this.recentRecipes.slice(0,this.recentCount).filter(t=>e.find(e=>e.id===t.id))}return this._starFilter>0&&(e=e.filter(e=>(e.rating||0)>=this._starFilter)),this._sortByRating&&(e=[...e].sort((e,t)=>(t.rating||0)-(e.rating||0))),e}get _allCourses(){const e=new Set;return this.allRecipes.forEach(t=>(t.courses||[]).forEach(t=>e.add(t))),[...e].sort()}get _coursecounts(){const e={};return this.allRecipes.forEach(t=>(t.courses||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _allCategories(){const e=new Set;return this.allRecipes.forEach(t=>(t.categories||[]).forEach(t=>e.add(t))),[...e].sort()}get _categorycounts(){const e={};return this.allRecipes.forEach(t=>(t.categories||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _allCollections(){const e=new Set;return this.allRecipes.forEach(t=>(t.collections||[]).forEach(t=>e.add(t))),[...e].sort()}get _collectioncounts(){const e={};return this.allRecipes.forEach(t=>(t.collections||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}_renderStars(e){const t=e||0;return q`
      <div class="card-stars">
        ${[1,2,3,4,5].map(e=>q`<span class="card-star ${e<=t?"filled":""}">${e<=t?"★":"☆"}</span>`)}
      </div>
    `}_renderRecipeCard(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return q`
      <div class="recipe-card" @click=${()=>this._handleOpenRecipe(e)}>
        <div class="recipe-thumb">
          ${e.image_url?q`
            <img src="${e.image_url}" alt="${e.name}" loading="lazy" />
          `:q`
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
            ${t?q`
              <span class="meta-chip">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._formatTime(t)}
              </span>
            `:""}
            ${e.servings?q`
              <span class="meta-chip">
                <ha-icon icon="mdi:account-group-outline"></ha-icon>
                ${e.servings}
              </span>
            `:""}
            ${e.tags?.length?q`
              <span class="meta-chip tag-chip">${e.tags[0]}</span>
            `:""}
          </div>
        </div>
      </div>
    `}_renderRatingMenu(){return q`
      <div class="rating-menu" @click=${e=>e.stopPropagation()}>
        <div class="rating-menu-section">Filter by rating</div>
        ${[0,1,2,3,4,5].map(e=>q`
          <button class="rating-menu-item ${this._starFilter===e?"active":""}"
            @click=${()=>{this._starFilter=e,this._showRatingMenu=!1}}>
            ${0===e?"All ratings":q`${"★".repeat(e)}${"☆".repeat(5-e)} ${e}+`}
          </button>
        `)}
        <div class="rating-menu-section" style="margin-top:6px">Sort</div>
        <button class="rating-menu-item ${this._sortByRating?"active":""}"
          @click=${()=>{this._sortByRating=!this._sortByRating,this._showRatingMenu=!1}}>
          ${this._sortByRating?"✓ ":""}Sort by rating
        </button>
      </div>
    `}render(){const e=this._getFilteredList(),t="all"===this._filterMode&&this.showFavourites&&!this.activeTag&&!this.searchQuery&&!this._starFilter&&!this._sortByRating,i=t?e.filter(e=>e.is_favourite):[],r=t&&i.length?e.filter(e=>!e.is_favourite):e,n=`grid-template-columns: var(--rm-grid-columns, repeat(${this.columns}, minmax(0, 1fr)));`,a=this._starFilter>0||this._sortByRating;return q`
      <div class="grid-container" @click=${()=>{this._showRatingMenu&&(this._showRatingMenu=!1)}}>
        <!-- Search bar — only shown on narrow (sidebar-less) view -->
        ${this.hideSidebar?"":q`
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
              ${this.searchQuery?q`
                <button class="clear-btn" @click=${this._handleClearSearch}>
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              `:""}
            </div>
          </div>
        `}

        <!-- Filter tabs + rating filter button (wide view) -->
        ${this.hideSidebar?q`
          <div class="filter-tabs-row">
            <div class="filter-tabs">
              ${[["all","mdi:view-grid","All"],["courses","mdi:silverware-fork-knife","Courses"],["categories","mdi:tag-multiple-outline","Categories"],["collections","mdi:folder-multiple-outline","Collections"],["favourites","mdi:heart-outline","Favourites"],["recent","mdi:history","Recent"]].map(([e,t,i])=>q`
                <button
                  class="filter-tab ${this._filterMode===e?"active":""}"
                  @click=${()=>{this._filterMode=e}}
                >
                  <ha-icon icon="${t}"></ha-icon>
                  <span>${i}</span>
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
                ${a?q`<span class="rating-filter-badge"></span>`:""}
              </button>
              ${this._showRatingMenu?this._renderRatingMenu():""}
            </div>
          </div>
        `:""}

        <!-- Sub-filter chips for Courses / Categories -->
        ${this.hideSidebar&&"courses"===this._filterMode&&this._allCourses.length?q`
          <div class="sub-filter-row">
            ${this._allCourses.map(e=>q`
              <button
                class="sub-chip ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}<span class="sub-chip-count">${this._coursecounts[e]||0}</span></button>
            `)}
          </div>
        `:""}
        ${this.hideSidebar&&"categories"===this._filterMode&&this._allCategories.length?q`
          <div class="sub-filter-row">
            ${this._allCategories.map(e=>q`
              <button
                class="sub-chip ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}<span class="sub-chip-count">${this._categorycounts[e]||0}</span></button>
            `)}
          </div>
        `:""}
        ${this.hideSidebar&&"collections"===this._filterMode&&this._allCollections.length?q`
          <div class="sub-filter-row">
            ${this._allCollections.map(e=>q`
              <button
                class="sub-chip ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}<span class="sub-chip-count">${this._collectioncounts[e]||0}</span></button>
            `)}
          </div>
        `:""}

        <!-- Tag chips (narrow view only) -->
        ${!this.hideSidebar&&this.tags.length?q`
          <div class="tags-row">
            ${this.tags.map(e=>q`
              <button
                class="tag-btn ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}</button>
            `)}
          </div>
        `:""}

        <!-- Active filter hint -->
        ${a?q`
          <div class="active-filter-bar">
            ${this._starFilter>0?q`<span>⭐ ${this._starFilter}+ stars</span>`:""}
            ${this._sortByRating?q`<span>Sorted by rating</span>`:""}
            <button class="clear-filter-btn" @click=${()=>{this._starFilter=0,this._sortByRating=!1}}>
              <ha-icon icon="mdi:close"></ha-icon> Clear
            </button>
          </div>
        `:""}

        <!-- Recipe content -->
        <div class="grid-scroll" @scroll=${e=>{this._lastScrollPos=e.target.scrollTop}}>
          ${0===e.length?q`
            <div class="empty-state">
              <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
              <p>${this.searchQuery||this.activeTag?"No matching recipes":this._starFilter>0?`No recipes with ${this._starFilter}+ stars`:"favourites"===this._filterMode?"No favourites yet — heart a recipe!":"recent"===this._filterMode?"No recently viewed recipes yet.":"No recipes yet — add one!"}</p>
            </div>
          `:q`
            ${t&&i.length?q`
              <div class="section-label">Favourites</div>
              <div class="recipe-grid" style=${n}>
                ${i.map(e=>this._renderRecipeCard(e))}
              </div>
              ${r.length?q`<div class="section-label">All Recipes</div>`:""}
            `:""}

            <div class="recipe-grid" style=${n}>
              ${r.map(e=>this._renderRecipeCard(e))}
            </div>
          `}
        </div>
      </div>
    `}static styles=c`
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
  `}try{customElements.define("rm-recipe-grid",be)}catch{}const ve=[{key:"calories",label:"Calories",unit:"kcal",bold:!0},{key:"fat",label:"Total Fat",unit:"g"},{key:"saturated_fat",label:"Saturated Fat",unit:"g",indent:!0},{key:"cholesterol",label:"Cholesterol",unit:"mg"},{key:"sodium",label:"Sodium",unit:"mg"},{key:"carbohydrates",label:"Total Carbohydrate",unit:"g"},{key:"fiber",label:"Dietary Fiber",unit:"g",indent:!0},{key:"sugar",label:"Total Sugars",unit:"g",indent:!0},{key:"protein",label:"Protein",unit:"g"}],_e=/(\d+\s*(?:hours?|hrs?)\s*(?:and\s*)?\d*\s*(?:minutes?|mins?)?|\d+\s*(?:minutes?|mins?|seconds?|secs?|hours?|hrs?))/gi;function xe(e){const t=e.toLowerCase();let i=0;const r=t.match(/(\d+)\s*h(?:ours?|rs?)?/);r&&(i+=3600*parseInt(r[1]));const n=t.match(/(\d+)\s*m(?:in(?:utes?)?)?(?!\s*l)/);n&&(i+=60*parseInt(n[1]));const a=t.match(/(\d+)\s*s(?:ec(?:onds?)?)?/);if(a&&(i+=parseInt(a[1])),!i){const e=t.match(/^(\d+)$/);e&&(i=60*parseInt(e[1]))}return i||0}const ye={oz:{factor:28.3495,to:"g",toFull:"g"},lb:{factor:453.592,to:"g",toFull:"g",thresholdKg:500},cup:{factor:250,to:"ml",toFull:"ml"},cups:{factor:250,to:"ml",toFull:"ml"},"fl oz":{factor:29.5735,to:"ml",toFull:"ml"},pt:{factor:473.176,to:"ml",toFull:"ml"},qt:{factor:946.353,to:"ml",toFull:"ml"}};class we extends de{static properties={recipe:{type:Object},api:{type:Object},shoppingLists:{type:Array},slmAvailable:{type:Boolean},settings:{type:Object},_editing:{type:Boolean},_editData:{type:Object},_servingMult:{type:Number},_activeTab:{type:String},_showShoppingPicker:{type:Boolean},_selectedListId:{type:String},_checkedIngredients:{type:Object},_shoppingAdding:{type:Boolean},_shoppingResult:{type:String},_confirmDelete:{type:Boolean},_downloading:{type:Boolean},_photoUrlInput:{type:String},_addingPhotoUrl:{type:Boolean},_metricMode:{type:Boolean},_wakeActive:{type:Boolean},_completedSteps:{type:Object}};constructor(){super(),this.recipe=null,this.api=null,this.shoppingLists=[],this.slmAvailable=!1,this.settings={},this._editing=!1,this._editData={},this._servingMult=1,this._activeTab="ingredients",this._showShoppingPicker=!1,this._selectedListId="",this._checkedIngredients=null,this._shoppingAdding=!1,this._shoppingResult=null,this._confirmDelete=!1,this._downloading=!1,this._photoUrlInput="",this._addingPhotoUrl=!1,this._metricMode=!1,this._wakeActive=!1,this._completedSteps=new Set,this._wakeLockSentinel=null,this._wakeLockTimeout=null}disconnectedCallback(){super.disconnectedCallback(),this._releaseWakeLock()}async _requestWakeLock(){if("wakeLock"in navigator)try{this._wakeLockSentinel=await navigator.wakeLock.request("screen"),this._wakeActive=!0;const e=this.settings?.wakeLockDuration??60;this._wakeLockTimeout=setTimeout(()=>this._releaseWakeLock(),6e4*e)}catch(e){console.warn("Wake Lock failed:",e)}}async _releaseWakeLock(){if(this._wakeLockSentinel){try{await this._wakeLockSentinel.release()}catch{}this._wakeLockSentinel=null}this._wakeActive=!1,this._wakeLockTimeout&&(clearTimeout(this._wakeLockTimeout),this._wakeLockTimeout=null)}updated(e){e.has("recipe")&&this.recipe&&(this._servingMult=1,this._editing=!1,this._confirmDelete=!1,this._shoppingResult=null,this._showShoppingPicker=!1,this._checkedIngredients=null,this._photoUrlInput="",this._metricMode=!1,this._completedSteps=new Set),e.has("shoppingLists")&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"")}_formatTime(e){if(!e)return null;if(e<60)return`${e} min`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_scaleAmount(e){if(!e||isNaN(parseFloat(e)))return e;const t=parseFloat(e)*this._servingMult;return Number.isInteger(t)?String(t):t.toFixed(1).replace(/\.0$/,"")}_startEdit(){const e=this.recipe.nutrition||{};this._editData={name:this.recipe.name||"",description:this.recipe.description||"",source_url:this.recipe.source_url||"",servings:this.recipe.servings||"",prep_time:this.recipe.prep_time||"",cook_time:this.recipe.cook_time||"",tags:(this.recipe.tags||[]).join(", "),courses:(this.recipe.courses||[]).join(", "),categories:(this.recipe.categories||[]).join(", "),collections:(this.recipe.collections||[]).join(", "),notes:this.recipe.notes||"",rating:this.recipe.rating||0,cal:e.calories||"",fat:e.fat||"",satf:e.saturated_fat||"",chol:e.cholesterol||"",sod:e.sodium||"",carb:e.carbohydrates||"",fib:e.fiber||"",sug:e.sugar||"",prot:e.protein||""},this._editing=!0}_cancelEdit(){this._editing=!1,this._editData={}}_handleEditField(e,t){this._editData={...this._editData,[e]:t}}async _saveEdit(){const e=this._editData,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={},r={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"};let n=!1;for(const[t,a]of Object.entries(r))""!==e[t]&&null!=e[t]&&(i[a]=e[t],n=!0);const a={name:e.name,description:e.description,source_url:e.source_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),notes:e.notes,rating:e.rating||null,nutrition:n?i:null};this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:a},bubbles:!0,composed:!0})),this._editing=!1}_handleToggleFav(){this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleDownloadImage(){if(this.recipe.image_url){this._downloading=!0;try{const e=await this.api.downloadRecipeImage(this.recipe.id,this.recipe.image_url);e?.local_url&&this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e.local_url}},bubbles:!0,composed:!0}))}catch(e){console.warn("Image download failed:",e)}finally{this._downloading=!1}}}_handleDeleteRecipe(){if(!this._confirmDelete)return this._confirmDelete=!0,void setTimeout(()=>{this._confirmDelete=!1},3e3);this.dispatchEvent(new CustomEvent("rm-delete-recipe",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}_openShoppingPicker(){this._checkedIngredients=new Set,this._showShoppingPicker=!0}_toggleIngredient(e){const t=new Set(this._checkedIngredients);t.has(e)?t.delete(e):t.add(e),this._checkedIngredients=t}_selectAllIngredients(){const e=this.recipe?.ingredients?.length??0;this._checkedIngredients=new Set([...Array(e).keys()])}_clearAllIngredients(){this._checkedIngredients=new Set}async _handleAddToShopping(){const e=this._checkedIngredients;if(!e?.size)return;const t=(this.recipe.ingredients||[]).filter((t,i)=>e.has(i)).map(e=>({...e,amount:this._scaleAmount(e.amount)}));this._shoppingAdding=!0,this._shoppingResult=null,this.dispatchEvent(new CustomEvent("rm-add-to-shopping",{detail:{ingredients:t,listId:this._selectedListId||null,recipeName:this.recipe.name},bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,600)),this._shoppingAdding=!1,this._shoppingResult="success",this._showShoppingPicker=!1,setTimeout(()=>{this._shoppingResult=null},2500)}_fireTimer(e,t){this.dispatchEvent(new CustomEvent("rm-start-timer",{detail:{seconds:e,label:t},bubbles:!0,composed:!0}))}async _handleAddPhotoUrl(){const e=this._photoUrlInput.trim();if(e){this._addingPhotoUrl=!0;try{const t=this.recipe.photos||[],i={photos:[...t,e]};this.recipe.image_url||(i.image_url=e),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0})),this._photoUrlInput=""}finally{this._addingPhotoUrl=!1}}}_handleCameraCapture(e){const t=e.target.files?.[0];if(!t)return;const i=new FileReader;i.onload=async e=>{const t=e.target.result.split(",")[1];try{const e=await this.api.uploadRecipeImage(this.recipe.id,t);if(e?.image_url||e?.local_url){const t=e.image_url||e.local_url,i={photos:[...this.recipe.photos||[],t]};this.recipe.image_url||(i.image_url=t),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0}))}}catch(e){console.warn("Camera upload failed:",e)}},i.readAsDataURL(t)}_setMainPhoto(e){this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e}},bubbles:!0,composed:!0}))}_removePhoto(e){const t=(this.recipe.photos||[]).filter(t=>t!==e),i={photos:t};this.recipe.image_url===e&&(i.image_url=t[0]||null),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0}))}_renderChipGroup(e,t,i){return t?.length?q`
      <div class="chip-group">
        <span class="chip-group-label">${e}:</span>
        ${t.map(e=>q`<span class="chip ${i}">${e}</span>`)}
      </div>
    `:""}render(){if(!this.recipe)return q``;const e=this.recipe,t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return q`
      <div class="detail-container">
        <!-- Hero image -->
        <div class="hero ${e.image_url?"":"no-image"}">
          ${e.image_url?q`
            <img src="${e.image_url}" alt="${e.name}" />
            <div class="hero-overlay"></div>
          `:q`
            <div class="hero-placeholder">
              <ha-icon icon="mdi:food"></ha-icon>
            </div>
          `}
          <div class="hero-actions">
            <button class="hero-btn ${e.is_favourite?"fav-active":""}" @click=${this._handleToggleFav}
              title="${e.is_favourite?"Remove from favourites":"Add to favourites"}">
              <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
            </button>
            ${e.source_url?q`
              <a class="hero-btn" href="${e.source_url}" target="_blank" rel="noopener" title="Open source">
                <ha-icon icon="mdi:open-in-new"></ha-icon>
              </a>
            `:""}
            <button class="hero-btn" @click=${this._startEdit} title="Edit">
              <ha-icon icon="mdi:pencil-outline"></ha-icon>
            </button>
            <button class="hero-btn delete-btn ${this._confirmDelete?"confirm":""}" @click=${this._handleDeleteRecipe}
              title="${this._confirmDelete?"Confirm delete":"Delete recipe"}">
              <ha-icon icon="${this._confirmDelete?"mdi:check":"mdi:trash-can-outline"}"></ha-icon>
            </button>
          </div>
        </div>

        <div class="detail-scroll">
          <!-- Recipe meta (description, times, tags — name is shown in parent header) -->
          <div class="detail-head">
            ${e.description?q`<p class="detail-desc">${e.description}</p>`:""}

            <div class="meta-row">
              ${e.prep_time?q`
                <div class="meta-item">
                  <span class="meta-label">Prep</span>
                  <span class="meta-val">${this._formatTime(e.prep_time)}</span>
                </div>
              `:""}
              ${e.cook_time?q`
                <div class="meta-item">
                  <span class="meta-label">Cook</span>
                  <span class="meta-val">${this._formatTime(e.cook_time)}</span>
                </div>
              `:""}
              ${t?q`
                <div class="meta-item">
                  <span class="meta-label">Total</span>
                  <span class="meta-val">${this._formatTime(t)}</span>
                </div>
              `:""}
              ${e.servings?q`
                <div class="meta-item">
                  <span class="meta-label">Serves</span>
                  <span class="meta-val">${e.servings_text||e.servings}</span>
                </div>
              `:""}
            </div>

            ${e.tags?.length?q`
              <div class="tags-row">
                ${e.tags.map(e=>q`<span class="tag-chip">${e}</span>`)}
              </div>
            `:""}

            ${this._renderChipGroup("Courses",e.courses,"chip-course")}
            ${this._renderChipGroup("Categories",e.categories,"chip-category")}
            ${this._renderChipGroup("Collections",e.collections,"chip-collection")}
          </div>

          <!-- Serving scaler -->
          ${e.servings?q`
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
          `:""}

          <!-- Tabs -->
          <div class="tabs-row">
            ${[["ingredients","Ingredients"],["directions","Directions"],["notes","Notes"],["nutrition","Nutrition"],["photos","Photos"]].map(([e,t])=>q`
              <button
                class="tab-btn ${this._activeTab===e?"active":""}"
                @click=${()=>{this._activeTab=e}}
              >${t}</button>
            `)}
          </div>

          <!-- Wake lock button (shown when setting enabled) -->
          ${this.settings?.keepScreenOn?q`
            <div class="wakelock-row">
              <button class="wakelock-btn ${this._wakeActive?"active":""}"
                @click=${()=>this._wakeActive?this._releaseWakeLock():this._requestWakeLock()}
                title="${this._wakeActive?"Release screen lock":"Keep screen on"}">
                <ha-icon icon="${this._wakeActive?"mdi:eye":"mdi:eye-off-outline"}"></ha-icon>
                ${this._wakeActive?"Screen on":"Keep screen on"}
              </button>
            </div>
          `:""}

          <!-- Tab content -->
          <div class="tab-content">
            ${"ingredients"===this._activeTab?this._renderIngredients(e):""}
            ${"directions"===this._activeTab?this._renderDirections(e):""}
            ${"notes"===this._activeTab?this._renderNotes(e):""}
            ${"nutrition"===this._activeTab?this._renderNutrition(e):""}
            ${"photos"===this._activeTab?this._renderPhotos(e):""}
          </div>
        </div>

        <!-- Edit panel (inline overlay) -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_getDisplayAmount(e){if(this._metricMode){const t=function(e,t){if(!e||!t)return null;const i=parseFloat(e);if(isNaN(i))return null;const r=t.toLowerCase().trim(),n=ye[r];if(!n)return null;let a=i*n.factor,s=n.to;"lb"===r&&a>=500&&(a/=1e3,s="kg"),"ml"===s&&a>=1e3&&(a/=1e3,s="L");const o=a>=10?Math.round(a):Math.round(10*a)/10;return{amount:String(o),unit:s}}(this._scaleAmount(e.amount),e.unit);if(t)return t}return{amount:this._scaleAmount(e.amount)||"",unit:e.unit||""}}_renderIngredients(e){const t=this._showShoppingPicker,i=this._checkedIngredients,r=i?.size??0,n=(e.ingredients||[]).some(e=>e.unit&&ye[e.unit.toLowerCase().trim()]);return q`
      ${this.settings?.showUnitConversion&&n?q`
        <div class="metric-toggle-row">
          <button class="metric-btn ${this._metricMode?"active":""}"
            @click=${()=>{this._metricMode=!this._metricMode}}>
            <ha-icon icon="mdi:swap-horizontal"></ha-icon>
            ${this._metricMode?"Showing metric":"Convert to metric"}
          </button>
        </div>
      `:""}

      ${e.ingredients?.length?q`
        <ul class="ingredient-list">
          ${e.ingredients.map((e,r)=>{if(e.is_heading)return q`<li class="ing-heading">${e.name}</li>`;const{amount:n,unit:a}=this._getDisplayAmount(e);return q`
              <li class="ingredient-item ${t?"selectable":""}"
                @click=${t?()=>this._toggleIngredient(r):void 0}>
                ${t?q`
                  <span class="ing-check ${i?.has(r)?"checked":""}">
                    ${i?.has(r)?q`<ha-icon icon="mdi:check"></ha-icon>`:""}
                  </span>
                `:""}
                <span class="ing-amount">${n} ${a}</span>
                <span class="ing-name">${e.name}${e.notes?q` <em class="ing-notes">(${e.notes})</em>`:""}</span>
              </li>
            `})}
        </ul>
      `:q`<p class="empty-tab">No ingredients listed.</p>`}

      <!-- Shopping section (always shown) -->
      <div class="shopping-section">
        ${"success"===this._shoppingResult?q`
          <div class="shopping-success">
            <ha-icon icon="mdi:check-circle-outline"></ha-icon>
            Added to shopping list!
          </div>
        `:t?q`
          <div class="shopping-picker-panel">
            <div class="picker-select-row">
              <button class="picker-sel-btn" @click=${this._selectAllIngredients}>Select All</button>
              <button class="picker-sel-btn" @click=${this._clearAllIngredients}>Clear All</button>
              ${this.slmAvailable&&this.shoppingLists.length?q`
                <select class="list-select" .value=${this._selectedListId}
                  @change=${e=>{this._selectedListId=e.target.value}}>
                  ${this.shoppingLists.map(e=>q`
                    <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                  `)}
                </select>
              `:this.slmAvailable?q`
                <span class="shopping-note">No lists found in Shopping List Manager</span>
              `:""}
            </div>
            <div class="picker-btns">
              <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>Cancel</button>
              <button class="action-btn primary"
                ?disabled=${this._shoppingAdding||!r}
                @click=${this._handleAddToShopping}>
                ${this._shoppingAdding?q`<ha-circular-progress active size="tiny"></ha-circular-progress>`:"Add"+(r?` (${r})`:"")}
              </button>
            </div>
          </div>
        `:q`
          <button class="action-btn primary shopping-btn" @click=${this._openShoppingPicker}>
            <ha-icon icon="mdi:cart-plus"></ha-icon>
            Add to Shopping List
          </button>
        `}
      </div>
    `}_toggleStepComplete(e){const t=new Set(this._completedSteps);t.has(e)?t.delete(e):t.add(e),this._completedSteps=t}_renderDirections(e){return e.instructions?.length?q`
      <ol class="steps-list">
        ${e.instructions.map((e,t)=>{const i=this._completedSteps.has(t);return q`
            <li class="step-item ${i?"step-done":""}">
              <span class="step-num ${i?"done":""}"
                @click=${e=>{e.stopPropagation(),this._toggleStepComplete(t)}}
                title="${i?"Mark incomplete":"Mark complete"}"
              >${i?q`<ha-icon icon="mdi:check"></ha-icon>`:t+1}</span>
              <span class="step-text">${this._renderStepWithTimers(e)}</span>
            </li>
          `})}
      </ol>
    `:q`<p class="empty-tab">No directions listed.</p>`}_renderStepWithTimers(e){const t=[];let i,r=0;for(_e.lastIndex=0;null!==(i=_e.exec(e));){i.index>r&&t.push(e.slice(r,i.index));const n=i[0],a=xe(n);a>0?t.push(q`<button class="time-chip" @click=${e=>{e.stopPropagation(),this._fireTimer(a,n)}} title="Start timer for ${n}">
          <ha-icon icon="mdi:timer-outline"></ha-icon>${n}
        </button>`):t.push(n),r=i.index+i[0].length}return r<e.length&&t.push(e.slice(r)),t}_renderNotes(e){return q`
      ${e.notes?q`<p class="notes-text">${e.notes}</p>`:q`<p class="empty-tab">No notes.</p>`}
    `}_renderNutrition(e){const t=e.nutrition||{},i=ve.some(e=>null!=t[e.key]&&""!==t[e.key]);if(!i)return q`
        <div class="empty-tab">
          <p>No nutrition info. Add it via the edit panel.</p>
        </div>
      `;const r=e.servings?`Per serving (${e.servings_text||e.servings})`:"Per serving";return q`
      <div class="nutrition-panel">
        <div class="nutr-header">Nutrition Facts</div>
        <div class="nutr-sub">${r}</div>
        <div class="nutr-divider thick"></div>
        ${ve.map(e=>{const i=t[e.key];return null==i||""===i?"":q`
            <div class="nutr-row ${e.bold?"nutr-bold":""} ${e.indent?"nutr-indent":""}">
              <span class="nutr-label">${e.label}</span>
              <span class="nutr-val">${i}${"kcal"!==e.unit?q`<em> ${e.unit}</em>`:""}</span>
            </div>
            <div class="nutr-divider"></div>
          `})}
      </div>
    `}_renderPhotos(e){const t=e.photos||[],i=e.image_url,r=i?[i,...t.filter(e=>e!==i)]:t;return q`
      <div class="photos-tab">
        ${r.length?q`
          <div class="photos-grid">
            ${r.map(e=>q`
              <div class="photo-item ${e===i?"main-photo":""}">
                <img src="${e}" alt="Recipe photo" loading="lazy" />
                ${e===i?q`<span class="photo-badge">Main</span>`:q`
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
        `:q`
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
    `}_renderEditPanel(){const e=this._editData;return q`
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
                ${[1,2,3,4,5].map(t=>q`
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
            <button class="action-btn" @click=${this._cancelEdit}>Cancel</button>
            <button class="action-btn primary" @click=${this._saveEdit}>Save</button>
          </div>
        </div>
      </div>
    `}_renderField(e,t,i){const r=this._editData[t]??"";return"textarea"===i?q`
        <div class="edit-field">
          <label>${e}</label>
          <textarea
            .value=${r}
            @input=${e=>this._handleEditField(t,e.target.value)}
            rows="3"
          ></textarea>
        </div>
      `:q`
      <div class="edit-field">
        <label>${e}</label>
        <input
          type="${i}"
          .value=${String(r)}
          @input=${e=>this._handleEditField(t,e.target.value)}
        />
      </div>
    `}static styles=c`
    :host { display: block; height: 100%; }

    .detail-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

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

    /* Nutrition */
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
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      flex-shrink: 0;
    }
  `}try{customElements.define("rm-recipe-detail",we)}catch{}var ke="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $e,Ae,Ce,Te,Ee,ze={},Re={},Ie={},Oe={exports:{}},Me={exports:{}};function Pe(){if($e)return Me.exports;return $e=1,"undefined"==typeof process||!process.version||0===process.version.indexOf("v0.")||0===process.version.indexOf("v1.")&&0!==process.version.indexOf("v1.8.")?Me.exports={nextTick:function(e,t,i,r){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var n,a,s=arguments.length;switch(s){case 0:case 1:return process.nextTick(e);case 2:return process.nextTick(function(){e.call(null,t)});case 3:return process.nextTick(function(){e.call(null,t,i)});case 4:return process.nextTick(function(){e.call(null,t,i,r)});default:for(n=new Array(s-1),a=0;a<n.length;)n[a++]=arguments[a];return process.nextTick(function(){e.apply(null,n)})}}}:Me.exports=process,Me.exports}function De(){return Ee?Te:(Ee=1,Te=e)}var Fe,Le={exports:{}};function Be(){return Fe||(Fe=1,function(e,t){var r=i,n=r.Buffer;function a(e,t){for(var i in e)t[i]=e[i]}function s(e,t,i){return n(e,t,i)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=r:(a(r,t),t.Buffer=s),a(n,s),s.from=function(e,t,i){if("number"==typeof e)throw new TypeError("Argument must not be a number");return n(e,t,i)},s.alloc=function(e,t,i){if("number"!=typeof e)throw new TypeError("Argument must be a number");var r=n(e);return void 0!==t?"string"==typeof i?r.fill(t,i):r.fill(t):r.fill(0),r},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r.SlowBuffer(e)}}(Le,Le.exports)),Le.exports}var Ne,je={};function Ue(){if(Ne)return je;function e(e){return Object.prototype.toString.call(e)}return Ne=1,je.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===e(t)},je.isBoolean=function(e){return"boolean"==typeof e},je.isNull=function(e){return null===e},je.isNullOrUndefined=function(e){return null==e},je.isNumber=function(e){return"number"==typeof e},je.isString=function(e){return"string"==typeof e},je.isSymbol=function(e){return"symbol"==typeof e},je.isUndefined=function(e){return void 0===e},je.isRegExp=function(t){return"[object RegExp]"===e(t)},je.isObject=function(e){return"object"==typeof e&&null!==e},je.isDate=function(t){return"[object Date]"===e(t)},je.isError=function(t){return"[object Error]"===e(t)||t instanceof Error},je.isFunction=function(e){return"function"==typeof e},je.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},je.isBuffer=i.Buffer.isBuffer,je}var We,He,Ze={exports:{}},qe={exports:{}};function Ve(){if(He)return Ze.exports;He=1;try{var e=require("util");if("function"!=typeof e.inherits)throw"";Ze.exports=e.inherits}catch(e){Ze.exports=(We||(We=1,"function"==typeof Object.create?qe.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:qe.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}}),qe.exports)}return Ze.exports}var Ke,Qe,Xe,Ge,Ye,Je,et,tt,it,rt={exports:{}};function nt(){return Ke||(Ke=1,function(e){var t=Be().Buffer,i=r;function n(e,t,i){e.copy(t,i)}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,i=""+t.data;t=t.next;)i+=e+t.data;return i},e.prototype.concat=function(e){if(0===this.length)return t.alloc(0);for(var i=t.allocUnsafe(e>>>0),r=this.head,a=0;r;)n(r.data,i,a),a+=r.data.length,r=r.next;return i},e}(),i&&i.inspect&&i.inspect.custom&&(e.exports.prototype[i.inspect.custom]=function(){var e=i.inspect({length:this.length});return this.constructor.name+" "+e})}(rt)),rt.exports}function at(){if(Xe)return Qe;Xe=1;var e=Pe();function t(e,t){e.emit("error",t)}return Qe={destroy:function(i,r){var n=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return a||s?(r?r(i):i&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,e.nextTick(t,this,i)):e.nextTick(t,this,i)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(i||null,function(i){!r&&i?n._writableState?n._writableState.errorEmitted||(n._writableState.errorEmitted=!0,e.nextTick(t,n,i)):e.nextTick(t,n,i):r&&r(i)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}},Qe}function st(){if(et)return Je;et=1;var e=Pe();function t(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,i){var r=e.entry;e.entry=null;for(;r;){var n=r.callback;t.pendingcb--,n(i),r=r.next}t.corkedRequestsFree.next=e}(t,e)}}Je=f;var i,n=!process.browser&&["v0.10","v0.9."].indexOf(process.version.slice(0,5))>-1?setImmediate:e.nextTick;f.WritableState=u;var a=Object.create(Ue());a.inherits=Ve();var s={deprecate:Ye?Ge:(Ye=1,Ge=r.deprecate)},o=De(),l=Be().Buffer,c=(void 0!==ke?ke:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){};var d,h=at();function p(){}function u(r,a){i=i||ot(),r=r||{};var s=a instanceof i;this.objectMode=!!r.objectMode,s&&(this.objectMode=this.objectMode||!!r.writableObjectMode);var o=r.highWaterMark,l=r.writableHighWaterMark,c=this.objectMode?16:16384;this.highWaterMark=o||0===o?o:s&&(l||0===l)?l:c,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var d=!1===r.decodeStrings;this.decodeStrings=!d,this.defaultEncoding=r.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,i){var r=t._writableState,a=r.sync,s=r.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),i)!function(t,i,r,n,a){--i.pendingcb,r?(e.nextTick(a,n),e.nextTick(x,t,i),t._writableState.errorEmitted=!0,t.emit("error",n)):(a(n),t._writableState.errorEmitted=!0,t.emit("error",n),x(t,i))}(t,r,a,i,s);else{var o=v(r);o||r.corked||r.bufferProcessing||!r.bufferedRequest||b(t,r),a?n(g,t,r,o,s):g(t,r,o,s)}}(a,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new t(this)}function f(e){if(i=i||ot(),!(d.call(f,this)||this instanceof i))return new f(e);this._writableState=new u(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),o.call(this)}function m(e,t,i,r,n,a,s){t.writelen=r,t.writecb=s,t.writing=!0,t.sync=!0,i?e._writev(n,t.onwrite):e._write(n,a,t.onwrite),t.sync=!1}function g(e,t,i,r){i||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,r(),x(e,t)}function b(e,i){i.bufferProcessing=!0;var r=i.bufferedRequest;if(e._writev&&r&&r.next){var n=i.bufferedRequestCount,a=new Array(n),s=i.corkedRequestsFree;s.entry=r;for(var o=0,l=!0;r;)a[o]=r,r.isBuf||(l=!1),r=r.next,o+=1;a.allBuffers=l,m(e,i,!0,i.length,a,"",s.finish),i.pendingcb++,i.lastBufferedRequest=null,s.next?(i.corkedRequestsFree=s.next,s.next=null):i.corkedRequestsFree=new t(i),i.bufferedRequestCount=0}else{for(;r;){var c=r.chunk,d=r.encoding,h=r.callback;if(m(e,i,!1,i.objectMode?1:c.length,c,d,h),r=r.next,i.bufferedRequestCount--,i.writing)break}null===r&&(i.lastBufferedRequest=null)}i.bufferedRequest=r,i.bufferProcessing=!1}function v(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function _(e,t){e._final(function(i){t.pendingcb--,i&&e.emit("error",i),t.prefinished=!0,e.emit("prefinish"),x(e,t)})}function x(t,i){var r=v(i);return r&&(!function(t,i){i.prefinished||i.finalCalled||("function"==typeof t._final?(i.pendingcb++,i.finalCalled=!0,e.nextTick(_,t,i)):(i.prefinished=!0,t.emit("prefinish")))}(t,i),0===i.pendingcb&&(i.finished=!0,t.emit("finish"))),r}return a.inherits(f,o),u.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(u.prototype,"buffer",{get:s.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(d=Function.prototype[Symbol.hasInstance],Object.defineProperty(f,Symbol.hasInstance,{value:function(e){return!!d.call(this,e)||this===f&&(e&&e._writableState instanceof u)}})):d=function(e){return e instanceof this},f.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},f.prototype.write=function(t,i,r){var n,a=this._writableState,s=!1,o=!a.objectMode&&(n=t,l.isBuffer(n)||n instanceof c);return o&&!l.isBuffer(t)&&(t=function(e){return l.from(e)}(t)),"function"==typeof i&&(r=i,i=null),o?i="buffer":i||(i=a.defaultEncoding),"function"!=typeof r&&(r=p),a.ended?function(t,i){var r=new Error("write after end");t.emit("error",r),e.nextTick(i,r)}(this,r):(o||function(t,i,r,n){var a=!0,s=!1;return null===r?s=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||i.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(t.emit("error",s),e.nextTick(n,s),a=!1),a}(this,a,t,r))&&(a.pendingcb++,s=function(e,t,i,r,n,a){if(!i){var s=function(e,t,i){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=l.from(t,i));return t}(t,r,n);r!==s&&(i=!0,n="buffer",r=s)}var o=t.objectMode?1:r.length;t.length+=o;var c=t.length<t.highWaterMark;c||(t.needDrain=!0);if(t.writing||t.corked){var d=t.lastBufferedRequest;t.lastBufferedRequest={chunk:r,encoding:n,isBuf:i,callback:a,next:null},d?d.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else m(e,t,!1,o,r,n,a);return c}(this,a,o,t,i,r)),s},f.prototype.cork=function(){this._writableState.corked++},f.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||b(this,e))},f.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(f.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),f.prototype._write=function(e,t,i){i(new Error("_write() is not implemented"))},f.prototype._writev=null,f.prototype.end=function(t,i,r){var n=this._writableState;"function"==typeof t?(r=t,t=null,i=null):"function"==typeof i&&(r=i,i=null),null!=t&&this.write(t,i),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,i,r){i.ending=!0,x(t,i),r&&(i.finished?e.nextTick(r):t.once("finish",r));i.ended=!0,t.writable=!1}(this,n,r)},Object.defineProperty(f.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),f.prototype.destroy=h.destroy,f.prototype._undestroy=h.undestroy,f.prototype._destroy=function(e,t){this.end(),t(e)},Je}function ot(){if(it)return tt;it=1;var e=Pe(),t=Object.keys||function(e){var t=[];for(var i in e)t.push(i);return t};tt=l;var i=Object.create(Ue());i.inherits=Ve();var r=xt(),n=st();i.inherits(l,r);for(var a=t(n.prototype),s=0;s<a.length;s++){var o=a[s];l.prototype[o]||(l.prototype[o]=n.prototype[o])}function l(e){if(!(this instanceof l))return new l(e);r.call(this,e),n.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",c)}function c(){this.allowHalfOpen||this._writableState.ended||e.nextTick(d,this)}function d(e){e.end()}return Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),l.prototype._destroy=function(t,i){this.push(null),this.end(),e.nextTick(i,t)},tt}var lt,ct,dt,ht,pt,ut,ft,mt,gt,bt={},vt={exports:{}};function _t(){if(ct)return bt;ct=1;var e=(lt||(lt=1,function(e,t){var r=i,n=r.Buffer;function a(e,t){for(var i in e)t[i]=e[i]}function s(e,t,i){return n(e,t,i)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=r:(a(r,t),t.Buffer=s),a(n,s),s.from=function(e,t,i){if("number"==typeof e)throw new TypeError("Argument must not be a number");return n(e,t,i)},s.alloc=function(e,t,i){if("number"!=typeof e)throw new TypeError("Argument must be a number");var r=n(e);return void 0!==t?"string"==typeof i?r.fill(t,i):r.fill(t):r.fill(0),r},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r.SlowBuffer(e)}}(vt,vt.exports)),vt.exports).Buffer,t=e.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function r(i){var r;switch(this.encoding=function(i){var r=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(i);if("string"!=typeof r&&(e.isEncoding===t||!t(i)))throw new Error("Unknown encoding: "+i);return r||i}(i),this.encoding){case"utf16le":this.text=s,this.end=o,r=4;break;case"utf8":this.fillLast=a,r=4;break;case"base64":this.text=l,this.end=c,r=3;break;default:return this.write=d,void(this.end=h)}this.lastNeed=0,this.lastTotal=0,this.lastChar=e.allocUnsafe(r)}function n(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,i=function(e,t){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==i?i:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function s(e,t){if((e.length-t)%2==0){var i=e.toString("utf16le",t);if(i){var r=i.charCodeAt(i.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],i.slice(0,-1)}return i}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function o(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var i=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,i)}return t}function l(e,t){var i=(e.length-t)%3;return 0===i?e.toString("base64",t):(this.lastNeed=3-i,this.lastTotal=3,1===i?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-i))}function c(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function d(e){return e.toString(this.encoding)}function h(e){return e&&e.length?this.write(e):""}return bt.StringDecoder=r,r.prototype.write=function(e){if(0===e.length)return"";var t,i;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";i=this.lastNeed,this.lastNeed=0}else i=0;return i<e.length?t?t+this.text(e,i):this.text(e,i):t||""},r.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},r.prototype.text=function(e,t){var i=function(e,t,i){var r=t.length-1;if(r<i)return 0;var a=n(t[r]);if(a>=0)return a>0&&(e.lastNeed=a-1),a;if(--r<i||-2===a)return 0;if(a=n(t[r]),a>=0)return a>0&&(e.lastNeed=a-2),a;if(--r<i||-2===a)return 0;if(a=n(t[r]),a>=0)return a>0&&(2===a?a=0:e.lastNeed=a-3),a;return 0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=i;var r=e.length-(i-this.lastNeed);return e.copy(this.lastChar,0,r),e.toString("utf8",t,r)},r.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length},bt}function xt(){if(ht)return dt;ht=1;var e=Pe();dt=b;var i,n=function(){if(Ce)return Ae;Ce=1;var e={}.toString;return Ae=Array.isArray||function(t){return"[object Array]"==e.call(t)}}();b.ReadableState=g,t.EventEmitter;var a=function(e,t){return e.listeners(t).length},s=De(),o=Be().Buffer,l=(void 0!==ke?ke:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){};var c=Object.create(Ue());c.inherits=Ve();var d=r,h=void 0;h=d&&d.debuglog?d.debuglog("stream"):function(){};var p,u=nt(),f=at();c.inherits(b,s);var m=["error","close","destroy","pause","resume"];function g(e,t){e=e||{};var r=t instanceof(i=i||ot());this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,a=e.readableHighWaterMark,s=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:r&&(a||0===a)?a:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new u,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(p||(p=_t().StringDecoder),this.decoder=new p(e.encoding),this.encoding=e.encoding)}function b(e){if(i=i||ot(),!(this instanceof b))return new b(e);this._readableState=new g(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),s.call(this)}function v(e,t,i,r,n){var a,s=e._readableState;null===t?(s.reading=!1,function(e,t){if(t.ended)return;if(t.decoder){var i=t.decoder.end();i&&i.length&&(t.buffer.push(i),t.length+=t.objectMode?1:i.length)}t.ended=!0,w(e)}(e,s)):(n||(a=function(e,t){var i;r=t,o.isBuffer(r)||r instanceof l||"string"==typeof t||void 0===t||e.objectMode||(i=new TypeError("Invalid non-string/buffer chunk"));var r;return i}(s,t)),a?e.emit("error",a):s.objectMode||t&&t.length>0?("string"==typeof t||s.objectMode||Object.getPrototypeOf(t)===o.prototype||(t=function(e){return o.from(e)}(t)),r?s.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):_(e,s,t,!0):s.ended?e.emit("error",new Error("stream.push() after EOF")):(s.reading=!1,s.decoder&&!i?(t=s.decoder.write(t),s.objectMode||0!==t.length?_(e,s,t,!1):S(e,s)):_(e,s,t,!1))):r||(s.reading=!1));return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(s)}function _(e,t,i,r){t.flowing&&0===t.length&&!t.sync?(e.emit("data",i),e.read(0)):(t.length+=t.objectMode?1:i.length,r?t.buffer.unshift(i):t.buffer.push(i),t.needReadable&&w(e)),S(e,t)}Object.defineProperty(b.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),b.prototype.destroy=f.destroy,b.prototype._undestroy=f.undestroy,b.prototype._destroy=function(e,t){this.push(null),t(e)},b.prototype.push=function(e,t){var i,r=this._readableState;return r.objectMode?i=!0:"string"==typeof e&&((t=t||r.defaultEncoding)!==r.encoding&&(e=o.from(e,t),t=""),i=!0),v(this,e,t,!1,i)},b.prototype.unshift=function(e){return v(this,e,null,!0,!1)},b.prototype.isPaused=function(){return!1===this._readableState.flowing},b.prototype.setEncoding=function(e){return p||(p=_t().StringDecoder),this._readableState.decoder=new p(e),this._readableState.encoding=e,this};var x=8388608;function y(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=x?e=x:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function w(t){var i=t._readableState;i.needReadable=!1,i.emittedReadable||(h("emitReadable",i.flowing),i.emittedReadable=!0,i.sync?e.nextTick(k,t):k(t))}function k(e){h("emit readable"),e.emit("readable"),T(e)}function S(t,i){i.readingMore||(i.readingMore=!0,e.nextTick($,t,i))}function $(e,t){for(var i=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(h("maybeReadMore read 0"),e.read(0),i!==t.length);)i=t.length;t.readingMore=!1}function A(e){h("readable nexttick read 0"),e.read(0)}function C(e,t){t.reading||(h("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),T(e),t.flowing&&!t.reading&&e.read(0)}function T(e){var t=e._readableState;for(h("flow",t.flowing);t.flowing&&null!==e.read(););}function E(e,t){return 0===t.length?null:(t.objectMode?i=t.buffer.shift():!e||e>=t.length?(i=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):i=function(e,t,i){var r;e<t.head.data.length?(r=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):r=e===t.head.data.length?t.shift():i?function(e,t){var i=t.head,r=1,n=i.data;e-=n.length;for(;i=i.next;){var a=i.data,s=e>a.length?a.length:e;if(s===a.length?n+=a:n+=a.slice(0,e),0===(e-=s)){s===a.length?(++r,i.next?t.head=i.next:t.head=t.tail=null):(t.head=i,i.data=a.slice(s));break}++r}return t.length-=r,n}(e,t):function(e,t){var i=o.allocUnsafe(e),r=t.head,n=1;r.data.copy(i),e-=r.data.length;for(;r=r.next;){var a=r.data,s=e>a.length?a.length:e;if(a.copy(i,i.length-e,0,s),0===(e-=s)){s===a.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(s));break}++n}return t.length-=n,i}(e,t);return r}(e,t.buffer,t.decoder),i);var i}function z(t){var i=t._readableState;if(i.length>0)throw new Error('"endReadable()" called on non-empty stream');i.endEmitted||(i.ended=!0,e.nextTick(R,i,t))}function R(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function I(e,t){for(var i=0,r=e.length;i<r;i++)if(e[i]===t)return i;return-1}return b.prototype.read=function(e){h("read",e),e=parseInt(e,10);var t=this._readableState,i=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return h("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?z(this):w(this),null;if(0===(e=y(e,t))&&t.ended)return 0===t.length&&z(this),null;var r,n=t.needReadable;return h("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&h("length less than watermark",n=!0),t.ended||t.reading?h("reading or ended",n=!1):n&&(h("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=y(i,t))),null===(r=e>0?E(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),i!==e&&t.ended&&z(this)),null!==r&&this.emit("data",r),r},b.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},b.prototype.pipe=function(t,i){var r=this,s=this._readableState;switch(s.pipesCount){case 0:s.pipes=t;break;case 1:s.pipes=[s.pipes,t];break;default:s.pipes.push(t)}s.pipesCount+=1,h("pipe count=%d opts=%j",s.pipesCount,i);var o=(!i||!1!==i.end)&&t!==process.stdout&&t!==process.stderr?c:v;function l(e,i){h("onunpipe"),e===r&&i&&!1===i.hasUnpiped&&(i.hasUnpiped=!0,h("cleanup"),t.removeListener("close",g),t.removeListener("finish",b),t.removeListener("drain",d),t.removeListener("error",m),t.removeListener("unpipe",l),r.removeListener("end",c),r.removeListener("end",v),r.removeListener("data",f),p=!0,!s.awaitDrain||t._writableState&&!t._writableState.needDrain||d())}function c(){h("onend"),t.end()}s.endEmitted?e.nextTick(o):r.once("end",o),t.on("unpipe",l);var d=function(e){return function(){var t=e._readableState;h("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&a(e,"data")&&(t.flowing=!0,T(e))}}(r);t.on("drain",d);var p=!1;var u=!1;function f(e){h("ondata"),u=!1,!1!==t.write(e)||u||((1===s.pipesCount&&s.pipes===t||s.pipesCount>1&&-1!==I(s.pipes,t))&&!p&&(h("false write response, pause",s.awaitDrain),s.awaitDrain++,u=!0),r.pause())}function m(e){h("onerror",e),v(),t.removeListener("error",m),0===a(t,"error")&&t.emit("error",e)}function g(){t.removeListener("finish",b),v()}function b(){h("onfinish"),t.removeListener("close",g),v()}function v(){h("unpipe"),r.unpipe(t)}return r.on("data",f),function(e,t,i){if("function"==typeof e.prependListener)return e.prependListener(t,i);e._events&&e._events[t]?n(e._events[t])?e._events[t].unshift(i):e._events[t]=[i,e._events[t]]:e.on(t,i)}(t,"error",m),t.once("close",g),t.once("finish",b),t.emit("pipe",r),s.flowing||(h("pipe resume"),r.resume()),t},b.prototype.unpipe=function(e){var t=this._readableState,i={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,i)),this;if(!e){var r=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<n;a++)r[a].emit("unpipe",this,{hasUnpiped:!1});return this}var s=I(t.pipes,e);return-1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,i)),this},b.prototype.on=function(t,i){var r=s.prototype.on.call(this,t,i);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&w(this):e.nextTick(A,this))}return r},b.prototype.addListener=b.prototype.on,b.prototype.resume=function(){var t=this._readableState;return t.flowing||(h("resume"),t.flowing=!0,function(t,i){i.resumeScheduled||(i.resumeScheduled=!0,e.nextTick(C,t,i))}(this,t)),this},b.prototype.pause=function(){return h("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(h("pause"),this._readableState.flowing=!1,this.emit("pause")),this},b.prototype.wrap=function(e){var t=this,i=this._readableState,r=!1;for(var n in e.on("end",function(){if(h("wrapped end"),i.decoder&&!i.ended){var e=i.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(n){(h("wrapped data"),i.decoder&&(n=i.decoder.write(n)),i.objectMode&&null==n)||(i.objectMode||n&&n.length)&&(t.push(n)||(r=!0,e.pause()))}),e)void 0===this[n]&&"function"==typeof e[n]&&(this[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n));for(var a=0;a<m.length;a++)e.on(m[a],this.emit.bind(this,m[a]));return this._read=function(t){h("wrapped _read",t),r&&(r=!1,e.resume())},this},Object.defineProperty(b.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),b._fromList=E,dt}function yt(){if(ut)return pt;ut=1,pt=r;var e=ot(),t=Object.create(Ue());function i(e,t){var i=this._transformState;i.transforming=!1;var r=i.writecb;if(!r)return this.emit("error",new Error("write callback called multiple times"));i.writechunk=null,i.writecb=null,null!=t&&this.push(t),r(e);var n=this._readableState;n.reading=!1,(n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}function r(t){if(!(this instanceof r))return new r(t);e.call(this,t),this._transformState={afterTransform:i.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",n)}function n(){var e=this;"function"==typeof this._flush?this._flush(function(t,i){a(e,t,i)}):a(this,null,null)}function a(e,t,i){if(t)return e.emit("error",t);if(null!=i&&e.push(i),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}return t.inherits=Ve(),t.inherits(r,e),r.prototype.push=function(t,i){return this._transformState.needTransform=!1,e.prototype.push.call(this,t,i)},r.prototype._transform=function(e,t,i){throw new Error("_transform() is not implemented")},r.prototype._write=function(e,t,i){var r=this._transformState;if(r.writecb=i,r.writechunk=e,r.writeencoding=t,!r.transforming){var n=this._readableState;(r.needTransform||n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}},r.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},r.prototype._destroy=function(t,i){var r=this;e.prototype._destroy.call(this,t,function(e){i(e),r.emit("close")})},pt}function wt(){return gt||(gt=1,t=Oe,i=Oe.exports,r=e,"disable"===process.env.READABLE_STREAM&&r?(t.exports=r,(i=t.exports=r.Readable).Readable=r.Readable,i.Writable=r.Writable,i.Duplex=r.Duplex,i.Transform=r.Transform,i.PassThrough=r.PassThrough,i.Stream=r):((i=t.exports=xt()).Stream=r||i,i.Readable=i,i.Writable=st(),i.Duplex=ot(),i.Transform=yt(),i.PassThrough=function(){if(mt)return ft;mt=1,ft=i;var e=yt(),t=Object.create(Ue());function i(t){if(!(this instanceof i))return new i(t);e.call(this,t)}return t.inherits=Ve(),t.inherits(i,e),i.prototype._transform=function(e,t,i){i(null,e)},ft}())),Oe.exports;var t,i,r}if(Ie.base64=!0,Ie.array=!0,Ie.string=!0,Ie.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,Ie.nodebuffer="undefined"!=typeof Buffer,Ie.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)Ie.blob=!1;else{var kt=new ArrayBuffer(0);try{Ie.blob=0===new Blob([kt],{type:"application/zip"}).size}catch(E){try{var St=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);St.append(kt),Ie.blob=0===St.getBlob("application/zip").size}catch(E){Ie.blob=!1}}}try{Ie.nodestream=!!wt().Readable}catch(E){Ie.nodestream=!1}var $t,At={};function Ct(){if($t)return At;$t=1;var e=Dt(),t=Ie,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return At.encode=function(t){for(var r,n,a,s,o,l,c,d=[],h=0,p=t.length,u=p,f="string"!==e.getTypeOf(t);h<t.length;)u=p-h,f?(r=t[h++],n=h<p?t[h++]:0,a=h<p?t[h++]:0):(r=t.charCodeAt(h++),n=h<p?t.charCodeAt(h++):0,a=h<p?t.charCodeAt(h++):0),s=r>>2,o=(3&r)<<4|n>>4,l=u>1?(15&n)<<2|a>>6:64,c=u>2?63&a:64,d.push(i.charAt(s)+i.charAt(o)+i.charAt(l)+i.charAt(c));return d.join("")},At.decode=function(e){var r,n,a,s,o,l,c=0,d=0,h="data:";if(e.substr(0,5)===h)throw new Error("Invalid base64 input, it looks like a data url.");var p,u=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===i.charAt(64)&&u--,e.charAt(e.length-2)===i.charAt(64)&&u--,u%1!=0)throw new Error("Invalid base64 input, bad content length.");for(p=t.uint8array?new Uint8Array(0|u):new Array(0|u);c<e.length;)r=i.indexOf(e.charAt(c++))<<2|(s=i.indexOf(e.charAt(c++)))>>4,n=(15&s)<<4|(o=i.indexOf(e.charAt(c++)))>>2,a=(3&o)<<6|(l=i.indexOf(e.charAt(c++))),p[d++]=r,64!==o&&(p[d++]=n),64!==l&&(p[d++]=a);return p},At}var Tt,Et,zt,Rt,It={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}};var Ot=null;Ot="undefined"!=typeof Promise?Promise:function(){if(Rt)return zt;Rt=1;var e=function(){if(Et)return Tt;Et=1;var e,t,i=ke.MutationObserver||ke.WebKitMutationObserver;if(process.browser)if(i){var r=0,n=new i(l),a=ke.document.createTextNode("");n.observe(a,{characterData:!0}),e=function(){a.data=r=++r%2}}else if(ke.setImmediate||void 0===ke.MessageChannel)e="document"in ke&&"onreadystatechange"in ke.document.createElement("script")?function(){var e=ke.document.createElement("script");e.onreadystatechange=function(){l(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},ke.document.documentElement.appendChild(e)}:function(){setTimeout(l,0)};else{var s=new ke.MessageChannel;s.port1.onmessage=l,e=function(){s.port2.postMessage(0)}}else e=function(){process.nextTick(l)};var o=[];function l(){var e,i;t=!0;for(var r=o.length;r;){for(i=o,o=[],e=-1;++e<r;)i[e]();r=o.length}t=!1}return Tt=function(i){1!==o.push(i)||t||e()}}();function t(){}var i={},r=["REJECTED"],n=["FULFILLED"],a=["PENDING"];if(!process.browser)var s=["UNHANDLED"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=a,this.queue=[],this.outcome=void 0,process.browser||(this.handled=s),e!==t&&h(this,e)}function l(e,t,i){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof i&&(this.onRejected=i,this.callRejected=this.otherCallRejected)}function c(t,r,n){e(function(){var e;try{e=r(n)}catch(e){return i.reject(t,e)}e===t?i.reject(t,new TypeError("Cannot resolve promise with itself")):i.resolve(t,e)})}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var r=!1;function n(t){r||(r=!0,i.reject(e,t))}function a(t){r||(r=!0,i.resolve(e,t))}var s=p(function(){t(a,n)});"error"===s.status&&n(s.value)}function p(e,t){var i={};try{i.value=e(t),i.status="success"}catch(e){i.status="error",i.value=e}return i}return zt=o,o.prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(i){return t.resolve(e()).then(function(){return i})},function(i){return t.resolve(e()).then(function(){throw i})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,i){if("function"!=typeof e&&this.state===n||"function"!=typeof i&&this.state===r)return this;var o=new this.constructor(t);return process.browser||this.handled===s&&(this.handled=null),this.state!==a?c(o,this.state===n?e:i,this.outcome):this.queue.push(new l(o,e,i)),o},l.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},l.prototype.otherCallFulfilled=function(e){c(this.promise,this.onFulfilled,e)},l.prototype.callRejected=function(e){i.reject(this.promise,e)},l.prototype.otherCallRejected=function(e){c(this.promise,this.onRejected,e)},i.resolve=function(e,t){var r=p(d,t);if("error"===r.status)return i.reject(e,r.value);var a=r.value;if(a)h(e,a);else{e.state=n,e.outcome=t;for(var s=-1,o=e.queue.length;++s<o;)e.queue[s].callFulfilled(t)}return e},i.reject=function(t,i){t.state=r,t.outcome=i,process.browser||t.handled===s&&e(function(){t.handled===s&&process.emit("unhandledRejection",i,t)});for(var n=-1,a=t.queue.length;++n<a;)t.queue[n].callRejected(i);return t},o.resolve=function(e){return e instanceof this?e:i.resolve(new this(t),e)},o.reject=function(e){var r=new this(t);return i.reject(r,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,a=!1;if(!n)return this.resolve([]);for(var s=new Array(n),o=0,l=-1,c=new this(t);++l<n;)d(e[l],l);return c;function d(e,t){r.resolve(e).then(function(e){s[t]=e,++o!==n||a||(a=!0,i.resolve(c,s))},function(e){a||(a=!0,i.reject(c,e))})}},o.race=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,a=!1;if(!n)return this.resolve([]);for(var s=-1,o=new this(t);++s<n;)l(e[s]);return o;function l(e){r.resolve(e).then(function(e){a||(a=!0,i.resolve(o,e))},function(e){a||(a=!0,i.reject(o,e))})}},zt}();var Mt,Pt={Promise:Ot};function Dt(){return Mt||(Mt=1,function(e){var t=Ie,i=Ct(),r=It,n=Pt;function a(e){return e}function s(e,t){for(var i=0;i<e.length;++i)t[i]=255&e.charCodeAt(i);return t}e.newBlob=function(t,i){e.checkSupport("blob");try{return new Blob([t],{type:i})}catch(e){try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(t),r.getBlob(i)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var o={stringifyByChunk:function(e,t,i){var r=[],n=0,a=e.length;if(a<=i)return String.fromCharCode.apply(null,e);for(;n<a;)"array"===t||"nodebuffer"===t?r.push(String.fromCharCode.apply(null,e.slice(n,Math.min(n+i,a)))):r.push(String.fromCharCode.apply(null,e.subarray(n,Math.min(n+i,a)))),n+=i;return r.join("")},stringifyByChar:function(e){for(var t="",i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},applyCanBeUsed:{uint8array:function(){try{return t.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return t.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function l(t){var i=65536,r=e.getTypeOf(t),n=!0;if("uint8array"===r?n=o.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=o.applyCanBeUsed.nodebuffer),n)for(;i>1;)try{return o.stringifyByChunk(t,r,i)}catch(e){i=Math.floor(i/2)}return o.stringifyByChar(t)}function c(e,t){for(var i=0;i<e.length;i++)t[i]=e[i];return t}e.applyFromCharCode=l;var d={};d.string={string:a,array:function(e){return s(e,new Array(e.length))},arraybuffer:function(e){return d.string.uint8array(e).buffer},uint8array:function(e){return s(e,new Uint8Array(e.length))},nodebuffer:function(e){return s(e,r.allocBuffer(e.length))}},d.array={string:l,array:a,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},d.arraybuffer={string:function(e){return l(new Uint8Array(e))},array:function(e){return c(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:a,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},d.uint8array={string:l,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:a,nodebuffer:function(e){return r.newBufferFrom(e)}},d.nodebuffer={string:l,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return d.nodebuffer.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:a},e.transformTo=function(t,i){if(i||(i=""),!t)return i;e.checkSupport(t);var r=e.getTypeOf(i);return d[r][t](i)},e.resolve=function(e){for(var t=e.split("/"),i=[],r=0;r<t.length;r++){var n=t[r];"."===n||""===n&&0!==r&&r!==t.length-1||(".."===n?i.pop():i.push(n))}return i.join("/")},e.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":t.nodebuffer&&r.isBuffer(e)?"nodebuffer":t.uint8array&&e instanceof Uint8Array?"uint8array":t.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},e.checkSupport=function(e){if(!t[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},e.MAX_VALUE_16BITS=65535,e.MAX_VALUE_32BITS=-1,e.pretty=function(e){var t,i,r="";for(i=0;i<(e||"").length;i++)r+="\\x"+((t=e.charCodeAt(i))<16?"0":"")+t.toString(16).toUpperCase();return r},e.delay=function(e,t,i){setImmediate(function(){e.apply(i||null,t||[])})},e.inherits=function(e,t){var i=function(){};i.prototype=t.prototype,e.prototype=new i},e.extend=function(){var e,t,i={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===i[t]&&(i[t]=arguments[e][t]);return i},e.prepareContent=function(r,a,o,l,c){var d=n.Promise.resolve(a).then(function(e){return t.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new n.Promise(function(t,i){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){i(e.target.error)},r.readAsArrayBuffer(e)}):e});return d.then(function(a){var d,h=e.getTypeOf(a);return h?("arraybuffer"===h?a=e.transformTo("uint8array",a):"string"===h&&(c?a=i.decode(a):o&&!0!==l&&(a=s(d=a,t.uint8array?new Uint8Array(d.length):new Array(d.length)))),a):n.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}}(Re)),Re}function Ft(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}!function(e){if(!e.setImmediate){var t,i,r,n,a,s=1,o={},l=!1,c=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?t=function(e){process.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},t=function(e){r.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(i=c.documentElement,t=function(e){var t=c.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):t=function(e){setTimeout(p,0,e)}:(n="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&p(+t.data.slice(n.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),t=function(t){e.postMessage(n+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var i=new Array(arguments.length-1),r=0;r<i.length;r++)i[r]=arguments[r+1];var n={callback:e,args:i};return o[s]=n,t(s),s++},d.clearImmediate=h}function h(e){delete o[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=o[e];if(t){l=!0;try{!function(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(void 0,i)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?ke:self),Ft.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var i=0;i<this._listeners[e].length;i++)this._listeners[e][i].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var e=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}};var Lt=Ft;!function(e){for(var t=Dt(),i=Ie,r=It,n=Lt,a=new Array(256),s=0;s<256;s++)a[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;a[254]=a[254]=1;function o(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}e.utf8encode=function(e){return i.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,a,s,o=e.length,l=0;for(a=0;a<o;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),l+=r<128?1:r<2048?2:r<65536?3:4;for(t=i.uint8array?new Uint8Array(l):new Array(l),s=0,a=0;s<l;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),r<128?t[s++]=r:r<2048?(t[s++]=192|r>>>6,t[s++]=128|63&r):r<65536?(t[s++]=224|r>>>12,t[s++]=128|r>>>6&63,t[s++]=128|63&r):(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63,t[s++]=128|r>>>6&63,t[s++]=128|63&r);return t}(e)},e.utf8decode=function(e){return i.nodebuffer?t.transformTo("nodebuffer",e).toString("utf-8"):function(e){var i,r,n,s,o=e.length,l=new Array(2*o);for(r=0,i=0;i<o;)if((n=e[i++])<128)l[r++]=n;else if((s=a[n])>4)l[r++]=65533,i+=s-1;else{for(n&=2===s?31:3===s?15:7;s>1&&i<o;)n=n<<6|63&e[i++],s--;s>1?l[r++]=65533:n<65536?l[r++]=n:(n-=65536,l[r++]=55296|n>>10&1023,l[r++]=56320|1023&n)}return l.length!==r&&(l.subarray?l=l.subarray(0,r):l.length=r),t.applyFromCharCode(l)}(e=t.transformTo(i.uint8array?"uint8array":"array",e))},t.inherits(o,n),o.prototype.processChunk=function(r){var n=t.transformTo(i.uint8array?"uint8array":"array",r.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var s=n;(n=new Uint8Array(s.length+this.leftOver.length)).set(this.leftOver,0),n.set(s,this.leftOver.length)}else n=this.leftOver.concat(n);this.leftOver=null}var o=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;i>=0&&128==(192&e[i]);)i--;return i<0||0===i?t:i+a[e[i]]>t?i:t}(n),l=n;o!==n.length&&(i.uint8array?(l=n.subarray(0,o),this.leftOver=n.subarray(o,n.length)):(l=n.slice(0,o),this.leftOver=n.slice(o,n.length))),this.push({data:e.utf8decode(l),meta:r.meta})},o.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:e.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},e.Utf8DecodeWorker=o,t.inherits(l,n),l.prototype.processChunk=function(t){this.push({data:e.utf8encode(t.data),meta:t.meta})},e.Utf8EncodeWorker=l}(ze);var Bt=Lt,Nt=Dt();function jt(e){Bt.call(this,"ConvertWorker to "+e),this.destType=e}Nt.inherits(jt,Bt),jt.prototype.processChunk=function(e){this.push({data:Nt.transformTo(this.destType,e.data),meta:e.meta})};var Ut,Wt,Ht=jt;var Zt=Dt(),qt=Ht,Vt=Lt,Kt=Ct(),Qt=Pt,Xt=null;if(Ie.nodestream)try{Xt=function(){if(Wt)return Ut;Wt=1;var e=wt().Readable;function t(t,i,r){e.call(this,i),this._helper=t;var n=this;t.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}return Dt().inherits(t,e),t.prototype._read=function(){this._helper.resume()},Ut=t}()}catch(E){}function Gt(e,t){return new Qt.Promise(function(i,r){var n=[],a=e._internalType,s=e._outputType,o=e._mimeType;e.on("data",function(e,i){n.push(e),t&&t(i)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,i){switch(e){case"blob":return Zt.newBlob(Zt.transformTo("arraybuffer",t),i);case"base64":return Kt.encode(t);default:return Zt.transformTo(e,t)}}(s,function(e,t){var i,r=0,n=null,a=0;for(i=0;i<t.length;i++)a+=t[i].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(n=new Uint8Array(a),i=0;i<t.length;i++)n.set(t[i],r),r+=t[i].length;return n;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(a,n),o);i(e)}catch(e){r(e)}n=[]}).resume()})}function Yt(e,t,i){var r=t;switch(t){case"blob":case"arraybuffer":r="uint8array";break;case"base64":r="string"}try{this._internalType=r,this._outputType=t,this._mimeType=i,Zt.checkSupport(r),this._worker=e.pipe(new qt(r)),e.lock()}catch(e){this._worker=new Vt("error"),this._worker.error(e)}}Yt.prototype={accumulate:function(e){return Gt(this,e)},on:function(e,t){var i=this;return"data"===e?this._worker.on(e,function(e){t.call(i,e.data,e.meta)}):this._worker.on(e,function(){Zt.delay(t,arguments,i)}),this},resume:function(){return Zt.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(Zt.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new Xt(this,{objectMode:"nodebuffer"!==this._outputType},e)}};var Jt=Yt,ei={base64:!1,binary:!1,dir:!1,createFolders:!0,date:null,compression:null,compressionOptions:null,comment:null,unixPermissions:null,dosPermissions:null},ti=Dt(),ii=Lt;function ri(e){ii.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=ti.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}ti.inherits(ri,ii),ri.prototype.cleanUp=function(){ii.prototype.cleanUp.call(this),this.data=null},ri.prototype.resume=function(){return!!ii.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,ti.delay(this._tickAndRepeat,[],this)),!0)},ri.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(ti.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},ri.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})};var ni=ri,ai=Dt();var si=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();var oi=function(e,t){return void 0!==e&&e.length?"string"!==ai.getTypeOf(e)?function(e,t,i,r){var n=si,a=r+i;e^=-1;for(var s=r;s<a;s++)e=e>>>8^n[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):function(e,t,i,r){var n=si,a=r+i;e^=-1;for(var s=r;s<a;s++)e=e>>>8^n[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):0},li=Lt,ci=oi;function di(){li.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}Dt().inherits(di,li),di.prototype.processChunk=function(e){this.streamInfo.crc32=ci(e.data,this.streamInfo.crc32||0),this.push(e)};var hi=di,pi=Dt(),ui=Lt;function fi(e){ui.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}pi.inherits(fi,ui),fi.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}ui.prototype.processChunk.call(this,e)};var mi=Pt,gi=ni,bi=hi,vi=fi;function _i(e,t,i,r,n){this.compressedSize=e,this.uncompressedSize=t,this.crc32=i,this.compression=r,this.compressedContent=n}_i.prototype={getContentWorker:function(){var e=new gi(mi.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new vi("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new gi(mi.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},_i.createWorkerFrom=function(e,t,i){return e.pipe(new bi).pipe(new vi("uncompressedSize")).pipe(t.compressWorker(i)).pipe(new vi("compressedSize")).withStreamInfo("compression",t)};var xi=_i,yi=Jt,wi=ni,ki=ze,Si=xi,$i=Lt,Ai=function(e,t,i){this.name=e,this.dir=i.dir,this.date=i.date,this.comment=i.comment,this.unixPermissions=i.unixPermissions,this.dosPermissions=i.dosPermissions,this._data=t,this._dataBinary=i.binary,this.options={compression:i.compression,compressionOptions:i.compressionOptions}};Ai.prototype={internalStream:function(e){var t=null,i="string";try{if(!e)throw new Error("No output type specified.");var r="string"===(i=e.toLowerCase())||"text"===i;"binarystring"!==i&&"text"!==i||(i="string"),t=this._decompressWorker();var n=!this._dataBinary;n&&!r&&(t=t.pipe(new ki.Utf8EncodeWorker)),!n&&r&&(t=t.pipe(new ki.Utf8DecodeWorker))}catch(e){(t=new $i("error")).error(e)}return new yi(t,i,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof Si&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var i=this._decompressWorker();return this._dataBinary||(i=i.pipe(new ki.Utf8EncodeWorker)),Si.createWorkerFrom(i,e,t)},_decompressWorker:function(){return this._data instanceof Si?this._data.getContentWorker():this._data instanceof $i?this._data:new wi(this._data)}};for(var Ci=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],Ti=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},Ei=0;Ei<Ci.length;Ei++)Ai.prototype[Ci[Ei]]=Ti;var zi=Ai,Ri={},Ii={},Oi={},Mi={};!function(e){var t="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)i(r,n)&&(e[n]=r[n])}}return e},e.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var r={arraySet:function(e,t,i,r,n){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+r),n);else for(var a=0;a<r;a++)e[n+a]=t[i+a]},flattenChunks:function(e){var t,i,r,n,a,s;for(r=0,t=0,i=e.length;t<i;t++)r+=e[t].length;for(s=new Uint8Array(r),n=0,t=0,i=e.length;t<i;t++)a=e[t],s.set(a,n),n+=a.length;return s}},n={arraySet:function(e,t,i,r,n){for(var a=0;a<r;a++)e[n+a]=t[i+a]},flattenChunks:function(e){return[].concat.apply([],e)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,r)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,n))},e.setTyped(t)}(Mi);var Pi={},Di={},Fi={},Li=Mi;function Bi(e){for(var t=e.length;--t>=0;)e[t]=0}var Ni=256,ji=286,Ui=30,Wi=15,Hi=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Zi=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],qi=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Vi=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ki=new Array(576);Bi(Ki);var Qi=new Array(60);Bi(Qi);var Xi=new Array(512);Bi(Xi);var Gi=new Array(256);Bi(Gi);var Yi=new Array(29);Bi(Yi);var Ji,er,tr,ir=new Array(Ui);function rr(e,t,i,r,n){this.static_tree=e,this.extra_bits=t,this.extra_base=i,this.elems=r,this.max_length=n,this.has_stree=e&&e.length}function nr(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function ar(e){return e<256?Xi[e]:Xi[256+(e>>>7)]}function sr(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function or(e,t,i){e.bi_valid>16-i?(e.bi_buf|=t<<e.bi_valid&65535,sr(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=i-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=i)}function lr(e,t,i){or(e,i[2*t],i[2*t+1])}function cr(e,t){var i=0;do{i|=1&e,e>>>=1,i<<=1}while(--t>0);return i>>>1}function dr(e,t,i){var r,n,a=new Array(16),s=0;for(r=1;r<=Wi;r++)a[r]=s=s+i[r-1]<<1;for(n=0;n<=t;n++){var o=e[2*n+1];0!==o&&(e[2*n]=cr(a[o]++,o))}}function hr(e){var t;for(t=0;t<ji;t++)e.dyn_ltree[2*t]=0;for(t=0;t<Ui;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function pr(e){e.bi_valid>8?sr(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ur(e,t,i,r){var n=2*t,a=2*i;return e[n]<e[a]||e[n]===e[a]&&r[t]<=r[i]}function fr(e,t,i){for(var r=e.heap[i],n=i<<1;n<=e.heap_len&&(n<e.heap_len&&ur(t,e.heap[n+1],e.heap[n],e.depth)&&n++,!ur(t,r,e.heap[n],e.depth));)e.heap[i]=e.heap[n],i=n,n<<=1;e.heap[i]=r}function mr(e,t,i){var r,n,a,s,o=0;if(0!==e.last_lit)do{r=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],n=e.pending_buf[e.l_buf+o],o++,0===r?lr(e,n,t):(lr(e,(a=Gi[n])+Ni+1,t),0!==(s=Hi[a])&&or(e,n-=Yi[a],s),lr(e,a=ar(--r),i),0!==(s=Zi[a])&&or(e,r-=ir[a],s))}while(o<e.last_lit);lr(e,256,t)}function gr(e,t){var i,r,n,a=t.dyn_tree,s=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=573,i=0;i<l;i++)0!==a[2*i]?(e.heap[++e.heap_len]=c=i,e.depth[i]=0):a[2*i+1]=0;for(;e.heap_len<2;)a[2*(n=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[n]=0,e.opt_len--,o&&(e.static_len-=s[2*n+1]);for(t.max_code=c,i=e.heap_len>>1;i>=1;i--)fr(e,a,i);n=l;do{i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],fr(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=r,a[2*n]=a[2*i]+a[2*r],e.depth[n]=(e.depth[i]>=e.depth[r]?e.depth[i]:e.depth[r])+1,a[2*i+1]=a[2*r+1]=n,e.heap[1]=n++,fr(e,a,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var i,r,n,a,s,o,l=t.dyn_tree,c=t.max_code,d=t.stat_desc.static_tree,h=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,u=t.stat_desc.extra_base,f=t.stat_desc.max_length,m=0;for(a=0;a<=Wi;a++)e.bl_count[a]=0;for(l[2*e.heap[e.heap_max]+1]=0,i=e.heap_max+1;i<573;i++)(a=l[2*l[2*(r=e.heap[i])+1]+1]+1)>f&&(a=f,m++),l[2*r+1]=a,r>c||(e.bl_count[a]++,s=0,r>=u&&(s=p[r-u]),o=l[2*r],e.opt_len+=o*(a+s),h&&(e.static_len+=o*(d[2*r+1]+s)));if(0!==m){do{for(a=f-1;0===e.bl_count[a];)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[f]--,m-=2}while(m>0);for(a=f;0!==a;a--)for(r=e.bl_count[a];0!==r;)(n=e.heap[--i])>c||(l[2*n+1]!==a&&(e.opt_len+=(a-l[2*n+1])*l[2*n],l[2*n+1]=a),r--)}}(e,t),dr(a,c,e.bl_count)}function br(e,t,i){var r,n,a=-1,s=t[1],o=0,l=7,c=4;for(0===s&&(l=138,c=3),t[2*(i+1)+1]=65535,r=0;r<=i;r++)n=s,s=t[2*(r+1)+1],++o<l&&n===s||(o<c?e.bl_tree[2*n]+=o:0!==n?(n!==a&&e.bl_tree[2*n]++,e.bl_tree[32]++):o<=10?e.bl_tree[34]++:e.bl_tree[36]++,o=0,a=n,0===s?(l=138,c=3):n===s?(l=6,c=3):(l=7,c=4))}function vr(e,t,i){var r,n,a=-1,s=t[1],o=0,l=7,c=4;for(0===s&&(l=138,c=3),r=0;r<=i;r++)if(n=s,s=t[2*(r+1)+1],!(++o<l&&n===s)){if(o<c)do{lr(e,n,e.bl_tree)}while(0!==--o);else 0!==n?(n!==a&&(lr(e,n,e.bl_tree),o--),lr(e,16,e.bl_tree),or(e,o-3,2)):o<=10?(lr(e,17,e.bl_tree),or(e,o-3,3)):(lr(e,18,e.bl_tree),or(e,o-11,7));o=0,a=n,0===s?(l=138,c=3):n===s?(l=6,c=3):(l=7,c=4)}}Bi(ir);var _r=!1;function xr(e,t,i,r){or(e,0+(r?1:0),3),function(e,t,i){pr(e),sr(e,i),sr(e,~i),Li.arraySet(e.pending_buf,e.window,t,i,e.pending),e.pending+=i}(e,t,i)}Fi._tr_init=function(e){_r||(!function(){var e,t,i,r,n,a=new Array(16);for(i=0,r=0;r<28;r++)for(Yi[r]=i,e=0;e<1<<Hi[r];e++)Gi[i++]=r;for(Gi[i-1]=r,n=0,r=0;r<16;r++)for(ir[r]=n,e=0;e<1<<Zi[r];e++)Xi[n++]=r;for(n>>=7;r<Ui;r++)for(ir[r]=n<<7,e=0;e<1<<Zi[r]-7;e++)Xi[256+n++]=r;for(t=0;t<=Wi;t++)a[t]=0;for(e=0;e<=143;)Ki[2*e+1]=8,e++,a[8]++;for(;e<=255;)Ki[2*e+1]=9,e++,a[9]++;for(;e<=279;)Ki[2*e+1]=7,e++,a[7]++;for(;e<=287;)Ki[2*e+1]=8,e++,a[8]++;for(dr(Ki,287,a),e=0;e<Ui;e++)Qi[2*e+1]=5,Qi[2*e]=cr(e,5);Ji=new rr(Ki,Hi,257,ji,Wi),er=new rr(Qi,Zi,0,Ui,Wi),tr=new rr(new Array(0),qi,0,19,7)}(),_r=!0),e.l_desc=new nr(e.dyn_ltree,Ji),e.d_desc=new nr(e.dyn_dtree,er),e.bl_desc=new nr(e.bl_tree,tr),e.bi_buf=0,e.bi_valid=0,hr(e)},Fi._tr_stored_block=xr,Fi._tr_flush_block=function(e,t,i,r){var n,a,s=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,i=4093624447;for(t=0;t<=31;t++,i>>>=1)if(1&i&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<Ni;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),gr(e,e.l_desc),gr(e,e.d_desc),s=function(e){var t;for(br(e,e.dyn_ltree,e.l_desc.max_code),br(e,e.dyn_dtree,e.d_desc.max_code),gr(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*Vi[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),n=e.opt_len+3+7>>>3,(a=e.static_len+3+7>>>3)<=n&&(n=a)):n=a=i+5,i+4<=n&&-1!==t?xr(e,t,i,r):4===e.strategy||a===n?(or(e,2+(r?1:0),3),mr(e,Ki,Qi)):(or(e,4+(r?1:0),3),function(e,t,i,r){var n;for(or(e,t-257,5),or(e,i-1,5),or(e,r-4,4),n=0;n<r;n++)or(e,e.bl_tree[2*Vi[n]+1],3);vr(e,e.dyn_ltree,t-1),vr(e,e.dyn_dtree,i-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,s+1),mr(e,e.dyn_ltree,e.dyn_dtree)),hr(e),r&&pr(e)},Fi._tr_tally=function(e,t,i){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&i,e.last_lit++,0===t?e.dyn_ltree[2*i]++:(e.matches++,t--,e.dyn_ltree[2*(Gi[i]+Ni+1)]++,e.dyn_dtree[2*ar(t)]++),e.last_lit===e.lit_bufsize-1},Fi._tr_align=function(e){or(e,2,3),lr(e,256,Ki),function(e){16===e.bi_valid?(sr(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)};var yr=function(e,t,i,r){for(var n=65535&e,a=e>>>16&65535,s=0;0!==i;){i-=s=i>2e3?2e3:i;do{a=a+(n=n+t[r++]|0)|0}while(--s);n%=65521,a%=65521}return n|a<<16};var wr=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();var kr,Sr=function(e,t,i,r){var n=wr,a=r+i;e^=-1;for(var s=r;s<a;s++)e=e>>>8^n[255&(e^t[s])];return-1^e},$r={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ar=Mi,Cr=Fi,Tr=yr,Er=Sr,zr=$r,Rr=-2,Ir=258,Or=262,Mr=103,Pr=113,Dr=666;function Fr(e,t){return e.msg=zr[t],t}function Lr(e){return(e<<1)-(e>4?9:0)}function Br(e){for(var t=e.length;--t>=0;)e[t]=0}function Nr(e){var t=e.state,i=t.pending;i>e.avail_out&&(i=e.avail_out),0!==i&&(Ar.arraySet(e.output,t.pending_buf,t.pending_out,i,e.next_out),e.next_out+=i,t.pending_out+=i,e.total_out+=i,e.avail_out-=i,t.pending-=i,0===t.pending&&(t.pending_out=0))}function jr(e,t){Cr._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Nr(e.strm)}function Ur(e,t){e.pending_buf[e.pending++]=t}function Wr(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function Hr(e,t,i,r){var n=e.avail_in;return n>r&&(n=r),0===n?0:(e.avail_in-=n,Ar.arraySet(t,e.input,e.next_in,n,i),1===e.state.wrap?e.adler=Tr(e.adler,t,n,i):2===e.state.wrap&&(e.adler=Er(e.adler,t,n,i)),e.next_in+=n,e.total_in+=n,n)}function Zr(e,t){var i,r,n=e.max_chain_length,a=e.strstart,s=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-Or?e.strstart-(e.w_size-Or):0,c=e.window,d=e.w_mask,h=e.prev,p=e.strstart+Ir,u=c[a+s-1],f=c[a+s];e.prev_length>=e.good_match&&(n>>=2),o>e.lookahead&&(o=e.lookahead);do{if(c[(i=t)+s]===f&&c[i+s-1]===u&&c[i]===c[a]&&c[++i]===c[a+1]){a+=2,i++;do{}while(c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&c[++a]===c[++i]&&a<p);if(r=Ir-(p-a),a=p-Ir,r>s){if(e.match_start=t,s=r,r>=o)break;u=c[a+s-1],f=c[a+s]}}}while((t=h[t&d])>l&&0!==--n);return s<=e.lookahead?s:e.lookahead}function qr(e){var t,i,r,n,a,s=e.w_size;do{if(n=e.window_size-e.lookahead-e.strstart,e.strstart>=s+(s-Or)){Ar.arraySet(e.window,e.window,s,s,0),e.match_start-=s,e.strstart-=s,e.block_start-=s,t=i=e.hash_size;do{r=e.head[--t],e.head[t]=r>=s?r-s:0}while(--i);t=i=s;do{r=e.prev[--t],e.prev[t]=r>=s?r-s:0}while(--i);n+=s}if(0===e.strm.avail_in)break;if(i=Hr(e.strm,e.window,e.strstart+e.lookahead,n),e.lookahead+=i,e.lookahead+e.insert>=3)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+3-1])&e.hash_mask,e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<Or&&0!==e.strm.avail_in)}function Vr(e,t){for(var i,r;;){if(e.lookahead<Or){if(qr(e),e.lookahead<Or&&0===t)return 1;if(0===e.lookahead)break}if(i=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==i&&e.strstart-i<=e.w_size-Or&&(e.match_length=Zr(e,i)),e.match_length>=3)if(r=Cr._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!==--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=Cr._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(jr(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(jr(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(jr(e,!1),0===e.strm.avail_out)?1:2}function Kr(e,t){for(var i,r,n;;){if(e.lookahead<Or){if(qr(e),e.lookahead<Or&&0===t)return 1;if(0===e.lookahead)break}if(i=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==i&&e.prev_length<e.max_lazy_match&&e.strstart-i<=e.w_size-Or&&(e.match_length=Zr(e,i),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){n=e.strstart+e.lookahead-3,r=Cr._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=n&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!==--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,r&&(jr(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((r=Cr._tr_tally(e,0,e.window[e.strstart-1]))&&jr(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=Cr._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(jr(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(jr(e,!1),0===e.strm.avail_out)?1:2}function Qr(e,t,i,r,n){this.good_length=e,this.max_lazy=t,this.nice_length=i,this.max_chain=r,this.func=n}function Xr(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Ar.Buf16(1146),this.dyn_dtree=new Ar.Buf16(122),this.bl_tree=new Ar.Buf16(78),Br(this.dyn_ltree),Br(this.dyn_dtree),Br(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Ar.Buf16(16),this.heap=new Ar.Buf16(573),Br(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Ar.Buf16(573),Br(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Gr(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:Pr,e.adler=2===t.wrap?0:1,t.last_flush=0,Cr._tr_init(t),0):Fr(e,Rr)}function Yr(e){var t=Gr(e);return 0===t&&function(e){e.window_size=2*e.w_size,Br(e.head),e.max_lazy_match=kr[e.level].max_lazy,e.good_match=kr[e.level].good_length,e.nice_match=kr[e.level].nice_length,e.max_chain_length=kr[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0}(e.state),t}function Jr(e,t,i,r,n,a){if(!e)return Rr;var s=1;if(-1===t&&(t=6),r<0?(s=0,r=-r):r>15&&(s=2,r-=16),n<1||n>9||8!==i||r<8||r>15||t<0||t>9||a<0||a>4)return Fr(e,Rr);8===r&&(r=9);var o=new Xr;return e.state=o,o.strm=e,o.wrap=s,o.gzhead=null,o.w_bits=r,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Ar.Buf8(2*o.w_size),o.head=new Ar.Buf16(o.hash_size),o.prev=new Ar.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Ar.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=a,o.method=i,Yr(e)}kr=[new Qr(0,0,0,0,function(e,t){var i=65535;for(i>e.pending_buf_size-5&&(i=e.pending_buf_size-5);;){if(e.lookahead<=1){if(qr(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+i;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,jr(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-Or&&(jr(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(jr(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(jr(e,!1),e.strm.avail_out),1)}),new Qr(4,4,8,4,Vr),new Qr(4,5,16,8,Vr),new Qr(4,6,32,32,Vr),new Qr(4,4,16,16,Kr),new Qr(8,16,32,32,Kr),new Qr(8,16,128,128,Kr),new Qr(8,32,128,256,Kr),new Qr(32,128,258,1024,Kr),new Qr(32,258,258,4096,Kr)],Di.deflateInit=function(e,t){return Jr(e,t,8,15,8,0)},Di.deflateInit2=Jr,Di.deflateReset=Yr,Di.deflateResetKeep=Gr,Di.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?Rr:(e.state.gzhead=t,0):Rr},Di.deflate=function(e,t){var i,r,n,a;if(!e||!e.state||t>5||t<0)return e?Fr(e,Rr):Rr;if(r=e.state,!e.output||!e.input&&0!==e.avail_in||r.status===Dr&&4!==t)return Fr(e,0===e.avail_out?-5:Rr);if(r.strm=e,i=r.last_flush,r.last_flush=t,42===r.status)if(2===r.wrap)e.adler=0,Ur(r,31),Ur(r,139),Ur(r,8),r.gzhead?(Ur(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Ur(r,255&r.gzhead.time),Ur(r,r.gzhead.time>>8&255),Ur(r,r.gzhead.time>>16&255),Ur(r,r.gzhead.time>>24&255),Ur(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),Ur(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Ur(r,255&r.gzhead.extra.length),Ur(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=Er(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Ur(r,0),Ur(r,0),Ur(r,0),Ur(r,0),Ur(r,0),Ur(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),Ur(r,3),r.status=Pr);else{var s=8+(r.w_bits-8<<4)<<8;s|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=Pr,Wr(r,s),0!==r.strstart&&(Wr(r,e.adler>>>16),Wr(r,65535&e.adler)),e.adler=1}if(69===r.status)if(r.gzhead.extra){for(n=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>n&&(e.adler=Er(e.adler,r.pending_buf,r.pending-n,n)),Nr(e),n=r.pending,r.pending!==r.pending_buf_size));)Ur(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>n&&(e.adler=Er(e.adler,r.pending_buf,r.pending-n,n)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){n=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>n&&(e.adler=Er(e.adler,r.pending_buf,r.pending-n,n)),Nr(e),n=r.pending,r.pending===r.pending_buf_size)){a=1;break}a=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Ur(r,a)}while(0!==a);r.gzhead.hcrc&&r.pending>n&&(e.adler=Er(e.adler,r.pending_buf,r.pending-n,n)),0===a&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){n=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>n&&(e.adler=Er(e.adler,r.pending_buf,r.pending-n,n)),Nr(e),n=r.pending,r.pending===r.pending_buf_size)){a=1;break}a=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Ur(r,a)}while(0!==a);r.gzhead.hcrc&&r.pending>n&&(e.adler=Er(e.adler,r.pending_buf,r.pending-n,n)),0===a&&(r.status=Mr)}else r.status=Mr;if(r.status===Mr&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&Nr(e),r.pending+2<=r.pending_buf_size&&(Ur(r,255&e.adler),Ur(r,e.adler>>8&255),e.adler=0,r.status=Pr)):r.status=Pr),0!==r.pending){if(Nr(e),0===e.avail_out)return r.last_flush=-1,0}else if(0===e.avail_in&&Lr(t)<=Lr(i)&&4!==t)return Fr(e,-5);if(r.status===Dr&&0!==e.avail_in)return Fr(e,-5);if(0!==e.avail_in||0!==r.lookahead||0!==t&&r.status!==Dr){var o=2===r.strategy?function(e,t){for(var i;;){if(0===e.lookahead&&(qr(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,i=Cr._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,i&&(jr(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(jr(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(jr(e,!1),0===e.strm.avail_out)?1:2}(r,t):3===r.strategy?function(e,t){for(var i,r,n,a,s=e.window;;){if(e.lookahead<=Ir){if(qr(e),e.lookahead<=Ir&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(r=s[n=e.strstart-1])===s[++n]&&r===s[++n]&&r===s[++n]){a=e.strstart+Ir;do{}while(r===s[++n]&&r===s[++n]&&r===s[++n]&&r===s[++n]&&r===s[++n]&&r===s[++n]&&r===s[++n]&&r===s[++n]&&n<a);e.match_length=Ir-(a-n),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(i=Cr._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(i=Cr._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),i&&(jr(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(jr(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(jr(e,!1),0===e.strm.avail_out)?1:2}(r,t):kr[r.level].func(r,t);if(3!==o&&4!==o||(r.status=Dr),1===o||3===o)return 0===e.avail_out&&(r.last_flush=-1),0;if(2===o&&(1===t?Cr._tr_align(r):5!==t&&(Cr._tr_stored_block(r,0,0,!1),3===t&&(Br(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),Nr(e),0===e.avail_out))return r.last_flush=-1,0}return 4!==t?0:r.wrap<=0?1:(2===r.wrap?(Ur(r,255&e.adler),Ur(r,e.adler>>8&255),Ur(r,e.adler>>16&255),Ur(r,e.adler>>24&255),Ur(r,255&e.total_in),Ur(r,e.total_in>>8&255),Ur(r,e.total_in>>16&255),Ur(r,e.total_in>>24&255)):(Wr(r,e.adler>>>16),Wr(r,65535&e.adler)),Nr(e),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},Di.deflateEnd=function(e){var t;return e&&e.state?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&t!==Mr&&t!==Pr&&t!==Dr?Fr(e,Rr):(e.state=null,t===Pr?Fr(e,-3):0):Rr},Di.deflateSetDictionary=function(e,t){var i,r,n,a,s,o,l,c,d=t.length;if(!e||!e.state)return Rr;if(2===(a=(i=e.state).wrap)||1===a&&42!==i.status||i.lookahead)return Rr;for(1===a&&(e.adler=Tr(e.adler,t,d,0)),i.wrap=0,d>=i.w_size&&(0===a&&(Br(i.head),i.strstart=0,i.block_start=0,i.insert=0),c=new Ar.Buf8(i.w_size),Ar.arraySet(c,t,d-i.w_size,i.w_size,0),t=c,d=i.w_size),s=e.avail_in,o=e.next_in,l=e.input,e.avail_in=d,e.next_in=0,e.input=t,qr(i);i.lookahead>=3;){r=i.strstart,n=i.lookahead-2;do{i.ins_h=(i.ins_h<<i.hash_shift^i.window[r+3-1])&i.hash_mask,i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++}while(--n);i.strstart=r,i.lookahead=2,qr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,e.next_in=o,e.input=l,e.avail_in=s,i.wrap=a,0},Di.deflateInfo="pako deflate (from Nodeca project)";var en={},tn=Mi,rn=!0,nn=!0;try{String.fromCharCode.apply(null,[0])}catch(e){rn=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){nn=!1}for(var an=new tn.Buf8(256),sn=0;sn<256;sn++)an[sn]=sn>=252?6:sn>=248?5:sn>=240?4:sn>=224?3:sn>=192?2:1;function on(e,t){if(t<65534&&(e.subarray&&nn||!e.subarray&&rn))return String.fromCharCode.apply(null,tn.shrinkBuf(e,t));for(var i="",r=0;r<t;r++)i+=String.fromCharCode(e[r]);return i}an[254]=an[254]=1,en.string2buf=function(e){var t,i,r,n,a,s=e.length,o=0;for(n=0;n<s;n++)55296==(64512&(i=e.charCodeAt(n)))&&n+1<s&&56320==(64512&(r=e.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(r-56320),n++),o+=i<128?1:i<2048?2:i<65536?3:4;for(t=new tn.Buf8(o),a=0,n=0;a<o;n++)55296==(64512&(i=e.charCodeAt(n)))&&n+1<s&&56320==(64512&(r=e.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(r-56320),n++),i<128?t[a++]=i:i<2048?(t[a++]=192|i>>>6,t[a++]=128|63&i):i<65536?(t[a++]=224|i>>>12,t[a++]=128|i>>>6&63,t[a++]=128|63&i):(t[a++]=240|i>>>18,t[a++]=128|i>>>12&63,t[a++]=128|i>>>6&63,t[a++]=128|63&i);return t},en.buf2binstring=function(e){return on(e,e.length)},en.binstring2buf=function(e){for(var t=new tn.Buf8(e.length),i=0,r=t.length;i<r;i++)t[i]=e.charCodeAt(i);return t},en.buf2string=function(e,t){var i,r,n,a,s=t||e.length,o=new Array(2*s);for(r=0,i=0;i<s;)if((n=e[i++])<128)o[r++]=n;else if((a=an[n])>4)o[r++]=65533,i+=a-1;else{for(n&=2===a?31:3===a?15:7;a>1&&i<s;)n=n<<6|63&e[i++],a--;a>1?o[r++]=65533:n<65536?o[r++]=n:(n-=65536,o[r++]=55296|n>>10&1023,o[r++]=56320|1023&n)}return on(o,r)},en.utf8border=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;i>=0&&128==(192&e[i]);)i--;return i<0||0===i?t:i+an[e[i]]>t?i:t};var ln=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},cn=Di,dn=Mi,hn=en,pn=$r,un=ln,fn=Object.prototype.toString;function mn(e){if(!(this instanceof mn))return new mn(e);this.options=dn.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new un,this.strm.avail_out=0;var i=cn.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==i)throw new Error(pn[i]);if(t.header&&cn.deflateSetHeader(this.strm,t.header),t.dictionary){var r;if(r="string"==typeof t.dictionary?hn.string2buf(t.dictionary):"[object ArrayBuffer]"===fn.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,0!==(i=cn.deflateSetDictionary(this.strm,r)))throw new Error(pn[i]);this._dict_set=!0}}function gn(e,t){var i=new mn(t);if(i.push(e,!0),i.err)throw i.msg||pn[i.err];return i.result}mn.prototype.push=function(e,t){var i,r,n=this.strm,a=this.options.chunkSize;if(this.ended)return!1;r=t===~~t?t:!0===t?4:0,"string"==typeof e?n.input=hn.string2buf(e):"[object ArrayBuffer]"===fn.call(e)?n.input=new Uint8Array(e):n.input=e,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new dn.Buf8(a),n.next_out=0,n.avail_out=a),1!==(i=cn.deflate(n,r))&&0!==i)return this.onEnd(i),this.ended=!0,!1;0!==n.avail_out&&(0!==n.avail_in||4!==r&&2!==r)||("string"===this.options.to?this.onData(hn.buf2binstring(dn.shrinkBuf(n.output,n.next_out))):this.onData(dn.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||0===n.avail_out)&&1!==i);return 4===r?(i=cn.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,0===i):2!==r||(this.onEnd(0),n.avail_out=0,!0)},mn.prototype.onData=function(e){this.chunks.push(e)},mn.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=dn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},Pi.Deflate=mn,Pi.deflate=gn,Pi.deflateRaw=function(e,t){return(t=t||{}).raw=!0,gn(e,t)},Pi.gzip=function(e,t){return(t=t||{}).gzip=!0,gn(e,t)};var bn={},vn={},_n=Mi,xn=15,yn=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],wn=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],kn=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Sn=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],$n=Mi,An=yr,Cn=Sr,Tn=function(e,t){var i,r,n,a,s,o,l,c,d,h,p,u,f,m,g,b,v,_,x,y,w,k,S,$,A;i=e.state,r=e.next_in,$=e.input,n=r+(e.avail_in-5),a=e.next_out,A=e.output,s=a-(t-e.avail_out),o=a+(e.avail_out-257),l=i.dmax,c=i.wsize,d=i.whave,h=i.wnext,p=i.window,u=i.hold,f=i.bits,m=i.lencode,g=i.distcode,b=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{f<15&&(u+=$[r++]<<f,f+=8,u+=$[r++]<<f,f+=8),_=m[u&b];t:for(;;){if(u>>>=x=_>>>24,f-=x,0===(x=_>>>16&255))A[a++]=65535&_;else{if(!(16&x)){if(64&x){if(32&x){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}_=m[(65535&_)+(u&(1<<x)-1)];continue t}for(y=65535&_,(x&=15)&&(f<x&&(u+=$[r++]<<f,f+=8),y+=u&(1<<x)-1,u>>>=x,f-=x),f<15&&(u+=$[r++]<<f,f+=8,u+=$[r++]<<f,f+=8),_=g[u&v];;){if(u>>>=x=_>>>24,f-=x,16&(x=_>>>16&255)){if(w=65535&_,f<(x&=15)&&(u+=$[r++]<<f,(f+=8)<x&&(u+=$[r++]<<f,f+=8)),(w+=u&(1<<x)-1)>l){e.msg="invalid distance too far back",i.mode=30;break e}if(u>>>=x,f-=x,w>(x=a-s)){if((x=w-x)>d&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if(k=0,S=p,0===h){if(k+=c-x,x<y){y-=x;do{A[a++]=p[k++]}while(--x);k=a-w,S=A}}else if(h<x){if(k+=c+h-x,(x-=h)<y){y-=x;do{A[a++]=p[k++]}while(--x);if(k=0,h<y){y-=x=h;do{A[a++]=p[k++]}while(--x);k=a-w,S=A}}}else if(k+=h-x,x<y){y-=x;do{A[a++]=p[k++]}while(--x);k=a-w,S=A}for(;y>2;)A[a++]=S[k++],A[a++]=S[k++],A[a++]=S[k++],y-=3;y&&(A[a++]=S[k++],y>1&&(A[a++]=S[k++]))}else{k=a-w;do{A[a++]=A[k++],A[a++]=A[k++],A[a++]=A[k++],y-=3}while(y>2);y&&(A[a++]=A[k++],y>1&&(A[a++]=A[k++]))}break}if(64&x){e.msg="invalid distance code",i.mode=30;break e}_=g[(65535&_)+(u&(1<<x)-1)]}}break}}while(r<n&&a<o);r-=y=f>>3,u&=(1<<(f-=y<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<n?n-r+5:5-(r-n),e.avail_out=a<o?o-a+257:257-(a-o),i.hold=u,i.bits=f},En=function(e,t,i,r,n,a,s,o){var l,c,d,h,p,u,f,m,g,b=o.bits,v=0,_=0,x=0,y=0,w=0,k=0,S=0,$=0,A=0,C=0,T=null,E=0,z=new _n.Buf16(16),R=new _n.Buf16(16),I=null,O=0;for(v=0;v<=xn;v++)z[v]=0;for(_=0;_<r;_++)z[t[i+_]]++;for(w=b,y=xn;y>=1&&0===z[y];y--);if(w>y&&(w=y),0===y)return n[a++]=20971520,n[a++]=20971520,o.bits=1,0;for(x=1;x<y&&0===z[x];x++);for(w<x&&(w=x),$=1,v=1;v<=xn;v++)if($<<=1,($-=z[v])<0)return-1;if($>0&&(0===e||1!==y))return-1;for(R[1]=0,v=1;v<xn;v++)R[v+1]=R[v]+z[v];for(_=0;_<r;_++)0!==t[i+_]&&(s[R[t[i+_]]++]=_);if(0===e?(T=I=s,u=19):1===e?(T=yn,E-=257,I=wn,O-=257,u=256):(T=kn,I=Sn,u=-1),C=0,_=0,v=x,p=a,k=w,S=0,d=-1,h=(A=1<<w)-1,1===e&&A>852||2===e&&A>592)return 1;for(;;){f=v-S,s[_]<u?(m=0,g=s[_]):s[_]>u?(m=I[O+s[_]],g=T[E+s[_]]):(m=96,g=0),l=1<<v-S,x=c=1<<k;do{n[p+(C>>S)+(c-=l)]=f<<24|m<<16|g}while(0!==c);for(l=1<<v-1;C&l;)l>>=1;if(0!==l?(C&=l-1,C+=l):C=0,_++,0===--z[v]){if(v===y)break;v=t[i+s[_]]}if(v>w&&(C&h)!==d){for(0===S&&(S=w),p+=x,$=1<<(k=v-S);k+S<y&&!(($-=z[k+S])<=0);)k++,$<<=1;if(A+=1<<k,1===e&&A>852||2===e&&A>592)return 1;n[d=C&h]=w<<24|k<<16|p-a}}return 0!==C&&(n[p+C]=v-S<<24|64<<16),o.bits=w,0},zn=-2,Rn=12,In=30;function On(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function Mn(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new $n.Buf16(320),this.work=new $n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Pn(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new $n.Buf32(852),t.distcode=t.distdyn=new $n.Buf32(592),t.sane=1,t.back=-1,0):zn}function Dn(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,Pn(e)):zn}function Fn(e,t){var i,r;return e&&e.state?(r=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?zn:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=i,r.wbits=t,Dn(e))):zn}function Ln(e,t){var i,r;return e?(r=new Mn,e.state=r,r.window=null,0!==(i=Fn(e,t))&&(e.state=null),i):zn}var Bn,Nn,jn=!0;function Un(e){if(jn){var t;for(Bn=new $n.Buf32(512),Nn=new $n.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(En(1,e.lens,0,288,Bn,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;En(2,e.lens,0,32,Nn,0,e.work,{bits:5}),jn=!1}e.lencode=Bn,e.lenbits=9,e.distcode=Nn,e.distbits=5}function Wn(e,t,i,r){var n,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new $n.Buf8(a.wsize)),r>=a.wsize?($n.arraySet(a.window,t,i-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):((n=a.wsize-a.wnext)>r&&(n=r),$n.arraySet(a.window,t,i-r,n,a.wnext),(r-=n)?($n.arraySet(a.window,t,i-r,r,0),a.wnext=r,a.whave=a.wsize):(a.wnext+=n,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=n))),0}vn.inflateReset=Dn,vn.inflateReset2=Fn,vn.inflateResetKeep=Pn,vn.inflateInit=function(e){return Ln(e,15)},vn.inflateInit2=Ln,vn.inflate=function(e,t){var i,r,n,a,s,o,l,c,d,h,p,u,f,m,g,b,v,_,x,y,w,k,S,$,A=0,C=new $n.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return zn;(i=e.state).mode===Rn&&(i.mode=13),s=e.next_out,n=e.output,l=e.avail_out,a=e.next_in,r=e.input,o=e.avail_in,c=i.hold,d=i.bits,h=o,p=l,k=0;e:for(;;)switch(i.mode){case 1:if(0===i.wrap){i.mode=13;break}for(;d<16;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(2&i.wrap&&35615===c){i.check=0,C[0]=255&c,C[1]=c>>>8&255,i.check=Cn(i.check,C,2,0),c=0,d=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",i.mode=In;break}if(8!=(15&c)){e.msg="unknown compression method",i.mode=In;break}if(d-=4,w=8+(15&(c>>>=4)),0===i.wbits)i.wbits=w;else if(w>i.wbits){e.msg="invalid window size",i.mode=In;break}i.dmax=1<<w,e.adler=i.check=1,i.mode=512&c?10:Rn,c=0,d=0;break;case 2:for(;d<16;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(i.flags=c,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=In;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=In;break}i.head&&(i.head.text=c>>8&1),512&i.flags&&(C[0]=255&c,C[1]=c>>>8&255,i.check=Cn(i.check,C,2,0)),c=0,d=0,i.mode=3;case 3:for(;d<32;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}i.head&&(i.head.time=c),512&i.flags&&(C[0]=255&c,C[1]=c>>>8&255,C[2]=c>>>16&255,C[3]=c>>>24&255,i.check=Cn(i.check,C,4,0)),c=0,d=0,i.mode=4;case 4:for(;d<16;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}i.head&&(i.head.xflags=255&c,i.head.os=c>>8),512&i.flags&&(C[0]=255&c,C[1]=c>>>8&255,i.check=Cn(i.check,C,2,0)),c=0,d=0,i.mode=5;case 5:if(1024&i.flags){for(;d<16;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}i.length=c,i.head&&(i.head.extra_len=c),512&i.flags&&(C[0]=255&c,C[1]=c>>>8&255,i.check=Cn(i.check,C,2,0)),c=0,d=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&((u=i.length)>o&&(u=o),u&&(i.head&&(w=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),$n.arraySet(i.head.extra,r,a,u,w)),512&i.flags&&(i.check=Cn(i.check,r,u,a)),o-=u,a+=u,i.length-=u),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===o)break e;u=0;do{w=r[a+u++],i.head&&w&&i.length<65536&&(i.head.name+=String.fromCharCode(w))}while(w&&u<o);if(512&i.flags&&(i.check=Cn(i.check,r,u,a)),o-=u,a+=u,w)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===o)break e;u=0;do{w=r[a+u++],i.head&&w&&i.length<65536&&(i.head.comment+=String.fromCharCode(w))}while(w&&u<o);if(512&i.flags&&(i.check=Cn(i.check,r,u,a)),o-=u,a+=u,w)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;d<16;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(c!==(65535&i.check)){e.msg="header crc mismatch",i.mode=In;break}c=0,d=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=Rn;break;case 10:for(;d<32;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}e.adler=i.check=On(c),c=0,d=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=s,e.avail_out=l,e.next_in=a,e.avail_in=o,i.hold=c,i.bits=d,2;e.adler=i.check=1,i.mode=Rn;case Rn:if(5===t||6===t)break e;case 13:if(i.last){c>>>=7&d,d-=7&d,i.mode=27;break}for(;d<3;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}switch(i.last=1&c,d-=1,3&(c>>>=1)){case 0:i.mode=14;break;case 1:if(Un(i),i.mode=20,6===t){c>>>=2,d-=2;break e}break;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=In}c>>>=2,d-=2;break;case 14:for(c>>>=7&d,d-=7&d;d<32;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",i.mode=In;break}if(i.length=65535&c,c=0,d=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(u=i.length){if(u>o&&(u=o),u>l&&(u=l),0===u)break e;$n.arraySet(n,r,a,u,s),o-=u,a+=u,l-=u,s+=u,i.length-=u;break}i.mode=Rn;break;case 17:for(;d<14;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(i.nlen=257+(31&c),c>>>=5,d-=5,i.ndist=1+(31&c),c>>>=5,d-=5,i.ncode=4+(15&c),c>>>=4,d-=4,i.nlen>286||i.ndist>30){e.msg="too many length or distance symbols",i.mode=In;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;d<3;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}i.lens[T[i.have++]]=7&c,c>>>=3,d-=3}for(;i.have<19;)i.lens[T[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,S={bits:i.lenbits},k=En(0,i.lens,0,19,i.lencode,0,i.work,S),i.lenbits=S.bits,k){e.msg="invalid code lengths set",i.mode=In;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;b=(A=i.lencode[c&(1<<i.lenbits)-1])>>>16&255,v=65535&A,!((g=A>>>24)<=d);){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(v<16)c>>>=g,d-=g,i.lens[i.have++]=v;else{if(16===v){for($=g+2;d<$;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(c>>>=g,d-=g,0===i.have){e.msg="invalid bit length repeat",i.mode=In;break}w=i.lens[i.have-1],u=3+(3&c),c>>>=2,d-=2}else if(17===v){for($=g+3;d<$;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}d-=g,w=0,u=3+(7&(c>>>=g)),c>>>=3,d-=3}else{for($=g+7;d<$;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}d-=g,w=0,u=11+(127&(c>>>=g)),c>>>=7,d-=7}if(i.have+u>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=In;break}for(;u--;)i.lens[i.have++]=w}}if(i.mode===In)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=In;break}if(i.lenbits=9,S={bits:i.lenbits},k=En(1,i.lens,0,i.nlen,i.lencode,0,i.work,S),i.lenbits=S.bits,k){e.msg="invalid literal/lengths set",i.mode=In;break}if(i.distbits=6,i.distcode=i.distdyn,S={bits:i.distbits},k=En(2,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,S),i.distbits=S.bits,k){e.msg="invalid distances set",i.mode=In;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(o>=6&&l>=258){e.next_out=s,e.avail_out=l,e.next_in=a,e.avail_in=o,i.hold=c,i.bits=d,Tn(e,p),s=e.next_out,n=e.output,l=e.avail_out,a=e.next_in,r=e.input,o=e.avail_in,c=i.hold,d=i.bits,i.mode===Rn&&(i.back=-1);break}for(i.back=0;b=(A=i.lencode[c&(1<<i.lenbits)-1])>>>16&255,v=65535&A,!((g=A>>>24)<=d);){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(b&&!(240&b)){for(_=g,x=b,y=v;b=(A=i.lencode[y+((c&(1<<_+x)-1)>>_)])>>>16&255,v=65535&A,!(_+(g=A>>>24)<=d);){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}c>>>=_,d-=_,i.back+=_}if(c>>>=g,d-=g,i.back+=g,i.length=v,0===b){i.mode=26;break}if(32&b){i.back=-1,i.mode=Rn;break}if(64&b){e.msg="invalid literal/length code",i.mode=In;break}i.extra=15&b,i.mode=22;case 22:if(i.extra){for($=i.extra;d<$;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}i.length+=c&(1<<i.extra)-1,c>>>=i.extra,d-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;b=(A=i.distcode[c&(1<<i.distbits)-1])>>>16&255,v=65535&A,!((g=A>>>24)<=d);){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(!(240&b)){for(_=g,x=b,y=v;b=(A=i.distcode[y+((c&(1<<_+x)-1)>>_)])>>>16&255,v=65535&A,!(_+(g=A>>>24)<=d);){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}c>>>=_,d-=_,i.back+=_}if(c>>>=g,d-=g,i.back+=g,64&b){e.msg="invalid distance code",i.mode=In;break}i.offset=v,i.extra=15&b,i.mode=24;case 24:if(i.extra){for($=i.extra;d<$;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}i.offset+=c&(1<<i.extra)-1,c>>>=i.extra,d-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=In;break}i.mode=25;case 25:if(0===l)break e;if(u=p-l,i.offset>u){if((u=i.offset-u)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=In;break}u>i.wnext?(u-=i.wnext,f=i.wsize-u):f=i.wnext-u,u>i.length&&(u=i.length),m=i.window}else m=n,f=s-i.offset,u=i.length;u>l&&(u=l),l-=u,i.length-=u;do{n[s++]=m[f++]}while(--u);0===i.length&&(i.mode=21);break;case 26:if(0===l)break e;n[s++]=i.length,l--,i.mode=21;break;case 27:if(i.wrap){for(;d<32;){if(0===o)break e;o--,c|=r[a++]<<d,d+=8}if(p-=l,e.total_out+=p,i.total+=p,p&&(e.adler=i.check=i.flags?Cn(i.check,n,p,s-p):An(i.check,n,p,s-p)),p=l,(i.flags?c:On(c))!==i.check){e.msg="incorrect data check",i.mode=In;break}c=0,d=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;d<32;){if(0===o)break e;o--,c+=r[a++]<<d,d+=8}if(c!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=In;break}c=0,d=0}i.mode=29;case 29:k=1;break e;case In:k=-3;break e;case 31:return-4;default:return zn}return e.next_out=s,e.avail_out=l,e.next_in=a,e.avail_in=o,i.hold=c,i.bits=d,(i.wsize||p!==e.avail_out&&i.mode<In&&(i.mode<27||4!==t))&&Wn(e,e.output,e.next_out,p-e.avail_out),h-=e.avail_in,p-=e.avail_out,e.total_in+=h,e.total_out+=p,i.total+=p,i.wrap&&p&&(e.adler=i.check=i.flags?Cn(i.check,n,p,e.next_out-p):An(i.check,n,p,e.next_out-p)),e.data_type=i.bits+(i.last?64:0)+(i.mode===Rn?128:0)+(20===i.mode||15===i.mode?256:0),(0===h&&0===p||4===t)&&0===k&&(k=-5),k},vn.inflateEnd=function(e){if(!e||!e.state)return zn;var t=e.state;return t.window&&(t.window=null),e.state=null,0},vn.inflateGetHeader=function(e,t){var i;return e&&e.state&&2&(i=e.state).wrap?(i.head=t,t.done=!1,0):zn},vn.inflateSetDictionary=function(e,t){var i,r=t.length;return e&&e.state?0!==(i=e.state).wrap&&11!==i.mode?zn:11===i.mode&&An(1,t,r,0)!==i.check?-3:Wn(e,t,r,r)?(i.mode=31,-4):(i.havedict=1,0):zn},vn.inflateInfo="pako inflate (from Nodeca project)";var Hn={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var Zn=vn,qn=Mi,Vn=en,Kn=Hn,Qn=$r,Xn=ln,Gn=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},Yn=Object.prototype.toString;function Jn(e){if(!(this instanceof Jn))return new Jn(e);this.options=qn.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(15&t.windowBits||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Xn,this.strm.avail_out=0;var i=Zn.inflateInit2(this.strm,t.windowBits);if(i!==Kn.Z_OK)throw new Error(Qn[i]);if(this.header=new Gn,Zn.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=Vn.string2buf(t.dictionary):"[object ArrayBuffer]"===Yn.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(i=Zn.inflateSetDictionary(this.strm,t.dictionary))!==Kn.Z_OK))throw new Error(Qn[i])}function ea(e,t){var i=new Jn(t);if(i.push(e,!0),i.err)throw i.msg||Qn[i.err];return i.result}Jn.prototype.push=function(e,t){var i,r,n,a,s,o=this.strm,l=this.options.chunkSize,c=this.options.dictionary,d=!1;if(this.ended)return!1;r=t===~~t?t:!0===t?Kn.Z_FINISH:Kn.Z_NO_FLUSH,"string"==typeof e?o.input=Vn.binstring2buf(e):"[object ArrayBuffer]"===Yn.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new qn.Buf8(l),o.next_out=0,o.avail_out=l),(i=Zn.inflate(o,Kn.Z_NO_FLUSH))===Kn.Z_NEED_DICT&&c&&(i=Zn.inflateSetDictionary(this.strm,c)),i===Kn.Z_BUF_ERROR&&!0===d&&(i=Kn.Z_OK,d=!1),i!==Kn.Z_STREAM_END&&i!==Kn.Z_OK)return this.onEnd(i),this.ended=!0,!1;o.next_out&&(0!==o.avail_out&&i!==Kn.Z_STREAM_END&&(0!==o.avail_in||r!==Kn.Z_FINISH&&r!==Kn.Z_SYNC_FLUSH)||("string"===this.options.to?(n=Vn.utf8border(o.output,o.next_out),a=o.next_out-n,s=Vn.buf2string(o.output,n),o.next_out=a,o.avail_out=l-a,a&&qn.arraySet(o.output,o.output,n,a,0),this.onData(s)):this.onData(qn.shrinkBuf(o.output,o.next_out)))),0===o.avail_in&&0===o.avail_out&&(d=!0)}while((o.avail_in>0||0===o.avail_out)&&i!==Kn.Z_STREAM_END);return i===Kn.Z_STREAM_END&&(r=Kn.Z_FINISH),r===Kn.Z_FINISH?(i=Zn.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===Kn.Z_OK):r!==Kn.Z_SYNC_FLUSH||(this.onEnd(Kn.Z_OK),o.avail_out=0,!0)},Jn.prototype.onData=function(e){this.chunks.push(e)},Jn.prototype.onEnd=function(e){e===Kn.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=qn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},bn.Inflate=Jn,bn.inflate=ea,bn.inflateRaw=function(e,t){return(t=t||{}).raw=!0,ea(e,t)},bn.ungzip=ea;var ta={};(0,Mi.assign)(ta,Pi,bn,Hn);var ia="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,ra=ta,na=Dt(),aa=Lt,sa=ia?"uint8array":"array";function oa(e,t){aa.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}Oi.magic="\b\0",na.inherits(oa,aa),oa.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(na.transformTo(sa,e.data),!1)},oa.prototype.flush=function(){aa.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},oa.prototype.cleanUp=function(){aa.prototype.cleanUp.call(this),this._pako=null},oa.prototype._createPako=function(){this._pako=new ra[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},Oi.compressWorker=function(e){return new oa("Deflate",e)},Oi.uncompressWorker=function(){return new oa("Inflate",{})};var la=Lt;Ii.STORE={magic:"\0\0",compressWorker:function(){return new la("STORE compression")},uncompressWorker:function(){return new la("STORE decompression")}},Ii.DEFLATE=Oi;var ca={LOCAL_FILE_HEADER:"PK",CENTRAL_FILE_HEADER:"PK",CENTRAL_DIRECTORY_END:"PK",ZIP64_CENTRAL_DIRECTORY_LOCATOR:"PK",ZIP64_CENTRAL_DIRECTORY_END:"PK",DATA_DESCRIPTOR:"PK\b"},da=Dt(),ha=Lt,pa=ze,ua=oi,fa=ca,ma=function(e,t){var i,r="";for(i=0;i<t;i++)r+=String.fromCharCode(255&e),e>>>=8;return r},ga=function(e,t,i,r,n,a){var s,o,l=e.file,c=e.compression,d=a!==pa.utf8encode,h=da.transformTo("string",a(l.name)),p=da.transformTo("string",pa.utf8encode(l.name)),u=l.comment,f=da.transformTo("string",a(u)),m=da.transformTo("string",pa.utf8encode(u)),g=p.length!==l.name.length,b=m.length!==u.length,v="",_="",x="",y=l.dir,w=l.date,k={crc32:0,compressedSize:0,uncompressedSize:0};t&&!i||(k.crc32=e.crc32,k.compressedSize=e.compressedSize,k.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),d||!g&&!b||(S|=2048);var $,A,C,T=0,E=0;y&&(T|=16),"UNIX"===n?(E=798,T|=($=l.unixPermissions,A=y,C=$,$||(C=A?16893:33204),(65535&C)<<16)):(E=20,T|=63&(l.dosPermissions||0)),s=w.getUTCHours(),s<<=6,s|=w.getUTCMinutes(),s<<=5,s|=w.getUTCSeconds()/2,o=w.getUTCFullYear()-1980,o<<=4,o|=w.getUTCMonth()+1,o<<=5,o|=w.getUTCDate(),g&&(_=ma(1,1)+ma(ua(h),4)+p,v+="up"+ma(_.length,2)+_),b&&(x=ma(1,1)+ma(ua(f),4)+m,v+="uc"+ma(x.length,2)+x);var z="";return z+="\n\0",z+=ma(S,2),z+=c.magic,z+=ma(s,2),z+=ma(o,2),z+=ma(k.crc32,4),z+=ma(k.compressedSize,4),z+=ma(k.uncompressedSize,4),z+=ma(h.length,2),z+=ma(v.length,2),{fileRecord:fa.LOCAL_FILE_HEADER+z+h+v,dirRecord:fa.CENTRAL_FILE_HEADER+ma(E,2)+z+ma(f.length,2)+"\0\0\0\0"+ma(T,4)+ma(r,4)+h+v+f}},ba=function(e){return fa.DATA_DESCRIPTOR+ma(e.crc32,4)+ma(e.compressedSize,4)+ma(e.uncompressedSize,4)};function va(e,t,i,r){ha.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=i,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}da.inherits(va,ha),va.prototype.push=function(e){var t=e.meta.percent||0,i=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,ha.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:i?(t+100*(i-r-1))/i:100}}))},va.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var i=ga(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:i.fileRecord,meta:{percent:0}})}else this.accumulate=!0},va.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,i=ga(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(i.dirRecord),t)this.push({data:ba(e),meta:{percent:100}});else for(this.push({data:i.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},va.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var i=this.bytesWritten-e,r=function(e,t,i,r,n){var a=da.transformTo("string",n(r));return fa.CENTRAL_DIRECTORY_END+"\0\0\0\0"+ma(e,2)+ma(e,2)+ma(t,4)+ma(i,4)+ma(a.length,2)+a}(this.dirRecords.length,i,e,this.zipComment,this.encodeFileName);this.push({data:r,meta:{percent:100}})},va.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},va.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},va.prototype.resume=function(){return!!ha.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},va.prototype.error=function(e){var t=this._sources;if(!ha.prototype.error.call(this,e))return!1;for(var i=0;i<t.length;i++)try{t[i].error(e)}catch(e){}return!0},va.prototype.lock=function(){ha.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()};var _a=Ii,xa=va;Ri.generateWorker=function(e,t,i){var r=new xa(t.streamFiles,i,t.platform,t.encodeFileName),n=0;try{e.forEach(function(e,i){n++;var a=function(e,t){var i=e||t,r=_a[i];if(!r)throw new Error(i+" is not a valid compression method !");return r}(i.options.compression,t.compression),s=i.options.compressionOptions||t.compressionOptions||{},o=i.dir,l=i.date;i._compressWorker(a,s).withStreamInfo("file",{name:e,dir:o,date:l,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(r)}),r.entriesCount=n}catch(e){r.error(e)}return r};var ya=Dt(),wa=Lt;function ka(e,t){wa.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}ya.inherits(ka,wa),ka.prototype._bindStream=function(e){var t=this;this._stream=e,e.pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},ka.prototype.pause=function(){return!!wa.prototype.pause.call(this)&&(this._stream.pause(),!0)},ka.prototype.resume=function(){return!!wa.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)};var Sa=ka,$a=ze,Aa=Dt(),Ca=Lt,Ta=Jt,Ea=ei,za=xi,Ra=zi,Ia=Ri,Oa=It,Ma=Sa,Pa=function(e,t,i){var r,n=Aa.getTypeOf(t),a=Aa.extend(i||{},Ea);a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),"string"==typeof a.unixPermissions&&(a.unixPermissions=parseInt(a.unixPermissions,8)),a.unixPermissions&&16384&a.unixPermissions&&(a.dir=!0),a.dosPermissions&&16&a.dosPermissions&&(a.dir=!0),a.dir&&(e=Fa(e)),a.createFolders&&(r=Da(e))&&La.call(this,r,!0);var s="string"===n&&!1===a.binary&&!1===a.base64;i&&void 0!==i.binary||(a.binary=!s),(t instanceof za&&0===t.uncompressedSize||a.dir||!t||0===t.length)&&(a.base64=!1,a.binary=!0,t="",a.compression="STORE",n="string");var o=null;o=t instanceof za||t instanceof Ca?t:Oa.isNode&&Oa.isStream(t)?new Ma(e,t):Aa.prepareContent(e,t,a.binary,a.optimizedBinaryString,a.base64);var l=new Ra(e,o,a);this.files[e]=l},Da=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return t>0?e.substring(0,t):""},Fa=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},La=function(e,t){return t=void 0!==t?t:Ea.createFolders,e=Fa(e),this.files[e]||Pa.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function Ba(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var Na={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,i,r;for(t in this.files)r=this.files[t],(i=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(i,r)},filter:function(e){var t=[];return this.forEach(function(i,r){e(i,r)&&t.push(r)}),t},file:function(e,t,i){if(1===arguments.length){if(Ba(e)){var r=e;return this.filter(function(e,t){return!t.dir&&r.test(e)})}var n=this.files[this.root+e];return n&&!n.dir?n:null}return e=this.root+e,Pa.call(this,e,t,i),this},folder:function(e){if(!e)return this;if(Ba(e))return this.filter(function(t,i){return i.dir&&e.test(t)});var t=this.root+e,i=La.call(this,t),r=this.clone();return r.root=i.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var i=this.filter(function(t,i){return i.name.slice(0,e.length)===e}),r=0;r<i.length;r++)delete this.files[i[r].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,i={};try{if((i=Aa.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:$a.utf8encode})).type=i.type.toLowerCase(),i.compression=i.compression.toUpperCase(),"binarystring"===i.type&&(i.type="string"),!i.type)throw new Error("No output type specified.");Aa.checkSupport(i.type),"darwin"!==i.platform&&"freebsd"!==i.platform&&"linux"!==i.platform&&"sunos"!==i.platform||(i.platform="UNIX"),"win32"===i.platform&&(i.platform="DOS");var r=i.comment||this.comment||"";t=Ia.generateWorker(this,i,r)}catch(e){(t=new Ca("error")).error(e)}return new Ta(t,i.type||"string",i.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}},ja=Na,Ua=Dt();function Wa(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}Wa.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,i=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)i=(i<<8)+this.byteAt(t);return this.index+=e,i},readString:function(e){return Ua.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}};var Ha=Wa,Za=Ha;function qa(e){Za.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}Dt().inherits(qa,Za),qa.prototype.byteAt=function(e){return this.data[this.zero+e]},qa.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),n=e.charCodeAt(3),a=this.length-4;a>=0;--a)if(this.data[a]===t&&this.data[a+1]===i&&this.data[a+2]===r&&this.data[a+3]===n)return a-this.zero;return-1},qa.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),n=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&i===a[1]&&r===a[2]&&n===a[3]},qa.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Va=qa,Ka=Ha;function Qa(e){Ka.call(this,e)}Dt().inherits(Qa,Ka),Qa.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},Qa.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},Qa.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},Qa.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Xa=Qa,Ga=Va;function Ya(e){Ga.call(this,e)}Dt().inherits(Ya,Ga),Ya.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Ja=Ya,es=Ja;function ts(e){es.call(this,e)}Dt().inherits(ts,es),ts.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var is=ts,rs=Dt(),ns=Ie,as=Va,ss=Xa,os=is,ls=Ja,cs=function(e){var t=rs.getTypeOf(e);return rs.checkSupport(t),"string"!==t||ns.uint8array?"nodebuffer"===t?new os(e):ns.uint8array?new ls(rs.transformTo("uint8array",e)):new as(rs.transformTo("array",e)):new ss(e)},ds=cs,hs=Dt(),ps=xi,us=oi,fs=ze,ms=Ii,gs=Ie;function bs(e,t){this.options=e,this.loadOptions=t}bs.prototype={isEncrypted:function(){return!(1&~this.bitFlag)},useUTF8:function(){return!(2048&~this.bitFlag)},readLocalPart:function(e){var t,i;if(e.skip(22),this.fileNameLength=e.readInt(2),i=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(i),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in ms)if(Object.prototype.hasOwnProperty.call(ms,t)&&ms[t].magic===e)return ms[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+hs.pretty(this.compressionMethod)+" unknown (inner file : "+hs.transformTo("string",this.fileName)+")");this.decompressed=new ps(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0===e&&(this.dosPermissions=63&this.externalFileAttributes),3===e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=ds(this.extraFields[1].value);this.uncompressedSize===hs.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===hs.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===hs.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===hs.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,i,r,n=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<n;)t=e.readInt(2),i=e.readInt(2),r=e.readData(i),this.extraFields[t]={id:t,length:i,value:r};e.setIndex(n)},handleUTF8:function(){var e=gs.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=fs.utf8decode(this.fileName),this.fileCommentStr=fs.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var i=hs.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(i)}var r=this.findExtraFieldUnicodeComment();if(null!==r)this.fileCommentStr=r;else{var n=hs.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=ds(e.value);return 1!==t.readInt(1)||us(this.fileName)!==t.readInt(4)?null:fs.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=ds(e.value);return 1!==t.readInt(1)||us(this.fileComment)!==t.readInt(4)?null:fs.utf8decode(t.readData(e.length-5))}return null}};var vs=bs,_s=cs,xs=Dt(),ys=ca,ws=vs,ks=Ie;function Ss(e){this.files=[],this.loadOptions=e}Ss.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+xs.pretty(t)+", expected "+xs.pretty(e)+")")}},isSignature:function(e,t){var i=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(i),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=ks.uint8array?"uint8array":"array",i=xs.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,i,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),i=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(ys.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(ys.CENTRAL_FILE_HEADER);)(e=new ws({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(ys.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,ys.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(ys.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===xs.MAX_VALUE_16BITS||this.diskWithCentralDirStart===xs.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===xs.MAX_VALUE_16BITS||this.centralDirRecords===xs.MAX_VALUE_16BITS||this.centralDirSize===xs.MAX_VALUE_32BITS||this.centralDirOffset===xs.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(ys.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(ys.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,ys.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(ys.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(ys.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var r=t-i;if(r>0)this.isSignature(t,ys.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw new Error("Corrupted zip: missing "+Math.abs(r)+" bytes.")},prepareReader:function(e){this.reader=_s(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}};var $s=Ss,As=Dt(),Cs=Pt,Ts=ze,Es=$s,zs=hi,Rs=It;function Is(e){return new Cs.Promise(function(t,i){var r=e.decompressed.getContentWorker().pipe(new zs);r.on("error",function(e){i(e)}).on("end",function(){r.streamInfo.crc32!==e.decompressed.crc32?i(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}function Os(){if(!(this instanceof Os))return new Os;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new Os;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}Os.prototype=ja,Os.prototype.loadAsync=function(e,t){var i=this;return t=As.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:Ts.utf8decode}),Rs.isNode&&Rs.isStream(e)?Cs.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):As.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var i=new Es(t);return i.load(e),i}).then(function(e){var i=[Cs.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var n=0;n<r.length;n++)i.push(Is(r[n]));return Cs.Promise.all(i)}).then(function(e){for(var r=e.shift(),n=r.files,a=0;a<n.length;a++){var s=n[a],o=s.fileNameStr,l=As.resolve(s.fileNameStr);i.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(i.file(l).unsafeOriginalName=o)}return r.zipComment.length&&(i.comment=r.zipComment),i})},Os.support=Ie,Os.defaults=ei,Os.version="3.10.1",Os.loadAsync=function(e,t){return(new Os).loadAsync(e,t)},Os.external=Pt;var Ms=Se(Os);class Ps extends de{static properties={api:{type:Object},asPanel:{type:Boolean},inlineMode:{type:Boolean},_mode:{type:String},_url:{type:String},_scraping:{type:Boolean},_scrapeError:{type:String},_form:{type:Object},_saving:{type:Boolean},_ingredientInput:{type:String},_ratingHover:{type:Number},_importFile:{type:Object},_importing:{type:Boolean},_importResult:{type:Object},_importError:{type:String},_importDownloadImages:{type:Boolean}};constructor(){super(),this.api=null,this.asPanel=!1,this.inlineMode=!1,this._mode="url",this._url="",this._scraping=!1,this._scrapeError=null,this._saving=!1,this._ingredientInput="",this._ratingHover=0,this._form=this._emptyForm(),this._importFile=null,this._importing=!1,this._importResult=null,this._importError=null,this._importDownloadImages=!0}_emptyForm(){return{name:"",description:"",source_url:"",servings:"",prep_time:"",cook_time:"",image_url:"",tags:"",courses:"",categories:"",collections:"",rating:0,notes:"",ingredients:[],instructions:[],cal:"",fat:"",satf:"",chol:"",sod:"",carb:"",fib:"",sug:"",prot:""}}_close(){this.dispatchEvent(new CustomEvent("rm-close",{bubbles:!0,composed:!0}))}async _handleScrape(){if(this._url.trim()&&!this._scraping){this._scraping=!0,this._scrapeError=null;try{const e=await this.api.scrapeRecipe(this._url.trim());if(e?.recipe){const t=e.recipe,i=t.nutrition||{};this._form={name:t.name||"",description:t.description||"",source_url:t.source_url||this._url.trim(),servings:t.servings||"",prep_time:t.prep_time||"",cook_time:t.cook_time||"",image_url:t.image_url||"",tags:(t.tags||[]).join(", "),courses:(t.courses||[]).join(", "),categories:(t.categories||[]).join(", "),collections:(t.collections||[]).join(", "),rating:t.rating||0,notes:t.notes||"",ingredients:t.ingredients||[],instructions:t.instructions||[],cal:i.calories??"",fat:i.fat??"",satf:i.saturated_fat??"",chol:i.cholesterol??"",sod:i.sodium??"",carb:i.carbohydrates??"",fib:i.fiber??"",sug:i.sugar??"",prot:i.protein??""},this._mode="manual"}else this._scrapeError=e?.error||"Could not extract recipe from this URL."}catch(e){this._scrapeError=e.message||"Scraping failed."}finally{this._scraping=!1}}}_handleImportFileChange(e){this._importFile=e.target.files[0]||null,this._importResult=null,this._importError=null}async _handleImport(){if(this._importFile&&!this._importing){this._importing=!0,this._importResult=null,this._importError=null;try{let e;try{e=await Ms.loadAsync(this._importFile)}catch(e){throw new Error(`Could not open ZIP file: ${e.message}`)}const t=Object.values(e.files).find(e=>!e.dir&&e.name.endsWith(".html"));if(!t)throw new Error("No HTML file found inside the ZIP — is this a valid Recipe Keeper export?");const i=await t.async("text");console.log(`[Recipe Keeper Import] HTML extracted (${i.length} chars), sending to backend`);const r=await this.api.importRecipeKeeper(i);console.log(`[Recipe Keeper Import] Phase 1 done: ${r.imported} imported, ${r.failed} failed, ${r.recipe_images?.length??0} need images`);let n=0,a=0;if(this._importDownloadImages&&r.recipe_images?.length){const t=new Set([".jpg",".jpeg",".png",".webp",".gif",".bmp"]);for(const{recipe_id:i,image_filename:s}of r.recipe_images){const r=e.files[s]??Object.values(e.files).find(e=>{const i=s.split("/").pop();return!e.dir&&e.name.split("/").pop()===i&&t.has(e.name.slice(e.name.lastIndexOf(".")).toLowerCase())});if(r)try{const e=await r.async("base64");await this.api.uploadRecipeImage(i,e),n++}catch(e){console.warn(`[Recipe Keeper Import] Could not save image for recipe ${i}:`,e),a++}}console.log(`[Recipe Keeper Import] Phase 2 done: ${n} images saved, ${a} failed`)}this._importResult={...r,imagesSaved:n},r.imported>0&&this.dispatchEvent(new CustomEvent("rm-import-done",{bubbles:!0,composed:!0}))}catch(e){console.error("[Recipe Keeper Import] Failed:",e),this._importError=e.message||String(e)||"Import failed."}finally{this._importing=!1}}}async _handleSave(){if(this._form.name.trim()&&!this._saving){this._saving=!0;try{const e=this._form,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"},r={};let n=!1;for(const[t,a]of Object.entries(i))""!==e[t]&&null!=e[t]&&(r[a]=e[t],n=!0);const a={name:e.name,description:e.description,source_url:e.source_url,image_url:e.image_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),rating:e.rating||null,notes:e.notes,ingredients:e.ingredients,instructions:e.instructions,nutrition:n?r:null};this.dispatchEvent(new CustomEvent("rm-add-recipe",{detail:{data:a},bubbles:!0,composed:!0})),this._form=this._emptyForm()}finally{this._saving=!1}}}_setField(e,t){this._form={...this._form,[e]:t}}_addIngredient(){const e=this._ingredientInput.trim();if(!e)return;const t=e.split(/\s+/);let i="",r="",n="";t.length>=3&&!isNaN(parseFloat(t[0]))?(i=t[0],r=t[1],n=t.slice(2).join(" ")):2!==t.length||isNaN(parseFloat(t[0]))?n=e:(i=t[0],n=t[1]),this._form={...this._form,ingredients:[...this._form.ingredients,{amount:i,unit:r,name:n}]},this._ingredientInput=""}_removeIngredient(e){this._form={...this._form,ingredients:this._form.ingredients.filter((t,i)=>i!==e)}}_addStep(e){e.trim()&&(this._form={...this._form,instructions:[...this._form.instructions,e.trim()]})}_removeStep(e){this._form={...this._form,instructions:this._form.instructions.filter((t,i)=>i!==e)}}_renderPanelContent(){return q`
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
        ${this.inlineMode?"":q`<button class="icon-btn" @click=${this._close}><ha-icon icon="mdi:close"></ha-icon></button>`}
      </div>

      <div class="dialog-body">
        ${"url"===this._mode?this._renderUrlMode():""}
        ${"import"===this._mode?this._renderImportMode():""}
        ${"manual"===this._mode?this._renderManualMode():""}
      </div>

      ${"manual"===this._mode?q`
        <div class="dialog-footer">
          <button class="action-btn" @click=${this._close}>Cancel</button>
          <button
            class="action-btn primary"
            ?disabled=${!this._form.name.trim()||this._saving}
            @click=${this._handleSave}
          >
            ${this._saving?q`<ha-circular-progress active size="tiny"></ha-circular-progress>`:q`<ha-icon icon="mdi:content-save-outline"></ha-icon>`}
            Save Recipe
          </button>
        </div>
      `:""}
    `}render(){return this.inlineMode?q`<div class="dialog-panel inline-panel">${this._renderPanelContent()}</div>`:q`
      <div class="dialog-overlay ${this.asPanel?"panel-mode":""}" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog-panel">${this._renderPanelContent()}</div>
      </div>
    `}_renderImportMode(){return q`
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

        ${this._importResult?q`
          <div class="import-result ${this._importResult.failed>0?"partial":"success"}">
            <ha-icon icon="${this._importResult.failed>0?"mdi:alert-circle-outline":"mdi:check-circle-outline"}"></ha-icon>
            <div>
              <strong>${this._importResult.imported} recipe${1!==this._importResult.imported?"s":""} imported</strong>
              ${this._importResult.imagesSaved>0?q` with ${this._importResult.imagesSaved} photo${1!==this._importResult.imagesSaved?"s":""}`:""}
              ${this._importResult.failed>0?q`<br/><small>${this._importResult.failed} failed — check HA logs for details</small>`:""}
            </div>
          </div>
        `:this._importError?q`
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
          ${this._importing?q`<ha-circular-progress active size="tiny"></ha-circular-progress> Importing…`:q`<ha-icon icon="mdi:import"></ha-icon> Import Recipes`}
        </button>
      </div>
    `}_renderUrlMode(){return q`
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
            ${this._scraping?q`<ha-circular-progress active size="tiny"></ha-circular-progress>`:q`<ha-icon icon="mdi:download-outline"></ha-icon>`}
            Fetch
          </button>
        </div>
        ${this._scrapeError?q`
          <div class="error-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            ${this._scrapeError}
          </div>
          <button class="action-btn" @click=${()=>{this._mode="manual",this._form={...this._emptyForm(),source_url:this._url}}}>
            Enter manually instead
          </button>
        `:""}
      </div>
    `}_renderManualMode(){const e=this._form,t=this._ratingHover||e.rating||0;return q`
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
            ${[1,2,3,4,5].map(i=>q`
              <span
                class="star ${i<=t?"filled":""}"
                @mouseenter=${()=>{this._ratingHover=i}}
                @click=${()=>this._setField("rating",e.rating===i?0:i)}
              >★</span>
            `)}
            ${e.rating?q`<button class="clear-rating" @click=${()=>this._setField("rating",0)}>Clear</button>`:""}
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
          ${e.ingredients.length?q`
            <ul class="ing-list">
              ${e.ingredients.map((e,t)=>q`
                <li>
                  <span class="ing-text">${e.amount?`${e.amount} ${e.unit} `:""}${e.name}</span>
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
              placeholder='e.g. "2 cups flour" or "salt"'
            />
            <button class="action-btn sm" @click=${this._addIngredient}>Add</button>
          </div>
        </div>

        <!-- Directions -->
        <div class="field">
          <label>Directions (${e.instructions.length} steps)</label>
          ${e.instructions.length?q`
            <ol class="steps-edit">
              ${e.instructions.map((e,t)=>q`
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
    `}static styles=c`
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
    .ing-text, .step-text { flex: 1; }
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
  `}try{customElements.define("rm-add-recipe-dialog",Ps)}catch{}const Ds=["breakfast","lunch","dinner","snack"],Fs=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];class Ls extends de{static properties={api:{type:Object},recipes:{type:Array},_weekStart:{type:String},_plan:{type:Array},_loading:{type:Boolean},_showPicker:{type:Boolean},_pickerTarget:{type:Object},_pickerSearch:{type:String},_pickerServings:{type:Number}};constructor(){super(),this.api=null,this.recipes=[],this._plan=[],this._loading=!1,this._showPicker=!1,this._pickerTarget=null,this._pickerSearch="",this._pickerServings=2,this._weekStart=this._getMondayISO(new Date)}updated(e){(e.has("api")||e.has("_weekStart"))&&this.api&&this._loadPlan()}_getMondayISO(e){const t=e.getDay(),i=0===t?-6:1-t,r=new Date(e);r.setDate(r.getDate()+i);return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}_addDays(e,t){const i=new Date(e+"T00:00:00Z");return i.setUTCDate(i.getUTCDate()+t),i.toISOString().split("T")[0]}_formatDisplayDate(e){return new Date(e+"T00:00:00Z").getUTCDate().toString()}_formatMonthYear(e){return new Date(e+"T00:00:00Z").toLocaleDateString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})}_prevWeek(){this._weekStart=this._addDays(this._weekStart,-7)}_nextWeek(){this._weekStart=this._addDays(this._weekStart,7)}_isCurrentWeek(){return this._weekStart===this._getMondayISO(new Date)}async _loadPlan(){this._loading=!0;try{const e=await this.api.getMealPlan(this._weekStart);this._plan=e?.entries??[]}catch(e){this._plan=[]}finally{this._loading=!1}}_getEntriesForSlot(e,t){return this._plan.filter(i=>i.date===e&&i.meal_type===t)}_openPicker(e,t){this._pickerTarget={date:e,mealType:t},this._pickerSearch="",this._pickerServings=2,this._showPicker=!0}async _handlePickRecipe(e){this._pickerTarget&&(await this.api.addToMealPlan(e.id,this._pickerTarget.date,this._pickerTarget.mealType,this._pickerServings),this._showPicker=!1,await this._loadPlan())}async _handleRemoveEntry(e){await this.api.removeFromMealPlan(e),await this._loadPlan()}async _handleClearWeek(){await this.api.clearMealPlanWeek(this._weekStart),await this._loadPlan()}_openRecipeDetail(e){const t=this.recipes.find(t=>t.id===e.recipe_id);t&&this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:t},bubbles:!0,composed:!0}))}get _pickerFiltered(){const e=this._pickerSearch.trim().toLowerCase();return e?this.recipes.filter(t=>t.name?.toLowerCase().includes(e)||t.tags?.some(t=>t.toLowerCase().includes(e))):this.recipes}render(){const e=Array.from({length:7},(e,t)=>this._addDays(this._weekStart,t)),t=(new Date).toISOString().split("T")[0];return q`
      <div class="planner-container">
        <!-- Week navigation -->
        <div class="week-nav">
          <button class="nav-btn" @click=${this._prevWeek}>
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <div class="week-label">
            <span class="week-month">${this._formatMonthYear(this._weekStart)}</span>
            ${this._isCurrentWeek()?q`<span class="today-badge">This week</span>`:q`
              <button class="text-link" @click=${()=>{this._weekStart=this._getMondayISO(new Date)}}>Today</button>
            `}
          </div>
          <button class="nav-btn" @click=${this._nextWeek}>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
        </div>

        <!-- Day headers -->
        <div class="day-headers">
          ${e.map((e,i)=>q`
            <div class="day-header ${e===t?"today":""}">
              <span class="day-name">${Fs[i]}</span>
              <span class="day-num">${this._formatDisplayDate(e)}</span>
            </div>
          `)}
        </div>

        <!-- Plan grid scroll -->
        <div class="plan-scroll">
          ${this._loading?q`
            <div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>
          `:q`
            ${Ds.map(i=>q`
              <div class="meal-row">
                <div class="meal-label">${i.charAt(0).toUpperCase()+i.slice(1)}</div>
                <div class="meal-cells">
                  ${e.map(e=>{const r=this._getEntriesForSlot(e,i);return q`
                      <div class="meal-cell ${e===t?"today":""}">
                        ${r.map(e=>{const t=this.recipes.find(t=>t.id===e.recipe_id);return q`
                            <div class="meal-entry" @click=${()=>this._openRecipeDetail(e)}>
                              ${t?.image_url?q`
                                <img src="${t.image_url}" alt="${t?.name||""}" class="entry-thumb" />
                              `:q`
                                <div class="entry-thumb entry-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                              `}
                              <span class="entry-name">${t?.name??"Unknown"}</span>
                              ${e.servings&&1!==e.servings?q`
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
          ${this._plan.length?q`
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
    `}_renderPicker(){const e=this._pickerTarget;return q`
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
            ${0===this._pickerFiltered.length?q`
              <div class="picker-empty">No recipes found</div>
            `:this._pickerFiltered.map(e=>q`
              <div class="picker-item" @click=${()=>this._handlePickRecipe(e)}>
                ${e.image_url?q`
                  <img src="${e.image_url}" alt="${e.name}" class="picker-thumb" />
                `:q`
                  <div class="picker-thumb picker-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                `}
                <div class="picker-info">
                  <span class="picker-name">${e.name}</span>
                  ${e.tags?.length?q`<span class="picker-tags">${e.tags.slice(0,2).join(", ")}</span>`:""}
                </div>
                ${e.is_favourite?q`<ha-icon icon="mdi:heart" class="picker-fav"></ha-icon>`:""}
              </div>
            `)}
          </div>
        </div>
      </div>
    `}static styles=c`
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
  `}try{customElements.define("rm-meal-planner",Ls)}catch{}class Bs extends de{static properties={settings:{type:Object},_activeTab:{type:String}};constructor(){super(),this.settings={},this._activeTab="appearance"}_update(e){const t={...this.settings,...e};this.dispatchEvent(new CustomEvent("rm-settings-change",{detail:{settings:t},bubbles:!0,composed:!0}))}render(){const e=this.settings;return q`
      <div class="settings-root">
        <div class="tab-bar">
          ${[["appearance","mdi:palette-outline","Appearance"],["advanced","mdi:tune-variant","Advanced"],["sync","mdi:cloud-sync-outline","Sync"],["help","mdi:help-circle-outline","Help"]].map(([e,t,i])=>q`
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
    `}_renderAppearance(e){const t="midnight"===e.theme||"ember"===e.theme||"neon"===e.theme,i="arctic"===e.theme||"meadow"===e.theme||"ocean"===e.theme,r=t||i;return q`
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

        ${r?q`
          <div class="setting-row muted-row">
            <span class="setting-name">Dark mode</span>
            <span class="muted-note">${t?"Always dark for this theme":"Always light for this theme"}</span>
          </div>
        `:q`
          <div class="setting-row">
            <span class="setting-name">Dark mode</span>
            <div class="btn-group">
              ${[["off","Light"],["system","Auto"],["on","Dark"]].map(([t,i])=>q`
                <button class="seg-btn ${e.darkMode===t?"active":""}"
                  @click=${()=>this._update({darkMode:t})}>${i}</button>
              `)}
            </div>
          </div>
        `}

        <div class="setting-row">
          <span class="setting-name">Text size</span>
          <div class="btn-group">
            ${[["small","S"],["medium","M"],["large","L"]].map(([t,i])=>q`
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
            ${[2,3,4,5,8,10].map(t=>q`
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
            ${[6,12,24].map(t=>q`
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
    `}_renderAdvanced(e){return q`
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

        ${"file"===e.timerSound?q`
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

        ${e.keepScreenOn?q`
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">Auto-release after</span>
              <span class="setting-hint">Screen lock released after this many minutes</span>
            </div>
            <div class="btn-group">
              ${[15,30,45,60].map(t=>q`
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
    `}_handleSoundFileChange(e){const t=e.target.files?.[0];if(!t)return;const i=new FileReader;i.onload=e=>{this._update({timerSoundFile:e.target.result,timerSoundFileName:t.name})},i.readAsDataURL(t)}_testSound(e,t){if("file"!==e)try{const t=new(window.AudioContext||window.webkitAudioContext);if("ding"===e){const e=t.createOscillator(),i=t.createGain();e.connect(i),i.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(1046,t.currentTime),i.gain.setValueAtTime(.6,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+1),e.start(t.currentTime),e.stop(t.currentTime+1)}else if("alarm"===e)for(let e=0;e<3;e++){const i=t.currentTime+.35*e,r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),r.type="square",r.frequency.setValueAtTime(660,i),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.001,i+.2),r.start(i),r.stop(i+.2)}else if("none"!==e){const e=t.createOscillator(),i=t.createGain();e.connect(i),i.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(880,t.currentTime),i.gain.setValueAtTime(.5,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.5),e.start(t.currentTime),e.stop(t.currentTime+.5)}}catch(e){console.warn("Audio test failed:",e)}else if(t){new Audio(t).play().catch(e=>console.warn("Could not play file:",e))}}_renderPlaceholder(e,t,i){return q`
      <div class="placeholder-tab">
        <ha-icon icon="${t}"></ha-icon>
        <div class="placeholder-title">${e}</div>
        <div class="placeholder-msg">${i}</div>
      </div>
    `}static styles=c`
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
  `}try{customElements.define("rm-settings-view",Bs)}catch{}class Ns extends de{static properties={hass:{type:Object},slmAvailable:{type:Boolean},shoppingLists:{type:Array},api:{type:Object},localItems:{type:Array},settings:{type:Object}};constructor(){super(),this.hass=null,this.slmAvailable=!1,this.shoppingLists=[],this.api=null,this.localItems=[],this.settings=null,this._slmCard=null,this._slmRetryTimeout=null}disconnectedCallback(){super.disconnectedCallback(),this._slmRetryTimeout&&(clearTimeout(this._slmRetryTimeout),this._slmRetryTimeout=null)}get _useSLM(){return this.slmAvailable||!!customElements.get("shopping-list-manager-card")}updated(e){this._useSLM&&(this._slmCard?(e.has("hass")&&this.hass&&(this._slmCard.hass=this.hass),e.has("settings")&&this.settings&&this._slmCard&&this._syncSlmTheme()):this._mountSlmCard())}_syncSlmTheme(){if(!this._slmCard||!this.settings)return;const{theme:e,darkMode:t}=this.settings;this._slmCard.settings={...this._slmCard.settings,theme:e,darkMode:t},this._slmCard.applyColorScheme?.()}_mountSlmCard(){const e=this.shadowRoot?.querySelector(".slm-host");if(!e)return;const t=customElements.get("shopping-list-manager-card");if(!t)return void(this._slmRetryTimeout||(this._slmRetryTimeout=setTimeout(()=>{this._slmRetryTimeout=null,this.isConnected&&this._mountSlmCard()},500)));const i=new t;try{i.setConfig({})}catch(e){}i.style.cssText="display:block;width:100%;height:100%;max-height:100%;min-height:0;",i.isEmbedded=!0,e.appendChild(i),this.hass&&(i.hass=this.hass),this._slmCard=i,setTimeout(()=>this._syncSlmTheme(),0)}_toggleLocalItem(e){const t=this.localItems.map(t=>t.id===e?{...t,checked:!t.checked}:t);this._dispatchLocalUpdate(t)}_clearLocalChecked(){this._dispatchLocalUpdate(this.localItems.filter(e=>!e.checked))}_clearAllLocal(){this._dispatchLocalUpdate([])}_dispatchLocalUpdate(e){this.dispatchEvent(new CustomEvent("rm-shopping-local-update",{detail:{items:e},bubbles:!0,composed:!0}))}render(){return q`
      <div class="shopping-view">
        ${this._useSLM?this._renderSlmMode():this._renderLocalMode()}
      </div>
    `}_renderSlmMode(){return q`
      <div class="slm-card-wrap">
        <div class="slm-host"></div>
      </div>
    `}_renderLocalMode(){const e=this.localItems.some(e=>e.checked),t=this.localItems.filter(e=>!e.checked),i=this.localItems.filter(e=>e.checked);return q`
      <div class="sv-header">
        <span class="sv-list-name">My Shopping List</span>
        <div class="sv-actions">
          ${e?q`
            <button class="sv-btn danger" @click=${this._clearLocalChecked}>
              <ha-icon icon="mdi:delete-sweep-outline"></ha-icon>
              <span>Clear checked</span>
            </button>
          `:""}
          ${this.localItems.length?q`
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

      ${0===this.localItems.length?q`
        <div class="sv-empty">
          <ha-icon icon="mdi:cart-outline"></ha-icon>
          <p>Your shopping list is empty.</p>
          <p class="sv-hint">Add ingredients from any recipe to get started.</p>
        </div>
      `:q`
        <div class="sv-items">
          ${t.map(e=>this._renderLocalRow(e))}
          ${i.length?q`
            <div class="sv-divider-label">Checked</div>
            ${i.map(e=>this._renderLocalRow(e))}
          `:""}
        </div>
      `}
    `}_renderLocalRow(e){const t=[e.amount||"",e.unit||""].filter(Boolean).join(" ");return q`
      <div class="sv-row ${e.checked?"sv-row-checked":""}"
        @click=${()=>this._toggleLocalItem(e.id)}>
        <div class="sv-row-left">
          <div class="cat-dot"></div>
          <span class="row-emoji">📦</span>
        </div>
        <div class="sv-row-mid">
          <span class="sv-item-name">${e.name}</span>
          ${t?q`<span class="sv-item-unit">${t}</span>`:""}
        </div>
        <div class="sv-row-right">
          <div class="sv-checkbox ${e.checked?"checked":""}">
            ${e.checked?q`<ha-icon icon="mdi:check"></ha-icon>`:""}
          </div>
        </div>
      </div>
    `}static styles=c`
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
  `}try{customElements.define("rm-shopping-view",Ns)}catch{}const js="rm_settings",Us="rm_shopping",Ws="rm_recent_recipes",Hs="rm_timers",Zs={theme:"soft",darkMode:"system",fontSize:"medium",columns:3,showFavourites:!0,showPlanner:!0,recentCount:12,timerSound:"beep",keepScreenOn:!1,keepScreenOnMins:30,showUnitConversion:!1},qs={soft:{light:{"--rm-bg-main":"#fafbfc","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#424242","--rm-text-secondary":"#757575","--rm-text-muted":"#9e9e9e","--rm-accent":"#9fa8da","--rm-accent-soft":"rgba(159,168,218,0.15)","--rm-border":"#e8eaf6","--rm-shadow":"0 2px 6px rgba(0,0,0,0.08)"},dark:{"--rm-bg-main":"#14161a","--rm-bg-surface":"#1b1f25","--rm-bg-elevated":"#232833","--rm-text":"#e4e7ec","--rm-text-secondary":"#a8b0bd","--rm-text-muted":"#7a8594","--rm-accent":"#9fa8da","--rm-accent-soft":"rgba(159,168,218,0.18)","--rm-border":"#2b313c","--rm-shadow":"0 2px 6px rgba(0,0,0,0.3)"}},arctic:{light:{"--rm-bg-main":"#f0f4f8","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#1a2332","--rm-text-secondary":"#526070","--rm-text-muted":"#8097aa","--rm-accent":"#2979ff","--rm-accent-soft":"rgba(41,121,255,0.12)","--rm-border":"#dce6f0","--rm-shadow":"0 2px 6px rgba(26,35,50,0.1)"}},meadow:{light:{"--rm-bg-main":"#f4f7f0","--rm-bg-surface":"#fefffe","--rm-bg-elevated":"#fefffe","--rm-text":"#2d3a2a","--rm-text-secondary":"#6b7c64","--rm-text-muted":"#96a98e","--rm-accent":"#4caf50","--rm-accent-soft":"rgba(76,175,80,0.12)","--rm-border":"#dde8d8","--rm-shadow":"0 2px 6px rgba(45,58,42,0.1)"}},blossom:{light:{"--rm-bg-main":"#fdf8fb","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#fff8fc","--rm-text":"#3d1f35","--rm-text-secondary":"#8c5e79","--rm-text-muted":"#b48fa5","--rm-accent":"#c2668a","--rm-accent-soft":"rgba(194,102,138,0.12)","--rm-border":"#f0d6e8","--rm-shadow":"0 2px 6px rgba(61,31,53,0.1)"},dark:{"--rm-bg-main":"#1a0d12","--rm-bg-surface":"#241420","--rm-bg-elevated":"#2e1a28","--rm-text":"#f8d0de","--rm-text-secondary":"#c070a0","--rm-text-muted":"#603050","--rm-accent":"#f48fb1","--rm-accent-soft":"rgba(244,143,177,0.15)","--rm-border":"rgba(248,208,222,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},ocean:{light:{"--rm-bg-main":"#f0f7ff","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#f9fbff","--rm-text":"#1a3a5f","--rm-text-secondary":"#4a6b8c","--rm-text-muted":"#7a9bbd","--rm-accent":"#0077ff","--rm-accent-soft":"rgba(0,119,255,0.12)","--rm-border":"#d0e1f2","--rm-shadow":"0 2px 6px rgba(26,58,95,0.1)"}},midnight:{dark:{"--rm-bg-main":"#0d1117","--rm-bg-surface":"#161b22","--rm-bg-elevated":"#1c2333","--rm-text":"#c9d1d9","--rm-text-secondary":"#8b949e","--rm-text-muted":"#6e7681","--rm-accent":"#58a6ff","--rm-accent-soft":"rgba(88,166,255,0.15)","--rm-border":"#21262d","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},ember:{dark:{"--rm-bg-main":"#111111","--rm-bg-surface":"#1c1a17","--rm-bg-elevated":"#242018","--rm-text":"#f5f0e8","--rm-text-secondary":"#a89880","--rm-text-muted":"#7a6a55","--rm-accent":"#f0a500","--rm-accent-soft":"rgba(240,165,0,0.15)","--rm-border":"rgba(245,240,232,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},neon:{dark:{"--rm-bg-main":"#0a0b10","--rm-bg-surface":"#121420","--rm-bg-elevated":"#1a1d2e","--rm-text":"#e0e0f0","--rm-text-secondary":"#a0a5c0","--rm-text-muted":"#6a6f8e","--rm-accent":"#bb86fc","--rm-accent-soft":"rgba(187,134,252,0.15)","--rm-border":"#2a2d45","--rm-shadow":"0 2px 8px rgba(0,0,0,0.6)"}}},Vs={small:"13px",medium:"15px",large:"17px"};function Ks(e){try{const t=e.map(e=>({...e,savedAt:Date.now()}));localStorage.setItem(Hs,JSON.stringify(t))}catch{}}function Qs(e){const t=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return t>0?`${t}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${i}:${String(r).padStart(2,"0")}`}function Xs(e){try{const t=new(window.AudioContext||window.webkitAudioContext);t.createGain().connect(t.destination);const i=(e,i,r,n=.6)=>{const a=t.createOscillator(),s=t.createGain();a.connect(s),s.connect(t.destination),a.frequency.value=e,s.gain.setValueAtTime(n,t.currentTime+i),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+i+r),a.start(t.currentTime+i),a.stop(t.currentTime+i+r+.05)};if("beep"===e)i(880,0,.15),i(880,.2,.15),i(880,.4,.15);else if("ding"===e)i(1318,0,.8,.5),i(1047,.1,.6,.3);else if("alarm"===e)for(let e=0;e<5;e++)i(880,.25*e,.12),i(660,.25*e+.13,.1)}catch{}}class Gs extends de{static properties={hass:{type:Object},_config:{type:Object},_view:{type:String},_recipes:{type:Array},_tags:{type:Array},_selectedRecipe:{type:Object},_loading:{type:Boolean},_error:{type:String},_searchQuery:{type:String},_activeTag:{type:String},_shoppingLists:{type:Array},_slmAvailable:{type:Boolean},_localShoppingItems:{type:Array},_settings:{type:Object},_wide:{type:Boolean},_sidebarCollapsed:{type:Boolean},_gridScrollPos:{type:Number},_recentRecipeIds:{type:Array},_timers:{type:Array},_timerAlarm:{type:Object},_timerAlarmQueue:{type:Array},_timersPrevView:{type:String},_customTimerInput:{type:String},_hdrStarHover:{type:Number},_mobileMenuOpen:{type:Boolean},_navDirection:{type:String},_closingDetail:{type:Boolean}};constructor(){super(),this._view="grid",this._recipes=[],this._tags=[],this._selectedRecipe=null,this._loading=!1,this._error=null,this._searchQuery="",this._activeTag=null,this._shoppingLists=[],this._slmAvailable=!1,this._localShoppingItems=[],this._settings=function(){try{const e=localStorage.getItem(js);return e?{...Zs,...JSON.parse(e)}:{...Zs}}catch{return{...Zs}}}(),this._wide=!1,this._sidebarCollapsed=!1,this._gridScrollPos=0,this._recentRecipeIds=function(){try{const e=localStorage.getItem(Ws);return e?JSON.parse(e):[]}catch{return[]}}(),this._timers=function(){try{const e=localStorage.getItem(Hs);if(!e)return[];const t=JSON.parse(e),i=Date.now();return t.map(e=>{const t=e.savedAt?Math.floor((i-e.savedAt)/1e3):0,r=Math.max(0,(e.remaining??0)-(e.running?t:0));return{...e,remaining:r,savedAt:void 0}}).filter(e=>e.remaining>0)}catch{return[]}}(),this._timerAlarm=null,this._timerAlarmQueue=[],this._timersPrevView=null,this._customTimerInput="",this._hdrStarHover=0,this._mobileMenuOpen=!1,this._navDirection="forward",this._closingDetail=!1,this._alarmLoopActive=!1,this._alarmInterval=null,this._alarmTimeout=null,this._alarmAudio=null,this._unsubscribe=null,this._darkModeQuery=null,this._resizeObserver=null,this._timerTick=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("recipe-manager-card-editor")}static getStubConfig(){return{}}getCardSize(){return 6}_updateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{const e=this.getBoundingClientRect().top,t=window.innerHeight-Math.max(e,0);t>100&&(this.style.height=`${t}px`)}))}connectedCallback(){super.connectedCallback(),this._darkModeQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._darkModeQuery.addEventListener("change",this._onSystemDark),this._applyTheme(),this._resizeObserver=new ResizeObserver(e=>{const t=e[0]?.contentRect?.width??0;this._wide=t>=620}),this._resizeObserver.observe(this),this._onViewportResize=()=>this._updateHeight(),window.visualViewport?.addEventListener("resize",this._onViewportResize),window.addEventListener("resize",this._onViewportResize),this._updateHeight(),this._timerTick=setInterval(()=>this._tickTimers(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._darkModeQuery?.removeEventListener("change",this._onSystemDark),this._resizeObserver?.disconnect(),window.visualViewport?.removeEventListener("resize",this._onViewportResize),window.removeEventListener("resize",this._onViewportResize),this._timerTick&&(clearInterval(this._timerTick),this._timerTick=null),this._timerAlarm&&(this._stopAlarmLoop(),this._timerAlarm=null),this._timerAlarmQueue=[],Ks(this._timers)}_onSystemDark=()=>{"system"===this._settings.darkMode&&this._applyTheme()};updated(e){e.has("hass")&&this.hass&&!this._api&&(this._api=new ge(this.hass),this._init()),e.has("hass")&&this._api&&(this._api.hass=this.hass),e.has("_settings")&&this._applyTheme()}_applyTheme(){const e=this._settings,t=qs[e.theme]??qs.soft,i=!t.light,r=!t.dark;let n=i;i||r?r&&(n=!1):n="on"===e.darkMode||"off"!==e.darkMode&&(this._darkModeQuery?.matches??!1);const a=n?t.dark??t.light:t.light??t.dark;for(const[e,t]of Object.entries(a))this.style.setProperty(e,t);this.style.setProperty("--rm-font-size-base",Vs[e.fontSize]??"15px"),this.style.setProperty("--rm-grid-columns",`repeat(${e.columns??3}, minmax(0, 1fr))`)}async _init(){this._loading=!0,this._loadLocalShopping();try{await Promise.all([this._loadRecipes(),this._loadTags(),this._loadShoppingLists()]),await this._subscribe()}catch(e){this._error=e.message||"Failed to load recipes"}finally{this._loading=!1}}_loadLocalShopping(){try{const e=localStorage.getItem(Us);this._localShoppingItems=e?JSON.parse(e):[]}catch{this._localShoppingItems=[]}}_saveLocalShopping(){try{localStorage.setItem(Us,JSON.stringify(this._localShoppingItems))}catch{}}async _loadRecipes(){const e=await this._api.getAllRecipes();this._recipes=e?.recipes??[]}async _loadTags(){const e=await this._api.getTags();this._tags=e?.tags??[]}async _loadShoppingLists(){try{this._shoppingLists=(await this._api.getShoppingLists())?.lists??[],this._slmAvailable=!0}catch{this._shoppingLists=[],this._slmAvailable=!1}}async _subscribe(){if(!this._unsubscribe)try{this._unsubscribe=await this._api.subscribe(e=>{const t=e.event_type??e.event;/recipe_(added|updated|deleted)/.test(t)&&(this._loadRecipes(),this._loadTags())})}catch{}}get _filteredRecipes(){let e=this._recipes;if(this._activeTag&&(e=e.filter(e=>e.tags?.includes(this._activeTag)||e.courses?.includes(this._activeTag)||e.categories?.includes(this._activeTag)||e.collections?.includes(this._activeTag))),this._searchQuery.trim()){const t=this._searchQuery.trim().toLowerCase();e=e.filter(e=>e.name?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tags?.some(e=>e.toLowerCase().includes(t)))}return e}get _recentRecipes(){const e=this._settings.recentCount??12;return this._recentRecipeIds.slice(0,e).map(e=>this._recipes.find(t=>t.id===e)).filter(Boolean)}_handleSettingsChange(e){this._settings=e.detail.settings,function(e){try{localStorage.setItem(js,JSON.stringify(e))}catch{}}(this._settings)}_tickTimers(){if(!this._timers.length)return;let e=!1;const t=[],i=this._timers.map(i=>{if(!i.running||i.remaining<=0)return i;const r=i.remaining-1;return e=!0,r<=0&&t.push({id:i.id,label:i.label}),{...i,remaining:r,running:r>0}});e&&(this._timers=i,Ks(this._timers)),t.length&&(this._timerAlarm||(this._timerAlarm=t.shift(),this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)),t.length&&(this._timerAlarmQueue=[...this._timerAlarmQueue,...t]))}_startTimer(e,t){const i=Date.now().toString(36);this._timers=[...this._timers,{id:i,label:t||`${Math.floor(e/60)} min timer`,total:e,remaining:e,running:!0}],Ks(this._timers)}_stopTimer(e){this._timers=this._timers.filter(t=>t.id!==e),Ks(this._timers)}_pauseTimer(e){this._timers=this._timers.map(t=>t.id===e?{...t,running:!t.running}:t),Ks(this._timers)}_addTimeToTimer(e,t){this._timers=this._timers.map(i=>i.id===e?{...i,remaining:i.remaining+t,total:i.total+t,running:!0}:i),this._timerAlarm?.id===e?(this._stopAlarmLoop(),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)):this._timerAlarmQueue=this._timerAlarmQueue.filter(t=>t.id!==e),Ks(this._timers)}_dismissAlarm(){this._timerAlarm&&(this._stopAlarmLoop(),this._stopTimer(this._timerAlarm.id),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile))}_startAlarmLoop(e,t){if(this._stopAlarmLoop(),"none"!==e)if("file"===e&&t){this._alarmLoopActive=!0;const e=()=>{this._alarmLoopActive&&(this._alarmAudio=new Audio(t),this._alarmAudio.onended=()=>{this._alarmLoopActive&&(this._alarmTimeout=setTimeout(e,2e3))},this._alarmAudio.onerror=()=>{this._alarmLoopActive&&(this._alarmTimeout=setTimeout(()=>Xs("beep"),2e3))},this._alarmAudio.play().catch(()=>{}))};e()}else Xs(e),this._alarmInterval=setInterval(()=>Xs(e),4e3)}_stopAlarmLoop(){this._alarmLoopActive=!1,this._alarmInterval&&(clearInterval(this._alarmInterval),this._alarmInterval=null),this._alarmTimeout&&(clearTimeout(this._alarmTimeout),this._alarmTimeout=null),this._alarmAudio&&(this._alarmAudio.pause(),this._alarmAudio.onended=null,this._alarmAudio.onerror=null,this._alarmAudio=null)}_handleStartTimer(e){const{seconds:t,label:i}=e.detail;this._startTimer(t,i)}_handleSearch(e){this._searchQuery=e.detail?.query??""}_handleTagFilter(e){const t=e.detail?.tag;this._activeTag=this._activeTag===t?null:t}_handleBack(){this._closingDetail||("detail"===this._view&&this._selectedRecipe&&!this._closingDetail?(this._closingDetail=!0,this._view="grid"):(this._navDirection="back",this._view="grid",this._selectedRecipe=null,this._closingDetail=!1))}_onDetailTransitionEnd(e){e.target===e.currentTarget&&"transform"===e.propertyName&&this._closingDetail&&(this._closingDetail=!1,this._selectedRecipe=null)}_handleShowGrid(){this._navDirection="back",this._view="grid",this._selectedRecipe=null}_handleShowPlanner(){this._navDirection="forward",this._view="planner"}_handleOpenRecipe(e){const t=this.shadowRoot?.querySelector("rm-recipe-grid");if(t){const e=t.shadowRoot?.querySelector(".grid-scroll");this._gridScrollPos=e?.scrollTop??0}const i=e.detail?.recipe;if(this._closingDetail=!1,this._navDirection="forward",this._selectedRecipe=i,this._view="detail",i?.id){const e=[i.id,...this._recentRecipeIds.filter(e=>e!==i.id)].slice(0,50);this._recentRecipeIds=e,function(e){try{localStorage.setItem(Ws,JSON.stringify(e))}catch{}}(e)}}async _handleToggleFavourite(e){const{recipeId:t}=e.detail;await this._api.toggleFavourite(t),await this._loadRecipes(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??this._selectedRecipe)}async _handleDeleteRecipe(e){await this._api.deleteRecipe(e.detail.recipeId),await this._loadRecipes(),await this._loadTags(),this._navDirection="back",this._view="grid",this._selectedRecipe=null}async _handleUpdateRecipe(e){const{recipeId:t,data:i}=e.detail;await this._api.updateRecipe(t,i),await this._loadRecipes(),await this._loadTags(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??null)}async _handleAddRecipe(e){await this._api.addRecipe(e.detail.data),this._navDirection="back",this._view="grid",await this._loadRecipes(),await this._loadTags()}async _handleImportDone(){this._navDirection="back",this._view="grid",await this._loadRecipes(),await this._loadTags()}async _handleAddToShopping(e){const{ingredients:t,listId:i,recipeName:r}=e.detail;if(this._slmAvailable&&i)try{(await this._api.addIngredientsToShoppingList(i,t,r)).filter(e=>!e.success).length&&console.warn("Some ingredients failed to add to SLM")}catch(e){console.error("Shopping list error:",e)}else{const e=t.map(e=>({id:Math.random().toString(36).slice(2,10),name:e.name,amount:e.amount||null,unit:e.unit||null,checked:!1}));this._localShoppingItems=[...this._localShoppingItems,...e],this._saveLocalShopping()}}_handleShoppingLocalUpdate(e){this._localShoppingItems=e.detail.items,this._saveLocalShopping()}_renderStars(e){const t=e||0,i=this._hdrStarHover,r=i>0?i:t;return q`
      <div class="header-stars"
        @mouseleave=${()=>{this._hdrStarHover=0}}
        title="${i>0?`Set rating: ${i}★`:t>0?`Rating: ${t}★ — click to change`:"Click to rate"}">
        ${[1,2,3,4,5].map(e=>q`
          <span class="hdr-star ${e<=r?"filled":""}"
            @mouseover=${()=>{this._hdrStarHover=e}}
            @click=${()=>this._handleRateRecipe(e)}>★</span>
        `)}
      </div>
    `}async _handleRateRecipe(e){if(!this._selectedRecipe)return;const t=this._selectedRecipe.rating===e?null:e;this._hdrStarHover=0,await this._handleUpdateRecipe({detail:{recipeId:this._selectedRecipe.id,data:{rating:t}}})}_renderSidebar(){const e=this._view,t=this._sidebarCollapsed,i=(i,r,n,a=!1)=>q`
      <button
        class="sb-item ${e===n?"active":""} ${a?"placeholder":""}"
        title="${a?r+" — coming soon":r}"
        @click=${a?void 0:()=>{this._navDirection="forward",this._view=n,this._selectedRecipe=null}}
        ?disabled=${a}
      >
        <ha-icon icon="${i}"></ha-icon>
        ${t?"":q`<span>${r}</span>`}
      </button>
    `;return q`
      <nav class="rm-sidebar ${t?"collapsed":""}">
        <div class="sb-top">
          <div class="sb-logo-row">
            <button class="sb-collapse-btn" @click=${()=>{this._sidebarCollapsed=!this._sidebarCollapsed}}
              title="${t?"Expand sidebar":"Collapse sidebar"}">
              <ha-icon icon="${t?"mdi:menu-close":"mdi:menu-open"}"></ha-icon>
            </button>
            ${t?"":q`
              <div class="sb-logo">
                <ha-icon icon="mdi:chef-hat"></ha-icon>
                <span>Recipes</span>
              </div>
            `}
          </div>

          ${t?q`
            <button class="sb-icon-only-btn" @click=${()=>{this._view="add"}} title="New Recipe">
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          `:q`
            <div class="sb-search">
              <ha-icon icon="mdi:magnify" class="sb-search-icon"></ha-icon>
              <input
                class="sb-search-input"
                type="text"
                placeholder="Search…"
                .value=${this._searchQuery}
                @input=${e=>{this._searchQuery=e.target.value,this._navDirection="back",this._view="grid"}}
              />
              ${this._searchQuery?q`
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
            ${t?"":q`<span>Timers</span>`}
            ${this._timers.length?q`<span class="sb-timer-badge">${this._timers.length}</span>`:""}
          </button>
        </div>

        <div class="sb-bottom">
          <button class="sb-item placeholder" disabled title="Sync — coming soon">
            <ha-icon icon="mdi:cloud-sync-outline"></ha-icon>${t?"":q`<span>Sync</span>`}
          </button>
          <button class="sb-item placeholder" disabled title="Help — coming soon">
            <ha-icon icon="mdi:help-circle-outline"></ha-icon>${t?"":q`<span>Help</span>`}
          </button>
          <button class="sb-item ${"settings"===e?"active":""}"
            @click=${()=>{this._view="settings"}}>
            <ha-icon icon="mdi:cog-outline"></ha-icon>${t?"":q`<span>Settings</span>`}
          </button>
        </div>
      </nav>
    `}_renderHeader(){const e=("detail"===this._view||this._closingDetail)&&this._selectedRecipe,t="settings"===this._view,i="add"===this._view,r="timers"===this._view,n=this._wide,a=t?"Settings":i?"New Recipe":r?"Timers":e?this._selectedRecipe.name:"planner"===this._view?"Meal Planner":"shopping"===this._view?"Shopping List":"Recipes";return q`
      <div class="rm-header">
        <div class="rm-header-left">
          ${e||i?q`
            <button class="icon-btn" @click=${this._handleBack} title="Back">
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:r&&"detail"===this._timersPrevView?q`
            <button class="icon-btn"
              @click=${()=>{this._navDirection="back",this._view="detail",this._timersPrevView=null}}
              title="Back to recipe">
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:n?"":q`
            ${"grid"===this._view||t||r?q`
              <ha-icon icon="mdi:chef-hat" class="rm-logo"></ha-icon>
            `:q`
              <button class="icon-btn" @click=${this._handleShowGrid}>
                <ha-icon icon="mdi:arrow-left"></ha-icon>
              </button>
            `}
          `}
          <span class="rm-title">${a}</span>
        </div>

        <div class="rm-header-right">
          <!-- Timer pills (compact, shown when timers are running, not in timer view) -->
          ${this._timers.length&&"timers"!==this._view?q`
            <div class="timer-pills" @click=${()=>{this._navDirection="forward",this._timersPrevView=this._view,this._view="timers"}}>
              ${this._timers.slice(0,3).map(e=>q`
                <div class="timer-pill ${e.running?"":"paused"}">
                  <ha-icon icon="mdi:timer-outline"></ha-icon>
                  <span>${Qs(e.remaining)}</span>
                </div>
              `)}
              ${this._timers.length>3?q`<span class="timer-more">+${this._timers.length-3}</span>`:""}
            </div>
          `:""}

          ${e?this._renderStars(this._selectedRecipe.rating):""}

          ${t||i||r?q`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          `:n?"":q`
            <button class="icon-btn"
              @click=${()=>{this._mobileMenuOpen=!this._mobileMenuOpen}}
              title="${this._mobileMenuOpen?"Close menu":"Menu"}">
              <ha-icon icon="${this._mobileMenuOpen?"mdi:close":"mdi:menu"}"></ha-icon>
            </button>
          `}
        </div>
      </div>
    `}_renderBody(){const e=this._settings;if("settings"===this._view)return q`
      <rm-settings-view
        .settings=${e}
        @rm-settings-change=${this._handleSettingsChange}
      ></rm-settings-view>
    `;if("add"===this._view)return q`
      <rm-add-recipe-dialog
        .api=${this._api}
        .asPanel=${!0}
        .inlineMode=${!0}
        @rm-add-recipe=${this._handleAddRecipe}
        @rm-import-done=${this._handleImportDone}
        @rm-close=${()=>{this._navDirection="back",this._view="grid"}}
      ></rm-add-recipe-dialog>
    `;if("timers"===this._view)return this._renderTimersView();if("planner"===this._view)return q`
      <rm-meal-planner
        .api=${this._api}
        .recipes=${this._recipes}
        @rm-open-recipe=${this._handleOpenRecipe}
      ></rm-meal-planner>
    `;if("shopping"===this._view)return q`
      <rm-shopping-view
        .hass=${this.hass}
        .slmAvailable=${this._slmAvailable}
        .shoppingLists=${this._shoppingLists}
        .api=${this._api}
        .localItems=${this._localShoppingItems}
        .settings=${this._settings}
        @rm-shopping-local-update=${this._handleShoppingLocalUpdate}
      ></rm-shopping-view>
    `;if(this._loading)return q`
      <div class="rm-loading"><ha-circular-progress active size="large"></ha-circular-progress></div>
    `;if(this._error)return q`
      <div class="rm-error">
        <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
        <p>${this._error}</p>
        <button class="text-btn" @click=${this._init.bind(this)}>Retry</button>
      </div>
    `;const t=("detail"===this._view||this._closingDetail)&&this._selectedRecipe;return q`
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
          ${t?q`
            <rm-recipe-detail
              .recipe=${this._selectedRecipe}
              .api=${this._api}
              .settings=${e}
              .shoppingLists=${this._shoppingLists}
              .slmAvailable=${this._slmAvailable}
              @rm-back=${this._handleBack}
              @rm-toggle-favourite=${this._handleToggleFavourite}
              @rm-delete-recipe=${this._handleDeleteRecipe}
              @rm-update-recipe=${this._handleUpdateRecipe}
              @rm-add-to-shopping=${this._handleAddToShopping}
              @rm-start-timer=${this._handleStartTimer}
            ></rm-recipe-detail>
          `:""}
        </div>
      </div>
    `}_renderTimersView(){const e=this._customTimerInput.trim();return q`
      <div class="timers-view">
        ${0===this._timers.length?q`
          <div class="timer-empty">
            <ha-icon icon="mdi:timer-off-outline"></ha-icon>
            <p>No active timers.</p>
            <p class="timer-empty-hint">Tap a highlighted time in a recipe's directions to start one.</p>
          </div>
        `:q`
          <div class="timer-list">
            ${this._timers.map(e=>q`
              <div class="timer-item">
                <div class="timer-info">
                  <span class="timer-label">${e.label}</span>
                  <div class="timer-bar-wrap">
                    <div class="timer-bar" style="width:${Math.round(e.remaining/e.total*100)}%"></div>
                  </div>
                </div>
                <div class="timer-time">${Qs(e.remaining)}</div>
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
    `}_renderTimerAlarm(){const e=this._timerAlarm;return e?q`
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
    `:""}_renderBottomNav(){const e=this._view,t=(t,i,r,n)=>q`
      <button class="rm-bn-btn ${e===r?"active":""}"
        @click=${n||(()=>{this._navDirection="forward",this._view=r,this._selectedRecipe=null})}
        title="${i}">
        <ha-icon icon="${t}"></ha-icon>
        <span>${i}</span>
      </button>
    `;return q`
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
          ${this._timers.length?q`<span class="rm-bn-badge">${this._timers.length}</span>`:""}
        </button>
      </nav>
    `}_renderMobileMenu(){return q`
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
    `}render(){const e=this._wide;return q`
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
    `}static styles=c`
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
  `}try{customElements.define("recipe-manager-card",Gs)}catch{}window.customCards=window.customCards||[],window.customCards.push({type:"recipe-manager-card",name:"Recipe Manager",description:"Manage, browse, and plan meals with your recipe collection.",preview:!1});
