import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { card, list, lists ,ids} from 'src/model/list.model'; 

@Injectable({
  providedIn: 'root'
})
  
export class FinalServiceService {

  finalList = new BehaviorSubject<lists>({ lists: [] });
  list_id = new BehaviorSubject<number>(0);

  listid = 0;
  cardid = 0;
  
  id: ids ={listid:0,cardid:0};

  constructor(private route:Router) { }

  ListAdd(list : list) {
    const lists = [...this.finalList.value.lists];
    list.id = this.listid++;
    lists.push(list);
    this.finalList.next({ lists });
    this.route.navigate(['/home']);
    console.log(this.finalList.value);
    const updatedFinalList = JSON.stringify(this.finalList.value);
    localStorage.setItem('lists',updatedFinalList);
  }

  ListDelete(list: list) {
   const lists = [...this.finalList.value.lists];
   const filteredlists = lists.filter((_list) => _list.id != list.id)
    console.log(filteredlists);
    this.finalList.next({ lists: filteredlists });
    const updatedFinalList = JSON.stringify(this.finalList.value);
    localStorage.setItem('lists', updatedFinalList);
  }

  AddCard( card: card)
  {
  console.log(this.list_id);
  const lists = [...this.finalList.value.lists];
  const objlist = lists.filter((_list) => _list.id == this.list_id.value)  ;
  const cards = objlist[0].cards;
  card.id = this.cardid++;
  cards.push(card);
  console.log(this.finalList.value);
  const updatedFinalList = JSON.stringify(this.finalList.value);
  localStorage.setItem('lists', updatedFinalList);
  this.route.navigate(['/home']);
  }

  deleteCard(list_id: number,card: card)
  {
    console.log(list_id);
    const lists = [...this.finalList.value.lists];
    const objlist = lists.filter((_list) => _list.id == list_id);
    const cards = objlist[0].cards;
    const filteredcard = cards.filter((_card) => _card.id != card.id);
    // this.finalList.value.lists.v
    // console.log(cards);
    // console.log(filteredcard);
    objlist[0].cards = filteredcard;
    const list_except_matching_id = lists.filter((_list) => _list.id != list_id);
    list_except_matching_id.push(objlist[0]);
    this.finalList.next({ lists: list_except_matching_id });
    const updatedFinalList = JSON.stringify(this.finalList.value);
    localStorage.setItem('lists', updatedFinalList);
    console.log(objlist);
    // this.finalList.next({});
  }
}

