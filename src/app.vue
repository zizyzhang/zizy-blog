<template>
  <div id="app" class="bg-light">
    <div style="position: absolute;z-index:999;font-size: 1rem;background: #cccccc;height: 150rem;width: 100%"
         :class="{'hidden':true}">
      <div>进入中...</div>
      <div><span style="text-align: center;color: black;font-weight: bold">——Zizy's Blog——</span></div>
      </div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" href="#">Zizy's Blog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link to="/diary" class="nav-link nav-diary" name="diary">日记</router-link>

          </li>
          <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="#">想法</a>-->
          <!--</li>-->
          <li class="nav-item">
            <router-link to="/about" class="nav-link nav-about" name="about">关于</router-link>
          </li>
          <li class="nav-item nav-hide">
            <router-link to="/post" class="nav-link " name="about">POST</router-link>
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
  .nav-hide{
    position: absolute;
    right: 0;
    opacity: 0.02;
  }
  .hidden {
    display: none;
  }

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

  #app {

  }

  .router-link-active {
    color: rgba(0, 0, 0, .9) !important;
  }


</style>
