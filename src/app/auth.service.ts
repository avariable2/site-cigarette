import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  constructor() {  }

  creationNouveauUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  connexionUser(email: string, password: string) {
      return new Promise(
        (resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password).then(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        }
      );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}
