import React from 'react'
import axios from 'axios'
import CompanyCard from '../components/CompanyCard/CompanyCard'
import JobDetailCard from '../components/Jobs/JobDetailCard/JobDetailCard'
import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { jobsTypes } from '../context/actions/jobsActions'
import { useReducer } from 'react'
import { jobsInitialState, jobsReducer } from '../context/reducers/jobsReducer'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'

const JobDetailCardPage = () => {
    const { idJob } = useParams()
    const [state, dispatch] = useReducer(jobsReducer, jobsInitialState)

    useEffect( () => {
        dispatch({ type: jobsTypes.LOADING })
        //fetch(import.meta.env.VITE_ENDPOINT_URL + '/jobGet/' + idJob)
        axios.get(
            `https://jobscrappernocountry-main-production.up.railway.app/api/v1/jobs/${idJob}`
        )
            .then((res) => {
                if (res.status !== 200) return;
                const data = res.data.data;
                console.log(data)
                dispatch({ type: jobsTypes.GET_JOB, payload: data.job })
            })
    }, []);

    if (state.isLoading) return (<Spinner></Spinner>)

    return (
        <Stack direction="row" flexWrap="nowrap" justifyContent="center">
            <JobDetailCard job={state.job} />
            <CompanyCard />
        </Stack>
    )
}

export default JobDetailCardPage
