import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { ModelService } from '../service/model.service';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  user: any;
  points: number;

  constructor(private authService: AuthService, private model: ModelService) {
    this.user = this.authService.donnerUser();
    this.model.getPointBdd(this.user.uid).then(
      (pnt: number) => {
        this.points = pnt;
      }
    );
  }

  ngOnInit(): void {
  }

  changerUsername(username: string) {
    if (username == this.user.displayName) { return;}
    this.user.updateProfile(
    {
      displayName: username
    }
    ).then(
      function(){
        //console.log("update reussi");
      }
    ).catch(
      function(error){
        //console.log("error");
      }
    );
  }
}
