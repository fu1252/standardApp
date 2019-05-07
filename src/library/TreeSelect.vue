<template>
  <div class="tree-wrapper">
     <div class="tree-select">
       <div class="left">
          <div @click="onLeftClick" :data-id='item.id' :data-index='item.province' :class="[leftCurrentId===item.province ?'active':'']" v-for="(item, index) in dataList"
          :key="index" class="item left-item">
          {{item.province}}</i>
          </div>
          <div class='line' :style={transform:computedClass}></div>
       </div>
       <div class="right">
          <div @click="onRightClick" :data-index='item.text' :class="[rightCurrentId===item.text ?'active':'']" v-for="(item, index) in filterList"
          :key="index" class="item right-item">
          {{item.text}}<i class="fa fa-check-circle icon"></i>
          </div>
       </div>
     </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      rightCurrentId:'',
    leftCurrentId:'福建',
    leftNowId:1,
    dataList:[
      {
     province:'浙江',
     id:1,
     city:[
      {text:'杭州1',},
      {text:'杭州2',},
      {text:'杭州3',},
      {text:'杭州4',},
      {text:'杭州5',},
      {text:'杭州6',},
      {text:'杭州7',},
      {text:'杭州8',},
    ]},
      {
     province:'江苏',
     id:2,
     city:[
      {text:'南京1',},
      {text:'南京2',},
      {text:'南京3',},
      {text:'南京4',},
      {text:'南京5',},
      {text:'南京6',},
      {text:'南京7',},
      {text:'南京8',},
    ]},
      {
     province:'福建',
     id:3,
     city:[
      {text:'厦门1'},
      {text:'厦门2'},
      {text:'厦门3'},
      {text:'厦门4'},
      {text:'厦门5'},
      {text:'厦门6'},
      {text:'厦门7'},
      {text:'厦门8'},
    ]},
      {
     province:'全部',
     id:4,
    city:[]}
    ]
    
  }},
  computed: {
    filterList(){
      if(this.leftCurrentId==='全部'){
        const allCity=[]
        this.dataList.map(item=>item.city).forEach(item=>{item.forEach(i=>allCity.push(i))})
        return allCity
      }else{
      return this.dataList.filter(item=>item.province===this.leftCurrentId)[0].city
      }
    },
    computedClass(){
      if(this.leftNowId==1){
      return 'translateY(0%)'}   
      if(this.leftNowId==2){
      return 'translateY(100%)'}
      if(this.leftNowId==3){
      return 'translateY(200%)'}
      if(this.leftNowId==4){
      return 'translateY(300%)'}    
    }
  },
  methods: {
  onLeftClick(e){
     this.leftCurrentId=e.target.dataset.index
     this.leftNowId=e.target.dataset.id
    },
    onRightClick(e){
      this.rightCurrentId=e.target.dataset.index
    },
  },
}
</script>

<style lang="scss" scoped>
  .tree-select{
    display:flex;
    font-size: 14px;
    width: 60%;
  }
  .left{
    flex:1 0 40%;
    height: 200px;
    overflow: scroll;
    display:flex;
    flex-direction: column;
   background-color: aquamarine;
   position: relative;
  }
  .line{
    left:0px;
    top:0px;
    width:5px;
    height: 40px;
    background-color: red;
    position: absolute;
    transform:translateY(-100%);
    transition:all 1s ease;
    content:'',
  }
  .right{
    flex:1 0 60%;
    height: 200px;
    overflow: scroll;
    background-color: burlywood;
  }
  .item{
  padding: 10px;
  }
  .left-item{
    border-left: 4px solid aquamarine; 
  }
  .icon{
    display: none;
  }
  .right-item{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
  }
  .left-item.active{
    color:red;
  }
  .right-item.active{
    color:red;
    i{
      display:inline;
    }
  }
  ::-webkit-scrollbar  
{  
    width: 5px;  
    height: 5px;  
}  
::-webkit-scrollbar-corner {
  background-color:transparent;   
}
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    height: 5px;
    box-shadow: inset 0 0 6px rgba(23, 102, 250, 0.3);  
    background-color: rgb(77, 137, 250);  
}  
</style>