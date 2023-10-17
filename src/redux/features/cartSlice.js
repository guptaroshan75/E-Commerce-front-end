import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    loading: false,
    products: [],
    cartCount: 0,
};

export const asyncAddProductToCart = createAsyncThunk('addToCart',
    async (product) => {
        try {
            toast.success('Product Added Successfully');
            return product;
        }
        catch (error) {
            toast.error(error.message);
        }
    })

// export const asyncAddProductToCartToDB = createAsyncThunk('addToCart',
//     async (id) => {
//         try {
//             const response = await axios.post(`${API}/addToCart/${id}`);
//             const addedProduct = response.data;
//             toast.success('Product Added Successfully');
//             return addedProduct;
//         } catch (error) {
//             toast.error(error.message);
//             throw error;
//         }
//     }
// );

// export const asyncAddProductToCart = createAsyncThunk('addToCart',
//     async (products, thunkAPI) => {
//         // const { productObj } = specificCategoriesProduct;
//         try {
//             const response = await axios.post(`${API}/addToCart`, products);
//             console.log(response.data);
//             toast.success('Product Added Successfully');
//             // return specificCategoriesProduct;
//         }
//         catch (error) {
//             toast.error(error.message);
//         }
//     })


export const asyncRemoveProductFromCart = createAsyncThunk('removeProductFromCart',
    async (id, thunkAPI) => {
        try {
            const { cart: { products } } = thunkAPI.getState();
            const newProducts = products.filter(product => product._id !== id);
            toast.error('Product Remove Successfully');
            return newProducts;
        }
        catch (error) {
            toast.error(error.message);
        }
    }
)

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(asyncAddProductToCart.pending, (state, action) => {
                state.loading = false;
            })
            .addCase(asyncAddProductToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
                state.cartCount += 1;
            })
            .addCase(asyncRemoveProductFromCart.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.cartCount -= 1;
            })
    }
})

export default cartSlice.reducer;