import { ref } from 'vue';

const error = ref(null);

const login = async (user = {}) => {
  error.value = null;

  try {
    const resp = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    error.value = null;

    const data = await resp.json();

    console.log(data.user);

    return data;
  } catch (err) {
    error.value = 'Invalid login credentials';
  }

};

const useLogin = () => {
  return {
    error,
    login
  }
}

export default useLogin;