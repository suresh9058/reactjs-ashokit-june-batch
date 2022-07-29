import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../reducer/CounterSlice';

export default configureStore({
    reducer: {
        counter: CounterReducer
    }
});