// import { Injectable } from "@angular/core";
import { Injectable } from "@angular/core";
import { Categories, initialCategoriesState } from "./categories.state";
import { BehaviorSubjectItem } from '../../services/behavior-subject-item/behavior-subject-item.service'

export class IAppState {
    categories!: Categories;
}

export const appInitialState: IAppState = {
    categories: initialCategoriesState
}

@Injectable()
export class Store<IAppState> {
  public state!: BehaviorSubjectItem<IAppState>;

  init(initialState: IAppState) {
    this.state = new BehaviorSubjectItem(initialState);
  }
}

export function initStore(store: Store<IAppState>) {
  return () => store.init(appInitialState);
}