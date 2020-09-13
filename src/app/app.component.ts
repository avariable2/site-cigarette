import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titre = 'site-cigarette';

  constructor() {
    const config = {
      apiKey: "AIzaSyAOrDkVfIp844oi2Im8L5qCudqmngfzWIk",
      authDomain: "site-cigarette.firebaseapp.com",
      databaseURL: "https://site-cigarette.firebaseio.com",
      projectId: "site-cigarette",
      storageBucket: "site-cigarette.appspot.com",
      messagingSenderId: "610705375403",
      appId: "1:610705375403:web:897e3b41ffdb572d3477ee",
      measurementId: "G-LTE9LDB5F5"
    };
    firebase.initializeApp(config);
  }

}
