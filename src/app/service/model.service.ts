import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private database: any;
  // Permet de recuperer les points
  private point: number;


  constructor() {
    this.database = firebase.database();
  }

  // Permet de recupererUser
  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  // Permet d'ajouter un utilisateur dans compte
  ajouterCompteDansBdd( uid ) {
    this.database.ref('compte/' + uid).set({
        pointCompte: 0
    });
  }

  // Permet de savoir si un user est deja creer dans compte
  estDejaDansCompte( uid ) {
    var user = this.database.ref('compte').child( uid );
    user.once('value').then(function(snapshot){
      // Attention exists et pas exist
      var reponse = snapshot.exists();
      if (reponse) {
        this.ajouterPointCompte( snapshot.val() );
      } else {
        this.ajouterCompteDansBdd( uid );
      }
    });
  }

  // Recupere les points d'un user
  getPointBdd( uid ) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/compte/' + uid ).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val().pointCompte);
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // Ajoute des points a un utilisateur
  ajouterPointCompte( uid, points ) {
    if( uid == "null" ) { return; }
    var update = {};
    update['pointCompte'] = points + 5 ;
    this.database.ref('compte/' + uid ).set(update);
    //console.log("oui"); // Pour tester si la méthode fonctionne
  }

  // Ajoute dans l'arbre mego un signalement
  ajouterSignalementMego( dateParam, plaqueParam, uidCompteParam ) {
    if (this.getCurrentUser()){

    }
    var newKeyMego = this.database.ref().child('mego').push().key;
    this.database.ref('/mego/' + newKeyMego ).set({
      dateReport: dateParam,
      plaque: plaqueParam,
      uidCompte: uidCompteParam
    });
  }

}
