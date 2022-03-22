import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {
  titels: DialogData[] = []
  profileForm = new FormGroup({
    title:  new FormControl('', [Validators.required, Validators.minLength(1)]),
    todo: new FormControl('', [Validators.required, Validators.minLength(1)])
  })
  isCastomTitle = false;

  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>) {}
  
  ngOnInit(): void {}
  
  saveTodo(): void {
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
