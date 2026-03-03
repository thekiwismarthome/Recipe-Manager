/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new s(r,e,i)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!o(e,t),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const n=r?.call(this);s?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=r;const n=s.fromAttribute(t,e.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(void 0!==e){const n=this.constructor;if(!1===r&&(s=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??_)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,g?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,k=e=>e,$=w.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+A,C=`<${E}>`,I=document,R=()=>I.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,F="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,L=/>/g,B=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,j=/"/g,U=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Z=new WeakMap,G=I.createTreeWalker(I,129);function K(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const q=(e,t)=>{const i=e.length-1,r=[];let s,n=2===t?"<svg>":3===t?"<math>":"",a=D;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===D?"!--"===l[1]?a=P:void 0!==l[1]?a=L:void 0!==l[2]?(U.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=B):void 0!==l[3]&&(a=B):a===B?">"===l[0]?(a=s??D,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?B:'"'===l[3]?j:N):a===j||a===N?a=B:a===P||a===L?a=D:(a=B,s=void 0);const h=a===B&&e[t+1].startsWith("/>")?" ":"";n+=a===D?i+C:c>=0?(r.push(o),i.slice(0,c)+z+i.slice(c)+A+h):i+A+(-2===c?t:h)}return[K(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Y{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const a=e.length-1,o=this.parts,[l,c]=q(e,t);if(this.el=Y.createElement(l,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=G.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(z)){const t=c[n++],i=r.getAttribute(e).split(A),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?ee:"?"===a[1]?te:"@"===a[1]?ie:J}),r.removeAttribute(e)}else e.startsWith(A)&&(o.push({type:6,index:s}),r.removeAttribute(e));if(U.test(r.tagName)){const e=r.textContent.split(A),t=e.length-1;if(t>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],R()),G.nextNode(),o.push({type:2,index:++s});r.append(e[t],R())}}}else if(8===r.nodeType)if(r.data===E)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(A,e+1));)o.push({type:7,index:s}),e+=A.length-1}s++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,r){if(t===W)return t;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=T(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(t=Q(e,s._$AS(e,t.values),s,r)),t}class V{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??I).importNode(t,!0);G.currentNode=r;let s=G.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new X(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new re(s,this,e)),this._$AV.push(t),o=i[++a]}n!==o?.index&&(s=G.nextNode(),n++)}return G.currentNode=I,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),T(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new V(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new Y(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new X(this.O(R()),this.O(R()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(void 0===s)e=Q(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const r=e;let a,o;for(e=s[0],a=0;a<s.length-1;a++)o=Q(this,r[i+a],t,a),o===W&&(o=this._$AH[a]),n||=!T(o)||o!==this._$AH[a],o===H?e=H:e!==H&&(e+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}class te extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}}class ie extends J{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??H)===W)return;const i=this._$AH,r=e===H&&i!==H||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const se=w.litHtmlPolyfillSupport;se?.(Y,X),(w.litHtmlVersions??=[]).push("3.3.2");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ae extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=i?.renderBefore??null;r._$litPart$=s=new X(t.insertBefore(R(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const oe=ne.litElementPolyfillSupport;oe?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");class le{constructor(e){this.hass=e}subscribe(e){return this.hass.connection.subscribeMessage(e,{type:"recipe_manager/subscribe"})}async getAllRecipes(){return this.hass.callWS({type:"recipe_manager/recipes/get_all"})}async getRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/get",recipe_id:e})}async scrapeRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/scrape",url:e})}async addRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/add",...e})}async updateRecipe(e,t){return this.hass.callWS({type:"recipe_manager/recipes/update",recipe_id:e,...t})}async deleteRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/delete",recipe_id:e})}async toggleFavourite(e){return this.hass.callWS({type:"recipe_manager/recipes/toggle_favourite",recipe_id:e})}async downloadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/download_image",recipe_id:e,image_url:t})}async getTags(){return this.hass.callWS({type:"recipe_manager/tags/get_all"})}async getMealPlan(e){const t={type:"recipe_manager/meal_plan/get"};return e&&(t.week_start=e),this.hass.callWS(t)}async addToMealPlan(e,t,i,r=1,s=null){const n={type:"recipe_manager/meal_plan/add",recipe_id:e,date:t,meal_type:i,servings:r};return s&&(n.notes=s),this.hass.callWS(n)}async removeFromMealPlan(e){return this.hass.callWS({type:"recipe_manager/meal_plan/remove",entry_id:e})}async clearMealPlanWeek(e){return this.hass.callWS({type:"recipe_manager/meal_plan/clear",week_start:e})}async addIngredientsToShoppingList(e,t){const i=[];for(const r of t)try{const t=await this.hass.callWS({type:"shopping_list_manager/items/add",list_id:e,name:r.name,quantity:r.amount&&parseFloat(r.amount)||1,unit:r.unit||"units",category_id:"other"});i.push({success:!0,name:r.name,result:t})}catch(e){i.push({success:!1,name:r.name,error:e.message})}return i}async getShoppingLists(){return this.hass.callWS({type:"shopping_list_manager/lists/get_all"})}async getSlmItems(e){return this.hass.callWS({type:"shopping_list_manager/items/get",list_id:e})}async checkSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/check",item_id:e,checked:t})}async clearSlmChecked(e){return this.hass.callWS({type:"shopping_list_manager/items/clear_checked",list_id:e})}async importRecipeKeeper(e){return this.hass.callWS({type:"recipe_manager/import/recipe_keeper",html_content:e})}async uploadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/upload_image",recipe_id:e,image_data:t})}}class ce extends ae{static properties={recipes:{type:Array},allRecipes:{type:Array},tags:{type:Array},searchQuery:{type:String},activeTag:{type:String},columns:{type:Number},showFavourites:{type:Boolean}};constructor(){super(),this.recipes=[],this.allRecipes=[],this.tags=[],this.searchQuery="",this.activeTag=null,this.columns=3,this.showFavourites=!0}_handleSearchInput(e){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}_handleClearSearch(){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:""},bubbles:!0,composed:!0}))}_handleTagClick(e){this.dispatchEvent(new CustomEvent("rm-tag-filter",{detail:{tag:e},bubbles:!0,composed:!0}))}_handleOpenRecipe(e){this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:e},bubbles:!0,composed:!0}))}_handleToggleFavourite(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:t.id},bubbles:!0,composed:!0}))}_formatTime(e){if(!e)return null;if(e<60)return`${e}m`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_renderRecipeCard(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return M`
      <div class="recipe-card" @click=${()=>this._handleOpenRecipe(e)}>
        <div class="recipe-thumb">
          ${e.image_url?M`
            <img src="${e.image_url}" alt="${e.name}" loading="lazy" />
          `:M`
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
          ${e.description?M`
            <p class="recipe-desc">${e.description}</p>
          `:""}
          <div class="recipe-meta">
            ${t?M`
              <span class="meta-chip">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._formatTime(t)}
              </span>
            `:""}
            ${e.servings?M`
              <span class="meta-chip">
                <ha-icon icon="mdi:account-group-outline"></ha-icon>
                ${e.servings}
              </span>
            `:""}
            ${e.tags?.length?M`
              <span class="meta-chip tag-chip">${e.tags[0]}</span>
            `:""}
          </div>
        </div>
      </div>
    `}render(){const e=this.recipes.filter(e=>e.is_favourite),t=this.showFavourites&&!this.activeTag&&!this.searchQuery&&e.length>0,i=t?this.recipes.filter(e=>!e.is_favourite):this.recipes,r=`grid-template-columns: var(--rm-grid-columns, repeat(${this.columns}, minmax(0, 1fr)));`;return M`
      <div class="grid-container">
        <!-- Search bar -->
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
            ${this.searchQuery?M`
              <button class="clear-btn" @click=${this._handleClearSearch}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            `:""}
          </div>
        </div>

        <!-- Tag chips -->
        ${this.tags.length?M`
          <div class="tags-row">
            ${this.tags.map(e=>M`
              <button
                class="tag-btn ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}</button>
            `)}
          </div>
        `:""}

        <!-- Recipe content -->
        <div class="grid-scroll">
          ${0===this.recipes.length?M`
            <div class="empty-state">
              <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
              <p>${this.searchQuery||this.activeTag?"No matching recipes":"No recipes yet — add one!"}</p>
            </div>
          `:M`
            <!-- Favourites section -->
            ${t?M`
              <div class="section-label">Favourites</div>
              <div class="recipe-grid" style=${r}>
                ${e.map(e=>this._renderRecipeCard(e))}
              </div>
              ${i.length?M`<div class="section-label">All Recipes</div>`:""}
            `:""}

            <!-- Main grid -->
            <div class="recipe-grid" style=${r}>
              ${i.map(e=>this._renderRecipeCard(e))}
            </div>
          `}
        </div>
      </div>
    `}static styles=n`
    :host { display: block; height: 100%; }

    .grid-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    /* Search */
    .search-row {
      padding: 10px 14px 6px;
      flex-shrink: 0;
    }
    .search-wrap {
      display: flex;
      align-items: center;
      background: var(--rm-surface, #2c2c2e);
      border-radius: 10px;
      padding: 0 10px;
      gap: 8px;
    }
    .search-icon { color: var(--rm-text-secondary, #8e8e93); --mdc-icon-size: 18px; }
    .search-input {
      flex: 1;
      background: none;
      border: none;
      outline: none;
      color: var(--rm-text, #e5e5ea);
      font-size: 14px;
      padding: 9px 0;
    }
    .search-input::placeholder { color: var(--rm-text-secondary, #8e8e93); }
    .clear-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--rm-text-secondary, #8e8e93);
      padding: 2px;
      display: flex;
      align-items: center;
    }
    .clear-btn ha-icon { --mdc-icon-size: 16px; }

    /* Tags */
    .tags-row {
      display: flex;
      gap: 6px;
      padding: 4px 14px 8px;
      overflow-x: auto;
      flex-shrink: 0;
      scrollbar-width: none;
    }
    .tags-row::-webkit-scrollbar { display: none; }
    .tag-btn {
      background: var(--rm-surface, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      border-radius: 20px;
      color: var(--rm-text-secondary, #8e8e93);
      font-size: 12px;
      padding: 4px 10px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .tag-btn.active {
      background: var(--rm-accent-soft, rgba(255,107,53,0.15));
      border-color: var(--rm-accent, #ff6b35);
      color: var(--rm-accent, #ff6b35);
    }

    /* Grid scroll area */
    .grid-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 4px 14px 16px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border, rgba(255,255,255,0.08)) transparent;
    }

    .section-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--rm-text-secondary, #8e8e93);
      margin: 8px 0 6px;
    }

    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr)); /* overridden inline */
      gap: 12px;
      margin-bottom: 12px;
    }

    /* Recipe card */
    .recipe-card {
      background: var(--rm-surface, #2c2c2e);
      border-radius: var(--rm-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.15s, box-shadow 0.15s;
      border: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }
    .recipe-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--rm-shadow, 0 2px 8px rgba(0,0,0,0.3));
    }

    .recipe-thumb {
      position: relative;
      aspect-ratio: 4/3;
      background: var(--rm-border, rgba(255,255,255,0.08));
      overflow: hidden;
    }
    .recipe-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .recipe-thumb-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--rm-text-secondary, #8e8e93);
    }
    .recipe-thumb-placeholder ha-icon { --mdc-icon-size: 36px; }

    .fav-btn {
      position: absolute;
      top: 6px;
      right: 6px;
      background: rgba(0,0,0,0.5);
      border: none;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.7);
      transition: color 0.15s;
      padding: 0;
    }
    .fav-btn ha-icon { --mdc-icon-size: 16px; }
    .fav-btn.active { color: var(--error-color, #cf6679); }

    .recipe-info {
      padding: 8px 10px 10px;
    }
    .recipe-name {
      margin: 0 0 3px;
      font-size: 14px;
      font-weight: 600;
      color: var(--rm-text, #e5e5ea);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .recipe-desc {
      margin: 0 0 6px;
      font-size: 12px;
      color: var(--rm-text-secondary, #8e8e93);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .recipe-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-size: 11px;
      color: var(--rm-text-secondary, #8e8e93);
      background: rgba(255,255,255,0.06);
      border-radius: 6px;
      padding: 2px 6px;
    }
    .meta-chip ha-icon { --mdc-icon-size: 12px; }
    .tag-chip {
      background: var(--rm-accent-soft, rgba(255,107,53,0.15));
      color: var(--rm-accent, #ff6b35);
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 20px;
      gap: 12px;
      color: var(--rm-text-secondary, #8e8e93);
      text-align: center;
    }
    .empty-state ha-icon { --mdc-icon-size: 56px; opacity: 0.4; }
    .empty-state p { margin: 0; font-size: 15px; }
  `}customElements.define("rm-recipe-grid",ce);const de=[{key:"calories",label:"Calories",unit:"kcal",bold:!0},{key:"fat",label:"Total Fat",unit:"g"},{key:"saturated_fat",label:"Saturated Fat",unit:"g",indent:!0},{key:"cholesterol",label:"Cholesterol",unit:"mg"},{key:"sodium",label:"Sodium",unit:"mg"},{key:"carbohydrates",label:"Total Carbohydrate",unit:"g"},{key:"fiber",label:"Dietary Fiber",unit:"g",indent:!0},{key:"sugar",label:"Total Sugars",unit:"g",indent:!0},{key:"protein",label:"Protein",unit:"g"}];class he extends ae{static properties={recipe:{type:Object},api:{type:Object},shoppingLists:{type:Array},slmAvailable:{type:Boolean},_editing:{type:Boolean},_editData:{type:Object},_servingMult:{type:Number},_activeTab:{type:String},_showShoppingPicker:{type:Boolean},_selectedListId:{type:String},_checkedIngredients:{type:Object},_shoppingAdding:{type:Boolean},_shoppingResult:{type:String},_confirmDelete:{type:Boolean},_downloading:{type:Boolean},_hoverRating:{type:Number}};constructor(){super(),this.recipe=null,this.api=null,this.shoppingLists=[],this.slmAvailable=!1,this._editing=!1,this._editData={},this._servingMult=1,this._activeTab="ingredients",this._showShoppingPicker=!1,this._selectedListId="",this._checkedIngredients=null,this._shoppingAdding=!1,this._shoppingResult=null,this._confirmDelete=!1,this._downloading=!1,this._hoverRating=0}updated(e){e.has("recipe")&&this.recipe&&(this._servingMult=1,this._editing=!1,this._confirmDelete=!1,this._shoppingResult=null,this._showShoppingPicker=!1,this._checkedIngredients=null),e.has("shoppingLists")&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"")}_formatTime(e){if(!e)return null;if(e<60)return`${e} min`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_scaleAmount(e){if(!e||isNaN(parseFloat(e)))return e;const t=parseFloat(e)*this._servingMult;return Number.isInteger(t)?String(t):t.toFixed(1).replace(/\.0$/,"")}_startEdit(){const e=this.recipe.nutrition||{};this._editData={name:this.recipe.name||"",description:this.recipe.description||"",source_url:this.recipe.source_url||"",servings:this.recipe.servings||"",prep_time:this.recipe.prep_time||"",cook_time:this.recipe.cook_time||"",tags:(this.recipe.tags||[]).join(", "),courses:(this.recipe.courses||[]).join(", "),categories:(this.recipe.categories||[]).join(", "),collections:(this.recipe.collections||[]).join(", "),notes:this.recipe.notes||"",rating:this.recipe.rating||0,cal:e.calories||"",fat:e.fat||"",satf:e.saturated_fat||"",chol:e.cholesterol||"",sod:e.sodium||"",carb:e.carbohydrates||"",fib:e.fiber||"",sug:e.sugar||"",prot:e.protein||""},this._editing=!0}_cancelEdit(){this._editing=!1,this._editData={}}_handleEditField(e,t){this._editData={...this._editData,[e]:t}}async _saveEdit(){const e=this._editData,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={},r={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"};let s=!1;for(const[t,n]of Object.entries(r))""!==e[t]&&null!=e[t]&&(i[n]=e[t],s=!0);const n={name:e.name,description:e.description,source_url:e.source_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),notes:e.notes,rating:e.rating||null,nutrition:s?i:null};this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:n},bubbles:!0,composed:!0})),this._editing=!1}_handleToggleFav(){this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}_handleSetRating(e){const t=this.recipe.rating===e?null:e;this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{rating:t}},bubbles:!0,composed:!0}))}async _handleDownloadImage(){if(this.recipe.image_url){this._downloading=!0;try{const e=await this.api.downloadRecipeImage(this.recipe.id,this.recipe.image_url);e?.local_url&&this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e.local_url}},bubbles:!0,composed:!0}))}catch(e){console.warn("Image download failed:",e)}finally{this._downloading=!1}}}_handleDeleteRecipe(){if(!this._confirmDelete)return this._confirmDelete=!0,void setTimeout(()=>{this._confirmDelete=!1},3e3);this.dispatchEvent(new CustomEvent("rm-delete-recipe",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}_openShoppingPicker(){const e=this.recipe?.ingredients?.length??0;this._checkedIngredients=new Set([...Array(e).keys()]),this._showShoppingPicker=!0}_toggleIngredient(e){const t=new Set(this._checkedIngredients);t.has(e)?t.delete(e):t.add(e),this._checkedIngredients=t}async _handleAddToShopping(){const e=this._checkedIngredients;if(!e?.size)return;const t=(this.recipe.ingredients||[]).filter((t,i)=>e.has(i)).map(e=>({...e,amount:this._scaleAmount(e.amount)}));this._shoppingAdding=!0,this._shoppingResult=null,this.dispatchEvent(new CustomEvent("rm-add-to-shopping",{detail:{ingredients:t,listId:this._selectedListId||null},bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,600)),this._shoppingAdding=!1,this._shoppingResult="success",this._showShoppingPicker=!1,setTimeout(()=>{this._shoppingResult=null},2500)}_renderStars(e,t=!1){const i=this._hoverRating||e||0;return M`
      <div class="stars ${t?"stars-interactive":""}">
        ${[1,2,3,4,5].map(e=>M`
          <span
            class="star ${e<=i?"filled":""}"
            @mouseenter=${t?()=>{this._hoverRating=e}:void 0}
            @mouseleave=${t?()=>{this._hoverRating=0}:void 0}
            @click=${t?()=>this._handleSetRating(e):void 0}
          >★</span>
        `)}
      </div>
    `}_renderChipGroup(e,t,i){return t?.length?M`
      <div class="chip-group">
        <span class="chip-group-label">${e}:</span>
        ${t.map(e=>M`<span class="chip ${i}">${e}</span>`)}
      </div>
    `:""}render(){if(!this.recipe)return M``;const e=this.recipe,t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return M`
      <div class="detail-container">
        <!-- Hero image -->
        <div class="hero ${e.image_url?"":"no-image"}">
          ${e.image_url?M`
            <img src="${e.image_url}" alt="${e.name}" />
            <div class="hero-overlay"></div>
          `:M`
            <div class="hero-placeholder">
              <ha-icon icon="mdi:food"></ha-icon>
            </div>
          `}
          <div class="hero-actions">
            <button class="hero-btn ${e.is_favourite?"fav-active":""}" @click=${this._handleToggleFav}
              title="${e.is_favourite?"Remove from favourites":"Add to favourites"}">
              <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
            </button>
            ${e.source_url?M`
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
          <!-- Recipe name + meta -->
          <div class="detail-head">
            <h2 class="detail-name">${e.name}</h2>
            ${e.description?M`<p class="detail-desc">${e.description}</p>`:""}

            <!-- Star rating (inline, interactive) -->
            ${this._renderStars(e.rating,!0)}

            <div class="meta-row">
              ${e.prep_time?M`
                <div class="meta-item">
                  <span class="meta-label">Prep</span>
                  <span class="meta-val">${this._formatTime(e.prep_time)}</span>
                </div>
              `:""}
              ${e.cook_time?M`
                <div class="meta-item">
                  <span class="meta-label">Cook</span>
                  <span class="meta-val">${this._formatTime(e.cook_time)}</span>
                </div>
              `:""}
              ${t?M`
                <div class="meta-item">
                  <span class="meta-label">Total</span>
                  <span class="meta-val">${this._formatTime(t)}</span>
                </div>
              `:""}
              ${e.servings?M`
                <div class="meta-item">
                  <span class="meta-label">Serves</span>
                  <span class="meta-val">${e.servings_text||e.servings}</span>
                </div>
              `:""}
            </div>

            ${e.tags?.length?M`
              <div class="tags-row">
                ${e.tags.map(e=>M`<span class="tag-chip">${e}</span>`)}
              </div>
            `:""}

            ${this._renderChipGroup("Courses",e.courses,"chip-course")}
            ${this._renderChipGroup("Categories",e.categories,"chip-category")}
            ${this._renderChipGroup("Collections",e.collections,"chip-collection")}
          </div>

          <!-- Serving scaler -->
          ${e.servings?M`
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
            ${[["ingredients","Ingredients"],["directions","Directions"],["notes","Notes"],["nutrition","Nutrition"]].map(([e,t])=>M`
              <button
                class="tab-btn ${this._activeTab===e?"active":""}"
                @click=${()=>{this._activeTab=e}}
              >${t}</button>
            `)}
          </div>

          <!-- Tab content -->
          <div class="tab-content">
            ${"ingredients"===this._activeTab?this._renderIngredients(e):""}
            ${"directions"===this._activeTab?this._renderDirections(e):""}
            ${"notes"===this._activeTab?this._renderNotes(e):""}
            ${"nutrition"===this._activeTab?this._renderNutrition(e):""}
          </div>
        </div>

        <!-- Edit panel (inline overlay) -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_renderIngredients(e){const t=this._showShoppingPicker,i=this._checkedIngredients,r=i?.size??0;return M`
      ${e.ingredients?.length?M`
        <ul class="ingredient-list">
          ${e.ingredients.map((e,r)=>M`
            <li class="ingredient-item ${t?"selectable":""}"
              @click=${t?()=>this._toggleIngredient(r):void 0}>
              ${t?M`
                <span class="ing-check ${i?.has(r)?"checked":""}">
                  ${i?.has(r)?M`<ha-icon icon="mdi:check"></ha-icon>`:""}
                </span>
              `:""}
              <span class="ing-amount">${this._scaleAmount(e.amount)||""} ${e.unit||""}</span>
              <span class="ing-name">${e.name}${e.notes?M` <em class="ing-notes">(${e.notes})</em>`:""}</span>
            </li>
          `)}
        </ul>
      `:M`<p class="empty-tab">No ingredients listed.</p>`}

      <!-- Shopping section (always shown) -->
      <div class="shopping-section">
        ${"success"===this._shoppingResult?M`
          <div class="shopping-success">
            <ha-icon icon="mdi:check-circle-outline"></ha-icon>
            Added to shopping list!
          </div>
        `:t?M`
          <div class="shopping-picker-panel">
            ${this.slmAvailable&&this.shoppingLists.length?M`
              <select class="list-select" .value=${this._selectedListId}
                @change=${e=>{this._selectedListId=e.target.value}}>
                ${this.shoppingLists.map(e=>M`
                  <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                `)}
              </select>
            `:this.slmAvailable?M`
              <span class="shopping-note">No lists found in Shopping List Manager</span>
            `:""}
            <div class="picker-btns">
              <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>Cancel</button>
              <button class="action-btn primary"
                ?disabled=${this._shoppingAdding||!r}
                @click=${this._handleAddToShopping}>
                ${this._shoppingAdding?M`<ha-circular-progress active size="tiny"></ha-circular-progress>`:"Add"+(r?` (${r})`:"")}
              </button>
            </div>
          </div>
        `:M`
          <button class="action-btn primary shopping-btn" @click=${this._openShoppingPicker}>
            <ha-icon icon="mdi:cart-plus"></ha-icon>
            Add to Shopping List
          </button>
        `}
      </div>
    `}_renderDirections(e){return M`
      ${e.instructions?.length?M`
        <ol class="steps-list">
          ${e.instructions.map((e,t)=>M`
            <li class="step-item">
              <span class="step-num">${t+1}</span>
              <span class="step-text">${e}</span>
            </li>
          `)}
        </ol>
      `:M`<p class="empty-tab">No directions listed.</p>`}
    `}_renderNotes(e){return M`
      ${e.notes?M`<p class="notes-text">${e.notes}</p>`:M`<p class="empty-tab">No notes.</p>`}
    `}_renderNutrition(e){const t=e.nutrition||{},i=de.some(e=>null!=t[e.key]&&""!==t[e.key]);if(!i)return M`
        <div class="empty-tab">
          <p>No nutrition info. Add it via the edit panel.</p>
        </div>
      `;const r=e.servings?`Per serving (${e.servings_text||e.servings})`:"Per serving";return M`
      <div class="nutrition-panel">
        <div class="nutr-header">Nutrition Facts</div>
        <div class="nutr-sub">${r}</div>
        <div class="nutr-divider thick"></div>
        ${de.map(e=>{const i=t[e.key];return null==i||""===i?"":M`
            <div class="nutr-row ${e.bold?"nutr-bold":""} ${e.indent?"nutr-indent":""}">
              <span class="nutr-label">${e.label}</span>
              <span class="nutr-val">${i}${"kcal"!==e.unit?M`<em> ${e.unit}</em>`:""}</span>
            </div>
            <div class="nutr-divider"></div>
          `})}
      </div>
    `}_renderEditPanel(){const e=this._editData;return M`
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
                ${[1,2,3,4,5].map(t=>M`
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
    `}_renderField(e,t,i){const r=this._editData[t]??"";return"textarea"===i?M`
        <div class="edit-field">
          <label>${e}</label>
          <textarea
            .value=${r}
            @input=${e=>this._handleEditField(t,e.target.value)}
            rows="3"
          ></textarea>
        </div>
      `:M`
      <div class="edit-field">
        <label>${e}</label>
        <input
          type="${i}"
          .value=${String(r)}
          @input=${e=>this._handleEditField(t,e.target.value)}
        />
      </div>
    `}static styles=n`
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
    .detail-name {
      margin: 0 0 4px;
      font-size: 20px;
      font-weight: 700;
      color: var(--rm-text, #e5e5ea);
    }
    .detail-desc {
      margin: 0 0 8px;
      font-size: 14px;
      color: var(--rm-text-secondary, #8e8e93);
      line-height: 1.5;
    }

    /* Stars */
    .stars {
      display: flex;
      gap: 2px;
      margin-bottom: 8px;
    }
    .star {
      font-size: 20px;
      color: var(--rm-border, rgba(255,255,255,0.2));
      line-height: 1;
      transition: color 0.1s;
    }
    .star.filled { color: #f5a623; }
    .stars-interactive .star { cursor: pointer; }
    .stars-interactive .star:hover,
    .stars-interactive .star:hover ~ .star { color: var(--rm-border, rgba(255,255,255,0.2)); }
    .stars-interactive:hover .star { color: #f5a623; }
    .stars-interactive .star:hover ~ .star { color: var(--rm-border, rgba(255,255,255,0.2)) !important; }

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
      background: var(--rm-surface, #2c2c2e);
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
      background: var(--rm-surface, #2c2c2e);
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
    }
    .tab-btn {
      flex: 1;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 8px 4px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      color: var(--rm-text-secondary, #8e8e93);
      transition: color 0.15s, border-color 0.15s;
      white-space: nowrap;
    }
    .tab-btn.active {
      color: var(--rm-accent, #ff6b35);
      border-bottom-color: var(--rm-accent, #ff6b35);
    }

    /* Ingredients */
    .ingredient-list { list-style: none; padding: 0; margin: 0 0 16px; }
    .ingredient-item {
      display: flex;
      gap: 10px;
      align-items: baseline;
      padding: 7px 0;
      border-bottom: 1px solid var(--rm-border, rgba(255,255,255,0.06));
    }
    .ingredient-item:last-child { border-bottom: none; }
    .ing-amount {
      font-size: 13px;
      font-weight: 600;
      color: var(--rm-accent, #ff6b35);
      min-width: 60px;
      flex-shrink: 0;
    }
    .ing-name { font-size: 14px; color: var(--rm-text, #e5e5ea); }
    .ing-notes { font-size: 12px; color: var(--rm-text-secondary, #8e8e93); font-style: italic; }

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
    .picker-btns { display: flex; gap: 8px; justify-content: flex-end; }
    .shopping-note { font-size: 12px; color: var(--rm-text-secondary, #8e8e93); }
    .list-select {
      flex: 1;
      background: var(--rm-surface, #2c2c2e);
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
      gap: 12px;
      margin-bottom: 14px;
      align-items: flex-start;
    }
    .step-num {
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      background: var(--rm-accent, #ff6b35);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
    }
    .step-text { font-size: 14px; color: var(--rm-text, #e5e5ea); line-height: 1.6; }

    /* Notes */
    .notes-text { font-size: 14px; color: var(--rm-text, #e5e5ea); line-height: 1.6; white-space: pre-wrap; }
    .empty-tab { font-size: 14px; color: var(--rm-text-secondary, #8e8e93); text-align: center; padding: 20px 0; margin: 0; }

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

    /* Buttons */
    .action-btn {
      background: var(--rm-surface, #2c2c2e);
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
      background: var(--rm-bg, #1c1c1e);
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
      background: var(--rm-surface, #2c2c2e);
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
      font-size: 26px;
      color: var(--rm-border, rgba(255,255,255,0.2));
      cursor: pointer;
      transition: color 0.12s;
      line-height: 1;
    }
    .edit-star.filled { color: #f5a623; }
    .edit-star:hover { color: #f5a623; }
    .edit-footer {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
      flex-shrink: 0;
    }
  `}customElements.define("rm-recipe-detail",he);var pe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fe(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var me={exports:{}};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/me.exports=function e(t,i,r){function s(a,o){if(!i[a]){if(!t[a]){if(!o&&fe)return fe(a);if(n)return n(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){return s(t[a][1][e]||e)},c,c.exports,e,t,i,r)}return i[a].exports}for(var n=fe,a=0;a<r.length;a++)s(r[a]);return s}({1:[function(e,t,i){var r=e("./utils"),s=e("./support"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(e){for(var t,i,s,a,o,l,c,d=[],h=0,p=e.length,u=p,f="string"!==r.getTypeOf(e);h<e.length;)u=p-h,s=f?(t=e[h++],i=h<p?e[h++]:0,h<p?e[h++]:0):(t=e.charCodeAt(h++),i=h<p?e.charCodeAt(h++):0,h<p?e.charCodeAt(h++):0),a=t>>2,o=(3&t)<<4|i>>4,l=1<u?(15&i)<<2|s>>6:64,c=2<u?63&s:64,d.push(n.charAt(a)+n.charAt(o)+n.charAt(l)+n.charAt(c));return d.join("")},i.decode=function(e){var t,i,r,a,o,l,c=0,d=0,h="data:";if(e.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var p,u=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===n.charAt(64)&&u--,e.charAt(e.length-2)===n.charAt(64)&&u--,u%1!=0)throw new Error("Invalid base64 input, bad content length.");for(p=s.uint8array?new Uint8Array(0|u):new Array(0|u);c<e.length;)t=n.indexOf(e.charAt(c++))<<2|(a=n.indexOf(e.charAt(c++)))>>4,i=(15&a)<<4|(o=n.indexOf(e.charAt(c++)))>>2,r=(3&o)<<6|(l=n.indexOf(e.charAt(c++))),p[d++]=t,64!==o&&(p[d++]=i),64!==l&&(p[d++]=r);return p}},{"./support":30,"./utils":32}],2:[function(e,t,i){var r=e("./external"),s=e("./stream/DataWorker"),n=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,i,r,s){this.compressedSize=e,this.uncompressedSize=t,this.crc32=i,this.compression=r,this.compressedContent=s}o.prototype={getContentWorker:function(){var e=new s(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new s(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,i){return e.pipe(new n).pipe(new a("uncompressedSize")).pipe(t.compressWorker(i)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,i){var r=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,i){var r=e("./utils"),s=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==r.getTypeOf(e)?function(e,t,i,r){var n=s,a=r+i;e^=-1;for(var o=r;o<a;o++)e=e>>>8^n[255&(e^t[o])];return-1^e}(0|t,e,e.length,0):function(e,t,i,r){var n=s,a=r+i;e^=-1;for(var o=r;o<a;o++)e=e>>>8^n[255&(e^t.charCodeAt(o))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,t,i){var r=null;r="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:r}},{lie:37}],7:[function(e,t,i){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,s=e("pako"),n=e("./utils"),a=e("./stream/GenericWorker"),o=r?"uint8array":"array";function l(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}i.magic="\b\0",n.inherits(l,a),l.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(n.transformTo(o,e.data),!1)},l.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},i.compressWorker=function(e){return new l("Deflate",e)},i.uncompressWorker=function(){return new l("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,i){function r(e,t){var i,r="";for(i=0;i<t;i++)r+=String.fromCharCode(255&e),e>>>=8;return r}function s(e,t,i,s,a,d){var h,p,u=e.file,f=e.compression,m=d!==o.utf8encode,g=n.transformTo("string",d(u.name)),b=n.transformTo("string",o.utf8encode(u.name)),v=u.comment,_=n.transformTo("string",d(v)),x=n.transformTo("string",o.utf8encode(v)),y=b.length!==u.name.length,w=x.length!==v.length,k="",$="",S="",z=u.dir,A=u.date,E={crc32:0,compressedSize:0,uncompressedSize:0};t&&!i||(E.crc32=e.crc32,E.compressedSize=e.compressedSize,E.uncompressedSize=e.uncompressedSize);var C=0;t&&(C|=8),m||!y&&!w||(C|=2048);var I=0,R=0;z&&(I|=16),"UNIX"===a?(R=798,I|=function(e,t){var i=e;return e||(i=t?16893:33204),(65535&i)<<16}(u.unixPermissions,z)):(R=20,I|=function(e){return 63&(e||0)}(u.dosPermissions)),h=A.getUTCHours(),h<<=6,h|=A.getUTCMinutes(),h<<=5,h|=A.getUTCSeconds()/2,p=A.getUTCFullYear()-1980,p<<=4,p|=A.getUTCMonth()+1,p<<=5,p|=A.getUTCDate(),y&&($=r(1,1)+r(l(g),4)+b,k+="up"+r($.length,2)+$),w&&(S=r(1,1)+r(l(_),4)+x,k+="uc"+r(S.length,2)+S);var T="";return T+="\n\0",T+=r(C,2),T+=f.magic,T+=r(h,2),T+=r(p,2),T+=r(E.crc32,4),T+=r(E.compressedSize,4),T+=r(E.uncompressedSize,4),T+=r(g.length,2),T+=r(k.length,2),{fileRecord:c.LOCAL_FILE_HEADER+T+g+k,dirRecord:c.CENTRAL_FILE_HEADER+r(R,2)+T+r(_.length,2)+"\0\0\0\0"+r(I,4)+r(s,4)+g+k+_}}var n=e("../utils"),a=e("../stream/GenericWorker"),o=e("../utf8"),l=e("../crc32"),c=e("../signature");function d(e,t,i,r){a.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=i,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}n.inherits(d,a),d.prototype.push=function(e){var t=e.meta.percent||0,i=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,a.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:i?(t+100*(i-r-1))/i:100}}))},d.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var i=s(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:i.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,i=s(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(i.dirRecord),t)this.push({data:function(e){return c.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:i.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var i=this.bytesWritten-e,s=function(e,t,i,s,a){var o=n.transformTo("string",a(s));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(e,2)+r(e,2)+r(t,4)+r(i,4)+r(o.length,2)+o}(this.dirRecords.length,i,e,this.zipComment,this.encodeFileName);this.push({data:s,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},d.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(e){var t=this._sources;if(!a.prototype.error.call(this,e))return!1;for(var i=0;i<t.length;i++)try{t[i].error(e)}catch(e){}return!0},d.prototype.lock=function(){a.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,i){var r=e("../compressions"),s=e("./ZipFileWorker");i.generateWorker=function(e,t,i){var n=new s(t.streamFiles,i,t.platform,t.encodeFileName),a=0;try{e.forEach(function(e,i){a++;var s=function(e,t){var i=e||t,s=r[i];if(!s)throw new Error(i+" is not a valid compression method !");return s}(i.options.compression,t.compression),o=i.options.compressionOptions||t.compressionOptions||{},l=i.dir,c=i.date;i._compressWorker(s,o).withStreamInfo("file",{name:e,dir:l,date:c,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(n)}),n.entriesCount=a}catch(e){n.error(e)}return n}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new r;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(e,t){return(new r).loadAsync(e,t)},r.external=e("./external"),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,i){var r=e("./utils"),s=e("./external"),n=e("./utf8"),a=e("./zipEntries"),o=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function c(e){return new s.Promise(function(t,i){var r=e.decompressed.getContentWorker().pipe(new o);r.on("error",function(e){i(e)}).on("end",function(){r.streamInfo.crc32!==e.decompressed.crc32?i(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}t.exports=function(e,t){var i=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var i=new a(t);return i.load(e),i}).then(function(e){var i=[s.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var n=0;n<r.length;n++)i.push(c(r[n]));return s.Promise.all(i)}).then(function(e){for(var s=e.shift(),n=s.files,a=0;a<n.length;a++){var o=n[a],l=o.fileNameStr,c=r.resolve(o.fileNameStr);i.file(c,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileCommentStr.length?o.fileCommentStr:null,unixPermissions:o.unixPermissions,dosPermissions:o.dosPermissions,createFolders:t.createFolders}),o.dir||(i.file(c).unsafeOriginalName=l)}return s.zipComment.length&&(i.comment=s.zipComment),i})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,i){var r=e("../utils"),s=e("../stream/GenericWorker");function n(e,t){s.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(n,s),n.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},n.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},n.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=n},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,i){var r=e("readable-stream").Readable;function s(e,t,i){r.call(this,t),this._helper=e;var s=this;e.on("data",function(e,t){s.push(e)||s._helper.pause(),i&&i(t)}).on("error",function(e){s.emit("error",e)}).on("end",function(){s.push(null)})}e("../utils").inherits(s,r),s.prototype._read=function(){this._helper.resume()},t.exports=s},{"../utils":32,"readable-stream":16}],14:[function(e,t,i){t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,i){function r(e,t,i){var r,s=n.getTypeOf(t),o=n.extend(i||{},l);o.date=o.date||new Date,null!==o.compression&&(o.compression=o.compression.toUpperCase()),"string"==typeof o.unixPermissions&&(o.unixPermissions=parseInt(o.unixPermissions,8)),o.unixPermissions&&16384&o.unixPermissions&&(o.dir=!0),o.dosPermissions&&16&o.dosPermissions&&(o.dir=!0),o.dir&&(e=m(e)),o.createFolders&&(r=f(e))&&g.call(this,r,!0);var h="string"===s&&!1===o.binary&&!1===o.base64;i&&void 0!==i.binary||(o.binary=!h),(t instanceof c&&0===t.uncompressedSize||o.dir||!t||0===t.length)&&(o.base64=!1,o.binary=!0,t="",o.compression="STORE",s="string");var b=null;b=t instanceof c||t instanceof a?t:p.isNode&&p.isStream(t)?new u(e,t):n.prepareContent(e,t,o.binary,o.optimizedBinaryString,o.base64);var v=new d(e,b,o);this.files[e]=v}var s=e("./utf8"),n=e("./utils"),a=e("./stream/GenericWorker"),o=e("./stream/StreamHelper"),l=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),h=e("./generate"),p=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),f=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},m=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},g=function(e,t){return t=void 0!==t?t:l.createFolders,e=m(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function b(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,i,r;for(t in this.files)r=this.files[t],(i=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(i,r)},filter:function(e){var t=[];return this.forEach(function(i,r){e(i,r)&&t.push(r)}),t},file:function(e,t,i){if(1!==arguments.length)return e=this.root+e,r.call(this,e,t,i),this;if(b(e)){var s=e;return this.filter(function(e,t){return!t.dir&&s.test(e)})}var n=this.files[this.root+e];return n&&!n.dir?n:null},folder:function(e){if(!e)return this;if(b(e))return this.filter(function(t,i){return i.dir&&e.test(t)});var t=this.root+e,i=g.call(this,t),r=this.clone();return r.root=i.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var i=this.filter(function(t,i){return i.name.slice(0,e.length)===e}),r=0;r<i.length;r++)delete this.files[i[r].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,i={};try{if((i=n.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=i.type.toLowerCase(),i.compression=i.compression.toUpperCase(),"binarystring"===i.type&&(i.type="string"),!i.type)throw new Error("No output type specified.");n.checkSupport(i.type),"darwin"!==i.platform&&"freebsd"!==i.platform&&"linux"!==i.platform&&"sunos"!==i.platform||(i.platform="UNIX"),"win32"===i.platform&&(i.platform="DOS");var r=i.comment||this.comment||"";t=h.generateWorker(this,i,r)}catch(e){(t=new a("error")).error(e)}return new o(t,i.type||"string",i.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,i){t.exports=e("stream")},{stream:void 0}],17:[function(e,t,i){var r=e("./DataReader");function s(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(s,r),s.prototype.byteAt=function(e){return this.data[this.zero+e]},s.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),s=e.charCodeAt(3),n=this.length-4;0<=n;--n)if(this.data[n]===t&&this.data[n+1]===i&&this.data[n+2]===r&&this.data[n+3]===s)return n-this.zero;return-1},s.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),s=e.charCodeAt(3),n=this.readData(4);return t===n[0]&&i===n[1]&&r===n[2]&&s===n[3]},s.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=s},{"../utils":32,"./DataReader":18}],18:[function(e,t,i){var r=e("../utils");function s(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,i=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)i=(i<<8)+this.byteAt(t);return this.index+=e,i},readString:function(e){return r.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=s},{"../utils":32}],19:[function(e,t,i){var r=e("./Uint8ArrayReader");function s(e){r.call(this,e)}e("../utils").inherits(s,r),s.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,i){var r=e("./DataReader");function s(e){r.call(this,e)}e("../utils").inherits(s,r),s.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},s.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},s.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},s.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=s},{"../utils":32,"./DataReader":18}],21:[function(e,t,i){var r=e("./ArrayReader");function s(e){r.call(this,e)}e("../utils").inherits(s,r),s.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,i){var r=e("../utils"),s=e("../support"),n=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),l=e("./Uint8ArrayReader");t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),"string"!==t||s.uint8array?"nodebuffer"===t?new o(e):s.uint8array?new l(r.transformTo("uint8array",e)):new n(r.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,i){var r=e("./GenericWorker"),s=e("../utils");function n(e){r.call(this,"ConvertWorker to "+e),this.destType=e}s.inherits(n,r),n.prototype.processChunk=function(e){this.push({data:s.transformTo(this.destType,e.data),meta:e.meta})},t.exports=n},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,i){var r=e("./GenericWorker"),s=e("../crc32");function n(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(n,r),n.prototype.processChunk=function(e){this.streamInfo.crc32=s(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=n},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,i){var r=e("../utils"),s=e("./GenericWorker");function n(e){s.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(n,s),n.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}s.prototype.processChunk.call(this,e)},t.exports=n},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,i){var r=e("../utils"),s=e("./GenericWorker");function n(e){s.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(n,s),n.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},n.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},n.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},n.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=n},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,i){function r(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var i=0;i<this._listeners[e].length;i++)this._listeners[e][i].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=r},{}],29:[function(e,t,i){var r=e("../utils"),s=e("./ConvertWorker"),n=e("./GenericWorker"),a=e("../base64"),o=e("../support"),l=e("../external"),c=null;if(o.nodestream)try{c=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function d(e,t){return new l.Promise(function(i,s){var n=[],o=e._internalType,l=e._outputType,c=e._mimeType;e.on("data",function(e,i){n.push(e),t&&t(i)}).on("error",function(e){n=[],s(e)}).on("end",function(){try{var e=function(e,t,i){switch(e){case"blob":return r.newBlob(r.transformTo("arraybuffer",t),i);case"base64":return a.encode(t);default:return r.transformTo(e,t)}}(l,function(e,t){var i,r=0,s=null,n=0;for(i=0;i<t.length;i++)n+=t[i].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(s=new Uint8Array(n),i=0;i<t.length;i++)s.set(t[i],r),r+=t[i].length;return s;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(o,n),c);i(e)}catch(e){s(e)}n=[]}).resume()})}function h(e,t,i){var a=t;switch(t){case"blob":case"arraybuffer":a="uint8array";break;case"base64":a="string"}try{this._internalType=a,this._outputType=t,this._mimeType=i,r.checkSupport(a),this._worker=e.pipe(new s(a)),e.lock()}catch(e){this._worker=new n("error"),this._worker.error(e)}}h.prototype={accumulate:function(e){return d(this,e)},on:function(e,t){var i=this;return"data"===e?this._worker.on(e,function(e){t.call(i,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,i)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,i.nodebuffer="undefined"!=typeof Buffer,i.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=0===new Blob([r],{type:"application/zip"}).size}catch(e){try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(r),i.blob=0===s.getBlob("application/zip").size}catch(e){i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch(e){i.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,i){for(var r=e("./utils"),s=e("./support"),n=e("./nodejsUtils"),a=e("./stream/GenericWorker"),o=new Array(256),l=0;l<256;l++)o[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function c(){a.call(this,"utf-8 decode"),this.leftOver=null}function d(){a.call(this,"utf-8 encode")}o[254]=o[254]=1,i.utf8encode=function(e){return s.nodebuffer?n.newBufferFrom(e,"utf-8"):function(e){var t,i,r,n,a,o=e.length,l=0;for(n=0;n<o;n++)55296==(64512&(i=e.charCodeAt(n)))&&n+1<o&&56320==(64512&(r=e.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(r-56320),n++),l+=i<128?1:i<2048?2:i<65536?3:4;for(t=s.uint8array?new Uint8Array(l):new Array(l),n=a=0;a<l;n++)55296==(64512&(i=e.charCodeAt(n)))&&n+1<o&&56320==(64512&(r=e.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(r-56320),n++),i<128?t[a++]=i:(i<2048?t[a++]=192|i>>>6:(i<65536?t[a++]=224|i>>>12:(t[a++]=240|i>>>18,t[a++]=128|i>>>12&63),t[a++]=128|i>>>6&63),t[a++]=128|63&i);return t}(e)},i.utf8decode=function(e){return s.nodebuffer?r.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,i,s,n,a=e.length,l=new Array(2*a);for(t=i=0;t<a;)if((s=e[t++])<128)l[i++]=s;else if(4<(n=o[s]))l[i++]=65533,t+=n-1;else{for(s&=2===n?31:3===n?15:7;1<n&&t<a;)s=s<<6|63&e[t++],n--;1<n?l[i++]=65533:s<65536?l[i++]=s:(s-=65536,l[i++]=55296|s>>10&1023,l[i++]=56320|1023&s)}return l.length!==i&&(l.subarray?l=l.subarray(0,i):l.length=i),r.applyFromCharCode(l)}(e=r.transformTo(s.uint8array?"uint8array":"array",e))},r.inherits(c,a),c.prototype.processChunk=function(e){var t=r.transformTo(s.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var n=t;(t=new Uint8Array(n.length+this.leftOver.length)).set(this.leftOver,0),t.set(n,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var a=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0||0===i?t:i+o[e[i]]>t?i:t}(t),l=t;a!==t.length&&(s.uint8array?(l=t.subarray(0,a),this.leftOver=t.subarray(a,t.length)):(l=t.slice(0,a),this.leftOver=t.slice(a,t.length))),this.push({data:i.utf8decode(l),meta:e.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=c,r.inherits(d,a),d.prototype.processChunk=function(e){this.push({data:i.utf8encode(e.data),meta:e.meta})},i.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,i){var r=e("./support"),s=e("./base64"),n=e("./nodejsUtils"),a=e("./external");function o(e){return e}function l(e,t){for(var i=0;i<e.length;++i)t[i]=255&e.charCodeAt(i);return t}e("setimmediate"),i.newBlob=function(e,t){i.checkSupport("blob");try{return new Blob([e],{type:t})}catch(i){try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(e,t,i){var r=[],s=0,n=e.length;if(n<=i)return String.fromCharCode.apply(null,e);for(;s<n;)"array"===t||"nodebuffer"===t?r.push(String.fromCharCode.apply(null,e.slice(s,Math.min(s+i,n)))):r.push(String.fromCharCode.apply(null,e.subarray(s,Math.min(s+i,n)))),s+=i;return r.join("")},stringifyByChar:function(e){for(var t="",i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&1===String.fromCharCode.apply(null,n.allocBuffer(1)).length}catch(e){return!1}}()}};function d(e){var t=65536,r=i.getTypeOf(e),s=!0;if("uint8array"===r?s=c.applyCanBeUsed.uint8array:"nodebuffer"===r&&(s=c.applyCanBeUsed.nodebuffer),s)for(;1<t;)try{return c.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return c.stringifyByChar(e)}function h(e,t){for(var i=0;i<e.length;i++)t[i]=e[i];return t}i.applyFromCharCode=d;var p={};p.string={string:o,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return p.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,n.allocBuffer(e.length))}},p.array={string:d,array:o,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return n.newBufferFrom(e)}},p.arraybuffer={string:function(e){return d(new Uint8Array(e))},array:function(e){return h(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:o,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return n.newBufferFrom(new Uint8Array(e))}},p.uint8array={string:d,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:o,nodebuffer:function(e){return n.newBufferFrom(e)}},p.nodebuffer={string:d,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return p.nodebuffer.uint8array(e).buffer},uint8array:function(e){return h(e,new Uint8Array(e.length))},nodebuffer:o},i.transformTo=function(e,t){if(t=t||"",!e)return t;i.checkSupport(e);var r=i.getTypeOf(t);return p[r][e](t)},i.resolve=function(e){for(var t=e.split("/"),i=[],r=0;r<t.length;r++){var s=t[r];"."===s||""===s&&0!==r&&r!==t.length-1||(".."===s?i.pop():i.push(s))}return i.join("/")},i.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":r.nodebuffer&&n.isBuffer(e)?"nodebuffer":r.uint8array&&e instanceof Uint8Array?"uint8array":r.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(e){if(!r[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(e){var t,i,r="";for(i=0;i<(e||"").length;i++)r+="\\x"+((t=e.charCodeAt(i))<16?"0":"")+t.toString(16).toUpperCase();return r},i.delay=function(e,t,i){setImmediate(function(){e.apply(i||null,t||[])})},i.inherits=function(e,t){function i(){}i.prototype=t.prototype,e.prototype=new i},i.extend=function(){var e,t,i={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===i[t]&&(i[t]=arguments[e][t]);return i},i.prepareContent=function(e,t,n,o,c){return a.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new a.Promise(function(t,i){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){i(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var d=i.getTypeOf(t);return d?("arraybuffer"===d?t=i.transformTo("uint8array",t):"string"===d&&(c?t=s.decode(t):n&&!0!==o&&(t=function(e){return l(e,r.uint8array?new Uint8Array(e.length):new Array(e.length))}(t))),t):a.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,i){var r=e("./reader/readerFor"),s=e("./utils"),n=e("./signature"),a=e("./zipEntry"),o=e("./support");function l(e){this.files=[],this.loadOptions=e}l.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(t)+", expected "+s.pretty(e)+")")}},isSignature:function(e,t){var i=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(i),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",i=s.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,i,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),i=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(n.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,n.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(n.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,n.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var r=t-i;if(0<r)this.isSignature(t,n.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw new Error("Corrupted zip: missing "+Math.abs(r)+" bytes.")},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=l},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,i){var r=e("./reader/readerFor"),s=e("./utils"),n=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),l=e("./compressions"),c=e("./support");function d(e,t){this.options=e,this.loadOptions=t}d.prototype={isEncrypted:function(){return!(1&~this.bitFlag)},useUTF8:function(){return!(2048&~this.bitFlag)},readLocalPart:function(e){var t,i;if(e.skip(22),this.fileNameLength=e.readInt(2),i=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(i),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in l)if(Object.prototype.hasOwnProperty.call(l,t)&&l[t].magic===e)return l[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,i,r,s=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<s;)t=e.readInt(2),i=e.readInt(2),r=e.readData(i),this.extraFields[t]={id:t,length:i,value:r};e.setIndex(s)},handleUTF8:function(){var e=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var i=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(i)}var r=this.findExtraFieldUnicodeComment();if(null!==r)this.fileCommentStr=r;else{var n=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return 1!==t.readInt(1)||a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return 1!==t.readInt(1)||a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,i){function r(e,t,i){this.name=e,this.dir=i.dir,this.date=i.date,this.comment=i.comment,this.unixPermissions=i.unixPermissions,this.dosPermissions=i.dosPermissions,this._data=t,this._dataBinary=i.binary,this.options={compression:i.compression,compressionOptions:i.compressionOptions}}var s=e("./stream/StreamHelper"),n=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),l=e("./stream/GenericWorker");r.prototype={internalStream:function(e){var t=null,i="string";try{if(!e)throw new Error("No output type specified.");var r="string"===(i=e.toLowerCase())||"text"===i;"binarystring"!==i&&"text"!==i||(i="string"),t=this._decompressWorker();var n=!this._dataBinary;n&&!r&&(t=t.pipe(new a.Utf8EncodeWorker)),!n&&r&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new l("error")).error(e)}return new s(t,i,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var i=this._decompressWorker();return this._dataBinary||(i=i.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(i,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof l?this._data:new n(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<c.length;h++)r.prototype[c[h]]=d;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,i){(function(e){var i,r,s=e.MutationObserver||e.WebKitMutationObserver;if(s){var n=0,a=new s(d),o=e.document.createTextNode("");a.observe(o,{characterData:!0}),i=function(){o.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)i="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){d(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(d,0)};else{var l=new e.MessageChannel;l.port1.onmessage=d,i=function(){l.port2.postMessage(0)}}var c=[];function d(){var e,t;r=!0;for(var i=c.length;i;){for(t=c,c=[],e=-1;++e<i;)t[e]();i=c.length}r=!1}t.exports=function(e){1!==c.push(e)||r||i()}}).call(this,void 0!==pe?pe:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,i){var r=e("immediate");function s(){}var n={},a=["REJECTED"],o=["FULFILLED"],l=["PENDING"];function c(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,e!==s&&u(this,e)}function d(e,t,i){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof i&&(this.onRejected=i,this.callRejected=this.otherCallRejected)}function h(e,t,i){r(function(){var r;try{r=t(i)}catch(r){return n.reject(e,r)}r===e?n.reject(e,new TypeError("Cannot resolve promise with itself")):n.resolve(e,r)})}function p(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){var i=!1;function r(t){i||(i=!0,n.reject(e,t))}function s(t){i||(i=!0,n.resolve(e,t))}var a=f(function(){t(s,r)});"error"===a.status&&r(a.value)}function f(e,t){var i={};try{i.value=e(t),i.status="success"}catch(e){i.status="error",i.value=e}return i}(t.exports=c).prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(i){return t.resolve(e()).then(function(){return i})},function(i){return t.resolve(e()).then(function(){throw i})})},c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){if("function"!=typeof e&&this.state===o||"function"!=typeof t&&this.state===a)return this;var i=new this.constructor(s);return this.state!==l?h(i,this.state===o?e:t,this.outcome):this.queue.push(new d(i,e,t)),i},d.prototype.callFulfilled=function(e){n.resolve(this.promise,e)},d.prototype.otherCallFulfilled=function(e){h(this.promise,this.onFulfilled,e)},d.prototype.callRejected=function(e){n.reject(this.promise,e)},d.prototype.otherCallRejected=function(e){h(this.promise,this.onRejected,e)},n.resolve=function(e,t){var i=f(p,t);if("error"===i.status)return n.reject(e,i.value);var r=i.value;if(r)u(e,r);else{e.state=o,e.outcome=t;for(var s=-1,a=e.queue.length;++s<a;)e.queue[s].callFulfilled(t)}return e},n.reject=function(e,t){e.state=a,e.outcome=t;for(var i=-1,r=e.queue.length;++i<r;)e.queue[i].callRejected(t);return e},c.resolve=function(e){return e instanceof this?e:n.resolve(new this(s),e)},c.reject=function(e){var t=new this(s);return n.reject(t,e)},c.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var i=e.length,r=!1;if(!i)return this.resolve([]);for(var a=new Array(i),o=0,l=-1,c=new this(s);++l<i;)d(e[l],l);return c;function d(e,s){t.resolve(e).then(function(e){a[s]=e,++o!==i||r||(r=!0,n.resolve(c,a))},function(e){r||(r=!0,n.reject(c,e))})}},c.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var i=e.length,r=!1;if(!i)return this.resolve([]);for(var a,o=-1,l=new this(s);++o<i;)a=e[o],t.resolve(a).then(function(e){r||(r=!0,n.resolve(l,e))},function(e){r||(r=!0,n.reject(l,e))});return l}},{immediate:36}],38:[function(e,t,i){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,i){var r=e("./zlib/deflate"),s=e("./utils/common"),n=e("./utils/strings"),a=e("./zlib/messages"),o=e("./zlib/zstream"),l=Object.prototype.toString,c=0,d=-1,h=0,p=8;function u(e){if(!(this instanceof u))return new u(e);this.options=s.assign({level:d,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var i=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(i!==c)throw new Error(a[i]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var f;if(f="string"==typeof t.dictionary?n.string2buf(t.dictionary):"[object ArrayBuffer]"===l.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(i=r.deflateSetDictionary(this.strm,f))!==c)throw new Error(a[i]);this._dict_set=!0}}function f(e,t){var i=new u(t);if(i.push(e,!0),i.err)throw i.msg||a[i.err];return i.result}u.prototype.push=function(e,t){var i,a,o=this.strm,d=this.options.chunkSize;if(this.ended)return!1;a=t===~~t?t:!0===t?4:0,"string"==typeof e?o.input=n.string2buf(e):"[object ArrayBuffer]"===l.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new s.Buf8(d),o.next_out=0,o.avail_out=d),1!==(i=r.deflate(o,a))&&i!==c)return this.onEnd(i),!(this.ended=!0);0!==o.avail_out&&(0!==o.avail_in||4!==a&&2!==a)||("string"===this.options.to?this.onData(n.buf2binstring(s.shrinkBuf(o.output,o.next_out))):this.onData(s.shrinkBuf(o.output,o.next_out)))}while((0<o.avail_in||0===o.avail_out)&&1!==i);return 4===a?(i=r.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===c):2!==a||(this.onEnd(c),!(o.avail_out=0))},u.prototype.onData=function(e){this.chunks.push(e)},u.prototype.onEnd=function(e){e===c&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Deflate=u,i.deflate=f,i.deflateRaw=function(e,t){return(t=t||{}).raw=!0,f(e,t)},i.gzip=function(e,t){return(t=t||{}).gzip=!0,f(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,i){var r=e("./zlib/inflate"),s=e("./utils/common"),n=e("./utils/strings"),a=e("./zlib/constants"),o=e("./zlib/messages"),l=e("./zlib/zstream"),c=e("./zlib/gzheader"),d=Object.prototype.toString;function h(e){if(!(this instanceof h))return new h(e);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var i=r.inflateInit2(this.strm,t.windowBits);if(i!==a.Z_OK)throw new Error(o[i]);this.header=new c,r.inflateGetHeader(this.strm,this.header)}function p(e,t){var i=new h(t);if(i.push(e,!0),i.err)throw i.msg||o[i.err];return i.result}h.prototype.push=function(e,t){var i,o,l,c,h,p,u=this.strm,f=this.options.chunkSize,m=this.options.dictionary,g=!1;if(this.ended)return!1;o=t===~~t?t:!0===t?a.Z_FINISH:a.Z_NO_FLUSH,"string"==typeof e?u.input=n.binstring2buf(e):"[object ArrayBuffer]"===d.call(e)?u.input=new Uint8Array(e):u.input=e,u.next_in=0,u.avail_in=u.input.length;do{if(0===u.avail_out&&(u.output=new s.Buf8(f),u.next_out=0,u.avail_out=f),(i=r.inflate(u,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&m&&(p="string"==typeof m?n.string2buf(m):"[object ArrayBuffer]"===d.call(m)?new Uint8Array(m):m,i=r.inflateSetDictionary(this.strm,p)),i===a.Z_BUF_ERROR&&!0===g&&(i=a.Z_OK,g=!1),i!==a.Z_STREAM_END&&i!==a.Z_OK)return this.onEnd(i),!(this.ended=!0);u.next_out&&(0!==u.avail_out&&i!==a.Z_STREAM_END&&(0!==u.avail_in||o!==a.Z_FINISH&&o!==a.Z_SYNC_FLUSH)||("string"===this.options.to?(l=n.utf8border(u.output,u.next_out),c=u.next_out-l,h=n.buf2string(u.output,l),u.next_out=c,u.avail_out=f-c,c&&s.arraySet(u.output,u.output,l,c,0),this.onData(h)):this.onData(s.shrinkBuf(u.output,u.next_out)))),0===u.avail_in&&0===u.avail_out&&(g=!0)}while((0<u.avail_in||0===u.avail_out)&&i!==a.Z_STREAM_END);return i===a.Z_STREAM_END&&(o=a.Z_FINISH),o===a.Z_FINISH?(i=r.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===a.Z_OK):o!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),!(u.avail_out=0))},h.prototype.onData=function(e){this.chunks.push(e)},h.prototype.onEnd=function(e){e===a.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=h,i.inflate=p,i.inflateRaw=function(e,t){return(t=t||{}).raw=!0,p(e,t)},i.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,i){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var s={arraySet:function(e,t,i,r,s){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+r),s);else for(var n=0;n<r;n++)e[s+n]=t[i+n]},flattenChunks:function(e){var t,i,r,s,n,a;for(t=r=0,i=e.length;t<i;t++)r+=e[t].length;for(a=new Uint8Array(r),t=s=0,i=e.length;t<i;t++)n=e[t],a.set(n,s),s+=n.length;return a}},n={arraySet:function(e,t,i,r,s){for(var n=0;n<r;n++)e[s+n]=t[i+n]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,s)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,n))},i.setTyped(r)},{}],42:[function(e,t,i){var r=e("./common"),s=!0,n=!0;try{String.fromCharCode.apply(null,[0])}catch(e){s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){n=!1}for(var a=new r.Buf8(256),o=0;o<256;o++)a[o]=252<=o?6:248<=o?5:240<=o?4:224<=o?3:192<=o?2:1;function l(e,t){if(t<65537&&(e.subarray&&n||!e.subarray&&s))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var i="",a=0;a<t;a++)i+=String.fromCharCode(e[a]);return i}a[254]=a[254]=1,i.string2buf=function(e){var t,i,s,n,a,o=e.length,l=0;for(n=0;n<o;n++)55296==(64512&(i=e.charCodeAt(n)))&&n+1<o&&56320==(64512&(s=e.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(s-56320),n++),l+=i<128?1:i<2048?2:i<65536?3:4;for(t=new r.Buf8(l),n=a=0;a<l;n++)55296==(64512&(i=e.charCodeAt(n)))&&n+1<o&&56320==(64512&(s=e.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(s-56320),n++),i<128?t[a++]=i:(i<2048?t[a++]=192|i>>>6:(i<65536?t[a++]=224|i>>>12:(t[a++]=240|i>>>18,t[a++]=128|i>>>12&63),t[a++]=128|i>>>6&63),t[a++]=128|63&i);return t},i.buf2binstring=function(e){return l(e,e.length)},i.binstring2buf=function(e){for(var t=new r.Buf8(e.length),i=0,s=t.length;i<s;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,r,s,n,o=t||e.length,c=new Array(2*o);for(i=r=0;i<o;)if((s=e[i++])<128)c[r++]=s;else if(4<(n=a[s]))c[r++]=65533,i+=n-1;else{for(s&=2===n?31:3===n?15:7;1<n&&i<o;)s=s<<6|63&e[i++],n--;1<n?c[r++]=65533:s<65536?c[r++]=s:(s-=65536,c[r++]=55296|s>>10&1023,c[r++]=56320|1023&s)}return l(c,r)},i.utf8border=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0||0===i?t:i+a[e[i]]>t?i:t}},{"./common":41}],43:[function(e,t,i){t.exports=function(e,t,i,r){for(var s=65535&e,n=e>>>16&65535,a=0;0!==i;){for(i-=a=2e3<i?2e3:i;n=n+(s=s+t[r++]|0)|0,--a;);s%=65521,n%=65521}return s|n<<16}},{}],44:[function(e,t,i){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,i){var r=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t,i,s){var n=r,a=s+i;e^=-1;for(var o=s;o<a;o++)e=e>>>8^n[255&(e^t[o])];return-1^e}},{}],46:[function(e,t,i){var r,s=e("../utils/common"),n=e("./trees"),a=e("./adler32"),o=e("./crc32"),l=e("./messages"),c=0,d=4,h=0,p=-2,u=-1,f=4,m=2,g=8,b=9,v=286,_=30,x=19,y=2*v+1,w=15,k=3,$=258,S=$+k+1,z=42,A=113,E=1,C=2,I=3,R=4;function T(e,t){return e.msg=l[t],t}function O(e){return(e<<1)-(4<e?9:0)}function F(e){for(var t=e.length;0<=--t;)e[t]=0}function D(e){var t=e.state,i=t.pending;i>e.avail_out&&(i=e.avail_out),0!==i&&(s.arraySet(e.output,t.pending_buf,t.pending_out,i,e.next_out),e.next_out+=i,t.pending_out+=i,e.total_out+=i,e.avail_out-=i,t.pending-=i,0===t.pending&&(t.pending_out=0))}function P(e,t){n._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,D(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function B(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function N(e,t){var i,r,s=e.max_chain_length,n=e.strstart,a=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-S?e.strstart-(e.w_size-S):0,c=e.window,d=e.w_mask,h=e.prev,p=e.strstart+$,u=c[n+a-1],f=c[n+a];e.prev_length>=e.good_match&&(s>>=2),o>e.lookahead&&(o=e.lookahead);do{if(c[(i=t)+a]===f&&c[i+a-1]===u&&c[i]===c[n]&&c[++i]===c[n+1]){n+=2,i++;do{}while(c[++n]===c[++i]&&c[++n]===c[++i]&&c[++n]===c[++i]&&c[++n]===c[++i]&&c[++n]===c[++i]&&c[++n]===c[++i]&&c[++n]===c[++i]&&c[++n]===c[++i]&&n<p);if(r=$-(p-n),n=p-$,a<r){if(e.match_start=t,o<=(a=r))break;u=c[n+a-1],f=c[n+a]}}}while((t=h[t&d])>l&&0!=--s);return a<=e.lookahead?a:e.lookahead}function j(e){var t,i,r,n,l,c,d,h,p,u,f=e.w_size;do{if(n=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-S)){for(s.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=i=e.hash_size;r=e.head[--t],e.head[t]=f<=r?r-f:0,--i;);for(t=i=f;r=e.prev[--t],e.prev[t]=f<=r?r-f:0,--i;);n+=f}if(0===e.strm.avail_in)break;if(c=e.strm,d=e.window,h=e.strstart+e.lookahead,u=void 0,(p=n)<(u=c.avail_in)&&(u=p),i=0===u?0:(c.avail_in-=u,s.arraySet(d,c.input,c.next_in,u,h),1===c.state.wrap?c.adler=a(c.adler,d,u,h):2===c.state.wrap&&(c.adler=o(c.adler,d,u,h)),c.next_in+=u,c.total_in+=u,u),e.lookahead+=i,e.lookahead+e.insert>=k)for(l=e.strstart-e.insert,e.ins_h=e.window[l],e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+k-1])&e.hash_mask,e.prev[l&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=l,l++,e.insert--,!(e.lookahead+e.insert<k)););}while(e.lookahead<S&&0!==e.strm.avail_in)}function U(e,t){for(var i,r;;){if(e.lookahead<S){if(j(e),e.lookahead<S&&t===c)return E;if(0===e.lookahead)break}if(i=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==i&&e.strstart-i<=e.w_size-S&&(e.match_length=N(e,i)),e.match_length>=k)if(r=n._tr_tally(e,e.strstart-e.match_start,e.match_length-k),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=k){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=n._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(P(e,!1),0===e.strm.avail_out))return E}return e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(P(e,!0),0===e.strm.avail_out?I:R):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?E:C}function M(e,t){for(var i,r,s;;){if(e.lookahead<S){if(j(e),e.lookahead<S&&t===c)return E;if(0===e.lookahead)break}if(i=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=k-1,0!==i&&e.prev_length<e.max_lazy_match&&e.strstart-i<=e.w_size-S&&(e.match_length=N(e,i),e.match_length<=5&&(1===e.strategy||e.match_length===k&&4096<e.strstart-e.match_start)&&(e.match_length=k-1)),e.prev_length>=k&&e.match_length<=e.prev_length){for(s=e.strstart+e.lookahead-k,r=n._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-k),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=s&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=k-1,e.strstart++,r&&(P(e,!1),0===e.strm.avail_out))return E}else if(e.match_available){if((r=n._tr_tally(e,0,e.window[e.strstart-1]))&&P(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return E}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=n._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(P(e,!0),0===e.strm.avail_out?I:R):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?E:C}function W(e,t,i,r,s){this.good_length=e,this.max_lazy=t,this.nice_length=i,this.max_chain=r,this.func=s}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*y),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*x+1)),F(this.dyn_ltree),F(this.dyn_dtree),F(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(w+1),this.heap=new s.Buf16(2*v+1),F(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*v+1),F(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Z(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=m,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?z:A,e.adler=2===t.wrap?0:1,t.last_flush=c,n._tr_init(t),h):T(e,p)}function G(e){var t=Z(e);return t===h&&function(e){e.window_size=2*e.w_size,F(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=k-1,e.match_available=0,e.ins_h=0}(e.state),t}function K(e,t,i,r,n,a){if(!e)return p;var o=1;if(t===u&&(t=6),r<0?(o=0,r=-r):15<r&&(o=2,r-=16),n<1||b<n||i!==g||r<8||15<r||t<0||9<t||a<0||f<a)return T(e,p);8===r&&(r=9);var l=new H;return(e.state=l).strm=e,l.wrap=o,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=n+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+k-1)/k),l.window=new s.Buf8(2*l.w_size),l.head=new s.Buf16(l.hash_size),l.prev=new s.Buf16(l.w_size),l.lit_bufsize=1<<n+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new s.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=t,l.strategy=a,l.method=i,G(e)}r=[new W(0,0,0,0,function(e,t){var i=65535;for(i>e.pending_buf_size-5&&(i=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===c)return E;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+i;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,P(e,!1),0===e.strm.avail_out))return E;if(e.strstart-e.block_start>=e.w_size-S&&(P(e,!1),0===e.strm.avail_out))return E}return e.insert=0,t===d?(P(e,!0),0===e.strm.avail_out?I:R):(e.strstart>e.block_start&&(P(e,!1),e.strm.avail_out),E)}),new W(4,4,8,4,U),new W(4,5,16,8,U),new W(4,6,32,32,U),new W(4,4,16,16,M),new W(8,16,32,32,M),new W(8,16,128,128,M),new W(8,32,128,256,M),new W(32,128,258,1024,M),new W(32,258,258,4096,M)],i.deflateInit=function(e,t){return K(e,t,g,15,8,0)},i.deflateInit2=K,i.deflateReset=G,i.deflateResetKeep=Z,i.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?p:(e.state.gzhead=t,h):p},i.deflate=function(e,t){var i,s,a,l;if(!e||!e.state||5<t||t<0)return e?T(e,p):p;if(s=e.state,!e.output||!e.input&&0!==e.avail_in||666===s.status&&t!==d)return T(e,0===e.avail_out?-5:p);if(s.strm=e,i=s.last_flush,s.last_flush=t,s.status===z)if(2===s.wrap)e.adler=0,L(s,31),L(s,139),L(s,8),s.gzhead?(L(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(s.gzhead.extra?4:0)+(s.gzhead.name?8:0)+(s.gzhead.comment?16:0)),L(s,255&s.gzhead.time),L(s,s.gzhead.time>>8&255),L(s,s.gzhead.time>>16&255),L(s,s.gzhead.time>>24&255),L(s,9===s.level?2:2<=s.strategy||s.level<2?4:0),L(s,255&s.gzhead.os),s.gzhead.extra&&s.gzhead.extra.length&&(L(s,255&s.gzhead.extra.length),L(s,s.gzhead.extra.length>>8&255)),s.gzhead.hcrc&&(e.adler=o(e.adler,s.pending_buf,s.pending,0)),s.gzindex=0,s.status=69):(L(s,0),L(s,0),L(s,0),L(s,0),L(s,0),L(s,9===s.level?2:2<=s.strategy||s.level<2?4:0),L(s,3),s.status=A);else{var u=g+(s.w_bits-8<<4)<<8;u|=(2<=s.strategy||s.level<2?0:s.level<6?1:6===s.level?2:3)<<6,0!==s.strstart&&(u|=32),u+=31-u%31,s.status=A,B(s,u),0!==s.strstart&&(B(s,e.adler>>>16),B(s,65535&e.adler)),e.adler=1}if(69===s.status)if(s.gzhead.extra){for(a=s.pending;s.gzindex<(65535&s.gzhead.extra.length)&&(s.pending!==s.pending_buf_size||(s.gzhead.hcrc&&s.pending>a&&(e.adler=o(e.adler,s.pending_buf,s.pending-a,a)),D(e),a=s.pending,s.pending!==s.pending_buf_size));)L(s,255&s.gzhead.extra[s.gzindex]),s.gzindex++;s.gzhead.hcrc&&s.pending>a&&(e.adler=o(e.adler,s.pending_buf,s.pending-a,a)),s.gzindex===s.gzhead.extra.length&&(s.gzindex=0,s.status=73)}else s.status=73;if(73===s.status)if(s.gzhead.name){a=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>a&&(e.adler=o(e.adler,s.pending_buf,s.pending-a,a)),D(e),a=s.pending,s.pending===s.pending_buf_size)){l=1;break}l=s.gzindex<s.gzhead.name.length?255&s.gzhead.name.charCodeAt(s.gzindex++):0,L(s,l)}while(0!==l);s.gzhead.hcrc&&s.pending>a&&(e.adler=o(e.adler,s.pending_buf,s.pending-a,a)),0===l&&(s.gzindex=0,s.status=91)}else s.status=91;if(91===s.status)if(s.gzhead.comment){a=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>a&&(e.adler=o(e.adler,s.pending_buf,s.pending-a,a)),D(e),a=s.pending,s.pending===s.pending_buf_size)){l=1;break}l=s.gzindex<s.gzhead.comment.length?255&s.gzhead.comment.charCodeAt(s.gzindex++):0,L(s,l)}while(0!==l);s.gzhead.hcrc&&s.pending>a&&(e.adler=o(e.adler,s.pending_buf,s.pending-a,a)),0===l&&(s.status=103)}else s.status=103;if(103===s.status&&(s.gzhead.hcrc?(s.pending+2>s.pending_buf_size&&D(e),s.pending+2<=s.pending_buf_size&&(L(s,255&e.adler),L(s,e.adler>>8&255),e.adler=0,s.status=A)):s.status=A),0!==s.pending){if(D(e),0===e.avail_out)return s.last_flush=-1,h}else if(0===e.avail_in&&O(t)<=O(i)&&t!==d)return T(e,-5);if(666===s.status&&0!==e.avail_in)return T(e,-5);if(0!==e.avail_in||0!==s.lookahead||t!==c&&666!==s.status){var f=2===s.strategy?function(e,t){for(var i;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===c)return E;break}if(e.match_length=0,i=n._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,i&&(P(e,!1),0===e.strm.avail_out))return E}return e.insert=0,t===d?(P(e,!0),0===e.strm.avail_out?I:R):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?E:C}(s,t):3===s.strategy?function(e,t){for(var i,r,s,a,o=e.window;;){if(e.lookahead<=$){if(j(e),e.lookahead<=$&&t===c)return E;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=k&&0<e.strstart&&(r=o[s=e.strstart-1])===o[++s]&&r===o[++s]&&r===o[++s]){a=e.strstart+$;do{}while(r===o[++s]&&r===o[++s]&&r===o[++s]&&r===o[++s]&&r===o[++s]&&r===o[++s]&&r===o[++s]&&r===o[++s]&&s<a);e.match_length=$-(a-s),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=k?(i=n._tr_tally(e,1,e.match_length-k),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(i=n._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),i&&(P(e,!1),0===e.strm.avail_out))return E}return e.insert=0,t===d?(P(e,!0),0===e.strm.avail_out?I:R):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?E:C}(s,t):r[s.level].func(s,t);if(f!==I&&f!==R||(s.status=666),f===E||f===I)return 0===e.avail_out&&(s.last_flush=-1),h;if(f===C&&(1===t?n._tr_align(s):5!==t&&(n._tr_stored_block(s,0,0,!1),3===t&&(F(s.head),0===s.lookahead&&(s.strstart=0,s.block_start=0,s.insert=0))),D(e),0===e.avail_out))return s.last_flush=-1,h}return t!==d?h:s.wrap<=0?1:(2===s.wrap?(L(s,255&e.adler),L(s,e.adler>>8&255),L(s,e.adler>>16&255),L(s,e.adler>>24&255),L(s,255&e.total_in),L(s,e.total_in>>8&255),L(s,e.total_in>>16&255),L(s,e.total_in>>24&255)):(B(s,e.adler>>>16),B(s,65535&e.adler)),D(e),0<s.wrap&&(s.wrap=-s.wrap),0!==s.pending?h:1)},i.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==z&&69!==t&&73!==t&&91!==t&&103!==t&&t!==A&&666!==t?T(e,p):(e.state=null,t===A?T(e,-3):h):p},i.deflateSetDictionary=function(e,t){var i,r,n,o,l,c,d,u,f=t.length;if(!e||!e.state)return p;if(2===(o=(i=e.state).wrap)||1===o&&i.status!==z||i.lookahead)return p;for(1===o&&(e.adler=a(e.adler,t,f,0)),i.wrap=0,f>=i.w_size&&(0===o&&(F(i.head),i.strstart=0,i.block_start=0,i.insert=0),u=new s.Buf8(i.w_size),s.arraySet(u,t,f-i.w_size,i.w_size,0),t=u,f=i.w_size),l=e.avail_in,c=e.next_in,d=e.input,e.avail_in=f,e.next_in=0,e.input=t,j(i);i.lookahead>=k;){for(r=i.strstart,n=i.lookahead-(k-1);i.ins_h=(i.ins_h<<i.hash_shift^i.window[r+k-1])&i.hash_mask,i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++,--n;);i.strstart=r,i.lookahead=k-1,j(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=k-1,i.match_available=0,e.next_in=c,e.input=d,e.avail_in=l,i.wrap=o,h},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,i){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,i){t.exports=function(e,t){var i,r,s,n,a,o,l,c,d,h,p,u,f,m,g,b,v,_,x,y,w,k,$,S,z;i=e.state,r=e.next_in,S=e.input,s=r+(e.avail_in-5),n=e.next_out,z=e.output,a=n-(t-e.avail_out),o=n+(e.avail_out-257),l=i.dmax,c=i.wsize,d=i.whave,h=i.wnext,p=i.window,u=i.hold,f=i.bits,m=i.lencode,g=i.distcode,b=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{f<15&&(u+=S[r++]<<f,f+=8,u+=S[r++]<<f,f+=8),_=m[u&b];t:for(;;){if(u>>>=x=_>>>24,f-=x,0==(x=_>>>16&255))z[n++]=65535&_;else{if(!(16&x)){if(!(64&x)){_=m[(65535&_)+(u&(1<<x)-1)];continue t}if(32&x){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}y=65535&_,(x&=15)&&(f<x&&(u+=S[r++]<<f,f+=8),y+=u&(1<<x)-1,u>>>=x,f-=x),f<15&&(u+=S[r++]<<f,f+=8,u+=S[r++]<<f,f+=8),_=g[u&v];i:for(;;){if(u>>>=x=_>>>24,f-=x,!(16&(x=_>>>16&255))){if(!(64&x)){_=g[(65535&_)+(u&(1<<x)-1)];continue i}e.msg="invalid distance code",i.mode=30;break e}if(w=65535&_,f<(x&=15)&&(u+=S[r++]<<f,(f+=8)<x&&(u+=S[r++]<<f,f+=8)),l<(w+=u&(1<<x)-1)){e.msg="invalid distance too far back",i.mode=30;break e}if(u>>>=x,f-=x,(x=n-a)<w){if(d<(x=w-x)&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if($=p,(k=0)===h){if(k+=c-x,x<y){for(y-=x;z[n++]=p[k++],--x;);k=n-w,$=z}}else if(h<x){if(k+=c+h-x,(x-=h)<y){for(y-=x;z[n++]=p[k++],--x;);if(k=0,h<y){for(y-=x=h;z[n++]=p[k++],--x;);k=n-w,$=z}}}else if(k+=h-x,x<y){for(y-=x;z[n++]=p[k++],--x;);k=n-w,$=z}for(;2<y;)z[n++]=$[k++],z[n++]=$[k++],z[n++]=$[k++],y-=3;y&&(z[n++]=$[k++],1<y&&(z[n++]=$[k++]))}else{for(k=n-w;z[n++]=z[k++],z[n++]=z[k++],z[n++]=z[k++],2<(y-=3););y&&(z[n++]=z[k++],1<y&&(z[n++]=z[k++]))}break}}break}}while(r<s&&n<o);r-=y=f>>3,u&=(1<<(f-=y<<3))-1,e.next_in=r,e.next_out=n,e.avail_in=r<s?s-r+5:5-(r-s),e.avail_out=n<o?o-n+257:257-(n-o),i.hold=u,i.bits=f}},{}],49:[function(e,t,i){var r=e("../utils/common"),s=e("./adler32"),n=e("./crc32"),a=e("./inffast"),o=e("./inftrees"),l=1,c=2,d=0,h=-2,p=1,u=852,f=592;function m(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=p,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(u),t.distcode=t.distdyn=new r.Buf32(f),t.sane=1,t.back=-1,d):h}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,b(e)):h}function _(e,t){var i,r;return e&&e.state?(r=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?h:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=i,r.wbits=t,v(e))):h}function x(e,t){var i,r;return e?(r=new g,(e.state=r).window=null,(i=_(e,t))!==d&&(e.state=null),i):h}var y,w,k=!0;function $(e){if(k){var t;for(y=new r.Buf32(512),w=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(o(l,e.lens,0,288,y,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;o(c,e.lens,0,32,w,0,e.work,{bits:5}),k=!1}e.lencode=y,e.lenbits=9,e.distcode=w,e.distbits=5}function S(e,t,i,s){var n,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new r.Buf8(a.wsize)),s>=a.wsize?(r.arraySet(a.window,t,i-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(s<(n=a.wsize-a.wnext)&&(n=s),r.arraySet(a.window,t,i-s,n,a.wnext),(s-=n)?(r.arraySet(a.window,t,i-s,s,0),a.wnext=s,a.whave=a.wsize):(a.wnext+=n,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=n))),0}i.inflateReset=v,i.inflateReset2=_,i.inflateResetKeep=b,i.inflateInit=function(e){return x(e,15)},i.inflateInit2=x,i.inflate=function(e,t){var i,u,f,g,b,v,_,x,y,w,k,z,A,E,C,I,R,T,O,F,D,P,L,B,N=0,j=new r.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return h;12===(i=e.state).mode&&(i.mode=13),b=e.next_out,f=e.output,_=e.avail_out,g=e.next_in,u=e.input,v=e.avail_in,x=i.hold,y=i.bits,w=v,k=_,P=d;e:for(;;)switch(i.mode){case p:if(0===i.wrap){i.mode=13;break}for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(2&i.wrap&&35615===x){j[i.check=0]=255&x,j[1]=x>>>8&255,i.check=n(i.check,j,2,0),y=x=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&x)<<8)+(x>>8))%31){e.msg="incorrect header check",i.mode=30;break}if(8!=(15&x)){e.msg="unknown compression method",i.mode=30;break}if(y-=4,D=8+(15&(x>>>=4)),0===i.wbits)i.wbits=D;else if(D>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<D,e.adler=i.check=1,i.mode=512&x?10:12,y=x=0;break;case 2:for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(i.flags=x,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=x>>8&1),512&i.flags&&(j[0]=255&x,j[1]=x>>>8&255,i.check=n(i.check,j,2,0)),y=x=0,i.mode=3;case 3:for(;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.head&&(i.head.time=x),512&i.flags&&(j[0]=255&x,j[1]=x>>>8&255,j[2]=x>>>16&255,j[3]=x>>>24&255,i.check=n(i.check,j,4,0)),y=x=0,i.mode=4;case 4:for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.head&&(i.head.xflags=255&x,i.head.os=x>>8),512&i.flags&&(j[0]=255&x,j[1]=x>>>8&255,i.check=n(i.check,j,2,0)),y=x=0,i.mode=5;case 5:if(1024&i.flags){for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.length=x,i.head&&(i.head.extra_len=x),512&i.flags&&(j[0]=255&x,j[1]=x>>>8&255,i.check=n(i.check,j,2,0)),y=x=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&(v<(z=i.length)&&(z=v),z&&(i.head&&(D=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),r.arraySet(i.head.extra,u,g,z,D)),512&i.flags&&(i.check=n(i.check,u,z,g)),v-=z,g+=z,i.length-=z),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===v)break e;for(z=0;D=u[g+z++],i.head&&D&&i.length<65536&&(i.head.name+=String.fromCharCode(D)),D&&z<v;);if(512&i.flags&&(i.check=n(i.check,u,z,g)),v-=z,g+=z,D)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===v)break e;for(z=0;D=u[g+z++],i.head&&D&&i.length<65536&&(i.head.comment+=String.fromCharCode(D)),D&&z<v;);if(512&i.flags&&(i.check=n(i.check,u,z,g)),v-=z,g+=z,D)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;y<16;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(x!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}y=x=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}e.adler=i.check=m(x),y=x=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=b,e.avail_out=_,e.next_in=g,e.avail_in=v,i.hold=x,i.bits=y,2;e.adler=i.check=1,i.mode=12;case 12:if(5===t||6===t)break e;case 13:if(i.last){x>>>=7&y,y-=7&y,i.mode=27;break}for(;y<3;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}switch(i.last=1&x,y-=1,3&(x>>>=1)){case 0:i.mode=14;break;case 1:if($(i),i.mode=20,6!==t)break;x>>>=2,y-=2;break e;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}x>>>=2,y-=2;break;case 14:for(x>>>=7&y,y-=7&y;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if((65535&x)!=(x>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&x,y=x=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(z=i.length){if(v<z&&(z=v),_<z&&(z=_),0===z)break e;r.arraySet(f,u,g,z,b),v-=z,g+=z,_-=z,b+=z,i.length-=z;break}i.mode=12;break;case 17:for(;y<14;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(i.nlen=257+(31&x),x>>>=5,y-=5,i.ndist=1+(31&x),x>>>=5,y-=5,i.ncode=4+(15&x),x>>>=4,y-=4,286<i.nlen||30<i.ndist){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;y<3;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.lens[U[i.have++]]=7&x,x>>>=3,y-=3}for(;i.have<19;)i.lens[U[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,L={bits:i.lenbits},P=o(0,i.lens,0,19,i.lencode,0,i.work,L),i.lenbits=L.bits,P){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;I=(N=i.lencode[x&(1<<i.lenbits)-1])>>>16&255,R=65535&N,!((C=N>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(R<16)x>>>=C,y-=C,i.lens[i.have++]=R;else{if(16===R){for(B=C+2;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(x>>>=C,y-=C,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}D=i.lens[i.have-1],z=3+(3&x),x>>>=2,y-=2}else if(17===R){for(B=C+3;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}y-=C,D=0,z=3+(7&(x>>>=C)),x>>>=3,y-=3}else{for(B=C+7;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}y-=C,D=0,z=11+(127&(x>>>=C)),x>>>=7,y-=7}if(i.have+z>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;z--;)i.lens[i.have++]=D}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,L={bits:i.lenbits},P=o(l,i.lens,0,i.nlen,i.lencode,0,i.work,L),i.lenbits=L.bits,P){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,L={bits:i.distbits},P=o(c,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,L),i.distbits=L.bits,P){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(6<=v&&258<=_){e.next_out=b,e.avail_out=_,e.next_in=g,e.avail_in=v,i.hold=x,i.bits=y,a(e,k),b=e.next_out,f=e.output,_=e.avail_out,g=e.next_in,u=e.input,v=e.avail_in,x=i.hold,y=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;I=(N=i.lencode[x&(1<<i.lenbits)-1])>>>16&255,R=65535&N,!((C=N>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(I&&!(240&I)){for(T=C,O=I,F=R;I=(N=i.lencode[F+((x&(1<<T+O)-1)>>T)])>>>16&255,R=65535&N,!(T+(C=N>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}x>>>=T,y-=T,i.back+=T}if(x>>>=C,y-=C,i.back+=C,i.length=R,0===I){i.mode=26;break}if(32&I){i.back=-1,i.mode=12;break}if(64&I){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&I,i.mode=22;case 22:if(i.extra){for(B=i.extra;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.length+=x&(1<<i.extra)-1,x>>>=i.extra,y-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;I=(N=i.distcode[x&(1<<i.distbits)-1])>>>16&255,R=65535&N,!((C=N>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(!(240&I)){for(T=C,O=I,F=R;I=(N=i.distcode[F+((x&(1<<T+O)-1)>>T)])>>>16&255,R=65535&N,!(T+(C=N>>>24)<=y);){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}x>>>=T,y-=T,i.back+=T}if(x>>>=C,y-=C,i.back+=C,64&I){e.msg="invalid distance code",i.mode=30;break}i.offset=R,i.extra=15&I,i.mode=24;case 24:if(i.extra){for(B=i.extra;y<B;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}i.offset+=x&(1<<i.extra)-1,x>>>=i.extra,y-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===_)break e;if(z=k-_,i.offset>z){if((z=i.offset-z)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}A=z>i.wnext?(z-=i.wnext,i.wsize-z):i.wnext-z,z>i.length&&(z=i.length),E=i.window}else E=f,A=b-i.offset,z=i.length;for(_<z&&(z=_),_-=z,i.length-=z;f[b++]=E[A++],--z;);0===i.length&&(i.mode=21);break;case 26:if(0===_)break e;f[b++]=i.length,_--,i.mode=21;break;case 27:if(i.wrap){for(;y<32;){if(0===v)break e;v--,x|=u[g++]<<y,y+=8}if(k-=_,e.total_out+=k,i.total+=k,k&&(e.adler=i.check=i.flags?n(i.check,f,k,b-k):s(i.check,f,k,b-k)),k=_,(i.flags?x:m(x))!==i.check){e.msg="incorrect data check",i.mode=30;break}y=x=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;y<32;){if(0===v)break e;v--,x+=u[g++]<<y,y+=8}if(x!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}y=x=0}i.mode=29;case 29:P=1;break e;case 30:P=-3;break e;case 31:return-4;default:return h}return e.next_out=b,e.avail_out=_,e.next_in=g,e.avail_in=v,i.hold=x,i.bits=y,(i.wsize||k!==e.avail_out&&i.mode<30&&(i.mode<27||4!==t))&&S(e,e.output,e.next_out,k-e.avail_out)?(i.mode=31,-4):(w-=e.avail_in,k-=e.avail_out,e.total_in+=w,e.total_out+=k,i.total+=k,i.wrap&&k&&(e.adler=i.check=i.flags?n(i.check,f,k,e.next_out-k):s(i.check,f,k,e.next_out-k)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0==w&&0===k||4===t)&&P===d&&(P=-5),P)},i.inflateEnd=function(e){if(!e||!e.state)return h;var t=e.state;return t.window&&(t.window=null),e.state=null,d},i.inflateGetHeader=function(e,t){var i;return e&&e.state&&2&(i=e.state).wrap?((i.head=t).done=!1,d):h},i.inflateSetDictionary=function(e,t){var i,r=t.length;return e&&e.state?0!==(i=e.state).wrap&&11!==i.mode?h:11===i.mode&&s(1,t,r,0)!==i.check?-3:S(e,t,r,r)?(i.mode=31,-4):(i.havedict=1,d):h},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,i){var r=e("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,l,c,d,h,p){var u,f,m,g,b,v,_,x,y,w=p.bits,k=0,$=0,S=0,z=0,A=0,E=0,C=0,I=0,R=0,T=0,O=null,F=0,D=new r.Buf16(16),P=new r.Buf16(16),L=null,B=0;for(k=0;k<=15;k++)D[k]=0;for($=0;$<l;$++)D[t[i+$]]++;for(A=w,z=15;1<=z&&0===D[z];z--);if(z<A&&(A=z),0===z)return c[d++]=20971520,c[d++]=20971520,p.bits=1,0;for(S=1;S<z&&0===D[S];S++);for(A<S&&(A=S),k=I=1;k<=15;k++)if(I<<=1,(I-=D[k])<0)return-1;if(0<I&&(0===e||1!==z))return-1;for(P[1]=0,k=1;k<15;k++)P[k+1]=P[k]+D[k];for($=0;$<l;$++)0!==t[i+$]&&(h[P[t[i+$]]++]=$);if(v=0===e?(O=L=h,19):1===e?(O=s,F-=257,L=n,B-=257,256):(O=a,L=o,-1),k=S,b=d,C=$=T=0,m=-1,g=(R=1<<(E=A))-1,1===e&&852<R||2===e&&592<R)return 1;for(;;){for(_=k-C,y=h[$]<v?(x=0,h[$]):h[$]>v?(x=L[B+h[$]],O[F+h[$]]):(x=96,0),u=1<<k-C,S=f=1<<E;c[b+(T>>C)+(f-=u)]=_<<24|x<<16|y,0!==f;);for(u=1<<k-1;T&u;)u>>=1;if(0!==u?(T&=u-1,T+=u):T=0,$++,0==--D[k]){if(k===z)break;k=t[i+h[$]]}if(A<k&&(T&g)!==m){for(0===C&&(C=A),b+=S,I=1<<(E=k-C);E+C<z&&!((I-=D[E+C])<=0);)E++,I<<=1;if(R+=1<<E,1===e&&852<R||2===e&&592<R)return 1;c[m=T&g]=A<<24|E<<16|b-d}}return 0!==T&&(c[b+T]=k-C<<24|64<<16),p.bits=A,0}},{"../utils/common":41}],51:[function(e,t,i){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,i){var r=e("../utils/common"),s=0,n=1;function a(e){for(var t=e.length;0<=--t;)e[t]=0}var o=0,l=29,c=256,d=c+1+l,h=30,p=19,u=2*d+1,f=15,m=16,g=7,b=256,v=16,_=17,x=18,y=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],w=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S=new Array(2*(d+2));a(S);var z=new Array(2*h);a(z);var A=new Array(512);a(A);var E=new Array(256);a(E);var C=new Array(l);a(C);var I,R,T,O=new Array(h);function F(e,t,i,r,s){this.static_tree=e,this.extra_bits=t,this.extra_base=i,this.elems=r,this.max_length=s,this.has_stree=e&&e.length}function D(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function P(e){return e<256?A[e]:A[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function B(e,t,i){e.bi_valid>m-i?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>m-e.bi_valid,e.bi_valid+=i-m):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=i)}function N(e,t,i){B(e,i[2*t],i[2*t+1])}function j(e,t){for(var i=0;i|=1&e,e>>>=1,i<<=1,0<--t;);return i>>>1}function U(e,t,i){var r,s,n=new Array(f+1),a=0;for(r=1;r<=f;r++)n[r]=a=a+i[r-1]<<1;for(s=0;s<=t;s++){var o=e[2*s+1];0!==o&&(e[2*s]=j(n[o]++,o))}}function M(e){var t;for(t=0;t<d;t++)e.dyn_ltree[2*t]=0;for(t=0;t<h;t++)e.dyn_dtree[2*t]=0;for(t=0;t<p;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*b]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function W(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,i,r){var s=2*t,n=2*i;return e[s]<e[n]||e[s]===e[n]&&r[t]<=r[i]}function Z(e,t,i){for(var r=e.heap[i],s=i<<1;s<=e.heap_len&&(s<e.heap_len&&H(t,e.heap[s+1],e.heap[s],e.depth)&&s++,!H(t,r,e.heap[s],e.depth));)e.heap[i]=e.heap[s],i=s,s<<=1;e.heap[i]=r}function G(e,t,i){var r,s,n,a,o=0;if(0!==e.last_lit)for(;r=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],s=e.pending_buf[e.l_buf+o],o++,0===r?N(e,s,t):(N(e,(n=E[s])+c+1,t),0!==(a=y[n])&&B(e,s-=C[n],a),N(e,n=P(--r),i),0!==(a=w[n])&&B(e,r-=O[n],a)),o<e.last_lit;);N(e,b,t)}function K(e,t){var i,r,s,n=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=u,i=0;i<l;i++)0!==n[2*i]?(e.heap[++e.heap_len]=c=i,e.depth[i]=0):n[2*i+1]=0;for(;e.heap_len<2;)n[2*(s=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[s]=0,e.opt_len--,o&&(e.static_len-=a[2*s+1]);for(t.max_code=c,i=e.heap_len>>1;1<=i;i--)Z(e,n,i);for(s=l;i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Z(e,n,1),r=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=r,n[2*s]=n[2*i]+n[2*r],e.depth[s]=(e.depth[i]>=e.depth[r]?e.depth[i]:e.depth[r])+1,n[2*i+1]=n[2*r+1]=s,e.heap[1]=s++,Z(e,n,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var i,r,s,n,a,o,l=t.dyn_tree,c=t.max_code,d=t.stat_desc.static_tree,h=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,m=t.stat_desc.extra_base,g=t.stat_desc.max_length,b=0;for(n=0;n<=f;n++)e.bl_count[n]=0;for(l[2*e.heap[e.heap_max]+1]=0,i=e.heap_max+1;i<u;i++)g<(n=l[2*l[2*(r=e.heap[i])+1]+1]+1)&&(n=g,b++),l[2*r+1]=n,c<r||(e.bl_count[n]++,a=0,m<=r&&(a=p[r-m]),o=l[2*r],e.opt_len+=o*(n+a),h&&(e.static_len+=o*(d[2*r+1]+a)));if(0!==b){do{for(n=g-1;0===e.bl_count[n];)n--;e.bl_count[n]--,e.bl_count[n+1]+=2,e.bl_count[g]--,b-=2}while(0<b);for(n=g;0!==n;n--)for(r=e.bl_count[n];0!==r;)c<(s=e.heap[--i])||(l[2*s+1]!==n&&(e.opt_len+=(n-l[2*s+1])*l[2*s],l[2*s+1]=n),r--)}}(e,t),U(n,c,e.bl_count)}function q(e,t,i){var r,s,n=-1,a=t[1],o=0,l=7,c=4;for(0===a&&(l=138,c=3),t[2*(i+1)+1]=65535,r=0;r<=i;r++)s=a,a=t[2*(r+1)+1],++o<l&&s===a||(o<c?e.bl_tree[2*s]+=o:0!==s?(s!==n&&e.bl_tree[2*s]++,e.bl_tree[2*v]++):o<=10?e.bl_tree[2*_]++:e.bl_tree[2*x]++,n=s,c=(o=0)===a?(l=138,3):s===a?(l=6,3):(l=7,4))}function Y(e,t,i){var r,s,n=-1,a=t[1],o=0,l=7,c=4;for(0===a&&(l=138,c=3),r=0;r<=i;r++)if(s=a,a=t[2*(r+1)+1],!(++o<l&&s===a)){if(o<c)for(;N(e,s,e.bl_tree),0!=--o;);else 0!==s?(s!==n&&(N(e,s,e.bl_tree),o--),N(e,v,e.bl_tree),B(e,o-3,2)):o<=10?(N(e,_,e.bl_tree),B(e,o-3,3)):(N(e,x,e.bl_tree),B(e,o-11,7));n=s,c=(o=0)===a?(l=138,3):s===a?(l=6,3):(l=7,4)}}a(O);var Q=!1;function V(e,t,i,s){B(e,(o<<1)+(s?1:0),3),function(e,t,i){W(e),L(e,i),L(e,~i),r.arraySet(e.pending_buf,e.window,t,i,e.pending),e.pending+=i}(e,t,i)}i._tr_init=function(e){Q||(function(){var e,t,i,r,s,n=new Array(f+1);for(r=i=0;r<l-1;r++)for(C[r]=i,e=0;e<1<<y[r];e++)E[i++]=r;for(E[i-1]=r,r=s=0;r<16;r++)for(O[r]=s,e=0;e<1<<w[r];e++)A[s++]=r;for(s>>=7;r<h;r++)for(O[r]=s<<7,e=0;e<1<<w[r]-7;e++)A[256+s++]=r;for(t=0;t<=f;t++)n[t]=0;for(e=0;e<=143;)S[2*e+1]=8,e++,n[8]++;for(;e<=255;)S[2*e+1]=9,e++,n[9]++;for(;e<=279;)S[2*e+1]=7,e++,n[7]++;for(;e<=287;)S[2*e+1]=8,e++,n[8]++;for(U(S,d+1,n),e=0;e<h;e++)z[2*e+1]=5,z[2*e]=j(e,5);I=new F(S,y,c+1,d,f),R=new F(z,w,0,h,f),T=new F(new Array(0),k,0,p,g)}(),Q=!0),e.l_desc=new D(e.dyn_ltree,I),e.d_desc=new D(e.dyn_dtree,R),e.bl_desc=new D(e.bl_tree,T),e.bi_buf=0,e.bi_valid=0,M(e)},i._tr_stored_block=V,i._tr_flush_block=function(e,t,i,r){var a,o,l=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,i=4093624447;for(t=0;t<=31;t++,i>>>=1)if(1&i&&0!==e.dyn_ltree[2*t])return s;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return n;for(t=32;t<c;t++)if(0!==e.dyn_ltree[2*t])return n;return s}(e)),K(e,e.l_desc),K(e,e.d_desc),l=function(e){var t;for(q(e,e.dyn_ltree,e.l_desc.max_code),q(e,e.dyn_dtree,e.d_desc.max_code),K(e,e.bl_desc),t=p-1;3<=t&&0===e.bl_tree[2*$[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),a=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=a&&(a=o)):a=o=i+5,i+4<=a&&-1!==t?V(e,t,i,r):4===e.strategy||o===a?(B(e,2+(r?1:0),3),G(e,S,z)):(B(e,4+(r?1:0),3),function(e,t,i,r){var s;for(B(e,t-257,5),B(e,i-1,5),B(e,r-4,4),s=0;s<r;s++)B(e,e.bl_tree[2*$[s]+1],3);Y(e,e.dyn_ltree,t-1),Y(e,e.dyn_dtree,i-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,l+1),G(e,e.dyn_ltree,e.dyn_dtree)),M(e),r&&W(e)},i._tr_tally=function(e,t,i){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&i,e.last_lit++,0===t?e.dyn_ltree[2*i]++:(e.matches++,t--,e.dyn_ltree[2*(E[i]+c+1)]++,e.dyn_dtree[2*P(t)]++),e.last_lit===e.lit_bufsize-1},i._tr_align=function(e){B(e,2,3),N(e,b,S),function(e){16===e.bi_valid?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,i){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,i){(function(e){!function(e,t){if(!e.setImmediate){var i,r,s,n,a=1,o={},l=!1,c=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,i="[object process]"==={}.toString.call(e.process)?function(e){process.nextTick(function(){p(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?(n="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),function(t){e.postMessage(n+t,"*")}):e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){p(e.data)},function(e){s.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(r=c.documentElement,function(e){var t=c.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(p,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var s={callback:e,args:t};return o[a]=s,i(a),a++},d.clearImmediate=h}function h(e){delete o[e]}function p(e){if(l)setTimeout(p,0,e);else{var i=o[e];if(i){l=!0;try{!function(e){var i=e.callback,r=e.args;switch(r.length){case 0:i();break;case 1:i(r[0]);break;case 2:i(r[0],r[1]);break;case 3:i(r[0],r[1],r[2]);break;default:i.apply(t,r)}}(i)}finally{h(e),l=!1}}}}function u(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&p(+t.data.slice(n.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,void 0!==pe?pe:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10);var ge=ue(me.exports);class be extends ae{static properties={api:{type:Object},_mode:{type:String},_url:{type:String},_scraping:{type:Boolean},_scrapeError:{type:String},_form:{type:Object},_saving:{type:Boolean},_ingredientInput:{type:String},_ratingHover:{type:Number},_importFile:{type:Object},_importing:{type:Boolean},_importResult:{type:Object},_importError:{type:String},_importDownloadImages:{type:Boolean}};constructor(){super(),this.api=null,this._mode="url",this._url="",this._scraping=!1,this._scrapeError=null,this._saving=!1,this._ingredientInput="",this._ratingHover=0,this._form=this._emptyForm(),this._importFile=null,this._importing=!1,this._importResult=null,this._importError=null,this._importDownloadImages=!0}_emptyForm(){return{name:"",description:"",source_url:"",servings:"",prep_time:"",cook_time:"",image_url:"",tags:"",courses:"",categories:"",collections:"",rating:0,notes:"",ingredients:[],instructions:[],cal:"",fat:"",satf:"",chol:"",sod:"",carb:"",fib:"",sug:"",prot:""}}_close(){this.dispatchEvent(new CustomEvent("rm-close",{bubbles:!0,composed:!0}))}async _handleScrape(){if(this._url.trim()&&!this._scraping){this._scraping=!0,this._scrapeError=null;try{const e=await this.api.scrapeRecipe(this._url.trim());if(e?.recipe){const t=e.recipe,i=t.nutrition||{};this._form={name:t.name||"",description:t.description||"",source_url:t.source_url||this._url.trim(),servings:t.servings||"",prep_time:t.prep_time||"",cook_time:t.cook_time||"",image_url:t.image_url||"",tags:(t.tags||[]).join(", "),courses:(t.courses||[]).join(", "),categories:(t.categories||[]).join(", "),collections:(t.collections||[]).join(", "),rating:t.rating||0,notes:t.notes||"",ingredients:t.ingredients||[],instructions:t.instructions||[],cal:i.calories??"",fat:i.fat??"",satf:i.saturated_fat??"",chol:i.cholesterol??"",sod:i.sodium??"",carb:i.carbohydrates??"",fib:i.fiber??"",sug:i.sugar??"",prot:i.protein??""},this._mode="manual"}else this._scrapeError=e?.error||"Could not extract recipe from this URL."}catch(e){this._scrapeError=e.message||"Scraping failed."}finally{this._scraping=!1}}}_handleImportFileChange(e){this._importFile=e.target.files[0]||null,this._importResult=null,this._importError=null}async _handleImport(){if(this._importFile&&!this._importing){this._importing=!0,this._importResult=null,this._importError=null;try{let e;try{e=await ge.loadAsync(this._importFile)}catch(e){throw new Error(`Could not open ZIP file: ${e.message}`)}const t=Object.values(e.files).find(e=>!e.dir&&e.name.endsWith(".html"));if(!t)throw new Error("No HTML file found inside the ZIP — is this a valid Recipe Keeper export?");const i=await t.async("text");console.log(`[Recipe Keeper Import] HTML extracted (${i.length} chars), sending to backend`);const r=await this.api.importRecipeKeeper(i);console.log(`[Recipe Keeper Import] Phase 1 done: ${r.imported} imported, ${r.failed} failed, ${r.recipe_images?.length??0} need images`);let s=0,n=0;if(this._importDownloadImages&&r.recipe_images?.length){const t=new Set([".jpg",".jpeg",".png",".webp",".gif",".bmp"]);for(const{recipe_id:i,image_filename:a}of r.recipe_images){const r=e.files[a]??Object.values(e.files).find(e=>{const i=a.split("/").pop();return!e.dir&&e.name.split("/").pop()===i&&t.has(e.name.slice(e.name.lastIndexOf(".")).toLowerCase())});if(r)try{const e=await r.async("base64");await this.api.uploadRecipeImage(i,e),s++}catch(e){console.warn(`[Recipe Keeper Import] Could not save image for recipe ${i}:`,e),n++}}console.log(`[Recipe Keeper Import] Phase 2 done: ${s} images saved, ${n} failed`)}this._importResult={...r,imagesSaved:s},r.imported>0&&this.dispatchEvent(new CustomEvent("rm-import-done",{bubbles:!0,composed:!0}))}catch(e){console.error("[Recipe Keeper Import] Failed:",e),this._importError=e.message||String(e)||"Import failed."}finally{this._importing=!1}}}async _handleSave(){if(this._form.name.trim()&&!this._saving){this._saving=!0;try{const e=this._form,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"},r={};let s=!1;for(const[t,n]of Object.entries(i))""!==e[t]&&null!=e[t]&&(r[n]=e[t],s=!0);const n={name:e.name,description:e.description,source_url:e.source_url,image_url:e.image_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),rating:e.rating||null,notes:e.notes,ingredients:e.ingredients,instructions:e.instructions,nutrition:s?r:null};this.dispatchEvent(new CustomEvent("rm-add-recipe",{detail:{data:n},bubbles:!0,composed:!0}))}finally{this._saving=!1}}}_setField(e,t){this._form={...this._form,[e]:t}}_addIngredient(){const e=this._ingredientInput.trim();if(!e)return;const t=e.split(/\s+/);let i="",r="",s="";t.length>=3&&!isNaN(parseFloat(t[0]))?(i=t[0],r=t[1],s=t.slice(2).join(" ")):2!==t.length||isNaN(parseFloat(t[0]))?s=e:(i=t[0],s=t[1]),this._form={...this._form,ingredients:[...this._form.ingredients,{amount:i,unit:r,name:s}]},this._ingredientInput=""}_removeIngredient(e){this._form={...this._form,ingredients:this._form.ingredients.filter((t,i)=>i!==e)}}_addStep(e){e.trim()&&(this._form={...this._form,instructions:[...this._form.instructions,e.trim()]})}_removeStep(e){this._form={...this._form,instructions:this._form.instructions.filter((t,i)=>i!==e)}}render(){return M`
      <div class="dialog-overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog-panel">
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
            <button class="icon-btn" @click=${this._close}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>

          <div class="dialog-body">
            ${"url"===this._mode?this._renderUrlMode():""}
            ${"import"===this._mode?this._renderImportMode():""}
            ${"manual"===this._mode?this._renderManualMode():""}
          </div>

          ${"manual"===this._mode?M`
            <div class="dialog-footer">
              <button class="action-btn" @click=${this._close}>Cancel</button>
              <button
                class="action-btn primary"
                ?disabled=${!this._form.name.trim()||this._saving}
                @click=${this._handleSave}
              >
                ${this._saving?M`<ha-circular-progress active size="tiny"></ha-circular-progress>`:M`<ha-icon icon="mdi:content-save-outline"></ha-icon>`}
                Save Recipe
              </button>
            </div>
          `:""}
        </div>
      </div>
    `}_renderImportMode(){return M`
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

        ${this._importResult?M`
          <div class="import-result ${this._importResult.failed>0?"partial":"success"}">
            <ha-icon icon="${this._importResult.failed>0?"mdi:alert-circle-outline":"mdi:check-circle-outline"}"></ha-icon>
            <div>
              <strong>${this._importResult.imported} recipe${1!==this._importResult.imported?"s":""} imported</strong>
              ${this._importResult.imagesSaved>0?M` with ${this._importResult.imagesSaved} photo${1!==this._importResult.imagesSaved?"s":""}`:""}
              ${this._importResult.failed>0?M`<br/><small>${this._importResult.failed} failed — check HA logs for details</small>`:""}
            </div>
          </div>
        `:this._importError?M`
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
          ${this._importing?M`<ha-circular-progress active size="tiny"></ha-circular-progress> Importing…`:M`<ha-icon icon="mdi:import"></ha-icon> Import Recipes`}
        </button>
      </div>
    `}_renderUrlMode(){return M`
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
            ${this._scraping?M`<ha-circular-progress active size="tiny"></ha-circular-progress>`:M`<ha-icon icon="mdi:download-outline"></ha-icon>`}
            Fetch
          </button>
        </div>
        ${this._scrapeError?M`
          <div class="error-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            ${this._scrapeError}
          </div>
          <button class="action-btn" @click=${()=>{this._mode="manual",this._form={...this._emptyForm(),source_url:this._url}}}>
            Enter manually instead
          </button>
        `:""}
      </div>
    `}_renderManualMode(){const e=this._form,t=this._ratingHover||e.rating||0;return M`
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
            ${[1,2,3,4,5].map(i=>M`
              <span
                class="star ${i<=t?"filled":""}"
                @mouseenter=${()=>{this._ratingHover=i}}
                @click=${()=>this._setField("rating",e.rating===i?0:i)}
              >★</span>
            `)}
            ${e.rating?M`<button class="clear-rating" @click=${()=>this._setField("rating",0)}>Clear</button>`:""}
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
          ${e.ingredients.length?M`
            <ul class="ing-list">
              ${e.ingredients.map((e,t)=>M`
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
          ${e.instructions.length?M`
            <ol class="steps-edit">
              ${e.instructions.map((e,t)=>M`
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
    `}static styles=n`
    :host { display: block; }

    .dialog-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.65);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      z-index: 1000;
    }

    .dialog-panel {
      background: var(--rm-bg, #1c1c1e);
      border-radius: var(--rm-radius, 12px) var(--rm-radius, 12px) 0 0;
      width: 100%;
      max-width: 620px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
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
  `}customElements.define("rm-add-recipe-dialog",be);const ve=["breakfast","lunch","dinner","snack"],_e=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];class xe extends ae{static properties={api:{type:Object},recipes:{type:Array},_weekStart:{type:String},_plan:{type:Array},_loading:{type:Boolean},_showPicker:{type:Boolean},_pickerTarget:{type:Object},_pickerSearch:{type:String},_pickerServings:{type:Number}};constructor(){super(),this.api=null,this.recipes=[],this._plan=[],this._loading=!1,this._showPicker=!1,this._pickerTarget=null,this._pickerSearch="",this._pickerServings=2,this._weekStart=this._getMondayISO(new Date)}updated(e){(e.has("api")||e.has("_weekStart"))&&this.api&&this._loadPlan()}_getMondayISO(e){const t=new Date(e),i=t.getDay(),r=0===i?-6:1-i;return t.setDate(t.getDate()+r),t.toISOString().split("T")[0]}_addDays(e,t){const i=new Date(e+"T00:00:00");return i.setDate(i.getDate()+t),i.toISOString().split("T")[0]}_formatDisplayDate(e){return new Date(e+"T00:00:00").getDate().toString()}_formatMonthYear(e){return new Date(e+"T00:00:00").toLocaleDateString("en-GB",{month:"long",year:"numeric"})}_prevWeek(){this._weekStart=this._addDays(this._weekStart,-7)}_nextWeek(){this._weekStart=this._addDays(this._weekStart,7)}_isCurrentWeek(){return this._weekStart===this._getMondayISO(new Date)}async _loadPlan(){this._loading=!0;try{const e=await this.api.getMealPlan(this._weekStart);this._plan=e?.entries??[]}catch(e){this._plan=[]}finally{this._loading=!1}}_getEntriesForSlot(e,t){return this._plan.filter(i=>i.date===e&&i.meal_type===t)}_openPicker(e,t){this._pickerTarget={date:e,mealType:t},this._pickerSearch="",this._pickerServings=2,this._showPicker=!0}async _handlePickRecipe(e){this._pickerTarget&&(await this.api.addToMealPlan(e.id,this._pickerTarget.date,this._pickerTarget.mealType,this._pickerServings),this._showPicker=!1,await this._loadPlan())}async _handleRemoveEntry(e){await this.api.removeFromMealPlan(e),await this._loadPlan()}async _handleClearWeek(){await this.api.clearMealPlanWeek(this._weekStart),await this._loadPlan()}_openRecipeDetail(e){const t=this.recipes.find(t=>t.id===e.recipe_id);t&&this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:t},bubbles:!0,composed:!0}))}get _pickerFiltered(){const e=this._pickerSearch.trim().toLowerCase();return e?this.recipes.filter(t=>t.name?.toLowerCase().includes(e)||t.tags?.some(t=>t.toLowerCase().includes(e))):this.recipes}render(){const e=Array.from({length:7},(e,t)=>this._addDays(this._weekStart,t)),t=(new Date).toISOString().split("T")[0];return M`
      <div class="planner-container">
        <!-- Week navigation -->
        <div class="week-nav">
          <button class="nav-btn" @click=${this._prevWeek}>
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <div class="week-label">
            <span class="week-month">${this._formatMonthYear(this._weekStart)}</span>
            ${this._isCurrentWeek()?M`<span class="today-badge">This week</span>`:M`
              <button class="text-link" @click=${()=>{this._weekStart=this._getMondayISO(new Date)}}>Today</button>
            `}
          </div>
          <button class="nav-btn" @click=${this._nextWeek}>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
        </div>

        <!-- Day headers -->
        <div class="day-headers">
          ${e.map((e,i)=>M`
            <div class="day-header ${e===t?"today":""}">
              <span class="day-name">${_e[i]}</span>
              <span class="day-num">${this._formatDisplayDate(e)}</span>
            </div>
          `)}
        </div>

        <!-- Plan grid scroll -->
        <div class="plan-scroll">
          ${this._loading?M`
            <div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>
          `:M`
            ${ve.map(i=>M`
              <div class="meal-row">
                <div class="meal-label">${i.charAt(0).toUpperCase()+i.slice(1)}</div>
                <div class="meal-cells">
                  ${e.map(e=>{const r=this._getEntriesForSlot(e,i);return M`
                      <div class="meal-cell ${e===t?"today":""}">
                        ${r.map(e=>{const t=this.recipes.find(t=>t.id===e.recipe_id);return M`
                            <div class="meal-entry" @click=${()=>this._openRecipeDetail(e)}>
                              ${t?.image_url?M`
                                <img src="${t.image_url}" alt="${t?.name||""}" class="entry-thumb" />
                              `:M`
                                <div class="entry-thumb entry-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                              `}
                              <span class="entry-name">${t?.name??"Unknown"}</span>
                              ${e.servings&&1!==e.servings?M`
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
          ${this._plan.length?M`
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
    `}_renderPicker(){const e=this._pickerTarget;return M`
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
            ${0===this._pickerFiltered.length?M`
              <div class="picker-empty">No recipes found</div>
            `:this._pickerFiltered.map(e=>M`
              <div class="picker-item" @click=${()=>this._handlePickRecipe(e)}>
                ${e.image_url?M`
                  <img src="${e.image_url}" alt="${e.name}" class="picker-thumb" />
                `:M`
                  <div class="picker-thumb picker-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                `}
                <div class="picker-info">
                  <span class="picker-name">${e.name}</span>
                  ${e.tags?.length?M`<span class="picker-tags">${e.tags.slice(0,2).join(", ")}</span>`:""}
                </div>
                ${e.is_favourite?M`<ha-icon icon="mdi:heart" class="picker-fav"></ha-icon>`:""}
              </div>
            `)}
          </div>
        </div>
      </div>
    `}static styles=n`
    :host { display: block; height: 100%; }

    .planner-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
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
      background: var(--rm-bg, #1c1c1e);
      border-radius: 4px;
      padding: 2px 4px;
      cursor: pointer;
      font-size: 10px;
      color: var(--rm-text, #e5e5ea);
      position: relative;
      min-height: 20px;
      overflow: hidden;
    }
    .meal-entry:hover .entry-remove { opacity: 1; }
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
      background: rgba(0,0,0,0.5);
      border: none;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0;
      opacity: 0;
      transition: opacity 0.15s;
      flex-shrink: 0;
    }
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
      background: rgba(0,0,0,0.65);
      display: flex;
      align-items: flex-end;
      z-index: 10;
    }
    .picker-panel {
      background: var(--rm-bg, #1c1c1e);
      border-radius: var(--rm-radius, 12px) var(--rm-radius, 12px) 0 0;
      width: 100%;
      max-height: 75vh;
      display: flex;
      flex-direction: column;
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
  `}customElements.define("rm-meal-planner",xe);class ye extends ae{static properties={settings:{type:Object}};constructor(){super(),this.settings={}}_update(e){const t={...this.settings,...e};this.dispatchEvent(new CustomEvent("rm-settings-change",{detail:{settings:t},bubbles:!0,composed:!0}))}render(){const e=this.settings,t="midnight"===e.theme||"ember"===e.theme;return M`
      <div class="settings-body">

        <!-- ── Appearance ────────────────────────────── -->
        <div class="section">
          <div class="section-label">Appearance</div>

          <!-- Theme — emoji dropdown matching Shopping List Manager style -->
          <div class="setting-row">
            <span class="setting-name">Theme</span>
            <select
              class="theme-select"
              @change=${e=>this._update({theme:e.target.value})}
            >
              <optgroup label="Light &amp; Dark">
                <option value="warm"    ?selected=${"warm"===e.theme}>🍊 Warm Kitchen</option>
              </optgroup>
              <optgroup label="Light Themes">
                <option value="forest"  ?selected=${"forest"===e.theme}>🌿 Forest</option>
                <option value="ocean"   ?selected=${"ocean"===e.theme}>🌊 Ocean</option>
                <option value="blossom" ?selected=${"blossom"===e.theme}>🌸 Blossom</option>
              </optgroup>
              <optgroup label="Dark Themes">
                <option value="midnight" ?selected=${"midnight"===e.theme}>🌙 Midnight</option>
                <option value="ember"    ?selected=${"ember"===e.theme}>🔥 Ember</option>
              </optgroup>
            </select>
          </div>

          <!-- Dark mode — hidden for always-dark themes -->
          ${t?M`
            <div class="setting-row muted-row">
              <span class="setting-name">Dark mode</span>
              <span class="muted-note">Always dark for this theme</span>
            </div>
          `:M`
            <div class="setting-row">
              <span class="setting-name">Dark mode</span>
              <div class="btn-group">
                ${[["off","Light"],["system","Auto"],["on","Dark"]].map(([t,i])=>M`
                  <button class="seg-btn ${e.darkMode===t?"active":""}"
                    @click=${()=>this._update({darkMode:t})}>${i}</button>
                `)}
              </div>
            </div>
          `}

          <!-- Text size -->
          <div class="setting-row">
            <span class="setting-name">Text size</span>
            <div class="btn-group">
              ${[["small","S"],["medium","M"],["large","L"]].map(([t,i])=>M`
                <button class="seg-btn ${e.fontSize===t?"active":""}"
                  @click=${()=>this._update({fontSize:t})}>${i}</button>
              `)}
            </div>
          </div>
        </div>

        <!-- ── Display ───────────────────────────────── -->
        <div class="section">
          <div class="section-label">Display</div>

          <!-- Grid columns -->
          <div class="setting-row">
            <span class="setting-name">Recipe columns</span>
            <div class="btn-group">
              ${[2,3,4].map(t=>M`
                <button class="seg-btn ${e.columns===t?"active":""}"
                  @click=${()=>this._update({columns:t})}>${t}</button>
              `)}
            </div>
          </div>

          <!-- Show favourites section -->
          <div class="setting-row">
            <span class="setting-name">Favourites section</span>
            <label class="toggle">
              <input type="checkbox" ?checked=${e.showFavourites}
                @change=${e=>this._update({showFavourites:e.target.checked})} />
              <span class="toggle-track"><span class="toggle-thumb"></span></span>
            </label>
          </div>

          <!-- Show meal planner -->
          <div class="setting-row">
            <span class="setting-name">Meal planner</span>
            <label class="toggle">
              <input type="checkbox" ?checked=${e.showPlanner}
                @change=${e=>this._update({showPlanner:e.target.checked})} />
              <span class="toggle-track"><span class="toggle-thumb"></span></span>
            </label>
          </div>
        </div>

      </div>
    `}static styles=n`
    :host { display: block; height: 100%; overflow-y: auto; }

    .settings-body {
      padding: 8px 0 24px;
    }

    .section { margin-bottom: 8px; }

    .section-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--rm-text-muted, #a08060);
      padding: 16px 20px 6px;
    }

    .setting-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-bottom: 1px solid var(--rm-border, rgba(0,0,0,0.08));
      gap: 12px;
    }
    .setting-row.muted-row { opacity: 0.5; }

    .setting-name {
      font-size: 15px;
      font-weight: 500;
      flex-shrink: 0;
    }

    .muted-note { font-size: 13px; color: var(--rm-text-muted, #a08060); }

    /* Theme select */
    .theme-select {
      background: var(--rm-bg-surface, #fff);
      color: var(--rm-text, #2d2016);
      border: 1px solid var(--rm-border, rgba(0,0,0,0.12));
      border-radius: 8px;
      padding: 6px 10px;
      font-size: 14px;
      cursor: pointer;
      min-width: 160px;
    }

    /* Segmented buttons */
    .btn-group {
      display: flex;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--rm-border, rgba(0,0,0,0.1));
      flex-shrink: 0;
    }
    .seg-btn {
      background: transparent;
      border: none;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--rm-text-secondary, #6b5c4a);
      border-right: 1px solid var(--rm-border, rgba(0,0,0,0.1));
      transition: background 0.12s, color 0.12s;
    }
    .seg-btn:last-child { border-right: none; }
    .seg-btn.active { background: var(--rm-accent, #e8622e); color: #fff; }
    .seg-btn:hover:not(.active) { background: var(--rm-border); color: var(--rm-text); }

    /* Toggle */
    .toggle { display: flex; align-items: center; cursor: pointer; flex-shrink: 0; }
    .toggle input { display: none; }
    .toggle-track {
      width: 44px; height: 24px;
      background: var(--rm-border, rgba(0,0,0,0.15));
      border-radius: 12px;
      position: relative;
      transition: background 0.2s;
    }
    .toggle input:checked + .toggle-track { background: var(--rm-accent, #e8622e); }
    .toggle-thumb {
      position: absolute; top: 2px; left: 2px;
      width: 20px; height: 20px;
      background: #fff; border-radius: 50%;
      transition: transform 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }
    .toggle input:checked ~ .toggle-track .toggle-thumb { transform: translateX(20px); }
  `}customElements.define("rm-settings-view",ye);class we extends ae{static properties={slmAvailable:{type:Boolean},shoppingLists:{type:Array},api:{type:Object},localItems:{type:Array},_slmItems:{type:Array},_selectedListId:{type:String},_loading:{type:Boolean},_clearing:{type:Boolean}};constructor(){super(),this.slmAvailable=!1,this.shoppingLists=[],this.api=null,this.localItems=[],this._slmItems=[],this._selectedListId="",this._loading=!1,this._clearing=!1}updated(e){(e.has("slmAvailable")||e.has("shoppingLists"))&&this.slmAvailable&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"",this._loadSlmItems()),e.has("_selectedListId")&&this._selectedListId&&this.slmAvailable&&this._loadSlmItems()}async _loadSlmItems(){if(this._selectedListId&&this.api){this._loading=!0;try{const e=await this.api.getSlmItems(this._selectedListId);this._slmItems=e?.items??[]}catch(e){console.warn("Failed to load SLM items:",e),this._slmItems=[]}finally{this._loading=!1}}}async _toggleSlmItem(e){try{await this.api.checkSlmItem(e.id,!e.checked),this._slmItems=this._slmItems.map(t=>t.id===e.id?{...t,checked:!e.checked}:t)}catch(e){console.warn("Failed to check SLM item:",e)}}async _clearSlmChecked(){this._clearing=!0;try{await this.api.clearSlmChecked(this._selectedListId),this._slmItems=this._slmItems.filter(e=>!e.checked)}catch(e){console.warn("Failed to clear SLM checked:",e)}finally{this._clearing=!1}}_toggleLocalItem(e){const t=this.localItems.map(t=>t.id===e?{...t,checked:!t.checked}:t);this._dispatchLocalUpdate(t)}_clearLocalChecked(){this._dispatchLocalUpdate(this.localItems.filter(e=>!e.checked))}_clearAllLocal(){this._dispatchLocalUpdate([])}_dispatchLocalUpdate(e){this.dispatchEvent(new CustomEvent("rm-shopping-local-update",{detail:{items:e},bubbles:!0,composed:!0}))}render(){return M`
      <div class="shopping-view">
        ${this.slmAvailable?this._renderSlmMode():this._renderLocalMode()}
      </div>
    `}_renderSlmMode(){const e=this._slmItems.some(e=>e.checked),t=this._slmItems.filter(e=>!e.checked),i=this._slmItems.filter(e=>e.checked);return M`
      <div class="sv-header">
        <div class="sv-header-left">
          ${this.shoppingLists.length>1?M`
            <select class="list-select" .value=${this._selectedListId}
              @change=${e=>{this._selectedListId=e.target.value}}>
              ${this.shoppingLists.map(e=>M`
                <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
              `)}
            </select>
          `:M`
            <span class="sv-list-name">${this.shoppingLists[0]?.name??"Shopping List"}</span>
          `}
        </div>
        <div class="sv-actions">
          <button class="sv-btn" @click=${this._loadSlmItems} title="Refresh">
            <ha-icon icon="mdi:refresh"></ha-icon>
          </button>
          ${e?M`
            <button class="sv-btn danger" @click=${this._clearSlmChecked} ?disabled=${this._clearing}>
              <ha-icon icon="mdi:delete-sweep-outline"></ha-icon>
              <span>Clear checked</span>
            </button>
          `:""}
        </div>
      </div>

      ${this._loading?M`
        <div class="sv-loading"><ha-circular-progress active size="small"></ha-circular-progress></div>
      `:0===this._slmItems.length?M`
        <div class="sv-empty">
          <ha-icon icon="mdi:cart-outline"></ha-icon>
          <p>Your shopping list is empty.</p>
          <p class="sv-hint">Add ingredients from any recipe to get started.</p>
        </div>
      `:M`
        <div class="sv-items">
          ${t.map(e=>this._renderSlmItem(e))}
          ${i.length?M`
            <div class="sv-divider-label">Checked</div>
            ${i.map(e=>this._renderSlmItem(e))}
          `:""}
        </div>
      `}
    `}_renderSlmItem(e){const t=[e.quantity&&1!==e.quantity?e.quantity:"",e.unit&&"units"!==e.unit?e.unit:""].filter(Boolean).join(" ");return M`
      <div class="sv-item ${e.checked?"sv-item-checked":""}"
        @click=${()=>this._toggleSlmItem(e)}>
        <div class="sv-checkbox ${e.checked?"checked":""}">
          ${e.checked?M`<ha-icon icon="mdi:check"></ha-icon>`:""}
        </div>
        <div class="sv-item-info">
          <span class="sv-item-name">${e.name}</span>
          ${t?M`<span class="sv-item-qty">${t}</span>`:""}
        </div>
      </div>
    `}_renderLocalMode(){const e=this.localItems.some(e=>e.checked),t=this.localItems.filter(e=>!e.checked),i=this.localItems.filter(e=>e.checked);return M`
      <div class="sv-header">
        <span class="sv-list-name">My Shopping List</span>
        <div class="sv-actions">
          ${e?M`
            <button class="sv-btn danger" @click=${this._clearLocalChecked}>
              <ha-icon icon="mdi:delete-sweep-outline"></ha-icon>
              <span>Clear checked</span>
            </button>
          `:""}
          ${this.localItems.length?M`
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

      ${0===this.localItems.length?M`
        <div class="sv-empty">
          <ha-icon icon="mdi:cart-outline"></ha-icon>
          <p>Your shopping list is empty.</p>
          <p class="sv-hint">Add ingredients from any recipe to get started.</p>
        </div>
      `:M`
        <div class="sv-items">
          ${t.map(e=>this._renderLocalItem(e))}
          ${i.length?M`
            <div class="sv-divider-label">Checked</div>
            ${i.map(e=>this._renderLocalItem(e))}
          `:""}
        </div>
      `}
    `}_renderLocalItem(e){const t=[e.amount||"",e.unit||""].filter(Boolean).join(" ");return M`
      <div class="sv-item ${e.checked?"sv-item-checked":""}"
        @click=${()=>this._toggleLocalItem(e.id)}>
        <div class="sv-checkbox ${e.checked?"checked":""}">
          ${e.checked?M`<ha-icon icon="mdi:check"></ha-icon>`:""}
        </div>
        <div class="sv-item-info">
          <span class="sv-item-name">${e.name}</span>
          ${t?M`<span class="sv-item-qty">${t}</span>`:""}
        </div>
      </div>
    `}static styles=n`
    :host { display: block; height: 100%; }

    .shopping-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    .sv-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid var(--rm-border);
      flex-shrink: 0;
      gap: 8px;
    }

    .sv-header-left { display: flex; align-items: center; }

    .sv-list-name {
      font-weight: 600;
      font-size: 15px;
      color: var(--rm-text);
    }

    .list-select {
      background: var(--rm-bg-surface);
      border: 1px solid var(--rm-border);
      border-radius: 8px;
      color: var(--rm-text);
      padding: 6px 10px;
      font-size: 14px;
      cursor: pointer;
    }

    .sv-actions {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .sv-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: 1px solid var(--rm-border);
      border-radius: 8px;
      color: var(--rm-text-secondary);
      padding: 6px 10px;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .sv-btn ha-icon { --mdc-icon-size: 18px; }
    .sv-btn:hover:not(:disabled) { background: var(--rm-accent-soft); color: var(--rm-text); }
    .sv-btn.danger { color: var(--error-color, #cf6679); border-color: var(--error-color, #cf6679); }
    .sv-btn.danger:hover:not(:disabled) { background: rgba(207,102,121,0.1); }
    .sv-btn:disabled { opacity: 0.5; cursor: not-allowed; }

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
    .sv-install-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-size: 12px;
      color: var(--rm-text-secondary);
    }
    .sv-install-text strong { color: var(--rm-text); font-size: 13px; }

    .sv-loading {
      display: flex;
      justify-content: center;
      padding: 40px;
    }

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

    .sv-items {
      flex: 1;
      overflow-y: auto;
      padding: 4px 0;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border) transparent;
    }

    .sv-divider-label {
      padding: 10px 16px 4px;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--rm-text-muted);
    }

    .sv-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      cursor: pointer;
      transition: background 0.12s;
      border-bottom: 1px solid var(--rm-border);
    }
    .sv-item:last-child { border-bottom: none; }
    .sv-item:hover { background: var(--rm-accent-soft); }
    .sv-item-checked { opacity: 0.5; }

    .sv-checkbox {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid var(--rm-border);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s, border-color 0.15s;
    }
    .sv-checkbox.checked {
      background: var(--rm-accent);
      border-color: var(--rm-accent);
      color: #fff;
    }
    .sv-checkbox ha-icon { --mdc-icon-size: 14px; }

    .sv-item-info {
      flex: 1;
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
    }
    .sv-item-name { font-size: 14px; color: var(--rm-text); }
    .sv-item-qty { font-size: 12px; color: var(--rm-text-secondary); }
    .sv-item-checked .sv-item-name { text-decoration: line-through; }
  `}customElements.define("rm-shopping-view",we);const ke="rm_settings",$e="rm_shopping",Se={theme:"warm",darkMode:"system",fontSize:"medium",columns:3,showFavourites:!0,showPlanner:!0},ze={warm:{light:{"--rm-bg-main":"#faf8f5","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#2d2016","--rm-text-secondary":"#6b5c4a","--rm-text-muted":"#a08060","--rm-accent":"#e8622e","--rm-accent-soft":"rgba(232,98,46,0.12)","--rm-border":"rgba(45,32,22,0.1)","--rm-shadow":"0 2px 8px rgba(45,32,22,0.12)"},dark:{"--rm-bg-main":"#1a1510","--rm-bg-surface":"#241e18","--rm-bg-elevated":"#2e261e","--rm-text":"#f0e8dc","--rm-text-secondary":"#c09070","--rm-text-muted":"#6b5040","--rm-accent":"#ff7a45","--rm-accent-soft":"rgba(255,122,69,0.15)","--rm-border":"rgba(240,232,220,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},forest:{light:{"--rm-bg-main":"#f4f7f2","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#1a2b1a","--rm-text-secondary":"#4a6b4a","--rm-text-muted":"#7a9b7a","--rm-accent":"#2e7d32","--rm-accent-soft":"rgba(46,125,50,0.12)","--rm-border":"rgba(26,43,26,0.1)","--rm-shadow":"0 2px 8px rgba(26,43,26,0.12)"},dark:{"--rm-bg-main":"#101810","--rm-bg-surface":"#182015","--rm-bg-elevated":"#202e1e","--rm-text":"#d4f0d0","--rm-text-secondary":"#80b080","--rm-text-muted":"#406040","--rm-accent":"#66bb6a","--rm-accent-soft":"rgba(102,187,106,0.15)","--rm-border":"rgba(212,240,208,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},ocean:{light:{"--rm-bg-main":"#f0f5fa","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#0d2040","--rm-text-secondary":"#3a5878","--rm-text-muted":"#7090b0","--rm-accent":"#1565c0","--rm-accent-soft":"rgba(21,101,192,0.12)","--rm-border":"rgba(13,32,64,0.1)","--rm-shadow":"0 2px 8px rgba(13,32,64,0.12)"},dark:{"--rm-bg-main":"#0a1628","--rm-bg-surface":"#0f2040","--rm-bg-elevated":"#162a52","--rm-text":"#d0e8f8","--rm-text-secondary":"#7090b8","--rm-text-muted":"#3a5070","--rm-accent":"#42a5f5","--rm-accent-soft":"rgba(66,165,245,0.15)","--rm-border":"rgba(208,232,248,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},midnight:{dark:{"--rm-bg-main":"#0d1117","--rm-bg-surface":"#161b22","--rm-bg-elevated":"#21262d","--rm-text":"#e6edf3","--rm-text-secondary":"#7d8590","--rm-text-muted":"#484f58","--rm-accent":"#7c3aed","--rm-accent-soft":"rgba(124,58,237,0.2)","--rm-border":"rgba(230,237,243,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},ember:{dark:{"--rm-bg-main":"#111111","--rm-bg-surface":"#1c1210","--rm-bg-elevated":"#261a15","--rm-text":"#f0e0d0","--rm-text-secondary":"#a07060","--rm-text-muted":"#584030","--rm-accent":"#f57c00","--rm-accent-soft":"rgba(245,124,0,0.18)","--rm-border":"rgba(240,224,208,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},blossom:{light:{"--rm-bg-main":"#fdf6f8","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#2d1520","--rm-text-secondary":"#7a4060","--rm-text-muted":"#b08090","--rm-accent":"#c2185b","--rm-accent-soft":"rgba(194,24,91,0.12)","--rm-border":"rgba(45,21,32,0.1)","--rm-shadow":"0 2px 8px rgba(45,21,32,0.12)"},dark:{"--rm-bg-main":"#1a0d12","--rm-bg-surface":"#241420","--rm-bg-elevated":"#2e1a28","--rm-text":"#f8d0de","--rm-text-secondary":"#c070a0","--rm-text-muted":"#603050","--rm-accent":"#f48fb1","--rm-accent-soft":"rgba(244,143,177,0.15)","--rm-border":"rgba(248,208,222,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}}},Ae={small:"13px",medium:"15px",large:"17px"};class Ee extends ae{static properties={hass:{type:Object},_config:{type:Object},_view:{type:String},_recipes:{type:Array},_tags:{type:Array},_selectedRecipe:{type:Object},_loading:{type:Boolean},_error:{type:String},_searchQuery:{type:String},_activeTag:{type:String},_showAddDialog:{type:Boolean},_shoppingLists:{type:Array},_slmAvailable:{type:Boolean},_localShoppingItems:{type:Array},_settings:{type:Object},_wide:{type:Boolean}};constructor(){super(),this._view="grid",this._recipes=[],this._tags=[],this._selectedRecipe=null,this._loading=!1,this._error=null,this._searchQuery="",this._activeTag=null,this._showAddDialog=!1,this._shoppingLists=[],this._slmAvailable=!1,this._localShoppingItems=[],this._settings=function(){try{const e=localStorage.getItem(ke);return e?{...Se,...JSON.parse(e)}:{...Se}}catch{return{...Se}}}(),this._wide=!1,this._unsubscribe=null,this._darkModeQuery=null,this._resizeObserver=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("recipe-manager-card-editor")}static getStubConfig(){return{}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),this._darkModeQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._darkModeQuery.addEventListener("change",this._onSystemDark),this._applyTheme(),this._resizeObserver=new ResizeObserver(e=>{const t=e[0]?.contentRect?.width??0;this._wide=t>=620}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._darkModeQuery?.removeEventListener("change",this._onSystemDark),this._resizeObserver?.disconnect()}_onSystemDark=()=>{"system"===this._settings.darkMode&&this._applyTheme()};updated(e){e.has("hass")&&this.hass&&!this._api&&(this._api=new le(this.hass),this._init()),e.has("hass")&&this._api&&(this._api.hass=this.hass),e.has("_settings")&&this._applyTheme()}_applyTheme(){const e=this._settings,t=ze[e.theme]??ze.warm,i=!t.light;let r=i;i||(r="on"===e.darkMode||"off"!==e.darkMode&&(this._darkModeQuery?.matches??!1));const s=r?t.dark??t.light:t.light;for(const[e,t]of Object.entries(s))this.style.setProperty(e,t);this.style.setProperty("--rm-font-size-base",Ae[e.fontSize]??"15px"),this.style.setProperty("--rm-grid-columns",`repeat(${e.columns??3}, minmax(0, 1fr))`)}async _init(){this._loading=!0,this._loadLocalShopping();try{await Promise.all([this._loadRecipes(),this._loadTags(),this._loadShoppingLists()]),await this._subscribe()}catch(e){this._error=e.message||"Failed to load recipes"}finally{this._loading=!1}}_loadLocalShopping(){try{const e=localStorage.getItem($e);this._localShoppingItems=e?JSON.parse(e):[]}catch{this._localShoppingItems=[]}}_saveLocalShopping(){try{localStorage.setItem($e,JSON.stringify(this._localShoppingItems))}catch{}}async _loadRecipes(){const e=await this._api.getAllRecipes();this._recipes=e?.recipes??[]}async _loadTags(){const e=await this._api.getTags();this._tags=e?.tags??[]}async _loadShoppingLists(){try{this._shoppingLists=(await this._api.getShoppingLists())?.lists??[],this._slmAvailable=!0}catch{this._shoppingLists=[],this._slmAvailable=!1}}async _subscribe(){if(!this._unsubscribe)try{this._unsubscribe=await this._api.subscribe(e=>{const t=e.event_type??e.event;/recipe_(added|updated|deleted)/.test(t)&&(this._loadRecipes(),this._loadTags())})}catch{}}get _filteredRecipes(){let e=this._recipes;if(this._activeTag&&(e=e.filter(e=>e.tags?.includes(this._activeTag))),this._searchQuery.trim()){const t=this._searchQuery.trim().toLowerCase();e=e.filter(e=>e.name?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tags?.some(e=>e.toLowerCase().includes(t)))}return e}_handleSettingsChange(e){this._settings=e.detail.settings,function(e){try{localStorage.setItem(ke,JSON.stringify(e))}catch{}}(this._settings)}_handleSearch(e){this._searchQuery=e.detail?.query??""}_handleTagFilter(e){const t=e.detail?.tag;this._activeTag=this._activeTag===t?null:t}_handleBack(){this._view="grid",this._selectedRecipe=null}_handleShowGrid(){this._view="grid",this._selectedRecipe=null}_handleShowPlanner(){this._view="planner"}_handleOpenRecipe(e){this._selectedRecipe=e.detail?.recipe,this._view="detail"}async _handleToggleFavourite(e){const{recipeId:t}=e.detail;await this._api.toggleFavourite(t),await this._loadRecipes(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??this._selectedRecipe)}async _handleDeleteRecipe(e){await this._api.deleteRecipe(e.detail.recipeId),await this._loadRecipes(),await this._loadTags(),this._view="grid",this._selectedRecipe=null}async _handleUpdateRecipe(e){const{recipeId:t,data:i}=e.detail;await this._api.updateRecipe(t,i),await this._loadRecipes(),await this._loadTags(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??null)}async _handleAddRecipe(e){await this._api.addRecipe(e.detail.data),this._showAddDialog=!1,await this._loadRecipes(),await this._loadTags()}async _handleImportDone(){await this._loadRecipes(),await this._loadTags()}async _handleAddToShopping(e){const{ingredients:t,listId:i}=e.detail;if(this._slmAvailable&&i)try{(await this._api.addIngredientsToShoppingList(i,t)).filter(e=>!e.success).length&&console.warn("Some ingredients failed to add to SLM")}catch(e){console.error("Shopping list error:",e)}else{const e=t.map(e=>({id:Math.random().toString(36).slice(2,10),name:e.name,amount:e.amount||null,unit:e.unit||null,checked:!1}));this._localShoppingItems=[...this._localShoppingItems,...e],this._saveLocalShopping()}}_handleShoppingLocalUpdate(e){this._localShoppingItems=e.detail.items,this._saveLocalShopping()}_renderSidebar(){const e=this._view,t=(t,i,r,s=!1)=>M`
      <button
        class="sb-item ${e===r?"active":""} ${s?"placeholder":""}"
        title="${s?i+" — coming soon":i}"
        @click=${s?void 0:()=>{this._view=r,this._selectedRecipe=null}}
        ?disabled=${s}
      >
        <ha-icon icon="${t}"></ha-icon>
        <span>${i}</span>
      </button>
    `;return M`
      <nav class="rm-sidebar">
        <div class="sb-top">
          <!-- Logo / burger placeholder -->
          <div class="sb-logo">
            <ha-icon icon="mdi:chef-hat"></ha-icon>
            <span>Recipes</span>
          </div>

          <!-- Inline search -->
          <div class="sb-search">
            <ha-icon icon="mdi:magnify" class="sb-search-icon"></ha-icon>
            <input
              class="sb-search-input"
              type="text"
              placeholder="Search…"
              .value=${this._searchQuery}
              @input=${e=>{this._searchQuery=e.target.value,this._view="grid"}}
            />
            ${this._searchQuery?M`
              <button class="sb-search-clear" @click=${()=>{this._searchQuery=""}}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            `:""}
          </div>

          <!-- New recipe -->
          <button class="sb-new-btn" @click=${()=>{this._showAddDialog=!0}}>
            <ha-icon icon="mdi:plus"></ha-icon>
            <span>New Recipe</span>
          </button>
        </div>

        <div class="sb-nav">
          ${t("mdi:home","Home","grid")}
          ${t("mdi:cart-outline","Shopping List","shopping")}
          ${this._settings.showPlanner?t("mdi:calendar-week","Meal Planner","planner"):""}
          ${t("mdi:book-open-variant","Cookbook","cookbook",!0)}
          ${t("mdi:timer-outline","New Timer","timer",!0)}
        </div>

        <div class="sb-bottom">
          <button class="sb-item placeholder" disabled title="Sync — coming soon">
            <ha-icon icon="mdi:cloud-sync-outline"></ha-icon><span>Sync</span>
          </button>
          <button class="sb-item placeholder" disabled title="Help — coming soon">
            <ha-icon icon="mdi:help-circle-outline"></ha-icon><span>Help</span>
          </button>
          <button class="sb-item ${"settings"===e?"active":""}"
            @click=${()=>{this._view="settings"}}>
            <ha-icon icon="mdi:cog-outline"></ha-icon><span>Settings</span>
          </button>
        </div>
      </nav>
    `}_renderHeader(){const e="grid"===this._view,t="settings"===this._view,i=this._wide;return M`
      <div class="rm-header">
        <div class="rm-header-left">
          ${i||"grid"===this._view||t?i?"":M`
            <ha-icon icon="mdi:chef-hat" class="rm-logo"></ha-icon>
          `:M`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `}
          <span class="rm-title">
            ${t?"Settings":"detail"===this._view&&this._selectedRecipe?this._selectedRecipe.name:"planner"===this._view?"Meal Planner":"shopping"===this._view?"Shopping List":"Recipes"}
          </span>
        </div>
        <div class="rm-header-right">
          ${t?M`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          `:!i&&e?M`
            <button class="icon-btn" @click=${()=>{this._showAddDialog=!0}}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
            ${this._settings.showPlanner?M`
              <button class="icon-btn" @click=${this._handleShowPlanner}>
                <ha-icon icon="mdi:calendar-week"></ha-icon>
              </button>
            `:""}
            <button class="icon-btn" @click=${()=>{this._view="settings"}}>
              <ha-icon icon="mdi:cog-outline"></ha-icon>
            </button>
          `:i||"planner"!==this._view?"":M`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:view-grid"></ha-icon>
            </button>
          `}
        </div>
      </div>
    `}_renderBody(){const e=this._settings;return"settings"===this._view?M`
      <rm-settings-view
        .settings=${e}
        @rm-settings-change=${this._handleSettingsChange}
      ></rm-settings-view>
    `:this._loading?M`
      <div class="rm-loading"><ha-circular-progress active size="large"></ha-circular-progress></div>
    `:this._error?M`
      <div class="rm-error">
        <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
        <p>${this._error}</p>
        <button class="text-btn" @click=${this._init.bind(this)}>Retry</button>
      </div>
    `:"grid"===this._view?M`
      <rm-recipe-grid
        .recipes=${this._filteredRecipes}
        .allRecipes=${this._recipes}
        .tags=${this._tags}
        .searchQuery=${this._searchQuery}
        .activeTag=${this._activeTag}
        .columns=${e.columns}
        .showFavourites=${e.showFavourites}
        .hideSidebar=${this._wide}
        @rm-search=${this._handleSearch}
        @rm-tag-filter=${this._handleTagFilter}
        @rm-open-recipe=${this._handleOpenRecipe}
        @rm-toggle-favourite=${this._handleToggleFavourite}
      ></rm-recipe-grid>
    `:"detail"===this._view?M`
      <rm-recipe-detail
        .recipe=${this._selectedRecipe}
        .api=${this._api}
        .shoppingLists=${this._shoppingLists}
        .slmAvailable=${this._slmAvailable}
        @rm-back=${this._handleBack}
        @rm-toggle-favourite=${this._handleToggleFavourite}
        @rm-delete-recipe=${this._handleDeleteRecipe}
        @rm-update-recipe=${this._handleUpdateRecipe}
        @rm-add-to-shopping=${this._handleAddToShopping}
      ></rm-recipe-detail>
    `:"planner"===this._view?M`
      <rm-meal-planner
        .api=${this._api}
        .recipes=${this._recipes}
        @rm-open-recipe=${this._handleOpenRecipe}
      ></rm-meal-planner>
    `:"shopping"===this._view?M`
      <rm-shopping-view
        .slmAvailable=${this._slmAvailable}
        .shoppingLists=${this._shoppingLists}
        .api=${this._api}
        .localItems=${this._localShoppingItems}
        @rm-shopping-local-update=${this._handleShoppingLocalUpdate}
      ></rm-shopping-view>
    `:M``}render(){const e=this._wide;return M`
      <ha-card class="rm-card ${e?"rm-wide":""}">
        ${e?this._renderSidebar():""}
        <div class="rm-main">
          ${this._renderHeader()}
          <div class="rm-body">${this._renderBody()}</div>
        </div>

        ${this._showAddDialog?M`
          <rm-add-recipe-dialog
            .api=${this._api}
            @rm-add-recipe=${this._handleAddRecipe}
            @rm-import-done=${this._handleImportDone}
            @rm-close=${()=>{this._showAddDialog=!1}}
          ></rm-add-recipe-dialog>
        `:""}
      </ha-card>
    `}static styles=n`
    :host {
      display: block;
      /* Default warm-light vars (overridden at runtime) */
      --rm-bg-main:        #faf8f5;
      --rm-bg-surface:     #ffffff;
      --rm-bg-elevated:    #ffffff;
      --rm-text:           #2d2016;
      --rm-text-secondary: #6b5c4a;
      --rm-text-muted:     #a08060;
      --rm-accent:         #e8622e;
      --rm-accent-soft:    rgba(232,98,46,0.12);
      --rm-border:         rgba(45,32,22,0.1);
      --rm-shadow:         0 2px 8px rgba(45,32,22,0.12);
      --rm-radius:         12px;
      --rm-radius-sm:      8px;
      --rm-font-size-base: 15px;
      --rm-grid-columns:   repeat(3, minmax(0, 1fr));
      font-size: var(--rm-font-size-base);
    }

    ha-card.rm-card {
      background: var(--rm-bg-main);
      border-radius: var(--rm-radius);
      overflow: hidden;
      display: flex;
      flex-direction: row;   /* always row; sidebar hidden on narrow */
      min-height: 500px;
      max-height: 85vh;
      color: var(--rm-text);
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
    }

    /* Sidebar hidden unless .rm-wide */
    ha-card:not(.rm-wide) .rm-sidebar { display: none; }

    .sb-top {
      padding: 12px 10px 8px;
      flex-shrink: 0;
    }

    .sb-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 6px 10px;
      font-weight: 700;
      font-size: 15px;
      color: var(--rm-accent);
    }
    .sb-logo ha-icon { --mdc-icon-size: 22px; }

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

    .sb-nav {
      flex: 1;
      overflow-y: auto;
      padding: 8px 8px 4px;
      scrollbar-width: none;
    }
    .sb-nav::-webkit-scrollbar { display: none; }

    .sb-bottom {
      padding: 4px 8px 12px;
      border-top: 1px solid var(--rm-border);
    }

    .sb-item {
      display: flex; align-items: center; gap: 10px;
      width: 100%; padding: 9px 10px;
      background: none; border: none; border-radius: 8px;
      font-size: 14px; color: var(--rm-text-secondary);
      cursor: pointer; text-align: left;
      transition: background 0.12s, color 0.12s;
    }
    .sb-item ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }
    .sb-item:hover:not(:disabled) { background: var(--rm-accent-soft); color: var(--rm-text); }
    .sb-item.active { background: var(--rm-accent-soft); color: var(--rm-accent); font-weight: 600; }
    .sb-item.placeholder { opacity: 0.4; cursor: default; }

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
      padding: 12px 16px;
      border-bottom: 1px solid var(--rm-border);
      background: var(--rm-bg-surface);
      flex-shrink: 0;
    }

    .rm-header-left, .rm-header-right {
      display: flex; align-items: center; gap: 8px;
    }

    .rm-logo { color: var(--rm-accent); --mdc-icon-size: 24px; }

    .rm-title {
      font-size: 18px; font-weight: 600; color: var(--rm-text);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 220px;
    }

    .rm-body {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .icon-btn {
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary); width: 36px; height: 36px;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; padding: 0;
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
  `}customElements.define("recipe-manager-card",Ee),window.customCards=window.customCards||[],window.customCards.push({type:"recipe-manager-card",name:"Recipe Manager",description:"Manage, browse, and plan meals with your recipe collection.",preview:!1});
