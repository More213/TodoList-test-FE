import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API/api.service';

interface ICatgory {
   _id: string,
   title: String,
   todos: [{
       _id: string,
       text: String,
       isCompleted: Boolean
  }]
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  res: ICatgory[] = [];

  constructor(private Api: APIService) { }

  ngOnInit(): void {
    this.getAllCategories();
  
  }

  getAllCategories(): void {
    this.Api.getString().subscribe((response: any) => 
    this.res = response
    );
  }


}
