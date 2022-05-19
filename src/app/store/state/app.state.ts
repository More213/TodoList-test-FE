import { RouterReducerState } from "@ngrx/router-store";
import { Categories, initialCategoriesState } from "./categories.state";


export class IAppState {
    router?: RouterReducerState;
    categories!: Categories;
}

export const initialAppState: IAppState = {
    categories: initialCategoriesState
}

export function getInitialState(): IAppState {
    return initialAppState
}