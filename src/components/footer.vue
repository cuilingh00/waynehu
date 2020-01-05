<template>
  <footer>
    <div class="footer clearfix">
      <span>{{content}}</span>
      <div class="share">
        <a :href="link.url" v-for="link in links" :key="link.url">
          <i :class="`iconfont ${link.icon}`"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  props: {
  },
  data(){
    return {
      content: 'Designed by waynehu & code by 🧚‍♀️',
      links: [{
        icon: 'iconyuque',
        url: 'https://www.yuque.com/waynehu'
      }, {
        icon: 'iconwechat',
        url: ''
      }, {
        icon: 'iconins',
        url: 'https://www.instagram.com/wayne_hl/'
      }, {
        icon: 'icondribbble',
        url: 'https://dribbble.com/waynehu'
      }]
    }
  }
}
</script>
<style lang='less'>
  .footer {
    width: 1160px;
    margin: 0 auto;
    height: 96px;
    line-height: 96px;
    color: rgba(158, 158, 158, 1);
    border-top: 1px solid #EFEFEF;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    .share {
      float: right;
      .iconfont {
        color: rgba(158,158,158,1);
      }
      a {
        &:hover {
          .iconfont {
            -webkit-text-fill-color: transparent;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-background-clip: text;
          }
          .iconyuque {
            background-image:linear-gradient(45deg, #B5EF69, #37D17D);
          }
          .iconwechat {
            background-image:linear-gradient(45deg, #62D66E, #47C74F);
          }
          .iconins {
            background-image:linear-gradient(45deg, #F2A765, #E13562);
          }
          .icondribbble {
            background-image:linear-gradient(45deg, #EA4B8B, #EA2B64);
          }
        }
      }
      a + a {
        margin-left: 25px;
      }
    }
  }
</style> 