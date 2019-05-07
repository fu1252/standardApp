<template>
    <div>
      
       <div class="notify":style={backgroundColor:computedColor} :class={active:showNotify}>
         <div class="inner">{{text}}</div>
       </div>

    </div>
  </template>
  
  <script>
  export default {
    props:{
      show:Boolean,
      text:{
        type:String,
        default:'我是通知'
      },
      color:{
        type:String,
        default:'blue'
      }
    },
    data() {
      return {
        showNotify:this.show,
        notifyColor:this.color
      }
    },
    computed: {
      computedColor(){
       switch (this.color) {
         case 'red':
           return '#F56C6C'
           break;
         case 'blue':return '#438ccb'
       }
      }
    },
    watch: {
      show:function(a,b){
        this.showNotify=a
        if(this.showNotify === true ){
          setTimeout(() => {
            this.$emit("close")
          }, 3000);
        }
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
    @import "./styles/var.scss";
 
 .notify{
  position: fixed;
  top:0;
  z-index: 1999;
  left: 0;
  height: 50px;
  border-radius:0 0 8px 8px;
  width: 100%;
  color:rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  background-color:$blue;
  transition:all 0.6s ease-out;
  transform: translateY(-50px);
  &.active{
    transform:translateY(0px);
    transition:all 0.3s ease-out;
  }
 }
  </style>