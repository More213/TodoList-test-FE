import { Type } from "@angular/core";
import { CategoriesActions, ECategoryActions } from "../actions/category.actions";
import { Categories, Category, initialCategoriesState, Todo } from "../state/categories.state";

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
            const newTodo = {
                    text: action.payload.text,
                    isCompleted: action.payload.isCompleted,
                    atUpdate: action.payload.atUpdate,
                    _id:action.payload._id,
            }
            const newCategoriesState = state.categories.map((category: Category ) => {
                if(category._id === action.payload.categoryId.toString()) {
                return {
                    ...category,
                    todos: [...category.todos, newTodo]}
                }
                return category
            })
            return {
                categories: newCategoriesState
            }
        case ECategoryActions.CheckTodoSuccess:
            const updateTodoComplet = state.categories.map((category: Category) => {
                if(category._id === action.payload.categoryId.toString()) {
                    const newCat = category.todos.map((todo) => {
                        if(todo._id === action.payload.todoId.toString()) {
                            return {
                                ...todo,
                                isCompleted: action.payload.isCompleted
                            }
                        }
                        return todo
                    })
                    return {
                        ...category,
                        todos: newCat
                    }
                    }
                    return category
            })
            console.log(updateTodoComplet)
            return {
                categories: updateTodoComplet
            }
        default:
            return state
    }
}