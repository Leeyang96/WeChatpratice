//index.js
//获取应用实例
const app = getApp()

var hellodata = {
  name: 'WeChat'
}

Page({
  data: hellodata,
  changeName: function(e){
    this.setData({
      name: "MINA"
    })
  }
})