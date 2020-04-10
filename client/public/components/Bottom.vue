<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Kanban</strong> by <a target="blank_" @click="redirectGithub">
          Fadhil Muhammad.
        </a><br>
          &copy; 2020 padoelkemid, All rights reserved. 😊
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Bottom',
    methods: {
      redirectGithub() {
        window.open(
          'https://github.com/padulkemid',
          '_blank'
        )
      }
    }
  }
</script>
