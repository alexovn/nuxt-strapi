<template>
  <section class="my-5 rounded bg-white">
    <div>
      <div class="flex items-center justify-between px-5 py-5 rounded-t bg-slate-100">
        <div>
          <h3 class="text-xl font-semibold">
            My account
          </h3>
        </div>
        <UiButtonPrimary class="max-w-[8rem]" text="Update" @click="updateUserInfo" />
      </div>
      <UserInfo />
    </div>
  </section>
</template>

<script setup>

const token = useStrapiToken();

const _user = {
  firstName: 'Olga',
  lastName: 'Larina'
};

const updateUserInfo = async () => {

  const res = await fetch('http://localhost:1337/api/user/me', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token.value}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_user)
  });
};

</script>