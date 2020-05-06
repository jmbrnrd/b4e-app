import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor( private apiService: ApiService) {
    this.apiService.getClients().subscribe(
      (res) => {
        console.log('Clients', res);
      }
    );
    this.apiService.getClientVaults().subscribe(
      (res) => {
        console.log('Client Vaults', res);
      }
    );
    this.apiService.getVaults().subscribe(
      (res) => {
        console.log('Vaults', res);
      }
    );
  }
}
