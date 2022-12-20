<template>
  <div class="py-10">
    <div class="mb-7 flex items-center justify-between">
      <h4 class="uppercase text-sm text-slate-500">
        About me
      </h4>
    </div>
    <div>
      <UiFormTextarea
        id="about"
        label="About me"
        class="w-full"
        placeholder="A beautiful story about me and my skills"
        v-model="user.textarea"
      />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
});

</script>