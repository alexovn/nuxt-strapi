<template>
  <div>
    <label v-if="label" :for="id" class="flex text-xs">
      {{ label }}
      <span v-if="required" class="text-red-700">
        *
      </span>
    </label>
    <div class="
      mt-[0.2rem]
      rounded
      border
      border-slate-300
      bg-white
      outline-0
    ">
      <input
        class="
          px-3
          py-2.5
          w-full
          text-sm
        "
        :id="id"
        :name="label"
        :type="type"
        :placeholder="placeholder"
        :required="required"

        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: ''
  }
});

defineEmits([
  'update:modelValue'
]);

</script>

<style>
</style>