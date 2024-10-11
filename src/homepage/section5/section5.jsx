import "./section5.css";
import { useNavigate } from "react-router-dom";
const Section5 = () => {
    const navigate = useNavigate()


    return ( 
        <div className="section5">
            <div className="infos">
                <h2>Elevating the research industry</h2>
                <p>To advance the market research profession in Morocco by fostering a culture of innovation, continuous education, and adherence to international best practices.</p>
                <button onClick={()=>navigate("/contact_us")}>Contact Us</button>
            </div>
            <div className="shape"></div>
        </div>
     );
}
 
export default Section5;