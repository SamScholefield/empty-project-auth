import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log("REGISTERED", value);
      })
      .catch(err => {
        console.log("REGISTRATION ERROR:", err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("ACCESS GRANTED");
      })
      .catch(err => {
        console.log("AUTHENTICATION ERROR:", err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
