<template>
  <div class="loading">
    <div class="loading-box">
      <p class="loading-item loading-row">{{text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      loadList: ['不够大气', 'Logo再大点', '再改改吧', '那个美工, 过来一下', '还是用第一稿吧'],
      time: 0,
      text: ''
    }
  },
  mounted() {
    document.body.querySelector('.loading-item').setAttribute('class', 'loading-item loading-row');
    this.getText()
    setInterval(this.getText, 2000)
  },
  computed: {
  },
  methods:{
    getText() {
      if (this.time > this.loadList.length - 1) {
        this.time = 0;
      }
      this.text = this.loadList[this.time]
      this.time += 1;
    }
  }
}
</script>
<style lang="less">
@keyframes rowup {
  0% {
    transform: translate(0, 0);
    opacity: 0
  }
  20% {
    transform: translate(0, -20px);
    opacity: 1
  }
  80% {
    transform: translate(0, -20px);
    opacity: 1
  }
  100% {
    transform: translate(0, -40px);
    opacity: 0
  }
}
@keyframes boxmove {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -40px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
.loading {
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 1160px;
  &-box {
    margin-top: 50vh;
  }
  &-row {
    animation: rowup 2s infinite linear;
  }
  p {
    color: #b6b6b6;
    line-height: 26px;
    font-size: 26px;
    font-weight: 300;
  }
}

</style>
