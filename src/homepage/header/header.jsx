import { useState } from "react";
import "./header.css";
import amra from "./partners/amra.svg"
import esomar from "./partners/esomar.svg"
import gam from "./partners/gam.svg"
import { useNavigate  } from "react-router-dom";
const Header = () => {

const navigate = useNavigate()

    return ( 
        <div className="header">
            <div className="section1">
                <h2>Leading the way in ethical research and insight-driven decision-making</h2>
                <p>Empowering the future of decision-making through market research and data analysis. dedicated to ensuring the ethical handling of data and fostering a dynamic, trusted community of researchers committed to shaping a smarter, more informed Morocco</p>
                <div className="buttons">
                    <button onClick={()=>navigate("/membership")}>Become a member</button>
                    <button onClick={()=>navigate("/contact_us")}>Contact Us</button>
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