import { useState } from "react";
import logo from "./logo.png"

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
                    <a href="">Home</a>
                    <a href="">Membership</a>
                    <a href="">About</a>
                    <a href="">Contacts</a>
                </nav>
                <i onClick={handleToggleNav} class="icone fa-solid fa-bars"></i>
            </header>
        </div>
     );
}
 
export default Navbar;
