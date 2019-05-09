<template>
  <div class="submitbar-wrapper">
    <div class="warning" v-if="isDisabled">请选择商品和规格</div>
    <div class="submitbar">
      <div class="check" :class={hidden:isChecked}>
        <label for="checked">
          <checkbox :value='checkValue'></checkbox>全选
        </label>
      </div>
      <div class="submitbar-inner">
        <div class="counter">合计: <span class="number">￥{{counter}}</span></div>
        <div class="btn-wrapper" @click='$emit("handle",param)'>
          <button :class={disabled:isDisabled,btn:!isDisabled} :disabled='isDisabled'>
            <i v-if="computedLoading" class="icon fa fa-fw fa-spinner fa-pulse"></i>
            <span v-else class="text">提交订单</span> </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      counter: {
        type: Number,
        default: 50.89
      }
    },
    data() {
      return {
        isDisabled:true,
        isLoading: false,
        isChecked: false,
        checkValue: true
      }
    },
    computed: {
      computedLoading() {
        if (!this.isDisabled && this.isLoading) { return true } else { return false }
      }
    },
  }
</script>
<style lang='scss' scoped>
  @import './styles/var';

  button[disabled] {
    color: #fff !important;
    background: $red !important;
    border-radius: 0px !important;
    position: relative !important;
  }

  /* .fa-spin{
  animation:mydemo 2s linear infinite;
}
@keyframes mydemo{
  0%{transform: translateX(-50px)}
  50%{transform: translateX(0px)}
  100%{transform: translateX(50px)}
} */
  .icon {
    font-size: 20px;
  }

  button[disabled]::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    z-index: 10;
    background-color: rgba(242, 245, 247, 0.541);
  }

  .submitbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aquamarine;
    font-size: 14px;
  }

  .check {
    display: flex;
    align-items: center;
    margin: 0px 10px;
  }

  .check.hidden {
    visibility: hidden;
  }

  .submitbar-inner {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .btn-wrapper {
    margin-left: 10px;
    box-sizing: border-box;
  }

  .warning {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    background-color: rgb(253, 237, 223);
    color: $orange;
  }

  .number {
    color: $red;
  }

  .btn:active:before {
    opacity: 0.1
  }

  .disabled.btn:active:before {
    opacity: 0;
  }

  .btn:before {
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
  }

  .btn {
    color: white;
    background-color: $blue;
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    line-height: 1;
    font-weight: 500;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 4px;
    padding: 15px 20px;
    position: relative;
    width: auto;
    border-radius: 0;
    border: none;
  }
</style>