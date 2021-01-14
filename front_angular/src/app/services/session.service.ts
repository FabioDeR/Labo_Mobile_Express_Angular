import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userBS: BehaviorSubject<{isConnected: boolean}> = new BehaviorSubject<{isConnected: boolean}>(null); 
  private adminBS: BehaviorSubject<{isAdmin: boolean}> = new BehaviorSubject<{isAdmin: boolean}>(null);

  constructor() { }

  subscribe(action: any): Subscription {
    return this.userBS.subscribe(action);
  }

  admin(action: any): Subscription {
    return this.adminBS.subscribe(action);
  }

  login() {
    this.userBS.next({isConnected: true});
    this.adminBS.next({isAdmin: true})
  }

  logout() {
    this.userBS.next(null);
  }
}
