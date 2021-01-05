<template>
  <div class="main container">
    <div class="header">
      <div class="avatar">
      </div>
      <h1>Zizy Zhang</h1>
    </div>

    <div class="content" v-html="infoMarked"></div>

  </div>

</template>

<script>
  export default {
    name: 'about',
    mounted: function () {
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        preMarked: `
---
#### 简介:
> 0. 95年出生于浙江，目前定居深圳。
> 1. 研究生：香港大学CS(MSc)
> 2. 本科：铭传大学(台湾) + 交换生经历(美国)
> 3. 熟练掌握Node.js全栈开发。对SPA开发与运营有丰富经验。对数据分析、NLP有一定的实践经验。
> 4. 非常喜欢羽毛球与美食，理想是30岁开始成为一位优秀的美食博主。
> 5. 正在学习量化交易，希望借此达成提前退休的目标。
#### 联系方式:
> 1. 微信：mezizy
> 2. 邮箱：mezizy@live.com
###

> 编辑于2020年8月28日`,
      }
    },
    computed: {
      infoMarked() {
        return markdown.toHTML(this.preMarked)
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    /*text-align: center;*/

  }

  .avatar {
    background: url("http://owdi2r4ca.bkt.clouddn.com/avatar.jpg");
    width: 100px;
    height: 100px;
    background-size: cover;
    margin: auto;
    border-radius: 10px;

  }

  .header h1 {
    text-align: center;

  }

  img {
    margin: auto;
    width: 410px;
    max-width: 100%;

  }
</style>
