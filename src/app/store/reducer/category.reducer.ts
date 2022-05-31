import { CategoriesActions, ECategoryActions } from "../actions/category.actions";
import { Category, initialCategoryState } from "../state/categories.state";

export const categoryReducer = (
    state = [initialCategoryState],
    action: CategoriesActions
): Category[] => {
    switch(action.type) {
        case ECategoryActions.GetCategoriesSuccess:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state
    }
}