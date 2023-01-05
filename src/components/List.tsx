import { useAppSelector, useAppDispatch } from "../store/hooks";
import { removeTodo } from "../store/features/todoSlice";

const List = () => {
  const dispatch = useAppDispatch();

  // state의 todo reducer에서 todos의 값을 추출한다.
  const todos = useAppSelector((state) => state.todo.todos);
  console.log(todos);

  const removeHandler = (todoId: string) => {
    dispatch(removeTodo(todoId));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => removeHandler(todo.id)}>
          {todo.content}
        </li>
      ))}
    </ul>
  );
};

export default List;
