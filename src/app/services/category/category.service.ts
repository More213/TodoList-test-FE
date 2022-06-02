import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddNewCategory } from "src/app/store/actions/category.actions";
import { IAppState } from "src/app/store/state/app.state";
import { Category} from "src/app/store/state/categories.state";


@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    constructor(
        private store: Store<IAppState>
    ) {}

    public saveNewCategory(newCategory: Category): void {
        this.store.dispatch(new AddNewCategory(newCategory))
    }
}