import { AlertController } from '@ionic/angular';
import {
  Auth,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private alertController: AlertController,
    public auth: Auth,
    private router: Router
  ) {}

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
