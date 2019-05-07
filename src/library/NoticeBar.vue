<template>
  <div class="swiper-wrapper">

    <i class="fa fa-volume-up icon"></i>
    <i class="fa fa-angle-right icon2" @click='$emit("handle",param)'></i>
      <swiper class="swiper" autoplay="true" interval='5000' duration='5000' 
      easing-function='linear' circular='true' display-multiple-items='2'
      @catchtouchmove='catchTouchMove'>
          <block v-for="(item, index) in text" :key="index">
              <swiper-item>
                  <h2>{{item}}</h2>
              </swiper-item>
          </block>
      </swiper>

  </div>
</template>

<script>
export default {
  props:{
   text:{
     type:Array,
     default:[
      '水电费是否是 撒旦飞洒地方水电费士大夫撒',
      '水电费是否是 撒旦飞洒地方水电费士大夫撒',
      '水电费是否是 撒旦飞洒地方水电费士大夫撒',
    ],
   }
  },
  data() {
    return {
    }
  },
  methods: {
    catchTouchMove(res){
return
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper{
    background-color: #fffbe8;
    height: 50px;
    color:#ed6a0c ;
    
  }
  .swiper-wrapper{
    position: relative;
    &:before{
        position: absolute;
        content:'';
        top:0px;
        z-index: 8;
        left:0px;
        width:100%;
        height: 100%;
        background-color:transparent ;
      }  
  }
  .icon{
       position: absolute;
       
       top:0px;
       color:#ed6a0c;
       left: 0px;
       height: 50px;
       width: 30px;
       z-index: 10;
       font-size: 14px;
       text-align: center;
       line-height: 50px;
       background-color: #fffbe8;
     }
     .icon2{
       text-align: center;
      position: absolute;
       font-size: 14px;
       top:0px;
       color:#ed6a0c;
       right: 0px;
       height: 50px;
       width: 30px;
       z-index: 10;
       line-height: 50px;
       background-color: #fffbe8;
       
     }

  .swiper h2{
    line-height: 50px;
    font-size: 16px;
  }
</style>