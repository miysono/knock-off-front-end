import axios from "axios";

const registerUserRequest = async (
  email,
  password,
  number,
  firstName,
  lastName
) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/user/register`,
    {
      email,
      first_name: firstName,
      last_name: lastName,
      phone: number,
      password,
    }
  );
  return response.data;
};

const loginUserRequest = async (email, password) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/user/login`,
    { email, password }
  );
  return response.data;
};

const currentUserRequest = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/user/currentUser`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export { registerUserRequest, loginUserRequest, currentUserRequest };
