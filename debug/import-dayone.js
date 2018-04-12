/**
 * Created by Zizy on 17/09/2017.
 */


let dayOne ={
  "metadata" : {
    "version" : "1.0"
  },
  "entries" : [
    {
      "starred" : false,
      "location" : {
        "region" : {
          "center" : {
            "longitude" : 114.13723754882812,
            "latitude" : 22.287046432495117
          },
          "radius" : 75
        },
        "localityName" : "Hong Kong",
        "country" : "Hong Kong",
        "longitude" : 114.13723754882812,
        "administrativeArea" : "Hong Kong",
        "placeName" : "345 Des Voeux Road West, Hong Kong",
        "latitude" : 22.287046432495117
      },
      "sourceString" : "visit-90445CBA-8005-47F8-B4CA-6754E0897C2D",
      "text" : "平淡但是回归正常的一星期\n\n![](dayone-moment:\/\/66BBFACCF06748D3BE225F19EE87DDEB)\n\n经历了上个阶段的情绪动荡，\n经历了三天各种打卡咖啡厅的日子。\n最后慢慢才稳定下来日刷dental。\n改了又改AI的作业，网站的cdn域名重新配置，cousera的deep learning课终于看到了尾声。\n没想到深夜的一次深层对话可以让生活有那么大的起伏。\n周二晚上又去了一下海边思考了一下人生。\n想法日新月异，但是又慢慢统一到一个好的路径上。\n翻看自己过去的三万张照片。\n现在的自己，陌生又熟悉。\n",
      "weather" : {
        "temperatureCelsius" : 27,
        "weatherServiceName" : "Forecast.io",
        "windBearing" : 194,
        "sunriseDate" : "1970-01-01T00:00:00Z",
        "conditionsDescription" : "Clear",
        "pressureMB" : 1009.239990234375,
        "visibilityKM" : 10.010000228881836,
        "relativeHumidity" : 68,
        "windSpeedKPH" : 15.050000190734863,
        "weatherCode" : "clear",
        "sunsetDate" : "1970-01-01T00:00:00Z"
      },
      "creationDate" : "2018-04-12T08:06:33Z",
      "timeZone" : "Asia\/Hong_Kong",
      "uuid" : "045653B2F36B485CABA0AAA7B8C60AFF",
      "duration" : 0,
      "photos" : [
        {
          "fnumber" : "(null)",
          "orderInEntry" : 0,
          "width" : 2048,
          "type" : "jpeg",
          "identifier" : "66BBFACCF06748D3BE225F19EE87DDEB",
          "date" : "2018-04-12T08:06:33Z",
          "location" : {
            "region" : {
              "center" : {
                "longitude" : 114.13723754882815,
                "latitude" : 22.287046429578094
              },
              "identifier" : "<+22.28704643,+114.13723755> radius 141.83",
              "radius" : 141.83260041245387
            },
            "localityName" : "Hong Kong",
            "country" : "Hong Kong",
            "timeZoneName" : "Asia\/Hong_Kong",
            "administrativeArea" : "Hong Kong",
            "longitude" : 114.13723754882812,
            "placeName" : "345 Des Voeux Road West, Hong Kong",
            "latitude" : 22.287046432495117
          },
          "weather" : {
            "weatherServiceName" : "Forecast.io",
            "windBearing" : 194,
            "conditionsDescription" : "Clear",
            "pressureMB" : 1009.239990234375,
            "visibilityKM" : 10.010000228881836,
            "relativeHumidity" : 68,
            "windSpeedKPH" : 15.050000190734863,
            "weatherCode" : "clear",
            "temperatureCelsius" : 27.670000076293945
          },
          "height" : 2048,
          "md5" : "d3acab4b1823057a0ab66b5cf3654279",
          "focalLength" : "(null)"
        }
      ]
    }
  ]};


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
