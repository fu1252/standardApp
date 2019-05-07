<template>
  <div>
    <div class="wrapper">
      <i class="fa icon" @click='onclick' :class='aa' data-index="2"></i>
      <i class="fa icon" @click='onclick' :class='bb' data-index="3"></i>
      <i class="fa icon" @click='onclick' :class='cc' data-index="4"></i>
      <i class="fa icon" @click='onclick' :class='dd' data-index="5"></i>
      <i class="fa icon" @click='onclick' :class='ee' data-index="6"></i>
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:Number,
    }
  },
  data() {
    return {
      currentIndex:1,
      isChecked:false,
      Val:null,
    }
  },
  created() {
    this.addValue(this.value)    
  },
  computed: {
    aa(){return this.currentIndex>1 && !this.isChecked?'fa-heart':'fa-heart-o'},
    bb(){return this.currentIndex>2 && !this.isChecked?'fa-heart':'fa-heart-o'},
    cc(){return this.currentIndex>3 && !this.isChecked?'fa-heart':'fa-heart-o'},
    dd(){return this.currentIndex>4 && !this.isChecked?'fa-heart':'fa-heart-o'},
    ee(){return this.currentIndex>5 && !this.isChecked?'fa-heart':'fa-heart-o'},
  },
  methods: {
    addValue(value){
      this.currentIndex=Number(value)+1      
    },
    onclick(e){
      let index=e.mp.target.dataset.index
      if (index === this.currentIndex) {
        console.log('数据相同');
        this.isChecked=!this.isChecked
      }
      this.currentIndex=index
    }
  },
}
</script>

<style >
  .icon{
    font-size: 25px;
    margin: 0 1PX;
  }
  .fa-heart{
    color: red;
    animation: flash 1s ease
  }
  @keyframes flash{
           0% {transform: scale(1)}
           50% {transform: scale(1.3);filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.568))}
           100% {transform: scale(1)}
        }
</style>