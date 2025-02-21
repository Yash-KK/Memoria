import React from "react";
import Link from "next/link";
const SignUp: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-800">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-white"
      >
        <img
          className="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Sign Up
      </a>
      <div className="w-full rounded-lg shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 ">
        <div className="md:space-y-6 sm:p-8">
          <label className="text-2xl font-bold mb-2 text-white">
            Create an account
          </label>
          
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border text-sm rounded-lg text-white w-full p-2.5 bg-gray-700 border-gray-600"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border text-sm rounded-lg text-white w-full p-2.5 bg-gray-700 border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-pink-700"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign In here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp