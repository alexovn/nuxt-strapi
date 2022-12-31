<template>
  <div class="py-10">
    <div class="mb-7 flex items-center justify-between">
      <h4 class="uppercase text-sm text-slate-500">
        Contact information
      </h4>
    </div>
    <div>
      <div class="[&:not(:last-child)]:mb-3 md:[&:not(:last-child)]:mb-5">
        <UiFormInput
          id="address"
          class="w-full"
          label="Address"
          v-model="user.address"
        />
      </div>
      <div class="[&:not(:last-child)]:mb-3 md:[&:not(:last-child)]:mb-5 md:flex items-center gap-x-8">
        <UiFormInput
          id="city"
          class="mb-3 w-full"
          label="City"
          v-model="user.city"
        />
        <UiFormInput
          id="country"
          class="mb-3 w-full"
          label="Country"
          v-model="user.country"
        />
        <UiFormInput
          id="postal-code"
          class="mb-3 w-full"
          label="Postal code"
          v-model="user.postalCode"
        />
      </div>
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