import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(['Eat Breakfast','Go to the gym','Study for the exam','Do the laundry','Clean the house','Go to the grocery store','Cook dinner','Watch a movie','Read a book','Go to bed']);
    const [newTask, setNewTask] = useState([""]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
        
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }

    const inputBox = document.querySelector("input");
    inputBox.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".add-button").click();
      }
    });
  }

  

    const handleDeleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => 
            i !== index
        );
        setTasks(updatedTask);
    }

    const handleEditTask = (index) => {
        const updatedTask = tasks.map((task, i) => {
            if (index === i) {
                return task;
            }
            return task;
        });
        setTasks(updatedTask);
    }

    const handleUpdateTask = (index) => {
        const updatedTask = tasks.map((task, i) => {
            if (index === i) {
                return task;
            }
            return task;
        });
        setTasks(updatedTask);
    }

    const moveUp = (index) => {
        if (index === 0) {
            return alert("Can't move up");
        }
        const updatedTask = tasks.slice();
        const temp = updatedTask[index];
        updatedTask[index] = updatedTask[index - 1];
        updatedTask[index - 1] = temp;
        setTasks(updatedTask);
    }

    const moveDown = (index) => {
        if (index === tasks.length - 1) {
            return alert("Can't move down");
        }
        const updatedTask = tasks.slice();
        const temp = updatedTask[index];
        updatedTask[index] = updatedTask[index + 1];
        updatedTask[index + 1] = temp;
        setTasks(updatedTask);
    }
    return (
      <div className="to-do-list">
        <h1 className="header sticky">To-Do List</h1>
        <div className="header2">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveUp(index)}>
                Move Up
              </button>
              <button className="move-button" onClick={() => moveDown(index)}>
                Move Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
}

export default ToDoList;