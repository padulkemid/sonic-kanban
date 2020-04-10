<template>
  <article class="tile is-child box" :class="classObject(background)">
    <p class="title">{{ category }}</p>
    <Data @editDataSuccess="rebuildData" @deleteDataSuccess="rebuildData" v-if="filterData.length" v-for="taskItem in filterData" :taskData="taskItem"></Data>
  </article>
</template>

<script>
  import Data from './Data.vue'

  export default {
    name: 'Card',
    props: ['category', 'background', 'task'],
    components: {
      Data
    },
    computed: {
      filterData(){
        let tempFiltered = []
        for (let i = 0; i < this.task.length; i++) {
          if (this.task[i].category == this.category){
            tempFiltered.push(this.task[i])
          }
        }

        return tempFiltered
      }
    },
    methods :{
      rebuildData(payload){
        if (payload.includes('not found')) {
          this.$noty.warning(`That's other people tasks!`)
        } else {
          this.$noty.warning(payload);
        }
        this.$emit('cardDataSuccessEdited', payload)
      },
      classObject(bg) {
        let styles = [
          { 'has-background-primary' : true },
          { 'has-background-grey' : true },
          { 'has-background-success' : true },
          { 'has-background-danger' : true },
        ]

        for(let i = 0; i < styles.length; i++) {
          if (bg == i) {
            return styles[i]
          }
        }

      }
    }
  }
</script>
