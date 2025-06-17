import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products from API
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        return await response.json();
    }
);

const initialState = {
    products: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    searchTerm: "",
    filteredData: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload
        },
        setSearchTerm(state, action) {  
            state.searchTerm = action.payload;
            if (state.searchTerm) {
                state.filteredData = state.products.filter((product) =>
                    product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                );
            } else {
                state.filteredData = [];
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
})

export const {setProducts, setSearchTerm} = productSlice.actions;

export default productSlice.reducer 