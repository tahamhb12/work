import "./section7.css"
import { useNavigate } from "react-router-dom";
const Section7 = () => {
    const navigate = useNavigate()

    return ( 
        <div className="section7">
            <h2>Join Our Network</h2>
            <p>Are you a researcher, analyst, or data enthusiast looking to make a difference? Join AMISE and be part of a community dedicated to setting new standards for market research in Morocco. Together, we can drive the industry forward, shape public policy, and contribute to societal progress through the power of ethical and insightful research.</p>
            <button onClick={()=>navigate("/membership")}>Join Us</button>
        </div>
     );
}
 
export default Section7;