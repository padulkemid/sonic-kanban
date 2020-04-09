<template>
  <section id="kanban">
    <Navbar @userLogOut="emitToApp" :username='username'></Navbar>
    <section class="hero is-info is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            This is your kanban, {{ username }}!
          </h1>
          <h2 class="subtitle">
            check your task, is it already done?
          </h2>
          <div class="tile is-ancestor">
            <Card :category="'Backlog'" :background="0"></Card>
            <Card :category="'Todo'" :background="1"></Card>
            <Card :category="'Done'" :background="2"></Card>
            <Card :category="'Completed'" :background="3"></Card>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Card from './Card.vue'

  export default {
    name: 'Kanban',
    components: {
      Card,
      Navbar
    },
    methods: {
      emitToApp(payload){
        this.$emit('userLogOut', 'logged out!')
      }
    },
    data() {
      return {
        username: 'Padul'
      }
    }
  }
</script>
