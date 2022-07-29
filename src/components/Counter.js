import {increment, decrement, selectCount} from '../reducer/CounterSlice';
import {useDispatch, useSelector} from 'react-redux';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    return (
        <>
            <button onClick={()=>dispatch(increment())}>Add</button><br></br>
            <p>{count}</p>
            <button onClick={()=>dispatch(decrement())}>Subtract</button>
        </>
    )
}

export default Counter;