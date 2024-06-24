import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status : false ,
    userData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state, action) => {
            state.status = false;
            state.userData = null;  //any message you want to pass 
        }

        // post can be added as well 
    }
})

export  const {login, logout} = authSlice.actions
export default authSlice.reducer;
