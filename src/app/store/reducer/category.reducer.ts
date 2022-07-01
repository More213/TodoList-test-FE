import { Type } from "@angular/core";
import { CategoriesActions, ECategoryActions } from "../actions/category.actions";
import { Categories, initialCategoriesState, Todo } from "../state/categories.state";

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
                categories: [...state.categories, action.payload]
            }
        case ECategoryActions.UpdateTodoSuccess:
            // const findedCategory =  state.categories.find((el) => el._id === action.payload.categoryId)
            // const addedTodo = [
            //     ...findedCategory?.todos as any,
            //     {
            //         _id: action.payload._id,
            //         text: action.payload.text,
            //         isCompleted!: action.payload.isCompleted,
            //         atUpdate: action.payload.atUpdate
            //     }
            //  ]
            // console.log(action.payload)
            // return {
            //     categories: [
            //         ...state.categories,
            //         {
            //             _id: findedCategory?._id,
            //             title: findedCategory?.title,
            //             atCreated: findedCategory?.atCreated,
            //             todos: addedTodo
            //         }
            //     ]
            // }
        default:
            return state
    }
}