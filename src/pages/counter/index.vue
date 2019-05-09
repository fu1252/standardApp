<template>
  <div>

      <h2 class="title">提交组件：</h2>
    <SubmitBar></SubmitBar>

    <h2 class="title">可滑动单元格：</h2>
    <SwipeCell>
      <div slot='left'>
        <p>左边内容</p>
        <p>11111</p>
        <p>22222</p>
      </div>
      <div slot='right'>
        <p class="slot-right"><i class='fa fa-angle-left icon'></i><span>向左滑动</span>
        </p>
      </div>
      <div slot='hidden'>关闭</div>
    </SwipeCell>

    <h2 class="title">导航栏：</h2>
    <Tab></Tab>
    <h2 class="title">树形选择：</h2>
    <TreeSelect></TreeSelect>
    <h2 class="title">滚动导航栏：</h2>
    <TabB></TabB>
    <h2 class="title">按钮导航栏</h2>
    <TabC></TabC>
    <h2 class="title">标签组：</h2>
    <Tag></Tag>
    

  </div>
</template>

<script>
  import SubmitBar from '@/library/SubmitBar.vue';
  import SwipeCell from '@/library/SwipeCell.vue';
  import Test from '@/library/Test.vue';
  import Tab from '@/library/Tab.vue';
  import TabC from '@/library/TabC.vue';
  import TabB from '@/library/TabB.vue';
  import Tag from '@/library/Tag.vue';
  import TreeSelect from '@/library/TreeSelect.vue';
  export default {
  components:{TabC,Tag,TreeSelect,TabB,Tab,SubmitBar,SwipeCell,Test}
  }

</script>

<style>
  .title{
    margin: 20px 10px 10px 10px;
    color:rgb(195, 69, 253);
  }
.slot-right{
  display:flex;
  align-items: center;
}
.slot-right i{
  margin-right: 5px;
}
</style>
