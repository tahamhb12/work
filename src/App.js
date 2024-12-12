import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage/Homepage";
import AboutUs from "./about_us/about_us";
import Footer from "./homepage/footer/footer";
import Navbar from "./homepage/header/navbar";
import Membership from "./membership/membership";
import Contact from "./contact/contact";

function App() {


  
  return (
    <div className="App">
{/*       <Navbar/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/about_us" exact element={<AboutUs/>}/>
        <Route path="/membership" exact element={<Membership/>}/>
        <Route path="/contact_us" exact element={<Contact/>}/>
      </Routes>
      <Footer/> */}
    </div>
  );
}

export default App;
