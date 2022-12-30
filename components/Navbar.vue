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
        <UiButtonPrimary @click="handleLogout" class="ml-3" text="Logout" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store/user';

const store = useUserStore();

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

const router = useRouter();
const { logout } = useStrapiAuth();

const handleLogout = () => {

  logout();

  router.push({
    name: 'index'
  });

};

</script>