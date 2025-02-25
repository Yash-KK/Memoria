type InputBoxProps = {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputBox: React.FC<InputBoxProps> = ({
  type,
  name,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      className="border text-sm rounded-lg text-white w-full p-2.5 bg-gray-700 border-gray-600"
      required={required}
    />
  );
};

export default InputBox;
