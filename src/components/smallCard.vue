<template>
  <a :href="data.url" target="_blank" class="blog">
    <div class="blog-image">
      <img src="../assets/logo.png" />
    </div>
    <div class="blog-content">
      <div class="title">{{data.title}}</div>
      <div class="description">{{data.description}}</div>
      <div class="label">{{data.label}}</div>
    </div>
  </a>
</template>

<script>

export default {
  name: 'smallCard',
  props: {
    data: {
      type: Object,
      default:()=>{
        return {}
      }
    }
  }
}
</script>
<style lang='less'>
  .blog {
    height: 450px;
    width: 360px;
    background: #fff;
    display: inline-block;
    margin-bottom: 40px;
    margin-right: 40px;
    font-size: 0;
    vertical-align: top;
    position: relative;
    font-family: PingFangSC-Regular, PingFang SC;
    &-image {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      height: 240px;
      width: 360px;
      img {
        max-height: 240px;
        max-width: 360px;
      }
    }
    &-content {
      padding: 32px 0 0 30px;
      .title {
        margin-top: 0;
        margin-bottom: 13px;
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
  }
  
</style>