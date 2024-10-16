import "./contact.css"
import contact from "./contact.svg"
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate()

    return ( 
        <div className="membership">
            <div style={{marginTop:0}} className="section2">
                <div className="form">
                    <h2>Get in<span> Touch</span></h2>
                    <p>To become a member of AMISE, simply fill out the form below, and we’ll get in touch with the next steps.</p>
                    <form action="">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email" />
                        <input type="number" minLength={1} maxLength={10} placeholder="Phone number" />
                        <input type="button" value={"SEND"} />
                    </form>
                    <div style={{marginTop:"60px"}} className="contact">
                        <img src={contact} alt="" />
                    </div>
                </div>
                <div className="shape">
                    <div style={{width:"100%"}}><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
                </div>
            </div>
            <div className="section7 section77">
                <h2>Join Our Network</h2>
                <p>Are you a researcher, analyst, or data enthusiast looking to make a difference? Join AMISE and be part of a community dedicated to setting new standards for market research in Morocco. Together, we can drive the industry forward, shape public policy, and contribute to societal progress through the power of ethical and insightful research.</p>
                <button onClick={()=>navigate("/membership")}>Join Us</button>
            </div>
        </div>
     );
}
 
export default Contact;