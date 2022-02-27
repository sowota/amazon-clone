import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addToBasket: (state, action) =>{
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) =>{
            const index = state.items.findIndex(basketitem => basketitem.id === action.payload.id)

            let newBasket = [...state.items]

            if(index >= 0){
                newBasket.splice(index, 1)
            }else {
                console.warn(
                    `Cannot remove product (id: ${action.payload.id} as its not it basket)`
                )
            }

            state.items= newBasket
        }
    }
})

function formatToCurrency(total){
    return (total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}

export const {addToBasket, removeFromBasket} = basketSlice.actions

export const selectItems = state => state.basket.items
export const selectTotal = state => {
    let total = state.basket.items.reduce((total, item) => total + item.price, 0)
    return formatToCurrency(total) 
}

export default basketSlice.reducer