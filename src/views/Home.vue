<template>
  <div id="App">
    <van-nav-bar title="记账">
      <van-icon slot="right" @click="$router.push('/mine')">{{userInfo.userName}}</van-icon>>
    </van-nav-bar>
    <van-row type="flex" justify="center">
      <van-col span="6" v-model="mons" style="border: 2px solid #000; " >{{mons}}月份支出：{{expent}}</van-col>
      <van-col span="6" v-model="mons" style="margin-left:1rem;   border: 2px solid #000;">{{mons}}月份收入：{{incom}}</van-col>
    </van-row>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />
    <van-button type="primary" class="btn" to="/dailybook">添加记账</van-button>
    <!-- 上传图片
    <van-uploader :after-read="afterRead" /> -->
    
    
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {

    let Time = new Date();
    let  mon = Time.getMonth() + 1;
    return {
      date: "",
      show: false,
      mons:mon,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  },
  computed:{
    ...mapState(['userInfo','incom','expent','AllNote'])
  }
};
</script>

<style lang="scss">
.btn{
  margin-left: 2.5rem;
}
</style>