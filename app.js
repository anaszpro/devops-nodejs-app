const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to DevOps Node.js REST API!",
    timestamp: new Date()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "Node.js Container API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
