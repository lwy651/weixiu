var RotateAnimation = wx.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  delay: 0,
  success: function (res) {
    console.log(3211123)
  }
})

module.exports = {
  RotateAnimation: RotateAnimation
}