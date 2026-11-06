<script setup>
import { computed, ref } from 'vue';
import { withBase } from 'vitepress';

// A phone showing the real card running on sample data.
const props = defineProps({
  ui: { type: String, default: 'fresh' },
  theme: { type: String, default: '' },
  mode: { type: String, default: 'light' },
  view: { type: String, default: 'grid' },
  recipe: { type: String, default: '1' },
  hero: { type: Boolean, default: false },
  wide: { type: Boolean, default: false },
});
const frame = ref(null);
const src = computed(() => withBase(`/sandbox/app.html?ui=${props.ui}&theme=${props.theme}&mode=${props.mode}&view=${props.view}&recipe=${props.recipe}`));
defineExpose({ frame });
</script>

<template>
  <div class="phone" :class="{ wide, hero }">
    <div class="screen">
      <iframe ref="frame" :src="src" loading="lazy" :title="`Recipe Manager demo, ${ui} design`" />
    </div>
  </div>
</template>

<style scoped>
/* The card is laid out as on a 390px phone, then scaled to fit the frame */
.phone { --s: .9077; width: 372px; height: 764px; border-radius: 48px; background: #0b0d0c; padding: 9px; box-shadow: 0 30px 60px -22px rgba(0,0,0,.45), 0 0 0 1.5px #2a2f2d inset; flex-shrink: 0; max-width: 100%; transition: width .3s; margin: 0 auto; }
.phone.wide { width: min(860px, 100%); height: 700px; border-radius: 30px; padding: 12px; }
.screen { width: 100%; height: 100%; border-radius: 40px; overflow: hidden; background: #000; position: relative; }
.wide .screen { border-radius: 20px; }
iframe { border: 0; display: block; background: transparent; width: 390px; height: calc(100% / var(--s)); transform: scale(var(--s)); transform-origin: 0 0; }
.wide iframe { width: 100%; height: 100%; transform: none; }
.hero { position: relative; z-index: 1; }
@media (max-width: 400px) { .phone:not(.wide) { --s: .8; width: 336px; height: 690px; } .phone:not(.wide) iframe { width: 390px; } }
</style>
