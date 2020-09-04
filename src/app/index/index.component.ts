import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  cheminImage = "assets/img/addict.webp";

  constructor() { }

  ngOnInit(): void {
  }

}
