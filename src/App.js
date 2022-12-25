import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import TeamSection from './components/teamSection/TeamSection';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Services/>
    <TeamSection/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
