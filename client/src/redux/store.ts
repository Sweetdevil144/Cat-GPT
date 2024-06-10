import { configureStore,createSlice} from "@reduxjs/toolkit";

//storage for messagetype
export type MessageType = {
    type: string;
    content: string;
    sender: "user" | "ollama";
};

interface AppState{
    message:MessageType[];
}
const initialState:AppState={
    message:[]
}

//app slice for managing messages
const appSlice=createSlice({
    name:"app",
    initialState,
    reducers:{
        sendMessage:(state,action)=>{
            const newMessage=action.payload;
            state.message.push(newMessage);
        },
    },
});

//export action and reducer
export const { sendMessage } = appSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});

// Export store and RootState type
export type RootState = ReturnType<typeof store.getState>;
export default store;

