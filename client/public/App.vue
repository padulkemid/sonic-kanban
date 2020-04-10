<template>
  <div>
    <Kanban @userLogOut="userLoggedOut" v-if="isLoggedIn" :emailFromUser="this.email"></Kanban>
    <User @userLogIn="userLoggedIn" @userRegister="userRegistered" v-else></User>
    <Bottom></Bottom>
  </div>
</template>

<script>
  
  // Components
  import User from './components/User.vue'
  import Bottom from './components/Bottom.vue'
  import Kanban from './components/Kanban.vue'

  // Functions
  import {
    logoutUser,
    checkLoggedInPayload,
    loginRenderCheck
  } from './functions/login.js'


  export default {
    name: 'App',
    components: {
      User, 
      Bottom,
      Kanban
    },
    methods: {
      userRegistered(payload){
        this.$noty.success(payload)
        this.loginCheck()
      },
      userLoggedOut(payload) {
        if(logoutUser(payload)){
          this.$noty.error('Successfully logged out!')
          this.loginCheck()
        } else {
          console.log('Internal server errrrrror!')
        }
      },
      userLoggedIn(payload) {
        // getEmail for user display 
        this.getEmail(payload[1])

        // tokensss
        if(checkLoggedInPayload(payload[0])){
          this.$noty.success(`Welcome! ${payload[1]}`)
          this.loginCheck()
        } else {
          console.log('Token not found!')
          this.$noty.error('Wrong email/password!')
        }
      },
      loginCheck() {
        if(loginRenderCheck()){
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      },
      getEmail(newEmail) {
        localStorage.setItem('email', newEmail)
        this.email = newEmail
        return this.email
      }
    },
    data() {
      return {
        isLoggedIn : false,
        email : localStorage.getItem('email')
      }
    },
    created() {
      this.loginCheck()
    }
  };
</script>
