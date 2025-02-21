import React from "react";

type LabelProps = {
  text: string;
  textSize: "md" | "sm" | "xl" | "2xl" | "4xl";
  fontWeight: "medium" | "bold";
  className?: string;
};

const LabelTextSize = {
  sm: "text-sm",
  md: "text-md",
  xl: "text-xl",
  "2xl": "text-2xl",
  "4xl": "text-4xl",
};
const LabelFontWeight = {
  medium: "font-medium",
  bold: "folt-bold",
};
const Label: React.FC<LabelProps> = ({
  text,
  textSize,
  fontWeight,
  className,
}) => {
  return (
    <label
      className={`block mb-2 ${LabelTextSize[textSize]} ${LabelFontWeight[fontWeight]} text-white ${className}`}
    >
      {text}
    </label>
  );
};
export default Label;
