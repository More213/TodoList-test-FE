import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { Categories } from "../state/categories.state";

const selectCategories = (state: IAppState) => state.categories;

export const selectCategoryList = createSelector(
    selectCategories,
    (state: Categories) => state.categories
)