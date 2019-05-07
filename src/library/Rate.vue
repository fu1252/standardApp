<template>
  <div>
    <div>
      <h2>{{ rateValue }}</h2>
    </div>
    <div v-for="(star,index) in stars" :key="index" class="rate">
      <img :src="star.img" />
      <div class="left" @click="scoreBtn(1,index)"></div>  
      <div class="right" @click="scoreBtn(2,index)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      rateValue:{   //每颗星分值多少，用于回调函数
       type:Number
      },
      value:{     //直接显示的rate星颗数
        type:Number
      }
    },
    data() {
      return {
        stars: [],
        imgs: [
          "/static/rate/cc-star-o.png",
          "/static/rate/cc-star-half.png",
          "/static/rate/cc-star.png"
        ],
        starValue: 1,
      };
    },
    mounted() {
      this.stars = [
        { img: this.imgs[0] },
        { img: this.imgs[0] },
        { img: this.imgs[0] },
        { img: this.imgs[0] },
        { img: this.imgs[0] }
      ];
      this.getRate(Number(this.value))   //调用此函数要禁用点击设值功能
    },
    methods: {
      getRate(value){
       if (value<6) {
          if (Number.isInteger(value)) {
            this.addRate(value)
          } else {
            let newValue=String(value).split('.')
            let value1=Number(newValue[0])
            this.addRate1(value1)
          }
       } else {
         console.log('错误：数据大于5');
       }
      },
      addRate(value){      
        this.stars.forEach((val, ind) => {
               if (ind <value) {
                val.img = this.imgs[2];
                } else if (ind > value) {
                 val.img = this.imgs[0];
              }})
      },
      addRate1(value1){
        this.stars.forEach((val, ind) => {
               if (ind <value1) {
                val.img = this.imgs[2];
                } else if (ind === value1) {
                 val.img = this.imgs[1]
              } else if (ind >value1) {              
                 val.img = this.imgs[0]
              }           
            })
      },
      scoreBtn(type, index) {
        let score = type === 1 ? this.starValue / 2 : this.starValue;
        this.stars[index].img = type === 1 ? this.imgs[1] : this.imgs[2];
        this.stars.forEach((val, ind) => {
          if (ind < index) {
            score += this.starValue;
            val.img = this.imgs[2];
          } else if (ind > index) {
            val.img = this.imgs[0];
          }
        });
        this.$emit("ok", score);
      }
    }
  };
</script>

<style scoped>
  .rate {
    display: inline-block;
    position: relative;
  }
  .rate > img {
    width: 30px;
    height: 30px;
  }
  .right {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 50%;
  }
  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
