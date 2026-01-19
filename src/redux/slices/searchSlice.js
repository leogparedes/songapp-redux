import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (artist, thunkAPI) => {
    try {
      const url = `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
        artist
      )}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Error en la petición");

      const data = await res.json();

      // Transformar álbumes a formato "song" que tu UI ya usa :contentReference[oaicite:2]{index=2}
      const results = (data?.album ?? []).map((album) => ({
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        album: album.strAlbum,
      }));

      return results;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Hubo un error");
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null,
  lastQuery: "", // útil para “Reintentar”
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.loading = false;
      state.error = null;
      state.lastQuery = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.lastQuery = action.meta.arg || "";
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Hubo un error";
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
