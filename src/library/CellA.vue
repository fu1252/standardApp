<template>
  <div>

    <div class="cell">
      <div class="left">
        <i class="fa  fa-map-marker" v-if="propObj.showIconLeft"></i> {{propObj.text1}}
        <div class="bottom">{{propObj.text2}}</div>
      </div>
      <div class="right">{{propObj.text3}}<i v-if="propObj.showIconRight" class="fa fa-angle-right"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      propObj: {
        type: Object,
        default: {
          text1: '大杀四方',
          text2: '电风扇',
          text3: '回访房东说',
          showIconLeft: true,
          showIconRight: false,
        }
      }
    },
    data() {
      return {
        aa: 333
      }
    },
    created() {

    },
    watch: {
      propText1(a, b) {

      }
    },

  }
</script>

<style lang="scss" scoped>
  @import './styles/var.scss';

  .cell {
    width: 100%;
    padding: 20px;
    font-size: 14px;
    background-color: #fff;
    display: flex;
    box-sizing: border-box;
    align-items: flex-start;
    flex-wrap: no-wrap;
    position: relative;

    &:before {
      position: absolute;
      bottom: 0px;
      left: 20px;
      content: "";
      height: 1px;
      width: 100%;
      border-bottom: 1px solid $border3;
    }

    .left {
      flex: 1 0 50%;

      i {}

      .bottom {
        margin-top: 6px
      }
    }

    .right {
      flex: 1 0 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      i {
        margin-left: 8px;
      }
    }
  }
</style>