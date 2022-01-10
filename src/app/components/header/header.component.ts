import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // is the user logged in?
  isConnected!: boolean;

  // we create an observer to observe the observable
  tokenSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Initialization tasks
   */
  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe((token) => {
      this.isConnected = !!token;
    });
  }

  /**
   * Function called when the disconnect button is clicked
   */
  onClickSignout() {
    this.authService.signOut().then(() => {
      this.router.navigateByUrl('');
    });
  }

  /**
   * Custom cleanup that needs to occur when the instance is destroyed
   */
  ngOnDestroy(): void {
    // we stop observing the token
    this.tokenSub.unsubscribe();
  }
}
