<template>
  <div class="px-[2rem] py-[4rem]">
    <main>
      <div class="container mx-auto max-w-[34.63rem]">
        <section class="py-[3rem] px-[3.5rem] bg-white rounded shadow">
          <div class="mb-5 flex items-center flex-col">
            <div class="pb-1">
              <h1 class="text-3xl font-semibold">
                Welcome to App!
              </h1>
            </div>
            <div>
              <span v-if="currentForm === LoginForm" class="text-base text-slate-500">
                Login
              </span>
              <span v-else class="text-base text-slate-500">
                Sign up
              </span>
            </div>
          </div>

          <KeepAlive>
            <component :is="currentForm" @submit="enterProfile"></component>
          </KeepAlive>

          <hr class="my-4" />
          <div class="mt-4 text-sm text-center">
            <div>
              <p>
                {{
                    currentForm === LoginForm
                      ? 'Not registred yet?'
                      : 'Do you have an account?'
                }}
                <span v-if="currentForm !== SignupForm">
                  <span @click="changeForm(SignupForm)" class="underline cursor-pointer">
                    Sign in!
                  </span>
                </span>
                <span v-else>
                  <span @click="changeForm(LoginForm)" class="underline cursor-pointer">
                    Log in!
                  </span>
                </span>
              </p>
            </div>
          </div>

        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '~/components/LoginForm.vue';
import SignupForm from '~/components/SignupForm.vue';

const currentForm = shallowRef(LoginForm);
const router = useRouter();

const changeForm = (form) => {
  currentForm.value = form;
};

const enterProfile = () => {
  router.push({
    name: 'profile'
  });
};

</script>