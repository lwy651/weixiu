// pages/bindphone/bindphone.js
const { checkPhone, getVerify, checkCode } = require('./../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cancommit: true,
    getcapBtn: true
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
  checkPhoneNum: function (e) {
    console.log(e.detail.value)
    console.log(checkPhone(e.detail.value))
    if (checkPhone(e.detail.value)) {
      wx.showToast({
        title: '有效的手机号！！！',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '无效到手机号！！！',
        icon: 'none'
      })
    }
  },
  getCode: function (e) {
    console.log(123)
    getVerify()
  },
  bindClick: function (e) {
    console.log(e)
  }
})