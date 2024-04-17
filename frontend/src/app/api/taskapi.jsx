import axios from "axios";

const TaskAPI = {
  getAllTasks: async () => {
    return axios.get("http://localhost:3001/tasks");
  },
  createTask: async (taskData) => {
    return axios.post("http://localhost:3001/api/tasks", taskData);
  },
};

export default TaskAPI;
