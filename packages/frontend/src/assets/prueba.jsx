// eslint-disable-next-line import/no-duplicates
import React from 'react'
import { Container, Grid } from '@mui/material'
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react'

import JobsContainer from '../components/Jobs/JobsContainer'
import Spinner from '../components/Spinner'
import techCategories from '../constants/technologies'
import usersMock from '../constants/users'

const Jobs = () => {
    const [users] = useState(usersMock)
    // eslint-disable-next-line no-empty-pattern
    const [] = useState(techCategories)

    /* TODO: Implementar Spinner */
    const loading = false

    if (loading) return <Spinner />

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 210px - 69px)',
            }}
        >
            <Grid container px={6}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                    <JobsContainer users={users} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Jobs
