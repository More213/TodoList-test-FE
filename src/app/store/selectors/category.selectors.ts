import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ICategoriesState } from "../state/categories.state";

const selectCategories = (state: IAppState) => state.categories;

export const selectCategoryList = createSelector(
    selectCategories,
    (state: ICategoriesState) => state.categories
)