import "./section6.css"
import { useNavigate } from "react-router-dom";
const Section6 = () => {
    const navigate = useNavigate()

    return ( 
        <div className="section6">
            <div className="infos">
                <h2>Promoting integrity and ethics</h2>
                <p>We are here to promote the integrity and ethical use of data in market research, ensuring transparency, objectivity, and confidentiality in every step of the research process.</p>
                <button onClick={()=>navigate("/contact_us")}>Contact Us</button>
            </div>
            <div className="shape"></div>
        </div>
     );
}
 
export default Section6;