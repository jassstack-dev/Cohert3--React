import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { registerUser, setRegisterUser, loggedInUser, setLoggedInUser } =
    useContext(MyStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function formSubmit(data) {
    console.log(data);
    const user = registerUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found");
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user logged in successfully");
    navigate("/main");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="mt-2 text-sm text-gray-500">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              {...register("email", {
                required: "email is required",
              })}
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800">
            Login
          </button>
        </form>

        {/* Create Account */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            onClick={() => navigate("register")}
            className="font-medium text-black cursor-pointer hover:underline"
          >
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
