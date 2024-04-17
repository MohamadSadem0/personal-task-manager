
import axios from "axios";

const TaskAPI = {
  getAllTasks: async () => {
    return axios.get("http://localhost:3001/tasks");
  },

  createTask: async (taskData) => {
    return axios.post("http://localhost:3001/api/tasks", taskData);
  },

  updateTask: async (taskId, taskData) => {
    return axios.post(
      `http://localhost:3001/api/tasks/update/${taskId}`,
      taskData
    );
  },

  deleteTask: async (taskId) => {
    return axios.post(`http://localhost:3001/api/tasks/delete/${taskId}`);
  },
};

export default TaskAPI;
