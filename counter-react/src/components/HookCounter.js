//intro to hooks
import React, {useState} from 'react'

//hook is a special function that lets you hook into React function

function HookCounter(){


    const [count, setCount] = useState(0)

        return (
            <div>
                <button onClick={() => setCount(count + 1)}>Count {count}</button>
            </div>
        )
}

export default HookCounter
