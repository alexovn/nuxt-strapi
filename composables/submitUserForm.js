const submitUserForm = async (_user) => {
  const token = useStrapiToken();
  
  const res = await fetch("http://localhost:1337/api/user/me", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_user),
  });
};

export default submitUserForm;