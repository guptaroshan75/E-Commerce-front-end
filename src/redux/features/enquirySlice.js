import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    enquiry: [],
    checkOutDetail: [],
    isLoading: false,
};

export const enquiryDetails = createAsyncThunk("addEnquiryDetails",
    async (addEnquir) => {
        try {
            const response = await axios.post(`${API}/addEnquiryDetails`, addEnquir);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const checkOutDetails = createAsyncThunk("addUsersCheck",
    async (addCheckOutUser) => {
        try {
            const response = await axios.post(`${API}/addUsersCheck`, addCheckOutUser);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const enquirySlice = createSlice({
    name: "enquirySlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addEnquiryDetails.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addUsersCheck.fulfilled, (state) => {
                state.isLoading = false;
            })
    },
});

export default enquirySlice.reducer;