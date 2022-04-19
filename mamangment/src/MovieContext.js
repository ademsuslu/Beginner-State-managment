import React, { createContext, useState } from 'react'
import MovieList from './MovieList'
import Nav from './Nav'


export const MovieContext = createContext()

export const MovieProvider =(props)=>{ 
    const [movies,setMovies]= useState([
    {name:"Harry Potter",price:"20",id:23124},
    {name:"game of Thrones",price:"10",id:23125},
    {name:"Inception",price:"25",id:23126},
])
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}