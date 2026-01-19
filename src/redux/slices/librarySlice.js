import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addSong: (state, action) => {
      const song = action.payload;
      const exists = state.some((s) => s.id === song.id);
      if (!exists) state.push(song);
    },
    removeSong: (state, action) => {
      const songId = action.payload;
      return state.filter((s) => s.id !== songId);
    },
  },
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;
