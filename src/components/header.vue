<template>
  <div class="header">
    <div class="header-nav">
      <nav class="nav clearfix">
        <a href="/#/work">
          <img src="../assets/photo.png" />
        </a>
        <ul class="nav__menus">
          <li v-for="nav in navList" :key="nav.name">
            <a :href="nav.url" :class="{'active': getNav(nav.name)}">
              <span class='dot dot-left'>·</span>
              <span class='nav-name'>{{nav.name}}</span>
              <span class='dot dot-right'>·</span>
            </a>
          </li>
        </ul>
        <div class="app-crumbs" @click="handleChangeCrumbs">
          <span :class="{'app-crumbs-box':true, 'app-crumbs-top':navSwitch }">
            <span :class="{'app-crumbs-line':true, 'app-crumbs-line-top':!navSwitch }" ></span>
          </span>
          <span :class="{'app-crumbs-box':true, 'app-crumbs-bottom':navSwitch}">
            <span :class="{'app-crumbs-line':true, 'app-crumbs-line-bottom':!navSwitch}" />
          </span>
        </div>
      </nav>
    </div>
    <div class="title" :class="{'title-about': showProfile}">
      <p>{{title1}}</p>
      <p :class="{'title-sub':true, 'title-move':show }">{{description}}</p>
      <p :class="{'title-sub':true, 'title-move':show }">{{otherContent}}</p>
      <img src="http://waynehu.art//%E5%8D%8A%E8%BA%AB%E5%83%8F.png" v-if="showProfile" />
    </div>
    <div class="nav-app" :style="{'height': navSwitch ? 'calc(100vh - 120px)':'0px' }">
      <ul>
        <li v-for="nav in navList" :key="nav.name">
          <a :href="nav.url" :class="{'active': getNav(nav.name)}">{{nav.name}}</a>
        </li>
        <li class="nav-app-li">
          <div class="nav-app__theme">
            <themeSwitchApp @handleChangeTheme="handleChangeTheme"></themeSwitchApp>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {navList} from '../constant';
import themeSwitchApp from './themeSwitchApp';

