//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeScreen from '../pages/homepage'

export default function RotasFunction(){

    return(
        <BrowserRouter
        basename='/movies-web'
        >
            <Routes>
            <Route
                path="/"
                element={
                    <HomeScreen/>
                }
                />
            </Routes>
        </BrowserRouter>
    )    

}