
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TaskAPI from "../../app/api/TaskAPI";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await TaskAPI.getAllTasks();
  return response.data;
});

export const fetchTaskById = createAsyncThunk(
  "tasks/fetchTaskById",
  async (taskId) => {
    const response = await TaskAPI.getTaskById(taskId);
    return response.data;
  }
);

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

const initialState = {
  tasks: [],
  selectedTask: null,
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTaskById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTask = action.payload;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createNewTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createNewTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const updatedTaskIndex = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (updatedTaskIndex !== -1) {
          state.tasks[updatedTaskIndex] = action.payload;
        }
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
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
