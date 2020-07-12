<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="notes-o" to="/">记账</van-tabbar-item>
      <van-tabbar-item icon="records" to="classify">分类</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine">我的</van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss">

</style>
