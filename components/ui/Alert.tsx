type AlertProps = {
  text: string;
  iconLeft: React.ReactNode;
};
const Alert: React.FC<AlertProps> = ({ text, iconLeft }: AlertProps) => {
  return (
    <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 rounded-lg shadow-sm text-gray-400 bg-gray-800">
      <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg bg-green-800 text-green-200">
        {iconLeft}
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
    </div>
  );
};

export default Alert;
