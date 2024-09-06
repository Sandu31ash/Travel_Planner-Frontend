import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Flights from './Components/Flights/Flights'
import Accommodations from './Components/Accommodations/Accommodations'
import Destinations from './Components/Destinations/Destinations'
import Weather from './Components/Weather/Weather'
import Itineraries from './Components/Itineraries/Itineraries'
import Events from './Components/Events/Events'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        {/* ... (rest of the routes) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
