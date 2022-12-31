<template>
  <div
    class="py-10"
    @submit.prevent="handleSubmit"
  >
    <div class="mb-7 flex items-center justify-between">
      <h4 class="uppercase text-sm text-slate-500">
        User information
      </h4>
    </div>
    <div>
      <div class="md:flex w-full gap-x-8 [&:not(:last-child)]:mb-3 md:[&:not(:last-child)]:mb-5">
        <UiFormInput
          id="email-address"
          class="[&:not(:last-child)]:mb-3 w-full"
          label="Email address"
          required="required"
          disabled
          v-model="user.email"
        />
        <UiFormInput
          id="username"
          class="[&:not(:last-child)]:mb-3 w-full"
          label="Username"
          required="required"
          v-model="user.username"
        />
        <!-- <UiFormPassword
          id="password"
          class="w-full"
          label="Password"
          required="required"
          disabled
          v-model="user.password"
        /> -->
      </div>
      <div class="md:flex w-full gap-x-8 [&:not(:last-child)]:mb-3 md:[&:not(:last-child)]:mb-5">
        <UiFormInput
          id="firstName"
          class="[&:not(:last-child)]:mb-3 w-full"
          label="First name"
          v-model="user.firstName"
        />
        <UiFormInput
          id="lastName"
          class="[&:not(:last-child)]:mb-3 w-full"
          label="Last name"
          v-model="user.lastName"
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