import {useState} from 'react';

function UseStateExample() {

    const [count, setCount] = useState(0);

    const handleButtonClick = ()=>{
        console.log("button clicked");
    };

    return (
        <>
            <p>you clicked button this count times</p>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    )
}

export default UseStateExample;