import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Sidetitle from '../Components/Sidetitle';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <div className='home'>
        <Sidetitle />
        
    </div>
    <Footer />
    
    </>
  )
}

export default Home