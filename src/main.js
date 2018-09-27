import Vue from 'vue'
import App from './App.vue'
import axios from './config/axios'
import Bus from './config/bus'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { querystring,global } from './config/global';

axios.defaults.baseURL='http://192.168.1.21';  //axios默认请求地址

Vue.prototype.$axios=axios; //axios方法
Vue.prototype.$qs=querystring; //全局qs方法
Vue.prototype.Global=global; //全局请求头
Vue.use(Bus) //Bus方法
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})
