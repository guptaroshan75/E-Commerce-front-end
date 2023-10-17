import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    specificProduct: null,
};

export const singleProduct = createAsyncThunk("singleProduct", async (id) => {
    try {
        const response = await axios.get(`${API}/singleProduct/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const SingleProductSlice = createSlice({
    name: "singleProductSlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(singleProduct.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(singleProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.specificProduct = payload.data;
            })
    },
});

export default SingleProductSlice.reducer;