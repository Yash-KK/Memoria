import React from "react";
import Link from "next/link";
import Label from "../ui/Label";
import InputBox from "../ui/InputBox";
import { SignInIcon } from "../icons";
import Button from "../ui/Button";
const SignIn: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-800">
      <Label
        onLeft={<SignInIcon />}
        text="Sign In"
        textSize="2xl"
        fontWeight="semi-bold"
        className="mb-6"
      />

      <div className="w-full rounded-lg shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6">
            <div>
              <Label text="Email" textSize="sm" fontWeight="medium" />
              <InputBox
                type="email"
                name="email"
                placeholder="theRoshan@gmail.com"
                required
              />
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
              text="Login to your account"
              textSize="sm"
              fontWeight="medium"
              backgroundColor="medium-gray"
            />
            <p className="text-sm font-light text-gray-400">
              Don't have an account?{" "}
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
