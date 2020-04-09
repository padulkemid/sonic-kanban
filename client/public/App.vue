<template>
  <div>
    <Kanban @userLogOut="userLoggedOut" v-if="isLoggedIn"></Kanban>
    <User @userLogIn="userLoggedIn" v-else></User>
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
      userLoggedOut(payload) {
        if(logoutUser(payload)){
          this.loginCheck()
        } else {
          console.log('Internal server errrrrror!')
        }
      },
      userLoggedIn(payload) {
        if(checkLoggedInPayload(payload)){
          this.loginCheck()
        } else {
          console.log('Token not found!')
        }
      },
      loginCheck() {
        if(loginRenderCheck()){
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      }
    },
    data() {
      return {
        isLoggedIn : false,
      }
    },
    created() {
      this.loginCheck()
    }
  };
</script>
