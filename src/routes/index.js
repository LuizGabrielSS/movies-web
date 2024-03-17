//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeScreen from '../pages/homepage'
import NotFoundScreen from '../pages/notfound'
import MovieScreen from '../pages/movie'
import CollectionScreen from '../pages/collections'
import SearchScreen from '../pages/search'

export default function RotasFunction(){

    return(
        <BrowserRouter
        basename='/movies-web'
        >
            <Routes>
            <Route
                path="*"
                element={
                    <NotFoundScreen/>
                }
                />
            <Route
                path="/"
                element={
                    <HomeScreen/>
                }
                />
            <Route
                path="/movie/:id"
                element={
                    <MovieScreen/>
                }
                />
            <Route
                path="/movie/collection/:id"
                element={
                    <CollectionScreen/>
                }
                />
            <Route
                path="/movie/search"
                element={
                    <SearchScreen/>
                }
                />
            </Routes>
        </BrowserRouter>
    )    

}