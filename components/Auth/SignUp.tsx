import React from "react";
import Link from "next/link";
import Label from "../ui/Label";
import InputBox from "../ui/InputBox";
import { SignUpIcon } from "../icons";
import Button from "../ui/Button";
const SignUp: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-800">
      <Label
        onLeft={<SignUpIcon />}
        text="Sign Up"
        textSize="2xl"
        fontWeight="semi-bold"
        className="mb-6"
      />

      <div className="w-full rounded-lg shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="md:space-y-6 sm:p-8">
          <Label text="Create an account" textSize="2xl" fontWeight="bold" />
          <form className="space-y-4 md:space-y-6">
            <div>
              <Label text="First Name" textSize="sm" fontWeight="medium" />
              <InputBox
                type="text"
                name="firstName"
                placeholder="Hrithik"
                required
              />
            </div>
            <div>
              <Label text="Last Name" textSize="sm" fontWeight="medium" />
              <InputBox type="text" name="lastName" placeholder="Roshan" />
            </div>
            <div>
              <Label text="Your email" textSize="sm" fontWeight="medium" />
              <InputBox
                type="email"
                name="Your email"
                placeholder="theRoshan@gmail.com"
                required
              />{" "}
            </div>
            <div>
              <Label text="Password" textSize="sm" fontWeight="medium" />
              <InputBox
                type="password"
                name="Password"
                placeholder="*********"
                required
              />
            </div>
            <Button
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
