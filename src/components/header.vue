<template>
  <div class="header">
    <nav class="nav clearfix">
      <a href="/">
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
    </nav>
    <div class="title" :class="{'title-ablout': showProfile}">
      <p>{{title1}}</p>
      <p :class="{'title-sub':true, 'title-move':show }">{{description}}</p>
      <p :class="{'title-sub':true, 'title-move':show }">{{otherContent}}</p>
      <img src="http://waynehu.art//%E5%8D%8A%E8%BA%AB%E5%83%8F.png" v-if="showProfile" />
    </div>
  </div>
</template>

<script>
import {navList} from '../constant';

export default {
  name: 'NavHeader',
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
      show: false
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
    })
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
    margin: 30px auto 0;
    .nav {
      height: 42px;
      line-height: 42px;
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

  }
  @media screen and (max-width: 414px) {
    .header {
      .nav__menus {
        display: none;
      }
      .title {
        padding:50px 0;
        line-height: 36px;
        text-align: center;
        .title-sub, p {
          font-size: 20px;
          text-align: left;
        }
        img {
          position: relative;
          right:auto;
          bottom: -85px;
        }
      }
      .title-ablout {
        padding: 50px 0 0 0;
        height: 476px;
      }
    }
  }
</style>