export default {
  name: 'NavHeader',
  components: {
    themeSwitchApp
  },
  props: {
    title: {
      type: String,
      default: 'Hi，I’m Wayne Hu '
    },
    titleList: {
      type: Array,
      default:()=>{
        return [
          'ALBER',
          'EINST',
          'EINBO',
          'DYLANM',
          'ARTINLU',
          'THERKINGJR',
          'NO, N’R BUCKM IN',
          'ST, E’R FULLER TH',
          'OM, A’S EDISO NM',
          'HI, I’M WAYNE HU'
        ]
      }
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
      title1: this.title,
      show: false,
      navSwitch: false,
      navFixed: false,
    }
  },
  mounted() {
    this.titleList.map((item, index)=>{
      setTimeout(()=>{
        this.title1 = item
      }, 100 * index)
    });
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.show = true;
      }, 500)
    });
    window.addEventListener("scroll", this.scroll);
  },
  computed: {
    showProfile(){
      return location.hash === '#/about';
    },
  },
  methods:{
    getNav(name){
      const hashName = location.hash.substring(2).toUpperCase();
      if (name === 'WORK') {
        return hashName === name || hashName === '';
      }
      return hashName === name;
    },
    handleChangeCrumbs(){
      this.navSwitch = !this.navSwitch;
      const classNames = this.navSwitch ? "main main-fold" : 'main';
      document.body.querySelector('.main').setAttribute('class', classNames);
    },
    handleChangeTheme(){
      this.navSwitch = !this.navSwitch;
      const classNames = this.navSwitch ? "main main-fold" : 'main';
      document.body.querySelector('.main').setAttribute('class', classNames);
    },
    scroll(){
      const scrollTop = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.navFixed = scrollTop > 92;
    }
  }
}
</script>
<style lang='less'>
  @keyframes myfade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .header {
    margin:0 auto;
    .header-nav {
      width:100%;
      left:0;
      height: 82px;
      line-height: 42px;
      position: fixed;
      background: var(--nav-bg-color);
      z-index: 300;
      padding-top: 30px;
      backdrop-filter: saturate(180%) blur(20px);
    }
    .header-nav-bg {
      background: transparent;
    }
    .nav {
      height: 82px;
      line-height: 42px;
      margin: 0 auto;
      img {
        width: 42px;
        height: 42px;
      }
      &__menus {
        float: right;
        li {
          display: inline-block;
          margin-left: 40px;
          position: relative;
          .nav-name {
            color: var(--nav-name-color);
          }
          .dot {
            display: inline-block;
            position: absolute;
            color: var(--dot-color);
          }
          .dot-left {
            left: -25px;
          }
          .dot-right {
            right: -25px;
          }
          &:hover {
            .nav-name, .dot {
              color: var(--dot-active-color);
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
          .nav-name, .dot {
            color: var(--dot-active-color);
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
      .app-crumbs {
        float: right;
        position: relative;
        display: none;
        width: 42px;
        height: 42px;
        color:var(--primary-color);
        &-box {
          position: absolute;
          top: 6px;
          right: 0;
          width: 30px;
          height: 30px;
          display: inline-block;
          text-align: center;
          transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        }
        &-top {
          transform: rotate(45deg);
          transition: transform .3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
        } 
        &-bottom {
          transform: rotate(-45deg);
          transition: transform .3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
        }
        &-line {
          display: inline-block;
          width: 20px;
          height: 1px;
          border-radius: 0.5px;
          background:var(--primary-color);
          bottom: 10px;
          position: relative;
          transform: none;
          transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
          &-top {
            transform: translateY(-3px);
            transition:transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s
          }
          &-bottom {
            transform: translateY(3px);
            transition: transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s
          }
        }
      }
    }
    .title {
      line-height: 56px;
      padding: 108px 0 108px 0;
      position: relative;
      p {
        color: var(--primary-color);
        font-weight: 500;
        font-size: 36px;
      }
      .title-sub {
        color: var(--header-sub-title-color);
        font-size:32px;
        font-weight: 200;
        transform: translateY(20px);
        opacity: 0;
      }
      .title-move {
        transform: translateY(0px);
        transition-duration: 1s;
        opacity: 1;
      }
      img {
        position: absolute;
        bottom: 0px;
        right: 120px;
        width: 240px;
        height: 267px;
        -webkit-animation: myfade 2s ease;
        -moz-animation: myfade 2s ease;
        animation: myfade 2s ease;
      }
    }
    .nav-app {
      width: 100%;
      height: 0px;
      position: absolute;
      top: 120px;
      left: 0;
      bottom: 0;
      background: var(--bg-color);
      z-index: 200;
      overflow: hidden;
      color:var(--primary-color);
      transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
      ul {
        width: 375px;
        padding: 20px;
        margin: 0 auto;
        li {
          height: 80px;
          line-height: 80px;
          font-size: 24px;
          font-weight: 300;
          text-align: center;
          a {
            color: var(--primary-color);
          }
          .active{
            color: var(--minor-color);
          }
        }
      }
      &-li {
        margin-top:40px;
      }
      &__theme {
        text-align: center;
        display: inline-block;
      }
    }
    .title-about {
      padding: 128px 0 108px 0;
    }
  }
  @media screen and (max-width: 414px) {
    .header {
      .nav {
        .nav__menus {
          display: none;
        }
        .app-crumbs {
          display: block;
        }
      }
      .title {
        padding: 122px 0 50px;
        line-height: 36px;
        text-align: center;
        .title-sub, p {
          font-size: 20px;
          text-align: left;
        }
        img {
          position: relative;
          right:auto;
          bottom: -50px;
        }
      }
    }
  }
</style>