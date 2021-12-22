<template>
  <div class="hello">
    <div>
      <Navbar activeIndex="2"></Navbar>
    </div>
    <h1>My Profile:</h1>
    <p>
      Welcome to my personal website!<br>
      I am currently in the process of building it, so<br>
      please come by later when it's finished.<br>
      In the meantime, come checkout my GitHub: 
      <a href="https://github.com/imi-Mach" target="_blank" rel="noopener">imi-Mach Profile</a>.
    </p>
    <h1>Todos:</h1>

  </div>
</template>

<script>
//import { component } from 'vue/types/umd'
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'mePage',
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(255, 145, 0);
}
</style>
