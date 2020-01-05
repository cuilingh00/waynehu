<template>
  <a ref="card" class="feature shap-card" :class="{'normal-card': show}" @mouseover="cardHover" @mouseleave="cardLeave" :href="data.url" target="_blank">
    <div class="feature-image">
      <div class="image-wrapper">
        <img :src="data.image" />
        <img src="http://q3km8khyp.bkt.clouddn.com/%E9%A3%8E%E8%BD%A6.png" v-if="data.styles ? data.styles.tag === 'penguin' : false" class="penguin" />
      </div>
    </div>
    <div class="feature-text">
      <img :src="data.logo" />
      <div class="title">{{data.title}}</div>
      <div class="description">{{data.description}}</div>
      <div class="label" v-show="!hover">{{data.label}}</div>
      <div class="label label__icon">
        <i class="iconfont iconyoujiantou1 icon-left" :class="{'icon-move': hover}"></i>
        <i class="iconfont iconyuque icon-right" :class="{'icon-move': hover}"></i>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: 'MediumCard',
  props: {
    data: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  data(){
    return {
      show: false,
      hover: false
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  mounted(){
    this.$nextTick(() => {
      this.scroll();
      window.addEventListener("scroll", this.scroll);
    });
  },
  methods: {
    scroll() {
      const cardTop = this.$refs.card.getBoundingClientRect().top;
      if (cardTop < 500) {
        this.show = true;
      }
    },
    cardHover(){
      this.hover = true;
    },
    cardLeave(){
      this.hover = false;
    }
  }
}
</script>
<style lang="less">
  @keyframes myPenguin {
    100% {
      transform: rotate(-360deg)
    }
  }
  .feature {
    height: 450px;
    width: 760px;
    background: #fff;
    display: inline-block;
    margin-bottom: 40px;
    margin-right: 35px;
    font-size: 0;
    vertical-align: top;
    font-family: PingFangSC-Regular, PingFang SC;
    &:hover {
      box-shadow: 0 20px 16px 0 rgba(0,0,0,0.04);
      .feature-text .title {
        background-position: 0px 0px;
        transition-duration: 0.6s;
      }
    }
    &-text {
      padding: 50px 0 0 50px;
      display: inline-block;
      vertical-align: top;
      position: relative;
      height: 450px;
      width: 400px;
      img {
        width: 54px;
        height: 54px;
        display: block;
      }
      .title {
        margin-top: 54px;
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        color:rgba(64, 64, 64, 1);
        display: inline-block;
        background-image: linear-gradient(0deg, #FFF7CD 12px, #fff 0px);
        background-repeat: no-repeat;
        background-position: -350px 0px;
      }
      .description {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: rgba(128, 124, 124, 1)
      }
      .label {
        position: absolute;
        bottom: 30px;
        font-size: 12px;
        line-height: 17px;
        font-weight: 400;
        color: #a3a3a3;
        width: 300px;
        .iconyoujiantou1 {
          display: inline-block;
          transition-duration: 1s;
          font-size: 12px;
          color: #807c7c;
        }
        .iconyuque {
          float: right;
          transition-duration: 1s;
          -webkit-text-fill-color: transparent;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-background-clip: text;
          background-image:linear-gradient(45deg, #B5EF69, #37D17D);
        }
        .icon-left {
          transform: translateX(-50px);
          opacity: 0;
        }
        .icon-right {
          transform: translateX(50px);
          opacity: 0;
        }
        .icon-move {
          transform: translateX(0px);
          opacity: 1;
        }
      }
    }
    &-image {
      display: inline-block;
      vertical-align: top;
      .image-wrapper {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        height: 450px;
        width: 360px;
        position: relative;
        img {
          max-height: 450px;
          max-width: 360px;
        }
      }
    }
    .penguin {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 42%;
      top: 43.5%;
      animation: myPenguin 5s infinite linear;
    }
  }
</style>