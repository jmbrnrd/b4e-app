import { Injectable } from '@angular/core';
import { ApiService, Client, ClientVault, Vault } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  client: Client;
  clientVault: ClientVault;
  vault: Vault;
  constructor(
    private api: ApiService
  ) { }

  setClientVault(clientVault) {
    this.setVaultById(clientVault.client_vault_vault_id);
    this.clientVault = clientVault;
  }
  getClientVault(): ClientVault {
    return this.clientVault;
  }
  setVaultById(id) {
    this.api.getVault(id).subscribe(vault => {
      this.vault = vault[0];
      console.log('Vault set to: ' + this.vault);
    });
  }
  getCurrentVault(): Vault {
    return this.vault;
  }
}
