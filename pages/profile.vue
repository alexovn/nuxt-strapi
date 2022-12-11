<template>
  <Navbar />
  <main>
    <ProfileHero />
    <ProfileMain />
  </main>
</template>

<script setup>

definePageMeta({
  middleware: [
    'auth'
  ]
});

</script>