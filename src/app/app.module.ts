import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { SignalementComponent } from './signalement/signalement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    SignalementComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
