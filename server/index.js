const express = require("express");
const router = require("./routes/task-routes");
const connectDB = require("./database/db"); // function managing database connection

require("dotenv").config(); // for accesing environment variables

const app = express();

// middlewares.
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("This is the home page");
});

// routes
app.use("/api/v1/todos", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(9090, () => {
      console.log("Listening to port 9090");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
