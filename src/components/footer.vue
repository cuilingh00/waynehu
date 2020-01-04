<template>
  <footer class="footer clearfix">
    <p>{{content}}</p>
    <div class="share">
      
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  props: {
  },
  data(){
    return {
      content: 'Designed by waynehu'
    }
  }
}
</script>
<style lang='less'>
  footer {
    width: 1160px;
    margin: 0 auto;
    height: 96px;
    line-height: 96px;
    color: rgba(158, 158, 158, 1);
    border-top:1px solid rgba(232,232,232,1);
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    .share {
      float: right;
    }
  }
</style> 