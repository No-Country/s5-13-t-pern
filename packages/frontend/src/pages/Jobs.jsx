// eslint-disable-next-line import/no-duplicates
import React from 'react'
import { Container, Grid } from '@mui/material'
import JobsContainer from '../components/Jobs/JobsContainer'

const Jobs = (jobs) => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 210px - 69px)',
            }}
        >
            <Grid item xs={12}>
                <JobsContainer jobs={jobs} />
            </Grid>
        </Container>
    )
}

export default Jobs
