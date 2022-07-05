function ListExample({numbers}) { // props is an object props.numbers
    const listItems = numbers.map((number,index)=>
            // {
            // return (
            <li key={index}>
                {number}
            </li>
            // )
        // }
    );
    // console.log(listItems);

    return (
        <ul>
          {listItems}  
        </ul>
    )
}

export default ListExample;