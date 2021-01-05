let qiniu = require('qiniu');

 var accessKey = 'iA3gnEgSUuEeb7KGngGuCJRDvd7BbwKGnZnei4Yb';
var secretKey = 'sSzvF08ZX4FM5kzcKzPFNZ1sdQ5cZT-iGxlReqxi';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: "zizyblog",
  expires: 3600*24*30*12*50
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

console.log(uploadToken)
