import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Try to log the user
   * @param username username to check
   * @param password password to check
   * @returns Promise<void>
   */
  signIn(username: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (
        username === 'Administrateur' &&
        password === 'fsdfsdqfeqrfergdfgdfgser'
      ) {
        this.token.next('k62s887g7h5njb9q44ez');
        resolve();
      } else {
        reject('Identifiants incorrects.');
      }
    });
  }

  /**
   * Sign out
   * @returns Promise<void>
   */
  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    });
  }
}
