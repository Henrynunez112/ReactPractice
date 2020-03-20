import React, {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContaniner() {

    const [display, setDisplay] = useState(true);


    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContaniner
