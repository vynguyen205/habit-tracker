const router = require('express').Router();
const UserRoutes = require('./userRoutes');
const HabitRoutes = require('./habitRoutes.js');
const TodoRoutes = require('./todoRoutes.js');
const TagRoutes = require('./tagRoutes.js');

router.use('/users', UserRoutes);
router.use('/habits', HabitRoutes);
router.use('/todos', TodoRoutes);
router.use('/tags', TagRoutes);


module.exports = router;
