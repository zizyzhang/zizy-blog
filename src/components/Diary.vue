<template>

  <div class="main container  ">


    <div class="header">
      <div class="avatar">
      </div>
      <h1>Zizy's life</h1>
      <div>---心情好就更新---</div>
    </div>
    <div v-if="articles.length===0" class="loading">加载中，请稍后...</div>
    <div id="diaryList" class="content ">
      <ul class="list-group">
        <div v-for="(article, index) of articles">
          <li class="year" v-if="index === 0 || articles.length>1&& (articles[index-1]&&new Date(articles[index-1].date)).getYear()!==new Date(article.date).getYear()">
            <div >
              {{new Date(article.date).getYear()+1900}}年
            </div>
          </li>
          <div :id="article.id" class="list-group-item list-group-item-action diary-list-item"
               :class="{'list-group-item-expand':isExpand}"
               @click="expand(article.id)">
            <div v-if="!!article.img_url" class="img" :class="{'img-expand':isExpand}"
                 :style="{'background-image': 'url(http://qiniu-zizyblog.shushubuyue.net/' + article.img_url.replace('http://owdi2r4ca.bkt.clouddn.com/','') + ')'}">
              <img :src="'http://qiniu-zizyblog.shushubuyue.net/' + article.img_url.replace('http://owdi2r4ca.bkt.clouddn.com/','')" style="width: 100%" alt="">
            </div>
            <div class="title" >
              <div class="" v-html="article.title.replace(/[#*]/g,'')"></div>
              <a href="javascript:;" class=update-one @click.stop=updateOne(article.id)>更改</a>
            </div>
            <div class="text" :class="{'text-expand':isExpand}" v-html="article.content.replace(/\n/g,'<br>').replace(/^<br>/,'')"></div>
            <div class="month">{{new Date(new Date(article.date)).getMonth()+1}}月</div>
            <div class="day" @>{{new Date(new Date(article.date) ).getDate()}}</div>
          </div>
        </div>

      </ul>
    </div>


  </div>

</template>


<script>
  import store from 'storejs';
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
      axios.get('http://api.unclenowayapi.com:8083/posts/0/10').then(data=>{
        // for (let i =0;i<data.data.length;i++) {
        //   data.data[i].content=data.data[i].content.replace(/\n/g,'<br>').replace(/^<br>/,'')
        // }


        that.articles = data.data;

        Pace.stop();
      });


      let $diaryList = $('#diaryList').infiniteScroll({
        // options
        path:function() {
          var pageNumber = ( this.loadCount + 1 ) * 10;
          return `http://api.unclenowayapi.com:8083/posts/${pageNumber}/10`;
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
      updateOne(id){
        if( (!store.get('admin')) && (prompt()!=='admin')) return;
        store.set('admin', true);
        // alert('')
        let {content, img_url, title,date} = this.articles.find(a => a.id === id);
        // store.set('content', content);
        // store.set('imgUrl', img_url);
        // store.set('title', title);
        // store.set('date', date);
        this.$router.push({
          name:'post',
          params:{id: id,content,imgUrl:img_url,title,date}
        })
      },
      getArticles: function () {
        return [ ]
      },
      expand: function (id) {
        $('#' + id).toggleClass('list-group-item-expand')
        $('#' + id).children('.text').toggleClass('text-expand');
        $('#' + id).children('.title').toggleClass('title-expand');
        $('#' + id).children('.img').toggleClass('img-expand');
        if ($('#' + id).children('.img').hasClass('img-expand')) {
          // $('#' + id).children('.img').height($('#' + id).children('.img').width());
          $('#' + id).children('.img').height('auto');
          $('#' + id).children('.day,.month').css('padding-top', $('#' + id).children('.img').height());
        } else {
          $('#' + id).children('.img').height('80px');
          $('#' + id).children('.day,.month').css('padding-top', '0px');

        }

      },
      getPath:function(skip){
        return `http://localhost:8083/posts/${skip}/10`
      }
    },

  }

</script>
<style>
  .update-one{
    opacity: 0.01;
    position: absolute;
    right: 0;
    top: 0;
  }
  .year{
    margin: 0 1.2rem;
  }
  .diary-list-item{
    margin: 0.5rem 0;
  }
  .container {
    padding: 5px !important;
  }

  .list-group li {
    margin-top: 0.5rem;
  }

  .avatar {
    background: url("http://qiniu-zizyblog.shushubuyue.net/avatar.jpg");
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
  .content{
    margin: 0 0.5rem;
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
    overflow: hidden;
    height: 80px;

  }

  .content .img-expand {
    float: none;
    background-size: cover;
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
