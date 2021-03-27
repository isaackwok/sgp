<template>
  <nav-bar />
  <div class="main">
  <router-view></router-view>

  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import results from "./compositions/results";
import { provide } from "vue";
provide('results', results)
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  @apply p-8;
}
</style>