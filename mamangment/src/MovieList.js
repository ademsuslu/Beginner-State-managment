import React, { useContext, useState } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'
export default function MovieList() {
  const [movies,setMovies] = useContext(MovieContext)
  
 const handleDelete =(id)=>{
  const newList = movies.filter((item) => item.id !== id);
  setMovies(newList)
 }
  return (
    <div style={{maxWidth:"600px",margin:"auto", marginTop:"1.5rem"}}>
        {movies.map((movie)=>(
        <div style={{padding:"1rem",marginTop:"15px", border:"2px solid red",}}>
          <Movie  key={movie.name} handleDelete={handleDelete} name={movie.name} id={movie.id} price={movie.price}/>
        </div>
        ))}
    </div>
  )
}
