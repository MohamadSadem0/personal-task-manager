
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, createNewTask } from "../../features/home/taskSlice";
import TaskNote from "./components/TaskNote";
import TaskForm from "./components/TaskForm";
import TaskAPI from "../../app/api/TaskAPI";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TaskAPI.getAllTasks();
        dispatch(fetchTasks(response.data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleCreateTask = async (taskData) => {
    try {
      const response = await TaskAPI.createTask(taskData);
      dispatch(createNewTask(response.data));
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">personal task manager</div>
          <div>Navbar Links Here</div>
        </div>
      </nav>
      <div className="container mx-auto flex justify-center mt-8">
        <div className="grid grid-cols-4 gap-4">
          {tasks &&
            tasks.map((task) => (
              <div
                key={task.id}
                className="col-span-4 sm:col-span-1 bg-gray-200 p-4 rounded-md"
              >
                <h2 className="text-xl font-bold mb-4">{task.status}</h2>
                <TaskNote task={task} />
              </div>
            ))}
        </div>
      </div>
      <TaskForm onCreateTask={handleCreateTask} />
    </div>
  );
};

export default Home;
