import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email field is required"),
    password: Yup.string().required("password is Required").min(8, "Password is too Short")
});

const initialValues = {
    email:"", 
    password:""
};

function FormikYupExample() {

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values)=>console.log(values)}> 
            {(formik) =>{ // Rendered passed props
            const {errors, touched, isValid}= formik;
            // console.log("isValid:", isValid);
            console.log({isValid});

            return (
                <>
                    <h1>SignIn Form</h1>
                    <Form>
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="span" />
                        <br>
                        </br>
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="span" />
                        <br></br>
                        <button type="submit" disabled={!isValid}>SignIn</button>
                    </Form>
                </>
            )
        }}
    </Formik>
    )
}

export default FormikYupExample;