require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");

const app = express();
app.use(cors({ origin: ["http://localhost:3000","https://mm-ttodo-frontend.vercel.app", "https://devnitish.com"] }));


const todosRoutes = require("./routes/todosRoutes");
const userRoutes = require("./routes/userRoutes");


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/user", userRoutes);
app.use("/", todosRoutes);

module.exports = app;
