import "./contact.css"
import contact from "./contact.svg"
const Contact = () => {

    return ( 
        <div className="membership">
            <div style={{marginTop:0}} className="section2">
                <div className="form">
                    <h2>Want to <span>join</span></h2>
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
                <div className="shape"></div>
            </div>
            <div className="section7 section77">
                <h2>Join Our Network</h2>
                <p>Are you a researcher, analyst, or data enthusiast looking to make a difference? Join AMISE and be part of a community dedicated to setting new standards for market research in Morocco. Together, we can drive the industry forward, shape public policy, and contribute to societal progress through the power of ethical and insightful research.</p>
                <button>Join Us</button>
            </div>
        </div>
     );
}
 
export default Contact;