<template>
  <div class="cell" @touchstart='startMove' @touchmove='deleteGoods' @touchend='endMove'>
    <div class="visible" :style='textStyle'>
      <div class="left">
        <slot name='left'></slot>  
      </div>
      <div class="right">
        <slot name='right'></slot>
      </div>
    </div>
    <div class="hidden" :style='textStyle1' @click='$emit("handle",param)'>
      <slot name='hidden'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        startX: 0,
        startY: 0,
        moveX: 0,
        moveY: 0,
        aX: 0,
        aY: 0,
        textStyle: '',
        textStyle1: '',
        moveLeft: false,
        moveRight: false,
        isMove: false,
      }
    },
    methods: {
      initTextStyle() {
        this.textStyle = "";
        this.textStyle1 = "";
      },
      startMove(e) {
        this.initTextStyle();
        this.startX = e.touches[0].pageX;
        this.startY = e.touches[0].pageY;
      },
      deleteGoods(e) {
        this.initTextStyle();
        this.moveX = e.touches[0].pageX;
        this.moveY = e.touches[0].pageY;
        this.aX = this.moveX - this.startX;
        this.aY = this.moveX - this.startY;
        if (this.aX < -50) {
          this.moveLeft = true
        }
        if (this.aX > 50) {
          this.moveRight = true
        }
      },
      endMove(e) {
        if (this.moveLeft) {
          this.textStyle = `transform:translateX(-100rpx);`;
          this.textStyle1 = `transform:translateX(-100rpx);`;
          this.isMove = true
        }
        if (this.moveRight && this.isMove) {
          this.textStyle = `transform:translateX(0rpx);`;
          this.textStyle1 = `transform:translateX(0rpx);`;
          this.moveLeft = false
          this.moveRight = false
          this.isMove = false
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import './styles/var';

  .cell {
    font-size: 14px;
    padding: 10px 15px;
    background-color: aquamarine;
    position: relative;
  }

  .hidden {
    position: absolute;
    right: -50px;
    top: 0px;
    width: 50px;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: $red;
    transition: transform 0.5s ease;
  }
  .hidden:active{
    background-color: rgb(148, 148, 148);
  }


  .visible {
    display: flex;
    transition: all 0.5s ease;
    justify-content: space-between;
    align-items: center;
    .visible {
      flex: 1 0 50%;
    }
    .right {
      flex: 1 0 50%;
      display: flex;
      justify-content: flex-end;
    }
  }

  /* .hidden-text:active{
      color:blue
    }
    .hidden-text{
      position: relative;
    width:100%;
    padding: 10px 0px;
    }
.hidden-text:active:before{
  opacity: 0;
}
.hidden-text:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    content: " ";
    opacity: 0;
    transform: translate(-50%, -50%);
  } */
</style>