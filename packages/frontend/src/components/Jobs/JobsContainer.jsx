import * as React from 'react'
import Grid from '@mui/material/Grid'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { jobsTypes } from '../../context/actions/jobsActions'
import { jobsInitialState, jobsReducer } from '../../context/reducers/jobsReducer'
import Spinner from '../Spinner'
import axios from "axios"

const JobsContainer = () => {
    const [state, dispatch] = useReducer(jobsReducer, jobsInitialState);

    useEffect(() => {
        dispatch({ type: jobsTypes.LOADING })
        //fetch(import.meta.env.VITE_ENDPOINT_URL + '/data') para servidor local
        // fetch(import.meta.env.VITE_ENDPOINT_URL + '/api/v1/jobs', {
        //     method:"GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //       },
        // })
        axios.get(
            `https://jobscrappernocountry-main-production.up.railway.app/api/v1/jobs`
        )
            .then((res) => {
                if (res.status !== 200) return;
                const data = res.data.data;
                console.log(res.data.data.jobs)
                dispatch({ type: jobsTypes.GET_ALL_JOBS, payload: data.jobs })
            })


    }, []);

    if (state.isLoading) return (<Spinner></Spinner>)

    return (
        <Container>
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
            // key={job.id}
            >
                {state.jobs?.map((job) => (
                    <Grid item xs={1}>
                        <Link to={`/jobs/${job.id}`} style={{ color: 'transparent', textDecoration: 'inherit' }}>
                            <JobCard jobs={job} />
                        </Link>
                    </Grid>
                    // {/* <Grid item xs={1}>
                    //     <JobCard jobs={job} />
                    // </Grid>
                    // <Grid item xs={1}>
                    //     <JobCard jobs={job} />
                    // </Grid> */}
                ))}
            </Grid>
        </Container>
    )
}
export default JobsContainer
