const Amap = require('./amap-wx.js')
var myMap = new Amap.AMapWX({ key: '8c02ff62458f2ff648c63d66d740b17c' })
var Markers = []
console.log(333333333333)

function GetPoi() {
  var that = this
  return new Promise(
    (resolve, reject) => {
      myMap.getPoiAround({
        success: function (data) {
          that.Markers = data.markers
          resolve(data)
        },
        fail: function (info) {
          reject(info)
        }
      })

    }
  )
}
module.exports = {
  GetPoi,
  Markers
}