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
    this.clientVault = clientVault;
  }
  getClientVault(): ClientVault {
    return this.clientVault;
  }
}