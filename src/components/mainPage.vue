<template>
  <div class="main">
    <nav-header />
    <div class="content perspective">
      <main-card :data="theme1"></main-card>
      <medium-card :data="feature1"></medium-card>
      <small-card v-for="blog in blog1.slice(0,1)" :key="blog.title" :data="blog" />
      <div class="small-cards">
        <small-card v-for="blog in blog1.slice(1)" :key="blog.title" :data="blog" />
      </div>
      <medium-card :data="feature2"></medium-card>
      <small-card v-for="blog in work1" :key="blog.title" :data="blog" />
      <main-card :data="theme2"></main-card>
      <div class="small-cards">
        <small-card v-for="blog in mixed1" :key="blog.title" :data="blog" />
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
import {navList, theme1, theme2, feature1, feature2, blog1, work1, mixed1} from '../constant/index';

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
      work1,
      mixed1
    };
  },
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";
</style>
