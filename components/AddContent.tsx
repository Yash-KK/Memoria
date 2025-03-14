"use client";

import { useState } from "react";
import InputBox from "./ui/InputBox";
import Label from "./ui/Label";
import Dropdown from "./ui/Dropdown";
import Button from "./ui/Button";
import { CloseIcon } from "./icons";
import { addContentAction } from "@/lib/actions";
import { ContentType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toastMessage } from "@/lib/utils";

type AddContentType = {
  handleDisplay: () => void;
};
const AddContent: React.FC<AddContentType> = ({ handleDisplay }) => {
  const [formData, setFormData] = useState<{
    title: string;
    type: ContentType;
    link: string;
  }>({
    title: "",
    type: ContentType.Youtube,
    link: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

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
    if (!formData.type) {
      setError("Type is Mandatory!");
      return;
    }
    const response = await addContentAction(formData);
    console.log(response);

    if (!response.status) {
      setError(response.message);
    } else {
      toastMessage(response.message);
      handleDisplay();
      router.refresh();
    }
  };
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b  border-gray-600">
            <div className="flex w-full justify-between">
              <Label text="Add Content" textSize="xl" fontWeight="semi-bold" />
              <button onClick={handleDisplay}>
                <CloseIcon className="hover:bg-gray-500" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-4 md:p-5 space-y-4">
              <div>
                <Label
                  text="Title"
                  textSize="md"
                  fontWeight="medium"
                  className="text-white"
                />
                <InputBox
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Important Notes"
                  required
                />
              </div>
              <div>
                <Label
                  text="Link"
                  textSize="md"
                  fontWeight="medium"
                  className="text-white"
                />
                <InputBox
                  onChange={handleChange}
                  type="text"
                  name="link"
                  placeholder="https://...."
                  required
                />
              </div>
              <div>
                <Dropdown
                  label="Content Type"
                  options={["YouTube", "Twitter"]}
                  onSelect={(option) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      type:
                        option === "YouTube"
                          ? ContentType.Youtube
                          : ContentType.Twitter,
                    }));
                  }}
                />
              </div>
              {error && <div className="bg-red-500">{error}</div>}
              <Button
                text="Submit"
                textSize="lg"
                type="submit"
                fontWeight="medium"
                className=" text-white bg-gray-600 hover:font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
