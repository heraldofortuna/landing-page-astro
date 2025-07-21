<template>
  <div class="bg-gray h-14 md:h-16 inline-flex rounded-full border border-neutral-200">
    <button
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option.value)"
      class="text-base md:text-lg px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all cursor-pointer"
      :class="{
        'bg-primary text-white': selectedValue === option.value,
        'text-black hover:text-primary': selectedValue !== option.value,
        'rounded-r-none' : selectedValue === options[0].value && option.value === options[0].value,
        'rounded-l-none' : selectedValue === options[1].value && option.value === options[1].value,
      }"
      type="button"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import type { SwitchOption } from '../../types/components';

const props = defineProps({
  options: {
    type: Array as PropType<SwitchOption[]>,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const selectedValue = ref(props.modelValue || props.options[0].value)

const selectOption = (value: string) => {
  selectedValue.value = value
  emit('update:modelValue', value)
}
</script>