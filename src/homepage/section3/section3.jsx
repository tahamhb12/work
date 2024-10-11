import "./section3.css"
import pic1 from "./pics/1.jpeg"
import pic2 from "./pics/2.jpeg"
import pic3 from "./pics/3.png"
import pic4 from "./pics/4.svg"
import pic6 from "./pics/6.jpeg"
import pic7 from "./pics/7.png"
import pic8 from "./pics/8.png"
import pic9 from "./pics/9.png"
import pic10 from "./pics/10.png"
import pic11 from "./pics/11.png"
import { useNavigate } from "react-router-dom"



const Section3 = () => {
    
    const navigate = useNavigate()

    return ( 
        <div className="section3">
            <h2>Why Join Us</h2>
            <p>Joining AMISE means becoming a part of a network that is committed to excellence and growth in the market research landscape.</p>
            <div className="join">
                <div className="first">
                    <div className="img"></div>
                    <div className="infos">
                        <h2>Standards of Excellence</h2>
                        <p>our members adhere to the highest standards of market research. Our code of conduct ensures your work is ethical, transparent, and reliable.</p>
                        
                    </div>
                </div>
                <div className="first">
                    <div className="img"></div>
                    <div className="infos">
                        <h2>Professional Development</h2>
                        <p>We provide continuous learning opportunities and keep you up to date with industry advancements.</p>
                    </div>
                </div>
                <div className="first">
                    <div className="img"></div>
                    <div className="infos">
                        <h2>Networking and Collaboration</h2>
                        <p>Access a network of top researchers, data analysts and decision-makers. Collaborate,  share knowledge and grow alongside peers.</p>
                    </div>
                </div>
            </div>
            <div className="button">
                <button  onClick={()=>navigate("/membership")}>Become a Member</button>
            </div>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={pic1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic6} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic7} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic8} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic9} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic10} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic11} alt="" />
                    </div>
                    {/* double it */}
                    <div className="slide">
                        <img src={pic1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic6} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic7} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic8} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic9} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic10} alt="" />
                    </div>
                    <div className="slide">
                        <img src={pic11} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Section3;