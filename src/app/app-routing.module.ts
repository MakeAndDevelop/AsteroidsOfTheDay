import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AsteroidsOfTheDayComponent } from './components';
import { AsteroidDetailComponent } from './components/asteroid-detail/asteroid-detail.component';

const routes: Routes = [
  { path: '', component: AsteroidsOfTheDayComponent },
  { path: 'detail/:id', component: AsteroidDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
