import { Component, OnInit } from '@angular/core';
import { ApiService, ClientVault, Vault, VaultFile } from '../api.service';
import { VaultService } from './vault.service';

@Component({
  selector: 'app-vault-content',
  templateUrl: './vault-content.component.html'
})
export class VaultContentComponent implements OnInit {
  isLoading = true;
  loadMessage: string;
  clientVault: ClientVault;
  vault: Vault;
  vaultAssets: Array<VaultFile>;
  constructor(
    private api: ApiService, private vaultService: VaultService) { }

  ngOnInit(): void {
    this.loadMessage = 'Retrieving assets...';
    this.clientVault = this.vaultService.getClientVault();
    this.vault = this.vaultService.getVault();
    this.api.getVaultFiles(this.clientVault.client_vault_id).subscribe(files => {
      this.vaultAssets = files;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  getFileType(file): string {
    const type = file.split('.').pop().toLowerCase();
    if (['jpg', 'png', 'bmp', 'tif', 'jpeg'].indexOf(type) > -1) {
      return 'img';
    } else if (['wav', 'mp3'].indexOf(type) > -1) {
      return 'rec';
    } else if (['mov', 'mp4'].indexOf(type) > -1) {
      return 'vid';
    } else {
      return 'doc';
    }
  }
  getAssetInfo(asset): void {
    console.log(asset);
  }
}
