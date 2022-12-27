<template>
  <div>
    <input @change="onFileChange($event)" type="file" :id="id" :name="id" hidden>
    <label class="
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
      :for="id"
      :refs="refs"
    >
      <slot name="icon" />
      <span class="block mx-2">
        {{ text }}
      </span>
    </label>
  </div>
</template>

<script setup>

const props = defineProps({
  refs: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
});

const emit = defineEmits([
  'update:modelValue',
  'file-update'
]);

const onFileChange = (e) => {
  const file = e.target.files[0];
 
  if(!file) return;

  emit('file-update', file);

  // emit('update:modelValue', e.target.files[0]);
};

</script>