import { Component, EventEmitter, OnInit, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData, TodoData } from '../../app.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  // selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {
  titels: DialogData[] = []
  title = new FormControl('')
  todo = new FormControl('')
  
  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>) { }
  
  ngOnInit(): void {}
  saveTodo(): void {
    console.log({
      title: this.title.value,
      todo: this.todo.value
    })
    this.title.reset();
    this.todo.reset();
    this.onNoClick();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
// export class SelectTitelsList {
//   titels: DialogData[] = []
// }