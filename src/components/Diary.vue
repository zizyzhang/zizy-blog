<template>

  <div class="main container  ">


    <div class="header">
      <div class="avatar">
      </div>
      <h1>Zizy's life</h1>
      <div>---每周一更新---</div>
    </div>
    <div v-if="articles.length===0" class="loading">加载中，请稍后...</div>
    <div id="diaryList" class="content ">
      <ul class="list-group">

        <li
          v-for="(article, index) of articles">
          <div class="year"
               v-if="index === 0 || articles.length>1&& (articles[index-1]&&new Date(articles[index-1].date)).getYear()!==new Date(article.date).getYear()">{{new
            Date(article.date).getYear()+1900}}年
          </div>
          <div :id="article.id" class="list-group-item list-group-item-action"
               :class="{'list-group-item-expand':isExpand}"
               @click="expand(article.id)">
            <div v-if="!!article.img_url" class="img" :class="{'img-expand':isExpand}"
                 :style="{'background-image': 'url(http://qiniu-zizyblog.shushubuyue.net/' + article.img_url.replace('http://owdi2r4ca.bkt.clouddn.com/','') + ')'}"></div>
            <div class="title" >{{article.title.replace(/[#*]/g,'')}}</div>
            <div class="text" :class="{'text-expand':isExpand}" v-html="article.content"></div>
            <div class="month">{{new Date(article.date).getUTCMonth()+1}}月</div>
            <div class="day">{{new Date(article.date).getUTCDate()}}</div>
          </div>

        </li>
      </ul>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'diary',
    beforeRouteLeave (to, from, next) {
      $('#diaryList').infiniteScroll('destroy');
      console.log('destoryed');      // 可以访问组件实例 `this`
      next();
    },

    mounted:function(){
      let that = this;
      Pace.start();
      axios.get('http://api.unclenoway.com:3011/posts/0/10').then(data=>{
        for (let i =0;i<data.data.length;i++) {
          data.data[i].content=data.data[i].content.replace(/\n/g,'<br>').replace(/^<br>/,'')
        }


        that.articles = data.data;

        Pace.stop();
      });


      let $diaryList = $('#diaryList').infiniteScroll({
        // options
        path:function() {
          var pageNumber = ( this.loadCount + 1 ) * 10;
          return `http://api.unclenoway.com:3011/posts/${pageNumber}/10`;
        },
        // append: '',
        // load page as text
        responseType: 'text',
        history: false,
      });
      $diaryList.on( 'load.infiniteScroll', function( event, response ) {
        // prase response text into JSON data
        var data = JSON.parse( response );
        // put that data into template
        that.articles=that.articles.concat(data)
        Pace.stop();

      });
      $diaryList.on( 'request.infiniteScroll', function( event, response ) {
        Pace.start();

      });
    },
    data() {
      return {
        articles: this.getArticles(),
        isExpand: false,
      }
    },
    methods: {
      getArticles: function () {
        return [ ]
      },
      expand: function (id) {
        $('#' + id).toggleClass('list-group-item-expand')
        $('#' + id).children('.text').toggleClass('text-expand');
        $('#' + id).children('.title').toggleClass('title-expand');
        $('#' + id).children('.img').toggleClass('img-expand');
        if ($('#' + id).children('.img').hasClass('img-expand')) {
          $('#' + id).children('.img').height($('#' + id).children('.img').width());
          $('#' + id).children('.day,.month').css('padding-top', $('#' + id).children('.img').height());
        } else {
          $('#' + id).children('.img').height('80px');
          $('#' + id).children('.day,.month').css('padding-top', '0px');

        }

      },
      getPath:function(skip){
        return `http://localhost:3011/posts/${skip}/10`
      }
    },

  }

</script>
<style scoped>
  .container {
    padding: 5px !important;
  }

  .list-group li {
    margin-top: 0.5rem;
  }

  .avatar {
    background: url("http://owdi2r4ca.bkt.clouddn.com/avatar.jpg");
    width: 100px;
    height: 100px;
    background-size: cover;
    margin: auto;
    border-radius: 10px;

  }
  .loading{
    text-align: center;
    margin: 4rem;
    font-size: 1.5rem
  }

  .header {
    text-align: center;

  }

  .content .list-group-item {
    padding: .55rem 0.55rem;
    height: 100px;

  }

  .content .list-group-item-expand {
    height: auto !important;
  }

  .content .img {
    float: left;
    margin: 0rem 0.7rem 0rem 0rem;
    border-radius: 5px;
    background-size: cover;
    width: 80px;
    height: 80px;

  }

  .content .img-expand {
    float: none;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 350px;
    margin: auto;

  }

  .content .title {
    font-weight: 900;
    margin-right: 5rem;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .content .title-expand {
    white-space: normal !important;
  }

  .content .text {
    margin-right: 5rem;
    height: 3.2rem;
    white-space: normal;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .text-expand {
    overflow: hidden;
    height: auto !important;

  }

  .content .month {
    position: absolute;
    right: 2.5rem;
    font-size: 12pt;
    display: flex !important;
    top: -2rem;
    height: 100%;
    align-items: center;
  }

  .content .day {
    position: absolute;
    right: 1rem;
    font-size: 30pt;
    display: flex !important;
    top: 0;
    height: 100%;
    align-items: center;
  }

</style>
