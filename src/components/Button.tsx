interface ButtonProps {
  text: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
  class: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.onclick} className={props.class}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
