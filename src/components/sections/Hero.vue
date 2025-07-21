<template>
  <section class="py-16 lg:py-30">
    <div class="w-[90%] max-w-[1200px] lg:max-h-[800px] flex flex-col lg:flex-row items-center justify-between gap-14 m-auto">
      <div class="w-full lg:w-1/2 flex flex-col gap-11">
        <div class="flex flex-col gap-7">
          <h1 class="text-6xl lg:text-8xl text-center lg:text-left font-semibold">We Take Care Of Your Brand</h1>
          <p class="text-lg lg:text-xl text-gray-dark text-center lg:text-left">We care about our work and we care about our clients.</p>
        </div>
        <div class="flex items-center justify-center lg:justify-start gap-3">
          <Switch
            v-model="selectedOption"
            :options="[
              { value: 'entrepreneur', label: 'Entrepreneur' },
              { value: 'company', label: 'Company' }
            ]"
          />
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex items-center justify-center">
        <img :src="selectedOption === 'company' ? HeroCompanyImage.src : HeroImage.src" class="max-h-[600px]" alt="We Take Care of Your Brand." />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroImage from '/src/assets/hero.png';
import HeroCompanyImage from '/src/assets/hero-company.png';
import Switch from '../ui/Switch.vue';
import { planStore } from '../../stores/planStore';

const selectedOption = planStore;
</script>