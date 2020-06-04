import { Component, OnInit } from '@angular/core';
import { ApiService, ClientVault, Vault, VaultFile } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VaultService } from './vault.service';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html'
})
export class VaultComponent implements OnInit {
  isLoading = true;
  loadMessage: string;
  contentType: string;
  clientVault: ClientVault;
  vault: Vault;
  vaultAssets: Array<VaultFile>;
  vaultActive = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private vaultService: VaultService
  ) { }

  ngOnInit(): void {
    this.loadMessage = 'Attempting to access vault contents';
    this.clientVault = this.vaultService.getClientVault();
    this.vault = this.vaultService.getCurrentVault();
    this.vaultActive = this.vault.vault_status.toLowerCase() === 'active';
    this.contentType = this.vaultActive ? 'vault' : 'loadbay';
    console.log(this.vault.vault_id);
    this.api.getVaultAssets(this.vault.vault_id).subscribe(assets => {
      this.vaultAssets = assets;
      console.log('Assets', this.vaultAssets);
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

  closeVault() {
    this.vaultService.setClientVault(null);
    this.router.navigate(['vaults']);
  }
}

