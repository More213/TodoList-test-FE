import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/API/api.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCategoryList } from 'src/app/store/selectors/category.selectors';
import { Category } from 'src/app/store/state/categories.state';
import { AddNewCategory } from 'src/app/store/actions/category.actions';
import { CategoryService } from 'src/app/services/Category/category.service';
import { ToDoService } from 'src/app/services/ToDo/ToDo.service';


@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  public titels: Category[] = [];

    profileForm = new FormGroup({
    _id: new FormControl(null),
    title: new FormControl(''),
    todo: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  isCastomTitle = false;

  constructor(
    public dialogRef: MatDialogRef<CreateTodoComponent>,
    private store: Store<IAppState>,
    private categoryService: CategoryService,
    private todoService: ToDoService,
    ) {
      this.store.pipe(select(selectCategoryList)).subscribe((el) => this.titels =  el)
    }
  
  ngOnInit(): void {}

  saveCategoryTodo(): void {
    if(this.profileForm.value._id) {
      this.todoService.saveNewToDo(
        {
          _id: this.profileForm.value._id,
          title: '',
          todos: [{
            text: this.profileForm.value.todo,
            isCompleted: false
            }]
          }
      )
    } else {
      this.categoryService.saveNewCategory({
        _id: null,
        title: this.profileForm.value.title,
        todos: [{
            _id: null,
            text: this.profileForm.value.todo,
            isCompleted: false
        }]
      })
    }
    this.profileForm.reset();
    this.isCastomTitle = false;
    this.onNoClick();
  }

  switchCastomTitle(show: boolean): void {
    this.isCastomTitle = show
    setTimeout(()=>{
    this.searchElement.nativeElement.focus();
  },0);  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
