<template>
<div>
    <div class="tab-b">
        <div class="item-a item" :class='[currentTabB==1?"active":""]' @click='tabClick(1)'>标签1</div>
        <div class="item-b item" :class='[currentTabB==2?"active":""]' @click='tabClick(2)'>标签2</div>
        <div class="item-c item" :class='[currentTabB==3?"active":""]' @click='tabClick(3)'>标签3</div>
      </div>
</div>
</template>
<script>
export default {
data() {
  return {
    currentTabB: 1,
  }
},
methods: {
  tabClick(id) {
        this.currentTabB = id;
      },
},
}
</script>
<style lang='scss' scoped>
.tab-b {
    width: 500px;
  }

  .item {
    font-size: 16px;
    color: red;
    padding: 10px 40px;
    display: inline-block;
    border: 1px solid red;
  }

  .item:first-child {
    border-radius: 3px 0 0 3px;
    border-right: none;
  }

  .item:last-child {
    border-radius: 0 3px 3px 0;
    border-left: none;
  }

  .item.active {
    background-color: red;
    color: white;
  }
</style>