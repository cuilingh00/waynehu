<template>
  <div class="main">
    <nav-header title="Blog" description="Keep childish, keep curious" />
    <div class="content">
      <medium-card :data="feature1"></medium-card>
      <small-card v-for="blog in BLOG1.concat(BLOG2)" :key="blog.title" :data="blog" />
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
import { navList, theme1, theme2, feature1, feature2, BLOG1, BLOG2 } from '../constant/index';

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
      BLOG1,
      BLOG2,
    };
  },
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";
  .content {
    .blog:nth-child(5n) {
      margin-right: 0px;
    }
    .blog:nth-child(2) {
      margin-right: 0px;
    }
  }
</style>
