<template>
  <form class="py-10" @submit.prevent="handleSubmit">
    <div class="mb-7 flex items-center justify-between">
      <h4 class="uppercase text-sm text-slate-500">
        About me
      </h4>
      <UiButtonPrimary
        class="max-w-[8rem]"
        text="Update"
        type="submit"
      />
    </div>
    <div>
      <UiFormTextarea
        id="about"
        label="About me"
        class="w-full"
        placeholder="A beautiful story about me and my skills"
        v-model="_user.textarea"
      />
    </div>
  </form>
</template>

<script setup>
import submitUserForm from '~/composables/submitUserForm';

const user = useStrapiUser();

const _user = {
  textarea: user.value.textarea,
};

const handleSubmit = () => {
  submitUserForm(_user);
};

</script>