import { useState } from "react";


function Demo() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <h1>Demo Component</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>Count: {count}</p>
        <button onClick={() => {if(count > 0) setCount(count-1)}}>-</button>
        </div>
    );
}


export default Demo