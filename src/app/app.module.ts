import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
