<template>
  <pattern-block
    v-for="(value, key) in filteredResult"
    :key="key"
    :title="key"
    :groups="value"
  />
  <!-- {{ getResults('ADJ to n', 'ACCESSIBLE') }} -->
</template>

<script setup>
import results from "../compositions/results";
import PatternBlock from "../components/PatternBlock.vue";
import { inject } from "vue";

const { filteredResult } = inject("results");
</script>

<style scoped>
.filter {
  @apply p-2 border outline-none;
}
</style>
