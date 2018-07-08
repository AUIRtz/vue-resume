let app = new Vue({
  el: '#app',
  data: {
    loginVisible: false,
    signUpVisible: false,
    resume: {
      name: '姓名',
      gender: '性别',
      birth: '出身',
      email: 'example@example.com',
      jobObject: '前端工程师',
      phone: '13800000000'
    },
    signUp: {
      email: '',
      password: ''
    },
    login: {
      email: '',
      password: ''
    }
  },
  methods: {
    onEdit(key, value) {
      this.resume[key] = value
    },
    onSignUp(aim) {
      const user = new AV.User()
      user.setUsername(this.signUp.email)
      user.setPassword(this.signUp.password)
      user.setEmail(this.signUp.email)
      user.signUp().then(function (user) {
        console.log(user)
      }, function (error) {
      })
    },
    onLogin() {
      AV.User.logIn(this.login.email, this.login.password).then(function (user) {
        console.log(user)
      }, function (error) {
        if (error.code === 211) {
          alert('邮箱不存在不存在')
        } else if (error.code === 210) {
          alert('邮箱密码不匹配')
        }
      })
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
      this.loginVisible = true
    },
    saveResume() {
      let {id} = AV.User.current()
      let todo = AV.Object.createWithoutData('User', id)
      todo.set('resume', this.resume)
      todo.save()
    }
  }
})