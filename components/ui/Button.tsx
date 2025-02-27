import Spinner from "./Spinner";
import { FontWeightVariants, TextSizeVariants } from "./variants";

type ButtonProps = {
  text: string;
  loading?: boolean;
  type: "button" | "submit";
  textSize: "sm" | "md" | "lg";
  fontWeight: "medium" | "bold" | "semi-bold";
  onClick?: () => void;
  onLeft?: React.ReactNode;
  className?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  loading,
  textSize,
  fontWeight,
  onClick,
  onLeft,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`w-full ${FontWeightVariants[fontWeight]} rounded-lg ${TextSizeVariants[textSize]} px-5 py-2.5 text-center ${className}`}
    >
      <div className="flex justify-center items-center whitespace-nowrap">
        {loading && <Spinner />}
        {onLeft}
        {text}
      </div>
    </button>
  );
};

export default Button;
