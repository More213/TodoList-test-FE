import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { plainToClass } from 'class-transformer';
import { Store } from "@ngrx/store";
import { switchMap, of } from "rxjs";
import { APIService } from "src/app/services/api/api.service";
import { 
    AddNewCategory, 
    AddNewCategorySuccess, 
    CheckTodo, 
    ECategoryActions, 
    GetCategories, 
    GetCategoriesSuccess, 
    UpdateTodo,
    UpdateTodoSuccess} from "../actions/category.actions";
import { IAppState } from "../state/app.state";
import { catchError, map } from 'rxjs/operators';
import { MatDialog } from "@angular/material/dialog";
import { DialogMessage } from "src/app/components/dialog-message/dialog-message.component";
import { Categories } from "../state/categories.state";

@Injectable()
export class CategoryEffects {
    @Effect()
    getCategories = this.actions.pipe(
        ofType<GetCategories>(ECategoryActions.GetCategories),
        switchMap(() => this.Api.getString()),
        switchMap((categoryHttp: any) => {

            //use class-transformer
            const category = plainToClass(Categories, {categories: categoryHttp});
            return of(new GetCategoriesSuccess(category.categories))
        })
    )

    @Effect()
    addCategory = this.actions.pipe(
        ofType<AddNewCategory>(ECategoryActions.AddNewCategory),
        switchMap( action => this.Api.addNewCategory(action.payload).pipe(
            map((el: any) =>  {
                console.log(el)
                this.store.dispatch(new AddNewCategorySuccess(el))
            }),
            catchError(error => of(this.openDialog()))
    )),

    )

    @Effect()
    addNewToDo = this.actions.pipe(
        ofType<UpdateTodo>(ECategoryActions.UpdateTodo),
        switchMap(action => this.Api.addNewTodo(action.payload).pipe(
            map((el: any) =>  {
                this.store.dispatch( new UpdateTodoSuccess(el))
            }),
            catchError(error => of(this.openDialog()))
        ))
    )

    @Effect()
    checkTodo = this.actions.pipe(
        ofType<CheckTodo>(ECategoryActions.CheckTodo),
        switchMap(action => this.Api.checkTodoRequest(action.payload).pipe(
            map(() =>  {
                this.store.dispatch(new GetCategories())
            }),
            catchError(error => of(this.openDialog()))
        ))
    )

    openDialog(): void{
        const dialogRef = this.dialog.open(DialogMessage, {
          width: '400px'
        });
        setTimeout(()=> {
          dialogRef.close();
        }, 2000)
    }

    constructor(
        private Api: APIService,
        private actions: Actions,
        private store: Store<IAppState>,
        public dialog: MatDialog,
        ) {}
}