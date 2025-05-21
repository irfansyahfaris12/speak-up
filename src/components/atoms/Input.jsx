const Input = ({ type = 'text', ...props }) => (
    <input
      type={type}
      className="w-full p-2 border rounded"
      {...props}
    />
  );
  export default Input;
  