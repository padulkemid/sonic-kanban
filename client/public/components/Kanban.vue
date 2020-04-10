<template>
  <section id="kanban">
    <Navbar @userLogOut="emitToApp" :email='this.email'></Navbar>
    <section class="hero is-info is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            This is your kanban, {{ emailFromUser }}!
          </h1>
          <h2 class="subtitle">
            check your task, is it already done?
          </h2>

          <div class="buttons">
            <button @click="showAdd = !showAdd" class="button is-warning">
              Add new Task!
            </button>
          </div>

          <form v-if="showAdd" class="form" @submit.prevent="addNewData">
            <div class="field">
              <div class="control has-text-black">
                <input v-model="form.title" class="input" type="text" placeholder="Your task title here...">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-warning is-fullwidth">
                  <select class="has-text-black" v-model="form.category">
                    <option value="">-- SELECT CATEGORY --</option>
                    <option value="Backlog">Backlog</option>
                    <option value="Todo">Todo</option>
                    <option value="Done">Done</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="buttons">
              <button type="submit" class="button is-success">Add!</button>
              <button type="button" @click="showAdd = !showAdd" class="button is-danger">Cancel</button>
            </div>
          </form>

          <div class="tile is-ancestor">
            <div
              v-for="( category,index ) in categories"
              :key="category"
              class="tile is-parent"
            >
              <Card
                @cardDataSuccessEdited="rebuildData"
                :category="category"
                :background="index"
                :task="tasks"
              >
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Card from './Card.vue'
  import { getAllCards } from '../functions/cards/get_cards.js'
  import { addNewTask } from '../functions/cards/add_card.js'
  import { errorHandler } from '../functions/error_handler.js'

  export default {
    name: 'Kanban',
    props: ['emailFromUser'],
    components: {
      Card,
      Navbar
    },
    methods: {
      rebuildData(){
        this.getDatas()
      },
      getDatas(){
        getAllCards()
          .then(res => {
            this.tasks = res.tasks
          })
          .catch(errorHandler)
      },
      addNewData(){
        this.showAdd = !this.showAdd
        const title = this.form.title
        const category = this.form.category

        addNewTask(title, category)
          .then(res =>{
            this.getDatas()
            this.form.title = ''
            this.form.category = ''
            this.$noty.success(res.message)
          })
          .catch(errorHandler)
      },
      emitToApp(payload){
        this.$emit('userLogOut', 'logged out!')
      }
    },
    data() {
      return {
        email: this.emailFromUser,
        tasks: [],
        categories: ['Backlog', 'Todo', 'Done', 'Completed'],
        showAdd: false,
        form : {
          title: '',
          category : ''
        }
      }
    },
    created() {
      this.getDatas()
    }
  }
</script>
