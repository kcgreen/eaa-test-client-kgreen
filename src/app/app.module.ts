import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonService } from './person.service';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { PersonComponent } from './person/person.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'person', component: PersonComponent},
  { path: 'person/:id', component: PersonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule,
    RouterModule.forRoot(routes), FormsModule, HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
