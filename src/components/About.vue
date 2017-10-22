<template>
  <div class="main">
    <div class="header">
      <div class="avatar">
      </div>
      <h1>About Zizy</h1>
    </div>
    <img src="../assets/zizy.png" alt="">

  </div>

</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    computed: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    text-align: center;

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
  img{
    margin:auto;
    width:410px;
    max-width: 100%;

  }
</style>
