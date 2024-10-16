import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/Navbar';
import GoBook from '../components/GoBook';
import BookingForm from '../components/cards';
import FeatureHighlights from '../components/featureHighlight';
import CityShowcase from '../components/cityShowcase';
import TourPackages from '../components/tourPackages';
import Footer from '../components/footer';

function App() {

  return (
    <>
    <NavbarComponent/>
    <GoBook/>
    <BookingForm/>
    <FeatureHighlights/>
    <CityShowcase/>
    <TourPackages/>
    <Footer/>
    </>
  )
}

export default App
