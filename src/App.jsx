import { useState } from "react"
import "./App.css"
import Header from "./Elements/Header"
import Home from "./Pages/Home"
import Form from "./Pages/Form"
import Landing from "./Pages/Landing"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <>
            <Header />
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/addMovie" element={<Form/>} />
            </Routes>
        </>
    )
}

export default App
