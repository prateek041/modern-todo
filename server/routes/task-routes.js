const express = require('express')

const {
	getAllTasks,
	getOneTask,
	deleteTask,
	updateTask
} = require("../controller/tasks")

const router = express.Router() // creating a router.

router.route('/').get(getAllTasks)
router.route('/id').get(getOneTask).put(updateTask).delete(deleteTask)

module.exports = router;