import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { AddListComponent } from './add-list/add-list.component';
import { HomeComponent } from './home/home.component';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'add', component: AddListComponent },
  { path: 'home', component: ListContainerComponent },
  { path: 'add_card', component: AddCardComponent },
  { path: 'add_list', component: AddListComponent },
  { path: '', redirectTo: 'home',pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
