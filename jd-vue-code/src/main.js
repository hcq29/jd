// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.机票
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/js/iconfont.js';
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
