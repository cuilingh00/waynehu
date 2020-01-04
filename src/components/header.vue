<template>
  <div class="header">
    <nav class="clearfix">
      <a href="/">
        <img src="../assets/photo.png" />
      </a>
      <ul>
        <li v-for="nav in navList" :key="nav.name">
          <a :href="nav.url" :class="{'active': getNav(nav.name)}">
            <span class='dot dot-left'>·</span>
            <span class='nav-name'>{{nav.name}}</span>
            <span class='dot dot-right'>·</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="title">
      <p>{{title}}</p>
      <p class="title-sub">{{description}}</p>
      <p class="title-sub">{{otherContent}}</p>
      <img src="http://q3km8khyp.bkt.clouddn.com/%E5%8D%8A%E8%BA%AB%E5%83%8F.png" v-if="showProfile" />
    </div>
  </div>
</template>

<script>
import { navList } from '../constant';

export default {
  name: 'NavHeader',
  props: {
    title: {
      type: String,
      default: 'Hi，I’m Wayne Hu '
    },
    description: {
      type: String,
      default: 'UI/UX Designer'
    },
    otherContent: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      navList,
    }
  },
  computed: {
    showProfile(){
      return location.hash === '#/about';
    },
  },
  methods:{
    getNav(name){
      return location.hash.substring(2).toUpperCase() === name;
    }
  }
}
</script>
<style lang='less'>
  .header {
    width: 1160px;
    margin: 0 auto;
    nav {
      height: 42px;
      line-height: 42px;
      img {
        width: 42px;
        height: 42px;
      }
      ul {
        float: right;
        li {
          display: inline-block;
          margin-left: 40px;
          position: relative;
          .nav-name {
            color: #807c7c;
          }
          .dot {
            display: inline-block;
            position: absolute;
            color: #fff;
          }
          .dot-left {
            left: -25px;
          }
          .dot-right {
            right: -25px;
          }
          &:hover {
            .nav-name {
              color: #404040;
            }
            .dot {
              color: #404040;
            }
            .dot-left {
              transform: translateX(15px);
              transition-duration: 1s;
            }
            .dot-right {
              transform: translateX(-15px);
              transition-duration: 1s;
            }
          }
        }
        .active {
          .nav-name {
            color: #404040;
          }
          .dot {
            color: #404040;
          }
          .dot-left {
            transform: translateX(15px);
            transition-duration: 1s;
          }
          .dot-right {
            transform: translateX(-15px);
            transition-duration: 1s;
          }
        }
      }
    }
    .title {
      line-height: 56px;
      padding: 108px 0 108px 0;
      position: relative;
      p {
        color: #404040;
        font-weight: 500;
        font-size: 36px;
      }
      .title-sub {
        color: #807c7c;
        font-size:32px;
        font-weight: 200;
      }
      img {
        position: absolute;
        bottom: 0px;
        right: 120px;
        width: 240px;
        height: 267px;
      }
    }
  }
</style>