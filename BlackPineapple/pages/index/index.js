//Page Object
Page({
  data: {
    swiperList:[]
  },
  //options(Object)
  onLoad: function(options){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result) => {
        this.setData({
          swiperList:result.data.message
        })
      }
    })
  }
});