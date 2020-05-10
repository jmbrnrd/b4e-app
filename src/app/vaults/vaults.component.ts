import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html',
  styles: []
})
export class VaultsComponent implements OnInit {
  isLoading = true;
  clientVaultClientId = 3;
  privateVaults: Array<any>;
  @Input() loadMessage: string;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadMessage = 'One moment whilst we retrieve your private vaults';
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    this.getVaults();
  }

  getVaults() {
    return new Promise((resolve, reject) => {
      this.api.getAllClientVaults()
        .toPromise()
        .then((res: any) => {
            // Success
            this.privateVaults = [res[1], res[2]];
            resolve();
          },
          err => {
            // Error
            reject(err);
          }
        );
    });
  }
  loadPrivateVaults() {

  }

}
