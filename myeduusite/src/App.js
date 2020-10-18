import React from 'react'
import './App.css'
import Banner from './Banner'
import Cardboxx from './Cardboxx'
import Cards from './Cards'
import Cardscontainer from './Cardscontainer'
import Explore from './Explore'
import Footer from './Footer'
import Header from './Header'
function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
<Cardscontainer />  
<Cardboxx />
<Explore />
<Footer />
  </div>
  )
}

export default App
