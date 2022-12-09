<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <UiFormInput
        class="[&:not(:first-child)]:mt-7"
        id="name"
        label="Name"
        required
        v-model="name"
      />
      <UiFormInput
        class="[&:not(:first-child)]:mt-7"
        id="email"
        label="Email"
        required
        type="email"
        v-model="email"
      />
      <UiFormInput
        class="[&:not(:first-child)]:mt-7"
        id="password"
        label="Password"
        required
        type="password"
        v-model="password"
      />
    </div>
    <UiButtonPrimary class="mt-7 w-full" type="submit" text="Sign up" />
  </form>
</template>

<script setup>
import useSignup from '~/composables/useSignup';

const name = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = () => {
  useSignup({
    username: name.value,
    email: email.value,
    password: password.value
  });
  
  name.value = '';
  email.value = '';
  password.value = '';
};

</script>

<style lang="scss" scoped>

</style>