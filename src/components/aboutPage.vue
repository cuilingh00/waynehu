<template>
  <div class="main">
    <nav-header title="Blog" description="Keep childish, keep curious" />
    <div class="content">
      
      lll
    </div>
    <my-footer />
  </div>
</template>

<script>
import NavHeader from './header';
import MyFooter from './footer';
// import { } from '../constant/index';

export default {
  name: 'mainPage',
  components: {
    NavHeader,
    MyFooter,
  },
  data() {
    return {
      navList,
    };
  },
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";

</style>
