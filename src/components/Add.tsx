// nanoid : 랜덤한 문자열을 반환하는 패키지
import { nanoid } from "@reduxjs/toolkit";

import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/hooks";

import { addTodo } from "../store/features/todoSlice";

const Add = () => {
  // useDispatch와 동일하게 사용
  const dispatch = useAppDispatch();

  // register : input을 useForm에 등록, 첫번째 인자는 input의 별칭, 두번째 인자는 register 옵션
  // watch : 해당 input의 value의 변경을 감지
  // formState : {errors} : 해당 input에 register 옵션에 따라 errors 상태를 파악하여 boolean값을 반환한다.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // form의 Submit 함수
  const SubmutHandler = () => {
    // reducer인 addTodo를 사용하여 action.payload를 전달
    // action.payload는 Todo 타입이므로 id와 content의 프로퍼티가 존재해야하며 값이 두 프로퍼티 모두 string 타입이여야함
    dispatch(addTodo({ id: nanoid(), content: watch("todo") }));
  };

  return (
    <form onSubmit={handleSubmit(SubmutHandler)}>
      <div>
        <label htmlFor="todo">Todo</label>
        {/* 해당 input의 별칭은 todo, register 조건은 '필수 입력' */}
        <input id="todo" {...register("todo", { required: true })} />
        {errors.todo && (
          <p style={{ color: "red" }}>유효한 값을 입력해주세요.</p>
        )}
      </div>
      <button>Add</button>
    </form>
  );
};

export default Add;
