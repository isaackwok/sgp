<template>
  <nav>
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
    <router-link to="/">Semantic Grammar Pattern</router-link>
    <input
      class="filter"
      type="search"
      placeholder="Filter patterns..."
      v-model="state.patternFilter"
    />
  </nav>
</template>

<script setup>
import { inject } from "vue";

const { state, filteredResult } = inject('results');
</script>

<style lang="scss" scoped>
nav {
  @apply p-2;
  @apply border-b;

  input.filter {
    @apply ml-4 p-2 border-b outline-none;
  }
  a {
    @apply p-4;
  }

  .router-link-active {
    @apply text-green-500;
  }
}
</style>