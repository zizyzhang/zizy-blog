/**
 * Created by Zizy on 17/09/2017.
 */


var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
let moment = require('moment')
// moment().format('MM-DD-YYYY')

var files = fs.readdirSync('/Users/Zizy/Downloads/');
execFile('rm',['-rf','/Users/Zizy/Downloads/diary'], function (err, stdout, stderr) {
  files.forEach(function (itm, index) {
    if ((itm.indexOf(moment().format('MM-DD-YYYY')) !== -1) && (itm.indexOf('JSON.zip') !== -1)) {
      console.log(itm)//名字
      var execFile = require('child_process').execFile;
      execFile('unzip', ['-o', '/Users/Zizy/Downloads/' + itm, '-d', '/Users/Zizy/Downloads/diary/'], function (err, stdout, stderr) {
        console.log({err, stdout, stderr})
        importDayOne();
      });
    }
  });
})




let importDayOne =function(){
  fs.readFile('/Users/Zizy/Downloads/diary/Journal.json', async function (err, data) {
    if (err) {
      return console.error(err);
    }
    let dayOne = JSON.parse(data.toString());

    let structured = dayOne.entries.map(i => {
      return {
        img_url: 'http://owdi2r4ca.bkt.clouddn.com/' + i.photos[0].md5 + '.jpeg?imageView2/2/w/400/h/400/interlace/1/q/100',
        title: i.text.substr(0, i.text.indexOf('![]')),
        content: i.text.substr(i.text.lastIndexOf(')\n\n') + 2, i.text.indexOf('////') != -1 ? i.text.indexOf('////') - i.text.lastIndexOf(')\n\n') - 2 : undefined),
        date: i.creationDate,
        id: i.uuid,
        place: i.location && i.location.placeName
      }
    });
    console.log(structured)
    if(!structured)return
    let dbUrl =  `mongodb://mezizy:331082Qoot@47.104.58.237:27017/zizyblog?authMechanism=DEFAULT&authSource=admin`;
    let client = await MongoClient
      .connect(dbUrl)
      .catch(e=>console.log(e));
    let db = client.db('zizyblog');
    console.log('db connected')
    let res = await db.collection('posts')
      .insertMany(structured,{ordered:false})
      .catch(e=>console.error(e.message));
    console.log('import ok')
    process.exit(0);
  });

}
// 异步读取

async function addPosts() {
  let res = await db.collection('posts')
    .insertMany(posts, {ordered: false})
    .catch(e => console.log(e.message));
  console.log(res.result)
  console.log('import ok');
}

