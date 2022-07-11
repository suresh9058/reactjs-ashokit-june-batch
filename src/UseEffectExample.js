import {useState,useEffect} from 'react';

function UseEffectExample() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const handleButtonClick = ()=>{
        setCount(count+1);
    }  
    const handleButtonClick1 = ()=>{
        setCount(count1+1);
    }  
    //  this callback function is triggered for every render and when state updates also
    // useEffect(()=>{
    //     console.log("Mounting");
    // });

    // this call back function triggers only when component is mounted
    useEffect(()=>{
        console.log("Mounting");// API 

        return ()=> {
            console.log("unmounting");
        }
    },[]);

    //  if both the states have some logic to execute then we can give them in the dep array
    // with comma separate
    // useEffect(()=>{
    //     console.log("count state varaiable useEffect");
    // },[count,count1]);

    // useEffect(()=>{
    //     console.log("count state varaiable useEffect");
    // },[count]);

    // useEffect(()=>{
    //     console.log("count1 state varaiable useEffect");
    // },[count1]);

    // useEffect(()=>{
    //     const socket = socketIOClient("endpoint");
    //     socket.on("from api", data=>{
    //         // consume the data
    //     });

    //     return ()=> socket.disconnect();

    // },[])

    return (
        <>
            <h1>this is useEffect Component</h1>
            <p>you clicked button this {count} times</p>
            <button onClick={handleButtonClick}>Click Me</button>
            <button onClick={handleButtonClick1}>Click Me</button>
        </>
    )
}

export default UseEffectExample;