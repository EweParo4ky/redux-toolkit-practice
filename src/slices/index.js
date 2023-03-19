import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlices.js';
import themeReducer from './themeSlicer.js'

const store = configureStore({
  reducer: {
    // counter – это свойство будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;