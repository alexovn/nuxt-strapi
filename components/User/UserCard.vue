<template>
  <section class="px-5 rounded shadow bg-white">
    <div class="mt-[-4rem] mb-[3rem]">
      <div class="mx-auto mb-5 rounded-full w-60 h-60" :class="user.avatar === null ? 'bg-red-300' : ''">
        <img
          class="block w-60 h-60 rounded-full object-cover"
          :src="userAvatar"
          alt="avatar"
        >
      </div>
      <form ref="avatarForm" @submit.prevent="deleteFile">
        <UiFormUpload class="[&:not(:last-child)]:mb-3" @file-update="captureFile($event)" id="upload-avatar" text="Edit">
          <template #icon>
            <PencilIcon class="h-4 w-4 text-white" />
          </template>
        </UiFormUpload>
        <!-- <UiButtonPrimary class="
          [&:not(:last-child)]:mb-3
          bg-red-500
          hover:bg-red-300
          active:bg-red-400
          "
          text="Delete"
          type="submit"
        /> -->
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
import getUser from '~/composables/getUser';

const runtimeConfig = useRuntimeConfig();

const user = useStrapiUser();
const token = useStrapiToken();

const userAvatar = ref(`${runtimeConfig.public.strapi.url}${user.value?.avatar?.url}`);

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
  const uploadedFile = e;
  const formData = new FormData();

  formData.append('files', uploadedFile);
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

  const data = await getUser();

  return userAvatar.value = `${runtimeConfig.public.strapi.url}${data.avatar.url}`;
};

// const deleteFile = async () => {
//   const id = user.value.avatar.id;
//   const formData = new FormData();

//   userAvatar.value = '';

//   // formData.append('files', uploadedAvatar);
//   formData.append('ref', 'plugin::users-permissions.user');
//   formData.append('refId', user.value.id);
//   formData.append('field', 'avatar');

//   try {
//     const res = await fetch(`${runtimeConfig.public.strapi.url}/api/upload/files/${id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${token.value}`,
//       },
//       body: formData
//     });
//   } catch (e) { };
  
// };
</script>