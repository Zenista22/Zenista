import React, {useState, useEffect, useRef} from 'react'
import "./Accordion.css"
import Chevron from "../images/chevron.svg"

export default function Comments(props) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">
            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{props.ques}</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    {props.ans}
                </p>
            </div>
            
        </div>
    )
}