import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetCategories } from 'src/app/store/actions/category.actions';
import { selectCategoryList } from 'src/app/store/selectors/category.selectors';
import { ToDoService } from 'src/app/services/todo/todo.service';
import { TodoCheck } from 'src/app/store/state/categories.state';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  public categories!: any;
  
  constructor(
    private store: Store<IAppState>,
    private todoService: ToDoService
    ) {
      this.store.pipe(select(selectCategoryList)).subscribe((el) => {
        this.categories =  el
        console.log(this.categories)
      })
    }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.store.dispatch(new GetCategories())
  }

  checkedTodo(todo: TodoCheck):void {
    this.todoService.saveCheckTodo(todo)
  }
}

