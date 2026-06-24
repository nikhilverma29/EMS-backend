const express = require("express");

const app = express();

const employeeRoutes = require("./routes/employeeRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});