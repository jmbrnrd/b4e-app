import { Component, OnInit } from '@angular/core';
import { ApiService, ClientVault, Vault } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VaultService } from './vault.service';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html'
})
export class VaultComponent implements OnInit {
  isLoading = true;
  loadMessage = '';
  vaultActive = false;
  vaultStatusMsgClosed = 'This VAULT is currently closed.';
  vaultStatusMsgActive = 'This VAULT is currently available.';
  vaultInfoMsgActive = 'Last accessed: ';
  vaultInfoMsgClosed = 'You can upload digital assets to the B4E LoadBay. ' +
  'These assets will be encrypted and transferred to your VAULT, when it next opens.';
  vault: Vault;
  clientVault: ClientVault;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private vaultService: VaultService
  ) { }

  ngOnInit(): void {
    this.loadMessage = 'Authenticating vault access';
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        if (params.has('id')) {
          this.api.getVault(params.get('id')).subscribe(vault => {
            this.vault = vault[0];
            this.vaultActive = this.vault.vault_status.toLowerCase() === 'active';
            this.clientVault = this.vaultService.getClientVault();
            console.log(this.vault);
          });
        } else {
          console.log('No params');
        }
      });
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  closeVault() {
    this.vaultService.setClientVault(null);
    this.router.navigate(['vaults']);
  }
}

