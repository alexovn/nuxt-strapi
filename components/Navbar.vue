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
        <div class="w-8 h-8 shrink-0 bg-red-300 rounded-full">
          <img
            class="block w-8 h-8 rounded-full object-cover"
            :src="userAvatar"
            alt="avatar"
          >
        </div>
        <UiButtonPrimary @click="handleLogout" class="ml-3" text="Logout" />
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