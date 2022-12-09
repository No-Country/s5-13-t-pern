const express = require('express');

// Controllers
// Controllers
const {
    getAllJobs,
    getJobById,
    uploadJobs,
} = require('../controllers/job.controller');

const { jobExists } = require('../middlewares/job.middlewares');

const jobsRouter = express.Router();

jobsRouter.get('/', getAllJobs);
jobsRouter.get('/:id', jobExists, getJobById);
jobsRouter.post('/', uploadJobs);

module.exports = { jobsRouter };
