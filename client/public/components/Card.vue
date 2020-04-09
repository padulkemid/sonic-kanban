<template>
  <div class="tile is-parent">
    <article class="tile is-child box" :class="classObject(background)">
      <p class="title">{{ category }}</p>
      <Data></Data>
      <Data></Data>
    </article>
  </div>
</template>

<script>
  import Data from './Data.vue'

  export default {
    name: 'Card',
    props: ['category', 'background'],
    components: {
      Data
    },
    methods :{
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
