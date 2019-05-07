<template>
  <div>
    <div class="tag">标签</div>
    <div class="tag blue">士大夫撒</div>
    <div class="tag red">标</div>
    <div class="tag red">34343 电风扇</div>
  </div>
</template>

<script>
export default {
  
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