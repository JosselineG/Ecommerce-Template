import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    amount: 0,
    totalAmount: 0,
    cart: [],
}

const storeSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {

        increment: (state, action) => {

            /* find() method returns the element in the provided array that satisifies the provided testing function. */

            /* Finding in the cart array the items id that matches with the action.payload.id,
             which is the unique id that is pressed with the button and assigning it to const l.  */
            
            const l = state.cart.find((item) => item.id === action.payload.id)

            const prices = action.payload.price + state.totalAmount
            state.totalAmount = prices

            if (l) {
                l.quantity += 1;
            }


           
        },

        decrement: (state, action) => {

            const d = state.cart.find((item) => item.id === action.payload.id)

            const prices = state.totalAmount - action.payload.price
            state.totalAmount = prices

            //if quantity is less than or equal to 1 than it should return the following
            if (d.quantity <= 1) {

                /* filter() creates a copy of the array filtered down to just the elements
                 from the given array that passed the test implementation*/

                /*items id is not equal to the action.payload.id than we will get a 
                 new array with the items that did not match the buttons id that was pressed*/

                state.cart = state.cart.filter((item) => item.id !== action.payload.id)

                return;
            }
            //else it should decrement the quantity 
            else {
                d.quantity -= 1
            }




        },


        addToCart: (state, action) => {

            const p = state.cart.find((items) => items.id === action.payload.id)

            const prices = action.payload.price + state.totalAmount
            state.totalAmount = prices

      
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
