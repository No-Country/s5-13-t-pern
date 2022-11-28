import { Container } from '@mui/system'
import React from 'react'
import JobCard from '../components/Jobs/JobCard'
import Box1 from '../components/Boxes/Box1'

const JobCardPage = () => {
    return (
        <Container>
            <Box1 />
            <JobCard />
        </Container>
    )
}
export default JobCardPage
