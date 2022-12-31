<template>
  <form @submit.prevent="handleSubmit">
    <div class="text-center text-red-600 mb-2" v-if="error">
      {{ error }}
    </div>
    <div>
      <UiFormInput class="[&:not(:first-child)]:mt-7" id="email" type="email" label="Email" required v-model="email" />
      <UiFormInput class="[&:not(:first-child)]:mt-7" id="password" type="password" label="Password" required
        v-model="password" />
    </div>
    <UiButtonPrimary class="mt-7 w-full" type="submit" text="Login" />
  </form>
</template>

<script setup>
import { useUserStore } from '~/store/user';

const emits = defineEmits([
  'submit'
]);

const store = useUserStore();
const email = ref('');
const password = ref('');
const error = ref(null);
const { login } = useStrapiAuth();

const handleSubmit = async () => {
  error.value = null;

  try {
    await login(
      {
        identifier: email.value,
        password: password.value
      }
    );

    error.value = null;

    emits('submit');
  } catch (e) {
    error.value = 'Invalid login credentials';
  }
}

</script>