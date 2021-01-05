<template>
  <div class="post">
    <div class="post-block">标题：<input type="text" v-model="title"></div>
    <div class="post-block">日期：<input type="text" v-model="date"></div>
    <div class="post-block"> 内容：<textarea rows="10" v-model="content"></textarea></div>
    <div class="post-block">
      图片：<span style="    font-size: 1pt;">{{imgUrl}}</span>
      <div>
        <button id="btnUploadImg">上传</button>
      </div>
      <span style="margin-left: 2rem">压缩：</span><input type="checkbox" v-model="isCompress"
                                                       style="width: auto!important;">
    </div>

    <div class="post-block">
      <button @click="(window.confirm('清空')) && clear()">清空</button>
      <button v-if="!id" @click="post">确认添加</button>
      <button v-if="id" @click="updateOne">更新</button>
      <button v-if="id" @click="deleteOne">删除</button>
      <button v-if="id" @click="quitUpdate">退出编辑</button>

    </div>
    <img class="img" :src="'http://qiniu-zizyblog.shushubuyue.net/'+imgUrl" alt="">

  </div>
</template>

<script>
  import plupload from 'plupload';
  import store from 'storejs';


  // import qiniu from 'qiniu';

  export default {
    name: "Post",
    data: () => {
      return {
        id: '',
        title: store.get('title') || '',
        content: store.get('content') || '',
        date: store.get('date') || new Date().toLocaleDateString(),
        imgUrl: store.get('imgUrl') || '',
        isCompress: (store.get('isCompress') === true) || (store.get('isCompress') === undefined),
        window:window
      }
    },
    methods: {
      qiniuInit(id, callback) {
        // $('#btnSendImageFreeChat~.moxie-shim').remove();


        let that = this;

        function set_upload_param(up, filename) {

          up.setOption({
            'multipart_params': {
              'key': Date.now() + '' + Math.ceil(Math.random() * 100) + filename.substring(filename.lastIndexOf('.')),
              'token': 'iA3gnEgSUuEeb7KGngGuCJRDvd7BbwKGnZnei4Yb:yCXeveoo-Z-Al0SbphQPIyUqS9g=:eyJzY29wZSI6InppenlibG9nIiwiZGVhZGxpbmUiOjMxNjQ4NTAxMzh9'
            }
          });

          up.start();
        }

        var uploader = new plupload.Uploader({
          runtimes: 'html5,flash,html4',
          browse_button: id,
          multi_selection: false,
          // container: document.getElementById('msgImgContainer'),
          flash_swf_url: 'http://cdnjs.cloudflare.com/ajax/libs/plupload/3.1.2/Moxie.swf',
          url: 'http://upload.qiniup.com',
          resize: {
            width: 2048,
            height: 2048,
            quality: 70,
            preserve_headers: false
          },
          init: {
            PostInit: function () {

            },

            FilesAdded: function (up, files) {
              if (files[0].size > 1000 * 1024 * 50) {
                alert('图片应该小于50m');
                up.removeFile(files[0]);
                return
              }
              up.start();
            },

            BeforeUpload: function (up, file) {
              set_upload_param(up, file.name);
            },

            UploadProgress: function (up, file) {
              if (Number(file.percent) % 30 === 0) {
                // console.log('上传中。。');

              }


            },

            FileUploaded: function (up, file, info) {
              if (info.status === 200) {
                // document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success';
                // var domain = 'http://qiniu-zizyblog.shushubuyue.net';
                var sourceLink = up.settings.multipart_params.key;
                // uploadedHandler(sourceLink);
                console.log(sourceLink);
                console.log('上传成功');
                callback && callback(sourceLink);
                that.imgUrl = sourceLink;
                // that.$forceUpdate();


              } else {
                alert('上传失败');
                // document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
              }
            },

            Error: function (up, err) {
              // document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
              alert("图片上传出错");
            }
          }
        });

        uploader.init();
      },

      clear() {
        this.title = '';
        this.content = '';
        this.date = new Date().toLocaleDateString();
        this.imgUrl = '';
        this.isCompress =true;
        store.delete('title');
        store.set('content','');
        store.set('date',null);
        store.set('imgUrl',null);
        store.set('isCompress',null);

      },
      quitUpdate() {
        this.id = '';
        this.clear();
      },
      updateOne() {
        if (!confirm('更新')) return

        if (!this.id) {
          return;
        }
        axios.post('http://api.unclenowayapi.com:8083/posts/update', {
          id: this.id,
          title: this.title,
          content: this.content,
          date:this.date,
          img_url: this.imgUrl
        }).then(() => {
          alert('更新成功');
          this.quitUpdate();

        })
      },
      deleteOne() {
        if (!confirm('删除')) return

        if (!this.id) {
          return;
        }
        axios.get('http://api.unclenowayapi.com:8083/posts/delete', {
          params:{
            id: this.id,
          }
        }).then(() => {
          alert('删除成功');
          this.clear();
          this.quitUpdate();
        })

      },
      post() {
        if( (!store.get('admin')) && (prompt()!=='admin')) return;

        store.set('admin', true);

        if (this.isCompress) {
          this.imgUrl = this.imgUrl + '?imageView2/2/w/1024/h/1024/interlace/1/q/80'
        }
        axios.post('http://api.unclenowayapi.com:8083/posts/post', {
          title: this.title,
          content: this.content,
          date: new Date(this.date),
          img_url: this.imgUrl
        }).then(() => {
          alert('提交成功');
          this.clear();

        })

      }
    },
    mounted() {
      this.qiniuInit('btnUploadImg');
      if(this.$route.params.id){
        this.id = this.$route.params.id;
        this.title = this.$route.params.title;
        this.content = this.$route.params.content;
        this.date = this.$route.params.date;
        this.imgUrl = this.$route.params.imgUrl;
      }

    },
    watch: {
      title() {
        if(this.$route.params.id) return;
          store.set('title', this.title)


      },
      date() {
        if(this.$route.params.id) return;

        store.set('date', this.date)
      },
      content() {
        if(this.$route.params.id) return;

        store.set('content', this.content)

      },
      imgUrl() {
        if(this.$route.params.id) return;

        store.set('imgUrl', this.imgUrl)

      },
      isCompress() {
        if(this.$route.params.id) return;

        store.set('isCompress', this.isCompress)

      }


    }
  }
</script>

<style scoped>
  button + button {
    margin: 0 1rem;
  }

  .post {
    text-align: center;
  }

  .post-block:last-child {
    padding-bottom: 2rem;
  }

  .post-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .post-block input, .post-block textarea {
    width: 50%;
  }

  .post-block + .post-block {
    margin: 1rem 0;
  }

  .img {
    width: 100%;
  }
</style>
