import { Injectable } from '@angular/core';
import { Client } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentClient: Client;

  constructor(
  ) {}
  isLoggedIn(): boolean {
    return !!this.currentClient;
  }
  setCurrentClient(client: Client) {
    this.currentClient = client;
  }
  logout(): void {
    this.currentClient = null;
    console.log(`CurrentClient=${this.currentClient}`);
  }
  getCurrentClient() {
    return this.currentClient;
  }
}
