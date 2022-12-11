<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <UiFormInput
        class="[&:not(:first-child)]:mt-7"
        id="username"
        label="Username"
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
import { useRouter } from 'vue-router';

const emits = defineEmits([
  'submit'
]);

const name = ref('');
const email = ref('');
const password = ref('');

const { register } = useStrapiAuth();
const router = useRouter();

const handleSubmit = async () => {
  
  try {
    await register({
      username: name.value,
      email: email.value,
      password: password.value
    });

    router.push({
      name: 'profile'
    });

  } catch (e) {}
  
  name.value = '';
  email.value = '';
  password.value = '';
};

</script>

<style lang="scss" scoped>

</style>