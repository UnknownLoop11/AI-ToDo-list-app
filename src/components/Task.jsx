import React, { useState, Suspense } from "react";
import moment from "moment";
import geminiIcon from "../assets/gemini.webp";

// Icons
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

import { generateAIResponse } from "../utils/service";

const Task = ({
  title,
  description,
  dueDate,
  isCompleted,
  setIsCompleted,
  onDelete,
}) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const handleCompletionToggle = () => {
    const updatedStatus = !isCompleted;
    setIsCompleted(updatedStatus);
  };

  const handleClick = async () => {
    setShowSuggestion(!showSuggestion);

    if (!suggestion) {
      await generateAIResponse({
        title,
        description,
      })
        .then((res) => setSuggestion(res))
        .catch((e) => console.log(e));
    }
  };

  return (
    <div
      className={`group/main p-3 space-y-2 shadow-md rounded-md hover:bg-slate-100 ${
        isCompleted ? "bg-slate-100" : ""
      }`}
    >
      {/* Task Details */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1
            className={`text-lg font-semibold ${
              isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {title}
          </h1>
          <p className="text-xs text-gray-500 font-light">{description}</p>
        </div>

        <div className="relative flex gap-x-4 items-center">
          {/* AI Suggestion Button */}
          <button
            className="relative group/item hover:scale-105 active:scale-95 transition-all hover:bg-slate-200 rounded-3xl p-1.5"
            onClick={handleClick}
            aria-label="Get AI Suggestion"
          >
            <img src={geminiIcon} alt="AI Suggestion" className="w-6 h-6" />
            <span
              style={{ fontSize: "0.7rem" }}
              className="group/edit hidden absolute top-2 text-xs text-nowrap right-10 bg-slate-100 p-0.5 rounded-md group-hover/item:flex"
            >
              Generate AI Suggestion
            </span>
          </button>

          {showSuggestion && (
            <div className="space-y-1.5 w-[300px] max-w-[400px] min-w-[200px] border-2 absolute top-12 right-0 z-10 p-3 bg-slate-100 text-sm shadow-md rounded-md">
              <button
                className="p-1 border block ml-auto"
                onClick={() => setShowSuggestion(!showSuggestion)}
              >
                <IoClose />
              </button>

              {suggestion ? (
                suggestion
              ) : (
                <p className="mx-auto text-xs">Loading...</p>
              )}
            </div>
          )}

          {/* Completion Toggle */}
          <div
            role="button"
            onClick={handleCompletionToggle}
            aria-label={isCompleted ? "Mark as Ongoing" : "Mark as Completed"}
          >
            {isCompleted ? (
              <FaCheckCircle className="p-0.5" size={28} color="green" />
            ) : (
              <FaRegCheckCircle className="p-0.5" size={28} color="gray" />
            )}
          </div>
        </div>
      </div>

      {/* Task Footer */}
      <div className="flex justify-between items-center border-t pt-2">
        {/* Due Date */}
        {dueDate && (
          <aside className="space-x-2">
            <span className="text-xs font-semibold">
              {moment(dueDate).format("MMM DD")}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              • due {moment().to(moment(dueDate))}
            </span>
          </aside>
        )}

        {/* Delete Button */}
        <MdDeleteOutline
          size={28}
          color="red"
          role="button"
          className="p-0.5 hover:bg-red-200 rounded-md ml-auto"
          onClick={onDelete}
          aria-label="Delete Task"
        />
      </div>
    </div>
  );
};

export default Task;
