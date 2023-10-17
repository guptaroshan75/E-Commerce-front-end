import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    categories: [],
    specificCategory: null,
    specificCategoriesProducts: [],
};

export const getAllCategories = createAsyncThunk("getAllCategories", async () => {
    try {
        const response = await axios.get(`${API}/getAllCategories`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificCategory = createAsyncThunk("getSpecificCategory", async (id) => {
    try {
        const response = await axios.get(`${API}/getSpecificCategory/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificCategoryProduct = createAsyncThunk("getSpecificCategoryProduct",
    async (id) => {
        try {
            const response = await axios.get(`${API}/getSpecificCategoryProduct/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const CategorySlice = createSlice({
    name: "categorySlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload.data;
            })
            .addCase(getSpecificCategory.fulfilled, (state, { payload }) => {
                state.isLoading = true;
                state.specificCategory = payload.data;
            })
            .addCase(getSpecificCategoryProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.specificCategoriesProducts = payload.data;
            })
    },
});

export default CategorySlice.reducer;