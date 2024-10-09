import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage/Homepage";
import AboutUs from "./about_us/about_us";
import Footer from "./homepage/footer/footer";
import Navbar from "./homepage/header/navbar";

function App() {


  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/about_us" exact element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
