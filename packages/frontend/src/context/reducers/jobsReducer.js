import { jobsTypes } from '../actions/jobsActions';

export const jobsInitialState = {
    jobs: [],
    job: {},
    isLoading: false
};

export const jobsReducer = (state=jobsInitialState, action) => {
    switch(action.type){
        case jobsTypes.GET_ALL_JOBS:
            return {
                ...state,
                jobs: action.payload,
                isLoading: false
            }
        case jobsTypes.GET_JOB:
            return {
                ...state,
                job: action.payload,
                isLoading: false
            }
        case jobsTypes.LOADING:
            return {
                ...state,
                isLoading: true
            }
    }
};