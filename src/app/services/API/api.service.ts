import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetCategories } from 'src/app/store/actions/category.actions';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  dataUrl = 'http://' + environment.server + ':8080'
  constructor(
    public httpClient: HttpClient,
    private store: Store<IAppState>) { }

  public getString(){
    const res = this.httpClient.get(`/getCategories`, {responseType: 'json'});
    return res
  }

  public addNewCategory(category: any): any {
    const res = this.httpClient.post(`/post`, category);
    res.subscribe((r: any) => {
      if(r.message === 'Post has been submitted successfully!') {
        this.store.dispatch( new GetCategories())
      }
    })
  }

  public addNewTodo(category: any): any {
    const res = this.httpClient.post(`/postTodo`, category);
    res.subscribe((r: any) => {
      if(r.message === 'Post has been submitted successfully!') {
        this.store.dispatch( new GetCategories())
      }
    })
  }

  public checkTodoRequest(category: any): any {
    const res = this.httpClient.post(`/checkTodo`, category);
    res.subscribe((r: any) => {
      if(r.message === 'Post has been submitted successfully!') {
        this.store.dispatch( new GetCategories())
      }
    })
  }
}
