<template>
  <div class="card-wrapper">

    <div class="card">
      <div class="card-inner">
        <div class="photo">
          <image :src='propObj.photo_url' mode='widthFix'></image>
          <div class="photo-tag" v-if="propObj.isPhotoTagShow">{{propObj.photo_tag_text}}</div>
        </div>
        <div class="content">
          <p class="title">
            {{propObj.content_title}}
          </p>
          <p class="text">{{propObj.content_text}}</p>
          <p class="tag-wrapper" v-if="propObj.isTagShow">
            <span class="tag" v-for="(item, index) in propObj.content_tag_text" :key="index">{{item}}</span>
          </p>
          <div class="counter">
            <p class="price">￥{{propObj.content_price}}<span class="delete">￥{{propObj.content_delete}}</span></p>
            <p class="quantity">x{{propObj.content_quantity}}</p>
          </div>
        </div>
      </div>
      <div class="bottom" v-if="propObj.isBottomShow">
        <Button text='按钮' plainBtn color='red' padding='3px' fontSize='10px'></Button>
        <div class="btn-wrapper"><Button text='按钮' plainBtn color='red' padding='3px' fontSize='10px'></Button></div>
      </div>

    </div>

  </div>
</template>
<script>
  import Button from './Button';
  export default {
    components: { Button },
    props:{
      propObj:{
        type:Object,
        default:{
          photo_url: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533841039.webp',
          photo_tag_text: '标签',
          content_title: '第三方电风扇 是的发送到 士大夫撒第三方爽肤水地方 士大夫撒 鼎折覆餗防守打法特',
          content_text: '大减价',
          content_tag_text: ['标签', '滴滴'],
          content_price: 2.00,
          content_delete: 10.00,
          content_quantity: 2,
          isTagShow: true,
        isPhotoTagShow: true,
        isBottomShow: true,
        }
      }
    },
    data() {
      return {
      }
    },
  }
</script>
<style lang='scss' scoped>
  @import './styles/card.scss';
</style>