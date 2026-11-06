import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import PhoneFrame from './PhoneFrame.vue';
import DemoPlayground from './DemoPlayground.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    // The live card sits beside the headline on the home page
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(PhoneFrame, { ui: 'fresh', theme: 'sunset', mode: 'light', hero: true }),
    });
  },
  enhanceApp({ app }) {
    app.component('PhoneFrame', PhoneFrame);
    app.component('DemoPlayground', DemoPlayground);
  },
};
