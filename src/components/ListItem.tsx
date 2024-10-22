import Button from "./Button";

interface ListItemProps {
  id: number;
  name: string;
  checked: boolean;
  style: React.CSSProperties | undefined;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  clickLabel: React.MouseEventHandler<HTMLElement>;
  clickDelete: React.MouseEventHandler<HTMLElement>;
}
const ListItem = (props: ListItemProps) => {
  return (
    <>
      <li key={props.id}>
        <input
          id={props.id.toString()}
          type="checkbox"
          onChange={props.onchange}
          checked={props.checked}
          className="checkbox"
        />
        <label
          style={props.style}
          htmlFor={props.id.toString()}
          className="li-todo"
          onClick={() => props.clickLabel}
        >
          {props.name}
        </label>
        <Button
          text="&#10799;"
          onclick={props.clickDelete}
          class="button-del"
        />
      </li>
    </>
  );
};
export default ListItem;
