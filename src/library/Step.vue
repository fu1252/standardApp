<template>
  <div>
    <div class="step-wrapper">
      <p class="btn left" @click='onClickLeft'>a</p>
      <input type="number" :value="num" class="num-input">
      <div class="btn right" @click='onClickRight'>b</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      }
    },
    methods: {
      onClickLeft() {
        if (this.num > 0) {
          this.num--
        } else {

        }
      },
      onClickRight() {
        this.num++
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import './styles/var.scss';

  button::after {
    border: none;
  }
*{
  margin:0;
  padding:0;
}
  .btn {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    line-height: 1em;
    box-sizing: border-box;
    padding: 0;
    color: $red;
    border: 1px solid $border3;

  }

  .num-input {
    vertical-align: middle;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: $border4;
    color: $text1;
    font-weight: 500;
    font-size: 16px;
  }

  .step-wrapper {
    margin: 10px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

  }
      .left {
        border-radius: 4px 0 0 4px !important;
      }
  
      .right {
        border-radius: 0 4px 4px 0 !important;
      }
</style>