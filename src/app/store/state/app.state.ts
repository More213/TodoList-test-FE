// import { Injectable } from "@angular/core";
import { Injectable } from "@angular/core";
import { Categories, Category, initialCategoryState } from "./categories.state";
import { BehaviorSubjectItem } from '../../services/behavior-subject-item/behavior-subject-item.service'

export class IAppState {
    categories!: Category[];
}

export const appInitialState: IAppState = {
    categories: [initialCategoryState]
}

@Injectable()
export class Store<IAppState> {
  public state!: BehaviorSubjectItem<IAppState>;

  init(initialState: IAppState) {
    this.state = new BehaviorSubjectItem(initialState);
  }
}

// const appInitialState: AppState = {/* ... */};

export function initStore(store: Store<IAppState>) {
//   return () => store.init();
}