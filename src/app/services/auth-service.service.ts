import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  public signInWithGoogle() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
      this.router.navigate(['/']);
    }), err => {
      alert(err.message);
    }
  }
}
