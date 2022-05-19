import { CategoriesActions, ECategoryActions } from "../actions/category.actions";
import { Categories, initialCategoriesState } from "../state/categories.state";

export const categoryReducer = (
    state = initialCategoriesState,
    action: CategoriesActions
): Categories => {
    switch(action.type) {
        case ECategoryActions.GetCategoriesSuccess:
            return {
                ...state,
                categories: action.payload
            };
        case ECategoryActions.AddNewCategorySuccess:
            return {
                ...state,
            }
        default:
            return state
    }
}