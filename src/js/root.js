const routes = [
  { path: '/', component: window.App }
  { path: '/login', component: window.Login }
  { path: '/signUp', component: window.SignUp }
  ]


const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


const root = new Vue({
  router
}).$mount('#app')


/*
let app = new Vue({
  el: '#app',
  data: {
    loginVisible: false, signUpVisible: false, shareVisible: false,
    skinPickerVisible: false,
    previewUser:{
      objectId: undefined
    },
    previewResume: {},
    currentUser: {
      objectId: undefined,
      email: undefined
    },
    resume: {
      name: '姓名',
      gender: '性别',
      birth: '出身',
      email: 'example@example.com',
      jobObject: '前端工程师',
      phone: '13800000000',
      skills: [
        {name: '技能名称', description: '简介'},
        {name: '技能名称', description: '简介'},
        {name: '技能名称', description: '简介'},
        {name: '技能名称', description: '简介'}
      ],
      projects:[
        {name: '项目名称', link: 'http://....', keywords: '关键词', description: '项目简介'},
        {name: '项目名称', link: 'http://....', keywords: '关键词', description: '项目简介'}
      ]
    },
    shareLink: '',
    mode: 'edit' // 'preview'
  },
  computed: {
    displayResume(){
      return this.mode === 'preview' ? this.previewResume : this.resume
    }
  },
  watch: {
    'currentUser.objectId': function (newValue, oldValue) {
      if (newValue) {
        this.getResume(this.currentUser).then((resume) => this.resume = resume)
      }
    }
  },
  methods: {
    onEdit(key, value) {
      let regex = /\[(\d+)\]/g
      key = key.replace(regex, (match, number) => `.${number}`)
      keys = key.split('.')
      let result = this.resume
      for(let i = 0;i < keys.length;i++){
        if(i === keys.length - 1){
          result[keys[i]] = value
        }else{
          result = result[keys[i]]
        }
      }
    },
    hasLogin () {
      return !!this.currentUser.objectId
    },
    onLogin(user){
      this.currentUser.objectId = user.objectId
      this.currentUser.email = user.email
      this.loginVisible = false
      location.reload()
    },
    onLogout() {
      AV.User.logOut()
      alert('注销成功')
      window.location.reload()
    },
    onClickSave() {
      let currentUser = AV.User.current()
      if (!currentUser) {
        this.showLogin()
      } else {
        this.saveResume()
      }
    },
    showLogin() {
      this.$router.push('/login')
    },
    saveResume() {
      let {objectId} = AV.User.current().toJSON()
      let todo = AV.Object.createWithoutData('User', objectId)
      todo.set('resume', this.resume)
      todo.save().then(() =>{
        alert('保存成功')
      },() =>{
        alert('保存失败')
      })
    },
    getResume(user){
      var query = new AV.Query('User');
      return query.get(user.objectId).then((user) =>{
        let resume = user.toJSON().resume
        return resume
      },(error) =>{
      })
    },
    print(){
      window.print()
    },
    onShare(){
      if(this.hasLogin()){
        this.shareVisible = true
      }else{
        alert('请先登录')
      }
    }
  }
})


// 获取当前用户
let currentUser = AV.User.current()
if(currentUser){
  app.currentUser = currentUser.toJSON()
  app.shareLink = location.origin + location.pathname + '?user_id=' + app.currentUser.objectId
  app.getResume(app.currentUser).then(resume =>{
    app.resume = resume
  })
}
// 获取预览用户的 id
let search = location.search
let regex = /user_id=([^&]+)/
let matches = search.match(regex)
console.log(matches);
let userId
if(matches){
  userId = matches[1]
  app.mode = 'preview'
  app.getResume({objectId: userId}).then(resume =>{
    app.previewResume = resume
  })
}
*/