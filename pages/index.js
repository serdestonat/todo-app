import { useState } from "react";
import Image from "next/image";

const manageTasks = () => {
  const [userInput, setUserInput] = useState("");
  const [todoListMap, setTodoList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();

    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput("");

    if (userInput != "") {
      setTodoList([{ value: userInput, completed: false }, ...todoListMap]);
    }
  };

  const handleDelete = (index) => {
    const updatedArr = todoListMap.filter(
      (todoItem) => todoListMap.indexOf(todoItem) != index
    );

    setTodoList(updatedArr);
  };

  const completeTask = (index) => {
    const updatedArr = todoListMap.map((todoItem, i) => {
      return {
        value: todoItem.value,
        completed:
          i == index
            ? todoItem.completed == true
              ? false
              : true
            : todoItem.completed,
      };
    });

    setTodoList(updatedArr);
  };

  return (
    <div className="tasks">
      <form className="form">
        <input
          className="input"
          type="text"
          value={userInput}
          placeholder=" Add New Task"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          <Image
            className="addimage"
            src="/addnote.png"
            width={30}
            height={30}
          ></Image>
        </button>
      </form>
      <ul className="idk">
        {todoListMap.length >= 1
          ? todoListMap.map((todo, index) => {
              return (
                <li key={index} className={todo.completed ? "completed" : ""}>
                  {todo.value}
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      handleDelete(index);
                    }}
                  >
                    <img src="/deletenote.png"></img>
                  </button>

                  <button
                    className="checkIcon"
                    onClick={(event) => {
                      event.preventDefault();
                      completeTask(index);
                    }}
                  >
                    <img src="/checkIcon.png"></img>
                  </button>
                </li>
              );
            })
          : "ToDo List Is Empty"}
      </ul>
    </div>
  );
};

export default manageTasks;
