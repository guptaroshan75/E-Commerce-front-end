import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    blogs: [],
    specificBlog: null,
};

export const getAllBlogs = createAsyncThunk("getAllBlogs", async () => {
    try {
        const response = await axios.get(`${API}/getAllBlogs`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificBlog = createAsyncThunk("getSpecificBlog", async (id) => {
    try {
        const response = await axios.get(`${API}/getSpecificBlog/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const BlogSlice = createSlice({
    name: "blogSlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.blogs = payload.data;
            })
            .addCase(getSpecificBlog.fulfilled, (state, { payload }) => {
                state.isLoading = true;
                state.specificBlog = payload.data;
            })
    },
});

export default BlogSlice.reducer;