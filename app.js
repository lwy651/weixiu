const AV = require('./utils/av-weapp-min.js')
const { leancloudlogin } = require('./utils/util.js')
const mymap = require('./utils/mymap.js')
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
    this.globalData.Map = mymap
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
    userInfo: {},
    Map: {}
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            console.log(res)
            cb(res.userInfo)
            that.globalData.userInfo = res.userInfo
          }
        })
      }
    })
  }
})
