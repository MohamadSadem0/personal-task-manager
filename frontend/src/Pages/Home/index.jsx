
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/tasks/taskSlice";
import TaskNote from "./TaskNote";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">Jira-like Dashboard</div>
          <div>Navbar Links Here</div>
        </div>
      </nav>
      <div className="container mx-auto flex justify-center mt-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 sm:col-span-1 bg-gray-200 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">To Do</h2>
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <TaskNote key={task.id} task={task} />
              ))}
          </div>
          <div className="col-span-4 sm:col-span-1 bg-gray-200 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">In Progress</h2>
            {tasks
              .filter((task) => task.status === "inprogress")
              .map((task) => (
                <TaskNote key={task.id} task={task} />
              ))}
          </div>
          <div className="col-span-4 sm:col-span-1 bg-gray-200 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Review</h2>
            {tasks
              .filter((task) => task.status === "review")
              .map((task) => (
                <TaskNote key={task.id} task={task} />
              ))}
          </div>
          <div className="col-span-4 sm:col-span-1 bg-gray-200 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Done</h2>
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <TaskNote key={task.id} task={task} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
