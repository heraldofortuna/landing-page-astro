<template>
  <header class="py-4 border-b border-neutral-200 relative">
    <div class="w-[90%] max-w-[1200px] flex items-center justify-between gap-6 m-auto">
      <img :src="EmbraceLogoImage.src" alt="Logo oficial de la empresa Embrace." />
      
      <!-- Menú desktop (igual que antes) -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-10">
          <li v-for="item in menuItems" :key="item" class="hover:text-primary transition-colors duration-200 cursor-pointer">
            <p>{{ item }}</p>
          </li>
        </ul>
      </nav>
      
      <!-- Botón hamburguesa -->
      <div class="block md:hidden cursor-pointer" @click="toggleMenu">
        <img :src="HamburguerIcon.src" width="40" alt="Menú del header." />
      </div>
      
      <!-- Botón Book A Call (desktop) -->
      <a class="hidden md:block" href="#book-call">
        <Button text="Book A Call" size="small" />
      </a>
    </div>

    <!-- Overlay con fade -->
    <Transition name="fade">
      <div 
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 menu-overlay md:hidden"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- Menú móvil -->
     <Transition name="slide">
      <div 
        v-if="isMenuOpen"
        class="fixed inset-y-0 right-0 z-50 w-[80%] bg-white shadow-lg p-6 border-gray-200 border-l"
        @click.stop
      >
        <button 
          class="absolute bg-primary w-8 h-8 flex items-center justify-center text-white rounded-full top-4 right-4 text-2xl"
          @click="closeMenu"
        >
          &times;
        </button>
        
        <ul class="border-t border-gray-200 mt-16">
          <li 
            v-for="item in menuItems" 
            :key="item"
            class="text-lg hover:text-primary transition-colors duration-200 cursor-pointer py-6 border-b border-gray-200"
            @click="closeMenu"
          >
            {{ item }}
          </li>
        </ul>
        
        <a class="block mt-8" href="#book-call" @click="closeMenu">
          <Button text="Book A Call" />
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmbraceLogoImage from '/src/assets/embrace.svg';
import HamburguerIcon from '/src/assets/hamburguer.svg';
import Button from "../ui/Button.vue";

const menuItems = [
  'How It Works',
  'Our Work', 
  'Pricing',
  'About Us'
];

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.menu-overlay {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>