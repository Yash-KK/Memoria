import Spinner from "./Spinner";
import {
  BackGroundColorVariants,
  FontWeightVariants,
  TextSizeVariants,
} from "./variants";

type ButtonProps = {
  text: string;
  loading?: boolean;
  type: "button" | "submit";
  textSize: "sm" | "md" | "lg";
  fontWeight: "medium" | "bold" | "semi-bold";
  backgroundColor: "gray" | "medium-gray";
};

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  loading,
  textSize,
  fontWeight,
  backgroundColor,
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`w-full text-white ${FontWeightVariants[fontWeight]} rounded-lg ${TextSizeVariants[textSize]} px-5 py-2.5 text-center ${BackGroundColorVariants[backgroundColor]} hover:bg-gray-700`}
    >
      <div className="flex justify-center items-center">
        {loading && <Spinner />}
        {text}
      </div>
    </button>
  );
};

export default Button;
