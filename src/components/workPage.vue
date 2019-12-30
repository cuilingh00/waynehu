<template>
  <div class="main">
    <nav-header title="Work" description="It's Not a Job, It's a Lifestyle." />
    <div class="content">
      <main-card :data="theme1"></main-card>
      <medium-card :data="feature2"></medium-card>
      <small-card v-for="blog in work1" :key="blog.title" :data="blog" />
      <main-card :data="theme2"></main-card>
      <small-card v-for="blog in work2" :key="blog.title" :data="blog" />
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
import { navList, theme1, theme2, feature1, feature2, work1, work2 } from '../constant/index';

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
      work1,
      work2,
    };
  },
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";
  .content {
    .blog:nth-child(3n + 1) {
      margin-right: 0px;
    }
    .blog:nth-child(3) {
      margin-right: 0px;
    }
  }
</style>
