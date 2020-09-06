import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.scss']
})
export class SignalementComponent implements OnInit {

  cheminImage: "assets/img/cigarette.png";

  constructor() { }

  ngOnInit(): void {
  }

}
