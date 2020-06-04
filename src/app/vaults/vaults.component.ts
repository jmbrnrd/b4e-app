import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ApiService, Client, ClientVault } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { VaultService } from './vault.service';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html'
})
export class VaultsComponent implements OnInit, AfterViewInit {
  isLoading = true;
  accessAllowed = false;
  client: Client;
  privateVaults: Array<ClientVault>;
  elemArray: Array<ElementRef>;
  greetingMessage: string;
  @Input() loadMessage: string;
  @ViewChildren('vaultList') vaultList: QueryList<any>;

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private renderer: Renderer2,
    private router: Router,
    private vaultService: VaultService
  ) { }

  ngOnInit(): void {
    this.loadMessage = 'One moment whilst we retrieve your private vaults';
    setTimeout(() => {
      this.isLoading = false;
      this.dspVaults();
    }, 3000);
    this.client = this.auth.getCurrentClient();
    console.log(this.client);
    this.getVaults();
  }

  ngAfterViewInit() {
    this.vaultList.changes.subscribe(() => {
      // console.log('VaultList', this.vaultList.toArray());
      this.elemArray = this.vaultList.toArray();
    });
  }

  getVaults() {
    if (!!this.client) {
      this.api.getAllClientVaults(this.client.id).subscribe(
        (data) => {
          // console.log(data);
          if (data.length) {
            this.privateVaults = data;
            // tslint:disable-next-line:max-line-length
            this.greetingMessage = `Welcome back ${this.client.client_title} ${this.client.client_surname}, your vaults are listed below:`;

          } else {
            console.log('No vaults found');
          }
        },
        error => console.log(error)
      );
    }
  }

  dspVaults() {
    if (!!this.elemArray) {
      this.elemArray.forEach((elem, index) => {
        setTimeout(() => {
            this.renderer.addClass(elem.nativeElement, 'zoom');
            console.log('Dsp:' + index);
          },
          750 + (100 * index));
      });
    }
  }

  verifyVaultPassword(form) {
    const f = form.value;
    console.log(f.password + ' = ' + this.privateVaults[f.idx].client_vault_password);
    console.log(this.elemArray[f.idx]);
    const thisthis = this;
    if (f.password === this.privateVaults[f.idx].client_vault_password) {
      console.log('Access allowed');
      const aa = () => {
        thisthis.accessAllowed = true;
        setTimeout(go, 500);
      };
      this.vaultService.setClientVault(this.privateVaults[f.idx]);
      const go = () => {
        this.router.navigate(['vault', this.privateVaults[f.idx].client_vault_vault_id]);
      };
      setTimeout(aa, 500);
    } else {
      console.log('Access denied');
      this.denyAccessToVault(this.elemArray[f.idx]);
    }
  }
  denyAccessToVault(elem) {
    console.log(elem);
  }
  accessToVault(idx) {
    const elem = document.getElementById(`input${idx}`);
    elem.focus();
  }

  selectVault(idx) {
    this.elemArray.forEach((elem, index) => {
      if (index === idx) {
        this.renderer.addClass(elem.nativeElement, 'active');
      } else {
        this.renderer.removeClass(elem.nativeElement, 'active');
      }
    });
  }
}
