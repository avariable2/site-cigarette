import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  errorMessage: string;
  user: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private model: ModelService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.inscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      username: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,16}/)]],

    });
  }

  onSubmit() {
    const name = this.inscriptionForm.get('username').value;
    const email = this.inscriptionForm.get('email').value;
    const password = this.inscriptionForm.get('mdp').value;

    this.authService.creationNouveauUser(email, password).then(
      () => {
        this.setUserName(name);
        this.model.ajouterCompteDansBdd(this.user.uid);
        this.router.navigate(['/accueil']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  setUserName(name: string) {

    this.user = this.authService.donnerUser();

    this.user.updateProfile(
    {
      displayName: name
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
