import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetCategories } from 'src/app/store/actions/category.actions';
import { MessageService } from '../message/message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ICategoryState } from 'src/app/store/state/categories.state';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  dataUrl = 'http://' + environment.server + ':3000'
  constructor(
    public httpClient: HttpClient,
    private store: Store<IAppState>,
    private messageService: MessageService) { }


  public getString(){
    const res = this.httpClient.get(`/getCategories`, {responseType: 'json'});
    return res
  }

  public addNewCategory(category: any):any{
    const res = this.httpClient.post(`/post`, category)
    return res
  }

  public addNewTodo(category: any): any {
    const res = this.httpClient.post(`/postTodo`, category);
    return res
  }

  public checkTodoRequest(category: any): any {
    const res = this.httpClient.post(`/checkTodo`, category);
    return res
  }
  
}


