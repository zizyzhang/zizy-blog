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
            "longitude" : 114.136474609375,
            "latitude" : 22.282928466796875
          },
          "radius" : 75
        },
        "localityName" : "Hong Kong",
        "country" : "Hong Kong",
        "longitude" : 114.136474609375,
        "administrativeArea" : "Hong Kong",
        "placeName" : "The University of Hong Kong",
        "latitude" : 22.282928466796875
      },
      "sourceString" : "visit-7A1927CF-39EC-4250-8AED-D480C9CC26D0",
      "userActivity" : {
        "activityName" : "Stationary"
      },
      "text" : "上课被公安局查水表的一天\n\n![](dayone-moment:\/\/A4EE1B8F13F642099FA54BE2B562CCA4)\n\n心情3分。事情真是接连不断。遭遇查水表也是意想不到。还好一切都还正常。\n最近闲下来只想好好休息买买东西打打游戏。\n无心学习也是可怕。忙碌的生活。之后要好好学习了！",
      "weather" : {
        "sunsetDate" : "2018-01-31T10:12:09Z",
        "temperatureCelsius" : 9,
        "weatherServiceName" : "HAMweather",
        "windBearing" : 50,
        "sunriseDate" : "2018-01-30T23:03:19Z",
        "conditionsDescription" : "Light Rain",
        "pressureMB" : 1021,
        "visibilityKM" : 6,
        "relativeHumidity" : 94,
        "windSpeedKPH" : 11,
        "weatherCode" : "rain-night",
        "windChillCelsius" : 7
      },
      "creationDate" : "2018-01-30T16:22:17Z",
      "timeZone" : "Asia\/Hong_Kong",
      "uuid" : "F8616B6A8BFA44DA8C6BB7FA16E300AB",
      "duration" : 0,
      "photos" : [
        {
          "fnumber" : "(null)",
          "orderInEntry" : 0,
          "width" : 2048,
          "type" : "jpeg",
          "identifier" : "A4EE1B8F13F642099FA54BE2B562CCA4",
          "date" : "2018-01-31T16:22:17Z",
          "location" : {
            "region" : {
              "center" : {
                "longitude" : 114.136474609375,
                "latitude" : 22.282928463880435
              },
              "identifier" : "<+22.28292846,+114.13647461> radius 141.83",
              "radius" : 141.83262421846575
            },
            "localityName" : "Hong Kong",
            "country" : "Hong Kong",
            "timeZoneName" : "Asia\/Hong_Kong",
            "administrativeArea" : "Hong Kong",
            "longitude" : 114.136474609375,
            "placeName" : "The University of Hong Kong",
            "latitude" : 22.282928466796875
          },
          "height" : 2048,
          "md5" : "e03a5b310aa09d2af9435624656b82a5",
          "focalLength" : "(null)"
        }
      ]
    },
    {
      "starred" : false,
      "location" : {
        "region" : {
          "center" : {
            "longitude" : 114.13737487792969,
            "latitude" : 22.285306930541992
          },
          "radius" : 75
        },
        "localityName" : "Hong Kong",
        "country" : "Hong Kong",
        "longitude" : 114.13737487792969,
        "administrativeArea" : "Hong Kong",
        "placeName" : "179 Third Street, Hong Kong",
        "latitude" : 22.285306930541992
      },
      "creationDate" : "2018-02-03T16:44:02Z",
      "userActivity" : {
        "activityName" : "Stationary",
        "stepCount" : 9
      },
      "text" : "逐渐作息恢复正常周末拔牙的一周\n\n![](dayone-moment:\/\/3F3D4435E0714813BC4D0AF89F3BB251)\n\n心情3.5分。逐渐稳定下来的第一周，开始关注让生活提高一些些水准的方法。看了很多年薪**的人是怎么生活的诸如此类，觉得自己更应该多开阔眼界，投资自己总是最好的。每个人还是要有自己的生活方式才对。\n尝试面试招聘，但还是觉得有太多东西没有考虑周全，还不可以轻易行动。把叔叔不约申请了商标，顺利的话应该又排除一些后患。\n尝试了一些新餐厅，有一些还不错。投资了一直想要做的低估值指数。\n周末是深圳拔牙，这种疼痛程度真是好久未经历了…辗转买了暖风机之后，终于不会晚上冻醒。\n总的来说，生活慢慢走向正常轨迹，希望一直没有意外。",
      "weather" : {
        "temperatureCelsius" : 10,
        "weatherServiceName" : "Forecast.io",
        "windBearing" : 34,
        "sunriseDate" : "1970-01-01T00:00:00Z",
        "conditionsDescription" : "Breezy and Partly Cloudy",
        "pressureMB" : 1025.530029296875,
        "visibilityKM" : 10.010000228881836,
        "relativeHumidity" : 51,
        "windSpeedKPH" : 24.479999542236328,
        "weatherCode" : "wind",
        "sunsetDate" : "1970-01-01T00:00:00Z"
      },
      "timeZone" : "Asia\/Hong_Kong",
      "uuid" : "3CB0B5DE24564EF4818944AD1C8BBDEB",
      "duration" : 0,
      "photos" : [
        {
          "fnumber" : "(null)",
          "orderInEntry" : 0,
          "width" : 2048,
          "type" : "jpeg",
          "identifier" : "3F3D4435E0714813BC4D0AF89F3BB251",
          "height" : 2048,
          "md5" : "3938a6a6da3589081d922fba032b27e4",
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
