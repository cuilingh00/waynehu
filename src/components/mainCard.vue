<template>
  <a class="theme" :href="data.url" target="_blank">
    <div class="theme-text">
      <img src="" />
      <div class="title">{{data.title}}</div>
      <div class="description">{{data.description}}</div>
      <div class="label">{{data.label}}</div>
    </div>
    <div class="theme-image">
      <div class="image-wrapper">
          <img :src="data.image" />
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: 'MainCard',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }

  }
}
</script>
<style lang="less">
  .theme {
    height: 450px;
    width: 100%;
    background: #fff;
    display: inline-block;
    margin-bottom: 40px;
    font-size: 0;
    vertical-align: top;
    font-family: PingFangSC-Regular, PingFang SC;
    &-text {
      padding: 50px 0 0 50px;
      display: inline-block;
      vertical-align: top;
      position: relative;
      height: 450px;
      width: 460px;
      img {
        width: 54px;
        height: 54px;
      }
      .title {
        margin-top: 50px;
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 33px;
        font-weight: 500;
        color:rgba(64, 64, 64, 1);
      }
      .description {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: rgba(128, 124, 124, 1)
      }
      .label {
        position: absolute;
        bottom: 30px;
        font-size: 12px;
        line-height: 17px;
        font-weight: 400;
        color: rgba(128, 124, 124, 1)
      }
    }
    &-image {
      display: inline-block;
      vertical-align: top;
      .image-wrapper {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        height: 450px;
        width: 700px;
        img {
          max-height: 450px;
          max-width: 700px;
        }
      }
    }
  }
</style>