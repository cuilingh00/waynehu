<template>
  <div class="theme-switch">
    <div class="theme-switch__line"></div>
    <div class="theme-switch__wrapper" @click="handleClickTheme">
      <i :class="['iconfont', changed ? 'icontaiyang' : 'iconyewan']"></i>
    </div>
  </div>
</template>
<script>
import {dark, light} from '../constant/theme';

export default {
  name: 'theme-switch',
  data(){
    return {
      changed: false,
      root: document.documentElement,
      timer: 0,
    }
  },
  methods:{
    handleClickTheme(){
      document.body.querySelector('.theme-switch').setAttribute('class', 'theme-switch bulb-move');
      setTimeout(() => {
        this.changed = !this.changed;
        const theme = this.changed ? 'dark' : 'light';
        this.handleThemeUpdate(theme);
        document.body.querySelector('.theme-switch').setAttribute('class', 'theme-switch');
      }, 2000);
    },
    handleThemeUpdate(theme) {
      switch (theme) {
        case 'dark': 
          document.body.querySelector('.circle-bg').setAttribute('class', 'circle-bg dark-circle');
          this.handleSetProperty(dark);
          this.timer = setTimeout(() => {
            this.root.style.setProperty('--bg-color', '#000');
            document.body.querySelector('.circle-bg').setAttribute('class', 'circle-bg');
          }, 1000);
          break
        case 'light':
          clearTimeout(this.timer);
          document.body.querySelector('.circle-bg').setAttribute('class', 'circle-bg');
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
@keyframes changeDark {
  0% {
    transform:scale(1)
  }
  50% {
    transform:scale(50)
  }
  100% {
    transform:scale(100)
  }
}

@keyframes bulbMove {
  0% {
    top: 0px;
  }
  10% {
    top: -40px;
  }
  100% {
    top: 0px;
  }
}
@keyframes bulbCircle {
  100% {
    transform: rotate(-360deg)
  }
}

.theme-switch {
  position: absolute;
  right:45px;
  top:0px;
  text-align: center;
  &__line {
    width:1px;
    height:80px;
    border-left: 1px solid var(--theme-switch-line-color);
    display: inline-block;
  }
  &__wrapper {
    width: 33px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.08);
    line-height: 32px;
    position: absolute;
    left: -16px;
    top: 77px;
    z-index: 100;
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
.dark-circle {
  position: absolute;
  right: 0px;
  top: 53px;
  width:20vh;
  height:20vh;
  border-radius: 50%;
  background: #000;
  z-index:-2;
  animation: changeDark 3s 1 linear;
}
.bulb-move {
  animation: bulbMove 4s 1 linear;
  .iconfont {
    animation: bulbCircle 0.5s 1s 5 linear;
  }
}
</style>