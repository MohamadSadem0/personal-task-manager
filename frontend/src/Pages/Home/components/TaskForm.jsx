
import React, { useState } from "react";

const TaskForm = ({ onCreateTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleCreateTask = () => {
    if (!newTaskTitle.trim()) return; 
    onCreateTask({ title: newTaskTitle, description: newTaskDescription });
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="New Task Title"
        className="w-full border p-2 rounded-md"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <textarea
        placeholder="New Task Description"
        className="w-full border p-2 mt-2 rounded-md"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      ></textarea>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleCreateTask}
      >
        Create Task
      </button>
    </div>
  );
};

export default TaskForm;
