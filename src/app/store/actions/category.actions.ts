import { Category, Todo, TodoCheck } from "../state/categories.state";

export enum ECategoryActions {
    GetCategories = '[Category] Get Categories',
    GetCategoriesSuccess = '[Category] Get Categories Success',
    AddNewCategory = '[Category] Post Categories',
    AddNewCategorySuccess = '[Category] Post Categories Success',
    UpdateTodo = '[Todo] Update Categories',
    UpdateTodoSuccess = '[Todo] Update Categories Success',
    CheckTodo = '[Todo] Check Todo'
}

interface GetCategories {
    type: ECategoryActions.GetCategories,
    payload: Category[]
}

interface GetCategoriesSuccess {
    type: ECategoryActions.GetCategoriesSuccess,
    payload: Category[]
}

interface AddNewCategory {
    type: ECategoryActions.AddNewCategory,
    payload: Category
}

interface AddNewCategorySuccess {
    type: ECategoryActions.AddNewCategorySuccess,
    payload: string
}

interface UpdateTodo {
    type: ECategoryActions.UpdateTodo,
    payload: Category
    
}

interface UpdateTodoSuccess {
    type: ECategoryActions.UpdateTodoSuccess,
    payload: Todo
}

interface CheckTodo {
    type: ECategoryActions.CheckTodo,
    payload: Todo
}

export type CategoriesActions = GetCategories |
GetCategoriesSuccess|
UpdateTodo |
UpdateTodoSuccess |
AddNewCategory |
AddNewCategorySuccess |
CheckTodo