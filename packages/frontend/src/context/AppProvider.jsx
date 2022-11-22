import React, { useEffect, useMemo, useReducer } from 'react'

import appContext from './AppContext'
import authReducer from './reducers/authReducer'

const init = () => JSON.parse(window.localStorage.getItem('job'))

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    const [job, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        if (!job) return
        localStorage.setItem('job', JSON.stringify(job))
    }, [job])

    const value = useMemo(
        () => ({
            job,
            dispatch,
        }),
        [job]
    )

    return <appContext.Provider value={value}>{children}</appContext.Provider>
}

export default AppProvider
