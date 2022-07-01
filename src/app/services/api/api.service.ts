import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/store/state/categories.state';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  dataUrl = 'http://' + environment.server + ':3000'
  constructor(
    public httpClient: HttpClient,
  ) { }

  public getString(){
    const res = this.httpClient.get(`${this.dataUrl}/getCategories`, {responseType: 'json'});
    return res
  }

  public addNewCategory(category: Category){
    const res = this.httpClient.post(`${this.dataUrl}/post`, category)
    console.log(res)
    return res
  }

  public addNewTodo(category: Category) {
    const res = this.httpClient.post(`${this.dataUrl}/postTodo`, category);
    return res
  }

  public checkTodoRequest(category: any) {
    const res = this.httpClient.post(`${this.dataUrl}/checkTodo`, category);
    return res
  }
}


