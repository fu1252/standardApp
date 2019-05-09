<template>
  <div>
      <h2 class="title">导航栏：</h2>
    <NavBar></NavBar>

    <h2 class="title">滚动通告：</h2>
    <NoticeBar></NoticeBar>

    <h2 class="title">通知：</h2>
    <Notify :show='isShowNotify' @close='onNotifyClick' text='所说的方式' color='red'></Notify>
    <Button mainBtn @click=onNotifyClick text='点开通知'></Button>

    <h2 class="title">弹框：</h2>
    <Button @click='openPop' plainBtn>点开弹框</Button>
    <Pop :propShow='showPop' @close='closePop' position='bottom'>
      <div class="slot-wrapper">
        <h2 class="text1">男男女女女女</h2>
        <p class="text2">士大夫撒士大夫撒水电费</p>
        <p class="text3">dfds</p>
        <div class="bottomA">
          <Button plainBtn text='确认'></Button>
          <Button plainBtn text='取消'@click='onCancel'></Button>
        </div>
      </div>
    </Pop>

    <h2 class="title">进度条：</h2>
    <Button color='red' plainBtn text='增加进度' @click='onProgress' fontSize='10px' padding='5px'></Button>
    <Progress :value='progressValue'></Progress>

    <h2 class="title">评分：</h2>
    <Rate value=3.6></Rate>
    <RateA value=4.2></RateA>

    <h2 class="title">步骤条：</h2>
    <Steps></Steps>

    <h2 class="title">步进器：</h2>
    <Step></Step>

    <h2 class="title">进度条：</h2>
    <StepB></StepB>

    <h2 class="title">单选多选框：</h2>
    <radio-group @change='onRadioChange'>
      <label v-for="(item, index) in radioList" :key="index">
        <radio :value='item'></radio>
        {{item}}
      </label>
    </radio-group>
    <checkbox-group @change='onCheckboxChange'>
      <label v-for="(item, index) in radioList" :key="index">
        <checkbox :value='item'></checkbox>
        {{item}}
      </label>
    </checkbox-group>

    <h2 class="title">折叠面板：</h2>
    <div v-for="(item, index) in collapseList" :key="index">
      <Collapse :propObj='item' :propElemArr='elemArr' @propOnElemArr='onELemArr'></Collapse>
    </div>

    <h2 class="title">手风琴版：</h2>
     <CollapseA></CollapseA>

     <h2 class="title">徽章：</h2>
    <div class="badge-wrapper">
      <Badge></Badge>
      <Badge text='哈哈' number='43'></Badge>
      <Badge text='嘻嘻' number='23'></Badge>
    </div>
    
    <h2 class="title">面板：</h2>
    <div class="card-wrapper" v-for="(item, index) in cardList" :key="index">
      <Card :propObj='item'></Card>
    </div>

    <h2 class="title">单元格：</h2>
    <div v-for="(item, index) in cellList" :key="index">
      <CellA :propObj='item'></CellA>
    </div>

  </div>
</template>

<script>
  import data from '@/library/data.js';
  import Badge from '@/library/Badge.vue';
  import Button from '@/library/Button.vue';
  import Card from '@/library/Card.vue';
  import CellA from '@/library/CellA.vue';
  import Collapse from '@/library/Collapse.vue';
  import CollapseA from '@/library/CollapseA.vue';
  import NavBar from '@/library/NavBar.vue';
  import NoticeBar from '@/library/NoticeBar.vue';
  import Notify from '@/library/Notify.vue';
  import Pop from '@/library/Pop.vue';
  import Progress from '@/library/Progress.vue';
  import Rate from '@/library/Rate.vue';
  import RateA from '@/library/RateA.vue';
  import Steps from '@/library/Steps.vue';
  import Step from '@/library/Step.vue';
  import StepB from '@/library/StepB.vue';

  export default {
    components: {StepB,Step,Steps,RateA,Rate,Progress, Pop, Notify, NoticeBar, Badge, Button, Card, CellA, Collapse, CollapseA, NavBar },

    data() {
      return {
        progressValue:0,
        cardList: [],
        cellList: [],
        radioList: ['a', 'b', 'c'],
        radioValue: '',
        collapseList: [],
        isShowNotify: false,
        showPop: false,
        // elemArr:[],
      };
    },
    mounted() {
      this.cardList = data.cardList
      this.cellList = data.cellList
      this.collapseList = data.collapseList
    },
    methods: {
      onProgress(){
        if(this.progressValue>=0){this.progressValue=this.progressValue+10}
      },
      onCancel(){
        console.log('取消成功');
        
      },
      onPopBtn() {
        this.showPop = false;
      },
      openPop() {
        this.showPop = true

      },
      closePop() { this.showPop = false },

      onNotifyClick() {
        this.isShowNotify = !this.isShowNotify
      },
      // onELemArr(param){
      //   this.elemArr.push(param)
      // },
      onRadioChange(e) {
        console.log(e.target.value);
      },
      onCheckboxChange(e) {
        console.log(e.target.value);
      },
    }
  };
</script>

<style scope lang="scss">
  .title{
    margin: 20px 10px 10px 10px;
    color:rgb(195, 69, 253);
  }
  .slot-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
.aaa{
  padding: 20px;
  background-color: aquamarine;
}
  .bottomA {
    display: flex;
    color:red;
  }
</style>