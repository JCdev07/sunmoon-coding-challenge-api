// @desc       get all logs
// @route      GET api/logs
exports.getLogs = (req, res, next) => {
   res.status('200').json({
      success: true,
      message: 'Get all logs route',
   });
};

// @desc       create a log
// @route      POST api/logs
exports.createLog = (req, res, next) => {
   res.status('200').json({
      success: true,
      message: 'Create a log route',
   });
};

// @desc       delete a logs
// @route      DELETE api/logs/:id
exports.deleteLog = (req, res, next) => {
   res.status('200').json({
      success: true,
      message: `Delete log ${req.params.id}`,
   });
};
