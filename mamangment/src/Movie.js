import React from 'react'

export default function Movie({name,price,id,handleDelete}) {
  return (
    <div key={id} style={{display: 'flex', marginLeft: "auto" , justifyContent: 'space-around'}}>
        <h3>{name}</h3>
        <p>${price}</p>
        <button style={{padding:"15px 25px"}}onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
