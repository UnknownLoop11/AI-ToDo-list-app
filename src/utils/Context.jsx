import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("all");
  const [showForm, setShowForm] = useState(false);

  // Tasks
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [badgeValues, setBadgeValues] = useState({
    all: 0,
    completed: 0,
    ongoing: 0,
  });

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Sync tasks with localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addNewTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
  };

  // Update task
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on `currentTab`
  useEffect(() => {
    let sortedTasks;
    if (currentTab === "all") {
      sortedTasks = [...tasks].sort((a, b) => a.isCompleted - b.isCompleted);
    } else if (currentTab === "completed") {
      sortedTasks = tasks.filter((task) => task.isCompleted);
    } else {
      sortedTasks = tasks.filter((task) => !task.isCompleted);
    }
    setFilteredTasks(sortedTasks);
  }, [tasks, currentTab]);

  // Update badge values
  useEffect(() => {
    const allTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    const ongoingTasks = allTasks - completedTasks;

    setBadgeValues({
      all: allTasks,
      completed: completedTasks,
      ongoing: ongoingTasks,
    });
  }, [tasks]);

  return (
    <Context.Provider
      value={{
        currentTab,
        setCurrentTab,
        showForm,
        setShowForm,
        tasks,
        addNewTask,
        filteredTasks,
        badgeValues,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
