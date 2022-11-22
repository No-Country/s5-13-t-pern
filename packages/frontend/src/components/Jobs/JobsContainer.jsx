import React from 'react'
import { Grid } from '@mui/material'
import jobs from '../../constants/jobs'
import JobCard from './JobCard'

const JobsContainer = jobs.map((job) => {
    return (
        <Grid key={job.id} item>
            <Grid container justifyContent="center" mb={6} mt={1} spacing={2}>
                <JobCard jobs={job} />
            </Grid>
        </Grid>
    )
})

export default JobsContainer
