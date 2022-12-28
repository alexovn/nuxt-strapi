const getUser = async () => {
  const runtimeConfig = useRuntimeConfig();
  const token = useStrapiToken();

  try {
    const res = await fetch(`${runtimeConfig.public.strapi.url}/api/users/me?populate[0]=avatar`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    });

    const data = await res.json();

    return data;
  } catch(err) {
    console.error(err.message);
  }
};

export default getUser;