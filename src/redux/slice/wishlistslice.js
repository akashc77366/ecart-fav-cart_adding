import { createSlice } from "@reduxjs/toolkit";


const wishlistslice= createSlice({
    name:"wishlistslice",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromwishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
    
})

export const{addToWishlist,removeFromwishlist}=wishlistslice.actions
export default wishlistslice.reducer