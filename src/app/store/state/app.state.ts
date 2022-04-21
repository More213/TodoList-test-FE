import { RouterReducerState } from "@ngrx/router-store";
import { ICategoriesState, initialCategoriesState } from "./categories.state";

export interface IAppState {
    router?: RouterReducerState;
    categories: ICategoriesState;
}

export const initialAppState: IAppState = {
    categories: initialCategoriesState
}

export function getInitialState(): IAppState {
    return initialAppState
}