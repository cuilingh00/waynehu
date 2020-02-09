<template>
  <div class="main">
    <nav-header title="Contact" 
      description="Waynehuliang@gmail.com" 
      otherContent="Live in Hangzhou"
      :titleList="titleList"
    />
    <div class="contact">
      <my-footer />
    </div>
  </div>
</template>

<script>
import NavHeader from './header';
import MyFooter from './footer';
import {navList} from '../constant/index';

export default {
  name: 'mainPage',
  components: {
    NavHeader,
    MyFooter,
  },
  data() {
    return {
      navList,
      titleList: [
        'AM',
        'AMC',
        'COA',
        'BUOU',
        'AGIR',
        'AORGTO',
        'UMAGNY',
        'YOGTWRE',
        'JOGMQOU',
        'CENTOCT',
        'CONTACT',
      ]
    };
  },
};
</script>

<style lang='less'>
  @import "../styles/index.less";
  @import "../styles/global.less";
  .contact {
    position: fixed;
    bottom: 0px;
    width:100%;
  }
  @media screen and (max-width: 414px) {
    .contact {
      position: relative;
      bottom: -40vh;
    }
  }
</style>
