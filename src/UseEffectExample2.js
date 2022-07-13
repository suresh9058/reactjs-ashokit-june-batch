import {useState,useEffect} from 'react';
import useFetch from './UseFetch';

function UseEffectExample2(props) {

    const [content,setContent] = useState([]);
    const [contentType, setContentType] = useState("posts");
    const responseData = useFetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(responseData);
    // useEffect(()=>{
    //    fetch("https://jsonplaceholder.typicode.com/posts")
    //    .then(response=>response.json())
    //    .then(result=>setContent(result))
    //    .catch(error=>console.error(error))
    // },[]);

      
    // useEffect(()=>{
    //     const responseData = useFetch('https://jsonplaceholder.typicode.com/post');
    //     return (
    //         <>
    //         </>
    //     )
    // },[]);

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
    //     .then(response=>response.json())
    //     .then(result=>setContent(result))
    //     .catch(error=>console.error(error))
    //  },[contentType]);

     useEffect(()=>{
        console.log("props from parent");
     },[props.name])

    return (
        <>
            <button onClick={()=>setContentType("posts")}>Posts</button>
            <button onClick={()=>setContentType("comments")}>Comments</button>
            <button onClick={()=>setContentType("users")}>Users</button>
            <ul>
                {responseData?.map((post)=>{
                    return(
                    <li key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                    </li>)
                })}
            </ul>
        </>
    )
}

export default UseEffectExample2;