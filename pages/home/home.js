// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carlists: [
      {
        title: '家电维修',
        tip: '最专业的团队',
        img: './../../images/cards/weixiu.svg',
        color: 'rgb(255, 153, 0)',
        url: './../user/user'
      },
      {
        title: '清洁保养',
        tip: '保洁延长寿命',
        img: './../../images/cards/qingjie.svg',
        color: 'rgb(245, 120, 93)',
        url: './../user/user'
      },
      {
        title: '节能回收',
        tip: '闲置也有价值',
        img: './../../images/cards/huishou.svg',
        color: 'rgb(232, 143, 40)',
        url: './../user/user'
      },
      {
        title: '敬请期待',
        tip: '',
        img: '',
        color: '#A2CF26',
        url: ''
      }
    ],
    animationData: {}
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
  SearchClick: function (e) {
    wx.switchTab({
      url: './../user/user'
    })
  },
  cardClick: e => {
    if (e.currentTarget.dataset.url == '')
      return
    wx.switchTab({
      url: e.currentTarget.dataset.url,
    })
  }
})