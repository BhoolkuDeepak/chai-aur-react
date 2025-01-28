import { useState } from "react";

function Counter(){
    const [counter ,setcounter] = useState(0)

    return (
        <>
        <h3>UseState Counter Component -Local -Click add</h3>
        <p>{counter}</p>
        <button onClick={()=>setcounter(counter+1)}>Add Count</button> <br />
        <button onClick={()=>setcounter(counter-1)}>Subtract Count</button>
        </>
    )
}

export default Counter