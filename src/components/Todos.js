import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";

function Todos() {
  const [todo, setTodo] = useState({
    newTodo: "",
    isCompleted: false,
    id: undefined,
  });

  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addNewTodo = () => {
    setTodoList([
      ...todoList,
      { newTodo: todo.newTodo, isCompleted: false, id: +new Date() },
    ]);
  };

  const filterList = (filter) => {
    switch (filter) {
      case "all":
        return todoList;
      case "completed":
        return todoList.filter((todo) => todo.isCompleted);
      case "active":
        return todoList.filter((todo) => !todo.isCompleted);
      default:
        return todoList;
    }
  };

  const changeFilter = (e) => {
    setFilter(e.target.name);
  };

  useEffect(() => {
    setTodo({ newTodo: "", isCompleted: false });
  }, [todoList]);

  const toggleCheckStatus = (e) => {
    const toggleTodoId = e.target.dataset.key;
    const newTodoList = todoList.map((todo) => {
      if (String(todo.id) === toggleTodoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const removeTodo = (e) => {
    const removeTodoId = e.target.dataset.key;
    const newTodoList = todoList.filter((todo) => {
      return String(todo.id) !== removeTodoId;
    });
    setTodoList(newTodoList);
  };
  const removeCompletedTodos = () => {
    const newTodoList = todoList.filter((todo) => !todo.isCompleted);
    setTodoList(newTodoList);
  };

  return (
    <section className="todoapp">
      <Header todo={todo} setTodo={setTodo} addNewTodo={addNewTodo} />
      <TodoList
        todoList={filterList(filter)}
        removeTodo={removeTodo}
        toggleCheckStatus={toggleCheckStatus}
      />
      <Footer
        todoList={todoList}
        removeCompletedTodos={removeCompletedTodos}
        changeFilter={changeFilter}
      />
    </section>
  );
}

export default Todos;
