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
      jobsWithLinks = []
      for (let i = 0; i < links.length ; i++) {
        jobsWithLinks.push({...jobs[i],link: links[i]})
      }
      const jobPromises = jobsWithLinks.map(async job =>{
          const { name, company, location, contract, description, link } = job;
          await Job.create({
            name,
            company,
            location,
            contract,
            description,
            link,
          });
        }
      )
      await Promise.all(jobPromises)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllJobs,
  saveJobs,
};
