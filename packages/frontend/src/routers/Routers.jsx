import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Jobs from '../pages/Jobs/Jobs'
import JobCardPage from '../pages/JobCardPage'
import JobDetailCardPage from '../pages/JobDetailCardPage'

const Routers = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Jobs />} path="/jobs" />
            <Route element={<JobCardPage />} path="/jobcardpage" />
            <Route element={<JobDetailCardPage />} path="/jobdetailcardpage" />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default Routers
