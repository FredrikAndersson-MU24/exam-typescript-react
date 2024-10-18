interface InputTextFieldProps {
  type: string;
  placeholder: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputTextField = (props: InputTextFieldProps) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onchange}
        id="input"
      />
    </>
  );
};

export default InputTextField;
