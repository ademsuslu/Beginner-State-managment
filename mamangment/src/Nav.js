import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

export default function Nav() {
  const [movies,setMovies] = useContext(MovieContext)
  return (
    <div style={{backgroundColor:"crimson",padding:"10px"}}>
        <ul style={{display: "flex", listStyle:"none",color:"#fff"}}>
            <li style={{margin:"15px",}}>Adem Süslü</li>
            <li style={{marginLeft:"auto",marginRight:"15px", marginTop:"15px"}}>List Of Movies: {movies.length}</li>
        </ul>
    </div>
  )
}
