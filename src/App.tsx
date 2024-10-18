import { useEffect, useState, useRef } from "react";
import Button from "./components/Button";
import InputTextField from "./components/InputTextField";
import List from "./components/List";
import Title from "./components/Title";
import ListItem from "./components/ListItem";
import "./style/style.css";

export interface Task {
  name: string;
  value: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [tasksArray, setTasksArray] = useState<Array<Task>>([]);
  const [warning, setWarning] = useState<string>("");
  const isMounted = useRef(false);

  const handleAddTask = () => {
    if (text.trim() !== "") {
      setTasksArray((a) => [...a, { name: text.trim(), value: "todo" }]);
      setText("");
    } else {
      setWarning("Input valid text!");
      setTimeout(() => {
        setWarning(""), 100;
      });
    }
  };

  useEffect(() => {
    const arrayFromLS = JSON.parse(localStorage.getItem("tasks") as string);
    if (arrayFromLS && Array.isArray(arrayFromLS)) {
      console.log("loading from local storage");
      setTasksArray(arrayFromLS);
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (tasksArray) {
        console.log("saving to local storage");
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
      }
    } else {
      isMounted.current = true;
    }
  }, [tasksArray]);

  useEffect(() => {}, [warning]);

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
          <Button text="+" onclick={() => handleAddTask()} class="button-add" />
        </div>

        <List
          li={tasksArray.map((item: any, index) => {
            return <ListItem key={index} name={item.name} value={item.value} />;
          })}
        />
      </section>

      <Button
        text="CLEAR"
        onclick={() => setTasksArray([])}
        class="button-clear"
      />
    </main>
  );
}

export default App;
