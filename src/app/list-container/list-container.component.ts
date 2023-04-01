import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FinalServiceService } from 'src/service/final-service.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  
  constructor(private route: Router, private finalService: FinalServiceService) { }
  
  list_data: any;
  lists: any;
  //  list_data = [
  //   { id: 1, list: "string1" },
  //   { id: 2, list: "string2" }
  // ]

  ngOnInit(): void {
    // this.addCardService._lists.subscribe((list) => {
    //   this.list_data = list;
    // })
    this.finalService.finalList.subscribe((_finallist) => {
      this.lists = _finallist.lists;
    })
  }
 
  onAddlist() {
    this.route.navigate(['add_list']);
  }

}
