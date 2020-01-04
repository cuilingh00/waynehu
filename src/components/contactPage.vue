<template>
  <div class="main">
    <nav-header title="Contact" description="Waynehuliang@gmail.com" otherContent="Live in Hangzhou" />
    <div class="contact">
      <my-footer />
    </div>
  </div>
</template>

<script>
import NavHeader from './header';
import MyFooter from './footer';
import { navList } from '../constant/index';

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
.contact {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
