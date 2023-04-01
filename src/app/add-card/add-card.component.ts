import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { FinalServiceService } from 'src/service/final-service.service';
import { card, list } from "src/model/list.model";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

constructor(private finalservice:FinalServiceService,private formBuilder:FormBuilder,private route:Router) { }
 
  card_form: any;
  flag = true;

  ngOnInit(): void {
    this.card_form = this.formBuilder.group({
      header: [null],
      desc:[null],
      date: [null],
    })
  }

  Card!: card;
  list!: list;

  add_card()
  { 
     const list = this.card_form.value;
    this.finalservice.AddCard(list);
     this.route.navigate(['/home']);
  }
}

