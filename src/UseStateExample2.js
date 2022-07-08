import {useState} from 'react';

function UseStateExample2() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [formValues, setFormValues] = useState({
        email: "", // e.target.name: e.target.value
        password: ""
    });

    const handleInputChange = (e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target; //{name: "", value: ""}
        setFormValues({...formValues, [name]: value });
        console.log(formValues);
    };

    return (
        <>
          <form>
            Email: <input name="email" type="email" onChange={handleInputChange}/><br></br>
            Password:<input name="password" type="password" onChange={handleInputChange}/><br></br>
          </form>
        </>
    )
}

export default UseStateExample2;