const AV = require('./av-weapp-min.js')
const app = getApp();
function leancloudlogin() {
  return AV.Promise
    .resolve(AV.User.current())
    .then(user => user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null)
    .then(user => user ? user : AV.User.loginWithWeapp())
    .catch(error => console.log(error.message))
}
module.exports = { 
  leancloudlogin
}