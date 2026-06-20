import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  authState
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);

  user$ = authState(this.auth);

login(credentials: { email: string; password: string }) {
  return signInWithEmailAndPassword(
    this.auth,
    credentials.email,
    credentials.password
  );
}

  logout() {
    return signOut(this.auth);
  }

  get currentUser() {
    return this.auth.currentUser;
  }

}