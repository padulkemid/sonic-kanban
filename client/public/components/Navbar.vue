<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">
        <h1 class="subtitle">
          👾 Kanban Padul 🤟🏽
        </h1>
      </div>
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item">
          <h1 class="subtitle has-text-centered">
            Hi! {{ username }}
          </h1>
        </div>
        <div class="navbar-item">
          <div class="buttons is-centered">
            <button @click="logout" class="button is-danger is-fullwidth">
              <strong>Logout</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name:'Navbar',
    props: ['username'],
    methods : {
      logout() {
        this.$emit('userLogOut', 'logged out!')
      }
    },
    data() {
      return {
        showNav : false
      }
    },
  }
</script>
