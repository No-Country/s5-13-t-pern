import * as React from 'react'
import Grid from '@mui/material/Grid'
import JobCard from './JobCard'
import jobs from '../../constants/jobs'
import { Link } from 'react-router-dom'

const JobsContainer = () => (
    <div>
        {jobs.map((job) => (
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                key={job.id}
            >
                <Grid item xs={4}>
                    <Link to="/jobcardpage">
                        <JobCard jobs={job} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <JobCard jobs={job} />
                </Grid>
                <Grid item xs={4}>
                    <JobCard jobs={job} />
                </Grid>
            </Grid>
        ))}
    </div>
)

export default JobsContainer
