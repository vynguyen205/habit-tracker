const router = require('express').Router();
const userRoutes = require('./user-routes');
const habitRoutes = require('./habit-routes');
const todoRoutes = require('./todo-routes');
const tagRoutes = require('./tag-routes');

router.use('/users', userRoutes);
router.use('/habits', habitRoutes);
router.use('/todos', todoRoutes);
router.use('/tags', tagRoutes);


module.exports = router;
