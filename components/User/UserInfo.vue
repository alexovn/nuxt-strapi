<template>
  <form class="py-10" @submit.prevent="handleSubmit">
    <div class="mb-7 flex items-center justify-between">
      <h4 class="uppercase text-sm text-slate-500">
        User information
      </h4>
      <UiButtonPrimary
        class="max-w-[8rem]"
        text="Update"
        type="submit"
      />
    </div>
    <div>
      <div class="flex w-full gap-x-8 [&:not(:last-child)]:mb-8">
        <UiFormInput
          id="email-address"
          class="w-full"
          label="Email address"
          required="required"
          v-model="_user.email"
        />
        <UiFormPassword
          id="password"
          class="w-full"
          label="Password"
          required="required"
          v-model="password"
        />
      </div>
      <div class="flex w-full gap-x-8 [&:not(:last-child)]:mb-8">
        <UiFormInput
          id="username"
          class="w-full"
          label="Username"
          required="required"
          v-model="_user.username"
        />
        <UiFormInput
          id="firstName"
          class="w-full"
          label="First name"
          v-model="_user.firstName"
        />
        <UiFormInput
          id="lastName"
          class="w-full"
          label="Last name"
          v-model="_user.lastName"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import submitUserForm from '~/composables/submitUserForm';

const user = useStrapiUser();

const password = ref(null);

const _user = {
  username: user.value.username,
  password: password,
  email: user.value.email,
  firstName: user.value.firstName,
  lastName: user.value.lastName,
};

const handleSubmit = () => {
  submitUserForm(_user);
}

</script>