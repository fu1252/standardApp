<template>
  <div class="pop">
    <div class="overlay" v-if="overlay" v-show="isShow" @click='$emit("close")'></div>
    <div class="overlay" v-if="loading" v-show="isShow"></div>
    <div class="popMiddle" v-if="middle" v-show="isShow">
      <div class="inner">{{text}}</div>
    </div>
    <div class="popBottom" v-if="bottom" :class={active:isShow}>
      <slot></slot>
    </div>
    <div class="popLoading" v-if="loading" v-show="isShow"><i class="fa fa-spinner fa-spin fa-3x fa-fw icon"></i></div>
  </div>
</template>

<script>
  export default {
    props: {
      position: String,
      propShow: Boolean,
      text: {
        default: '我是内容，随便写'
      }
    },
    data() {
      return {
        middle: this.position === 'middle',
        bottom: this.position === 'bottom',
        loading: this.position === 'loading',
        isShow: this.propShow
      }
    },
    computed: {
      overlay() {
        return this.middle || this.bottom
      }
    },
    watch: {
      propShow: function (a, b) {
        this.isShow = this.propShow
      }
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  @import './styles/var.scss';

  .popLoading {
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    max-height: 100%;
    transition: all 0.3s;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    background-color: transparent;

    .icon {
      color: white;
      font-size: 100px;
    }
  }

  .overlay {
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .popMiddle {
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    max-height: 100%;
    transition: all 0.3s;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
  }

  .popBottom {
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    max-height: 100%;
    transition: all 0.3s;
    background-color: #fff;
    transform: translateY(300px);
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    box-sizing: border-box;

    &.active {
      transform: translateY(0px);
      transition: all 0.3s;
    }
  }
</style>