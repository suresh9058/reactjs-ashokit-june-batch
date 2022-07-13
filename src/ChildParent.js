import { useState } from "react"


function Increment(props) {
    return (
        <button onClick={props.onClickFunction}>Increment +1</button>
    )
}

function Decrement(props) {
    return (
        <button onClick={props.onClickFunction}>Decrement -1</button>
    )
}

function DisplayCount(props) {
    return (
        <p>{props.count}</p>
    )
}

function ChildParent() {

    const [counter, setCounter] = useState(0);
    const incrementCount = ()=>setCounter(counter+1);
    const decrementCount = ()=>setCounter(counter-1);

    return (
        <>
            <Increment onClickFunction={incrementCount}/>
            <DisplayCount count={counter}/>
            <Decrement onClickFunction={decrementCount}/>
        </>
    )
}

export default ChildParent;