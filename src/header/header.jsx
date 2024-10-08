import { useState } from "react";
import "./header.css";
import logo from "./logo.png"
import amra from "./partners/amra.png"
import esomar from "./partners/esomar.png"
import gam from "./partners/gam.png"
const Header = () => {

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
            <div className="section1">
                <h2>Leading the way in ethical research and insight-driven decision-making</h2>
                <p>Empowering the future of decision-making through market research and data analysis. dedicated to ensuring the ethical handling of data and fostering a dynamic, trusted community of researchers committed to shaping a smarter, more informed Morocco</p>
                <div className="buttons">
                    <button>Become a member</button>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="partners">
                <div className="first_half">
                    <h3>Our partners</h3>
                    <div className="line"></div>
                    <p>Lorem ipsum role of market research and data analysis in shaping. </p>
                </div>
                <div className="line2"></div>
                <div className="sec_half">
                    <div>
                        <img src={gam} alt="" />
                    </div>
                    <div><img src={esomar} alt="" /></div>
                    <div><img src={amra} alt="" /></div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;