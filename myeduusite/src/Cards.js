import React from 'react'
import './Cards.css'
function Cards({title , text}) {
    return (

        <div className='cardcontainer'>
        <div className='card'>
        <div className='circle'>
        <h2>{title}</h2>
        </div>
        <div className='servicecontainer'>
        <p>{text}</p>
        <button className='btn btn-outline-light'>Explore</button>

        </div>
        </div>
        </div>
    )
}

export default Cards
