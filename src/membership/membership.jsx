import { useState } from "react";
import "./membership.css"
import object from "./Object.png"
import {AnimatePresence, motion} from "framer-motion"
const Membership = () => {

    const [open,setopen] = useState(false)
    return ( 
        <div className="membership">
            <div className="section1">
                <img src={object} alt="" />
                <div className="infos">
                    <p><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 24.43H19L14.55 27.39C13.89 27.83 13 27.36 13 26.56V24.43C10 24.43 8 22.43 8 19.43V13.4299C8 10.4299 10 8.42993 13 8.42993H23C26 8.42993 28 10.4299 28 13.4299V19.43C28 22.43 26 24.43 23 24.43Z" stroke="#248DA7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.9998 17.3599V17.1499C17.9998 16.4699 18.4198 16.1099 18.8398 15.8199C19.2498 15.5399 19.6598 15.1799 19.6598 14.5199C19.6598 13.5999 18.9198 12.8599 17.9998 12.8599C17.0798 12.8599 16.3398 13.5999 16.3398 14.5199" stroke="#248DA7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.9955 19.75H18.0045" stroke="#248DA7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    FAQ Question
                    </p>
                    <h2>Frequently Asked Questions</h2>
                    <div style={open ? {borderLeft:"4px solid blue",height:"fit-content"}:{}} className="questions">
                        <p>Interested in Joining the Network?
                        <svg className="open" onClick={()=>setopen(!open)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16H24" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 24V8" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </p>
                        <AnimatePresence>
                        {open && <motion.p
                        initial={{height:50,opacity:0}}
                        animate={{height:"fit-content",opacity:1}}
                        exit={{height:50,opacity:0}}
                        className="answer">Are ccc a part of Morocco's market research community and looking to connect with a network dedicated to advancing the industry? AMISE invites you to join a group of forward-thinking professionals committed to maintaining the highest ethical standards and driving the future of research.
                        </motion.p>}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="form">
                    <h2>Want to <span>join</span></h2>
                    <p>To become a member of AMISE, simply fill out the form below, and we’ll get in touch with the next steps.</p>
                    <form action="">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email" />
                        <input type="number" minLength={1} maxLength={10} placeholder="Phone number" />
                        <input type="text" placeholder="Occupation" />
                        <input type="button" value={"SEND"} />
                    </form>
                </div>
                <div className="shape">
                </div>
            </div>
        </div>
     );
}
 
export default Membership;