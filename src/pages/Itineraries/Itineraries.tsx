import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { IoSend } from 'react-icons/io5';

import './Itineraries.css'

function Itineraries() {
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  // const [flights, setFlights] = useState([]);
  // const [hotels, setHotels] = useState([]);

  const handleSend = () => {
    const fetchedFlights = [
      { airline: 'Airline1', flightNo: '123', date: '2024-09-10', time: '10:00 AM' },
      // ... more flights
    ];
    const fetchedHotels = [
      { hotel: 'Hotel1', location: 'City1', reviews: 'Excellent' },
      // ... more hotels
    ];

    // setFlights(fetchedFlights);
    // setHotels(fetchedHotels);
  };

  return (
    <>
    <Header/>
    <div style={{ backgroundImage: 'linear-gradient(to top, #5DC0DF, white)' }}>
      <div className="container">
        <h1>Itineraries</h1>
        <div className='textBtn'>
          <textarea placeholder="Enter your travel ideas as you wish..."></textarea>
          <button className='itiBtn'><IoSend size={25} color='white' className="chatbot-icon" /></button><br /><br />
        </div>

        <div className="input-fields">
          <input type="date" value={startingDate} onChange={(e) => setStartingDate(e.target.value)} />
          <input type="date" value={endingDate} onChange={(e) => setEndingDate(e.target.value)} />
          <input type="text" value={origin} placeholder='Origin' onChange={(e) => setOrigin(e.target.value)} />
          <input type="text" value={destination} placeholder='Destination' onChange={(e) => setDestination(e.target.value)} />
        </div>

        <div className="columns">
          <div className="flights">
            <h3>Flights</h3>
            <ul className='listies'>
              {/* {flights.map((flight) => ( */}
                <li>
                  <img className='itiImg' src='src\Assets\emirates.png' alt='AirlineImg' />
                  <span>Emirates</span>
                  <span>EK-547</span>
                  <span>2024-09-06</span>
                   <span>20:42</span>
                 </li>
                 <li>
                  <img className='itiImg' src='src\Assets\slairline.png' alt='AirlineImg' />
                  <span>Sri Lankan Airlines</span>
                  <span>UL-173</span>
                  <span>2024-09-05</span>
                   <span>21:57</span>
                 </li>
              
                {/* // <li key={flight.flightNo}> */}
                {/* //   <img src={flight.airlineLogo} alt={flight.airline} /> */}
                {/* //   <span>{flight.airline}</span> */}
                {/* //   <span>{flight.flightNo}</span> */}
                {/* //   <span>{flight.date}</span> */}
                {/* //   <span>{flight.time}</span> */}
                {/* // </li> */}
              {/* ))} */}
            </ul>
          </div>
          <div className="hotels">
            <h3>Hotels</h3>
            <ul>
              {/* {hotels.map((hotel) => ( */}
                <li>
                <img className='itiImg' src='src\Assets\jetwing.png' alt='Hotel Img'/>
                <span>Jetwing</span>
                <span>Galle</span>
                <span>Reviews</span>
              </li>
              <li>
                <img className='itiImg' src='src\Assets\hilton.png' alt='Hotel Img'/>
                <span>Hilton</span>
                <span>Colombo</span>
                <span>Reviews</span>
              </li>
                {/* // <li key={hotel.hotel}> */}
                {/* //   <img src={hotel.hotelImage} alt={hotel.hotel} /> */}
                {/* //   <span>{hotel.hotel}</span> */}
                {/* //   <span>{hotel.location}</span> */}
                {/* //   <span>{hotel.reviews}</span> */}
                {/* // </li> */}
              {/* ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Itineraries;












// import React, { useState } from 'react';
// import './Itineraries.css';
// import Header from '../../Components/Header/Header';
// import { IoSend } from 'react-icons/io5';

// const Itineraries = () => {
//   const [itinerary, setItinerary] = useState({
//     startingDate: '',
//     endDate: '',
//     origin: '',
//     destination: '',
//     flights: [],
//     hotels: []
//   });

//   const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
//     setItinerary({ ...itinerary, [e.target.name]: e.target.value });
//   };

//   const handleAddItinerary = () => {
//     // Implement logic to fetch flight and hotel data based on itinerary details
//     // Update the itinerary state with the fetched data
//   };

//   return (
//     <>
//       <Header />
//       <div className="itineraries-container">
//         <div className="itinerary-form">
//           <textarea
//             placeholder="Enter your itinerary description"
//             // value={itinerary.description}
//             onChange={handleInputChange}
//             name="description"
//           />
//           <div className="input-fields">
//             <input
//               type="date"
//               placeholder="Starting Date"
//               value={itinerary.startingDate}
//               onChange={handleInputChange}
//               name="startingDate"
//             />
//             <input
//               type="date"
//               placeholder="End Date"
//               value={itinerary.endDate}
//               onChange={handleInputChange}
//               name="endDate"
//             />
//             <input
//               type="text"
//               placeholder="Origin"
//               value={itinerary.origin}
//               onChange={handleInputChange}
//               name="origin"
//             />
//             <input
//               type="text"
//               placeholder="Destination"
//               value={itinerary.destination}
//               onChange={handleInputChange}
//               name="destination"
//             />
//           </div>
//           <button onClick={handleAddItinerary}>Add Itinerary</button>
//         </div>
//         <div className="itinerary-details">
//           <div className="flights-list">
//             <h3>Flights</h3>
//             {itinerary.flights.map((flight, index) => (
//               <div className="flight-item" key={index}>
//                 {/* <img src={flight.airlineLogo} alt={flight.airlineName} />
//                 <p>{flight.airlineName}</p>
//                 <p>{flight.flightNo}</p>
//                 <p>{flight.dateAndTime}</p> */}
//                 <img src='' alt="AirlineImg" />
//                 <p>Airline name</p>
//                 <p>Flight no</p>
//                 <p>Date and time</p>
//               </div>
//             ))}
//           </div>
//           <div className="hotels-list">
//             <h3>Hotels</h3>
//             {itinerary.hotels.map((hotel, index) => (
//               <div className="hotel-item" key={index}>
//                 {/* <img src={hotel.hotelImage} alt={hotel.hotelName} />
//                 <p>{hotel.hotelName}</p>
//                 <p>{hotel.location}</p>
//                 <p>{hotel.reviews}</p> */}
//                 <img src='' alt='HotelImg' />
//                 <p>Hotel Name</p>
//                 <p>Location</p>
//                 <p>Reviews</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Itineraries;




// import React from 'react'
// import './Itineraries.css'
// import Header from '../../Components/Header/Header'
// import { IoSend } from 'react-icons/io5'

// const Itineraries = () => {
  
//   return (
//     <>
//     <Header/>
//     <div className='itineraries'>
//     <div className="input-container">
//       <textarea
//           // rows="1"
//           placeholder="Type your message..."
//           // value={newMessage}
//           // onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button><IoSend size={25} color='white' className="chatbot-icon" /></button>
//       </div>
//       </div>
//     </>
//   )
// }

// export default Itineraries
