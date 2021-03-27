<template>
  <div class="pattern" @click="toggle">
    <span>{{ state.expand ? "-" : "›" }}</span>
    {{ title }}
  </div>
  <transition
    enter-active-class="animate__animated animate__fadeInLeft animate__faster"
    leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
  >
    <div v-if="state.expand" class="groups">
      <group-block
        v-for="(value, key) in groups"
        :key="key"
        :title="key"
        :content="value"
      >
      </group-block>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import GroupBlock from "../components/GroupBlock.vue";
const props = defineProps({
  title: String,
  groups: Object,
});

const state = reactive({
  expand: false,
});

const toggle = () => {
  state.expand = !state.expand;
};
</script>

<style lang="scss" scoped>
.pattern {
  @apply text-lg cursor-pointer;

  &:hover {
    @apply text-green-500;
  }
}

.groups {
  @apply ml-4 overflow-y-hidden;
}
</style>