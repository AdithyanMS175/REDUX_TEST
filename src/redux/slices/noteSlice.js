import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNotes: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    deleteNotes: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    editNotes: (state, action) => {
      const { id, updatedText } = action.payload;
      const note = state.find((item) => item.id === id);
      if (note) note.text = updatedText;
    },
  },
});
export const { addNotes, deleteNotes,editNotes } = noteSlice.actions;
export default noteSlice.reducer;
