<template>
  <div class="progress-wrapper">
     
    <div class="progress">
      <div class="text" :style={left:widthText}>{{widthText}}</div>
      <div class="line" :style={width:widthText}></div>
    </div>


  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:Number,
      default:10
    }
  },
  computed: {
    widthText(){
     if(this.value<=100){
      return this.value+'%'
     }else{
       return '100%'
     }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import './styles/var';
.progress-wrapper{
  padding: 10px 50px;
}
.text{
  position: absolute;
  top:-8px;
  left: 0%;
  background-color: $blue;
    padding: 2px 5px;
font-size: 10px;
transition: all 2s ease-out;
text-align: center;
color: white;
z-index: 10;
  border-radius: 20px;
}
.line{
transition: all 2s ease-out;
  position: absolute;
  top:0px;
  left: 0px;
  content:'';
  z-index: 5;
  top:0px;
  background-color: $blue;
  width: 0%;
  height: 3px ;
}
.progress{
  width: 100%;
  height: 3px;
  background-color: $border1;
  position: relative;
}

</style>