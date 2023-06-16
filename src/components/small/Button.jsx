// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <button className="px-7 border-blue-500 py-1 rounded-full border-2 w-[150px] h-[48px]">
      {text}
    </button>
  );
};

export default Button;
