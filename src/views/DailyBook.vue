<template>
  <div id="App">
    <van-nav-bar title="日常账本" left-text="返回" @click-left="goBlack">
       <van-icon slot="right" @click="$router.push('/mine')" >{{userInfo.userName}}</van-icon>>
    </van-nav-bar>
    <van-tabs v-model="activeName">
      <van-tab title="收入" name="a">
        <van-field
          label="今日收入"
          placeholder="请输入今日收入"
          readonly
          clickable
          :value="income"
          @touchstart.native.stop="show = true"
        />
       
        <van-number-keyboard v-model="income" :show="show" :maxlength="6" @blur="show = false" />
      </van-tab>
      <van-tab title="支出" name="b">
        <van-field
          label="今日支出"
          placeholder="请输入今日支出"
          readonly
          clickable
          :value="expent"
          @touchstart.native.stop="show = true"
        />
        <van-button type="primary" @click='ok'>确定记账</van-button>
        <van-number-keyboard v-model="expent" :show="show" :maxlength="6" @blur="show = false" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serve.config.js";
import {mapState} from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
   
    return {
      activeName: "a",
      show: true,
      income: "",
      expent: "",
      
    };
  },
  methods: {
     ...mapActions(['onNoteI','onNoteE','onNoteAll']),
    ...mapState(['userInfo']),
    goBlack() {
      this.$router.go(-1);
    },
    onInput() {
      //  Toast(value);
    },
    onDelete() {
      //  Toast('删除');
    },
    ok(){
          axios({
        url: url.oneNote,
        method: "post",
        data: {
          income: this.income,
          expent: this.expent,
          userName:this.userInfo.userName,
          type: new Date().getMonth()+1
        }
      })
        .then(res => {
          if(res.data.code==200){
          this.$toast.success('添加成功');
          this.$router.push('/');
          let income = 0;
          let expent = 0;
          for(let i =0; i<res.data.message.length;i++){
            income+=res.data.message[i].income;
            expent+=res.data.message[i].expent;
          }
          this.onNoteI(income);
          this.onNoteE(expent);
          this.onNoteAll(res.data.Allnote)
          console.log(typeof res.data.Allnote[0].createDate);
          
          }
       
        })
        .catch(err => {
           console.log(err);
          this.$toast.success('添加失败');
        });
    }
  },
   computed:{
    
    ...mapState(['userInfo']),
    
  }
}
</script>

<style>
</style>