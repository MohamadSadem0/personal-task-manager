require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(cors());

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const taskRoutes = require("./routes/task.route");
app.use("/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
