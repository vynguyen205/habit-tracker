const router = require('express').Router();

// Get all habits
router.get('/', async (req, res) => {
    try {
        const habitData = await Habit.find({});
        res.status(200).json(habitData);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
// Get one habit
router.get('/HabitId', async (req, res) => {
    try {
        const habitData = await Habit.findOne({ _id: req.params.HabitId });
        res.status(200).json(habitData);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
// Create a habit

// Update a habit

// Delete a habit

module.exports = router;
