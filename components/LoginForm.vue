<template>
  <form @submit.prevent="handleSubmit">
    <div
      class="text-center text-red-600 mb-2"
      v-if="error"
    >
      {{ error }}
    </div>
    <div>
      <UiFormInput
        class="[&:not(:first-child)]:mt-7"
        id="email"
        type="email"
        label="Email"
        required
        v-model="email"
      />
      <UiFormInput
        class="[&:not(:first-child)]:mt-7"
        id="password"
        type="password"
        label="Password"
        required
        v-model="password"
      />
    </div>
    <UiButtonPrimary class="mt-7 w-full" type="submit" text="Login" />
  </form>
</template>

<script setup>
import useLogin from '~/composables/useLogin';

const email = ref('');
const password = ref('');

const { error, login } = useLogin();

const handleSubmit = async () => {
  await login({
    identifier: email.value,
    password: password.value
  });
};

</script>