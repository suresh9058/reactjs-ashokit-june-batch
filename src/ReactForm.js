import {useState} from 'react';

function ReactForm() {  

    const initialValues = {
        email:"", 
        password:""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
    }

    const validate =(values)=>{
        let errors = {};// email: "cannot be blank"
        const regExForEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!values.email) {
            errors.email = "cannot be blank";
        } else if(!regExForEmail.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if(!values.password) {
            errors.password = "Cannot be blank";
        } else if(values.password.length <8) {
            errors.password = "Password must be more than 8";
        }

        return errors;
    }

        return (
            <>
                <h1> SignIn Form</h1>
                <form>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" onChange={handleInputChange}></input>
                        {
                            formErrors.email && (
                                <span>{formErrors.email}</span>
                            )
                        }
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" onChange={handleInputChange}></input>
                        {
                            formErrors.password && (
                                <span>{formErrors.password}</span>
                            )
                        }
                    </div>
                    <button onClick={handleSubmit}>SigIn</button>
                </form>
            </>
        )
}

export default ReactForm;