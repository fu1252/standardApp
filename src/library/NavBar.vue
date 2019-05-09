<template>
  <div>
    
    <div class="navbar"> 
     <div class='left btn'><i class='fa fa-angle-left icon'></i>返回</div> 
      <div class="text">
        <p class="navbar-title"  @click='onClick' :data-index='index+1' 
        v-for="(item, index) in propDataList" :key="index">{{item}}
      </p>
        <div :style={transform:computedClass} class="line"></div></div>
        <div class='right btn'>搜索<i class='fa fa-search icon'></i></div>
        
      </div>

  </div>
</template>

<script>
  import Button from './Button';
export default {
  components:{Button,},
  props:{
    propDataList:{
    type:Array,
    default:['标题','而法国','的份额','水电f费']
  },
  },
  data() {
    return {
      currentIndex:2,
      offsetLeft:null,
      rectValue:null,
    }
  },
  computed: {
    computedClass(){
     if (this.offsetLeft) {
      return `translateX(${this.offsetLeft}px)`
     }else{
       return `translateX(${this.rectValue}px)`
     }
     }
  },
  methods: {
    onClick(e){
       this.currentIndex=e.target.dataset.index 
       this.offsetLeft=e.target.offsetLeft
    },
    getRect() {
        let that=this
        return new Promise((resolve, reject) => {   
          let query = wx.createSelectorQuery()
          query.selectAll('.navbar-title').boundingClientRect();
          query.select('.text').boundingClientRect();
          query.exec(function (res) {     
            console.log(res);
            
            let value = res[0][that.currentIndex-1].left-res[1].left                    
            resolve(value)
          })
        });
      },
  },
  mounted() {
    this.getRect().then(res => this.rectValue = res
        )
  },
}
</script>

<style lang="scss" scoped>
  @import './styles/var';
.line{
  position: absolute;
  left: 0px;
  bottom: 10px;
  width: 38px;
  height: 3px;
  transition: all 1s ease-out;
  background-color: red;
  transform: translateX(-20px)
}

.text{
  display:flex;
  flex:1 0 60%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  padding:20px 0px;
  position: relative;
}
.btn{
  align-items: center;
  color:$red;
  display:flex;
  flex:1 0 20%;
}
.right{
  display:flex;
  justify-content: flex-end;
  align-items: center;
}
.icon{
  margin:0px 5px;
  font-size: 14px;
}
.navbar{
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
   
}

</style>