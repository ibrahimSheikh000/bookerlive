import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/Navbar';
import GoBook from '../components/GoBook';
import BookingForm from '../components/cards';
import FeatureHighlights from '../components/featureHighlight';

function App() {

  return (
    <>
    <NavbarComponent/>
    <GoBook/>
    <BookingForm/>
    <FeatureHighlights/>
    </>
  )
}

export default App
