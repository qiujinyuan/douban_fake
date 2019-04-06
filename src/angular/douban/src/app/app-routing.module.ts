import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
// import { BookComponent } from './book/book/book.component';
import { RegisterComponent } from './register/register.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  // { path: 'book', component: BookComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
