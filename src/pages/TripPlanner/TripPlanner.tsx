import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { IoMdAddCircle, IoMdCloseCircle } from "react-icons/io";
import Header from '../../Components/Header/Header';

function TripPlanner() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [destinations, setDestinations] = useState([
    { name: 'Tokyo', image: 'tokyo.jpg', location: 'Japan' },
    { name: 'Paris', image: 'paris.jpg', location: 'France' },
    // ... more destinations
  ]);
  const [flights, setFlights] = useState([
    { airline: 'Airline 1', flightNumber: '123', date: '2024-09-10', time: '10:00 AM' },
    { airline: 'Airline 2', flightNumber: '456', date: '2024-09-11', time: '2:00 PM' },
    // ... more flights
  ]);
  const [hotels, setHotels] = useState([
    { name: 'Hotel A', location: 'Tokyo', image: 'hotelA.jpg' },
    { name: 'Hotel B', location: 'Paris', image: 'hotelB.jpg' },
    // ... more hotels
  ]);

  const handleSend = () => {
    // Implement logic to fetch destinations, flights, and hotels based on user inputs
    // Replace with your actual API calls
  };

  return (
    <>
    <Header/>
    <div style={{ backgroundImage: 'linear-gradient(to top, #5DC0DF, whitesmoke)' }}>
      <div className="container">
        <h1>Trip Planner</h1>

        <div className="input-fields">
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Origin" />
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" />
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        </div>

        <div className="columns">
          <div className="destinations">
            <h2>Destinations</h2>
            <ul>
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <img src={destination.image} alt={destination.name} />
                  <span>{destination.name}</span>
                  <span>{destination.location}</span>
                  <button className='plannerBtn'><IoMdAddCircle size={25} color='#61C1E0' className="planner-icon" /></button>
                  <button className='plannerBtn'><IoMdCloseCircle size={25} color='#61C1E0' className="planner-icon" /></button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flights">
            <h2>Flights</h2>
            <ul>
              {flights.map((flight) => (
                <li key={flight.flightNumber}>
                  <img src='' alt={flight.airline} />
                  <span>{flight.airline}</span>
                  <span>{flight.flightNumber}</span>
                  <span>{flight.date}</span>
                  <span>{flight.time}</span>
                  <button className='plannerBtn'><IoMdAddCircle size={25} color='#61C1E0' className="planner-icon" /></button>
                  <button className='plannerBtn'><IoMdCloseCircle size={25} color='#61C1E0' className="planner-icon" /></button>
                </li>
              ))}
            </ul>
          </div>
          <div className="hotels">
            <h2>Hotels</h2>
            <ul>
              {hotels.map((hotel) => (
                <li key={hotel.name}>
                  <img src={hotel.image} alt={hotel.name} />
                  <span>{hotel.name}</span>
                  <span>{hotel.location}</span>
                  <button className='plannerBtn'><IoMdAddCircle size={25} color='#61C1E0' className="planner-icon" /></button>
                  <button className='plannerBtn'><IoMdCloseCircle size={25} color='#61C1E0' className="planner-icon" /></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TripPlanner;