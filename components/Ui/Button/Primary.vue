<template>
  <button
    class="
      px-2
      py-2
      w-full
      h-full
      text-xs
      font-semibold
      rounded
      bg-blue-600
      text-white
      hover:bg-blue-400
    "
    :type="type">
    {{ text }}
  </button>
</template>

<script setup>

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
    default: 'button'
  },
});

</script>

<style lang="scss" scoped>

</style>