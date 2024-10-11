import { useState } from "react";
import logo from "./logo.svg" 
import logo1 from "./logo1.svg" 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const navigate = useNavigate()
    const location = useLocation()


    return ( 
        <div className="header">
            <header>
                <img onClick={()=>navigate("/")} className="logo" src={logo} alt="" />
                <img onClick={()=>navigate("/")} className="logo1" src={logo1} alt="" />
                <nav className={isNavOpen ? "open" : ""}>
                    <Link style={location.pathname=="/" ? {fontWeight:"bold",fontSize:"13px"}:{}} onClick={handleToggleNav} to={"/"}>Home</Link>
                    <Link style={location.pathname=="/membership" ? {fontWeight:"bold",fontSize:"13px"}:{}} onClick={handleToggleNav} to={"/membership"}>Membership</Link>
                    <Link style={location.pathname=="/about_us" ? {fontWeight:"bold",fontSize:"13px"}:{}} onClick={handleToggleNav} to={"/about_us"}>About</Link>
                    <Link style={location.pathname=="/contact_us" ? {fontWeight:"bold",fontSize:"13px"}:{}} onClick={handleToggleNav} to={"/contact_us"}>Contacts</Link>
                </nav>
                <i onClick={handleToggleNav} class="icone fa-solid fa-bars"></i>
                {isNavOpen && <i onClick={handleToggleNav} class="close fa-solid fa-x"></i>}
            </header>
        </div>
     );
}
 
export default Navbar;
