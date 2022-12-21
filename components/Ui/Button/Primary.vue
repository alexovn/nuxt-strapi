<template>
  <button
    class="
      px-2
      py-2
      w-full
      h-full
      flex
      items-center
      justify-center
      text-xs
      font-semibold
      rounded
      bg-blue-600
      text-white
      hover:bg-blue-400
      active:bg-blue-500
    "
    :type="type">
    <slot name="icon" />
    <span class="block mx-2">
      {{ text }}
    </span>
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