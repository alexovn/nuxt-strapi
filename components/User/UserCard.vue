<template>
  <section class="px-5 rounded shadow bg-white">
    <div class="mt-[-4rem] mb-[3rem]">

      <div class="mx-auto mb-5 bg-red-300 rounded-full w-60 h-60">
        <img
          class="block w-60 h-60 rounded-full object-cover"
          :src="userAvatar"
          alt="avatar"
        >
      </div>

      <form ref="avatarForm">
        <UiFormUpload class="[&:not(:last-child)]:mb-3" @file-update="captureFile($event)" id="upload-avatar"
          text="Edit">
          <template #icon>
            <PencilIcon class="h-4 w-4 text-white" />
          </template>
        </UiFormUpload>
        <UiButtonPrimary class="[&:not(:last-child)]:mb-3" @click="deleteFile" text="Delete" error />
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
const token = useStrapiToken();
const { find } = useStrapi4()

const { data, pending, refresh, error } = await useAsyncData(
  'user',
  () => find('users/me?populate=avatar')
);

const userAvatar = computed(() => {
  return data.value.avatar !== null
    ? `${runtimeConfig.public.strapi.url}${data.value.avatar.url}`
    : '/img/default-avatar.svg'
});

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
  formData.append('refId', data.value.id);
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

  await refresh();
};

const deleteFile = async () => {
  const avatarId = data.value.avatar?.id;

  if (!avatarId) return;

  const formData = new FormData();

  formData.append('ref', 'plugin::users-permissions.user');
  formData.append('refId', data.value.id);
  formData.append('field', 'avatar');

  try {
    const res = await fetch(`${runtimeConfig.public.strapi.url}/api/upload/files/${avatarId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: formData
    });
  } catch (e) { };

  await refresh();
};
</script>