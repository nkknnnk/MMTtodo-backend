require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const todosRoutes = require("./routes/todosRoutes");
const userRoutes = require("./routes/userRoutes");
const mediaDownloader = require("./routes/mediaDownloader");

const app = express();
app.use(cors({ origin: ["http://localhost:3000","https://mmttodo-frontend-iepa.vercel.app", "https://devnitish.com", "https://bulk-tools.vercel.app"] }));




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.get("/", (req, res)=>{
res.send("<h1>Hello World!</h1>")
})
app.use("/user", userRoutes);
app.use("/todo", todosRoutes);
app.use("/mediaapi", mediaDownloader);

module.exports = app;
