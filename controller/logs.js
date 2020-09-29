exports.getLogs = (req, res, next) => {
   res.status('200').json({
      success: true,
      message: 'Get all logs route',
   });
};
