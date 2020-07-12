<template>
  <div>
     <div id="App">
    <van-tabs v-model="active">
      <van-tab title="2019年">收入：{{koyi(2019)}}支出：{{koye(2019)}}</van-tab>
      <van-tab title="2020年">收入：{{koyi(2020)}}支出：{{koye(2020)}}</van-tab>
    </van-tabs>
  </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    ...mapState(['AllNote']),
     data() {
    return {
      active: 1,
    };
  },
  methods:{
      koyi(year){
        
           let Yincome = 0;
          for(let i=0;i<this.AllNote.length;i++){
              if(this.AllNote[i].createDate.slice(0,4)*1==year){
                 Yincome += this.AllNote[i].income
              }
          }
          return Yincome;  
       },
      koye(year){
           let Yexpent= 0;
          for(let i=0;i<this.AllNote.length;i++){
              if(this.AllNote[i].createDate.slice(0,4)*1==year){
                 Yexpent += this.AllNote[i].expent
              }
          }
          return Yexpent;  
       }
  },
   computed:{
    ...mapState(['AllNote'])
  }

}
</script>

<style>

</style>