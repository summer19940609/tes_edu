// 书架
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  openBook: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../book/book?book=' + e.currentTarget.dataset.bookName
    })
  }
})