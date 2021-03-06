import Vue from 'vue';
import App from './App.vue';
import router from './router'
import VueMeta from 'vue-meta'

import jQuery from 'jquery'
global.$ = jQuery;
global.jQuery = jQuery;


require('@/assets/css/material-kit.css');

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
