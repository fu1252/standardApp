<template>
   <div class="btn-wrapper">

      <button @click='$emit("click",param)' :class="color"
         :style={width:width,padding:padding,fontSize:fontSize,borderRadius:borderRadius} :disabled='isDisabled'
         v-if="plainBtn" class="plain-btn">
         <slot name="left"></slot> {{text}}<slot name="right"></slot>
      </button>
      <button @click='$emit("click",param)' :class="color"
         :style={width:width,padding:padding,fontSize:fontSize,borderRadius:borderRadius} :disabled='isDisabled'
         v-if="mainBtn" class="main-btn">
         <slot name="left"></slot> {{text}}<slot name="right"></slot>
      </button>

   </div>
</template>

<script>
   export default {
      props: {
         text: {
            type: String,
            default: '点击'
         },
         borderRadius: {
            type: String,
            default: '4px'
         },
         fontSize: {
            type: String,
            default: '14px'
         },
         padding: {
            type: String,
            default: '10px 20px'
         },
         width: {
            default: 'auto',
         },
         color: {
            type: String,
            default: 'blue'
         },
         plainBtn: {
            type: Boolean,
            default: false
         },
         mainBtn: {
            type: Boolean,
            default: false
         },
         propDisabled: {
            type: Boolean,
            default: false
         },
      },
      data() {
         return {
            isDisabled: this.propDisabled
         }
      },
      computed: {
      },
   }
</script>

<style lang="scss" scoped>
   @import './styles/button.scss';
</style>