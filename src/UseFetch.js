import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(result=>setData(result))
        .catch(error=>console.error(error))
    },[]);

    return data;
}

export default useFetch;