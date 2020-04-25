//intro to hooks
import React, {useState, useEffect} from 'react'

//hook is a special function that lets you hook into React function

function HookCounter(){


    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })


        return (
            <div>
                <p>You clicked {count} times</p> 
                <button onClick={() => setCount(count + 1)}>Count {count}</button>
            </div>
        )
}

export default HookCounter
