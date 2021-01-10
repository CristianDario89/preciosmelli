import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Reparto de Bidones';

  constructor(public authenticationService: AuthService) { }
  logout() {
    this.authenticationService.logout();
  }
}
