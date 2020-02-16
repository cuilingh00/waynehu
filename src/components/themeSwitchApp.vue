<template>
  <div class="theme-switch-app">
    <div class="theme-switch-app__wrapper" @click="handleClickTheme">
      <i :class="['iconfont', changed ? 'icontaiyang' : 'iconyewan']"></i>
    </div>
  </div>
</template>
<script>
import {dark, light} from '../constant/theme';

export default {
  name: 'theme-switch-app',
  data(){
    return {
      changed: false,
      root: document.documentElement,
      timer: 0,
    }
  },
  methods:{
    handleClickTheme(){
      document.body.querySelector('.theme-switch-app').setAttribute('class', 'theme-switch-app bulb-move-app');
      setTimeout(() => {
        this.$emit('handleChangeTheme');
        this.changed = !this.changed;
        const theme = this.changed ? 'dark' : 'light';
        this.handleThemeUpdate(theme);
        document.body.querySelector('.theme-switch-app').setAttribute('class', 'theme-switch-app');
      }, 1000);
    },
    handleThemeUpdate(theme) {
      switch (theme) {
        case 'dark': 
          this.root.style.setProperty('--bg-color', '#000');
          this.handleSetProperty(dark);
          break
        case 'light':
          this.handleSetProperty(light);
          break
        default:
          this.handleSetProperty(light);
      }
    },
    handleSetProperty(obj){
      Object.keys(obj).map((item)=>{
        this.root.style.setProperty(item, obj[item])
      })
    }
  }
}
</script>
<style lang="less">
@keyframes bulbCircle {
  100% {
    transform: rotate(-360deg)
  }
}

.theme-switch-app {
  &__wrapper {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.08);
    line-height: 34px;
    background: var(--theme-switch-bg-color);
    cursor: pointer;
  }
  .iconyewan {
    color: #6e3eaf;
    font-size: 16px;
    display: inline-block;
  }
  .icontaiyang {
    color: #f9c627;
    font-size: 18px;
    display: inline-block;
  }
}
.bulb-move-app {
  .iconfont {
    animation: bulbCircle 0.5s 5 linear;
  }
}
</style>