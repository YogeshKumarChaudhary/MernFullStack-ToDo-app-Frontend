import axios from "axios";
const baseUrl = "https://yogesh-mern-todo-backend.onrender.com";

const getAllTodo = async (setList) => {
  try {
    const res = await axios.get(baseUrl);
    // console.log(res.data);
    setList(res.data);
  } catch (err) {
    console.log(err);
  }
};
const addTodo = async (text,setText, list, setList) => {
  try {
    const res = await axios.post(baseUrl, { text });
    setList([...list, res.data]);
    setText("")
  } catch (err) {
    console.log(err);
  }
};
const updateTodo = async (toDoId, text, setList, setText, setIsUpdate) => {
  try {
    await axios.put(`${baseUrl}/${toDoId}`, { text });
    setText("");
    setIsUpdate(false);
    getAllTodo(setList);
  } catch (err) {
    console.log(err);
  }
};
const deleteTodo = async (setList, toDoId) => {
  try {
    await axios.delete(`${baseUrl}/${toDoId}`);
    getAllTodo(setList)
  } catch (err) {
    console.log(err);
  }
};
export { getAllTodo, addTodo, updateTodo, deleteTodo };
