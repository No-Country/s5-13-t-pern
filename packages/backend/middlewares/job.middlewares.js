// Models
const { Job } = require('../models/jobModels');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const jobExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findOne({
    where: { id },
  });

  // If job doesn't exist, send error message
  if (!job) {
    return next(new AppError('Job not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.job = job;
  next();
});

module.exports = {
  jobExists,
};
