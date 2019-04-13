import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// 路由器动画模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieComponent } from './movie/movie.component';
// import { MenuComponent } from './menu/menu.component';
// import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
// import { ExerciseComponent } from './exercise/exercise.component';
import { MessagesComponent } from './common/messages/messages.component';

import { BookModule } from './book/book.module';
import { MyCommonModule } from './common/my-common.module';
import { ExerciseModule } from './exercise/exercise.module';
// import { Routes, RouterModule } from '@angular/router';

// router 也可以直接配置在 module 中
// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'movie', component: MovieComponent },
//   { path: 'book', component: BookComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'exercise', component: ExerciseComponent },
//   { path: '**', redirectTo: 'home', pathMatch: 'full' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    // MenuComponent,
    // BookComponent,
    HomeComponent,
    RegisterComponent,
    // ExerciseComponent,
    MessagesComponent,
    // BookDetailComponent,
    // SizerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes, {enableTracing: true}),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BookModule,
    MyCommonModule,
    ExerciseModule,
    // 通配符路由需要放在自定义模块（带有路由声明）后面
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
