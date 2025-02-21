import { FontWeightVariants, TextSizeVariants } from "./variants";

type LabelProps = {
  onLeft?: React.ReactNode;
  onRight?: React.ReactNode;
  text: string;
  textSize: "md" | "sm" | "xl" | "2xl" | "4xl";
  fontWeight: "medium" | "bold" | "semi-bold";
  className?: string;
};

const Label: React.FC<LabelProps> = ({
  onLeft,
  onRight,
  text,
  textSize,
  fontWeight,
  className,
}) => {
  return (
    <label
      className={`flex items-center block mb-2 ${TextSizeVariants[textSize]} ${FontWeightVariants[fontWeight]} text-white ${className}`}
    >
      <div className="mr-1">{onLeft}</div>
      {text}
      <div className="ml-1">{onRight}</div>
    </label>
  );
};
export default Label;
