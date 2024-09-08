import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import Flights from './pages/Dashboard/Dashboard'
import Accommodations from './pages/Accommodations/Accommodations'
// import Destinations from './pages/TripPlanner/TripPlanner'
import Weather from './pages/Weather/Weather'
import Itineraries from './pages/Itineraries/Itineraries'
import Events from './pages/ChatBot/ChatBot'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SigUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import TripPlanner from './pages/TripPlanner/TripPlanner';
import ChatBot from './pages/ChatBot/ChatBot';
// import TripPlanner from './pages/TripPlanner/TripPlanner';


function App() {


  return(
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/accommodations' element={<Accommodations/>}/>
        <Route path='/tripplanner' element={<TripPlanner/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/itineraries' element={<Itineraries/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </Router>
  );


  // const Navigate = useNavigate();
    // const [count, setCount] = useState(0)

    // return (
    //   <BrowserRouter>
    //     <Header />
    //     <Routes>
    //       {/* <Route path="/" element={<Home />} /> */}
    //       <Route path="/flights" element={<Flights />} />
    //       {/* <Route path="/accommodations" element={<Accommodations />} />
    //       <Route path="/destinations" element={<Destinations />} />
    //       <Route path="/weather" element={<Weather />} />
    //       <Route path="/itineraries" element={<Itineraries />} />
    //       <Route path="/events" element={<Events />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    // );


  // return(
  //   <BrowserRouter>
  //       <Routes>
  //               <Route path="/" element={<Home />} />
  //               {/* <Route element={<ProtectedRoutes/>}/> */}
  //                   <Route path="/flights" element={<Flights />} />
  //                   {/* <Route path="/profile/:userId" element={<Profile />} /> */}
  //                   {/* <Route path="/users" element={<Users />} /> */}
  //               {/* <Route/> */}

  //               {/* <Route path="/register" element={<Register />} /> */}
  //               {/* <Route path="/login" element={<Login />} /> */}
  //           {/* </Route> */}
  //           </Routes>
  //       </BrowserRouter>
  // );

  // return(
        
  //   <BrowserRouter>
  //       <Routes>
  //         <Header />
  //         <Route path="/" element={<Home />} />
  //         <Route path="/flights" element={<Flights />} />
  //         <Route path="/accommodations" element={<Accommodations />} />
  //         <Route path="/destinations" element={<Destinations />} />
  //         <Route path="/weather" element={<Weather />} />
  //         <Route path="/itineraries" element={<Itineraries />} />
  //         <Route path="/events" element={<Events />} />
  //       </Routes>
  //       </BrowserRouter>
  // );

  // return (



  //    <div>
  //      <Header/>
  //     <Home/>
  //      <Flights/>
  //      <Accommodations/>
  //      <Destinations/>
  //      <Weather/>
  //      <Itineraries/>
  //      <Events/>
  //    </div>
  //  );
}

export default App
