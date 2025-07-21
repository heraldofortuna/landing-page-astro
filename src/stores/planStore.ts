import { ref, watchEffect } from 'vue';

// Estado inicial (comprueba localStorage o usa 'monthly' por defecto)
const getInitialPlan = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('selectedPlan') || 'monthly';
  }
  return 'monthly';
};

export const planStore = ref(getInitialPlan());

// Sincronizar cambios con localStorage
watchEffect(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedPlan', planStore.value);
  }
});