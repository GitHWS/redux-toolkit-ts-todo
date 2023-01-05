import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// useDispatch와 useSelector를 TypeScript에서 사용하기 위한 새로운 Hook 생성
// TypeScript를 위한 Hook 생성일 뿐, useDispatch와 useSelector와 동일한 기능
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
