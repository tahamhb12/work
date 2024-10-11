import "./section2.css"
import { useNavigate } from "react-router-dom";
const Section2 = () => {

    const navigate = useNavigate()

    return ( 
        <div className="section2">
            <div></div>
            <div className="infos">
                <h2>Welcome to AMISE</h2>
                <p>The Moroccan Association of Market Research Institutes (AMISE) was founded to bring together professionals from market research, social studies, and data analytics under a shared commitment to ethical standards and excellence. AMISE is dedicated to elevating the industry in Morocco through education, self-regulation, and advocacy. We strive to ensure that all research is conducted with integrity, transparency, and respect for privacy, delivering insights that drive meaningful decisions for businesses, governments, and organizations alike.</p>
                <div className="buttons">
                    <button onClick={()=>navigate("/about_us")}>About Us</button>
                    <button onClick={()=>navigate("/membership")}>Join Us</button>
                </div>
            </div>
        </div>
     );
}
 
export default Section2;