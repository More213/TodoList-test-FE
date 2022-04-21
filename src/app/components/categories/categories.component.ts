import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API/api.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetCategories } from 'src/app/store/actions/category.actions';
import { selectCategoryList } from 'src/app/store/selectors/category.selectors';
import { ICategoriesState, ICategoryState } from 'src/app/store/state/categories.state';
import { ToDoService } from 'src/app/services/ToDo/ToDo.service';


export interface ICatgory {
   _id: string,
   title: String,
   todos: [{
       _id: string,
       text: String,
       isCompleted: Boolean
  }]
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: any 
  
  constructor(
    private store: Store<IAppState>,
    private todoService: ToDoService
    ) {
      this.store.pipe(select(selectCategoryList)).subscribe((el) => this.categories =  el)
    }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): any {
    this.store.dispatch(new GetCategories())
  }
  

  checkedTodo(todo: any) {
    if(!todo.isComplete) {
      const updateTodo = {isComplete: !todo.isComplete, todoId: todo.todo._id, categoryId: todo.categoryId}
      this.todoService.saveCheckTodo(updateTodo)
    }
  }
}

