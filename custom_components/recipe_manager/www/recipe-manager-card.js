import{c as e,i as t,m as i,s as r,b as a,a as s,A as n,E as o}from"./chunks/runtime-CL7dNL-L.js";const c=/^[½¼¾⅓⅔⅛⅜⅝⅞\d][\d.,/½¼¾⅓⅔⅛⅜⅝⅞\s]*\s*(?:tsp|tbsp|tablespoons?|teaspoons?|cups?|oz|lbs?|g|kg|ml|cl|dl|L|(?:milli|centi|deci)?lit(?:re|er)s?|kilo(?:gramme|gram)s?|(?:gramme|gram)s?|pints?|quarts?|gallons?|fl\.?\s*oz|cans?|bunches?|heads?|cloves?|slices?|pieces?|sheets?|pinch(?:es)?|dash(?:es)?|handfuls?|sprigs?|stalks?)\s*/i;function l(e){if(e.amount||e.unit)return e.name;return e.name.replace(c,"").trim()||e.name}function d(e,t,i){return`[RM] ${e} — ${function(e,t){return e.amount||e.unit?[e.amount,e.unit,t].filter(Boolean).join(" "):e.name}(t,i)}`}function p(e){if(!e)return 1;const t={"½":.5,"¼":.25,"¾":.75,"⅓":1/3,"⅔":2/3,"⅛":.125,"⅜":.375,"⅝":.625,"⅞":.875};let i=String(e).trim();for(const[e,r]of Object.entries(t))i=i.replace(e,String(r));const r=i.match(/^(\d+)\s+(\d+)\/(\d+)$/);if(r)return parseInt(r[1])+parseInt(r[2])/parseInt(r[3]);const a=i.match(/^(\d+)\/(\d+)$/);return a?parseInt(a[1])/parseInt(a[2]):parseFloat(i)||1}class h{constructor(e){this.hass=e}subscribe(e){return this.hass.connection.subscribeMessage(e,{type:"recipe_manager/subscribe"})}async getAllRecipes(){return this.hass.callWS({type:"recipe_manager/recipes/get_all"})}async getRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/get",recipe_id:e})}async scrapeRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/scrape",url:e})}async addRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/add",...e})}async updateRecipe(e,t){return this.hass.callWS({type:"recipe_manager/recipes/update",recipe_id:e,...t})}async deleteRecipe(e){return this.hass.callWS({type:"recipe_manager/recipes/delete",recipe_id:e})}async toggleFavourite(e){return this.hass.callWS({type:"recipe_manager/recipes/toggle_favourite",recipe_id:e})}async downloadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/download_image",recipe_id:e,image_url:t})}async getTags(){return this.hass.callWS({type:"recipe_manager/tags/get_all"})}async getMealPlan(e){const t={type:"recipe_manager/meal_plan/get"};return e&&(t.week_start=e),this.hass.callWS(t)}async addToMealPlan(e,t,i,r=1,a=null){const s={type:"recipe_manager/meal_plan/add",recipe_id:e,date:t,meal_type:i,servings:r};return a&&(s.notes=a),this.hass.callWS(s)}async removeFromMealPlan(e){return this.hass.callWS({type:"recipe_manager/meal_plan/remove",entry_id:e})}async clearMealPlanWeek(e){return this.hass.callWS({type:"recipe_manager/meal_plan/clear",week_start:e})}async addIngredientsToShoppingList(e,t,i=null){let r=[];try{const t=await this.getSlmItems(e);r=(t?.items??[]).filter(e=>!e.checked)}catch{}const a=[];for(const s of t)try{const t=l(s),n=s.product_name??t,o=i?d(i,s,t):null,c=r.find(e=>e.name.toLowerCase().trim()===n.toLowerCase().trim());if(c&&o){const e=c.note?`${c.note}\n${o}`:o;await this.hass.callWS({type:"shopping_list_manager/items/update",item_id:c.id,note:e}),a.push({success:!0,name:n,merged:!0})}else{const t={type:"shopping_list_manager/items/add",list_id:e,name:n,quantity:p(s.amount),unit:s.unit||null};s.product_id&&(t.product_id=s.product_id),s.category_id&&(t.category_id=s.category_id),o&&(t.note=o),await this.hass.callWS(t),a.push({success:!0,name:n})}}catch(e){a.push({success:!1,name:s.name,error:e.message})}return a}async updateSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/update",item_id:e,...t})}async getShoppingLists(){return this.hass.callWS({type:"shopping_list_manager/lists/get_all"})}async getSlmItems(e){return this.hass.callWS({type:"shopping_list_manager/items/get",list_id:e})}async checkSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/check",item_id:e,checked:t})}async clearSlmChecked(e){return this.hass.callWS({type:"shopping_list_manager/items/clear_checked",list_id:e})}async deleteSlmItem(e){return this.hass.callWS({type:"shopping_list_manager/items/delete",item_id:e})}async addSlmItem(e,t){return this.hass.callWS({type:"shopping_list_manager/items/add",list_id:e,...t})}async getSlmCategories(){return this.hass.callWS({type:"shopping_list_manager/categories/get_all"})}async getSlmProductsByIds(e){return this.hass.callWS({type:"shopping_list_manager/products/get_by_ids",product_ids:e})}async getSlmProductSuggestions(e=20){return this.hass.callWS({type:"shopping_list_manager/products/suggestions",limit:e})}async searchSlmProducts(e,t=5){return this.hass.callWS({type:"shopping_list_manager/products/search",query:e,limit:t})}async getGlobalTimers(){return this.hass.callWS({type:"recipe_manager/global_timers/get"})}async addGlobalTimer(e){return this.hass.callWS({type:"recipe_manager/global_timers/add",...e})}async updateGlobalTimer(e,t){return this.hass.callWS({type:"recipe_manager/global_timers/update",timer_id:e,...t})}async deleteGlobalTimer(e){return this.hass.callWS({type:"recipe_manager/global_timers/delete",timer_id:e})}async importRecipeKeeper(e){return this.hass.callWS({type:"recipe_manager/import/recipe_keeper",html_content:e})}async uploadRecipeImage(e,t){return this.hass.callWS({type:"recipe_manager/recipes/upload_image",recipe_id:e,image_data:t})}}const u=["de","es","fr","it","nl","pt"],m=["de","en","es","fr","it","nl","pt"],{getLocale:g,setLocale:f}=e({sourceLocale:"en",targetLocales:u,loadLocale:e=>import(`./locales/${e}.js`)});async function b(e){const t=m.includes(e)?e:"en";t!==g()&&await f(t)}const v=new Set,x=new Set;let _=null;function y(){return"undefined"!=typeof navigator&&"wakeLock"in navigator}function w(){const e=!!_;x.forEach(t=>t(e))}async function k(){if(y()&&!_&&("undefined"==typeof document||"visible"===document.visibilityState))try{_=await navigator.wakeLock.request("screen"),_.addEventListener("release",()=>{_=null,w()}),w()}catch(e){console.warn("[RM] Wake Lock request failed:",e)}}async function $(){v.size>0?await k():await async function(){if(_){try{await _.release()}catch{}_=null,w()}}()}async function S(e){v.add(e),await $()}async function z(e){v.delete(e),await $()}"undefined"!=typeof document&&document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&v.size>0&&k()});const I={"--rm-radius":"22px","--rm-radius-sm":"14px","--rm-radius-card":"22px"},A={"--rm-radius":"18px","--rm-radius-sm":"12px","--rm-radius-card":"18px"},C={fresh:{light:{...I,"--rm-bg-main":"#F3F6F4","--rm-bg-surface":"#FFFFFF","--rm-bg-elevated":"#E8EEEA","--rm-text":"#12201B","--rm-text-secondary":"#5A6B64","--rm-text-muted":"#5A6B64","--rm-accent":"#0F7B5A","--rm-accent-soft":"#DDF1E8","--rm-accent-text":"#0B6048","--rm-ink":"#FFFFFF","--rm-border":"#E3EAE6","--rm-line":"#EEF2EF","--rm-warn":"#9A5A0B","--rm-danger":"#A32B2B","--rm-shadow":"0 1px 3px rgba(18,32,27,0.10)","--rm-shadow-float":"0 10px 30px rgba(18,32,27,0.14)"},dark:{...I,"--rm-bg-main":"#0F1714","--rm-bg-surface":"#18231E","--rm-bg-elevated":"#1F2D26","--rm-text":"#E8F1EC","--rm-text-secondary":"#9DB0A7","--rm-text-muted":"#9DB0A7","--rm-accent":"#3FBF92","--rm-accent-soft":"#1B3A2F","--rm-accent-text":"#7FE0BC","--rm-ink":"#0B1A14","--rm-border":"#26352E","--rm-line":"#202D27","--rm-warn":"#FFB454","--rm-danger":"#FF8F8F","--rm-shadow":"0 1px 3px rgba(0,0,0,0.4)","--rm-shadow-float":"0 10px 30px rgba(0,0,0,0.5)"}},compact:{light:{...A,"--rm-bg-main":"#F4F5F8","--rm-bg-surface":"#FFFFFF","--rm-bg-elevated":"#ECEEF3","--rm-text":"#14161C","--rm-text-secondary":"#5B6270","--rm-text-muted":"#5B6270","--rm-accent":"#4F5FD6","--rm-accent-soft":"#E3E6FA","--rm-accent-text":"#3A47B0","--rm-ink":"#FFFFFF","--rm-border":"#E1E4EB","--rm-line":"#EDEFF4","--rm-warn":"#9A5A0B","--rm-danger":"#A32B2B","--rm-shadow":"0 1px 3px rgba(18,32,27,0.10)","--rm-shadow-float":"0 20px 50px rgba(20,22,28,0.18)"},dark:{...A,"--rm-bg-main":"#0E1014","--rm-bg-surface":"#171A20","--rm-bg-elevated":"#1F232B","--rm-text":"#ECEFF4","--rm-text-secondary":"#9AA3B2","--rm-text-muted":"#9AA3B2","--rm-accent":"#8B9BFF","--rm-accent-soft":"#232B52","--rm-accent-text":"#B4BEFF","--rm-ink":"#0E1014","--rm-border":"#2A2F39","--rm-line":"#1E222A","--rm-warn":"#FFB454","--rm-danger":"#FF8F8F","--rm-shadow":"0 1px 3px rgba(0,0,0,0.4)","--rm-shadow-float":"0 20px 50px rgba(0,0,0,0.5)"}}},T=["fresh","compact","classic"];function R(e){return T.includes(e)?e:"fresh"}function E(e,t){const i=C[e];if(!i)return null;const r=t?i.dark:i.light;return{...r,"--rm-bg":r["--rm-bg-main"],"--rm-surface":r["--rm-bg-surface"],"--rm-success":r["--rm-accent"]}}class F extends t{static properties={recipes:{type:Array},allRecipes:{type:Array},tags:{type:Array},searchQuery:{type:String},activeTag:{type:String},columns:{type:Number},showFavourites:{type:Boolean},hideSidebar:{type:Boolean},scrollPos:{type:Number},recentRecipes:{type:Array},recentCount:{type:Number},uiStyle:{type:String,attribute:"ui-style",reflect:!0},weekPlan:{type:Array},showPlanner:{type:Boolean},_collapsed:{type:Object},_filterMode:{type:String},_starFilter:{type:Number},_sortByRating:{type:Boolean},_showRatingMenu:{type:Boolean},_selectedCourses:{type:Object},_selectedCategories:{type:Object},_selectedCollections:{type:Object},filterPreset:{type:Object}};constructor(){super(),this.recipes=[],this.allRecipes=[],this.tags=[],this.searchQuery="",this.activeTag=null,this.columns=3,this.showFavourites=!0,this.hideSidebar=!1,this.scrollPos=0,this.recentRecipes=[],this.recentCount=12,this.uiStyle="classic",this.weekPlan=[],this.showPlanner=!0,this._collapsed={},this._filterMode="all",this._starFilter=0,this._sortByRating=!1,this._showRatingMenu=!1,this._selectedCourses=new Set,this._selectedCategories=new Set,this._selectedCollections=new Set,this._lastScrollPos=0,this._hasRestoredScroll=!1,this.filterPreset=null}_toggleChip(e,t){const i="courses"===e?"_selectedCourses":"categories"===e?"_selectedCategories":"_selectedCollections",r=new Set(this[i]);r.has(t)?r.delete(t):r.add(t),this[i]=r}updated(e){if(e.has("filterPreset")&&this.filterPreset){const{filterMode:e,selectedValues:t}=this.filterPreset;this._filterMode=e,this._selectedCourses=new Set,this._selectedCategories=new Set,this._selectedCollections=new Set,"courses"===e&&(this._selectedCourses=new Set(t)),"categories"===e&&(this._selectedCategories=new Set(t)),"collections"===e&&(this._selectedCollections=new Set(t))}e.has("scrollPos")&&(this._hasRestoredScroll=!1),null==this.scrollPos||this._hasRestoredScroll||(this._hasRestoredScroll=!0,this.updateComplete.then(()=>{requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(".grid-scroll");e&&(e.scrollTop=this.scrollPos)})}))}_handleSearchInput(e){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}_handleClearSearch(){this.dispatchEvent(new CustomEvent("rm-search",{detail:{query:""},bubbles:!0,composed:!0}))}_handleTagClick(e){this.dispatchEvent(new CustomEvent("rm-tag-filter",{detail:{tag:e},bubbles:!0,composed:!0}))}_handleOpenRecipe(e){this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:e},bubbles:!0,composed:!0}))}_handleToggleFavourite(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:t.id},bubbles:!0,composed:!0}))}_recipeMatchesTag(e,t){return!t||(e.tags?.includes(t)||e.courses?.includes(t)||e.categories?.includes(t)||e.collections?.includes(t))}_recipeMatchesSearch(e,t){const i=(t||"").trim().toLowerCase();return!i||(e.name?.toLowerCase().includes(i)||e.description?.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i)))}_formatTime(e){if(!e)return null;if(e<60)return`${e}m`;const t=Math.floor(e/60),i=e%60;return i?`${t}h ${i}m`:`${t}h`}_getFilteredList(){const e=this._selectedCourses.size>0,t=this._selectedCategories.size>0,i=this._selectedCollections.size>0,r=e||t||i;let a;switch(a=r?this.allRecipes.filter(r=>{const a=!e||(r.courses||[]).some(e=>this._selectedCourses.has(e)),s=!t||(r.categories||[]).some(e=>this._selectedCategories.has(e)),n=!i||(r.collections||[]).some(e=>this._selectedCollections.has(e));return a&&s&&n&&this._recipeMatchesSearch(r,this.searchQuery)}):this.recipes,this._filterMode){case"favourites":a=this.allRecipes.filter(e=>e.is_favourite).filter(e=>!r||a.some(t=>t.id===e.id));break;case"recent":a=this.recentRecipes.slice(0,this.recentCount).filter(e=>!r||a.some(t=>t.id===e.id))}return this._starFilter>0&&(a=a.filter(e=>(e.rating||0)>=this._starFilter)),this._sortByRating&&(a=[...a].sort((e,t)=>(t.rating||0)-(e.rating||0))),a}get _allCourses(){const e=new Set;return this.allRecipes.forEach(t=>(t.courses||[]).forEach(t=>e.add(t))),[...e].sort()}get _coursecounts(){const e={};return this.allRecipes.forEach(t=>(t.courses||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _allCategories(){const e=new Set;return this.allRecipes.forEach(t=>(t.categories||[]).forEach(t=>e.add(t))),[...e].sort()}get _categorycounts(){const e={};return this.allRecipes.forEach(t=>(t.categories||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _allCollections(){const e=new Set;return this.allRecipes.forEach(t=>(t.collections||[]).forEach(t=>e.add(t))),[...e].sort()}get _collectioncounts(){const e={};return this.allRecipes.forEach(t=>(t.collections||[]).forEach(t=>{e[t]=(e[t]||0)+1})),e}get _styled(){return"fresh"===this.uiStyle||"compact"===this.uiStyle}_todayISO(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_renderHero(){const e=this.weekPlan||[],t=this._todayISO(),s=new Set(e.filter(e=>"dinner"===e.meal_type).map(e=>e.date)),n=e.find(e=>e.date===t&&"dinner"===e.meal_type),o=n?this.allRecipes.find(e=>e.id===n.recipe_id):null,c=o&&(o.total_time||(o.prep_time||0)+(o.cook_time||0))||null,l=(new Date).toLocaleDateString(void 0,{weekday:"long"}),d=s.size;return a`
      <section class="hero" aria-label="${i("Tonight")}">
        <div class="hero-row">
          <span class="hero-label">${i(r`Tonight · ${l}`)}</span>
          <span class="hero-label">${i(r`${d} of 7 dinners planned`)}</span>
        </div>
        <div class="hero-row">
          <div class="hero-main">
            ${o?a`
              <div class="hero-big">${o.name}</div>
              <div class="hero-sub">${[c?this._formatTime(c):null,o.servings?i(r`serves ${o.servings}`):null].filter(Boolean).join(" · ")}</div>
            `:a`
              <div class="hero-big">${i("Nothing planned")}</div>
              <div class="hero-sub">${i("Pick a recipe for tonight")}</div>
            `}
          </div>
          ${o?a`
            <button class="hero-cta" @click=${()=>this._handleOpenRecipe(o)}>
              <ha-icon icon="mdi:play"></ha-icon>${i("Cook")}
            </button>
          `:a`
            <button class="hero-cta" @click=${()=>this.dispatchEvent(new CustomEvent("rm-open-planner",{bubbles:!0,composed:!0}))}>
              ${i("Plan")}
            </button>
          `}
        </div>
        <div class="hero-progress"><i style="width:${Math.round(d/7*100)}%"></i></div>
      </section>
    `}_renderRecipeRow(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null,r=e.courses?.[0]||e.category||"";return a`
      <div class="recipe-row" role="button" tabindex="0"
        @click=${()=>this._handleOpenRecipe(e)}
        @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._handleOpenRecipe(e))}}>
        <div class="row-thumb">
          ${e.image_url?a`<img src="${e.image_url}" alt="" loading="lazy" />`:a`<ha-icon icon="mdi:food"></ha-icon>`}
        </div>
        <div class="row-body">
          <div class="row-name">${e.name}</div>
          <div class="row-meta">
            ${[r,t?this._formatTime(t):null].filter(Boolean).map((e,t)=>a`${t?a`<span>·</span>`:""}<span>${e}</span>`)}
            ${e.rating?a`<span>·</span><span class="row-rating"><ha-icon icon="mdi:star"></ha-icon>${e.rating.toFixed?e.rating.toFixed(1):e.rating}</span>`:""}
          </div>
        </div>
        <button class="row-fav ${e.is_favourite?"active":""}"
          @click=${t=>this._handleToggleFavourite(t,e)}
          title="${e.is_favourite?i("Remove from favourites"):i("Add to favourites")}"
          aria-pressed="${e.is_favourite?"true":"false"}">
          <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
        </button>
      </div>
    `}_renderSection(e,t,i,r){if("compact"===this.uiStyle&&!t)return a`<div class="recipe-rows">${i.map(e=>this._renderRecipeRow(e))}</div>`;if("compact"===this.uiStyle){const r=!this._collapsed[e];return a`
        <button class="sec-head" aria-expanded="${r?"true":"false"}"
          @click=${()=>{this._collapsed={...this._collapsed,[e]:r}}}>
          <span>${t}</span><span class="sec-count">${i.length}</span>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </button>
        ${r?a`<div class="recipe-rows">${i.map(e=>this._renderRecipeRow(e))}</div>`:""}
      `}return a`
      ${t?a`<div class="section-label"><span>${t}</span>${this._styled?a`<span class="sec-count">${i.length}</span>`:""}</div>`:""}
      <div class="recipe-grid" style=${r}>${i.map(e=>this._renderRecipeCard(e))}</div>
    `}_renderStars(e){const t=e||0;return a`
      <div class="card-stars">
        ${[1,2,3,4,5].map(e=>a`<span class="card-star ${e<=t?"filled":""}">${e<=t?"★":"☆"}</span>`)}
      </div>
    `}_renderRecipeCard(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;if(this._styled){const r=e.courses?.[0]||e.category||"";return a`
        <div class="recipe-card" role="button" tabindex="0"
          @click=${()=>this._handleOpenRecipe(e)}
          @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._handleOpenRecipe(e))}}>
          <div class="recipe-thumb">
            ${e.image_url?a`<img src="${e.image_url}" alt="${e.name}" loading="lazy" />`:a`
              <div class="recipe-thumb-placeholder"><span class="plate"><ha-icon icon="mdi:food"></ha-icon></span></div>
            `}
            <button class="fav-btn ${e.is_favourite?"active":""}"
              @click=${t=>this._handleToggleFavourite(t,e)}
              title="${e.is_favourite?i("Remove from favourites"):i("Add to favourites")}"
              aria-pressed="${e.is_favourite?"true":"false"}">
              <span><ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon></span>
            </button>
          </div>
          <div class="recipe-info">
            ${r?a`<div class="eyebrow">${r}</div>`:""}
            <h3 class="recipe-name">${e.name}</h3>
            <div class="recipe-meta">
              ${t?a`<span class="meta-chip"><ha-icon icon="mdi:clock-outline"></ha-icon>${this._formatTime(t)}</span>`:""}
              ${e.servings?a`<span class="meta-chip"><ha-icon icon="mdi:account-group-outline"></ha-icon>${e.servings}</span>`:""}
              ${e.rating?a`<span class="meta-chip rating"><ha-icon icon="mdi:star"></ha-icon>${e.rating.toFixed?e.rating.toFixed(1):e.rating}</span>`:""}
            </div>
          </div>
        </div>
      `}return a`
      <div class="recipe-card" @click=${()=>this._handleOpenRecipe(e)}>
        <div class="recipe-thumb">
          ${e.image_url?a`
            <img src="${e.image_url}" alt="${e.name}" loading="lazy" />
          `:a`
            <div class="recipe-thumb-placeholder">
              <ha-icon icon="mdi:food"></ha-icon>
            </div>
          `}
          <button
            class="fav-btn ${e.is_favourite?"active":""}"
            @click=${t=>this._handleToggleFavourite(t,e)}
            title="${e.is_favourite?i("Remove from favourites"):i("Add to favourites")}"
          >
            <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
          </button>
        </div>
        <div class="recipe-info">
          <h3 class="recipe-name">${e.name}</h3>
          ${this._renderStars(e.rating)}
          <div class="recipe-meta">
            ${t?a`
              <span class="meta-chip">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._formatTime(t)}
              </span>
            `:""}
            ${e.servings?a`
              <span class="meta-chip">
                <ha-icon icon="mdi:account-group-outline"></ha-icon>
                ${e.servings}
              </span>
            `:""}
            ${e.tags?.length?a`
              <span class="meta-chip tag-chip">${e.tags[0]}</span>
            `:""}
          </div>
        </div>
      </div>
    `}_renderRatingMenu(){return a`
      <div class="rating-menu" @click=${e=>e.stopPropagation()}>
        <div class="rating-menu-section">${i("Filter by rating")}</div>
        ${[0,1,2,3,4,5].map(e=>a`
          <button class="rating-menu-item ${this._starFilter===e?"active":""}"
            @click=${()=>{this._starFilter=e,this._showRatingMenu=!1}}>
            ${i(0===e?"All ratings":r`${"★".repeat(e)}${"☆".repeat(5-e)} ${e}+`)}
          </button>
        `)}
        <div class="rating-menu-section" style="margin-top:6px">${i("Sort")}</div>
        <button class="rating-menu-item ${this._sortByRating?"active":""}"
          @click=${()=>{this._sortByRating=!this._sortByRating,this._showRatingMenu=!1}}>
          ${i(r`${this._sortByRating?"✓ ":""}Sort by rating`)}
        </button>
      </div>
    `}render(){const e=this._getFilteredList(),t="all"===this._filterMode&&this.showFavourites&&!this.activeTag&&!this.searchQuery&&!this._starFilter&&!this._sortByRating,s=t?e.filter(e=>e.is_favourite):[],n=t&&s.length?e.filter(e=>!e.is_favourite):e,o=`grid-template-columns: var(--rm-grid-columns, repeat(${this.columns}, minmax(0, 1fr)));`,c=this._starFilter>0||this._sortByRating,l="fresh"===this.uiStyle&&this.showPlanner&&"all"===this._filterMode&&!this.activeTag&&!this.searchQuery&&!c;return a`
      <div class="grid-container" @click=${()=>{this._showRatingMenu&&(this._showRatingMenu=!1)}}>
        <!-- Search bar — only shown on narrow (sidebar-less) view -->
        ${this.hideSidebar?"":a`
          <div class="search-row">
            <div class="search-wrap">
              <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
              <input
                type="text"
                class="search-input"
                placeholder="${i("Search recipes…")}"
                .value=${this.searchQuery}
                @input=${this._handleSearchInput}
              />
              ${this.searchQuery?a`
                <button class="clear-btn" @click=${this._handleClearSearch}>
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              `:""}
            </div>
          </div>
        `}

        <!-- Filter tabs + rating filter button (wide view) -->
        ${this.hideSidebar||this._styled?a`
          <div class="filter-tabs-row">
            <div class="filter-tabs">
              ${[["all","mdi:view-grid",i("All"),null],["courses","mdi:silverware-fork-knife",i("Courses"),"_selectedCourses"],["categories","mdi:tag-multiple-outline",i("Categories"),"_selectedCategories"],["collections","mdi:folder-multiple-outline",i("Collections"),"_selectedCollections"],["favourites","mdi:heart-outline",i("Favourites"),null],["recent","mdi:history",i("Recent"),null]].map(([e,t,i,r])=>a`
                <button
                  class="filter-tab ${this._filterMode===e?"active":""}"
                  @click=${()=>{this._filterMode=e,"all"===e&&(this._selectedCourses=new Set,this._selectedCategories=new Set,this._selectedCollections=new Set)}}
                >
                  <ha-icon icon="${t}"></ha-icon>
                  <span>${i}</span>
                  ${r&&this[r]?.size>0?a`<span class="tab-badge"></span>`:""}
                </button>
              `)}
            </div>
            <!-- Rating filter button -->
            <div class="rating-filter-wrap">
              <button
                class="rating-filter-btn ${c?"active":""}"
                @click=${e=>{e.stopPropagation(),this._showRatingMenu=!this._showRatingMenu}}
                title="${i("Filter/sort by rating")}"
              >
                <ha-icon icon="mdi:filter-menu-outline"></ha-icon>
                ${c?a`<span class="rating-filter-badge"></span>`:""}
              </button>
              ${this._showRatingMenu?this._renderRatingMenu():""}
            </div>
          </div>
        `:""}

        <!-- Sub-filter chips for Courses / Categories / Collections (multi-select) -->
        ${(this.hideSidebar||this._styled)&&"courses"===this._filterMode&&this._allCourses.length?a`
          <div class="sub-filter-row">
            <button class="sub-chip ${this._selectedCourses.size?"":"active"}"
              @click=${()=>{this._selectedCourses=new Set}}>${i("All")}</button>
            ${this._allCourses.map(e=>a`
              <button
                class="sub-chip ${this._selectedCourses.has(e)?"active":""}"
                @click=${()=>this._toggleChip("courses",e)}
              >${e}<span class="sub-chip-count">${this._coursecounts[e]||0}</span></button>
            `)}
          </div>
        `:""}
        ${(this.hideSidebar||this._styled)&&"categories"===this._filterMode&&this._allCategories.length?a`
          <div class="sub-filter-row">
            <button class="sub-chip ${this._selectedCategories.size?"":"active"}"
              @click=${()=>{this._selectedCategories=new Set}}>${i("All")}</button>
            ${this._allCategories.map(e=>a`
              <button
                class="sub-chip ${this._selectedCategories.has(e)?"active":""}"
                @click=${()=>this._toggleChip("categories",e)}
              >${e}<span class="sub-chip-count">${this._categorycounts[e]||0}</span></button>
            `)}
          </div>
        `:""}
        ${(this.hideSidebar||this._styled)&&"collections"===this._filterMode&&this._allCollections.length?a`
          <div class="sub-filter-row">
            <button class="sub-chip ${this._selectedCollections.size?"":"active"}"
              @click=${()=>{this._selectedCollections=new Set}}>${i("All")}</button>
            ${this._allCollections.map(e=>a`
              <button
                class="sub-chip ${this._selectedCollections.has(e)?"active":""}"
                @click=${()=>this._toggleChip("collections",e)}
              >${e}<span class="sub-chip-count">${this._collectioncounts[e]||0}</span></button>
            `)}
          </div>
        `:""}

        <!-- Tag chips (narrow view only) -->
        ${!this.hideSidebar&&this.tags.length?a`
          <div class="tags-row">
            ${this.tags.map(e=>a`
              <button
                class="tag-btn ${this.activeTag===e?"active":""}"
                @click=${()=>this._handleTagClick(e)}
              >${e}</button>
            `)}
          </div>
        `:""}

        <!-- Active filter hint -->
        ${c?a`
          <div class="active-filter-bar">
            ${this._starFilter>0?a`<span>${i(r`⭐ ${this._starFilter}+ stars`)}</span>`:""}
            ${this._sortByRating?a`<span>${i("Sorted by rating")}</span>`:""}
            <button class="clear-filter-btn" @click=${()=>{this._starFilter=0,this._sortByRating=!1}}>
              <ha-icon icon="mdi:close"></ha-icon> ${i("Clear")}
            </button>
          </div>
        `:""}

        <!-- Recipe content -->
        <div class="grid-scroll" @scroll=${e=>{this._lastScrollPos=e.target.scrollTop}}>
          ${0===e.length?a`
            <div class="empty-state">
              <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
              <p>${this.searchQuery||this.activeTag?i("No matching recipes"):this._starFilter>0?i(r`No recipes with ${this._starFilter}+ stars`):"favourites"===this._filterMode?i("No favourites yet — heart a recipe!"):"recent"===this._filterMode?i("No recently viewed recipes yet."):i("No recipes yet — add one!")}</p>
            </div>
          `:a`
            ${l?this._renderHero():""}
            ${t&&s.length?this._renderSection("fav",i("Favourites"),s,o):""}
            ${n.length?this._renderSection("all",t&&s.length||this._styled&&"all"===this._filterMode?i("All Recipes"):"",n,o):""}
          `}
        </div>
      </div>
    `}static styles=s`
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
      background: var(--rm-accent); color: var(--rm-ink, #fff);
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

    /* ═══ Fresh + Compact ═══════════════════════════════════════════ */

    /* Search field: pill */
    :host([ui-style="fresh"]) .search-row,
    :host([ui-style="compact"]) .search-row { padding: 12px 20px 0; }
    :host([ui-style="fresh"]) .search-wrap,
    :host([ui-style="compact"]) .search-wrap {
      height: 48px; padding: 0 8px 0 16px; border-radius: 999px;
      background: var(--rm-bg-surface); border: 1px solid var(--rm-border);
    }
    :host([ui-style="compact"]) .search-wrap { border-radius: 14px; border-color: transparent; background: var(--rm-bg-elevated); }
    :host([ui-style="fresh"]) .search-wrap:focus-within,
    :host([ui-style="compact"]) .search-wrap:focus-within { outline: 2px solid var(--rm-accent); outline-offset: 1px; }
    :host([ui-style="fresh"]) .search-input,
    :host([ui-style="compact"]) .search-input { font-size: 15px; padding: 0; }
    :host([ui-style="fresh"]) .clear-btn,
    :host([ui-style="compact"]) .clear-btn { width: 36px; height: 36px; justify-content: center; border-radius: 50%; background: var(--rm-bg-elevated); color: var(--rm-text); }

    /* Filter tabs: pill chips */
    :host([ui-style="fresh"]) .filter-tabs-row,
    :host([ui-style="compact"]) .filter-tabs-row { border-bottom: none; padding: 14px 20px 0; gap: 8px; }
    :host([ui-style="fresh"]) .filter-tabs,
    :host([ui-style="compact"]) .filter-tabs { gap: 8px; }
    :host([ui-style="fresh"]) .filter-tab,
    :host([ui-style="compact"]) .filter-tab {
      min-height: 40px; padding: 0 16px; border-radius: 999px; font-size: 14px; font-weight: 600;
      border: 1px solid var(--rm-border); background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([ui-style="compact"]) .filter-tab { border-radius: 12px; }
    :host([ui-style="fresh"]) .filter-tab ha-icon,
    :host([ui-style="compact"]) .filter-tab ha-icon { display: none; }
    :host([ui-style="fresh"]) .filter-tab:hover,
    :host([ui-style="compact"]) .filter-tab:hover { background: var(--rm-accent-soft); color: var(--rm-accent-text); }
    :host([ui-style="fresh"]) .filter-tab.active,
    :host([ui-style="compact"]) .filter-tab.active {
      background: var(--rm-text); border-color: var(--rm-text); color: var(--rm-bg-main); font-weight: 700;
    }
    :host([ui-style="fresh"]) .tab-badge,
    :host([ui-style="compact"]) .tab-badge { top: 8px; right: 8px; }
    :host([ui-style="fresh"]) .rating-filter-btn,
    :host([ui-style="compact"]) .rating-filter-btn {
      width: 44px; height: 44px; padding: 0; justify-content: center; border-radius: 50%;
      background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([ui-style="compact"]) .rating-filter-btn { border-radius: 12px; border-color: transparent; background: var(--rm-bg-elevated); }
    :host([ui-style="fresh"]) .rating-filter-btn.active,
    :host([ui-style="compact"]) .rating-filter-btn.active { color: var(--rm-accent-text); border-color: var(--rm-accent); background: var(--rm-accent-soft); }
    :host([ui-style="fresh"]) .rating-menu,
    :host([ui-style="compact"]) .rating-menu { border-radius: 20px; padding: 8px; box-shadow: var(--rm-shadow-float); }
    :host([ui-style="fresh"]) .rating-menu-item,
    :host([ui-style="compact"]) .rating-menu-item { border-radius: 12px; min-height: 40px; }
    :host([ui-style="fresh"]) .rating-menu-item.active,
    :host([ui-style="compact"]) .rating-menu-item.active { color: var(--rm-accent-text); background: var(--rm-accent-soft); }

    /* Sub-filter + tag chips */
    :host([ui-style="fresh"]) .sub-filter-row,
    :host([ui-style="compact"]) .sub-filter-row { padding: 10px 20px 0; }
    :host([ui-style="fresh"]) .tags-row,
    :host([ui-style="compact"]) .tags-row { padding: 10px 20px 0; }
    :host([ui-style="fresh"]) .sub-chip,
    :host([ui-style="fresh"]) .tag-btn,
    :host([ui-style="compact"]) .sub-chip,
    :host([ui-style="compact"]) .tag-btn {
      min-height: 36px; padding: 0 14px; border-radius: 999px; font-size: 13px; font-weight: 600;
      background: var(--rm-bg-surface); color: var(--rm-text); display: inline-flex; align-items: center;
    }
    :host([ui-style="compact"]) .sub-chip, :host([ui-style="compact"]) .tag-btn { border-radius: 12px; }
    :host([ui-style="fresh"]) .sub-chip, :host([ui-style="compact"]) .sub-chip { padding-right: 8px; }
    :host([ui-style="fresh"]) .sub-chip.active, :host([ui-style="fresh"]) .tag-btn.active,
    :host([ui-style="compact"]) .sub-chip.active, :host([ui-style="compact"]) .tag-btn.active {
      background: var(--rm-accent-soft); border-color: var(--rm-accent); color: var(--rm-accent-text);
    }
    :host([ui-style="fresh"]) .sub-chip-count,
    :host([ui-style="compact"]) .sub-chip-count { color: var(--rm-ink); }
    :host([ui-style="fresh"]) .active-filter-bar,
    :host([ui-style="compact"]) .active-filter-bar { margin: 10px 20px 0; padding: 8px 14px; border-radius: 12px; color: var(--rm-accent-text); }

    /* Scroll area + section labels */
    :host([ui-style="fresh"]) .grid-scroll,
    :host([ui-style="compact"]) .grid-scroll { padding: 4px 20px 24px; }
    :host([ui-style="fresh"]) .section-label,
    :host([ui-style="compact"]) .section-label {
      display: flex; align-items: center; gap: 8px; margin: 18px 4px 10px;
      font-size: 12px; font-weight: 700; letter-spacing: 0.06em; color: var(--rm-text-secondary);
    }
    .sec-count { font-weight: 600; }

    /* Hero (Fresh) */
    .hero {
      display: grid; gap: 12px; margin: 16px 0 0; padding: 18px 20px;
      border-radius: 24px; background: var(--rm-accent); color: var(--rm-ink);
    }
    .hero-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .hero-label { font-size: 13px; font-weight: 600; }
    .hero-main { min-width: 0; }
    .hero-big { font-size: 26px; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; overflow-wrap: anywhere; }
    .hero-sub { font-size: 13px; font-weight: 600; margin-top: 4px; }
    .hero-cta {
      flex: none; display: flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 18px 0 14px;
      border: none; border-radius: 999px; background: var(--rm-ink); color: var(--rm-accent);
      font-size: 14px; font-weight: 700; cursor: pointer;
    }
    .hero-cta ha-icon { --mdc-icon-size: 18px; }
    .hero-progress { height: 8px; border-radius: 99px; overflow: hidden; background: color-mix(in srgb, var(--rm-ink) 28%, transparent); }
    .hero-progress i { display: block; height: 100%; border-radius: 99px; background: var(--rm-ink); }

    /* Cards (Fresh + Compact when the grid is used) */
    :host([ui-style="fresh"]) .recipe-grid,
    :host([ui-style="compact"]) .recipe-grid { gap: 14px; margin-bottom: 8px; }
    :host([ui-style="fresh"]) .recipe-card,
    :host([ui-style="compact"]) .recipe-card {
      border-radius: var(--rm-radius-card); box-shadow: none; transform: none;
    }
    :host([ui-style="fresh"]) .recipe-card:hover { border-color: var(--rm-accent); box-shadow: none; transform: none; }
    :host([ui-style="fresh"]) .recipe-card:focus-visible,
    :host([ui-style="compact"]) .recipe-card:focus-visible,
    :host([ui-style="compact"]) .recipe-row:focus-visible { outline: 2px solid var(--rm-accent); outline-offset: 2px; }
    :host([ui-style="fresh"]) .recipe-thumb-placeholder {
      background: linear-gradient(135deg, var(--rm-accent-soft), var(--rm-bg-elevated));
    }
    :host([ui-style="fresh"]) .plate {
      display: flex; align-items: center; justify-content: center;
      width: 56%; aspect-ratio: 1; border-radius: 50%;
      background: var(--rm-bg-surface); color: var(--rm-accent-text);
      box-shadow: 0 0 0 7px color-mix(in srgb, var(--rm-bg-surface) 45%, transparent);
    }
    :host([ui-style="fresh"]) .plate ha-icon { --mdc-icon-size: 32px; }
    :host([ui-style="fresh"]) .fav-btn {
      top: 2px; right: 2px; width: 44px; height: 44px; background: none; color: #12201B;
    }
    :host([ui-style="fresh"]) .fav-btn > span {
      width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.94);
      display: flex; align-items: center; justify-content: center;
    }
    :host([ui-style="fresh"]) .fav-btn ha-icon { --mdc-icon-size: 18px; }
    :host([ui-style="fresh"]) .fav-btn.active { color: #A32B2B; }
    :host([ui-style="fresh"]) .recipe-info { padding: 12px 14px 14px; display: grid; gap: 6px; }
    .eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rm-text-secondary); }
    :host([ui-style="fresh"]) .recipe-name { margin: 0; font-size: 15px; font-weight: 700; line-height: 1.25; min-height: 2.5em; }
    :host([ui-style="fresh"]) .recipe-meta { flex-wrap: nowrap; gap: 10px; align-items: center; }
    :host([ui-style="fresh"]) .meta-chip {
      background: none; padding: 0; border-radius: 0; font-size: 12.5px; font-weight: 500; gap: 4px; white-space: nowrap;
    }
    :host([ui-style="fresh"]) .meta-chip ha-icon { --mdc-icon-size: 15px; }
    :host([ui-style="fresh"]) .meta-chip.rating { margin-left: auto; color: var(--rm-warn); font-weight: 700; }

    /* Rows (Compact) */
    :host([ui-style="compact"]) .sec-head {
      display: flex; align-items: center; gap: 8px; width: 100%; min-height: 44px;
      margin-top: 8px; padding: 10px 4px 4px; border: none; background: transparent; text-align: left;
      font: inherit; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
      color: var(--rm-text-secondary); cursor: pointer;
    }
    :host([ui-style="compact"]) .sec-head .sec-count { flex: 1; }
    :host([ui-style="compact"]) .sec-head ha-icon { --mdc-icon-size: 18px; transition: transform 0.15s; }
    :host([ui-style="compact"]) .sec-head[aria-expanded="false"] ha-icon { transform: rotate(-90deg); }
    .recipe-rows { display: block; }
    .recipe-row {
      display: flex; align-items: center; gap: 12px; padding: 10px 0;
      border-bottom: 1px solid var(--rm-line); cursor: pointer;
    }
    .recipe-row:last-child { border-bottom: none; }
    .row-thumb {
      flex: none; width: 56px; height: 56px; border-radius: 14px; overflow: hidden;
      background: linear-gradient(135deg, var(--rm-accent-soft), var(--rm-bg-elevated));
      display: flex; align-items: center; justify-content: center; color: var(--rm-accent-text);
    }
    .row-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .row-thumb ha-icon { --mdc-icon-size: 26px; }
    .row-body { flex: 1; min-width: 0; }
    .row-name { font-size: 15px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .row-meta { display: flex; align-items: center; gap: 6px; margin-top: 2px; font-size: 12.5px; font-weight: 500; color: var(--rm-text-secondary); white-space: nowrap; }
    .row-rating { display: inline-flex; align-items: center; gap: 2px; color: var(--rm-warn); font-weight: 700; }
    .row-rating ha-icon { --mdc-icon-size: 14px; }
    .row-fav {
      flex: none; width: 44px; height: 44px; padding: 0; border: none; background: transparent;
      color: var(--rm-text-secondary); display: flex; align-items: center; justify-content: center; cursor: pointer;
    }
    .row-fav.active { color: var(--rm-danger); }
    :host([ui-style="compact"]) .empty-state ha-icon,
    :host([ui-style="fresh"]) .empty-state ha-icon { color: var(--rm-accent-text); opacity: 0.6; }
  `}try{customElements.define("rm-recipe-grid",F)}catch{}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=2;class P{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class L extends P{constructor(e){if(super(e),this.it=n,e.type!==D)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n||null==e)return this._t=void 0,this.it=e;if(e===o)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}L.directiveName="unsafeHTML",L.resultType=1;const O=(e=>(...t)=>({_$litDirective$:e,values:t}))(L),B="recipe-detail";function M(e){return(t=e,t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")).replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/_(.+?)_/g,"<em>$1</em>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');var t}function j(e){if(!e)return"";const t=e.split("\n"),i=[];let r=null;const a=()=>{r&&(i.push(`</${r}>`),r=null)};for(const e of t){const t=e.match(/^###\s+(.+)/);if(t){a(),i.push(`<h3>${M(t[1])}</h3>`);continue}const s=e.match(/^##\s+(.+)/);if(s){a(),i.push(`<h2>${M(s[1])}</h2>`);continue}const n=e.match(/^#\s+(.+)/);if(n){a(),i.push(`<h1>${M(n[1])}</h1>`);continue}const o=e.match(/^[-*]\s+(.+)/);if(o){"ul"!==r&&(a(),i.push("<ul>"),r="ul"),i.push(`<li>${M(o[1])}</li>`);continue}const c=e.match(/^\d+\.\s+(.+)/);if(c){"ol"!==r&&(a(),i.push("<ol>"),r="ol"),i.push(`<li>${M(c[1])}</li>`);continue}e.match(/^---+$/)?(a(),i.push("<hr>")):(a(),""===e.trim()?i.push('<p class="md-gap"></p>'):i.push(`<p>${M(e)}</p>`))}return a(),i.join("")}const N=[{key:"calories",label:i("Calories"),unit:"kcal",bold:!0},{key:"fat",label:i("Total Fat"),unit:"g"},{key:"saturated_fat",label:i("Saturated Fat"),unit:"g",indent:!0},{key:"cholesterol",label:i("Cholesterol"),unit:"mg"},{key:"sodium",label:i("Sodium"),unit:"mg"},{key:"carbohydrates",label:i("Total Carbohydrate"),unit:"g"},{key:"fiber",label:i("Dietary Fiber"),unit:"g",indent:!0},{key:"sugar",label:i("Total Sugars"),unit:"g",indent:!0},{key:"protein",label:i("Protein"),unit:"g"}],U=/(\d+\s*(?:hours?|hrs?)\s*(?:and\s*)?\d*\s*(?:minutes?|mins?)?|\d+\s*(?:minutes?|mins?|seconds?|secs?|hours?|hrs?))/gi;function W(e){const t=e.toLowerCase();let i=0;const r=t.match(/(\d+)\s*h(?:ours?|rs?)?/);r&&(i+=3600*parseInt(r[1]));const a=t.match(/(\d+)\s*m(?:in(?:utes?)?)?(?!\s*l)/);a&&(i+=60*parseInt(a[1]));const s=t.match(/(\d+)\s*s(?:ec(?:onds?)?)?/);if(s&&(i+=parseInt(s[1])),!i){const e=t.match(/^(\d+)$/);e&&(i=60*parseInt(e[1]))}return i||0}const Z={calories:{label:i("Calories"),val:2e3,unit:"kcal"},fat:{label:i("Total Fat"),val:65,unit:"g"},saturated_fat:{label:i("Saturated Fat"),val:20,unit:"g"},cholesterol:{label:i("Cholesterol"),val:300,unit:"mg"},sodium:{label:i("Sodium"),val:2300,unit:"mg"},carbohydrates:{label:i("Total Carbohydrate"),val:300,unit:"g"},fiber:{label:i("Dietary Fiber"),val:28,unit:"g"},sugar:{label:i("Added Sugars"),val:50,unit:"g"},protein:{label:i("Protein"),val:50,unit:"g"}},H={oz:{factor:28.3495,to:"g",toFull:"g"},lb:{factor:453.592,to:"g",toFull:"g",thresholdKg:500},cup:{factor:250,to:"ml",toFull:"ml"},cups:{factor:250,to:"ml",toFull:"ml"},"fl oz":{factor:29.5735,to:"ml",toFull:"ml"},pt:{factor:473.176,to:"ml",toFull:"ml"},qt:{factor:946.353,to:"ml",toFull:"ml"}};class q extends t{static properties={uiStyle:{type:String,attribute:"ui-style",reflect:!0},recipe:{type:Object},api:{type:Object},shoppingLists:{type:Array},slmAvailable:{type:Boolean},settings:{type:Object},wide:{type:Boolean},_editing:{type:Boolean},_editData:{type:Object},_servingMult:{type:Number},_activeTab:{type:String},_showShoppingPicker:{type:Boolean},_selectedListId:{type:String},_checkedIngredients:{type:Object},_shoppingAdding:{type:Boolean},_shoppingResult:{type:String},_shoppingReview:{type:Array},_confirmDelete:{type:Boolean},_downloading:{type:Boolean},_photoUrlInput:{type:String},_addingPhotoUrl:{type:Boolean},_metricMode:{type:Boolean},_wakeActive:{type:Boolean},_completedSteps:{type:Object},_editIngInput:{type:String},_editStepInput:{type:String},_nutritionExpanded:{type:Boolean},_dragIngOver:{type:Number},_dragStepOver:{type:Number},_editImageUploading:{type:Boolean},_slideIdx:{type:Number},allTags:{type:Array},allCourses:{type:Array},allCategories:{type:Array},allCollections:{type:Array},_tagPickerField:{type:String},_tagPickerInput:{type:String},_editIngEdit:{type:Object}};constructor(){super(),this.recipe=null,this.api=null,this.shoppingLists=[],this.slmAvailable=!1,this.settings={},this.wide=!1,this._editing=!1,this._editData={},this._servingMult=1,this._activeTab="ingredients",this._showShoppingPicker=!1,this._selectedListId="",this._checkedIngredients=null,this._shoppingAdding=!1,this._shoppingResult=null,this._shoppingReview=null,this._confirmDelete=!1,this._downloading=!1,this._photoUrlInput="",this._addingPhotoUrl=!1,this._metricMode="metric"===this.settings?.unitSystem,this._wakeActive=!1,this._completedSteps=new Set,this._editIngInput="",this._editStepInput="",this._nutritionExpanded=!1,this._dragIngOver=-1,this._dragStepOver=-1,this._dragIngFrom=-1,this._dragStepFrom=-1,this._editImageUploading=!1,this._slideIdx=0,this.allTags=[],this.allCourses=[],this.allCategories=[],this.allCollections=[],this._tagPickerField=null,this._tagPickerInput="",this._editIngEdit=null,this._slideTimer=null,this._slideTouchStartX=null,this._wakeLockTimeout=null,this._wakeLockUnsubscribeFn=null}connectedCallback(){var e;super.connectedCallback(),this._wakeLockUnsubscribeFn=(e=e=>{this._wakeActive=e},x.add(e),()=>x.delete(e))}disconnectedCallback(){super.disconnectedCallback(),this._releaseWakeLock(),this._wakeLockUnsubscribeFn?.(),this._wakeLockUnsubscribeFn=null,this._stopSlideTimer()}async _requestWakeLock(){this._wakeLockTimeout&&(clearTimeout(this._wakeLockTimeout),this._wakeLockTimeout=null),await S(B);const e=this.settings?.wakeLockDuration??60;this._wakeLockTimeout=setTimeout(()=>this._releaseWakeLock(),6e4*e)}async _releaseWakeLock(){this._wakeLockTimeout&&(clearTimeout(this._wakeLockTimeout),this._wakeLockTimeout=null),await z(B)}updated(e){if(e.has("recipe")&&this.recipe){const t=e.get("recipe"),i=!t||t.id!==this.recipe.id;this._servingMult=1,i&&(this._editing=!1,this._confirmDelete=!1,this._shoppingResult=null,this._shoppingReview=null,this._showShoppingPicker=!1,this._checkedIngredients=null,this._photoUrlInput="",this._metricMode="metric"===this.settings?.unitSystem,this._completedSteps=new Set),this._slideIdx=0,this._startSlideTimer()}e.has("settings")&&this._startSlideTimer(),(e.has("recipe")||e.has("settings"))&&this.recipe&&(this.settings?.keepScreenOn?this._requestWakeLock():this._releaseWakeLock()),e.has("recipe")&&!this.recipe&&this._releaseWakeLock(),e.has("shoppingLists")&&this.shoppingLists.length&&!this._selectedListId&&(this._selectedListId=this.shoppingLists[0]?.id??"")}_formatTime(e){if(!e)return null;if(e<60)return i(r`${e} min`);const t=Math.floor(e/60),a=e%60;return i(a?r`${t}h ${a}m`:r`${t}h`)}_scaleAmount(e){if(!e||isNaN(parseFloat(e)))return e;const t=parseFloat(e)*this._servingMult;return Number.isInteger(t)?String(t):t.toFixed(1).replace(/\.0$/,"")}_startEdit(){const e=this.recipe.nutrition||{};this._editData={name:this.recipe.name||"",description:this.recipe.description||"",source_url:this.recipe.source_url||"",servings:this.recipe.servings||"",prep_time:this.recipe.prep_time||"",cook_time:this.recipe.cook_time||"",tags:[...this.recipe.tags||[]],courses:[...this.recipe.courses||[]],categories:[...this.recipe.categories||[]],collections:[...this.recipe.collections||[]],notes:this.recipe.notes||"",rating:this.recipe.rating||0,image_url:this.recipe.image_url||"",photos:[...this.recipe.photos||[]],ingredients:[...this.recipe.ingredients||[]],instructions:[...this.recipe.instructions||[]],cal:e.calories||"",fat:e.fat||"",satf:e.saturated_fat||"",chol:e.cholesterol||"",sod:e.sodium||"",carb:e.carbohydrates||"",fib:e.fiber||"",sug:e.sugar||"",prot:e.protein||""},this._editing=!0}_cancelEdit(){this._editing=!1,this._editData={}}_handleEditField(e,t){this._editData={...this._editData,[e]:t}}_renderListPicker(e,t,s){const n=this._editData[e]||[],o=this._tagPickerField===e,c=(s||[]).filter(e=>!n.includes(e)),l=o?this._tagPickerInput:"";return a`
      <div class="edit-field list-picker-field">
        <label>${t}</label>
        <div class="list-picker-wrap">
          <!-- Selected chips -->
          <div class="list-picker-chips">
            ${n.map(t=>a`
              <span class="list-chip selected">
                ${t}
                <button class="list-chip-remove" @click=${()=>this._toggleListValue(e,t)} title="${i("Remove")}">×</button>
              </span>
            `)}
            <button class="list-chip-add-btn" @click=${()=>{this._tagPickerField=o?null:e,this._tagPickerInput=""}} title="${i(r`Add ${t.toLowerCase()}`)}">
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          </div>
          <!-- Picker dropdown -->
          ${o?a`
            <div class="list-picker-dropdown">
              ${c.length?a`
                <div class="list-picker-existing">
                  ${c.map(t=>a`
                    <span class="list-chip available" @click=${()=>{this._toggleListValue(e,t)}}>
                      ${t}
                    </span>
                  `)}
                </div>
              `:""}
              <div class="list-picker-new-row">
                <input class="list-picker-input" type="text" placeholder="${i(r`New ${t.toLowerCase()}…`)}"
                  .value=${l}
                  @input=${e=>{this._tagPickerInput=e.target.value}}
                  @keydown=${t=>{"Enter"===t.key&&(t.preventDefault(),this._addListValue(e,this._tagPickerInput)),"Escape"===t.key&&(this._tagPickerField=null)}}
                />
                <button class="list-picker-new-btn" @click=${()=>this._addListValue(e,this._tagPickerInput)}
                  ?disabled=${!this._tagPickerInput.trim()}>
                  ${i("Add")}
                </button>
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}_toggleListValue(e,t){const i=this._editData[e]||[],r=i.includes(t)?i.filter(e=>e!==t):[...i,t];this._editData={...this._editData,[e]:r}}_addListValue(e,t){const i=(t||"").trim();if(!i)return;const r=this._editData[e]||[];r.includes(i)||(this._editData={...this._editData,[e]:[...r,i]}),this._tagPickerInput="",this._tagPickerField=null}_startEditIngredient(e){const t=(this._editData.ingredients||[])[e];if(t)if(t.is_heading||t.name?.startsWith("#")){const i=t.name?.startsWith("#")?t.name.slice(1).trim():t.name;this._editIngEdit={idx:e,heading:!0,name:i}}else this._editIngEdit={idx:e,heading:!1,amount:t.amount||"",unit:t.unit||"",name:t.name||""}}_saveEditIngredient(){const e=this._editIngEdit;if(!e)return;const t=[...this._editData.ingredients||[]];e.heading?t[e.idx]={name:`# ${e.name}`,is_heading:!0}:t[e.idx]={amount:e.amount,unit:e.unit,name:e.name},this._editData={...this._editData,ingredients:t},this._editIngEdit=null}_cancelEditIngredient(){this._editIngEdit=null}_editAddIngredient(){const e=this._editIngInput.trim();if(!e)return;let t;if(e.startsWith("#"))t={name:e,is_heading:!0};else{const i=e.split(/\s+/);let r="",a="",s="";i.length>=3&&!isNaN(parseFloat(i[0]))?(r=i[0],a=i[1],s=i.slice(2).join(" ")):2!==i.length||isNaN(parseFloat(i[0]))?s=e:(r=i[0],s=i[1]),t={amount:r,unit:a,name:s}}this._editData={...this._editData,ingredients:[...this._editData.ingredients||[],t]},this._editIngInput=""}_editRemoveIngredient(e){this._editData={...this._editData,ingredients:(this._editData.ingredients||[]).filter((t,i)=>i!==e)}}_editMoveIngredient(e,t){const i=[...this._editData.ingredients||[]],r=e+t;r<0||r>=i.length||([i[e],i[r]]=[i[r],i[e]],this._editData={...this._editData,ingredients:i})}_editMoveStep(e,t){const i=[...this._editData.instructions||[]],r=e+t;r<0||r>=i.length||([i[e],i[r]]=[i[r],i[e]],this._editData={...this._editData,instructions:i})}_editDropIngredient(e,t){if(e===t||e<0||t<0)return;const i=[...this._editData.ingredients||[]],[r]=i.splice(e,1);i.splice(t,0,r),this._editData={...this._editData,ingredients:i},this._dragIngOver=-1,this._dragIngFrom=-1}_editDropStep(e,t){if(e===t||e<0||t<0)return;const i=[...this._editData.instructions||[]],[r]=i.splice(e,1);i.splice(t,0,r),this._editData={...this._editData,instructions:i},this._dragStepOver=-1,this._dragStepFrom=-1}_editAddStep(e){e.trim()&&(this._editData={...this._editData,instructions:[...this._editData.instructions||[],e.trim()]})}_editRemoveStep(e){this._editData={...this._editData,instructions:(this._editData.instructions||[]).filter((t,i)=>i!==e)}}async _editUploadImage(e){if(!e||!this.recipe?.id)return;this._editImageUploading=!0;const t=new FileReader;t.onload=async e=>{const t=e.target.result.split(",")[1];try{const e=await this.api.uploadRecipeImage(this.recipe.id,t),i=e?.image_url||e?.local_url;i&&(this._editData={...this._editData,image_url:this._editData.image_url||i,photos:[...new Set([...this._editData.photos||[],i])]})}catch(e){console.warn("Image upload failed:",e)}finally{this._editImageUploading=!1}},t.readAsDataURL(e)}async _saveEdit(){const e=this._editData,t={},i={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"};let r=!1;for(const[a,s]of Object.entries(i))""!==e[a]&&null!=e[a]&&(t[s]=e[a],r=!0);const a={name:e.name,description:e.description,source_url:e.source_url,image_url:e.image_url||null,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:Array.isArray(e.tags)?e.tags:[],courses:Array.isArray(e.courses)?e.courses:[],categories:Array.isArray(e.categories)?e.categories:[],collections:Array.isArray(e.collections)?e.collections:[],notes:e.notes,rating:e.rating||null,photos:e.photos||[],ingredients:e.ingredients||[],instructions:e.instructions||[],nutrition:r?t:null};this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:a},bubbles:!0,composed:!0})),this._editing=!1}_handleToggleFav(){this.dispatchEvent(new CustomEvent("rm-toggle-favourite",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}async _handleDownloadImage(){if(this.recipe.image_url){this._downloading=!0;try{const e=await this.api.downloadRecipeImage(this.recipe.id,this.recipe.image_url);e?.local_url&&this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e.local_url}},bubbles:!0,composed:!0}))}catch(e){console.warn("Image download failed:",e)}finally{this._downloading=!1}}}_handleDeleteRecipe(){if(!this._confirmDelete)return this._confirmDelete=!0,void setTimeout(()=>{this._confirmDelete=!1},3e3);this.dispatchEvent(new CustomEvent("rm-delete-recipe",{detail:{recipeId:this.recipe.id},bubbles:!0,composed:!0}))}_openShoppingPicker(){this._checkedIngredients=new Set,this._showShoppingPicker=!0}_toggleIngredient(e){const t=new Set(this._checkedIngredients);t.has(e)?t.delete(e):t.add(e),this._checkedIngredients=t}_selectAllIngredients(){const e=this.recipe?.ingredients?.length??0;this._checkedIngredients=new Set([...Array(e).keys()])}_clearAllIngredients(){this._checkedIngredients=new Set}async _handleAddToShopping(){const e=this._checkedIngredients;if(!e?.size)return;const t=(this.recipe.ingredients||[]).filter((t,i)=>e.has(i)&&!this.recipe.ingredients[i]?.is_heading&&!this.recipe.ingredients[i]?.name?.startsWith("#")).map(e=>({...e,amount:this._scaleAmount(e.amount)}));if(!this.slmAvailable||!this._selectedListId)return void await this._dispatchShoppingAdd(t.map(e=>({ing:e,selectedId:null,products:[]})));this._shoppingAdding=!0;const i=await Promise.all(t.map(async e=>{try{const t=await this.api.searchSlmProducts(e.name,4),i=t?.products??[],r=i.find(t=>t.name.toLowerCase()===e.name.toLowerCase());return{ing:e,products:i,selectedId:r?.id??null}}catch{return{ing:e,products:[],selectedId:null}}}));this._shoppingAdding=!1,this._shoppingReview=i}_selectReviewMatch(e,t){this._shoppingReview=this._shoppingReview.map((i,r)=>r===e?{...i,selectedId:t}:i)}async _confirmShoppingReview(){await this._dispatchShoppingAdd(this._shoppingReview)}async _dispatchShoppingAdd(e){const t=e.map(({ing:e,selectedId:t,products:i})=>{const r=i?.find(e=>e.id===t);return{...e,product_id:r?.id??null,product_name:r?.name??null,category_id:r?.category_id??null}});this._shoppingAdding=!0,this._shoppingResult=null,this.dispatchEvent(new CustomEvent("rm-add-to-shopping",{detail:{ingredients:t,listId:this._selectedListId||null,recipeName:this.recipe.name},bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,600)),this._shoppingAdding=!1,this._shoppingResult="success",this._shoppingReview=null,this._showShoppingPicker=!1,setTimeout(()=>{this._shoppingResult=null},2500)}_renderShoppingReview(){const e=this._shoppingReview;return e?a`
      <div class="shopping-review-panel">
        <div class="review-title">${i("Match Items to Products")}</div>
        <div class="review-list">
          ${e.map((e,t)=>a`
            <div class="review-row">
              <div class="review-ing">
                ${e.ing.amount?a`<span class="review-qty">${e.ing.amount}${e.ing.unit?` ${e.ing.unit}`:""}</span>`:""}
                <span class="review-ing-name">${e.ing.name}</span>
              </div>
              <div class="review-chips">
                ${e.products.slice(0,3).map(i=>a`
                  <button class="review-chip ${e.selectedId===i.id?"selected":""}"
                    @click=${()=>this._selectReviewMatch(t,i.id)}>
                    ${e.selectedId===i.id?a`<ha-icon icon="mdi:check"></ha-icon>`:""}${i.name}
                  </button>
                `)}
                <button class="review-chip manual ${null===e.selectedId?"selected":""}"
                  @click=${()=>this._selectReviewMatch(t,null)}>
                  ${null===e.selectedId?a`<ha-icon icon="mdi:check"></ha-icon>`:""}${i("Add manually")}
                </button>
              </div>
            </div>
          `)}
        </div>
        <div class="picker-btns review-btns">
          <button class="action-btn" @click=${()=>{this._shoppingReview=null}}>${i("Back")}</button>
          <button class="action-btn primary"
            ?disabled=${this._shoppingAdding}
            @click=${this._confirmShoppingReview}>
            ${this._shoppingAdding?a`<ha-circular-progress active size="tiny"></ha-circular-progress>`:i(r`Confirm & Add ${e.length}`)}
          </button>
        </div>
      </div>
    `:a``}_handleQuickRate(e){const t=this.recipe.rating===e?null:e;this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{rating:t}},bubbles:!0,composed:!0}))}_handleShowPlanner(){this.dispatchEvent(new CustomEvent("rm-show-planner",{bubbles:!0,composed:!0}))}_handleChipNav(e,t){this.dispatchEvent(new CustomEvent("rm-chip-nav",{detail:{filterMode:e,value:t},bubbles:!0,composed:!0}))}_fireTimer(e,t){const a=this.recipe?.name,s=a?i(r`${a} — ${t}`):t;this.dispatchEvent(new CustomEvent("rm-start-timer",{detail:{seconds:e,label:s},bubbles:!0,composed:!0}))}async _handleAddPhotoUrl(){const e=this._photoUrlInput.trim();if(e){this._addingPhotoUrl=!0;try{const t=this.recipe.photos||[],i={photos:[...t,e]};this.recipe.image_url||(i.image_url=e),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0})),this._photoUrlInput=""}finally{this._addingPhotoUrl=!1}}}_handleCameraCapture(e){const t=e.target.files?.[0];if(!t)return;const i=new FileReader;i.onload=async e=>{const t=e.target.result.split(",")[1];try{await this.api.uploadRecipeImage(this.recipe.id,t)}catch(e){console.warn("Camera upload failed:",e)}},i.readAsDataURL(t)}_setMainPhoto(e){this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:{image_url:e}},bubbles:!0,composed:!0}))}_removePhoto(e){const t=(this.recipe.photos||[]).filter(t=>t!==e),i={photos:t};this.recipe.image_url===e&&(i.image_url=t[0]||null),this.dispatchEvent(new CustomEvent("rm-update-recipe",{detail:{recipeId:this.recipe.id,data:i},bubbles:!0,composed:!0}))}_getSlideImages(){const e=this.recipe;if(!e)return[];const t=[e.image_url,...e.photos||[]].filter(Boolean);return[...new Set(t)]}_prevSlide(){const e=this._getSlideImages();e.length<2||(this._slideIdx=(this._slideIdx-1+e.length)%e.length,this._startSlideTimer())}_nextSlide(){const e=this._getSlideImages();e.length<2||(this._slideIdx=(this._slideIdx+1)%e.length,this._startSlideTimer())}_startSlideTimer(){this._stopSlideTimer();const e=this.settings?.slideshowInterval??5;if(e<=0)return;this._getSlideImages().length<2||(this._slideTimer=setInterval(()=>{this._slideIdx=(this._slideIdx+1)%this._getSlideImages().length},1e3*e))}_stopSlideTimer(){this._slideTimer&&(clearInterval(this._slideTimer),this._slideTimer=null)}_slideTouchStart(e){this._slideTouchStartX=e.touches[0]?.clientX??null}_slideTouchEnd(e){if(null==this._slideTouchStartX)return;const t=(e.changedTouches[0]?.clientX??0)-this._slideTouchStartX;this._slideTouchStartX=null,Math.abs(t)<50||(t<0?this._nextSlide():this._prevSlide())}_renderSlideshow(e){const t=this._getSlideImages(),r=Math.min(this._slideIdx,t.length-1),s=t.length>1,n=t[r]||null;return a`
      <div class="wide-image-square"
        @touchstart=${s?this._slideTouchStart:null}
        @touchend=${s?this._slideTouchEnd:null}>
        ${n?a`<img src="${n}" alt="${e.name}" />`:a`
          <div class="hero-placeholder">
            <ha-icon icon="mdi:food"></ha-icon>
          </div>
        `}
        ${s?a`
          <button class="slide-btn slide-prev" @click=${this._prevSlide} title="${i("Previous")}">
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <button class="slide-btn slide-next" @click=${this._nextSlide} title="${i("Next")}">
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
          <div class="slide-dots">
            ${t.map((e,t)=>a`<span class="slide-dot ${t===r?"active":""}"></span>`)}
          </div>
        `:""}
      </div>
    `}_renderChipGroup(e,t,i){return t?.length?a`
      <div class="chip-group">
        <span class="chip-group-label">${e}:</span>
        ${t.map(e=>a`<span class="chip ${i}">${e}</span>`)}
      </div>
    `:""}_renderChipGroups(e){const t=e.courses||[],s=e.categories||[],n=e.collections||[];return t.length||s.length||n.length?a`
      <div class="chips-area">
        ${t.length?a`
          <div class="chip-group-row">
            <span class="chip chip-label">${i("Course:")}</span>
            ${t.map(e=>a`<button class="chip chip-course chip-nav" @click=${()=>this._handleChipNav("courses",e)} title="${i(r`Filter by course: ${e}`)}">${e}</button>`)}
          </div>`:""}
        ${s.length?a`
          <div class="chip-group-row">
            <span class="chip chip-label">${i("Category:")}</span>
            ${s.map(e=>a`<button class="chip chip-category chip-nav" @click=${()=>this._handleChipNav("categories",e)} title="${i(r`Filter by category: ${e}`)}">${e}</button>`)}
          </div>`:""}
        ${n.length?a`
          <div class="chip-group-row">
            <span class="chip chip-label">${i("Collection:")}</span>
            ${n.map(e=>a`<button class="chip chip-collection chip-nav" @click=${()=>this._handleChipNav("collections",e)} title="${i(r`Filter by collection: ${e}`)}">${e}</button>`)}
          </div>`:""}
      </div>
    `:""}_renderMetaRow(e){if(!(e.servings||e.prep_time||e.cook_time||e.total_time))return"";const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null,i=(e.prep_time||0)+(e.cook_time||0),r=t&&t!==i;return a`
      <div class="meta-chips">
        ${e.servings?a`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:silverware-fork-knife"></ha-icon>
            ${e.servings_text||e.servings}
          </span>
        `:""}
        ${e.prep_time?a`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:pencil-outline"></ha-icon>
            ${this._formatTime(e.prep_time)}
          </span>
        `:""}
        ${e.cook_time?a`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:pot-steam-outline"></ha-icon>
            ${this._formatTime(e.cook_time)}
          </span>
        `:""}
        ${r?a`
          <span class="meta-chip-icon">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            ${this._formatTime(t)}
          </span>
        `:""}
      </div>
    `}_renderQuickRating(e){const t=e.rating||0;return a`
      <div class="quick-rating">
        ${[1,2,3,4,5].map(e=>a`
          <span class="qr-star ${e<=t?"filled":""}"
            @click=${()=>this._handleQuickRate(e)}>★</span>
        `)}
      </div>
    `}_renderActionButtons(e){return a`
      <div class="action-btns-row">
        <button class="action-icon-btn ${e.is_favourite?"fav-active":""}"
          @click=${this._handleToggleFav}
          title="${e.is_favourite?i("Remove from favourites"):i("Add to favourites")}">
          <span class="btn-icon"><ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon></span>
          <span>${i("Favourite")}</span>
        </button>
        <button class="action-icon-btn" @click=${this._handleShowPlanner} title="${i("Add to meal plan")}">
          <span class="btn-icon"><ha-icon icon="mdi:calendar-plus"></ha-icon></span>
          <span>${i("Plan")}</span>
        </button>
        ${e.source_url?a`
          <a class="action-icon-btn" href="${e.source_url}" target="_blank" rel="noopener" title="${i("Open source")}">
            <span class="btn-icon"><ha-icon icon="mdi:open-in-new"></ha-icon></span>
            <span>${i("Source")}</span>
          </a>
        `:""}
        <button class="action-icon-btn" @click=${this._startEdit} title="${i("Edit recipe")}">
          <span class="btn-icon"><ha-icon icon="mdi:pencil-outline"></ha-icon></span>
          <span>${i("Edit")}</span>
        </button>
      </div>
    `}_renderScaler(){const e=this.recipe;return e?.servings?a`
      <div class="scaler-row">
        <ha-icon class="scaler-icon" icon="mdi:silverware-fork-knife"></ha-icon>
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
    `:""}_renderWakeLock(){return this.settings?.keepScreenOn?y()?a`
      <div class="wakelock-row">
        <button class="wakelock-btn ${this._wakeActive?"active":""}"
          @click=${()=>this._wakeActive?this._releaseWakeLock():this._requestWakeLock()}
          title="${this._wakeActive?i("Release screen lock"):i("Keep screen on")}">
          <ha-icon icon="${this._wakeActive?"mdi:eye":"mdi:eye-off-outline"}"></ha-icon>
          ${this._wakeActive?i("Screen on"):i("Keep screen on")}
        </button>
      </div>
    `:a`
        <div class="wakelock-row">
          <span class="wakelock-unsupported"
            title="${i("Requires a secure (HTTPS) connection and a browser that supports the Wake Lock API")}">
            <ha-icon icon="mdi:eye-off-outline"></ha-icon>
            ${i("Screen lock unavailable")}
          </span>
        </div>
      `:""}render(){if(!this.recipe)return a``;const e=this.recipe;return this.wide?this._renderWide(e):this._renderNarrow(e)}_renderWide(e){const t=this._groupIngredients(e.ingredients),s=this._showShoppingPicker,n=this._checkedIngredients,o=n?.size??0;return a`
      <div class="detail-container wide">
        <!--
          CSS grid: 2 cols (1fr 2fr) × auto rows
          [image]   [info card]
          [ings]    [directions]
          Whole card scrolls — no independent column scrolling
        -->
        <div class="wide-layout">

          <!-- row 1: image (1/3) + info card (2/3) -->
          <div class="wide-row">

          <!-- col 1: square image card (padding-top:100% inner wrapper forces square) -->
          <div class="wide-image-card">
            ${this._renderSlideshow(e)}
          </div>

          <!-- col 2: info card -->
          <div class="wide-info-card">
            <h1 class="wide-title">${e.name}</h1>
            ${this._renderActionButtons(e)}
            ${e.description?a`<div class="wide-desc md-content">${O(j(e.description))}</div>`:""}
            ${this._renderMetaRow(e)}
            ${this._renderChipGroups(e)}
          </div>

          </div><!-- end wide-row 1 -->

          <!-- row 2: ingredients (1/3) + directions (2/3) -->
          <div class="wide-row">

          <!-- col 1: ingredients column -->
          <div class="wide-ing-col">
            <!-- ingredients controls: scaler left, cart right — above ingredients only -->
            <div class="wide-ing-controls">
              ${this._renderScaler()}
              ${"success"===this._shoppingResult?a`
                <span class="ing-shop-success"><ha-icon icon="mdi:check-circle-outline"></ha-icon></span>
              `:a`
                <button class="ing-shop-btn ${s?"active":""}"
                  @click=${s?()=>{this._showShoppingPicker=!1}:this._openShoppingPicker}
                  title="${i(s?"Cancel":"Add to shopping list")}">
                  <ha-icon icon="${s?"mdi:close":"mdi:cart-plus"}"></ha-icon>
                </button>
              `}
            </div>

            <!-- shopping picker / review (shown inline when picking) -->
            ${s?this._shoppingReview?a`
              <div class="wide-section-card">${this._renderShoppingReview()}</div>
            `:a`
              <div class="wide-section-card shopping-picker-panel">
                <div class="picker-select-row">
                  <button class="picker-sel-btn" @click=${this._selectAllIngredients}>${i("Select All")}</button>
                  <button class="picker-sel-btn" @click=${this._clearAllIngredients}>${i("Clear All")}</button>
                  ${this.slmAvailable&&this.shoppingLists.length?a`
                    <select class="list-select" .value=${this._selectedListId}
                      @change=${e=>{this._selectedListId=e.target.value}}>
                      ${this.shoppingLists.map(e=>a`
                        <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                      `)}
                    </select>
                  `:""}
                </div>
                <div class="picker-btns">
                  <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>${i("Cancel")}</button>
                  <button class="action-btn primary"
                    ?disabled=${this._shoppingAdding||!o}
                    @click=${this._handleAddToShopping}>
                    ${this._shoppingAdding?a`<ha-circular-progress active size="tiny"></ha-circular-progress>`:i(o?r`Add (${o})`:"Add")}
                  </button>
                </div>
              </div>
            `:""}

            ${t.map(t=>a`
              <div class="wide-section-card">
                ${t.header?a`<div class="wide-section-title">${t.header}</div>`:""}
                ${t.items.length?a`
                  <ul class="ingredient-list">
                    ${t.items.map(t=>{const i=(e.ingredients||[]).indexOf(t),{amount:r,unit:o}=this._getDisplayAmount(t);return a`
                        <li class="ingredient-item ${s?"selectable":""}"
                          @click=${s?()=>this._toggleIngredient(i):void 0}>
                          ${s?a`
                            <span class="ing-check ${n?.has(i)?"checked":""}">
                              ${n?.has(i)?a`<ha-icon icon="mdi:check"></ha-icon>`:""}
                            </span>
                          `:""}
                          <span class="ing-amount">${r} ${o}</span>
                          <span class="ing-name">${t.name}${t.notes?a` <em class="ing-notes">(${t.notes})</em>`:""}</span>
                        </li>
                      `})}
                  </ul>
                `:""}
              </div>
            `)}

            <div class="wide-section-card">
              ${this._renderNutritionRing(e)}
            </div>
          </div>

          <!-- col 2: directions column, each step its own card -->
          <div class="wide-dir-col">
            <div class="wide-dir-spacer"></div>
            ${this._renderWakeLock()}
            ${(e.instructions||[]).length?(e.instructions||[]).map((e,t)=>{const r=this._completedSteps.has(t);return a`
                <div class="wide-section-card wide-step-card ${r?"step-done":""}">
                  <span class="step-num ${r?"done":""}"
                    @click=${e=>{e.stopPropagation(),this._toggleStepComplete(t)}}
                    title="${i(r?"Mark incomplete":"Mark complete")}"
                  >${r?a`<ha-icon icon="mdi:check"></ha-icon>`:t+1}</span>
                  <span class="step-text">${this._renderStepWithTimers(e)}</span>
                </div>
              `}):a`<p class="empty-tab">${i("No directions listed.")}</p>`}
            ${e.notes?a`
              <div class="wide-section-card">
                <div class="wide-section-title">${i("Notes")}</div>
                <div class="notes-text md-content">${O(j(e.notes))}</div>
              </div>
            `:""}
          </div>

          </div><!-- end wide-row 2 -->

        </div>

        <!-- Edit overlay -->
        ${this._editing?this._renderEditPanel():""}
      </div>
    `}_renderNarrow(e){const t=e.total_time||(e.prep_time||0)+(e.cook_time||0)||null;return a`
      <div class="detail-container">
        <!-- Hero image -->
        <div class="hero ${e.image_url?"":"no-image"}">
          ${e.image_url?a`
            <img src="${e.image_url}" alt="${e.name}" />
            <div class="hero-overlay"></div>
          `:a`
            <div class="hero-placeholder">
              <ha-icon icon="mdi:food"></ha-icon>
            </div>
          `}
          <div class="hero-actions">
            <button class="hero-btn ${e.is_favourite?"fav-active":""}" @click=${this._handleToggleFav}
              title="${e.is_favourite?i("Remove from favourites"):i("Add to favourites")}">
              <ha-icon icon="${e.is_favourite?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
            </button>
            ${e.source_url?a`
              <a class="hero-btn" href="${e.source_url}" target="_blank" rel="noopener" title="${i("Open source")}">
                <ha-icon icon="mdi:open-in-new"></ha-icon>
              </a>
            `:""}
          </div>
        </div>

        <div class="detail-scroll">
          <!-- Recipe meta -->
          <div class="detail-head">
            <h2 class="recipe-title">${e.name}</h2>
            ${this._renderActionButtons(e)}
            ${e.description?a`<div class="detail-desc md-content">${O(j(e.description))}</div>`:""}

            <div class="meta-row">
              ${e.prep_time?a`
                <div class="meta-item">
                  <span class="meta-label">${i("Prep")}</span>
                  <span class="meta-val">${this._formatTime(e.prep_time)}</span>
                </div>
              `:""}
              ${e.cook_time?a`
                <div class="meta-item">
                  <span class="meta-label">${i("Cook")}</span>
                  <span class="meta-val">${this._formatTime(e.cook_time)}</span>
                </div>
              `:""}
              ${t?a`
                <div class="meta-item">
                  <span class="meta-label">${i("Total")}</span>
                  <span class="meta-val">${this._formatTime(t)}</span>
                </div>
              `:""}
              ${e.servings?a`
                <div class="meta-item">
                  <span class="meta-label">${i("Serves")}</span>
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
            ${[["ingredients",i("Ingredients")],["directions",i("Directions")],["notes",i("Notes")],["nutrition",i("Nutrition")],["photos",i("Photos")]].map(([e,t])=>a`
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
    `}_getDisplayAmount(e){if(this._metricMode){const t=function(e,t){if(!e||!t)return null;const i=parseFloat(e);if(isNaN(i))return null;const r=t.toLowerCase().trim(),a=H[r];if(!a)return null;let s=i*a.factor,n=a.to;"lb"===r&&s>=500&&(s/=1e3,n="kg"),"ml"===n&&s>=1e3&&(s/=1e3,n="L");const o=s>=10?Math.round(s):Math.round(10*s)/10;return{amount:String(o),unit:n}}(this._scaleAmount(e.amount),e.unit);if(t)return t}return{amount:this._scaleAmount(e.amount)||"",unit:e.unit||""}}_groupIngredients(e){const t=[];let i={header:null,items:[]};for(const r of e||[])if(r.is_heading||r.name?.startsWith("#")){(i.items.length>0||null!==i.header)&&t.push(i);i={header:(r.name?.startsWith("#")?r.name.slice(1).trim():r.name)||"",items:[]}}else i.items.push(r);return(i.items.length>0||null!==i.header)&&t.push(i),t.length?t:[{header:null,items:e||[]}]}_renderIngredients(e){const t=this._showShoppingPicker,s=this._checkedIngredients,n=s?.size??0,o=(e.ingredients||[]).some(e=>e.unit&&H[e.unit.toLowerCase().trim()]);return a`
      ${this.settings?.showUnitConversion&&o?a`
        <div class="metric-toggle-row">
          <button class="metric-btn ${this._metricMode?"active":""}"
            @click=${()=>{this._metricMode=!this._metricMode}}>
            <ha-icon icon="mdi:swap-horizontal"></ha-icon>
            ${this._metricMode?i("Showing metric"):i("Convert to metric")}
          </button>
        </div>
      `:""}

      ${e.ingredients?.length?a`
        <ul class="ingredient-list">
          ${e.ingredients.map((e,i)=>{if(e.is_heading||e.name?.startsWith("#")){const t=e.name?.startsWith("#")?e.name.slice(1).trim():e.name;return a`<li class="ing-heading">${t}</li>`}const{amount:r,unit:n}=this._getDisplayAmount(e);return a`
              <li class="ingredient-item ${t?"selectable":""}"
                @click=${t?()=>this._toggleIngredient(i):void 0}>
                ${t?a`
                  <span class="ing-check ${s?.has(i)?"checked":""}">
                    ${s?.has(i)?a`<ha-icon icon="mdi:check"></ha-icon>`:""}
                  </span>
                `:""}
                <span class="ing-amount">${r} ${n}</span>
                <span class="ing-name">${e.name}${e.notes?a` <em class="ing-notes">(${e.notes})</em>`:""}</span>
              </li>
            `})}
        </ul>
      `:a`<p class="empty-tab">${i("No ingredients listed.")}</p>`}

      <!-- Shopping section (always shown) -->
      <div class="shopping-section">
        ${"success"===this._shoppingResult?a`
          <div class="shopping-success">
            <ha-icon icon="mdi:check-circle-outline"></ha-icon>
            ${i("Added to shopping list!")}
          </div>
        `:t&&this._shoppingReview?this._renderShoppingReview():t?a`
          <div class="shopping-picker-panel">
            <div class="picker-select-row">
              <button class="picker-sel-btn" @click=${this._selectAllIngredients}>${i("Select All")}</button>
              <button class="picker-sel-btn" @click=${this._clearAllIngredients}>${i("Clear All")}</button>
              ${this.slmAvailable&&this.shoppingLists.length?a`
                <select class="list-select" .value=${this._selectedListId}
                  @change=${e=>{this._selectedListId=e.target.value}}>
                  ${this.shoppingLists.map(e=>a`
                    <option value="${e.id}" ?selected=${e.id===this._selectedListId}>${e.name}</option>
                  `)}
                </select>
              `:this.slmAvailable?a`
                <span class="shopping-note">${i("No lists found in Shopping List Manager")}</span>
              `:""}
            </div>
            <div class="picker-btns">
              <button class="action-btn" @click=${()=>{this._showShoppingPicker=!1}}>${i("Cancel")}</button>
              <button class="action-btn primary"
                ?disabled=${this._shoppingAdding||!n}
                @click=${this._handleAddToShopping}>
                ${this._shoppingAdding?a`<ha-circular-progress active size="tiny"></ha-circular-progress>`:i(n?r`Add (${n})`:"Add")}
              </button>
            </div>
          </div>
        `:a`
          <button class="action-btn primary shopping-btn" @click=${this._openShoppingPicker}>
            <ha-icon icon="mdi:cart-plus"></ha-icon>
            ${i("Add to Shopping List")}
          </button>
        `}
      </div>
    `}_toggleStepComplete(e){const t=new Set(this._completedSteps);t.has(e)?t.delete(e):t.add(e),this._completedSteps=t}_renderDirections(e){return e.instructions?.length?a`
      <ol class="steps-list">
        ${e.instructions.map((e,t)=>{const r=this._completedSteps.has(t);return a`
            <li class="step-item ${r?"step-done":""}">
              <span class="step-num ${r?"done":""}"
                @click=${e=>{e.stopPropagation(),this._toggleStepComplete(t)}}
                title="${i(r?"Mark incomplete":"Mark complete")}"
              >${r?a`<ha-icon icon="mdi:check"></ha-icon>`:t+1}</span>
              <span class="step-text">${this._renderStepWithTimers(e)}</span>
            </li>
          `})}
      </ol>
    `:a`<p class="empty-tab">${i("No directions listed.")}</p>`}_renderStepWithTimers(e){const t=[];let s,n=0;for(U.lastIndex=0;null!==(s=U.exec(e));){s.index>n&&t.push(e.slice(n,s.index));const o=s[0],c=W(o);c>0?t.push(a`<button class="time-chip" @click=${e=>{e.stopPropagation(),this._fireTimer(c,o)}} title="${i(r`Start timer for ${o}`)}">
          <ha-icon icon="mdi:timer-outline"></ha-icon>${o}
        </button>`):t.push(o),n=s.index+s[0].length}return n<e.length&&t.push(e.slice(n)),t}_renderNotes(e){return a`
      ${e.notes?a`<div class="notes-text md-content">${O(j(e.notes))}</div>`:a`<p class="empty-tab">${i("No notes.")}</p>`}
    `}_renderNutrition(e){const t=e.nutrition||{};if(!N.some(e=>null!=t[e.key]&&""!==t[e.key]))return a`
        <div class="empty-tab">
          <p>${i("No nutrition info. Add it via the edit panel.")}</p>
        </div>
      `;const s=e.servings?i(r`Per serving (${e.servings_text||e.servings})`):i("Per serving");return a`
      <div class="nutrition-panel">
        <div class="nutr-header">${i("Nutrition Facts")}</div>
        <div class="nutr-sub">${s}</div>
        <div class="nutr-divider thick"></div>
        ${N.map(e=>{const i=t[e.key];return null==i||""===i?"":a`
            <div class="nutr-row ${e.bold?"nutr-bold":""} ${e.indent?"nutr-indent":""}">
              <span class="nutr-label">${e.label}</span>
              <span class="nutr-val">${i}${"kcal"!==e.unit?a`<em> ${e.unit}</em>`:""}</span>
            </div>
            <div class="nutr-divider"></div>
          `})}
      </div>
    `}_renderNutritionRing(e){const t=e?.nutrition||{},s=parseFloat(t.calories)||0,n=parseFloat(t.fat)||0,o=parseFloat(t.carbohydrates)||0,c=parseFloat(t.protein)||0,l=9*n,d=4*o,p=4*c,h=l+d+p;if(!(h>0||s>0))return a`
        <div class="nutr-card">
          <p class="empty-tab" style="margin:0;padding:8px 0;text-align:center">${i("No nutritional information available.")}</p>
        </div>`;const u=[{label:i("Carbs"),val:o,cal:d,color:"#f59e0b"},{label:i("Total fat"),val:n,cal:l,color:"#3b82f6"},{label:i("Protein"),val:c,cal:p,color:"#22c55e"}],m=50,g=50,f=2*Math.PI*42,b=7+4*f/360,v=h>0?Math.max(0,d/h*f-b):0,x=h>0?Math.max(0,l/h*f-b):0,_=h>0?Math.max(0,p/h*f-b):0,y=(h>0?d/h*360:0)-90,w=y+(h>0?l/h*360:0),k=s>0?Math.round(s):h>0?Math.round(h):null,$=Object.entries(Z).filter(([e])=>parseFloat(t[e])>0).map(([e,i])=>{const r=parseFloat(t[e]),a=Math.min(Math.round(r/i.val*100),999);return{key:e,label:i.label,val:r,unit:i.unit,pct:a}});return a`
      <div class="nutr-card">
        <!-- Top row: donut ring + macro columns -->
        <div class="nutr-top">
          <div class="nutr-ring-wrap">
            <svg width="90" height="90" viewBox="0 0 100 100" style="display:block">
              <!-- Background track — always visible -->
              <circle cx="${m}" cy="${g}" r="${42}" fill="none"
                stroke="var(--rm-border)" stroke-width="7"/>
              <!-- Colored arcs: all 3 inline in the same html template so they
                   inherit SVG namespace from the parser. Hidden via opacity when
                   there's no data. Dynamic values are attributes, not new elements. -->
              <circle cx="${m}" cy="${g}" r="${42}" fill="none"
                stroke="#f59e0b" stroke-width="7" stroke-linecap="round"
                stroke-dasharray="${v} ${f}"
                transform="rotate(${-90} ${m} ${g})"
                opacity="${h>0&&v>0?.95:0}"/>
              <circle cx="${m}" cy="${g}" r="${42}" fill="none"
                stroke="#3b82f6" stroke-width="7" stroke-linecap="round"
                stroke-dasharray="${x} ${f}"
                transform="rotate(${y} ${m} ${g})"
                opacity="${h>0&&x>0?.95:0}"/>
              <circle cx="${m}" cy="${g}" r="${42}" fill="none"
                stroke="#22c55e" stroke-width="7" stroke-linecap="round"
                stroke-dasharray="${_} ${f}"
                transform="rotate(${w} ${m} ${g})"
                opacity="${h>0&&_>0?.95:0}"/>
              <text x="${m}" y="${48}" text-anchor="middle"
                fill="var(--rm-text)" font-size="16" font-weight="700" font-family="inherit">
                ${k??"–"}
              </text>
              <text x="${m}" y="${62}" text-anchor="middle"
                fill="var(--rm-text-secondary)" font-size="9" font-family="inherit">${i("cals")}</text>
            </svg>
          </div>

          <div class="nutr-macro-cols">
            ${u.map(e=>{const t=h>0?Math.round(e.cal/h*100):0;return a`
                <div class="nutr-macro-col">
                  <span class="nutr-mcol-num" style="color:${e.color}">${e.val>0?`${e.val} g`:"—"}</span>
                  <span class="nutr-mcol-label">${e.label}</span>
                  ${t>0?a`<span class="nutr-mcol-pct" style="color:${e.color}">${t}% cals</span>`:""}
                </div>
              `})}
          </div>
        </div>

        ${e?.servings?a`
          <div class="nutr-serving-note">
            ${e.servings_text?i(r`Per ${e.servings_text}`):i(r`Per ${e.servings} serving${1!==e.servings?"s":""}`)}
          </div>
        `:""}

        <!-- Daily RDA collapsible -->
        ${$.length?a`
          <button class="nutr-rda-toggle" @click=${()=>{this._nutritionExpanded=!this._nutritionExpanded}}>
            <span class="nutr-rda-title">${i("Daily RDA Nutrition")}</span>
            <span class="nutr-rda-count">${$.length}</span>
            <ha-icon icon="${this._nutritionExpanded?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
          </button>
          ${this._nutritionExpanded?a`
            <div class="nutr-rda-rows">
              ${$.map(e=>a`
                <div class="nutr-rda-row">
                  <span class="nutr-rda-label">${e.label}</span>
                  <span class="nutr-rda-val">${e.val} ${e.unit}</span>
                  <span class="nutr-rda-pct">${e.pct}%</span>
                  <div class="nutr-rda-bar-wrap">
                    <div class="nutr-rda-bar ${e.pct>100?"over":""}" style="width:${Math.min(e.pct,100)}%"></div>
                  </div>
                </div>
              `)}
            </div>
          `:""}
        `:""}
      </div>
    `}_renderPhotos(e){const t=e.photos||[],r=e.image_url,s=r?[r,...t.filter(e=>e!==r)]:t;return a`
      <div class="photos-tab">
        ${s.length?a`
          <div class="photos-grid">
            ${s.map(e=>a`
              <div class="photo-item ${e===r?"main-photo":""}">
                <img src="${e}" alt="${i("Recipe photo")}" loading="lazy" />
                ${e===r?a`<span class="photo-badge">${i("Main")}</span>`:a`
                  <button class="photo-action set-main" @click=${()=>this._setMainPhoto(e)} title="${i("Set as main photo")}">
                    <ha-icon icon="mdi:star-outline"></ha-icon>
                  </button>
                `}
                <button class="photo-action remove-photo" @click=${()=>this._removePhoto(e)} title="${i("Remove photo")}">
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              </div>
            `)}
          </div>
        `:a`
          <div class="empty-tab">
            <ha-icon icon="mdi:image-off-outline"></ha-icon>
            <p>${i("No photos yet.")}</p>
          </div>
        `}

        <div class="photo-add-section">
          <div class="photo-add-label">${i("Add a photo")}</div>
          <div class="photo-url-row">
            <input
              type="url"
              class="photo-url-input"
              placeholder="${i("Paste image URL…")}"
              .value=${this._photoUrlInput}
              @input=${e=>{this._photoUrlInput=e.target.value}}
              @keydown=${e=>{"Enter"===e.key&&this._handleAddPhotoUrl()}}
            />
            <button class="action-btn primary" ?disabled=${!this._photoUrlInput.trim()||this._addingPhotoUrl}
              @click=${this._handleAddPhotoUrl}>
              ${i("Add")}
            </button>
          </div>
          <div class="camera-btns">
            <label class="camera-btn-split">
              <ha-icon icon="mdi:camera"></ha-icon>
              <span>${i("Take Photo")}</span>
              <input type="file" accept="image/*" capture="environment" class="camera-input"
                @change=${this._handleCameraCapture} />
            </label>
            <label class="camera-btn-split">
              <ha-icon icon="mdi:image-multiple-outline"></ha-icon>
              <span>${i("Choose from Library")}</span>
              <input type="file" accept="image/*" class="camera-input"
                @change=${this._handleCameraCapture} />
            </label>
          </div>
        </div>
      </div>
    `}_renderEditPanel(){const e=this._editData;return a`
      <div class="edit-overlay" @click=${e=>{e.target===e.currentTarget&&this._cancelEdit()}}>
        <div class="edit-panel">
          <div class="edit-header">
            <span>${i("Edit Recipe")}</span>
            <button class="icon-btn" @click=${this._cancelEdit}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>
          <div class="edit-body">

            ${this._renderField(i("Name"),"name","text")}

            <!-- Image section -->
            <div class="edit-section-label">${i("Image")}</div>
            <div class="edit-photo-row">
              ${(()=>{const t=[...new Set([e.image_url,...e.photos||[]].filter(Boolean))];return a`
                  ${t.map(t=>a`
                    <div class="edit-photo-thumb ${t===e.image_url?"selected":""}"
                      @click=${()=>this._handleEditField("image_url",t)}
                      title="${i("Set as main image")}">
                      <img src="${t}" alt="" />
                      ${t===e.image_url?a`<span class="edit-thumb-badge"><ha-icon icon="mdi:check"></ha-icon></span>`:""}
                    </div>
                  `)}
                  <label class="edit-photo-add ${this._editImageUploading?"loading":""}" title="${i("Upload photo")}">
                    <input type="file" accept="image/*" style="display:none"
                      @change=${e=>{const t=e.target.files?.[0];t&&this._editUploadImage(t),e.target.value=""}} />
                    <ha-icon icon="${this._editImageUploading?"mdi:loading":"mdi:plus"}"></ha-icon>
                  </label>
                `})()}
            </div>
            <div class="edit-field">
              <label>${i("Or paste image URL")}</label>
              <input type="url" .value=${e.image_url??""}
                @input=${e=>this._handleEditField("image_url",e.target.value)}
                placeholder="https://…" />
            </div>

            ${this._renderField(i("Description"),"description","textarea")}
            ${this._renderField(i("Source URL"),"source_url","url")}

            <div class="edit-row-3">
              ${this._renderField(i("Prep (min)"),"prep_time","number")}
              ${this._renderField(i("Cook (min)"),"cook_time","number")}
              ${this._renderField(i("Servings"),"servings","number")}
            </div>

            <!-- Star rating picker -->
            <div class="edit-field">
              <label>${i("Rating")}</label>
              <div class="edit-stars">
                ${[1,2,3,4,5].map(t=>a`
                  <span class="edit-star ${t<=(e.rating||0)?"filled":""}"
                    @click=${()=>this._handleEditField("rating",e.rating===t?0:t)}
                  >★</span>
                `)}
              </div>
            </div>

            ${this._renderListPicker("tags",i("Tags"),this.allTags)}
            ${this._renderListPicker("courses",i("Courses"),this.allCourses)}
            ${this._renderListPicker("categories",i("Categories"),this.allCategories)}
            ${this._renderListPicker("collections",i("Collections"),this.allCollections)}
            ${this._renderField(i("Notes"),"notes","textarea")}

            <!-- Ingredients editor -->
            <div class="edit-section-label">${i(r`Ingredients (${(e.ingredients||[]).length})`)}</div>
            ${(e.ingredients||[]).length?a`
              <ul class="edit-ing-list">
                ${(e.ingredients||[]).map((t,r)=>{const s=this._editIngEdit?.idx===r,n=t.is_heading||t.name?.startsWith("#");if(s){const e=this._editIngEdit;return a`
                      <li class="edit-ing-inline-edit ${n?"edit-ing-heading":""}">
                        ${e.heading?a`
                          <input class="ing-inline-input ing-inline-name" type="text" placeholder="${i("Section header")}"
                            .value=${e.name}
                            @input=${t=>{this._editIngEdit={...e,name:t.target.value}}}
                            @keydown=${e=>{"Enter"===e.key&&this._saveEditIngredient(),"Escape"===e.key&&this._cancelEditIngredient()}}
                          />
                        `:a`
                          <input class="ing-inline-input ing-inline-amt" type="text" placeholder="${i("Amt")}"
                            .value=${e.amount}
                            @input=${t=>{this._editIngEdit={...e,amount:t.target.value}}}
                            @keydown=${e=>{"Enter"===e.key&&this._saveEditIngredient(),"Escape"===e.key&&this._cancelEditIngredient()}}
                          />
                          <input class="ing-inline-input ing-inline-unit" type="text" placeholder="${i("Unit")}"
                            .value=${e.unit}
                            @input=${t=>{this._editIngEdit={...e,unit:t.target.value}}}
                            @keydown=${e=>{"Enter"===e.key&&this._saveEditIngredient(),"Escape"===e.key&&this._cancelEditIngredient()}}
                          />
                          <input class="ing-inline-input ing-inline-name" type="text" placeholder="${i("Ingredient")}"
                            .value=${e.name}
                            @input=${t=>{this._editIngEdit={...e,name:t.target.value}}}
                            @keydown=${e=>{"Enter"===e.key&&this._saveEditIngredient(),"Escape"===e.key&&this._cancelEditIngredient()}}
                          />
                        `}
                        <button class="ing-inline-save" @click=${this._saveEditIngredient} title="${i("Save")}">
                          <ha-icon icon="mdi:check"></ha-icon>
                        </button>
                        <button class="ing-inline-cancel" @click=${this._cancelEditIngredient} title="${i("Cancel")}">
                          <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                      </li>
                    `}return a`
                    <li
                      draggable="true"
                      class="${n?"edit-ing-heading":""} ${this._dragIngOver===r?"drag-over":""}"
                      @dragstart=${e=>{this._dragIngFrom=r,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(r))}}
                      @dragover=${e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragIngOver!==r&&(this._dragIngOver=r)}}
                      @dragleave=${()=>{this._dragIngOver===r&&(this._dragIngOver=-1)}}
                      @drop=${e=>{e.preventDefault(),this._editDropIngredient(this._dragIngFrom,r)}}
                      @dragend=${()=>{this._dragIngOver=-1,this._dragIngFrom=-1}}
                    >
                      <ha-icon icon="mdi:drag-vertical" class="drag-handle"></ha-icon>
                      <span class="edit-ing-text" @click=${()=>this._startEditIngredient(r)} title="${i("Click to edit")}">
                        ${n?a`<strong>${t.name?.startsWith("#")?t.name.slice(1).trim():t.name}</strong>`:a`${t.amount?`${t.amount}${t.unit?" "+t.unit:""} `:""}${t.name}`}
                      </span>
                      <div class="edit-reorder-btns">
                        <button class="edit-move-btn" ?disabled=${0===r} @click=${()=>this._editMoveIngredient(r,-1)} title="${i("Move up")}">
                          <ha-icon icon="mdi:chevron-up"></ha-icon>
                        </button>
                        <button class="edit-move-btn" ?disabled=${r===e.ingredients.length-1} @click=${()=>this._editMoveIngredient(r,1)} title="${i("Move down")}">
                          <ha-icon icon="mdi:chevron-down"></ha-icon>
                        </button>
                      </div>
                      <button class="edit-remove-btn" @click=${()=>this._editRemoveIngredient(r)}>
                        <ha-icon icon="mdi:close"></ha-icon>
                      </button>
                    </li>
                  `})}
              </ul>
            `:""}
            <div class="edit-add-row">
              <input
                type="text"
                .value=${this._editIngInput}
                @input=${e=>{this._editIngInput=e.target.value}}
                @keydown=${e=>{"Enter"===e.key&&this._editAddIngredient()}}
                placeholder="${i('e.g. "2 cups flour" or "# Section Header"')}"
              />
              <button class="edit-add-btn" @click=${this._editAddIngredient}>${i("Add")}</button>
            </div>

            <!-- Instructions editor -->
            <div class="edit-section-label">${i(r`Directions (${(e.instructions||[]).length} steps)`)}</div>
            ${(e.instructions||[]).length?a`
              <ol class="edit-steps-list">
                ${(e.instructions||[]).map((t,r)=>a`
                  <li
                    draggable="true"
                    class="${this._dragStepOver===r?"drag-over":""}"
                    @dragstart=${e=>{this._dragStepFrom=r,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(r))}}
                    @dragover=${e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragStepOver!==r&&(this._dragStepOver=r)}}
                    @dragleave=${()=>{this._dragStepOver===r&&(this._dragStepOver=-1)}}
                    @drop=${e=>{e.preventDefault(),this._editDropStep(this._dragStepFrom,r)}}
                    @dragend=${()=>{this._dragStepOver=-1,this._dragStepFrom=-1}}
                  >
                    <ha-icon icon="mdi:drag-vertical" class="drag-handle"></ha-icon>
                    <span class="edit-ing-text">${t}</span>
                    <div class="edit-reorder-btns">
                      <button class="edit-move-btn" ?disabled=${0===r} @click=${()=>this._editMoveStep(r,-1)} title="${i("Move up")}">
                        <ha-icon icon="mdi:chevron-up"></ha-icon>
                      </button>
                      <button class="edit-move-btn" ?disabled=${r===e.instructions.length-1} @click=${()=>this._editMoveStep(r,1)} title="${i("Move down")}">
                        <ha-icon icon="mdi:chevron-down"></ha-icon>
                      </button>
                    </div>
                    <button class="edit-remove-btn" @click=${()=>this._editRemoveStep(r)}>
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
                placeholder="${i("Type a step, press Enter to add…")}"
              ></textarea>
              <button class="edit-add-btn" @click=${()=>{this._editAddStep(this._editStepInput),this._editStepInput=""}}>${i("Add")}</button>
            </div>

            <!-- Nutrition section -->
            <div class="edit-section-label">${i("Nutrition Facts (per serving)")}</div>
            <div class="edit-row-3">
              ${this._renderField(i("Calories (kcal)"),"cal","number")}
              ${this._renderField(i("Protein (g)"),"prot","number")}
              ${this._renderField(i("Fat (g)"),"fat","number")}
            </div>
            <div class="edit-row-3">
              ${this._renderField(i("Saturated Fat (g)"),"satf","number")}
              ${this._renderField(i("Carbs (g)"),"carb","number")}
              ${this._renderField(i("Fiber (g)"),"fib","number")}
            </div>
            <div class="edit-row-3">
              ${this._renderField(i("Sugar (g)"),"sug","number")}
              ${this._renderField(i("Sodium (mg)"),"sod","number")}
              ${this._renderField(i("Cholesterol (mg)"),"chol","number")}
            </div>

          </div>
          <div class="edit-footer">
            <button class="action-btn danger-outline" @click=${this._handleDeleteRecipe}
              title="${this._confirmDelete?i("Click again to confirm delete"):i("Delete recipe")}">
              <ha-icon icon="${this._confirmDelete?"mdi:alert":"mdi:trash-can-outline"}"></ha-icon>
              ${this._confirmDelete?i("Confirm?"):i("Delete")}
            </button>
            <div class="edit-footer-right">
              <button class="action-btn" @click=${this._cancelEdit}>${i("Cancel")}</button>
              <button class="action-btn primary" @click=${this._saveEdit}>${i("Save")}</button>
            </div>
          </div>
        </div>
      </div>
    `}_renderField(e,t,i){const r=this._editData[t]??"";return"textarea"===i?a`
        <div class="edit-field">
          <label>${e}</label>
          <textarea
            .value=${r}
            @input=${e=>this._handleEditField(t,e.target.value)}
            rows="3"
          ></textarea>
        </div>
      `:a`
      <div class="edit-field">
        <label>${e}</label>
        <input
          type="${i}"
          .value=${String(r)}
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
      display: flex; gap: 16px; flex-wrap: wrap; margin: 6px 0 10px; justify-content: center;
    }
    .action-icon-btn {
      display: flex; flex-direction: column; align-items: center; gap: 5px;
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-secondary); font-size: 10px; font-weight: 600;
      transition: color 0.15s; text-decoration: none; width: 56px;
    }
    .action-icon-btn .btn-icon {
      width: 46px; height: 46px; border-radius: 50%;
      background: var(--rm-accent-soft, rgba(255,107,53,0.12));
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s; flex-shrink: 0;
    }
    .action-icon-btn ha-icon { --mdc-icon-size: 22px; }
    .action-icon-btn:hover .btn-icon { background: rgba(255,107,53,0.25); }
    .action-icon-btn:hover { color: var(--rm-accent, #ff6b35); }
    .action-icon-btn.fav-active .btn-icon { background: rgba(207,102,121,0.15); }
    .action-icon-btn.fav-active { color: var(--error-color, #cf6679); }
    .action-icon-btn.danger .btn-icon { background: var(--error-color, #cf6679); }
    .action-icon-btn.danger { color: #fff; }

    /* Meta chips (wide layout) */
    .meta-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; justify-content: center; }
    .meta-chip-icon {
      display: inline-flex; align-items: center; gap: 6px;
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 20px; padding: 5px 12px; font-size: 12px;
      color: var(--rm-text-secondary); font-weight: 600;
    }
    .meta-chip-icon ha-icon { --mdc-icon-size: 14px; }

    /* Chip groups: column of rows, each row = label chip + value chips */
    .chips-area { display: flex; flex-direction: column; gap: 5px; }
    .chip-group-row { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; }
    .chip-label {
      background: var(--rm-bg); border: 1px solid var(--rm-border);
      color: var(--rm-text-secondary); font-weight: 600; cursor: default;
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
      padding: 3px 10px;
      font-size: 12px;
      border: none;
      cursor: default;
    }
    .chip-nav {
      cursor: pointer;
      transition: filter 0.15s, opacity 0.15s;
    }
    .chip-nav:hover { filter: brightness(1.25); opacity: 0.9; }
    .chip-course    { background: rgba(88,166,255,0.15); color: #58a6ff; }
    .chip-category  { background: rgba(63,185,80,0.15);  color: #3fb950; }
    .chip-collection{ background: rgba(210,153,34,0.15); color: #d2a01e; }
    .chip-tag { background: var(--rm-accent-soft); color: var(--rm-accent); }

    /* Scaler */
    .scaler-row { display: flex; align-items: center; gap: 8px; }
    .scaler-icon { --mdc-icon-size: 18px; color: var(--rm-text-secondary); flex-shrink: 0; }
    .scaler-ctrl { display: flex; align-items: center; gap: 6px; }
    .scaler-btn {
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 50%;
      width: 34px; height: 34px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: var(--rm-text-secondary); padding: 0; transition: all 0.15s;
    }
    .scaler-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent); border-color: var(--rm-accent); }
    .scaler-btn ha-icon { --mdc-icon-size: 18px; }
    .scaler-val {
      font-size: 13px; font-weight: 600; color: var(--rm-text);
      min-width: 34px; height: 34px; text-align: center;
      display: flex; align-items: center; justify-content: center;
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 8px;
    }

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
    .wakelock-unsupported {
      display: inline-flex; align-items: center; gap: 5px;
      border: 1px dashed var(--rm-border);
      border-radius: 20px; padding: 4px 12px;
      font-size: 12px; color: var(--rm-text-muted); opacity: 0.8;
    }
    .wakelock-unsupported ha-icon { --mdc-icon-size: 14px; }

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
      color: var(--rm-ink, #fff);
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
      color: var(--rm-ink, #fff);
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
    .time-chip:hover { background: var(--rm-accent, #ff6b35); color: var(--rm-ink, #fff); }

    /* Notes */
    .notes-text { font-size: 14px; color: var(--rm-text, #e5e5ea); line-height: 1.6; }
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

    /* Nutrition card */
    .nutr-card { display: flex; flex-direction: column; gap: 10px; }
    .nutr-top { display: flex; align-items: center; gap: 14px; }
    .nutr-ring-wrap { flex-shrink: 0; width: 90px; height: 90px; }
    .nutr-macro-cols { display: flex; gap: 10px; flex: 1; justify-content: space-around; }
    .nutr-macro-col { display: flex; flex-direction: column; align-items: center; gap: 2px; }
    .nutr-mcol-num { font-size: 17px; font-weight: 700; line-height: 1; }
    .nutr-mcol-label { font-size: 11px; color: var(--rm-text-secondary); font-weight: 500; }
    .nutr-mcol-pct { font-size: 10px; font-weight: 600; }
    .nutr-serving-note {
      font-size: 11px; color: var(--rm-text-muted); text-align: center; margin-top: -4px;
    }
    /* Daily RDA expandable */
    .nutr-rda-toggle {
      display: flex; align-items: center; gap: 6px;
      background: none; border: none; border-top: 1px solid var(--rm-border);
      padding: 10px 0 0; cursor: pointer; color: var(--rm-text); font-size: 13px; font-weight: 600;
      width: 100%; text-align: left;
    }
    .nutr-rda-title { flex: 1; }
    .nutr-rda-count {
      font-size: 12px; font-weight: 700; color: var(--rm-text-secondary);
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 10px; padding: 1px 7px;
    }
    .nutr-rda-toggle ha-icon { --mdc-icon-size: 18px; color: var(--rm-text-secondary); }
    .nutr-rda-rows { display: flex; flex-direction: column; gap: 6px; padding-top: 6px; }
    .nutr-rda-row {
      display: grid;
      grid-template-columns: 1fr auto auto;
      grid-template-rows: auto 4px;
      column-gap: 8px;
      row-gap: 4px;
      font-size: 12px;
    }
    .nutr-rda-label { color: var(--rm-text-secondary); grid-column: 1; grid-row: 1; }
    .nutr-rda-val { color: var(--rm-text); font-weight: 600; grid-column: 2; grid-row: 1; white-space: nowrap; }
    .nutr-rda-pct { color: var(--rm-text-muted); grid-column: 3; grid-row: 1; white-space: nowrap; min-width: 36px; text-align: right; }
    .nutr-rda-bar-wrap { grid-column: 1 / -1; grid-row: 2; background: var(--rm-border); border-radius: 2px; height: 4px; overflow: hidden; }
    .nutr-rda-bar { height: 100%; background: var(--rm-accent); border-radius: 2px; transition: width 0.3s; }
    .nutr-rda-bar.over { background: var(--error-color, #cf6679); }

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
      color: var(--rm-ink, #fff);
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
      color: var(--rm-ink, #fff);
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
    .edit-photo-row {
      display: flex; flex-wrap: wrap; gap: 8px; align-items: flex-start;
    }
    .edit-photo-thumb {
      position: relative; width: 144px; height: 144px;
      border-radius: 8px; overflow: hidden; cursor: pointer; flex-shrink: 0;
      border: 2px solid transparent; transition: border-color 0.15s;
    }
    .edit-photo-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .edit-photo-thumb.selected { border-color: var(--rm-accent, #ff6b35); }
    .edit-thumb-badge {
      position: absolute; bottom: 6px; right: 6px;
      background: var(--rm-accent, #ff6b35); border-radius: 50%;
      width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;
    }
    .edit-thumb-badge ha-icon { --mdc-icon-size: 16px; color: #fff; }
    .edit-photo-add {
      width: 144px; height: 144px; border-radius: 8px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      background: var(--rm-accent-soft, rgba(255,107,53,0.12));
      border: 2px dashed var(--rm-accent, #ff6b35);
      cursor: pointer; color: var(--rm-accent, #ff6b35);
      transition: background 0.15s;
    }
    .edit-photo-add:hover { background: rgba(255,107,53,0.22); }
    .edit-photo-add.loading { opacity: 0.6; cursor: not-allowed; }
    .edit-photo-add ha-icon { --mdc-icon-size: 40px; }
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
    .drag-handle {
      flex-shrink: 0; cursor: grab; color: var(--rm-text-muted, #636366);
      --mdc-icon-size: 18px; touch-action: none;
    }
    .drag-handle:active { cursor: grabbing; }
    .edit-ing-list li.drag-over,
    .edit-steps-list li.drag-over {
      border-top: 2px solid var(--rm-accent); margin-top: -1px;
    }
    .edit-reorder-btns { display: flex; flex-direction: column; flex-shrink: 0; gap: 0; }
    .edit-move-btn {
      background: none; border: none; cursor: pointer; padding: 0; line-height: 1;
      color: var(--rm-text-secondary, #8e8e93); --mdc-icon-size: 14px;
    }
    .edit-move-btn:disabled { opacity: 0.2; cursor: default; }
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
      color: var(--rm-ink, #fff); padding: 7px 12px; cursor: pointer; font-size: 13px;
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

    /* ── Wide grid layout (2 cols × auto rows) ─────────────── */
    /* Whole card scrolls — no independent column scrolling */
    .detail-container.wide {
      overflow-x: hidden;
      overflow-y: auto;
    }

    .wide-layout {
      --ion-grid-columns: 12;
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 14px;
      width: 100%;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    /* Each row is a flex container — no gap (columns are exact % fractions summing to 100%).
       align-items:stretch makes both columns the same height.
       Column spacing uses margin-left + reduced width on col-2 items. */
    .wide-row {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 100%;
      box-sizing: border-box;
    }

    /* Col 1 — image card: exact Ionic 4/12 column; aspect-ratio:1/1 makes height = width */
    .wide-image-card {
      flex: 0 0 calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);
      width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);
      max-width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);
      min-width: 0;
      aspect-ratio: 1 / 1;
      border-radius: 16px;
      overflow: hidden;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
    }
    .wide-image-square {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    .wide-image-square img {
      width: 100%; height: 100%; object-fit: cover; display: block;
    }
    .wide-image-square .hero-placeholder {
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      color: var(--rm-text-secondary);
    }
    .wide-image-square .hero-placeholder ha-icon { --mdc-icon-size: 64px; opacity: 0.3; }
    .slide-btn {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(0,0,0,0.45); border: none; color: #fff; cursor: pointer;
      border-radius: 50%; width: 30px; height: 30px;
      display: flex; align-items: center; justify-content: center; padding: 0;
      z-index: 2; transition: background 0.15s;
    }
    .slide-btn:hover { background: rgba(0,0,0,0.7); }
    .slide-btn ha-icon { --mdc-icon-size: 20px; }
    .slide-prev { left: 6px; }
    .slide-next { right: 6px; }
    .slide-dots {
      position: absolute; bottom: 7px; left: 50%; transform: translateX(-50%);
      display: flex; gap: 5px; z-index: 2;
    }
    .slide-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,0.45); transition: background 0.15s;
    }
    .slide-dot.active { background: #fff; }

    /* Col 2 — info card: 8/12 minus the 14px gap, with margin-left for the gap */
    .wide-info-card {
      flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 12)) * 100% - 14px);
      width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100% - 14px);
      max-width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100% - 14px);
      min-width: 0;
      box-sizing: border-box;
      margin-left: 14px;
      border-radius: 16px;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
    .wide-info-card .action-btns-row { justify-content: center; flex-wrap: wrap; width: 100%; }
    .wide-info-card .meta-chips { justify-content: center; margin-top: 6px; }
    /* Chips pushed to bottom-left of info card */
    .wide-info-card .chips-area { align-self: flex-start; margin-top: auto; padding-top: 10px; }

    /* Row 2, Col 1 — ingredients column: exact Ionic 4/12, aligns with image above */
    .wide-ing-col {
      flex: 0 0 calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);
      width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);
      max-width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Row 2, Col 2 — directions column: 8/12 minus gap, margin-left for spacing */
    .wide-dir-col {
      flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 12)) * 100% - 14px);
      width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100% - 14px);
      max-width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100% - 14px);
      min-width: 0;
      margin-left: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Ingredients column controls: scaler left, cart right — above ingredients only */
    .wide-ing-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 2px;
      min-height: 42px;
    }
    .wide-dir-spacer { min-height: 42px; }
    .ing-shop-btn {
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 50%; width: 34px; height: 34px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: var(--rm-text-secondary); padding: 0; transition: all 0.15s;
    }
    .ing-shop-btn ha-icon { --mdc-icon-size: 18px; }
    .ing-shop-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent); border-color: var(--rm-accent); }
    .ing-shop-btn.active { background: var(--rm-accent-soft); color: var(--rm-accent); border-color: var(--rm-accent); }
    .ing-shop-success { color: var(--success-color, #4caf50); display: flex; align-items: center; }
    .ing-shop-success ha-icon { --mdc-icon-size: 22px; }
    .shopping-review-panel {
      display: flex; flex-direction: column; gap: 10px;
      background: var(--rm-bg-elevated, #2c2c2e);
      border: 1px solid var(--rm-border, rgba(255,255,255,0.12));
      border-radius: 10px; padding: 12px;
    }
    .review-title {
      font-size: 11px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.05em; color: var(--rm-text-secondary, #8e8e93);
    }
    .review-list {
      display: flex; flex-direction: column; gap: 10px;
      max-height: 300px; overflow-y: auto;
    }
    .review-row { display: flex; flex-direction: column; gap: 4px; }
    .review-ing { display: flex; align-items: baseline; gap: 4px; flex-wrap: wrap; }
    .review-qty { font-size: 0.8rem; color: var(--rm-text-secondary, #8e8e93); flex-shrink: 0; }
    .review-ing-name { font-size: 0.9rem; font-weight: 500; }
    .review-chips { display: flex; flex-wrap: wrap; gap: 5px; }
    .review-chip {
      display: inline-flex; align-items: center; gap: 3px;
      padding: 4px 10px; border-radius: 999px;
      border: 1.5px solid var(--rm-border, rgba(255,255,255,0.12));
      background: none; cursor: pointer;
      font-size: 12px; color: var(--rm-text, #e5e5ea);
      font-family: inherit; transition: all 0.15s; white-space: nowrap;
    }
    .review-chip ha-icon { --mdc-icon-size: 13px; }
    .review-chip.selected {
      border-color: var(--rm-accent, #ff6b35);
      background: var(--rm-accent-soft, rgba(255,107,53,0.12));
      color: var(--rm-accent, #ff6b35); font-weight: 600;
    }
    .review-chip.manual { border-style: dashed; }
    .review-btns { margin-top: 2px; }

    /* Section cards (ingredients, nutrition, notes) */
    .wide-section-card {
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 14px;
      padding: 12px 14px;
    }
    .wide-section-title {
      font-size: 14px; font-weight: 700; color: var(--rm-text);
      margin-bottom: 10px; padding-bottom: 6px;
      border-bottom: 1px solid var(--rm-border);
    }

    /* Per-step direction cards in wide layout */
    .wide-step-card {
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .wide-step-card .step-num { flex-shrink: 0; }
    .wide-step-card .step-text { flex: 1; }
    .wide-step-card.step-done .step-text {
      opacity: 0.45;
      text-decoration: line-through;
      text-decoration-color: var(--rm-border);
    }

    /* ── Markdown content ─────────────────────────────── */
    .md-content { font-size: 14px; line-height: 1.65; }
    .md-content p { margin: 0 0 6px; }
    .md-content p.md-gap { margin: 0 0 10px; }
    .md-content h1 { font-size: 18px; font-weight: 700; margin: 10px 0 4px; }
    .md-content h2 { font-size: 16px; font-weight: 700; margin: 8px 0 4px; }
    .md-content h3 { font-size: 14px; font-weight: 700; margin: 6px 0 3px; }
    .md-content ul, .md-content ol { padding-left: 20px; margin: 4px 0 8px; }
    .md-content li { margin: 2px 0; }
    .md-content strong { font-weight: 700; }
    .md-content em { font-style: italic; }
    .md-content code { font-family: monospace; font-size: 12px; background: var(--rm-bg-elevated); padding: 1px 4px; border-radius: 3px; }
    .md-content a { color: var(--rm-accent); text-decoration: none; }
    .md-content a:hover { text-decoration: underline; }
    .md-content hr { border: none; border-top: 1px solid var(--rm-border); margin: 8px 0; }

    /* ── List picker (tags / courses / categories / collections) ─── */
    .list-picker-field { position: relative; }
    .list-picker-wrap { display: flex; flex-direction: column; gap: 6px; }
    .list-picker-chips { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; min-height: 28px; }
    .list-chip {
      display: inline-flex; align-items: center; gap: 3px;
      padding: 3px 8px; border-radius: 14px; font-size: 12px;
      border: 1px solid var(--rm-border); background: var(--rm-bg-elevated);
      color: var(--rm-text); cursor: default; transition: all 0.12s;
    }
    .list-chip.selected { background: var(--rm-accent-soft); border-color: var(--rm-accent); color: var(--rm-accent); }
    .list-chip.available { cursor: pointer; color: var(--rm-text-muted); }
    .list-chip.available:hover { border-color: var(--rm-accent); color: var(--rm-accent); background: var(--rm-accent-soft); }
    .list-chip-remove {
      background: none; border: none; padding: 0 0 0 2px; cursor: pointer;
      color: inherit; font-size: 14px; line-height: 1; opacity: 0.7;
    }
    .list-chip-remove:hover { opacity: 1; }
    .list-chip-add-btn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 24px; height: 24px; border-radius: 50%; border: 1px dashed var(--rm-border);
      background: none; cursor: pointer; color: var(--rm-text-muted); transition: all 0.12s;
    }
    .list-chip-add-btn:hover { border-color: var(--rm-accent); color: var(--rm-accent); }
    .list-chip-add-btn ha-icon { --mdc-icon-size: 14px; }
    .list-picker-dropdown {
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    }
    .list-picker-existing { display: flex; flex-wrap: wrap; gap: 5px; }
    .list-picker-new-row { display: flex; gap: 6px; }
    .list-picker-input {
      flex: 1; background: var(--rm-bg-surface, var(--rm-bg)); border: 1px solid var(--rm-border);
      border-radius: 7px; color: var(--rm-text); padding: 5px 9px; font-size: 13px;
      font-family: inherit; min-width: 0;
    }
    .list-picker-input:focus { outline: none; border-color: var(--rm-accent); }
    .list-picker-new-btn {
      padding: 5px 12px; border-radius: 7px; border: 1px solid var(--rm-accent);
      background: var(--rm-accent); color: var(--rm-ink, #fff); cursor: pointer; font-size: 13px; font-family: inherit;
    }
    .list-picker-new-btn:disabled { opacity: 0.45; cursor: not-allowed; }

    /* ── Inline ingredient edit ──────────────────────── */
    .edit-ing-text { cursor: pointer; flex: 1; }
    .edit-ing-text:hover { color: var(--rm-accent); }
    .edit-ing-inline-edit {
      display: flex; align-items: center; gap: 4px; padding: 4px 0; list-style: none;
    }
    .ing-inline-input {
      background: var(--rm-bg-elevated); border: 1px solid var(--rm-accent);
      border-radius: 6px; color: var(--rm-text); padding: 4px 6px; font-size: 13px;
      font-family: inherit; min-width: 0;
    }
    .ing-inline-input:focus { outline: none; }
    .ing-inline-amt { width: 52px; flex: 0 0 52px; }
    .ing-inline-unit { width: 60px; flex: 0 0 60px; }
    .ing-inline-name { flex: 1; }
    .ing-inline-save, .ing-inline-cancel {
      width: 26px; height: 26px; border-radius: 50%; border: 1px solid var(--rm-border);
      background: none; cursor: pointer; color: var(--rm-text-muted);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .ing-inline-save { border-color: var(--rm-accent); color: var(--rm-accent); }
    .ing-inline-save:hover { background: var(--rm-accent); color: var(--rm-ink, #fff); }
    .ing-inline-save ha-icon, .ing-inline-cancel ha-icon { --mdc-icon-size: 13px; }


    /* ═══ Fresh + Compact ═══ */
    :host([ui-style="fresh"]) .hero,
    :host([ui-style="compact"]) .hero { margin: 12px 20px 0; border-radius: var(--rm-radius-card); background: linear-gradient(135deg, var(--rm-accent-soft), var(--rm-bg-elevated)); }
    :host([ui-style="fresh"]) .hero-btn,
    :host([ui-style="compact"]) .hero-btn { background: rgba(255,255,255,0.94); color: #12201B; width: 40px; height: 40px; }
    :host([ui-style="fresh"]) .hero-btn.fav-active,
    :host([ui-style="compact"]) .hero-btn.fav-active { color: #A32B2B; }
    :host([ui-style="fresh"]) .detail-scroll,
    :host([ui-style="compact"]) .detail-scroll { padding: 16px 20px 32px; }
    :host([ui-style="fresh"]) .recipe-title,
    :host([ui-style="compact"]) .recipe-title { font-size: 28px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
    :host([ui-style="fresh"]) .recipe-title.wide-centered,
    :host([ui-style="compact"]) .recipe-title.wide-centered { font-size: 28px; }
    :host([ui-style="fresh"]) .wide-title,
    :host([ui-style="compact"]) .wide-title { font-size: 28px; font-weight: 800; letter-spacing: -0.02em; }
    :host([ui-style="fresh"]) .meta-chip-icon,
    :host([ui-style="compact"]) .meta-chip-icon { border-radius: 999px; background: var(--rm-bg-surface); padding: 8px 14px; font-weight: 600; }
    :host([ui-style="compact"]) .meta-chip-icon { border-color: transparent; border-radius: 12px; }
    :host([ui-style="fresh"]) .chip,
    :host([ui-style="compact"]) .chip { border-radius: 999px; padding: 6px 12px; font-weight: 600; }
    :host([ui-style="fresh"]) .scaler-btn,
    :host([ui-style="compact"]) .scaler-btn { width: 40px; height: 40px; background: var(--rm-bg-surface); color: var(--rm-text); }
    :host([ui-style="fresh"]) .scaler-val,
    :host([ui-style="compact"]) .scaler-val { font-weight: 800; }
    :host([ui-style="fresh"]) .action-icon-btn .btn-icon,
    :host([ui-style="compact"]) .action-icon-btn .btn-icon { background: var(--rm-accent-soft); color: var(--rm-accent-text); }
    :host([ui-style="compact"]) .action-icon-btn .btn-icon { border-radius: 14px; }
    :host([ui-style="fresh"]) .action-icon-btn.fav-active .btn-icon,
    :host([ui-style="compact"]) .action-icon-btn.fav-active .btn-icon { color: var(--rm-danger); }
    :host([ui-style="fresh"]) .quick-rating .qr-star.filled,
    :host([ui-style="compact"]) .quick-rating .qr-star.filled { color: var(--rm-warn); }

    /* Tabs become pill chips */
    :host([ui-style="fresh"]) .tabs-row,
    :host([ui-style="compact"]) .tabs-row { border-bottom: none; gap: 8px; margin-bottom: 12px; padding: 2px 0; }
    :host([ui-style="fresh"]) .tab-btn,
    :host([ui-style="compact"]) .tab-btn {
      min-height: 40px; padding: 0 16px; border: 1px solid var(--rm-border); border-radius: 999px;
      background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([ui-style="compact"]) .tab-btn { border-radius: 12px; border-color: transparent; }
    :host([ui-style="fresh"]) .tab-btn.active,
    :host([ui-style="compact"]) .tab-btn.active { background: var(--rm-text); border-color: var(--rm-text); color: var(--rm-bg-main); font-weight: 700; }

    /* Ingredients and steps sit in one rounded card */
    :host([ui-style="fresh"]) .ingredient-list,
    :host([ui-style="compact"]) .ingredient-list,
    :host([ui-style="fresh"]) .steps-list,
    :host([ui-style="compact"]) .steps-list {
      background: var(--rm-bg-surface); border: 1px solid var(--rm-border);
      border-radius: var(--rm-radius-card); padding: 2px 16px;
    }
    :host([ui-style="compact"]) .ingredient-list,
    :host([ui-style="compact"]) .steps-list { border-color: transparent; }
    :host([ui-style="fresh"]) .steps-list,
    :host([ui-style="compact"]) .steps-list { padding: 16px; }
    :host([ui-style="fresh"]) .ingredient-item,
    :host([ui-style="compact"]) .ingredient-item { padding: 13px 0; border-bottom-color: var(--rm-line); }
    :host([ui-style="fresh"]) .ingredient-item:last-child,
    :host([ui-style="compact"]) .ingredient-item:last-child { border-bottom: none; }
    :host([ui-style="fresh"]) .ing-amount,
    :host([ui-style="compact"]) .ing-amount { font-weight: 800; color: var(--rm-accent-text); min-width: 76px; }
    :host([ui-style="fresh"]) .ing-name,
    :host([ui-style="compact"]) .ing-name { font-weight: 600; }
    :host([ui-style="fresh"]) .step-text,
    :host([ui-style="compact"]) .step-text { line-height: 1.5; }
    :host([ui-style="fresh"]) .time-chip,
    :host([ui-style="compact"]) .time-chip { border-radius: 999px; min-height: 32px; }
    :host([ui-style="fresh"]) .time-chip:hover,
    :host([ui-style="compact"]) .time-chip:hover { color: var(--rm-ink); }

    /* Wide layout cards */
    :host([ui-style="fresh"]) .wide-image-card,
    :host([ui-style="fresh"]) .wide-info-card,
    :host([ui-style="fresh"]) .wide-section-card,
    :host([ui-style="compact"]) .wide-image-card,
    :host([ui-style="compact"]) .wide-info-card,
    :host([ui-style="compact"]) .wide-section-card {
      background: var(--rm-bg-surface); border-radius: var(--rm-radius-card);
    }
    :host([ui-style="compact"]) .wide-image-card,
    :host([ui-style="compact"]) .wide-info-card,
    :host([ui-style="compact"]) .wide-section-card { border-color: transparent; }
    :host([ui-style="fresh"]) .wide-layout,
    :host([ui-style="compact"]) .wide-layout { padding: 16px 28px 32px; gap: 16px; }
    :host([ui-style="fresh"]) .wide-section-title,
    :host([ui-style="compact"]) .wide-section-title { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rm-text-secondary); border-bottom-color: var(--rm-line); }

    /* Buttons */
    :host([ui-style="fresh"]) .action-btn,
    :host([ui-style="fresh"]) .shopping-btn,
    :host([ui-style="fresh"]) .picker-sel-btn { min-height: 44px; border-radius: 999px; padding: 0 18px; }
    :host([ui-style="compact"]) .action-btn,
    :host([ui-style="compact"]) .shopping-btn,
    :host([ui-style="compact"]) .picker-sel-btn { min-height: 44px; border-radius: 12px; padding: 0 16px; }
    :host([ui-style="fresh"]) .edit-panel,
    :host([ui-style="compact"]) .edit-panel { border-radius: 28px 28px 0 0; background: var(--rm-bg-main); }

    :host([ui-style="fresh"]) .meta-item,
    :host([ui-style="compact"]) .meta-item { background: var(--rm-bg-surface); border: 1px solid var(--rm-border); border-radius: 18px; padding: 10px 14px; }
    :host([ui-style="compact"]) .meta-item { border-color: transparent; border-radius: 14px; }
    :host([ui-style="fresh"]) .meta-val,
    :host([ui-style="compact"]) .meta-val { font-weight: 800; font-variant-numeric: tabular-nums; }
    :host([ui-style="fresh"]) .chip-label,
    :host([ui-style="compact"]) .chip-label { background: none; border: none; padding-left: 0; }
    :host([ui-style="fresh"]) .chip-course,
    :host([ui-style="compact"]) .chip-course { background: var(--rm-accent-soft); color: var(--rm-accent-text); }
    :host([ui-style="fresh"]) .chip-category,
    :host([ui-style="compact"]) .chip-category { background: color-mix(in srgb, var(--rm-warn) 16%, var(--rm-bg-surface)); color: var(--rm-warn); }
    :host([ui-style="fresh"]) .chip-collection,
    :host([ui-style="compact"]) .chip-collection { background: var(--rm-bg-elevated); color: var(--rm-text-secondary); }

    :host([ui-style="fresh"]) .wide-section-card .ingredient-list,
    :host([ui-style="compact"]) .wide-section-card .ingredient-list { background: none; border: none; border-radius: 0; padding: 0; }
  `}try{customElements.define("rm-recipe-detail",q)}catch{}var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Q(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var K={exports:{}};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/K.exports=function e(t,i,r){function a(n,o){if(!i[n]){if(!t[n]){if(!o&&Q)return Q(n);if(s)return s(n,!0);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}var l=i[n]={exports:{}};t[n][0].call(l.exports,function(e){return a(t[n][1][e]||e)},l,l.exports,e,t,i,r)}return i[n].exports}for(var s=Q,n=0;n<r.length;n++)a(r[n]);return a}({1:[function(e,t,i){var r=e("./utils"),a=e("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(e){for(var t,i,a,n,o,c,l,d=[],p=0,h=e.length,u=h,m="string"!==r.getTypeOf(e);p<e.length;)u=h-p,a=m?(t=e[p++],i=p<h?e[p++]:0,p<h?e[p++]:0):(t=e.charCodeAt(p++),i=p<h?e.charCodeAt(p++):0,p<h?e.charCodeAt(p++):0),n=t>>2,o=(3&t)<<4|i>>4,c=1<u?(15&i)<<2|a>>6:64,l=2<u?63&a:64,d.push(s.charAt(n)+s.charAt(o)+s.charAt(c)+s.charAt(l));return d.join("")},i.decode=function(e){var t,i,r,n,o,c,l=0,d=0,p="data:";if(e.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var h,u=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===s.charAt(64)&&u--,e.charAt(e.length-2)===s.charAt(64)&&u--,u%1!=0)throw new Error("Invalid base64 input, bad content length.");for(h=a.uint8array?new Uint8Array(0|u):new Array(0|u);l<e.length;)t=s.indexOf(e.charAt(l++))<<2|(n=s.indexOf(e.charAt(l++)))>>4,i=(15&n)<<4|(o=s.indexOf(e.charAt(l++)))>>2,r=(3&o)<<6|(c=s.indexOf(e.charAt(l++))),h[d++]=t,64!==o&&(h[d++]=i),64!==c&&(h[d++]=r);return h}},{"./support":30,"./utils":32}],2:[function(e,t,i){var r=e("./external"),a=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),n=e("./stream/DataLengthProbe");function o(e,t,i,r,a){this.compressedSize=e,this.uncompressedSize=t,this.crc32=i,this.compression=r,this.compressedContent=a}o.prototype={getContentWorker:function(){var e=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new n("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,i){return e.pipe(new s).pipe(new n("uncompressedSize")).pipe(t.compressWorker(i)).pipe(new n("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,i){var r=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,i){var r=e("./utils"),a=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==r.getTypeOf(e)?function(e,t,i,r){var s=a,n=r+i;e^=-1;for(var o=r;o<n;o++)e=e>>>8^s[255&(e^t[o])];return-1^e}(0|t,e,e.length,0):function(e,t,i,r){var s=a,n=r+i;e^=-1;for(var o=r;o<n;o++)e=e>>>8^s[255&(e^t.charCodeAt(o))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,t,i){var r=null;r="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:r}},{lie:37}],7:[function(e,t,i){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,a=e("pako"),s=e("./utils"),n=e("./stream/GenericWorker"),o=r?"uint8array":"array";function c(e,t){n.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}i.magic="\b\0",s.inherits(c,n),c.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},c.prototype.flush=function(){n.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},i.compressWorker=function(e){return new c("Deflate",e)},i.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,i){function r(e,t){var i,r="";for(i=0;i<t;i++)r+=String.fromCharCode(255&e),e>>>=8;return r}function a(e,t,i,a,n,d){var p,h,u=e.file,m=e.compression,g=d!==o.utf8encode,f=s.transformTo("string",d(u.name)),b=s.transformTo("string",o.utf8encode(u.name)),v=u.comment,x=s.transformTo("string",d(v)),_=s.transformTo("string",o.utf8encode(v)),y=b.length!==u.name.length,w=_.length!==v.length,k="",$="",S="",z=u.dir,I=u.date,A={crc32:0,compressedSize:0,uncompressedSize:0};t&&!i||(A.crc32=e.crc32,A.compressedSize=e.compressedSize,A.uncompressedSize=e.uncompressedSize);var C=0;t&&(C|=8),g||!y&&!w||(C|=2048);var T=0,R=0;z&&(T|=16),"UNIX"===n?(R=798,T|=function(e,t){var i=e;return e||(i=t?16893:33204),(65535&i)<<16}(u.unixPermissions,z)):(R=20,T|=function(e){return 63&(e||0)}(u.dosPermissions)),p=I.getUTCHours(),p<<=6,p|=I.getUTCMinutes(),p<<=5,p|=I.getUTCSeconds()/2,h=I.getUTCFullYear()-1980,h<<=4,h|=I.getUTCMonth()+1,h<<=5,h|=I.getUTCDate(),y&&($=r(1,1)+r(c(f),4)+b,k+="up"+r($.length,2)+$),w&&(S=r(1,1)+r(c(x),4)+_,k+="uc"+r(S.length,2)+S);var E="";return E+="\n\0",E+=r(C,2),E+=m.magic,E+=r(p,2),E+=r(h,2),E+=r(A.crc32,4),E+=r(A.compressedSize,4),E+=r(A.uncompressedSize,4),E+=r(f.length,2),E+=r(k.length,2),{fileRecord:l.LOCAL_FILE_HEADER+E+f+k,dirRecord:l.CENTRAL_FILE_HEADER+r(R,2)+E+r(x.length,2)+"\0\0\0\0"+r(T,4)+r(a,4)+f+k+x}}var s=e("../utils"),n=e("../stream/GenericWorker"),o=e("../utf8"),c=e("../crc32"),l=e("../signature");function d(e,t,i,r){n.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=i,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(d,n),d.prototype.push=function(e){var t=e.meta.percent||0,i=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,n.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:i?(t+100*(i-r-1))/i:100}}))},d.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var i=a(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:i.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,i=a(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(i.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:i.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var i=this.bytesWritten-e,a=function(e,t,i,a,n){var o=s.transformTo("string",n(a));return l.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(e,2)+r(e,2)+r(t,4)+r(i,4)+r(o.length,2)+o}(this.dirRecords.length,i,e,this.zipComment,this.encodeFileName);this.push({data:a,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},d.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(e){var t=this._sources;if(!n.prototype.error.call(this,e))return!1;for(var i=0;i<t.length;i++)try{t[i].error(e)}catch(e){}return!0},d.prototype.lock=function(){n.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,i){var r=e("../compressions"),a=e("./ZipFileWorker");i.generateWorker=function(e,t,i){var s=new a(t.streamFiles,i,t.platform,t.encodeFileName),n=0;try{e.forEach(function(e,i){n++;var a=function(e,t){var i=e||t,a=r[i];if(!a)throw new Error(i+" is not a valid compression method !");return a}(i.options.compression,t.compression),o=i.options.compressionOptions||t.compressionOptions||{},c=i.dir,l=i.date;i._compressWorker(a,o).withStreamInfo("file",{name:e,dir:c,date:l,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(s)}),s.entriesCount=n}catch(e){s.error(e)}return s}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new r;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(e,t){return(new r).loadAsync(e,t)},r.external=e("./external"),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,i){var r=e("./utils"),a=e("./external"),s=e("./utf8"),n=e("./zipEntries"),o=e("./stream/Crc32Probe"),c=e("./nodejsUtils");function l(e){return new a.Promise(function(t,i){var r=e.decompressed.getContentWorker().pipe(new o);r.on("error",function(e){i(e)}).on("end",function(){r.streamInfo.crc32!==e.decompressed.crc32?i(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}t.exports=function(e,t){var i=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),c.isNode&&c.isStream(e)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(e){var i=new n(t);return i.load(e),i}).then(function(e){var i=[a.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var s=0;s<r.length;s++)i.push(l(r[s]));return a.Promise.all(i)}).then(function(e){for(var a=e.shift(),s=a.files,n=0;n<s.length;n++){var o=s[n],c=o.fileNameStr,l=r.resolve(o.fileNameStr);i.file(l,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileCommentStr.length?o.fileCommentStr:null,unixPermissions:o.unixPermissions,dosPermissions:o.dosPermissions,createFolders:t.createFolders}),o.dir||(i.file(l).unsafeOriginalName=c)}return a.zipComment.length&&(i.comment=a.zipComment),i})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,i){var r=e("../utils"),a=e("../stream/GenericWorker");function s(e,t){a.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(s,a),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,i){var r=e("readable-stream").Readable;function a(e,t,i){r.call(this,t),this._helper=e;var a=this;e.on("data",function(e,t){a.push(e)||a._helper.pause(),i&&i(t)}).on("error",function(e){a.emit("error",e)}).on("end",function(){a.push(null)})}e("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},t.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,t,i){t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,i){function r(e,t,i){var r,a=s.getTypeOf(t),o=s.extend(i||{},c);o.date=o.date||new Date,null!==o.compression&&(o.compression=o.compression.toUpperCase()),"string"==typeof o.unixPermissions&&(o.unixPermissions=parseInt(o.unixPermissions,8)),o.unixPermissions&&16384&o.unixPermissions&&(o.dir=!0),o.dosPermissions&&16&o.dosPermissions&&(o.dir=!0),o.dir&&(e=g(e)),o.createFolders&&(r=m(e))&&f.call(this,r,!0);var p="string"===a&&!1===o.binary&&!1===o.base64;i&&void 0!==i.binary||(o.binary=!p),(t instanceof l&&0===t.uncompressedSize||o.dir||!t||0===t.length)&&(o.base64=!1,o.binary=!0,t="",o.compression="STORE",a="string");var b=null;b=t instanceof l||t instanceof n?t:h.isNode&&h.isStream(t)?new u(e,t):s.prepareContent(e,t,o.binary,o.optimizedBinaryString,o.base64);var v=new d(e,b,o);this.files[e]=v}var a=e("./utf8"),s=e("./utils"),n=e("./stream/GenericWorker"),o=e("./stream/StreamHelper"),c=e("./defaults"),l=e("./compressedObject"),d=e("./zipObject"),p=e("./generate"),h=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),m=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},f=function(e,t){return t=void 0!==t?t:c.createFolders,e=g(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function b(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,i,r;for(t in this.files)r=this.files[t],(i=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(i,r)},filter:function(e){var t=[];return this.forEach(function(i,r){e(i,r)&&t.push(r)}),t},file:function(e,t,i){if(1!==arguments.length)return e=this.root+e,r.call(this,e,t,i),this;if(b(e)){var a=e;return this.filter(function(e,t){return!t.dir&&a.test(e)})}var s=this.files[this.root+e];return s&&!s.dir?s:null},folder:function(e){if(!e)return this;if(b(e))return this.filter(function(t,i){return i.dir&&e.test(t)});var t=this.root+e,i=f.call(this,t),r=this.clone();return r.root=i.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var i=this.filter(function(t,i){return i.name.slice(0,e.length)===e}),r=0;r<i.length;r++)delete this.files[i[r].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,i={};try{if((i=s.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=i.type.toLowerCase(),i.compression=i.compression.toUpperCase(),"binarystring"===i.type&&(i.type="string"),!i.type)throw new Error("No output type specified.");s.checkSupport(i.type),"darwin"!==i.platform&&"freebsd"!==i.platform&&"linux"!==i.platform&&"sunos"!==i.platform||(i.platform="UNIX"),"win32"===i.platform&&(i.platform="DOS");var r=i.comment||this.comment||"";t=p.generateWorker(this,i,r)}catch(e){(t=new n("error")).error(e)}return new o(t,i.type||"string",i.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,i){t.exports=e("stream")},{stream:void 0}],17:[function(e,t,i){var r=e("./DataReader");function a(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(a,r),a.prototype.byteAt=function(e){return this.data[this.zero+e]},a.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),a=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===i&&this.data[s+2]===r&&this.data[s+3]===a)return s-this.zero;return-1},a.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),i=e.charCodeAt(1),r=e.charCodeAt(2),a=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&i===s[1]&&r===s[2]&&a===s[3]},a.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,t,i){var r=e("../utils");function a(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,i=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)i=(i<<8)+this.byteAt(t);return this.index+=e,i},readString:function(e){return r.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=a},{"../utils":32}],19:[function(e,t,i){var r=e("./Uint8ArrayReader");function a(e){r.call(this,e)}e("../utils").inherits(a,r),a.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,i){var r=e("./DataReader");function a(e){r.call(this,e)}e("../utils").inherits(a,r),a.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},a.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},a.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},a.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,t,i){var r=e("./ArrayReader");function a(e){r.call(this,e)}e("../utils").inherits(a,r),a.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,i){var r=e("../utils"),a=e("../support"),s=e("./ArrayReader"),n=e("./StringReader"),o=e("./NodeBufferReader"),c=e("./Uint8ArrayReader");t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),"string"!==t||a.uint8array?"nodebuffer"===t?new o(e):a.uint8array?new c(r.transformTo("uint8array",e)):new s(r.transformTo("array",e)):new n(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,i){var r=e("./GenericWorker"),a=e("../utils");function s(e){r.call(this,"ConvertWorker to "+e),this.destType=e}a.inherits(s,r),s.prototype.processChunk=function(e){this.push({data:a.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,i){var r=e("./GenericWorker"),a=e("../crc32");function s(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,r),s.prototype.processChunk=function(e){this.streamInfo.crc32=a(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,i){var r=e("../utils"),a=e("./GenericWorker");function s(e){a.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(s,a),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}a.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,i){var r=e("../utils"),a=e("./GenericWorker");function s(e){a.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(s,a),s.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,i){function r(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var i=0;i<this._listeners[e].length;i++)this._listeners[e][i].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=r},{}],29:[function(e,t,i){var r=e("../utils"),a=e("./ConvertWorker"),s=e("./GenericWorker"),n=e("../base64"),o=e("../support"),c=e("../external"),l=null;if(o.nodestream)try{l=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function d(e,t){return new c.Promise(function(i,a){var s=[],o=e._internalType,c=e._outputType,l=e._mimeType;e.on("data",function(e,i){s.push(e),t&&t(i)}).on("error",function(e){s=[],a(e)}).on("end",function(){try{var e=function(e,t,i){switch(e){case"blob":return r.newBlob(r.transformTo("arraybuffer",t),i);case"base64":return n.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var i,r=0,a=null,s=0;for(i=0;i<t.length;i++)s+=t[i].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(a=new Uint8Array(s),i=0;i<t.length;i++)a.set(t[i],r),r+=t[i].length;return a;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(o,s),l);i(e)}catch(e){a(e)}s=[]}).resume()})}function p(e,t,i){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=i,r.checkSupport(n),this._worker=e.pipe(new a(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}p.prototype={accumulate:function(e){return d(this,e)},on:function(e,t){var i=this;return"data"===e?this._worker.on(e,function(e){t.call(i,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,i)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new l(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,i.nodebuffer="undefined"!=typeof Buffer,i.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=0===new Blob([r],{type:"application/zip"}).size}catch(e){try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),i.blob=0===a.getBlob("application/zip").size}catch(e){i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch(e){i.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,i){for(var r=e("./utils"),a=e("./support"),s=e("./nodejsUtils"),n=e("./stream/GenericWorker"),o=new Array(256),c=0;c<256;c++)o[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function l(){n.call(this,"utf-8 decode"),this.leftOver=null}function d(){n.call(this,"utf-8 encode")}o[254]=o[254]=1,i.utf8encode=function(e){return a.nodebuffer?s.newBufferFrom(e,"utf-8"):function(e){var t,i,r,s,n,o=e.length,c=0;for(s=0;s<o;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(r=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(r-56320),s++),c+=i<128?1:i<2048?2:i<65536?3:4;for(t=a.uint8array?new Uint8Array(c):new Array(c),s=n=0;n<c;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(r=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(r-56320),s++),i<128?t[n++]=i:(i<2048?t[n++]=192|i>>>6:(i<65536?t[n++]=224|i>>>12:(t[n++]=240|i>>>18,t[n++]=128|i>>>12&63),t[n++]=128|i>>>6&63),t[n++]=128|63&i);return t}(e)},i.utf8decode=function(e){return a.nodebuffer?r.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,i,a,s,n=e.length,c=new Array(2*n);for(t=i=0;t<n;)if((a=e[t++])<128)c[i++]=a;else if(4<(s=o[a]))c[i++]=65533,t+=s-1;else{for(a&=2===s?31:3===s?15:7;1<s&&t<n;)a=a<<6|63&e[t++],s--;1<s?c[i++]=65533:a<65536?c[i++]=a:(a-=65536,c[i++]=55296|a>>10&1023,c[i++]=56320|1023&a)}return c.length!==i&&(c.subarray?c=c.subarray(0,i):c.length=i),r.applyFromCharCode(c)}(e=r.transformTo(a.uint8array?"uint8array":"array",e))},r.inherits(l,n),l.prototype.processChunk=function(e){var t=r.transformTo(a.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var s=t;(t=new Uint8Array(s.length+this.leftOver.length)).set(this.leftOver,0),t.set(s,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0||0===i?t:i+o[e[i]]>t?i:t}(t),c=t;n!==t.length&&(a.uint8array?(c=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(c=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:i.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=l,r.inherits(d,n),d.prototype.processChunk=function(e){this.push({data:i.utf8encode(e.data),meta:e.meta})},i.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,i){var r=e("./support"),a=e("./base64"),s=e("./nodejsUtils"),n=e("./external");function o(e){return e}function c(e,t){for(var i=0;i<e.length;++i)t[i]=255&e.charCodeAt(i);return t}e("setimmediate"),i.newBlob=function(e,t){i.checkSupport("blob");try{return new Blob([e],{type:t})}catch(i){try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var l={stringifyByChunk:function(e,t,i){var r=[],a=0,s=e.length;if(s<=i)return String.fromCharCode.apply(null,e);for(;a<s;)"array"===t||"nodebuffer"===t?r.push(String.fromCharCode.apply(null,e.slice(a,Math.min(a+i,s)))):r.push(String.fromCharCode.apply(null,e.subarray(a,Math.min(a+i,s)))),a+=i;return r.join("")},stringifyByChar:function(e){for(var t="",i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&1===String.fromCharCode.apply(null,s.allocBuffer(1)).length}catch(e){return!1}}()}};function d(e){var t=65536,r=i.getTypeOf(e),a=!0;if("uint8array"===r?a=l.applyCanBeUsed.uint8array:"nodebuffer"===r&&(a=l.applyCanBeUsed.nodebuffer),a)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return l.stringifyByChar(e)}function p(e,t){for(var i=0;i<e.length;i++)t[i]=e[i];return t}i.applyFromCharCode=d;var h={};h.string={string:o,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return h.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,s.allocBuffer(e.length))}},h.array={string:d,array:o,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s.newBufferFrom(e)}},h.arraybuffer={string:function(e){return d(new Uint8Array(e))},array:function(e){return p(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:o,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s.newBufferFrom(new Uint8Array(e))}},h.uint8array={string:d,array:function(e){return p(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:o,nodebuffer:function(e){return s.newBufferFrom(e)}},h.nodebuffer={string:d,array:function(e){return p(e,new Array(e.length))},arraybuffer:function(e){return h.nodebuffer.uint8array(e).buffer},uint8array:function(e){return p(e,new Uint8Array(e.length))},nodebuffer:o},i.transformTo=function(e,t){if(t=t||"",!e)return t;i.checkSupport(e);var r=i.getTypeOf(t);return h[r][e](t)},i.resolve=function(e){for(var t=e.split("/"),i=[],r=0;r<t.length;r++){var a=t[r];"."===a||""===a&&0!==r&&r!==t.length-1||(".."===a?i.pop():i.push(a))}return i.join("/")},i.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":r.nodebuffer&&s.isBuffer(e)?"nodebuffer":r.uint8array&&e instanceof Uint8Array?"uint8array":r.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(e){if(!r[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(e){var t,i,r="";for(i=0;i<(e||"").length;i++)r+="\\x"+((t=e.charCodeAt(i))<16?"0":"")+t.toString(16).toUpperCase();return r},i.delay=function(e,t,i){setImmediate(function(){e.apply(i||null,t||[])})},i.inherits=function(e,t){function i(){}i.prototype=t.prototype,e.prototype=new i},i.extend=function(){var e,t,i={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===i[t]&&(i[t]=arguments[e][t]);return i},i.prepareContent=function(e,t,s,o,l){return n.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new n.Promise(function(t,i){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){i(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var d=i.getTypeOf(t);return d?("arraybuffer"===d?t=i.transformTo("uint8array",t):"string"===d&&(l?t=a.decode(t):s&&!0!==o&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):new Array(e.length))}(t))),t):n.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,i){var r=e("./reader/readerFor"),a=e("./utils"),s=e("./signature"),n=e("./zipEntry"),o=e("./support");function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(t)+", expected "+a.pretty(e)+")")}},isSignature:function(e,t){var i=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(i),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",i=a.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,i,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),i=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new n({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var r=t-i;if(0<r)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw new Error("Corrupted zip: missing "+Math.abs(r)+" bytes.")},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,i){var r=e("./reader/readerFor"),a=e("./utils"),s=e("./compressedObject"),n=e("./crc32"),o=e("./utf8"),c=e("./compressions"),l=e("./support");function d(e,t){this.options=e,this.loadOptions=t}d.prototype={isEncrypted:function(){return!(1&~this.bitFlag)},useUTF8:function(){return!(2048&~this.bitFlag)},readLocalPart:function(e){var t,i;if(e.skip(22),this.fileNameLength=e.readInt(2),i=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(i),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,i,r,a=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<a;)t=e.readInt(2),i=e.readInt(2),r=e.readData(i),this.extraFields[t]={id:t,length:i,value:r};e.setIndex(a)},handleUTF8:function(){var e=l.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var i=a.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(i)}var r=this.findExtraFieldUnicodeComment();if(null!==r)this.fileCommentStr=r;else{var s=a.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(s)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return 1!==t.readInt(1)||n(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return 1!==t.readInt(1)||n(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,i){function r(e,t,i){this.name=e,this.dir=i.dir,this.date=i.date,this.comment=i.comment,this.unixPermissions=i.unixPermissions,this.dosPermissions=i.dosPermissions,this._data=t,this._dataBinary=i.binary,this.options={compression:i.compression,compressionOptions:i.compressionOptions}}var a=e("./stream/StreamHelper"),s=e("./stream/DataWorker"),n=e("./utf8"),o=e("./compressedObject"),c=e("./stream/GenericWorker");r.prototype={internalStream:function(e){var t=null,i="string";try{if(!e)throw new Error("No output type specified.");var r="string"===(i=e.toLowerCase())||"text"===i;"binarystring"!==i&&"text"!==i||(i="string"),t=this._decompressWorker();var s=!this._dataBinary;s&&!r&&(t=t.pipe(new n.Utf8EncodeWorker)),!s&&r&&(t=t.pipe(new n.Utf8DecodeWorker))}catch(e){(t=new c("error")).error(e)}return new a(t,i,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var i=this._decompressWorker();return this._dataBinary||(i=i.pipe(new n.Utf8EncodeWorker)),o.createWorkerFrom(i,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof c?this._data:new s(this._data)}};for(var l=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<l.length;p++)r.prototype[l[p]]=d;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,i){(function(e){var i,r,a=e.MutationObserver||e.WebKitMutationObserver;if(a){var s=0,n=new a(d),o=e.document.createTextNode("");n.observe(o,{characterData:!0}),i=function(){o.data=s=++s%2}}else if(e.setImmediate||void 0===e.MessageChannel)i="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){d(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(d,0)};else{var c=new e.MessageChannel;c.port1.onmessage=d,i=function(){c.port2.postMessage(0)}}var l=[];function d(){var e,t;r=!0;for(var i=l.length;i;){for(t=l,l=[],e=-1;++e<i;)t[e]();i=l.length}r=!1}t.exports=function(e){1!==l.push(e)||r||i()}}).call(this,void 0!==V?V:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,i){var r=e("immediate");function a(){}var s={},n=["REJECTED"],o=["FULFILLED"],c=["PENDING"];function l(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==a&&u(this,e)}function d(e,t,i){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof i&&(this.onRejected=i,this.callRejected=this.otherCallRejected)}function p(e,t,i){r(function(){var r;try{r=t(i)}catch(r){return s.reject(e,r)}r===e?s.reject(e,new TypeError("Cannot resolve promise with itself")):s.resolve(e,r)})}function h(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){var i=!1;function r(t){i||(i=!0,s.reject(e,t))}function a(t){i||(i=!0,s.resolve(e,t))}var n=m(function(){t(a,r)});"error"===n.status&&r(n.value)}function m(e,t){var i={};try{i.value=e(t),i.status="success"}catch(e){i.status="error",i.value=e}return i}(t.exports=l).prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then(function(i){return t.resolve(e()).then(function(){return i})},function(i){return t.resolve(e()).then(function(){throw i})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if("function"!=typeof e&&this.state===o||"function"!=typeof t&&this.state===n)return this;var i=new this.constructor(a);return this.state!==c?p(i,this.state===o?e:t,this.outcome):this.queue.push(new d(i,e,t)),i},d.prototype.callFulfilled=function(e){s.resolve(this.promise,e)},d.prototype.otherCallFulfilled=function(e){p(this.promise,this.onFulfilled,e)},d.prototype.callRejected=function(e){s.reject(this.promise,e)},d.prototype.otherCallRejected=function(e){p(this.promise,this.onRejected,e)},s.resolve=function(e,t){var i=m(h,t);if("error"===i.status)return s.reject(e,i.value);var r=i.value;if(r)u(e,r);else{e.state=o,e.outcome=t;for(var a=-1,n=e.queue.length;++a<n;)e.queue[a].callFulfilled(t)}return e},s.reject=function(e,t){e.state=n,e.outcome=t;for(var i=-1,r=e.queue.length;++i<r;)e.queue[i].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:s.resolve(new this(a),e)},l.reject=function(e){var t=new this(a);return s.reject(t,e)},l.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var i=e.length,r=!1;if(!i)return this.resolve([]);for(var n=new Array(i),o=0,c=-1,l=new this(a);++c<i;)d(e[c],c);return l;function d(e,a){t.resolve(e).then(function(e){n[a]=e,++o!==i||r||(r=!0,s.resolve(l,n))},function(e){r||(r=!0,s.reject(l,e))})}},l.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var i=e.length,r=!1;if(!i)return this.resolve([]);for(var n,o=-1,c=new this(a);++o<i;)n=e[o],t.resolve(n).then(function(e){r||(r=!0,s.resolve(c,e))},function(e){r||(r=!0,s.reject(c,e))});return c}},{immediate:36}],38:[function(e,t,i){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,i){var r=e("./zlib/deflate"),a=e("./utils/common"),s=e("./utils/strings"),n=e("./zlib/messages"),o=e("./zlib/zstream"),c=Object.prototype.toString,l=0,d=-1,p=0,h=8;function u(e){if(!(this instanceof u))return new u(e);this.options=a.assign({level:d,method:h,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var i=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(i!==l)throw new Error(n[i]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m="string"==typeof t.dictionary?s.string2buf(t.dictionary):"[object ArrayBuffer]"===c.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(i=r.deflateSetDictionary(this.strm,m))!==l)throw new Error(n[i]);this._dict_set=!0}}function m(e,t){var i=new u(t);if(i.push(e,!0),i.err)throw i.msg||n[i.err];return i.result}u.prototype.push=function(e,t){var i,n,o=this.strm,d=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?o.input=s.string2buf(e):"[object ArrayBuffer]"===c.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new a.Buf8(d),o.next_out=0,o.avail_out=d),1!==(i=r.deflate(o,n))&&i!==l)return this.onEnd(i),!(this.ended=!0);0!==o.avail_out&&(0!==o.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(s.buf2binstring(a.shrinkBuf(o.output,o.next_out))):this.onData(a.shrinkBuf(o.output,o.next_out)))}while((0<o.avail_in||0===o.avail_out)&&1!==i);return 4===n?(i=r.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===l):2!==n||(this.onEnd(l),!(o.avail_out=0))},u.prototype.onData=function(e){this.chunks.push(e)},u.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Deflate=u,i.deflate=m,i.deflateRaw=function(e,t){return(t=t||{}).raw=!0,m(e,t)},i.gzip=function(e,t){return(t=t||{}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,i){var r=e("./zlib/inflate"),a=e("./utils/common"),s=e("./utils/strings"),n=e("./zlib/constants"),o=e("./zlib/messages"),c=e("./zlib/zstream"),l=e("./zlib/gzheader"),d=Object.prototype.toString;function p(e){if(!(this instanceof p))return new p(e);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var i=r.inflateInit2(this.strm,t.windowBits);if(i!==n.Z_OK)throw new Error(o[i]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function h(e,t){var i=new p(t);if(i.push(e,!0),i.err)throw i.msg||o[i.err];return i.result}p.prototype.push=function(e,t){var i,o,c,l,p,h,u=this.strm,m=this.options.chunkSize,g=this.options.dictionary,f=!1;if(this.ended)return!1;o=t===~~t?t:!0===t?n.Z_FINISH:n.Z_NO_FLUSH,"string"==typeof e?u.input=s.binstring2buf(e):"[object ArrayBuffer]"===d.call(e)?u.input=new Uint8Array(e):u.input=e,u.next_in=0,u.avail_in=u.input.length;do{if(0===u.avail_out&&(u.output=new a.Buf8(m),u.next_out=0,u.avail_out=m),(i=r.inflate(u,n.Z_NO_FLUSH))===n.Z_NEED_DICT&&g&&(h="string"==typeof g?s.string2buf(g):"[object ArrayBuffer]"===d.call(g)?new Uint8Array(g):g,i=r.inflateSetDictionary(this.strm,h)),i===n.Z_BUF_ERROR&&!0===f&&(i=n.Z_OK,f=!1),i!==n.Z_STREAM_END&&i!==n.Z_OK)return this.onEnd(i),!(this.ended=!0);u.next_out&&(0!==u.avail_out&&i!==n.Z_STREAM_END&&(0!==u.avail_in||o!==n.Z_FINISH&&o!==n.Z_SYNC_FLUSH)||("string"===this.options.to?(c=s.utf8border(u.output,u.next_out),l=u.next_out-c,p=s.buf2string(u.output,c),u.next_out=l,u.avail_out=m-l,l&&a.arraySet(u.output,u.output,c,l,0),this.onData(p)):this.onData(a.shrinkBuf(u.output,u.next_out)))),0===u.avail_in&&0===u.avail_out&&(f=!0)}while((0<u.avail_in||0===u.avail_out)&&i!==n.Z_STREAM_END);return i===n.Z_STREAM_END&&(o=n.Z_FINISH),o===n.Z_FINISH?(i=r.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===n.Z_OK):o!==n.Z_SYNC_FLUSH||(this.onEnd(n.Z_OK),!(u.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===n.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=p,i.inflate=h,i.inflateRaw=function(e,t){return(t=t||{}).raw=!0,h(e,t)},i.ungzip=h},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,i){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,i,r,a){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+r),a);else for(var s=0;s<r;s++)e[a+s]=t[i+s]},flattenChunks:function(e){var t,i,r,a,s,n;for(t=r=0,i=e.length;t<i;t++)r+=e[t].length;for(n=new Uint8Array(r),t=a=0,i=e.length;t<i;t++)s=e[t],n.set(s,a),a+=s.length;return n}},s={arraySet:function(e,t,i,r,a){for(var s=0;s<r;s++)e[a+s]=t[i+s]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,s))},i.setTyped(r)},{}],42:[function(e,t,i){var r=e("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var n=new r.Buf8(256),o=0;o<256;o++)n[o]=252<=o?6:248<=o?5:240<=o?4:224<=o?3:192<=o?2:1;function c(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var i="",n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i}n[254]=n[254]=1,i.string2buf=function(e){var t,i,a,s,n,o=e.length,c=0;for(s=0;s<o;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(a=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(a-56320),s++),c+=i<128?1:i<2048?2:i<65536?3:4;for(t=new r.Buf8(c),s=n=0;n<c;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<o&&56320==(64512&(a=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(a-56320),s++),i<128?t[n++]=i:(i<2048?t[n++]=192|i>>>6:(i<65536?t[n++]=224|i>>>12:(t[n++]=240|i>>>18,t[n++]=128|i>>>12&63),t[n++]=128|i>>>6&63),t[n++]=128|63&i);return t},i.buf2binstring=function(e){return c(e,e.length)},i.binstring2buf=function(e){for(var t=new r.Buf8(e.length),i=0,a=t.length;i<a;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,r,a,s,o=t||e.length,l=new Array(2*o);for(i=r=0;i<o;)if((a=e[i++])<128)l[r++]=a;else if(4<(s=n[a]))l[r++]=65533,i+=s-1;else{for(a&=2===s?31:3===s?15:7;1<s&&i<o;)a=a<<6|63&e[i++],s--;1<s?l[r++]=65533:a<65536?l[r++]=a:(a-=65536,l[r++]=55296|a>>10&1023,l[r++]=56320|1023&a)}return c(l,r)},i.utf8border=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0||0===i?t:i+n[e[i]]>t?i:t}},{"./common":41}],43:[function(e,t,i){t.exports=function(e,t,i,r){for(var a=65535&e,s=e>>>16&65535,n=0;0!==i;){for(i-=n=2e3<i?2e3:i;s=s+(a=a+t[r++]|0)|0,--n;);a%=65521,s%=65521}return a|s<<16}},{}],44:[function(e,t,i){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,i){var r=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t,i,a){var s=r,n=a+i;e^=-1;for(var o=a;o<n;o++)e=e>>>8^s[255&(e^t[o])];return-1^e}},{}],46:[function(e,t,i){var r,a=e("../utils/common"),s=e("./trees"),n=e("./adler32"),o=e("./crc32"),c=e("./messages"),l=0,d=4,p=0,h=-2,u=-1,m=4,g=2,f=8,b=9,v=286,x=30,_=19,y=2*v+1,w=15,k=3,$=258,S=$+k+1,z=42,I=113,A=1,C=2,T=3,R=4;function E(e,t){return e.msg=c[t],t}function F(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function P(e){var t=e.state,i=t.pending;i>e.avail_out&&(i=e.avail_out),0!==i&&(a.arraySet(e.output,t.pending_buf,t.pending_out,i,e.next_out),e.next_out+=i,t.pending_out+=i,e.total_out+=i,e.avail_out-=i,t.pending-=i,0===t.pending&&(t.pending_out=0))}function L(e,t){s._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,P(e.strm)}function O(e,t){e.pending_buf[e.pending++]=t}function B(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function M(e,t){var i,r,a=e.max_chain_length,s=e.strstart,n=e.prev_length,o=e.nice_match,c=e.strstart>e.w_size-S?e.strstart-(e.w_size-S):0,l=e.window,d=e.w_mask,p=e.prev,h=e.strstart+$,u=l[s+n-1],m=l[s+n];e.prev_length>=e.good_match&&(a>>=2),o>e.lookahead&&(o=e.lookahead);do{if(l[(i=t)+n]===m&&l[i+n-1]===u&&l[i]===l[s]&&l[++i]===l[s+1]){s+=2,i++;do{}while(l[++s]===l[++i]&&l[++s]===l[++i]&&l[++s]===l[++i]&&l[++s]===l[++i]&&l[++s]===l[++i]&&l[++s]===l[++i]&&l[++s]===l[++i]&&l[++s]===l[++i]&&s<h);if(r=$-(h-s),s=h-$,n<r){if(e.match_start=t,o<=(n=r))break;u=l[s+n-1],m=l[s+n]}}}while((t=p[t&d])>c&&0!=--a);return n<=e.lookahead?n:e.lookahead}function j(e){var t,i,r,s,c,l,d,p,h,u,m=e.w_size;do{if(s=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-S)){for(a.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=i=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--i;);for(t=i=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--i;);s+=m}if(0===e.strm.avail_in)break;if(l=e.strm,d=e.window,p=e.strstart+e.lookahead,u=void 0,(h=s)<(u=l.avail_in)&&(u=h),i=0===u?0:(l.avail_in-=u,a.arraySet(d,l.input,l.next_in,u,p),1===l.state.wrap?l.adler=n(l.adler,d,u,p):2===l.state.wrap&&(l.adler=o(l.adler,d,u,p)),l.next_in+=u,l.total_in+=u,u),e.lookahead+=i,e.lookahead+e.insert>=k)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+k-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<k)););}while(e.lookahead<S&&0!==e.strm.avail_in)}function N(e,t){for(var i,r;;){if(e.lookahead<S){if(j(e),e.lookahead<S&&t===l)return A;if(0===e.lookahead)break}if(i=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==i&&e.strstart-i<=e.w_size-S&&(e.match_length=M(e,i)),e.match_length>=k)if(r=s._tr_tally(e,e.strstart-e.match_start,e.match_length-k),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=k){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(L(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(L(e,!0),0===e.strm.avail_out?T:R):e.last_lit&&(L(e,!1),0===e.strm.avail_out)?A:C}function U(e,t){for(var i,r,a;;){if(e.lookahead<S){if(j(e),e.lookahead<S&&t===l)return A;if(0===e.lookahead)break}if(i=0,e.lookahead>=k&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=k-1,0!==i&&e.prev_length<e.max_lazy_match&&e.strstart-i<=e.w_size-S&&(e.match_length=M(e,i),e.match_length<=5&&(1===e.strategy||e.match_length===k&&4096<e.strstart-e.match_start)&&(e.match_length=k-1)),e.prev_length>=k&&e.match_length<=e.prev_length){for(a=e.strstart+e.lookahead-k,r=s._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-k),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+k-1])&e.hash_mask,i=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=k-1,e.strstart++,r&&(L(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((r=s._tr_tally(e,0,e.window[e.strstart-1]))&&L(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=s._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<k-1?e.strstart:k-1,t===d?(L(e,!0),0===e.strm.avail_out?T:R):e.last_lit&&(L(e,!1),0===e.strm.avail_out)?A:C}function W(e,t,i,r,a){this.good_length=e,this.max_lazy=t,this.nice_length=i,this.max_chain=r,this.func=a}function Z(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=f,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*y),this.dyn_dtree=new a.Buf16(2*(2*x+1)),this.bl_tree=new a.Buf16(2*(2*_+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(w+1),this.heap=new a.Buf16(2*v+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*v+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function H(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=g,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?z:I,e.adler=2===t.wrap?0:1,t.last_flush=l,s._tr_init(t),p):E(e,h)}function q(e){var t=H(e);return t===p&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=k-1,e.match_available=0,e.ins_h=0}(e.state),t}function V(e,t,i,r,s,n){if(!e)return h;var o=1;if(t===u&&(t=6),r<0?(o=0,r=-r):15<r&&(o=2,r-=16),s<1||b<s||i!==f||r<8||15<r||t<0||9<t||n<0||m<n)return E(e,h);8===r&&(r=9);var c=new Z;return(e.state=c).strm=e,c.wrap=o,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=s+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+k-1)/k),c.window=new a.Buf8(2*c.w_size),c.head=new a.Buf16(c.hash_size),c.prev=new a.Buf16(c.w_size),c.lit_bufsize=1<<s+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new a.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=n,c.method=i,q(e)}r=[new W(0,0,0,0,function(e,t){var i=65535;for(i>e.pending_buf_size-5&&(i=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+i;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,L(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-S&&(L(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===d?(L(e,!0),0===e.strm.avail_out?T:R):(e.strstart>e.block_start&&(L(e,!1),e.strm.avail_out),A)}),new W(4,4,8,4,N),new W(4,5,16,8,N),new W(4,6,32,32,N),new W(4,4,16,16,U),new W(8,16,32,32,U),new W(8,16,128,128,U),new W(8,32,128,256,U),new W(32,128,258,1024,U),new W(32,258,258,4096,U)],i.deflateInit=function(e,t){return V(e,t,f,15,8,0)},i.deflateInit2=V,i.deflateReset=q,i.deflateResetKeep=H,i.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?h:(e.state.gzhead=t,p):h},i.deflate=function(e,t){var i,a,n,c;if(!e||!e.state||5<t||t<0)return e?E(e,h):h;if(a=e.state,!e.output||!e.input&&0!==e.avail_in||666===a.status&&t!==d)return E(e,0===e.avail_out?-5:h);if(a.strm=e,i=a.last_flush,a.last_flush=t,a.status===z)if(2===a.wrap)e.adler=0,O(a,31),O(a,139),O(a,8),a.gzhead?(O(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),O(a,255&a.gzhead.time),O(a,a.gzhead.time>>8&255),O(a,a.gzhead.time>>16&255),O(a,a.gzhead.time>>24&255),O(a,9===a.level?2:2<=a.strategy||a.level<2?4:0),O(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(O(a,255&a.gzhead.extra.length),O(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(e.adler=o(e.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69):(O(a,0),O(a,0),O(a,0),O(a,0),O(a,0),O(a,9===a.level?2:2<=a.strategy||a.level<2?4:0),O(a,3),a.status=I);else{var u=f+(a.w_bits-8<<4)<<8;u|=(2<=a.strategy||a.level<2?0:a.level<6?1:6===a.level?2:3)<<6,0!==a.strstart&&(u|=32),u+=31-u%31,a.status=I,B(a,u),0!==a.strstart&&(B(a,e.adler>>>16),B(a,65535&e.adler)),e.adler=1}if(69===a.status)if(a.gzhead.extra){for(n=a.pending;a.gzindex<(65535&a.gzhead.extra.length)&&(a.pending!==a.pending_buf_size||(a.gzhead.hcrc&&a.pending>n&&(e.adler=o(e.adler,a.pending_buf,a.pending-n,n)),P(e),n=a.pending,a.pending!==a.pending_buf_size));)O(a,255&a.gzhead.extra[a.gzindex]),a.gzindex++;a.gzhead.hcrc&&a.pending>n&&(e.adler=o(e.adler,a.pending_buf,a.pending-n,n)),a.gzindex===a.gzhead.extra.length&&(a.gzindex=0,a.status=73)}else a.status=73;if(73===a.status)if(a.gzhead.name){n=a.pending;do{if(a.pending===a.pending_buf_size&&(a.gzhead.hcrc&&a.pending>n&&(e.adler=o(e.adler,a.pending_buf,a.pending-n,n)),P(e),n=a.pending,a.pending===a.pending_buf_size)){c=1;break}c=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,O(a,c)}while(0!==c);a.gzhead.hcrc&&a.pending>n&&(e.adler=o(e.adler,a.pending_buf,a.pending-n,n)),0===c&&(a.gzindex=0,a.status=91)}else a.status=91;if(91===a.status)if(a.gzhead.comment){n=a.pending;do{if(a.pending===a.pending_buf_size&&(a.gzhead.hcrc&&a.pending>n&&(e.adler=o(e.adler,a.pending_buf,a.pending-n,n)),P(e),n=a.pending,a.pending===a.pending_buf_size)){c=1;break}c=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,O(a,c)}while(0!==c);a.gzhead.hcrc&&a.pending>n&&(e.adler=o(e.adler,a.pending_buf,a.pending-n,n)),0===c&&(a.status=103)}else a.status=103;if(103===a.status&&(a.gzhead.hcrc?(a.pending+2>a.pending_buf_size&&P(e),a.pending+2<=a.pending_buf_size&&(O(a,255&e.adler),O(a,e.adler>>8&255),e.adler=0,a.status=I)):a.status=I),0!==a.pending){if(P(e),0===e.avail_out)return a.last_flush=-1,p}else if(0===e.avail_in&&F(t)<=F(i)&&t!==d)return E(e,-5);if(666===a.status&&0!==e.avail_in)return E(e,-5);if(0!==e.avail_in||0!==a.lookahead||t!==l&&666!==a.status){var m=2===a.strategy?function(e,t){for(var i;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,i=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,i&&(L(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===d?(L(e,!0),0===e.strm.avail_out?T:R):e.last_lit&&(L(e,!1),0===e.strm.avail_out)?A:C}(a,t):3===a.strategy?function(e,t){for(var i,r,a,n,o=e.window;;){if(e.lookahead<=$){if(j(e),e.lookahead<=$&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=k&&0<e.strstart&&(r=o[a=e.strstart-1])===o[++a]&&r===o[++a]&&r===o[++a]){n=e.strstart+$;do{}while(r===o[++a]&&r===o[++a]&&r===o[++a]&&r===o[++a]&&r===o[++a]&&r===o[++a]&&r===o[++a]&&r===o[++a]&&a<n);e.match_length=$-(n-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=k?(i=s._tr_tally(e,1,e.match_length-k),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(i=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),i&&(L(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===d?(L(e,!0),0===e.strm.avail_out?T:R):e.last_lit&&(L(e,!1),0===e.strm.avail_out)?A:C}(a,t):r[a.level].func(a,t);if(m!==T&&m!==R||(a.status=666),m===A||m===T)return 0===e.avail_out&&(a.last_flush=-1),p;if(m===C&&(1===t?s._tr_align(a):5!==t&&(s._tr_stored_block(a,0,0,!1),3===t&&(D(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),P(e),0===e.avail_out))return a.last_flush=-1,p}return t!==d?p:a.wrap<=0?1:(2===a.wrap?(O(a,255&e.adler),O(a,e.adler>>8&255),O(a,e.adler>>16&255),O(a,e.adler>>24&255),O(a,255&e.total_in),O(a,e.total_in>>8&255),O(a,e.total_in>>16&255),O(a,e.total_in>>24&255)):(B(a,e.adler>>>16),B(a,65535&e.adler)),P(e),0<a.wrap&&(a.wrap=-a.wrap),0!==a.pending?p:1)},i.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==z&&69!==t&&73!==t&&91!==t&&103!==t&&t!==I&&666!==t?E(e,h):(e.state=null,t===I?E(e,-3):p):h},i.deflateSetDictionary=function(e,t){var i,r,s,o,c,l,d,u,m=t.length;if(!e||!e.state)return h;if(2===(o=(i=e.state).wrap)||1===o&&i.status!==z||i.lookahead)return h;for(1===o&&(e.adler=n(e.adler,t,m,0)),i.wrap=0,m>=i.w_size&&(0===o&&(D(i.head),i.strstart=0,i.block_start=0,i.insert=0),u=new a.Buf8(i.w_size),a.arraySet(u,t,m-i.w_size,i.w_size,0),t=u,m=i.w_size),c=e.avail_in,l=e.next_in,d=e.input,e.avail_in=m,e.next_in=0,e.input=t,j(i);i.lookahead>=k;){for(r=i.strstart,s=i.lookahead-(k-1);i.ins_h=(i.ins_h<<i.hash_shift^i.window[r+k-1])&i.hash_mask,i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++,--s;);i.strstart=r,i.lookahead=k-1,j(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=k-1,i.match_available=0,e.next_in=l,e.input=d,e.avail_in=c,i.wrap=o,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,i){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,i){t.exports=function(e,t){var i,r,a,s,n,o,c,l,d,p,h,u,m,g,f,b,v,x,_,y,w,k,$,S,z;i=e.state,r=e.next_in,S=e.input,a=r+(e.avail_in-5),s=e.next_out,z=e.output,n=s-(t-e.avail_out),o=s+(e.avail_out-257),c=i.dmax,l=i.wsize,d=i.whave,p=i.wnext,h=i.window,u=i.hold,m=i.bits,g=i.lencode,f=i.distcode,b=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{m<15&&(u+=S[r++]<<m,m+=8,u+=S[r++]<<m,m+=8),x=g[u&b];t:for(;;){if(u>>>=_=x>>>24,m-=_,0==(_=x>>>16&255))z[s++]=65535&x;else{if(!(16&_)){if(!(64&_)){x=g[(65535&x)+(u&(1<<_)-1)];continue t}if(32&_){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}y=65535&x,(_&=15)&&(m<_&&(u+=S[r++]<<m,m+=8),y+=u&(1<<_)-1,u>>>=_,m-=_),m<15&&(u+=S[r++]<<m,m+=8,u+=S[r++]<<m,m+=8),x=f[u&v];i:for(;;){if(u>>>=_=x>>>24,m-=_,!(16&(_=x>>>16&255))){if(!(64&_)){x=f[(65535&x)+(u&(1<<_)-1)];continue i}e.msg="invalid distance code",i.mode=30;break e}if(w=65535&x,m<(_&=15)&&(u+=S[r++]<<m,(m+=8)<_&&(u+=S[r++]<<m,m+=8)),c<(w+=u&(1<<_)-1)){e.msg="invalid distance too far back",i.mode=30;break e}if(u>>>=_,m-=_,(_=s-n)<w){if(d<(_=w-_)&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if($=h,(k=0)===p){if(k+=l-_,_<y){for(y-=_;z[s++]=h[k++],--_;);k=s-w,$=z}}else if(p<_){if(k+=l+p-_,(_-=p)<y){for(y-=_;z[s++]=h[k++],--_;);if(k=0,p<y){for(y-=_=p;z[s++]=h[k++],--_;);k=s-w,$=z}}}else if(k+=p-_,_<y){for(y-=_;z[s++]=h[k++],--_;);k=s-w,$=z}for(;2<y;)z[s++]=$[k++],z[s++]=$[k++],z[s++]=$[k++],y-=3;y&&(z[s++]=$[k++],1<y&&(z[s++]=$[k++]))}else{for(k=s-w;z[s++]=z[k++],z[s++]=z[k++],z[s++]=z[k++],2<(y-=3););y&&(z[s++]=z[k++],1<y&&(z[s++]=z[k++]))}break}}break}}while(r<a&&s<o);r-=y=m>>3,u&=(1<<(m-=y<<3))-1,e.next_in=r,e.next_out=s,e.avail_in=r<a?a-r+5:5-(r-a),e.avail_out=s<o?o-s+257:257-(s-o),i.hold=u,i.bits=m}},{}],49:[function(e,t,i){var r=e("../utils/common"),a=e("./adler32"),s=e("./crc32"),n=e("./inffast"),o=e("./inftrees"),c=1,l=2,d=0,p=-2,h=1,u=852,m=592;function g(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function f(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=h,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(u),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,d):p}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,b(e)):p}function x(e,t){var i,r;return e&&e.state?(r=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?p:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=i,r.wbits=t,v(e))):p}function _(e,t){var i,r;return e?(r=new f,(e.state=r).window=null,(i=x(e,t))!==d&&(e.state=null),i):p}var y,w,k=!0;function $(e){if(k){var t;for(y=new r.Buf32(512),w=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(o(c,e.lens,0,288,y,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;o(l,e.lens,0,32,w,0,e.work,{bits:5}),k=!1}e.lencode=y,e.lenbits=9,e.distcode=w,e.distbits=5}function S(e,t,i,a){var s,n=e.state;return null===n.window&&(n.wsize=1<<n.wbits,n.wnext=0,n.whave=0,n.window=new r.Buf8(n.wsize)),a>=n.wsize?(r.arraySet(n.window,t,i-n.wsize,n.wsize,0),n.wnext=0,n.whave=n.wsize):(a<(s=n.wsize-n.wnext)&&(s=a),r.arraySet(n.window,t,i-a,s,n.wnext),(a-=s)?(r.arraySet(n.window,t,i-a,a,0),n.wnext=a,n.whave=n.wsize):(n.wnext+=s,n.wnext===n.wsize&&(n.wnext=0),n.whave<n.wsize&&(n.whave+=s))),0}i.inflateReset=v,i.inflateReset2=x,i.inflateResetKeep=b,i.inflateInit=function(e){return _(e,15)},i.inflateInit2=_,i.inflate=function(e,t){var i,u,m,f,b,v,x,_,y,w,k,z,I,A,C,T,R,E,F,D,P,L,O,B,M=0,j=new r.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return p;12===(i=e.state).mode&&(i.mode=13),b=e.next_out,m=e.output,x=e.avail_out,f=e.next_in,u=e.input,v=e.avail_in,_=i.hold,y=i.bits,w=v,k=x,L=d;e:for(;;)switch(i.mode){case h:if(0===i.wrap){i.mode=13;break}for(;y<16;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(2&i.wrap&&35615===_){j[i.check=0]=255&_,j[1]=_>>>8&255,i.check=s(i.check,j,2,0),y=_=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&_)<<8)+(_>>8))%31){e.msg="incorrect header check",i.mode=30;break}if(8!=(15&_)){e.msg="unknown compression method",i.mode=30;break}if(y-=4,P=8+(15&(_>>>=4)),0===i.wbits)i.wbits=P;else if(P>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<P,e.adler=i.check=1,i.mode=512&_?10:12,y=_=0;break;case 2:for(;y<16;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(i.flags=_,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=_>>8&1),512&i.flags&&(j[0]=255&_,j[1]=_>>>8&255,i.check=s(i.check,j,2,0)),y=_=0,i.mode=3;case 3:for(;y<32;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}i.head&&(i.head.time=_),512&i.flags&&(j[0]=255&_,j[1]=_>>>8&255,j[2]=_>>>16&255,j[3]=_>>>24&255,i.check=s(i.check,j,4,0)),y=_=0,i.mode=4;case 4:for(;y<16;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}i.head&&(i.head.xflags=255&_,i.head.os=_>>8),512&i.flags&&(j[0]=255&_,j[1]=_>>>8&255,i.check=s(i.check,j,2,0)),y=_=0,i.mode=5;case 5:if(1024&i.flags){for(;y<16;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}i.length=_,i.head&&(i.head.extra_len=_),512&i.flags&&(j[0]=255&_,j[1]=_>>>8&255,i.check=s(i.check,j,2,0)),y=_=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&(v<(z=i.length)&&(z=v),z&&(i.head&&(P=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),r.arraySet(i.head.extra,u,f,z,P)),512&i.flags&&(i.check=s(i.check,u,z,f)),v-=z,f+=z,i.length-=z),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===v)break e;for(z=0;P=u[f+z++],i.head&&P&&i.length<65536&&(i.head.name+=String.fromCharCode(P)),P&&z<v;);if(512&i.flags&&(i.check=s(i.check,u,z,f)),v-=z,f+=z,P)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===v)break e;for(z=0;P=u[f+z++],i.head&&P&&i.length<65536&&(i.head.comment+=String.fromCharCode(P)),P&&z<v;);if(512&i.flags&&(i.check=s(i.check,u,z,f)),v-=z,f+=z,P)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;y<16;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(_!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}y=_=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;y<32;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}e.adler=i.check=g(_),y=_=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=b,e.avail_out=x,e.next_in=f,e.avail_in=v,i.hold=_,i.bits=y,2;e.adler=i.check=1,i.mode=12;case 12:if(5===t||6===t)break e;case 13:if(i.last){_>>>=7&y,y-=7&y,i.mode=27;break}for(;y<3;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}switch(i.last=1&_,y-=1,3&(_>>>=1)){case 0:i.mode=14;break;case 1:if($(i),i.mode=20,6!==t)break;_>>>=2,y-=2;break e;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}_>>>=2,y-=2;break;case 14:for(_>>>=7&y,y-=7&y;y<32;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if((65535&_)!=(_>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&_,y=_=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(z=i.length){if(v<z&&(z=v),x<z&&(z=x),0===z)break e;r.arraySet(m,u,f,z,b),v-=z,f+=z,x-=z,b+=z,i.length-=z;break}i.mode=12;break;case 17:for(;y<14;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(i.nlen=257+(31&_),_>>>=5,y-=5,i.ndist=1+(31&_),_>>>=5,y-=5,i.ncode=4+(15&_),_>>>=4,y-=4,286<i.nlen||30<i.ndist){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;y<3;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}i.lens[N[i.have++]]=7&_,_>>>=3,y-=3}for(;i.have<19;)i.lens[N[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,O={bits:i.lenbits},L=o(0,i.lens,0,19,i.lencode,0,i.work,O),i.lenbits=O.bits,L){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;T=(M=i.lencode[_&(1<<i.lenbits)-1])>>>16&255,R=65535&M,!((C=M>>>24)<=y);){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(R<16)_>>>=C,y-=C,i.lens[i.have++]=R;else{if(16===R){for(B=C+2;y<B;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(_>>>=C,y-=C,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}P=i.lens[i.have-1],z=3+(3&_),_>>>=2,y-=2}else if(17===R){for(B=C+3;y<B;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}y-=C,P=0,z=3+(7&(_>>>=C)),_>>>=3,y-=3}else{for(B=C+7;y<B;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}y-=C,P=0,z=11+(127&(_>>>=C)),_>>>=7,y-=7}if(i.have+z>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;z--;)i.lens[i.have++]=P}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,O={bits:i.lenbits},L=o(c,i.lens,0,i.nlen,i.lencode,0,i.work,O),i.lenbits=O.bits,L){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,O={bits:i.distbits},L=o(l,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,O),i.distbits=O.bits,L){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(6<=v&&258<=x){e.next_out=b,e.avail_out=x,e.next_in=f,e.avail_in=v,i.hold=_,i.bits=y,n(e,k),b=e.next_out,m=e.output,x=e.avail_out,f=e.next_in,u=e.input,v=e.avail_in,_=i.hold,y=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;T=(M=i.lencode[_&(1<<i.lenbits)-1])>>>16&255,R=65535&M,!((C=M>>>24)<=y);){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(T&&!(240&T)){for(E=C,F=T,D=R;T=(M=i.lencode[D+((_&(1<<E+F)-1)>>E)])>>>16&255,R=65535&M,!(E+(C=M>>>24)<=y);){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}_>>>=E,y-=E,i.back+=E}if(_>>>=C,y-=C,i.back+=C,i.length=R,0===T){i.mode=26;break}if(32&T){i.back=-1,i.mode=12;break}if(64&T){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&T,i.mode=22;case 22:if(i.extra){for(B=i.extra;y<B;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}i.length+=_&(1<<i.extra)-1,_>>>=i.extra,y-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;T=(M=i.distcode[_&(1<<i.distbits)-1])>>>16&255,R=65535&M,!((C=M>>>24)<=y);){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(!(240&T)){for(E=C,F=T,D=R;T=(M=i.distcode[D+((_&(1<<E+F)-1)>>E)])>>>16&255,R=65535&M,!(E+(C=M>>>24)<=y);){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}_>>>=E,y-=E,i.back+=E}if(_>>>=C,y-=C,i.back+=C,64&T){e.msg="invalid distance code",i.mode=30;break}i.offset=R,i.extra=15&T,i.mode=24;case 24:if(i.extra){for(B=i.extra;y<B;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}i.offset+=_&(1<<i.extra)-1,_>>>=i.extra,y-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===x)break e;if(z=k-x,i.offset>z){if((z=i.offset-z)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}I=z>i.wnext?(z-=i.wnext,i.wsize-z):i.wnext-z,z>i.length&&(z=i.length),A=i.window}else A=m,I=b-i.offset,z=i.length;for(x<z&&(z=x),x-=z,i.length-=z;m[b++]=A[I++],--z;);0===i.length&&(i.mode=21);break;case 26:if(0===x)break e;m[b++]=i.length,x--,i.mode=21;break;case 27:if(i.wrap){for(;y<32;){if(0===v)break e;v--,_|=u[f++]<<y,y+=8}if(k-=x,e.total_out+=k,i.total+=k,k&&(e.adler=i.check=i.flags?s(i.check,m,k,b-k):a(i.check,m,k,b-k)),k=x,(i.flags?_:g(_))!==i.check){e.msg="incorrect data check",i.mode=30;break}y=_=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;y<32;){if(0===v)break e;v--,_+=u[f++]<<y,y+=8}if(_!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}y=_=0}i.mode=29;case 29:L=1;break e;case 30:L=-3;break e;case 31:return-4;default:return p}return e.next_out=b,e.avail_out=x,e.next_in=f,e.avail_in=v,i.hold=_,i.bits=y,(i.wsize||k!==e.avail_out&&i.mode<30&&(i.mode<27||4!==t))&&S(e,e.output,e.next_out,k-e.avail_out)?(i.mode=31,-4):(w-=e.avail_in,k-=e.avail_out,e.total_in+=w,e.total_out+=k,i.total+=k,i.wrap&&k&&(e.adler=i.check=i.flags?s(i.check,m,k,e.next_out-k):a(i.check,m,k,e.next_out-k)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0==w&&0===k||4===t)&&L===d&&(L=-5),L)},i.inflateEnd=function(e){if(!e||!e.state)return p;var t=e.state;return t.window&&(t.window=null),e.state=null,d},i.inflateGetHeader=function(e,t){var i;return e&&e.state&&2&(i=e.state).wrap?((i.head=t).done=!1,d):p},i.inflateSetDictionary=function(e,t){var i,r=t.length;return e&&e.state?0!==(i=e.state).wrap&&11!==i.mode?p:11===i.mode&&a(1,t,r,0)!==i.check?-3:S(e,t,r,r)?(i.mode=31,-4):(i.havedict=1,d):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,i){var r=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],n=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,c,l,d,p,h){var u,m,g,f,b,v,x,_,y,w=h.bits,k=0,$=0,S=0,z=0,I=0,A=0,C=0,T=0,R=0,E=0,F=null,D=0,P=new r.Buf16(16),L=new r.Buf16(16),O=null,B=0;for(k=0;k<=15;k++)P[k]=0;for($=0;$<c;$++)P[t[i+$]]++;for(I=w,z=15;1<=z&&0===P[z];z--);if(z<I&&(I=z),0===z)return l[d++]=20971520,l[d++]=20971520,h.bits=1,0;for(S=1;S<z&&0===P[S];S++);for(I<S&&(I=S),k=T=1;k<=15;k++)if(T<<=1,(T-=P[k])<0)return-1;if(0<T&&(0===e||1!==z))return-1;for(L[1]=0,k=1;k<15;k++)L[k+1]=L[k]+P[k];for($=0;$<c;$++)0!==t[i+$]&&(p[L[t[i+$]]++]=$);if(v=0===e?(F=O=p,19):1===e?(F=a,D-=257,O=s,B-=257,256):(F=n,O=o,-1),k=S,b=d,C=$=E=0,g=-1,f=(R=1<<(A=I))-1,1===e&&852<R||2===e&&592<R)return 1;for(;;){for(x=k-C,y=p[$]<v?(_=0,p[$]):p[$]>v?(_=O[B+p[$]],F[D+p[$]]):(_=96,0),u=1<<k-C,S=m=1<<A;l[b+(E>>C)+(m-=u)]=x<<24|_<<16|y,0!==m;);for(u=1<<k-1;E&u;)u>>=1;if(0!==u?(E&=u-1,E+=u):E=0,$++,0==--P[k]){if(k===z)break;k=t[i+p[$]]}if(I<k&&(E&f)!==g){for(0===C&&(C=I),b+=S,T=1<<(A=k-C);A+C<z&&!((T-=P[A+C])<=0);)A++,T<<=1;if(R+=1<<A,1===e&&852<R||2===e&&592<R)return 1;l[g=E&f]=I<<24|A<<16|b-d}}return 0!==E&&(l[b+E]=k-C<<24|64<<16),h.bits=I,0}},{"../utils/common":41}],51:[function(e,t,i){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,i){var r=e("../utils/common"),a=0,s=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var o=0,c=29,l=256,d=l+1+c,p=30,h=19,u=2*d+1,m=15,g=16,f=7,b=256,v=16,x=17,_=18,y=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],w=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S=new Array(2*(d+2));n(S);var z=new Array(2*p);n(z);var I=new Array(512);n(I);var A=new Array(256);n(A);var C=new Array(c);n(C);var T,R,E,F=new Array(p);function D(e,t,i,r,a){this.static_tree=e,this.extra_bits=t,this.extra_base=i,this.elems=r,this.max_length=a,this.has_stree=e&&e.length}function P(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function L(e){return e<256?I[e]:I[256+(e>>>7)]}function O(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function B(e,t,i){e.bi_valid>g-i?(e.bi_buf|=t<<e.bi_valid&65535,O(e,e.bi_buf),e.bi_buf=t>>g-e.bi_valid,e.bi_valid+=i-g):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=i)}function M(e,t,i){B(e,i[2*t],i[2*t+1])}function j(e,t){for(var i=0;i|=1&e,e>>>=1,i<<=1,0<--t;);return i>>>1}function N(e,t,i){var r,a,s=new Array(m+1),n=0;for(r=1;r<=m;r++)s[r]=n=n+i[r-1]<<1;for(a=0;a<=t;a++){var o=e[2*a+1];0!==o&&(e[2*a]=j(s[o]++,o))}}function U(e){var t;for(t=0;t<d;t++)e.dyn_ltree[2*t]=0;for(t=0;t<p;t++)e.dyn_dtree[2*t]=0;for(t=0;t<h;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*b]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function W(e){8<e.bi_valid?O(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Z(e,t,i,r){var a=2*t,s=2*i;return e[a]<e[s]||e[a]===e[s]&&r[t]<=r[i]}function H(e,t,i){for(var r=e.heap[i],a=i<<1;a<=e.heap_len&&(a<e.heap_len&&Z(t,e.heap[a+1],e.heap[a],e.depth)&&a++,!Z(t,r,e.heap[a],e.depth));)e.heap[i]=e.heap[a],i=a,a<<=1;e.heap[i]=r}function q(e,t,i){var r,a,s,n,o=0;if(0!==e.last_lit)for(;r=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],a=e.pending_buf[e.l_buf+o],o++,0===r?M(e,a,t):(M(e,(s=A[a])+l+1,t),0!==(n=y[s])&&B(e,a-=C[s],n),M(e,s=L(--r),i),0!==(n=w[s])&&B(e,r-=F[s],n)),o<e.last_lit;);M(e,b,t)}function V(e,t){var i,r,a,s=t.dyn_tree,n=t.stat_desc.static_tree,o=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=u,i=0;i<c;i++)0!==s[2*i]?(e.heap[++e.heap_len]=l=i,e.depth[i]=0):s[2*i+1]=0;for(;e.heap_len<2;)s[2*(a=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[a]=0,e.opt_len--,o&&(e.static_len-=n[2*a+1]);for(t.max_code=l,i=e.heap_len>>1;1<=i;i--)H(e,s,i);for(a=c;i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],H(e,s,1),r=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=r,s[2*a]=s[2*i]+s[2*r],e.depth[a]=(e.depth[i]>=e.depth[r]?e.depth[i]:e.depth[r])+1,s[2*i+1]=s[2*r+1]=a,e.heap[1]=a++,H(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var i,r,a,s,n,o,c=t.dyn_tree,l=t.max_code,d=t.stat_desc.static_tree,p=t.stat_desc.has_stree,h=t.stat_desc.extra_bits,g=t.stat_desc.extra_base,f=t.stat_desc.max_length,b=0;for(s=0;s<=m;s++)e.bl_count[s]=0;for(c[2*e.heap[e.heap_max]+1]=0,i=e.heap_max+1;i<u;i++)f<(s=c[2*c[2*(r=e.heap[i])+1]+1]+1)&&(s=f,b++),c[2*r+1]=s,l<r||(e.bl_count[s]++,n=0,g<=r&&(n=h[r-g]),o=c[2*r],e.opt_len+=o*(s+n),p&&(e.static_len+=o*(d[2*r+1]+n)));if(0!==b){do{for(s=f-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[f]--,b-=2}while(0<b);for(s=f;0!==s;s--)for(r=e.bl_count[s];0!==r;)l<(a=e.heap[--i])||(c[2*a+1]!==s&&(e.opt_len+=(s-c[2*a+1])*c[2*a],c[2*a+1]=s),r--)}}(e,t),N(s,l,e.bl_count)}function G(e,t,i){var r,a,s=-1,n=t[1],o=0,c=7,l=4;for(0===n&&(c=138,l=3),t[2*(i+1)+1]=65535,r=0;r<=i;r++)a=n,n=t[2*(r+1)+1],++o<c&&a===n||(o<l?e.bl_tree[2*a]+=o:0!==a?(a!==s&&e.bl_tree[2*a]++,e.bl_tree[2*v]++):o<=10?e.bl_tree[2*x]++:e.bl_tree[2*_]++,s=a,l=(o=0)===n?(c=138,3):a===n?(c=6,3):(c=7,4))}function Q(e,t,i){var r,a,s=-1,n=t[1],o=0,c=7,l=4;for(0===n&&(c=138,l=3),r=0;r<=i;r++)if(a=n,n=t[2*(r+1)+1],!(++o<c&&a===n)){if(o<l)for(;M(e,a,e.bl_tree),0!=--o;);else 0!==a?(a!==s&&(M(e,a,e.bl_tree),o--),M(e,v,e.bl_tree),B(e,o-3,2)):o<=10?(M(e,x,e.bl_tree),B(e,o-3,3)):(M(e,_,e.bl_tree),B(e,o-11,7));s=a,l=(o=0)===n?(c=138,3):a===n?(c=6,3):(c=7,4)}}n(F);var K=!1;function X(e,t,i,a){B(e,(o<<1)+(a?1:0),3),function(e,t,i){W(e),O(e,i),O(e,~i),r.arraySet(e.pending_buf,e.window,t,i,e.pending),e.pending+=i}(e,t,i)}i._tr_init=function(e){K||(function(){var e,t,i,r,a,s=new Array(m+1);for(r=i=0;r<c-1;r++)for(C[r]=i,e=0;e<1<<y[r];e++)A[i++]=r;for(A[i-1]=r,r=a=0;r<16;r++)for(F[r]=a,e=0;e<1<<w[r];e++)I[a++]=r;for(a>>=7;r<p;r++)for(F[r]=a<<7,e=0;e<1<<w[r]-7;e++)I[256+a++]=r;for(t=0;t<=m;t++)s[t]=0;for(e=0;e<=143;)S[2*e+1]=8,e++,s[8]++;for(;e<=255;)S[2*e+1]=9,e++,s[9]++;for(;e<=279;)S[2*e+1]=7,e++,s[7]++;for(;e<=287;)S[2*e+1]=8,e++,s[8]++;for(N(S,d+1,s),e=0;e<p;e++)z[2*e+1]=5,z[2*e]=j(e,5);T=new D(S,y,l+1,d,m),R=new D(z,w,0,p,m),E=new D(new Array(0),k,0,h,f)}(),K=!0),e.l_desc=new P(e.dyn_ltree,T),e.d_desc=new P(e.dyn_dtree,R),e.bl_desc=new P(e.bl_tree,E),e.bi_buf=0,e.bi_valid=0,U(e)},i._tr_stored_block=X,i._tr_flush_block=function(e,t,i,r){var n,o,c=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,i=4093624447;for(t=0;t<=31;t++,i>>>=1)if(1&i&&0!==e.dyn_ltree[2*t])return a;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return s;for(t=32;t<l;t++)if(0!==e.dyn_ltree[2*t])return s;return a}(e)),V(e,e.l_desc),V(e,e.d_desc),c=function(e){var t;for(G(e,e.dyn_ltree,e.l_desc.max_code),G(e,e.dyn_dtree,e.d_desc.max_code),V(e,e.bl_desc),t=h-1;3<=t&&0===e.bl_tree[2*$[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),n=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=n&&(n=o)):n=o=i+5,i+4<=n&&-1!==t?X(e,t,i,r):4===e.strategy||o===n?(B(e,2+(r?1:0),3),q(e,S,z)):(B(e,4+(r?1:0),3),function(e,t,i,r){var a;for(B(e,t-257,5),B(e,i-1,5),B(e,r-4,4),a=0;a<r;a++)B(e,e.bl_tree[2*$[a]+1],3);Q(e,e.dyn_ltree,t-1),Q(e,e.dyn_dtree,i-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),q(e,e.dyn_ltree,e.dyn_dtree)),U(e),r&&W(e)},i._tr_tally=function(e,t,i){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&i,e.last_lit++,0===t?e.dyn_ltree[2*i]++:(e.matches++,t--,e.dyn_ltree[2*(A[i]+l+1)]++,e.dyn_dtree[2*L(t)]++),e.last_lit===e.lit_bufsize-1},i._tr_align=function(e){B(e,2,3),M(e,b,S),function(e){16===e.bi_valid?(O(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,i){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,i){(function(e){!function(e,t){if(!e.setImmediate){var i,r,a,s,n=1,o={},c=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,i="[object process]"==={}.toString.call(e.process)?function(e){process.nextTick(function(){h(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?(s="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),function(t){e.postMessage(s+t,"*")}):e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){h(e.data)},function(e){a.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(r=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(h,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return o[n]=a,i(n),n++},d.clearImmediate=p}function p(e){delete o[e]}function h(e){if(c)setTimeout(h,0,e);else{var i=o[e];if(i){c=!0;try{!function(e){var i=e.callback,r=e.args;switch(r.length){case 0:i();break;case 1:i(r[0]);break;case 2:i(r[0],r[1]);break;case 3:i(r[0],r[1],r[2]);break;default:i.apply(t,r)}}(i)}finally{p(e),c=!1}}}}function u(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&h(+t.data.slice(s.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,void 0!==V?V:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10);var X=G(K.exports);class Y extends t{static properties={uiStyle:{type:String,attribute:"ui-style",reflect:!0},api:{type:Object},asPanel:{type:Boolean},inlineMode:{type:Boolean},_mode:{type:String},_url:{type:String},_scraping:{type:Boolean},_scrapeError:{type:String},_form:{type:Object},_saving:{type:Boolean},_ingredientInput:{type:String},_ratingHover:{type:Number},_importFile:{type:Object},_importing:{type:Boolean},_importResult:{type:Object},_importError:{type:String},_importDownloadImages:{type:Boolean}};constructor(){super(),this.api=null,this.asPanel=!1,this.inlineMode=!1,this._mode="url",this._url="",this._scraping=!1,this._scrapeError=null,this._saving=!1,this._ingredientInput="",this._ratingHover=0,this._form=this._emptyForm(),this._importFile=null,this._importing=!1,this._importResult=null,this._importError=null,this._importDownloadImages=!0}_emptyForm(){return{name:"",description:"",source_url:"",servings:"",prep_time:"",cook_time:"",image_url:"",tags:"",courses:"",categories:"",collections:"",rating:0,notes:"",ingredients:[],instructions:[],cal:"",fat:"",satf:"",chol:"",sod:"",carb:"",fib:"",sug:"",prot:""}}_close(){this.dispatchEvent(new CustomEvent("rm-close",{bubbles:!0,composed:!0}))}async _handleScrape(){if(this._url.trim()&&!this._scraping){this._scraping=!0,this._scrapeError=null;try{const e=await this.api.scrapeRecipe(this._url.trim());if(e?.recipe){const t=e.recipe,i=t.nutrition||{};this._form={name:t.name||"",description:t.description||"",source_url:t.source_url||this._url.trim(),servings:t.servings||"",prep_time:t.prep_time||"",cook_time:t.cook_time||"",image_url:t.image_url||"",tags:(t.tags||[]).join(", "),courses:(t.courses||[]).join(", "),categories:(t.categories||[]).join(", "),collections:(t.collections||[]).join(", "),rating:t.rating||0,notes:t.notes||"",ingredients:t.ingredients||[],instructions:t.instructions||[],cal:i.calories??"",fat:i.fat??"",satf:i.saturated_fat??"",chol:i.cholesterol??"",sod:i.sodium??"",carb:i.carbohydrates??"",fib:i.fiber??"",sug:i.sugar??"",prot:i.protein??""},this._mode="manual"}else this._scrapeError=e?.error||i("Could not extract recipe from this URL.")}catch(e){this._scrapeError=e.message||i("Scraping failed.")}finally{this._scraping=!1}}}_handleImportFileChange(e){this._importFile=e.target.files[0]||null,this._importResult=null,this._importError=null}async _handleImport(){if(this._importFile&&!this._importing){this._importing=!0,this._importResult=null,this._importError=null;try{let e;try{e=await X.loadAsync(this._importFile)}catch(e){throw new Error(i(r`Could not open ZIP file: ${e.message}`))}const t=Object.values(e.files).find(e=>!e.dir&&e.name.endsWith(".html"));if(!t)throw new Error(i("No HTML file found inside the ZIP — is this a valid Recipe Keeper export?"));const a=await t.async("text");console.log(`[Recipe Keeper Import] HTML extracted (${a.length} chars), sending to backend`);const s=await this.api.importRecipeKeeper(a);console.log(`[Recipe Keeper Import] Phase 1 done: ${s.imported} imported, ${s.failed} failed, ${s.recipe_images?.length??0} need images`);let n=0,o=0;if(this._importDownloadImages&&s.recipe_images?.length){const t=new Set([".jpg",".jpeg",".png",".webp",".gif",".bmp"]);for(const{recipe_id:i,image_filename:r}of s.recipe_images){const a=e.files[r]??Object.values(e.files).find(e=>{const i=r.split("/").pop();return!e.dir&&e.name.split("/").pop()===i&&t.has(e.name.slice(e.name.lastIndexOf(".")).toLowerCase())});if(a)try{const e=await a.async("base64");await this.api.uploadRecipeImage(i,e),n++}catch(e){console.warn(`[Recipe Keeper Import] Could not save image for recipe ${i}:`,e),o++}}console.log(`[Recipe Keeper Import] Phase 2 done: ${n} images saved, ${o} failed`)}this._importResult={...s,imagesSaved:n},s.imported>0&&this.dispatchEvent(new CustomEvent("rm-import-done",{bubbles:!0,composed:!0}))}catch(e){console.error("[Recipe Keeper Import] Failed:",e),this._importError=e.message||String(e)||i("Import failed.")}finally{this._importing=!1}}}async _handleSave(){if(this._form.name.trim()&&!this._saving){this._saving=!0;try{const e=this._form,t=e=>e?e.split(",").map(e=>e.trim()).filter(Boolean):[],i={cal:"calories",fat:"fat",satf:"saturated_fat",chol:"cholesterol",sod:"sodium",carb:"carbohydrates",fib:"fiber",sug:"sugar",prot:"protein"},r={};let a=!1;for(const[t,s]of Object.entries(i))""!==e[t]&&null!=e[t]&&(r[s]=e[t],a=!0);const s={name:e.name,description:e.description,source_url:e.source_url,image_url:e.image_url,servings:parseInt(e.servings)||null,prep_time:parseInt(e.prep_time)||null,cook_time:parseInt(e.cook_time)||null,tags:t(e.tags),courses:t(e.courses),categories:t(e.categories),collections:t(e.collections),rating:e.rating||null,notes:e.notes,ingredients:e.ingredients,instructions:e.instructions,nutrition:a?r:null};this.dispatchEvent(new CustomEvent("rm-add-recipe",{detail:{data:s},bubbles:!0,composed:!0})),this._form=this._emptyForm()}finally{this._saving=!1}}}_setField(e,t){this._form={...this._form,[e]:t}}_addIngredient(){const e=this._ingredientInput.trim();if(!e)return;let t;if(e.startsWith("#"))t={name:e,is_heading:!0};else{const i=e.split(/\s+/);let r="",a="",s="";i.length>=3&&!isNaN(parseFloat(i[0]))?(r=i[0],a=i[1],s=i.slice(2).join(" ")):2!==i.length||isNaN(parseFloat(i[0]))?s=e:(r=i[0],s=i[1]),t={amount:r,unit:a,name:s}}this._form={...this._form,ingredients:[...this._form.ingredients,t]},this._ingredientInput=""}_addIngredientsBulk(e){const t=e.split("\n").map(e=>e.trim()).filter(Boolean).map(e=>{if(e.startsWith("#"))return{name:e,is_heading:!0};const t=e.split(/\s+/);let i="",r="",a="";return t.length>=3&&!isNaN(parseFloat(t[0]))?(i=t[0],r=t[1],a=t.slice(2).join(" ")):2!==t.length||isNaN(parseFloat(t[0]))?a=e:(i=t[0],a=t[1]),{amount:i,unit:r,name:a}});t.length&&(this._form={...this._form,ingredients:[...this._form.ingredients,...t]})}_removeIngredient(e){this._form={...this._form,ingredients:this._form.ingredients.filter((t,i)=>i!==e)}}_addStep(e){e.trim()&&(this._form={...this._form,instructions:[...this._form.instructions,e.trim()]})}_removeStep(e){this._form={...this._form,instructions:this._form.instructions.filter((t,i)=>i!==e)}}_renderPanelContent(){return a`
      <div class="dialog-header">
        <div class="mode-toggle">
          <button class="mode-btn ${"url"===this._mode?"active":""}" @click=${()=>{this._mode="url"}}>
            <ha-icon icon="mdi:link-variant"></ha-icon> ${i("From URL")}
          </button>
          <button class="mode-btn ${"manual"===this._mode?"active":""}" @click=${()=>{this._mode="manual"}}>
            <ha-icon icon="mdi:pencil-outline"></ha-icon> ${i("Manual")}
          </button>
          <button class="mode-btn ${"import"===this._mode?"active":""}" @click=${()=>{this._mode="import"}}>
            <ha-icon icon="mdi:import"></ha-icon> ${i("Import")}
          </button>
        </div>
        ${this.inlineMode?"":a`<button class="icon-btn" @click=${this._close}><ha-icon icon="mdi:close"></ha-icon></button>`}
      </div>

      <div class="dialog-body">
        ${"url"===this._mode?this._renderUrlMode():""}
        ${"import"===this._mode?this._renderImportMode():""}
        ${"manual"===this._mode?this._renderManualMode():""}
      </div>

      ${"manual"===this._mode?a`
        <div class="dialog-footer">
          <button class="action-btn" @click=${this._close}>${i("Cancel")}</button>
          <button
            class="action-btn primary"
            ?disabled=${!this._form.name.trim()||this._saving}
            @click=${this._handleSave}
          >
            ${this._saving?a`<ha-circular-progress active size="tiny"></ha-circular-progress>`:a`<ha-icon icon="mdi:content-save-outline"></ha-icon>`}
            ${i("Save Recipe")}
          </button>
        </div>
      `:""}
    `}render(){return this.inlineMode?a`<div class="dialog-panel inline-panel">${this._renderPanelContent()}</div>`:a`
      <div class="dialog-overlay ${this.asPanel?"panel-mode":""}" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog-panel">${this._renderPanelContent()}</div>
      </div>
    `}_renderImportMode(){return a`
      <div class="import-mode">
        <div class="import-info">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div>
            <strong>${i("Recipe Keeper import")}</strong><br/>
            ${i(a`Export your recipes from the Recipe Keeper app
            (<em>Menu → Export → Recipe Keeper File</em>), then select the
            exported <code>.zip</code> file below. Recipe photos will be saved
            locally if available.`)}
          </div>
        </div>

        <label class="file-label">
          <ha-icon icon="mdi:file-import-outline"></ha-icon>
          ${this._importFile?this._importFile.name:i("Choose .zip file…")}
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
          ${i("Save recipe photos locally")}
        </label>

        ${this._importResult?a`
          <div class="import-result ${this._importResult.failed>0?"partial":"success"}">
            <ha-icon icon="${this._importResult.failed>0?"mdi:alert-circle-outline":"mdi:check-circle-outline"}"></ha-icon>
            <div>
              <strong>${i(r`${this._importResult.imported} recipe${1!==this._importResult.imported?"s":""} imported`)}</strong>
              ${this._importResult.imagesSaved>0?a` ${i(r`with ${this._importResult.imagesSaved} photo${1!==this._importResult.imagesSaved?"s":""}`)}`:""}
              ${this._importResult.failed>0?a`<br/><small>${i(r`${this._importResult.failed} failed — check HA logs for details`)}</small>`:""}
            </div>
          </div>
        `:this._importError?a`
          <div class="import-result error">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div><strong>${i("Import failed")}</strong><br/><small>${this._importError}</small></div>
          </div>
        `:""}

        <button
          class="action-btn primary import-btn"
          ?disabled=${!this._importFile||this._importing}
          @click=${this._handleImport}
        >
          ${this._importing?a`<ha-circular-progress active size="tiny"></ha-circular-progress> ${i("Importing…")}`:a`<ha-icon icon="mdi:import"></ha-icon> ${i("Import Recipes")}`}
        </button>
      </div>
    `}_renderUrlMode(){return a`
      <div class="url-mode">
        <div class="url-hint">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${i("Paste a recipe URL to automatically extract the recipe details.")}
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
            ${this._scraping?a`<ha-circular-progress active size="tiny"></ha-circular-progress>`:a`<ha-icon icon="mdi:download-outline"></ha-icon>`}
            ${i("Fetch")}
          </button>
        </div>
        ${this._scrapeError?a`
          <div class="error-msg">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            ${this._scrapeError}
          </div>
          <button class="action-btn" @click=${()=>{this._mode="manual",this._form={...this._emptyForm(),source_url:this._url}}}>
            ${i("Enter manually instead")}
          </button>
        `:""}
      </div>
    `}_renderManualMode(){const e=this._form,t=this._ratingHover||e.rating||0;return a`
      <div class="manual-mode">

        <!-- Name -->
        <div class="field">
          <label>${i("Recipe Name *")}</label>
          <input type="text" .value=${e.name}
            @input=${e=>this._setField("name",e.target.value)}
            placeholder="${i("e.g. Spaghetti Bolognese")}" />
        </div>

        <!-- Description -->
        <div class="field">
          <label>${i("Description")}</label>
          <textarea rows="2" .value=${e.description}
            @input=${e=>this._setField("description",e.target.value)}
            placeholder="${i("Short description…")}"></textarea>
        </div>

        <!-- Source URL + Image URL -->
        <div class="field-row">
          <div class="field">
            <label>${i("Source URL")}</label>
            <input type="url" .value=${e.source_url}
              @input=${e=>this._setField("source_url",e.target.value)}
              placeholder="https://…" />
          </div>
          <div class="field">
            <label>${i("Image URL")}</label>
            <input type="url" .value=${e.image_url}
              @input=${e=>this._setField("image_url",e.target.value)}
              placeholder="https://…/image.jpg" />
          </div>
        </div>

        <!-- Times + servings -->
        <div class="field-row-3">
          <div class="field">
            <label>${i("Prep (min)")}</label>
            <input type="number" .value=${String(e.prep_time)}
              @input=${e=>this._setField("prep_time",e.target.value)} placeholder="15" min="0" />
          </div>
          <div class="field">
            <label>${i("Cook (min)")}</label>
            <input type="number" .value=${String(e.cook_time)}
              @input=${e=>this._setField("cook_time",e.target.value)} placeholder="30" min="0" />
          </div>
          <div class="field">
            <label>${i("Servings")}</label>
            <input type="number" .value=${String(e.servings)}
              @input=${e=>this._setField("servings",e.target.value)} placeholder="4" min="1" />
          </div>
        </div>

        <!-- Rating -->
        <div class="field">
          <label>${i("Rating")}</label>
          <div class="star-row"
            @mouseleave=${()=>{this._ratingHover=0}}>
            ${[1,2,3,4,5].map(i=>a`
              <span
                class="star ${i<=t?"filled":""}"
                @mouseenter=${()=>{this._ratingHover=i}}
                @click=${()=>this._setField("rating",e.rating===i?0:i)}
              >★</span>
            `)}
            ${e.rating?a`<button class="clear-rating" @click=${()=>this._setField("rating",0)}>${i("Clear")}</button>`:""}
          </div>
        </div>

        <!-- Categorisation row -->
        <div class="field">
          <label>${i("Tags (comma-separated)")}</label>
          <input type="text" .value=${e.tags}
            @input=${e=>this._setField("tags",e.target.value)}
            placeholder="${i("quick, weeknight, family")}" />
        </div>

        <div class="field">
          <label>${i("Courses (comma-separated)")}</label>
          <input type="text" .value=${e.courses}
            @input=${e=>this._setField("courses",e.target.value)}
            placeholder="${i("Dinner, Main Course")}" />
        </div>

        <div class="field-row">
          <div class="field">
            <label>${i("Categories (comma-separated)")}</label>
            <input type="text" .value=${e.categories}
              @input=${e=>this._setField("categories",e.target.value)}
              placeholder="${i("Italian, Gluten Free")}" />
          </div>
          <div class="field">
            <label>${i("Collections (comma-separated)")}</label>
            <input type="text" .value=${e.collections}
              @input=${e=>this._setField("collections",e.target.value)}
              placeholder="${i("30 Minutes, Summer")}" />
          </div>
        </div>

        <!-- Ingredients -->
        <div class="field">
          <label>${i(r`Ingredients (${e.ingredients.length})`)}</label>
          ${e.ingredients.length?a`
            <ul class="ing-list">
              ${e.ingredients.map((e,t)=>a`
                <li class="${e.is_heading||e.name?.startsWith("#")?"ing-heading":""}">
                  <span class="ing-text">
                    ${e.is_heading||e.name?.startsWith("#")?a`<strong>${e.name?.startsWith("#")?e.name.slice(1).trim():e.name}</strong>`:a`${e.amount?`${e.amount}${e.unit?" "+e.unit:""} `:""}${e.name}`}
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
              placeholder='${i('e.g. "2 cups flour", "salt", or "# Section"')}'
            />
            <button class="action-btn sm" @click=${this._addIngredient}>${i("Add")}</button>
          </div>
          <div class="bulk-hint">
            ${i(a`Tip: Use <code>#Section Name</code> to add a section header. Or paste multiple lines at once:`)}
            <button class="action-btn sm bulk-btn" @click=${()=>{const e=prompt(i("Paste ingredients (one per line, use # for headers):"));e&&this._addIngredientsBulk(e)}}>
              <ha-icon icon="mdi:text-box-multiple-outline"></ha-icon> ${i("Bulk paste")}
            </button>
          </div>
        </div>

        <!-- Directions -->
        <div class="field">
          <label>${i(r`Directions (${e.instructions.length} steps)`)}</label>
          ${e.instructions.length?a`
            <ol class="steps-edit">
              ${e.instructions.map((e,t)=>a`
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
              placeholder="${i("Type a step, press Enter to add…")}"
            ></textarea>
            <button class="action-btn sm" @click=${e=>{const t=e.target.closest(".add-row").querySelector("textarea");this._addStep(t.value),t.value=""}}>${i("Add")}</button>
          </div>
        </div>

        <!-- Notes -->
        <div class="field">
          <label>${i("Notes")}</label>
          <textarea rows="2" .value=${e.notes}
            @input=${e=>this._setField("notes",e.target.value)}
            placeholder="${i("Variations, tips…")}"></textarea>
        </div>

        <!-- Nutrition -->
        <div class="section-divider">${i("Nutrition Facts (per serving — optional)")}</div>
        <div class="field-row-3">
          <div class="field">
            <label>${i("Calories (kcal)")}</label>
            <input type="number" .value=${String(e.cal)}
              @input=${e=>this._setField("cal",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>${i("Protein (g)")}</label>
            <input type="number" .value=${String(e.prot)}
              @input=${e=>this._setField("prot",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>${i("Fat (g)")}</label>
            <input type="number" .value=${String(e.fat)}
              @input=${e=>this._setField("fat",e.target.value)} placeholder="0" min="0" />
          </div>
        </div>
        <div class="field-row-3">
          <div class="field">
            <label>${i("Saturated Fat (g)")}</label>
            <input type="number" .value=${String(e.satf)}
              @input=${e=>this._setField("satf",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>${i("Carbohydrates (g)")}</label>
            <input type="number" .value=${String(e.carb)}
              @input=${e=>this._setField("carb",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>${i("Dietary Fiber (g)")}</label>
            <input type="number" .value=${String(e.fib)}
              @input=${e=>this._setField("fib",e.target.value)} placeholder="0" min="0" />
          </div>
        </div>
        <div class="field-row-3">
          <div class="field">
            <label>${i("Sugars (g)")}</label>
            <input type="number" .value=${String(e.sug)}
              @input=${e=>this._setField("sug",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>${i("Sodium (mg)")}</label>
            <input type="number" .value=${String(e.sod)}
              @input=${e=>this._setField("sod",e.target.value)} placeholder="0" min="0" />
          </div>
          <div class="field">
            <label>${i("Cholesterol (mg)")}</label>
            <input type="number" .value=${String(e.chol)}
              @input=${e=>this._setField("chol",e.target.value)} placeholder="0" min="0" />
          </div>
        </div>

      </div>
    `}static styles=s`
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
    .mode-btn.active { background: var(--rm-accent, #ff6b35); color: var(--rm-ink, #fff); }

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
    .action-btn.primary { background: var(--rm-accent, #ff6b35); border-color: var(--rm-accent, #ff6b35); color: var(--rm-ink, #fff); }
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

    /* ═══ Fresh + Compact ═══ */
    :host([ui-style="fresh"]) .dialog-header,
    :host([ui-style="compact"]) .dialog-header { border-bottom: none; padding: 16px 16px 4px; background: transparent; }
    :host([ui-style="fresh"]) .mode-toggle,
    :host([ui-style="compact"]) .mode-toggle { gap: 8px; background: none; border: none; padding: 0; }
    :host([ui-style="fresh"]) .mode-btn,
    :host([ui-style="compact"]) .mode-btn {
      min-height: 40px; padding: 0 16px; border-radius: 999px; font-size: 14px; font-weight: 600;
      border: 1px solid var(--rm-border); background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([ui-style="compact"]) .mode-btn { border-radius: 12px; border-color: transparent; }
    :host([ui-style="fresh"]) .mode-btn.active,
    :host([ui-style="compact"]) .mode-btn.active { background: var(--rm-text); border-color: var(--rm-text); color: var(--rm-bg-main); font-weight: 700; }
    :host([ui-style="fresh"]) .url-input,
    :host([ui-style="compact"]) .url-input,
    :host([ui-style="fresh"]) .field input,
    :host([ui-style="fresh"]) .field textarea,
    :host([ui-style="compact"]) .field input,
    :host([ui-style="compact"]) .field textarea,
    :host([ui-style="fresh"]) .add-row input,
    :host([ui-style="fresh"]) .add-row textarea,
    :host([ui-style="compact"]) .add-row input,
    :host([ui-style="compact"]) .add-row textarea { border-radius: 14px; min-height: 48px; background: var(--rm-bg-surface); }
    :host([ui-style="fresh"]) .action-btn,
    :host([ui-style="fresh"]) .import-btn { min-height: 48px; border-radius: 999px; padding: 0 20px; }
    :host([ui-style="compact"]) .action-btn,
    :host([ui-style="compact"]) .import-btn { min-height: 48px; border-radius: 12px; padding: 0 18px; }
    :host([ui-style="fresh"]) .file-label,
    :host([ui-style="compact"]) .file-label { border-radius: 999px; min-height: 44px; }
    :host([ui-style="fresh"]) .url-hint,
    :host([ui-style="compact"]) .url-hint { background: var(--rm-accent-soft); color: var(--rm-accent-text); border-radius: var(--rm-radius-sm); padding: 12px 14px; }
  `}try{customElements.define("rm-add-recipe-dialog",Y)}catch{}const J=["breakfast","lunch","dinner","snack"];class ee extends t{static properties={uiStyle:{type:String,attribute:"ui-style",reflect:!0},api:{type:Object},recipes:{type:Array},settings:{type:Object},fromRecipe:{type:Object},_weekStart:{type:String},_selectedDate:{type:String},_plan:{type:Array},_loading:{type:Boolean},_showPicker:{type:Boolean},_pickerTarget:{type:Object},_pickerSearch:{type:String},_pickerServings:{type:Number}};constructor(){super(),this.api=null,this.recipes=[],this.settings={},this.fromRecipe=null,this._plan=[],this._loading=!1,this._showPicker=!1,this._pickerTarget=null,this._pickerSearch="",this._pickerServings=2,this._weekStart=this._getMondayISO(new Date),this._selectedDate=this._todayISO()}updated(e){(e.has("api")||e.has("_weekStart"))&&this.api&&this._loadPlan()}_getMondayISO(e){const t=e.getDay(),i=0===t?-6:1-t,r=new Date(e);r.setDate(r.getDate()+i);return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}_addDays(e,t){const i=new Date(e+"T00:00:00Z");return i.setUTCDate(i.getUTCDate()+t),i.toISOString().split("T")[0]}_formatDisplayDate(e){return new Date(e+"T00:00:00Z").getUTCDate().toString()}_formatMonthYear(e){return new Date(e+"T00:00:00Z").toLocaleDateString(this.settings?.language||"en",{month:"long",year:"numeric",timeZone:"UTC"})}_formatDayName(e){return new Date(e+"T00:00:00Z").toLocaleDateString(this.settings?.language||"en",{weekday:"short",timeZone:"UTC"})}get _styled(){return"fresh"===this.uiStyle||"compact"===this.uiStyle}_todayISO(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_setWeek(e){this._weekStart=e;const t=this._todayISO(),i=t>=e&&t<=this._addDays(e,6);this._selectedDate=i?t:e}_prevWeek(){this._setWeek(this._addDays(this._weekStart,-7))}_nextWeek(){this._setWeek(this._addDays(this._weekStart,7))}_formatLongDay(e){const t=new Date(e+"T00:00:00Z").toLocaleDateString(this.settings?.language||"en",{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"});return e===this._todayISO()?i(r`Today · ${t}`):t}_mealIcon(e){return{breakfast:"mdi:coffee-outline",lunch:"mdi:silverware-fork-knife",dinner:"mdi:weather-night",snack:"mdi:cookie-outline"}[e]||"mdi:food"}_formatMinutes(e){if(!e)return"";if(e<60)return`${e} min`;const t=Math.floor(e/60),i=e%60;return i?`${t} h ${i} min`:`${t} h`}_isCurrentWeek(){return this._weekStart===this._getMondayISO(new Date)}async _loadPlan(){this._loading=!0;try{const e=await this.api.getMealPlan(this._weekStart);this._plan=e?.entries??[]}catch(e){this._plan=[]}finally{this._loading=!1}}_getEntriesForSlot(e,t){return this._plan.filter(i=>i.date===e&&i.meal_type===t)}_openPicker(e,t){this._pickerTarget={date:e,mealType:t},this._pickerSearch="",this._pickerServings=2,this._showPicker=!0}async _handlePickRecipe(e){this._pickerTarget&&(await this.api.addToMealPlan(e.id,this._pickerTarget.date,this._pickerTarget.mealType,this._pickerServings),this._showPicker=!1,await this._loadPlan())}async _handleRemoveEntry(e){await this.api.removeFromMealPlan(e),await this._loadPlan()}async _handleClearWeek(){await this.api.clearMealPlanWeek(this._weekStart),await this._loadPlan()}_openRecipeDetail(e){const t=this.recipes.find(t=>t.id===e.recipe_id);t&&this.dispatchEvent(new CustomEvent("rm-open-recipe",{detail:{recipe:t},bubbles:!0,composed:!0}))}_mealTypeLabel(e){switch(e){case"breakfast":return i("Breakfast");case"lunch":return i("Lunch");case"dinner":return i("Dinner");case"snack":return i("Snack");default:return e}}get _pickerFiltered(){const e=this._pickerSearch.trim().toLowerCase();return e?this.recipes.filter(t=>t.name?.toLowerCase().includes(e)||t.tags?.some(t=>t.toLowerCase().includes(e))):this.recipes}render(){const e=Array.from({length:7},(e,t)=>this._addDays(this._weekStart,t)),t=this._todayISO();return a`
      <div class="planner-container">
        ${this.fromRecipe?a`
          <div class="back-to-recipe">
            <button class="back-recipe-btn" @click=${()=>this.dispatchEvent(new CustomEvent("rm-back-to-recipe",{bubbles:!0,composed:!0}))}>
              <ha-icon icon="mdi:arrow-left"></ha-icon>
              <span>${i(r`Back to ${this.fromRecipe.name}`)}</span>
            </button>
          </div>
        `:""}
        <!-- Week navigation -->
        <div class="week-nav">
          <button class="nav-btn" @click=${this._prevWeek}>
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <div class="week-label">
            <span class="week-month">${this._formatMonthYear(this._weekStart)}</span>
            ${this._isCurrentWeek()?a`<span class="today-badge">${i("This week")}</span>`:a`
              <button class="text-link" @click=${()=>{this._setWeek(this._getMondayISO(new Date))}}>${i("Today")}</button>
            `}
          </div>
          <button class="nav-btn" @click=${this._nextWeek}>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
        </div>

        ${this._styled?this._renderDayView(e,t):""}

        <!-- Day headers -->
        <div class="day-headers" ?hidden=${this._styled}>
          ${e.map(e=>a`
            <div class="day-header ${e===t?"today":""}">
              <span class="day-name">${this._formatDayName(e)}</span>
              <span class="day-num">${this._formatDisplayDate(e)}</span>
            </div>
          `)}
        </div>

        <!-- Plan grid scroll (Classic week matrix) -->
        <div class="plan-scroll" ?hidden=${this._styled}>
          ${this._loading?a`
            <div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>
          `:a`
            ${J.map(r=>a`
              <div class="meal-row">
                <div class="meal-label">${this._mealTypeLabel(r)}</div>
                <div class="meal-cells">
                  ${e.map(e=>{const s=this._getEntriesForSlot(e,r);return a`
                      <div class="meal-cell ${e===t?"today":""}">
                        ${s.map(e=>{const t=this.recipes.find(t=>t.id===e.recipe_id);return a`
                            <div class="meal-entry" @click=${()=>this._openRecipeDetail(e)}>
                              ${t?.image_url?a`
                                <img src="${t.image_url}" alt="${t?.name||""}" class="entry-thumb" />
                              `:a`
                                <div class="entry-thumb entry-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                              `}
                              <span class="entry-name">${t?.name??i("Unknown")}</span>
                              ${e.servings&&1!==e.servings?a`
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
          ${this._plan.length?a`
            <div class="clear-row">
              <button class="text-danger-btn" @click=${this._handleClearWeek}>
                <ha-icon icon="mdi:calendar-remove-outline"></ha-icon>
                ${i("Clear this week")}
              </button>
            </div>
          `:""}
        </div>

        <!-- Recipe picker dialog -->
        ${this._showPicker?this._renderPicker():""}
      </div>
    `}_renderDayView(e,t){const r=Math.max(0,e.indexOf(this._selectedDate)),s=[e[r],e[r+1]].filter(Boolean);return a`
      <div class="day-chips" role="group" aria-label="${i("Day of the week")}">
        ${e.map(e=>{const i=this._plan.some(t=>t.date===e);return a`
            <button class="day-chip" aria-pressed="${e===this._selectedDate?"true":"false"}"
              aria-current="${e===t?"date":"false"}"
              @click=${()=>{this._selectedDate=e}}>
              <span class="dc-name">${this._formatDayName(e)}</span>
              <span class="dc-num">${this._formatDisplayDate(e)}</span>
              <span class="dc-dot ${i?"":"empty"}"></span>
            </button>
          `})}
      </div>
      ${this._loading?a`<div class="plan-loading"><ha-circular-progress active></ha-circular-progress></div>`:a`
        <div class="day-scroll">
          <div class="day-groups">
            ${s.map((e,t)=>a`
              <section class="day-group">
                <div class="day-title"><span class="dt-dot ${t?"alt":""}"></span>${this._formatLongDay(e)}</div>
                <div class="day-card">
                  ${J.map(t=>this._renderSlot(e,t))}
                </div>
              </section>
            `)}
          </div>
          ${this._plan.length?a`
            <div class="clear-row">
              <button class="text-danger-btn" @click=${this._handleClearWeek}>
                <ha-icon icon="mdi:calendar-remove-outline"></ha-icon>
                ${i("Clear this week")}
              </button>
            </div>
          `:""}
        </div>
      `}
    `}_renderSlot(e,t){const s=this._getEntriesForSlot(e,t),n=this._mealTypeLabel(t);return s.length?a`${s.map((o,c)=>{const l=this.recipes.find(e=>e.id===o.recipe_id),d=l&&(l.total_time||(l.prep_time||0)+(l.cook_time||0))||0,p=[d?this._formatMinutes(d):"",o.servings?i(r`serves ${o.servings}`):""].filter(Boolean).join(" · ");return a`
        <div class="slot">
          <button class="slot-open" @click=${()=>this._openRecipeDetail(o)}>
            <span class="slot-thumb">
              ${l?.image_url?a`<img src="${l.image_url}" alt="" />`:a`<ha-icon icon="mdi:food"></ha-icon>`}
            </span>
            <span class="slot-mid">
              <span class="slot-eyebrow">${0===c?n:""}</span>
              <span class="slot-name">${l?.name??i("Unknown")}</span>
              ${p?a`<span class="slot-sub">${p}</span>`:""}
            </span>
          </button>
          ${c===s.length-1?a`
            <button class="slot-btn" @click=${()=>this._openPicker(e,t)}
              title="${i(r`Add another ${n}`)}" aria-label="${i(r`Add another ${n}`)}">
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          `:""}
          <button class="slot-btn" @click=${()=>this._handleRemoveEntry(o.id)}
            title="${i("Remove")}" aria-label="${i(r`Remove ${l?.name??""}`)}">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
      `})}`:a`
        <div class="slot">
          <span class="slot-tile"><ha-icon icon="${this._mealIcon(t)}"></ha-icon></span>
          <div class="slot-mid">
            <div class="slot-eyebrow">${n}</div>
            <div class="slot-name muted">${i("Nothing planned")}</div>
          </div>
          <button class="slot-btn add" @click=${()=>this._openPicker(e,t)}
            title="${i(r`Add ${n}`)}" aria-label="${i(r`Add ${n}`)}">
            <span><ha-icon icon="mdi:plus"></ha-icon></span>
          </button>
        </div>
      `}_renderPicker(){const e=this._pickerTarget;return a`
      <div class="picker-overlay" @click=${e=>{e.target===e.currentTarget&&(this._showPicker=!1)}}>
        <div class="picker-panel">
          <div class="picker-header">
            <span>${i(r`Add to ${this._mealTypeLabel(e.mealType)}`)}</span>
            <button class="icon-btn" @click=${()=>{this._showPicker=!1}}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>
          <div class="picker-servings-row">
            <span class="picker-label">${i("Servings:")}</span>
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
              placeholder="${i("Search recipes…")}"
              .value=${this._pickerSearch}
              @input=${e=>{this._pickerSearch=e.target.value}}
            />
          </div>
          <div class="picker-list">
            ${0===this._pickerFiltered.length?a`
              <div class="picker-empty">${i("No recipes found")}</div>
            `:this._pickerFiltered.map(e=>a`
              <div class="picker-item" @click=${()=>this._handlePickRecipe(e)}>
                ${e.image_url?a`
                  <img src="${e.image_url}" alt="${e.name}" class="picker-thumb" />
                `:a`
                  <div class="picker-thumb picker-placeholder"><ha-icon icon="mdi:food"></ha-icon></div>
                `}
                <div class="picker-info">
                  <span class="picker-name">${e.name}</span>
                  ${e.tags?.length?a`<span class="picker-tags">${e.tags.slice(0,2).join(", ")}</span>`:""}
                </div>
                ${e.is_favourite?a`<ha-icon icon="mdi:heart" class="picker-fav"></ha-icon>`:""}
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
      position: relative;
    }

    /* Back to recipe */
    .back-to-recipe {
      padding: 6px 14px 0;
      flex-shrink: 0;
    }
    .back-recipe-btn {
      display: inline-flex; align-items: center; gap: 6px;
      background: none; border: none; cursor: pointer;
      color: var(--rm-accent, #ff6b35); font-size: 13px; font-weight: 500;
      padding: 4px 6px; border-radius: 8px; transition: background 0.15s;
    }
    .back-recipe-btn:hover { background: var(--rm-accent-soft, rgba(255,107,53,0.12)); }
    .back-recipe-btn ha-icon { --mdc-icon-size: 18px; }

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
      color: var(--rm-ink, #fff);
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

    /* ═══ Fresh + Compact ═══ */
    :host([ui-style="fresh"]) .week-nav,
    :host([ui-style="compact"]) .week-nav { border-bottom: none; padding: 16px 20px 4px; }
    :host([ui-style="fresh"]) .nav-btn,
    :host([ui-style="compact"]) .nav-btn {
      width: 44px; height: 44px; border: 1px solid var(--rm-border); background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([ui-style="compact"]) .nav-btn { border-radius: 14px; border-color: transparent; background: var(--rm-bg-elevated); }
    :host([ui-style="fresh"]) .week-label,
    :host([ui-style="compact"]) .week-label { font-size: 17px; font-weight: 800; letter-spacing: -0.01em; }
    :host([ui-style="fresh"]) .today-badge,
    :host([ui-style="compact"]) .today-badge { background: var(--rm-accent-soft); color: var(--rm-accent-text); font-weight: 700; padding: 4px 10px; border-radius: 999px; }
    :host([ui-style="fresh"]) .text-link,
    :host([ui-style="compact"]) .text-link { color: var(--rm-accent-text); font-weight: 700; min-height: 32px; }
    :host([ui-style="fresh"]) .day-headers,
    :host([ui-style="compact"]) .day-headers { padding: 10px 16px 6px; gap: 3px; }
    :host([ui-style="fresh"]) .day-name,
    :host([ui-style="compact"]) .day-name { font-weight: 700; }
    :host([ui-style="fresh"]) .day-num,
    :host([ui-style="compact"]) .day-num { font-size: 15px; font-weight: 800; }
    :host([ui-style="fresh"]) .day-header.today .day-num,
    :host([ui-style="compact"]) .day-header.today .day-num { width: 28px; height: 28px; font-size: 13px; }
    :host([ui-style="fresh"]) .plan-scroll,
    :host([ui-style="compact"]) .plan-scroll { padding: 4px 16px 24px; }
    :host([ui-style="fresh"]) .meal-label,
    :host([ui-style="compact"]) .meal-label { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; padding: 12px 4px 6px; }
    :host([ui-style="fresh"]) .meal-cell,
    :host([ui-style="compact"]) .meal-cell {
      border-radius: 12px; padding: 4px; background: var(--rm-bg-surface); border: 1px solid var(--rm-border);
    }
    :host([ui-style="compact"]) .meal-cell { border-color: transparent; }
    :host([ui-style="fresh"]) .meal-cell.today,
    :host([ui-style="compact"]) .meal-cell.today { border-color: var(--rm-accent); }
    :host([ui-style="fresh"]) .meal-entry,
    :host([ui-style="compact"]) .meal-entry { background: var(--rm-accent-soft); color: var(--rm-accent-text); border-radius: 8px; font-weight: 600; }
    :host([ui-style="fresh"]) .entry-servings,
    :host([ui-style="compact"]) .entry-servings { color: var(--rm-accent-text); opacity: 0.8; }
    :host([ui-style="fresh"]) .add-slot-btn,
    :host([ui-style="compact"]) .add-slot-btn { border-radius: 8px; height: 22px; }
    :host([ui-style="fresh"]) .picker-panel,
    :host([ui-style="compact"]) .picker-panel { border-radius: 28px 28px 0 0; background: var(--rm-bg-main); box-shadow: 0 -10px 40px rgba(0,0,0,0.22); }
    :host([ui-style="fresh"]) .picker-header,
    :host([ui-style="compact"]) .picker-header { border-bottom: none; padding: 18px 20px 8px; font-size: 20px; font-weight: 800; letter-spacing: -0.01em; }
    :host([ui-style="fresh"]) .picker-item,
    :host([ui-style="compact"]) .picker-item { padding: 10px 20px; border-bottom-color: var(--rm-line); }
    :host([ui-style="fresh"]) .picker-thumb,
    :host([ui-style="compact"]) .picker-thumb { border-radius: 14px; }
    :host([ui-style="fresh"]) .picker-search-wrap,
    :host([ui-style="compact"]) .picker-search-wrap { margin: 4px 16px 8px; padding: 0 14px; min-height: 44px; border: 1px solid var(--rm-border); border-radius: 999px; background: var(--rm-bg-surface); }
    :host([ui-style="fresh"]) .scaler-btn,
    :host([ui-style="compact"]) .scaler-btn { width: 36px; height: 36px; }

    /* ── Day view (Fresh + Compact) ── */
    [hidden] { display: none !important; }
    .day-chips { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 6px; padding: 14px 16px 0; flex-shrink: 0; }
    .day-chip {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      min-height: 64px; padding: 8px 0; border-radius: 18px; cursor: pointer;
      border: 1px solid var(--rm-border); background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([ui-style="compact"]) .day-chip { border-radius: 14px; border-color: transparent; }
    .dc-name { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--rm-text-secondary); }
    .dc-num { font-size: 17px; font-weight: 800; font-variant-numeric: tabular-nums; }
    .dc-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--rm-accent); margin-top: 2px; }
    .dc-dot.empty { background: transparent; }
    .day-chip[aria-current="date"] .dc-num { color: var(--rm-accent-text); }
    .day-chip[aria-pressed="true"] { background: var(--rm-text); border-color: var(--rm-text); color: var(--rm-bg-main); }
    .day-chip[aria-pressed="true"] .dc-name { color: var(--rm-bg-main); opacity: 0.8; }
    .day-chip[aria-pressed="true"] .dc-num { color: var(--rm-bg-main); }
    .day-chip[aria-pressed="true"] .dc-dot { background: var(--rm-bg-main); }
    .day-chip:focus-visible, .slot-btn:focus-visible, .slot-open:focus-visible { outline: 2px solid var(--rm-accent); outline-offset: 2px; }

    .day-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 0 0 24px; scrollbar-width: thin; scrollbar-color: var(--rm-border) transparent; }
    .day-groups { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0 20px; }
    @container (min-width: 680px) { .day-groups { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    .planner-container { container-type: inline-size; }
    .day-title {
      display: flex; align-items: center; gap: 8px; padding: 18px 24px 8px;
      font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rm-text-secondary);
    }
    .dt-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--rm-accent); flex: none; }
    .dt-dot.alt { background: var(--rm-warn); }
    .day-card { margin: 0 16px; padding: 2px 14px; border-radius: var(--rm-radius-card); border: 1px solid var(--rm-border); background: var(--rm-bg-surface); }
    :host([ui-style="compact"]) .day-card { border-color: transparent; padding: 0 14px; }
    .slot { display: flex; align-items: center; gap: 12px; min-height: 72px; padding: 10px 0; border-bottom: 1px solid var(--rm-line); }
    .slot:last-child { border-bottom: none; }
    .slot-tile, .slot-thumb {
      flex: none; width: 44px; height: 44px; border-radius: 14px; overflow: hidden;
      display: flex; align-items: center; justify-content: center;
      background: var(--rm-accent-soft); color: var(--rm-accent-text);
    }
    .slot-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .slot-tile ha-icon, .slot-thumb ha-icon { --mdc-icon-size: 22px; }
    .slot-open { flex: 1; min-width: 0; display: flex; align-items: center; gap: 12px; padding: 0; border: none; background: transparent; text-align: left; cursor: pointer; color: var(--rm-text); font: inherit; }
    .slot-mid { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .slot-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rm-text-secondary); min-height: 1em; }
    .slot-name { font-size: 15px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--rm-text); }
    .slot-name.muted { font-weight: 500; color: var(--rm-text-secondary); }
    .slot-sub { font-size: 12.5px; font-weight: 500; color: var(--rm-text-secondary); }
    .slot-btn {
      flex: none; width: 44px; height: 44px; padding: 0; border: none; background: transparent; cursor: pointer;
      color: var(--rm-text-secondary); display: flex; align-items: center; justify-content: center;
    }
    .slot-btn:hover { color: var(--rm-text); }
    .slot-btn ha-icon { --mdc-icon-size: 20px; }
    .slot-btn.add span { width: 36px; height: 36px; border-radius: 50%; background: var(--rm-accent-soft); color: var(--rm-accent-text); display: flex; align-items: center; justify-content: center; }
    .slot-btn.add ha-icon { --mdc-icon-size: 18px; }
  `}try{customElements.define("rm-meal-planner",ee)}catch{}const te="2026.11.1-beta.1",ie=[["en","English"],["es","Español"],["fr","Français"],["de","Deutsch"],["pt","Português"],["nl","Nederlands"],["it","Italiano"]];class re extends t{static properties={uiStyle:{type:String,attribute:"ui-style",reflect:!0},hass:{type:Object},settings:{type:Object},_activeTab:{type:String},_rmVersion:{type:String},_rmcVersion:{type:String},_backupState:{type:String}};constructor(){super(),this.settings={},this._activeTab="appearance",this._rmVersion="…",this._rmcVersion="…",this._backupState=null}updated(e){e.has("hass")&&this.hass&&"…"===this._rmVersion&&this._fetchVersionsFromHacs()}async _backup(){if("loading"!==this._backupState){this._backupState="loading";try{const e=await this.hass.callWS({type:"recipe_manager/backup"}),t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download=`recipe-manager-backup-${(new Date).toISOString().slice(0,10)}.json`,a.click(),URL.revokeObjectURL(r),this._backupState="done"}catch(e){console.error("[RM] Backup failed:",e),this._backupState="error"}setTimeout(()=>{this._backupState=null},3e3)}}_fetchVersionsFromHacs(){this.hass&&(this._rmVersion="…",this._rmcVersion="…",this.hass.callWS({type:"hacs/repositories/list"}).then(e=>{const t=e.find(e=>"thekiwismarthome/recipe-manager"===e.full_name.toLowerCase()),i=e.find(e=>"thekiwismarthome/recipe-manager-card"===e.full_name.toLowerCase());this._rmVersion=t?.installed_version??"—",this._rmcVersion=i?.installed_version??te}).catch(()=>{this._rmVersion="—",this._rmcVersion=te}))}_update(e){const t={...this.settings,...e};this.dispatchEvent(new CustomEvent("rm-settings-change",{detail:{settings:t},bubbles:!0,composed:!0}))}render(){const e=this.settings;return a`
      <div class="settings-root">
        <div class="tab-bar">
          ${[["appearance","mdi:palette-outline",i("Appearance")],["advanced","mdi:tune-variant",i("Advanced")],["sync","mdi:cloud-sync-outline",i("Sync")],["help","mdi:help-circle-outline",i("Help")]].map(([e,t,i])=>a`
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
          ${"sync"===this._activeTab?this._renderSync():""}
          ${"help"===this._activeTab?this._renderHelp():""}
        </div>
      </div>
    `}_renderAppearance(e){const t="midnight"===e.theme||"ember"===e.theme||"neon"===e.theme,r="arctic"===e.theme||"meadow"===e.theme||"ocean"===e.theme,s=t||r;return a`
      <!-- ── Language & Units ── -->
      <div class="section">
        <div class="section-label">${i("Language & Units")}</div>

        <div class="setting-row">
          <span class="setting-name">${i("Language")}</span>
          <select class="theme-select" @change=${e=>this._update({language:e.target.value})}>
            ${ie.map(([t,i])=>a`
              <option value="${t}" ?selected=${(e.language??"en")===t}>${i}</option>
            `)}
          </select>
        </div>

        <div class="setting-row">
          <span class="setting-name">${i("Preferred units")}</span>
          <div class="btn-group">
            ${[["imperial",i("Imperial")],["metric",i("Metric")]].map(([t,i])=>a`
              <button class="seg-btn ${(e.unitSystem??"imperial")===t?"active":""}"
                @click=${()=>this._update({unitSystem:t})}>${i}</button>
            `)}
          </div>
        </div>
      </div>

      <!-- ── Theme ── -->
      <div class="section">
        <div class="section-label">${i("Theme")}</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Interface style")}</span>
          </div>
          <div class="btn-group">
            ${[["fresh",i("Fresh")],["compact",i("Compact")],["classic",i("Classic")]].map(([t,i])=>a`
              <button class="seg-btn ${(e.uiStyle??"fresh")===t?"active":""}"
                @click=${()=>this._update({uiStyle:t})}>${i}</button>
            `)}
          </div>
        </div>

        ${"classic"===(e.uiStyle??"fresh")?a`
        <div class="setting-row">
          <span class="setting-name">${i("Colour theme")}</span>
          <select class="theme-select" @change=${e=>this._update({theme:e.target.value})}>
            <optgroup label="${i("Adaptive")}">
              <option value="soft"     ?selected=${"soft"===e.theme||!e.theme}>${i("🎨 Soft Pastel")}</option>
              <option value="blossom"  ?selected=${"blossom"===e.theme}>${i("🌸 Blossom")}</option>
            </optgroup>
            <optgroup label="${i("Light Themes")}">
              <option value="arctic"   ?selected=${"arctic"===e.theme}>${i("🧊 Arctic")}</option>
              <option value="meadow"   ?selected=${"meadow"===e.theme}>${i("🌿 Meadow")}</option>
              <option value="ocean"    ?selected=${"ocean"===e.theme}>${i("🌊 Ocean Blue")}</option>
            </optgroup>
            <optgroup label="${i("Dark Themes")}">
              <option value="midnight" ?selected=${"midnight"===e.theme}>${i("🌙 Midnight Ocean")}</option>
              <option value="ember"    ?selected=${"ember"===e.theme}>${i("🔥 Ember")}</option>
              <option value="neon"     ?selected=${"neon"===e.theme}>${i("🍇 Purple & Cyan")}</option>
            </optgroup>
          </select>
        </div>
        `:""}

        ${s&&"classic"===(e.uiStyle??"fresh")?a`
          <div class="setting-row muted-row">
            <span class="setting-name">${i("Dark mode")}</span>
            <span class="muted-note">${i(t?"Always dark for this theme":"Always light for this theme")}</span>
          </div>
        `:a`
          <div class="setting-row">
            <span class="setting-name">${i("Dark mode")}</span>
            <div class="btn-group">
              ${[["off",i("Light")],["system",i("Auto")],["on",i("Dark")]].map(([t,i])=>a`
                <button class="seg-btn ${e.darkMode===t?"active":""}"
                  @click=${()=>this._update({darkMode:t})}>${i}</button>
              `)}
            </div>
          </div>
        `}

        <div class="setting-row">
          <span class="setting-name">${i("Text size")}</span>
          <div class="btn-group">
            ${[["small",i("S")],["medium",i("M")],["large",i("L")]].map(([t,i])=>a`
              <button class="seg-btn ${e.fontSize===t?"active":""}"
                @click=${()=>this._update({fontSize:t})}>${i}</button>
            `)}
          </div>
        </div>
      </div>

      <!-- ── Recipe Grid ── -->
      <div class="section">
        <div class="section-label">${i("Recipe Grid")}</div>

        <div class="setting-row">
          <span class="setting-name">${i("Recipe columns")}</span>
          <div class="btn-group">
            ${[2,3,4,5,8,10].map(t=>a`
              <button class="seg-btn ${e.columns===t?"active":""}"
                @click=${()=>this._update({columns:t})}>${t}</button>
            `)}
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-name">${i("Favourites section")}</span>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.showFavourites}
              @change=${e=>this._update({showFavourites:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Recent recipes count")}</span>
            <span class="setting-hint">${i("Recipes shown in the Recent filter tab")}</span>
          </div>
          <div class="btn-group">
            ${[6,12,24].map(t=>a`
              <button class="seg-btn ${(e.recentCount??12)===t?"active":""}"
                @click=${()=>this._update({recentCount:t})}>${t}</button>
            `)}
          </div>
        </div>
      </div>

      <!-- ── Navigation ── -->
      <div class="section">
        <div class="section-label">${i("Navigation")}</div>

        <div class="setting-row">
          <span class="setting-name">${i("Meal planner")}</span>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.showPlanner}
              @change=${e=>this._update({showPlanner:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>
      </div>
    `}_renderAdvanced(e){return a`
      <!-- ── Timer Sound ── -->
      <div class="section">
        <div class="section-label">${i("Timer Sound")}</div>

        <div class="setting-row">
          <span class="setting-name">${i("Alarm sound")}</span>
          <select class="theme-select" @change=${e=>this._update({timerSound:e.target.value})}>
            <option value="beep"  ?selected=${"beep"===(e.timerSound??"beep")}>${i("Beep")}</option>
            <option value="ding"  ?selected=${"ding"===e.timerSound}>${i("Ding")}</option>
            <option value="alarm" ?selected=${"alarm"===e.timerSound}>${i("Alarm (3 beeps)")}</option>
            <option value="none"  ?selected=${"none"===e.timerSound}>${i("Silent")}</option>
            <option value="file"  ?selected=${"file"===e.timerSound}>${i("Custom file…")}</option>
          </select>
        </div>

        ${"file"===e.timerSound?a`
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">${i("Sound file")}</span>
              <span class="setting-hint">${e.timerSoundFileName||i("No file selected")}</span>
            </div>
            <label class="file-label">
              <input type="file" accept="audio/*" class="file-input"
                @change=${this._handleSoundFileChange} />
              <ha-icon icon="mdi:folder-music-outline"></ha-icon>
              ${e.timerSoundFile?i("Change"):i("Choose file")}
            </label>
          </div>
        `:""}

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Test sound")}</span>
            <span class="setting-hint">${i("Play a preview of the selected alarm")}</span>
          </div>
          <button class="seg-btn active" @click=${()=>this._testSound(e.timerSound??"beep",e.timerSoundFile)}>
            <ha-icon icon="mdi:volume-high"></ha-icon> ${i("Play")}
          </button>
        </div>
      </div>

      <!-- ── Keep Screen On ── -->
      <div class="section">
        <div class="section-label">${i("Keep Screen On")}</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Keep screen on while viewing a recipe")}</span>
            <span class="setting-hint">${i("Uses the Wake Lock API — engages automatically while a recipe is open")}</span>
          </div>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.keepScreenOn}
              @change=${e=>this._update({keepScreenOn:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>

        ${e.keepScreenOn&&!y()?a`
          <div class="setting-row muted-row">
            <span class="setting-hint">${i('Not available in this browser/connection — the Wake Lock API requires a secure (HTTPS) connection to Home Assistant. This is the most common reason "keep screen on" doesn\'t work.')}</span>
          </div>
        `:""}

        ${e.keepScreenOn?a`
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">${i("Auto-release after")}</span>
              <span class="setting-hint">${i("Screen lock released after this many minutes")}</span>
            </div>
            <div class="btn-group">
              ${[15,30,45,60].map(t=>a`
                <button class="seg-btn ${(e.wakeLockDuration??60)===t?"active":""}"
                  @click=${()=>this._update({wakeLockDuration:t})}>${t}m</button>
              `)}
            </div>
          </div>
        `:""}
      </div>

      <!-- ── Unit Conversion ── -->
      <div class="section">
        <div class="section-label">${i("Unit Conversion")}</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Show metric conversion button")}</span>
            <span class="setting-hint">${i("Button in Ingredients tab converts oz/lb/cups/fl oz → g/ml/kg")}</span>
          </div>
          <label class="toggle">
            <input type="checkbox" ?checked=${e.showUnitConversion}
              @change=${e=>this._update({showUnitConversion:e.target.checked})} />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </label>
        </div>
      </div>

      <!-- ── Image Slideshow ── -->
      <div class="section">
        <div class="section-label">${i("Image Slideshow")}</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Auto-advance interval")}</span>
            <span class="setting-hint">${i("Seconds between slides when a recipe has multiple images (0 = off)")}</span>
          </div>
          <div class="btn-group">
            ${[0,3,5,10,15].map(t=>a`
              <button class="seg-btn ${(e.slideshowInterval??5)===t?"active":""}"
                @click=${()=>this._update({slideshowInterval:t})}>${0===t?i("Off"):`${t}s`}</button>
            `)}
          </div>
        </div>
      </div>

    `}_handleSoundFileChange(e){const t=e.target.files?.[0];if(!t)return;const i=new FileReader;i.onload=e=>{this._update({timerSoundFile:e.target.result,timerSoundFileName:t.name})},i.readAsDataURL(t)}_testSound(e,t){if("file"!==e)try{const t=new(window.AudioContext||window.webkitAudioContext);if("ding"===e){const e=t.createOscillator(),i=t.createGain();e.connect(i),i.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(1046,t.currentTime),i.gain.setValueAtTime(.6,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+1),e.start(t.currentTime),e.stop(t.currentTime+1)}else if("alarm"===e)for(let e=0;e<3;e++){const i=t.currentTime+.35*e,r=t.createOscillator(),a=t.createGain();r.connect(a),a.connect(t.destination),r.type="square",r.frequency.setValueAtTime(660,i),a.gain.setValueAtTime(.3,i),a.gain.exponentialRampToValueAtTime(.001,i+.2),r.start(i),r.stop(i+.2)}else if("none"!==e){const e=t.createOscillator(),i=t.createGain();e.connect(i),i.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(880,t.currentTime),i.gain.setValueAtTime(.5,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.5),e.start(t.currentTime),e.stop(t.currentTime+.5)}}catch(e){console.warn("Audio test failed:",e)}else if(t){new Audio(t).play().catch(e=>console.warn("Could not play file:",e))}}_renderSync(){const e="loading"===this._backupState?i("Backing up…"):"done"===this._backupState?i("Downloaded ✓"):"error"===this._backupState?i("Failed ✗"):i("Download backup");return a`
      <div class="section">
        <div class="section-label">${i("Backup")}</div>

        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-name">${i("Export recipes")}</span>
            <span class="setting-hint">${i("Download all recipes and meal plans as a JSON file")}</span>
          </div>
          <button
            class="seg-btn backup-btn ${this._backupState||""}"
            ?disabled=${"loading"===this._backupState}
            @click=${()=>this._backup()}
          >${e}</button>
        </div>
      </div>
    `}_renderHelp(){return a`
      <div class="section">
        <div class="section-label">${i("FAQ & Support")}</div>

        <a class="help-link" href="https://github.com/thekiwismarthome/recipe-manager/wiki" target="_blank">
          <ha-icon icon="mdi:help-circle-outline"></ha-icon>
          <div class="help-link-content">
            <span class="setting-name">${i("FAQ")}</span>
            <span class="setting-hint">${i("Frequently asked questions")}</span>
          </div>
          <ha-icon icon="mdi:open-in-new" class="help-link-ext"></ha-icon>
        </a>

        <a class="help-link" href="https://github.com/thekiwismarthome/recipe-manager/issues" target="_blank">
          <ha-icon icon="mdi:bug-outline"></ha-icon>
          <div class="help-link-content">
            <span class="setting-name">${i("Report a Problem")}</span>
            <span class="setting-hint">${i("Submit an issue on GitHub")}</span>
          </div>
          <ha-icon icon="mdi:open-in-new" class="help-link-ext"></ha-icon>
        </a>

        <a class="help-link" href="https://github.com/thekiwismarthome/recipe-manager" target="_blank">
          <ha-icon icon="mdi:github"></ha-icon>
          <div class="help-link-content">
            <span class="setting-name">${i("GitHub Repository")}</span>
            <span class="setting-hint">${i("View source code")}</span>
          </div>
          <ha-icon icon="mdi:open-in-new" class="help-link-ext"></ha-icon>
        </a>
      </div>

      <div class="section">
        <div class="section-label">${i("About")}</div>

        <div class="setting-row">
          <span class="setting-name">${i("Recipe Manager")}</span>
          <span class="muted-note">${i(r`Integration version ${this._rmVersion}`)}</span>
        </div>

        <div class="setting-row">
          <span class="setting-name">${i("RM Card")}</span>
          <span class="muted-note">${i(r`Card version ${this._rmcVersion}`)}</span>
        </div>

        <div class="setting-row">
          <span class="setting-name">${i("Refresh versions")}</span>
          <button class="seg-btn" @click=${()=>this._fetchVersionsFromHacs()}>
            <ha-icon icon="mdi:refresh"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderPlaceholder(e,t,i){return a`
      <div class="placeholder-tab">
        <ha-icon icon="${t}"></ha-icon>
        <div class="placeholder-title">${e}</div>
        <div class="placeholder-msg">${i}</div>
      </div>
    `}static styles=s`
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

    .backup-btn { min-width: 140px; white-space: nowrap; }
    .backup-btn.done    { background: var(--rm-success, #4caf50); color: #fff; }
    .backup-btn.error   { background: var(--rm-danger,  #e53935); color: #fff; }
    .backup-btn.loading { opacity: 0.7; cursor: wait; }

    .help-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--rm-border, rgba(0,0,0,0.06));
      text-decoration: none;
      color: inherit;
    }
    .help-link:last-of-type { border-bottom: none; }
    .help-link ha-icon { color: var(--rm-accent, #a0522d); flex-shrink: 0; }
    .help-link-content { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .help-link-ext { --mdc-icon-size: 16px; opacity: 0.4; }

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
    .seg-btn.active { background: var(--rm-accent); color: var(--rm-ink, #fff); }
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

    /* ═══ Fresh + Compact ═══ */
    :host([ui-style="fresh"]) .tab-bar,
    :host([ui-style="compact"]) .tab-bar { background: transparent; border-bottom: none; gap: 8px; padding: 16px 16px 4px; }
    :host([ui-style="fresh"]) .tab-item,
    :host([ui-style="compact"]) .tab-item {
      min-height: 40px; padding: 0 16px; border: 1px solid var(--rm-border); border-radius: 999px;
      background: var(--rm-bg-surface); color: var(--rm-text); font-weight: 600; font-size: 14px;
    }
    :host([ui-style="compact"]) .tab-item { border-radius: 12px; border-color: transparent; }
    :host([ui-style="fresh"]) .tab-item.active,
    :host([ui-style="compact"]) .tab-item.active { background: var(--rm-text); border-color: var(--rm-text); color: var(--rm-bg-main); font-weight: 700; }
    :host([ui-style="fresh"]) .settings-body,
    :host([ui-style="compact"]) .settings-body { padding-bottom: 32px; }
    :host([ui-style="fresh"]) .section-label,
    :host([ui-style="compact"]) .section-label {
      padding: 18px 24px 8px; font-size: 12px; letter-spacing: 0.06em; color: var(--rm-text-secondary);
    }
    /* Rows in a section read as one rounded card */
    :host([ui-style="fresh"]) .setting-row,
    :host([ui-style="compact"]) .setting-row {
      margin: 0 16px; padding: 12px 16px; min-height: 60px;
      background: var(--rm-bg-surface);
      border: 1px solid var(--rm-border); border-top: none; border-bottom-color: var(--rm-line);
    }
    :host([ui-style="compact"]) .setting-row { border-color: transparent; border-bottom-color: var(--rm-line); }
    :host([ui-style="fresh"]) .section-label + .setting-row,
    :host([ui-style="compact"]) .section-label + .setting-row { border-top: 1px solid var(--rm-border); border-radius: var(--rm-radius-card) var(--rm-radius-card) 0 0; }
    :host([ui-style="compact"]) .section-label + .setting-row { border-top-color: transparent; }
    :host([ui-style="fresh"]) .setting-row:last-child,
    :host([ui-style="compact"]) .setting-row:last-child { border-bottom-color: var(--rm-border); border-radius: 0 0 var(--rm-radius-card) var(--rm-radius-card); }
    :host([ui-style="compact"]) .setting-row:last-child { border-bottom-color: transparent; }
    :host([ui-style="fresh"]) .section-label + .setting-row:last-child,
    :host([ui-style="compact"]) .section-label + .setting-row:last-child { border-radius: var(--rm-radius-card); }
    :host([ui-style="fresh"]) .setting-name,
    :host([ui-style="compact"]) .setting-name { font-weight: 700; }
    :host([ui-style="fresh"]) .btn-group,
    :host([ui-style="compact"]) .btn-group { border-radius: 14px; padding: 3px; gap: 2px; background: var(--rm-bg-main); }
    :host([ui-style="fresh"]) .seg-btn,
    :host([ui-style="compact"]) .seg-btn { min-height: 38px; padding: 0 14px; border-right: none; border-radius: 11px; font-weight: 600; color: var(--rm-text-secondary); }
    :host([ui-style="fresh"]) .seg-btn.active,
    :host([ui-style="compact"]) .seg-btn.active { background: var(--rm-accent); color: var(--rm-ink); font-weight: 700; }
    :host([ui-style="fresh"]) .theme-select,
    :host([ui-style="compact"]) .theme-select { border-radius: 12px; min-height: 44px; padding: 0 12px; }
    :host([ui-style="fresh"]) .toggle-track,
    :host([ui-style="compact"]) .toggle-track { width: 48px; height: 28px; border-radius: 99px; background: var(--rm-bg-elevated); box-shadow: inset 0 0 0 1px var(--rm-border); }
    :host([ui-style="fresh"]) .toggle-thumb,
    :host([ui-style="compact"]) .toggle-thumb { top: 3px; left: 3px; width: 22px; height: 22px; background: var(--rm-text-secondary); box-shadow: none; }
    :host([ui-style="fresh"]) .toggle input:checked + .toggle-track,
    :host([ui-style="compact"]) .toggle input:checked + .toggle-track { background: var(--rm-accent); box-shadow: none; }
    :host([ui-style="fresh"]) .toggle input:checked ~ .toggle-track .toggle-thumb,
    :host([ui-style="compact"]) .toggle input:checked ~ .toggle-track .toggle-thumb { transform: translateX(20px); background: var(--rm-ink); }
    :host([ui-style="fresh"]) .file-label,
    :host([ui-style="compact"]) .file-label { border-radius: 999px; min-height: 40px; padding: 0 16px; }
    :host([ui-style="fresh"]) .setting-row,
    :host([ui-style="compact"]) .setting-row { flex-wrap: wrap; }
    :host([ui-style="fresh"]) .btn-group,
    :host([ui-style="compact"]) .btn-group { max-width: 100%; overflow-x: auto; scrollbar-width: none; }
  `}try{customElements.define("rm-settings-view",re)}catch{}const ae={"--slm-bg-main":"--rm-bg-main","--slm-bg-surface":"--rm-bg-surface","--slm-bg-elevated":"--rm-bg-elevated","--slm-tile-bg":"--rm-bg-surface","--slm-text-primary":"--rm-text","--slm-text-secondary":"--rm-text-secondary","--slm-text-muted":"--rm-text-secondary","--slm-border-subtle":"--rm-border","--slm-line-soft":"--rm-line","--slm-accent-primary":"--rm-accent","--slm-accent-ink":"--rm-ink","--slm-accent-soft":"--rm-accent-soft","--slm-accent-text":"--rm-accent-text","--slm-accent-warning":"--rm-warn","--slm-accent-danger":"--rm-danger"},se=Object.keys(ae);class ne extends t{static properties={uiStyle:{type:String,attribute:"ui-style",reflect:!0},hass:{type:Object},slmAvailable:{type:Boolean},shoppingLists:{type:Array},api:{type:Object},localItems:{type:Array},settings:{type:Object}};constructor(){super(),this.hass=null,this.slmAvailable=!1,this.shoppingLists=[],this.api=null,this.localItems=[],this.settings=null,this._slmCard=null,this._slmRetryTimeout=null}disconnectedCallback(){super.disconnectedCallback(),this._slmRetryTimeout&&(clearTimeout(this._slmRetryTimeout),this._slmRetryTimeout=null)}get _useSLM(){return this.slmAvailable||!!customElements.get("shopping-list-manager-card")}updated(e){this._useSLM&&(this._slmCard?(e.has("hass")&&this.hass&&(this._slmCard.hass=this.hass),(e.has("settings")||e.has("uiStyle"))&&this.settings&&this._slmCard&&this._syncSlmTheme()):this._mountSlmCard())}_syncSlmTheme(){if(!this._slmCard||!this.settings)return;const{theme:e,darkMode:t}=this.settings;this._slmCard.settings={...this._slmCard.settings,theme:e,darkMode:t},this._slmCard.applyColorScheme?.(),this._syncSlmPalette()}_syncSlmPalette(){const e=this._slmCard;if(!e)return;const t=R(this.settings?.uiStyle),i=this.settings?.darkMode,r="on"===i||"off"!==i&&(window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1),a=["--ha-card-border-radius","--ha-card-box-shadow","--ha-card-border-width"];if("hostUi"in e){for(const t of se)e.style.removeProperty(t);return e.hostUi="classic"===t?void 0:t,e.hostDark=r,e.applyColorScheme?.(),void("classic"===t?a.forEach(t=>e.style.removeProperty(t)):(e.style.setProperty("--ha-card-border-radius","0"),e.style.setProperty("--ha-card-box-shadow","none"),e.style.setProperty("--ha-card-border-width","0")))}const s=ae;if("classic"===t){for(const t of[...Object.keys(s),"--ha-card-border-radius"])e.style.removeProperty(t);return}const n=E(t,r);for(const[t,i]of Object.entries(s))e.style.setProperty(t,n[i]);e.style.setProperty("--ha-card-border-radius",n["--rm-radius-card"])}_mountSlmCard(){const e=this.shadowRoot?.querySelector(".slm-host");if(!e)return;const t=customElements.get("shopping-list-manager-card");if(!t)return void(this._slmRetryTimeout||(this._slmRetryTimeout=setTimeout(()=>{this._slmRetryTimeout=null,this.isConnected&&this._mountSlmCard()},500)));const i=new t;try{i.setConfig({})}catch(e){}i.style.cssText="display:block;width:100%;height:100%;max-height:100%;min-height:0;",i.isEmbedded=!0,e.appendChild(i),this.hass&&(i.hass=this.hass),this._slmCard=i,setTimeout(()=>this._syncSlmTheme(),0)}_toggleLocalItem(e){const t=this.localItems.map(t=>t.id===e?{...t,checked:!t.checked}:t);this._dispatchLocalUpdate(t)}_clearLocalChecked(){this._dispatchLocalUpdate(this.localItems.filter(e=>!e.checked))}_clearAllLocal(){this._dispatchLocalUpdate([])}_dispatchLocalUpdate(e){this.dispatchEvent(new CustomEvent("rm-shopping-local-update",{detail:{items:e},bubbles:!0,composed:!0}))}render(){return a`
      <div class="shopping-view">
        ${this._useSLM?this._renderSlmMode():this._renderLocalMode()}
      </div>
    `}_renderSlmMode(){return a`
      <div class="slm-card-wrap">
        <div class="slm-host"></div>
      </div>
    `}_renderLocalMode(){const e=this.localItems.some(e=>e.checked),t=this.localItems.filter(e=>!e.checked),r=this.localItems.filter(e=>e.checked);return a`
      <div class="sv-header">
        <span class="sv-list-name">${i("My Shopping List")}</span>
        <div class="sv-actions">
          ${e?a`
            <button class="sv-btn danger" @click=${this._clearLocalChecked}>
              <ha-icon icon="mdi:delete-sweep-outline"></ha-icon>
              <span>${i("Clear checked")}</span>
            </button>
          `:""}
          ${this.localItems.length?a`
            <button class="sv-btn" @click=${this._clearAllLocal} title=${i("Clear all")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
            </button>
          `:""}
        </div>
      </div>

      <div class="sv-install-banner">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <div class="sv-install-text">
          <strong>${i("Get more features with Shopping List Manager")}</strong>
          <span>${i("Install the Shopping List Manager HACS integration for shared lists, categories, and sync.")}</span>
        </div>
      </div>

      ${0===this.localItems.length?a`
        <div class="sv-empty">
          <ha-icon icon="mdi:cart-outline"></ha-icon>
          <p>${i("Your shopping list is empty.")}</p>
          <p class="sv-hint">${i("Add ingredients from any recipe to get started.")}</p>
        </div>
      `:a`
        <div class="sv-items">
          ${t.map(e=>this._renderLocalRow(e))}
          ${r.length?a`
            <div class="sv-divider-label">${i("Checked")}</div>
            ${r.map(e=>this._renderLocalRow(e))}
          `:""}
        </div>
      `}
    `}_renderLocalRow(e){const t=[e.amount||"",e.unit||""].filter(Boolean).join(" ");return a`
      <div class="sv-row ${e.checked?"sv-row-checked":""}"
        @click=${()=>this._toggleLocalItem(e.id)}>
        <div class="sv-row-left">
          <div class="cat-dot"></div>
          <span class="row-emoji">📦</span>
        </div>
        <div class="sv-row-mid">
          <span class="sv-item-name">${e.name}</span>
          ${t?a`<span class="sv-item-unit">${t}</span>`:""}
        </div>
        <div class="sv-row-right">
          <div class="sv-checkbox ${e.checked?"checked":""}">
            ${e.checked?a`<ha-icon icon="mdi:check"></ha-icon>`:""}
          </div>
        </div>
      </div>
    `}static styles=s`
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

    /* ═══ Fresh + Compact ═══ */
    :host([ui-style="fresh"]) .slm-card-wrap,
    :host([ui-style="compact"]) .slm-card-wrap { padding: 0; }
    :host([ui-style="fresh"]) .sv-header,
    :host([ui-style="compact"]) .sv-header { border-bottom: none; padding: 20px 20px 8px; }
    :host([ui-style="fresh"]) .sv-list-name,
    :host([ui-style="compact"]) .sv-list-name { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; color: var(--rm-text); }
    :host([ui-style="fresh"]) .sv-btn,
    :host([ui-style="compact"]) .sv-btn { min-height: 44px; border-radius: 999px; }
    :host([ui-style="compact"]) .sv-btn { border-radius: 12px; }
    :host([ui-style="fresh"]) .sv-install-banner,
    :host([ui-style="compact"]) .sv-install-banner { margin: 8px 20px; border: none; border-radius: var(--rm-radius-card); background: var(--rm-accent-soft); color: var(--rm-accent-text); }
    :host([ui-style="fresh"]) .sv-items,
    :host([ui-style="compact"]) .sv-items { margin: 8px 20px 24px; padding: 2px 14px; background: var(--rm-bg-surface); border: 1px solid var(--rm-border); border-radius: var(--rm-radius-card); overflow: hidden; }
    :host([ui-style="compact"]) .sv-items { border-color: transparent; }
    :host([ui-style="fresh"]) .sv-checkbox.checked,
    :host([ui-style="compact"]) .sv-checkbox.checked { background: var(--rm-accent); border-color: var(--rm-accent); color: var(--rm-ink); }
  `}try{customElements.define("rm-shopping-view",ne)}catch{}const oe="manual-toggle",ce="rm_settings",le="rm_shopping",de="rm_recent_recipes",pe="rm_timers",he="rm_timer_presets",ue="rm_view_state",me=["grid","detail","settings","planner","shopping"];function ge(e){try{localStorage.setItem(he,JSON.stringify(e))}catch{}}const fe={uiStyle:"fresh",theme:"soft",darkMode:"system",fontSize:"medium",columns:3,showFavourites:!0,showPlanner:!0,recentCount:12,timerSound:"beep",keepScreenOn:!1,keepScreenOnMins:30,showUnitConversion:!1,language:"en",unitSystem:"imperial"},be={soft:{light:{"--rm-bg-main":"#fafbfc","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#424242","--rm-text-secondary":"#757575","--rm-text-muted":"#9e9e9e","--rm-accent":"#9fa8da","--rm-accent-soft":"rgba(159,168,218,0.15)","--rm-border":"#e8eaf6","--rm-shadow":"0 2px 6px rgba(0,0,0,0.08)"},dark:{"--rm-bg-main":"#14161a","--rm-bg-surface":"#1b1f25","--rm-bg-elevated":"#232833","--rm-text":"#e4e7ec","--rm-text-secondary":"#a8b0bd","--rm-text-muted":"#7a8594","--rm-accent":"#9fa8da","--rm-accent-soft":"rgba(159,168,218,0.18)","--rm-border":"#2b313c","--rm-shadow":"0 2px 6px rgba(0,0,0,0.3)"}},arctic:{light:{"--rm-bg-main":"#f0f4f8","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#ffffff","--rm-text":"#1a2332","--rm-text-secondary":"#526070","--rm-text-muted":"#8097aa","--rm-accent":"#2979ff","--rm-accent-soft":"rgba(41,121,255,0.12)","--rm-border":"#dce6f0","--rm-shadow":"0 2px 6px rgba(26,35,50,0.1)"}},meadow:{light:{"--rm-bg-main":"#f4f7f0","--rm-bg-surface":"#fefffe","--rm-bg-elevated":"#fefffe","--rm-text":"#2d3a2a","--rm-text-secondary":"#6b7c64","--rm-text-muted":"#96a98e","--rm-accent":"#4caf50","--rm-accent-soft":"rgba(76,175,80,0.12)","--rm-border":"#dde8d8","--rm-shadow":"0 2px 6px rgba(45,58,42,0.1)"}},blossom:{light:{"--rm-bg-main":"#fdf8fb","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#fff8fc","--rm-text":"#3d1f35","--rm-text-secondary":"#8c5e79","--rm-text-muted":"#b48fa5","--rm-accent":"#c2668a","--rm-accent-soft":"rgba(194,102,138,0.12)","--rm-border":"#f0d6e8","--rm-shadow":"0 2px 6px rgba(61,31,53,0.1)"},dark:{"--rm-bg-main":"#1a0d12","--rm-bg-surface":"#241420","--rm-bg-elevated":"#2e1a28","--rm-text":"#f8d0de","--rm-text-secondary":"#c070a0","--rm-text-muted":"#603050","--rm-accent":"#f48fb1","--rm-accent-soft":"rgba(244,143,177,0.15)","--rm-border":"rgba(248,208,222,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.4)"}},ocean:{light:{"--rm-bg-main":"#f0f7ff","--rm-bg-surface":"#ffffff","--rm-bg-elevated":"#f9fbff","--rm-text":"#1a3a5f","--rm-text-secondary":"#4a6b8c","--rm-text-muted":"#7a9bbd","--rm-accent":"#0077ff","--rm-accent-soft":"rgba(0,119,255,0.12)","--rm-border":"#d0e1f2","--rm-shadow":"0 2px 6px rgba(26,58,95,0.1)"}},midnight:{dark:{"--rm-bg-main":"#0d1117","--rm-bg-surface":"#161b22","--rm-bg-elevated":"#1c2333","--rm-text":"#c9d1d9","--rm-text-secondary":"#8b949e","--rm-text-muted":"#6e7681","--rm-accent":"#58a6ff","--rm-accent-soft":"rgba(88,166,255,0.15)","--rm-border":"#21262d","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},ember:{dark:{"--rm-bg-main":"#111111","--rm-bg-surface":"#1c1a17","--rm-bg-elevated":"#242018","--rm-text":"#f5f0e8","--rm-text-secondary":"#a89880","--rm-text-muted":"#7a6a55","--rm-accent":"#f0a500","--rm-accent-soft":"rgba(240,165,0,0.15)","--rm-border":"rgba(245,240,232,0.08)","--rm-shadow":"0 2px 8px rgba(0,0,0,0.5)"}},neon:{dark:{"--rm-bg-main":"#0a0b10","--rm-bg-surface":"#121420","--rm-bg-elevated":"#1a1d2e","--rm-text":"#e0e0f0","--rm-text-secondary":"#a0a5c0","--rm-text-muted":"#6a6f8e","--rm-accent":"#bb86fc","--rm-accent-soft":"rgba(187,134,252,0.15)","--rm-border":"#2a2d45","--rm-shadow":"0 2px 8px rgba(0,0,0,0.6)"}}},ve={small:"13px",medium:"15px",large:"17px"};function xe(e){try{localStorage.setItem(ce,JSON.stringify(e))}catch{}}function _e(e){try{const t=e.filter(e=>!e.global).map(e=>({...e,savedAt:Date.now()}));localStorage.setItem(pe,JSON.stringify(t))}catch{}}function ye(e){const t=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return t>0?`${t}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${i}:${String(r).padStart(2,"0")}`}function we(e){try{const t=new(window.AudioContext||window.webkitAudioContext);t.createGain().connect(t.destination);const i=(e,i,r,a=.6)=>{const s=t.createOscillator(),n=t.createGain();s.connect(n),n.connect(t.destination),s.frequency.value=e,n.gain.setValueAtTime(a,t.currentTime+i),n.gain.exponentialRampToValueAtTime(.001,t.currentTime+i+r),s.start(t.currentTime+i),s.stop(t.currentTime+i+r+.05)};if("beep"===e)i(880,0,.15),i(880,.2,.15),i(880,.4,.15);else if("ding"===e)i(1318,0,.8,.5),i(1047,.1,.6,.3);else if("alarm"===e)for(let e=0;e<5;e++)i(880,.25*e,.12),i(660,.25*e+.13,.1)}catch{}}class ke extends t{static properties={hass:{type:Object},_config:{type:Object},_view:{type:String},_recipes:{type:Array},_tags:{type:Array},_selectedRecipe:{type:Object},_loading:{type:Boolean},_error:{type:String},_searchQuery:{type:String},_activeTag:{type:String},_shoppingLists:{type:Array},_slmAvailable:{type:Boolean},_localShoppingItems:{type:Array},_settings:{type:Object},_wide:{type:Boolean},_sidebarCollapsed:{type:Boolean},_gridScrollPos:{type:Number},_weekPlan:{type:Array},_recentRecipeIds:{type:Array},_timers:{type:Array},_timerAlarm:{type:Object},_timerAlarmQueue:{type:Array},_timersPrevView:{type:String},_customTimerInput:{type:String},_hdrStarHover:{type:Number},_mobileMenuOpen:{type:Boolean},_navDirection:{type:String},_closingDetail:{type:Boolean},_gridFilterPreset:{type:Object},_timerPresets:{type:Array},_presetNameInput:{type:String},_presetMinsInput:{type:String},_alarmAddInput:{type:String},_plannerFromRecipe:{type:Object},_globalMode:{type:Boolean},_quickTimerLabel:{type:String},_globalWakeActive:{type:Boolean}};constructor(){super(),this._pendingViewRestore=function(){try{const e=sessionStorage.getItem(ue);return e?JSON.parse(e):null}catch{return null}}(),this._view="grid",this._recipes=[],this._tags=[],this._selectedRecipe=null,this._loading=!1,this._error=null,this._searchQuery="",this._activeTag=null,this._shoppingLists=[],this._slmAvailable=!1,this._localShoppingItems=[],this._settings=function(){try{const e=localStorage.getItem(ce);return e?{...fe,...JSON.parse(e)}:{...fe}}catch{return{...fe}}}(),this._languageAutoDetectPending=!function(){try{const e=localStorage.getItem(ce);return!(!e||!Object.prototype.hasOwnProperty.call(JSON.parse(e),"language"))}catch{return!1}}(),b(this._settings.language),this._wide=!1,this._sidebarCollapsed=!1,this._weekPlan=[],this._gridScrollPos=0,this._recentRecipeIds=function(){try{const e=localStorage.getItem(de);return e?JSON.parse(e):[]}catch{return[]}}(),this._timers=function(){try{const e=localStorage.getItem(pe);if(!e)return[];const t=JSON.parse(e),i=Date.now();return t.map(e=>{const t=e.savedAt?Math.floor((i-e.savedAt)/1e3):0,r=Math.max(0,(e.remaining??0)-(e.running?t:0));return{...e,remaining:r,savedAt:void 0}}).filter(e=>e.remaining>0)}catch{return[]}}(),this._timerAlarm=null,this._timerAlarmQueue=[],this._timersPrevView=null,this._customTimerInput="",this._hdrStarHover=0,this._mobileMenuOpen=!1,this._navDirection="forward",this._closingDetail=!1,this._gridFilterPreset=null,this._timerPresets=function(){try{const e=localStorage.getItem(he);return e?JSON.parse(e):[]}catch{return[]}}(),this._presetNameInput="",this._presetMinsInput="",this._alarmAddInput="",this._plannerFromRecipe=null,this._globalMode=!1,this._quickTimerLabel="",this._alarmLoopActive=!1,this._alarmInterval=null,this._alarmTimeout=null,this._alarmAudio=null,this._unsubscribe=null,this._darkModeQuery=null,this._resizeObserver=null,this._timerTick=null,this._globalWakeActive=!1,this._globalWakeUnsubscribeFn=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("recipe-manager-card-editor")}static getStubConfig(){return{}}getCardSize(){return 6}_updateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{const e=this.getBoundingClientRect().top,t=window.innerHeight-Math.max(e,0);t>100&&(this.style.height=`${t}px`)}))}connectedCallback(){super.connectedCallback(),this._darkModeQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._darkModeQuery.addEventListener("change",this._onSystemDark),this._applyTheme(),this._resizeObserver=new ResizeObserver(e=>{const t=e[0]?.contentRect?.width??0;this._wide=t>=620}),this._resizeObserver.observe(this),this._onViewportResize=()=>this._updateHeight(),window.visualViewport?.addEventListener("resize",this._onViewportResize),window.addEventListener("resize",this._onViewportResize),this._updateHeight(),this._timerTick=setInterval(()=>this._tickTimers(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._darkModeQuery?.removeEventListener("change",this._onSystemDark),this._resizeObserver?.disconnect(),window.visualViewport?.removeEventListener("resize",this._onViewportResize),window.removeEventListener("resize",this._onViewportResize),this._timerTick&&(clearInterval(this._timerTick),this._timerTick=null),this._timerAlarm&&(this._stopAlarmLoop(),this._timerAlarm=null),this._timerAlarmQueue=[],_e(this._timers),this._globalWakeActive&&z(oe)}_onSystemDark=()=>{"system"===this._settings.darkMode&&this._applyTheme()};updated(e){if(e.has("hass")&&this.hass&&!this._api&&(this._api=new h(this.hass),this._init()),e.has("hass")&&this.hass&&this._languageAutoDetectPending){this._languageAutoDetectPending=!1;const e=(this.hass.language||"").split("-")[0].toLowerCase(),t=m.includes(e)?e:this._settings.language;this._settings={...this._settings,language:t},xe(this._settings),b(t)}e.has("hass")&&this._api&&(this._api.hass=this.hass),e.has("_settings")&&this._applyTheme(),(e.has("_view")||e.has("_selectedRecipe"))&&this._saveViewState()}_saveViewState(){me.includes(this._view)&&function(e){try{sessionStorage.setItem(ue,JSON.stringify(e))}catch{}}({view:this._view,recipeId:"detail"===this._view?this._selectedRecipe?.id??null:null})}_restoreViewState(){const e=this._pendingViewRestore;if(this._pendingViewRestore=null,e&&me.includes(e.view))if("detail"===e.view&&e.recipeId){const t=this._recipes.find(t=>t.id===e.recipeId);t&&(this._selectedRecipe=t,this._view="detail")}else"detail"!==e.view&&(this._view=e.view)}_applyTheme(){const e=this._settings,t=R(e.uiStyle);if(this.setAttribute("data-ui",t),this.style.setProperty("--rm-font-size-base",ve[e.fontSize]??"15px"),this.style.setProperty("--rm-grid-columns",`repeat(${e.columns??3}, minmax(0, 1fr))`),"classic"!==t){let i;i="on"===e.darkMode||"off"!==e.darkMode&&(this._darkModeQuery?.matches??!1),this.setAttribute("data-mode",i?"dark":"light");for(const[e,r]of Object.entries(E(t,i)))this.style.setProperty(e,r);return}this.removeAttribute("data-mode");for(const e of["--rm-bg","--rm-surface","--rm-success","--rm-accent-text","--rm-ink","--rm-line","--rm-warn","--rm-danger","--rm-radius-card","--rm-shadow-float"])this.style.removeProperty(e);this.style.removeProperty("--rm-radius"),this.style.removeProperty("--rm-radius-sm");const i=be[e.theme]??be.soft,r=!i.light,a=!i.dark;let s=r;r||a?a&&(s=!1):s="on"===e.darkMode||"off"!==e.darkMode&&(this._darkModeQuery?.matches??!1);const n=s?i.dark??i.light:i.light??i.dark;for(const[e,t]of Object.entries(n))this.style.setProperty(e,t);this.style.setProperty("--rm-font-size-base",ve[e.fontSize]??"15px"),this.style.setProperty("--rm-grid-columns",`repeat(${e.columns??3}, minmax(0, 1fr))`)}async _init(){this._loading=!0,this._loadLocalShopping();try{await Promise.all([this._loadRecipes(),this._loadTags(),this._loadShoppingLists(),this._loadGlobalTimers(),this._loadWeekPlan()]),this._restoreViewState(),await this._subscribe()}catch(e){this._error=e.message||i("Failed to load recipes")}finally{this._loading=!1}}async _loadWeekPlan(){try{const e=new Date,t=(e.getDay()+6)%7;e.setDate(e.getDate()-t);const i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,r=await this._api.getMealPlan(i);this._weekPlan=r?.entries??[]}catch{this._weekPlan=[]}}async _loadGlobalTimers(){try{const{timers:e}=await this._api.getGlobalTimers(),t=Date.now()/1e3;this._timers=[...this._timers.filter(e=>!e.global),...(e||[]).map(e=>this._globalTimerToLocal(e,t))]}catch{}}_globalTimerToLocal(e,t=Date.now()/1e3){const i=e.running?Math.max(0,e.duration-(t-e.start_time)):e.paused_remaining??e.duration;return{id:e.id,label:e.label,total:e.duration,remaining:Math.round(i),running:e.running&&i>0,alarming:e.running&&i<=0,presetId:e.preset_id||null,global:!0,duration:e.duration,start_time:e.start_time,paused_remaining:e.paused_remaining}}_loadLocalShopping(){try{const e=localStorage.getItem(le);this._localShoppingItems=e?JSON.parse(e):[]}catch{this._localShoppingItems=[]}}_saveLocalShopping(){try{localStorage.setItem(le,JSON.stringify(this._localShoppingItems))}catch{}}async _loadRecipes(){const e=await this._api.getAllRecipes();this._recipes=e?.recipes??[]}async _loadTags(){const e=await this._api.getTags();this._tags=e?.tags??[]}async _loadShoppingLists(){try{this._shoppingLists=(await this._api.getShoppingLists())?.lists??[],this._slmAvailable=!0}catch{this._shoppingLists=[],this._slmAvailable=!1}}async _subscribe(){if(!this._unsubscribe)try{this._unsubscribe=await this._api.subscribe(async e=>{const t=e.event_type??e.event,i=e.data??{};/recipe_(added|updated|deleted)/.test(t)?(await Promise.all([this._loadRecipes(),this._loadTags()]),this._selectedRecipe&&(this._selectedRecipe=this._recipes.find(e=>e.id===this._selectedRecipe.id)??this._selectedRecipe)):/meal_plan/.test(t??"")?this._loadWeekPlan():"recipe_manager_global_timer_added"===t?this._timers.find(e=>e.id===i.id)||(this._timers=[...this._timers,this._globalTimerToLocal(i)]):"recipe_manager_global_timer_updated"===t?this._timers=this._timers.map(e=>e.id===i.id?this._globalTimerToLocal(i):e):"recipe_manager_global_timer_deleted"===t&&(this._timers=this._timers.filter(e=>e.id!==i.timer_id),this._timerAlarm?.id===i.timer_id&&(this._stopAlarmLoop(),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)))})}catch{}}get _filteredRecipes(){let e=this._recipes;if(this._activeTag&&(e=e.filter(e=>e.tags?.includes(this._activeTag)||e.courses?.includes(this._activeTag)||e.categories?.includes(this._activeTag)||e.collections?.includes(this._activeTag))),this._searchQuery.trim()){const t=this._searchQuery.trim().toLowerCase();e=e.filter(e=>e.name?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tags?.some(e=>e.toLowerCase().includes(t)))}return e}get _recentRecipes(){const e=this._settings.recentCount??12;return this._recentRecipeIds.slice(0,e).map(e=>this._recipes.find(t=>t.id===e)).filter(Boolean)}_handleSettingsChange(e){const t=this._settings.language;this._settings=e.detail.settings,xe(this._settings),this._settings.language!==t&&b(this._settings.language)}async _toggleGlobalWakeLock(){y()&&(this._globalWakeActive?(await z(oe),this._globalWakeActive=!1):(await S(oe),this._globalWakeActive=!0))}_tickTimers(){if(!this._timers.length)return;let e=!1;const t=[],i=Date.now()/1e3,r=this._timers.map(r=>{if(r.alarming||!r.running)return r;const a=r.global?Math.max(0,r.duration-(i-r.start_time)):r.remaining-1;if(e=!0,a<=0){if(r.presetId)return{...r,remaining:0,running:!1,alarming:!0};t.push({id:r.id,label:r.label})}return{...r,remaining:Math.round(a),running:a>0}});e&&(this._timers=r,_e(this._timers)),t.length&&(this._timerAlarm||(this._timerAlarm=t.shift(),this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)),t.length&&(this._timerAlarmQueue=[...this._timerAlarmQueue,...t]))}async _startTimer(e,t,a=null,s=!1){const n=t||i(r`${Math.floor(e/60)} min timer`);if(s&&this._api)try{const t=Date.now()/1e3;return void await this._api.addGlobalTimer({label:n,duration:e,start_time:t,running:!0,paused_remaining:null,...a?{preset_id:a}:{}})}catch(e){console.warn("Global timer failed, falling back to local:",e)}const o=Date.now().toString(36);this._timers=[...this._timers,{id:o,label:n,total:e,remaining:e,running:!0,presetId:a||null}],_e(this._timers)}_stopTimer(e){const t=this._timers.find(t=>t.id===e);this._timers=this._timers.filter(t=>t.id!==e),_e(this._timers),t?.global&&this._api&&this._api.deleteGlobalTimer(e).catch(()=>{})}_pauseTimer(e){const t=this._timers.find(t=>t.id===e),i=!!t&&t.running;if(this._timers=this._timers.map(t=>t.id===e?{...t,running:!t.running}:t),_e(this._timers),t?.global&&this._api)if(i){const t=this._timers.find(t=>t.id===e);this._api.updateGlobalTimer(e,{running:!1,paused_remaining:t?.remaining??0}).catch(()=>{})}else{const i=this._timers.find(t=>t.id===e),r=Date.now()/1e3-(t.duration-(i?.remaining??0));this._timers=this._timers.map(i=>i.id===e?{...i,start_time:r,duration:t.duration,running:!0}:i),this._api.updateGlobalTimer(e,{running:!0,start_time:r,paused_remaining:null}).catch(()=>{})}}_addTimeToTimer(e,t){const i=this._timers.find(t=>t.id===e);if(this._timers=this._timers.map(i=>i.id===e?{...i,remaining:i.remaining+t,total:i.total+t,running:!0,alarming:!1}:i),this._timerAlarm?.id===e?(this._stopAlarmLoop(),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile)):this._timerAlarmQueue=this._timerAlarmQueue.filter(t=>t.id!==e),_e(this._timers),i?.global&&this._api){const r=this._timers.find(t=>t.id===e),a=Date.now()/1e3-(i.duration-(r?.remaining??0)),s=i.duration+t;this._timers=this._timers.map(t=>t.id===e?{...t,start_time:a,duration:s}:t),this._api.updateGlobalTimer(e,{running:!0,start_time:a}).catch(()=>{})}}_dismissAlarm(){this._timerAlarm&&(this._stopAlarmLoop(),this._stopTimer(this._timerAlarm.id),this._timerAlarm=this._timerAlarmQueue.length?this._timerAlarmQueue.shift():null,this._timerAlarm&&this._startAlarmLoop(this._settings.timerSound??"beep",this._settings.timerSoundFile))}_addPresetTimer(){const e=this._presetNameInput.trim(),t=parseFloat(this._presetMinsInput);if(!e||!t||t<=0)return;const i={id:Date.now().toString(36),name:e,seconds:Math.round(60*t)};this._timerPresets=[...this._timerPresets,i],ge(this._timerPresets),this._presetNameInput="",this._presetMinsInput=""}_removePreset(e){this._timerPresets=this._timerPresets.filter(t=>t.id!==e),ge(this._timerPresets)}_startAlarmLoop(e,t){if(this._stopAlarmLoop(),"none"!==e)if("file"===e&&t){this._alarmLoopActive=!0;const e=()=>{this._alarmLoopActive&&(this._alarmAudio=new Audio(t),this._alarmAudio.onended=()=>{this._alarmLoopActive&&(this._alarmTimeout=setTimeout(e,2e3))},this._alarmAudio.onerror=()=>{this._alarmLoopActive&&(this._alarmTimeout=setTimeout(()=>we("beep"),2e3))},this._alarmAudio.play().catch(()=>{}))};e()}else we(e),this._alarmInterval=setInterval(()=>we(e),4e3)}_stopAlarmLoop(){this._alarmLoopActive=!1,this._alarmInterval&&(clearInterval(this._alarmInterval),this._alarmInterval=null),this._alarmTimeout&&(clearTimeout(this._alarmTimeout),this._alarmTimeout=null),this._alarmAudio&&(this._alarmAudio.pause(),this._alarmAudio.onended=null,this._alarmAudio.onerror=null,this._alarmAudio=null)}_handleStartTimer(e){const{seconds:t,label:i}=e.detail;this._startTimer(t,i,null,this._globalMode)}_handleSearch(e){this._searchQuery=e.detail?.query??""}_handleTagFilter(e){const t=e.detail?.tag;this._activeTag=this._activeTag===t?null:t}_handleChipNav(e){const{filterMode:t,value:i}=e.detail;this._navDirection="back","tags"===t?(this._activeTag=i,this._gridFilterPreset=null):(this._activeTag=null,this._gridFilterPreset={filterMode:t,selectedValues:[i]}),this._view="grid"}_handleBack(){this._closingDetail||("detail"===this._view&&this._selectedRecipe&&!this._closingDetail?(this._closingDetail=!0,this._view="grid"):(this._navDirection="back",this._view="grid",this._selectedRecipe=null,this._closingDetail=!1))}_onDetailTransitionEnd(e){e.target===e.currentTarget&&"transform"===e.propertyName&&this._closingDetail&&(this._closingDetail=!1,this._selectedRecipe=null)}_handleShowGrid(){this._navDirection="back",this._view="grid",this._selectedRecipe=null}_handleShowPlanner(){this._plannerFromRecipe=this._selectedRecipe||null,this._navDirection="forward",this._view="planner"}_handleBackToRecipe(){this._plannerFromRecipe&&(this._selectedRecipe=this._plannerFromRecipe,this._plannerFromRecipe=null,this._navDirection="back",this._view="detail")}_handleOpenRecipe(e){const t=this.shadowRoot?.querySelector("rm-recipe-grid");if(t){const e=t.shadowRoot?.querySelector(".grid-scroll");this._gridScrollPos=e?.scrollTop??0}const i=e.detail?.recipe;if(this._closingDetail=!1,this._navDirection="forward",this._selectedRecipe=i,this._view="detail",i?.id){const e=[i.id,...this._recentRecipeIds.filter(e=>e!==i.id)].slice(0,50);this._recentRecipeIds=e,function(e){try{localStorage.setItem(de,JSON.stringify(e))}catch{}}(e)}}async _handleToggleFavourite(e){const{recipeId:t}=e.detail;await this._api.toggleFavourite(t),await this._loadRecipes(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??this._selectedRecipe)}async _handleDeleteRecipe(e){await this._api.deleteRecipe(e.detail.recipeId),await this._loadRecipes(),await this._loadTags(),this._navDirection="back",this._view="grid",this._selectedRecipe=null}async _handleUpdateRecipe(e){const{recipeId:t,data:i}=e.detail;await this._api.updateRecipe(t,i),await this._loadRecipes(),await this._loadTags(),this._selectedRecipe?.id===t&&(this._selectedRecipe=this._recipes.find(e=>e.id===t)??null)}async _handleAddRecipe(e){try{await this._api.addRecipe(e.detail.data),this._navDirection="back",this._view="grid",await this._loadRecipes(),await this._loadTags()}catch(e){console.error("[Recipe Manager] Failed to save recipe:",e)}}async _handleImportDone(){this._navDirection="back",this._view="grid",await this._loadRecipes(),await this._loadTags()}async _handleAddToShopping(e){const{ingredients:t,listId:i,recipeName:r}=e.detail;if(this._slmAvailable&&i)try{(await this._api.addIngredientsToShoppingList(i,t,r)).filter(e=>!e.success).length&&console.warn("Some ingredients failed to add to SLM")}catch(e){console.error("Shopping list error:",e)}else{const e=t.map(e=>({id:Math.random().toString(36).slice(2,10),name:e.name,amount:e.amount||null,unit:e.unit||null,checked:!1}));this._localShoppingItems=[...this._localShoppingItems,...e],this._saveLocalShopping()}}_handleShoppingLocalUpdate(e){this._localShoppingItems=e.detail.items,this._saveLocalShopping()}_renderStars(e){const t=e||0,s=this._hdrStarHover,n=s>0?s:t;return a`
      <div class="header-stars"
        @mouseleave=${()=>{this._hdrStarHover=0}}
        title="${i(s>0?r`Set rating: ${s}★`:t>0?r`Rating: ${t}★ — click to change`:"Click to rate")}">
        ${[1,2,3,4,5].map(e=>a`
          <span class="hdr-star ${e<=n?"filled":""}"
            @mouseover=${()=>{this._hdrStarHover=e}}
            @click=${()=>this._handleRateRecipe(e)}>★</span>
        `)}
      </div>
    `}async _handleRateRecipe(e){if(!this._selectedRecipe)return;const t=this._selectedRecipe.rating===e?null:e;this._hdrStarHover=0,await this._handleUpdateRecipe({detail:{recipeId:this._selectedRecipe.id,data:{rating:t}}})}_renderSidebar(){const e=this._view,t=this._sidebarCollapsed,s=(s,n,o,c=!1,l=null)=>a`
      <button
        class="sb-item ${e===o?"active":""} ${c?"placeholder":""}"
        title="${c?i(r`${n} — coming soon`):n}"
        @click=${c?void 0:l||(()=>{this._navDirection="forward",this._view=o,this._selectedRecipe=null})}
        ?disabled=${c}
      >
        <ha-icon icon="${s}"></ha-icon>
        ${t?"":a`<span>${n}</span>`}
      </button>
    `;return a`
      <nav class="rm-sidebar ${t?"collapsed":""}">
        <div class="sb-top">
          <div class="sb-logo-row">
            <button class="sb-collapse-btn" @click=${()=>{this._sidebarCollapsed=!this._sidebarCollapsed}}
              title="${i(t?"Expand sidebar":"Collapse sidebar")}">
              <ha-icon icon="${t?"mdi:menu-close":"mdi:menu-open"}"></ha-icon>
            </button>
          </div>

          ${t?a`
            <button class="sb-icon-only-btn" @click=${()=>{this._view="add"}} title="${i("New Recipe")}">
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          `:a`
            <div class="sb-search">
              <ha-icon icon="mdi:magnify" class="sb-search-icon"></ha-icon>
              <input
                class="sb-search-input"
                type="text"
                placeholder="${i("Search…")}"
                .value=${this._searchQuery}
                @input=${e=>{this._searchQuery=e.target.value,this._navDirection="back",this._view="grid"}}
              />
              ${this._searchQuery?a`
                <button class="sb-search-clear" @click=${()=>{this._searchQuery=""}}>
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>
              `:""}
            </div>

            <button class="sb-new-btn" @click=${()=>{this._view="add"}}>
              <ha-icon icon="mdi:plus"></ha-icon>
              <span>${i("New Recipe")}</span>
            </button>
          `}
        </div>

        <div class="sb-nav">
          ${s("mdi:home",i("Home"),"grid")}
          ${s("mdi:cart-outline",i("Shopping List"),"shopping")}
          ${this._settings.showPlanner?s("mdi:calendar-week",i("Meal Planner"),"planner",!1,()=>{this._plannerFromRecipe=null,this._navDirection="forward",this._view="planner",this._selectedRecipe=null}):""}
          ${s("mdi:book-open-variant",i("Cookbook"),"cookbook",!0)}
          <button
            class="sb-item ${"timers"===e?"active":""}"
            title="${i("Timers")}"
            @click=${()=>{this._timersPrevView=this._view,this._view="timers"}}
          >
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t?"":a`<span>${i("Timers")}</span>`}
            ${this._timers.length?a`<span class="sb-timer-badge">${this._timers.length}</span>`:""}
          </button>
        </div>

        <div class="sb-bottom">
          <button class="sb-item placeholder" disabled title="${i("Sync — coming soon")}">
            <ha-icon icon="mdi:cloud-sync-outline"></ha-icon>${t?"":a`<span>${i("Sync")}</span>`}
          </button>
          <button class="sb-item placeholder" disabled title="${i("Help — coming soon")}">
            <ha-icon icon="mdi:help-circle-outline"></ha-icon>${t?"":a`<span>${i("Help")}</span>`}
          </button>
          <button class="sb-item ${"settings"===e?"active":""}"
            @click=${()=>{this._view="settings"}}>
            <ha-icon icon="mdi:cog-outline"></ha-icon>${t?"":a`<span>${i("Settings")}</span>`}
          </button>
        </div>
      </nav>
    `}_renderHeader(){const e=("detail"===this._view||this._closingDetail)&&this._selectedRecipe,t="settings"===this._view,r="add"===this._view,s="timers"===this._view,n=this._wide,o=t?i("Settings"):r?i("New Recipe"):s?i("Timers"):e?"":"planner"===this._view?i("Meal Planner"):"shopping"===this._view?i("Shopping List"):i("Recipes");return a`
      <div class="rm-header">
        <div class="rm-header-left">
          ${e||r?a`
            <button class="icon-btn" @click=${this._handleBack} title="${i("Back")}">
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:s&&"detail"===this._timersPrevView?a`
            <button class="icon-btn"
              @click=${()=>{this._navDirection="back",this._view="detail",this._timersPrevView=null}}
              title="${i("Back to recipe")}">
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:n||"grid"===this._view||t||s?"":a`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `}
          <div class="rm-title ${o?"":"empty"}">
            <ha-icon icon="mdi:chef-hat"></ha-icon>
            <span>${o}</span>
          </div>
        </div>

        <div class="rm-header-right">
          <!-- Timer pills (compact, shown when timers are running, not in timer view) -->
          ${this._timers.length&&"timers"!==this._view?a`
            <div class="timer-pills" @click=${()=>{this._navDirection="forward",this._timersPrevView=this._view,this._view="timers"}}>
              ${this._timers.slice(0,3).map(e=>a`
                <div class="timer-pill ${e.running?"":"paused"}">
                  <ha-icon icon="mdi:timer-outline"></ha-icon>
                  <span>${ye(e.remaining)}</span>
                </div>
              `)}
              ${this._timers.length>3?a`<span class="timer-more">+${this._timers.length-3}</span>`:""}
            </div>
          `:""}

          ${e?this._renderStars(this._selectedRecipe.rating):""}

          <button class="icon-btn wake-toggle-btn ${this._globalWakeActive?"active":""}"
            @click=${this._toggleGlobalWakeLock}
            ?disabled=${!y()}
            title="${y()?this._globalWakeActive?i("Screen awake — click to allow sleep"):i("Keep screen awake"):i("Keep screen awake — requires a secure (HTTPS) connection and a supported browser")}">
            <ha-icon icon="${this._globalWakeActive?"mdi:eye":"mdi:eye-off-outline"}"></ha-icon>
          </button>

          ${n||"grid"!==this._view||"compact"!==R(this._settings.uiStyle)?"":a`
            <button class="icon-btn primary" @click=${()=>{this._navDirection="forward",this._view="add"}} title="${i("New Recipe")}">
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          `}

          ${t||r||s?a`
            <button class="icon-btn" @click=${this._handleShowGrid}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          `:n?"":a`
            <button class="icon-btn"
              @click=${()=>{this._mobileMenuOpen=!this._mobileMenuOpen}}
              title="${this._mobileMenuOpen?i("Close menu"):i("Menu")}">
              <ha-icon icon="${this._mobileMenuOpen?"mdi:close":"mdi:menu"}"></ha-icon>
            </button>
          `}
        </div>
      </div>
    `}_renderBody(){const e=this._settings,t=R(e.uiStyle);if("settings"===this._view)return a`
      <rm-settings-view ui-style=${t}
        .hass=${this.hass}
        .settings=${e}
        @rm-settings-change=${this._handleSettingsChange}
      ></rm-settings-view>
    `;if("add"===this._view)return a`
      <rm-add-recipe-dialog ui-style=${t}
        .api=${this._api}
        .asPanel=${!0}
        .inlineMode=${!0}
        @rm-add-recipe=${this._handleAddRecipe}
        @rm-import-done=${this._handleImportDone}
        @rm-close=${()=>{this._navDirection="back",this._view="grid"}}
      ></rm-add-recipe-dialog>
    `;if("timers"===this._view)return this._renderTimersView();if("planner"===this._view)return a`
      <rm-meal-planner ui-style=${t}
        .api=${this._api}
        .recipes=${this._recipes}
        .fromRecipe=${this._plannerFromRecipe}
        .settings=${e}
        @rm-open-recipe=${this._handleOpenRecipe}
        @rm-back-to-recipe=${this._handleBackToRecipe}
      ></rm-meal-planner>
    `;if("shopping"===this._view)return a`
      <rm-shopping-view ui-style=${t}
        .hass=${this.hass}
        .slmAvailable=${this._slmAvailable}
        .shoppingLists=${this._shoppingLists}
        .api=${this._api}
        .localItems=${this._localShoppingItems}
        .settings=${this._settings}
        @rm-shopping-local-update=${this._handleShoppingLocalUpdate}
      ></rm-shopping-view>
    `;if(this._loading)return a`
      <div class="rm-loading"><ha-circular-progress active size="large"></ha-circular-progress></div>
    `;if(this._error)return a`
      <div class="rm-error">
        <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
        <p>${this._error}</p>
        <button class="text-btn" @click=${this._init.bind(this)}>${i("Retry")}</button>
      </div>
    `;const r=("detail"===this._view||this._closingDetail)&&this._selectedRecipe;return a`
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
            .filterPreset=${this._gridFilterPreset}
            .uiStyle=${R(e.uiStyle)}
            .weekPlan=${this._weekPlan}
            .showPlanner=${e.showPlanner}
            @rm-open-planner=${()=>{this._plannerFromRecipe=null,this._navDirection="forward",this._view="planner",this._selectedRecipe=null}}
            @rm-search=${this._handleSearch}
            @rm-tag-filter=${this._handleTagFilter}
            @rm-open-recipe=${this._handleOpenRecipe}
            @rm-toggle-favourite=${this._handleToggleFavourite}
          ></rm-recipe-grid>
        </div>
        <div class="rm-slide-pane">
          ${r?a`
            <rm-recipe-detail ui-style=${t}
              .recipe=${this._selectedRecipe}
              .api=${this._api}
              .settings=${e}
              .wide=${this._wide}
              .shoppingLists=${this._shoppingLists}
              .slmAvailable=${this._slmAvailable}
              .allTags=${this._tags||[]}
              .allCourses=${[...new Set(this._recipes.flatMap(e=>e.courses||[]))].sort()}
              .allCategories=${[...new Set(this._recipes.flatMap(e=>e.categories||[]))].sort()}
              .allCollections=${[...new Set(this._recipes.flatMap(e=>e.collections||[]))].sort()}
              @rm-back=${this._handleBack}
              @rm-toggle-favourite=${this._handleToggleFavourite}
              @rm-delete-recipe=${this._handleDeleteRecipe}
              @rm-update-recipe=${this._handleUpdateRecipe}
              @rm-add-to-shopping=${this._handleAddToShopping}
              @rm-start-timer=${this._handleStartTimer}
              @rm-show-planner=${this._handleShowPlanner}
              @rm-chip-nav=${this._handleChipNav}
            ></rm-recipe-detail>
          `:""}
        </div>
      </div>
    `}_renderTimersView(){const e=this._customTimerInput.trim(),t=this._presetNameInput.trim()&&this._presetMinsInput.trim(),r=this._timers.filter(e=>!e.presetId),s=263.9;return a`
      <div class="timers-view">

        <!-- Active timers (non-preset): horizontal wrap of square arc tiles -->
        ${r.length?a`
          <div class="timer-list">
            ${r.map(e=>{const t=e.remaining<60?"#f59e0b":"var(--rm-accent)",r=s*(1-e.remaining/e.total);return a`
                <div class="timer-card">
                  <button class="preset-remove" @click=${()=>this._stopTimer(e.id)} title="${i("Remove")}">
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                  ${e.global?a`<ha-icon class="timer-global-badge" icon="mdi:earth" title="${i("Global timer")}"></ha-icon>`:""}
                  <span class="timer-card-name">${e.label}</span>
                  <div class="preset-arc-wrap">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--rm-border)" stroke-width="6"/>
                      <circle cx="50" cy="50" r="42" fill="none"
                        stroke="${t}" stroke-width="6" stroke-linecap="round"
                        stroke-dasharray="${s}" stroke-dashoffset="${r}"
                        transform="rotate(-90 50 50)"
                        style="transition: stroke-dashoffset 0.8s linear, stroke 0.3s;"/>
                    </svg>
                    <div class="preset-arc-center">
                      <span class="preset-arc-time">${ye(e.remaining)}</span>
                    </div>
                  </div>
                  <div class="preset-arc-btns">
                    <button class="timer-ctrl-btn" @click=${()=>this._pauseTimer(e.id)} title="${e.running?i("Pause"):i("Resume")}">
                      <ha-icon icon="${e.running?"mdi:pause":"mdi:play"}"></ha-icon>
                    </button>
                    <button class="timer-ctrl-btn danger" @click=${()=>this._stopTimer(e.id)} title="${i("Stop")}">
                      <ha-icon icon="mdi:stop"></ha-icon>
                    </button>
                  </div>
                </div>
              `})}
          </div>
        `:a`
          <div class="timer-empty">
            <ha-icon icon="mdi:timer-off-outline"></ha-icon>
            <p>${i("No active timers.")}</p>
            <p class="timer-empty-hint">${i("Tap a highlighted time in a recipe's directions to start one.")}</p>
          </div>
        `}

        <!-- Spacer pushes add+presets to bottom -->
        <div style="flex:1"></div>

        <!-- Add timer section -->
        <div class="timer-add-section">
          <div class="timer-add-header">
            <span class="timer-add-title">${i("Add Timer")}</span>
            <label class="timer-global-toggle ${this._globalMode?"active":""}" title="${i("Sync timer across all devices via Home Assistant")}">
              <input type="checkbox" .checked=${this._globalMode}
                @change=${e=>{this._globalMode=e.target.checked}}
              />
              <ha-icon icon="mdi:earth"></ha-icon>
              ${i("Global")}
            </label>
          </div>

          <div class="timer-add-group">
            <div class="timer-add-group-label">${i("Quick start")}</div>
            <div class="timer-add-row">
              <input type="text" class="timer-input" placeholder="${i("Label (optional)")}"
                .value=${this._quickTimerLabel}
                @input=${e=>{this._quickTimerLabel=e.target.value}}
                @keydown=${t=>{"Enter"===t.key&&e&&(this._startTimer(Math.round(60*parseFloat(this._customTimerInput)),this._quickTimerLabel.trim()||null,null,this._globalMode),this._customTimerInput="",this._quickTimerLabel="")}}
              />
              <input type="number" class="timer-input timer-mins-input" placeholder="${i("min")}" min="0.5" step="0.5"
                .value=${this._customTimerInput}
                @input=${e=>{this._customTimerInput=e.target.value}}
                @keydown=${t=>{"Enter"===t.key&&e&&(this._startTimer(Math.round(60*parseFloat(this._customTimerInput)),this._quickTimerLabel.trim()||null,null,this._globalMode),this._customTimerInput="",this._quickTimerLabel="")}}
              />
              <button class="action-btn primary" ?disabled=${!e}
                @click=${()=>{this._startTimer(Math.round(60*parseFloat(this._customTimerInput)),this._quickTimerLabel.trim()||null,null,this._globalMode),this._customTimerInput="",this._quickTimerLabel=""}}>
                <ha-icon icon="mdi:play" style="--mdc-icon-size:14px"></ha-icon> ${i("Start")}
              </button>
            </div>
          </div>

          <div class="timer-add-group">
            <div class="timer-add-group-label">${i("Save preset")}</div>
            <div class="timer-add-row">
              <input type="text" class="timer-input" placeholder="${i("Preset name")}"
                .value=${this._presetNameInput}
                @input=${e=>{this._presetNameInput=e.target.value}}
                @keydown=${e=>{"Enter"===e.key&&this._addPresetTimer()}}
              />
              <input type="number" class="timer-input timer-mins-input" placeholder="${i("min")}" min="0.5" step="0.5"
                .value=${this._presetMinsInput}
                @input=${e=>{this._presetMinsInput=e.target.value}}
                @keydown=${e=>{"Enter"===e.key&&this._addPresetTimer()}}
              />
              <button class="action-btn" ?disabled=${!t} @click=${this._addPresetTimer}>${i("+ Preset")}</button>
            </div>
          </div>
        </div>

        <!-- Preset timers grid (bottom) -->
        ${this._timerPresets.length?a`
          <div class="timer-presets-grid">
            ${this._timerPresets.map(e=>{const t=this._timers.find(t=>t.presetId===e.id),r=t&&t.running,n=t&&t.alarming,o=t?t.remaining:e.seconds,c=t?t.total:e.seconds,l=n?"var(--error-color, #cf6679)":o<60&&t?"#f59e0b":"var(--rm-accent)",d=n?0:t?s*(1-o/c):s;return a`
                <div class="timer-preset-card ${n?"alarming":""}">
                  <button class="preset-remove" @click=${()=>{t&&this._stopTimer(t.id),this._removePreset(e.id)}} title="${i("Remove")}">
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                  <span class="preset-arc-name">${e.name}</span>
                  <div class="preset-arc-wrap">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="var(--rm-border)" stroke-width="7"/>
                      <circle cx="50" cy="50" r="44" fill="none"
                        stroke="${l}" stroke-width="7" stroke-linecap="round"
                        stroke-dasharray="${s}" stroke-dashoffset="${d}"
                        transform="rotate(-90 50 50)"
                        style="transition: stroke-dashoffset 0.8s linear, stroke 0.3s;"/>
                    </svg>
                    <div class="preset-arc-center">
                      ${n?a`
                        <span class="preset-arc-time" style="color:var(--error-color,#cf6679)">${i("Done!")}</span>
                      `:a`
                        <span class="preset-arc-time">${ye(o)}</span>
                      `}
                    </div>
                  </div>
                  <div class="preset-arc-btns">
                    ${n?a`
                      <button class="preset-arc-btn" @click=${()=>this._addTimeToTimer(t.id,30)}>${i("+30s")}</button>
                      <button class="preset-arc-btn" @click=${()=>this._addTimeToTimer(t.id,60)}>${i("+1m")}</button>
                      <button class="preset-arc-btn" @click=${()=>this._addTimeToTimer(t.id,300)}>${i("+5m")}</button>
                      <button class="preset-arc-btn stop" @click=${()=>this._stopTimer(t.id)}>${i("Stop")}</button>
                    `:r?a`
                      <button class="preset-arc-btn" @click=${()=>this._addTimeToTimer(t.id,30)}>${i("+30s")}</button>
                      <button class="preset-arc-btn" @click=${()=>this._addTimeToTimer(t.id,60)}>${i("+1m")}</button>
                      <button class="preset-arc-btn" @click=${()=>this._pauseTimer(t.id)}>
                        <ha-icon icon="mdi:pause" style="--mdc-icon-size:12px;vertical-align:middle"></ha-icon>
                      </button>
                      <button class="preset-arc-btn stop" @click=${()=>this._stopTimer(t.id)}>${i("Stop")}</button>
                    `:t?a`
                      <button class="preset-arc-btn" @click=${()=>this._pauseTimer(t.id)}>${i("Resume")}</button>
                      <button class="preset-arc-btn stop" @click=${()=>this._stopTimer(t.id)}>${i("Stop")}</button>
                    `:a`
                      <button class="preset-arc-btn play" @click=${()=>this._startTimer(e.seconds,e.name,e.id)}>
                        <ha-icon icon="mdi:play" style="--mdc-icon-size:14px;vertical-align:middle"></ha-icon> ${i("Start")}
                      </button>
                    `}
                  </div>
                </div>
              `})}
          </div>
        `:""}
      </div>
    `}_renderTimerAlarm(){const e=this._timerAlarm;return e?a`
      <div class="alarm-overlay">
        <div class="alarm-bubble">
          <ha-icon icon="mdi:alarm" class="alarm-icon"></ha-icon>
          <div class="alarm-label">${e.label}</div>
          <div class="alarm-sub">${i("Timer complete!")}</div>
          <div class="alarm-btns">
            <button class="alarm-btn" @click=${()=>this._addTimeToTimer(e.id,30)}>${i("+30s")}</button>
            <button class="alarm-btn" @click=${()=>this._addTimeToTimer(e.id,60)}>${i("+1 min")}</button>
            <button class="alarm-btn" @click=${()=>this._addTimeToTimer(e.id,300)}>${i("+5 min")}</button>
            <button class="alarm-btn" @click=${()=>this._addTimeToTimer(e.id,600)}>${i("+10 min")}</button>
            <div class="alarm-custom-row">
              <input type="number" class="alarm-custom-input" placeholder="${i("min")}" min="1"
                .value=${this._alarmAddInput}
                @input=${e=>{this._alarmAddInput=e.target.value}}
                @keydown=${t=>{if("Enter"===t.key&&this._alarmAddInput){const t=parseInt(this._alarmAddInput);t>0&&this._addTimeToTimer(e.id,60*t),this._alarmAddInput=""}}}
              />
              <button class="alarm-btn accent" ?disabled=${!this._alarmAddInput}
                @click=${()=>{const t=parseInt(this._alarmAddInput);t>0&&this._addTimeToTimer(e.id,60*t),this._alarmAddInput=""}}>${i("+min")}</button>
            </div>
            <button class="alarm-btn stop" @click=${this._dismissAlarm}>${i("Stop")}</button>
          </div>
        </div>
      </div>
    `:""}_renderBottomNav(){const e=this._view,t=(t,i,r,s)=>a`
      <button class="rm-bn-btn ${e===r?"active":""}"
        @click=${s||(()=>{this._navDirection="forward",this._view=r,this._selectedRecipe=null})}
        title="${i}">
        <ha-icon icon="${t}"></ha-icon>
        <span>${i}</span>
      </button>
    `;return a`
      <nav class="rm-bottom-nav">
        ${t("mdi:home",i("Home"),"grid",()=>{this._navDirection="back",this._view="grid",this._selectedRecipe=null})}
        ${t("mdi:cart-outline",i("Shopping"),"shopping")}
        ${"classic"===R(this._settings.uiStyle)?a`
        <button class="rm-bn-btn rm-bn-add"
          @click=${()=>{this._navDirection="forward",this._view="add"}}
          title="${i("New Recipe")}">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>`:""}
        ${t("mdi:calendar-week",i("Planner"),"planner",()=>{this._plannerFromRecipe=null,this._navDirection="forward",this._view="planner",this._selectedRecipe=null})}
        <button class="rm-bn-btn ${"timers"===e?"active":""}"
          @click=${()=>{this._navDirection="forward",this._timersPrevView=this._view,this._view="timers"}}
          title="${i("Timers")}">
          <ha-icon icon="mdi:timer-outline"></ha-icon>
          <span>${i("Timers")}</span>
          ${this._timers.length?a`<span class="rm-bn-badge">${this._timers.length}</span>`:""}
        </button>
      </nav>
    `}_renderMobileMenu(){return a`
      <div class="rm-mobile-overlay" @click=${()=>{this._mobileMenuOpen=!1}}>
        <nav class="rm-mobile-menu" @click=${e=>e.stopPropagation()}>
          <div class="rm-mm-header">
            <ha-icon icon="mdi:chef-hat" class="rm-mm-logo"></ha-icon>
            <span class="rm-mm-title">${i("Recipes")}</span>
            <button class="icon-btn" @click=${()=>{this._mobileMenuOpen=!1}}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="rm-mm-items">
            <button class="rm-mm-item" @click=${()=>{this._view="settings",this._mobileMenuOpen=!1}}>
              <ha-icon icon="mdi:cog-outline"></ha-icon>
              <span>${i("Settings")}</span>
            </button>
            <button class="rm-mm-item" disabled>
              <ha-icon icon="mdi:help-circle-outline"></ha-icon>
              <span>${i("Help")}</span>
              <span class="rm-mm-soon">${i("Soon")}</span>
            </button>
          </div>
        </nav>
      </div>
    `}render(){const e=this._wide;return a`
      <ha-card class="rm-card ${e?"rm-wide":""}">
        ${e?this._renderSidebar():""}
        <div class="rm-main">
          ${this._renderHeader()}
          <div class="rm-body" data-nav="${this._navDirection}">${this._renderBody()}</div>
          ${e?"":this._renderBottomNav()}
        </div>

        ${e||"grid"!==this._view||"fresh"!==R(this._settings.uiStyle)?"":a`
          <button class="rm-fab" @click=${()=>{this._navDirection="forward",this._view="add"}} title="${i("New Recipe")}" aria-label="${i("New Recipe")}">
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        `}

        ${!e&&this._mobileMenuOpen?this._renderMobileMenu():""}

        <!-- Timer alarm modal -->
        ${this._timerAlarm?this._renderTimerAlarm():""}
      </ha-card>
    `}static styles=s`
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
      --rm-radius-card:    12px;
      --rm-accent-text:    var(--rm-accent);
      --rm-ink:            #ffffff;
      --rm-line:           var(--rm-border);
      --rm-warn:           #f5a623;
      --rm-danger:         var(--error-color, #cf6679);
      --rm-shadow-float:   0 4px 12px rgba(0,0,0,0.2);
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
      background: var(--rm-accent); color: var(--rm-ink, #fff);
      border: none; border-radius: 8px;
      font-size: 13px; font-weight: 600; cursor: pointer;
      transition: opacity 0.15s;
    }
    .sb-new-btn:hover { opacity: 0.88; }
    .sb-new-btn ha-icon { --mdc-icon-size: 18px; }

    .sb-icon-only-btn {
      display: flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; margin: 0 auto;
      background: var(--rm-accent); color: var(--rm-ink, #fff);
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
      color: var(--rm-ink, #fff);
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

    .rm-title {
      display: flex; align-items: center; gap: 8px;
      font-size: 17px; font-weight: 600; color: var(--rm-text);
      overflow: hidden; white-space: nowrap; flex: 1; min-width: 0;
    }
    .rm-title ha-icon { --mdc-icon-size: 22px; color: var(--rm-accent); flex-shrink: 0; }
    .rm-title span { overflow: hidden; text-overflow: ellipsis; }

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
    .icon-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .icon-btn:disabled:hover { background: none; }
    .wake-toggle-btn.active { background: var(--rm-accent-soft); color: var(--rm-accent); }

    .text-btn {
      background: var(--rm-accent); color: var(--rm-ink, #fff); border: none;
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
      padding: 12px 16px 16px;
      gap: 12px;
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

    /* Active timer list: horizontal wrap of square arc tiles */
    .timer-list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .timer-card {
      position: relative;
      width: 180px; height: 180px;
      background: var(--rm-bg-elevated);
      border-radius: 16px;
      border: 1px solid var(--rm-border);
      padding: 10px 8px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      box-sizing: border-box;
    }
    .timer-card-name {
      font-size: 11px; font-weight: 600; color: var(--rm-text);
      text-align: center; width: 100%;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .timer-ctrl-btn {
      background: none;
      border: 1px solid var(--rm-border);
      border-radius: 50%;
      width: 28px; height: 28px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: var(--rm-text-secondary);
      padding: 0; transition: background 0.15s, color 0.15s;
    }
    .timer-ctrl-btn ha-icon { --mdc-icon-size: 14px; }
    .timer-ctrl-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent); }
    .timer-ctrl-btn.danger:hover { background: rgba(207,102,121,0.12); color: var(--error-color, #cf6679); border-color: var(--error-color, #cf6679); }

    /* Preset timer grid: square arc tiles */
    .timer-presets-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .timer-preset-card {
      position: relative;
      width: 160px; height: 160px;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 16px;
      padding: 8px 8px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      box-sizing: border-box;
    }
    .timer-preset-card.alarming {
      border-color: var(--error-color, #cf6679);
      animation: alarm-pulse-border 0.8s ease-in-out infinite alternate;
    }
    @keyframes alarm-pulse-border {
      from { box-shadow: 0 0 0 0 rgba(207,102,121,0); }
      to   { box-shadow: 0 0 0 6px rgba(207,102,121,0.3); }
    }
    /* Arc wrap fills available vertical space in the square tile */
    .preset-arc-wrap {
      position: relative;
      flex: 1;
      width: 100%;
      min-height: 0;
    }
    .preset-arc-wrap svg {
      width: 100%; height: 100%;
      display: block;
    }
    .preset-arc-center {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .preset-arc-time {
      font-size: 17px; font-weight: 700;
      color: var(--rm-text); line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .preset-arc-name {
      font-size: 11px; font-weight: 600; color: var(--rm-text);
      text-align: center; width: 100%;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .preset-arc-btns {
      display: flex; gap: 4px; flex-wrap: wrap; justify-content: center;
    }
    .preset-arc-btn {
      background: var(--rm-bg); border: 1px solid var(--rm-border);
      border-radius: 10px; padding: 2px 6px; font-size: 10px;
      color: var(--rm-text-secondary); cursor: pointer; transition: all 0.15s;
    }
    .preset-arc-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent); border-color: var(--rm-accent); }
    .preset-arc-btn.stop { color: var(--error-color, #cf6679); border-color: var(--error-color, #cf6679); }
    .preset-arc-btn.stop:hover { background: rgba(207,102,121,0.12); }
    .preset-arc-btn.play {
      background: var(--rm-accent); color: var(--rm-ink, #fff); border-color: var(--rm-accent);
      padding: 3px 12px; font-size: 11px; border-radius: 12px;
    }
    .preset-arc-btn.play:hover { opacity: 0.85; }
    .preset-remove {
      position: absolute; top: 4px; right: 4px;
      background: none; border: none; cursor: pointer;
      color: var(--rm-text-muted); opacity: 0; padding: 2px;
      border-radius: 50%; transition: opacity 0.15s; z-index: 1;
    }
    .timer-preset-card:hover .preset-remove,
    .timer-card:hover .preset-remove { opacity: 1; }
    .preset-remove ha-icon { --mdc-icon-size: 13px; }

    /* Timer add section */
    .timer-add-section {
      border-top: 1px solid var(--rm-border);
      padding-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .timer-add-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .timer-add-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--rm-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .timer-global-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 20px;
      border: 1px solid var(--rm-border);
      cursor: pointer;
      font-size: 12px;
      color: var(--rm-text-muted);
      transition: all 0.15s;
      user-select: none;
    }
    .timer-global-toggle input { display: none; }
    .timer-global-toggle ha-icon { --mdc-icon-size: 14px; }
    .timer-global-toggle.active {
      border-color: var(--rm-accent);
      color: var(--rm-accent);
      background: var(--rm-accent-soft);
    }
    .timer-add-group { display: flex; flex-direction: column; gap: 5px; }
    .timer-add-group-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--rm-text-muted);
      opacity: 0.7;
    }
    .timer-add-row { display: flex; gap: 6px; align-items: center; }
    .timer-input {
      flex: 1;
      background: var(--rm-bg-elevated);
      border: 1px solid var(--rm-border);
      border-radius: 8px;
      color: var(--rm-text);
      padding: 6px 9px;
      font-size: 13px;
      font-family: inherit;
      min-width: 0;
    }
    .timer-mins-input { max-width: 72px; flex: 0 0 72px; }
    .timer-input:focus { outline: none; border-color: var(--rm-accent); }
    .timer-global-badge {
      position: absolute;
      top: 4px;
      right: 22px;
      --mdc-icon-size: 11px;
      color: var(--rm-accent);
      opacity: 0.75;
    }

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
      color: var(--rm-ink, #fff);
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
      font-size: 13px;
      font-weight: 500;
      transition: background 0.15s;
    }
    .alarm-btn:hover { background: var(--rm-accent-soft); }
    .alarm-btn:disabled { opacity: 0.45; cursor: not-allowed; }
    .alarm-btn.accent { background: var(--rm-accent); color: var(--rm-ink, #fff); border-color: var(--rm-accent); }
    .alarm-btn.stop {
      background: var(--error-color, #cf6679);
      color: #fff;
      border-color: var(--error-color, #cf6679);
      grid-column: 1 / -1;
    }
    .alarm-btn.stop:hover { opacity: 0.85; }
    .alarm-custom-row {
      display: flex; gap: 6px; grid-column: 1 / -1;
    }
    .alarm-custom-input {
      flex: 1; background: var(--rm-bg-elevated); border: 1px solid var(--rm-border);
      border-radius: 8px; color: var(--rm-text); padding: 8px 10px;
      font-size: 13px; font-family: inherit;
    }
    .alarm-custom-input:focus { outline: none; border-color: var(--rm-accent); }

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
      color: var(--rm-ink, #fff) !important;
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
      color: var(--rm-ink, #fff);
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


    /* ═══════════════════════════════════════════════════════════════
       Fresh + Compact interface styles (same language as Shopping List
       Manager). Classic keeps everything above untouched.
       Fresh: rounded cards, pill header, floating nav, + button.
       Compact: flat bars, rows, square buttons.
    ═══════════════════════════════════════════════════════════════ */

    :host([data-ui="fresh"]) ha-card.rm-card,
    :host([data-ui="compact"]) ha-card.rm-card { background: var(--rm-bg-main); }

    /* Header */
    :host([data-ui="fresh"]) .rm-header,
    :host([data-ui="compact"]) .rm-header {
      background: transparent;
      border-bottom: none;
      padding: 20px 20px 0;
      gap: 10px;
    }
    :host([data-ui="compact"]) .rm-header { padding: 20px 16px 0 20px; gap: 8px; }
    :host([data-ui="fresh"]) ha-card.rm-wide .rm-header,
    :host([data-ui="compact"]) ha-card.rm-wide .rm-header { padding: 28px 28px 0; }
    :host([data-ui="fresh"]) .rm-title.empty,
    :host([data-ui="compact"]) .rm-title.empty { display: none; }

    /* Fresh phone: title is a pill with an icon chip */
    :host([data-ui="fresh"]) ha-card:not(.rm-wide) .rm-title {
      height: 48px; padding: 0 16px 0 8px; gap: 10px; flex: 1;
      border-radius: 999px; border: 1px solid var(--rm-border);
      background: var(--rm-bg-surface); font-size: 15px; font-weight: 700;
    }
    :host([data-ui="fresh"]) ha-card:not(.rm-wide) .rm-title ha-icon {
      width: 32px; height: 32px; border-radius: 50%;
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--rm-accent-soft); color: var(--rm-accent-text);
      --mdc-icon-size: 18px;
    }
    /* Compact phone + wide: plain bold title */
    :host([data-ui="compact"]) .rm-title ha-icon,
    :host([data-ui="fresh"]) ha-card.rm-wide .rm-title ha-icon { display: none; }
    :host([data-ui="compact"]) .rm-title { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
    :host([data-ui="fresh"]) ha-card.rm-wide .rm-title,
    :host([data-ui="compact"]) ha-card.rm-wide .rm-title {
      font-size: 30px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1;
    }

    /* Round header buttons */
    :host([data-ui="fresh"]) .icon-btn {
      width: 48px; height: 48px;
      border: 1px solid var(--rm-border); background: var(--rm-bg-surface); color: var(--rm-text);
    }
    :host([data-ui="compact"]) .icon-btn {
      width: 44px; height: 44px; border-radius: 14px;
      border: none; background: var(--rm-bg-elevated); color: var(--rm-text);
    }
    :host([data-ui="fresh"]) .icon-btn:hover,
    :host([data-ui="compact"]) .icon-btn:hover { background: var(--rm-accent-soft); color: var(--rm-accent-text); }
    :host([data-ui="fresh"]) .icon-btn.primary,
    :host([data-ui="compact"]) .icon-btn.primary { background: var(--rm-accent); border-color: var(--rm-accent); color: var(--rm-ink); }
    :host([data-ui="fresh"]) .wake-toggle-btn.active,
    :host([data-ui="compact"]) .wake-toggle-btn.active { background: var(--rm-accent-soft); color: var(--rm-accent-text); }
    :host([data-ui="fresh"]) .hdr-star.filled,
    :host([data-ui="compact"]) .hdr-star.filled { color: var(--rm-warn); -webkit-text-stroke: 0; }
    :host([data-ui="fresh"]) .hdr-star,
    :host([data-ui="compact"]) .hdr-star { -webkit-text-stroke: 0; color: var(--rm-border); }
    :host([data-ui="fresh"]) .timer-pill,
    :host([data-ui="compact"]) .timer-pill {
      background: var(--rm-accent-soft); color: var(--rm-accent-text); border-radius: 999px; padding: 6px 10px;
    }

    /* Sidebar */
    :host([data-ui="fresh"]) .rm-sidebar,
    :host([data-ui="compact"]) .rm-sidebar { width: 236px; min-width: 236px; }
    :host([data-ui="fresh"]) .rm-sidebar.collapsed,
    :host([data-ui="compact"]) .rm-sidebar.collapsed { width: 72px; min-width: 72px; }
    :host([data-ui="fresh"]) .sb-top,
    :host([data-ui="compact"]) .sb-top { padding: 20px 14px 8px; }
    :host([data-ui="fresh"]) .sb-search,
    :host([data-ui="compact"]) .sb-search { height: 44px; padding: 0 14px; border-radius: 999px; gap: 8px; }
    :host([data-ui="compact"]) .sb-search { border-radius: 12px; }
    :host([data-ui="fresh"]) .sb-search-input,
    :host([data-ui="compact"]) .sb-search-input { font-size: 14px; }
    :host([data-ui="fresh"]) .sb-new-btn,
    :host([data-ui="compact"]) .sb-new-btn {
      justify-content: center; min-height: 48px; border-radius: 999px;
      font-size: 15px; font-weight: 700; color: var(--rm-ink);
    }
    :host([data-ui="compact"]) .sb-new-btn { border-radius: 12px; }
    :host([data-ui="fresh"]) .sb-icon-only-btn { width: 48px; height: 48px; border-radius: 50%; color: var(--rm-ink); }
    :host([data-ui="compact"]) .sb-icon-only-btn { width: 48px; height: 48px; border-radius: 12px; color: var(--rm-ink); }
    :host([data-ui="fresh"]) .sb-nav,
    :host([data-ui="compact"]) .sb-nav { padding: 8px 14px 4px; }
    :host([data-ui="fresh"]) .sb-bottom,
    :host([data-ui="compact"]) .sb-bottom { padding: 8px 14px 16px; border-top: none; }
    :host([data-ui="fresh"]) .sb-item,
    :host([data-ui="compact"]) .sb-item {
      min-height: 48px; padding: 0 14px; gap: 12px; border-radius: 16px;
      font-size: 15px; font-weight: 600;
    }
    :host([data-ui="compact"]) .sb-item { border-radius: 12px; }
    :host([data-ui="fresh"]) .rm-sidebar.collapsed .sb-item,
    :host([data-ui="compact"]) .rm-sidebar.collapsed .sb-item { padding: 0; justify-content: center; }
    :host([data-ui="fresh"]) .sb-item.active,
    :host([data-ui="compact"]) .sb-item.active { background: var(--rm-accent-soft); color: var(--rm-accent-text); font-weight: 700; }
    :host([data-ui="fresh"]) .sb-timer-badge,
    :host([data-ui="compact"]) .sb-timer-badge { color: var(--rm-ink); }

    /* Phone bottom nav */
    :host([data-ui="fresh"]) .rm-bottom-nav {
      margin: 0 12px 12px; padding: 8px; gap: 4px;
      border: 1px solid var(--rm-border); border-radius: 28px;
      box-shadow: var(--rm-shadow-float); justify-content: stretch;
    }
    :host([data-ui="fresh"]) .rm-bn-btn {
      min-height: 56px; justify-content: center; border-radius: 20px;
      gap: 3px; padding: 4px 2px; font-size: 11.5px; font-weight: 600;
      color: var(--rm-text-secondary); min-width: 0;
    }
    :host([data-ui="fresh"]) .rm-bn-btn.active { background: var(--rm-accent-soft); color: var(--rm-accent-text); font-weight: 700; }
    :host([data-ui="compact"]) .rm-bottom-nav { padding: 0; box-shadow: none; }
    :host([data-ui="compact"]) .rm-bn-btn {
      min-height: 60px; justify-content: center; gap: 4px;
      font-size: 11.5px; font-weight: 600; color: var(--rm-text-secondary); min-width: 0;
    }
    :host([data-ui="compact"]) .rm-bn-btn.active { color: var(--rm-accent-text); font-weight: 700; }
    :host([data-ui="compact"]) .rm-bn-btn.active::before {
      content: ""; position: absolute; top: -1px; left: 30%; right: 30%;
      height: 3px; border-radius: 0 0 3px 3px; background: var(--rm-accent);
    }
    :host([data-ui="fresh"]) .rm-bn-badge,
    :host([data-ui="compact"]) .rm-bn-badge {
      color: var(--rm-ink); font-size: 11px; min-width: 18px; border-radius: 9px; padding: 1px 5px;
    }

    /* + button (Fresh) */
    .rm-fab {
      position: absolute; right: 24px; bottom: 104px; z-index: 11;
      width: 56px; height: 56px; padding: 0; border: none; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      background: var(--rm-text); color: var(--rm-bg-main);
      box-shadow: 0 8px 20px rgba(0,0,0,0.28);
    }
    .rm-fab ha-icon { --mdc-icon-size: 26px; }

    /* Menus, timers, buttons */
    :host([data-ui="fresh"]) .rm-mobile-menu,
    :host([data-ui="compact"]) .rm-mobile-menu { border-radius: 28px 0 0 28px; }
    :host([data-ui="fresh"]) .rm-mm-item:hover:not(:disabled),
    :host([data-ui="compact"]) .rm-mm-item:hover:not(:disabled) { color: var(--rm-accent-text); }
    :host([data-ui="fresh"]) .timers-view,
    :host([data-ui="compact"]) .timers-view { padding: 16px 20px 24px; }
    :host([data-ui="fresh"]) .timer-card,
    :host([data-ui="fresh"]) .timer-preset-card,
    :host([data-ui="compact"]) .timer-card,
    :host([data-ui="compact"]) .timer-preset-card { border-radius: var(--rm-radius-card); background: var(--rm-bg-surface); }
    :host([data-ui="compact"]) .timer-card,
    :host([data-ui="compact"]) .timer-preset-card { border-color: transparent; }
    :host([data-ui="fresh"]) .text-btn,
    :host([data-ui="fresh"]) .action-btn,
    :host([data-ui="compact"]) .text-btn,
    :host([data-ui="compact"]) .action-btn { min-height: 44px; }
    :host([data-ui="fresh"]) .text-btn,
    :host([data-ui="fresh"]) .action-btn { border-radius: 999px; padding: 0 18px; }
    :host([data-ui="compact"]) .text-btn,
    :host([data-ui="compact"]) .action-btn { border-radius: 12px; padding: 0 16px; }
    :host([data-ui="fresh"]) .text-btn,
    :host([data-ui="compact"]) .text-btn { color: var(--rm-ink); }
    :host([data-ui="fresh"]) .alarm-btn.accent,
    :host([data-ui="compact"]) .alarm-btn.accent { color: var(--rm-ink); }
  `}try{customElements.define("recipe-manager-card",ke)}catch{}window.customCards=window.customCards||[],window.customCards.push({type:"recipe-manager-card",name:i("Recipe Manager"),description:i("Manage, browse, and plan meals with your recipe collection."),preview:!1});
