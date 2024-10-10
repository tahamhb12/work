import { useState } from "react";
import logo from "./logo.svg" 
import logo1 from "./logo1.svg" 
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return ( 
        <div className="header">
            <header>
                <img className="logo" src={logo} alt="" />
                <img className="logo1" src={logo1} alt="" />
                <nav className={isNavOpen ? "open" : ""}>
                    <Link onClick={handleToggleNav} to={"/"}>Home</Link>
                    <Link onClick={handleToggleNav} to={"/membership"}>Membership</Link>
                    <Link onClick={handleToggleNav} to={"/about_us"}>About</Link>
                    <Link to={"/contact_us"}>Contacts</Link>
                </nav>
                <i onClick={handleToggleNav} class="icone fa-solid fa-bars"></i>
                {isNavOpen && <i onClick={handleToggleNav} class="close fa-solid fa-x"></i>}
            </header>
        </div>
     );
}
 
export default Navbar;
