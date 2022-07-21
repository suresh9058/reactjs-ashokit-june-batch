import { useState, useEffect } from 'react';
import {BrowserRouter,Routes, Route, useNavigate, Link, useParams, Outlet} from 'react-router-dom';

function Home() {
    return (
        <h1>Home COmponent</h1>
    )
}

function About() {
    return (
        <h1>About COmponent</h1>
    )
}

function ContactUs() {
    return (
        <h1>ContactUs COmponent</h1>
    )
}

function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Landed into page which does'nt exist</h1>
            <button onClick={()=>navigate('/about')}>Go Back to Home</button>
        </>
    )
}

function NavBar() {
    return(
    <>
        <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About</Link><br></br>
            <Link to="/posts">Posts</Link><br></br>
            <Link to="/contact">Contact US</Link>
        </nav>
    </>)
}

function Posts() {
    const [content, setContent] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setContent(json))
    },[]);

    return(
        <>
            <Outlet />
            <ul>
                {content.map((post)=>{
                    return(
                        <li>
                           <p><Link to={`/posts/${post.id}`}>{post.id}</Link></p> 
                           <p>{post.title}</p> 
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

function Post() {

    const [content, setContent] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => setContent(json))
    },[]);

    return (
            <>
                <p>{content.userId}</p>
                <p>{content.body}</p>
            </>
    )
}

function ReactRouterExample() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/posts" element={<Posts />}>
                    <Route path=":id" element={<Post />}/>
                    {/* <Route path="/users" element={<Users />} /> */}
                     {/* /posts/users */}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default ReactRouterExample;