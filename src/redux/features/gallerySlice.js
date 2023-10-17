import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    gallery: [],
};

export const getAllGallery = createAsyncThunk("getAllGallery", async () => {
    try {
        const response = await axios.get(`${API}/getAllGallery`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const GallerySlice = createSlice({
    name: "gallerySlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllGallery.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllGallery.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.gallery = payload.data;
            })
    },
});

export default GallerySlice.reducer;