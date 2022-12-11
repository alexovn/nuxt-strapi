<template>
  <div class="px-5 py-5">
    <div class="mb-7">
      <h4 class="uppercase text-sm text-slate-500">
        User information
      </h4>
    </div>
    <div>
      <div class="flex w-full gap-x-8 [&:not(:last-child)]:mb-8">
        <UiFormInput class="w-full" label="Username" />
        <UiFormInput class="w-full" label="Email address" type="email" />
      </div>
      <div class="flex w-full gap-x-8 [&:not(:last-child)]:mb-8">
        <UiFormInput class="w-full" label="First name" />
        <UiFormInput class="w-full" label="Last name" />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>