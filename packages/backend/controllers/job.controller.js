//Models
const { Job } = require('../models/jobModels');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.findAll();

  res.status(200).json({
    status: 'succes',
    data: { jobs },
  });
});

const saveJobs = async (links, jobs) => {
  try {
    jobsWithLinks = [];
    for (let i = 0; i < links.length; i++) {
      jobsWithLinks.push({ ...jobs[i], link: links[i] });
    }
    const jobPromises = jobsWithLinks.map(async (job) => {
      const { name, company, location, description, link, source } = job;
      await Job.create({
        name,
        company,
        location,
        description,
        link,
        source,
      });
    });
    await Promise.all(jobPromises);
  } catch (error) {
    console.log(error);
  }
};

const cleanDatabase = async () => {
  oldJobs = await Job.findAll();
  const promises = oldJobs.map(async (job) => {
    await job.destroy();
  });
  await Promise.all(promises);
};

const getJobById = (req, res) => {
  const { job } = req;

  res.status(200).json({
    status: 'success',
    data: { job },
  });
};

const uploadJobs = catchAsync(async (req, res, next) => {
  const { jobs } = req.body;

  const jobPromises = jobs.map(async (job) => {
    const { name, company, location, description, link, source } = job;
    await Job.create({
      name,
      company,
      location,
      description,
      link,
      source,
    });
  });
  await Promise.all(jobPromises);

  res.status(200).json({
    status: 'success',
  });
});

module.exports = {
  getAllJobs,
  saveJobs,
  getJobById,
  cleanDatabase,
  uploadJobs,
};