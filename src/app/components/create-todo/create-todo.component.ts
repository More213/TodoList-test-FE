import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/API/api.service';


@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {
  titels =[{_id: '624c973cd867a4e8623c39de', title: 'eee'}]

    profileForm = new FormGroup({
    _id: new FormControl(null),
    title: new FormControl(''),
    todo: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  isCastomTitle = false;

  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>,
    private Api: APIService) {}
  
  ngOnInit(): void {}
  
  subNewCategory() {
    this.Api.addNewCategory({
      _id: null,
      title: 'wewfewwe',
      todos: [{
          _id: null,
          text: 'Strewrwring',
          isCompleted: false
      }]
  })
  }

  saveCategoryTodo(): void {
    if(this.profileForm.value._id) {
      this.Api.addNewTodo({
        _id: this.profileForm.value._id,
        title: this.titels.find((el) => el._id === this.profileForm.value._id),
        todos: [{
            text: this.profileForm.value.todo,
            isCompleted: false
        }]
    })
    } else {
      this.Api.addNewCategory({
        _id: null,
        title: this.profileForm.value.title,
        todos: [{
            id: null,
            text: this.profileForm.value.todo,
            isCompleted: false
        }]
    })

    }
    this.profileForm.reset();
    this.isCastomTitle = false;
    this.onNoClick();
  }

  saveTodo(): void {
    this.Api.addNewCategory({
      _id: null,
      title: this.profileForm.value.title,
      todos: [{
          id: null,
          text: this.profileForm.value.todo,
          isCompleted: false
      }]
  })
    this.profileForm.reset();
    this.isCastomTitle = false;
    this.onNoClick();
  }

  switchCastomTitle(): void {
    this.isCastomTitle = true
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
