import {useState} from 'react';

function UseStateExample() {

    const [count, setCount] = useState(0);

    const handleButtonClick = ()=>{
        console.log("button clicked");
        // count = count +1;
        // setCount(count+1);//
        // setCount(count+1);//
        setCount((prevCount)=>prevCount+1);//1
        setCount((prevCount)=>prevCount+1);//1+1
    };

    return (
        <>
            <p>you clicked button this {count} times</p>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    )
}

export default UseStateExample;