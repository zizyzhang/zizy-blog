<template>
  <div id="app" class="bg-light">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" href="#">Zizy's Blog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link to="/diary"  class="nav-link nav-diary" name="diary">日记</router-link>

          </li>
          <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="#">想法</a>-->
          <!--</li>-->
          <li class="nav-item">
            <router-link to="/about" class="nav-link nav-about" name="about">关于</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  .browsehappy {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }

  /* Space out content a bit */
  body {
    /*padding-bottom: 20px;*/
  }

  #app{

  }

  .router-link-active{
    color: rgba(0, 0, 0, .9) !important;
  }


</style>
