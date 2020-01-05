<template>
  <a :href="data.url" target="_blank" ref="card" class="blog shap-card" :class="{'normal-card': show}" @mouseover="cardHover" @mouseleave="cardLeave">
    <div class="blog-image" :style="{'background': backgroundColor}">
      <img :src="data.image" :class="moveClass" />
      <img src="http://q3km8khyp.bkt.clouddn.com/%E4%BA%91%E6%9C%B5.png" class="cloud" v-if="data.styles ? data.styles.tag === 'cloud' : false" />
    </div>
    <div class="blog-content">
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
  name: 'smallCard',
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
    backgroundColor(){
      return this.data.styles ? this.data.styles.background : '#fff';
    },
    moveClass(){
      const flag = this.data.styles ? this.data.styles.move : false;
      return flag ? this.data.styles.orient === 'right' ? 'bg-move-right' : 'bg-move-left' : ''
    },
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
<style lang='less'>
  @keyframes moveLeft {
    0%   {top:0px; left:0px}
    50%  {top:-100px; left:0px}
    100% {top:0px; left:0px}
  }
  @keyframes moveRight {
    0%   {top:0px; right:0px}
    50%  {top:100px; right:0px}
    100% {top:0px; right:0px}
  }
  @keyframes myCloud {
    0% {
      top: 10%
    }
    50% {
      top: 13%
    }
    0% {
      top: 10%
    }
  }

  .blog {
    height: 450px;
    width: 360px;
    background: #fff;
    display: inline-block;
    margin-bottom: 40px;
    font-size: 0;
    vertical-align: top;
    position: relative;
    font-family: PingFangSC-Regular, PingFang SC;
    &:hover {
      box-shadow: 0 20px 16px 0 rgba(0,0,0,0.04);
      .blog-content .title {
        background-position: 0px 0px;
        transition-duration: 0.6s;
      }
    }
    &-image {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      height: 240px;
      width: 360px;
      overflow: hidden;
      img {
        max-height: 240px;
        max-width: 360px;
        position: relative;
      }
      .cloud {
        width: 26px;
        height: 23px;
        position: absolute;
        left: 33%;
        top: 10%;
        animation: myCloud 4s infinite ease;
      }
      .bg-move-left {
        transform: scale(2);
        animation: moveLeft 15s infinite linear;
        -moz-animation:moveLeft 15s infinite linear; /* Firefox */
        -webkit-animation:moveLeft 15s infinite linear; /* Safari and Chrome */
        -o-animation:moveLeft 15s infinite linear; /* Opera */
      }
      .bg-move-right {
        transform: scale(2);
        animation: moveRight 15s infinite linear;
        -moz-animation:moveRight 15s infinite linear; /* Firefox */
        -webkit-animation:moveRight 15s infinite linear; /* Safari and Chrome */
        -o-animation:moveRight 15s infinite linear; /* Opera */
      }
    }
    &-content {
      padding: 36px 0 0 30px;
      .title {
        margin-top: 0;
        margin-bottom: 13px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        color:rgba(64, 64, 64, 1);
        display: inline-block;
        background-image: linear-gradient(0deg, #FFF7CD 12px, #fff 0px);
        background-repeat: no-repeat;
        background-position: -330px 0px;
      }
      .description {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: rgba(128, 124, 124, 1)
      }
      .label {
        position: absolute;
        bottom: 23px;
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
          transform: translateX(-30px);
          opacity: 0;
        }
        .icon-right {
          transform: translateX(30px);
          opacity: 0;
        }
        .icon-move {
          transform: translateX(0px);
          opacity: 1;
        }
      }
    }
  }
</style>