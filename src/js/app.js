var app = new Vue({
  el: '#app',
  data: {
    resume: {
      name: '姓名',
      gender: '性别',
      birth: '出身',
      email: 'example@example.com',
      jobObject: '前端工程师',
      phone: '13800000000'
    }
  },
  methods: {
    onEdit(key, value){
      this.resume[key] = value
    }
  }
})