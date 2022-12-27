<template>
  <section class="px-5 rounded shadow bg-white">
    <div class="mt-[-4rem] mb-[3rem]">
      <div class="mx-auto rounded-full w-60 h-60" :class="avatar === null ? 'bg-red-300' : ''">
        <img v-if="avatar !== null" class="block rounded-full w-full object-cover"
          :src="`${runtimeConfig.public.strapi.url}${avatar.url}`" alt="avatar">
      </div>
      <form ref="avatarForm" @submit.prevent="handleSubmit">
        <UiFormUpload @file-update="captureFile($event)" id="upload-avatar" text="Edit">
          <template #icon>
            <PencilIcon class="h-4 w-4 text-white" />
          </template>
        </UiFormUpload>
      </form>
    </div>
    <div class="my-[3rem]">
      <div class="flex items-center justify-between">
        <div class="text-center" v-for="item in userStats" :key="item.id">
          <span class="block">
            {{ item.num }}
          </span>
          <span class="block">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PencilIcon } from '@heroicons/vue/24/solid';

const runtimeConfig = useRuntimeConfig();

const user = useStrapiUser();
const token = useStrapiToken();
const timestamp = new Date().getTime();

const avatar = user.value?.avatar;
const avatarForm = ref(null);
const userStats = ref([
  {
    id: 1,
    num: "22",
    name: "friends",
  },
  {
    id: 2,
    num: "10",
    name: "photos",
  },
  {
    id: 3,
    num: "5",
    name: "comments",
  }
]);

const captureFile = async (e) => {
  const uploadedAvatar = e;
  console.log(uploadedAvatar);

  const formData = new FormData();
  formData.append('files', uploadedAvatar);
  formData.append('ref', 'plugin::users-permissions.user');
  formData.append('refId', user.value.id);
  formData.append('field', 'avatar');

  try {
    const res = await fetch(`${runtimeConfig.public.strapi.url}/api/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: formData
    });
  } catch (e) { };
}
</script>