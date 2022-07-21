import React, {useContext} from 'react';

const UserContext =  React.createContext();

function ReactContextAPIExample() {
    return (
        <UserContext.Provider value={{theme: "dark"}}>
            <User />
        </UserContext.Provider>   
    )
}

// function User() {
//     return (
//         <UserContext.Consumer>
//             {
//                 value => <h1>{value.theme}</h1>
//             }
//         </UserContext.Consumer>
//     )
// }

function User() {
    const value = useContext(UserContext);
    return (
         <h1>{value.theme}</h1>   
    )
}

export default ReactContextAPIExample;

