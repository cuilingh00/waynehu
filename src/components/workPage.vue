<template>
  <div class="main">
    <nav-header title="Work" description="It's Not a Job, It's a Lifestyle." :titleList="titleList" />
    <div class="content perspective">
      <main-card :data="theme1"></main-card>
      <medium-card :data="feature2"></medium-card>
      <small-card v-for="blog in work1" :key="blog.title" :data="blog" />
      <main-card :data="theme2"></main-card>
      <div class="small-cards">
        <small-card v-for="blog in restWork" :key="blog.title" :data="blog" />
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
import {navList, theme1, theme2, feature2, work1, mixed1} from '../constant/index';

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
      feature2,
      work1,
      mixed1,
      titleList:[
        'U',
        'UH',
        'AMM',
        'ADA',
        'LIT',
        'EDTU',
        'RNER',
        'MARI',
        'ACAL',
        'WARK',
        'WORK',
      ]
    };
  },
  computed:{
    restWork(){
      return this.mixed1.filter((item)=>{
        return item.tag === 'work';
      })
    }
  }
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";
</style>
