import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ApiService, Client } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html'
})
export class VaultsComponent implements OnInit, AfterViewInit {
  isLoading = true;
  client: Client;
  privateVaults: Array<any>;
  elemArray: Array<ElementRef>;
  greetingMessage: string;
  @Input() loadMessage: string;
  @ViewChildren('vaultList') vaultList: QueryList<any>;

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loadMessage = 'One moment whilst we retrieve your private vaults';
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    this.client = this.auth.getCurrentClient();
    console.log(this.client);
    this.getVaults();
  }

  ngAfterViewInit() {
    this.vaultList.changes.subscribe(() => {
      console.log('VaultList', this.vaultList.toArray());
      this.elemArray = this.vaultList.toArray();
    });
  }

  getVaults() {
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
