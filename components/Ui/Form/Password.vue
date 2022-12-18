<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="flex text-xs"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-red-700"
      >
        *
      </span>
    </label>
    <div
      class="
      mt-[0.2rem]
      rounded
      border
      border-slate-300
      bg-white
      outline-0
      flex
      items-center
      justify-between
    "
      :class="[ disabled ? 'bg-slate-100' : '' ]"
    >
      <input
        class="px-3 py-2.5 w-full text-sm rounded"
        :id="id"
        :name="label"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"

        :type="type"

        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <button
        class="px-3 flex self-auto"
        @click="togglePasswordVisibility"
        type="button"
      >
        <EyeSlashIcon
          v-if="type === 'password'"
          class="h-5 w-5 text-slate-400"
        />
        <EyeIcon
          v-else
          class="h-5 w-5 text-slate-400"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { EyeSlashIcon, EyeIcon } from '@heroicons/vue/24/solid';

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
  id: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const type = ref('password');

const togglePasswordVisibility = () => {
  type.value = type.value === 'password' ? 'text' : 'password'
}

defineEmits([
  'update:modelValue'
]);
</script>

<style>
</style>