
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }