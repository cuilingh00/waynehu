<template>
  <div class="main">
    <nav-header title="Blog" description="Keep childish, keep curious" :titleList="titleList" />
    <div class="content perspective">
      <medium-card :data="feature1"></medium-card>
      <small-card v-for="blog in blog1.slice(0,1)" :key="blog.title" :data="blog" />
      <div class="small-cards">
        <small-card v-for="blog in blog1.slice(1).concat(restBlog)" :key="blog.title" :data="blog" />
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MainCard from './mainCard';
import MediumCard from './mediumCard';
import SmallCard from './smallCard';
import NavHeader from './header';
import MyFooter from './footer';
import { navList, theme1, theme2, feature1, feature2, blog1, mixed1 } from '../constant/index';

export default {
  name: 'mainPage',
  components: {
    MainCard,
    MediumCard,
    SmallCard,
    NavHeader,
    MyFooter,
  },
  data() {
    return {
      navList,
      theme1,
      theme2,
      feature1,
      feature2,
      blog1,
      mixed1,
      titleList: ['M',
        'MU',
        'HAM',
        'MAD',
        'ALI',
        'TEDT',
        'URNE',
        'RMAR',
        'IACA',
        'BLAG',
        'BLOG'
      ]
    };
  },
  computed:{
    restBlog(){
      return this.mixed1.filter(item=>{
        return item.tag === 'blog';
      })
    }
  }
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";
</style>
