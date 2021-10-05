<template>
  <h2> 404 找不到頁面</h2>
</template>
<script>
export default {
  created() {
    console.log(this);
    console.log(this.$route);
    console.log(this.$route.params);
  },
};
</script>
