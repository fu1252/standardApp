<template>
  <div>
    
    <div class="steps">
      <div class="item" :class={active:isActive1}>
        <div class="text">买家下单</div>
        <div class="icon"><i v-if="isActive1" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        <div class="line"></div>
      </div>
      <div class="item" :class={active:isActive2}>
        <div class="text">买家下单</div>
        <div class="icon"><i v-if="isActive2" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        <div class="line"></div>
      </div>
      
      <div class="item" :class={active:isActive3}>
        <div class="text">买家下单</div>
        <div class="icon"><i v-if="isActive3" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        <div class="line"></div>
        <div class="item1" :class={active:isActive4}>
          <div class="text1">颠倒是非</div>
          <div class="icon1"><i v-if="isActive4" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        </div>
      </div>
    </div>
    <Button mainBtn width='50px' text='下一步' @click='handleStep'></Button>


  </div>
</template>

<script>
  import Button from './Button';
export default {
  components:{Button},
  data() {
    return {
      currentIndex:0
    }
  },
  computed: {
    isActive1(){
      if(this.currentIndex >=1){
        return true
      }else{return false}
    },
    isActive2(){
      if(this.currentIndex >=2){
        return true
      }else{return false}
    },
    isActive3(){
      if(this.currentIndex >=3){
        return true
      }else{return false}
    },
    isActive4(){
      if(this.currentIndex >=4){
        return true
      }else{return false}
    },
  },
methods: {
  handleStep(){
  if(this.currentIndex<5){
  this.currentIndex++
  }else{
   this.currentIndex=0
  }
  }
},
}
</script>

<style lang="scss" scoped>
@import './styles/var';
.active>.text{
  color:blue;
}
.active>.icon{
  color:blue;
  transition: all 0.3s ease-out;
}
.active>.text1{
  color:blue;
}
.active>.icon1{
  color:blue;
  transition: all 0.3s ease-out;
}
.active>.line{
  background-color:blue;
  transition: all 0.3s ease-out;
}
.steps{
  display:flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  
}
.item1{
  position: absolute;
  right: 0px;
  bottom: 0px;
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
   .icon1{
    font-size: 20px;
     box-shadow:0 5px 0px 5px white;
   }
   .text1{
     margin-bottom: 10px;
     transform: translateX(1px)
   }
}

.item{
  position: relative;
  flex:1 0 auto;
  &:first-child{
    .text{
        transform: translateX(0%)
    }
  };
  &:last-child{
    >.line{
      width:60%;
    }
   }
}
.text{
  transform: translateX(-20%);
  margin-bottom: 10px;
}
.icon{
  font-size: 20px;
  transition: all 0.3s ease-out;
}

.line{
  position: absolute;
  bottom: 10px;
  left: 20px;
  z-index: -8;
  width: 75%;
  height: 2px;
  background-color: brown;
}
</style>