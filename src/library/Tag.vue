<template>
  <div>
    <div class="tag" v-for="(item, index) in dataList" :key="index" :class='item.color'>
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dataList:{
      default:[{text:'地方'},{text:'的',color:'red'},{text:'王夫人',color:'blue'},{text:'递四方速递'},{text:'电风扇'}],
      type:Array,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/var.scss';

  .tag{
    padding: 4px 6px;
    font-size: 14px;
    background-color: $green;
    margin:5px;
    display: inline-block;
    border-radius: 3px;
    color:white;
  }
.blue{
  background-color: $blue;
}
.red{
  background-color: $red;
}

</style>