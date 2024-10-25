import { useEffect, useState } from "react";
import Button from "./components/Button";
import List from "./components/List";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import "./style/style.css";
import TextArea from "./components/TextArea";
import CircleButton from "./components/CircleButton";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";

interface Task {
  id: number;
  title: string;
  text: string;
  checked: boolean;
}

function App() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<Array<Task>>(
    JSON.parse((localStorage.getItem("tasks") as string) || "[]")
  );
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const [showHide, setShowHide] = useState<boolean>(false);

  const handleAddTask = () => {
    if (text.trim() !== "") {
      setTasks((a) => [
        ...a,
        { id: id, title: title.trim(), text: text.trim(), checked: false },
      ]);
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

  // Save to local storage
  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="list-wrapper">
          <List
            li={tasks.map((item: any) => {
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  text={item.text}
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
                  clickDelete={() => handleDeleteTask(item.id)}
                />
              );
            })}
          />
        </div>

        <form
          className="input-card"
          style={showHide ? { display: "flex" } : { display: "none" }}
          onSubmit={handleAddTask}
        >
          <TextInput type="text" onchange={(e) => setTitle(e.target.value)} />
          <TextArea onchange={(e) => setText(e.target.value)} />
          <div className="button-wrapper">
            <Button text="+ Add" class="button-add" type="submit" />
            <Button
              text="Empty list"
              onclick={(e) => {
                e.preventDefault(), setTasks([]);
              }}
              class="button-empty"
            />
          </div>
        </form>
        <CircleButton onclick={() => setShowHide(!showHide)} state={showHide} />
        <Footer items={Number(tasks.length)} />
      </div>
    </>
  );
}

export default App;
