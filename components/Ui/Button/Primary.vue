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
      text-white
    "
    :class="mods"
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
  error: {
    type: Boolean,
    default: false
  }
});

const mods = computed(() => {
  return props.error
    ? 'bg-red-500 hover:bg-red-300 active:bg-red-400'
    : 'bg-blue-600 hover:bg-blue-400 active:bg-blue-500';
});

</script>