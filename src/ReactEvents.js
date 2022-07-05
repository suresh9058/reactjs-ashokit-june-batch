function ReactEvents() {
    const handleClick = (event,a,b)=>{
        console.log("button clicked",event,a,b);
    }

    // const handleClick2 = ()=>{
    //     console.log("button clicked");
    // }

    return (
        <>
         <button onClick={(e)=>handleClick(e,10,20)}>Button Component</button>
         {/* <button onClick={handleClick2}>Button Component2</button> */}
        </>
    )
}

export default ReactEvents;