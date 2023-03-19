import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlices.js';

const store = configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
  },
});

export default store;