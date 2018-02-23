const AV = require('./av-weapp-min.js')
const app = getApp();
function leancloudlogin() {
  return AV.Promise
    .resolve(AV.User.current())
    .then(user => user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null)
    .then(user => user ? user : AV.User.loginWithWeapp())
    .catch(error => console.log(error.message))
}
function checkPhone(num) {
  return /^1[3|4|5|8][0-9]\d{4,8}$/.test(num)
}
function getVerify(num) {
  AV.User.loginWithWeapp()
    .then(user => {
      // 发送验证短信
      console.log(user)
      return AV.User.requestMobilePhoneVerify('18551462821');
    }).then({
      // 用户填写收到短信验证码后再调用 AV.User.verifyMobilePhone(code) 完成手机号的绑定
      // 成功后用户的 mobilePhoneVerified 字段会被置为 true
      // 此后用户便可以使用手机号加动态验证码登录了
    }).catch(console.error);
}
function checkCode(code) {
  AV.User.verifyMobilePhone(code)
    .then(function (data) { console.log(data) })
    .catch(console.error)
}
module.exports = {
  leancloudlogin,
  checkPhone,
  getVerify,
  checkCode
}