<template>
  <div class="tab-wrapper">
    <div class="tab">
      <div class="line" :style={transform:computedClass}></div>
      <div class="nav-item" @click='onClick' :class="[currentIndex==item.id?'active':'']"
        v-for="(item, index) in navList" :key="index" :data-index='item.id'>{{item.title}}</div>
    </div>
    <div class="content">{{filterData}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentIndex: 1,
        navList: [
          { title: '标签1', id: 1,content:'的方式发送到沙发说的'}, 
          { title: '标签2', id: 2,content:'问问我让他'}, 
          { title: '标签3', id: 3,content:'威尔而奋斗 的方式发送到沙发说的'}, 
          { title: '标签4', id: 4,content:'二维2343542的方式发送到沙发说的'}
          ],
        elemLeft: null,
      }
    },
    computed: {
      filterData(){
        return this.navList.filter(item=>item.id==this.currentIndex)[0].content
      },
      computedClass() {
        return `translateX(${this.elemLeft}px)`

      }

    },
    methods: {
      onClick(e) {
        this.currentIndex = e.target.dataset.index
        this.elemLeft = e.target.offsetLeft
				
      },
    },
    mounted() {
    },
  }
</script>
<style lang='scss' scoped>

  .content{
    height: 50px;
    width: 100%;
    border-top: 1px solid #aaa;
    background-color: rgb(255, 255, 255);
  }
  .tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 20px;
    position: relative;
  }

  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    border-radius: 5px;
    background-color: red;
    transform: translateX(18px);
    transition: all 1s ease-out;
  }

  .nav-item.active {
    color: red;
  }
</style>