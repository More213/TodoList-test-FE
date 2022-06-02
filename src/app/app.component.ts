import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';


export interface TodoData {
  _id?: string,
  text: string,
  isCompleted: boolean
}

export interface DialogData {
  _id?: string,
  title: string,
  todos: TodoData[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
