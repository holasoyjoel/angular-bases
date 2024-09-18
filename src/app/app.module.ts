// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

// Components
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
