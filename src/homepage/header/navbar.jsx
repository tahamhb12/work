import { useState } from "react";
import logo from "./logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return ( 
        <div className="header">
            <header>
                <img src={logo} alt="" />
                <nav className={isNavOpen ? "open" : ""}>
                    <Link onClick={handleToggleNav} to={"/"}>Home</Link>
                    <a href="">Membership</a>
                    <Link onClick={handleToggleNav} to={"/about_us"}>About</Link>
                    <a href="">Contacts</a>
                </nav>
                <i onClick={handleToggleNav} class="icone fa-solid fa-bars"></i>
                {isNavOpen && <i onClick={handleToggleNav} class="close fa-solid fa-x"></i>}
            </header>
        </div>
     );
}
 
export default Navbar;
