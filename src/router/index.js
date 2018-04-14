import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '../pages/goodsDetail.vue';
import Msg from '../components/Message.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home.vue'], resolve),   //懒加载模式
    meta: {
      title: 'home'
    }
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
        path: 'msg',
        component: Msg
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history',  //访问路径不带#号
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 100, y: 900}
  }
})
