import express from 'express';
import { getTasks,getTaskById, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import Task from '../models/Task.js';

const router = express.Router();

router.get('/', getTasks);
router.get('/:id',getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


// Create Task
// router.post("/", async (req, res) => {
//     const task = await Task.create(req.body);
//     res.json(task);
// });

// // Get All Tasks
// router.get("/", async (req, res) => {
//     const tasks = await Task.find();
//     res.json(tasks);
// });

// //find by id
// router.get("/:id", async (req, res) => {
//     const tasks = await Task.findById(req.params.id);
//     res.json(tasks);
// });

// // Update Task
// router.put("/:id", async (req, res) => {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(task);
// });

// // Delete Task
// router.delete("/:id", async (req, res) => {
//     await Task.findByIdAndDelete(req.params.id);
//     res.json({ message: "Task deleted" });
// });




export default router;
