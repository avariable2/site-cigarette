import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

class Signalement {
  constructor(public title) {}
}

@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.scss']
})
export class SignalementComponent implements OnInit {

  cheminImage: "assets/img/cigarette.png";

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
      this.items = firestore.collection('site-cigarette').valueChanges();
      console.log(this.items);
      
  }

  ngOnInit(): void {
  }

  public addSignalement(): void {
  }

}
