import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { MessagesComponent } from './common/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MenuComponent,
    BookComponent,
    HomeComponent,
    RegisterComponent,
    ExerciseComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
