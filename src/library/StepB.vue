<template>
  <div>
    
    <div class="steps">
      <div class="item" :class={active:isActive1}>
        <div class="icon"><i v-if="isActive1" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        <div class="text">【城市】物流状态1 </div>
        <div class="content">2016-07-12 12:40</div>
        <div class="line"></div>
      </div>
      <div class="item" :class={active:isActive2}>
        <div class="icon"><i v-if="isActive2" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        <div class="text">【城市】物流状态1</div>
        <div class="content">2016-07-12 12:40</div>
        <div class="line"></div>
      </div>
      
      <div class="item" :class={active:isActive3}>
        <div class="icon"><i v-if="isActive3" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
        <div class="text">【城市】物流状态1</div>
        <div class="content">2016-07-12 12:40</div>

        <div class="line"></div>
        <div class="item1" :class={active:isActive4}>
          <div class="icon1"><i v-if="isActive4" class="fa fa-check-circle"></i><i v-else class="fa fa-circle"></i> </div>
          <div class="text1">快件已发货</div>
          <div class="content">2016-07-10 09:30</div>

        </div>
      </div>
    </div>
   <Button @click='handleStep' mainBtn width='100px' text='下一步'></Button>

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
.active>.content{
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  
}
.item1{
  position: absolute;
 width: 100%;
  bottom: -100%;
   .icon1{
    font-size: 20px;
     box-shadow:0 5px 0px 5px white;
   }
   .text1{
     margin-bottom: 10px;
     transform: translate(16%,-110%)
   }
}

.item{
  position: relative;
  flex:1 0 auto;
  display:flex;
  width: 50%;
  justify-content: flex-start;
  flex-direction: column;
}
.content{
  position: absolute;
  top:50%;
  left:17%;
  width: 100%;
  height: 30px;
}
.text{
  transform:translate(17%,-110%);
  margin-bottom: 10px;
}
.icon{
  font-size: 20px;
  transition: all 0.3s ease-out;
}

.line{
  position: absolute;
  top: 50%;
  left: 8px;
  width: 2px;
  height: 50%;
  background-color: brown;
}
</style>