const AV = require('./utils/av-weapp-min.js')
const { leancloudlogin } = require('./utils/util.js')
const Amap = require('./utils/amap-wx.js')
AV.init({
  appId: 'nWWN6Dpt603K5RWOWPp3Lbhh-gzGzoHsz',
  appKey: '4qKjHph1foiYeusWApsY5FxQ',
})
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('mmp')
    leancloudlogin().then(user => this.globalData.userInfo = user.toJSON())
    console.log(this.globalData)

    var myMap = new Amap.AMapWX({ key: '8c02ff62458f2ff648c63d66d740b17c' })
    myMap.getPoiAround({
      success: function (data) {
        console.log(data)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('mmp1')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('mmp2')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
  globalData: {
    userInfo: {}
  }
})
