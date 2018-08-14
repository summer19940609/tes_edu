// 书架
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  openBook: function () {
    wx.navigateTo({
      url: '../book/book'
    })
  }
})