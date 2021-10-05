import { createRouter, createWebHashHistory } from 'vue-router';
// 載入外部元件，法1
import Home from '../views/Home.vue';

// 將 routes 獨立出來寫
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 載入外部元件，法2
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/newPage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'yoYo/:c',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'RouterNavigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },
          },
          {
            path: 'b',
            components: {
              right: () => import('../views/ComponentB.vue'),
            },
          },
        ],
      },
    ],
  },

  // 404 頁面
  // :pathMatch 是自定義名的動態路由，會和輸入的網址進行匹配，並新增為路由參數 this.$route.params.自定義名
  // (.*) 為一正則表達式，會篩選網址的結構是否匹配， . 任何不為 \r、\n 的字，* 可選擇(非必選)可重複
  // * 可選擇可重複，且參數會以陣列的方式儲存
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },

  // 重新導回首頁，優先權大
  // 範例設定為在 newPage 頁面下，輸入任何路由皆會導回首頁
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 被點選的，套用 bootstrap 的樣式 class="active"
  linkActiveClass: 'active',
  // 調整滾輪的位置
  scrollBehavior(to, from, savedPosition) {
    // to 參數，目前頁面； from 參數，上一頁；savedPosition ，原先頁面的滾輪位置
    console.log(to, from, savedPosition);
    if (to.fullPath.match('newPage')) {
      // 點選元件切換，預設滾輪的位置不會改變(在頁尾就持續在頁尾)，此功能設只當元件切換成 newPage 時，滾輪移至最上方
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
// export 出給其他元件做使用
// 在 main.js 中有 import 此功能，並用 use.() 來使用
