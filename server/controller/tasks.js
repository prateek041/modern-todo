const getAllTasks = (req, res)=>{
	res.status(200).send("here are all of your tasks")
}

const getOneTask = (req, res)=>{
	res.status(200).send("Here is the single task")
}

const deleteTask = (req, res)=>{
	res.status(200).send("This is the deleted task")
}

const updateTask = (req, res)=>{
	res.status(200).send("This is the deleted task")
}

module.exports = {
	getAllTasks,
	getOneTask,
	deleteTask,
	updateTask
}