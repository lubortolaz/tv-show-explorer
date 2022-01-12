import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // login informations
  username!: string;
  password!: string;

  // handle error messages
  errMsg!: string;

  constructor(private authService: AuthService, private router: Router) {}

  // initialization tasks
  ngOnInit(): void {
    // prefill the fields for development tests
    this.username = 'Administrateur';
    this.password = 'azerty';
  }

  /**
   * Function called when the user validates the form
   */
  onSubmitAuthForm(): void {
    // reset error message
    this.errMsg = '';

    this.authService
      .signIn(this.username, this.password)
      .then(() => {
        // if connection ok, redirect user to tv-shows list
        this.router.navigateByUrl('/tvshows');
      })
      .catch((errMsg: string) => {
        // else, show the error message returned
        this.errMsg = errMsg;
      });
  }
}
