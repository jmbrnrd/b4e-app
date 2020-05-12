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
    if (this.auth.isLoggedIn()) {
      this.scanSuccess = true;
      this.scanStatusMsg = 'ACCESS AUTHORISED';
      this.nextScreen = 'vaults';
    } else {
      this.scanSuccess = false;
      this.scanStatusMsg = 'ACCESS DENIED';
      this.nextScreen = 'login';
    }
    setTimeout(() => {
      this.router.navigate([this.nextScreen]);
    }, 1000);
  }

}
