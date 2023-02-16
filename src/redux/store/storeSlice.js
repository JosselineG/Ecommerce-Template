import { createSlice} from "@reduxjs/toolkit";


const initialState = {

    cart: [],
}

const storeSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {

        increment: (state, action) => {

            //we are checking the cart array to find the item id matches with the action.payload which is the unique id that is pressed with the button  

            const l = state.cart.find((item) => item.id === action.payload.id)
           
            if(l){
                l.quantity+=1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
            


        },

        decrement: (state, action) => {

            const d = state.cart.find((item) => item.id === action.payload)
           

            if(d.quantity === 0){
                return;
            }else{
                d.quantity -= 1
            }


        },


        addToCart: (state, action) => {

            const p = state.cart.find((items) => items.id === action.payload.id)

            if (p) {
                p.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }

        },

    },

})

export const { increment, decrement, addToCart } = storeSlice.actions
export default storeSlice.reducer
