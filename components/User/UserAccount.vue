<template>
  <section class="my-5 rounded shadow bg-white">
    <div>
      <div class="flex items-center justify-between px-5 py-5 rounded-t bg-slate-100">
        <div>
          <h3 class="text-xl font-semibold">
            My account
          </h3>
        </div>
      </div>
      <div class="px-5 divide-y divide-slate-300">
        <UserInfo />
        <UserContacts />
        <UserAbout />
      </div>
    </div>
  </section>
</template>

<script setup>



</script>