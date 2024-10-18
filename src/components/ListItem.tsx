import { Task } from "../App";
import { useEffect, useState } from "react";
const ListItem = (props: Task) => {
  const [status, setStatus] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("li-todo");
  useEffect(() => {
    {
      status ? setClassName("li-done") : setClassName("li-todo");
    }
  }, [status]);
  return (
    <>
      <li
        value={className}
        onClick={() => {
          setStatus(!status);
        }}
        className={className}
      >
        {props.name}
      </li>
    </>
  );
};
export default ListItem;
