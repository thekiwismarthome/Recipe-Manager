<script setup>
import { ref, reactive, watch } from 'vue';
import PhoneFrame from './PhoneFrame.vue';

const state = reactive({ ui: 'fresh', theme: 'sunset', mode: 'light', wide: false });
const phone = ref(null);
const stageDark = ref(false);

const THEMES = [
  { id: 'meadow', name: 'Meadow', swatch: '#0F7B5A' },
  { id: 'slate', name: 'Slate', swatch: '#3B4BA8' },
  { id: 'sunset', name: 'Sunset', swatch: '#B8481F' },
];

function send(extra = {}) {
  const w = phone.value?.frame?.contentWindow;
  if (w) w.postMessage({ rmDemo: true, ui: state.ui, theme: state.theme, mode: state.mode, ...extra }, '*');
}
// Changing a control updates the running card without reloading it
watch(() => [state.ui, state.theme, state.mode], () => { stageDark.value = state.mode === 'dark'; send(); });
function reset() { send({ reset: true }); }
const SCREENS = [
  { id: 'grid', name: 'Recipes' },
  { id: 'detail', name: 'A recipe' },
  { id: 'planner', name: 'Planner' },
  { id: 'shopping', name: 'Shopping' },
  { id: 'timers', name: 'Timers' },
  { id: 'settings', name: 'Settings' },
];
function go(id) { send({ view: id }); }
</script>

<template>
  <div class="playground">
    <div class="controls" role="group" aria-label="Demo controls">
      <h3>Appearance</h3>
      <div class="field">
        <span id="lbl-ui">Interface style</span>
        <div class="seg" role="group" aria-labelledby="lbl-ui">
          <button v-for="u in ['fresh', 'compact']" :key="u" :aria-pressed="state.ui === u" @click="state.ui = u">{{ u === 'fresh' ? 'Fresh' : 'Compact' }}</button>
        </div>
      </div>
      <div class="field">
        <span id="lbl-theme">Theme</span>
        <div class="themes" role="group" aria-labelledby="lbl-theme">
          <button v-for="t in THEMES" :key="t.id" :aria-pressed="state.theme === t.id" @click="state.theme = t.id">
            <i :style="{ background: t.swatch }" />{{ t.name }}
          </button>
        </div>
      </div>
      <div class="field">
        <span id="lbl-mode">Colour mode</span>
        <div class="seg" role="group" aria-labelledby="lbl-mode">
          <button v-for="m in ['light', 'dark']" :key="m" :aria-pressed="state.mode === m" @click="state.mode = m">{{ m === 'light' ? 'Light' : 'Dark' }}</button>
        </div>
      </div>
      <div class="field">
        <span id="lbl-size">Screen</span>
        <div class="seg" role="group" aria-labelledby="lbl-size">
          <button :aria-pressed="!state.wide" @click="state.wide = false">Phone</button>
          <button :aria-pressed="state.wide" @click="state.wide = true">Tablet</button>
        </div>
      </div>
      <div class="field">
        <span id="lbl-go">Jump to</span>
        <div class="screens" role="group" aria-labelledby="lbl-go">
          <button v-for="sc in SCREENS" :key="sc.id" @click="go(sc.id)">{{ sc.name }}</button>
        </div>
      </div>
      <button class="reset" @click="reset">Reset sample data</button>
    </div>

    <div class="stage" :class="{ dark: stageDark }">
      <PhoneFrame ref="phone" :ui="state.ui" :theme="state.theme" :mode="state.mode" :wide="state.wide" />
    </div>

    <div class="try">
      <h3>Things to try</h3>
      <ul>
        <li>Search for "pasta", or open the tune button to filter and sort by rating.</li>
        <li>Open a recipe and change the servings with + and −. Every quantity follows.</li>
        <li>Tap <b>Convert to metric</b> on the Ingredients tab.</li>
        <li>On <b>Directions</b>, tap a time such as "11 minutes" to start a timer.</li>
        <li>Press <b>Plan</b> to put a recipe in the planner, then look at <b>Planner</b>.</li>
        <li>Add ingredients to the shopping list, then open <b>Shopping</b>.</li>
        <li>Press + and paste any web address to see the scrape flow with a sample result.</li>
      </ul>
      <p class="note">This is the real card running on sample recipes in your browser. The pictures are illustrations. Nothing is saved, and it resets when you reload.</p>
    </div>
  </div>
</template>

<style scoped>
.playground { display: grid; grid-template-columns: 250px minmax(0, 1fr) 270px; gap: 28px; align-items: start; }
.controls, .try { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 18px; min-width: 0; }
h3 { margin: 0; font: 600 12px var(--vp-font-family-mono); letter-spacing: .08em; text-transform: uppercase; color: var(--vp-c-text-2); border: 0; padding: 0; }
.field { display: flex; flex-direction: column; gap: 8px; }
.field > span { font-weight: 600; font-size: 14px; }
.seg { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; background: var(--vp-c-default-soft); padding: 3px; border-radius: 11px; gap: 3px; }
.seg button { border: 0; background: transparent; padding: 8px 6px; border-radius: 8px; font: 600 14px var(--vp-font-family-base); color: var(--vp-c-text-2); cursor: pointer; }
.seg button[aria-pressed="true"] { background: var(--vp-c-bg); color: var(--vp-c-text-1); box-shadow: 0 1px 3px rgba(0,0,0,.18); }
.screens { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; }
.screens button { border: 1.5px solid var(--vp-c-divider); background: var(--vp-c-bg); border-radius: 10px; padding: 7px 8px; font: 600 13px var(--vp-font-family-base); color: var(--vp-c-text-1); cursor: pointer; }
.screens button:hover { border-color: var(--vp-c-brand-1); }
.themes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.themes button { border: 2px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg); padding: 7px; cursor: pointer; font: 600 12px var(--vp-font-family-base); color: var(--vp-c-text-1); display: flex; flex-direction: column; gap: 6px; }
.themes button[aria-pressed="true"] { border-color: var(--vp-c-brand-1); }
.themes i { height: 24px; border-radius: 7px; display: block; }
.reset { border: 1.5px solid var(--vp-c-divider); background: var(--vp-c-bg); border-radius: 999px; padding: 9px 14px; font: 600 14px var(--vp-font-family-base); color: var(--vp-c-text-1); cursor: pointer; }
.reset:hover { border-color: var(--vp-c-brand-1); }
button:focus-visible { outline: 3px solid var(--vp-c-brand-1); outline-offset: 2px; }
.stage { display: flex; justify-content: center; padding: 30px 14px; border-radius: 32px; background: var(--vp-c-brand-soft); transition: background .3s; min-width: 0; }
.stage.dark { background: #181311; }
.try ul { margin: 0; padding-left: 18px; list-style: disc; display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; }
.note { font-size: 13px; color: var(--vp-c-text-2); background: var(--vp-c-default-soft); border-radius: 12px; padding: 12px 14px; margin: 0; }
@media (max-width: 1100px) { .playground { grid-template-columns: minmax(0, 1fr); } .stage { order: -1; } }
</style>
