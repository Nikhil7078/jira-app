import { Component, Input, OnInit } from '@angular/core';
import { card } from 'src/model/list.model';
import { FinalServiceService } from 'src/service/final-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
  
export class CardComponent implements OnInit {
  
  constructor( private finalService : FinalServiceService) { }

  @Input() card_data!: card
  @Input() list_id!: number;
  
   value:any;

  ngOnInit(): void {
  }

  onDelete() {
    this.finalService.deleteCard(this.list_id, this.card_data);
  }

}
