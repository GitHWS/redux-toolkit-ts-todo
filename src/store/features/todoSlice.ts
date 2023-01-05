import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 추가될 Todo의 타입 인터페이스
interface Todo {
  id: string;
  content: string;
}

// initialState를 설정하기 위한 타입 인터페이스
// todos 프로퍼티의 값의 타입을 Todo 타입을 요소로 가지는 배열로 지정
interface TodoState {
  todos: Todo[];
}

// TodoSlice의 state의 초기값
// TodoState 타입으로 지정
const initialState: TodoState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Todo를 추가하는 리듀서
    addTodo: (state, action: PayloadAction<Todo>) => {
      // 기존의 todos에 새로 추가될 action.payload의 값을 병합
      // 추가될 todo인 action.payload의 타입은 Todo로 지정
      state.todos = state.todos.concat(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default TodoSlice.reducer;
export const { addTodo, removeTodo } = TodoSlice.actions;
