import { Routes, Route} from "react-router-dom";
import Footer from "./compoent/Footer";
import Home from "./compoent/Home";
import Navbar from "./compoent/Navbar";
import HomeScreens from "./sceens/HomeScreens";
import SignUp from "./compoent/SignUp";
import BlogPage from "./compoent/BlogPage";
import Login from "./compoent/Login";
import Service from "./compoent/Service";
import Contact from "./compoent/Contact";
import Offers from "./compoent/Offers";
import BestTrips from "./compoent/BestTrips";
import About from "./compoent/About";


function App() {
  return (
    <div  > 
          <Navbar/>
         <Routes>
         <Route path='/signUp' element={<SignUp/>}/>
         <Route path='/' element={<HomeScreens/>}/>
         <Route path='/blog' element={<BlogPage/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/offers' element={<Offers/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/services' element={<Service/>}/>
         <Route path='/bestrips' element={<BestTrips/>}/>
         <Route path='/aboutus' element={<About/>}/>
  </Routes>
    </div>
  );
}

export default App;
