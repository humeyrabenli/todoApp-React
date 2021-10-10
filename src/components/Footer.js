import React from "react";

function Footer({ todoList, removeCompletedTodos, changeFilter }) {
  const anchors = document.querySelectorAll("a");

  const toggleButtonStyle = (name) => {
    anchors.forEach((anchor) => {
      console.log();
      if (anchor.name === name) {
        anchor.classList.add("selected");
      } else {
        anchor.classList.remove("selected");
      }
    });
  };

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      toggleButtonStyle(e.target.name);
    });
  });

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todoList.filter((todo) => todo.isCompleted !== true).length}
        </strong> items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" name="all" href="#" onClick={changeFilter}>
            All
          </a>
        </li>
        <li>
          <a href="/" name="active" onClick={changeFilter}>
            Active
          </a>
        </li>
        <li>
          <a href="/" name="completed" onClick={changeFilter}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={removeCompletedTodos}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;