<template>
  <div class="px-[2rem] py-[4rem]">
    <main>
      <div class="container mx-auto max-w-[34.63rem]">
        <section class="py-[3rem] px-[3.5rem] bg-white rounded shadow">
          <div class="mb-9 flex items-center flex-col">
            <div class="pb-1">
              <h1 class="text-3xl font-semibold">
                Welcome to App!
              </h1>
            </div>
            <div>
              <span v-if="showLogin" class="text-base text-slate-500">
                Login
              </span>
              <span v-else class="text-base text-slate-500">
                Sign up
              </span>
            </div>
          </div>

          <div v-if="showLogin">
            <LoginForm v-if="showLogin" />
          </div>
          <div v-else>
            <SignupForm />
          </div>

          <hr class="my-4" />
          <div class="mt-4 text-sm text-center">
            <div>
              <p>
                {{ showLogin ? 'Not registred yet?' : 'Do you have an account?' }}
                <span v-if="showLogin">
                  <span @click="showLogin = false" class="underline cursor-pointer">
                    Sign in!
                  </span>
                </span>
                <span v-else>
                  <span @click="showLogin = true" class="underline cursor-pointer">
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

const showLogin = ref(true);

</script>