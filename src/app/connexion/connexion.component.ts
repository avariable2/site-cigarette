import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  // initialiser le formulaire et les regex
  initForm() {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  // Permet de se connecter 
  onSubmit() {
    const email = this.connexionForm.get('email').value;
    const password = this.connexionForm.get('mdp').value;

    this.authService.connexionUser(email, password).then(
      () => {
        this.router.navigate(['/accueil']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
