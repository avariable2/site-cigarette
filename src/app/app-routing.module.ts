import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'accueil' , component: IndexComponent },
  { path: '' , component: IndexComponent }
]; // pour initialiser les routes

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Indique le tab pour les Routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
