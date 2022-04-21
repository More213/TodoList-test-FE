import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap, of, take ,interval } from "rxjs";
import { APIService } from "src/app/services/API/api.service";
import { 
    AddNewCategory, 
    CheckTodo, 
    ECategoryActions, 
    GetCategories, 
    GetCategoriesSuccess, 
    UpdateTodo} from "../actions/category.actions";
import { IAppState } from "../state/app.state";

const secondInterval = interval(1000).pipe(take(2));

@Injectable()
export class CategoryEffects {
    @Effect()
    getCategories = this.actions.pipe(
        ofType<GetCategories>(ECategoryActions.GetCategories),
        switchMap(() => this.Api.getString()),
        switchMap((categoryHttp: any) => of(new GetCategoriesSuccess(categoryHttp)))
    )

    @Effect()
    addCategory = this.actions.pipe(
        ofType<AddNewCategory>(ECategoryActions.AddNewCategory),
        switchMap(action => this.Api.addNewCategory(action.payload))
    )
        
    @Effect()
    addNewToDo = this.actions.pipe(
        ofType<UpdateTodo>(ECategoryActions.UpdateTodo),
        switchMap(action => this.Api.addNewTodo(action.payload))
    )

    @Effect()
    checkTodo = this.actions.pipe(
        ofType<CheckTodo>(ECategoryActions.CheckTodo),
        switchMap(action => this.Api.checkTodoRequest(action.payload))
    )


    constructor(
        private Api: APIService,
        private actions: Actions,
    ) {}
}
