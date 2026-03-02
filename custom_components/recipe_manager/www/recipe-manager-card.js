import e from"stream";import t from"events";import r from"buffer";import i from"util";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=globalThis,a=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let l=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}};const c=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new l(r,e,s)},d=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,_=globalThis,b=_.trustedTypes,v=b?b.emptyScript:"",y=_.reactiveElementPolyfillSupport,w=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:k};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const a=i?.call(this);n?.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...f(e),...m(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i;const a=n.fromAttribute(t,e.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(void 0!==e){const a=this.constructor;if(!1===i&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??k)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,r,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[w("elementProperties")]=new Map,$[w("finalized")]=new Map,y?.({ReactiveElement:$}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,A=e=>e,C=E.trustedTypes,z=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,R="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+T,O=`<${I}>`,D=document,B=()=>D.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,L=/>/g,U=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,H=/"/g,Z=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),K=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),V=new WeakMap,X=D.createTreeWalker(D,129);function Q(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const G=(e,t)=>{const r=e.length-1,i=[];let n,a=2===t?"<svg>":3===t?"<math>":"",s=N;for(let t=0;t<r;t++){const r=e[t];let o,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===N?"!--"===l[1]?s=j:void 0!==l[1]?s=L:void 0!==l[2]?(Z.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=n??N,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?U:'"'===l[3]?H:W):s===H||s===W?s=U:s===j||s===L?s=N:(s=U,n=void 0);const h=s===U&&e[t+1].startsWith("/>")?" ":"";a+=s===N?r+O:c>=0?(i.push(o),r.slice(0,c)+R+r.slice(c)+T+h):r+T+(-2===c?t:h)}return[Q(e,a+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class J{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,a=0;const s=e.length-1,o=this.parts,[l,c]=G(e,t);if(this.el=J.createElement(l,r),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=X.nextNode())&&o.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(R)){const t=c[a++],r=i.getAttribute(e).split(T),s=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:s[2],strings:r,ctor:"."===s[1]?ne:"?"===s[1]?ae:"@"===s[1]?se:ie}),i.removeAttribute(e)}else e.startsWith(T)&&(o.push({type:6,index:n}),i.removeAttribute(e));if(Z.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],B()),X.nextNode(),o.push({type:2,index:++n});i.append(e[t],B())}}}else if(8===i.nodeType)if(i.data===I)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)o.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const r=D.createElement("template");return r.innerHTML=e,r}}function ee(e,t,r=e,i){if(t===K)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const a=P(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=ee(e,n._$AS(e,t.values),n,i)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??D).importNode(t,!0);X.currentNode=i;let n=X.nextNode(),a=0,s=0,o=r[0];for(;void 0!==o;){if(a===o.index){let t;2===o.type?t=new re(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new oe(n,this,e)),this._$AV.push(t),o=r[++s]}a!==o?.index&&(n=X.nextNode(),a++)}return X.currentNode=D,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),P(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>F(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=J.createElement(Q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new te(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new J(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new re(this.O(B()),this.O(B()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(e,t=this,r,i){const n=this.strings;let a=!1;if(void 0===n)e=ee(this,e,t,0),a=!P(e)||e!==this._$AH&&e!==K,a&&(this._$AH=e);else{const i=e;let s,o;for(e=n[0],s=0;s<n.length-1;s++)o=ee(this,i[r+s],t,s),o===K&&(o=this._$AH[s]),a||=!P(o)||o!==this._$AH[s],o===Y?e=Y:e!==Y&&(e+=(o??"")+n[s+1]),this._$AH[s]=o}a&&!i&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ae extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class se extends ie{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??Y)===K)return;const r=this._$AH,i=e===Y&&r!==Y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Y&&(r===Y||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const le=E.litHtmlPolyfillSupport;le?.(J,re),(E.litHtmlVersions??=[]).push("3.3.2");const ce=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=r?.renderBefore??null;i._$litPart$=n=new re(t.insertBefore(B(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};de._$litElement$=!0,de.finalized=!0,ce.litElementHydrateSupport?.({LitElement:de});const he=ce.litElementPolyfillSupport;he?.({LitElement:de}),(ce.litElementVersions??=[]).push("4.2.2");class pe{constructor(e){this.hass=e}subscribe(e){return this.hass.connection.subscribeMessage(e,{type:"recipe_manager/subscribe"})}async getAllRecipes(){return this.hass.callWS({type:"recipe_manager/recipes/get_all"})}async getRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/get",recipe_id:e})}async scrapeRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/scrape",url:e})}async addRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/add",...e})}async updateRecipe(e,t){return this.hass.callWS({type:"recipe_manager/recipes/update",recipe_id:e,...t})}async deleteRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/delete",recipe_id:e})}async toggleFavourite(e){return this.hass.callWS({type:"recipe_manager/recipes/toggle_favourite",recipe_id:e})}async downloadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/download_image",recipe_id:e,image_url:t})}async getTags(){return this.hass.callWS({type:"recipe_manager/tags/get_all"})}async getMealPlan(e){const t={type:"recipe_manager/meal_plan/get"};return e&&(t.week_start=e),this.hass.callWS(t)}async addToMealPlan(e,t,r,i=1,n=null){const a={type:"recipe_manager/meal_plan/add",recipe_id:e,date:t,meal_type:r,servings:i};return n&&(a.notes=n),this.hass.callWS(a)}async removeFromMealPlan(e){return this.hass.callWS({type:"recipe_manager/meal_plan/remove",entry_id:e})}async clearMealPlanWeek(e){return this.hass.callWS({type:"recipe_manager/meal_plan/clear",week_start:e})}async addIngredientsToShoppingList(e,t){const r=[];for(const i of t)try{const t=await this.hass.callWS({type:"shopping_list_manager/items/add",list_id:e,name:i.name,quantity:i.amount&&parseFloat(i.amount)||1,unit:i.unit||"units",category_id:"other"});r.push({success:!0,name:i.name,result:t})}catch(e){r.push({success:!1,name:i.name,error:e.message})}return r}async getShoppingLists(){return this.hass.callWS({type:"shopping_list_manager/lists/get_all"})}async importRecipeKeeper(e){return this.hass.callWS({type:"recipe_manager/import/recipe_keeper",html_content:e})}async uploadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/upload_image",recipe_id:e,image_data:t})}}class ue extends de{static properties={recipes:{type:Array},allRecipes:{type:Array},tags:{type:Array},searchQuery:{type:String},activeTag:{type:String}};constructor(){super(),this.recipes=[],this.allRecipes=[],this.tags=[],this.searchQuery="",this.activeTag=null}_handleSearchInput(e){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}_handleClearSearch(){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:""},bubbles:!0,composed:!0}))}_handleTagClick(e){this.dispatchEvent(new CustomEvent("rm-tag-filter",{detail:{tag:e},bubbles:!0,composed:!0}))}_handleOpenRecipe(e){this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:e},bubbles:!0,composed:!0}))}_handleToggleFavourite(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:t.id},bubbles:!0,composed:!0}))}_formatTime(e){if(!e)return null;if(e<60)return`${e}m`;const t=Math.floor(e/60),r=e%60;return r?`${t}h ${r}m`:`${t}h`}_renderRecipeCard(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return q`
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
          ${e.description?q`
            <p class="recipe-desc">${e.description}</p>
          `:""}
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
    `}render(){const e=this.recipes.filter(e=>e.is_favourite),t=!this.activeTag&&!this.searchQuery&&e.length>0,r=t?this.recipes.filter(e=>!e.is_favourite):this.recipes;return q`
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
            ${this.searchQuery?q`
              <button class="clear-btn" @click=${this._handleClearSearch}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            `:""}
          </div>
        </div>

        <!-- Tag chips -->
        ${this.tags.length?q`
          <div class="tags-row">
            ${this.tags.map(e=>q`
              <button
                class="tag-btn ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}</button>
            `)}
          </div>
        `:""}

        <!-- Recipe content -->
        <div class="grid-scroll">
          ${0===this.recipes.length?q`
            <div class="empty-state">
              <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
              <p>${this.searchQuery||this.activeTag?"No matching recipes":"No recipes yet — add one!"}</p>
            </div>
          `:q`
            <!-- Favourites section -->
            ${t?q`
              <div class="section-label">Favourites</div>
              <div class="recipe-grid">
                ${e.map(e=>this._renderRecipeCard(e))}
              </div>
              ${r.length?q`<div class="section-label">All Recipes</div>`:""}
            `:""}

            <!-- Main grid -->
            <div class="recipe-grid">
              ${r.map(e=>this._renderRecipeCard(e))}
            </div>
          `}
        </div>
      </div>
    `}static styles=c`
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
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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
  `}customElements.define("rm-recipe-grid",ue);class fe extends de{static properties={recipe:{type:Object},api:{type:Object},shoppingLists:{type:Array},_editing:{type:Boolean},_editData:{type:Object},_servingMult:{type:Number},_activeTab:{type:String},_showShoppingPicker:{type:Boolean},_selectedListId:{type:String},_shoppingAdding:{type:Boolean},_shoppingResult:{type:String},_confirmDelete:{type:Boolean},_downloading:{type:Boolean}};constructor(){super(),this.recipe=null,this.api=null,this.shoppingLists=[],this._editing=!1,this._editData={},this._servingMult=1,this._activeTab="ingredients",this._showShoppingPicker=!1,this._selectedListId="",this._shoppingAdding=!1,this._shoppingResult=null,this._confirmDelete=!1,this._downloading=!1}updated(e){e.has("recipe")&&this.recipe&&(this._servingMult=1,this._editing=!1,this._confirmDelete=!1,this._shoppingResult=null),e.has("shoppingLists")&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"")}_formatTime(e){if(!e)return null;if(e<60)return`${e} min`;const t=Math.floor(e/60),r=e%60;return r?`${t}h ${r}m`:`${t}h`}_scaleAmount(e){if(!e||isNaN(parseFloat(e)))return e;const t=parseFloat(e)*this._servingMult;return Number.isInteger(t)?String(t):t.toFixed(1).replace(/\.0$/,"")}_startEdit(){this._editData={name:this.recipe.name||"",description:this.recipe.description||"",source_url:this.recipe.source_url||"",servings:this.recipe.servings||4,prep_time:this.recipe.prep_time||"",cook_time:this.recipe.cook_time||"",tags:(this.recipe.tags||[]).join(", "),notes:this.recipe.notes||""},this._editing=!0}_cancelEdit(){this._editing=!1,this._editData={}}_handleEditField(e,t){this._editData={...this._editData,[e]:t}}async _saveEdit(){const e={...this._editData,servings:parseInt(this._editData.servings)||4,prep_time:parseInt(this._editData.prep_time)||null,cook_time:parseInt(this._editData.cook_time)||null,tags:this._editData.tags?this._editData.tags.split(",").map(e=>e.trim()).filter(Boolean):[]};this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:e},bubbles:!0,composed:!0})),this._editing=!1}_handleToggleFav(){this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleDownloadImage(){if(this.recipe.source_url||this.recipe.image_url){this._downloading=!0;try{const e=await this.api.downloadRecipeImage(this.recipe.id,this.recipe.image_url);e?.local_url&&this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e.local_url}},bubbles:!0,composed:!0}))}catch(e){console.warn("Image download failed:",e)}finally{this._downloading=!1}}}_handleDeleteRecipe(){if(!this._confirmDelete)return this._confirmDelete=!0,void setTimeout(()=>{this._confirmDelete=!1},3e3);this.dispatchEvent(new CustomEvent("rm-delete-recipe",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleAddToShopping(){if(!this._selectedListId)return;const e=(this.recipe.ingredients||[]).map(e=>({...e,amount:this._scaleAmount(e.amount)}));this._shoppingAdding=!0,this._shoppingResult=null,this.dispatchEvent(new CustomEvent("rm-add-to-shopping",{detail:{ingredients:e,listId:this._selectedListId},bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,600)),this._shoppingAdding=!1,this._shoppingResult="success",this._showShoppingPicker=!1,setTimeout(()=>{this._shoppingResult=null},2500)}render(){if(!this.recipe)return q``;const e=this.recipe,t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return q`
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
            <button class="hero-btn ${e.is_favourite?"fav-active":""}" @click=${this._handleToggleFav}>
              <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
            </button>
            ${e.source_url?q`
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
                  <span class="meta-val">${e.servings}</span>
                </div>
              `:""}
            </div>

            ${e.tags?.length?q`
              <div class="tags-row">
                ${e.tags.map(e=>q`<span class="tag-chip">${e}</span>`)}
              </div>
            `:""}
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
            ${["ingredients","steps","notes"].map(e=>q`
              <button
                class="tab-btn ${this._activeTab===e?"active":""}"
                @click=${()=>{this._activeTab=e}}
              >${e.charAt(0).toUpperCase()+e.slice(1)}</button>
            `)}
          </div>

          <!-- Tab content -->
          <div class="tab-content">
            ${"ingredients"===this._activeTab?q`
              ${e.ingredients?.length?q`
                <ul class="ingredient-list">
                  ${e.ingredients.map(e=>q`
                    <li class="ingredient-item">
                      <span class="ing-amount">${this._scaleAmount(e.amount)||""} ${e.unit||""}</span>
                      <span class="ing-name">${e.name}</span>
                    </li>
                  `)}
                </ul>
              `:q`<p class="empty-tab">No ingredients listed.</p>`}

              <!-- Add to shopping -->
              ${this.shoppingLists.length?q`
                <div class="shopping-section">
                  ${"success"===this._shoppingResult?q`
                    <div class="shopping-success">
                      <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                      Added to shopping list!
                    </div>
                  `:this._showShoppingPicker?q`
                    <div class="shopping-picker">
                      <select class="list-select" .value=${this._selectedListId} @change=${e=>{this._selectedListId=e.target.value}}>
                        ${this.shoppingLists.map(e=>q`
                          <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                        `)}
                      </select>
                      <button class="action-btn primary" ?disabled=${this._shoppingAdding} @click=${this._handleAddToShopping}>
                        ${this._shoppingAdding?q`<ha-circular-progress active size="tiny"></ha-circular-progress>`:"Add"}
                      </button>
                      <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>Cancel</button>
                    </div>
                  `:q`
                    <button class="action-btn primary shopping-btn" @click=${()=>{this._showShoppingPicker=!0}}>
                      <ha-icon icon="mdi:cart-plus"></ha-icon>
                      Add to Shopping List
                    </button>
                  `}
                </div>
              `:""}
            `:"steps"===this._activeTab?q`
              ${e.instructions?.length?q`
                <ol class="steps-list">
                  ${e.instructions.map((e,t)=>q`
                    <li class="step-item">
                      <span class="step-num">${t+1}</span>
                      <span class="step-text">${e}</span>
                    </li>
                  `)}
                </ol>
              `:q`<p class="empty-tab">No instructions listed.</p>`}
            `:q`
              ${e.notes?q`
                <p class="notes-text">${e.notes}</p>
              `:q`<p class="empty-tab">No notes.</p>`}
            `}
          </div>
        </div>

        <!-- Edit dialog (inline) -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_renderEditPanel(){return q`
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
    `}_renderField(e,t,r){const i=this._editData[t]??"";return"textarea"===r?q`
        <div class="edit-field">
          <label>${e}</label>
          <textarea
            .value=${i}
            @input=${e=>this._handleEditField(t,e.target.value)}
            rows="3"
          ></textarea>
        </div>
      `:q`
      <div class="edit-field">
        <label>${e}</label>
        <input
          type="${r}"
          .value=${String(i)}
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
  `}customElements.define("rm-recipe-detail",fe);var me="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ge(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _e,be,ve,ye,we,xe={},ke={},Se={},$e={exports:{}},Ee={exports:{}};function Ae(){if(_e)return Ee.exports;return _e=1,"undefined"==typeof process||!process.version||0===process.version.indexOf("v0.")||0===process.version.indexOf("v1.")&&0!==process.version.indexOf("v1.8.")?Ee.exports={nextTick:function(e,t,r,i){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var n,a,s=arguments.length;switch(s){case 0:case 1:return process.nextTick(e);case 2:return process.nextTick(function(){e.call(null,t)});case 3:return process.nextTick(function(){e.call(null,t,r)});case 4:return process.nextTick(function(){e.call(null,t,r,i)});default:for(n=new Array(s-1),a=0;a<n.length;)n[a++]=arguments[a];return process.nextTick(function(){e.apply(null,n)})}}}:Ee.exports=process,Ee.exports}function Ce(){return we?ye:(we=1,ye=e)}var ze,Re={exports:{}};function Te(){return ze||(ze=1,function(e,t){var i=r,n=i.Buffer;function a(e,t){for(var r in e)t[r]=e[r]}function s(e,t,r){return n(e,t,r)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=i:(a(i,t),t.Buffer=s),a(n,s),s.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return n(e,t,r)},s.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var i=n(e);return void 0!==t?"string"==typeof r?i.fill(t,r):i.fill(t):i.fill(0),i},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return i.SlowBuffer(e)}}(Re,Re.exports)),Re.exports}var Ie,Oe={};function De(){if(Ie)return Oe;function e(e){return Object.prototype.toString.call(e)}return Ie=1,Oe.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===e(t)},Oe.isBoolean=function(e){return"boolean"==typeof e},Oe.isNull=function(e){return null===e},Oe.isNullOrUndefined=function(e){return null==e},Oe.isNumber=function(e){return"number"==typeof e},Oe.isString=function(e){return"string"==typeof e},Oe.isSymbol=function(e){return"symbol"==typeof e},Oe.isUndefined=function(e){return void 0===e},Oe.isRegExp=function(t){return"[object RegExp]"===e(t)},Oe.isObject=function(e){return"object"==typeof e&&null!==e},Oe.isDate=function(t){return"[object Date]"===e(t)},Oe.isError=function(t){return"[object Error]"===e(t)||t instanceof Error},Oe.isFunction=function(e){return"function"==typeof e},Oe.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},Oe.isBuffer=r.Buffer.isBuffer,Oe}var Be,Pe,Fe={exports:{}},Me={exports:{}};function Ne(){if(Pe)return Fe.exports;Pe=1;try{var e=require("util");if("function"!=typeof e.inherits)throw"";Fe.exports=e.inherits}catch(e){Fe.exports=(Be||(Be=1,"function"==typeof Object.create?Me.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Me.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}),Me.exports)}return Fe.exports}var je,Le,Ue,We,He,Ze,qe,Ke,Ye,Ve={exports:{}};function Xe(){return je||(je=1,function(e){var t=Te().Buffer,r=i;function n(e,t,r){e.copy(t,r)}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},e.prototype.concat=function(e){if(0===this.length)return t.alloc(0);for(var r=t.allocUnsafe(e>>>0),i=this.head,a=0;i;)n(i.data,r,a),a+=i.data.length,i=i.next;return r},e}(),r&&r.inspect&&r.inspect.custom&&(e.exports.prototype[r.inspect.custom]=function(){var e=r.inspect({length:this.length});return this.constructor.name+" "+e})}(Ve)),Ve.exports}function Qe(){if(Ue)return Le;Ue=1;var e=Ae();function t(e,t){e.emit("error",t)}return Le={destroy:function(r,i){var n=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return a||s?(i?i(r):r&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,e.nextTick(t,this,r)):e.nextTick(t,this,r)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(r||null,function(r){!i&&r?n._writableState?n._writableState.errorEmitted||(n._writableState.errorEmitted=!0,e.nextTick(t,n,r)):e.nextTick(t,n,r):i&&i(r)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}},Le}function Ge(){if(qe)return Ze;qe=1;var e=Ae();function t(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,r){var i=e.entry;e.entry=null;for(;i;){var n=i.callback;t.pendingcb--,n(r),i=i.next}t.corkedRequestsFree.next=e}(t,e)}}Ze=f;var r,n=!process.browser&&["v0.10","v0.9."].indexOf(process.version.slice(0,5))>-1?setImmediate:e.nextTick;f.WritableState=u;var a=Object.create(De());a.inherits=Ne();var s={deprecate:He?We:(He=1,We=i.deprecate)},o=Ce(),l=Te().Buffer,c=(void 0!==me?me:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){};var d,h=Qe();function p(){}function u(i,a){r=r||Je(),i=i||{};var s=a instanceof r;this.objectMode=!!i.objectMode,s&&(this.objectMode=this.objectMode||!!i.writableObjectMode);var o=i.highWaterMark,l=i.writableHighWaterMark,c=this.objectMode?16:16384;this.highWaterMark=o||0===o?o:s&&(l||0===l)?l:c,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var d=!1===i.decodeStrings;this.decodeStrings=!d,this.defaultEncoding=i.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,r){var i=t._writableState,a=i.sync,s=i.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(i),r)!function(t,r,i,n,a){--r.pendingcb,i?(e.nextTick(a,n),e.nextTick(y,t,r),t._writableState.errorEmitted=!0,t.emit("error",n)):(a(n),t._writableState.errorEmitted=!0,t.emit("error",n),y(t,r))}(t,i,a,r,s);else{var o=b(i);o||i.corked||i.bufferProcessing||!i.bufferedRequest||_(t,i),a?n(g,t,i,o,s):g(t,i,o,s)}}(a,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new t(this)}function f(e){if(r=r||Je(),!(d.call(f,this)||this instanceof r))return new f(e);this._writableState=new u(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),o.call(this)}function m(e,t,r,i,n,a,s){t.writelen=i,t.writecb=s,t.writing=!0,t.sync=!0,r?e._writev(n,t.onwrite):e._write(n,a,t.onwrite),t.sync=!1}function g(e,t,r,i){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,i(),y(e,t)}function _(e,r){r.bufferProcessing=!0;var i=r.bufferedRequest;if(e._writev&&i&&i.next){var n=r.bufferedRequestCount,a=new Array(n),s=r.corkedRequestsFree;s.entry=i;for(var o=0,l=!0;i;)a[o]=i,i.isBuf||(l=!1),i=i.next,o+=1;a.allBuffers=l,m(e,r,!0,r.length,a,"",s.finish),r.pendingcb++,r.lastBufferedRequest=null,s.next?(r.corkedRequestsFree=s.next,s.next=null):r.corkedRequestsFree=new t(r),r.bufferedRequestCount=0}else{for(;i;){var c=i.chunk,d=i.encoding,h=i.callback;if(m(e,r,!1,r.objectMode?1:c.length,c,d,h),i=i.next,r.bufferedRequestCount--,r.writing)break}null===i&&(r.lastBufferedRequest=null)}r.bufferedRequest=i,r.bufferProcessing=!1}function b(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function v(e,t){e._final(function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),y(e,t)})}function y(t,r){var i=b(r);return i&&(!function(t,r){r.prefinished||r.finalCalled||("function"==typeof t._final?(r.pendingcb++,r.finalCalled=!0,e.nextTick(v,t,r)):(r.prefinished=!0,t.emit("prefinish")))}(t,r),0===r.pendingcb&&(r.finished=!0,t.emit("finish"))),i}return a.inherits(f,o),u.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(u.prototype,"buffer",{get:s.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(d=Function.prototype[Symbol.hasInstance],Object.defineProperty(f,Symbol.hasInstance,{value:function(e){return!!d.call(this,e)||this===f&&(e&&e._writableState instanceof u)}})):d=function(e){return e instanceof this},f.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},f.prototype.write=function(t,r,i){var n,a=this._writableState,s=!1,o=!a.objectMode&&(n=t,l.isBuffer(n)||n instanceof c);return o&&!l.isBuffer(t)&&(t=function(e){return l.from(e)}(t)),"function"==typeof r&&(i=r,r=null),o?r="buffer":r||(r=a.defaultEncoding),"function"!=typeof i&&(i=p),a.ended?function(t,r){var i=new Error("write after end");t.emit("error",i),e.nextTick(r,i)}(this,i):(o||function(t,r,i,n){var a=!0,s=!1;return null===i?s=new TypeError("May not write null values to stream"):"string"==typeof i||void 0===i||r.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(t.emit("error",s),e.nextTick(n,s),a=!1),a}(this,a,t,i))&&(a.pendingcb++,s=function(e,t,r,i,n,a){if(!r){var s=function(e,t,r){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=l.from(t,r));return t}(t,i,n);i!==s&&(r=!0,n="buffer",i=s)}var o=t.objectMode?1:i.length;t.length+=o;var c=t.length<t.highWaterMark;c||(t.needDrain=!0);if(t.writing||t.corked){var d=t.lastBufferedRequest;t.lastBufferedRequest={chunk:i,encoding:n,isBuf:r,callback:a,next:null},d?d.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else m(e,t,!1,o,i,n,a);return c}(this,a,o,t,r,i)),s},f.prototype.cork=function(){this._writableState.corked++},f.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||_(this,e))},f.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(f.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),f.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))},f.prototype._writev=null,f.prototype.end=function(t,r,i){var n=this._writableState;"function"==typeof t?(i=t,t=null,r=null):"function"==typeof r&&(i=r,r=null),null!=t&&this.write(t,r),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,r,i){r.ending=!0,y(t,r),i&&(r.finished?e.nextTick(i):t.once("finish",i));r.ended=!0,t.writable=!1}(this,n,i)},Object.defineProperty(f.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),f.prototype.destroy=h.destroy,f.prototype._undestroy=h.undestroy,f.prototype._destroy=function(e,t){this.end(),t(e)},Ze}function Je(){if(Ye)return Ke;Ye=1;var e=Ae(),t=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};Ke=l;var r=Object.create(De());r.inherits=Ne();var i=pt(),n=Ge();r.inherits(l,i);for(var a=t(n.prototype),s=0;s<a.length;s++){var o=a[s];l.prototype[o]||(l.prototype[o]=n.prototype[o])}function l(e){if(!(this instanceof l))return new l(e);i.call(this,e),n.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",c)}function c(){this.allowHalfOpen||this._writableState.ended||e.nextTick(d,this)}function d(e){e.end()}return Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),l.prototype._destroy=function(t,r){this.push(null),this.end(),e.nextTick(r,t)},Ke}var et,tt,rt,it,nt,at,st,ot,lt,ct={},dt={exports:{}};function ht(){if(tt)return ct;tt=1;var e=(et||(et=1,function(e,t){var i=r,n=i.Buffer;function a(e,t){for(var r in e)t[r]=e[r]}function s(e,t,r){return n(e,t,r)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=i:(a(i,t),t.Buffer=s),a(n,s),s.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return n(e,t,r)},s.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var i=n(e);return void 0!==t?"string"==typeof r?i.fill(t,r):i.fill(t):i.fill(0),i},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return i.SlowBuffer(e)}}(dt,dt.exports)),dt.exports).Buffer,t=e.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function i(r){var i;switch(this.encoding=function(r){var i=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(r);if("string"!=typeof i&&(e.isEncoding===t||!t(r)))throw new Error("Unknown encoding: "+r);return i||r}(r),this.encoding){case"utf16le":this.text=s,this.end=o,i=4;break;case"utf8":this.fillLast=a,i=4;break;case"base64":this.text=l,this.end=c,i=3;break;default:return this.write=d,void(this.end=h)}this.lastNeed=0,this.lastTotal=0,this.lastChar=e.allocUnsafe(i)}function n(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,r=function(e,t){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function s(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var i=r.charCodeAt(r.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function o(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function l(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function c(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function d(e){return e.toString(this.encoding)}function h(e){return e&&e.length?this.write(e):""}return ct.StringDecoder=i,i.prototype.write=function(e){if(0===e.length)return"";var t,r;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},i.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},i.prototype.text=function(e,t){var r=function(e,t,r){var i=t.length-1;if(i<r)return 0;var a=n(t[i]);if(a>=0)return a>0&&(e.lastNeed=a-1),a;if(--i<r||-2===a)return 0;if(a=n(t[i]),a>=0)return a>0&&(e.lastNeed=a-2),a;if(--i<r||-2===a)return 0;if(a=n(t[i]),a>=0)return a>0&&(2===a?a=0:e.lastNeed=a-3),a;return 0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var i=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,i),e.toString("utf8",t,i)},i.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length},ct}function pt(){if(it)return rt;it=1;var e=Ae();rt=_;var r,n=function(){if(ve)return be;ve=1;var e={}.toString;return be=Array.isArray||function(t){return"[object Array]"==e.call(t)}}();_.ReadableState=g,t.EventEmitter;var a=function(e,t){return e.listeners(t).length},s=Ce(),o=Te().Buffer,l=(void 0!==me?me:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){};var c=Object.create(De());c.inherits=Ne();var d=i,h=void 0;h=d&&d.debuglog?d.debuglog("stream"):function(){};var p,u=Xe(),f=Qe();c.inherits(_,s);var m=["error","close","destroy","pause","resume"];function g(e,t){e=e||{};var i=t instanceof(r=r||Je());this.objectMode=!!e.objectMode,i&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,a=e.readableHighWaterMark,s=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i&&(a||0===a)?a:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new u,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(p||(p=ht().StringDecoder),this.decoder=new p(e.encoding),this.encoding=e.encoding)}function _(e){if(r=r||Je(),!(this instanceof _))return new _(e);this._readableState=new g(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),s.call(this)}function b(e,t,r,i,n){var a,s=e._readableState;null===t?(s.reading=!1,function(e,t){if(t.ended)return;if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,x(e)}(e,s)):(n||(a=function(e,t){var r;i=t,o.isBuffer(i)||i instanceof l||"string"==typeof t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk"));var i;return r}(s,t)),a?e.emit("error",a):s.objectMode||t&&t.length>0?("string"==typeof t||s.objectMode||Object.getPrototypeOf(t)===o.prototype||(t=function(e){return o.from(e)}(t)),i?s.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):v(e,s,t,!0):s.ended?e.emit("error",new Error("stream.push() after EOF")):(s.reading=!1,s.decoder&&!r?(t=s.decoder.write(t),s.objectMode||0!==t.length?v(e,s,t,!1):S(e,s)):v(e,s,t,!1))):i||(s.reading=!1));return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(s)}function v(e,t,r,i){t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,i?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&x(e)),S(e,t)}Object.defineProperty(_.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),_.prototype.destroy=f.destroy,_.prototype._undestroy=f.undestroy,_.prototype._destroy=function(e,t){this.push(null),t(e)},_.prototype.push=function(e,t){var r,i=this._readableState;return i.objectMode?r=!0:"string"==typeof e&&((t=t||i.defaultEncoding)!==i.encoding&&(e=o.from(e,t),t=""),r=!0),b(this,e,t,!1,r)},_.prototype.unshift=function(e){return b(this,e,null,!0,!1)},_.prototype.isPaused=function(){return!1===this._readableState.flowing},_.prototype.setEncoding=function(e){return p||(p=ht().StringDecoder),this._readableState.decoder=new p(e),this._readableState.encoding=e,this};var y=8388608;function w(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=y?e=y:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function x(t){var r=t._readableState;r.needReadable=!1,r.emittedReadable||(h("emitReadable",r.flowing),r.emittedReadable=!0,r.sync?e.nextTick(k,t):k(t))}function k(e){h("emit readable"),e.emit("readable"),C(e)}function S(t,r){r.readingMore||(r.readingMore=!0,e.nextTick($,t,r))}function $(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(h("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function E(e){h("readable nexttick read 0"),e.read(0)}function A(e,t){t.reading||(h("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),C(e),t.flowing&&!t.reading&&e.read(0)}function C(e){var t=e._readableState;for(h("flow",t.flowing);t.flowing&&null!==e.read(););}function z(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=function(e,t,r){var i;e<t.head.data.length?(i=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):i=e===t.head.data.length?t.shift():r?function(e,t){var r=t.head,i=1,n=r.data;e-=n.length;for(;r=r.next;){var a=r.data,s=e>a.length?a.length:e;if(s===a.length?n+=a:n+=a.slice(0,e),0===(e-=s)){s===a.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(s));break}++i}return t.length-=i,n}(e,t):function(e,t){var r=o.allocUnsafe(e),i=t.head,n=1;i.data.copy(r),e-=i.data.length;for(;i=i.next;){var a=i.data,s=e>a.length?a.length:e;if(a.copy(r,r.length-e,0,s),0===(e-=s)){s===a.length?(++n,i.next?t.head=i.next:t.head=t.tail=null):(t.head=i,i.data=a.slice(s));break}++n}return t.length-=n,r}(e,t);return i}(e,t.buffer,t.decoder),r);var r}function R(t){var r=t._readableState;if(r.length>0)throw new Error('"endReadable()" called on non-empty stream');r.endEmitted||(r.ended=!0,e.nextTick(T,r,t))}function T(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function I(e,t){for(var r=0,i=e.length;r<i;r++)if(e[r]===t)return r;return-1}return _.prototype.read=function(e){h("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return h("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?R(this):x(this),null;if(0===(e=w(e,t))&&t.ended)return 0===t.length&&R(this),null;var i,n=t.needReadable;return h("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&h("length less than watermark",n=!0),t.ended||t.reading?h("reading or ended",n=!1):n&&(h("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=w(r,t))),null===(i=e>0?z(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&R(this)),null!==i&&this.emit("data",i),i},_.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},_.prototype.pipe=function(t,r){var i=this,s=this._readableState;switch(s.pipesCount){case 0:s.pipes=t;break;case 1:s.pipes=[s.pipes,t];break;default:s.pipes.push(t)}s.pipesCount+=1,h("pipe count=%d opts=%j",s.pipesCount,r);var o=(!r||!1!==r.end)&&t!==process.stdout&&t!==process.stderr?c:b;function l(e,r){h("onunpipe"),e===i&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,h("cleanup"),t.removeListener("close",g),t.removeListener("finish",_),t.removeListener("drain",d),t.removeListener("error",m),t.removeListener("unpipe",l),i.removeListener("end",c),i.removeListener("end",b),i.removeListener("data",f),p=!0,!s.awaitDrain||t._writableState&&!t._writableState.needDrain||d())}function c(){h("onend"),t.end()}s.endEmitted?e.nextTick(o):i.once("end",o),t.on("unpipe",l);var d=function(e){return function(){var t=e._readableState;h("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&a(e,"data")&&(t.flowing=!0,C(e))}}(i);t.on("drain",d);var p=!1;var u=!1;function f(e){h("ondata"),u=!1,!1!==t.write(e)||u||((1===s.pipesCount&&s.pipes===t||s.pipesCount>1&&-1!==I(s.pipes,t))&&!p&&(h("false write response, pause",s.awaitDrain),s.awaitDrain++,u=!0),i.pause())}function m(e){h("onerror",e),b(),t.removeListener("error",m),0===a(t,"error")&&t.emit("error",e)}function g(){t.removeListener("finish",_),b()}function _(){h("onfinish"),t.removeListener("close",g),b()}function b(){h("unpipe"),i.unpipe(t)}return i.on("data",f),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?n(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(t,"error",m),t.once("close",g),t.once("finish",_),t.emit("pipe",i),s.flowing||(h("pipe resume"),i.resume()),t},_.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;if(!e){var i=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<n;a++)i[a].emit("unpipe",this,{hasUnpiped:!1});return this}var s=I(t.pipes,e);return-1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},_.prototype.on=function(t,r){var i=s.prototype.on.call(this,t,r);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&x(this):e.nextTick(E,this))}return i},_.prototype.addListener=_.prototype.on,_.prototype.resume=function(){var t=this._readableState;return t.flowing||(h("resume"),t.flowing=!0,function(t,r){r.resumeScheduled||(r.resumeScheduled=!0,e.nextTick(A,t,r))}(this,t)),this},_.prototype.pause=function(){return h("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(h("pause"),this._readableState.flowing=!1,this.emit("pause")),this},_.prototype.wrap=function(e){var t=this,r=this._readableState,i=!1;for(var n in e.on("end",function(){if(h("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(n){(h("wrapped data"),r.decoder&&(n=r.decoder.write(n)),r.objectMode&&null==n)||(r.objectMode||n&&n.length)&&(t.push(n)||(i=!0,e.pause()))}),e)void 0===this[n]&&"function"==typeof e[n]&&(this[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n));for(var a=0;a<m.length;a++)e.on(m[a],this.emit.bind(this,m[a]));return this._read=function(t){h("wrapped _read",t),i&&(i=!1,e.resume())},this},Object.defineProperty(_.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),_._fromList=z,rt}function ut(){if(at)return nt;at=1,nt=i;var e=Je(),t=Object.create(De());function r(e,t){var r=this._transformState;r.transforming=!1;var i=r.writecb;if(!i)return this.emit("error",new Error("write callback called multiple times"));r.writechunk=null,r.writecb=null,null!=t&&this.push(t),i(e);var n=this._readableState;n.reading=!1,(n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}function i(t){if(!(this instanceof i))return new i(t);e.call(this,t),this._transformState={afterTransform:r.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",n)}function n(){var e=this;"function"==typeof this._flush?this._flush(function(t,r){a(e,t,r)}):a(this,null,null)}function a(e,t,r){if(t)return e.emit("error",t);if(null!=r&&e.push(r),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}return t.inherits=Ne(),t.inherits(i,e),i.prototype.push=function(t,r){return this._transformState.needTransform=!1,e.prototype.push.call(this,t,r)},i.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")},i.prototype._write=function(e,t,r){var i=this._transformState;if(i.writecb=r,i.writechunk=e,i.writeencoding=t,!i.transforming){var n=this._readableState;(i.needTransform||n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}},i.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},i.prototype._destroy=function(t,r){var i=this;e.prototype._destroy.call(this,t,function(e){r(e),i.emit("close")})},nt}function ft(){return lt||(lt=1,t=$e,r=$e.exports,i=e,"disable"===process.env.READABLE_STREAM&&i?(t.exports=i,(r=t.exports=i.Readable).Readable=i.Readable,r.Writable=i.Writable,r.Duplex=i.Duplex,r.Transform=i.Transform,r.PassThrough=i.PassThrough,r.Stream=i):((r=t.exports=pt()).Stream=i||r,r.Readable=r,r.Writable=Ge(),r.Duplex=Je(),r.Transform=ut(),r.PassThrough=function(){if(ot)return st;ot=1,st=r;var e=ut(),t=Object.create(De());function r(t){if(!(this instanceof r))return new r(t);e.call(this,t)}return t.inherits=Ne(),t.inherits(r,e),r.prototype._transform=function(e,t,r){r(null,e)},st}())),$e.exports;var t,r,i}if(Se.base64=!0,Se.array=!0,Se.string=!0,Se.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,Se.nodebuffer="undefined"!=typeof Buffer,Se.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)Se.blob=!1;else{var mt=new ArrayBuffer(0);try{Se.blob=0===new Blob([mt],{type:"application/zip"}).size}catch(z){try{var gt=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);gt.append(mt),Se.blob=0===gt.getBlob("application/zip").size}catch(z){Se.blob=!1}}}try{Se.nodestream=!!ft().Readable}catch(z){Se.nodestream=!1}var _t,bt={};function vt(){if(_t)return bt;_t=1;var e=Ct(),t=Se,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return bt.encode=function(t){for(var i,n,a,s,o,l,c,d=[],h=0,p=t.length,u=p,f="string"!==e.getTypeOf(t);h<t.length;)u=p-h,f?(i=t[h++],n=h<p?t[h++]:0,a=h<p?t[h++]:0):(i=t.charCodeAt(h++),n=h<p?t.charCodeAt(h++):0,a=h<p?t.charCodeAt(h++):0),s=i>>2,o=(3&i)<<4|n>>4,l=u>1?(15&n)<<2|a>>6:64,c=u>2?63&a:64,d.push(r.charAt(s)+r.charAt(o)+r.charAt(l)+r.charAt(c));return d.join("")},bt.decode=function(e){var i,n,a,s,o,l,c=0,d=0,h="data:";if(e.substr(0,5)===h)throw new Error("Invalid base64 input, it looks like a data url.");var p,u=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===r.charAt(64)&&u--,e.charAt(e.length-2)===r.charAt(64)&&u--,u%1!=0)throw new Error("Invalid base64 input, bad content length.");for(p=t.uint8array?new Uint8Array(0|u):new Array(0|u);c<e.length;)i=r.indexOf(e.charAt(c++))<<2|(s=r.indexOf(e.charAt(c++)))>>4,n=(15&s)<<4|(o=r.indexOf(e.charAt(c++)))>>2,a=(3&o)<<6|(l=r.indexOf(e.charAt(c++))),p[d++]=i,64!==o&&(p[d++]=n),64!==l&&(p[d++]=a);return p},bt}var yt,wt,xt,kt,St={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}};var $t=null;$t="undefined"!=typeof Promise?Promise:function(){if(kt)return xt;kt=1;var e=function(){if(wt)return yt;wt=1;var e,t,r=me.MutationObserver||me.WebKitMutationObserver;if(process.browser)if(r){var i=0,n=new r(l),a=me.document.createTextNode("");n.observe(a,{characterData:!0}),e=function(){a.data=i=++i%2}}else if(me.setImmediate||void 0===me.MessageChannel)e="document"in me&&"onreadystatechange"in me.document.createElement("script")?function(){var e=me.document.createElement("script");e.onreadystatechange=function(){l(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},me.document.documentElement.appendChild(e)}:function(){setTimeout(l,0)};else{var s=new me.MessageChannel;s.port1.onmessage=l,e=function(){s.port2.postMessage(0)}}else e=function(){process.nextTick(l)};var o=[];function l(){var e,r;t=!0;for(var i=o.length;i;){for(r=o,o=[],e=-1;++e<i;)r[e]();i=o.length}t=!1}return yt=function(r){1!==o.push(r)||t||e()}}();function t(){}var r={},i=["REJECTED"],n=["FULFILLED"],a=["PENDING"];if(!process.browser)var s=["UNHANDLED"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=a,this.queue=[],this.outcome=void 0,process.browser||(this.handled=s),e!==t&&h(this,e)}function l(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function c(t,i,n){e(function(){var e;try{e=i(n)}catch(e){return r.reject(t,e)}e===t?r.reject(t,new TypeError("Cannot resolve promise with itself")):r.resolve(t,e)})}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var i=!1;function n(t){i||(i=!0,r.reject(e,t))}function a(t){i||(i=!0,r.resolve(e,t))}var s=p(function(){t(a,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}return xt=o,o.prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){throw r})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,r){if("function"!=typeof e&&this.state===n||"function"!=typeof r&&this.state===i)return this;var o=new this.constructor(t);return process.browser||this.handled===s&&(this.handled=null),this.state!==a?c(o,this.state===n?e:r,this.outcome):this.queue.push(new l(o,e,r)),o},l.prototype.callFulfilled=function(e){r.resolve(this.promise,e)},l.prototype.otherCallFulfilled=function(e){c(this.promise,this.onFulfilled,e)},l.prototype.callRejected=function(e){r.reject(this.promise,e)},l.prototype.otherCallRejected=function(e){c(this.promise,this.onRejected,e)},r.resolve=function(e,t){var i=p(d,t);if("error"===i.status)return r.reject(e,i.value);var a=i.value;if(a)h(e,a);else{e.state=n,e.outcome=t;for(var s=-1,o=e.queue.length;++s<o;)e.queue[s].callFulfilled(t)}return e},r.reject=function(t,r){t.state=i,t.outcome=r,process.browser||t.handled===s&&e(function(){t.handled===s&&process.emit("unhandledRejection",r,t)});for(var n=-1,a=t.queue.length;++n<a;)t.queue[n].callRejected(r);return t},o.resolve=function(e){return e instanceof this?e:r.resolve(new this(t),e)},o.reject=function(e){var i=new this(t);return r.reject(i,e)},o.all=function(e){var i=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,a=!1;if(!n)return this.resolve([]);for(var s=new Array(n),o=0,l=-1,c=new this(t);++l<n;)d(e[l],l);return c;function d(e,t){i.resolve(e).then(function(e){s[t]=e,++o!==n||a||(a=!0,r.resolve(c,s))},function(e){a||(a=!0,r.reject(c,e))})}},o.race=function(e){var i=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,a=!1;if(!n)return this.resolve([]);for(var s=-1,o=new this(t);++s<n;)l(e[s]);return o;function l(e){i.resolve(e).then(function(e){a||(a=!0,r.resolve(o,e))},function(e){a||(a=!0,r.reject(o,e))})}},xt}();var Et,At={Promise:$t};function Ct(){return Et||(Et=1,function(e){var t=Se,r=vt(),i=St,n=At;function a(e){return e}function s(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e.newBlob=function(t,r){e.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(t),i.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var o={stringifyByChunk:function(e,t,r){var i=[],n=0,a=e.length;if(a<=r)return String.fromCharCode.apply(null,e);for(;n<a;)"array"===t||"nodebuffer"===t?i.push(String.fromCharCode.apply(null,e.slice(n,Math.min(n+r,a)))):i.push(String.fromCharCode.apply(null,e.subarray(n,Math.min(n+r,a)))),n+=r;return i.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return t.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return t.nodebuffer&&1===String.fromCharCode.apply(null,i.allocBuffer(1)).length}catch(e){return!1}}()}};function l(t){var r=65536,i=e.getTypeOf(t),n=!0;if("uint8array"===i?n=o.applyCanBeUsed.uint8array:"nodebuffer"===i&&(n=o.applyCanBeUsed.nodebuffer),n)for(;r>1;)try{return o.stringifyByChunk(t,i,r)}catch(e){r=Math.floor(r/2)}return o.stringifyByChar(t)}function c(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}e.applyFromCharCode=l;var d={};d.string={string:a,array:function(e){return s(e,new Array(e.length))},arraybuffer:function(e){return d.string.uint8array(e).buffer},uint8array:function(e){return s(e,new Uint8Array(e.length))},nodebuffer:function(e){return s(e,i.allocBuffer(e.length))}},d.array={string:l,array:a,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return i.newBufferFrom(e)}},d.arraybuffer={string:function(e){return l(new Uint8Array(e))},array:function(e){return c(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:a,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return i.newBufferFrom(new Uint8Array(e))}},d.uint8array={string:l,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:a,nodebuffer:function(e){return i.newBufferFrom(e)}},d.nodebuffer={string:l,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return d.nodebuffer.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:a},e.transformTo=function(t,r){if(r||(r=""),!t)return r;e.checkSupport(t);var i=e.getTypeOf(r);return d[i][t](r)},e.resolve=function(e){for(var t=e.split("/"),r=[],i=0;i<t.length;i++){var n=t[i];"."===n||""===n&&0!==i&&i!==t.length-1||(".."===n?r.pop():r.push(n))}return r.join("/")},e.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":t.nodebuffer&&i.isBuffer(e)?"nodebuffer":t.uint8array&&e instanceof Uint8Array?"uint8array":t.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},e.checkSupport=function(e){if(!t[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},e.MAX_VALUE_16BITS=65535,e.MAX_VALUE_32BITS=-1,e.pretty=function(e){var t,r,i="";for(r=0;r<(e||"").length;r++)i+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return i},e.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},e.inherits=function(e,t){var r=function(){};r.prototype=t.prototype,e.prototype=new r},e.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},e.prepareContent=function(i,a,o,l,c){var d=n.Promise.resolve(a).then(function(e){return t.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new n.Promise(function(t,r){var i=new FileReader;i.onload=function(e){t(e.target.result)},i.onerror=function(e){r(e.target.error)},i.readAsArrayBuffer(e)}):e});return d.then(function(a){var d,h=e.getTypeOf(a);return h?("arraybuffer"===h?a=e.transformTo("uint8array",a):"string"===h&&(c?a=r.decode(a):o&&!0!==l&&(a=s(d=a,t.uint8array?new Uint8Array(d.length):new Array(d.length)))),a):n.Promise.reject(new Error("Can't read the data of '"+i+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}}(ke)),ke}function zt(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}!function(e){if(!e.setImmediate){var t,r,i,n,a,s=1,o={},l=!1,c=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?t=function(e){process.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},t=function(e){i.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(r=c.documentElement,t=function(e){var t=c.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):t=function(e){setTimeout(p,0,e)}:(n="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&p(+t.data.slice(n.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),t=function(t){e.postMessage(n+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var r=new Array(arguments.length-1),i=0;i<r.length;i++)r[i]=arguments[i+1];var n={callback:e,args:r};return o[s]=n,t(s),s++},d.clearImmediate=h}function h(e){delete o[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=o[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(void 0,r)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?me:self),zt.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var e=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}};var Rt=zt;!function(e){for(var t=Ct(),r=Se,i=St,n=Rt,a=new Array(256),s=0;s<256;s++)a[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;a[254]=a[254]=1;function o(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}e.utf8encode=function(e){return r.nodebuffer?i.newBufferFrom(e,"utf-8"):function(e){var t,i,n,a,s,o=e.length,l=0;for(a=0;a<o;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(n-56320),a++),l+=i<128?1:i<2048?2:i<65536?3:4;for(t=r.uint8array?new Uint8Array(l):new Array(l),s=0,a=0;s<l;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(n-56320),a++),i<128?t[s++]=i:i<2048?(t[s++]=192|i>>>6,t[s++]=128|63&i):i<65536?(t[s++]=224|i>>>12,t[s++]=128|i>>>6&63,t[s++]=128|63&i):(t[s++]=240|i>>>18,t[s++]=128|i>>>12&63,t[s++]=128|i>>>6&63,t[s++]=128|63&i);return t}(e)},e.utf8decode=function(e){return r.nodebuffer?t.transformTo("nodebuffer",e).toString("utf-8"):function(e){var r,i,n,s,o=e.length,l=new Array(2*o);for(i=0,r=0;r<o;)if((n=e[r++])<128)l[i++]=n;else if((s=a[n])>4)l[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;s>1&&r<o;)n=n<<6|63&e[r++],s--;s>1?l[i++]=65533:n<65536?l[i++]=n:(n-=65536,l[i++]=55296|n>>10&1023,l[i++]=56320|1023&n)}return l.length!==i&&(l.subarray?l=l.subarray(0,i):l.length=i),t.applyFromCharCode(l)}(e=t.transformTo(r.uint8array?"uint8array":"array",e))},t.inherits(o,n),o.prototype.processChunk=function(i){var n=t.transformTo(r.uint8array?"uint8array":"array",i.data);if(this.leftOver&&this.leftOver.length){if(r.uint8array){var s=n;(n=new Uint8Array(s.length+this.leftOver.length)).set(this.leftOver,0),n.set(s,this.leftOver.length)}else n=this.leftOver.concat(n);this.leftOver=null}var o=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0||0===r?t:r+a[e[r]]>t?r:t}(n),l=n;o!==n.length&&(r.uint8array?(l=n.subarray(0,o),this.leftOver=n.subarray(o,n.length)):(l=n.slice(0,o),this.leftOver=n.slice(o,n.length))),this.push({data:e.utf8decode(l),meta:i.meta})},o.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:e.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},e.Utf8DecodeWorker=o,t.inherits(l,n),l.prototype.processChunk=function(t){this.push({data:e.utf8encode(t.data),meta:t.meta})},e.Utf8EncodeWorker=l}(xe);var Tt=Rt,It=Ct();function Ot(e){Tt.call(this,"ConvertWorker to "+e),this.destType=e}It.inherits(Ot,Tt),Ot.prototype.processChunk=function(e){this.push({data:It.transformTo(this.destType,e.data),meta:e.meta})};var Dt,Bt,Pt=Ot;var Ft=Ct(),Mt=Pt,Nt=Rt,jt=vt(),Lt=At,Ut=null;if(Se.nodestream)try{Ut=function(){if(Bt)return Dt;Bt=1;var e=ft().Readable;function t(t,r,i){e.call(this,r),this._helper=t;var n=this;t.on("data",function(e,t){n.push(e)||n._helper.pause(),i&&i(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}return Ct().inherits(t,e),t.prototype._read=function(){this._helper.resume()},Dt=t}()}catch(z){}function Wt(e,t){return new Lt.Promise(function(r,i){var n=[],a=e._internalType,s=e._outputType,o=e._mimeType;e.on("data",function(e,r){n.push(e),t&&t(r)}).on("error",function(e){n=[],i(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return Ft.newBlob(Ft.transformTo("arraybuffer",t),r);case"base64":return jt.encode(t);default:return Ft.transformTo(e,t)}}(s,function(e,t){var r,i=0,n=null,a=0;for(r=0;r<t.length;r++)a+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(n=new Uint8Array(a),r=0;r<t.length;r++)n.set(t[r],i),i+=t[r].length;return n;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(a,n),o);r(e)}catch(e){i(e)}n=[]}).resume()})}function Ht(e,t,r){var i=t;switch(t){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string"}try{this._internalType=i,this._outputType=t,this._mimeType=r,Ft.checkSupport(i),this._worker=e.pipe(new Mt(i)),e.lock()}catch(e){this._worker=new Nt("error"),this._worker.error(e)}}Ht.prototype={accumulate:function(e){return Wt(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){Ft.delay(t,arguments,r)}),this},resume:function(){return Ft.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(Ft.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new Ut(this,{objectMode:"nodebuffer"!==this._outputType},e)}};var Zt=Ht,qt={base64:!1,binary:!1,dir:!1,createFolders:!0,date:null,compression:null,compressionOptions:null,comment:null,unixPermissions:null,dosPermissions:null},Kt=Ct(),Yt=Rt;function Vt(e){Yt.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=Kt.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}Kt.inherits(Vt,Yt),Vt.prototype.cleanUp=function(){Yt.prototype.cleanUp.call(this),this.data=null},Vt.prototype.resume=function(){return!!Yt.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,Kt.delay(this._tickAndRepeat,[],this)),!0)},Vt.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(Kt.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},Vt.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})};var Xt=Vt,Qt=Ct();var Gt=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();var Jt=function(e,t){return void 0!==e&&e.length?"string"!==Qt.getTypeOf(e)?function(e,t,r,i){var n=Gt,a=i+r;e^=-1;for(var s=i;s<a;s++)e=e>>>8^n[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):function(e,t,r,i){var n=Gt,a=i+r;e^=-1;for(var s=i;s<a;s++)e=e>>>8^n[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):0},er=Rt,tr=Jt;function rr(){er.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}Ct().inherits(rr,er),rr.prototype.processChunk=function(e){this.streamInfo.crc32=tr(e.data,this.streamInfo.crc32||0),this.push(e)};var ir=rr,nr=Ct(),ar=Rt;function sr(e){ar.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}nr.inherits(sr,ar),sr.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}ar.prototype.processChunk.call(this,e)};var or=At,lr=Xt,cr=ir,dr=sr;function hr(e,t,r,i,n){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=i,this.compressedContent=n}hr.prototype={getContentWorker:function(){var e=new lr(or.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new dr("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new lr(or.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},hr.createWorkerFrom=function(e,t,r){return e.pipe(new cr).pipe(new dr("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new dr("compressedSize")).withStreamInfo("compression",t)};var pr=hr,ur=Zt,fr=Xt,mr=xe,gr=pr,_r=Rt,br=function(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}};br.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var i="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var n=!this._dataBinary;n&&!i&&(t=t.pipe(new mr.Utf8EncodeWorker)),!n&&i&&(t=t.pipe(new mr.Utf8DecodeWorker))}catch(e){(t=new _r("error")).error(e)}return new ur(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof gr&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new mr.Utf8EncodeWorker)),gr.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof gr?this._data.getContentWorker():this._data instanceof _r?this._data:new fr(this._data)}};for(var vr=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],yr=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},wr=0;wr<vr.length;wr++)br.prototype[vr[wr]]=yr;var xr=br,kr={},Sr={},$r={},Er={};!function(e){var t="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var n in i)r(i,n)&&(e[n]=i[n])}}return e},e.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,i,n){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+i),n);else for(var a=0;a<i;a++)e[n+a]=t[r+a]},flattenChunks:function(e){var t,r,i,n,a,s;for(i=0,t=0,r=e.length;t<r;t++)i+=e[t].length;for(s=new Uint8Array(i),n=0,t=0,r=e.length;t<r;t++)a=e[t],s.set(a,n),n+=a.length;return s}},n={arraySet:function(e,t,r,i,n){for(var a=0;a<i;a++)e[n+a]=t[r+a]},flattenChunks:function(e){return[].concat.apply([],e)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,n))},e.setTyped(t)}(Er);var Ar={},Cr={},zr={},Rr=Er;function Tr(e){for(var t=e.length;--t>=0;)e[t]=0}var Ir=256,Or=286,Dr=30,Br=15,Pr=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fr=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Mr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Nr=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],jr=new Array(576);Tr(jr);var Lr=new Array(60);Tr(Lr);var Ur=new Array(512);Tr(Ur);var Wr=new Array(256);Tr(Wr);var Hr=new Array(29);Tr(Hr);var Zr,qr,Kr,Yr=new Array(Dr);function Vr(e,t,r,i,n){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=e&&e.length}function Xr(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function Qr(e){return e<256?Ur[e]:Ur[256+(e>>>7)]}function Gr(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function Jr(e,t,r){e.bi_valid>16-r?(e.bi_buf|=t<<e.bi_valid&65535,Gr(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=r-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function ei(e,t,r){Jr(e,r[2*t],r[2*t+1])}function ti(e,t){var r=0;do{r|=1&e,e>>>=1,r<<=1}while(--t>0);return r>>>1}function ri(e,t,r){var i,n,a=new Array(16),s=0;for(i=1;i<=Br;i++)a[i]=s=s+r[i-1]<<1;for(n=0;n<=t;n++){var o=e[2*n+1];0!==o&&(e[2*n]=ti(a[o]++,o))}}function ii(e){var t;for(t=0;t<Or;t++)e.dyn_ltree[2*t]=0;for(t=0;t<Dr;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ni(e){e.bi_valid>8?Gr(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ai(e,t,r,i){var n=2*t,a=2*r;return e[n]<e[a]||e[n]===e[a]&&i[t]<=i[r]}function si(e,t,r){for(var i=e.heap[r],n=r<<1;n<=e.heap_len&&(n<e.heap_len&&ai(t,e.heap[n+1],e.heap[n],e.depth)&&n++,!ai(t,i,e.heap[n],e.depth));)e.heap[r]=e.heap[n],r=n,n<<=1;e.heap[r]=i}function oi(e,t,r){var i,n,a,s,o=0;if(0!==e.last_lit)do{i=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],n=e.pending_buf[e.l_buf+o],o++,0===i?ei(e,n,t):(ei(e,(a=Wr[n])+Ir+1,t),0!==(s=Pr[a])&&Jr(e,n-=Hr[a],s),ei(e,a=Qr(--i),r),0!==(s=Fr[a])&&Jr(e,i-=Yr[a],s))}while(o<e.last_lit);ei(e,256,t)}function li(e,t){var r,i,n,a=t.dyn_tree,s=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=573,r=0;r<l;r++)0!==a[2*r]?(e.heap[++e.heap_len]=c=r,e.depth[r]=0):a[2*r+1]=0;for(;e.heap_len<2;)a[2*(n=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[n]=0,e.opt_len--,o&&(e.static_len-=s[2*n+1]);for(t.max_code=c,r=e.heap_len>>1;r>=1;r--)si(e,a,r);n=l;do{r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],si(e,a,1),i=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=i,a[2*n]=a[2*r]+a[2*i],e.depth[n]=(e.depth[r]>=e.depth[i]?e.depth[r]:e.depth[i])+1,a[2*r+1]=a[2*i+1]=n,e.heap[1]=n++,si(e,a,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,i,n,a,s,o,l=t.dyn_tree,c=t.max_code,d=t.stat_desc.static_tree,h=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,u=t.stat_desc.extra_base,f=t.stat_desc.max_length,m=0;for(a=0;a<=Br;a++)e.bl_count[a]=0;for(l[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<573;r++)(a=l[2*l[2*(i=e.heap[r])+1]+1]+1)>f&&(a=f,m++),l[2*i+1]=a,i>c||(e.bl_count[a]++,s=0,i>=u&&(s=p[i-u]),o=l[2*i],e.opt_len+=o*(a+s),h&&(e.static_len+=o*(d[2*i+1]+s)));if(0!==m){do{for(a=f-1;0===e.bl_count[a];)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[f]--,m-=2}while(m>0);for(a=f;0!==a;a--)for(i=e.bl_count[a];0!==i;)(n=e.heap[--r])>c||(l[2*n+1]!==a&&(e.opt_len+=(a-l[2*n+1])*l[2*n],l[2*n+1]=a),i--)}}(e,t),ri(a,c,e.bl_count)}function ci(e,t,r){var i,n,a=-1,s=t[1],o=0,l=7,c=4;for(0===s&&(l=138,c=3),t[2*(r+1)+1]=65535,i=0;i<=r;i++)n=s,s=t[2*(i+1)+1],++o<l&&n===s||(o<c?e.bl_tree[2*n]+=o:0!==n?(n!==a&&e.bl_tree[2*n]++,e.bl_tree[32]++):o<=10?e.bl_tree[34]++:e.bl_tree[36]++,o=0,a=n,0===s?(l=138,c=3):n===s?(l=6,c=3):(l=7,c=4))}function di(e,t,r){var i,n,a=-1,s=t[1],o=0,l=7,c=4;for(0===s&&(l=138,c=3),i=0;i<=r;i++)if(n=s,s=t[2*(i+1)+1],!(++o<l&&n===s)){if(o<c)do{ei(e,n,e.bl_tree)}while(0!==--o);else 0!==n?(n!==a&&(ei(e,n,e.bl_tree),o--),ei(e,16,e.bl_tree),Jr(e,o-3,2)):o<=10?(ei(e,17,e.bl_tree),Jr(e,o-3,3)):(ei(e,18,e.bl_tree),Jr(e,o-11,7));o=0,a=n,0===s?(l=138,c=3):n===s?(l=6,c=3):(l=7,c=4)}}Tr(Yr);var hi=!1;function pi(e,t,r,i){Jr(e,0+(i?1:0),3),function(e,t,r){ni(e),Gr(e,r),Gr(e,~r),Rr.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r)}zr._tr_init=function(e){hi||(!function(){var e,t,r,i,n,a=new Array(16);for(r=0,i=0;i<28;i++)for(Hr[i]=r,e=0;e<1<<Pr[i];e++)Wr[r++]=i;for(Wr[r-1]=i,n=0,i=0;i<16;i++)for(Yr[i]=n,e=0;e<1<<Fr[i];e++)Ur[n++]=i;for(n>>=7;i<Dr;i++)for(Yr[i]=n<<7,e=0;e<1<<Fr[i]-7;e++)Ur[256+n++]=i;for(t=0;t<=Br;t++)a[t]=0;for(e=0;e<=143;)jr[2*e+1]=8,e++,a[8]++;for(;e<=255;)jr[2*e+1]=9,e++,a[9]++;for(;e<=279;)jr[2*e+1]=7,e++,a[7]++;for(;e<=287;)jr[2*e+1]=8,e++,a[8]++;for(ri(jr,287,a),e=0;e<Dr;e++)Lr[2*e+1]=5,Lr[2*e]=ti(e,5);Zr=new Vr(jr,Pr,257,Or,Br),qr=new Vr(Lr,Fr,0,Dr,Br),Kr=new Vr(new Array(0),Mr,0,19,7)}(),hi=!0),e.l_desc=new Xr(e.dyn_ltree,Zr),e.d_desc=new Xr(e.dyn_dtree,qr),e.bl_desc=new Xr(e.bl_tree,Kr),e.bi_buf=0,e.bi_valid=0,ii(e)},zr._tr_stored_block=pi,zr._tr_flush_block=function(e,t,r,i){var n,a,s=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<Ir;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),li(e,e.l_desc),li(e,e.d_desc),s=function(e){var t;for(ci(e,e.dyn_ltree,e.l_desc.max_code),ci(e,e.dyn_dtree,e.d_desc.max_code),li(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*Nr[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),n=e.opt_len+3+7>>>3,(a=e.static_len+3+7>>>3)<=n&&(n=a)):n=a=r+5,r+4<=n&&-1!==t?pi(e,t,r,i):4===e.strategy||a===n?(Jr(e,2+(i?1:0),3),oi(e,jr,Lr)):(Jr(e,4+(i?1:0),3),function(e,t,r,i){var n;for(Jr(e,t-257,5),Jr(e,r-1,5),Jr(e,i-4,4),n=0;n<i;n++)Jr(e,e.bl_tree[2*Nr[n]+1],3);di(e,e.dyn_ltree,t-1),di(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,s+1),oi(e,e.dyn_ltree,e.dyn_dtree)),ii(e),i&&ni(e)},zr._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(Wr[r]+Ir+1)]++,e.dyn_dtree[2*Qr(t)]++),e.last_lit===e.lit_bufsize-1},zr._tr_align=function(e){Jr(e,2,3),ei(e,256,jr),function(e){16===e.bi_valid?(Gr(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)};var ui=function(e,t,r,i){for(var n=65535&e,a=e>>>16&65535,s=0;0!==r;){r-=s=r>2e3?2e3:r;do{a=a+(n=n+t[i++]|0)|0}while(--s);n%=65521,a%=65521}return n|a<<16};var fi=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();var mi,gi=function(e,t,r,i){var n=fi,a=i+r;e^=-1;for(var s=i;s<a;s++)e=e>>>8^n[255&(e^t[s])];return-1^e},_i={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},bi=Er,vi=zr,yi=ui,wi=gi,xi=_i,ki=-2,Si=258,$i=262,Ei=103,Ai=113,Ci=666;function zi(e,t){return e.msg=xi[t],t}function Ri(e){return(e<<1)-(e>4?9:0)}function Ti(e){for(var t=e.length;--t>=0;)e[t]=0}function Ii(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(bi.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function Oi(e,t){vi._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Ii(e.strm)}function Di(e,t){e.pending_buf[e.pending++]=t}function Bi(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function Pi(e,t,r,i){var n=e.avail_in;return n>i&&(n=i),0===n?0:(e.avail_in-=n,bi.arraySet(t,e.input,e.next_in,n,r),1===e.state.wrap?e.adler=yi(e.adler,t,n,r):2===e.state.wrap&&(e.adler=wi(e.adler,t,n,r)),e.next_in+=n,e.total_in+=n,n)}function Fi(e,t){var r,i,n=e.max_chain_length,a=e.strstart,s=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-$i?e.strstart-(e.w_size-$i):0,c=e.window,d=e.w_mask,h=e.prev,p=e.strstart+Si,u=c[a+s-1],f=c[a+s];e.prev_length>=e.good_match&&(n>>=2),o>e.lookahead&&(o=e.lookahead);do{if(c[(r=t)+s]===f&&c[r+s-1]===u&&c[r]===c[a]&&c[++r]===c[a+1]){a+=2,r++;do{}while(c[++a]===c[++r]&&c[++a]===c[++r]&&c[++a]===c[++r]&&c[++a]===c[++r]&&c[++a]===c[++r]&&c[++a]===c[++r]&&c[++a]===c[++r]&&c[++a]===c[++r]&&a<p);if(i=Si-(p-a),a=p-Si,i>s){if(e.match_start=t,s=i,i>=o)break;u=c[a+s-1],f=c[a+s]}}}while((t=h[t&d])>l&&0!==--n);return s<=e.lookahead?s:e.lookahead}function Mi(e){var t,r,i,n,a,s=e.w_size;do{if(n=e.window_size-e.lookahead-e.strstart,e.strstart>=s+(s-$i)){bi.arraySet(e.window,e.window,s,s,0),e.match_start-=s,e.strstart-=s,e.block_start-=s,t=r=e.hash_size;do{i=e.head[--t],e.head[t]=i>=s?i-s:0}while(--r);t=r=s;do{i=e.prev[--t],e.prev[t]=i>=s?i-s:0}while(--r);n+=s}if(0===e.strm.avail_in)break;if(r=Pi(e.strm,e.window,e.strstart+e.lookahead,n),e.lookahead+=r,e.lookahead+e.insert>=3)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+3-1])&e.hash_mask,e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<$i&&0!==e.strm.avail_in)}function Ni(e,t){for(var r,i;;){if(e.lookahead<$i){if(Mi(e),e.lookahead<$i&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-$i&&(e.match_length=Fi(e,r)),e.match_length>=3)if(i=vi._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!==--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else i=vi._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(i&&(Oi(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(Oi(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Oi(e,!1),0===e.strm.avail_out)?1:2}function ji(e,t){for(var r,i,n;;){if(e.lookahead<$i){if(Mi(e),e.lookahead<$i&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-$i&&(e.match_length=Fi(e,r),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){n=e.strstart+e.lookahead-3,i=vi._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=n&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!==--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,i&&(Oi(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((i=vi._tr_tally(e,0,e.window[e.strstart-1]))&&Oi(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(i=vi._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(Oi(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Oi(e,!1),0===e.strm.avail_out)?1:2}function Li(e,t,r,i,n){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=i,this.func=n}function Ui(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new bi.Buf16(1146),this.dyn_dtree=new bi.Buf16(122),this.bl_tree=new bi.Buf16(78),Ti(this.dyn_ltree),Ti(this.dyn_dtree),Ti(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new bi.Buf16(16),this.heap=new bi.Buf16(573),Ti(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new bi.Buf16(573),Ti(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Wi(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:Ai,e.adler=2===t.wrap?0:1,t.last_flush=0,vi._tr_init(t),0):zi(e,ki)}function Hi(e){var t=Wi(e);return 0===t&&function(e){e.window_size=2*e.w_size,Ti(e.head),e.max_lazy_match=mi[e.level].max_lazy,e.good_match=mi[e.level].good_length,e.nice_match=mi[e.level].nice_length,e.max_chain_length=mi[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0}(e.state),t}function Zi(e,t,r,i,n,a){if(!e)return ki;var s=1;if(-1===t&&(t=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),n<1||n>9||8!==r||i<8||i>15||t<0||t>9||a<0||a>4)return zi(e,ki);8===i&&(i=9);var o=new Ui;return e.state=o,o.strm=e,o.wrap=s,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new bi.Buf8(2*o.w_size),o.head=new bi.Buf16(o.hash_size),o.prev=new bi.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new bi.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=a,o.method=r,Hi(e)}mi=[new Li(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(Mi(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var i=e.block_start+r;if((0===e.strstart||e.strstart>=i)&&(e.lookahead=e.strstart-i,e.strstart=i,Oi(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-$i&&(Oi(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(Oi(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(Oi(e,!1),e.strm.avail_out),1)}),new Li(4,4,8,4,Ni),new Li(4,5,16,8,Ni),new Li(4,6,32,32,Ni),new Li(4,4,16,16,ji),new Li(8,16,32,32,ji),new Li(8,16,128,128,ji),new Li(8,32,128,256,ji),new Li(32,128,258,1024,ji),new Li(32,258,258,4096,ji)],Cr.deflateInit=function(e,t){return Zi(e,t,8,15,8,0)},Cr.deflateInit2=Zi,Cr.deflateReset=Hi,Cr.deflateResetKeep=Wi,Cr.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?ki:(e.state.gzhead=t,0):ki},Cr.deflate=function(e,t){var r,i,n,a;if(!e||!e.state||t>5||t<0)return e?zi(e,ki):ki;if(i=e.state,!e.output||!e.input&&0!==e.avail_in||i.status===Ci&&4!==t)return zi(e,0===e.avail_out?-5:ki);if(i.strm=e,r=i.last_flush,i.last_flush=t,42===i.status)if(2===i.wrap)e.adler=0,Di(i,31),Di(i,139),Di(i,8),i.gzhead?(Di(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),Di(i,255&i.gzhead.time),Di(i,i.gzhead.time>>8&255),Di(i,i.gzhead.time>>16&255),Di(i,i.gzhead.time>>24&255),Di(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),Di(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(Di(i,255&i.gzhead.extra.length),Di(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=wi(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(Di(i,0),Di(i,0),Di(i,0),Di(i,0),Di(i,0),Di(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),Di(i,3),i.status=Ai);else{var s=8+(i.w_bits-8<<4)<<8;s|=(i.strategy>=2||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(s|=32),s+=31-s%31,i.status=Ai,Bi(i,s),0!==i.strstart&&(Bi(i,e.adler>>>16),Bi(i,65535&e.adler)),e.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(e.adler=wi(e.adler,i.pending_buf,i.pending-n,n)),Ii(e),n=i.pending,i.pending!==i.pending_buf_size));)Di(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(e.adler=wi(e.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(e.adler=wi(e.adler,i.pending_buf,i.pending-n,n)),Ii(e),n=i.pending,i.pending===i.pending_buf_size)){a=1;break}a=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,Di(i,a)}while(0!==a);i.gzhead.hcrc&&i.pending>n&&(e.adler=wi(e.adler,i.pending_buf,i.pending-n,n)),0===a&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(e.adler=wi(e.adler,i.pending_buf,i.pending-n,n)),Ii(e),n=i.pending,i.pending===i.pending_buf_size)){a=1;break}a=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,Di(i,a)}while(0!==a);i.gzhead.hcrc&&i.pending>n&&(e.adler=wi(e.adler,i.pending_buf,i.pending-n,n)),0===a&&(i.status=Ei)}else i.status=Ei;if(i.status===Ei&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&Ii(e),i.pending+2<=i.pending_buf_size&&(Di(i,255&e.adler),Di(i,e.adler>>8&255),e.adler=0,i.status=Ai)):i.status=Ai),0!==i.pending){if(Ii(e),0===e.avail_out)return i.last_flush=-1,0}else if(0===e.avail_in&&Ri(t)<=Ri(r)&&4!==t)return zi(e,-5);if(i.status===Ci&&0!==e.avail_in)return zi(e,-5);if(0!==e.avail_in||0!==i.lookahead||0!==t&&i.status!==Ci){var o=2===i.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(Mi(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,r=vi._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(Oi(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(Oi(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Oi(e,!1),0===e.strm.avail_out)?1:2}(i,t):3===i.strategy?function(e,t){for(var r,i,n,a,s=e.window;;){if(e.lookahead<=Si){if(Mi(e),e.lookahead<=Si&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(i=s[n=e.strstart-1])===s[++n]&&i===s[++n]&&i===s[++n]){a=e.strstart+Si;do{}while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<a);e.match_length=Si-(a-n),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(r=vi._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=vi._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(Oi(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(Oi(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Oi(e,!1),0===e.strm.avail_out)?1:2}(i,t):mi[i.level].func(i,t);if(3!==o&&4!==o||(i.status=Ci),1===o||3===o)return 0===e.avail_out&&(i.last_flush=-1),0;if(2===o&&(1===t?vi._tr_align(i):5!==t&&(vi._tr_stored_block(i,0,0,!1),3===t&&(Ti(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),Ii(e),0===e.avail_out))return i.last_flush=-1,0}return 4!==t?0:i.wrap<=0?1:(2===i.wrap?(Di(i,255&e.adler),Di(i,e.adler>>8&255),Di(i,e.adler>>16&255),Di(i,e.adler>>24&255),Di(i,255&e.total_in),Di(i,e.total_in>>8&255),Di(i,e.total_in>>16&255),Di(i,e.total_in>>24&255)):(Bi(i,e.adler>>>16),Bi(i,65535&e.adler)),Ii(e),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?0:1)},Cr.deflateEnd=function(e){var t;return e&&e.state?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&t!==Ei&&t!==Ai&&t!==Ci?zi(e,ki):(e.state=null,t===Ai?zi(e,-3):0):ki},Cr.deflateSetDictionary=function(e,t){var r,i,n,a,s,o,l,c,d=t.length;if(!e||!e.state)return ki;if(2===(a=(r=e.state).wrap)||1===a&&42!==r.status||r.lookahead)return ki;for(1===a&&(e.adler=yi(e.adler,t,d,0)),r.wrap=0,d>=r.w_size&&(0===a&&(Ti(r.head),r.strstart=0,r.block_start=0,r.insert=0),c=new bi.Buf8(r.w_size),bi.arraySet(c,t,d-r.w_size,r.w_size,0),t=c,d=r.w_size),s=e.avail_in,o=e.next_in,l=e.input,e.avail_in=d,e.next_in=0,e.input=t,Mi(r);r.lookahead>=3;){i=r.strstart,n=r.lookahead-2;do{r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+3-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++}while(--n);r.strstart=i,r.lookahead=2,Mi(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=2,r.match_available=0,e.next_in=o,e.input=l,e.avail_in=s,r.wrap=a,0},Cr.deflateInfo="pako deflate (from Nodeca project)";var qi={},Ki=Er,Yi=!0,Vi=!0;try{String.fromCharCode.apply(null,[0])}catch(e){Yi=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){Vi=!1}for(var Xi=new Ki.Buf8(256),Qi=0;Qi<256;Qi++)Xi[Qi]=Qi>=252?6:Qi>=248?5:Qi>=240?4:Qi>=224?3:Qi>=192?2:1;function Gi(e,t){if(t<65534&&(e.subarray&&Vi||!e.subarray&&Yi))return String.fromCharCode.apply(null,Ki.shrinkBuf(e,t));for(var r="",i=0;i<t;i++)r+=String.fromCharCode(e[i]);return r}Xi[254]=Xi[254]=1,qi.string2buf=function(e){var t,r,i,n,a,s=e.length,o=0;for(n=0;n<s;n++)55296==(64512&(r=e.charCodeAt(n)))&&n+1<s&&56320==(64512&(i=e.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Ki.Buf8(o),a=0,n=0;a<o;n++)55296==(64512&(r=e.charCodeAt(n)))&&n+1<s&&56320==(64512&(i=e.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|63&r):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|63&r):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|63&r);return t},qi.buf2binstring=function(e){return Gi(e,e.length)},qi.binstring2buf=function(e){for(var t=new Ki.Buf8(e.length),r=0,i=t.length;r<i;r++)t[r]=e.charCodeAt(r);return t},qi.buf2string=function(e,t){var r,i,n,a,s=t||e.length,o=new Array(2*s);for(i=0,r=0;r<s;)if((n=e[r++])<128)o[i++]=n;else if((a=Xi[n])>4)o[i++]=65533,r+=a-1;else{for(n&=2===a?31:3===a?15:7;a>1&&r<s;)n=n<<6|63&e[r++],a--;a>1?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return Gi(o,i)},qi.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0||0===r?t:r+Xi[e[r]]>t?r:t};var Ji=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},en=Cr,tn=Er,rn=qi,nn=_i,an=Ji,sn=Object.prototype.toString;function on(e){if(!(this instanceof on))return new on(e);this.options=tn.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new an,this.strm.avail_out=0;var r=en.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==r)throw new Error(nn[r]);if(t.header&&en.deflateSetHeader(this.strm,t.header),t.dictionary){var i;if(i="string"==typeof t.dictionary?rn.string2buf(t.dictionary):"[object ArrayBuffer]"===sn.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,0!==(r=en.deflateSetDictionary(this.strm,i)))throw new Error(nn[r]);this._dict_set=!0}}function ln(e,t){var r=new on(t);if(r.push(e,!0),r.err)throw r.msg||nn[r.err];return r.result}on.prototype.push=function(e,t){var r,i,n=this.strm,a=this.options.chunkSize;if(this.ended)return!1;i=t===~~t?t:!0===t?4:0,"string"==typeof e?n.input=rn.string2buf(e):"[object ArrayBuffer]"===sn.call(e)?n.input=new Uint8Array(e):n.input=e,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new tn.Buf8(a),n.next_out=0,n.avail_out=a),1!==(r=en.deflate(n,i))&&0!==r)return this.onEnd(r),this.ended=!0,!1;0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(rn.buf2binstring(tn.shrinkBuf(n.output,n.next_out))):this.onData(tn.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||0===n.avail_out)&&1!==r);return 4===i?(r=en.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r):2!==i||(this.onEnd(0),n.avail_out=0,!0)},on.prototype.onData=function(e){this.chunks.push(e)},on.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=tn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},Ar.Deflate=on,Ar.deflate=ln,Ar.deflateRaw=function(e,t){return(t=t||{}).raw=!0,ln(e,t)},Ar.gzip=function(e,t){return(t=t||{}).gzip=!0,ln(e,t)};var cn={},dn={},hn=Er,pn=15,un=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],fn=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],mn=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],gn=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],_n=Er,bn=ui,vn=gi,yn=function(e,t){var r,i,n,a,s,o,l,c,d,h,p,u,f,m,g,_,b,v,y,w,x,k,S,$,E;r=e.state,i=e.next_in,$=e.input,n=i+(e.avail_in-5),a=e.next_out,E=e.output,s=a-(t-e.avail_out),o=a+(e.avail_out-257),l=r.dmax,c=r.wsize,d=r.whave,h=r.wnext,p=r.window,u=r.hold,f=r.bits,m=r.lencode,g=r.distcode,_=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{f<15&&(u+=$[i++]<<f,f+=8,u+=$[i++]<<f,f+=8),v=m[u&_];t:for(;;){if(u>>>=y=v>>>24,f-=y,0===(y=v>>>16&255))E[a++]=65535&v;else{if(!(16&y)){if(64&y){if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}v=m[(65535&v)+(u&(1<<y)-1)];continue t}for(w=65535&v,(y&=15)&&(f<y&&(u+=$[i++]<<f,f+=8),w+=u&(1<<y)-1,u>>>=y,f-=y),f<15&&(u+=$[i++]<<f,f+=8,u+=$[i++]<<f,f+=8),v=g[u&b];;){if(u>>>=y=v>>>24,f-=y,16&(y=v>>>16&255)){if(x=65535&v,f<(y&=15)&&(u+=$[i++]<<f,(f+=8)<y&&(u+=$[i++]<<f,f+=8)),(x+=u&(1<<y)-1)>l){e.msg="invalid distance too far back",r.mode=30;break e}if(u>>>=y,f-=y,x>(y=a-s)){if((y=x-y)>d&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(k=0,S=p,0===h){if(k+=c-y,y<w){w-=y;do{E[a++]=p[k++]}while(--y);k=a-x,S=E}}else if(h<y){if(k+=c+h-y,(y-=h)<w){w-=y;do{E[a++]=p[k++]}while(--y);if(k=0,h<w){w-=y=h;do{E[a++]=p[k++]}while(--y);k=a-x,S=E}}}else if(k+=h-y,y<w){w-=y;do{E[a++]=p[k++]}while(--y);k=a-x,S=E}for(;w>2;)E[a++]=S[k++],E[a++]=S[k++],E[a++]=S[k++],w-=3;w&&(E[a++]=S[k++],w>1&&(E[a++]=S[k++]))}else{k=a-x;do{E[a++]=E[k++],E[a++]=E[k++],E[a++]=E[k++],w-=3}while(w>2);w&&(E[a++]=E[k++],w>1&&(E[a++]=E[k++]))}break}if(64&y){e.msg="invalid distance code",r.mode=30;break e}v=g[(65535&v)+(u&(1<<y)-1)]}}break}}while(i<n&&a<o);i-=w=f>>3,u&=(1<<(f-=w<<3))-1,e.next_in=i,e.next_out=a,e.avail_in=i<n?n-i+5:5-(i-n),e.avail_out=a<o?o-a+257:257-(a-o),r.hold=u,r.bits=f},wn=function(e,t,r,i,n,a,s,o){var l,c,d,h,p,u,f,m,g,_=o.bits,b=0,v=0,y=0,w=0,x=0,k=0,S=0,$=0,E=0,A=0,C=null,z=0,R=new hn.Buf16(16),T=new hn.Buf16(16),I=null,O=0;for(b=0;b<=pn;b++)R[b]=0;for(v=0;v<i;v++)R[t[r+v]]++;for(x=_,w=pn;w>=1&&0===R[w];w--);if(x>w&&(x=w),0===w)return n[a++]=20971520,n[a++]=20971520,o.bits=1,0;for(y=1;y<w&&0===R[y];y++);for(x<y&&(x=y),$=1,b=1;b<=pn;b++)if($<<=1,($-=R[b])<0)return-1;if($>0&&(0===e||1!==w))return-1;for(T[1]=0,b=1;b<pn;b++)T[b+1]=T[b]+R[b];for(v=0;v<i;v++)0!==t[r+v]&&(s[T[t[r+v]]++]=v);if(0===e?(C=I=s,u=19):1===e?(C=un,z-=257,I=fn,O-=257,u=256):(C=mn,I=gn,u=-1),A=0,v=0,b=y,p=a,k=x,S=0,d=-1,h=(E=1<<x)-1,1===e&&E>852||2===e&&E>592)return 1;for(;;){f=b-S,s[v]<u?(m=0,g=s[v]):s[v]>u?(m=I[O+s[v]],g=C[z+s[v]]):(m=96,g=0),l=1<<b-S,y=c=1<<k;do{n[p+(A>>S)+(c-=l)]=f<<24|m<<16|g}while(0!==c);for(l=1<<b-1;A&l;)l>>=1;if(0!==l?(A&=l-1,A+=l):A=0,v++,0===--R[b]){if(b===w)break;b=t[r+s[v]]}if(b>x&&(A&h)!==d){for(0===S&&(S=x),p+=y,$=1<<(k=b-S);k+S<w&&!(($-=R[k+S])<=0);)k++,$<<=1;if(E+=1<<k,1===e&&E>852||2===e&&E>592)return 1;n[d=A&h]=x<<24|k<<16|p-a}}return 0!==A&&(n[p+A]=b-S<<24|64<<16),o.bits=x,0},xn=-2,kn=12,Sn=30;function $n(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function En(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new _n.Buf16(320),this.work=new _n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function An(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new _n.Buf32(852),t.distcode=t.distdyn=new _n.Buf32(592),t.sane=1,t.back=-1,0):xn}function Cn(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,An(e)):xn}function zn(e,t){var r,i;return e&&e.state?(i=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?xn:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=r,i.wbits=t,Cn(e))):xn}function Rn(e,t){var r,i;return e?(i=new En,e.state=i,i.window=null,0!==(r=zn(e,t))&&(e.state=null),r):xn}var Tn,In,On=!0;function Dn(e){if(On){var t;for(Tn=new _n.Buf32(512),In=new _n.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(wn(1,e.lens,0,288,Tn,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;wn(2,e.lens,0,32,In,0,e.work,{bits:5}),On=!1}e.lencode=Tn,e.lenbits=9,e.distcode=In,e.distbits=5}function Bn(e,t,r,i){var n,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new _n.Buf8(a.wsize)),i>=a.wsize?(_n.arraySet(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):((n=a.wsize-a.wnext)>i&&(n=i),_n.arraySet(a.window,t,r-i,n,a.wnext),(i-=n)?(_n.arraySet(a.window,t,r-i,i,0),a.wnext=i,a.whave=a.wsize):(a.wnext+=n,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=n))),0}dn.inflateReset=Cn,dn.inflateReset2=zn,dn.inflateResetKeep=An,dn.inflateInit=function(e){return Rn(e,15)},dn.inflateInit2=Rn,dn.inflate=function(e,t){var r,i,n,a,s,o,l,c,d,h,p,u,f,m,g,_,b,v,y,w,x,k,S,$,E=0,A=new _n.Buf8(4),C=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return xn;(r=e.state).mode===kn&&(r.mode=13),s=e.next_out,n=e.output,l=e.avail_out,a=e.next_in,i=e.input,o=e.avail_in,c=r.hold,d=r.bits,h=o,p=l,k=0;e:for(;;)switch(r.mode){case 1:if(0===r.wrap){r.mode=13;break}for(;d<16;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(2&r.wrap&&35615===c){r.check=0,A[0]=255&c,A[1]=c>>>8&255,r.check=vn(r.check,A,2,0),c=0,d=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",r.mode=Sn;break}if(8!=(15&c)){e.msg="unknown compression method",r.mode=Sn;break}if(d-=4,x=8+(15&(c>>>=4)),0===r.wbits)r.wbits=x;else if(x>r.wbits){e.msg="invalid window size",r.mode=Sn;break}r.dmax=1<<x,e.adler=r.check=1,r.mode=512&c?10:kn,c=0,d=0;break;case 2:for(;d<16;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(r.flags=c,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=Sn;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=Sn;break}r.head&&(r.head.text=c>>8&1),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,r.check=vn(r.check,A,2,0)),c=0,d=0,r.mode=3;case 3:for(;d<32;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}r.head&&(r.head.time=c),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,A[2]=c>>>16&255,A[3]=c>>>24&255,r.check=vn(r.check,A,4,0)),c=0,d=0,r.mode=4;case 4:for(;d<16;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}r.head&&(r.head.xflags=255&c,r.head.os=c>>8),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,r.check=vn(r.check,A,2,0)),c=0,d=0,r.mode=5;case 5:if(1024&r.flags){for(;d<16;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}r.length=c,r.head&&(r.head.extra_len=c),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,r.check=vn(r.check,A,2,0)),c=0,d=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&((u=r.length)>o&&(u=o),u&&(r.head&&(x=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),_n.arraySet(r.head.extra,i,a,u,x)),512&r.flags&&(r.check=vn(r.check,i,u,a)),o-=u,a+=u,r.length-=u),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;u=0;do{x=i[a+u++],r.head&&x&&r.length<65536&&(r.head.name+=String.fromCharCode(x))}while(x&&u<o);if(512&r.flags&&(r.check=vn(r.check,i,u,a)),o-=u,a+=u,x)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;u=0;do{x=i[a+u++],r.head&&x&&r.length<65536&&(r.head.comment+=String.fromCharCode(x))}while(x&&u<o);if(512&r.flags&&(r.check=vn(r.check,i,u,a)),o-=u,a+=u,x)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;d<16;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(c!==(65535&r.check)){e.msg="header crc mismatch",r.mode=Sn;break}c=0,d=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=kn;break;case 10:for(;d<32;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}e.adler=r.check=$n(c),c=0,d=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=s,e.avail_out=l,e.next_in=a,e.avail_in=o,r.hold=c,r.bits=d,2;e.adler=r.check=1,r.mode=kn;case kn:if(5===t||6===t)break e;case 13:if(r.last){c>>>=7&d,d-=7&d,r.mode=27;break}for(;d<3;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}switch(r.last=1&c,d-=1,3&(c>>>=1)){case 0:r.mode=14;break;case 1:if(Dn(r),r.mode=20,6===t){c>>>=2,d-=2;break e}break;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=Sn}c>>>=2,d-=2;break;case 14:for(c>>>=7&d,d-=7&d;d<32;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Sn;break}if(r.length=65535&c,c=0,d=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(u=r.length){if(u>o&&(u=o),u>l&&(u=l),0===u)break e;_n.arraySet(n,i,a,u,s),o-=u,a+=u,l-=u,s+=u,r.length-=u;break}r.mode=kn;break;case 17:for(;d<14;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(r.nlen=257+(31&c),c>>>=5,d-=5,r.ndist=1+(31&c),c>>>=5,d-=5,r.ncode=4+(15&c),c>>>=4,d-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Sn;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;d<3;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}r.lens[C[r.have++]]=7&c,c>>>=3,d-=3}for(;r.have<19;)r.lens[C[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},k=wn(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,k){e.msg="invalid code lengths set",r.mode=Sn;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;_=(E=r.lencode[c&(1<<r.lenbits)-1])>>>16&255,b=65535&E,!((g=E>>>24)<=d);){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(b<16)c>>>=g,d-=g,r.lens[r.have++]=b;else{if(16===b){for($=g+2;d<$;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(c>>>=g,d-=g,0===r.have){e.msg="invalid bit length repeat",r.mode=Sn;break}x=r.lens[r.have-1],u=3+(3&c),c>>>=2,d-=2}else if(17===b){for($=g+3;d<$;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}d-=g,x=0,u=3+(7&(c>>>=g)),c>>>=3,d-=3}else{for($=g+7;d<$;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}d-=g,x=0,u=11+(127&(c>>>=g)),c>>>=7,d-=7}if(r.have+u>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Sn;break}for(;u--;)r.lens[r.have++]=x}}if(r.mode===Sn)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=Sn;break}if(r.lenbits=9,S={bits:r.lenbits},k=wn(1,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,k){e.msg="invalid literal/lengths set",r.mode=Sn;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},k=wn(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,k){e.msg="invalid distances set",r.mode=Sn;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(o>=6&&l>=258){e.next_out=s,e.avail_out=l,e.next_in=a,e.avail_in=o,r.hold=c,r.bits=d,yn(e,p),s=e.next_out,n=e.output,l=e.avail_out,a=e.next_in,i=e.input,o=e.avail_in,c=r.hold,d=r.bits,r.mode===kn&&(r.back=-1);break}for(r.back=0;_=(E=r.lencode[c&(1<<r.lenbits)-1])>>>16&255,b=65535&E,!((g=E>>>24)<=d);){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(_&&!(240&_)){for(v=g,y=_,w=b;_=(E=r.lencode[w+((c&(1<<v+y)-1)>>v)])>>>16&255,b=65535&E,!(v+(g=E>>>24)<=d);){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}c>>>=v,d-=v,r.back+=v}if(c>>>=g,d-=g,r.back+=g,r.length=b,0===_){r.mode=26;break}if(32&_){r.back=-1,r.mode=kn;break}if(64&_){e.msg="invalid literal/length code",r.mode=Sn;break}r.extra=15&_,r.mode=22;case 22:if(r.extra){for($=r.extra;d<$;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}r.length+=c&(1<<r.extra)-1,c>>>=r.extra,d-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;_=(E=r.distcode[c&(1<<r.distbits)-1])>>>16&255,b=65535&E,!((g=E>>>24)<=d);){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(!(240&_)){for(v=g,y=_,w=b;_=(E=r.distcode[w+((c&(1<<v+y)-1)>>v)])>>>16&255,b=65535&E,!(v+(g=E>>>24)<=d);){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}c>>>=v,d-=v,r.back+=v}if(c>>>=g,d-=g,r.back+=g,64&_){e.msg="invalid distance code",r.mode=Sn;break}r.offset=b,r.extra=15&_,r.mode=24;case 24:if(r.extra){for($=r.extra;d<$;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}r.offset+=c&(1<<r.extra)-1,c>>>=r.extra,d-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Sn;break}r.mode=25;case 25:if(0===l)break e;if(u=p-l,r.offset>u){if((u=r.offset-u)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Sn;break}u>r.wnext?(u-=r.wnext,f=r.wsize-u):f=r.wnext-u,u>r.length&&(u=r.length),m=r.window}else m=n,f=s-r.offset,u=r.length;u>l&&(u=l),l-=u,r.length-=u;do{n[s++]=m[f++]}while(--u);0===r.length&&(r.mode=21);break;case 26:if(0===l)break e;n[s++]=r.length,l--,r.mode=21;break;case 27:if(r.wrap){for(;d<32;){if(0===o)break e;o--,c|=i[a++]<<d,d+=8}if(p-=l,e.total_out+=p,r.total+=p,p&&(e.adler=r.check=r.flags?vn(r.check,n,p,s-p):bn(r.check,n,p,s-p)),p=l,(r.flags?c:$n(c))!==r.check){e.msg="incorrect data check",r.mode=Sn;break}c=0,d=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;d<32;){if(0===o)break e;o--,c+=i[a++]<<d,d+=8}if(c!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=Sn;break}c=0,d=0}r.mode=29;case 29:k=1;break e;case Sn:k=-3;break e;case 31:return-4;default:return xn}return e.next_out=s,e.avail_out=l,e.next_in=a,e.avail_in=o,r.hold=c,r.bits=d,(r.wsize||p!==e.avail_out&&r.mode<Sn&&(r.mode<27||4!==t))&&Bn(e,e.output,e.next_out,p-e.avail_out),h-=e.avail_in,p-=e.avail_out,e.total_in+=h,e.total_out+=p,r.total+=p,r.wrap&&p&&(e.adler=r.check=r.flags?vn(r.check,n,p,e.next_out-p):bn(r.check,n,p,e.next_out-p)),e.data_type=r.bits+(r.last?64:0)+(r.mode===kn?128:0)+(20===r.mode||15===r.mode?256:0),(0===h&&0===p||4===t)&&0===k&&(k=-5),k},dn.inflateEnd=function(e){if(!e||!e.state)return xn;var t=e.state;return t.window&&(t.window=null),e.state=null,0},dn.inflateGetHeader=function(e,t){var r;return e&&e.state&&2&(r=e.state).wrap?(r.head=t,t.done=!1,0):xn},dn.inflateSetDictionary=function(e,t){var r,i=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?xn:11===r.mode&&bn(1,t,i,0)!==r.check?-3:Bn(e,t,i,i)?(r.mode=31,-4):(r.havedict=1,0):xn},dn.inflateInfo="pako inflate (from Nodeca project)";var Pn={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var Fn=dn,Mn=Er,Nn=qi,jn=Pn,Ln=_i,Un=Ji,Wn=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},Hn=Object.prototype.toString;function Zn(e){if(!(this instanceof Zn))return new Zn(e);this.options=Mn.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(15&t.windowBits||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Un,this.strm.avail_out=0;var r=Fn.inflateInit2(this.strm,t.windowBits);if(r!==jn.Z_OK)throw new Error(Ln[r]);if(this.header=new Wn,Fn.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=Nn.string2buf(t.dictionary):"[object ArrayBuffer]"===Hn.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=Fn.inflateSetDictionary(this.strm,t.dictionary))!==jn.Z_OK))throw new Error(Ln[r])}function qn(e,t){var r=new Zn(t);if(r.push(e,!0),r.err)throw r.msg||Ln[r.err];return r.result}Zn.prototype.push=function(e,t){var r,i,n,a,s,o=this.strm,l=this.options.chunkSize,c=this.options.dictionary,d=!1;if(this.ended)return!1;i=t===~~t?t:!0===t?jn.Z_FINISH:jn.Z_NO_FLUSH,"string"==typeof e?o.input=Nn.binstring2buf(e):"[object ArrayBuffer]"===Hn.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new Mn.Buf8(l),o.next_out=0,o.avail_out=l),(r=Fn.inflate(o,jn.Z_NO_FLUSH))===jn.Z_NEED_DICT&&c&&(r=Fn.inflateSetDictionary(this.strm,c)),r===jn.Z_BUF_ERROR&&!0===d&&(r=jn.Z_OK,d=!1),r!==jn.Z_STREAM_END&&r!==jn.Z_OK)return this.onEnd(r),this.ended=!0,!1;o.next_out&&(0!==o.avail_out&&r!==jn.Z_STREAM_END&&(0!==o.avail_in||i!==jn.Z_FINISH&&i!==jn.Z_SYNC_FLUSH)||("string"===this.options.to?(n=Nn.utf8border(o.output,o.next_out),a=o.next_out-n,s=Nn.buf2string(o.output,n),o.next_out=a,o.avail_out=l-a,a&&Mn.arraySet(o.output,o.output,n,a,0),this.onData(s)):this.onData(Mn.shrinkBuf(o.output,o.next_out)))),0===o.avail_in&&0===o.avail_out&&(d=!0)}while((o.avail_in>0||0===o.avail_out)&&r!==jn.Z_STREAM_END);return r===jn.Z_STREAM_END&&(i=jn.Z_FINISH),i===jn.Z_FINISH?(r=Fn.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===jn.Z_OK):i!==jn.Z_SYNC_FLUSH||(this.onEnd(jn.Z_OK),o.avail_out=0,!0)},Zn.prototype.onData=function(e){this.chunks.push(e)},Zn.prototype.onEnd=function(e){e===jn.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Mn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},cn.Inflate=Zn,cn.inflate=qn,cn.inflateRaw=function(e,t){return(t=t||{}).raw=!0,qn(e,t)},cn.ungzip=qn;var Kn={};(0,Er.assign)(Kn,Ar,cn,Pn);var Yn="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,Vn=Kn,Xn=Ct(),Qn=Rt,Gn=Yn?"uint8array":"array";function Jn(e,t){Qn.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}$r.magic="\b\0",Xn.inherits(Jn,Qn),Jn.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(Xn.transformTo(Gn,e.data),!1)},Jn.prototype.flush=function(){Qn.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},Jn.prototype.cleanUp=function(){Qn.prototype.cleanUp.call(this),this._pako=null},Jn.prototype._createPako=function(){this._pako=new Vn[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},$r.compressWorker=function(e){return new Jn("Deflate",e)},$r.uncompressWorker=function(){return new Jn("Inflate",{})};var ea=Rt;Sr.STORE={magic:"\0\0",compressWorker:function(){return new ea("STORE compression")},uncompressWorker:function(){return new ea("STORE decompression")}},Sr.DEFLATE=$r;var ta={LOCAL_FILE_HEADER:"PK",CENTRAL_FILE_HEADER:"PK",CENTRAL_DIRECTORY_END:"PK",ZIP64_CENTRAL_DIRECTORY_LOCATOR:"PK",ZIP64_CENTRAL_DIRECTORY_END:"PK",DATA_DESCRIPTOR:"PK\b"},ra=Ct(),ia=Rt,na=xe,aa=Jt,sa=ta,oa=function(e,t){var r,i="";for(r=0;r<t;r++)i+=String.fromCharCode(255&e),e>>>=8;return i},la=function(e,t,r,i,n,a){var s,o,l=e.file,c=e.compression,d=a!==na.utf8encode,h=ra.transformTo("string",a(l.name)),p=ra.transformTo("string",na.utf8encode(l.name)),u=l.comment,f=ra.transformTo("string",a(u)),m=ra.transformTo("string",na.utf8encode(u)),g=p.length!==l.name.length,_=m.length!==u.length,b="",v="",y="",w=l.dir,x=l.date,k={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(k.crc32=e.crc32,k.compressedSize=e.compressedSize,k.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),d||!g&&!_||(S|=2048);var $,E,A,C=0,z=0;w&&(C|=16),"UNIX"===n?(z=798,C|=($=l.unixPermissions,E=w,A=$,$||(A=E?16893:33204),(65535&A)<<16)):(z=20,C|=63&(l.dosPermissions||0)),s=x.getUTCHours(),s<<=6,s|=x.getUTCMinutes(),s<<=5,s|=x.getUTCSeconds()/2,o=x.getUTCFullYear()-1980,o<<=4,o|=x.getUTCMonth()+1,o<<=5,o|=x.getUTCDate(),g&&(v=oa(1,1)+oa(aa(h),4)+p,b+="up"+oa(v.length,2)+v),_&&(y=oa(1,1)+oa(aa(f),4)+m,b+="uc"+oa(y.length,2)+y);var R="";return R+="\n\0",R+=oa(S,2),R+=c.magic,R+=oa(s,2),R+=oa(o,2),R+=oa(k.crc32,4),R+=oa(k.compressedSize,4),R+=oa(k.uncompressedSize,4),R+=oa(h.length,2),R+=oa(b.length,2),{fileRecord:sa.LOCAL_FILE_HEADER+R+h+b,dirRecord:sa.CENTRAL_FILE_HEADER+oa(z,2)+R+oa(f.length,2)+"\0\0\0\0"+oa(C,4)+oa(i,4)+h+b+f}},ca=function(e){return sa.DATA_DESCRIPTOR+oa(e.crc32,4)+oa(e.compressedSize,4)+oa(e.uncompressedSize,4)};function da(e,t,r,i){ia.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}ra.inherits(da,ia),da.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,ia.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-i-1))/r:100}}))},da.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=la(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},da.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=la(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:ca(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},da.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,i=function(e,t,r,i,n){var a=ra.transformTo("string",n(i));return sa.CENTRAL_DIRECTORY_END+"\0\0\0\0"+oa(e,2)+oa(e,2)+oa(t,4)+oa(r,4)+oa(a.length,2)+a}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},da.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},da.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},da.prototype.resume=function(){return!!ia.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},da.prototype.error=function(e){var t=this._sources;if(!ia.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},da.prototype.lock=function(){ia.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()};var ha=Sr,pa=da;kr.generateWorker=function(e,t,r){var i=new pa(t.streamFiles,r,t.platform,t.encodeFileName),n=0;try{e.forEach(function(e,r){n++;var a=function(e,t){var r=e||t,i=ha[r];if(!i)throw new Error(r+" is not a valid compression method !");return i}(r.options.compression,t.compression),s=r.options.compressionOptions||t.compressionOptions||{},o=r.dir,l=r.date;r._compressWorker(a,s).withStreamInfo("file",{name:e,dir:o,date:l,comment:r.comment||"",unixPermissions:r.unixPermissions,dosPermissions:r.dosPermissions}).pipe(i)}),i.entriesCount=n}catch(e){i.error(e)}return i};var ua=Ct(),fa=Rt;function ma(e,t){fa.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}ua.inherits(ma,fa),ma.prototype._bindStream=function(e){var t=this;this._stream=e,e.pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},ma.prototype.pause=function(){return!!fa.prototype.pause.call(this)&&(this._stream.pause(),!0)},ma.prototype.resume=function(){return!!fa.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)};var ga=ma,_a=xe,ba=Ct(),va=Rt,ya=Zt,wa=qt,xa=pr,ka=xr,Sa=kr,$a=St,Ea=ga,Aa=function(e,t,r){var i,n=ba.getTypeOf(t),a=ba.extend(r||{},wa);a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),"string"==typeof a.unixPermissions&&(a.unixPermissions=parseInt(a.unixPermissions,8)),a.unixPermissions&&16384&a.unixPermissions&&(a.dir=!0),a.dosPermissions&&16&a.dosPermissions&&(a.dir=!0),a.dir&&(e=za(e)),a.createFolders&&(i=Ca(e))&&Ra.call(this,i,!0);var s="string"===n&&!1===a.binary&&!1===a.base64;r&&void 0!==r.binary||(a.binary=!s),(t instanceof xa&&0===t.uncompressedSize||a.dir||!t||0===t.length)&&(a.base64=!1,a.binary=!0,t="",a.compression="STORE",n="string");var o=null;o=t instanceof xa||t instanceof va?t:$a.isNode&&$a.isStream(t)?new Ea(e,t):ba.prepareContent(e,t,a.binary,a.optimizedBinaryString,a.base64);var l=new ka(e,o,a);this.files[e]=l},Ca=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return t>0?e.substring(0,t):""},za=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},Ra=function(e,t){return t=void 0!==t?t:wa.createFolders,e=za(e),this.files[e]||Aa.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function Ta(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var Ia={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,i;for(t in this.files)i=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,i)},filter:function(e){var t=[];return this.forEach(function(r,i){e(r,i)&&t.push(i)}),t},file:function(e,t,r){if(1===arguments.length){if(Ta(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var n=this.files[this.root+e];return n&&!n.dir?n:null}return e=this.root+e,Aa.call(this,e,t,r),this},folder:function(e){if(!e)return this;if(Ta(e))return this.filter(function(t,r){return r.dir&&e.test(t)});var t=this.root+e,r=Ra.call(this,t),i=this.clone();return i.root=r.name,i},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var r=this.filter(function(t,r){return r.name.slice(0,e.length)===e}),i=0;i<r.length;i++)delete this.files[r[i].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=ba.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:_a.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");ba.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";t=Sa.generateWorker(this,r,i)}catch(e){(t=new va("error")).error(e)}return new ya(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}},Oa=Ia,Da=Ct();function Ba(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}Ba.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return Da.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}};var Pa=Ba,Fa=Pa;function Ma(e){Fa.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}Ct().inherits(Ma,Fa),Ma.prototype.byteAt=function(e){return this.data[this.zero+e]},Ma.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2),n=e.charCodeAt(3),a=this.length-4;a>=0;--a)if(this.data[a]===t&&this.data[a+1]===r&&this.data[a+2]===i&&this.data[a+3]===n)return a-this.zero;return-1},Ma.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2),n=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&r===a[1]&&i===a[2]&&n===a[3]},Ma.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Na=Ma,ja=Pa;function La(e){ja.call(this,e)}Ct().inherits(La,ja),La.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},La.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},La.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},La.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Ua=La,Wa=Na;function Ha(e){Wa.call(this,e)}Ct().inherits(Ha,Wa),Ha.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Za=Ha,qa=Za;function Ka(e){qa.call(this,e)}Ct().inherits(Ka,qa),Ka.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};var Ya=Ka,Va=Ct(),Xa=Se,Qa=Na,Ga=Ua,Ja=Ya,es=Za,ts=function(e){var t=Va.getTypeOf(e);return Va.checkSupport(t),"string"!==t||Xa.uint8array?"nodebuffer"===t?new Ja(e):Xa.uint8array?new es(Va.transformTo("uint8array",e)):new Qa(Va.transformTo("array",e)):new Ga(e)},rs=ts,is=Ct(),ns=pr,as=Jt,ss=xe,os=Sr,ls=Se;function cs(e,t){this.options=e,this.loadOptions=t}cs.prototype={isEncrypted:function(){return!(1&~this.bitFlag)},useUTF8:function(){return!(2048&~this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in os)if(Object.prototype.hasOwnProperty.call(os,t)&&os[t].magic===e)return os[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+is.pretty(this.compressionMethod)+" unknown (inner file : "+is.transformTo("string",this.fileName)+")");this.decompressed=new ns(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0===e&&(this.dosPermissions=63&this.externalFileAttributes),3===e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=rs(this.extraFields[1].value);this.uncompressedSize===is.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===is.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===is.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===is.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,i,n=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<n;)t=e.readInt(2),r=e.readInt(2),i=e.readData(r),this.extraFields[t]={id:t,length:r,value:i};e.setIndex(n)},handleUTF8:function(){var e=ls.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=ss.utf8decode(this.fileName),this.fileCommentStr=ss.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=is.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var n=is.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=rs(e.value);return 1!==t.readInt(1)||as(this.fileName)!==t.readInt(4)?null:ss.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=rs(e.value);return 1!==t.readInt(1)||as(this.fileComment)!==t.readInt(4)?null:ss.utf8decode(t.readData(e.length-5))}return null}};var ds=cs,hs=ts,ps=Ct(),us=ta,fs=ds,ms=Se;function gs(e){this.files=[],this.loadOptions=e}gs.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+ps.pretty(t)+", expected "+ps.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var i=this.reader.readString(4)===t;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=ms.uint8array?"uint8array":"array",r=ps.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,i=this.zip64EndOfCentralSize-44;0<i;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(us.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(us.CENTRAL_FILE_HEADER);)(e=new fs({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(us.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,us.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(us.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===ps.MAX_VALUE_16BITS||this.diskWithCentralDirStart===ps.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===ps.MAX_VALUE_16BITS||this.centralDirRecords===ps.MAX_VALUE_16BITS||this.centralDirSize===ps.MAX_VALUE_32BITS||this.centralDirOffset===ps.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(us.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(us.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,us.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(us.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(us.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=t-r;if(i>0)this.isSignature(t,us.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(e){this.reader=hs(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}};var _s=gs,bs=Ct(),vs=At,ys=xe,ws=_s,xs=ir,ks=St;function Ss(e){return new vs.Promise(function(t,r){var i=e.decompressed.getContentWorker().pipe(new xs);i.on("error",function(e){r(e)}).on("end",function(){i.streamInfo.crc32!==e.decompressed.crc32?r(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}function $s(){if(!(this instanceof $s))return new $s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new $s;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}$s.prototype=Oa,$s.prototype.loadAsync=function(e,t){var r=this;return t=bs.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:ys.utf8decode}),ks.isNode&&ks.isStream(e)?vs.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):bs.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var r=new ws(t);return r.load(e),r}).then(function(e){var r=[vs.Promise.resolve(e)],i=e.files;if(t.checkCRC32)for(var n=0;n<i.length;n++)r.push(Ss(i[n]));return vs.Promise.all(r)}).then(function(e){for(var i=e.shift(),n=i.files,a=0;a<n.length;a++){var s=n[a],o=s.fileNameStr,l=bs.resolve(s.fileNameStr);r.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(r.file(l).unsafeOriginalName=o)}return i.zipComment.length&&(r.comment=i.zipComment),r})},$s.support=Se,$s.defaults=qt,$s.version="3.10.1",$s.loadAsync=function(e,t){return(new $s).loadAsync(e,t)},$s.external=At;var Es=ge($s);class As extends de{static properties={api:{type:Object},_mode:{type:String},_url:{type:String},_scraping:{type:Boolean},_scrapeError:{type:String},_form:{type:Object},_saving:{type:Boolean},_ingredientInput:{type:String},_importFile:{type:Object},_importing:{type:Boolean},_importResult:{type:Object},_importError:{type:String},_importDownloadImages:{type:Boolean}};constructor(){super(),this.api=null,this._mode="url",this._url="",this._scraping=!1,this._scrapeError=null,this._saving=!1,this._ingredientInput="",this._form=this._emptyForm(),this._importFile=null,this._importing=!1,this._importResult=null,this._importError=null,this._importDownloadImages=!0}_emptyForm(){return{name:"",description:"",source_url:"",servings:4,prep_time:"",cook_time:"",tags:"",notes:"",image_url:"",ingredients:[],instructions:[]}}_close(){this.dispatchEvent(new CustomEvent("rm-close",{bubbles:!0,composed:!0}))}async _handleScrape(){if(this._url.trim()&&!this._scraping){this._scraping=!0,this._scrapeError=null;try{const e=await this.api.scrapeRecipe(this._url.trim());if(e?.recipe){const t=e.recipe;this._form={name:t.name||"",description:t.description||"",source_url:t.source_url||this._url.trim(),servings:t.servings||4,prep_time:t.prep_time||"",cook_time:t.cook_time||"",tags:(t.tags||[]).join(", "),notes:t.notes||"",image_url:t.image_url||"",ingredients:t.ingredients||[],instructions:t.instructions||[]},this._mode="manual"}else this._scrapeError=e?.error||"Could not extract recipe from this URL."}catch(e){this._scrapeError=e.message||"Scraping failed."}finally{this._scraping=!1}}}_handleImportFileChange(e){this._importFile=e.target.files[0]||null,this._importResult=null,this._importError=null}async _handleImport(){if(this._importFile&&!this._importing){this._importing=!0,this._importResult=null,this._importError=null;try{let e;try{e=await Es.loadAsync(this._importFile)}catch(e){throw new Error(`Could not open ZIP file: ${e.message}`)}const t=Object.values(e.files).find(e=>!e.dir&&e.name.endsWith(".html"));if(!t)throw new Error("No HTML file found inside the ZIP — is this a valid Recipe Keeper export?");const r=await t.async("text");console.log(`[Recipe Keeper Import] HTML extracted (${r.length} chars), sending to backend`);const i=await this.api.importRecipeKeeper(r);console.log(`[Recipe Keeper Import] Phase 1 done: ${i.imported} imported, ${i.failed} failed, ${i.recipe_images?.length??0} need images`);let n=0,a=0;if(this._importDownloadImages&&i.recipe_images?.length){const t=new Set([".jpg",".jpeg",".png",".webp",".gif",".bmp"]);for(const{recipe_id:r,image_filename:s}of i.recipe_images){const i=e.files[s]??Object.values(e.files).find(e=>{const r=s.split("/").pop();return!e.dir&&e.name.split("/").pop()===r&&t.has(e.name.slice(e.name.lastIndexOf(".")).toLowerCase())});if(i)try{const e=await i.async("base64");await this.api.uploadRecipeImage(r,e),n++}catch(e){console.warn(`[Recipe Keeper Import] Could not save image for recipe ${r}:`,e),a++}}console.log(`[Recipe Keeper Import] Phase 2 done: ${n} images saved, ${a} failed`)}this._importResult={...i,imagesSaved:n},i.imported>0&&this.dispatchEvent(new CustomEvent("rm-import-done",{bubbles:!0,composed:!0}))}catch(e){console.error("[Recipe Keeper Import] Failed:",e),this._importError=e.message||String(e)||"Import failed."}finally{this._importing=!1}}}async _handleSave(){if(this._form.name.trim()&&!this._saving){this._saving=!0;try{const e={...this._form,servings:parseInt(this._form.servings)||4,prep_time:parseInt(this._form.prep_time)||null,cook_time:parseInt(this._form.cook_time)||null,tags:this._form.tags?this._form.tags.split(",").map(e=>e.trim()).filter(Boolean):[]};this.dispatchEvent(new CustomEvent("rm-add-recipe",{detail:{data:e},bubbles:!0,composed:!0}))}finally{this._saving=!1}}}_setField(e,t){this._form={...this._form,[e]:t}}_addIngredient(){const e=this._ingredientInput.trim();if(!e)return;const t=e.split(/\s+/);let r="",i="",n="";t.length>=3&&!isNaN(parseFloat(t[0]))?(r=t[0],i=t[1],n=t.slice(2).join(" ")):2!==t.length||isNaN(parseFloat(t[0]))?n=e:(r=t[0],n=t[1]),this._form={...this._form,ingredients:[...this._form.ingredients,{amount:r,unit:i,name:n}]},this._ingredientInput=""}_removeIngredient(e){const t=this._form.ingredients.filter((t,r)=>r!==e);this._form={...this._form,ingredients:t}}_addStep(e){e.trim()&&(this._form={...this._form,instructions:[...this._form.instructions,e.trim()]})}_removeStep(e){const t=this._form.instructions.filter((t,r)=>r!==e);this._form={...this._form,instructions:t}}render(){return q`
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
        </div>
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
    `}_renderManualMode(){const e=this._form;return q`
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
          ${e.ingredients.length?q`
            <ul class="ing-list">
              ${e.ingredients.map((e,t)=>q`
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
          ${e.instructions.length?q`
            <ol class="steps-edit">
              ${e.instructions.map((e,t)=>q`
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
    `}static styles=c`
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
  `}customElements.define("rm-add-recipe-dialog",As);const Cs=["breakfast","lunch","dinner","snack"],zs=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];class Rs extends de{static properties={api:{type:Object},recipes:{type:Array},_weekStart:{type:String},_plan:{type:Array},_loading:{type:Boolean},_showPicker:{type:Boolean},_pickerTarget:{type:Object},_pickerSearch:{type:String},_pickerServings:{type:Number}};constructor(){super(),this.api=null,this.recipes=[],this._plan=[],this._loading=!1,this._showPicker=!1,this._pickerTarget=null,this._pickerSearch="",this._pickerServings=2,this._weekStart=this._getMondayISO(new Date)}updated(e){(e.has("api")||e.has("_weekStart"))&&this.api&&this._loadPlan()}_getMondayISO(e){const t=new Date(e),r=t.getDay(),i=0===r?-6:1-r;return t.setDate(t.getDate()+i),t.toISOString().split("T")[0]}_addDays(e,t){const r=new Date(e+"T00:00:00");return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}_formatDisplayDate(e){return new Date(e+"T00:00:00").getDate().toString()}_formatMonthYear(e){return new Date(e+"T00:00:00").toLocaleDateString("en-GB",{month:"long",year:"numeric"})}_prevWeek(){this._weekStart=this._addDays(this._weekStart,-7)}_nextWeek(){this._weekStart=this._addDays(this._weekStart,7)}_isCurrentWeek(){return this._weekStart===this._getMondayISO(new Date)}async _loadPlan(){this._loading=!0;try{const e=await this.api.getMealPlan(this._weekStart);this._plan=e?.entries??[]}catch(e){this._plan=[]}finally{this._loading=!1}}_getEntriesForSlot(e,t){return this._plan.filter(r=>r.date===e&&r.meal_type===t)}_openPicker(e,t){this._pickerTarget={date:e,mealType:t},this._pickerSearch="",this._pickerServings=2,this._showPicker=!0}async _handlePickRecipe(e){this._pickerTarget&&(await this.api.addToMealPlan(e.id,this._pickerTarget.date,this._pickerTarget.mealType,this._pickerServings),this._showPicker=!1,await this._loadPlan())}async _handleRemoveEntry(e){await this.api.removeFromMealPlan(e),await this._loadPlan()}async _handleClearWeek(){await this.api.clearMealPlanWeek(this._weekStart),await this._loadPlan()}_openRecipeDetail(e){const t=this.recipes.find(t=>t.id===e.recipe_id);t&&this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:t},bubbles:!0,composed:!0}))}get _pickerFiltered(){const e=this._pickerSearch.trim().toLowerCase();return e?this.recipes.filter(t=>t.name?.toLowerCase().includes(e)||t.tags?.some(t=>t.toLowerCase().includes(e))):this.recipes}render(){const e=Array.from({length:7},(e,t)=>this._addDays(this._weekStart,t)),t=(new Date).toISOString().split("T")[0];return q`
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
          ${e.map((e,r)=>q`
            <div class="day-header ${e===t?"today":""}">
              <span class="day-name">${zs[r]}</span>
              <span class="day-num">${this._formatDisplayDate(e)}</span>
            </div>
          `)}
        </div>

        <!-- Plan grid scroll -->
        <div class="plan-scroll">
          ${this._loading?q`
            <div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>
          `:q`
            ${Cs.map(r=>q`
              <div class="meal-row">
                <div class="meal-label">${r.charAt(0).toUpperCase()+r.slice(1)}</div>
                <div class="meal-cells">
                  ${e.map(e=>{const i=this._getEntriesForSlot(e,r);return q`
                      <div class="meal-cell ${e===t?"today":""}">
                        ${i.map(e=>{const t=this.recipes.find(t=>t.id===e.recipe_id);return q`
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
  `}customElements.define("rm-meal-planner",Rs);class Ts extends de{static properties={hass:{type:Object},_config:{type:Object},_view:{type:String},_recipes:{type:Array},_tags:{type:Array},_selectedRecipe:{type:Object},_loading:{type:Boolean},_error:{type:String},_searchQuery:{type:String},_activeTag:{type:String},_showAddDialog:{type:Boolean},_shoppingLists:{type:Array}};constructor(){super(),this._view="grid",this._recipes=[],this._tags=[],this._selectedRecipe=null,this._loading=!1,this._error=null,this._searchQuery="",this._activeTag=null,this._showAddDialog=!1,this._shoppingLists=[],this._unsubscribe=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("recipe-manager-card-editor")}static getStubConfig(){return{}}getCardSize(){return 6}updated(e){e.has("hass")&&this.hass&&!this._api&&(this._api=new pe(this.hass),this._init()),e.has("hass")&&this._api&&(this._api.hass=this.hass)}async _init(){this._loading=!0;try{await Promise.all([this._loadRecipes(),this._loadTags(),this._loadShoppingLists()]),await this._subscribe()}catch(e){this._error=e.message||"Failed to load recipes"}finally{this._loading=!1}}async _loadRecipes(){const e=await this._api.getAllRecipes();this._recipes=e?.recipes??[]}async _loadTags(){const e=await this._api.getTags();this._tags=e?.tags??[]}async _loadShoppingLists(){try{const e=await this._api.getShoppingLists();this._shoppingLists=e?.lists??[]}catch{this._shoppingLists=[]}}async _subscribe(){if(!this._unsubscribe)try{this._unsubscribe=await this._api.subscribe(e=>{"recipe_added"!==e.event&&"recipe_updated"!==e.event&&"recipe_deleted"!==e.event||(this._loadRecipes(),this._loadTags())})}catch{}}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null)}get _filteredRecipes(){let e=this._recipes;if(this._activeTag&&(e=e.filter(e=>e.tags?.includes(this._activeTag))),this._searchQuery.trim()){const t=this._searchQuery.trim().toLowerCase();e=e.filter(e=>e.name?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tags?.some(e=>e.toLowerCase().includes(t)))}return e}_handleSearch(e){this._searchQuery=e.detail?.query??""}_handleTagFilter(e){const t=e.detail?.tag;this._activeTag=this._activeTag===t?null:t}_handleOpenRecipe(e){this._selectedRecipe=e.detail?.recipe,this._view="detail"}_handleBack(){this._view="grid",this._selectedRecipe=null}_handleShowPlanner(){this._view="planner"}_handleShowGrid(){this._view="grid",this._selectedRecipe=null}async _handleToggleFavourite(e){const{recipeId:t}=e.detail;await this._api.toggleFavourite(t),await this._loadRecipes(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??this._selectedRecipe)}async _handleDeleteRecipe(e){const{recipeId:t}=e.detail;await this._api.deleteRecipe(t),await this._loadRecipes(),await this._loadTags(),this._view="grid",this._selectedRecipe=null}async _handleUpdateRecipe(e){const{recipeId:t,data:r}=e.detail;await this._api.updateRecipe(t,r),await this._loadRecipes(),await this._loadTags(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??null)}async _handleAddRecipe(e){const{data:t}=e.detail;await this._api.addRecipe(t),this._showAddDialog=!1,await this._loadRecipes(),await this._loadTags()}async _handleImportDone(){await this._loadRecipes(),await this._loadTags()}async _handleAddToShopping(e){const{ingredients:t,listId:r}=e.detail;try{const e=(await this._api.addIngredientsToShoppingList(r,t)).filter(e=>!e.success);e.length&&console.warn("Some ingredients failed to add:",e)}catch(e){console.error("Failed to add ingredients to shopping list:",e)}}render(){return q`
      <ha-card class="rm-card">
        <div class="rm-header">
          <div class="rm-header-left">
            ${"grid"!==this._view?q`
              <button class="icon-btn" @click=${this._handleShowGrid} title="Back to recipes">
                <ha-icon icon="mdi:arrow-left"></ha-icon>
              </button>
            `:q`
              <ha-icon icon="mdi:chef-hat" class="rm-logo"></ha-icon>
            `}
            <span class="rm-title">
              ${"detail"===this._view&&this._selectedRecipe?this._selectedRecipe.name:"planner"===this._view?"Meal Planner":"Recipes"}
            </span>
          </div>
          <div class="rm-header-right">
            ${"grid"===this._view?q`
              <button class="icon-btn" @click=${()=>{this._showAddDialog=!0}} title="Add recipe">
                <ha-icon icon="mdi:plus"></ha-icon>
              </button>
              <button class="icon-btn ${"planner"===this._view?"active":""}" @click=${this._handleShowPlanner} title="Meal planner">
                <ha-icon icon="mdi:calendar-week"></ha-icon>
              </button>
            `:"planner"===this._view?q`
              <button class="icon-btn" @click=${this._handleShowGrid} title="Back to recipes">
                <ha-icon icon="mdi:view-grid"></ha-icon>
              </button>
            `:""}
          </div>
        </div>

        <div class="rm-body">
          ${this._loading?q`
            <div class="rm-loading">
              <ha-circular-progress active size="large"></ha-circular-progress>
            </div>
          `:this._error?q`
            <div class="rm-error">
              <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
              <p>${this._error}</p>
              <button class="text-btn" @click=${this._init.bind(this)}>Retry</button>
            </div>
          `:"grid"===this._view?q`
            <rm-recipe-grid
              .recipes=${this._filteredRecipes}
              .allRecipes=${this._recipes}
              .tags=${this._tags}
              .searchQuery=${this._searchQuery}
              .activeTag=${this._activeTag}
              @rm-search=${this._handleSearch}
              @rm-tag-filter=${this._handleTagFilter}
              @rm-open-recipe=${this._handleOpenRecipe}
              @rm-toggle-favourite=${this._handleToggleFavourite}
            ></rm-recipe-grid>
          `:"detail"===this._view?q`
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
          `:"planner"===this._view?q`
            <rm-meal-planner
              .api=${this._api}
              .recipes=${this._recipes}
              @rm-open-recipe=${this._handleOpenRecipe}
            ></rm-meal-planner>
          `:""}
        </div>

        ${this._showAddDialog?q`
          <rm-add-recipe-dialog
            .api=${this._api}
            @rm-add-recipe=${this._handleAddRecipe}
            @rm-import-done=${this._handleImportDone}
            @rm-close=${()=>{this._showAddDialog=!1}}
          ></rm-add-recipe-dialog>
        `:""}
      </ha-card>
    `}static styles=c`
    :host {
      display: block;
      --rm-bg: var(--card-background-color, #1c1c1e);
      --rm-surface: var(--secondary-background-color, #2c2c2e);
      --rm-text: var(--primary-text-color, #e5e5ea);
      --rm-text-secondary: var(--secondary-text-color, #8e8e93);
      --rm-accent: var(--primary-color, #ff6b35);
      --rm-accent-soft: rgba(255, 107, 53, 0.15);
      --rm-border: rgba(255,255,255,0.08);
      --rm-radius: 12px;
      --rm-radius-sm: 8px;
      --rm-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    ha-card.rm-card {
      background: var(--rm-bg);
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
      background: var(--rm-surface);
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
  `}customElements.define("recipe-manager-card",Ts),window.customCards=window.customCards||[],window.customCards.push({type:"recipe-manager-card",name:"Recipe Manager",description:"Manage, browse, and plan meals with your recipe collection.",preview:!1});
