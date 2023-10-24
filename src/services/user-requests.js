import { data } from "autoprefixer";
import axios from "axios";

//USER REQUESTS / AUTHENTICATION
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

const resetPasswordRequest = async (password, newPassword) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/user/resetPassword`,
    { password, newPassword },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

//LISTING REQUESTS
const viewAllListingsRequest = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/listing/view-all`
  );
  return response.data;
};

const viewListingRequest = async (id) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/listing/view`,
    { id },
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return response.data;
};

const getUserListingsRequest = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/listing/user-listings`,
    {},
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
  return response.data;
};

const createListingRequest = async (
  coverImage,
  title,
  description,
  address,
  pricePerNight,
  pricePerPerson,
  lat,
  lon,
  stars,
  flowers
) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/listing/create`,
    {
      coverImage,
      title,
      description,
      address,
      pricePerNight,
      pricePerPerson,
      lat,
      lon,
      stars,
      flowers,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export {
  registerUserRequest,
  loginUserRequest,
  currentUserRequest,
  resetPasswordRequest,
  viewAllListingsRequest,
  viewListingRequest,
  getUserListingsRequest,
  createListingRequest,
};
