

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TaskAPI from "../../app/api/TaskAPI";
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await TaskAPI.getAllTasks();
  return response.data;
});


export const createNewTask = createAsyncThunk(
  "tasks/createNewTask",
  async (taskData) => {
    const response = await TaskAPI.createTask(taskData);
    return response.data;
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ taskId, taskData }) => {
    const response = await TaskAPI.updateTask(taskId, taskData);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    const response = await TaskAPI.deleteTask(taskId);
    return response.data;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;

