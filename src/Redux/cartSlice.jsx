import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart(state, action ){
            const newItem = action.payload;
            const itemIndex = state.products.find((item)=> item.id === newItem.id)
            if (itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price
            } else{
                state.products.push({
                    id: newItem.id,
                    
                    name: newItem.title || newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeFromCart(state, action) {

            const id = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                const item = state.products[itemIndex];
                state.totalPrice -= item.totalPrice;
                state.totalQuantity -= item.quantity;
                state.products.splice(itemIndex, 1);
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                const item = state.products[itemIndex];
                item.quantity++;
                item.totalPrice += item.price;
                state.totalPrice += item.price;
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                const item = state.products[itemIndex];
                if (item.quantity > 1) {
                    item.quantity--;
                    item.totalPrice -= item.price;
                    state.totalPrice -= item.price;
                } else {
                    state.products.splice(itemIndex, 1);
                    state.totalPrice -= item.totalPrice;
                }
                state.totalQuantity--;
            }
        }
    },
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer