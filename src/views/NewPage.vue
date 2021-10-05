<template>
  <div class="row">
    <div class="col-4">
      選單
      <!-- 建立按鈕來切換路由 -->
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">A</router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">B</router-link>
        <router-link to="/newpage/namedView/c2a"
          class="list-group-item list-group-item-action">C2A</router-link>
        <router-link to="/newpage/namedView/b"
          class="list-group-item list-group-item-action">2b</router-link>
      </div>
    </div>
    <div class="col-8">
      <!-- 路由渲染的位子 -->
      <router-view></router-view>
    </div>
  </div>
</template>
