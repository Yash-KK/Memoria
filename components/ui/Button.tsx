import {
  BackGroundColorVariants,
  FontWeightVariants,
  TextSizeVariants,
} from "./variants";

type ButtonProps = {
  text: string;
  type: "button" | "submit";
  textSize: "sm" | "md" | "lg";
  fontWeight: "medium" | "bold" | "semi-bold";
  backgroundColor: "gray" | "medium-gray";
};

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  textSize,
  fontWeight,
  backgroundColor,
}) => {
  return (
    <button
      type={type}
      className={`w-full text-white ${FontWeightVariants[fontWeight]} rounded-lg ${TextSizeVariants[textSize]} px-5 py-2.5 text-center ${BackGroundColorVariants[backgroundColor]} hover:bg-gray-700`}
    >
      {text}
    </button>
  );
};

export default Button;
