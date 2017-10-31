/**
 * Created by Zizy on 31/10/2017.
 */

let qiniu = require('qiniu');
var accessKey = 'iA3gnEgSUuEeb7KGngGuCJRDvd7BbwKGnZnei4Yb';
var secretKey = 'sSzvF08ZX4FM5kzcKzPFNZ1sdQ5cZT-iGxlReqxi';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: "zizyblog",
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
var localFile = "/Users/Zizy/Programming/zizyblog/src/assets/logo.png";
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
// var key = 'logo.png';


var execFile = require('child_process').execFile;
execFile('find', ['/Users/Zizy/Downloads/diary/photos'], function (err, stdout, stderr) {
  var file_list = stdout.split('\n').filter(f => f.substr(f.length - 3) === 'peg');
  console.log(file_list);
  let i =0;
  file_list.map(function (file) {
    localFile = file;
    // 文件上传
    formUploader.putFile(uploadToken, localFile.substr(localFile.lastIndexOf('/')+1), localFile, putExtra, function (respErr,
                                                                                                                     respBody, respInfo) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        console.log(++i +"/"+ file_list.length);
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    });
  });


});
