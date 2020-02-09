<template>
  <div id="app">
    <router-view/>
    <themeSwitch />
    <div class="circle-bg"></div>
  </div>
</template>

<script>
import themeSwitch from './components/themeSwitch';

export default {
  name: 'App',
  components: {
    themeSwitch,
  }
};
</script>

