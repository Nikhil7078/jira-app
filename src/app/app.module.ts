import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AddListComponent } from './add-list/add-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCardComponent } from './add-card/add-card.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    ListContainerComponent,
    AddListComponent,
    AddCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
