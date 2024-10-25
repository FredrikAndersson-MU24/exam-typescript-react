interface ButtonProps {
  text: string;
  onclick?: React.MouseEventHandler<HTMLElement> | undefined;
  class: string;
  type?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.onclick} className={props.class} type={props.type}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
