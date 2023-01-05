import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./features/todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default store;

// store의 state 타입을 가져온다.
export type RootState = ReturnType<typeof store.getState>;

// store의 dispatch 타입을 가져온다.
export type AppDispatch = typeof store.dispatch;
