const submitUserForm = async (_user) => {
  const token = useStrapiToken();
  const runtimeConfig = useRuntimeConfig();
  
  const res = await fetch(`${runtimeConfig.public.strapi.url}/api/user/me`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_user),
  });
};

export default submitUserForm;