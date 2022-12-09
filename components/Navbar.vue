<template>
  <div>
    <div>
      <NuxtLink to="#!">
        App Logo
      </NuxtLink>
    </div>
    <nav>
      <ul>
        <li
          v-for="link in menu"
          :key="link.id"
        >
          <NuxtLink :to="link.link">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <UiButtonPrimary text="Logout" />
  </div>
</template>

<script setup>

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

</script>