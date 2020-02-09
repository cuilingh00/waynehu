<template>
  <div class="main">
    <nav-header title="Blog" description="Keep childish, keep curious" :titleList="titleList" />
    <div class="introduce">
      <div class="introduce-box">
        <i class="iconfont iconicon-test"></i>
        <div class="introduce-content">
          90年出生的我，2014年从安庆师范大学艺术设计专业毕业后，一直从事于UI/UX方面的工作。之所以会选择做UI/UX设计师，是因为一直喜爱设计，同时对于科技互联网也是十分的着迷，每次有新的产品发布或是新的技术出现都会迫不及待的去体验，UI/UX恰好满足了我这两点爱好。
        </div>
        <div class="introduce-content">
          14-16年曾就职于上海Careerfrog，主要产品为知识共享平台8点后，因为是创业公司所以属于全栈式包括前期的用户研究与中期设计工作，以至于后期的产品迭代方向的讨论与参与。16年至今就职于阿里巴巴与浙江省财政厅合资成立的政采云网络有限公司，致力于改变浙江省乃至全国政府采购现状，从公司成立初期的10个人到现在公司发展到500人。在设计UED团队中主要负责设计规范的制定与落地以及政采云移动端，前台相关用户体验设计。作为新人导师，带领新人快速成长。
        </div>
        <div class="introduce-content">
          除了设计，其它的兴趣爱好也很多，比如NBA，电影，汽车，阅读，摄影，同时也是科技迷，会因为一些好的产品而兴奋好几天，而且会一直对周围的人安利。
        </div>
        <div class="introduce-content">
          平时也会通过写作记录自己的一些看法和感想。也开通了自己的个人微信订阅号：阿来bata。，其中几篇文章也被优设网，UI中国，IXDC转载过。不过现在发现语雀似乎更适合去记录自己的想法和工作。
        </div>
        <div class="introduce-content">
          是一个不折不扣的果粉，不仅仅是苹果那些伟大的产品，哪怕是一场新店开业的活动都能令我兴奋不已，大学期间就经常通宵睡商场地上去等待苹果旗舰店的开业。崇拜苹果对于设计上的追求与赋能，可以说正是因为苹果让我们现在的互联网生态是如此的繁华。包括人们开始相信一个科技公司以设计为导向是没问题的。
        </div>
        <div class="introduce-content">
          希望自己可以一直爱设计，学设计，做设计。
        </div>
        <i class="iconfont iconjiewei"></i>
      </div>
    </div>
    <my-footer class="introduce-footer" />
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
        'UM',
        'UMA',
        'COA',
        'BUOU',
        'AGIR',
        'AORGT O',
        'UMAGN Y',
        'YOGTW RE',
        'JOGMQ OU',
        'ABYUT MO',
        'ABOUT ME'
      ]
    };
  },
};
</script>

<style lang='less'>
@import "../styles/index.less";
@import "../styles/global.less";
  body {
    background-color: var(--about-bg-color);
  }
  .introduce {
    background: var(--introduce-bg-color);
    .introduce-box {
      width: 620px;
      margin: 0 auto;
      padding: 40px 0 60px;
    }
    .iconicon-test, .iconjiewei {
      color:#DEDEDE;
      display: block;
    }
    .iconicon-test {
      margin-bottom: 40px;
    }
    .iconjiewei {
      margin-top: 40px;
    }
    &-content {
      font-size:14px;
      font-family:PingFang SC;
      font-weight:400;
      color: var(--introduce-color);
      line-height:28px;
      & + & {
        margin-top: 28px;
      }
    }
    &-footer {
      background: var(--introduce-bg-color);
    }
  }
  @media screen and (max-width: 414px) {
    .introduce {
      margin: 0 -20px;
      .introduce-box {
        width: 100%;
        padding: 20px 40px;
        margin: 0 0 40px;
      }
      &-footer {
        background: #fafafa;
      }
    }
  }
</style>
