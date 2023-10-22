import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !number ||
      !email ||
      !password ||
      !confirmPassword
    )
      return;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const res = await register(email, password, lastName, number, firstName);
      console.log(res);
      if (res?.error === false) {
        toast.success("Register succesful!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      }
      if (res?.error === true) {
        toast.error(`${res?.message}`, {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="md:w-full xl:w-3/4 w-full px-4 lg:px-0 mx-auto"
      >
        {/* FIRST/LAST NAME */}
        <div className="flex gap-2 pb-2 pt-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
          />
        </div>
        {/* EMAIL */}
        <div className="pb-2 pt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
          />
        </div>
        {/* PHONE NUMBER */}
        <div className="pb-2 pt-4">
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
          />
        </div>
        {/* PASSWORD */}
        <div className="flex gap-2 pb-2 pt-4">
          {/* PASSWORD */}
          <input
            className="block w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          {/* CONFIRM PASSWORD */}
          <input
            className="block w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
          />
        </div>

        {/* SIGN IN BUTTON */}
        <div className="pb-2 pt-4">
          <button
            type="submit"
            className="uppercase w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
          >
            Sign up!
          </button>
        </div>
      </form>
      <div className="flex justify-center gap-2.5">
        <p className=" dark:text-gray-400">Already have an account? </p>
        <Link to="/auth/login">
          <p className="text-indigo-500 hover:underline">Sign in.</p>
        </Link>
      </div>
    </>
  );
};

export default Register;
