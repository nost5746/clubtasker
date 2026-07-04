const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple start route
app.get("/", (req, res) => {
  res.send("ClubTasker backend is running.");
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "ClubTasker Backend"
  });
});

// API routes
app.use("/api/events", eventRoutes);
app.use("/api/tasks", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`ClubTasker backend is running at http://localhost:${PORT}`);
});