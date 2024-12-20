import React, { useState, useContext } from "react";
import { Context } from "../utils/Context";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const { setShowForm, addNewTask } = useContext(Context);

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add task to the list
    addNewTask({ ...task, id: uuidv4(), isCompleted: false });

    // Close the form
    setShowForm(false);
  };

  return (
    <section id="add-task">
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 lg:w-1/2 mx-auto p-6 bg-white rounded-3xl shadow-lg space-y-2.5"
        >
          <h1 className="text-2xl font-bold">Add New Task</h1>
          <div className="space-y-1">
            <label htmlFor="title" className="text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="description" className="text-sm font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter task description"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="space-y-1">
            <label htmlFor="due-date" className="text-sm font-semibold">
              Due Date
            </label>
            <input
              type="date"
              id="due-date"
              name="dueDate"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={task.dueDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-x-3 justify-end">
            <button
              title="Cancel"
              className={
                "px-4 py-2 bg-white border-2 border-red-300 text-red-500 rounded-md"
              }
              onClick={() => setShowForm(false)}
              style={{ color: "red" }}
            >
              Cancel
            </button>

            <Button title="Add Task" className={"px-4 py-2"} type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
