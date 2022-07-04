export function UserGreeting() {
    return <h1>Hello Username</h1>
}

export function GuestGreeting(){
    return <h1>Hello Guest</h1>
}

function Greeting({isLoggedIn}) {
    // if(isLoggedIn) {
    //     return <UserGreeting />
    // } 
    // // else {
    //     return <GuestGreeting />
    // // }
    // return <>Greeting Component</>
    // return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    return isLoggedIn && <UserGreeting />
}

export default Greeting;