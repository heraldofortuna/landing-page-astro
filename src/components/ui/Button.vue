<template>
  <button
    :id="id"
    :class="buttonClasses" 
    @click="handleClick"
    :disabled="disabled"
  >
    <span class="w-full whitespace-nowrap">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "../../types/components";

const props = withDefaults(defineProps<ButtonProps>(), {
  id: '',
  size: 'medium',
  variant: 'primary',
  disabled: false
});

const emit = defineEmits<{
  (e: 'click'): void
}>();

const buttonClasses = computed(() => {
  let classes = 'w-fit font-medium rounded-4xl transition-colors duration-200 border';
  
  classes += props.disabled ? ' cursor-not-allowed' : ' cursor-pointer';
  
  switch (props.size) {
    case 'small':
      classes += ' h-12 md:h-13 text-sm md:text-base leading-5 px-5 md:px-6';
      break;
    case 'medium':
      classes += ' h-14 md:h-16 text-base md:text-lg px-10 md:px-12';
      break;
    case 'large':
      classes += ' h-14 md:h-16 text-lg md:text-xl px-12 md:px-14';
      break;
    default:
      classes += ' h-12 md:h-13 text-sm md:text-base leading-5 px-5 md:px-6';
  }

  switch (props.variant) {
    case 'primary':
      classes += props.disabled 
        ? ' bg-gray-200 text-gray-500 border-gray-300' 
        : ' bg-primary text-white border-primary hover:bg-white hover:border-primary hover:text-primary';
      break;
    case 'secondary':
      classes += props.disabled
        ? ' bg-gray-300 text-gray-400 border-gray-300'
        : ' bg-white text-black border-primary hover:bg-primary hover:border-white hover:text-white';
      break;
    default:
      classes += props.disabled
        ? ' bg-gray-300 text-gray-500 border-gray-300'
        : ' bg-primary text-white hover:bg-white hover:border-primary hover:text-primary';
  }

  return classes;
});

const handleClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>