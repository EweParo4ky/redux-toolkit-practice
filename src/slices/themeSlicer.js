import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark:false,
}

const themeSlicer = createSlice(({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.dark = !state.dark;
    }
  },
}));
export const { changeTheme }  = themeSlicer.actions;
export default themeSlicer.reducer;
