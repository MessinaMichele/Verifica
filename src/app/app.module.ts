import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { nomecomponenteComponent } from './nome-componente/nome-componente.component';
import { veicoloComponent } from './veicolo/veicolo.component';

@NgModule({
  declarations: [
    AppComponent,
    nomecomponenteComponent,
    veicoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
