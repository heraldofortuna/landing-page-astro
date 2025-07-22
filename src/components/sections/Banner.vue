<template>
  <section id="book-call" class="py-12 md:py-25">
    <div class="w-[90%] max-w-[1200px] flex m-auto">
      <div class="bg-primary text-white text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-8 md:px-14 py-12 md:py-25 rounded-4xl">
        <h2 class="w-full md:w-1/2 text-4xl md:text-6xl">Elevate Your Brand Today!</h2>
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 md:gap-8">
          <Switch
            v-model="selectedOption"
            :options="[
              { value: 'entrepreneur', label: 'Entrepreneur' },
              { value: 'company', label: 'Company' }
            ]"
          />
          <p v-if="selectedOption === 'entrepreneur'" class="text-lg md:text-xl">
            Ready to take your digital venture to the next level? ✨ We specialize in helping startups like yours shine online. Book today and get your dream off the ground!
          </p>
          <p v-else class="text-lg md:text-xl">
            Optimize your company's digital presence with tailored solutions. Our expert team guarantees tangible ROI on every project. Schedule a strategic consultation today. 📈
          </p>
          <form class="w-full flex flex-col items-center md:items-start gap-4">
            <div class="w-full flex flex-col md:flex-row items-center gap-4">
              <Inputfield
                client:visible
                v-model="name"
                name="name"
                type="text"
                :placeholder="selectedOption === 'entrepreneur' ? 'Your Name' : 'Your Company'"
                :required="true"
              />
              <Inputfield
                client:visible
                v-model="email"
                name="email"
                type="email"
                placeholder="Your Email"
                :required="true"
              />
            </div>
            <Button client:visible id="btn-book-call" text="Book Call" variant="secondary" :disabled="!name.length || !validEmail()" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from "../ui/Button.vue";
import Inputfield from "../ui/Inputfield.vue";
import Switch from "../ui/Switch.vue";

const selectedOption = ref<'entrepreneur' | 'company'>('entrepreneur')
const name = ref<string>('');
const email = ref<string>('');

const validEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
};
</script>