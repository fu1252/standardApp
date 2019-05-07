<template>
<div>

     <!--------    手风琴版本：  ------->

    <div v-for="(item, index) in collapseList" :key="index" >
        <CollapseB :propObj='item' :propElemArr='elemArr' @propOnElemArr='onELemArr'></CollapseB>
    </div>
</div>
</template>
<script>
  import data from './data';
  import CollapseB from './CollapseB';
export default {
  components:{CollapseB},
data() {
  return {
    collapseList:[],
    elemArr:{
      a1:false,
      a2:false,
      a3:false,
    },
  }
},
methods: {
  onELemArr(id){
   Object.keys(this.elemArr).forEach(i=>{
     if(i==id){ this.elemArr[id]=!this.elemArr[id]}
     else{
       this.elemArr[i]=false
     }
   })
  }
},
mounted() {
  this.collapseList=data.collapseList
},
}
</script>
<style lang='scss' scoped>

</style>