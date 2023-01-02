<template>
  <header class="sticky top-0 z-10 w-full md:static bg-indigo-200">
    <div
      class="container max-w-full justify-end relative h-[3rem] px-5 py-3 mx-auto flex md:justify-between items-center bg-indigo-200">
      <div
        class="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center md:block md:static md:w-auto md:h-auto md:bg-transparent bg-indigo-200">
        <NuxtLink to="#!">
          Logo
        </NuxtLink>
      </div>
      <div
        class="absolute px-3 py-3 w-full top-full left-0 md:static md:px-0 md:py-0 md:w-auto md:flex md:items-center md:bg-transparent bg-red-200 transition-transform"
        :class="isMobileMenuActive ? 'translate-y-0' : '-translate-y-full'"
      >
        <nav>
          <ul class="block w-full md:flex">
            <li class="
              md:mx-3
              hover:after:opacity-1
              relative
              after:block
              after:absolute
              after:w-full
              after:h-0.5
              after:opacity-0
              after:bg-red-400
            " v-for="link in menu" :key="link.id">
              <NuxtLink class="block w-full" :to="link.link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div @click.stop="toggleDropdownMenu"
          class="hidden md:block relative w-8 h-8 shrink-0 bg-red-300 rounded-full cursor-pointer">
          <img class="block w-8 h-8 rounded-full object-cover" :src="userAvatar" alt="avatar">
          <nav @click.stop v-show="isDropdownMenuActive" class="
            mt-1.5
            py-1.5
            absolute
            left-auto
            right-0
            top-full
            min-w-max
            bg-white rounded
            shadow
            ">
            <ul>
              <li v-for="link in dropdownMenuList" :key="link.id">
                <NuxtLink class="block px-5 py-1 w-full hover:bg-blue-400 hover:text-white" :to="link.link">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
            <div class="mt-2 px-2">
              <UiButtonPrimary @click="handleLogout" text="Logout" />
            </div>
          </nav>
        </div>
      </div>
      <button @click="toggleMenu" class="md:hidden z-10">
        <span>button</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const { logout } = useStrapiAuth();
const runtimeConfig = useRuntimeConfig();
const isDropdownMenuActive = ref(false);
const isMobileMenuActive = ref(false);

const menu = ref([
  {
    id: 1,
    name: 'Messages',
    link: '#!'
  },
  {
    id: 2,
    name: 'Account',
    link: '#!'
  },
  {
    id: 3,
    name: 'Help',
    link: '#!'
  },
]);

const dropdownMenuList = ref([
  {
    id: 1,
    name: 'Your profile',
    link: '/profile'
  },
  {
    id: 2,
    name: 'Settings',
    link: '#'
  }
]);

const toggleDropdownMenu = () => {
  isDropdownMenuActive.value = !isDropdownMenuActive.value;
};

const closeDropdownMenu = () => {
  isDropdownMenuActive.value = false;
};

onMounted(() => {
  document.addEventListener('click', closeDropdownMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdownMenu);
});

const { data, pending, refresh, error } = await useAsyncData(
  'user',
  () => find('users/me?populate=avatar')
);

const userAvatar = computed(() => {
  return data.value.avatar !== null
    ? `${runtimeConfig.public.strapi.url}${data.value.avatar?.url}`
    : '/img/default-avatar.svg';
});

const handleLogout = () => {

  logout();

  router.push({
    name: 'index'
  });

};

const toggleMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value;
};

</script>