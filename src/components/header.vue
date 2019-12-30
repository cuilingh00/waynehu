<template>
  <div>
    <nav class="clearfix">
      <img src="" />
      <ul>
        <li v-for="nav in navList" :key="nav.name">
          <a :href="nav.url">
            {{nav.name}}
          </a>
        </li>
      </ul>
    </nav>
    <div class="title">
      <p>{{title}}</p>
      <p>{{description}}</p>
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
    }
  },
  data(){
    return {
      navList,
    }
  }
}
</script>
<style lang='less'>
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
        margin-right: 40px;
        
      }
    }
  }
  .title {
    line-height: 56px;
    font-size: 36px;
    margin: 112px 0 104px 0;
    font-family:PingFangSC-Semibold,PingFang SC;
    p {
      color: #404040;
      &:last-child {
        color: #807c7c;
      }
    }
  }
</style> 