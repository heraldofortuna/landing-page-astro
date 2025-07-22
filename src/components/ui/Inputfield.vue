<template>
  <div class="w-full">
    <label 
      v-if="label" 
      :for="id" 
      class="block text-sm font-medium text-gray-600 mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :class="[
        'block w-full h-14 md:h-16 bg-gray text-black text-base md:text-lg px-4 py-5 border rounded-4xl focus:outline-none focus:ring-primary focus:border-primary transition-colors duration-200',
        error ? 'border-red-600' : 'border-neutral-200'
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    
    <p v-if="error" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type InputfieldProps } from "../../types/components";

const props = withDefaults(defineProps<InputfieldProps>(), {
  type: 'text',
  required: false,
  disabled: false,
  error: '',
  modelValue: '',
  placeholder: '',
  label: '',
});

defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>();

const id = computed(() => props.id || props.name);
</script>

<style scoped>
input::placeholder {
  color: #AAAAAA;
  opacity: 1;
}

input::-webkit-input-placeholder {
  color: #AAAAAA;
  opacity: 1;
}

input::-moz-placeholder {
  color: #AAAAAA;
  opacity: 1;
}

input:-ms-input-placeholder {
  color: #AAAAAA;
  opacity: 1;
}

input::-ms-input-placeholder {
  color: #AAAAAA;
  opacity: 1;
}
</style>