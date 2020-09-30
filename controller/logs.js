const Logs = require('../models/Logs');

// @desc       get all logs
// @route      GET api/logs
exports.getLogs = async (req, res, next) => {
   const allLogs = await Logs.find();
   res.status('200').json({
      success: true,
      data: allLogs,
   });
};

// @desc       create a log
// @route      POST api/logs
exports.createLog = async (req, res) => {
   try {
      const newLog = await Logs.create(req.body);

      res.status('200').json({
         success: true,
         message: 'created',
         newLog: newLog,
      });
   } catch (err) {
      res.status('400').json({
         success: false,
         message: err.message,
      });
   }
};

// @desc       delete a logs
// @route      PUT api/logs/:id
exports.updateLog = async (req, res, next) => {
   try {
      const updatedLog = await Logs.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      });
      res.status('200').json({
         success: true,
         message: 'Log successfully updated',
         updatedLog: updatedLog,
      });
   } catch (err) {
      res.status('400').json({
         success: false,
         message: err.message,
      });
   }
};

// @desc       delete a logs
// @route      DELETE api/logs/:id
exports.deleteLog = async (req, res, next) => {
   try {
      await Logs.findByIdAndDelete(req.params.id);
      res.status('200').json({
         success: true,
         message: 'Log successfully deleted',
      });
   } catch (err) {
      res.status('400').json({
         success: false,
         message: err.message,
      });
   }
};
