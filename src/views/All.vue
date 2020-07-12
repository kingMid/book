<template>
  <div>
     <van-tabs v-model="active">
      <van-tab title="总收入">收入：{{koALL()}}</van-tab>
      <van-tab title="总支出">支出：{{ koyALL()}}</van-tab>
    </van-tabs>
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
      koALL(){
           let Aincome = 0;
          for(let i=0;i<this.AllNote.length;i++){
              
                 Aincome += this.AllNote[i].income
              
          }
          return Aincome;  
       },
      koyALL(){
           let Aexpent= 0;
          for(let i=0;i<this.AllNote.length;i++){
              
                 Aexpent += this.AllNote[i].expent
              
          }
          return Aexpent;  
       }
  },
   computed:{
    ...mapState(['AllNote'])
  }
}
</script>

<style>

</style>