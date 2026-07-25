import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  authState
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  setDoc
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);
  private firestore = inject(Firestore);

  user$ = authState(this.auth);

login(credentials: { email: string; password: string }) {
  return signInWithEmailAndPassword(
    this.auth,
    credentials.email,
    credentials.password
  );
}
register(email: string, password: string) {
  return createUserWithEmailAndPassword(
    this.auth,
    email,
    password
  );
}

resetPassword(email: string) {
  return sendPasswordResetEmail(
    this.auth,
    email
  );
}

  logout() {
    return signOut(this.auth);
  }

  get currentUser() {
    return this.auth.currentUser;
  }

}