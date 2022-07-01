function Greeter(props) {
     console.log(props);//props -- {name: 'world', age: '31'}
    return (
        <>
            <p>hello {props.name}</p>
            <p>Age: {props.age+10}</p>
            <p>IsAdmin: {props.isAdmin}</p>
            <p>IsAdmin: {props.date}</p>
        </>
    )
}

export default Greeter;