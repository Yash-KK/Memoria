import QuoteTitle from "./QuoteTitle";

type QuoteProps = {
  text: string;
  size: "md" | "lg";
};

const TextSizeVariants = {
  md: "text-2xl",
  lg: "text-4xl",
};
const Quote: React.FC<QuoteProps> = ({ text, size }) => {
  return (
    <div className="flex bg-pink-700 h-screen justify-center items-center flex-col">
      <QuoteTitle title="Memoria" font="bubble" />
      <div className={`font-mono ${TextSizeVariants[size]} text-center`}>
        {text}
      </div>
    </div>
  );
};

export default Quote;
