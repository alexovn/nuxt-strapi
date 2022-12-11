export default defineNuxtRouteMiddleware((to, from) => {
  const user = useStrapiUser();

  console.log(user.value);

  if(!user.value) {
    useCookie('redirect', { path: '/' }).value = to.fullPath;
    return navigateTo('/');
  }

});