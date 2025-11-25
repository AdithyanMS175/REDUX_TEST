import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    allNotes: [],
    filteredNotes: [],
  },
  reducers: {
    addNotes: (state, action) => {
      const newNote = {
        id: Date.now(),
        text: action.payload,
      };

      state.allNotes.push(newNote);
      state.filteredNotes.push(newNote);
    },

    deleteNotes: (state, action) => {
      state.allNotes = state.allNotes.filter(
        (item) => item.id !== action.payload
      );
      state.filteredNotes = state.filteredNotes.filter(
        (item) => item.id !== action.payload
      );
    },

    editNotes: (state, action) => {
      const { id, updatedText } = action.payload;

      const note = state.allNotes.find((item) => item.id === id);
      if (note) note.text = updatedText;

      const filteredNote = state.filteredNotes.find((item) => item.id === id);
      if (filteredNote) filteredNote.text = updatedText;
    },

    searchNotes: (state, action) => {
      state.filteredNotes = state.allNotes.filter((item) =>
        item.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addNotes, deleteNotes, editNotes, searchNotes } = noteSlice.actions;
export default noteSlice.reducer;
