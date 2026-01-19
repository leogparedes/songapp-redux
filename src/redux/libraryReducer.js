// src/redux/libraryReducer.js
const initialState = [];

// Action Types
export const ADD_SONG = "ADD_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG: {
      const song = action.payload;

      // Evitar duplicados por id (tu app ya lo hacía en App.js) :contentReference[oaicite:4]{index=4}
      const exists = state.some((s) => s.id === song.id);
      if (exists) return state;

      return [...state, song];
    }

    case REMOVE_SONG: {
      const songId = action.payload;
      return state.filter((s) => s.id !== songId);
    }

    default:
      return state;
  }
};

export default libraryReducer;
