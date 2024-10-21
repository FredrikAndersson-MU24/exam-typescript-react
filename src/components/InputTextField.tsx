interface InputTextFieldProps {
  type: string;
  placeholder: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputTextField = (props: InputTextFieldProps) => {
  return (
    <>
      <input
        className="input-text"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onchange}
        id="input"
        required
        autoFocus
      />
    </>
  );
};

export default InputTextField;
