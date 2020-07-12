<template>
  <div id="App">
    <van-nav-bar title="分类"></van-nav-bar>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item to="/classify/mon" title="月总计" />
      <van-sidebar-item to="/classify/year" title="年总计" />
      <van-sidebar-item to="/classify/all" title="总计" />
    </van-sidebar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      currentPage: 1,
    };
  }
};
</script>

<style>
</style>