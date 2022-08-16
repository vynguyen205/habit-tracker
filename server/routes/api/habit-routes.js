const router = require('express').Router();
const { Habit, User, Tag } = require('../../models');
const chalk = require('chalk');

// Get all habits
router.get('/', async (req, res) => {
    try {
        const habitData = await Habit.find({});
        res.status(200).json(habitData);

        if (!habitData) {
            res.status(404).json({ message: 'No habits found' });
        }

    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})
// Get one habit
router.get('/habitId', async (req, res) => {
    try {
        const habitData = await Habit.findOne({ _id: req.params.habitId });
        res.status(200).json(habitData);

        if (!habitData) {
            res.status(404).json({ message: 'No habit found' });
        }

    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})
// Create a habit, add tags to habit and update user with new habit
router.post('/', async (req, res) => {
    try {
        const newHabit = req.body;
        const habitData = await Habit.create(newHabit);
        // go to the user and add the new habit to the habits array
        const userData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { habits: habitData._id } },
            { new: true }
        );

        const tagData = await Tag.findOneAndUpdate(
            { _id: req.body.tagId },
            { $push: { habits: habitData._id } },
            { new: true }
        );
        

        if(res.status(200)) {
            console.log(chalk.green(json(habitData && userData && tagData)));
            res.json(habitData)
            
        }
        
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})
// Update a habit and add tags to habit and update user with new habit
router.put('/:habitId', async (req, res) => {
    try {
        const updatedHabit = req.body;
        const habitData = await Habit.findOneAndUpdate
        (
            { _id: req.params.habitId }, { $set: updatedHabit }, { new: true }
        );
        const userData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { habits: habitData._id } },
            { new: true }
        );
        const tagData = await Tag.findOneAndUpdate(
            { _id: req.body.tagId },
            { $push: { habits: habitData._id } },
            { new: true }
        );

        res.status(200).json(habitData);

        if (!habitData) {
            res.status(404).json({ message: 'No habit found' });
        }

    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Delete a habit
router.delete('/:habitId', async (req, res) => {
    try {
        const habitData = await Habit.findOneAndDelete({ _id: req.params.habitId });

        if (!habitData) {
            res.status(404).json({ message: 'No habit found' });
        } else {
            res.status(200).json({ message: 'Habit deleted' });
        }

    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
