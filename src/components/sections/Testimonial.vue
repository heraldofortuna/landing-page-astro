<script setup lang="ts">
import { ref, onMounted } from 'vue';

const testimonials = [
  {
    name: "Amelia Joseph",
    position: "Chief Manager",
    quote: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
  },
  {
    name: "Jacob Joshua",
    position: "Chief Manager",
    quote: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!"
  },
  {
    name: "Jacob",
    position: "Chief Manager",
    quote: "Embrace really nails it! Creative-approachable style. They're not an artistry meets strategy. The achievement is achieved!"
  }
];

const currentIndex = ref<number>(0);
const intervalRef = ref<NodeJS.Timeout | null>(null);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  intervalRef.value = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value);
  }
};

onMounted(() => {
  startAutoPlay();
  return () => stopAutoPlay();
});
</script>

<template>
  <section class="py-24">
    <div class="w-[90%] max-w-[1200px] flex flex-col gap-18 m-auto">
      <div class="flex justify-between gap-16">
        <h2 class="text-6xl leading-22">What Our Client Said About Us</h2>
        <div class="flex gap-5">
          <!-- Navigation Arrows -->
          <button
            @click="prevSlide"
            class="bg-primary h-20 w-20 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="bg-primary h-20 w-20 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="relative max-w-4xl w-full mx-auto px-4 py-12">
        <!-- Testimonial Cards -->
        <div class="relative h-96 overflow-hidden">
          <transition-group name="fade" tag="div" class="h-full">
            <div
              v-for="(testimonial, index) in testimonials"
              v-show="index === currentIndex"
              :key="index"
              class="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              @mouseenter="stopAutoPlay"
              @mouseleave="startAutoPlay"
            >
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ testimonial.name }}</h3>
              <p class="text-gray-500 dark:text-gray-300 mb-6">{{ testimonial.position }}</p>
              <p class="text-lg text-gray-700 dark:text-gray-200 italic">"{{ testimonial.quote }}"</p>
            </div>
          </transition-group>
        </div>

        <!-- Indicators -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="{
              'bg-primary-600 dark:bg-primary-400': index === currentIndex,
              'bg-gray-300 dark:bg-gray-600': index !== currentIndex
            }"
            aria-label="Go to testimonial"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>