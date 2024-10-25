import { MdOutlineAdd } from "react-icons/md";

interface CircleButtonProps {
  state: boolean;
  onclick: React.MouseEventHandler;
}

const CircleButton = (props: CircleButtonProps) => {
  return (
    <div className="add-circle-button-wrapper" onClick={props.onclick}>
      {props.state ? (
        <MdOutlineAdd
          className="add-circle-button-45"
          onClick={props.onclick}
        />
      ) : (
        <MdOutlineAdd className="add-circle-button-0" onClick={props.onclick} />
      )}
    </div>
  );
};

export default CircleButton;
