<template>
  <a ref="card" class="theme shap-card" :class="{'normal-card': show}" @mouseover="cardHover" @mouseleave="cardLeave" :href="data.url" target="_blank">
    <div class="theme-text">
      <img :src="data.logo" class="card__logo" />
      <div class="title">{{data.title}}</div>
      <div class="description">{{data.description}}</div>
      <div class="label" v-show="!hover">{{data.label}}</div>
      <div class="label label__icon">
        <i class="iconfont iconyoujiantou1 icon-left" :class="{'icon-move': hover}"></i>
        <i class="iconfont iconyuque icon-right" :class="{'icon-move': hover}"></i>
      </div>
    </div>
    <div class="theme-image">
      <div class="image-wrapper card__img">
        <img :src="data.image" class="card__img" />
        <img src="http://waynehu.art//%E5%9C%86%E5%BD%A2%E6%97%8B%E8%BD%AC.png" v-if="showFigure" class="figure" />
        <div v-if="showFigure" class="circle">
          <div class="big-circle" />
          <div class="small-circle" />
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: 'MainCard',
  props: {
    data: {
      type: Object,
      default: () => {
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
  computed: {
    showFigure(){
      return this.data.styles ? this.data.styles.tag === 'figure' : false;
    }
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
  @keyframes bigCircle {
    0% {
      transform: scale(0.3)
    }
    50% {
      transform: scale(1)
    }
    100% {
      transform: scale(0.3)
    }
  }

  .theme {
    height: 450px;
    width: 100%;
    background: var(--sub-bg-color);
    display: inline-block;
    margin-bottom: 40px;
    font-size: 0;
    vertical-align: top;
    font-family: PingFangSC-Regular, PingFang SC;
    &:hover {
      box-shadow: 0 20px 16px 0 rgba(0,0,0,0.04);
      .theme-text .title {
        background-position: 0px 0px;
      }
    }
    &-text {
      padding: 50px 0 0 50px;
      display: inline-block;
      vertical-align: top;
      position: relative;
      height: 450px;
      width: 460px;
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
        color: var(--primary-color);
        display: inline-block;
        background-image: linear-gradient(0deg, var(--title-gradient-up) 12px, var(--title-gradient-down) 0px);
        background-repeat: no-repeat;
        background-position: -410px 0px;
        transition-duration: 0.6s;
      }
      .description {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: var(--minor-color);
      }
      .label {
        position: absolute;
        bottom: 30px;
        font-size: 12px;
        line-height: 17px;
        font-weight: 400;
        color: var(--label-color);
        width: 360px;
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
        width: 700px;
        position: relative;
        img {
          max-height: 450px;
          max-width: 700px;
        }
        .figure {
          width: 48px;
          height: 48px;
          position: absolute;
          top: 60%;
          right: 9%;
          animation: myPenguin 5s infinite linear;
        }
        .circle {
          position: absolute;
          top: 46%;
          left: 16%;
        }
        .big-circle {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: #44E4C1;
          animation: bigCircle 5s infinite linear;
        }
        .small-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #FFFA5F;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        @media screen and (max-width: 414px) {
          .figure {
            width: 24px;
            height: 24px;
          }
          .circle {
            position: absolute;
            top: 35%;
            left: 9%;
          }
        }
      }
    }
  }
</style>