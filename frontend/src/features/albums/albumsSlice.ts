import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { album } from "../../types";
import { fetchAlbums, fetchOneAlbum } from "./albumsThunks";

interface AlbumsState {
  albums: album[];
  singleAlbum: album | null;
  fetchLoading: boolean;
}

const initialState: AlbumsState = {
  albums: [],
  singleAlbum: null,
  fetchLoading: false,
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, { payload: albums }) => {
      state.fetchLoading = false;
      state.albums = albums;
    });
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchOneAlbum.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchOneAlbum.fulfilled, (state, { payload: album }) => {
      state.fetchLoading = false;
      state.singleAlbum = album;
    });
    builder.addCase(fetchOneAlbum.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const albumsReducer = albumsSlice.reducer;
export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectSingleAlbum = (state: RootState) => state.albums.singleAlbum;
export const selectAlbumsLoading = (state: RootState) =>
  state.albums.fetchLoading;
