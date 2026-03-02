/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=i.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(r,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new n(i,e,r)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:o,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,_=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},v=(e,t)=>!o(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const s=i?.call(this);n?.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(t)r.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=i;const s=n.fromAttribute(t,e.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(void 0!==e){const s=this.constructor;if(!1===i&&(n=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??v)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==n||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,r,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,g?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,k=e=>e,$=w.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+E,C=`<${z}>`,R=document,I=()=>R.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,D="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,B=/>/g,N=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),W=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),H=new WeakMap,G=R.createTreeWalker(R,129);function K(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const q=(e,t)=>{const r=e.length-1,i=[];let n,s=2===t?"<svg>":3===t?"<math>":"",a=P;for(let t=0;t<r;t++){const r=e[t];let o,c,l=-1,d=0;for(;d<r.length&&(a.lastIndex=d,c=a.exec(r),null!==c);)d=a.lastIndex,a===P?"!--"===c[1]?a=F:void 0!==c[1]?a=B:void 0!==c[2]?(L.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=N):void 0!==c[3]&&(a=N):a===N?">"===c[0]?(a=n??P,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?N:'"'===c[3]?j:U):a===j||a===U?a=N:a===F||a===B?a=P:(a=N,n=void 0);const h=a===N&&e[t+1].startsWith("/>")?" ":"";s+=a===P?r+C:l>=0?(i.push(o),r.slice(0,l)+A+r.slice(l)+E+h):r+E+(-2===l?t:h)}return[K(e,s+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Y{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0;const a=e.length-1,o=this.parts,[c,l]=q(e,t);if(this.el=Y.createElement(c,r),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=G.nextNode())&&o.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=l[s++],r=i.getAttribute(e).split(E),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?ee:"?"===a[1]?te:"@"===a[1]?re:J}),i.removeAttribute(e)}else e.startsWith(E)&&(o.push({type:6,index:n}),i.removeAttribute(e));if(L.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],I()),G.nextNode(),o.push({type:2,index:++n});i.append(e[t],I())}}}else if(8===i.nodeType)if(i.data===z)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)o.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const r=R.createElement("template");return r.innerHTML=e,r}}function V(e,t,r=e,i){if(t===W)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const s=T(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e),n._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=V(e,n._$AS(e,t.values),n,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??R).importNode(t,!0);G.currentNode=i;let n=G.nextNode(),s=0,a=0,o=r[0];for(;void 0!==o;){if(s===o.index){let t;2===o.type?t=new X(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ie(n,this,e)),this._$AV.push(t),o=r[++a]}s!==o?.index&&(n=G.nextNode(),s++)}return G.currentNode=R,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),T(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=Y.createElement(K(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new Y(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new X(this.O(I()),this.O(I()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}_$AI(e,t=this,r,i){const n=this.strings;let s=!1;if(void 0===n)e=V(this,e,t,0),s=!T(e)||e!==this._$AH&&e!==W,s&&(this._$AH=e);else{const i=e;let a,o;for(e=n[0],a=0;a<n.length-1;a++)o=V(this,i[r+a],t,a),o===W&&(o=this._$AH[a]),s||=!T(o)||o!==this._$AH[a],o===Z?e=Z:e!==Z&&(e+=(o??"")+n[a+1]),this._$AH[a]=o}s&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class te extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class re extends J{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??Z)===W)return;const r=this._$AH,i=e===Z&&r!==Z||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Z&&(r===Z||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const ne=w.litHtmlPolyfillSupport;ne?.(Y,X),(w.litHtmlVersions??=[]).push("3.3.2");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ae extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=r?.renderBefore??null;i._$litPart$=n=new X(t.insertBefore(I(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ae._$litElement$=!0,ae.finalized=!0,se.litElementHydrateSupport?.({LitElement:ae});const oe=se.litElementPolyfillSupport;oe?.({LitElement:ae}),(se.litElementVersions??=[]).push("4.2.2");class ce{constructor(e){this.hass=e}subscribe(e){return this.hass.connection.subscribeMessage(e,{type:"recipe_manager/subscribe"})}async getAllRecipes(){return this.hass.callWS({type:"recipe_manager/recipes/get_all"})}async getRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/get",recipe_id:e})}async scrapeRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/scrape",url:e})}async addRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/add",...e})}async updateRecipe(e,t){return this.hass.callWS({type:"recipe_manager/recipes/update",recipe_id:e,...t})}async deleteRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/delete",recipe_id:e})}async toggleFavourite(e){return this.hass.callWS({type:"recipe_manager/recipes/toggle_favourite",recipe_id:e})}async downloadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/download_image",recipe_id:e,image_url:t})}async getTags(){return this.hass.callWS({type:"recipe_manager/tags/get_all"})}async getMealPlan(e){const t={type:"recipe_manager/meal_plan/get"};return e&&(t.week_start=e),this.hass.callWS(t)}async addToMealPlan(e,t,r,i=1,n=null){const s={type:"recipe_manager/meal_plan/add",recipe_id:e,date:t,meal_type:r,servings:i};return n&&(s.notes=n),this.hass.callWS(s)}async removeFromMealPlan(e){return this.hass.callWS({type:"recipe_manager/meal_plan/remove",entry_id:e})}async clearMealPlanWeek(e){return this.hass.callWS({type:"recipe_manager/meal_plan/clear",week_start:e})}async addIngredientsToShoppingList(e,t){const r=[];for(const i of t)try{const t=await this.hass.callWS({type:"shopping_list_manager/items/add",list_id:e,name:i.name,quantity:i.amount&&parseFloat(i.amount)||1,unit:i.unit||"units",category_id:"other"});r.push({success:!0,name:i.name,result:t})}catch(e){r.push({success:!1,name:i.name,error:e.message})}return r}async getShoppingLists(){return this.hass.callWS({type:"shopping_list_manager/lists/get_all"})}async importRecipeKeeper(e){return this.hass.callWS({type:"recipe_manager/import/recipe_keeper",html_content:e})}async uploadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/upload_image",recipe_id:e,image_data:t})}}class le extends ae{static properties={recipes:{type:Array},allRecipes:{type:Array},tags:{type:Array},searchQuery:{type:String},activeTag:{type:String},columns:{type:Number},showFavourites:{type:Boolean}};constructor(){super(),this.recipes=[],this.allRecipes=[],this.tags=[],this.searchQuery="",this.activeTag=null,this.columns=3,this.showFavourites=!0}_handleSearchInput(e){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}_handleClearSearch(){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:""},bubbles:!0,composed:!0}))}_handleTagClick(e){this.dispatchEvent(new CustomEvent("rm-tag-filter",{detail:{tag:e},bubbles:!0,composed:!0}))}_handleOpenRecipe(e){this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:e},bubbles:!0,composed:!0}))}_handleToggleFavourite(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:t.id},bubbles:!0,composed:!0}))}_formatTime(e){if(!e)return null;if(e<60)return`${e}m`;const t=Math.floor(e/60),r=e%60;return r?`${t}h ${r}m`:`${t}h`}_renderRecipeCard(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return M`
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
    `}render(){const e=this.recipes.filter(e=>e.is_favourite),t=this.showFavourites&&!this.activeTag&&!this.searchQuery&&e.length>0,r=t?this.recipes.filter(e=>!e.is_favourite):this.recipes,i=`grid-template-columns: var(--rm-grid-columns, repeat(${this.columns}, minmax(0, 1fr)));`;return M`
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
              <div class="recipe-grid" style=${i}>
                ${e.map(e=>this._renderRecipeCard(e))}
              </div>
              ${r.length?M`<div class="section-label">All Recipes</div>`:""}
            `:""}

            <!-- Main grid -->
            <div class="recipe-grid" style=${i}>
              ${r.map(e=>this._renderRecipeCard(e))}
            </div>
          `}
        </div>
      </div>
    `}static styles=s`
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
  `}customElements.define("rm-recipe-grid",le);class de extends ae{static properties={recipe:{type:Object},api:{type:Object},shoppingLists:{type:Array},_editing:{type:Boolean},_editData:{type:Object},_servingMult:{type:Number},_activeTab:{type:String},_showShoppingPicker:{type:Boolean},_selectedListId:{type:String},_shoppingAdding:{type:Boolean},_shoppingResult:{type:String},_confirmDelete:{type:Boolean},_downloading:{type:Boolean}};constructor(){super(),this.recipe=null,this.api=null,this.shoppingLists=[],this._editing=!1,this._editData={},this._servingMult=1,this._activeTab="ingredients",this._showShoppingPicker=!1,this._selectedListId="",this._shoppingAdding=!1,this._shoppingResult=null,this._confirmDelete=!1,this._downloading=!1}updated(e){e.has("recipe")&&this.recipe&&(this._servingMult=1,this._editing=!1,this._confirmDelete=!1,this._shoppingResult=null),e.has("shoppingLists")&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"")}_formatTime(e){if(!e)return null;if(e<60)return`${e} min`;const t=Math.floor(e/60),r=e%60;return r?`${t}h ${r}m`:`${t}h`}_scaleAmount(e){if(!e||isNaN(parseFloat(e)))return e;const t=parseFloat(e)*this._servingMult;return Number.isInteger(t)?String(t):t.toFixed(1).replace(/\.0$/,"")}_startEdit(){this._editData={name:this.recipe.name||"",description:this.recipe.description||"",source_url:this.recipe.source_url||"",servings:this.recipe.servings||4,prep_time:this.recipe.prep_time||"",cook_time:this.recipe.cook_time||"",tags:(this.recipe.tags||[]).join(", "),notes:this.recipe.notes||""},this._editing=!0}_cancelEdit(){this._editing=!1,this._editData={}}_handleEditField(e,t){this._editData={...this._editData,[e]:t}}async _saveEdit(){const e={...this._editData,servings:parseInt(this._editData.servings)||4,prep_time:parseInt(this._editData.prep_time)||null,cook_time:parseInt(this._editData.cook_time)||null,tags:this._editData.tags?this._editData.tags.split(",").map(e=>e.trim()).filter(Boolean):[]};this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:e},bubbles:!0,composed:!0})),this._editing=!1}_handleToggleFav(){this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleDownloadImage(){if(this.recipe.source_url||this.recipe.image_url){this._downloading=!0;try{const e=await this.api.downloadRecipeImage(this.recipe.id,this.recipe.image_url);e?.local_url&&this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e.local_url}},bubbles:!0,composed:!0}))}catch(e){console.warn("Image download failed:",e)}finally{this._downloading=!1}}}_handleDeleteRecipe(){if(!this._confirmDelete)return this._confirmDelete=!0,void setTimeout(()=>{this._confirmDelete=!1},3e3);this.dispatchEvent(new CustomEvent("rm-delete-recipe",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleAddToShopping(){if(!this._selectedListId)return;const e=(this.recipe.ingredients||[]).map(e=>({...e,amount:this._scaleAmount(e.amount)}));this._shoppingAdding=!0,this._shoppingResult=null,this.dispatchEvent(new CustomEvent("rm-add-to-shopping",{detail:{ingredients:e,listId:this._selectedListId},bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,600)),this._shoppingAdding=!1,this._shoppingResult="success",this._showShoppingPicker=!1,setTimeout(()=>{this._shoppingResult=null},2500)}render(){if(!this.recipe)return M``;const e=this.recipe,t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return M`
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
            <button class="hero-btn ${e.is_favourite?"fav-active":""}" @click=${this._handleToggleFav}>
              <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
            </button>
            ${e.source_url?M`
              <a class="hero-btn" href="${e.source_url}" target="_blank" rel="noopener">
                <ha-icon icon="mdi:open-in-new"></ha-icon>
              </a>
            `:""}
            <button class="hero-btn" @click=${this._startEdit}>
              <ha-icon icon="mdi:pencil-outline"></ha-icon>
            </button>
            <button class="hero-btn delete-btn ${this._confirmDelete?"confirm":""}" @click=${this._handleDeleteRecipe}>
              <ha-icon icon="${this._confirmDelete?"mdi:check":"mdi:trash-can-outline"}"></ha-icon>
            </button>
          </div>
        </div>

        <div class="detail-scroll">
          <!-- Recipe name + meta -->
          <div class="detail-head">
            <h2 class="detail-name">${e.name}</h2>
            ${e.description?M`<p class="detail-desc">${e.description}</p>`:""}

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
                  <span class="meta-val">${e.servings}</span>
                </div>
              `:""}
            </div>

            ${e.tags?.length?M`
              <div class="tags-row">
                ${e.tags.map(e=>M`<span class="tag-chip">${e}</span>`)}
              </div>
            `:""}
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
            ${["ingredients","steps","notes"].map(e=>M`
              <button
                class="tab-btn ${this._activeTab===e?"active":""}"
                @click=${()=>{this._activeTab=e}}
              >${e.charAt(0).toUpperCase()+e.slice(1)}</button>
            `)}
          </div>

          <!-- Tab content -->
          <div class="tab-content">
            ${"ingredients"===this._activeTab?M`
              ${e.ingredients?.length?M`
                <ul class="ingredient-list">
                  ${e.ingredients.map(e=>M`
                    <li class="ingredient-item">
                      <span class="ing-amount">${this._scaleAmount(e.amount)||""} ${e.unit||""}</span>
                      <span class="ing-name">${e.name}</span>
                    </li>
                  `)}
                </ul>
              `:M`<p class="empty-tab">No ingredients listed.</p>`}

              <!-- Add to shopping -->
              ${this.shoppingLists.length?M`
                <div class="shopping-section">
                  ${"success"===this._shoppingResult?M`
                    <div class="shopping-success">
                      <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                      Added to shopping list!
                    </div>
                  `:this._showShoppingPicker?M`
                    <div class="shopping-picker">
                      <select class="list-select" .value=${this._selectedListId} @change=${e=>{this._selectedListId=e.target.value}}>
                        ${this.shoppingLists.map(e=>M`
                          <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                        `)}
                      </select>
                      <button class="action-btn primary" ?disabled=${this._shoppingAdding} @click=${this._handleAddToShopping}>
                        ${this._shoppingAdding?M`<ha-circular-progress active size="tiny"></ha-circular-progress>`:"Add"}
                      </button>
                      <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>Cancel</button>
                    </div>
                  `:M`
                    <button class="action-btn primary shopping-btn" @click=${()=>{this._showShoppingPicker=!0}}>
                      <ha-icon icon="mdi:cart-plus"></ha-icon>
                      Add to Shopping List
                    </button>
                  `}
                </div>
              `:""}
            `:"steps"===this._activeTab?M`
              ${e.instructions?.length?M`
                <ol class="steps-list">
                  ${e.instructions.map((e,t)=>M`
                    <li class="step-item">
                      <span class="step-num">${t+1}</span>
                      <span class="step-text">${e}</span>
                    </li>
                  `)}
                </ol>
              `:M`<p class="empty-tab">No instructions listed.</p>`}
            `:M`
              ${e.notes?M`
                <p class="notes-text">${e.notes}</p>
              `:M`<p class="empty-tab">No notes.</p>`}
            `}
          </div>
        </div>

        <!-- Edit dialog (inline) -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_renderEditPanel(){return M`
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
            <div class="edit-row-2">
              ${this._renderField("Prep time (min)","prep_time","number")}
              ${this._renderField("Cook time (min)","cook_time","number")}
              ${this._renderField("Servings","servings","number")}
            </div>
            ${this._renderField("Tags (comma-separated)","tags","text")}
            ${this._renderField("Notes","notes","textarea")}
          </div>
          <div class="edit-footer">
            <button class="action-btn" @click=${this._cancelEdit}>Cancel</button>
            <button class="action-btn primary" @click=${this._saveEdit}>Save</button>
          </div>
        </div>
      </div>
    `}_renderField(e,t,r){const i=this._editData[t]??"";return"textarea"===r?M`
        <div class="edit-field">
          <label>${e}</label>
          <textarea
            .value=${i}
            @input=${e=>this._handleEditField(t,e.target.value)}
            rows="3"
          ></textarea>
        </div>
      `:M`
      <div class="edit-field">
        <label>${e}</label>
        <input
          type="${r}"
          .value=${String(i)}
          @input=${e=>this._handleEditField(t,e.target.value)}
        />
      </div>
    `}static styles=s`
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
    .hero.no-image { height: 100px; }
    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
      padding: 16px 16px 24px;
      scrollbar-width: thin;
      scrollbar-color: var(--rm-border, rgba(255,255,255,0.08)) transparent;
    }

    .detail-head { margin-bottom: 12px; }
    .detail-name {
      margin: 0 0 6px;
      font-size: 20px;
      font-weight: 700;
      color: var(--rm-text, #e5e5ea);
    }
    .detail-desc {
      margin: 0 0 10px;
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
      background: var(--rm-surface, #2c2c2e);
      border-radius: 8px;
      padding: 6px 12px;
      min-width: 60px;
    }
    .meta-label { font-size: 10px; color: var(--rm-text-secondary, #8e8e93); text-transform: uppercase; letter-spacing: 0.05em; }
    .meta-val { font-size: 14px; font-weight: 600; color: var(--rm-text, #e5e5ea); }

    .tags-row { display: flex; gap: 6px; flex-wrap: wrap; }
    .tag-chip {
      background: var(--rm-accent-soft, rgba(255,107,53,0.15));
      color: var(--rm-accent, #ff6b35);
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 12px;
    }

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
      font-size: 13px;
      font-weight: 500;
      color: var(--rm-text-secondary, #8e8e93);
      transition: color 0.15s, border-color 0.15s;
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

    /* Shopping */
    .shopping-section { margin-top: 12px; }
    .shopping-btn {
      width: 100%;
      justify-content: center;
      gap: 6px;
    }
    .shopping-btn ha-icon { --mdc-icon-size: 18px; }
    .shopping-picker { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
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

    /* Steps */
    .steps-list { list-style: none; padding: 0; margin: 0; counter-reset: steps; }
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
    .empty-tab { font-size: 14px; color: var(--rm-text-secondary, #8e8e93); text-align: center; padding: 20px 0; }

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
      max-height: 80vh;
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
      color: var(--rm-text, #e5e5ea);
    }
    .edit-body {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .edit-row-2 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
    .edit-field { display: flex; flex-direction: column; gap: 4px; }
    .edit-field label { font-size: 12px; color: var(--rm-text-secondary, #8e8e93); text-transform: uppercase; letter-spacing: 0.05em; }
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
    .edit-footer {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid var(--rm-border, rgba(255,255,255,0.08));
    }
  `}customElements.define("rm-recipe-detail",de);var he="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ue(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var fe={exports:{}};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/fe.exports=function e(t,r,i){function n(a,o){if(!r[a]){if(!t[a]){if(!o&&ue)return ue(a);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[a]={exports:{}};t[a][0].call(l.exports,function(e){return n(t[a][1][e]||e)},l,l.exports,e,t,r,i)}return r[a].exports}for(var s=ue,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(e,t,r){var i=e("./utils"),n=e("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,a,o,c,l,d=[],h=0,p=e.length,u=p,f="string"!==i.getTypeOf(e);h<e.length;)u=p-h,n=f?(t=e[h++],r=h<p?e[h++]:0,h<p?e[h++]:0):(t=e.charCodeAt(h++),r=h<p?e.charCodeAt(h++):0,h<p?e.charCodeAt(h++):0),a=t>>2,o=(3&t)<<4|r>>4,c=1<u?(15&r)<<2|n>>6:64,l=2<u?63&n:64,d.push(s.charAt(a)+s.charAt(o)+s.charAt(c)+s.charAt(l));return d.join("")},r.decode=function(e){var t,r,i,a,o,c,l=0,d=0,h="data:";if(e.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var p,u=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===s.charAt(64)&&u--,e.charAt(e.length-2)===s.charAt(64)&&u--,u%1!=0)throw new Error("Invalid base64 input, bad content length.");for(p=n.uint8array?new Uint8Array(0|u):new Array(0|u);l<e.length;)t=s.indexOf(e.charAt(l++))<<2|(a=s.indexOf(e.charAt(l++)))>>4,r=(15&a)<<4|(o=s.indexOf(e.charAt(l++)))>>2,i=(3&o)<<6|(c=s.indexOf(e.charAt(l++))),p[d++]=t,64!==o&&(p[d++]=r),64!==c&&(p[d++]=i);return p}},{"./support":30,"./utils":32}],2:[function(e,t,r){var i=e("./external"),n=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,i,n){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=i,this.compressedContent=n}o.prototype={getContentWorker:function(){var e=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){var i=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){var i=e("./utils"),n=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==i.getTypeOf(e)?function(e,t,r,i){var s=n,a=i+r;e^=-1;for(var o=i;o<a;o++)e=e>>>8^s[255&(e^t[o])];return-1^e}(0|t,e,e.length,0):function(e,t,r,i){var s=n,a=i+r;e^=-1;for(var o=i;o<a;o++)e=e>>>8^s[255&(e^t.charCodeAt(o))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){var i=null;i="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:i}},{lie:37}],7:[function(e,t,r){var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=i?"uint8array":"array";function c(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(c,a),c.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},c.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},r.compressWorker=function(e){return new c("Deflate",e)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){function i(e,t){var r,i="";for(r=0;r<t;r++)i+=String.fromCharCode(255&e),e>>>=8;return i}function n(e,t,r,n,a,d){var h,p,u=e.file,f=e.compression,m=d!==o.utf8encode,g=s.transformTo("string",d(u.name)),_=s.transformTo("string",o.utf8encode(u.name)),b=u.comment,v=s.transformTo("string",d(b)),y=s.transformTo("string",o.utf8encode(b)),x=_.length!==u.name.length,w=y.length!==b.length,k="",$="",S="",A=u.dir,E=u.date,z={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(z.crc32=e.crc32,z.compressedSize=e.compressedSize,z.uncompressedSize=e.uncompressedSize);var C=0;t&&(C|=8),m||!x&&!w||(C|=2048);var R=0,I=0;A&&(R|=16),"UNIX"===a?(I=798,R|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(u.unixPermissions,A)):(I=20,R|=function(e){return 63&(e||0)}(u.dosPermissions)),h=E.getUTCHours(),h<<=6,h|=E.getUTCMinutes(),h<<=5,h|=E.getUTCSeconds()/2,p=E.getUTCFullYear()-1980,p<<=4,p|=E.getUTCMonth()+1,p<<=5,p|=E.getUTCDate(),x&&($=i(1,1)+i(c(g),4)+_,k+="up"+i($.length,2)+$),w&&(S=i(1,1)+i(c(v),4)+y,k+="uc"+i(S.length,2)+S);var T="";return T+="\n\0",T+=i(C,2),T+=f.magic,T+=i(h,2),T+=i(p,2),T+=i(z.crc32,4),T+=i(z.compressedSize,4),T+=i(z.uncompressedSize,4),T+=i(g.length,2),T+=i(k.length,2),{fileRecord:l.LOCAL_FILE_HEADER+T+g+k,dirRecord:l.CENTRAL_FILE_HEADER+i(I,2)+T+i(v.length,2)+"\0\0\0\0"+i(R,4)+i(n,4)+g+k+v}}var s=e("../utils"),a=e("../stream/GenericWorker"),o=e("../utf8"),c=e("../crc32"),l=e("../signature");function d(e,t,r,i){a.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(d,a),d.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,a.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-i-1))/r:100}}))},d.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+i(e.crc32,4)+i(e.compressedSize,4)+i(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,a){var o=s.transformTo("string",a(n));return l.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(e,2)+i(e,2)+i(t,4)+i(r,4)+i(o.length,2)+o}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},d.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(e){var t=this._sources;if(!a.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},d.prototype.lock=function(){a.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){var i=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,t,r){var s=new n(t.streamFiles,r,t.platform,t.encodeFileName),a=0;try{e.forEach(function(e,r){a++;var n=function(e,t){var r=e||t,n=i[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(r.options.compression,t.compression),o=r.options.compressionOptions||t.compressionOptions||{},c=r.dir,l=r.date;r._compressWorker(n,o).withStreamInfo("file",{name:e,dir:c,date:l,comment:r.comment||"",unixPermissions:r.unixPermissions,dosPermissions:r.dosPermissions}).pipe(s)}),s.entriesCount=a}catch(e){s.error(e)}return s}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new i;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(i.prototype=e("./object")).loadAsync=e("./load"),i.support=e("./support"),i.defaults=e("./defaults"),i.version="3.10.1",i.loadAsync=function(e,t){return(new i).loadAsync(e,t)},i.external=e("./external"),t.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){var i=e("./utils"),n=e("./external"),s=e("./utf8"),a=e("./zipEntries"),o=e("./stream/Crc32Probe"),c=e("./nodejsUtils");function l(e){return new n.Promise(function(t,r){var i=e.decompressed.getContentWorker().pipe(new o);i.on("error",function(e){r(e)}).on("end",function(){i.streamInfo.crc32!==e.decompressed.crc32?r(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}t.exports=function(e,t){var r=this;return t=i.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),c.isNode&&c.isStream(e)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var r=new a(t);return r.load(e),r}).then(function(e){var r=[n.Promise.resolve(e)],i=e.files;if(t.checkCRC32)for(var s=0;s<i.length;s++)r.push(l(i[s]));return n.Promise.all(r)}).then(function(e){for(var n=e.shift(),s=n.files,a=0;a<s.length;a++){var o=s[a],c=o.fileNameStr,l=i.resolve(o.fileNameStr);r.file(l,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileCommentStr.length?o.fileCommentStr:null,unixPermissions:o.unixPermissions,dosPermissions:o.dosPermissions,createFolders:t.createFolders}),o.dir||(r.file(l).unsafeOriginalName=c)}return n.zipComment.length&&(r.comment=n.zipComment),r})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){var i=e("../utils"),n=e("../stream/GenericWorker");function s(e,t){n.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}i.inherits(s,n),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){function i(e,t,r){var i,n=s.getTypeOf(t),o=s.extend(r||{},c);o.date=o.date||new Date,null!==o.compression&&(o.compression=o.compression.toUpperCase()),"string"==typeof o.unixPermissions&&(o.unixPermissions=parseInt(o.unixPermissions,8)),o.unixPermissions&&16384&o.unixPermissions&&(o.dir=!0),o.dosPermissions&&16&o.dosPermissions&&(o.dir=!0),o.dir&&(e=m(e)),o.createFolders&&(i=f(e))&&g.call(this,i,!0);var h="string"===n&&!1===o.binary&&!1===o.base64;r&&void 0!==r.binary||(o.binary=!h),(t instanceof l&&0===t.uncompressedSize||o.dir||!t||0===t.length)&&(o.base64=!1,o.binary=!0,t="",o.compression="STORE",n="string");var _=null;_=t instanceof l||t instanceof a?t:p.isNode&&p.isStream(t)?new u(e,t):s.prepareContent(e,t,o.binary,o.optimizedBinaryString,o.base64);var b=new d(e,_,o);this.files[e]=b}var n=e("./utf8"),s=e("./utils"),a=e("./stream/GenericWorker"),o=e("./stream/StreamHelper"),c=e("./defaults"),l=e("./compressedObject"),d=e("./zipObject"),h=e("./generate"),p=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),f=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},m=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},g=function(e,t){return t=void 0!==t?t:c.createFolders,e=m(e),this.files[e]||i.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var b={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,i;for(t in this.files)i=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,i)},filter:function(e){var t=[];return this.forEach(function(r,i){e(r,i)&&t.push(i)}),t},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,i.call(this,e,t,r),this;if(_(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var s=this.files[this.root+e];return s&&!s.dir?s:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,r){return r.dir&&e.test(t)});var t=this.root+e,r=g.call(this,t),i=this.clone();return i.root=r.name,i},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var r=this.filter(function(t,r){return r.name.slice(0,e.length)===e}),i=0;i<r.length;i++)delete this.files[r[i].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=s.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");s.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";t=h.generateWorker(this,r,i)}catch(e){(t=new a("error")).error(e)}return new o(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=b},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){var i=e("./DataReader");function n(e){i.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(n,i),n.prototype.byteAt=function(e){return this.data[this.zero+e]},n.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2),n=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===i&&this.data[s+3]===n)return s-this.zero;return-1},n.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2),n=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&i===s[2]&&n===s[3]},n.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){var i=e("../utils");function n(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return i.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=n},{"../utils":32}],19:[function(e,t,r){var i=e("./Uint8ArrayReader");function n(e){i.call(this,e)}e("../utils").inherits(n,i),n.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){var i=e("./DataReader");function n(e){i.call(this,e)}e("../utils").inherits(n,i),n.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},n.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},n.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},n.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){var i=e("./ArrayReader");function n(e){i.call(this,e)}e("../utils").inherits(n,i),n.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){var i=e("../utils"),n=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),c=e("./Uint8ArrayReader");t.exports=function(e){var t=i.getTypeOf(e);return i.checkSupport(t),"string"!==t||n.uint8array?"nodebuffer"===t?new o(e):n.uint8array?new c(i.transformTo("uint8array",e)):new s(i.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){var i=e("./GenericWorker"),n=e("../utils");function s(e){i.call(this,"ConvertWorker to "+e),this.destType=e}n.inherits(s,i),s.prototype.processChunk=function(e){this.push({data:n.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){var i=e("./GenericWorker"),n=e("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,i),s.prototype.processChunk=function(e){this.streamInfo.crc32=n(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){var i=e("../utils"),n=e("./GenericWorker");function s(e){n.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}i.inherits(s,n),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}n.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){var i=e("../utils"),n=e("./GenericWorker");function s(e){n.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=i.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}i.inherits(s,n),s.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){function i(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=i},{}],29:[function(e,t,r){var i=e("../utils"),n=e("./ConvertWorker"),s=e("./GenericWorker"),a=e("../base64"),o=e("../support"),c=e("../external"),l=null;if(o.nodestream)try{l=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function d(e,t){return new c.Promise(function(r,n){var s=[],o=e._internalType,c=e._outputType,l=e._mimeType;e.on("data",function(e,r){s.push(e),t&&t(r)}).on("error",function(e){s=[],n(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return i.newBlob(i.transformTo("arraybuffer",t),r);case"base64":return a.encode(t);default:return i.transformTo(e,t)}}(c,function(e,t){var r,i=0,n=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(n=new Uint8Array(s),r=0;r<t.length;r++)n.set(t[r],i),i+=t[r].length;return n;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(o,s),l);r(e)}catch(e){n(e)}s=[]}).resume()})}function h(e,t,r){var a=t;switch(t){case"blob":case"arraybuffer":a="uint8array";break;case"base64":a="string"}try{this._internalType=a,this._outputType=t,this._mimeType=r,i.checkSupport(a),this._worker=e.pipe(new n(a)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}h.prototype={accumulate:function(e){return d(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){i.delay(t,arguments,r)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(i.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new l(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=0===new Blob([i],{type:"application/zip"}).size}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=0===n.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,r){for(var i=e("./utils"),n=e("./support"),s=e("./nodejsUtils"),a=e("./stream/GenericWorker"),o=new Array(256),c=0;c<256;c++)o[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function l(){a.call(this,"utf-8 decode"),this.leftOver=null}function d(){a.call(this,"utf-8 encode")}o[254]=o[254]=1,r.utf8encode=function(e){return n.nodebuffer?s.newBufferFrom(e,"utf-8"):function(e){var t,r,i,s,a,o=e.length,c=0;for(s=0;s<o;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(i=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(i-56320),s++),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=n.uint8array?new Uint8Array(c):new Array(c),s=a=0;a<c;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(i=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(i-56320),s++),r<128?t[a++]=r:(r<2048?t[a++]=192|r>>>6:(r<65536?t[a++]=224|r>>>12:(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63),t[a++]=128|r>>>6&63),t[a++]=128|63&r);return t}(e)},r.utf8decode=function(e){return n.nodebuffer?i.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,s,a=e.length,c=new Array(2*a);for(t=r=0;t<a;)if((n=e[t++])<128)c[r++]=n;else if(4<(s=o[n]))c[r++]=65533,t+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&t<a;)n=n<<6|63&e[t++],s--;1<s?c[r++]=65533:n<65536?c[r++]=n:(n-=65536,c[r++]=55296|n>>10&1023,c[r++]=56320|1023&n)}return c.length!==r&&(c.subarray?c=c.subarray(0,r):c.length=r),i.applyFromCharCode(c)}(e=i.transformTo(n.uint8array?"uint8array":"array",e))},i.inherits(l,a),l.prototype.processChunk=function(e){var t=i.transformTo(n.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(n.uint8array){var s=t;(t=new Uint8Array(s.length+this.leftOver.length)).set(this.leftOver,0),t.set(s,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var a=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0||0===r?t:r+o[e[r]]>t?r:t}(t),c=t;a!==t.length&&(n.uint8array?(c=t.subarray(0,a),this.leftOver=t.subarray(a,t.length)):(c=t.slice(0,a),this.leftOver=t.slice(a,t.length))),this.push({data:r.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=l,i.inherits(d,a),d.prototype.processChunk=function(e){this.push({data:r.utf8encode(e.data),meta:e.meta})},r.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,r){var i=e("./support"),n=e("./base64"),s=e("./nodejsUtils"),a=e("./external");function o(e){return e}function c(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),r.newBlob=function(e,t){r.checkSupport("blob");try{return new Blob([e],{type:t})}catch(r){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(e),i.getBlob(t)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var l={stringifyByChunk:function(e,t,r){var i=[],n=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;n<s;)"array"===t||"nodebuffer"===t?i.push(String.fromCharCode.apply(null,e.slice(n,Math.min(n+r,s)))):i.push(String.fromCharCode.apply(null,e.subarray(n,Math.min(n+r,s)))),n+=r;return i.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&1===String.fromCharCode.apply(null,s.allocBuffer(1)).length}catch(e){return!1}}()}};function d(e){var t=65536,i=r.getTypeOf(e),n=!0;if("uint8array"===i?n=l.applyCanBeUsed.uint8array:"nodebuffer"===i&&(n=l.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return l.stringifyByChunk(e,i,t)}catch(e){t=Math.floor(t/2)}return l.stringifyByChar(e)}function h(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}r.applyFromCharCode=d;var p={};p.string={string:o,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return p.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,s.allocBuffer(e.length))}},p.array={string:d,array:o,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s.newBufferFrom(e)}},p.arraybuffer={string:function(e){return d(new Uint8Array(e))},array:function(e){return h(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:o,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s.newBufferFrom(new Uint8Array(e))}},p.uint8array={string:d,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:o,nodebuffer:function(e){return s.newBufferFrom(e)}},p.nodebuffer={string:d,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return p.nodebuffer.uint8array(e).buffer},uint8array:function(e){return h(e,new Uint8Array(e.length))},nodebuffer:o},r.transformTo=function(e,t){if(t=t||"",!e)return t;r.checkSupport(e);var i=r.getTypeOf(t);return p[i][e](t)},r.resolve=function(e){for(var t=e.split("/"),r=[],i=0;i<t.length;i++){var n=t[i];"."===n||""===n&&0!==i&&i!==t.length-1||(".."===n?r.pop():r.push(n))}return r.join("/")},r.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":i.nodebuffer&&s.isBuffer(e)?"nodebuffer":i.uint8array&&e instanceof Uint8Array?"uint8array":i.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(e){if(!i[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(e){var t,r,i="";for(r=0;r<(e||"").length;r++)i+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return i},r.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},r.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},r.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},r.prepareContent=function(e,t,s,o,l){return a.Promise.resolve(t).then(function(e){return i.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new a.Promise(function(t,r){var i=new FileReader;i.onload=function(e){t(e.target.result)},i.onerror=function(e){r(e.target.error)},i.readAsArrayBuffer(e)}):e}).then(function(t){var d=r.getTypeOf(t);return d?("arraybuffer"===d?t=r.transformTo("uint8array",t):"string"===d&&(l?t=n.decode(t):s&&!0!==o&&(t=function(e){return c(e,i.uint8array?new Uint8Array(e.length):new Array(e.length))}(t))),t):a.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){var i=e("./reader/readerFor"),n=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(t)+", expected "+n.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var i=this.reader.readString(4)===t;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=n.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,i=this.zip64EndOfCentralSize-44;0<i;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=t-r;if(0<i)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(e){this.reader=i(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){var i=e("./reader/readerFor"),n=e("./utils"),s=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),c=e("./compressions"),l=e("./support");function d(e,t){this.options=e,this.loadOptions=t}d.prototype={isEncrypted:function(){return!(1&~this.bitFlag)},useUTF8:function(){return!(2048&~this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+n.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=i(this.extraFields[1].value);this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,i,n=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<n;)t=e.readInt(2),r=e.readInt(2),i=e.readData(r),this.extraFields[t]={id:t,length:r,value:i};e.setIndex(n)},handleUTF8:function(){var e=l.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=n.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var s=n.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(s)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=i(e.value);return 1!==t.readInt(1)||a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=i(e.value);return 1!==t.readInt(1)||a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){function i(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var n=e("./stream/StreamHelper"),s=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),c=e("./stream/GenericWorker");i.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var i="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var s=!this._dataBinary;s&&!i&&(t=t.pipe(new a.Utf8EncodeWorker)),!s&&i&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new c("error")).error(e)}return new n(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof c?this._data:new s(this._data)}};for(var l=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<l.length;h++)i.prototype[l[h]]=d;t.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,r){(function(e){var r,i,n=e.MutationObserver||e.WebKitMutationObserver;if(n){var s=0,a=new n(d),o=e.document.createTextNode("");a.observe(o,{characterData:!0}),r=function(){o.data=s=++s%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){d(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(d,0)};else{var c=new e.MessageChannel;c.port1.onmessage=d,r=function(){c.port2.postMessage(0)}}var l=[];function d(){var e,t;i=!0;for(var r=l.length;r;){for(t=l,l=[],e=-1;++e<r;)t[e]();r=l.length}i=!1}t.exports=function(e){1!==l.push(e)||i||r()}}).call(this,void 0!==he?he:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){var i=e("immediate");function n(){}var s={},a=["REJECTED"],o=["FULFILLED"],c=["PENDING"];function l(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==n&&u(this,e)}function d(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function h(e,t,r){i(function(){var i;try{i=t(r)}catch(i){return s.reject(e,i)}i===e?s.reject(e,new TypeError("Cannot resolve promise with itself")):s.resolve(e,i)})}function p(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){var r=!1;function i(t){r||(r=!0,s.reject(e,t))}function n(t){r||(r=!0,s.resolve(e,t))}var a=f(function(){t(n,i)});"error"===a.status&&i(a.value)}function f(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=l).prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){throw r})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if("function"!=typeof e&&this.state===o||"function"!=typeof t&&this.state===a)return this;var r=new this.constructor(n);return this.state!==c?h(r,this.state===o?e:t,this.outcome):this.queue.push(new d(r,e,t)),r},d.prototype.callFulfilled=function(e){s.resolve(this.promise,e)},d.prototype.otherCallFulfilled=function(e){h(this.promise,this.onFulfilled,e)},d.prototype.callRejected=function(e){s.reject(this.promise,e)},d.prototype.otherCallRejected=function(e){h(this.promise,this.onRejected,e)},s.resolve=function(e,t){var r=f(p,t);if("error"===r.status)return s.reject(e,r.value);var i=r.value;if(i)u(e,i);else{e.state=o,e.outcome=t;for(var n=-1,a=e.queue.length;++n<a;)e.queue[n].callFulfilled(t)}return e},s.reject=function(e,t){e.state=a,e.outcome=t;for(var r=-1,i=e.queue.length;++r<i;)e.queue[r].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:s.resolve(new this(n),e)},l.reject=function(e){var t=new this(n);return s.reject(t,e)},l.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,i=!1;if(!r)return this.resolve([]);for(var a=new Array(r),o=0,c=-1,l=new this(n);++c<r;)d(e[c],c);return l;function d(e,n){t.resolve(e).then(function(e){a[n]=e,++o!==r||i||(i=!0,s.resolve(l,a))},function(e){i||(i=!0,s.reject(l,e))})}},l.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,i=!1;if(!r)return this.resolve([]);for(var a,o=-1,c=new this(n);++o<r;)a=e[o],t.resolve(a).then(function(e){i||(i=!0,s.resolve(c,e))},function(e){i||(i=!0,s.reject(c,e))});return c}},{immediate:36}],38:[function(e,t,r){var i={};(0,e("./lib/utils/common").assign)(i,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){var i=e("./zlib/deflate"),n=e("./utils/common"),s=e("./utils/strings"),a=e("./zlib/messages"),o=e("./zlib/zstream"),c=Object.prototype.toString,l=0,d=-1,h=0,p=8;function u(e){if(!(this instanceof u))return new u(e);this.options=n.assign({level:d,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var r=i.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(a[r]);if(t.header&&i.deflateSetHeader(this.strm,t.header),t.dictionary){var f;if(f="string"==typeof t.dictionary?s.string2buf(t.dictionary):"[object ArrayBuffer]"===c.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=i.deflateSetDictionary(this.strm,f))!==l)throw new Error(a[r]);this._dict_set=!0}}function f(e,t){var r=new u(t);if(r.push(e,!0),r.err)throw r.msg||a[r.err];return r.result}u.prototype.push=function(e,t){var r,a,o=this.strm,d=this.options.chunkSize;if(this.ended)return!1;a=t===~~t?t:!0===t?4:0,"string"==typeof e?o.input=s.string2buf(e):"[object ArrayBuffer]"===c.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new n.Buf8(d),o.next_out=0,o.avail_out=d),1!==(r=i.deflate(o,a))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==o.avail_out&&(0!==o.avail_in||4!==a&&2!==a)||("string"===this.options.to?this.onData(s.buf2binstring(n.shrinkBuf(o.output,o.next_out))):this.onData(n.shrinkBuf(o.output,o.next_out)))}while((0<o.avail_in||0===o.avail_out)&&1!==r);return 4===a?(r=i.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==a||(this.onEnd(l),!(o.avail_out=0))},u.prototype.onData=function(e){this.chunks.push(e)},u.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=u,r.deflate=f,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,f(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,f(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){var i=e("./zlib/inflate"),n=e("./utils/common"),s=e("./utils/strings"),a=e("./zlib/constants"),o=e("./zlib/messages"),c=e("./zlib/zstream"),l=e("./zlib/gzheader"),d=Object.prototype.toString;function h(e){if(!(this instanceof h))return new h(e);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var r=i.inflateInit2(this.strm,t.windowBits);if(r!==a.Z_OK)throw new Error(o[r]);this.header=new l,i.inflateGetHeader(this.strm,this.header)}function p(e,t){var r=new h(t);if(r.push(e,!0),r.err)throw r.msg||o[r.err];return r.result}h.prototype.push=function(e,t){var r,o,c,l,h,p,u=this.strm,f=this.options.chunkSize,m=this.options.dictionary,g=!1;if(this.ended)return!1;o=t===~~t?t:!0===t?a.Z_FINISH:a.Z_NO_FLUSH,"string"==typeof e?u.input=s.binstring2buf(e):"[object ArrayBuffer]"===d.call(e)?u.input=new Uint8Array(e):u.input=e,u.next_in=0,u.avail_in=u.input.length;do{if(0===u.avail_out&&(u.output=new n.Buf8(f),u.next_out=0,u.avail_out=f),(r=i.inflate(u,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&m&&(p="string"==typeof m?s.string2buf(m):"[object ArrayBuffer]"===d.call(m)?new Uint8Array(m):m,r=i.inflateSetDictionary(this.strm,p)),r===a.Z_BUF_ERROR&&!0===g&&(r=a.Z_OK,g=!1),r!==a.Z_STREAM_END&&r!==a.Z_OK)return this.onEnd(r),!(this.ended=!0);u.next_out&&(0!==u.avail_out&&r!==a.Z_STREAM_END&&(0!==u.avail_in||o!==a.Z_FINISH&&o!==a.Z_SYNC_FLUSH)||("string"===this.options.to?(c=s.utf8border(u.output,u.next_out),l=u.next_out-c,h=s.buf2string(u.output,c),u.next_out=l,u.avail_out=f-l,l&&n.arraySet(u.output,u.output,c,l,0),this.onData(h)):this.onData(n.shrinkBuf(u.output,u.next_out)))),0===u.avail_in&&0===u.avail_out&&(g=!0)}while((0<u.avail_in||0===u.avail_out)&&r!==a.Z_STREAM_END);return r===a.Z_STREAM_END&&(o=a.Z_FINISH),o===a.Z_FINISH?(r=i.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===a.Z_OK):o!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),!(u.avail_out=0))},h.prototype.onData=function(e){this.chunks.push(e)},h.prototype.onEnd=function(e){e===a.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=h,r.inflate=p,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,p(e,t)},r.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var n={arraySet:function(e,t,r,i,n){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+i),n);else for(var s=0;s<i;s++)e[n+s]=t[r+s]},flattenChunks:function(e){var t,r,i,n,s,a;for(t=i=0,r=e.length;t<r;t++)i+=e[t].length;for(a=new Uint8Array(i),t=n=0,r=e.length;t<r;t++)s=e[t],a.set(s,n),n+=s.length;return a}},s={arraySet:function(e,t,r,i,n){for(var s=0;s<i;s++)e[n+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(i)},{}],42:[function(e,t,r){var i=e("./common"),n=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var a=new i.Buf8(256),o=0;o<256;o++)a[o]=252<=o?6:248<=o?5:240<=o?4:224<=o?3:192<=o?2:1;function c(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&n))return String.fromCharCode.apply(null,i.shrinkBuf(e,t));for(var r="",a=0;a<t;a++)r+=String.fromCharCode(e[a]);return r}a[254]=a[254]=1,r.string2buf=function(e){var t,r,n,s,a,o=e.length,c=0;for(s=0;s<o;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(n=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(n-56320),s++),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new i.Buf8(c),s=a=0;a<c;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(n=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(n-56320),s++),r<128?t[a++]=r:(r<2048?t[a++]=192|r>>>6:(r<65536?t[a++]=224|r>>>12:(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63),t[a++]=128|r>>>6&63),t[a++]=128|63&r);return t},r.buf2binstring=function(e){return c(e,e.length)},r.binstring2buf=function(e){for(var t=new i.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,i,n,s,o=t||e.length,l=new Array(2*o);for(r=i=0;r<o;)if((n=e[r++])<128)l[i++]=n;else if(4<(s=a[n]))l[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&r<o;)n=n<<6|63&e[r++],s--;1<s?l[i++]=65533:n<65536?l[i++]=n:(n-=65536,l[i++]=55296|n>>10&1023,l[i++]=56320|1023&n)}return c(l,i)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0||0===r?t:r+a[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){t.exports=function(e,t,r,i){for(var n=65535&e,s=e>>>16&65535,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(n=n+t[i++]|0)|0,--a;);n%=65521,s%=65521}return n|s<<16}},{}],44:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){var i=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var s=i,a=n+r;e^=-1;for(var o=n;o<a;o++)e=e>>>8^s[255&(e^t[o])];return-1^e}},{}],46:[function(e,t,r){var i,n=e("../utils/common"),s=e("./trees"),a=e("./adler32"),o=e("./crc32"),c=e("./messages"),l=0,d=4,h=0,p=-2,u=-1,f=4,m=2,g=8,_=9,b=286,v=30,y=19,x=2*b+1,w=15,k=3,$=258,S=$+k+1,A=42,E=113,z=1,C=2,R=3,I=4;function T(e,t){return e.msg=c[t],t}function O(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function P(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(n.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function F(e,t){s._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,P(e.strm)}function B(e,t){e.pending_buf[e.pending++]=t}function N(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function U(e,t){var r,i,n=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,c=e.strstart>e.w_size-S?e.strstart-(e.w_size-S):0,l=e.window,d=e.w_mask,h=e.prev,p=e.strstart+$,u=l[s+a-1],f=l[s+a];e.prev_length>=e.good_match&&(n>>=2),o>e.lookahead&&(o=e.lookahead);do{if(l[(r=t)+a]===f&&l[r+a-1]===u&&l[r]===l[s]&&l[++r]===l[s+1]){s+=2,r++;do{}while(l[++s]===l[++r]&&l[++s]===l[++r]&&l[++s]===l[++r]&&l[++s]===l[++r]&&l[++s]===l[++r]&&l[++s]===l[++r]&&l[++s]===l[++r]&&l[++s]===l[++r]&&s<p);if(i=$-(p-s),s=p-$,a<i){if(e.match_start=t,o<=(a=i))break;u=l[s+a-1],f=l[s+a]}}}while((t=h[t&d])>c&&0!=--n);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,i,s,c,l,d,h,p,u,f=e.w_size;do{if(s=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-S)){for(n.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;i=e.head[--t],e.head[t]=f<=i?i-f:0,--r;);for(t=r=f;i=e.prev[--t],e.prev[t]=f<=i?i-f:0,--r;);s+=f}if(0===e.strm.avail_in)break;if(l=e.strm,d=e.window,h=e.strstart+e.lookahead,u=void 0,(p=s)<(u=l.avail_in)&&(u=p),r=0===u?0:(l.avail_in-=u,n.arraySet(d,l.input,l.next_in,u,h),1===l.state.wrap?l.adler=a(l.adler,d,u,h):2===l.state.wrap&&(l.adler=o(l.adler,d,u,h)),l.next_in+=u,l.total_in+=u,u),e.lookahead+=r,e.lookahead+e.insert>=k)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+k-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<k)););}while(e.lookahead<S&&0!==e.strm.avail_in)}function L(e,t){for(var r,i;;){if(e.lookahead<S){if(j(e),e.lookahead<S&&t===l)return z;if(0===e.lookahead)break}if(r=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-S&&(e.match_length=U(e,r)),e.match_length>=k)if(i=s._tr_tally(e,e.strstart-e.match_start,e.match_length-k),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=k){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else i=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(i&&(F(e,!1),0===e.strm.avail_out))return z}return e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(F(e,!0),0===e.strm.avail_out?R:I):e.last_lit&&(F(e,!1),0===e.strm.avail_out)?z:C}function M(e,t){for(var r,i,n;;){if(e.lookahead<S){if(j(e),e.lookahead<S&&t===l)return z;if(0===e.lookahead)break}if(r=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=k-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-S&&(e.match_length=U(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===k&&4096<e.strstart-e.match_start)&&(e.match_length=k-1)),e.prev_length>=k&&e.match_length<=e.prev_length){for(n=e.strstart+e.lookahead-k,i=s._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-k),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=n&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=k-1,e.strstart++,i&&(F(e,!1),0===e.strm.avail_out))return z}else if(e.match_available){if((i=s._tr_tally(e,0,e.window[e.strstart-1]))&&F(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return z}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(i=s._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(F(e,!0),0===e.strm.avail_out?R:I):e.last_lit&&(F(e,!1),0===e.strm.avail_out)?z:C}function W(e,t,r,i,n){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=i,this.func=n}function Z(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*x),this.dyn_dtree=new n.Buf16(2*(2*v+1)),this.bl_tree=new n.Buf16(2*(2*y+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(w+1),this.heap=new n.Buf16(2*b+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*b+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function H(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=m,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?A:E,e.adler=2===t.wrap?0:1,t.last_flush=l,s._tr_init(t),h):T(e,p)}function G(e){var t=H(e);return t===h&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=i[e.level].max_lazy,e.good_match=i[e.level].good_length,e.nice_match=i[e.level].nice_length,e.max_chain_length=i[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=k-1,e.match_available=0,e.ins_h=0}(e.state),t}function K(e,t,r,i,s,a){if(!e)return p;var o=1;if(t===u&&(t=6),i<0?(o=0,i=-i):15<i&&(o=2,i-=16),s<1||_<s||r!==g||i<8||15<i||t<0||9<t||a<0||f<a)return T(e,p);8===i&&(i=9);var c=new Z;return(e.state=c).strm=e,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=s+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+k-1)/k),c.window=new n.Buf8(2*c.w_size),c.head=new n.Buf16(c.hash_size),c.prev=new n.Buf16(c.w_size),c.lit_bufsize=1<<s+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new n.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=a,c.method=r,G(e)}i=[new W(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return z;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var i=e.block_start+r;if((0===e.strstart||e.strstart>=i)&&(e.lookahead=e.strstart-i,e.strstart=i,F(e,!1),0===e.strm.avail_out))return z;if(e.strstart-e.block_start>=e.w_size-S&&(F(e,!1),0===e.strm.avail_out))return z}return e.insert=0,t===d?(F(e,!0),0===e.strm.avail_out?R:I):(e.strstart>e.block_start&&(F(e,!1),e.strm.avail_out),z)}),new W(4,4,8,4,L),new W(4,5,16,8,L),new W(4,6,32,32,L),new W(4,4,16,16,M),new W(8,16,32,32,M),new W(8,16,128,128,M),new W(8,32,128,256,M),new W(32,128,258,1024,M),new W(32,258,258,4096,M)],r.deflateInit=function(e,t){return K(e,t,g,15,8,0)},r.deflateInit2=K,r.deflateReset=G,r.deflateResetKeep=H,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?p:(e.state.gzhead=t,h):p},r.deflate=function(e,t){var r,n,a,c;if(!e||!e.state||5<t||t<0)return e?T(e,p):p;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==d)return T(e,0===e.avail_out?-5:p);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===A)if(2===n.wrap)e.adler=0,B(n,31),B(n,139),B(n,8),n.gzhead?(B(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),B(n,255&n.gzhead.time),B(n,n.gzhead.time>>8&255),B(n,n.gzhead.time>>16&255),B(n,n.gzhead.time>>24&255),B(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),B(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(B(n,255&n.gzhead.extra.length),B(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=o(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(B(n,0),B(n,0),B(n,0),B(n,0),B(n,0),B(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),B(n,3),n.status=E);else{var u=g+(n.w_bits-8<<4)<<8;u|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(u|=32),u+=31-u%31,n.status=E,N(n,u),0!==n.strstart&&(N(n,e.adler>>>16),N(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(e.adler=o(e.adler,n.pending_buf,n.pending-a,a)),P(e),a=n.pending,n.pending!==n.pending_buf_size));)B(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>a&&(e.adler=o(e.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(e.adler=o(e.adler,n.pending_buf,n.pending-a,a)),P(e),a=n.pending,n.pending===n.pending_buf_size)){c=1;break}c=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,B(n,c)}while(0!==c);n.gzhead.hcrc&&n.pending>a&&(e.adler=o(e.adler,n.pending_buf,n.pending-a,a)),0===c&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(e.adler=o(e.adler,n.pending_buf,n.pending-a,a)),P(e),a=n.pending,n.pending===n.pending_buf_size)){c=1;break}c=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,B(n,c)}while(0!==c);n.gzhead.hcrc&&n.pending>a&&(e.adler=o(e.adler,n.pending_buf,n.pending-a,a)),0===c&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&P(e),n.pending+2<=n.pending_buf_size&&(B(n,255&e.adler),B(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(P(e),0===e.avail_out)return n.last_flush=-1,h}else if(0===e.avail_in&&O(t)<=O(r)&&t!==d)return T(e,-5);if(666===n.status&&0!==e.avail_in)return T(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var f=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return z;break}if(e.match_length=0,r=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(F(e,!1),0===e.strm.avail_out))return z}return e.insert=0,t===d?(F(e,!0),0===e.strm.avail_out?R:I):e.last_lit&&(F(e,!1),0===e.strm.avail_out)?z:C}(n,t):3===n.strategy?function(e,t){for(var r,i,n,a,o=e.window;;){if(e.lookahead<=$){if(j(e),e.lookahead<=$&&t===l)return z;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=k&&0<e.strstart&&(i=o[n=e.strstart-1])===o[++n]&&i===o[++n]&&i===o[++n]){a=e.strstart+$;do{}while(i===o[++n]&&i===o[++n]&&i===o[++n]&&i===o[++n]&&i===o[++n]&&i===o[++n]&&i===o[++n]&&i===o[++n]&&n<a);e.match_length=$-(a-n),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=k?(r=s._tr_tally(e,1,e.match_length-k),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(F(e,!1),0===e.strm.avail_out))return z}return e.insert=0,t===d?(F(e,!0),0===e.strm.avail_out?R:I):e.last_lit&&(F(e,!1),0===e.strm.avail_out)?z:C}(n,t):i[n.level].func(n,t);if(f!==R&&f!==I||(n.status=666),f===z||f===R)return 0===e.avail_out&&(n.last_flush=-1),h;if(f===C&&(1===t?s._tr_align(n):5!==t&&(s._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),P(e),0===e.avail_out))return n.last_flush=-1,h}return t!==d?h:n.wrap<=0?1:(2===n.wrap?(B(n,255&e.adler),B(n,e.adler>>8&255),B(n,e.adler>>16&255),B(n,e.adler>>24&255),B(n,255&e.total_in),B(n,e.total_in>>8&255),B(n,e.total_in>>16&255),B(n,e.total_in>>24&255)):(N(n,e.adler>>>16),N(n,65535&e.adler)),P(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?h:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==A&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?T(e,p):(e.state=null,t===E?T(e,-3):h):p},r.deflateSetDictionary=function(e,t){var r,i,s,o,c,l,d,u,f=t.length;if(!e||!e.state)return p;if(2===(o=(r=e.state).wrap)||1===o&&r.status!==A||r.lookahead)return p;for(1===o&&(e.adler=a(e.adler,t,f,0)),r.wrap=0,f>=r.w_size&&(0===o&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new n.Buf8(r.w_size),n.arraySet(u,t,f-r.w_size,r.w_size,0),t=u,f=r.w_size),c=e.avail_in,l=e.next_in,d=e.input,e.avail_in=f,e.next_in=0,e.input=t,j(r);r.lookahead>=k;){for(i=r.strstart,s=r.lookahead-(k-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+k-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++,--s;);r.strstart=i,r.lookahead=k-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=k-1,r.match_available=0,e.next_in=l,e.input=d,e.avail_in=c,r.wrap=o,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){t.exports=function(e,t){var r,i,n,s,a,o,c,l,d,h,p,u,f,m,g,_,b,v,y,x,w,k,$,S,A;r=e.state,i=e.next_in,S=e.input,n=i+(e.avail_in-5),s=e.next_out,A=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=r.dmax,l=r.wsize,d=r.whave,h=r.wnext,p=r.window,u=r.hold,f=r.bits,m=r.lencode,g=r.distcode,_=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{f<15&&(u+=S[i++]<<f,f+=8,u+=S[i++]<<f,f+=8),v=m[u&_];t:for(;;){if(u>>>=y=v>>>24,f-=y,0==(y=v>>>16&255))A[s++]=65535&v;else{if(!(16&y)){if(!(64&y)){v=m[(65535&v)+(u&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}x=65535&v,(y&=15)&&(f<y&&(u+=S[i++]<<f,f+=8),x+=u&(1<<y)-1,u>>>=y,f-=y),f<15&&(u+=S[i++]<<f,f+=8,u+=S[i++]<<f,f+=8),v=g[u&b];r:for(;;){if(u>>>=y=v>>>24,f-=y,!(16&(y=v>>>16&255))){if(!(64&y)){v=g[(65535&v)+(u&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(w=65535&v,f<(y&=15)&&(u+=S[i++]<<f,(f+=8)<y&&(u+=S[i++]<<f,f+=8)),c<(w+=u&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(u>>>=y,f-=y,(y=s-a)<w){if(d<(y=w-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if($=p,(k=0)===h){if(k+=l-y,y<x){for(x-=y;A[s++]=p[k++],--y;);k=s-w,$=A}}else if(h<y){if(k+=l+h-y,(y-=h)<x){for(x-=y;A[s++]=p[k++],--y;);if(k=0,h<x){for(x-=y=h;A[s++]=p[k++],--y;);k=s-w,$=A}}}else if(k+=h-y,y<x){for(x-=y;A[s++]=p[k++],--y;);k=s-w,$=A}for(;2<x;)A[s++]=$[k++],A[s++]=$[k++],A[s++]=$[k++],x-=3;x&&(A[s++]=$[k++],1<x&&(A[s++]=$[k++]))}else{for(k=s-w;A[s++]=A[k++],A[s++]=A[k++],A[s++]=A[k++],2<(x-=3););x&&(A[s++]=A[k++],1<x&&(A[s++]=A[k++]))}break}}break}}while(i<n&&s<o);i-=x=f>>3,u&=(1<<(f-=x<<3))-1,e.next_in=i,e.next_out=s,e.avail_in=i<n?n-i+5:5-(i-n),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=u,r.bits=f}},{}],49:[function(e,t,r){var i=e("../utils/common"),n=e("./adler32"),s=e("./crc32"),a=e("./inffast"),o=e("./inftrees"),c=1,l=2,d=0,h=-2,p=1,u=852,f=592;function m(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=p,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new i.Buf32(u),t.distcode=t.distdyn=new i.Buf32(f),t.sane=1,t.back=-1,d):h}function b(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):h}function v(e,t){var r,i;return e&&e.state?(i=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?h:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=r,i.wbits=t,b(e))):h}function y(e,t){var r,i;return e?(i=new g,(e.state=i).window=null,(r=v(e,t))!==d&&(e.state=null),r):h}var x,w,k=!0;function $(e){if(k){var t;for(x=new i.Buf32(512),w=new i.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(o(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;o(l,e.lens,0,32,w,0,e.work,{bits:5}),k=!1}e.lencode=x,e.lenbits=9,e.distcode=w,e.distbits=5}function S(e,t,r,n){var s,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new i.Buf8(a.wsize)),n>=a.wsize?(i.arraySet(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(n<(s=a.wsize-a.wnext)&&(s=n),i.arraySet(a.window,t,r-n,s,a.wnext),(n-=s)?(i.arraySet(a.window,t,r-n,n,0),a.wnext=n,a.whave=a.wsize):(a.wnext+=s,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=s))),0}r.inflateReset=b,r.inflateReset2=v,r.inflateResetKeep=_,r.inflateInit=function(e){return y(e,15)},r.inflateInit2=y,r.inflate=function(e,t){var r,u,f,g,_,b,v,y,x,w,k,A,E,z,C,R,I,T,O,D,P,F,B,N,U=0,j=new i.Buf8(4),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return h;12===(r=e.state).mode&&(r.mode=13),_=e.next_out,f=e.output,v=e.avail_out,g=e.next_in,u=e.input,b=e.avail_in,y=r.hold,x=r.bits,w=b,k=v,F=d;e:for(;;)switch(r.mode){case p:if(0===r.wrap){r.mode=13;break}for(;x<16;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(2&r.wrap&&35615===y){j[r.check=0]=255&y,j[1]=y>>>8&255,r.check=s(r.check,j,2,0),x=y=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&y)<<8)+(y>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&y)){e.msg="unknown compression method",r.mode=30;break}if(x-=4,P=8+(15&(y>>>=4)),0===r.wbits)r.wbits=P;else if(P>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<P,e.adler=r.check=1,r.mode=512&y?10:12,x=y=0;break;case 2:for(;x<16;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(r.flags=y,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=y>>8&1),512&r.flags&&(j[0]=255&y,j[1]=y>>>8&255,r.check=s(r.check,j,2,0)),x=y=0,r.mode=3;case 3:for(;x<32;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}r.head&&(r.head.time=y),512&r.flags&&(j[0]=255&y,j[1]=y>>>8&255,j[2]=y>>>16&255,j[3]=y>>>24&255,r.check=s(r.check,j,4,0)),x=y=0,r.mode=4;case 4:for(;x<16;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}r.head&&(r.head.xflags=255&y,r.head.os=y>>8),512&r.flags&&(j[0]=255&y,j[1]=y>>>8&255,r.check=s(r.check,j,2,0)),x=y=0,r.mode=5;case 5:if(1024&r.flags){for(;x<16;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}r.length=y,r.head&&(r.head.extra_len=y),512&r.flags&&(j[0]=255&y,j[1]=y>>>8&255,r.check=s(r.check,j,2,0)),x=y=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(b<(A=r.length)&&(A=b),A&&(r.head&&(P=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),i.arraySet(r.head.extra,u,g,A,P)),512&r.flags&&(r.check=s(r.check,u,A,g)),b-=A,g+=A,r.length-=A),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===b)break e;for(A=0;P=u[g+A++],r.head&&P&&r.length<65536&&(r.head.name+=String.fromCharCode(P)),P&&A<b;);if(512&r.flags&&(r.check=s(r.check,u,A,g)),b-=A,g+=A,P)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===b)break e;for(A=0;P=u[g+A++],r.head&&P&&r.length<65536&&(r.head.comment+=String.fromCharCode(P)),P&&A<b;);if(512&r.flags&&(r.check=s(r.check,u,A,g)),b-=A,g+=A,P)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;x<16;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(y!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}x=y=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;x<32;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}e.adler=r.check=m(y),x=y=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=_,e.avail_out=v,e.next_in=g,e.avail_in=b,r.hold=y,r.bits=x,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){y>>>=7&x,x-=7&x,r.mode=27;break}for(;x<3;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}switch(r.last=1&y,x-=1,3&(y>>>=1)){case 0:r.mode=14;break;case 1:if($(r),r.mode=20,6!==t)break;y>>>=2,x-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}y>>>=2,x-=2;break;case 14:for(y>>>=7&x,x-=7&x;x<32;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if((65535&y)!=(y>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&y,x=y=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(A=r.length){if(b<A&&(A=b),v<A&&(A=v),0===A)break e;i.arraySet(f,u,g,A,_),b-=A,g+=A,v-=A,_+=A,r.length-=A;break}r.mode=12;break;case 17:for(;x<14;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(r.nlen=257+(31&y),y>>>=5,x-=5,r.ndist=1+(31&y),y>>>=5,x-=5,r.ncode=4+(15&y),y>>>=4,x-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;x<3;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}r.lens[L[r.have++]]=7&y,y>>>=3,x-=3}for(;r.have<19;)r.lens[L[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,B={bits:r.lenbits},F=o(0,r.lens,0,19,r.lencode,0,r.work,B),r.lenbits=B.bits,F){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;R=(U=r.lencode[y&(1<<r.lenbits)-1])>>>16&255,I=65535&U,!((C=U>>>24)<=x);){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(I<16)y>>>=C,x-=C,r.lens[r.have++]=I;else{if(16===I){for(N=C+2;x<N;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(y>>>=C,x-=C,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}P=r.lens[r.have-1],A=3+(3&y),y>>>=2,x-=2}else if(17===I){for(N=C+3;x<N;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}x-=C,P=0,A=3+(7&(y>>>=C)),y>>>=3,x-=3}else{for(N=C+7;x<N;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}x-=C,P=0,A=11+(127&(y>>>=C)),y>>>=7,x-=7}if(r.have+A>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;A--;)r.lens[r.have++]=P}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,B={bits:r.lenbits},F=o(c,r.lens,0,r.nlen,r.lencode,0,r.work,B),r.lenbits=B.bits,F){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,B={bits:r.distbits},F=o(l,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,B),r.distbits=B.bits,F){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=b&&258<=v){e.next_out=_,e.avail_out=v,e.next_in=g,e.avail_in=b,r.hold=y,r.bits=x,a(e,k),_=e.next_out,f=e.output,v=e.avail_out,g=e.next_in,u=e.input,b=e.avail_in,y=r.hold,x=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;R=(U=r.lencode[y&(1<<r.lenbits)-1])>>>16&255,I=65535&U,!((C=U>>>24)<=x);){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(R&&!(240&R)){for(T=C,O=R,D=I;R=(U=r.lencode[D+((y&(1<<T+O)-1)>>T)])>>>16&255,I=65535&U,!(T+(C=U>>>24)<=x);){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}y>>>=T,x-=T,r.back+=T}if(y>>>=C,x-=C,r.back+=C,r.length=I,0===R){r.mode=26;break}if(32&R){r.back=-1,r.mode=12;break}if(64&R){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&R,r.mode=22;case 22:if(r.extra){for(N=r.extra;x<N;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}r.length+=y&(1<<r.extra)-1,y>>>=r.extra,x-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;R=(U=r.distcode[y&(1<<r.distbits)-1])>>>16&255,I=65535&U,!((C=U>>>24)<=x);){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(!(240&R)){for(T=C,O=R,D=I;R=(U=r.distcode[D+((y&(1<<T+O)-1)>>T)])>>>16&255,I=65535&U,!(T+(C=U>>>24)<=x);){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}y>>>=T,x-=T,r.back+=T}if(y>>>=C,x-=C,r.back+=C,64&R){e.msg="invalid distance code",r.mode=30;break}r.offset=I,r.extra=15&R,r.mode=24;case 24:if(r.extra){for(N=r.extra;x<N;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}r.offset+=y&(1<<r.extra)-1,y>>>=r.extra,x-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===v)break e;if(A=k-v,r.offset>A){if((A=r.offset-A)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}E=A>r.wnext?(A-=r.wnext,r.wsize-A):r.wnext-A,A>r.length&&(A=r.length),z=r.window}else z=f,E=_-r.offset,A=r.length;for(v<A&&(A=v),v-=A,r.length-=A;f[_++]=z[E++],--A;);0===r.length&&(r.mode=21);break;case 26:if(0===v)break e;f[_++]=r.length,v--,r.mode=21;break;case 27:if(r.wrap){for(;x<32;){if(0===b)break e;b--,y|=u[g++]<<x,x+=8}if(k-=v,e.total_out+=k,r.total+=k,k&&(e.adler=r.check=r.flags?s(r.check,f,k,_-k):n(r.check,f,k,_-k)),k=v,(r.flags?y:m(y))!==r.check){e.msg="incorrect data check",r.mode=30;break}x=y=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;x<32;){if(0===b)break e;b--,y+=u[g++]<<x,x+=8}if(y!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}x=y=0}r.mode=29;case 29:F=1;break e;case 30:F=-3;break e;case 31:return-4;default:return h}return e.next_out=_,e.avail_out=v,e.next_in=g,e.avail_in=b,r.hold=y,r.bits=x,(r.wsize||k!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&S(e,e.output,e.next_out,k-e.avail_out)?(r.mode=31,-4):(w-=e.avail_in,k-=e.avail_out,e.total_in+=w,e.total_out+=k,r.total+=k,r.wrap&&k&&(e.adler=r.check=r.flags?s(r.check,f,k,e.next_out-k):n(r.check,f,k,e.next_out-k)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==w&&0===k||4===t)&&F===d&&(F=-5),F)},r.inflateEnd=function(e){if(!e||!e.state)return h;var t=e.state;return t.window&&(t.window=null),e.state=null,d},r.inflateGetHeader=function(e,t){var r;return e&&e.state&&2&(r=e.state).wrap?((r.head=t).done=!1,d):h},r.inflateSetDictionary=function(e,t){var r,i=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?h:11===r.mode&&n(1,t,i,0)!==r.check?-3:S(e,t,i,i)?(r.mode=31,-4):(r.havedict=1,d):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){var i=e("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,c,l,d,h,p){var u,f,m,g,_,b,v,y,x,w=p.bits,k=0,$=0,S=0,A=0,E=0,z=0,C=0,R=0,I=0,T=0,O=null,D=0,P=new i.Buf16(16),F=new i.Buf16(16),B=null,N=0;for(k=0;k<=15;k++)P[k]=0;for($=0;$<c;$++)P[t[r+$]]++;for(E=w,A=15;1<=A&&0===P[A];A--);if(A<E&&(E=A),0===A)return l[d++]=20971520,l[d++]=20971520,p.bits=1,0;for(S=1;S<A&&0===P[S];S++);for(E<S&&(E=S),k=R=1;k<=15;k++)if(R<<=1,(R-=P[k])<0)return-1;if(0<R&&(0===e||1!==A))return-1;for(F[1]=0,k=1;k<15;k++)F[k+1]=F[k]+P[k];for($=0;$<c;$++)0!==t[r+$]&&(h[F[t[r+$]]++]=$);if(b=0===e?(O=B=h,19):1===e?(O=n,D-=257,B=s,N-=257,256):(O=a,B=o,-1),k=S,_=d,C=$=T=0,m=-1,g=(I=1<<(z=E))-1,1===e&&852<I||2===e&&592<I)return 1;for(;;){for(v=k-C,x=h[$]<b?(y=0,h[$]):h[$]>b?(y=B[N+h[$]],O[D+h[$]]):(y=96,0),u=1<<k-C,S=f=1<<z;l[_+(T>>C)+(f-=u)]=v<<24|y<<16|x,0!==f;);for(u=1<<k-1;T&u;)u>>=1;if(0!==u?(T&=u-1,T+=u):T=0,$++,0==--P[k]){if(k===A)break;k=t[r+h[$]]}if(E<k&&(T&g)!==m){for(0===C&&(C=E),_+=S,R=1<<(z=k-C);z+C<A&&!((R-=P[z+C])<=0);)z++,R<<=1;if(I+=1<<z,1===e&&852<I||2===e&&592<I)return 1;l[m=T&g]=E<<24|z<<16|_-d}}return 0!==T&&(l[_+T]=k-C<<24|64<<16),p.bits=E,0}},{"../utils/common":41}],51:[function(e,t,r){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){var i=e("../utils/common"),n=0,s=1;function a(e){for(var t=e.length;0<=--t;)e[t]=0}var o=0,c=29,l=256,d=l+1+c,h=30,p=19,u=2*d+1,f=15,m=16,g=7,_=256,b=16,v=17,y=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],w=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S=new Array(2*(d+2));a(S);var A=new Array(2*h);a(A);var E=new Array(512);a(E);var z=new Array(256);a(z);var C=new Array(c);a(C);var R,I,T,O=new Array(h);function D(e,t,r,i,n){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=e&&e.length}function P(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function F(e){return e<256?E[e]:E[256+(e>>>7)]}function B(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function N(e,t,r){e.bi_valid>m-r?(e.bi_buf|=t<<e.bi_valid&65535,B(e,e.bi_buf),e.bi_buf=t>>m-e.bi_valid,e.bi_valid+=r-m):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function U(e,t,r){N(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function L(e,t,r){var i,n,s=new Array(f+1),a=0;for(i=1;i<=f;i++)s[i]=a=a+r[i-1]<<1;for(n=0;n<=t;n++){var o=e[2*n+1];0!==o&&(e[2*n]=j(s[o]++,o))}}function M(e){var t;for(t=0;t<d;t++)e.dyn_ltree[2*t]=0;for(t=0;t<h;t++)e.dyn_dtree[2*t]=0;for(t=0;t<p;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function W(e){8<e.bi_valid?B(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Z(e,t,r,i){var n=2*t,s=2*r;return e[n]<e[s]||e[n]===e[s]&&i[t]<=i[r]}function H(e,t,r){for(var i=e.heap[r],n=r<<1;n<=e.heap_len&&(n<e.heap_len&&Z(t,e.heap[n+1],e.heap[n],e.depth)&&n++,!Z(t,i,e.heap[n],e.depth));)e.heap[r]=e.heap[n],r=n,n<<=1;e.heap[r]=i}function G(e,t,r){var i,n,s,a,o=0;if(0!==e.last_lit)for(;i=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],n=e.pending_buf[e.l_buf+o],o++,0===i?U(e,n,t):(U(e,(s=z[n])+l+1,t),0!==(a=x[s])&&N(e,n-=C[s],a),U(e,s=F(--i),r),0!==(a=w[s])&&N(e,i-=O[s],a)),o<e.last_lit;);U(e,_,t)}function K(e,t){var r,i,n,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=u,r=0;r<c;r++)0!==s[2*r]?(e.heap[++e.heap_len]=l=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(n=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[n]=0,e.opt_len--,o&&(e.static_len-=a[2*n+1]);for(t.max_code=l,r=e.heap_len>>1;1<=r;r--)H(e,s,r);for(n=c;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],H(e,s,1),i=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=i,s[2*n]=s[2*r]+s[2*i],e.depth[n]=(e.depth[r]>=e.depth[i]?e.depth[r]:e.depth[i])+1,s[2*r+1]=s[2*i+1]=n,e.heap[1]=n++,H(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,i,n,s,a,o,c=t.dyn_tree,l=t.max_code,d=t.stat_desc.static_tree,h=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,m=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(s=0;s<=f;s++)e.bl_count[s]=0;for(c[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<u;r++)g<(s=c[2*c[2*(i=e.heap[r])+1]+1]+1)&&(s=g,_++),c[2*i+1]=s,l<i||(e.bl_count[s]++,a=0,m<=i&&(a=p[i-m]),o=c[2*i],e.opt_len+=o*(s+a),h&&(e.static_len+=o*(d[2*i+1]+a)));if(0!==_){do{for(s=g-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(s=g;0!==s;s--)for(i=e.bl_count[s];0!==i;)l<(n=e.heap[--r])||(c[2*n+1]!==s&&(e.opt_len+=(s-c[2*n+1])*c[2*n],c[2*n+1]=s),i--)}}(e,t),L(s,l,e.bl_count)}function q(e,t,r){var i,n,s=-1,a=t[1],o=0,c=7,l=4;for(0===a&&(c=138,l=3),t[2*(r+1)+1]=65535,i=0;i<=r;i++)n=a,a=t[2*(i+1)+1],++o<c&&n===a||(o<l?e.bl_tree[2*n]+=o:0!==n?(n!==s&&e.bl_tree[2*n]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=n,l=(o=0)===a?(c=138,3):n===a?(c=6,3):(c=7,4))}function Y(e,t,r){var i,n,s=-1,a=t[1],o=0,c=7,l=4;for(0===a&&(c=138,l=3),i=0;i<=r;i++)if(n=a,a=t[2*(i+1)+1],!(++o<c&&n===a)){if(o<l)for(;U(e,n,e.bl_tree),0!=--o;);else 0!==n?(n!==s&&(U(e,n,e.bl_tree),o--),U(e,b,e.bl_tree),N(e,o-3,2)):o<=10?(U(e,v,e.bl_tree),N(e,o-3,3)):(U(e,y,e.bl_tree),N(e,o-11,7));s=n,l=(o=0)===a?(c=138,3):n===a?(c=6,3):(c=7,4)}}a(O);var V=!1;function Q(e,t,r,n){N(e,(o<<1)+(n?1:0),3),function(e,t,r){W(e),B(e,r),B(e,~r),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r)}r._tr_init=function(e){V||(function(){var e,t,r,i,n,s=new Array(f+1);for(i=r=0;i<c-1;i++)for(C[i]=r,e=0;e<1<<x[i];e++)z[r++]=i;for(z[r-1]=i,i=n=0;i<16;i++)for(O[i]=n,e=0;e<1<<w[i];e++)E[n++]=i;for(n>>=7;i<h;i++)for(O[i]=n<<7,e=0;e<1<<w[i]-7;e++)E[256+n++]=i;for(t=0;t<=f;t++)s[t]=0;for(e=0;e<=143;)S[2*e+1]=8,e++,s[8]++;for(;e<=255;)S[2*e+1]=9,e++,s[9]++;for(;e<=279;)S[2*e+1]=7,e++,s[7]++;for(;e<=287;)S[2*e+1]=8,e++,s[8]++;for(L(S,d+1,s),e=0;e<h;e++)A[2*e+1]=5,A[2*e]=j(e,5);R=new D(S,x,l+1,d,f),I=new D(A,w,0,h,f),T=new D(new Array(0),k,0,p,g)}(),V=!0),e.l_desc=new P(e.dyn_ltree,R),e.d_desc=new P(e.dyn_dtree,I),e.bl_desc=new P(e.bl_tree,T),e.bi_buf=0,e.bi_valid=0,M(e)},r._tr_stored_block=Q,r._tr_flush_block=function(e,t,r,i){var a,o,c=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return n;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return s;for(t=32;t<l;t++)if(0!==e.dyn_ltree[2*t])return s;return n}(e)),K(e,e.l_desc),K(e,e.d_desc),c=function(e){var t;for(q(e,e.dyn_ltree,e.l_desc.max_code),q(e,e.dyn_dtree,e.d_desc.max_code),K(e,e.bl_desc),t=p-1;3<=t&&0===e.bl_tree[2*$[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),a=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=a&&(a=o)):a=o=r+5,r+4<=a&&-1!==t?Q(e,t,r,i):4===e.strategy||o===a?(N(e,2+(i?1:0),3),G(e,S,A)):(N(e,4+(i?1:0),3),function(e,t,r,i){var n;for(N(e,t-257,5),N(e,r-1,5),N(e,i-4,4),n=0;n<i;n++)N(e,e.bl_tree[2*$[n]+1],3);Y(e,e.dyn_ltree,t-1),Y(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),G(e,e.dyn_ltree,e.dyn_dtree)),M(e),i&&W(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(z[r]+l+1)]++,e.dyn_dtree[2*F(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){N(e,2,3),U(e,_,S),function(e){16===e.bi_valid?(B(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(e,t){if(!e.setImmediate){var r,i,n,s,a=1,o={},c=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,r="[object process]"==={}.toString.call(e.process)?function(e){process.nextTick(function(){p(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?(s="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),function(t){e.postMessage(s+t,"*")}):e.MessageChannel?((n=new MessageChannel).port1.onmessage=function(e){p(e.data)},function(e){n.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(i=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):function(e){setTimeout(p,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var n={callback:e,args:t};return o[a]=n,r(a),a++},d.clearImmediate=h}function h(e){delete o[e]}function p(e){if(c)setTimeout(p,0,e);else{var r=o[e];if(r){c=!0;try{!function(e){var r=e.callback,i=e.args;switch(i.length){case 0:r();break;case 1:r(i[0]);break;case 2:r(i[0],i[1]);break;case 3:r(i[0],i[1],i[2]);break;default:r.apply(t,i)}}(r)}finally{h(e),c=!1}}}}function u(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&p(+t.data.slice(s.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,void 0!==he?he:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10);var me=pe(fe.exports);class ge extends ae{static properties={api:{type:Object},_mode:{type:String},_url:{type:String},_scraping:{type:Boolean},_scrapeError:{type:String},_form:{type:Object},_saving:{type:Boolean},_ingredientInput:{type:String},_importFile:{type:Object},_importing:{type:Boolean},_importResult:{type:Object},_importError:{type:String},_importDownloadImages:{type:Boolean}};constructor(){super(),this.api=null,this._mode="url",this._url="",this._scraping=!1,this._scrapeError=null,this._saving=!1,this._ingredientInput="",this._form=this._emptyForm(),this._importFile=null,this._importing=!1,this._importResult=null,this._importError=null,this._importDownloadImages=!0}_emptyForm(){return{name:"",description:"",source_url:"",servings:4,prep_time:"",cook_time:"",tags:"",notes:"",image_url:"",ingredients:[],instructions:[]}}_close(){this.dispatchEvent(new CustomEvent("rm-close",{bubbles:!0,composed:!0}))}async _handleScrape(){if(this._url.trim()&&!this._scraping){this._scraping=!0,this._scrapeError=null;try{const e=await this.api.scrapeRecipe(this._url.trim());if(e?.recipe){const t=e.recipe;this._form={name:t.name||"",description:t.description||"",source_url:t.source_url||this._url.trim(),servings:t.servings||4,prep_time:t.prep_time||"",cook_time:t.cook_time||"",tags:(t.tags||[]).join(", "),notes:t.notes||"",image_url:t.image_url||"",ingredients:t.ingredients||[],instructions:t.instructions||[]},this._mode="manual"}else this._scrapeError=e?.error||"Could not extract recipe from this URL."}catch(e){this._scrapeError=e.message||"Scraping failed."}finally{this._scraping=!1}}}_handleImportFileChange(e){this._importFile=e.target.files[0]||null,this._importResult=null,this._importError=null}async _handleImport(){if(this._importFile&&!this._importing){this._importing=!0,this._importResult=null,this._importError=null;try{let e;try{e=await me.loadAsync(this._importFile)}catch(e){throw new Error(`Could not open ZIP file: ${e.message}`)}const t=Object.values(e.files).find(e=>!e.dir&&e.name.endsWith(".html"));if(!t)throw new Error("No HTML file found inside the ZIP — is this a valid Recipe Keeper export?");const r=await t.async("text");console.log(`[Recipe Keeper Import] HTML extracted (${r.length} chars), sending to backend`);const i=await this.api.importRecipeKeeper(r);console.log(`[Recipe Keeper Import] Phase 1 done: ${i.imported} imported, ${i.failed} failed, ${i.recipe_images?.length??0} need images`);let n=0,s=0;if(this._importDownloadImages&&i.recipe_images?.length){const t=new Set([".jpg",".jpeg",".png",".webp",".gif",".bmp"]);for(const{recipe_id:r,image_filename:a}of i.recipe_images){const i=e.files[a]??Object.values(e.files).find(e=>{const r=a.split("/").pop();return!e.dir&&e.name.split("/").pop()===r&&t.has(e.name.slice(e.name.lastIndexOf(".")).toLowerCase())});if(i)try{const e=await i.async("base64");await this.api.uploadRecipeImage(r,e),n++}catch(e){console.warn(`[Recipe Keeper Import] Could not save image for recipe ${r}:`,e),s++}}console.log(`[Recipe Keeper Import] Phase 2 done: ${n} images saved, ${s} failed`)}this._importResult={...i,imagesSaved:n},i.imported>0&&this.dispatchEvent(new CustomEvent("rm-import-done",{bubbles:!0,composed:!0}))}catch(e){console.error("[Recipe Keeper Import] Failed:",e),this._importError=e.message||String(e)||"Import failed."}finally{this._importing=!1}}}async _handleSave(){if(this._form.name.trim()&&!this._saving){this._saving=!0;try{const e={...this._form,servings:parseInt(this._form.servings)||4,prep_time:parseInt(this._form.prep_time)||null,cook_time:parseInt(this._form.cook_time)||null,tags:this._form.tags?this._form.tags.split(",").map(e=>e.trim()).filter(Boolean):[]};this.dispatchEvent(new CustomEvent("rm-add-recipe",{detail:{data:e},bubbles:!0,composed:!0}))}finally{this._saving=!1}}}_setField(e,t){this._form={...this._form,[e]:t}}_addIngredient(){const e=this._ingredientInput.trim();if(!e)return;const t=e.split(/\s+/);let r="",i="",n="";t.length>=3&&!isNaN(parseFloat(t[0]))?(r=t[0],i=t[1],n=t.slice(2).join(" ")):2!==t.length||isNaN(parseFloat(t[0]))?n=e:(r=t[0],n=t[1]),this._form={...this._form,ingredients:[...this._form.ingredients,{amount:r,unit:i,name:n}]},this._ingredientInput=""}_removeIngredient(e){const t=this._form.ingredients.filter((t,r)=>r!==e);this._form={...this._form,ingredients:t}}_addStep(e){e.trim()&&(this._form={...this._form,instructions:[...this._form.instructions,e.trim()]})}_removeStep(e){const t=this._form.instructions.filter((t,r)=>r!==e);this._form={...this._form,instructions:t}}render(){return M`
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
            ${"url"===this._mode?this._renderUrlMode():"import"===this._mode?this._renderImportMode():this._renderManualMode()}
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
    `}_renderManualMode(){const e=this._form;return M`
      <div class="manual-mode">
        <!-- Name (required) -->
        <div class="field">
          <label>Recipe Name *</label>
          <input type="text" .value=${e.name} @input=${e=>this._setField("name",e.target.value)} placeholder="e.g. Spaghetti Bolognese" />
        </div>

        <!-- Description -->
        <div class="field">
          <label>Description</label>
          <textarea rows="2" .value=${e.description} @input=${e=>this._setField("description",e.target.value)} placeholder="Short description…"></textarea>
        </div>

        <!-- Source URL -->
        <div class="field">
          <label>Source URL</label>
          <input type="url" .value=${e.source_url} @input=${e=>this._setField("source_url",e.target.value)} placeholder="https://…" />
        </div>

        <!-- Image URL -->
        <div class="field">
          <label>Image URL</label>
          <input type="url" .value=${e.image_url} @input=${e=>this._setField("image_url",e.target.value)} placeholder="https://…/image.jpg" />
        </div>

        <!-- Times + servings row -->
        <div class="field-row">
          <div class="field">
            <label>Prep (min)</label>
            <input type="number" .value=${String(e.prep_time)} @input=${e=>this._setField("prep_time",e.target.value)} placeholder="15" min="0" />
          </div>
          <div class="field">
            <label>Cook (min)</label>
            <input type="number" .value=${String(e.cook_time)} @input=${e=>this._setField("cook_time",e.target.value)} placeholder="30" min="0" />
          </div>
          <div class="field">
            <label>Servings</label>
            <input type="number" .value=${String(e.servings)} @input=${e=>this._setField("servings",e.target.value)} placeholder="4" min="1" />
          </div>
        </div>

        <!-- Tags -->
        <div class="field">
          <label>Tags (comma-separated)</label>
          <input type="text" .value=${e.tags} @input=${e=>this._setField("tags",e.target.value)} placeholder="dinner, italian, pasta" />
        </div>

        <!-- Ingredients -->
        <div class="field">
          <label>Ingredients (${e.ingredients.length})</label>
          ${e.ingredients.length?M`
            <ul class="ing-list">
              ${e.ingredients.map((e,t)=>M`
                <li>
                  <span class="ing-text">${e.amount?`${e.amount} ${e.unit} `:""}${e.name}</span>
                  <button class="remove-btn" @click=${()=>this._removeIngredient(t)}><ha-icon icon="mdi:close"></ha-icon></button>
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

        <!-- Instructions -->
        <div class="field">
          <label>Instructions (${e.instructions.length} steps)</label>
          ${e.instructions.length?M`
            <ol class="steps-edit">
              ${e.instructions.map((e,t)=>M`
                <li>
                  <span class="step-text">${e}</span>
                  <button class="remove-btn" @click=${()=>this._removeStep(t)}><ha-icon icon="mdi:close"></ha-icon></button>
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
          <textarea rows="3" .value=${e.notes} @input=${e=>this._setField("notes",e.target.value)} placeholder="Variations, tips…"></textarea>
        </div>
      </div>
    `}static styles=s`
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
      max-width: 600px;
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
    .manual-mode { display: flex; flex-direction: column; gap: 14px; }
    .field { display: flex; flex-direction: column; gap: 4px; }
    .field label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--rm-text-secondary, #8e8e93); }
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
    .field-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }

    /* Ingredient list in form */
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
    .import-result.error { background: rgba(207, 102, 121, 0.12); color: var(--error-color, #cf6679); }
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
  `}customElements.define("rm-add-recipe-dialog",ge);const _e=["breakfast","lunch","dinner","snack"],be=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];class ve extends ae{static properties={api:{type:Object},recipes:{type:Array},_weekStart:{type:String},_plan:{type:Array},_loading:{type:Boolean},_showPicker:{type:Boolean},_pickerTarget:{type:Object},_pickerSearch:{type:String},_pickerServings:{type:Number}};constructor(){super(),this.api=null,this.recipes=[],this._plan=[],this._loading=!1,this._showPicker=!1,this._pickerTarget=null,this._pickerSearch="",this._pickerServings=2,this._weekStart=this._getMondayISO(new Date)}updated(e){(e.has("api")||e.has("_weekStart"))&&this.api&&this._loadPlan()}_getMondayISO(e){const t=new Date(e),r=t.getDay(),i=0===r?-6:1-r;return t.setDate(t.getDate()+i),t.toISOString().split("T")[0]}_addDays(e,t){const r=new Date(e+"T00:00:00");return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}_formatDisplayDate(e){return new Date(e+"T00:00:00").getDate().toString()}_formatMonthYear(e){return new Date(e+"T00:00:00").toLocaleDateString("en-GB",{month:"long",year:"numeric"})}_prevWeek(){this._weekStart=this._addDays(this._weekStart,-7)}_nextWeek(){this._weekStart=this._addDays(this._weekStart,7)}_isCurrentWeek(){return this._weekStart===this._getMondayISO(new Date)}async _loadPlan(){this._loading=!0;try{const e=await this.api.getMealPlan(this._weekStart);this._plan=e?.entries??[]}catch(e){this._plan=[]}finally{this._loading=!1}}_getEntriesForSlot(e,t){return this._plan.filter(r=>r.date===e&&r.meal_type===t)}_openPicker(e,t){this._pickerTarget={date:e,mealType:t},this._pickerSearch="",this._pickerServings=2,this._showPicker=!0}async _handlePickRecipe(e){this._pickerTarget&&(await this.api.addToMealPlan(e.id,this._pickerTarget.date,this._pickerTarget.mealType,this._pickerServings),this._showPicker=!1,await this._loadPlan())}async _handleRemoveEntry(e){await this.api.removeFromMealPlan(e),await this._loadPlan()}async _handleClearWeek(){await this.api.clearMealPlanWeek(this._weekStart),await this._loadPlan()}_openRecipeDetail(e){const t=this.recipes.find(t=>t.id===e.recipe_id);t&&this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:t},bubbles:!0,composed:!0}))}get _pickerFiltered(){const e=this._pickerSearch.trim().toLowerCase();return e?this.recipes.filter(t=>t.name?.toLowerCase().includes(e)||t.tags?.some(t=>t.toLowerCase().includes(e))):this.recipes}render(){const e=Array.from({length:7},(e,t)=>this._addDays(this._weekStart,t)),t=(new Date).toISOString().split("T")[0];return M`
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
          ${e.map((e,r)=>M`
            <div class="day-header ${e===t?"today":""}">
              <span class="day-name">${be[r]}</span>
              <span class="day-num">${this._formatDisplayDate(e)}</span>
            </div>
          `)}
        </div>

        <!-- Plan grid scroll -->
        <div class="plan-scroll">
          ${this._loading?M`
            <div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>
          `:M`
            ${_e.map(r=>M`
              <div class="meal-row">
                <div class="meal-label">${r.charAt(0).toUpperCase()+r.slice(1)}</div>
                <div class="meal-cells">
                  ${e.map(e=>{const i=this._getEntriesForSlot(e,r);return M`
                      <div class="meal-cell ${e===t?"today":""}">
                        ${i.map(e=>{const t=this.recipes.find(t=>t.id===e.recipe_id);return M`
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
                        <button class="add-slot-btn" @click=${()=>this._openPicker(e,r)}>
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
    `}static styles=s`
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
  `}customElements.define("rm-meal-planner",ve);const ye=[{id:"warm",label:"Warm",swatch:"#e8622e"},{id:"forest",label:"Forest",swatch:"#2e7d32"},{id:"ocean",label:"Ocean",swatch:"#1565c0"},{id:"midnight",label:"Midnight",swatch:"#7c3aed",alwaysDark:!0},{id:"ember",label:"Ember",swatch:"#f57c00",alwaysDark:!0},{id:"blossom",label:"Blossom",swatch:"#c2185b"}];class xe extends ae{static properties={settings:{type:Object}};constructor(){super(),this.settings={}}_update(e){const t={...this.settings,...e};this.dispatchEvent(new CustomEvent("rm-settings-change",{detail:{settings:t},bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("rm-settings-close",{bubbles:!0,composed:!0}))}render(){const e=this.settings,t=ye.find(t=>t.id===e.theme)??ye[0],r=t.alwaysDark??!1;return M`
      <div class="settings-panel">
        <div class="settings-header">
          <span class="settings-title">Settings</span>
          <button class="icon-btn" @click=${this._close} title="Close settings">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

        <div class="settings-body">

          <!-- ── Appearance ────────────────────────────── -->
          <div class="section">
            <div class="section-label">Appearance</div>

            <!-- Theme swatches -->
            <div class="setting-row col">
              <span class="setting-name">Theme</span>
              <div class="theme-row">
                ${ye.map(t=>M`
                  <button
                    class="swatch-btn ${e.theme===t.id?"active":""}"
                    style="--swatch: ${t.swatch}"
                    title="${t.label}${t.alwaysDark?" (dark)":""}"
                    @click=${()=>this._update({theme:t.id})}
                  >
                    <span class="swatch-dot"></span>
                    <span class="swatch-label">${t.label}</span>
                    ${t.alwaysDark?M`<ha-icon class="moon-icon" icon="mdi:weather-night"></ha-icon>`:""}
                  </button>
                `)}
              </div>
            </div>

            <!-- Dark mode — hidden when theme forces dark -->
            ${r?M`
              <div class="setting-row muted-row">
                <span class="setting-name">Dark mode</span>
                <span class="muted-note">Always dark for this theme</span>
              </div>
            `:M`
              <div class="setting-row">
                <span class="setting-name">Dark mode</span>
                <div class="btn-group">
                  ${[["off","Light"],["system","Auto"],["on","Dark"]].map(([t,r])=>M`
                    <button
                      class="seg-btn ${e.darkMode===t?"active":""}"
                      @click=${()=>this._update({darkMode:t})}
                    >${r}</button>
                  `)}
                </div>
              </div>
            `}

            <!-- Font size -->
            <div class="setting-row">
              <span class="setting-name">Text size</span>
              <div class="btn-group">
                ${[["small","S"],["medium","M"],["large","L"]].map(([t,r])=>M`
                  <button
                    class="seg-btn ${e.fontSize===t?"active":""}"
                    @click=${()=>this._update({fontSize:t})}
                  >${r}</button>
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
                  <button
                    class="seg-btn ${e.columns===t?"active":""}"
                    @click=${()=>this._update({columns:t})}
                  >${t}</button>
                `)}
              </div>
            </div>

            <!-- Show favourites section -->
            <div class="setting-row">
              <span class="setting-name">Favourites section</span>
              <label class="toggle">
                <input
                  type="checkbox"
                  ?checked=${e.showFavourites}
                  @change=${e=>this._update({showFavourites:e.target.checked})}
                />
                <span class="toggle-track"><span class="toggle-thumb"></span></span>
              </label>
            </div>

            <!-- Show meal planner -->
            <div class="setting-row">
              <span class="setting-name">Meal planner</span>
              <label class="toggle">
                <input
                  type="checkbox"
                  ?checked=${e.showPlanner}
                  @change=${e=>this._update({showPlanner:e.target.checked})}
                />
                <span class="toggle-track"><span class="toggle-thumb"></span></span>
              </label>
            </div>
          </div>

        </div>
      </div>
    `}static styles=s`
    :host { display: block; height: 100%; }

    .settings-panel {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--rm-bg-main);
      color: var(--rm-text);
    }

    .settings-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid var(--rm-border);
      background: var(--rm-bg-surface);
      flex-shrink: 0;
    }

    .settings-title {
      font-size: 18px;
      font-weight: 600;
    }

    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--rm-text-secondary);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      padding: 0;
    }
    .icon-btn:hover { background: var(--rm-border); color: var(--rm-text); }

    .settings-body {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0 24px;
    }

    .section {
      margin-bottom: 8px;
    }

    .section-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--rm-text-muted);
      padding: 16px 20px 6px;
    }

    .setting-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-bottom: 1px solid var(--rm-border);
      gap: 12px;
    }
    .setting-row.col {
      flex-direction: column;
      align-items: flex-start;
    }
    .setting-row.muted-row { opacity: 0.5; }

    .setting-name {
      font-size: 15px;
      font-weight: 500;
      flex-shrink: 0;
    }

    .muted-note {
      font-size: 13px;
      color: var(--rm-text-muted);
    }

    /* Theme swatches */
    .theme-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 6px;
      width: 100%;
    }

    .swatch-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      background: var(--rm-bg-surface);
      border: 2px solid transparent;
      border-radius: 10px;
      padding: 8px 10px 6px;
      cursor: pointer;
      transition: border-color 0.15s, box-shadow 0.15s;
      position: relative;
      min-width: 62px;
      color: var(--rm-text-secondary);
    }
    .swatch-btn.active {
      border-color: var(--swatch);
      color: var(--rm-text);
    }
    .swatch-btn:hover { box-shadow: 0 0 0 2px var(--swatch); }

    .swatch-dot {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--swatch);
      display: block;
    }

    .swatch-label {
      font-size: 11px;
      font-weight: 500;
    }

    .moon-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      --mdc-icon-size: 12px;
      opacity: 0.6;
    }

    /* Segmented button group */
    .btn-group {
      display: flex;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--rm-border);
      flex-shrink: 0;
    }

    .seg-btn {
      background: transparent;
      border: none;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--rm-text-secondary);
      border-right: 1px solid var(--rm-border);
      transition: background 0.12s, color 0.12s;
    }
    .seg-btn:last-child { border-right: none; }
    .seg-btn.active {
      background: var(--rm-accent);
      color: #fff;
    }
    .seg-btn:hover:not(.active) { background: var(--rm-border); color: var(--rm-text); }

    /* Toggle switch */
    .toggle {
      display: flex;
      align-items: center;
      cursor: pointer;
      flex-shrink: 0;
    }
    .toggle input { display: none; }

    .toggle-track {
      width: 44px;
      height: 24px;
      background: var(--rm-border);
      border-radius: 12px;
      position: relative;
      transition: background 0.2s;
    }
    .toggle input:checked + .toggle-track {
      background: var(--rm-accent);
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }
    .toggle input:checked ~ .toggle-track .toggle-thumb {
      transform: translateX(20px);
    }
  `}customElements.define("rm-settings-view",xe);const we="rm_settings",ke={theme:"warm",darkMode:"system",fontSize:"medium",columns:3,showFavourites:!0,showPlanner:!0},$e={warm:{light:{"--rm-bg-main":"#faf8f5","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#2d2016","--rm-text-secondary":"#6b5c4a","--rm-text-muted":"#a08060","--rm-accent":"#e8622e","--rm-accent-soft":"rgba(232,98,46,0.12)","--rm-border":"rgba(45,32,22,0.1)","--rm-shadow":"0 2px 8px rgba(45,32,22,0.12)"},dark:{"--rm-bg-main":"#1a1510","--rm-bg-surface":"#241e18","--rm-bg-elevated":"#2e261e","--rm-text":"#f0e8dc","--rm-text-secondary":"#c09070","--rm-text-muted":"#6b5040","--rm-accent":"#ff7a45","--rm-accent-soft":"rgba(255,122,69,0.15)","--rm-border":"rgba(240,232,220,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},forest:{light:{"--rm-bg-main":"#f4f7f2","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#1a2b1a","--rm-text-secondary":"#4a6b4a","--rm-text-muted":"#7a9b7a","--rm-accent":"#2e7d32","--rm-accent-soft":"rgba(46,125,50,0.12)","--rm-border":"rgba(26,43,26,0.1)","--rm-shadow":"0 2px 8px rgba(26,43,26,0.12)"},dark:{"--rm-bg-main":"#101810","--rm-bg-surface":"#182015","--rm-bg-elevated":"#202e1e","--rm-text":"#d4f0d0","--rm-text-secondary":"#80b080","--rm-text-muted":"#406040","--rm-accent":"#66bb6a","--rm-accent-soft":"rgba(102,187,106,0.15)","--rm-border":"rgba(212,240,208,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},ocean:{light:{"--rm-bg-main":"#f0f5fa","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#0d2040","--rm-text-secondary":"#3a5878","--rm-text-muted":"#7090b0","--rm-accent":"#1565c0","--rm-accent-soft":"rgba(21,101,192,0.12)","--rm-border":"rgba(13,32,64,0.1)","--rm-shadow":"0 2px 8px rgba(13,32,64,0.12)"},dark:{"--rm-bg-main":"#0a1628","--rm-bg-surface":"#0f2040","--rm-bg-elevated":"#162a52","--rm-text":"#d0e8f8","--rm-text-secondary":"#7090b8","--rm-text-muted":"#3a5070","--rm-accent":"#42a5f5","--rm-accent-soft":"rgba(66,165,245,0.15)","--rm-border":"rgba(208,232,248,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},midnight:{dark:{"--rm-bg-main":"#0d1117","--rm-bg-surface":"#161b22","--rm-bg-elevated":"#21262d","--rm-text":"#e6edf3","--rm-text-secondary":"#7d8590","--rm-text-muted":"#484f58","--rm-accent":"#7c3aed","--rm-accent-soft":"rgba(124,58,237,0.2)","--rm-border":"rgba(230,237,243,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},ember:{dark:{"--rm-bg-main":"#111111","--rm-bg-surface":"#1c1210","--rm-bg-elevated":"#261a15","--rm-text":"#f0e0d0","--rm-text-secondary":"#a07060","--rm-text-muted":"#584030","--rm-accent":"#f57c00","--rm-accent-soft":"rgba(245,124,0,0.18)","--rm-border":"rgba(240,224,208,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},blossom:{light:{"--rm-bg-main":"#fdf6f8","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#2d1520","--rm-text-secondary":"#7a4060","--rm-text-muted":"#b08090","--rm-accent":"#c2185b","--rm-accent-soft":"rgba(194,24,91,0.12)","--rm-border":"rgba(45,21,32,0.1)","--rm-shadow":"0 2px 8px rgba(45,21,32,0.12)"},dark:{"--rm-bg-main":"#1a0d12","--rm-bg-surface":"#241420","--rm-bg-elevated":"#2e1a28","--rm-text":"#f8d0de","--rm-text-secondary":"#c070a0","--rm-text-muted":"#603050","--rm-accent":"#f48fb1","--rm-accent-soft":"rgba(244,143,177,0.15)","--rm-border":"rgba(248,208,222,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}}},Se={small:"13px",medium:"15px",large:"17px"};class Ae extends ae{static properties={hass:{type:Object},_config:{type:Object},_view:{type:String},_recipes:{type:Array},_tags:{type:Array},_selectedRecipe:{type:Object},_loading:{type:Boolean},_error:{type:String},_searchQuery:{type:String},_activeTag:{type:String},_showAddDialog:{type:Boolean},_shoppingLists:{type:Array},_settings:{type:Object}};constructor(){super(),this._view="grid",this._recipes=[],this._tags=[],this._selectedRecipe=null,this._loading=!1,this._error=null,this._searchQuery="",this._activeTag=null,this._showAddDialog=!1,this._shoppingLists=[],this._settings=function(){try{const e=localStorage.getItem(we);return e?{...ke,...JSON.parse(e)}:{...ke}}catch{return{...ke}}}(),this._unsubscribe=null,this._darkModeQuery=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("recipe-manager-card-editor")}static getStubConfig(){return{}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),this._darkModeQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._darkModeQuery.addEventListener("change",this._onSystemDarkChange),this._applyTheme()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._darkModeQuery?.removeEventListener("change",this._onSystemDarkChange)}_onSystemDarkChange=()=>{"system"===this._settings.darkMode&&this._applyTheme()};updated(e){e.has("hass")&&this.hass&&!this._api&&(this._api=new ce(this.hass),this._init()),e.has("hass")&&this._api&&(this._api.hass=this.hass),e.has("_settings")&&this._applyTheme()}_applyTheme(){const e=this._settings,t=$e[e.theme]??$e.warm,r=!t.light;let i=r;r||(i="on"===e.darkMode||"off"!==e.darkMode&&(this._darkModeQuery?.matches??!1));const n=i?t.dark??t.light:t.light;for(const[e,t]of Object.entries(n))this.style.setProperty(e,t);this.style.setProperty("--rm-font-size-base",Se[e.fontSize]??"15px"),this.style.setProperty("--rm-grid-columns",`repeat(${e.columns??3}, minmax(0, 1fr))`)}async _init(){this._loading=!0;try{await Promise.all([this._loadRecipes(),this._loadTags(),this._loadShoppingLists()]),await this._subscribe()}catch(e){this._error=e.message||"Failed to load recipes"}finally{this._loading=!1}}async _loadRecipes(){const e=await this._api.getAllRecipes();this._recipes=e?.recipes??[]}async _loadTags(){const e=await this._api.getTags();this._tags=e?.tags??[]}async _loadShoppingLists(){try{const e=await this._api.getShoppingLists();this._shoppingLists=e?.lists??[]}catch{this._shoppingLists=[]}}async _subscribe(){if(!this._unsubscribe)try{this._unsubscribe=await this._api.subscribe(e=>{const t=e.event_type??e.event;"recipe_manager_recipe_added"!==t&&"recipe_added"!==t&&"recipe_manager_recipe_updated"!==t&&"recipe_updated"!==t&&"recipe_manager_recipe_deleted"!==t&&"recipe_deleted"!==t||(this._loadRecipes(),this._loadTags())})}catch{}}get _filteredRecipes(){let e=this._recipes;if(this._activeTag&&(e=e.filter(e=>e.tags?.includes(this._activeTag))),this._searchQuery.trim()){const t=this._searchQuery.trim().toLowerCase();e=e.filter(e=>e.name?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tags?.some(e=>e.toLowerCase().includes(t)))}return e}_handleSettingsChange(e){this._settings=e.detail.settings,function(e){try{localStorage.setItem(we,JSON.stringify(e))}catch{}}(this._settings)}_handleSearch(e){this._searchQuery=e.detail?.query??""}_handleTagFilter(e){const t=e.detail?.tag;this._activeTag=this._activeTag===t?null:t}_handleBack(){this._view="grid",this._selectedRecipe=null}_handleShowPlanner(){this._view="planner"}_handleShowGrid(){this._view="grid",this._selectedRecipe=null}_handleOpenRecipe(e){this._selectedRecipe=e.detail?.recipe,this._view="detail"}async _handleToggleFavourite(e){const{recipeId:t}=e.detail;await this._api.toggleFavourite(t),await this._loadRecipes(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??this._selectedRecipe)}async _handleDeleteRecipe(e){const{recipeId:t}=e.detail;await this._api.deleteRecipe(t),await this._loadRecipes(),await this._loadTags(),this._view="grid",this._selectedRecipe=null}async _handleUpdateRecipe(e){const{recipeId:t,data:r}=e.detail;await this._api.updateRecipe(t,r),await this._loadRecipes(),await this._loadTags(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??null)}async _handleAddRecipe(e){const{data:t}=e.detail;await this._api.addRecipe(t),this._showAddDialog=!1,await this._loadRecipes(),await this._loadTags()}async _handleImportDone(){await this._loadRecipes(),await this._loadTags()}async _handleAddToShopping(e){const{ingredients:t,listId:r}=e.detail;try{const e=(await this._api.addIngredientsToShoppingList(r,t)).filter(e=>!e.success);e.length&&console.warn("Some ingredients failed to add:",e)}catch(e){console.error("Failed to add ingredients to shopping list:",e)}}render(){const e=this._settings,t="settings"===this._view,r="grid"===this._view;return M`
      <ha-card class="rm-card">
        <div class="rm-header">
          <div class="rm-header-left">
            ${"grid"===this._view||t?M`
              <ha-icon icon="mdi:chef-hat" class="rm-logo"></ha-icon>
            `:M`
              <button class="icon-btn" @click=${this._handleShowGrid} title="Back to recipes">
                <ha-icon icon="mdi:arrow-left"></ha-icon>
              </button>
            `}
            <span class="rm-title">
              ${t?"Settings":"detail"===this._view&&this._selectedRecipe?this._selectedRecipe.name:"planner"===this._view?"Meal Planner":"Recipes"}
            </span>
          </div>
          <div class="rm-header-right">
            ${t?M`
              <button class="icon-btn" @click=${()=>{this._view="grid"}} title="Close settings">
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            `:r?M`
              <button class="icon-btn" @click=${()=>{this._showAddDialog=!0}} title="Add recipe">
                <ha-icon icon="mdi:plus"></ha-icon>
              </button>
              ${e.showPlanner?M`
                <button class="icon-btn" @click=${this._handleShowPlanner} title="Meal planner">
                  <ha-icon icon="mdi:calendar-week"></ha-icon>
                </button>
              `:""}
              <button class="icon-btn" @click=${()=>{this._view="settings"}} title="Settings">
                <ha-icon icon="mdi:cog-outline"></ha-icon>
              </button>
            `:"planner"===this._view?M`
              <button class="icon-btn" @click=${this._handleShowGrid} title="Back to recipes">
                <ha-icon icon="mdi:view-grid"></ha-icon>
              </button>
            `:""}
          </div>
        </div>

        <div class="rm-body">
          ${t?M`
            <rm-settings-view
              .settings=${this._settings}
              @rm-settings-change=${this._handleSettingsChange}
              @rm-settings-close=${()=>{this._view="grid"}}
            ></rm-settings-view>
          `:this._loading?M`
            <div class="rm-loading">
              <ha-circular-progress active size="large"></ha-circular-progress>
            </div>
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
              .columns=${this._settings.columns}
              .showFavourites=${this._settings.showFavourites}
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
          `:""}
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
    `}static styles=s`
    :host {
      display: block;
      /* Default (warm, light) — overridden at runtime by _applyTheme() */
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
      flex-direction: column;
      min-height: 500px;
      max-height: 85vh;
      color: var(--rm-text);
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
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .rm-logo {
      color: var(--rm-accent);
      --mdc-icon-size: 24px;
    }

    .rm-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--rm-text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 200px;
    }

    .rm-body {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--rm-text-secondary);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      padding: 0;
    }
    .icon-btn:hover { background: var(--rm-border); color: var(--rm-text); }
    .icon-btn.active { color: var(--rm-accent); }

    .text-btn {
      background: var(--rm-accent);
      color: #fff;
      border: none;
      border-radius: var(--rm-radius-sm);
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
    }

    .rm-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }

    .rm-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      gap: 12px;
      color: var(--rm-text-secondary);
      text-align: center;
    }
    .rm-error ha-icon { --mdc-icon-size: 48px; color: var(--error-color, #cf6679); }
    .rm-error p { margin: 0; font-size: 14px; }
  `}customElements.define("recipe-manager-card",Ae),window.customCards=window.customCards||[],window.customCards.push({type:"recipe-manager-card",name:"Recipe Manager",description:"Manage, browse, and plan meals with your recipe collection.",preview:!1});
