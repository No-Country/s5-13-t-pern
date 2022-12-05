import React from 'react'
import CompanyCard from '../components/CompanyCard/CompanyCard'
import JobDetailCard from '../components/Jobs/JobDetailCard/JobDetailCard'
import { Stack } from '@mui/material'

const JobDetailCardPage = () => {
    return (
        <Stack direction="row" flexWrap="nowrap" justifyContent="center">
            <JobDetailCard />
            <CompanyCard />
        </Stack>
    )
}

export default JobDetailCardPage
