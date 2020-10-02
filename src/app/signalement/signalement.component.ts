import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { ModelService } from '../service/model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogSignalementComponent } from '../dialog-signalement/dialog-signalement.component';


@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.scss']
})
export class SignalementComponent implements OnInit {

  cheminImage: "assets/img/cigarette.png";

  formSignalement: FormGroup;
  points: number;

  constructor(private model: ModelService,
     private formBuilder: FormBuilder, public dialog: MatDialog) {
       if (this.model.getCurrentUser() != null) {
         this.model.getPointBdd(this.model.getCurrentUser().uid).then(
           (pnt: number) => {
             this.points = pnt;
           });
       }
  }

  ngOnInit(): void {
    this.initForm();
  }

  // Permet d'initialiser le formulaire et d'imposer les regles de saisie des
  // champs.
  initForm() {
    this.formSignalement = this.formBuilder.group({
      plaque: ['', [Validators.required, Validators.pattern(/[0-9A-Z]{6,9}/)]]
    });
  }

  // Fonction pour signaler et ajouter des points si la personne est connecter
  addSignalement(): void {
    var uid = "null";
    if (this.model.getCurrentUser() != null) {
      uid = this.model.getCurrentUser().uid;
    }
    this.model.ajouterSignalementMego(Date.now(),this.formSignalement.get('plaque').value, uid );
    this.model.ajouterPointCompte( uid , this.points );
    this.dialog.open(DialogSignalementComponent);
  }

}
