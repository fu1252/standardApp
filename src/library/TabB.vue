<template>
  <div class="tab-wrapper">
    <scroll-view class="box" scroll-x='true' :scroll-left='scrollValue' scroll-with-animation='true'>
      <div class="line" :style={transform:computedClass,width:currentElemWidth}></div>
      <div class="box-item" :class="[currentIndex==item.id?'active':'']" v-for="(item, index) in navList" :key="index">
        <div class="abc" :data-index='item.id' @click='onClick'>{{item.title}}</div>
      </div>
    </scroll-view>
    <div class="content">{{filterData}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentIndex: 1,
        navList: [
          { title: '标签士大夫撒1', id: 1, content: '的方式发送到沙发说的' },
          { title: '标签的2', id: 2, content: '问问我让他' },
          { title: '标签电风扇3', id: 3, content: '威尔而奋斗 的方式发送到沙发说的' },
          { title: '签4', id: 4, content: 'terter2的方式发送到沙发说的' },
          { title: '标地方签5', id: 5, content: '搜狗搜索问问我让他' },
          { title: '标签水电费', id: 6, content: '还有人提货人斗 的方式发送到沙发说的' },
          { title: '标签', id: 7, content: '567534是的发个的方式发送到沙发说的' },
        ],
        elemLeft: null,
        firstNavEleOffset: 30,
        allElem: [],
        currentElemWidth: '95px',
       
        // scrollValue:200,
      }
    },
    computed: {
      scrollValue() {
        if (this.currentIndex < 3) { return 0 } else if (this.currentIndex > 5) { return 1000 } else {
          return (this.currentIndex - 1) * 80
        }
      },
      computedClass() {
        if (this.currentIndex == 1) { return `translateX(${this.firstNavEleOffset}px)` }
        else { return `translateX(${this.elemLeft}px)` }
      },
      filterData() {
        return this.navList.filter(item => item.id == this.currentIndex)[0].content
      },
    },
    methods: {
      
      onClick(e) {
        this.currentIndex = e.target.dataset.index
        this.elemLeft = e.target.offsetLeft
        console.log(e.target.offsetLeft);
        this.getElem().then(res => this.allElem = res)
        .then(res => this.currentElemWidth = this.allElem.filter(item => item.dataset.index == this.currentIndex)[0].width + 'px')
      },
      getElem() {
        return new Promise(resolve => {
          wx.createSelectorQuery().selectAll('.abc').boundingClientRect(function (rect) {
            resolve(rect)
          })
            .exec()
        })
      }
    },
    onLoad() {
      this.getElem().then(res => this.firstNavEleOffset = res[0].left)
    }
  }
</script>
<style lang='scss' scoped>
  

  .tab-wrapper {
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }

  .box {
    width: 100%;
    /*white-space 不能丢  */
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
    margin-top: 10px;
  }

  .line {
    position: absolute;
    bottom: 6;
    left: 0;
    height: 3px;
    border-radius: 5px;
    background-color: red;
    transform: translateX(0);
    transition: all 1s ease-out;
  }

  .box-item {
    padding: 10px 30px;
    box-sizing: border-box;
    display: inline-block;

    overflow-y: hidden;
  }

  .box-item.active {
    color: red;
  }

  .content {
    height: 50px;
    width: 100%;
    border-top: 1px solid #aaa;
    transition: all 1s ease-out;
    background-color: rgb(255, 255, 255);

  }
</style>