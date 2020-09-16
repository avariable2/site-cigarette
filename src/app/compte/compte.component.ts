import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService, private menu: MenuComponent) {
    this.recupererInfo();
  }

  ngOnInit(): void {
  }

  recupererInfo(){
    this.user = this.authService.donnerUser();
  }

  mettreAjourUser(name,email,photo){
    
  }
}
