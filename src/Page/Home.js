import React from 'react'
import Header from '../Component/Header';
import About from '../Component/About';
import Usage from '../Component/Usage';
import Services from '../Component/Services';
import Footer from '../Component/Footer';

export default function Home() {
  return (
    <div>
    <Header/>
   <About/>
   <Usage/>
   <Services/>
   <Footer/>
    </div>
  )
}
