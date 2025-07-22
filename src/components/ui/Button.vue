<template>
  <button
    id="btn-book-call"
    :class="buttonClasses" 
    @click="handleClick"
  >
    <span class="w-full whitespace-nowrap">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "../../types/components";

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  variant: 'primary'
});

const emit = defineEmits<{
  (e: 'click'): void
}>();

const buttonClasses = computed(() => {
  let classes = 'w-fit font-medium rounded-4xl transition-colors duration-200 cursor-pointer border';
  
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
      classes += ' bg-primary text-white border-primary hover:bg-white hover:border-primary hover:text-primary';
      break;
    case 'secondary':
      classes += ' bg-white text-black border-primary hover:bg-primary hover:border-white hover:text-white';
      break;
    default:
      classes += ' bg-primary text-white hover:bg-white hover:border-primary hover:text-primary';
  }

  return classes;
});

const handleClick = () => {
  emit('click');
};
</script>