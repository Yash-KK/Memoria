"use client";
import React, { useState } from "react";
import Link from "next/link";
import Label from "../ui/Label";
import InputBox from "../ui/InputBox";
import { SignInIcon } from "../icons";
import Button from "../ui/Button";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const SignIn: React.FC = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);

    const response = await signIn("credentials", {
      ...formData,
      redirect: false,
    });
    if (response?.error) {
      setloading(false);
      setError(response.error);
    } else {
      redirect("/");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-800">
      <Label
        onLeft={<SignInIcon />}
        text="Sign In"
        textSize="2xl"
        fontWeight="semi-bold"
        className="text-white mb-6"
      />

      <div className="w-full rounded-lg shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="md:space-y-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <Label
                text="Email"
                textSize="sm"
                fontWeight="medium"
                className="text-white"
              />
              <InputBox
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="theRoshan@gmail.com"
                required
              />
            </div>
            <div>
              <Label
                text="Password"
                textSize="sm"
                fontWeight="medium"
                className="text-white"
              />
              <InputBox
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="*********"
                required
              />
            </div>
            {error && (
              <div className="flex items-end text-red-500">{error}</div>
            )}
            <Button
              loading={loading}
              type="submit"
              text="Login to your account"
              textSize="sm"
              fontWeight="medium"
              className="text-white bg-gray-600 hover:bg-gray-700"
            />
            <p className="text-sm font-light text-gray-400">
              {`Don't have an account?`}
              <Link
                href="/signup"
                className="font-medium hover:underline text-primary-500"
              >
                Sign Up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
