import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithEmail, setUserLoggedIn } = useAuthContext();

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      const res = await loginWithEmail(email, password);
      console.log(res);
      if (res?.error === false) {
        toast.success("Login succesful!", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        localStorage.setItem("token", res.token);
        setUserLoggedIn(true);
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
        className="md:w-full xl:w-3/4 w-full px-4 lg:px-0 mx-auto"
        onSubmit={handleLogin}
      >
        {/* EMAIL/USERNAME */}
        <div className="pb-2 pt-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* PASSWORD */}
        <div className="pb-2 pt-4">
          <input
            className="block w-full p-4 text-lg rounded-sm bg-neutral-200 dark:bg-black"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* FORGOT PASSWORD */}
        <div className="text-right dark:text-gray-400 hover:underline  hover:dark:text-gray-100">
          <a href="#">Forgot your password?</a>
        </div>
        {/* SIGN IN BUTTON */}
        <div className="pb-2 pt-4">
          <button
            type="submit"
            className="uppercase w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
          >
            sign in
          </button>
        </div>
      </form>
      {/* REGISTER */}
      <div className="flex justify-center gap-2.5">
        <p className=" dark:text-gray-400">Don&apos;t have an account? </p>
        <Link to="/auth/register">
          <p className="text-indigo-500 hover:underline">Register.</p>
        </Link>
      </div>
    </>
  );
};

export default Login;
