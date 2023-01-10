import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    category: "",
    city: "",
    listen: "",
    length: 0,
    signedIn : false
};

export const agentSlice = createSlice({
    name: "agent",
    initialState,
    reducers: {
        addName: (state, action) => {
            state.name = action.payload;
        },
        addCategory: (state, action) => {
            state.category = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
        addListen: (state, action) => {
            state.listen = action.payload;
        },
        addAgentItemLength: (state, action) => {
            state.length = action.payload;
        },
        addSignedIn: (state, action) => {
            state.signedIn = true;
        }
    },
});

export const { addName, addCategory, addCity, addListen, addAgentItemLength, addSignedIn } =
    agentSlice.actions;
export default agentSlice.reducer;
