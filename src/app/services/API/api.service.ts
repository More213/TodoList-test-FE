import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  dataUrl = 'http://' + environment.server + ':3000'
  constructor(public httpClient: HttpClient) { }

  public getString() {
    const res = this.httpClient.get(`${this.dataUrl}`, {responseType: 'json'});
    return res
  }

  public addNewCategory(category: any) {
    const res = this.httpClient.post(`${this.dataUrl}/post`, category);
    res.subscribe(r => console.log(r))
  }
}
