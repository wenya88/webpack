import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './index'

Vue.use(VueRouter);

const RouterConfig={
    mode:'history',
    routes:Routes
}
const router = new VueRouter(RouterConfig);

export default router;