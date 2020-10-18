import React from 'react'
import Cards from './Cards'
import './Cardscontainer.css'
function Cardscontainer() {
    return (
        <div className='cardscontainer'>
            <Cards title="live classes" text="Learn from best tutors in India" />
            <Cards title="Earn cash" text="ask doubts answer questions earn money" />
            <Cards title="Exam preprations" text="Jee mains | Jee Advanced | Neet" />
            <Cards title="Sample tests" text="tests with detailed analysis national ranking" />

            </div>
    )
}

export default Cardscontainer
