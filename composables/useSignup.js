const useSignup = async (user = {}) => {

  try {
    const resp = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user),
    });

    const data = await resp.json();

    // console.log(data.user);

    return data;

  } catch (err) {
    throw Error(err.message);
  }
};

export default useSignup;