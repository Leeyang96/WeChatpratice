//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  }
})