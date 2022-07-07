function ListExample2({users}) {
    return (
        <ul>
            {
                users.map((user,index)=> (
                    <li key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ListExample2;