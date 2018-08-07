import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AsteroidService } from './shared';
import { AsteroidDetailComponent, AsteroidsOfTheDayComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsOfTheDayComponent,
    AsteroidDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AsteroidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
