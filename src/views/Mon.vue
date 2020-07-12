<template>
  <div id="App">
    <van-tabs v-model="active">
      <van-tab title="一月" >收入：{{koo(1)}}支出：{{kol(1)}}</van-tab>
      <van-tab title="二月" >收入：{{koo(2)}}支出：{{kol(2)}}</van-tab>
      <van-tab title="三月" >收入：{{koo(3)}}支出：{{kol(3)}}</van-tab>
      <van-tab title="四月">收入：{{koo(4)}}支出：{{kol(4)}}</van-tab>
      <van-tab title="五月">收入：{{koo(5)}}支出：{{kol(5)}}</van-tab>
      <van-tab title="六月">收入：{{koo(6)}}支出：{{kol(6)}}</van-tab>
      <van-tab title="七月">收入：{{koo(7)}}支出：{{kol(7)}}</van-tab>
      <van-tab title="八月">收入：{{koo(8)}}支出：{{kol(8)}}</van-tab>
      <van-tab title="九月">收入：{{koo(9)}}支出：{{kol(9)}}</van-tab>
      <van-tab title="十月">收入：{{koo(10)}}支出：{{kol(10)}}</van-tab>
      <van-tab title="十一月">收入：{{koo(11)}}支出：{{kol(11)}}</van-tab>
      <van-tab title="十二月">收入：{{koo(12)}}支出：{{kol(12)}}</van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
     ...mapState(['AllNote']),
    data() {
    return {
      active: 2,
    };
  },
   methods: {
       koo(lop){
           let Mincome = 0;
          for(let i=0;i<this.AllNote.length;i++){
              if(this.AllNote[i].type==lop){
                 Mincome += this.AllNote[i].income
              }
          }
          return Mincome;  
       },
       kol(lop){
           let Mexpent= 0;
          for(let i=0;i<this.AllNote.length;i++){
              if(this.AllNote[i].type==lop){
                 Mexpent += this.AllNote[i].expent
              }
          }
          return Mexpent;  
       }
   },
  
  computed:{
    ...mapState(['AllNote'])
  }
};
</script>

<style>
</style>