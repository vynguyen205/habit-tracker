const router = require('express').Router();
const Todo = require('../../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
})

// Get one todo
router.get('/:todoId', async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.todoId });
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
})


// Create a todo
router.post('/', async (req, res) => {
    try {
        const newTodo = req.body;
        const todo = await Todo.create(newTodo);
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
})

// Update a todo
router.put('/:todoId', async (req, res) => {
    try {
        const updatedTodo = req.body;
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.todoId }, { $set: updatedTodo }, { new: true }
        );
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
})

// Delete a todo
router.delete('/:todoId', async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.todoId });
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
