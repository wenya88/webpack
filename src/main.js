import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Bus from './config/bus'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios=axios;
Vue.use(Bus)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})
