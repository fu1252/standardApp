<template>
    <div class="badge" @click='$emit("propBadgeClick",param)'>
      <span class="text">{{text}} <span class="num">{{number}}</span></span>
    </div>

</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:'我是标签'
    },
    number:{
      type:Number,
      default:99
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import './styles/var';

.badge{
  padding:12px;
  display: inline-block;
  text-align: center;
  background-color: $border3;
  font-size: 14px;
}
.badge:active{
  background-color: rgba(170, 210, 255, 0.589);
}
.text{
  position: relative;

}
.num{
  position: absolute;
  right: -8px;
  top:-8px;
  padding:1px 2px;
  background-color:$red;
  color:white;
  border-radius: 15px;
  font-size: 10px;
}

</style>