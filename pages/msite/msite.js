// pages/msite/msite.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playing: false,
    location: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  backClick: e => {
    console.log(e)
    wx.switchTab({
      url: './../home/home',
    })
  },
  getPos: function () {
    app.globalData.Map.GetPoi()
      .then(data => {
        console.log(data)
        console.log('over')
        this.setData({ playing: false })
        this.setData({ location: data.poisData[0].name })
      })
      .catch(error => {
        console.log(error)
        this.setData({ playing: false })
      })
  }
  ,
  locateClick: function (e) {
    console.log(1111111)
    this.setData({ playing: true })
    this.getPos()
  }
})