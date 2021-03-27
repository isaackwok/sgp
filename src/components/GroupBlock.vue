<template>
  <div class="group" @click="toggle">
    <span>{{ state.expand ? "-" : "›" }}</span>
    "{{ title.toLowerCase() }}" group
  </div>

  <transition
    enter-active-class="animate__animated animate__zoomIn animate__faster"
    leave-active-class="animate__animated animate__zoomOut animate__faster"
  >
    <div v-if="state.expand" class="groupitem">
      <!-- Words -->
      <div class="words">
        <p class="subhead">Words</p>
        <p v-if="content.words.length">{{ content.words.join(", ") }}</p>
        <p v-else>No Result.</p>
      </div>
      <!-- Scores -->
      <div class="results">
        <p class="subhead">Results</p>
        <table v-if="content.results.length" class="result-table">
          <thead>
            <tr>
              <th>Semantic Cat.</th>
              <th>Score</th>
              <th>Arguments</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in content.results" :key="r[0]">
              <td>{{ r[0] }}</td>
              <td>{{ r[1] }}</td>
              <td>{{ r[2] ? r[2].join(", ") : "" }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else>No Result.</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
  title: String,
  content: Object,
});

const state = reactive({
  expand: false,
});

const toggle = () => {
  state.expand = !state.expand;
};
</script>

<style lang="scss" scoped>
.group {
  @apply italic cursor-pointer w-max;

  &:hover {
    @apply text-green-500;
  }
}

.groupitem {
  @apply ml-4;

  div {
    @apply my-4;

    .subhead {
      @apply font-bold pl-2 mb-2 border-l-2 border-green-500;
    }
  }

  p {
    @apply text-justify;
  }
}

.result-table {
  @apply table-auto w-full;

  tr > th {
    @apply text-left bg-gray-100 p-1;
  }

  tr > td {
    @apply p-1;
  }
}
</style>