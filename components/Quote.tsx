type QuoteProps = {
    text: String
    size: "md" | "lg"
}

const TextSizeVariants  = {
    md: "text-2xl",
    lg: "text-4xl"
}
const Quote: React.FC<QuoteProps> = ({text, size}) => {
  return (
    <div className="flex bg-pink-700 h-screen justify-center items-center flex-col">
      <div className="font-bubblegum text-gray-900 text-9xl">Memoria</div>
      <div className={`font-mono ${TextSizeVariants[size]} text-center`}>
      {text}
      </div>
    </div>
  );
};

export default Quote;
