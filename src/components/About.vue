<template>
  <div class="main container">
    <div class="header">
      <div class="avatar">
      </div>
      <h1>张子豪(Zizy)</h1>
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
> 1. 香港大学CS研究生(MSc)毕业, 论文课题'DNN (Deep Neural Network) Based Singing Voice Synthesis System'
> 2. 铭传大学(台湾)系排**1/151**, GPA: **94%** 毕业
> 3. 深圳市未闻网络科技有限公司创始人
> 4. 日均访问人数约**3万人**的网站「叔叔不约-匿名聊天网」创办人、全栈工程师
> 5. 熟练掌握前端开发、Node.js全栈开发技能。对网站/App的开发、运营、维护、推广均有深刻了解。
#### 联系方式:

- e-mail : mezizy@live.com
- wechat : mezizy

#### 目前项目:

**叔叔不约匿名聊天网 - 随机1对1匿名聊天平台 (WEB)	**

- 独立开发前端及后端程序(Node.js+MongoDB+SQLite+Vue.js+SUI等)
- 进行相关SEO，运营和推广。成功在微博、贴吧、豆瓣等社群中获得很大关注。
- 近期平均IP：3万/每日 （2018年6月）
- 微信公众号人数**20w**以上
- 从2016年4月开始**持续盈利**，会员平均复购率在**54%**以上
- 网址:
  - [www.unclenoway.com]()
  - [www.shushubuyue.com]()



> 编辑于2019年1月25日`,
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
