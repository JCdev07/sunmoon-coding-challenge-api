const express = require('express');
const router = express.Router();
const { getLogs, createLog, deleteLog } = require('../controller/logs');

// Declaring and linking routes to its corresponding controller
router.route('/').get(getLogs).post(createLog);

router.route('/:id').delete(deleteLog);

module.exports = router;
