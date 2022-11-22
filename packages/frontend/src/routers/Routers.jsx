import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Home from '../pages/Home'
import Header from '../components/Header/Header'
import Jobs from '../pages/Jobs'
import JobCardPage from '../pages/JobCardPage'

const Routers = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Jobs />} path="jobs" />
            <Route element={<JobCardPage />} path="jobcardpage" />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default Routers
