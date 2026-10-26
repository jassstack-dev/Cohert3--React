import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/authHooks";

const Register = () => {
  let {
    navigate,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    registerForm,
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="mb-6 text-2xl font-extrabold tracking-wide text-blue-600">
            Your Brand
          </h2>

          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your details to create an account.
          </p>
        </div>

        <form onSubmit={handleSubmit(registerForm)} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
            {...register('name')}
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
            {...register('email')}
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
            {...register('password')}
              id="password"
              type="password"
              placeholder="Create a password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button onClick={() => navigate("/")}>sign in</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
