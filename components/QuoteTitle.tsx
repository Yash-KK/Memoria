import React from "react";

type QuoteTitleProps = {
  title: string;
  font: "bubble" | "mono";
};

const QuoteTitleFonts = {
  bubble: "font-bubblegum",
  mono: "font-mono",
};

const QuoteTitle: React.FC<QuoteTitleProps> = ({ title, font }) => {
  return (
    <>
      <div className={`${QuoteTitleFonts[font]} text-9xl`}>{title}</div>
    </>
  );
};
export default QuoteTitle;
