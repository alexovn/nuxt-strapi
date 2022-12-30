import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const avatar = ref(null);

  return {
    avatar
  };
});