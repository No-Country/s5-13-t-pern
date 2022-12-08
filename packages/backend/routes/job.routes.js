const express = require('express');

// Controllers
const { getAllJobs } = require('../controllers/job.controller');

// Middlewares

const jobsRouter = express.Router();

jobsRouter.get('/', getAllJobs);

module.exports = { jobsRouter };
