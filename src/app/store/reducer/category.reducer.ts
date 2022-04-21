import { CategoriesActions, ECategoryActions } from "../actions/category.actions";
import { ICategoriesState, initialCategoriesState } from "../state/categories.state";

export const categoryReducer = (
    state = initialCategoriesState,
    action: CategoriesActions
): ICategoriesState => {
    switch(action.type) {
        case ECategoryActions.GetCategoriesSuccess:
            return {
                ...state,
                categories: action.payload
            };
        case ECategoryActions.AddNewCategorySuccess:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}