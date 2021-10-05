<template>
  <div>
    RouterNavigation
  </div>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">push</button>
  <button type="button" @click="replace">replace</button>
  <button type="button" @click="go">GO</button>
  <button type="button" @click="addRoute">新增路由(此按鈕上去會在路由表中建立新路由)</button>
</template>

<script>
export default {
  methods: {
    // 此非使用預設功能，只是看看路由物件
    getRoute() {
      // 路由的屬性
      console.log(this.$route);
      // 路由的方法
      console.log(this.$router);
    },

    // 轉換到此路由，會有歷史紀錄
    // 從 # 後的內容，非直接換整個網址
    push() {
      this.$router.push('/newpage/dynamicRouterByProps/fea8be3e64777240');
    },

    // 轉換到此路由，沒有歷史紀錄
    replace() {
      this.$router.replace('/newpage/dynamicRouterByProps/fea8be3e64777240');
    },

    // 透過操作歷史紀錄，轉換網頁，上/下幾頁
    go() {
      this.$router.go(-1);
    },

    // 新增路由表，格式同路由表，但 import 路徑要調整為相對於這個檔案的位置
    addRoute() {
      this.$router.addRoute({
        path: '/AddNewPage',
        name: '新增新頁面',
        component: () => import('./NewPage.vue'),
      });
    },
  },
};
</script>
