import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string>;
  username!: string;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Return the username of the user logged in
   * @returns string (username)
   */
  getUsername() {
    return this.username;
  }

  /**
   * Try to log the user
   * @param username : string (username to check)
   * @param password : string (password to check)
   * @returns Promise<void>
   */
  signIn(username: string, password: string): Promise<void> {
    const users = [
      { username: 'Administrateur', password: 'fsdfsdqfeqrfergdfgdfgser' },
      { username: 'Toto', password: 'Tata' },
    ];
    return new Promise<void>((resolve, reject) => {
      users.forEach((user) => {
        if (user.username === username) {
          if (user.password === password) {
            this.token.next('k62s887g7h5njb9q44ez');
            this.username = username;
            resolve();
          } else {
            reject('Mot de passe incorrect.');
          }
        }
      });
      reject('Identifiants incorrects.');
    });
  }

  /**
   * Sign out the user
   * @returns Promise<void>
   */
  signOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.token.next('');
      resolve();
    });
  }
}
