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
import { CompteComponent } from './compte/compte.component';

// Import pour la connction a la BDD firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { ModelService } from './service/model.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogSignalementComponent } from './dialog-signalement/dialog-signalement.component';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    SignalementComponent,
    ConnexionComponent,
    InscriptionComponent,
    CompteComponent,
    DialogSignalementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    AuthService,
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
