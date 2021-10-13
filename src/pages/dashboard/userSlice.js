import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:{},
    isloading: false,
    error: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserPending: (state) => {
            state.isloading = true;
        },
        getUserSuccess: (state, {payload}) => {
            state.isloading = false;
            state.user = payload;
            state.error = "";
        },
        getUserFail: (state, {payload}) => {
            state.isloading = false;
            state.error = payload;
        },
    },
});


export const { getUserPending, getUserSuccess, getUserFail } = userSlice.actions;
export default userSlice.reducer;