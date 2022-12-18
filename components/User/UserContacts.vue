<template>
  <form class="py-10" @submit.prevent="handleSubmit">
    <div class="mb-7 flex items-center justify-between">
      <h4 class="uppercase text-sm text-slate-500">
        Contact information
      </h4>
      <UiButtonPrimary
        class="max-w-[8rem]"
        type="submit"
        text="Update"
      />
    </div>
    <div>
      <div class="[&:not(:last-child)]:mb-8">
        <UiFormInput
          id="address"
          class="w-full"
          label="Address"
          v-model="_user.address"
        />
      </div>
      <div class="[&:not(:last-child)]:mb-8 flex items-center gap-x-8">
        <UiFormInput
          id="city"
          class="w-full"
          label="City"
          v-model="_user.city"
        />
        <UiFormInput
          id="country"
          class="w-full"
          label="Country"
          v-model="_user.country"
        />
        <UiFormInput
          id="postal-code"
          class="w-full"
          label="Postal code"
          v-model="_user.postalCode"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import submitUserForm from '~/composables/submitUserForm' 

const user = useStrapiUser();

const _user = {
  address: user.value.address,
  city: user.value.city,
  country: user.value.country,
  postalCode: user.value.postalCode,
};

const handleSubmit = () => {
  submitUserForm(_user);
};

</script>