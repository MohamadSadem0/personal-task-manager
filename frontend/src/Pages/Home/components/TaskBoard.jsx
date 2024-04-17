import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { fetchTasks } from "../actions/taskActions";

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-semibold mb-4">To Do</h2>
        {tasks
          .filter((task) => task.status === "todo")
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-semibold mb-4">In Progress</h2>
        {tasks
          .filter((task) => task.status === "in-progress")
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-semibold mb-4">Done</h2>
        {tasks
          .filter((task) => task.status === "done")
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
