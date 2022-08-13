const router = require('express').Router();
const { getAllTech } = require('../../controllers/Habit-controller');

router.route('/').get(getAllTech);

module.exports = router;
