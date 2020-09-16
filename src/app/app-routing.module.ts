import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SignalementComponent } from './signalement/signalement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CompteComponent } from './compte/compte.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  { path: 'accueil' , component: IndexComponent},
  { path: 'signaler' , component: SignalementComponent },
  { path: 'connexion' , component: ConnexionComponent },
  { path: 'inscription' , component: InscriptionComponent },
  { path: 'compte' , canActivate:[AuthguardService], component: CompteComponent },
  { path: '' , component: IndexComponent }
]; // pour initialiser les routes

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Indique le tab pour les Routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
