// 2. Add a reducer with the case from actions
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addItem } = dataSlice.actions;
export default dataSlice.reducer;