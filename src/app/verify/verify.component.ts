import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styles: []
})
export class VerifyComponent implements OnInit {
  isLoading = true;
  @Input() loadMessage: string;
  scanStatusMsg = 'AWAITING FINGERPRINT SCAN';
  scanSuccess = false;
  nextScreen: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMessage = 'Authenticating login details...';
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  scanComplete() {
    this.scanSuccess = true;
    this.scanStatusMsg = 'SUCCESSFUL SCAN';
    setTimeout(() => {
      if (this.auth.isLoggedIn()) {
        this.nextScreen = 'vaults';
      } else {
        this.nextScreen = 'login';
      }
      this.router.navigate([this.nextScreen]);
    }, 1000);
  }

}
