import { useEffect, useState } from "react";
import Button from "./components/Button";
import InputTextField from "./components/InputTextField";
import List from "./components/List";
import Title from "./components/Title";
import ListItem from "./components/ListItem";
import "./style/style.css";

export interface Task {
  id: number;
  name: string;
  value: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [array, setArray] = useState<Array<Task>>([]);
  const [warning, setWarning] = useState<string>("");

  useEffect(() => {
    console.log(array);
  }, [array]);

  useEffect(() => {
    console.log(warning);
  }, [warning]);

  return (
    <main className="wrapper">
      <Title />
      <section className="input-list-wrapper">
        <div className="input-wrapper">
          <InputTextField
            type="text"
            placeholder="Add..."
            onchange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            text="+"
            onclick={() => {
              if (text.trim() !== "") {
                setArray((a) => [
                  ...a,
                  { name: text.trim(), id: array.length + 1, value: "todo" },
                ]);
              } else {
                setWarning("Input valid text!");
                setTimeout(() => {
                  setWarning(""), 100;
                });
              }
            }}
            class="button-add"
          />
        </div>

        <List
          li={array.map((item: any) => {
            return (
              <ListItem
                key={item.id}
                name={item.name}
                id={item.id}
                value={item.value}
              />
            );
          })}
        />
      </section>

      <Button text="CLEAR" onclick={() => setArray([])} class="button-clear" />
    </main>
  );
}

export default App;
