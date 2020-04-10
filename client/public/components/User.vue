<template>
  <section class="hero is-link is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
      </div>
      <div class="container">
        <div class="field">
          <div class="control has-text-centered">
            <h1 class="title">
              Kanban Padul! 🤗
            </h1>
            <h1 class="subtilte">
              Welcome! please login or register! 🚀
            </h1>
          </div>
        </div>
        <div class="field">
          <div class="control card" style="padding: 20px;">
            <form @submit.prevent="login">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input v-model="form.email" class="input" type="email" placeholder="Your Email...">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input v-model="form.password" class="input" type="password" placeholder="Your Password...">
                </div>
              </div>
              <div class="buttons is-centered">
                <button type="submit" class="button is-primary">Sign In</button>
                <button type="button" @click="registerUser" class="button is-danger">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
      </div>
    </div>
  </section> 
</template>

<script>
  import { loginUser } from '../functions/login.js'
  import { registerUser } from '../functions/register.js'
  import { errorHandler } from '../functions/error_handler.js'

  export default {
    name: 'User',
    methods: {
      login(){
        const email = this.form.email
        const password = this.form.password

        loginUser(email, password)
          .then(res => {

            console.log({status: res.status, message: res.message})
            this.$emit('userLogIn', [res.token, email])
          })
          .catch(errorHandler)
      },
      registerUser() {
        const email = this.form.email
        const password = this.form.password

        registerUser(email, password)
          .then(res => {
            console.log(res)
          })
          .catch(errorHandler)
      }
    },
    data() {
      return {
        form : {
          email: '',
          password: ''
        }
      }
    }
  }
</script>
