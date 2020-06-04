import { Injectable } from '@angular/core';
import { Client, ClientVault, Vault } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  client: Client;
  clientVault: ClientVault;
  vault: Vault;
  constructor() { }

  setClientVault(clientVault) {
    this.setVault(clientVault.client_vault_vault_id);
    this.clientVault = clientVault;
  }
  getClientVault(): ClientVault {
    return this.clientVault;
  }
  setVault(vault) {
    this.vault = vault;
  }
  getVault(): Vault {
    return this.vault;
  }
}
