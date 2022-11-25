const express = require('express')
const router = require('./routes/task-routes')

const app = express()

app.get("/", (req, res)=>{
	res.status(200).send("This is the home page")
})

app.use("/api/v1/tasks", router)

app.listen(9090, ()=>{
	console.log("Listening to port 9090")
})