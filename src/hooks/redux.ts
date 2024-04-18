import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/redux/RootReducer";
import { AppDispatch } from "../services/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
