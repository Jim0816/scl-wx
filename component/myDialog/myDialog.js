Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    top: {
      type: String,
      value: '300rpx',
    },
    left: {
      type: String,
      value: '10%',
    },
    width: {
      type: String,
      value: '80%',
    },
    height: {
      type: String,
      value: '400rpx',
    },
    background: {
      type: String,
      value: '#ffffff',
    },
    show: {
      type: String,
      value: 'none',
      
    },
    title: {
      type: String,
      value: '标题',
    }
    
  },
  options:{
    multipleSlots:true
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
  },
  methods: {
    // 这里是一个自定义方法
    close: function () {
      //关闭窗口
      this.setData({
        show: 'none'
      })
    }
  }
})