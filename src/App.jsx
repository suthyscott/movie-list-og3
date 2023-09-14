import { useState } from "react"
import "./App.css"
import Header from "./Elements/Header"
import Home from "./Pages/Home"
import Form from "./Pages/Form"
import Landing from "./Pages/Landing"
import { Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

function App() {
    const userId = useSelector(state => state.userId)

    return (
        <>
            <Header />
            <Routes>
              <Route index element={userId ? <Navigate to='/home' /> : <Landing />} />
              <Route path="/home" element={userId ? <Home/> : <Navigate to='/' />} />
              <Route path="/addMovie" element={userId ? <Form/> : <Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default App
