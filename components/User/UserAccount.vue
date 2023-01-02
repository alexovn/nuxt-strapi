<template>
  <section class="rounded shadow bg-white">
    <form @submit.prevent="handleSubmit">
      <div class="md:flex md:items-center md:justify-between px-5 py-5 rounded-t bg-slate-100">
        <div class="mb-3 md:mb-0">
          <h3 class="text-xl font-semibold">
            My account
          </h3>
        </div>
        <UiButtonPrimary
          class="max-w-full md:max-w-[8rem]"
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

const _user = ref({
  username: user.value.username,
  email: user.value.email,

  firstName: user.value.firstName,
  lastName: user.value.lastName,

  address: user.value.address,
  city: user.value.city,
  country: user.value.country,
  postalCode: user.value.postalCode,

  textarea: user.value.textarea
});

const handleSubmit = async() => {
  await submitUserForm(_user.value);
};
</script>