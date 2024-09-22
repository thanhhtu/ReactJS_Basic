import React, { useState } from 'react';
import "./ToggleStyle.css"

function Toggle(){
    const [on, setOn] = useState(false)
    //on is state, function setOn is function used to update state on
    
    console.log(on) 

    const handleToggle = () => {
        //C1
        //on ? setOn(false) : setOn(true)

        //C2
        setOn((on) => !on)
    }
    
    return (
        <div>
            <div className={`toggle ${on ? 'active' : ''}`}>
                <div className={`spinner ${on ? 'active' : ''}`} onClick={handleToggle}></div>
            </div>
            <div className='toggle-control'>
                <div className='toggle-on' onClick={() => {setOn(true)}}>On</div>
                <div className='toggle-off' onClick={() => {setOn(false)}}>Off</div>
            </div>
            {on ? "on" : "off"}
        </div>
    )
}

export default Toggle;