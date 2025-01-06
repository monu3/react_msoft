// app/features/test/testSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TestState {
  todo:[{id:number,title:string}]
}


const initialState: TestState = {
  todo:[{id:1,title:"do work"}]
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addTodo : (state,action:PayloadAction<{id:number,title:string}>) => {
      const todo = {
        id:action.payload.id,
        title:action.payload.title
      }
        state.todo.push(todo)
    }
  },
});

export const {addTodo } = formSlice.actions;
export default formSlice.reducer;
