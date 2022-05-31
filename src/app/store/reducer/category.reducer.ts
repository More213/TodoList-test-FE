import { CategoriesActions, ECategoryActions } from "../actions/category.actions";
import { Category, initialCategoriesState } from "../state/categories.state";

export const categoryReducer = (
    state = initialCategoriesState,
    action: CategoriesActions
): Category[] => {
    switch(action.type) {
        default:
            return state.categories
    }
}