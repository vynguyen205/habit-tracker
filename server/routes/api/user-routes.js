const router = require('express').Router();
const User = require('../../models/User');
const chalk = require('chalk');

// Get all users
router.get('/', async (req, res) => {
    try{
        const userData = await User.find({});
        res.status(200).json(userData);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(404).json({ message: err.message });
    }
})

// Get one user
router.get('/:userId', async (req, res) => {
    try{
        const userData = await User.findOne({ _id: req.params.userId });
        res.status(200).json(userData);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Create a user
router.post('/', async (req, res) => {
    try{
        const newUser = req.body;
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Update a user
router.put('/:userId', async (req, res) => {
    try{
        const updatedUser = req.body;
        const userData = await User.findOneAndUpdate
        (
            { _id: req.params.userId }, { $set: updatedUser }, { new: true }
        );
        res.status(200).json(userData);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})


router.delete('/:userId', async (req, res) => {
    try{
        const userData = await User.findOneAndDelete({ _id: req.params.userId });
        res.status(200).json(userData);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})


module.exports = router;
