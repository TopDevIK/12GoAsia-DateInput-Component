<template>
  <div>
    <DateInput
      v-model="dateValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DateInput from './components/DateInput.vue';

const currentDate = new Date();
const dateValue = ref(currentDate.toISOString().split('T')[0]);
</script>

<style scoped>
</style>
