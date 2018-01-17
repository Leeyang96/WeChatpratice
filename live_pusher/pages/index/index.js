//index.js
//获取应用实例
const app = getApp()

Page({
  statechange(e) {
    console.log('live-pusher code:', e.errCode)
  }
})