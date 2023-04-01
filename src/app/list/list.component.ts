import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{list} from 'src/model/list.model'
import { Router } from '@angular/router';
import { FinalServiceService } from 'src/service/final-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private finalservice : FinalServiceService,private route : Router) { }


  ngOnInit(): void {
      //  console.log(_list.cards);
  }

  @Input() list!: list;

  onAdd() {
    this.finalservice.list_id.next(this.list.id);
    this.route.navigate(['/add_card']);
  }
  onDelete() {
    this.finalservice.ListDelete(this.list);
  }
 
}
