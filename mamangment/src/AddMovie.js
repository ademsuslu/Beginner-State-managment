 import React,{useContext, useState} from 'react'
import { MovieContext } from './MovieContext'
 
 export default function AddMovie() {
     const [movies,setMovies] = useContext(MovieContext)
    
     const handleAdd =(e)=>{e.preventDefault()
    setMovies(prevMovie => [...prevMovie,{name:values.name,price:values.price}])
    setValues({ name:"",
    price:""})
    }
     const [values,setValues] = useState({
         name:"",
         price:""
     })
      const handleChange=(prop) => (e)=>{setValues({...values, [prop]: e.target.value})}
   return (
     <div>
         <form onSubmit={handleAdd} style={{margin:"1rem"}}>
              <input style={{margin:"15px", padding:"5px"}} value={values.name} onChange={handleChange("name")} type="text" placeholder='name' />
              <input style={{margin:"15px", padding:"5px"}} value={values.price} onChange={handleChange("price")} type="text" placeholder='price' />
              <button onClick={handleAdd}>Add</button>
         </form>
     </div>
   )
 }
 