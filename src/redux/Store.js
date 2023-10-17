import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./features/categorySlice";
import SingleProductSlice  from "./features/singleProductSlice";
import cartSlice from "./features/cartSlice";
import blogSlice from "./features/blogSlice";
import gallerySlice from "./features/gallerySlice";
import productSlice from "./features/productSlice";

const Store = configureStore({
    reducer: {
        category: CategorySlice,
        singleProduct: SingleProductSlice,
        cart: cartSlice,
        blog: blogSlice,
        gallery: gallerySlice,
        products: productSlice
    },
});

export default Store;