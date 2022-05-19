import { Action } from "@ngrx/store";
import { Category, Categories, Todo } from "../state/categories.state";

export enum ECategoryActions {
    GetCategories = '[Category] Get Categories',
    GetCategoriesSuccess = '[Category] Get Categories Success',
    AddNewCategory = '[Category] Post Categories',
    AddNewCategorySuccess = '[Category] Post Categories Success',
    UpdateTodo = '[Todo] Update Categories',
    UpdateTodoSuccess = '[Todo] Update Categories Success',
    CheckTodo = '[Todo] Check Todo'
}

export class GetCategories implements Action {
    public readonly type = ECategoryActions.GetCategories;
}

export class GetCategoriesSuccess implements Action {
    public readonly type = ECategoryActions.GetCategoriesSuccess
    constructor( public payload: Category[]) {}
}

export class AddNewCategory implements Action {
    public readonly type = ECategoryActions.AddNewCategory
    constructor( public payload: Category) {}
}

export class AddNewCategorySuccess implements Action {
    public readonly type = ECategoryActions.AddNewCategorySuccess
    constructor( public payload: string) {}
}

export class UpdateTodo implements Action {
    public readonly type = ECategoryActions.UpdateTodo
    constructor( public payload: Category) {}
}

export class UpdateTodoSuccess implements Action {
    public readonly type = ECategoryActions.UpdateTodoSuccess
    constructor( public payload: Todo) {}
}

export class CheckTodo implements Action {
    public readonly type = ECategoryActions.CheckTodo
    constructor( public payload: any) {}
}

export type CategoriesActions = 
    GetCategories | 
    GetCategoriesSuccess |
    UpdateTodo |
    UpdateTodoSuccess |
    AddNewCategory |
    AddNewCategorySuccess |
    CheckTodo;