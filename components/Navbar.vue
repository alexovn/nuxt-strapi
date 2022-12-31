<template>
  <header class="bg-indigo-200">
    <div class="container px-5 py-3 mx-auto flex justify-between items-center">
      <div>
        <NuxtLink to="#!">
          Logo
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <nav>
          <ul class="flex">
            <li class="
              mx-3
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
        <div @click.stop="toggleDropdownMenu" class="relative w-8 h-8 shrink-0 bg-red-300 rounded-full">
          <img
            class="block w-8 h-8 rounded-full object-cover"
            :src="userAvatar"
            alt="avatar"
          >
          <nav @click.stop v-show="isDropdownMenuActive" class="
            mt-1.5
            py-1.5
            absolute
            left-auto
            right-0
            top-full
            min-w-max
            bg-white rounded"
          >
            <ul>
              <li
                v-for="link in dropdownMenuList"
                :key="link.id"
              >
                <a class="block px-5 py-1 w-full hover:bg-blue-400 hover:text-white" :href="link.link">
                  {{ link.name }}
                </a>
              </li>
            </ul>
            <div class="mt-2 px-2">
              <UiButtonPrimary @click="handleLogout" text="Logout" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store/user';

const store = useUserStore();
const router = useRouter();
const { logout } = useStrapiAuth();
const runtimeConfig = useRuntimeConfig();
const isDropdownMenuActive = ref(false);

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
    link: '#'
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

</script>