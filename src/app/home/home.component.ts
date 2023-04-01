import { Component, OnInit } from '@angular/core';
import { list, lists } from 'src/model/list.model';
import { FinalServiceService } from 'src/service/final-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  constructor(private finalService : FinalServiceService) { }
  lists!: lists;
  
  ngOnInit(): void {
    // localStorage.clear();
    const json_lists = localStorage.getItem('lists');
    if (json_lists != null)
    {
      this.lists = JSON.parse(json_lists) ;
    }
    this.finalService.finalList.next(this.lists);
  }

}
