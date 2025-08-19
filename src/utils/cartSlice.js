import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        // items : ["burger", "pizza"]
        items : []
    },
    reducers : {
        addItem : (state, action) => {


            // Vanialla(Older) Redux ==> Don't Mutate State, returning was mandetory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;


            // Redux Toolkit
            // We have to mutate the state 
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            // TODO : check which index element have to remove
            state.items.pop();
        },
        clearCart : (state) => {
            // console.log(state); // proxy
            // console.log(current(state)); // local variable

            // RTK - either Mutate the state or return the new State
            state.items.length = 0;
            // return {items : [] }; 
        }
    }
});

export const {
    addItem,
    removeItem,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;