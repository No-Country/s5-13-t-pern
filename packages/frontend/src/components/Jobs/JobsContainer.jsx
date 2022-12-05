import * as React from 'react'
import Grid from '@mui/material/Grid'
import JobCard from './JobCard'
import jobs from '../../constants/jobs'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'

const JobsContainer = () => (
    <Container>
        {jobs.map((job) => (
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mb={1}
                mt={1}
                spacing={4}
                direction={{
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                }}
                /* rowSpacing={2}
                columnSpacing={3}
                justifyContent="center" */
                key={job.id}
            >
                <Grid item xs={1}>
                    <Link to="/jobcardpage">
                        <JobCard jobs={job} />
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <JobCard jobs={job} />
                </Grid>
                <Grid item xs={1}>
                    <JobCard jobs={job} />
                </Grid>
            </Grid>
        ))}
    </Container>
)

export default JobsContainer
