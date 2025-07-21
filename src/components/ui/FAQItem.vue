<template>
  <div class="border-b border-neutral-200 cursor-pointer">
    <button
      @click="toggleAccordion"
      class="flex justify-between items-center w-full text-left py-6 md:py-8 cursor-pointer"
      :aria-expanded="isOpen"
      :aria-controls="answerId"
    >
      <span class="text-lg md:text-xl leading-9 hover:text-primary-600 transition-colors">
        {{ question }}
      </span>
      <svg
        class="w-5 h-5 text-primary transform transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      :id="answerId"
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :class="{
        'max-h-0 opacity-0': !isOpen,
        'max-h-[500px] opacity-100': isOpen
      }"
      :aria-hidden="!isOpen"
    >
      <div class="text-gray-dark pb-6 md:pb-8">
        <slot name="answer">{{ answer }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
});

const isOpen = ref<boolean>(props.defaultOpen);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const answerId = `answer-${props.question.toLowerCase().replace(/\s+/g, '-')}`;
</script>