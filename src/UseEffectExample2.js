import {useState,useEffect} from 'react';

function UseEffectExample2(props) {

    const [content,setContent] = useState([]);
    const [contentType, setContentType] = useState("posts")
  
    // useEffect(()=>{
    //    fetch("https://jsonplaceholder.typicode.com/posts")
    //    .then(response=>response.json())
    //    .then(result=>setContent(result))
    //    .catch(error=>console.error(error))
    // },[]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
        .then(response=>response.json())
        .then(result=>setContent(result))
        .catch(error=>console.error(error))
     },[contentType]);

     useEffect(()=>{
        console.log("props from parent");
     },[props.name])

    return (
        <>
            <button onClick={()=>setContentType("posts")}>Posts</button>
            <button onClick={()=>setContentType("comments")}>Comments</button>
            <button onClick={()=>setContentType("users")}>Users</button>
            {/* <ul>
                {content.map((post)=>{
                    return(
                    <li key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                    </li>)
                })}
            </ul> */}
        </>
    )
}

export default UseEffectExample2;