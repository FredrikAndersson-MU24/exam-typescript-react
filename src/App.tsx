import { useEffect, useState } from "react";
import Button from "./components/Button";
import InputTextField from "./components/InputTextField";
import List from "./components/List";
import Title from "./components/Title";
import ListItem from "./components/ListItem";
import "./style/style.css";

interface Task {
  id: number;
  name: string;
  value: string;
  checked: boolean;
}
export interface ListItemProps {
  id: number;
  name: string;
  value: string;
  checked: boolean;
  style: React.CSSProperties | undefined;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  clickLabel: React.MouseEventHandler<HTMLElement>;
  clickDelete: React.MouseEventHandler<HTMLElement> | undefined;
}

function App() {
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<Array<Task>>(
    JSON.parse((localStorage.getItem("tasks") as string) || "[]")
  );
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

  const handleAddTask = () => {
    if (text.trim() !== "") {
      setTasks((a) => [
        ...a,
        { id: id, name: text.trim(), value: "todo", checked: false },
      ]);
      setText("");
    }
  };

  const handleCheckTask = (id: number) => {
    const tempArray = tasks.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTasks(tempArray);
  };

  const handleDeleteTask = (id: number) => {
    const tempArray = tasks.filter((item) => Number(item.id) !== id);
    setTasks(tempArray);
  };

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <main className="wrapper">
      <Title />

      <section className="input-list-wrapper">
        <form className="input-wrapper">
          <InputTextField
            type="search"
            placeholder="Add..."
            onchange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button text="+" onclick={() => handleAddTask()} class="button-add" />
        </form>
        {tasks.length ? (
          <List
            li={tasks.map((item: any) => {
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  checked={item.checked}
                  style={
                    item.checked
                      ? {
                          textDecoration: "line-through",
                          color: "gray",
                        }
                      : undefined
                  }
                  onchange={() => handleCheckTask(item.id)}
                  clickLabel={() => handleCheckTask(item.id)}
                  clickDelete={() => handleDeleteTask(item.id)}
                />
              );
            })}
          />
        ) : (
          <p className="empty-list-message">No tasks</p>
        )}
      </section>

      <Button
        text="EMPTY LIST"
        onclick={() => setTasks([])}
        class="button-clear"
      />
    </main>
  );
}

export default App;
