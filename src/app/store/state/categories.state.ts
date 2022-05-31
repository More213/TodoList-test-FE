import { Injectable } from "@angular/core";
import { BehaviorSubjectItem } from "src/app/services/behavior-subject-item/behavior-subject-item.service";
import { CategoriesActions } from "../actions/category.actions";

export class Todo {
    _id?: null | string;
    text!: string;
    isCompleted!: Boolean;
}

export class TodoCheck {
    todoId!: string;
    categoryId!: string;
    isCompleted!: boolean;
}

export class Category{
    _id?: null | string;
    title!: string;
    todos!: Todo[]
}

export class Categories {
    categories!: Category[];
}
export const initialCategoriesState: Categories = {
    categories!: []
}

@Injectable()
export class CategoriesStore {
    categoryState:BehaviorSubjectItem<Categories> = new BehaviorSubjectItem(initialCategoriesState);

    setInitialState(data: any) {
        const oldState = this.categoryState.value;
        this.categoryState.value = {
            categories: [...oldState.categories, ...data]
        }
    }
}

@Injectable()
export class Store<Categories> {
  state!: BehaviorSubjectItem<Categories>;
    changeStateFunction: any;
  
  init(
    _state: Categories, 
    _changeStateFunction: (oldState: Categories, action: CategoriesActions) => Categories, // <- будем передавать в метод инициализации функцию, которая умеет работать со всем состоянием
  ) {/* ... */}

  changeState(action: Categories) {
    this.state.value = this.changeStateFunction(this.state.value, action);
  }
}