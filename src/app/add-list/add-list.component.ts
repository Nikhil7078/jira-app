import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinalServiceService } from 'src/service/final-service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  
  list_form !: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router,private finalservice:FinalServiceService) { }
  
  ngOnInit(): void {
    this.list_form = this.formBuilder.group({
      header: [null],
    })
  }
    handleAdd() : void{
      const dataValue = this.list_form.value; 
      // this.addCardService.handleAddList(dataValue.header);
      const  listobj = { id: 0, name: this.list_form.value.header, cards: [] };
      this.finalservice.ListAdd(listobj); 
      this.route.navigate(['home']);
      // this.
      // console.log(dataValue.header);
  }
}


