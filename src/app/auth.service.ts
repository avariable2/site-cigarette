import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  user: any;

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

  donnerUser() {
    return firebase.auth().currentUser;
  }

  setImageUser() {

  }

  signOutUser() {
    firebase.auth().signOut();
  }

}
