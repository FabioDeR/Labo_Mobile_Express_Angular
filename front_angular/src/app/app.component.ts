import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'labo-forum-mobile2020';
  isConnected;
  isAdmin;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.login();
    this.sessionService.subscribe(user => this.isConnected = user != null);
    this.sessionService.admin(item => this.isAdmin = item.isAdmin);
  }

  login() {
    console.log("Login OK");
    this.sessionService.login();
  }

  logout() {
    console.log("Logout OK");
    this.sessionService.logout();
  }
}
