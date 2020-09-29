const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
   timestamp: {
      type: Date,
      default: Date.now(),
      required: true,
   },
   logType: {
      type: String,
      enum: ['start', 'stop'],
      required: true,
   },
});

module.exports = mongoose.model('Logs', LogSchema);
