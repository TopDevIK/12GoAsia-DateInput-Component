<template>
  <div class="custom-container">
    <h1 class="custom-heading">Current Browser Locale: {{ browserLocale }} ({{ datePlaceholder }})</h1>
    <div class="custom-input-container">
      <input
        class="custom-input"
        :placeholder="datePlaceholder"
        v-model="displayValue"
        @blur="updateModelValue"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { browserLocale, getDatePlaceholder, formatToISO, formatDateFromISO } from '../utils/date-utils';

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits(['update:modelValue']);

const datePlaceholder = computed(getDatePlaceholder);

const displayValue = ref(formatDateFromISO(props.modelValue, datePlaceholder.value));

watch(displayValue, (newValue) => {
  const formattedValue = formatToISO(newValue, datePlaceholder.value);
  if (formattedValue && formattedValue !== props.modelValue) {
    emit('update:modelValue', formattedValue);
  }
});

function updateModelValue() {
  displayValue.value = formatDateFromISO(props.modelValue, datePlaceholder.value);
}
</script>
