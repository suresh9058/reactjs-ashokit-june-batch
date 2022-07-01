function Greeter({name, age="20", admin, date, children}) {
    // function Greeter(props)
    //  console.log(props);//props -- {name: 'world', age: '31'}

     const myObj = {
        name: "rakesh",
        age:30
     };
    //  props.age = props.age+10;
    return (
        <>
            <p>hello {name}</p>
            <p>Age: {age+10}</p>
            <p>IsAdmin: {admin}</p>
            <p>{myObj.name}</p>
            {children}
            {/* <p>IsAdmin: {props.date}</p> */}
        </>
    )
}

export default Greeter;