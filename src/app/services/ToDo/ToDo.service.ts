import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
// import { CheckTodo, UpdateTodo } from "src/app/store/actions/category.actions";
import { IAppState } from "src/app/store/state/app.state";
import { Category, TodoCheck } from "src/app/store/state/categories.state";


@Injectable({
    providedIn: 'root',
})
export class ToDoService {
    constructor(
        private store: Store<IAppState>
    ) {}

    public saveNewToDo(newCategory: Category): void {
        // this.store.dispatch(new UpdateTodo(newCategory))
    }

    public saveCheckTodo(todo: TodoCheck): void {
        // this.store.dispatch(new CheckTodo(todo))
    }
}