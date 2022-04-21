import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { categoryReducer } from "./category.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    categories: categoryReducer
}