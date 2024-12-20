import React, { useContext, Suspense } from "react";
import { Context } from "./utils/Context";
import { Header, Tab, Task, AddTask, Loading } from "./components";

import { tabs } from "./utils/constants";

const App = () => {
  const {
    currentTab,
    setCurrentTab,
    showForm,
    filteredTasks,
    updateTask,
    deleteTask,
    badgeValues,
  } = useContext(Context);

  return (
    <section
      id="app"
      className="w-full h-screen md:w-4/6 lg:w-2/6 mx-auto p-4 border-2 rounded-3xl"
    >
      <Header />

      {/* Tabs Section */}
      <section id="tabs">
        <div className=" w-full flex justify-evenly">
          {tabs.map((tab, idx) => (
            <React.Fragment key={tab.value}>
              <Tab
                label={tab.label}
                active={currentTab === tab.value}
                onClick={() => setCurrentTab(tab.value)}
                badgeValue={badgeValues[tab.value]}
              />
              {idx !== tabs.length - 1 && (
                <span className="border-r border-gray-300 mx-2"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Tasks Section */}
      <section id="tasks">
        <Suspense fallback={<Loading />}>
          <div className="space-y-4 mt-4">
            {filteredTasks.map((task, idx) => (
              <Task
                key={idx}
                {...task}
                setIsCompleted={(value) =>
                  updateTask({ ...task, isCompleted: value })
                }
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </div>
        </Suspense>
        {filteredTasks.length === 0 && (
          <div className="w-full text-sm font-semibold h-[500px] flex flex-col items-center justify-center">
            No Tasks..
          </div>
        )}
      </section>

      {/* Add Task Form */}
      {showForm && <AddTask />}
    </section>
  );
};

export default App;
