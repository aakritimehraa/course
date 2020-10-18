import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner container-fluid'>
        <div className='bannerr'>   <h2>Every student matters</h2>
           <p>Get your doubts clarified and attend live classes in the language of your choice.
           Master concepts and build skills with India’s
best 1:6 live classes</p>
           <form>
           <label>Search any course</label><br></br>
           <input type='text' placeholder='search' className="inputt" />

           </form><button className='btn btn-outline-primary button'>Get app on play store</button>

           </div> 
           <div className="imagee">
           <img className='img-fluid ' src='https://images.squarespace-cdn.com/content/v1/5e5fb9ac716e855455e8cd2d/1597666757612-TH3MS3VBOQ3JLS73W5HL/ke17ZwdGBToddI8pDm48kDlIHBNO6w88RXcvQ8xWbxN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UawN2k6Jj1jez-2lCeDMTN1m0eJ4sDbgXs089JoOS8XlA-5z3kre7kcTBLQSsQRGFA/Online-training-cartoon.jpg' alt='' />
         <div> <p>1000000+<br></br> video lectures</p>
          <p>40000+ <br></br>satisfied students</p>
         </div></div>
        </div>
    )
}

export default Banner
