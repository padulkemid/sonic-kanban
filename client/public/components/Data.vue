<template>
  <article class="message" :class="{ 'is-warning' : checkEmail }">
    <div class="message-header">
      <p>{{ new Date(taskData.updatedAt).toString().slice(0, 25) }}</p>
    </div>
    <div class="message-body">
      <div v-if="!form.isEdit" class="field">
        <div class="control">
          {{ taskData.title }} <br>
          -------------- <br>
          by <strong>
            {{ taskData.User.email }}
          </strong>
        </div>
      </div>
      <div v-else>
        <div class="field">
          <div class="control">
            <input type="text" v-model="form.title" class="input has-text-black">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-primary is-fullwidth">
              <select v-model="form.category">
                <option value="">-- SELECT CATEGORY --</option>
                <option value="Backlog">Backlog</option>
                <option value="Todo">Todo</option>
                <option value="Done">Done</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control buttons">
            <button @click="editTitle(taskData.id)" class="button is-success is-fullwidth">
              Submit!
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons is-centered">
      <button @click="toggleEdit" class="button is-link is-small is-rounded">
        Edit
      </button>
      <button @click="showDelete = !showDelete" class="button is-danger is-small is-rounded">
        Delete
      </button>
    </div>
    <div class="modal" :class="{ 'is-active' : showDelete }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Deleting data</p>
          <button @click="showDelete = !showDelete" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          Are you sure want to delete 
          <strong>{{ taskData.title }}</strong>
          on category <strong>{{ taskData.category }}
          </strong><br>
          and id <strong>{{ taskData.id }}</strong>
          with user <strong>{{ taskData.User.email }} </strong>?
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button class="button is-danger" @click="deleteTask(taskData.id)">Delete!</button>
          <button class="button" @click="showDelete = !showDelete">Cancel</button>
        </footer>
      </div>
    </div>
  </article>
</template>

<script>
  import { editData } from '../functions/cards/edit_card.js'
  import { deleteData } from '../functions/cards/delete_card.js'
  import { errorHandler } from '../functions/error_handler.js'

  export default {
    name: 'Data',
    props: ['taskData'],
    computed: {
      checkEmail(){
        const loggedEmail = localStorage.getItem('email')
        const dataEmail = this.taskData.User.email
        if (loggedEmail == dataEmail){
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      toggleEdit(){
        const edit = this.form.isEdit
        edit ? this.form.isEdit = false : this.form.isEdit = true
      },
      editTitle(id) {
        const title = this.form.title
        const category = this.form.category

        editData(title, category, id)
          .then(res => {
            this.toggleEdit()
            this.$emit('editDataSuccess', res.message)
          })
          .catch(errorHandler)
      },
      deleteTask(id) {
        deleteData(id)
          .then(res => {
            this.showDelete = !this.showDelete
            this.$emit('deleteDataSuccess', res.message)
          })
          .catch(errorHandler)
      }
    },
    data() {
      return {
        form : {
          title: this.taskData.title,
          category: this.taskData.category,
          isEdit: false,
        },
        showDelete: false
      }
    }
  }
</script>
