import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Jobs from '../pages/Jobs/Jobs'
import JobDetailCardPage from '../pages/JobDetailCardPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Finder from '../pages/Finder'

const Routers = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Jobs />} path="/jobs" />
            <Route element={<JobDetailCardPage />} path="/jobs/:idJob" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Finder />} path="/finder" />{' '}
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default Routers
