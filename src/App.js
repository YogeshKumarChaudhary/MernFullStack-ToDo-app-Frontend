import { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./ListItem";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandlApi";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllTodo(setList);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <div className="container">
      <div className="listContainer">
        <h1>ToDo List</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add To List"
        />
        <button
          onClick={
            isUpdate
              ? () => updateTodo(toDoId, text, setList, setText, setIsUpdate)
              : () => addTodo(text, setText, list, setList)
          }
        >
          {isUpdate ? "Update" : "Add"}
        </button>
        {list.map((item) => (
          <ListItem
            key={item._id}
            text={item.text}
            update={() => updateMode(item._id, item.text)}
            Delete ={()=>deleteTodo(setList,item._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
