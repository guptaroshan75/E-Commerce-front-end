import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    allProducts: [],
    searchProducts: [],
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    try {
        const response = await axios.get(`${API}/getAllProducts`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSearchAllProducts = createAsyncThunk("searchProducts",
    async (searchValue) => {
        try {
            const response = await axios.get(`${API}/searchProducts/${searchValue}`);
            if (response && response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }
);

export const ProductSlice = createSlice({
    name: "productSlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allProducts = payload.data;
            })
            .addCase(getSearchAllProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.searchProducts = payload.data;
            })
    },
});

export default ProductSlice.reducer;