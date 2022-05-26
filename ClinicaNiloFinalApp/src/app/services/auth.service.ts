import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      () => true,
      (error) => {
        console.error(error);
        return false;
      }
    );
  }

  getCurrentUser(): User {
    return getAuth().currentUser;
  }

  getUserEmail() {
    return getAuth().currentUser.email;
  }

  logout() {
    signOut(this.auth);
  }

  register(email: string, password: string): Promise<boolean> {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      () => true,
      (error) => {
        console.error(error);
        return false;
      }
    );
  }

  resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }
}
