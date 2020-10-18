import React from 'react'
import './Explore.css'
function Explore() {
    return (
        <div className='explore'>
            <h2 className='two'>Exams that you ace with coursify</h2>
            <div className='exploree'>
            <div className='one btn btn-primary'>Board exams</div>
            <div className='one btn btn-primary'>Jee mains & advanced</div>
            <div className='one btn btn-primary'> Neet</div>
            </div>

            <h2 className='two'>Explore our subjects</h2>
            <div className='exploree'>
            <div className='one btn btn-info'>Maths</div>
            <div className='one btn btn-info'>Physics</div>
            <div className='one btn btn-info'> Chemistry</div>
            <div className='one btn btn-info'> Biology</div>

            </div>

            <div className='exploree'>
            <div className='one btn btn-info'>Science</div>
            <div className='one btn btn-info'>commerce</div>
            <div className='one btn btn-info'> Coding</div>
            <div className='one btn btn-info'> Languages</div>
            </div>

<h2  className='two'>Free solution</h2>
<div className='exploree'>
<div className='one btn btn-outline-info'>Ncert solutions</div>
<div className='one btn btn-outline-info'>Ncert exampler</div>
<div className='one btn btn-outline-info'> Reference books</div>
<div className='one btn btn-outline-info'> exam prep material</div>
</div>
            
        </div>
    )
}

export default Explore
