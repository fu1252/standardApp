<template>
  
  <!--------    手风琴版本：  ------->

  <div class="collapse">
    <div class="title" @click='change'>
      {{propObj.title}}<i :class={top:propElemArr[id]} class="fa fa-angle-down" aria-hidden="true"></i>
    </div>
    <div class="content" :class={change:propElemArr[id]} :style={height:abc}>
      <div class="content-innerQ" :id='propObj.id' >
        {{propObj.content}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      propObj:{
        type:Object,
        default:{
          title:'我弟弟是的',
          content:'水电费是否水电费是否是的发送到  是的发送到而44334 他34费是否是的发送到  是的发送到而44334 他34费是否是的发送到  是的发送到而44334 他34  34343 的舒适度高 十多个',
        }
      },
      propElemArr:{
        type:Object,
      }
    },
    data() {
      return {
        value: null,
        // isChange: false,
        elem:[],
        id:this.propObj.id
      }
    },
    computed: {
      abc() {
        if (this.propElemArr[this.id]) {
          return this.value
        } else {
          return '0px'
        }
      }
    },
    methods: {
      change() {
        // this.isChange = !this.isChange
        this.$emit("propOnElemArr",this.id)
        this.mn().then(res => {
          // this.elem = res[0];
          this.value=res
          // this.$emit("propOnElemArr",this.elem);
        })
        // .then(res=>{
        //  this.value=this.propElemArr[0][0].height+"px";this.propElemArr[0].shift();console.log(this.propElemArr[0]);
         
        // } )
      },
      mn() {
        let that=this
        return new Promise((resolve, reject) => {         
          let query = wx.createSelectorQuery()
          // query.selectAll('.content-innerQ').boundingClientRect();
          let aaa='#'+this.propObj.id
          query.select(aaa).boundingClientRect();
          query.exec(function (res) {                               
            let value=res[0].height+'px'
            resolve(value)
          })
        });
      },
    },
   onLoad(){
   }
  }
</script>

<style lang="scss" scoped>
  .collapse {
    overflow: hidden;
    border-bottom: 1px solid #bbb;
  }

  .content-inner {
    width: 100%;
    padding: 10px;
  }

  .content {
    width: 100%;
    height: 0;
    overflow-x: visible;
    font-size: 14px;
    box-sizing: border-box;
    text-align: left;
    transition: height 2s ease-out
  }

  .content.change {
    transition: height 2s ease-out;
    position: relative;

    &:before {
      position: absolute;
      top: 0px;
      left: 10px;
      content: " ";
      width: 100%;
      height: 1px;
      background-color: #bbb;
    }
  }
  i {
    transition: all 1s ease-out;
  }
  i.top {
    transform: rotate(-180deg);
    transition: all 1s ease-out;
  }
  .title {
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    line-height: 1;
    font-weight: 500;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    padding: 10px 9px;

    &:active {
      &:before {
        opacity: 0.1
      }

    }

    &:before {
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
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
</style>