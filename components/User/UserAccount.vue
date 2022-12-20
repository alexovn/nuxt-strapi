<template>
  <section class="my-5 rounded shadow bg-white">
    <form @submit.prevent="handleSubmit">
      <div class="flex items-center justify-between px-5 py-5 rounded-t bg-slate-100">
        <div>
          <h3 class="text-xl font-semibold">
            My account
          </h3>
        </div>
        <UiButtonPrimary
          class="max-w-[8rem]"
          type="submit"
          text="Update"
        />
      </div>
      <div class="px-5 divide-y divide-slate-300">
        <UserInfo :user="_user" />
        <UserContacts :user="_user" />
        <UserAbout :user="_user" />
      </div>
    </form>
  </section>
</template>

<script setup>
import submitUserForm from "~/composables/submitUserForm";

const user = useStrapiUser();

const password = ref(null);

const _user = ref({
  username: user.value.username,
  password: password.value,
  email: user.value.email,

  firstName: user.value.firstName,
  lastName: user.value.lastName,

  address: user.value.address,
  city: user.value.city,
  country: user.value.country,
  postalCode: user.value.postalCode,

  textarea: user.value.textarea,
});

const handleSubmit = () => {
  submitUserForm(_user.value);
};
</script>