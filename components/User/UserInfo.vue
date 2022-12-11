<template>
  <div class="px-5 py-5">
    <div class="mb-7">
      <h4 class="uppercase text-sm text-slate-500">
        User information
      </h4>
    </div>
    <div>
      <div class="flex w-full gap-x-8 [&:not(:last-child)]:mb-8">
        <UiFormInput
          class="w-full"
          label="Username"
          v-model="userObj.username"
        />
        <UiFormInput
          class="w-full"
          label="Email address"
          type="email"
          v-model="userObj.email"
        />
      </div>
      <div class="flex w-full gap-x-8 [&:not(:last-child)]:mb-8">
        <UiFormInput
          class="w-full"
          label="First name"
        />
        <UiFormInput
          class="w-full"
          label="Last name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

const user = useStrapiUser();

const userObj = {
  username: user.value.username,
  email: user.value.email,
  firstName: user.value.firstName,
  lastName: user.value.lastName
}

</script>