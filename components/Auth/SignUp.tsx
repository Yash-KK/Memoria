"use client";
import React, { useState } from "react";
import Link from "next/link";
import Label from "../ui/Label";
import InputBox from "../ui/InputBox";
import { SignUpIcon } from "../icons";
import Button from "../ui/Button";
import { signUpUser } from "@/lib/actions";
import { redirect } from "next/navigation";
const SignUp: React.FC = () => {
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);

    const response = await signUpUser(formData);
    if (!response.status) {
      setErrors(response.message);
    } else {
      redirect("/signin");
    }
    setloading(false);
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-800">
      <Label
        onLeft={<SignUpIcon />}
        text="Sign Up"
        textSize="2xl"
        fontWeight="semi-bold"
        className="mb-6 text-white"
      />

      <div className="w-full rounded-lg shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="md:space-y-6 sm:p-8">
          <Label
            text="Create an account"
            textSize="2xl"
            fontWeight="bold"
            className="text-white"
          />
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <Label
                text="First Name"
                textSize="sm"
                fontWeight="medium"
                className="text-white"
              />
              <InputBox
                onChange={handleChange}
                type="text"
                name="firstName"
                placeholder="Hrithik"
                required
              />
            </div>
            <div>
              <Label
                text="Last Name"
                textSize="sm"
                fontWeight="medium"
                className="text-white"
              />
              <InputBox
                onChange={handleChange}
                type="text"
                name="lastName"
                placeholder="Roshan"
              />
            </div>
            <div>
              <Label
                text="Your email"
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
              />{" "}
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
            {errors && (
              <div className="flex items-end text-red-500">{errors}</div>
            )}
            <Button
              loading={loading}
              type="submit"
              text="Create an account"
              textSize="sm"
              fontWeight="medium"
              backgroundColor="medium-gray"
            />
            <p className="text-sm font-light text-gray-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium hover:underline text-primary-500"
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

export default SignUp;
