import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe((user) => {
      this.redirection();
    });
  }

  loginGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      this.redirection();
    });
  }

  loginEmail() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider()).then((user) => {
      this.redirection();
    });
  }

  redirection() {
    this.router.navigate(['/base']);
  }

}
