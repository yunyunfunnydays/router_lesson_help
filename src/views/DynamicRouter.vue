<template>
  <div>DynamicRouter</div>
  <div>{{this.$route.params.c}}</div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    console.log(this);
    const b = this.$route.params.c;
    axios.get(`https://randomuser.me/api/?seed=${b}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
