import { HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { APIService } from './services/API/api.service';


export interface TodoData {
  id?: string,
  text: string,
  isCompleted: boolean
}

export interface DialogData {
  id?: string,
  title: string,
  todos: TodoData[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(
    public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
