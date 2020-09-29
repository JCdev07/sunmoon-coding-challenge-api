const express = require('express');
const router = express.Router();
const { getLogs } = require('../controller/logs');

// Declaring and linking routes to its corresponding controller
router.route('/').get(getLogs);

module.exports = router;
