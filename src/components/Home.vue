<template>
  <div class="container">
    <div class="header">
      <div class="avatar">
      </div>
      <h1>Zizy's Blog</h1>

    </div>
    <div class="entry-buttons">
      <div style="text-align: center" :class="{'hidden':true}"><b>不支持在微信中打开此博客，请在浏览器中打开 http://zizy.me。</b></div>
      <router-link  to="/diary" class="btn btn-primary btn-block hidden" :style="buttonDisplay">Zizy的日记</router-link>
      <router-link  to="/about" class="btn btn-success btn-block hidden" :style="buttonDisplay">关于Zizy</router-link>

    </div>
  </div>


</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        window: window,
        inWechat: window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) !== 'micromessenger',
        buttonDisplay: {display: 'block!important'}
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hidden{
    display: none;
  }
  .container {
    padding: 5px !important;
  }

  .avatar {
    background: url("http://qiniu-zizyblog.shushubuyue.net/avatar.jpg");
    width: 100px;
    height: 100px;
    background-size: cover;
    margin: auto;
    border-radius: 10px;

  }

  .header h1 {
    text-align: center;

  }

  .entry-buttons {
    display: flex;
    width: 100%;
    flex-flow: column;
    bottom: 0;
    left: 0;
    top: 13rem;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
  }

  .entry-buttons a {
    width: 20rem;
    height: 3rem;
    margin: 2rem;
    line-height: 1.9rem
  }

</style>
