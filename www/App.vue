<template>
  <div>
    <h1>Hello World!</h1>

    <p>Count: {{ count }}</p>

    <button @click="increment">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
      </svg>
      <span> Increment </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);

function increment() {
  count.value++;
}
</script>
