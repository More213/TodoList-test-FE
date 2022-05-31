import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
// import { selectCategoryList } from 'src/app/store/selectors/category.selectors';
import { Category } from 'src/app/store/state/categories.state';
import { CategoryService } from 'src/app/services/category/category.service';
import { ToDoService } from 'src/app/services/todo/todo.service';


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
    title: new FormControl('', [Validators.required]),
    todo: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  isCastomTitle = false;

  constructor(
    public dialogRef: MatDialogRef<CreateTodoComponent>,
    private store: Store<IAppState>,
    private categoryService: CategoryService,
    private todoService: ToDoService,
    ) {
      // this.store.pipe(select(selectCategoryList)).subscribe((el) => this.titels = el)
    }

  ngOnInit(): void {
  }
  
  findTitelCategory() {
    // this.store.pipe(select(selectCategoryList)).subscribe((el) => {
    //   let selectedCategory = el.find((i) => i._id === this.profileForm.value._id)
    //   this.profileForm.patchValue({title: selectedCategory?.title})
    // });
  }

  saveCategoryTodo(): void {
    if(this.profileForm.value._id) {
      this.todoService.saveNewToDo(
        {
          _id: this.profileForm.value._id,
          title: this.profileForm.value.title,
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
    if(show) {
      this.profileForm.patchValue({title: ''})
      setTimeout(()=>{
        this.searchElement.nativeElement.focus();
      },0); 
    } else {
      this.findTitelCategory()
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
