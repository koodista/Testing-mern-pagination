require("dotenv").config();

const express = require("express");
const cors = require('cors')
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");



connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(cors());
app.use("/api/bikejourneys", require("./routes/bikejourneyRoutes"));




// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


