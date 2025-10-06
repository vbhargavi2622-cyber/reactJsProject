import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
    },
    reducers:{
        addItem: (state, action) =>{
           state.items.push(action.payload); 
        },
        removeItem:(state) =>{
            state.items.pop();
        },
        clearCart:(state) =>{
            alert("123")
              state.items = []; // ✅ new array reference triggers re-render

        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;