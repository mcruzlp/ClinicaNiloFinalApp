import { Injectable } from '@angular/core';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password).then(() => true, (error) => {console.error(error); return false;});
  }
  getCurrentUser(): User {
    return getAuth().currentUser;
  }
  logout() {
    signOut(this.auth);
  }
}
